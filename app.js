var t=e=>document.getElementById(e);var ke=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function C(e,{focus:n=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==e}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===e?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),t("butler-ti\
p").textContent=ke[e-1],n&&t("step-"+e+"-title").focus()}function w(e,n=!1){document.querySelector(`[data-step="${e}"] [data-status-slot]`).append(t("status")),
t("status").classList.toggle("is-error",n)}function F(){let e=t("kind").value;document.querySelectorAll("[data-format]").forEach(n=>{let r=n.dataset.format===e;
n.setAttribute("aria-pressed",String(r)),r&&(t("selection-title").textContent=n.querySelector("strong").textContent,t("selection-description").textContent=n.querySelector(
".format-copy > span").textContent)})}function Q(){let e=t("kind");document.querySelectorAll("[data-format]").forEach(n=>{n.addEventListener("click",()=>{e.value!==
n.dataset.format&&(e.value=n.dataset.format,e.dispatchEvent(new Event("change",{bubbles:!0})))})}),e.addEventListener("change",F),document.querySelectorAll("[da\
ta-go]").forEach(n=>{n.addEventListener("click",()=>C(Number(n.dataset.go)))}),F()}var H={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var P=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function z(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function X(){let e=Object.fromEntries(P.map(a=>[a,t(a).value])),n=e.people==="auto"?0:Number(e.people),r=[];for(let a=0;a<n;a++)r.push({name:t(
"person"+a)?.value,notes:t("notes"+a)?.value,avatar:t("avatar"+a)?.value,outfit:t("outfit"+a)?.value});return{...e,mode:z(),personReferences:r}}function T(){let e=document.body.dataset.accessScope;return e?"liora-lab-video-v34-draft:"+e:"liora-lab-video-v34-draft"}function I(){try{let e={};P.forEach(n=>{
t(n)&&(e[n]=t(n).value)}),e.ideaMode=z();for(let n=0;n<5;n++)for(let r of["person","notes","avatar","outfit"]){let a=r+n;t(a)&&(e[a]=t(a).value)}localStorage.setItem(
T(),JSON.stringify(e))}catch{}}function Y(){if(window._restoring)for(let e=0;e<5;e++)for(let n of["person","notes","avatar","outfit"]){let r=n+e;t(r)&&window._restoring[r]&&
(t(r).value=window._restoring[r])}}function ee({updateModels:e,updateIdeaMode:n,renderPeople:r,updateCompatibility:a}){try{let o=JSON.parse(localStorage.getItem(
T())||"{}");if(window._restoring=o,o.ideaMode){let i=document.querySelector(`input[name=ideaMode][value="${o.ideaMode}"]`);i&&(i.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(i=>{o[i]!==void 0&&
(i!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(o[i]))&&(t(i).value=o[i])}),e(),P.filter(i=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(i)).forEach(i=>{
(o[i]!==void 0&&t(i).querySelector('option[value="'+o[i]+'"]')||o[i]!==void 0&&t(i).tagName!=="SELECT")&&(t(i).value=o[i])}),n(),r(),a(),window._restoring=null,
t("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function te(e){try{return await navigator.clipboard.writeText(e),!0}catch{let r=t("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var x=1e4,V=window.SpeechRecognition||window.webkitSpeechRecognition,p=null;function S(e){let n=t(e);n.value.length>x&&(n.value=n.value.slice(0,x)),t(e+"Count").
textContent=n.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function g(e,n){t(e+"MicStatus").textContent=n}function b(){if(!p)return;let e=p;p=null;
try{e.recognition.stop()}catch{}let n=document.querySelector('[data-dictate="'+e.id+'"]');n.classList.remove("recording"),n.setAttribute("aria-pressed","false"),
n.textContent="\u{1F399}\uFE0F Einsprechen"}function ne(e){return e.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function re(e){let n="";for(let r of e){
let a=(r||"").trim();if(!a)continue;let o=n.trim();if(!o){n=a;continue}let i=ne(o),s=ne(a),c=0;for(let d=Math.min(i.length,s.length);d>=2;d--)if(i.slice(-d).join(
"|")===s.slice(0,d).join("|")){c=d;break}if(!(c===s.length&&s.length>=2))if(c){let h=[...a.matchAll(/[\p{L}\p{N}]+/gu)][c]?.index;h!==void 0&&(n=o+" "+a.slice(h).
trim())}else n=o+" "+a}return n.trim()}function be(e){if(p){let i=p.id===e;if(b(),i){g(e,"Aufnahme beendet.");return}}if(!V){g(e,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let n=t(e);if(n.value.length>=x){g(e,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new V;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let a={id:e,recognition:r,base:n.value,finals:new Map,lastStable:"",lastPreview:""};p=a;let o=document.
querySelector('[data-dictate="'+e+'"]');o.classList.add("recording"),o.setAttribute("aria-pressed","true"),o.textContent="\u23F9 Aufnahme stoppen",g(e,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=i=>{if(p!==a)return;for(let l=i.resultIndex;l<i.results.length;l++){let m=i.results[l];m.isFinal&&a.finals.set(l,(m[0]?.transcript||
"").trim())}let s=[...a.finals.entries()].sort((l,m)=>l[0]-m[0]).map(l=>l[1]),c=re(s),d=[];for(let l=0;l<i.results.length;l++)i.results[l].isFinal||d.push(i.results[l][0]?.
transcript||"");let h=re([...s,...d]),y=a.base+(a.base&&!/\s$/.test(a.base)?" ":"");a.lastStable=c,a.lastPreview=h,n.value=(y+h).slice(0,x),S(e),n.dispatchEvent(
new Event("input",{bubbles:!0})),(y+c).length>=x&&(n.value=(y+c).slice(0,x),S(e),b(),g(e,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=i=>{
if(p!==a)return;b(),g(e,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[i.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{p===a&&(b(),g(e,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{b(),g(e,"Mikrofon konnte nicht gestartet werden.")}}function oe(){["idea","extra"].forEach(e=>{let n=t(e);S(e),n.
addEventListener("input",()=>S(e)),n.addEventListener("paste",()=>setTimeout(()=>S(e),0)),document.querySelector('[data-dictate="'+e+'"]').addEventListener("cli\
ck",()=>be(e))}),V||document.querySelectorAll("[data-dictate]").forEach(e=>{e.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function ae(e){let n=e.kind,r=["talk","standup"].includes(n)&&e.scriptText.trim(),a=["signature","couple","fairytale","storytelling","random10"].includes(n);if(e.
mode==="own"&&!e.idea.trim()&&!a&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let o=e.randomItems.split(/[\n;,]+/u).map(i=>i.trim()).
filter(Boolean);return n==="random10"&&e.randomSource==="own"&&o.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${o.length}\
).`}:{randomObjects:o}}function M(){let e=t("model").value,n=H[t("platform").value]||H.unsure;t("model").replaceChildren(),n.forEach(([r,a])=>{let o=document.createElement("option");o.
value=r,o.textContent=a,t("model").append(o)}),n.some(([r])=>r===e)&&(t("model").value=e),t("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",L()}function L(){let e=t("platform").value,n=t("model").value,r=t("kind").value,a=t("language").value,o="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";e==="flow"&&n==="veo"&&(o="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
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
t("compat").textContent=o}function de(){let e=t("kind").value;if(e!=="talk"&&e!=="standup")return;let n=t("scriptText").value.trim(),r=n?n.split(/\s+/u).filter(
Boolean).length:0,a=e==="standup"?45:55,o=e==="standup"?125:135,i=e==="standup"?7:4,s=r?Math.ceil(r*60/o+i):0,c=t("scriptBudget");if(!r){c.textContent="30-Sekun\
den-Planung: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zei\
tbudget.";return}let d=r>a||s>30;c.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${i} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: b\
is ${a} W\xF6rter / 30 s. ${d?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function $(){
let e=t("kind").value,n=e==="talk"||e==="standup";t("scriptField").classList.toggle("hidden",!n),t("scriptText").disabled=!n,de(),t("scriptHint").textContent=e===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function ie(){t("kind").value===
"whip"?(t("ratio").value="16:9",t("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(t("ratio").value="9:16",t("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function D(){let e=z(),n=e==="inspire",
r=e==="reference",a=t("kind").value==="trends";t("trendHelp").classList.toggle("hidden",!a),t("referenceHelp").classList.toggle("hidden",!r||a),t("intelligenceP\
anel").classList.toggle("hidden",!(n&&["talk","standup"].includes(t("kind").value))),t("ideaLabel").textContent=a?"Welchen Trend m\xF6chtest du aufgreifen?":r?"\
Was passiert im Inspirationsvideo?":n?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",t("idea").placeholder=a?"Zum Beispiel 80s Vid\
eo Aesthetic, ein aktuelles Meme oder ein Videolink.":r?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kamera\
perspektive und welcher Effekt gefallen dir? Was m\xF6chtest du anders machen?":n?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":
t("kind").value==="signature"?"Optional: Welche normale Alltagssituation soll v\xF6llig absurd werden?":t("kind").value==="couple"?"Optional: Romantik, Kuss, Ku\
scheln, Beziehungshumor oder emotionales Drama \u2013 was m\xF6chtest du zeigen?":t("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du\
 kannst auch einen fertigen Dialog einf\xFCgen.":t("kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welc\
hes Detail verbindet beide Momente?":t("kind").value==="random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde\
 werden separat festgelegt.":"Was soll passieren? Wer macht oder sagt was? Was ist die Pointe?"}function ue(){let e=t("randomItems").value.split(/[\n;,]+/u).filter(
n=>n.trim()).length;t("randomItemsCount").textContent=e+" von 10 ausgef\xFCllt"}function me(){let e=t("randomItems").value,n=/[,;]/u.test(e)?e.split(/[\n;,]+/u):
e.split(`
`);t("randomItemInputs").querySelectorAll("input").forEach((r,a)=>{r.value=n[a]?.trim()??""}),ue()}function Se(){let e=t("randomItemInputs");for(let n=1;n<=10;n++){
let r=document.createElement("div"),a=document.createElement("label"),o=document.createElement("input");o.id="randomItem"+n,o.maxLength=300,a.htmlFor=o.id,a.textContent=
"Ding "+n,r.append(a,o),e.append(r)}e.addEventListener("input",n=>{n.target.value=n.target.value.replace(/[,;]/gu," "),t("randomItems").value=Array.from(e.querySelectorAll(
"input"),r=>r.value.trim()).join(`
`),ue()})}function E(){t("random10Field").classList.toggle("hidden",t("kind").value!=="random10"),t("randomItemsField").classList.toggle("hidden",t("kind").value!==
"random10"||t("randomSource").value!=="own"),t("storyHelp").classList.toggle("hidden",t("kind").value!=="storytelling");let e=t("kind").value==="fairytale"||t("\
kind").value==="random10"&&t("randomWorld").value==="fairy";t("fairyField").classList.toggle("hidden",!e),t("customFairyField").classList.toggle("hidden",!e||t(
"fairyTale").value!=="custom")}function q(){let e=t("people").value,n=e==="auto"?0:Number(e),r=t("personRefs"),a={};r.querySelectorAll("input[type=text]").forEach(
o=>a[o.id]=o.value),r.replaceChildren();for(let o=0;o<n;o++){let i=String.fromCharCode(65+o),s=document.createElement("div");s.className="ref-card",s.innerHTML=
`<div class="ref-title">Person ${i}</div><div class="grid"><div><label for="person${o}">Name / Rolle</label><input id="person${o}" type="text" placeholder="z. B\
. Nyra"></div><div><label for="avatar${o}">Avatarbild</label><select id="avatar${o}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden\
 \u2013 im Chat hochladen</option><option value="create">LIORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${o}">Outfitbild</label><\
select id="outfit${o}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll\
 Outfit vorschlagen</option></select></div><div><label for="notes${o}">Wichtige Merkmale</label><input id="notes${o}" type="text" placeholder="z. B. Frisur beib\
ehalten"></div></div>`,r.append(s),["person"+o,"notes"+o].forEach(c=>{a[c]&&(t(c).value=a[c])})}if(e==="auto"){let o=document.createElement("p");o.className="sm\
all",o.textContent="LIORA bestimmt die ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",r.append(o)}if(n===0&&e!==
"auto"){let o=document.createElement("p");o.className="small",o.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz oder einen Startfra\
me vorbereiten.",r.append(o)}Y()}function we(){t("prompt").value="",t("outputPanel").style.display="none",t("copy").classList.add("hidden"),t("status").textContent=
""}function se(e){b(),!(!e&&!window.confirm("Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht."))&&(e?(document.
querySelector('input[name=ideaMode][value="own"]').checked=!0,t("kind").value="talk",t("idea").value="",t("randomItems").value="",t("scriptText").value="",t("lo\
cation").value="",t("locationRef").value="none",t("keyframeRef").value="none"):(localStorage.removeItem(T()),window._restoring=null,document.querySelector('inpu\
t[name=ideaMode][value="own"]').checked=!0,["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(n=>{let r=t(n);
r.selectedIndex=0}),["idea","scriptText","randomItems","location","extra","ciAudience"].forEach(n=>t(n).value=""),t("ciGoal").value="comments",t("ciTone").value=
"authentic",M(),q()),D(),$(),L(),E(),me(),G(),we(),["idea","extra"].forEach(S),I(),t("status").textContent=e?"\u2713 Neues Video bereit. Deine Avatar- und pers\xF6nlich\
en Angaben bleiben erhalten. Bitte die Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",F(),C(2),w(
2),t("idea").focus())}function le(e){return e.toLocaleLowerCase("de-CH").replace(/ae/g,"\xE4").replace(/oe/g,"\xF6").replace(/ue/g,"\xFC").normalize("NFD").replace(
/\p{M}/gu,"").replace(/ß/g,"ss").trim()}function G(){t("fairySearch").value="",t("fairySearchResults").replaceChildren(),t("fairySearchResults").hidden=!0,t("f\
airySearchStatus").textContent=""}function ce(){let e=le(t("fairySearch").value),n=t("fairyTale"),r=t("fairySearchResults"),a=Array.from(n.options).filter(o=>o.
parentElement.tagName==="OPTGROUP"&&e.split(/\s+/).every(i=>le(o.textContent).includes(i)));if(r.replaceChildren(),r.hidden=!e||a.length===0,t("fairySearchStatu\
s").textContent=e?a.length?a.length===1?"1 Treffer":a.length+" Treffer":"Kein Treffer. Du kannst unten ein eigenes M\xE4rchen w\xE4hlen.":"",!r.hidden)for(let o of a){
let i=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=o.textContent,s.addEventListener("click",()=>{n.value=o.value,
G(),n.dispatchEvent(new Event("change",{bubbles:!0})),n.focus()}),i.append(s),r.append(i)}}function fe(e,{enableCameraRoll:n=!1}={}){if(n){let r=document.createElement(
"div");r.className="field";let a=document.createElement("label"),o=document.createElement("input");o.type="checkbox",o.id="cameraRoll",a.append(o," Dynamischer \
Einstieg: 90\xB0-Kameraroll");let i=document.createElement("p");i.className="hint",i.textContent="F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",r.append(a,
i),t("compat").before(r);let s=()=>{r.hidden=o.disabled=t("ratio").value!=="9:16"};t("ratio").addEventListener("change",s);for(let c of["newVideo","fullReset"])
t(c).addEventListener("click",()=>{o.checked=!1,queueMicrotask(s)});queueMicrotask(s)}t("newVideo").addEventListener("click",()=>se(!0)),t("fullReset").addEventListener(
"click",()=>se(!1)),t("scriptText").addEventListener("input",de),t("generate").addEventListener("click",async()=>{let r=X();t("cameraRoll")?.checked&&r.ratio===
"9:16"&&(r.cameraRoll=!0);let a=ae(r);if(a.error){if(C(2,{focus:!1}),w(2,!0),t("status").textContent=a.error,a.field==="randomItems"){let o=Array.from(t("random\
ItemInputs").querySelectorAll("input"));(o.find(i=>!i.value.trim())??o[0]).focus()}else t(a.field).focus();return}C(4,{focus:!1}),w(4);try{let o=e(r,a.randomObjects);
typeof o=="string"?t("prompt").value=o:(t("generate").disabled=!0,t("status").textContent="Auftrag wird erstellt \u2026",t("prompt").value=await o)}catch{w(4,!0),
t("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{t("generate").disabled=!1}t("outputPanel").style.display=
"block",t("copy").classList.remove("hidden"),t("status").textContent="Auftrag erstellt. Jetzt kopieren und in ChatGPT einf\xFCgen.",I()}),t("copy").addEventListener(
"click",async()=>{if(!t("prompt").value)return;let r=await te(t("prompt").value);w(4),t("status").textContent=r?"\u2713 Auftrag kopiert. Du kannst ihn jetzt in ChatG\
PT einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),t("fairySearch").addEventListener("input",ce),t("fairySearch").
addEventListener("search",ce),t("fairySearch").addEventListener("keydown",r=>{r.key==="Escape"&&G(),r.key==="Enter"&&!t("fairySearchResults").hidden&&(r.preventDefault(),
t("fairySearchResults").querySelector("button").click())}),t("fairyTale").addEventListener("change",G),t("randomWorld").addEventListener("change",E),t("randomSo\
urce").addEventListener("change",E),t("fairyTale").addEventListener("change",E),t("platform").addEventListener("change",M),t("kind").addEventListener("change",()=>{
ie(),$(),L(),D(),E()}),t("model").addEventListener("change",L),t("language").addEventListener("change",L),t("people").addEventListener("change",q),document.querySelectorAll(
"input[name=ideaMode]").forEach(r=>r.addEventListener("change",D)),document.addEventListener("input",r=>{r.target.closest("#app")&&I()}),document.addEventListener(
"change",r=>{r.target.closest("#app")&&I()}),Se(),M(),ie(),q(),ee({updateModels:M,updateIdeaMode:D,renderPeople:q,updateCompatibility:L}),D(),$(),E(),me(),oe(),
Q()}import{edgeUrl as xe}from"./customer-config.js";var f=document.getElementById("customer-access"),ge=document.getElementById("customer-studio"),u=document.body.hasAttribute(
"data-admin-preview"),N=u?"liora-video-coach:lab-session":"liora-video-coach:session",R="liora-video-coach:remembered-session",v;function j(e,n){try{return JSON.
parse(window[e].getItem(n)||"null")}catch{return null}}function O(){if(!u&&v&&j("localStorage",R)?.token===v)try{localStorage.removeItem(R)}catch{}v=void 0;try{
sessionStorage.removeItem(N)}catch{}}function Ee(e,n,r){let a=JSON.stringify({token:e.token,admin:n,cameraRollSupported:e.cameraRollSupported===!0});try{sessionStorage.
setItem(N,a)}catch{}if(!u)try{r?localStorage.setItem(R,a):localStorage.removeItem(R)}catch{}}var pe=!1;function Le(e){let n=new URL(e);if(n.protocol!=="https:"||
!n.hostname.endsWith(".supabase.co")||n.username||n.password||n.search||n.hash||n.pathname!=="/functions/v1/liora-access")throw new Error("Ung\xFCltiger Edge-Link.");
return n.href}async function A(e,n={},{recover:r=!1}={}){let a=v,o=await fetch(Le(xe)+e,{method:"POST",headers:{"content-type":"application/json",...a?{"x-liora\
-session":a}:{}},body:JSON.stringify(n),credentials:"omit",cache:"no-store",redirect:"error",signal:AbortSignal.timeout(1e4)}),i=await o.json();if(!o.ok)throw o.
status===401&&a&&(O(),r||location.reload()),Object.assign(new Error(i.error||"Anfrage fehlgeschlagen."),{status:o.status});return i}function he(e,n){let r=document.
createElement("button");return r.type="button",r.className="secondary",r.textContent=e,r.addEventListener("click",n),r}async function ve(){try{await A("/logout"),
O(),location.reload()}catch{if(!v)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut versuchen.")}}function Z(e=u){
let n=f.querySelector("form");f.querySelector("h1").textContent=e?"Administration":"Willkommen zur\xFCck",f.querySelector("[data-description]").textContent=e?"M\
elde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let r=f.querySelector("[data-role]");
r.hidden=u,r.textContent=e?"Zum Kundenzugang":"Zur Administration",r.onclick=()=>{n.reset(),Z(!e)};let a=f.querySelector("[role=status]");a.textContent="",n.onsubmit=
async o=>{o.preventDefault();let i=n.querySelector("button[type=submit]"),s=new FormData(n),c=s.has("remember");i.disabled=!0,r.disabled=!0,a.textContent="";try{
let d=await A(e?"/admin/login":"/login",{email:s.get("email"),password:s.get("password")});v=d.token,n.reset(),e&&!u?await _():ye(d),Ee(d,e,c)}catch(d){O(),a.textContent=
d.message}finally{i.disabled=!1,r.disabled=!1}}}function ye(e){document.body.dataset.accessScope=u?"admin-lab":e.draftScope,f.hidden=!0,ge.hidden=!1,pe||(fe(async n=>(await A(
u?"/admin/prompt":"/prompt",n)).prompt,{enableCameraRoll:e.cameraRollSupported===!0}),pe=!0)}async function _(e){let{members:n}=e??await A("/admin/list"),r=document.
getElementById("customer-admin"),a=r.querySelector("[role=status]"),o=r.querySelector("ul"),i=r.querySelector("[data-member-search]"),s=r.querySelector("[data-m\
ember-count]"),c=new Intl.DateTimeFormat("de-CH",{dateStyle:"medium",timeStyle:"short",timeZone:"Europe/Zurich"});async function d(l,m){a.textContent="";try{return await A(
"/admin/change",{email:l,action:m}),await _(),!0}catch(k){a.textContent=k.message}}function h(){let l=i.value.trim().toLowerCase(),m=n.filter(({email:k})=>k.toLowerCase().
includes(l));s.textContent=m.length?`${m.length} von ${n.length} Personen`:l?"Keine passende E-Mail-Adresse gefunden.":"Noch keine Personen hinzugef\xFCgt.",o.replaceChildren();
for(let{email:k,enabled:W,lastLoginAt:K}of m){let J=document.createElement("li"),U=document.createElement("strong");U.textContent=k;let B=document.createElement(
"small");B.style.display="block",B.textContent=K===void 0?"Letzter Login \xB7 Erfassung noch nicht aktiv":K?`Letzter Login \xB7 ${c.format(new Date(K))} (Schwei\
zer Zeit)`:"Letzter Login \xB7 Noch nicht erfasst",J.append(U,W?" \xB7 Freigegeben":" \xB7 Gesperrt",B,he(W?"Sperren":"Freigeben",()=>d(k,W?"block":"enable")),"\
 ",he("Entfernen",()=>{confirm("Diesen Zugang und seine Sitzungen entfernen?")&&d(k,"remove")})),o.append(J)}}i.oninput=h,h();let y=r.querySelector("form");y.onsubmit=
async l=>{l.preventDefault(),await d(new FormData(y).get("email"),"add")&&(y.reset(),a.textContent="Person steht auf der Freigabeliste.")},r.querySelector("[dat\
a-logout]").onclick=()=>ve().catch(l=>{a.textContent=l.message}),f.hidden=!0,r.hidden=!1}ge.querySelector("[data-logout]").onclick=()=>ve().catch(e=>{let n=document.
getElementById("logout-status");n.textContent=e.message});async function Ae(){let e=j("sessionStorage",N)??(u?null:j("localStorage",R));if(!e||typeof e.admin!="\
boolean"||u&&!e.admin||typeof e.token!="string"||!/^[A-Za-z0-9_-]{43}$/.test(e.token)){O(),Z();return}f.hidden=!0,v=e.token;try{let n=await A(e.admin?"/admin/li\
st":"/session",{},{recover:!0});e.admin&&!u?await _(n):ye({...n,cameraRollSupported:e.cameraRollSupported});try{sessionStorage.setItem(N,JSON.stringify(e))}catch{}}catch(n){
n.status===401||n.status===403?O():v=void 0,f.hidden=!1,Z(e.admin),f.querySelector("[role=status]").textContent=n.status===401?"Deine Sitzung ist abgelaufen. Bi\
tte melde dich erneut an.":"Die Sitzung konnte nicht gepr\xFCft werden. Lade die Seite neu oder melde dich erneut an."}}Ae();
