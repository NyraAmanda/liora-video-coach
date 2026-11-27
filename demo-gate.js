import {edgeUrl} from './customer-config.js';
const tokenKey='liora-video-coach:demo-session-v1';
const adminKey='liora-video-coach:demo-admin-preview-v1';
let adminPreview=sessionStorage.getItem(adminKey)==='true';
let token=sessionStorage.getItem(tokenKey)||'';
let expiry=0, started=false, checking=false;
const login=document.getElementById('demo-access');
const studio=document.getElementById('customer-studio');
const form=login.querySelector('form');
const status=login.querySelector('[role=status]');
function lock(message){
 token='';sessionStorage.removeItem(tokenKey);sessionStorage.removeItem(adminKey);studio.hidden=true;login.hidden=false;
 document.querySelectorAll('dialog[open]').forEach(d=>d.close());
 const prompt=document.getElementById('prompt');if(prompt)prompt.value='';
 status.textContent=message;document.getElementById('demo-access-title').focus();
}
export async function demoRequest(path,data={}){
 const route=adminPreview?({'/demo/login':'/admin/login','/demo/session':'/admin/list','/demo/prompt':'/admin/prompt'}[path]||path):path;
 const response=await fetch(edgeUrl+route,{method:'POST',credentials:'omit',cache:'no-store',redirect:'error',headers:{'Content-Type':'application/json',...(token?{'x-liora-session':token}:{})},body:JSON.stringify(data),signal:AbortSignal.timeout(15000)});
 const result=await response.json();
 if(!response.ok){if(path!=='/demo/login' && (response.status===401||response.status===403))lock(result.error);throw new Error(result.error||'Die Anfrage konnte nicht abgeschlossen werden.');}
 return result;
}
async function enter(access){
 expiry=adminPreview?Infinity:Date.parse(access.expiresAt);
 if(!adminPreview&&!Number.isFinite(expiry))throw new Error('Die Demo-Laufzeit konnte nicht geprüft werden.');
 const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(adminPreview?'admin-preview':access.email)))).map(x=>x.toString(16).padStart(2,'0')).join('');
 document.body.dataset.accessScope='demo-'+hash;
 if(!started){await import('./demo-app.js?v=admin-preview-20261127');started=true;}
 document.getElementById('demo-expiry').textContent=adminPreview?'Admin-Vorschau · Für dich ohne Drei-Tage-Limit.':'Deine Demo läuft bis '+new Intl.DateTimeFormat('de-DE',{dateStyle:'medium',timeStyle:'short',timeZone:'Europe/Zurich'}).format(new Date(expiry))+' Uhr.';
 login.hidden=true;studio.hidden=false;form.reset();
}
form.onsubmit=async event=>{
 event.preventDefault();const button=form.querySelector('button');button.disabled=true;status.textContent='Anmeldung wird geprüft …';
 try{const data=new FormData(form);const access=await demoRequest('/demo/login',{email:data.get('email'),password:data.get('password')});token=access.token;sessionStorage.setItem(tokenKey,token);sessionStorage.setItem(adminKey,String(adminPreview));await enter(access);}catch(error){status.textContent=error.message;}finally{button.disabled=false;}
};
document.getElementById('demo-logout').onclick=async()=>{try{if(!adminPreview)await demoRequest('/demo/logout');lock('Du bist abgemeldet.');}catch(error){status.textContent=error.message;}};
async function check(){
 if(!token||checking)return;checking=true;
 try{await enter(await demoRequest('/demo/session'));}catch(error){if(!token)return;studio.hidden=true;login.hidden=false;status.textContent='Die Demo-Anmeldung konnte gerade nicht geprüft werden. Bitte erneut anmelden.';}finally{checking=false;}
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)check();});
setInterval(check,30000);
const previewButton=document.createElement('button');
previewButton.type='button';previewButton.className='secondary';
function showMode(){
 document.getElementById('demo-access-title').textContent=adminPreview?'Demo · Admin-Vorschau':'Deine VideoCoach-Demo';
 form.querySelector('button').textContent=adminPreview?'Mit Admin-Zugang öffnen':'Demo starten / anmelden';
 previewButton.textContent=adminPreview?'Zur Demo-Anmeldung wechseln':'Admin-Vorschau öffnen';
 const passwordLabel=form.elements.password.parentElement;
 passwordLabel.firstChild.textContent=adminPreview?'Admin-Passwort':'Kundenpasswort';
}
previewButton.onclick=()=>{adminPreview=!adminPreview;status.textContent='';showMode();};
form.after(previewButton);showMode();
if(token)check();
