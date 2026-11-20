var n=t=>document.getElementById(t);var re=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function w(t,{focus:e=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==t}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===t?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),n("butler-ti\
p").textContent=re[t-1],e&&n("step-"+t+"-title").focus()}function k(t,e=!1){document.querySelector(`[data-step="${t}"] [data-status-slot]`).append(n("status")),
n("status").classList.toggle("is-error",e)}function D(){let t=n("kind").value;document.querySelectorAll("[data-format]").forEach(e=>{let r=e.dataset.format===t;
e.setAttribute("aria-pressed",String(r)),r&&(n("selection-title").textContent=e.querySelector("strong").textContent,n("selection-description").textContent=e.querySelector(
".format-copy > span").textContent)})}function W(){let t=n("kind");document.querySelectorAll("[data-format]").forEach(e=>{e.addEventListener("click",()=>{t.value!==
e.dataset.format&&(t.value=e.dataset.format,t.dispatchEvent(new Event("change",{bubbles:!0})))})}),t.addEventListener("change",D),document.querySelectorAll("[da\
ta-go]").forEach(e=>{e.addEventListener("click",()=>w(Number(e.dataset.go)))}),D()}var F={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var I=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function S(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function q(){let t=Object.fromEntries(I.map(a=>[a,n(a).value])),e=t.people==="auto"?0:Number(t.people),r=[];for(let a=0;a<e;a++)r.push({name:n(
"person"+a)?.value,notes:n("notes"+a)?.value,avatar:n("avatar"+a)?.value,outfit:n("outfit"+a)?.value});return{...t,mode:S(),personReferences:r}}function O(){let t=document.body.dataset.accessScope;return t?"liora-lab-video-v34-draft:"+t:"liora-lab-video-v34-draft"}function x(){try{let t={};I.forEach(e=>{
n(e)&&(t[e]=n(e).value)}),t.ideaMode=S();for(let e=0;e<5;e++)for(let r of["person","notes","avatar","outfit"]){let a=r+e;n(a)&&(t[a]=n(a).value)}localStorage.setItem(
O(),JSON.stringify(t))}catch{}}function B(){if(window._restoring)for(let t=0;t<5;t++)for(let e of["person","notes","avatar","outfit"]){let r=e+t;n(r)&&window._restoring[r]&&
(n(r).value=window._restoring[r])}}function H({updateModels:t,updateIdeaMode:e,renderPeople:r,updateCompatibility:a}){try{let o=JSON.parse(localStorage.getItem(
O())||"{}");if(window._restoring=o,o.ideaMode){let i=document.querySelector(`input[name=ideaMode][value="${o.ideaMode}"]`);i&&(i.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(i=>{o[i]!==void 0&&
(i!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(o[i]))&&(n(i).value=o[i])}),t(),I.filter(i=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(i)).forEach(i=>{
(o[i]!==void 0&&n(i).querySelector('option[value="'+o[i]+'"]')||o[i]!==void 0&&n(i).tagName!=="SELECT")&&(n(i).value=o[i])}),e(),r(),a(),window._restoring=null,
n("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function N(t){try{return await navigator.clipboard.writeText(t),!0}catch{let r=n("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var b=1e4,M=window.SpeechRecognition||window.webkitSpeechRecognition,u=null;function h(t){let e=n(t);e.value.length>b&&(e.value=e.value.slice(0,b)),n(t+"Count").
textContent=e.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function f(t,e){n(t+"MicStatus").textContent=e}function p(){if(!u)return;let t=u;u=null;
try{t.recognition.stop()}catch{}let e=document.querySelector('[data-dictate="'+t.id+'"]');e.classList.remove("recording"),e.setAttribute("aria-pressed","false"),
e.textContent="\u{1F399}\uFE0F Einsprechen"}function V(t){return t.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function K(t){let e="";for(let r of t){
let a=(r||"").trim();if(!a)continue;let o=e.trim();if(!o){e=a;continue}let i=V(o),s=V(a),l=0;for(let c=Math.min(i.length,s.length);c>=2;c--)if(i.slice(-c).join(
"|")===s.slice(0,c).join("|")){l=c;break}if(!(l===s.length&&s.length>=2))if(l){let m=[...a.matchAll(/[\p{L}\p{N}]+/gu)][l]?.index;m!==void 0&&(e=o+" "+a.slice(m).
trim())}else e=o+" "+a}return e.trim()}function oe(t){if(u){let i=u.id===t;if(p(),i){f(t,"Aufnahme beendet.");return}}if(!M){f(t,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let e=n(t);if(e.value.length>=b){f(t,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new M;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let a={id:t,recognition:r,base:e.value,finals:new Map,lastStable:"",lastPreview:""};u=a;let o=document.
querySelector('[data-dictate="'+t+'"]');o.classList.add("recording"),o.setAttribute("aria-pressed","true"),o.textContent="\u23F9 Aufnahme stoppen",f(t,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=i=>{if(u!==a)return;for(let d=i.resultIndex;d<i.results.length;d++){let z=i.results[d];z.isFinal&&a.finals.set(d,(z[0]?.transcript||
"").trim())}let s=[...a.finals.entries()].sort((d,z)=>d[0]-z[0]).map(d=>d[1]),l=K(s),c=[];for(let d=0;d<i.results.length;d++)i.results[d].isFinal||c.push(i.results[d][0]?.
transcript||"");let m=K([...s,...c]),T=a.base+(a.base&&!/\s$/.test(a.base)?" ":"");a.lastStable=l,a.lastPreview=m,e.value=(T+m).slice(0,b),h(t),e.dispatchEvent(
new Event("input",{bubbles:!0})),(T+l).length>=b&&(e.value=(T+l).slice(0,b),h(t),p(),f(t,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=i=>{
if(u!==a)return;p(),f(t,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[i.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{u===a&&(p(),f(t,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{p(),f(t,"Mikrofon konnte nicht gestartet werden.")}}function $(){["idea","extra"].forEach(t=>{let e=n(t);h(t),e.
addEventListener("input",()=>h(t)),e.addEventListener("paste",()=>setTimeout(()=>h(t),0)),document.querySelector('[data-dictate="'+t+'"]').addEventListener("cli\
ck",()=>oe(t))}),M||document.querySelectorAll("[data-dictate]").forEach(t=>{t.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function j(t){let e=t.kind,r=["talk","standup"].includes(e)&&t.scriptText.trim(),a=["signature","couple","fairytale","storytelling","random10"].includes(e);if(t.
mode==="own"&&!t.idea.trim()&&!a&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let o=t.randomItems.split(/[\n;,]+/u).map(i=>i.trim()).
filter(Boolean);return e==="random10"&&t.randomSource==="own"&&o.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${o.length}\
).`}:{randomObjects:o}}function P(){let t=n("model").value,e=F[n("platform").value]||F.unsure;n("model").replaceChildren(),e.forEach(([r,a])=>{let o=document.createElement("option");o.
value=r,o.textContent=a,n("model").append(o)}),e.some(([r])=>r===t)&&(n("model").value=t),n("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",y()}function y(){let t=n("platform").value,e=n("model").value,r=n("kind").value,a=n("language").value,o="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";t==="flow"&&e==="veo"&&(o="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
is, Audio und Referenzfunktionen m\xFCssen im tats\xE4chlichen Interface gepr\xFCft werden."),e==="omni"&&(o="Gemini Omni 1.2 Flash: Positiver LIORA-Praxistest \
f\xFCr Talking Head und Stand-up-Comedy mit nat\xFCrlichem deutschem Dialog. Andere Formate, Referenzmodi und die Verf\xFCgbarkeit auf dieser Plattform gesondert pr\xFCfen."),
e==="recommend"&&(o="LIORA w\xE4hlt erst nach Pr\xFCfung von Idee, Plattform, Referenzen und Audio ein konkretes Modell."),(a==="Deutsch"||a==="Deutsch (Schweiz\
er Akzent)")&&(e==="kling"?o="Deutsch gew\xE4hlt: Kling 4.0 verwenden. \xC4ltere Kling-Versionen nicht als Standard f\xFCr native deutsche Dialoge empfehlen. Verf\xFCgbarke\
it auf deiner Plattform pr\xFCfen.":e==="seedance"?o="Deutsch mit Seedance 2.5: Aussprache und Lip-Sync pr\xFCfen, insbesondere Umlaute, sch-Laut, Vorsilben und zu\
sammengesetzte W\xF6rter. Keine automatische phonetische Umschreibung.":e==="omni"?o="LIORA-Praxiserfahrung: Gemini Omni 1.2 Flash liefert sehr gute Ergebnisse \
f\xFCr Talking Head und Stand-up-Comedy; deutsche Sprache funktionierte im Test hervorragend. Stimme, Akzent und Verf\xFCgbarkeit im jeweiligen Modus dennoch pr\xFCfen.":
e==="veo"&&(o="Deutsch mit Veo 3.1 ist nach LIORA-Praxiserfahrung weniger zuverl\xE4ssig. F\xFCr deutsche Dialoge bevorzugt Gemini Omni 1.2 Flash oder Kling 4.0 w\xE4hle\
n. Falls Veo ausdr\xFCcklich gew\xFCnscht: kurzen Sprachtest einplanen."),e==="recommend"?o="Deutscher Dialog: f\xFCr Talking Head und Stand-up Gemini Omni 1.2 Fla\
sh als praxiserprobte Option bevorzugt pr\xFCfen; sonst Kling 4.0; Veo 3.1 f\xFCr Deutsch wegen schwankender Aussprache nicht bevorzugen, Seedance 2.5 nur mit Ausspra\
chekontrolle auf der gew\xE4hlten Plattform pr\xFCfen; keine pauschale Empfehlung \xE4lterer Kling-Versionen.":e==="heygen"&&(o="HeyGen ist ein separater Avatar\
-/Sprachworkflow; deutsche Sprache und Lip-Sync im gew\xE4hlten Modus pr\xFCfen. Die Kling-/Seedance-Regel gilt nicht pauschal f\xFCr HeyGen.")),a==="Deutsch (S\
chweizer Akzent)"&&(o+=" Sprechweise: Schweizer Hochdeutsch mit nat\xFCrlichem, dezentem Schweizer Akzent; kein Dialekt. Akzent kann je nach Engine abweichen."),
n("compat").textContent=o}function U(){let t=n("kind").value;if(t!=="talk"&&t!=="standup")return;let e=n("scriptText").value.trim(),r=e?e.split(/\s+/u).filter(Boolean).
length:0,a=t==="standup"?45:55,o=t==="standup"?125:135,i=t==="standup"?7:4,s=r?Math.ceil(r*60/o+i):0,l=n("scriptBudget");if(!r){l.textContent="30-Sekunden-Planu\
ng: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zeitbudget.";
return}let c=r>a||s>30;l.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${i} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: bis ${a}\
 W\xF6rter / 30 s. ${c?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function G(){
let t=n("kind").value,e=t==="talk"||t==="standup";n("scriptField").classList.toggle("hidden",!e),n("scriptText").disabled=!e,U(),n("scriptHint").textContent=t===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function Z(){n("kind").value===
"whip"?(n("ratio").value="16:9",n("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(n("ratio").value="9:16",n("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function A(){let t=S(),e=t==="inspire",
r=t==="reference";n("referenceHelp").classList.toggle("hidden",!r),n("intelligencePanel").classList.toggle("hidden",!(e&&["talk","standup"].includes(n("kind").value))),
n("ideaLabel").textContent=r?"Was passiert im Inspirationsvideo?":e?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",n("idea").placeholder=
r?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kameraperspektive und welcher Effekt gefallen dir? Was m\xF6cht\
est du anders machen?":e?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":n("kind").value==="signature"?"Optional: Welche no\
rmale Alltagssituation soll v\xF6llig absurd werden?":n("kind").value==="couple"?"Optional: Romantik, Kuss, Kuscheln, Beziehungshumor oder emotionales Drama \u2013 w\
as m\xF6chtest du zeigen?":n("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du kannst auch einen fertigen Dialog einf\xFCgen.":n("\
kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welches Detail verbindet beide Momente?":n("kind").value===
"random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde werden separat festgelegt.":"Was soll passieren?\
 Wer macht oder sagt was? Was ist die Pointe?"}function g(){n("random10Field").classList.toggle("hidden",n("kind").value!=="random10"),n("randomItemsField").classList.
toggle("hidden",n("kind").value!=="random10"||n("randomSource").value!=="own"),n("storyHelp").classList.toggle("hidden",n("kind").value!=="storytelling");let t=n(
"kind").value==="fairytale"||n("kind").value==="random10"&&n("randomWorld").value==="fairy";n("fairyField").classList.toggle("hidden",!t),n("customFairyField").
classList.toggle("hidden",!t||n("fairyTale").value!=="custom")}function R(){let t=n("people").value,e=t==="auto"?0:Number(t),r=n("personRefs"),a={};r.querySelectorAll(
"input[type=text]").forEach(o=>a[o.id]=o.value),r.replaceChildren();for(let o=0;o<e;o++){let i=String.fromCharCode(65+o),s=document.createElement("div");s.className=
"ref-card",s.innerHTML=`<div class="ref-title">Person ${i}</div><div class="grid"><div><label for="person${o}">Name / Rolle</label><input id="person${o}" type="\
text" placeholder="z. B. Nyra"></div><div><label for="avatar${o}">Avatarbild</label><select id="avatar${o}"><option value="none">Noch kein Bild</option><option \
value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${o}\
">Outfitbild</label><select id="outfit${o}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option valu\
e="create">LIORA soll Outfit vorschlagen</option></select></div><div><label for="notes${o}">Wichtige Merkmale</label><input id="notes${o}" type="text" placehold\
er="z. B. Frisur beibehalten"></div></div>`,r.append(s),["person"+o,"notes"+o].forEach(l=>{a[l]&&(n(l).value=a[l])})}if(t==="auto"){let o=document.createElement(
"p");o.className="small",o.textContent="LIORA bestimmt die ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",r.append(
o)}if(e===0&&t!=="auto"){let o=document.createElement("p");o.className="small",o.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz od\
er einen Startframe vorbereiten.",r.append(o)}B()}function ae(){n("prompt").value="",n("outputPanel").style.display="none",n("copy").classList.add("hidden"),n("\
status").textContent=""}function _(t){p(),!(!t&&!window.confirm("Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht\
."))&&(t?(document.querySelector('input[name=ideaMode][value="own"]').checked=!0,n("kind").value="talk",n("idea").value="",n("randomItems").value="",n("scriptTe\
xt").value="",n("location").value="",n("locationRef").value="none",n("keyframeRef").value="none"):(localStorage.removeItem(O()),window._restoring=null,document.
querySelector('input[name=ideaMode][value="own"]').checked=!0,["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(
e=>{let r=n(e);r.selectedIndex=0}),["idea","scriptText","randomItems","location","extra","ciAudience"].forEach(e=>n(e).value=""),n("ciGoal").value="comments",n(
"ciTone").value="authentic",P(),R()),A(),G(),y(),g(),ae(),["idea","extra"].forEach(h),x(),n("status").textContent=t?"\u2713 Neues Video bereit. Deine Avatar- und per\
s\xF6nlichen Angaben bleiben erhalten. Bitte die Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",D(),
w(2),k(2),n("idea").focus())}var ie=Array.from(n("fairyTale").children).map(t=>({label:t.tagName==="OPTGROUP"?t.label:null,items:t.tagName==="OPTGROUP"?Array.from(
t.children).map(e=>({text:e.textContent,value:e.value})):[{text:t.textContent,value:t.value}]}));function se(){let t=n("fairySearch").value.trim().toLocaleLowerCase(
"de-CH"),e=n("fairyTale"),r=e.value;e.replaceChildren();for(let a of ie){let o=a.items.filter(s=>!t||s.text.toLocaleLowerCase("de-CH").includes(t)||s.value==="c\
ustom");if(!o.length)continue;let i=a.label?document.createElement("optgroup"):e;a.label&&(i.label=a.label);for(let s of o){let l=document.createElement("option");
l.textContent=s.text,l.value=s.value,i.appendChild(l)}a.label&&e.appendChild(i)}Array.from(e.options).some(a=>a.value===r)?e.value=r:e.options.length&&(e.selectedIndex=
0),g()}function J(t){n("newVideo").addEventListener("click",()=>_(!0)),n("fullReset").addEventListener("click",()=>_(!1)),n("scriptText").addEventListener("inpu\
t",U),n("generate").addEventListener("click",async()=>{let e=q(),r=j(e);if(r.error){w(2,{focus:!1}),k(2,!0),n("status").textContent=r.error,n(r.field).focus();return}
w(4,{focus:!1}),k(4);try{let a=t(e,r.randomObjects);typeof a=="string"?n("prompt").value=a:(n("generate").disabled=!0,n("status").textContent="Auftrag wird erst\
ellt \u2026",n("prompt").value=await a)}catch{k(4,!0),n("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{n("\
generate").disabled=!1}n("outputPanel").style.display="block",n("copy").classList.remove("hidden"),n("status").textContent="Auftrag erstellt. Jetzt kopieren und\
 in ChatGPT einf\xFCgen.",x()}),n("copy").addEventListener("click",async()=>{if(!n("prompt").value)return;let e=await N(n("prompt").value);k(4),n("status").textContent=
e?"\u2713 Auftrag kopiert. Du kannst ihn jetzt in ChatGPT einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),n("fa\
irySearch").addEventListener("input",se),n("randomWorld").addEventListener("change",g),n("randomSource").addEventListener("change",g),n("randomItems").addEventListener(
"input",()=>{n("randomItemsCount").textContent=n("randomItems").value.split(/[\n;,]+/u).map(e=>e.trim()).filter(Boolean).length+" von 10 Gegenst\xE4nden"}),n("f\
airyTale").addEventListener("change",g),n("platform").addEventListener("change",P),n("kind").addEventListener("change",()=>{Z(),G(),y(),A(),g()}),n("model").addEventListener(
"change",y),n("language").addEventListener("change",y),n("people").addEventListener("change",R),document.querySelectorAll("input[name=ideaMode]").forEach(e=>e.addEventListener(
"change",A)),document.addEventListener("input",e=>{e.target.closest("#app")&&x()}),document.addEventListener("change",e=>{e.target.closest("#app")&&x()}),P(),Z(),
R(),H({updateModels:P,updateIdeaMode:A,renderPeople:R,updateCompatibility:y}),A(),G(),g(),$(),W()}import{edgeUrl as le}from"./customer-config.js";var v=document.getElementById("customer-access"),Y=document.getElementById("customer-studio"),C=document.body.hasAttribute(
"data-admin-preview"),E,Q=!1;function ce(t){let e=new URL(t);if(e.protocol!=="https:"||!e.hostname.endsWith(".supabase.co")||e.username||e.password||e.search||e.
hash||e.pathname!=="/functions/v1/liora-access")throw new Error("Ung\xFCltiger Edge-Link.");return e.href}async function L(t,e={},r=E){let a=await fetch(ce(le)+
t,{method:"POST",headers:{"content-type":"application/json",...r?{"x-liora-session":r}:{}},body:JSON.stringify(e),credentials:"omit",cache:"no-store",redirect:"\
error",signal:AbortSignal.timeout(1e4)}),o=await a.json();if(!a.ok)throw a.status===401&&r&&location.reload(),new Error(o.error||"Anfrage fehlgeschlagen.");return o}
function X(t,e){let r=document.createElement("button");return r.type="button",r.className="secondary",r.textContent=t,r.addEventListener("click",e),r}async function ee(){
try{await L("/logout"),E=void 0,location.reload()}catch{if(!E)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut vers\
uchen.")}}function te(t=C){let e=v.querySelector("form");v.querySelector("h1").textContent=t?"Administration":"Willkommen zur\xFCck",v.querySelector("[data-desc\
ription]").textContent=t?"Melde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let r=v.querySelector(
"[data-role]");r.hidden=C,r.textContent=t?"Zum Kundenzugang":"Zur Administration",r.onclick=()=>{e.reset(),te(!t)};let a=v.querySelector("[role=status]");a.textContent=
"",e.onsubmit=async o=>{o.preventDefault();let i=e.querySelector("button[type=submit]"),s=new FormData(e);i.disabled=!0,r.disabled=!0,a.textContent="";try{let l=await L(
t?"/admin/login":"/login",Object.fromEntries(s));if(E=l.token,e.reset(),t&&!C)try{await ne()}catch(c){throw E=void 0,c}else document.body.dataset.accessScope=C?
"admin-lab":l.draftScope,v.hidden=!0,Y.hidden=!1,Q||(J(async c=>(await L(C?"/admin/prompt":"/prompt",c)).prompt),Q=!0)}catch(l){a.textContent=l.message}finally{
i.disabled=!1,r.disabled=!1}}}async function ne(){let{members:t}=await L("/admin/list"),e=document.getElementById("customer-admin"),r=e.querySelector("[role=sta\
tus]"),a=e.querySelector("ul");async function o(s,l){r.textContent="";try{await L("/admin/change",{email:s,action:l}),await ne()}catch(c){r.textContent=c.message}}
a.replaceChildren();for(let{email:s,enabled:l}of t){let c=document.createElement("li"),m=document.createElement("strong");m.textContent=s,c.append(m,l?" \xB7 Freig\
egeben ":" \xB7 Gesperrt ",X(l?"Sperren":"Freigeben",()=>o(s,l?"block":"enable"))," ",X("Entfernen",()=>{confirm("Diesen Zugang und seine Sitzungen entfernen?")&&
o(s,"remove")})),a.append(c)}let i=e.querySelector("form");i.onsubmit=async s=>{s.preventDefault(),await o(new FormData(i).get("email"),"add")},e.querySelector(
"[data-logout]").onclick=()=>ee().catch(s=>{r.textContent=s.message}),v.hidden=!0,e.hidden=!1}Y.querySelector("[data-logout]").onclick=()=>ee().catch(t=>{let e=document.
getElementById("logout-status");e.textContent=t.message});te();
