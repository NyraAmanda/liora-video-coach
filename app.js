var t=e=>document.getElementById(e);var ce=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function C(e,{focus:n=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==e}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===e?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),t("butler-ti\
p").textContent=ce[e-1],n&&t("step-"+e+"-title").focus()}function y(e,n=!1){document.querySelector(`[data-step="${e}"] [data-status-slot]`).append(t("status")),
t("status").classList.toggle("is-error",n)}function I(){let e=t("kind").value;document.querySelectorAll("[data-format]").forEach(n=>{let r=n.dataset.format===e;
n.setAttribute("aria-pressed",String(r)),r&&(t("selection-title").textContent=n.querySelector("strong").textContent,t("selection-description").textContent=n.querySelector(
".format-copy > span").textContent)})}function H(){let e=t("kind");document.querySelectorAll("[data-format]").forEach(n=>{n.addEventListener("click",()=>{e.value!==
n.dataset.format&&(e.value=n.dataset.format,e.dispatchEvent(new Event("change",{bubbles:!0})))})}),e.addEventListener("change",I),document.querySelectorAll("[da\
ta-go]").forEach(n=>{n.addEventListener("click",()=>C(Number(n.dataset.go)))}),I()}var q={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var O=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function L(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function V(){let e=Object.fromEntries(O.map(o=>[o,t(o).value])),n=e.people==="auto"?0:Number(e.people),r=[];for(let o=0;o<n;o++)r.push({name:t(
"person"+o)?.value,notes:t("notes"+o)?.value,avatar:t("avatar"+o)?.value,outfit:t("outfit"+o)?.value});return{...e,mode:L(),personReferences:r}}function T(){let e=document.body.dataset.accessScope;return e?"liora-lab-video-v34-draft:"+e:"liora-lab-video-v34-draft"}function z(){try{let e={};O.forEach(n=>{
t(n)&&(e[n]=t(n).value)}),e.ideaMode=L();for(let n=0;n<5;n++)for(let r of["person","notes","avatar","outfit"]){let o=r+n;t(o)&&(e[o]=t(o).value)}localStorage.setItem(
T(),JSON.stringify(e))}catch{}}function $(){if(window._restoring)for(let e=0;e<5;e++)for(let n of["person","notes","avatar","outfit"]){let r=n+e;t(r)&&window._restoring[r]&&
(t(r).value=window._restoring[r])}}function j({updateModels:e,updateIdeaMode:n,renderPeople:r,updateCompatibility:o}){try{let a=JSON.parse(localStorage.getItem(
T())||"{}");if(window._restoring=a,a.ideaMode){let i=document.querySelector(`input[name=ideaMode][value="${a.ideaMode}"]`);i&&(i.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(i=>{a[i]!==void 0&&
(i!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(a[i]))&&(t(i).value=a[i])}),e(),O.filter(i=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(i)).forEach(i=>{
(a[i]!==void 0&&t(i).querySelector('option[value="'+a[i]+'"]')||a[i]!==void 0&&t(i).tagName!=="SELECT")&&(t(i).value=a[i])}),n(),r(),o(),window._restoring=null,
t("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function Z(e){try{return await navigator.clipboard.writeText(e),!0}catch{let r=t("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var b=1e4,G=window.SpeechRecognition||window.webkitSpeechRecognition,f=null;function v(e){let n=t(e);n.value.length>b&&(n.value=n.value.slice(0,b)),t(e+"Count").
textContent=n.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function p(e,n){t(e+"MicStatus").textContent=n}function g(){if(!f)return;let e=f;f=null;
try{e.recognition.stop()}catch{}let n=document.querySelector('[data-dictate="'+e.id+'"]');n.classList.remove("recording"),n.setAttribute("aria-pressed","false"),
n.textContent="\u{1F399}\uFE0F Einsprechen"}function _(e){return e.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function J(e){let n="";for(let r of e){
let o=(r||"").trim();if(!o)continue;let a=n.trim();if(!a){n=o;continue}let i=_(a),l=_(o),s=0;for(let c=Math.min(i.length,l.length);c>=2;c--)if(i.slice(-c).join(
"|")===l.slice(0,c).join("|")){s=c;break}if(!(s===l.length&&l.length>=2))if(s){let u=[...o.matchAll(/[\p{L}\p{N}]+/gu)][s]?.index;u!==void 0&&(n=a+" "+o.slice(u).
trim())}else n=a+" "+o}return n.trim()}function de(e){if(f){let i=f.id===e;if(g(),i){p(e,"Aufnahme beendet.");return}}if(!G){p(e,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let n=t(e);if(n.value.length>=b){p(e,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new G;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let o={id:e,recognition:r,base:n.value,finals:new Map,lastStable:"",lastPreview:""};f=o;let a=document.
querySelector('[data-dictate="'+e+'"]');a.classList.add("recording"),a.setAttribute("aria-pressed","true"),a.textContent="\u23F9 Aufnahme stoppen",p(e,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=i=>{if(f!==o)return;for(let d=i.resultIndex;d<i.results.length;d++){let R=i.results[d];R.isFinal&&o.finals.set(d,(R[0]?.transcript||
"").trim())}let l=[...o.finals.entries()].sort((d,R)=>d[0]-R[0]).map(d=>d[1]),s=J(l),c=[];for(let d=0;d<i.results.length;d++)i.results[d].isFinal||c.push(i.results[d][0]?.
transcript||"");let u=J([...l,...c]),k=o.base+(o.base&&!/\s$/.test(o.base)?" ":"");o.lastStable=s,o.lastPreview=u,n.value=(k+u).slice(0,b),v(e),n.dispatchEvent(
new Event("input",{bubbles:!0})),(k+s).length>=b&&(n.value=(k+s).slice(0,b),v(e),g(),p(e,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=i=>{
if(f!==o)return;g(),p(e,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[i.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{f===o&&(g(),p(e,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{g(),p(e,"Mikrofon konnte nicht gestartet werden.")}}function U(){["idea","extra"].forEach(e=>{let n=t(e);v(e),n.
addEventListener("input",()=>v(e)),n.addEventListener("paste",()=>setTimeout(()=>v(e),0)),document.querySelector('[data-dictate="'+e+'"]').addEventListener("cli\
ck",()=>de(e))}),G||document.querySelectorAll("[data-dictate]").forEach(e=>{e.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function Q(e){let n=e.kind,r=["talk","standup"].includes(n)&&e.scriptText.trim(),o=["signature","couple","fairytale","storytelling","random10"].includes(n);if(e.
mode==="own"&&!e.idea.trim()&&!o&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let a=e.randomItems.split(/[\n;,]+/u).map(i=>i.trim()).
filter(Boolean);return n==="random10"&&e.randomSource==="own"&&a.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${a.length}\
).`}:{randomObjects:a}}function F(){let e=t("model").value,n=q[t("platform").value]||q.unsure;t("model").replaceChildren(),n.forEach(([r,o])=>{let a=document.createElement("option");a.
value=r,a.textContent=o,t("model").append(a)}),n.some(([r])=>r===e)&&(t("model").value=e),t("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",w()}function w(){let e=t("platform").value,n=t("model").value,r=t("kind").value,o=t("language").value,a="Die genaue Modellversion, Referenzanzahl, Audiofu\
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
t("compat").textContent=a}function ne(){let e=t("kind").value;if(e!=="talk"&&e!=="standup")return;let n=t("scriptText").value.trim(),r=n?n.split(/\s+/u).filter(
Boolean).length:0,o=e==="standup"?45:55,a=e==="standup"?125:135,i=e==="standup"?7:4,l=r?Math.ceil(r*60/a+i):0,s=t("scriptBudget");if(!r){s.textContent="30-Sekun\
den-Planung: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zei\
tbudget.";return}let c=r>o||l>30;s.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${l} Sekunden inkl. ${i} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: b\
is ${o} W\xF6rter / 30 s. ${c?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function W(){
let e=t("kind").value,n=e==="talk"||e==="standup";t("scriptField").classList.toggle("hidden",!n),t("scriptText").disabled=!n,ne(),t("scriptHint").textContent=e===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function X(){t("kind").value===
"whip"?(t("ratio").value="16:9",t("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(t("ratio").value="9:16",t("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function D(){let e=L(),n=e==="inspire",
r=e==="reference";t("referenceHelp").classList.toggle("hidden",!r),t("intelligencePanel").classList.toggle("hidden",!(n&&["talk","standup"].includes(t("kind").value))),
t("ideaLabel").textContent=r?"Was passiert im Inspirationsvideo?":n?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",t("idea").placeholder=
r?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kameraperspektive und welcher Effekt gefallen dir? Was m\xF6cht\
est du anders machen?":n?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":t("kind").value==="signature"?"Optional: Welche no\
rmale Alltagssituation soll v\xF6llig absurd werden?":t("kind").value==="couple"?"Optional: Romantik, Kuss, Kuscheln, Beziehungshumor oder emotionales Drama \u2013 w\
as m\xF6chtest du zeigen?":t("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du kannst auch einen fertigen Dialog einf\xFCgen.":t("\
kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welches Detail verbindet beide Momente?":t("kind").value===
"random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde werden separat festgelegt.":"Was soll passieren?\
 Wer macht oder sagt was? Was ist die Pointe?"}function S(){t("random10Field").classList.toggle("hidden",t("kind").value!=="random10"),t("randomItemsField").classList.
toggle("hidden",t("kind").value!=="random10"||t("randomSource").value!=="own"),t("storyHelp").classList.toggle("hidden",t("kind").value!=="storytelling");let e=t(
"kind").value==="fairytale"||t("kind").value==="random10"&&t("randomWorld").value==="fairy";t("fairyField").classList.toggle("hidden",!e),t("customFairyField").
classList.toggle("hidden",!e||t("fairyTale").value!=="custom")}function P(){let e=t("people").value,n=e==="auto"?0:Number(e),r=t("personRefs"),o={};r.querySelectorAll(
"input[type=text]").forEach(a=>o[a.id]=a.value),r.replaceChildren();for(let a=0;a<n;a++){let i=String.fromCharCode(65+a),l=document.createElement("div");l.className=
"ref-card",l.innerHTML=`<div class="ref-title">Person ${i}</div><div class="grid"><div><label for="person${a}">Name / Rolle</label><input id="person${a}" type="\
text" placeholder="z. B. Nyra"></div><div><label for="avatar${a}">Avatarbild</label><select id="avatar${a}"><option value="none">Noch kein Bild</option><option \
value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${a}\
">Outfitbild</label><select id="outfit${a}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option valu\
e="create">LIORA soll Outfit vorschlagen</option></select></div><div><label for="notes${a}">Wichtige Merkmale</label><input id="notes${a}" type="text" placehold\
er="z. B. Frisur beibehalten"></div></div>`,r.append(l),["person"+a,"notes"+a].forEach(s=>{o[s]&&(t(s).value=o[s])})}if(e==="auto"){let a=document.createElement(
"p");a.className="small",a.textContent="LIORA bestimmt die ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",r.append(
a)}if(n===0&&e!=="auto"){let a=document.createElement("p");a.className="small",a.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz od\
er einen Startframe vorbereiten.",r.append(a)}$()}function ue(){t("prompt").value="",t("outputPanel").style.display="none",t("copy").classList.add("hidden"),t("\
status").textContent=""}function Y(e){g(),!(!e&&!window.confirm("Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht\
."))&&(e?(document.querySelector('input[name=ideaMode][value="own"]').checked=!0,t("kind").value="talk",t("idea").value="",t("randomItems").value="",t("scriptTe\
xt").value="",t("location").value="",t("locationRef").value="none",t("keyframeRef").value="none"):(localStorage.removeItem(T()),window._restoring=null,document.
querySelector('input[name=ideaMode][value="own"]').checked=!0,["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(
n=>{let r=t(n);r.selectedIndex=0}),["idea","scriptText","randomItems","location","extra","ciAudience"].forEach(n=>t(n).value=""),t("ciGoal").value="comments",t(
"ciTone").value="authentic",F(),P()),D(),W(),w(),S(),M(),ue(),["idea","extra"].forEach(v),z(),t("status").textContent=e?"\u2713 Neues Video bereit. Deine Avatar- und\
 pers\xF6nlichen Angaben bleiben erhalten. Bitte die Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",
I(),C(2),y(2),t("idea").focus())}function ee(e){return e.toLocaleLowerCase("de-CH").replace(/ae/g,"\xE4").replace(/oe/g,"\xF6").replace(/ue/g,"\xFC").normalize(
"NFD").replace(/\p{M}/gu,"").replace(/ß/g,"ss").trim()}function M(){t("fairySearch").value="",t("fairySearchResults").replaceChildren(),t("fairySearchResults").
hidden=!0,t("fairySearchStatus").textContent=""}function te(){let e=ee(t("fairySearch").value),n=t("fairyTale"),r=t("fairySearchResults"),o=Array.from(n.options).
filter(a=>a.parentElement.tagName==="OPTGROUP"&&e.split(/\s+/).every(i=>ee(a.textContent).includes(i)));if(r.replaceChildren(),r.hidden=!e||o.length===0,t("fair\
ySearchStatus").textContent=e?o.length?o.length===1?"1 Treffer":o.length+" Treffer":"Kein Treffer. Du kannst unten ein eigenes M\xE4rchen w\xE4hlen.":"",!r.hidden)
for(let a of o){let i=document.createElement("li"),l=document.createElement("button");l.type="button",l.textContent=a.textContent,l.addEventListener("click",()=>{
n.value=a.value,M(),n.dispatchEvent(new Event("change",{bubbles:!0})),n.focus()}),i.append(l),r.append(i)}}function re(e,{enableCameraRoll:n=!1}={}){if(n){let r=document.
createElement("div");r.className="field";let o=document.createElement("label"),a=document.createElement("input");a.type="checkbox",a.id="cameraRoll",o.append(a,
" Dynamischer Einstieg: 90\xB0-Kameraroll");let i=document.createElement("p");i.className="hint",i.textContent="F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",
r.append(o,i),t("compat").before(r);let l=()=>{r.hidden=a.disabled=t("ratio").value!=="9:16"};t("ratio").addEventListener("change",l);for(let s of["newVideo","f\
ullReset"])t(s).addEventListener("click",()=>{a.checked=!1,queueMicrotask(l)});queueMicrotask(l)}t("newVideo").addEventListener("click",()=>Y(!0)),t("fullReset").
addEventListener("click",()=>Y(!1)),t("scriptText").addEventListener("input",ne),t("generate").addEventListener("click",async()=>{let r=V();t("cameraRoll")?.checked&&
r.ratio==="9:16"&&(r.cameraRoll=!0);let o=Q(r);if(o.error){C(2,{focus:!1}),y(2,!0),t("status").textContent=o.error,t(o.field).focus();return}C(4,{focus:!1}),y(4);
try{let a=e(r,o.randomObjects);typeof a=="string"?t("prompt").value=a:(t("generate").disabled=!0,t("status").textContent="Auftrag wird erstellt \u2026",t("promp\
t").value=await a)}catch{y(4,!0),t("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{t("generate").disabled=!1}
t("outputPanel").style.display="block",t("copy").classList.remove("hidden"),t("status").textContent="Auftrag erstellt. Jetzt kopieren und in ChatGPT einf\xFCgen.",
z()}),t("copy").addEventListener("click",async()=>{if(!t("prompt").value)return;let r=await Z(t("prompt").value);y(4),t("status").textContent=r?"\u2713 Auftrag kopie\
rt. Du kannst ihn jetzt in ChatGPT einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),t("fairySearch").addEventListener(
"input",te),t("fairySearch").addEventListener("search",te),t("fairySearch").addEventListener("keydown",r=>{r.key==="Escape"&&M(),r.key==="Enter"&&!t("fairySearc\
hResults").hidden&&(r.preventDefault(),t("fairySearchResults").querySelector("button").click())}),t("fairyTale").addEventListener("change",M),t("randomWorld").addEventListener(
"change",S),t("randomSource").addEventListener("change",S),t("randomItems").addEventListener("input",()=>{t("randomItemsCount").textContent=t("randomItems").value.
split(/[\n;,]+/u).map(r=>r.trim()).filter(Boolean).length+" von 10 Gegenst\xE4nden"}),t("fairyTale").addEventListener("change",S),t("platform").addEventListener(
"change",F),t("kind").addEventListener("change",()=>{X(),W(),w(),D(),S()}),t("model").addEventListener("change",w),t("language").addEventListener("change",w),t(
"people").addEventListener("change",P),document.querySelectorAll("input[name=ideaMode]").forEach(r=>r.addEventListener("change",D)),document.addEventListener("i\
nput",r=>{r.target.closest("#app")&&z()}),document.addEventListener("change",r=>{r.target.closest("#app")&&z()}),F(),X(),P(),j({updateModels:F,updateIdeaMode:D,
renderPeople:P,updateCompatibility:w}),D(),W(),S(),U(),H()}import{edgeUrl as me}from"./customer-config.js";var m=document.getElementById("customer-access"),ie=document.getElementById("customer-studio"),h=document.body.hasAttribute(
"data-admin-preview"),B=h?"liora-video-coach:lab-session":"liora-video-coach:session",E;function x(){E=void 0;try{sessionStorage.removeItem(B)}catch{}}function fe(e,n){
try{sessionStorage.setItem(B,JSON.stringify({token:e.token,admin:n,cameraRollSupported:e.cameraRollSupported===!0}))}catch{}}var ae=!1;function pe(e){let n=new URL(
e);if(n.protocol!=="https:"||!n.hostname.endsWith(".supabase.co")||n.username||n.password||n.search||n.hash||n.pathname!=="/functions/v1/liora-access")throw new Error(
"Ung\xFCltiger Edge-Link.");return n.href}async function A(e,n={},{recover:r=!1}={}){let o=E,a=await fetch(pe(me)+e,{method:"POST",headers:{"content-type":"appl\
ication/json",...o?{"x-liora-session":o}:{}},body:JSON.stringify(n),credentials:"omit",cache:"no-store",redirect:"error",signal:AbortSignal.timeout(1e4)}),i=await a.
json();if(!a.ok)throw a.status===401&&o&&(x(),r||location.reload()),Object.assign(new Error(i.error||"Anfrage fehlgeschlagen."),{status:a.status});return i}function oe(e,n){
let r=document.createElement("button");return r.type="button",r.className="secondary",r.textContent=e,r.addEventListener("click",n),r}async function se(){try{await A(
"/logout"),x(),location.reload()}catch{if(!E)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut versuchen.")}}function N(e=h){
let n=m.querySelector("form");m.querySelector("h1").textContent=e?"Administration":"Willkommen zur\xFCck",m.querySelector("[data-description]").textContent=e?"M\
elde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let r=m.querySelector("[data-role]");
r.hidden=h,r.textContent=e?"Zum Kundenzugang":"Zur Administration",r.onclick=()=>{n.reset(),N(!e)};let o=m.querySelector("[role=status]");o.textContent="",n.onsubmit=
async a=>{a.preventDefault();let i=n.querySelector("button[type=submit]"),l=new FormData(n);i.disabled=!0,r.disabled=!0,o.textContent="";try{let s=await A(e?"/a\
dmin/login":"/login",Object.fromEntries(l));E=s.token,n.reset(),e&&!h?await K():le(s),fe(s,e)}catch(s){x(),o.textContent=s.message}finally{i.disabled=!1,r.disabled=
!1}}}function le(e){document.body.dataset.accessScope=h?"admin-lab":e.draftScope,m.hidden=!0,ie.hidden=!1,ae||(re(async n=>(await A(h?"/admin/prompt":"/prompt",
n)).prompt,{enableCameraRoll:e.cameraRollSupported===!0}),ae=!0)}async function K(e){let{members:n}=e??await A("/admin/list"),r=document.getElementById("custome\
r-admin"),o=r.querySelector("[role=status]"),a=r.querySelector("ul");async function i(s,c){o.textContent="";try{await A("/admin/change",{email:s,action:c}),await K()}catch(u){
o.textContent=u.message}}a.replaceChildren();for(let{email:s,enabled:c}of n){let u=document.createElement("li"),k=document.createElement("strong");k.textContent=
s,u.append(k,c?" \xB7 Freigegeben ":" \xB7 Gesperrt ",oe(c?"Sperren":"Freigeben",()=>i(s,c?"block":"enable"))," ",oe("Entfernen",()=>{confirm("Diesen Zugang und\
 seine Sitzungen entfernen?")&&i(s,"remove")})),a.append(u)}let l=r.querySelector("form");l.onsubmit=async s=>{s.preventDefault(),await i(new FormData(l).get("e\
mail"),"add")},r.querySelector("[data-logout]").onclick=()=>se().catch(s=>{o.textContent=s.message}),m.hidden=!0,r.hidden=!1}ie.querySelector("[data-logout]").onclick=
()=>se().catch(e=>{let n=document.getElementById("logout-status");n.textContent=e.message});async function he(){let e;try{e=JSON.parse(sessionStorage.getItem(B)||
"null")}catch{x()}if(!e||typeof e.admin!="boolean"||h&&!e.admin||typeof e.token!="string"||!/^[A-Za-z0-9_-]{43}$/.test(e.token)){x(),N();return}m.hidden=!0,E=e.
token;try{let n=await A(e.admin?"/admin/list":"/session",{},{recover:!0});e.admin&&!h?await K(n):le({...n,cameraRollSupported:e.cameraRollSupported})}catch(n){n.
status===401||n.status===403?x():E=void 0,m.hidden=!1,N(e.admin),m.querySelector("[role=status]").textContent=n.status===401?"Deine Sitzung ist abgelaufen. Bitt\
e melde dich erneut an.":"Die Sitzung konnte nicht gepr\xFCft werden. Lade die Seite neu oder melde dich erneut an."}}he();
