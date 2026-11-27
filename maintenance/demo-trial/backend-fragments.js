async function lioraDemoHandle(u, request, tokenHash, store, respond, invalid, unauthorized, limited, allow, password, adminEmail) {
  if (u === '/demo/login') {
    const data = await re(request,4096);
    if (!data || typeof data.email !== 'string') return invalid();
    const email = G(data.email);
    if (!await allow('demo-login',D(email)?email:null,6,200)) return limited();
    if (!D(email) || !await password(data.password)) return respond({error:'Anmeldung nicht möglich. Prüfe E-Mail-Adresse, Freischaltung und Kundenpasswort.'},401);
    const session = ve('demo',72*3600);
    const access = await store.demoLogin(email,session);
    if (!access) return respond({error:'Deine Demo ist noch nicht freigeschaltet oder bereits abgelaufen. Bitte wende dich an Nyra.',code:'DEMO_UNAVAILABLE'},403);
    return respond({token:session.token,...access});
  }
  if (u.startsWith('/admin/demo/')) {
    if ((await store.credential(tokenHash,'admin'))?.email !== adminEmail) return unauthorized();
    if (u === '/admin/demo/list') return respond({entries:await store.demoList()});
    if (u !== '/admin/demo/change') return respond({error:'Nicht gefunden.'},404);
    const data=await re(request,4096);
    if (!data || typeof data.email !== 'string' || !['approve','block'].includes(data.action)) return invalid();
    const email=G(data.email);
    if (!D(email) || email===adminEmail) return invalid();
    return await store.demoChange(email,data.action,tokenHash,adminEmail) ? respond({ok:true}) : unauthorized();
  }
  if (u === '/demo/logout') { await store.demoLogout(tokenHash); return respond({ok:true}); }
  const access=await store.demoSession(tokenHash);
  if (!access) return respond({error:'Deine Demo-Anmeldung ist abgelaufen oder wurde gesperrt.',code:'DEMO_UNAVAILABLE'},401);
  if (u === '/demo/session') return respond(access);
  if (u !== '/demo/prompt') return respond({error:'Nicht gefunden.'},404);
  if (!await allow('demo-prompt',access.email,30,2000)) return limited();
  const input=await re(request,360000);
  if (!ln(input)) return invalid();
  const brief={...input,kind:'talk',mode:'inspire',people:'1',idea:'',scriptText:'',extra:'',ciAudience:'',keyframeRef:'unsure',cameraRoll:false,model:input.model==='omni'?'omni':'kling',personReferences:input.personReferences.slice(0,1)};
  return respond({prompt:we(brief,[])});
}

// Methods are inserted inside Ke's existing store object; reuse its transaction and admin validation.
const demoStoreMethods = `
async demoLogin(email,session){return n(async db=>{
 const found=await db.query('SELECT email,enabled,started_at,expires_at,clock_timestamp() AS current_time FROM liora_lab_access.demo_access WHERE email=$1 FOR UPDATE',[email]);
 const row=found.rows[0];
 if(!row || !row.enabled || (row.expires_at && new Date(row.expires_at)<=new Date(row.current_time)))return null;
 const updated=await db.query(\`UPDATE liora_lab_access.demo_access SET started_at=coalesce(started_at,statement_timestamp()),expires_at=coalesce(expires_at,statement_timestamp()+interval '72 hours') WHERE email=$1 RETURNING email,started_at AS "startedAt",expires_at AS "expiresAt"\`,[email]);
 await db.query('INSERT INTO liora_lab_access.demo_sessions(token_hash,email) VALUES($1,$2)',[session.hash,email]);
 return updated.rows[0];
});},
async demoSession(hash){if(!hash)return null;const {rows}=await e.query(\`SELECT d.email,d.started_at AS "startedAt",d.expires_at AS "expiresAt" FROM liora_lab_access.demo_sessions s JOIN liora_lab_access.demo_access d USING(email) WHERE s.token_hash=$1 AND d.enabled AND d.expires_at>clock_timestamp()\`,[hash]);return rows[0]||null;},
async demoLogout(hash){if(hash)await e.query('DELETE FROM liora_lab_access.demo_sessions WHERE token_hash=$1',[hash]);},
async demoList(){const {rows}=await e.query(\`SELECT email,enabled,started_at AS "startedAt",expires_at AS "expiresAt", CASE WHEN NOT enabled THEN 'blocked' WHEN expires_at<=clock_timestamp() THEN 'expired' WHEN started_at IS NULL THEN 'ready' ELSE 'active' END AS status FROM liora_lab_access.demo_access ORDER BY email\`);return rows;},
async demoChange(email,action,hash,adminEmail){return n(async db=>{
 const admin=await t(db,hash,'admin');if(!admin || admin.email!==adminEmail || !await r(db,admin.email,true) || !await t(db,hash,'admin'))return false;
 await db.query(\`INSERT INTO liora_lab_access.demo_access(email,enabled) VALUES($1,$2) ON CONFLICT(email) DO UPDATE SET enabled=excluded.enabled\`,[email,action==='approve']);
 if(action==='block')await db.query('DELETE FROM liora_lab_access.demo_sessions WHERE email=$1',[email]);
 return true;
});},
`;
