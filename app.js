var e=t=>document.getElementById(t);var re=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function w(t,{focus:n=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==t}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===t?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),e("butler-ti\
p").textContent=re[t-1],n&&e("step-"+t+"-title").focus()}function k(t,n=!1){document.querySelector(`[data-step="${t}"] [data-status-slot]`).append(e("status")),
e("status").classList.toggle("is-error",n)}function D(){let t=e("kind").value;document.querySelectorAll("[data-format]").forEach(n=>{let r=n.dataset.format===t;
n.setAttribute("aria-pressed",String(r)),r&&(e("selection-title").textContent=n.querySelector("strong").textContent,e("selection-description").textContent=n.querySelector(
".format-copy > span").textContent)})}function q(){let t=e("kind");document.querySelectorAll("[data-format]").forEach(n=>{n.addEventListener("click",()=>{t.value!==
n.dataset.format&&(t.value=n.dataset.format,t.dispatchEvent(new Event("change",{bubbles:!0})))})}),t.addEventListener("change",D),document.querySelectorAll("[da\
ta-go]").forEach(n=>{n.addEventListener("click",()=>w(Number(n.dataset.go)))}),D()}var F={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var I=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function S(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function W(){let t=Object.fromEntries(I.map(a=>[a,e(a).value])),n=t.people==="auto"?0:Number(t.people),r=[];for(let a=0;a<n;a++)r.push({name:e(
"person"+a)?.value,notes:e("notes"+a)?.value,avatar:e("avatar"+a)?.value,outfit:e("outfit"+a)?.value});return{...t,mode:S(),personReferences:r}}function O(){let t=document.body.dataset.accessScope;return t?"liora-lab-video-v34-draft:"+t:"liora-lab-video-v34-draft"}function x(){try{let t={};I.forEach(n=>{
e(n)&&(t[n]=e(n).value)}),t.ideaMode=S();for(let n=0;n<5;n++)for(let r of["person","notes","avatar","outfit"]){let a=r+n;e(a)&&(t[a]=e(a).value)}localStorage.setItem(
O(),JSON.stringify(t))}catch{}}function B(){if(window._restoring)for(let t=0;t<5;t++)for(let n of["person","notes","avatar","outfit"]){let r=n+t;e(r)&&window._restoring[r]&&
(e(r).value=window._restoring[r])}}function H({updateModels:t,updateIdeaMode:n,renderPeople:r,updateCompatibility:a}){try{let o=JSON.parse(localStorage.getItem(
O())||"{}");if(window._restoring=o,o.ideaMode){let i=document.querySelector(`input[name=ideaMode][value="${o.ideaMode}"]`);i&&(i.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(i=>{o[i]!==void 0&&
(i!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(o[i]))&&(e(i).value=o[i])}),t(),I.filter(i=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(i)).forEach(i=>{
(o[i]!==void 0&&e(i).querySelector('option[value="'+o[i]+'"]')||o[i]!==void 0&&e(i).tagName!=="SELECT")&&(e(i).value=o[i])}),n(),r(),a(),window._restoring=null,
e("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function N(t){try{return await navigator.clipboard.writeText(t),!0}catch{let r=e("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var b=1e4,M=window.SpeechRecognition||window.webkitSpeechRecognition,u=null;function h(t){let n=e(t);n.value.length>b&&(n.value=n.value.slice(0,b)),e(t+"Count").
textContent=n.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function f(t,n){e(t+"MicStatus").textContent=n}function p(){if(!u)return;let t=u;u=null;
try{t.recognition.stop()}catch{}let n=document.querySelector('[data-dictate="'+t.id+'"]');n.classList.remove("recording"),n.setAttribute("aria-pressed","false"),
n.textContent="\u{1F399}\uFE0F Einsprechen"}function V(t){return t.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function K(t){let n="";for(let r of t){
let a=(r||"").trim();if(!a)continue;let o=n.trim();if(!o){n=a;continue}let i=V(o),s=V(a),l=0;for(let c=Math.min(i.length,s.length);c>=2;c--)if(i.slice(-c).join(
"|")===s.slice(0,c).join("|")){l=c;break}if(!(l===s.length&&s.length>=2))if(l){let m=[...a.matchAll(/[\p{L}\p{N}]+/gu)][l]?.index;m!==void 0&&(n=o+" "+a.slice(m).
trim())}else n=o+" "+a}return n.trim()}function oe(t){if(u){let i=u.id===t;if(p(),i){f(t,"Aufnahme beendet.");return}}if(!M){f(t,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let n=e(t);if(n.value.length>=b){f(t,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new M;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let a={id:t,recognition:r,base:n.value,finals:new Map,lastStable:"",lastPreview:""};u=a;let o=document.
querySelector('[data-dictate="'+t+'"]');o.classList.add("recording"),o.setAttribute("aria-pressed","true"),o.textContent="\u23F9 Aufnahme stoppen",f(t,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=i=>{if(u!==a)return;for(let d=i.resultIndex;d<i.results.length;d++){let z=i.results[d];z.isFinal&&a.finals.set(d,(z[0]?.transcript||
"").trim())}let s=[...a.finals.entries()].sort((d,z)=>d[0]-z[0]).map(d=>d[1]),l=K(s),c=[];for(let d=0;d<i.results.length;d++)i.results[d].isFinal||c.push(i.results[d][0]?.
transcript||"");let m=K([...s,...c]),T=a.base+(a.base&&!/\s$/.test(a.base)?" ":"");a.lastStable=l,a.lastPreview=m,n.value=(T+m).slice(0,b),h(t),n.dispatchEvent(
new Event("input",{bubbles:!0})),(T+l).length>=b&&(n.value=(T+l).slice(0,b),h(t),p(),f(t,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=i=>{
if(u!==a)return;p(),f(t,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[i.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{u===a&&(p(),f(t,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{p(),f(t,"Mikrofon konnte nicht gestartet werden.")}}function $(){["idea","extra"].forEach(t=>{let n=e(t);h(t),n.
addEventListener("input",()=>h(t)),n.addEventListener("paste",()=>setTimeout(()=>h(t),0)),document.querySelector('[data-dictate="'+t+'"]').addEventListener("cli\
ck",()=>oe(t))}),M||document.querySelectorAll("[data-dictate]").forEach(t=>{t.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function j(t){let n=t.kind,r=["talk","standup"].includes(n)&&t.scriptText.trim(),a=["signature","couple","fairytale","storytelling","random10"].includes(n);if(t.
mode==="own"&&!t.idea.trim()&&!a&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let o=t.randomItems.split(/[\n;,]+/u).map(i=>i.trim()).
filter(Boolean);return n==="random10"&&t.randomSource==="own"&&o.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${o.length}\
).`}:{randomObjects:o}}function R(){let t=e("model").value,n=F[e("platform").value]||F.unsure;e("model").replaceChildren(),n.forEach(([r,a])=>{let o=document.createElement("option");o.
value=r,o.textContent=a,e("model").append(o)}),n.some(([r])=>r===t)&&(e("model").value=t),e("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",y()}function y(){let t=e("platform").value,n=e("model").value,r=e("kind").value,a=e("language").value,o="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";t==="flow"&&n==="veo"&&(o="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
is, Audio und Referenzfunktionen m\xFCssen im tats\xE4chlichen Interface gepr\xFCft werden."),n==="omni"&&(o="Gemini Omni 1.2 Flash: Positiver LIORA-Praxistest \
f\xFCr Talking Head und Stand-up-Comedy mit nat\xFCrlichem deutschem Dialog. Andere Formate, Referenzmodi und die Verf\xFCgbarkeit auf dieser Plattform gesondert pr\xFCfen."),
n==="recommend"&&(o="LIORA w\xE4hlt erst nach Pr\xFCfung von Idee, Plattform, Referenzen und Audio ein konkretes Modell."),(a==="Deutsch"||a==="Deutsch (Schweiz\
er Akzent)")&&(n==="kling"?o="Deutsch gew\xE4hlt: Kling 4.0 verwenden. \xC4ltere Kling-Versionen nicht als Standard f\xFCr native deutsche Dialoge empfehlen. Verf\xFCgbarke\
it auf deiner Plattform pr\xFCfen.":n==="seedance"?o="Deutsch mit Seedance 2.5: Aussprache und Lip-Sync pr\xFCfen, insbesondere Umlaute, sch-Laut, Vorsilben und zu\
sammengesetzte W\xF6rter. Keine automatische phonetische Umschreibung.":n==="omni"?o="LIORA-Praxiserfahrung: Gemini Omni 1.2 Flash liefert sehr gute Ergebnisse \
f\xFCr Talking Head und Stand-up-Comedy; deutsche Sprache funktionierte im Test hervorragend. Stimme, Akzent und Verf\xFCgbarkeit im jeweiligen Modus dennoch pr\xFCfen.":
n==="veo"&&(o="Deutsch mit Veo 3.1 ist nach LIORA-Praxiserfahrung weniger zuverl\xE4ssig. F\xFCr deutsche Dialoge bevorzugt Gemini Omni 1.2 Flash oder Kling 4.0 w\xE4hle\
n. Falls Veo ausdr\xFCcklich gew\xFCnscht: kurzen Sprachtest einplanen."),n==="recommend"?o="Deutscher Dialog: f\xFCr Talking Head und Stand-up Gemini Omni 1.2 Fla\
sh als praxiserprobte Option bevorzugt pr\xFCfen; sonst Kling 4.0; Veo 3.1 f\xFCr Deutsch wegen schwankender Aussprache nicht bevorzugen, Seedance 2.5 nur mit Ausspra\
chekontrolle auf der gew\xE4hlten Plattform pr\xFCfen; keine pauschale Empfehlung \xE4lterer Kling-Versionen.":n==="heygen"&&(o="HeyGen ist ein separater Avatar\
-/Sprachworkflow; deutsche Sprache und Lip-Sync im gew\xE4hlten Modus pr\xFCfen. Die Kling-/Seedance-Regel gilt nicht pauschal f\xFCr HeyGen.")),a==="Deutsch (S\
chweizer Akzent)"&&(o+=" Sprechweise: Schweizer Hochdeutsch mit nat\xFCrlichem, dezentem Schweizer Akzent; kein Dialekt. Akzent kann je nach Engine abweichen."),
e("compat").textContent=o}function U(){let t=e("kind").value;if(t!=="talk"&&t!=="standup")return;let n=e("scriptText").value.trim(),r=n?n.split(/\s+/u).filter(Boolean).
length:0,a=t==="standup"?45:55,o=t==="standup"?125:135,i=t==="standup"?7:4,s=r?Math.ceil(r*60/o+i):0,l=e("scriptBudget");if(!r){l.textContent="30-Sekunden-Planu\
ng: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zeitbudget.";
return}let c=r>a||s>30;l.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${i} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: bis ${a}\
 W\xF6rter / 30 s. ${c?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function G(){
let t=e("kind").value,n=t==="talk"||t==="standup";e("scriptField").classList.toggle("hidden",!n),e("scriptText").disabled=!n,U(),e("scriptHint").textContent=t===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function Z(){e("kind").value===
"whip"?(e("ratio").value="16:9",e("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(e("ratio").value="9:16",e("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function E(){let t=S(),n=t==="inspire",
r=t==="reference";e("referenceHelp").classList.toggle("hidden",!r),e("intelligencePanel").classList.toggle("hidden",!(n&&["talk","standup"].includes(e("kind").value))),
e("ideaLabel").textContent=r?"Was passiert im Inspirationsvideo?":n?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",e("idea").placeholder=
r?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kameraperspektive und welcher Effekt gefallen dir? Was m\xF6cht\
est du anders machen?":n?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":e("kind").value==="signature"?"Optional: Welche no\
rmale Alltagssituation soll v\xF6llig absurd werden?":e("kind").value==="couple"?"Optional: Romantik, Kuss, Kuscheln, Beziehungshumor oder emotionales Drama \u2013 w\
as m\xF6chtest du zeigen?":e("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du kannst auch einen fertigen Dialog einf\xFCgen.":e("\
kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welches Detail verbindet beide Momente?":e("kind").value===
"random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde werden separat festgelegt.":"Was soll passieren?\
 Wer macht oder sagt was? Was ist die Pointe?"}function g(){e("random10Field").classList.toggle("hidden",e("kind").value!=="random10"),e("randomItemsField").classList.
toggle("hidden",e("kind").value!=="random10"||e("randomSource").value!=="own"),e("storyHelp").classList.toggle("hidden",e("kind").value!=="storytelling");let t=e(
"kind").value==="fairytale"||e("kind").value==="random10"&&e("randomWorld").value==="fairy";e("fairyField").classList.toggle("hidden",!t),e("customFairyField").
classList.toggle("hidden",!t||e("fairyTale").value!=="custom")}function P(){let t=e("people").value,n=t==="auto"?0:Number(t),r=e("personRefs"),a={};r.querySelectorAll(
"input[type=text]").forEach(o=>a[o.id]=o.value),r.replaceChildren();for(let o=0;o<n;o++){let i=String.fromCharCode(65+o),s=document.createElement("div");s.className=
"ref-card",s.innerHTML=`<div class="ref-title">Person ${i}</div><div class="grid"><div><label for="person${o}">Name / Rolle</label><input id="person${o}" type="\
text" placeholder="z. B. Nyra"></div><div><label for="avatar${o}">Avatarbild</label><select id="avatar${o}"><option value="none">Noch kein Bild</option><option \
value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${o}\
">Outfitbild</label><select id="outfit${o}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option valu\
e="create">LIORA soll Outfit vorschlagen</option></select></div><div><label for="notes${o}">Wichtige Merkmale</label><input id="notes${o}" type="text" placehold\
er="z. B. Frisur beibehalten"></div></div>`,r.append(s),["person"+o,"notes"+o].forEach(l=>{a[l]&&(e(l).value=a[l])})}if(t==="auto"){let o=document.createElement(
"p");o.className="small",o.textContent="LIORA bestimmt die ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",r.append(
o)}if(n===0&&t!=="auto"){let o=document.createElement("p");o.className="small",o.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz od\
er einen Startframe vorbereiten.",r.append(o)}B()}function ae(){e("prompt").value="",e("outputPanel").style.display="none",e("copy").classList.add("hidden"),e("\
status").textContent=""}function _(t){p(),!(!t&&!window.confirm("Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht\
."))&&(t?(document.querySelector('input[name=ideaMode][value="own"]').checked=!0,e("kind").value="talk",e("idea").value="",e("randomItems").value="",e("scriptTe\
xt").value="",e("location").value="",e("locationRef").value="none",e("keyframeRef").value="none"):(localStorage.removeItem(O()),window._restoring=null,document.
querySelector('input[name=ideaMode][value="own"]').checked=!0,["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(
n=>{let r=e(n);r.selectedIndex=0}),["idea","scriptText","randomItems","location","extra","ciAudience"].forEach(n=>e(n).value=""),e("ciGoal").value="comments",e(
"ciTone").value="authentic",R(),P()),E(),G(),y(),g(),ae(),["idea","extra"].forEach(h),x(),e("status").textContent=t?"\u2713 Neues Video bereit. Deine Avatar- und per\
s\xF6nlichen Angaben bleiben erhalten. Bitte die Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",D(),
w(2),k(2),e("idea").focus())}var ie=Array.from(e("fairyTale").children).map(t=>({label:t.tagName==="OPTGROUP"?t.label:null,items:t.tagName==="OPTGROUP"?Array.from(
t.children).map(n=>({text:n.textContent,value:n.value})):[{text:t.textContent,value:t.value}]}));function se(){let t=e("fairySearch").value.trim().toLocaleLowerCase(
"de-CH"),n=e("fairyTale"),r=n.value;n.replaceChildren();for(let a of ie){let o=a.items.filter(s=>!t||s.text.toLocaleLowerCase("de-CH").includes(t)||s.value==="c\
ustom");if(!o.length)continue;let i=a.label?document.createElement("optgroup"):n;a.label&&(i.label=a.label);for(let s of o){let l=document.createElement("option");
l.textContent=s.text,l.value=s.value,i.appendChild(l)}a.label&&n.appendChild(i)}Array.from(n.options).some(a=>a.value===r)?n.value=r:n.options.length&&(n.selectedIndex=
0),g()}function J(t,{enableCameraRoll:n=!1}={}){if(n){let r=document.createElement("div");r.className="field";let a=document.createElement("label"),o=document.createElement(
"input");o.type="checkbox",o.id="cameraRoll",a.append(o," Dynamischer Einstieg: 90\xB0-Kameraroll");let i=document.createElement("p");i.className="hint",i.textContent=
"F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",r.append(a,i),e("compat").before(r);let s=()=>{r.hidden=o.disabled=e("ratio").value!=="9:16"};e("ratio").addEventListener(
"change",s);for(let l of["newVideo","fullReset"])e(l).addEventListener("click",()=>{o.checked=!1,queueMicrotask(s)});queueMicrotask(s)}e("newVideo").addEventListener(
"click",()=>_(!0)),e("fullReset").addEventListener("click",()=>_(!1)),e("scriptText").addEventListener("input",U),e("generate").addEventListener("click",async()=>{
let r=W();e("cameraRoll")?.checked&&r.ratio==="9:16"&&(r.cameraRoll=!0);let a=j(r);if(a.error){w(2,{focus:!1}),k(2,!0),e("status").textContent=a.error,e(a.field).
focus();return}w(4,{focus:!1}),k(4);try{let o=t(r,a.randomObjects);typeof o=="string"?e("prompt").value=o:(e("generate").disabled=!0,e("status").textContent="Au\
ftrag wird erstellt \u2026",e("prompt").value=await o)}catch{k(4,!0),e("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{
e("generate").disabled=!1}e("outputPanel").style.display="block",e("copy").classList.remove("hidden"),e("status").textContent="Auftrag erstellt. Jetzt kopieren \
und in ChatGPT einf\xFCgen.",x()}),e("copy").addEventListener("click",async()=>{if(!e("prompt").value)return;let r=await N(e("prompt").value);k(4),e("status").textContent=
r?"\u2713 Auftrag kopiert. Du kannst ihn jetzt in ChatGPT einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),e("fa\
irySearch").addEventListener("input",se),e("randomWorld").addEventListener("change",g),e("randomSource").addEventListener("change",g),e("randomItems").addEventListener(
"input",()=>{e("randomItemsCount").textContent=e("randomItems").value.split(/[\n;,]+/u).map(r=>r.trim()).filter(Boolean).length+" von 10 Gegenst\xE4nden"}),e("f\
airyTale").addEventListener("change",g),e("platform").addEventListener("change",R),e("kind").addEventListener("change",()=>{Z(),G(),y(),E(),g()}),e("model").addEventListener(
"change",y),e("language").addEventListener("change",y),e("people").addEventListener("change",P),document.querySelectorAll("input[name=ideaMode]").forEach(r=>r.addEventListener(
"change",E)),document.addEventListener("input",r=>{r.target.closest("#app")&&x()}),document.addEventListener("change",r=>{r.target.closest("#app")&&x()}),R(),Z(),
P(),H({updateModels:R,updateIdeaMode:E,renderPeople:P,updateCompatibility:y}),E(),G(),g(),$(),q()}import{edgeUrl as le}from"./customer-config.js";var v=document.getElementById("customer-access"),Y=document.getElementById("customer-studio"),A=document.body.hasAttribute(
"data-admin-preview"),C,Q=!1;function ce(t){let n=new URL(t);if(n.protocol!=="https:"||!n.hostname.endsWith(".supabase.co")||n.username||n.password||n.search||n.
hash||n.pathname!=="/functions/v1/liora-access")throw new Error("Ung\xFCltiger Edge-Link.");return n.href}async function L(t,n={},r=C){let a=await fetch(ce(le)+
t,{method:"POST",headers:{"content-type":"application/json",...r?{"x-liora-session":r}:{}},body:JSON.stringify(n),credentials:"omit",cache:"no-store",redirect:"\
error",signal:AbortSignal.timeout(1e4)}),o=await a.json();if(!a.ok)throw a.status===401&&r&&location.reload(),new Error(o.error||"Anfrage fehlgeschlagen.");return o}
function X(t,n){let r=document.createElement("button");return r.type="button",r.className="secondary",r.textContent=t,r.addEventListener("click",n),r}async function ee(){
try{await L("/logout"),C=void 0,location.reload()}catch{if(!C)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut vers\
uchen.")}}function te(t=A){let n=v.querySelector("form");v.querySelector("h1").textContent=t?"Administration":"Willkommen zur\xFCck",v.querySelector("[data-desc\
ription]").textContent=t?"Melde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let r=v.querySelector(
"[data-role]");r.hidden=A,r.textContent=t?"Zum Kundenzugang":"Zur Administration",r.onclick=()=>{n.reset(),te(!t)};let a=v.querySelector("[role=status]");a.textContent=
"",n.onsubmit=async o=>{o.preventDefault();let i=n.querySelector("button[type=submit]"),s=new FormData(n);i.disabled=!0,r.disabled=!0,a.textContent="";try{let l=await L(
t?"/admin/login":"/login",Object.fromEntries(s));if(C=l.token,n.reset(),t&&!A)try{await ne()}catch(c){throw C=void 0,c}else document.body.dataset.accessScope=A?
"admin-lab":l.draftScope,v.hidden=!0,Y.hidden=!1,Q||(J(async c=>(await L(A?"/admin/prompt":"/prompt",c)).prompt,{enableCameraRoll:l.cameraRollSupported===!0}),Q=
!0)}catch(l){a.textContent=l.message}finally{i.disabled=!1,r.disabled=!1}}}async function ne(){let{members:t}=await L("/admin/list"),n=document.getElementById("\
customer-admin"),r=n.querySelector("[role=status]"),a=n.querySelector("ul");async function o(s,l){r.textContent="";try{await L("/admin/change",{email:s,action:l}),
await ne()}catch(c){r.textContent=c.message}}a.replaceChildren();for(let{email:s,enabled:l}of t){let c=document.createElement("li"),m=document.createElement("st\
rong");m.textContent=s,c.append(m,l?" \xB7 Freigegeben ":" \xB7 Gesperrt ",X(l?"Sperren":"Freigeben",()=>o(s,l?"block":"enable"))," ",X("Entfernen",()=>{confirm(
"Diesen Zugang und seine Sitzungen entfernen?")&&o(s,"remove")})),a.append(c)}let i=n.querySelector("form");i.onsubmit=async s=>{s.preventDefault(),await o(new FormData(
i).get("email"),"add")},n.querySelector("[data-logout]").onclick=()=>ee().catch(s=>{r.textContent=s.message}),v.hidden=!0,n.hidden=!1}Y.querySelector("[data-log\
out]").onclick=()=>ee().catch(t=>{let n=document.getElementById("logout-status");n.textContent=t.message});te();
