var t=e=>document.getElementById(e);var fe=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function A(e,{focus:n=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==e}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===e?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),t("butler-ti\
p").textContent=fe[e-1],n&&t("step-"+e+"-title").focus()}function b(e,n=!1){document.querySelector(`[data-step="${e}"] [data-status-slot]`).append(t("status")),
t("status").classList.toggle("is-error",n)}function O(){let e=t("kind").value;document.querySelectorAll("[data-format]").forEach(n=>{let r=n.dataset.format===e;
n.setAttribute("aria-pressed",String(r)),r&&(t("selection-title").textContent=n.querySelector("strong").textContent,t("selection-description").textContent=n.querySelector(
".format-copy > span").textContent)})}function $(){let e=t("kind");document.querySelectorAll("[data-format]").forEach(n=>{n.addEventListener("click",()=>{e.value!==
n.dataset.format&&(e.value=n.dataset.format,e.dispatchEvent(new Event("change",{bubbles:!0})))})}),e.addEventListener("change",O),document.querySelectorAll("[da\
ta-go]").forEach(n=>{n.addEventListener("click",()=>A(Number(n.dataset.go)))}),O()}var W={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var F=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function C(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function j(){let e=Object.fromEntries(F.map(o=>[o,t(o).value])),n=e.people==="auto"?0:Number(e.people),r=[];for(let o=0;o<n;o++)r.push({name:t(
"person"+o)?.value,notes:t("notes"+o)?.value,avatar:t("avatar"+o)?.value,outfit:t("outfit"+o)?.value});return{...e,mode:C(),personReferences:r}}function T(){let e=document.body.dataset.accessScope;return e?"liora-lab-video-v34-draft:"+e:"liora-lab-video-v34-draft"}function L(){try{let e={};F.forEach(n=>{
t(n)&&(e[n]=t(n).value)}),e.ideaMode=C();for(let n=0;n<5;n++)for(let r of["person","notes","avatar","outfit"]){let o=r+n;t(o)&&(e[o]=t(o).value)}localStorage.setItem(
T(),JSON.stringify(e))}catch{}}function Z(){if(window._restoring)for(let e=0;e<5;e++)for(let n of["person","notes","avatar","outfit"]){let r=n+e;t(r)&&window._restoring[r]&&
(t(r).value=window._restoring[r])}}function _({updateModels:e,updateIdeaMode:n,renderPeople:r,updateCompatibility:o}){try{let a=JSON.parse(localStorage.getItem(
T())||"{}");if(window._restoring=a,a.ideaMode){let i=document.querySelector(`input[name=ideaMode][value="${a.ideaMode}"]`);i&&(i.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(i=>{a[i]!==void 0&&
(i!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(a[i]))&&(t(i).value=a[i])}),e(),F.filter(i=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(i)).forEach(i=>{
(a[i]!==void 0&&t(i).querySelector('option[value="'+a[i]+'"]')||a[i]!==void 0&&t(i).tagName!=="SELECT")&&(t(i).value=a[i])}),n(),r(),o(),window._restoring=null,
t("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function J(e){try{return await navigator.clipboard.writeText(e),!0}catch{let r=t("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var S=1e4,N=window.SpeechRecognition||window.webkitSpeechRecognition,p=null;function y(e){let n=t(e);n.value.length>S&&(n.value=n.value.slice(0,S)),t(e+"Count").
textContent=n.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function h(e,n){t(e+"MicStatus").textContent=n}function v(){if(!p)return;let e=p;p=null;
try{e.recognition.stop()}catch{}let n=document.querySelector('[data-dictate="'+e.id+'"]');n.classList.remove("recording"),n.setAttribute("aria-pressed","false"),
n.textContent="\u{1F399}\uFE0F Einsprechen"}function U(e){return e.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function Q(e){let n="";for(let r of e){
let o=(r||"").trim();if(!o)continue;let a=n.trim();if(!a){n=o;continue}let i=U(a),s=U(o),l=0;for(let c=Math.min(i.length,s.length);c>=2;c--)if(i.slice(-c).join(
"|")===s.slice(0,c).join("|")){l=c;break}if(!(l===s.length&&s.length>=2))if(l){let m=[...o.matchAll(/[\p{L}\p{N}]+/gu)][l]?.index;m!==void 0&&(n=a+" "+o.slice(m).
trim())}else n=a+" "+o}return n.trim()}function pe(e){if(p){let i=p.id===e;if(v(),i){h(e,"Aufnahme beendet.");return}}if(!N){h(e,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let n=t(e);if(n.value.length>=S){h(e,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new N;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let o={id:e,recognition:r,base:n.value,finals:new Map,lastStable:"",lastPreview:""};p=o;let a=document.
querySelector('[data-dictate="'+e+'"]');a.classList.add("recording"),a.setAttribute("aria-pressed","true"),a.textContent="\u23F9 Aufnahme stoppen",h(e,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=i=>{if(p!==o)return;for(let d=i.resultIndex;d<i.results.length;d++){let R=i.results[d];R.isFinal&&o.finals.set(d,(R[0]?.transcript||
"").trim())}let s=[...o.finals.entries()].sort((d,R)=>d[0]-R[0]).map(d=>d[1]),l=Q(s),c=[];for(let d=0;d<i.results.length;d++)i.results[d].isFinal||c.push(i.results[d][0]?.
transcript||"");let m=Q([...s,...c]),k=o.base+(o.base&&!/\s$/.test(o.base)?" ":"");o.lastStable=l,o.lastPreview=m,n.value=(k+m).slice(0,S),y(e),n.dispatchEvent(
new Event("input",{bubbles:!0})),(k+l).length>=S&&(n.value=(k+l).slice(0,S),y(e),v(),h(e,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=i=>{
if(p!==o)return;v(),h(e,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[i.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{p===o&&(v(),h(e,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{v(),h(e,"Mikrofon konnte nicht gestartet werden.")}}function X(){["idea","extra"].forEach(e=>{let n=t(e);y(e),n.
addEventListener("input",()=>y(e)),n.addEventListener("paste",()=>setTimeout(()=>y(e),0)),document.querySelector('[data-dictate="'+e+'"]').addEventListener("cli\
ck",()=>pe(e))}),N||document.querySelectorAll("[data-dictate]").forEach(e=>{e.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function Y(e){let n=e.kind,r=["talk","standup"].includes(n)&&e.scriptText.trim(),o=["signature","couple","fairytale","storytelling","random10"].includes(n);if(e.
mode==="own"&&!e.idea.trim()&&!o&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let a=e.randomItems.split(/[\n;,]+/u).map(i=>i.trim()).
filter(Boolean);return n==="random10"&&e.randomSource==="own"&&a.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${a.length}\
).`}:{randomObjects:a}}function P(){let e=t("model").value,n=W[t("platform").value]||W.unsure;t("model").replaceChildren(),n.forEach(([r,o])=>{let a=document.createElement("option");a.
value=r,a.textContent=o,t("model").append(a)}),n.some(([r])=>r===e)&&(t("model").value=e),t("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",x()}function x(){let e=t("platform").value,n=t("model").value,r=t("kind").value,o=t("language").value,a="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";e==="flow"&&n==="veo"&&(a="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
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
t("compat").textContent=a}function ae(){let e=t("kind").value;if(e!=="talk"&&e!=="standup")return;let n=t("scriptText").value.trim(),r=n?n.split(/\s+/u).filter(
Boolean).length:0,o=e==="standup"?45:55,a=e==="standup"?125:135,i=e==="standup"?7:4,s=r?Math.ceil(r*60/a+i):0,l=t("scriptBudget");if(!r){l.textContent="30-Sekun\
den-Planung: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zei\
tbudget.";return}let c=r>o||s>30;l.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${i} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: b\
is ${o} W\xF6rter / 30 s. ${c?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function K(){
let e=t("kind").value,n=e==="talk"||e==="standup";t("scriptField").classList.toggle("hidden",!n),t("scriptText").disabled=!n,ae(),t("scriptHint").textContent=e===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function ee(){t("kind").value===
"whip"?(t("ratio").value="16:9",t("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(t("ratio").value="9:16",t("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function I(){let e=C(),n=e==="inspire",
r=e==="reference";t("referenceHelp").classList.toggle("hidden",!r),t("intelligencePanel").classList.toggle("hidden",!(n&&["talk","standup"].includes(t("kind").value))),
t("ideaLabel").textContent=r?"Was passiert im Inspirationsvideo?":n?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",t("idea").placeholder=
r?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kameraperspektive und welcher Effekt gefallen dir? Was m\xF6cht\
est du anders machen?":n?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":t("kind").value==="signature"?"Optional: Welche no\
rmale Alltagssituation soll v\xF6llig absurd werden?":t("kind").value==="couple"?"Optional: Romantik, Kuss, Kuscheln, Beziehungshumor oder emotionales Drama \u2013 w\
as m\xF6chtest du zeigen?":t("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du kannst auch einen fertigen Dialog einf\xFCgen.":t("\
kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welches Detail verbindet beide Momente?":t("kind").value===
"random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde werden separat festgelegt.":"Was soll passieren?\
 Wer macht oder sagt was? Was ist die Pointe?"}function oe(){let e=t("randomItems").value.split(/[\n;,]+/u).filter(n=>n.trim()).length;t("randomItemsCount").textContent=
e+" von 10 ausgef\xFCllt"}function ie(){let e=t("randomItems").value,n=/[,;]/u.test(e)?e.split(/[\n;,]+/u):e.split(`
`);t("randomItemInputs").querySelectorAll("input").forEach((r,o)=>{r.value=n[o]?.trim()??""}),oe()}function he(){let e=t("randomItemInputs");for(let n=1;n<=10;n++){
let r=document.createElement("div"),o=document.createElement("label"),a=document.createElement("input");a.id="randomItem"+n,a.maxLength=300,o.htmlFor=a.id,o.textContent=
"Ding "+n,r.append(o,a),e.append(r)}e.addEventListener("input",n=>{n.target.value=n.target.value.replace(/[,;]/gu," "),t("randomItems").value=Array.from(e.querySelectorAll(
"input"),r=>r.value.trim()).join(`
`),oe()})}function w(){t("random10Field").classList.toggle("hidden",t("kind").value!=="random10"),t("randomItemsField").classList.toggle("hidden",t("kind").value!==
"random10"||t("randomSource").value!=="own"),t("storyHelp").classList.toggle("hidden",t("kind").value!=="storytelling");let e=t("kind").value==="fairytale"||t("\
kind").value==="random10"&&t("randomWorld").value==="fairy";t("fairyField").classList.toggle("hidden",!e),t("customFairyField").classList.toggle("hidden",!e||t(
"fairyTale").value!=="custom")}function M(){let e=t("people").value,n=e==="auto"?0:Number(e),r=t("personRefs"),o={};r.querySelectorAll("input[type=text]").forEach(
a=>o[a.id]=a.value),r.replaceChildren();for(let a=0;a<n;a++){let i=String.fromCharCode(65+a),s=document.createElement("div");s.className="ref-card",s.innerHTML=
`<div class="ref-title">Person ${i}</div><div class="grid"><div><label for="person${a}">Name / Rolle</label><input id="person${a}" type="text" placeholder="z. B\
. Nyra"></div><div><label for="avatar${a}">Avatarbild</label><select id="avatar${a}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden\
 \u2013 im Chat hochladen</option><option value="create">LIORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${a}">Outfitbild</label><\
select id="outfit${a}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll\
 Outfit vorschlagen</option></select></div><div><label for="notes${a}">Wichtige Merkmale</label><input id="notes${a}" type="text" placeholder="z. B. Frisur beib\
ehalten"></div></div>`,r.append(s),["person"+a,"notes"+a].forEach(l=>{o[l]&&(t(l).value=o[l])})}if(e==="auto"){let a=document.createElement("p");a.className="sm\
all",a.textContent="LIORA bestimmt die ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",r.append(a)}if(n===0&&e!==
"auto"){let a=document.createElement("p");a.className="small",a.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz oder einen Startfra\
me vorbereiten.",r.append(a)}Z()}function ge(){t("prompt").value="",t("outputPanel").style.display="none",t("copy").classList.add("hidden"),t("status").textContent=
""}function te(e){v(),!(!e&&!window.confirm("Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht."))&&(e?(document.
querySelector('input[name=ideaMode][value="own"]').checked=!0,t("kind").value="talk",t("idea").value="",t("randomItems").value="",t("scriptText").value="",t("lo\
cation").value="",t("locationRef").value="none",t("keyframeRef").value="none"):(localStorage.removeItem(T()),window._restoring=null,document.querySelector('inpu\
t[name=ideaMode][value="own"]').checked=!0,["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(n=>{let r=t(n);
r.selectedIndex=0}),["idea","scriptText","randomItems","location","extra","ciAudience"].forEach(n=>t(n).value=""),t("ciGoal").value="comments",t("ciTone").value=
"authentic",P(),M()),I(),K(),x(),w(),ie(),q(),ge(),["idea","extra"].forEach(y),L(),t("status").textContent=e?"\u2713 Neues Video bereit. Deine Avatar- und pers\xF6nlich\
en Angaben bleiben erhalten. Bitte die Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",O(),A(2),b(
2),t("idea").focus())}function ne(e){return e.toLocaleLowerCase("de-CH").replace(/ae/g,"\xE4").replace(/oe/g,"\xF6").replace(/ue/g,"\xFC").normalize("NFD").replace(
/\p{M}/gu,"").replace(/ß/g,"ss").trim()}function q(){t("fairySearch").value="",t("fairySearchResults").replaceChildren(),t("fairySearchResults").hidden=!0,t("f\
airySearchStatus").textContent=""}function re(){let e=ne(t("fairySearch").value),n=t("fairyTale"),r=t("fairySearchResults"),o=Array.from(n.options).filter(a=>a.
parentElement.tagName==="OPTGROUP"&&e.split(/\s+/).every(i=>ne(a.textContent).includes(i)));if(r.replaceChildren(),r.hidden=!e||o.length===0,t("fairySearchStatu\
s").textContent=e?o.length?o.length===1?"1 Treffer":o.length+" Treffer":"Kein Treffer. Du kannst unten ein eigenes M\xE4rchen w\xE4hlen.":"",!r.hidden)for(let a of o){
let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=a.textContent,s.addEventListener("click",()=>{n.value=a.value,
q(),n.dispatchEvent(new Event("change",{bubbles:!0})),n.focus()}),i.append(s),r.append(i)}}function se(e,{enableCameraRoll:n=!1}={}){if(n){let r=document.createElement(
"div");r.className="field";let o=document.createElement("label"),a=document.createElement("input");a.type="checkbox",a.id="cameraRoll",o.append(a," Dynamischer \
Einstieg: 90\xB0-Kameraroll");let i=document.createElement("p");i.className="hint",i.textContent="F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",r.append(o,
i),t("compat").before(r);let s=()=>{r.hidden=a.disabled=t("ratio").value!=="9:16"};t("ratio").addEventListener("change",s);for(let l of["newVideo","fullReset"])
t(l).addEventListener("click",()=>{a.checked=!1,queueMicrotask(s)});queueMicrotask(s)}t("newVideo").addEventListener("click",()=>te(!0)),t("fullReset").addEventListener(
"click",()=>te(!1)),t("scriptText").addEventListener("input",ae),t("generate").addEventListener("click",async()=>{let r=j();t("cameraRoll")?.checked&&r.ratio===
"9:16"&&(r.cameraRoll=!0);let o=Y(r);if(o.error){if(A(2,{focus:!1}),b(2,!0),t("status").textContent=o.error,o.field==="randomItems"){let a=Array.from(t("randomI\
temInputs").querySelectorAll("input"));(a.find(i=>!i.value.trim())??a[0]).focus()}else t(o.field).focus();return}A(4,{focus:!1}),b(4);try{let a=e(r,o.randomObjects);
typeof a=="string"?t("prompt").value=a:(t("generate").disabled=!0,t("status").textContent="Auftrag wird erstellt \u2026",t("prompt").value=await a)}catch{b(4,!0),
t("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{t("generate").disabled=!1}t("outputPanel").style.display=
"block",t("copy").classList.remove("hidden"),t("status").textContent="Auftrag erstellt. Jetzt kopieren und in ChatGPT einf\xFCgen.",L()}),t("copy").addEventListener(
"click",async()=>{if(!t("prompt").value)return;let r=await J(t("prompt").value);b(4),t("status").textContent=r?"\u2713 Auftrag kopiert. Du kannst ihn jetzt in ChatGP\
T einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),t("fairySearch").addEventListener("input",re),t("fairySearch").
addEventListener("search",re),t("fairySearch").addEventListener("keydown",r=>{r.key==="Escape"&&q(),r.key==="Enter"&&!t("fairySearchResults").hidden&&(r.preventDefault(),
t("fairySearchResults").querySelector("button").click())}),t("fairyTale").addEventListener("change",q),t("randomWorld").addEventListener("change",w),t("randomSo\
urce").addEventListener("change",w),t("fairyTale").addEventListener("change",w),t("platform").addEventListener("change",P),t("kind").addEventListener("change",()=>{
ee(),K(),x(),I(),w()}),t("model").addEventListener("change",x),t("language").addEventListener("change",x),t("people").addEventListener("change",M),document.querySelectorAll(
"input[name=ideaMode]").forEach(r=>r.addEventListener("change",I)),document.addEventListener("input",r=>{r.target.closest("#app")&&L()}),document.addEventListener(
"change",r=>{r.target.closest("#app")&&L()}),he(),P(),ee(),M(),_({updateModels:P,updateIdeaMode:I,renderPeople:M,updateCompatibility:x}),I(),K(),w(),ie(),X(),$()}import{edgeUrl as ve}from"./customer-config.js";var f=document.getElementById("customer-access"),de=document.getElementById("customer-studio"),u=document.body.hasAttribute(
"data-admin-preview"),G=u?"liora-video-coach:lab-session":"liora-video-coach:session",z="liora-video-coach:remembered-session",g;function B(e,n){try{return JSON.
parse(window[e].getItem(n)||"null")}catch{return null}}function D(){if(!u&&g&&B("localStorage",z)?.token===g)try{localStorage.removeItem(z)}catch{}g=void 0;try{
sessionStorage.removeItem(G)}catch{}}function ye(e,n,r){let o=JSON.stringify({token:e.token,admin:n,cameraRollSupported:e.cameraRollSupported===!0});try{sessionStorage.
setItem(G,o)}catch{}if(!u)try{r?localStorage.setItem(z,o):localStorage.removeItem(z)}catch{}}var le=!1;function ke(e){let n=new URL(e);if(n.protocol!=="https:"||
!n.hostname.endsWith(".supabase.co")||n.username||n.password||n.search||n.hash||n.pathname!=="/functions/v1/liora-access")throw new Error("Ung\xFCltiger Edge-Link.");
return n.href}async function E(e,n={},{recover:r=!1}={}){let o=g,a=await fetch(ke(ve)+e,{method:"POST",headers:{"content-type":"application/json",...o?{"x-liora\
-session":o}:{}},body:JSON.stringify(n),credentials:"omit",cache:"no-store",redirect:"error",signal:AbortSignal.timeout(1e4)}),i=await a.json();if(!a.ok)throw a.
status===401&&o&&(D(),r||location.reload()),Object.assign(new Error(i.error||"Anfrage fehlgeschlagen."),{status:a.status});return i}function ce(e,n){let r=document.
createElement("button");return r.type="button",r.className="secondary",r.textContent=e,r.addEventListener("click",n),r}async function ue(){try{await E("/logout"),
D(),location.reload()}catch{if(!g)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut versuchen.")}}function H(e=u){
let n=f.querySelector("form");f.querySelector("h1").textContent=e?"Administration":"Willkommen zur\xFCck",f.querySelector("[data-description]").textContent=e?"M\
elde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let r=f.querySelector("[data-role]");
r.hidden=u,r.textContent=e?"Zum Kundenzugang":"Zur Administration",r.onclick=()=>{n.reset(),H(!e)};let o=f.querySelector("[role=status]");o.textContent="",n.onsubmit=
async a=>{a.preventDefault();let i=n.querySelector("button[type=submit]"),s=new FormData(n),l=s.has("remember");i.disabled=!0,r.disabled=!0,o.textContent="";try{
let c=await E(e?"/admin/login":"/login",{email:s.get("email"),password:s.get("password")});g=c.token,n.reset(),e&&!u?await V():me(c),ye(c,e,l)}catch(c){D(),o.textContent=
c.message}finally{i.disabled=!1,r.disabled=!1}}}function me(e){document.body.dataset.accessScope=u?"admin-lab":e.draftScope,f.hidden=!0,de.hidden=!1,le||(se(async n=>(await E(
u?"/admin/prompt":"/prompt",n)).prompt,{enableCameraRoll:e.cameraRollSupported===!0}),le=!0)}async function V(e){let{members:n}=e??await E("/admin/list"),r=document.
getElementById("customer-admin"),o=r.querySelector("[role=status]"),a=r.querySelector("ul");async function i(l,c){o.textContent="";try{await E("/admin/change",{
email:l,action:c}),await V()}catch(m){o.textContent=m.message}}a.replaceChildren();for(let{email:l,enabled:c}of n){let m=document.createElement("li"),k=document.
createElement("strong");k.textContent=l,m.append(k,c?" \xB7 Freigegeben ":" \xB7 Gesperrt ",ce(c?"Sperren":"Freigeben",()=>i(l,c?"block":"enable"))," ",ce("Entf\
ernen",()=>{confirm("Diesen Zugang und seine Sitzungen entfernen?")&&i(l,"remove")})),a.append(m)}let s=r.querySelector("form");s.onsubmit=async l=>{l.preventDefault(),
await i(new FormData(s).get("email"),"add")},r.querySelector("[data-logout]").onclick=()=>ue().catch(l=>{o.textContent=l.message}),f.hidden=!0,r.hidden=!1}de.querySelector(
"[data-logout]").onclick=()=>ue().catch(e=>{let n=document.getElementById("logout-status");n.textContent=e.message});async function be(){let e=B("sessionStorage",
G)??(u?null:B("localStorage",z));if(!e||typeof e.admin!="boolean"||u&&!e.admin||typeof e.token!="string"||!/^[A-Za-z0-9_-]{43}$/.test(e.token)){D(),H();return}f.
hidden=!0,g=e.token;try{let n=await E(e.admin?"/admin/list":"/session",{},{recover:!0});e.admin&&!u?await V(n):me({...n,cameraRollSupported:e.cameraRollSupported});
try{sessionStorage.setItem(G,JSON.stringify(e))}catch{}}catch(n){n.status===401||n.status===403?D():g=void 0,f.hidden=!1,H(e.admin),f.querySelector("[role=statu\
s]").textContent=n.status===401?"Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.":"Die Sitzung konnte nicht gepr\xFCft werden. Lade die Seite neu oder me\
lde dich erneut an."}}be();
