export function initDemoAdmin(panel,request){
 let section=panel.querySelector('[data-demo-admin]');
 if(section)return;
 section=document.createElement('section');section.dataset.demoAdmin='';section.className='admin-control';section.style.marginTop='28px';
 section.innerHTML='<h2>Demo-Zugänge · 3 Tage</h2><p>Gib die E-Mail nach dem Bezug der Demo frei. Die 72 Stunden beginnen beim ersten erfolgreichen Demo-Login. Erneutes Freigeben startet die Zeit nicht neu. Demo-Zugänge verändern weder Kursmitgliedschaft noch App-Abo.</p><form><label>E-Mail für die Demo<input name="email" type="email" autocomplete="off" maxlength="254" required></label><button class="primary" type="submit">Demo freischalten</button></form><button type="button" data-demo-refresh>Demo-Liste aktualisieren</button><p role="status" aria-live="polite"></p><ul aria-label="Demo-Zugänge"></ul>';
 panel.append(section);
 const form=section.querySelector('form'),status=section.querySelector('[role=status]'),list=section.querySelector('ul'),refresh=section.querySelector('[data-demo-refresh]');
 const date=value=>new Intl.DateTimeFormat('de-DE',{dateStyle:'medium',timeStyle:'short',timeZone:'Europe/Zurich'}).format(new Date(value));
 async function load(){
  refresh.disabled=true;
  try{const {entries}=await request('/admin/demo/list');list.replaceChildren();if(!entries.length){const li=document.createElement('li');li.textContent='Noch keine Demo-Zugänge freigegeben.';list.append(li);}
   for(const item of entries){const li=document.createElement('li'),name=document.createElement('strong'),info=document.createElement('p'),button=document.createElement('button');name.textContent=item.email;
    info.textContent=item.status==='blocked'?'Gesperrt':item.status==='expired'?'Testzeit abgelaufen':item.status==='ready'?'Freigegeben · 72 Stunden starten beim ersten Login':'Demo aktiv';
    if(item.expiresAt)info.textContent+=' · Ende: '+date(item.expiresAt)+' Uhr';
    button.type='button';button.textContent=item.enabled?'Demo sperren':'Demo wieder freigeben';button.disabled=item.status==='expired'||(item.expiresAt&&Date.parse(item.expiresAt)<=Date.now());
    button.onclick=async()=>{button.disabled=true;try{await request('/admin/demo/change',{email:item.email,action:item.enabled?'block':'approve'});await load();status.textContent='Demo-Zugang aktualisiert.';}catch(error){status.textContent=error.message;button.disabled=false;}};
    li.append(name,info,button);list.append(li);
   }
  }catch(error){status.textContent=error.message;}finally{refresh.disabled=false;}
 }
 form.onsubmit=async event=>{event.preventDefault();const button=form.querySelector('button');button.disabled=true;try{await request('/admin/demo/change',{email:form.elements.email.value,action:'approve'});form.reset();await load();status.textContent='Freischaltung gespeichert. Eine bereits gestartete Testzeit bleibt unverändert.';}catch(error){status.textContent=error.message;}finally{button.disabled=false;}};
 refresh.onclick=load;load();
}
