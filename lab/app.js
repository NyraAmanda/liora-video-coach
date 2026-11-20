var e=t=>document.getElementById(t);var ie=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function w(t,{focus:n=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==t}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===t?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),e("butler-ti\
p").textContent=ie[t-1],n&&e("step-"+t+"-title").focus()}function v(t,n=!1){document.querySelector(`[data-step="${t}"] [data-status-slot]`).append(e("status")),
e("status").classList.toggle("is-error",n)}function D(){let t=e("kind").value;document.querySelectorAll("[data-format]").forEach(n=>{let r=n.dataset.format===t;
n.setAttribute("aria-pressed",String(r)),r&&(e("selection-title").textContent=n.querySelector("strong").textContent,e("selection-description").textContent=n.querySelector(
".format-copy > span").textContent)})}function W(){let t=e("kind");document.querySelectorAll("[data-format]").forEach(n=>{n.addEventListener("click",()=>{t.value!==
n.dataset.format&&(t.value=n.dataset.format,t.dispatchEvent(new Event("change",{bubbles:!0})))})}),t.addEventListener("change",D),document.querySelectorAll("[da\
ta-go]").forEach(n=>{n.addEventListener("click",()=>w(Number(n.dataset.go)))}),D()}var M={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var R=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function S(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function B(){let t=Object.fromEntries(R.map(o=>[o,e(o).value])),n=t.people==="auto"?0:Number(t.people),r=[];for(let o=0;o<n;o++)r.push({name:e(
"person"+o)?.value,notes:e("notes"+o)?.value,avatar:e("avatar"+o)?.value,outfit:e("outfit"+o)?.value});return{...t,mode:S(),personReferences:r}}function I(){let t=document.body.dataset.accessScope;return t?"liora-lab-video-v34-draft:"+t:"liora-lab-video-v34-draft"}function x(){try{let t={};R.forEach(n=>{
e(n)&&(t[n]=e(n).value)}),t.ideaMode=S();for(let n=0;n<5;n++)for(let r of["person","notes","avatar","outfit"]){let o=r+n;e(o)&&(t[o]=e(o).value)}localStorage.setItem(
I(),JSON.stringify(t))}catch{}}function N(){if(window._restoring)for(let t=0;t<5;t++)for(let n of["person","notes","avatar","outfit"]){let r=n+t;e(r)&&window._restoring[r]&&
(e(r).value=window._restoring[r])}}function H({updateModels:t,updateIdeaMode:n,renderPeople:r,updateCompatibility:o}){try{let a=JSON.parse(localStorage.getItem(
I())||"{}");if(window._restoring=a,a.ideaMode){let i=document.querySelector(`input[name=ideaMode][value="${a.ideaMode}"]`);i&&(i.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(i=>{a[i]!==void 0&&
(i!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(a[i]))&&(e(i).value=a[i])}),t(),R.filter(i=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(i)).forEach(i=>{
(a[i]!==void 0&&e(i).querySelector('option[value="'+a[i]+'"]')||a[i]!==void 0&&e(i).tagName!=="SELECT")&&(e(i).value=a[i])}),n(),r(),o(),window._restoring=null,
e("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function K(t){try{return await navigator.clipboard.writeText(t),!0}catch{let r=e("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var k=1e4,G=window.SpeechRecognition||window.webkitSpeechRecognition,u=null;function h(t){let n=e(t);n.value.length>k&&(n.value=n.value.slice(0,k)),e(t+"Count").
textContent=n.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function f(t,n){e(t+"MicStatus").textContent=n}function p(){if(!u)return;let t=u;u=null;
try{t.recognition.stop()}catch{}let n=document.querySelector('[data-dictate="'+t.id+'"]');n.classList.remove("recording"),n.setAttribute("aria-pressed","false"),
n.textContent="\u{1F399}\uFE0F Einsprechen"}function V(t){return t.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function $(t){let n="";for(let r of t){
let o=(r||"").trim();if(!o)continue;let a=n.trim();if(!a){n=o;continue}let i=V(a),s=V(o),l=0;for(let c=Math.min(i.length,s.length);c>=2;c--)if(i.slice(-c).join(
"|")===s.slice(0,c).join("|")){l=c;break}if(!(l===s.length&&s.length>=2))if(l){let m=[...o.matchAll(/[\p{L}\p{N}]+/gu)][l]?.index;m!==void 0&&(n=a+" "+o.slice(m).
trim())}else n=a+" "+o}return n.trim()}function se(t){if(u){let i=u.id===t;if(p(),i){f(t,"Aufnahme beendet.");return}}if(!G){f(t,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let n=e(t);if(n.value.length>=k){f(t,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new G;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let o={id:t,recognition:r,base:n.value,finals:new Map,lastStable:"",lastPreview:""};u=o;let a=document.
querySelector('[data-dictate="'+t+'"]');a.classList.add("recording"),a.setAttribute("aria-pressed","true"),a.textContent="\u23F9 Aufnahme stoppen",f(t,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=i=>{if(u!==o)return;for(let d=i.resultIndex;d<i.results.length;d++){let z=i.results[d];z.isFinal&&o.finals.set(d,(z[0]?.transcript||
"").trim())}let s=[...o.finals.entries()].sort((d,z)=>d[0]-z[0]).map(d=>d[1]),l=$(s),c=[];for(let d=0;d<i.results.length;d++)i.results[d].isFinal||c.push(i.results[d][0]?.
transcript||"");let m=$([...s,...c]),P=o.base+(o.base&&!/\s$/.test(o.base)?" ":"");o.lastStable=l,o.lastPreview=m,n.value=(P+m).slice(0,k),h(t),n.dispatchEvent(
new Event("input",{bubbles:!0})),(P+l).length>=k&&(n.value=(P+l).slice(0,k),h(t),p(),f(t,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=i=>{
if(u!==o)return;p(),f(t,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[i.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{u===o&&(p(),f(t,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{p(),f(t,"Mikrofon konnte nicht gestartet werden.")}}function j(){["idea","extra"].forEach(t=>{let n=e(t);h(t),n.
addEventListener("input",()=>h(t)),n.addEventListener("paste",()=>setTimeout(()=>h(t),0)),document.querySelector('[data-dictate="'+t+'"]').addEventListener("cli\
ck",()=>se(t))}),G||document.querySelectorAll("[data-dictate]").forEach(t=>{t.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function Z(t){let n=t.kind,r=["talk","standup"].includes(n)&&t.scriptText.trim(),o=["signature","couple","fairytale","storytelling","random10"].includes(n);if(t.
mode==="own"&&!t.idea.trim()&&!o&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let a=t.randomItems.split(/[\n;,]+/u).map(i=>i.trim()).
filter(Boolean);return n==="random10"&&t.randomSource==="own"&&a.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${a.length}\
).`}:{randomObjects:a}}function O(){let t=e("model").value,n=M[e("platform").value]||M.unsure;e("model").replaceChildren(),n.forEach(([r,o])=>{let a=document.createElement("option");a.
value=r,a.textContent=o,e("model").append(a)}),n.some(([r])=>r===t)&&(e("model").value=t),e("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",b()}function b(){let t=e("platform").value,n=e("model").value,r=e("kind").value,o=e("language").value,a="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";t==="flow"&&n==="veo"&&(a="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
is, Audio und Referenzfunktionen m\xFCssen im tats\xE4chlichen Interface gepr\xFCft werden."),n==="omni"&&(a="Gemini Omni 1.2 Flash: Positiver LIORA-Praxistest \
f\xFCr Talking Head und Stand-up-Comedy mit nat\xFCrlichem deutschem Dialog. Andere Formate, Referenzmodi und die Verf\xFCgbarkeit auf dieser Plattform gesondert pr\xFCfen."),
n==="recommend"&&(a="LIORA w\xE4hlt erst nach Pr\xFCfung von Idee, Plattform, Referenzen und Audio ein konkretes Modell."),(o==="Deutsch"||o==="Deutsch (Schweiz\
er Akzent)")&&(n==="kling"?a="Deutsch gew\xE4hlt: Kling 4.0 verwenden. \xC4ltere Kling-Versionen nicht als Standard f\xFCr native deutsche Dialoge empfehlen. Verf\xFCgbarke\
it auf deiner Plattform pr\xFCfen.":n==="seedance"?a="Deutsch mit Seedance 2.5: Aussprache und Lip-Sync pr\xFCfen, insbesondere Umlaute, sch-Laut, Vorsilben und zu\
sammengesetzte W\xF6rter. Keine automatische phonetische Umschreibung.":n==="omni"?a="LIORA-Praxiserfahrung: Gemini Omni 1.2 Flash liefert sehr gute Ergebnisse \
f\xFCr Talking Head und Stand-up-Comedy; deutsche Sprache funktionierte im Test hervorragend. Stimme, Akzent und Verf\xFCgbarkeit im jeweiligen Modus dennoch pr\xFCfen.":
n==="veo"&&(a="Deutsch mit Veo 3.1 ist nach LIORA-Praxiserfahrung weniger zuverl\xE4ssig. F\xFCr deutsche Dialoge bevorzugt Gemini Omni 1.2 Flash oder Kling 4.0 w\xE4hle\
n. Falls Veo ausdr\xFCcklich gew\xFCnscht: kurzen Sprachtest einplanen."),n==="recommend"?a="Deutscher Dialog: f\xFCr Talking Head und Stand-up Gemini Omni 1.2 Fla\
sh als praxiserprobte Option bevorzugt pr\xFCfen; sonst Kling 4.0; Veo 3.1 f\xFCr Deutsch wegen schwankender Aussprache nicht bevorzugen, Seedance 2.5 nur mit Ausspra\
chekontrolle auf der gew\xE4hlten Plattform pr\xFCfen; keine pauschale Empfehlung \xE4lterer Kling-Versionen.":n==="heygen"&&(a="HeyGen ist ein separater Avatar\
-/Sprachworkflow; deutsche Sprache und Lip-Sync im gew\xE4hlten Modus pr\xFCfen. Die Kling-/Seedance-Regel gilt nicht pauschal f\xFCr HeyGen.")),o==="Deutsch (S\
chweizer Akzent)"&&(a+=" Sprechweise: Schweizer Hochdeutsch mit nat\xFCrlichem, dezentem Schweizer Akzent; kein Dialekt. Akzent kann je nach Engine abweichen."),
e("compat").textContent=a}function X(){let t=e("kind").value;if(t!=="talk"&&t!=="standup")return;let n=e("scriptText").value.trim(),r=n?n.split(/\s+/u).filter(Boolean).
length:0,o=t==="standup"?45:55,a=t==="standup"?125:135,i=t==="standup"?7:4,s=r?Math.ceil(r*60/a+i):0,l=e("scriptBudget");if(!r){l.textContent="30-Sekunden-Planu\
ng: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zeitbudget.";
return}let c=r>o||s>30;l.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${i} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: bis ${o}\
 W\xF6rter / 30 s. ${c?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function q(){
let t=e("kind").value,n=t==="talk"||t==="standup";e("scriptField").classList.toggle("hidden",!n),e("scriptText").disabled=!n,X(),e("scriptHint").textContent=t===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function _(){e("kind").value===
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
 Wer macht oder sagt was? Was ist die Pointe?"}function y(){e("random10Field").classList.toggle("hidden",e("kind").value!=="random10"),e("randomItemsField").classList.
toggle("hidden",e("kind").value!=="random10"||e("randomSource").value!=="own"),e("storyHelp").classList.toggle("hidden",e("kind").value!=="storytelling");let t=e(
"kind").value==="fairytale"||e("kind").value==="random10"&&e("randomWorld").value==="fairy";e("fairyField").classList.toggle("hidden",!t),e("customFairyField").
classList.toggle("hidden",!t||e("fairyTale").value!=="custom")}function T(){let t=e("people").value,n=t==="auto"?0:Number(t),r=e("personRefs"),o={};r.querySelectorAll(
"input[type=text]").forEach(a=>o[a.id]=a.value),r.replaceChildren();for(let a=0;a<n;a++){let i=String.fromCharCode(65+a),s=document.createElement("div");s.className=
"ref-card",s.innerHTML=`<div class="ref-title">Person ${i}</div><div class="grid"><div><label for="person${a}">Name / Rolle</label><input id="person${a}" type="\
text" placeholder="z. B. Nyra"></div><div><label for="avatar${a}">Avatarbild</label><select id="avatar${a}"><option value="none">Noch kein Bild</option><option \
value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${a}\
">Outfitbild</label><select id="outfit${a}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option valu\
e="create">LIORA soll Outfit vorschlagen</option></select></div><div><label for="notes${a}">Wichtige Merkmale</label><input id="notes${a}" type="text" placehold\
er="z. B. Frisur beibehalten"></div></div>`,r.append(s),["person"+a,"notes"+a].forEach(l=>{o[l]&&(e(l).value=o[l])})}if(t==="auto"){let a=document.createElement(
"p");a.className="small",a.textContent="LIORA bestimmt die ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",r.append(
a)}if(n===0&&t!=="auto"){let a=document.createElement("p");a.className="small",a.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz od\
er einen Startframe vorbereiten.",r.append(a)}N()}function le(){e("prompt").value="",e("outputPanel").style.display="none",e("copy").classList.add("hidden"),e("\
status").textContent=""}function U(t){p(),!(!t&&!window.confirm("Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht\
."))&&(t?(document.querySelector('input[name=ideaMode][value="own"]').checked=!0,e("kind").value="talk",e("idea").value="",e("randomItems").value="",e("scriptTe\
xt").value="",e("location").value="",e("locationRef").value="none",e("keyframeRef").value="none"):(localStorage.removeItem(I()),window._restoring=null,document.
querySelector('input[name=ideaMode][value="own"]').checked=!0,["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(
n=>{let r=e(n);r.selectedIndex=0}),["idea","scriptText","randomItems","location","extra","ciAudience"].forEach(n=>e(n).value=""),e("ciGoal").value="comments",e(
"ciTone").value="authentic",O(),T()),E(),q(),b(),y(),F(),le(),["idea","extra"].forEach(h),x(),e("status").textContent=t?"\u2713 Neues Video bereit. Deine Avatar- und\
 pers\xF6nlichen Angaben bleiben erhalten. Bitte die Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",
D(),w(2),v(2),e("idea").focus())}function J(t){return t.toLocaleLowerCase("de-CH").replace(/ae/g,"\xE4").replace(/oe/g,"\xF6").replace(/ue/g,"\xFC").normalize("\
NFD").replace(/\p{M}/gu,"").replace(/ß/g,"ss").trim()}function F(){e("fairySearch").value="",e("fairySearchResults").replaceChildren(),e("fairySearchResults").
hidden=!0,e("fairySearchStatus").textContent=""}function Q(){let t=J(e("fairySearch").value),n=e("fairyTale"),r=e("fairySearchResults"),o=Array.from(n.options).
filter(a=>a.parentElement.tagName==="OPTGROUP"&&t.split(/\s+/).every(i=>J(a.textContent).includes(i)));if(r.replaceChildren(),r.hidden=!t||o.length===0,e("fairy\
SearchStatus").textContent=t?o.length?o.length===1?"1 Treffer":o.length+" Treffer":"Kein Treffer. Du kannst unten ein eigenes M\xE4rchen w\xE4hlen.":"",!r.hidden)
for(let a of o){let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=a.textContent,s.addEventListener("click",()=>{
n.value=a.value,F(),n.dispatchEvent(new Event("change",{bubbles:!0})),n.focus()}),i.append(s),r.append(i)}}function Y(t,{enableCameraRoll:n=!1}={}){if(n){let r=document.
createElement("div");r.className="field";let o=document.createElement("label"),a=document.createElement("input");a.type="checkbox",a.id="cameraRoll",o.append(a,
" Dynamischer Einstieg: 90\xB0-Kameraroll");let i=document.createElement("p");i.className="hint",i.textContent="F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",
r.append(o,i),e("compat").before(r);let s=()=>{r.hidden=a.disabled=e("ratio").value!=="9:16"};e("ratio").addEventListener("change",s);for(let l of["newVideo","f\
ullReset"])e(l).addEventListener("click",()=>{a.checked=!1,queueMicrotask(s)});queueMicrotask(s)}e("newVideo").addEventListener("click",()=>U(!0)),e("fullReset").
addEventListener("click",()=>U(!1)),e("scriptText").addEventListener("input",X),e("generate").addEventListener("click",async()=>{let r=B();e("cameraRoll")?.checked&&
r.ratio==="9:16"&&(r.cameraRoll=!0);let o=Z(r);if(o.error){w(2,{focus:!1}),v(2,!0),e("status").textContent=o.error,e(o.field).focus();return}w(4,{focus:!1}),v(4);
try{let a=t(r,o.randomObjects);typeof a=="string"?e("prompt").value=a:(e("generate").disabled=!0,e("status").textContent="Auftrag wird erstellt \u2026",e("promp\
t").value=await a)}catch{v(4,!0),e("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{e("generate").disabled=!1}
e("outputPanel").style.display="block",e("copy").classList.remove("hidden"),e("status").textContent="Auftrag erstellt. Jetzt kopieren und in ChatGPT einf\xFCgen.",
x()}),e("copy").addEventListener("click",async()=>{if(!e("prompt").value)return;let r=await K(e("prompt").value);v(4),e("status").textContent=r?"\u2713 Auftrag kopie\
rt. Du kannst ihn jetzt in ChatGPT einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),e("fairySearch").addEventListener(
"input",Q),e("fairySearch").addEventListener("search",Q),e("fairySearch").addEventListener("keydown",r=>{r.key==="Escape"&&F(),r.key==="Enter"&&!e("fairySearchR\
esults").hidden&&(r.preventDefault(),e("fairySearchResults").querySelector("button").click())}),e("fairyTale").addEventListener("change",F),e("randomWorld").addEventListener(
"change",y),e("randomSource").addEventListener("change",y),e("randomItems").addEventListener("input",()=>{e("randomItemsCount").textContent=e("randomItems").value.
split(/[\n;,]+/u).map(r=>r.trim()).filter(Boolean).length+" von 10 Gegenst\xE4nden"}),e("fairyTale").addEventListener("change",y),e("platform").addEventListener(
"change",O),e("kind").addEventListener("change",()=>{_(),q(),b(),E(),y()}),e("model").addEventListener("change",b),e("language").addEventListener("change",b),e(
"people").addEventListener("change",T),document.querySelectorAll("input[name=ideaMode]").forEach(r=>r.addEventListener("change",E)),document.addEventListener("i\
nput",r=>{r.target.closest("#app")&&x()}),document.addEventListener("change",r=>{r.target.closest("#app")&&x()}),O(),_(),T(),H({updateModels:O,updateIdeaMode:E,
renderPeople:T,updateCompatibility:b}),E(),q(),y(),j(),W()}import{edgeUrl as ce}from"./customer-config.js";var g=document.getElementById("customer-access"),ne=document.getElementById("customer-studio"),A=document.body.hasAttribute(
"data-admin-preview"),C,ee=!1;function de(t){let n=new URL(t);if(n.protocol!=="https:"||!n.hostname.endsWith(".supabase.co")||n.username||n.password||n.search||
n.hash||n.pathname!=="/functions/v1/liora-access")throw new Error("Ung\xFCltiger Edge-Link.");return n.href}async function L(t,n={},r=C){let o=await fetch(de(ce)+
t,{method:"POST",headers:{"content-type":"application/json",...r?{"x-liora-session":r}:{}},body:JSON.stringify(n),credentials:"omit",cache:"no-store",redirect:"\
error",signal:AbortSignal.timeout(1e4)}),a=await o.json();if(!o.ok)throw o.status===401&&r&&location.reload(),new Error(a.error||"Anfrage fehlgeschlagen.");return a}
function te(t,n){let r=document.createElement("button");return r.type="button",r.className="secondary",r.textContent=t,r.addEventListener("click",n),r}async function re(){
try{await L("/logout"),C=void 0,location.reload()}catch{if(!C)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut vers\
uchen.")}}function ae(t=A){let n=g.querySelector("form");g.querySelector("h1").textContent=t?"Administration":"Willkommen zur\xFCck",g.querySelector("[data-desc\
ription]").textContent=t?"Melde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let r=g.querySelector(
"[data-role]");r.hidden=A,r.textContent=t?"Zum Kundenzugang":"Zur Administration",r.onclick=()=>{n.reset(),ae(!t)};let o=g.querySelector("[role=status]");o.textContent=
"",n.onsubmit=async a=>{a.preventDefault();let i=n.querySelector("button[type=submit]"),s=new FormData(n);i.disabled=!0,r.disabled=!0,o.textContent="";try{let l=await L(
t?"/admin/login":"/login",Object.fromEntries(s));if(C=l.token,n.reset(),t&&!A)try{await oe()}catch(c){throw C=void 0,c}else document.body.dataset.accessScope=A?
"admin-lab":l.draftScope,g.hidden=!0,ne.hidden=!1,ee||(Y(async c=>(await L(A?"/admin/prompt":"/prompt",c)).prompt,{enableCameraRoll:l.cameraRollSupported===!0}),
ee=!0)}catch(l){o.textContent=l.message}finally{i.disabled=!1,r.disabled=!1}}}async function oe(){let{members:t}=await L("/admin/list"),n=document.getElementById(
"customer-admin"),r=n.querySelector("[role=status]"),o=n.querySelector("ul");async function a(s,l){r.textContent="";try{await L("/admin/change",{email:s,action:l}),
await oe()}catch(c){r.textContent=c.message}}o.replaceChildren();for(let{email:s,enabled:l}of t){let c=document.createElement("li"),m=document.createElement("st\
rong");m.textContent=s,c.append(m,l?" \xB7 Freigegeben ":" \xB7 Gesperrt ",te(l?"Sperren":"Freigeben",()=>a(s,l?"block":"enable"))," ",te("Entfernen",()=>{confirm(
"Diesen Zugang und seine Sitzungen entfernen?")&&a(s,"remove")})),o.append(c)}let i=n.querySelector("form");i.onsubmit=async s=>{s.preventDefault(),await a(new FormData(
i).get("email"),"add")},n.querySelector("[data-logout]").onclick=()=>re().catch(s=>{r.textContent=s.message}),g.hidden=!0,n.hidden=!1}ne.querySelector("[data-lo\
gout]").onclick=()=>re().catch(t=>{let n=document.getElementById("logout-status");n.textContent=t.message});ae();
