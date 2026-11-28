// Server-side Tentary entitlement adapter. Never ship this module or its key to a browser.
export const PRODUCT_ID = 360594;
export const normalizeEmail = value => typeof value === 'string' ? value.trim().toLowerCase() : '';
const timestamp = value => typeof value === 'string' && value ? Date.parse(value) : NaN;
const iso = value => Number.isFinite(value) ? new Date(value).toISOString() : null;
export function entitlement(order, email, now = Date.now()) {
  if (!order || normalizeEmail(order.buyer_data?.email) !== normalizeEmail(email) ||
      order.product?.id !== PRODUCT_ID || order.billing !== 'subscription' ||
      order.status !== 'paid' || order.has_access !== true || order.chargeback === true ||
      !['none','partial'].includes(order.refund) || !order.subscription) return null;
  const sub = order.subscription;
  if (!['active','cancelled','processing','pending'].includes(sub.status)) return null;
  if (order.access_starts_at && !(timestamp(order.access_starts_at) <= now)) return null;
  const payments = Array.isArray(sub.payments) ? sub.payments : [];
  const paid = payments.filter(p => p.status === 'paid' && timestamp(p.created_at) <= now)
    .sort((a,b) => timestamp(b.created_at)-timestamp(a.created_at));
  // A paid order alone is insufficient: verify an actual unrefunded subscription payment.
  if (!paid.length || sub.interval_months !== 1 || paid[0].chargeback === true ||
      !(Number(paid[0].amount)>Number(paid[0].refunded_amount||0))) return null;
  const last = new Date(paid[0].created_at);
  const year = last.getUTCFullYear(), month = last.getUTCMonth()+1, day = last.getUTCDate();
  const lastDay = new Date(Date.UTC(year, month+1, 0)).getUTCDate();
  const end = new Date(last);
  end.setUTCDate(1); end.setUTCMonth(month); end.setUTCDate(Math.min(day,lastDay));
  const limits = [end.getTime()];
  for (const value of [order.access_ends_at, sub.ends_at]) {
    if (value != null) { const at=timestamp(value); if (!Number.isFinite(at)) return null; limits.push(at); }
  }
  const until = Math.min(...limits);
  if (until <= now) return null;
  return {orderId:order.id, paidUntil:iso(until), cancelAtPeriodEnd:sub.status==='cancelled'||!!sub.ends_at};
}

export async function findEntitlement(email, key, fetcher = fetch, now = Date.now()) {
  let cursor = null, best = null;
  const seen = new Set();
  const signal = AbortSignal.timeout(12000);
  async function get(url) {
    const response = await fetcher(url, {headers:{Authorization:`Bearer ${key}`},signal,redirect:'error'});
    if (!response.ok) throw new Error(`tentary_http_${response.status}`);
    return response.json();
  }
  // Search is a substring filter. Recheck exact e-mail and product on every detail response.
  for (let page=0; page<5; page++) {
    const url=new URL('https://api.tentary.com/v1/orders');
    url.searchParams.set('product_id',String(PRODUCT_ID)); url.searchParams.set('billing','subscription');
    url.searchParams.set('search',normalizeEmail(email).slice(0,100)); url.searchParams.set('limit','50');
    if(cursor)url.searchParams.set('cursor',cursor);
    const data=await get(url.href);
    if(!Array.isArray(data.orders))throw new Error('tentary_invalid_orders');
    for(const item of data.orders) {
      if(normalizeEmail(item.buyer_data?.email)!==normalizeEmail(email)||item.product?.id!==PRODUCT_ID)continue;
      if(!Number.isSafeInteger(item.id)||item.id<1)throw new Error('tentary_invalid_order_id');
      const detail=await get(`https://api.tentary.com/v1/orders/${item.id}`);
      if(detail.id!==item.id)throw new Error('tentary_order_mismatch');
      const valid=entitlement(detail,email,now);
      if(valid&&(!best||valid.paidUntil>best.paidUntil))best=valid;
    }
    if(data.next_cursor==null)return best;
    if(typeof data.next_cursor!=='string'||seen.has(data.next_cursor))throw new Error('tentary_invalid_cursor');
    cursor=data.next_cursor; seen.add(cursor);
  }
  throw new Error('tentary_pagination_limit');
}

// Full, bounded snapshot for the administrator: discover purchases before first app login.
export async function listEntitlements(key, fetcher=fetch, now=Date.now()) {
  const result=new Map(), seen=new Set(); let cursor=null;
  const signal=AbortSignal.timeout(20000);
  async function get(url){
    const response=await fetcher(url,{headers:{Authorization:`Bearer ${key}`},signal,redirect:'error'});
    if(!response.ok)throw new Error(`tentary_http_${response.status}`);
    return response.json();
  }
  for(let page=0;page<20;page++){
    const url=new URL('https://api.tentary.com/v1/orders');
    url.searchParams.set('product_id',String(PRODUCT_ID));url.searchParams.set('billing','subscription');url.searchParams.set('limit','50');
    if(cursor)url.searchParams.set('cursor',cursor);
    const data=await get(url.href);
    if(!Array.isArray(data.orders))throw new Error('tentary_invalid_orders');
    for(const item of data.orders){
      const email=normalizeEmail(item.buyer_data?.email);
      if(item.product?.id!==PRODUCT_ID||item.billing!=='subscription'||email.length>254||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))continue;
      if(!result.has(email))result.set(email,null);
      if(item.status!=='paid'||!item.has_access||item.refund==='full')continue;
      if(!Number.isSafeInteger(item.id)||item.id<1)throw new Error('tentary_invalid_order_id');
      const detail=await get(`https://api.tentary.com/v1/orders/${item.id}`);
      if(detail.id!==item.id)throw new Error('tentary_order_mismatch');
      const paid=entitlement(detail,email,now),previous=result.get(email);
      if(paid&&(!previous||paid.paidUntil>previous.paidUntil))result.set(email,paid);
    }
    if(data.next_cursor==null)return result;
    if(typeof data.next_cursor!=='string'||seen.has(data.next_cursor))throw new Error('tentary_invalid_cursor');
    cursor=data.next_cursor;seen.add(cursor);
  }
  throw new Error('tentary_pagination_limit');
}

export function withTentary(store, pool, options={}) {
  const key = options.key ?? Deno.env.get('TENTARY_API_KEY');
  const pending = new Map();
  let lastAdminSync=0,adminSyncPromise=null;
  let syncStatus={state:key?'not_checked':'not_configured',checkedAt:null};
  async function writePaid(db,email,paid){
    await db.query("SELECT pg_advisory_xact_lock(hashtextextended('liora-member:' || $1::text,0))",[email]);
    const params=[email,paid?.paidUntil||null,paid?.orderId||null,paid?.cancelAtPeriodEnd||false];
    const updated=await db.query(`UPDATE liora_lab_access.access_members SET tentary_paid_until=$2,
      tentary_checked_at=now(),tentary_order_id=coalesce($3,tentary_order_id),tentary_cancel_at_period_end=$4 WHERE email=$1`,params);
    if(!updated.rowCount&&paid)await db.query(`INSERT INTO liora_lab_access.access_members
      (email,enabled,billing_override,trial_eligible,course_member,tentary_paid_until,tentary_checked_at,tentary_order_id,tentary_cancel_at_period_end)
      SELECT $1,true,false,false,false,$2,now(),$3,$4 WHERE NOT EXISTS(SELECT 1 FROM liora_lab_access.access_members WHERE email=$1)`,params);
  }
  async function syncAdmin(){
    if(!key)return;
    if(adminSyncPromise)return adminSyncPromise;
    if(Date.now()-lastAdminSync<180000)return;
    adminSyncPromise=(async()=>{
      try{
        const paidByEmail=await listEntitlements(key,options.fetcher);
        const existing=await pool.query('SELECT email FROM liora_lab_access.access_members WHERE tentary_order_id IS NOT NULL');
        for(const row of existing.rows)if(!paidByEmail.has(row.email))paidByEmail.set(row.email,null);
        // Apply only a complete verified snapshot. API failures never partially revoke accounts.
        if(paidByEmail.size){
          const db=await pool.connect();
          try{await db.query('BEGIN');for(const [email,paid] of [...paidByEmail].sort(([a],[b])=>a.localeCompare(b)))await writePaid(db,email,paid);await db.query('COMMIT');}
          catch(error){await db.query('ROLLBACK');throw error;}finally{db.release();}
        }
        lastAdminSync=Date.now();syncStatus={state:'connected',checkedAt:new Date(lastAdminSync).toISOString()};
      }catch{lastAdminSync=Date.now()-150000;syncStatus={state:'unavailable',checkedAt:syncStatus.checkedAt};console.warn(JSON.stringify({event:'liora-tentary',stage:'admin_sync_unavailable'}));}
    })();
    try{await adminSyncPromise;}finally{adminSyncPromise=null;}
  }
  async function sync(email) {
    email=normalizeEmail(email);
    if(!key)return;
    if(pending.has(email))return pending.get(email);
    const work=(async()=>{
      const {rows}=await pool.query(`SELECT enabled,billing_override,trial_eligible,trial_started_at,trial_until,tentary_checked_at FROM liora_lab_access.access_members WHERE email=$1`,[email]);
      const row=rows[0];
      // Manual blocks always win. Free and lifetime access do not need external billing checks.
      if(row&&(!row.enabled||row.billing_override||(row.trial_eligible&&(!row.trial_started_at||new Date(row.trial_until)>new Date()))))return;
      if(row?.tentary_checked_at&&Date.now()-new Date(row.tentary_checked_at).getTime()<180000)return;
      let paid;
      try {paid=await findEntitlement(email,key,options.fetcher);}
      catch {console.warn(JSON.stringify({event:'liora-tentary',stage:'verification_unavailable'}));return;}
      if(!row&&!paid)return;
      // access_members is an updatable view. Serialize with the existing admin member lock.
      const db=await pool.connect();
      try {
        await db.query('BEGIN');
        await writePaid(db,email,paid);
        await db.query('COMMIT');
      } catch(error) {await db.query('ROLLBACK');throw error;} finally {db.release();}
    })();
    pending.set(email,work);
    try{return await work;}finally{pending.delete(email);}
  }
  return {...store,
    async signIn(email,session){if(session.kind!=='admin')await sync(email);return store.signIn(email,session);},
    async credential(hash,kind){
      if(hash&&kind!=='admin'){
        const {rows}=await pool.query(`SELECT member_email FROM liora_lab_access.credentials WHERE token_hash=$1 AND kind=$2 AND expires_at>now()`,[hash,kind]);
        if(rows[0]?.member_email)await sync(rows[0].member_email);
      }
      return store.credential(hash,kind);
    },
    async accessInfo(email){
      const info=await store.accessInfo(email); if(!info)return info;
      const {rows}=await pool.query(`SELECT tentary_paid_until AS "paidUntil",tentary_cancel_at_period_end AS "cancelAtPeriodEnd",tentary_checked_at AS "checkedAt" FROM liora_lab_access.access_members WHERE email=$1`,[email]);
      const paid=rows[0];
      if(paid?.checkedAt&&Date.now()-new Date(paid.checkedAt).getTime()<900000&&paid.paidUntil&&(!info.paidUntil||new Date(paid.paidUntil)>new Date(info.paidUntil)))
        return {...info,paidUntil:paid.paidUntil,cancelAtPeriodEnd:paid.cancelAtPeriodEnd,billingProvider:'tentary'};
      return info;
    },
    async list(){
      await syncAdmin();
      const members=await store.list();
      const {rows}=await pool.query(`SELECT email,tentary_paid_until AS "tentaryPaidUntil",tentary_checked_at AS "tentaryCheckedAt",tentary_cancel_at_period_end AS "tentaryCancelAtPeriodEnd" FROM liora_lab_access.access_members WHERE tentary_order_id IS NOT NULL`);
      const byEmail=new Map(rows.map(row=>[row.email,row]));
      return members.map(row=>({...row,...byEmail.get(row.email)}));
    },
    billingSyncInfo(){return {...syncStatus};}
  };
}
