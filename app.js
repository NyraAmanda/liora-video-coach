var X="=== LIORA \xB7 10 RANDOM DINGE \xB7 EIN RASTER, EIN VIDEOPROMPT ===",Y="VOR DEM RASTER \xB7 LAUFZEIT UND MODUS KL\xC4REN";function ee(e,n){if(n.kind!=="r\
andom10"||!e.startsWith(X)||e.includes(Y))return e;let r=n.model==="omni"?`F\xFCr den gew\xE4hlten Gemini-Omni-Modus rechne mit 8 Sekunden pro generiertem Clip. F\xFCr r\
und 30 Sekunden plane vier Clips und k\xFCrze den letzten im Schnitt auf etwa 6 Sekunden, falls Omni nur 8-Sekunden-Clips ausgibt.
`:"",i=`${Y}
Diese Laufzeitwahl hat Vorrang vor sp\xE4teren Vorgaben zu einem einzigen Videoprompt, zehn Dingen und festen Zeitfenstern. Die Vollfassung ist eine zusammenh\xE4ngen\
de Geschichte mit zehn Dingen, f\xFCnf Ortswechseln und rund 30 Sekunden. Wenn du ein Modell empfehlen sollst, pr\xFCfe daf\xFCr zuerst Kling 4.0. Plane einen Einzelrend\
er nur, wenn die konkrete Modellversion auf der gew\xE4hlten Plattform 30 Sekunden am St\xFCck mit den n\xF6tigen Referenzen unterst\xFCtzt.
${r}Bei k\xFCrzeren Modi nenne vor dem Raster die best\xE4tigte Clipgrenze. Biete eine Vollfassung mit einem gemeinsamen Raster und einem eigenst\xE4ndigen Prompt pro Re\
nderclip an. Die Clipanschl\xFCsse halten Identit\xE4t, Outfit, Objektbesitz, Position und Bewegung konsistent. Biete alternativ einen kurzen Einzelclip an, bei acht \
Sekunden zum Beispiel mit zwei bis drei Dingen und eigener Pointe. Warte auf die Wahl, falls sie offen ist. Lass bei eigener Liste best\xE4tigen, welche Dinge in d\
ie Kurzfassung kommen. Passe Rastergr\xF6sse, Ortswechsel, Zwischenruf und Dialog an die Kurzfassung an.
`;return e.replace(X,`=== LIORA \xB7 10 RANDOM DINGE \xB7 EIN RASTER, EINE GESCHICHTE ===

`+i)}var t=e=>document.getElementById(e);var Ee=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function z(e,{focus:n=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==e}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===e?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),t("butler-ti\
p").textContent=Ee[e-1],n&&t("step-"+e+"-title").focus()}function w(e,n=!1){document.querySelector(`[data-step="${e}"] [data-status-slot]`).append(t("status")),
t("status").classList.toggle("is-error",n)}function P(){let e=t("kind").value;document.querySelectorAll("[data-format]").forEach(n=>{let r=n.dataset.format===e;
n.setAttribute("aria-pressed",String(r)),r&&(t("selection-title").textContent=n.querySelector("strong").textContent,t("selection-description").textContent=n.querySelector(
".format-copy > span").textContent)})}function te(){let e=t("kind");document.querySelectorAll("[data-format]").forEach(n=>{n.addEventListener("click",()=>{e.value!==
n.dataset.format&&(e.value=n.dataset.format,e.dispatchEvent(new Event("change",{bubbles:!0})))})}),e.addEventListener("change",P),document.querySelectorAll("[da\
ta-go]").forEach(n=>{n.addEventListener("click",()=>z(Number(n.dataset.go)))}),P()}var H={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var T=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function I(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function ne(){let e=Object.fromEntries(T.map(i=>[i,t(i).value])),n=e.people==="auto"?0:Number(e.people),r=[];for(let i=0;i<n;i++)r.push({name:t(
"person"+i)?.value,notes:t("notes"+i)?.value,avatar:t("avatar"+i)?.value,outfit:t("outfit"+i)?.value});return{...e,mode:I(),personReferences:r}}function F(){let e=document.body.dataset.accessScope;return e?"liora-lab-video-v34-draft:"+e:"liora-lab-video-v34-draft"}function D(){try{let e={};T.forEach(n=>{
t(n)&&(e[n]=t(n).value)}),e.ideaMode=I();for(let n=0;n<5;n++)for(let r of["person","notes","avatar","outfit"]){let i=r+n;t(i)&&(e[i]=t(i).value)}localStorage.setItem(
F(),JSON.stringify(e))}catch{}}function re(){if(window._restoring)for(let e=0;e<5;e++)for(let n of["person","notes","avatar","outfit"]){let r=n+e;t(r)&&window._restoring[r]&&
(t(r).value=window._restoring[r])}}function ae({updateModels:e,updateIdeaMode:n,renderPeople:r,updateCompatibility:i}){try{let a=JSON.parse(localStorage.getItem(
F())||"{}");if(window._restoring=a,a.ideaMode){let o=document.querySelector(`input[name=ideaMode][value="${a.ideaMode}"]`);o&&(o.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(o=>{a[o]!==void 0&&
(o!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(a[o]))&&(t(o).value=a[o])}),e(),T.filter(o=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(o)).forEach(o=>{
(a[o]!==void 0&&t(o).querySelector('option[value="'+a[o]+'"]')||a[o]!==void 0&&t(o).tagName!=="SELECT")&&(t(o).value=a[o])}),n(),r(),i(),window._restoring=null,
t("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function ie(e){try{return await navigator.clipboard.writeText(e),!0}catch{let r=t("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var E=1e4,$=window.SpeechRecognition||window.webkitSpeechRecognition,g=null;function b(e){let n=t(e);n.value.length>E&&(n.value=n.value.slice(0,E)),t(e+"Count").
textContent=n.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function v(e,n){t(e+"MicStatus").textContent=n}function S(){if(!g)return;let e=g;g=null;
try{e.recognition.stop()}catch{}let n=document.querySelector('[data-dictate="'+e.id+'"]');n.classList.remove("recording"),n.setAttribute("aria-pressed","false"),
n.textContent="\u{1F399}\uFE0F Einsprechen"}function oe(e){return e.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function se(e){let n="";for(let r of e){
let i=(r||"").trim();if(!i)continue;let a=n.trim();if(!a){n=i;continue}let o=oe(a),s=oe(i),l=0;for(let d=Math.min(o.length,s.length);d>=2;d--)if(o.slice(-d).join(
"|")===s.slice(0,d).join("|")){l=d;break}if(!(l===s.length&&s.length>=2))if(l){let u=[...i.matchAll(/[\p{L}\p{N}]+/gu)][l]?.index;u!==void 0&&(n=a+" "+i.slice(u).
trim())}else n=a+" "+i}return n.trim()}function xe(e){if(g){let o=g.id===e;if(S(),o){v(e,"Aufnahme beendet.");return}}if(!$){v(e,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let n=t(e);if(n.value.length>=E){v(e,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new $;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let i={id:e,recognition:r,base:n.value,finals:new Map,lastStable:"",lastPreview:""};g=i;let a=document.
querySelector('[data-dictate="'+e+'"]');a.classList.add("recording"),a.setAttribute("aria-pressed","true"),a.textContent="\u23F9 Aufnahme stoppen",v(e,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=o=>{if(g!==i)return;for(let c=o.resultIndex;c<o.results.length;c++){let f=o.results[c];f.isFinal&&i.finals.set(c,(f[0]?.transcript||
"").trim())}let s=[...i.finals.entries()].sort((c,f)=>c[0]-f[0]).map(c=>c[1]),l=se(s),d=[];for(let c=0;c<o.results.length;c++)o.results[c].isFinal||d.push(o.results[c][0]?.
transcript||"");let u=se([...s,...d]),h=i.base+(i.base&&!/\s$/.test(i.base)?" ":"");i.lastStable=l,i.lastPreview=u,n.value=(h+u).slice(0,E),b(e),n.dispatchEvent(
new Event("input",{bubbles:!0})),(h+l).length>=E&&(n.value=(h+l).slice(0,E),b(e),S(),v(e,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=o=>{
if(g!==i)return;S(),v(e,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[o.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{g===i&&(S(),v(e,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{S(),v(e,"Mikrofon konnte nicht gestartet werden.")}}function le(){["idea","extra"].forEach(e=>{let n=t(e);b(e),n.
addEventListener("input",()=>b(e)),n.addEventListener("paste",()=>setTimeout(()=>b(e),0)),document.querySelector('[data-dictate="'+e+'"]').addEventListener("cli\
ck",()=>xe(e))}),$||document.querySelectorAll("[data-dictate]").forEach(e=>{e.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function ce(e){let n=e.kind,r=["talk","standup"].includes(n)&&e.scriptText.trim(),i=["signature","couple","fairytale","storytelling","random10"].includes(n);if(e.
mode==="own"&&!e.idea.trim()&&!i&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let a=e.randomItems.split(/[\n;,]+/u).map(o=>o.trim()).
filter(Boolean);return n==="random10"&&e.randomSource==="own"&&a.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${a.length}\
).`}:{randomObjects:a}}function M(){let e=t("model").value,n=H[t("platform").value]||H.unsure;t("model").replaceChildren(),n.forEach(([r,i])=>{let a=document.createElement("option");a.
value=r,a.textContent=i,t("model").append(a)}),n.some(([r])=>r===e)&&(t("model").value=e),t("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",A()}function A(){let e=t("platform").value,n=t("model").value,r=t("kind").value,i=t("language").value,a="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";e==="flow"&&n==="veo"&&(a="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
is, Audio und Referenzfunktionen m\xFCssen im tats\xE4chlichen Interface gepr\xFCft werden."),n==="omni"&&(a="Gemini Omni 1.2 Flash: Positiver LIORA-Praxistest \
f\xFCr Talking Head und Stand-up-Comedy mit nat\xFCrlichem deutschem Dialog. Andere Formate, Referenzmodi und die Verf\xFCgbarkeit auf dieser Plattform gesondert pr\xFCfen."),
n==="recommend"&&(a="LIORA w\xE4hlt erst nach Pr\xFCfung von Idee, Plattform, Referenzen und Audio ein konkretes Modell."),(i==="Deutsch"||i==="Deutsch (Schweiz\
er Akzent)")&&(n==="kling"?a="Deutsch gew\xE4hlt: Kling 4.0 verwenden. \xC4ltere Kling-Versionen nicht als Standard f\xFCr native deutsche Dialoge empfehlen. Verf\xFCgbarke\
it auf deiner Plattform pr\xFCfen.":n==="seedance"?a="Deutsch mit Seedance 2.5: Aussprache und Lip-Sync pr\xFCfen, insbesondere Umlaute, sch-Laut, Vorsilben und zu\
sammengesetzte W\xF6rter. Keine automatische phonetische Umschreibung.":n==="omni"?a="LIORA-Praxiserfahrung: Gemini Omni 1.2 Flash liefert sehr gute Ergebnisse \
f\xFCr Talking Head und Stand-up-Comedy; deutsche Sprache funktionierte im Test hervorragend. Stimme, Akzent und Verf\xFCgbarkeit im jeweiligen Modus dennoch pr\xFCfen.":
n==="veo"&&(a="Deutsch mit Veo 3.1 ist nach LIORA-Praxiserfahrung weniger zuverl\xE4ssig. F\xFCr deutsche Dialoge bevorzugt Gemini Omni 1.2 Flash oder Kling 4.0 w\xE4hle\
n. Falls Veo ausdr\xFCcklich gew\xFCnscht: kurzen Sprachtest einplanen."),n==="recommend"?a="Deutscher Dialog: f\xFCr Talking Head und Stand-up Gemini Omni 1.2 Fla\
sh als praxiserprobte Option bevorzugt pr\xFCfen; sonst Kling 4.0; Veo 3.1 f\xFCr Deutsch wegen schwankender Aussprache nicht bevorzugen, Seedance 2.5 nur mit Ausspra\
chekontrolle auf der gew\xE4hlten Plattform pr\xFCfen; keine pauschale Empfehlung \xE4lterer Kling-Versionen.":n==="heygen"&&(a="HeyGen ist ein separater Avatar\
-/Sprachworkflow; deutsche Sprache und Lip-Sync im gew\xE4hlten Modus pr\xFCfen. Die Kling-/Seedance-Regel gilt nicht pauschal f\xFCr HeyGen.")),i==="Deutsch (S\
chweizer Akzent)"&&(a+=" Sprechweise: Schweizer Hochdeutsch mit nat\xFCrlichem, dezentem Schweizer Akzent; kein Dialekt. Akzent kann je nach Engine abweichen."),
t("compat").textContent=a}function pe(){let e=t("kind").value;if(e!=="talk"&&e!=="standup")return;let n=t("scriptText").value.trim(),r=n?n.split(/\s+/u).filter(
Boolean).length:0,i=e==="standup"?45:55,a=e==="standup"?125:135,o=e==="standup"?7:4,s=r?Math.ceil(r*60/a+o):0,l=t("scriptBudget");if(!r){l.textContent="30-Sekun\
den-Planung: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zei\
tbudget.";return}let d=r>i||s>30;l.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${o} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: b\
is ${i} W\xF6rter / 30 s. ${d?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function Z(){
let e=t("kind").value,n=e==="talk"||e==="standup";t("scriptField").classList.toggle("hidden",!n),t("scriptText").disabled=!n,pe(),t("scriptHint").textContent=e===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function de(){t("kind").value===
"whip"?(t("ratio").value="16:9",t("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(t("ratio").value="9:16",t("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function R(){let e=I(),n=e==="inspire",
r=e==="reference",i=t("kind").value==="trends";t("trendHelp").classList.toggle("hidden",!i),t("referenceHelp").classList.toggle("hidden",!r||i),t("intelligenceP\
anel").classList.toggle("hidden",!(n&&["talk","standup"].includes(t("kind").value))),t("ideaLabel").textContent=i?"Welchen Trend m\xF6chtest du aufgreifen?":r?"\
Was passiert im Inspirationsvideo?":n?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",t("idea").placeholder=i?"Zum Beispiel 80s Vid\
eo Aesthetic, ein aktuelles Meme oder ein Videolink.":r?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kamera\
perspektive und welcher Effekt gefallen dir? Was m\xF6chtest du anders machen?":n?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":
t("kind").value==="signature"?"Optional: Welche normale Alltagssituation soll v\xF6llig absurd werden?":t("kind").value==="couple"?"Optional: Romantik, Kuss, Ku\
scheln, Beziehungshumor oder emotionales Drama \u2013 was m\xF6chtest du zeigen?":t("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du\
 kannst auch einen fertigen Dialog einf\xFCgen.":t("kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welc\
hes Detail verbindet beide Momente?":t("kind").value==="random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde\
 werden separat festgelegt.":"Was soll passieren? Wer macht oder sagt was? Was ist die Pointe?"}function he(){let e=t("randomItems").value.split(/[\n;,]+/u).filter(
n=>n.trim()).length;t("randomItemsCount").textContent=e+" von 10 ausgef\xFCllt"}function ge(){let e=t("randomItems").value,n=/[,;]/u.test(e)?e.split(/[\n;,]+/u):
e.split(`
`);t("randomItemInputs").querySelectorAll("input").forEach((r,i)=>{r.value=n[i]?.trim()??""}),he()}function Ae(){let e=t("randomItemInputs");for(let n=1;n<=10;n++){
let r=document.createElement("div"),i=document.createElement("label"),a=document.createElement("input");a.id="randomItem"+n,a.maxLength=300,i.htmlFor=a.id,i.textContent=
"Ding "+n,r.append(i,a),e.append(r)}e.addEventListener("input",n=>{n.target.value=n.target.value.replace(/[,;]/gu," "),t("randomItems").value=Array.from(e.querySelectorAll(
"input"),r=>r.value.trim()).join(`
`),he()})}function x(){t("random10Field").classList.toggle("hidden",t("kind").value!=="random10"),t("randomItemsField").classList.toggle("hidden",t("kind").value!==
"random10"||t("randomSource").value!=="own"),t("storyHelp").classList.toggle("hidden",t("kind").value!=="storytelling");let e=t("kind").value==="fairytale"||t("\
kind").value==="random10"&&t("randomWorld").value==="fairy";t("fairyField").classList.toggle("hidden",!e),t("customFairyField").classList.toggle("hidden",!e||t(
"fairyTale").value!=="custom")}function N(){let e=t("people").value,n=e==="auto"?0:Number(e),r=t("personRefs"),i={};r.querySelectorAll("input[type=text]").forEach(
a=>i[a.id]=a.value),r.replaceChildren();for(let a=0;a<n;a++){let o=String.fromCharCode(65+a),s=document.createElement("div");s.className="ref-card",s.innerHTML=
`<div class="ref-title">Person ${o}</div><div class="grid"><div><label for="person${a}">Name / Rolle</label><input id="person${a}" type="text" placeholder="z. B\
. Nyra"></div><div><label for="avatar${a}">Avatarbild</label><select id="avatar${a}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden\
 \u2013 im Chat hochladen</option><option value="create">LIORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${a}">Outfitbild</label><\
select id="outfit${a}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll\
 Outfit vorschlagen</option></select></div><div><label for="notes${a}">Wichtige Merkmale</label><input id="notes${a}" type="text" placeholder="z. B. Frisur beib\
ehalten"></div></div>`,r.append(s),["person"+a,"notes"+a].forEach(l=>{i[l]&&(t(l).value=i[l])})}if(e==="auto"){let a=document.createElement("p");a.className="sm\
all",a.textContent="LIORA bestimmt die ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",r.append(a)}if(n===0&&e!==
"auto"){let a=document.createElement("p");a.className="small",a.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz oder einen Startfra\
me vorbereiten.",r.append(a)}re()}function Ce(){t("prompt").value="",t("outputPanel").style.display="none",t("copy").classList.add("hidden"),t("status").textContent=
""}function ue(e){S(),!(!e&&!window.confirm("Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht."))&&(e?(document.
querySelector('input[name=ideaMode][value="own"]').checked=!0,t("kind").value="talk",t("idea").value="",t("randomItems").value="",t("scriptText").value="",t("lo\
cation").value="",t("locationRef").value="none",t("keyframeRef").value="none"):(localStorage.removeItem(F()),window._restoring=null,document.querySelector('inpu\
t[name=ideaMode][value="own"]').checked=!0,["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(n=>{let r=t(n);
r.selectedIndex=0}),["idea","scriptText","randomItems","location","extra","ciAudience"].forEach(n=>t(n).value=""),t("ciGoal").value="comments",t("ciTone").value=
"authentic",M(),N()),R(),Z(),A(),x(),ge(),q(),Ce(),["idea","extra"].forEach(b),D(),t("status").textContent=e?"\u2713 Neues Video bereit. Deine Avatar- und pers\xF6nlich\
en Angaben bleiben erhalten. Bitte die Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",P(),z(2),w(
2),t("idea").focus())}function me(e){return e.toLocaleLowerCase("de-CH").replace(/ae/g,"\xE4").replace(/oe/g,"\xF6").replace(/ue/g,"\xFC").normalize("NFD").replace(
/\p{M}/gu,"").replace(/ß/g,"ss").trim()}function q(){t("fairySearch").value="",t("fairySearchResults").replaceChildren(),t("fairySearchResults").hidden=!0,t("f\
airySearchStatus").textContent=""}function fe(){let e=me(t("fairySearch").value),n=t("fairyTale"),r=t("fairySearchResults"),i=Array.from(n.options).filter(a=>a.
parentElement.tagName==="OPTGROUP"&&e.split(/\s+/).every(o=>me(a.textContent).includes(o)));if(r.replaceChildren(),r.hidden=!e||i.length===0,t("fairySearchStatu\
s").textContent=e?i.length?i.length===1?"1 Treffer":i.length+" Treffer":"Kein Treffer. Du kannst unten ein eigenes M\xE4rchen w\xE4hlen.":"",!r.hidden)for(let a of i){
let o=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=a.textContent,s.addEventListener("click",()=>{n.value=a.value,
q(),n.dispatchEvent(new Event("change",{bubbles:!0})),n.focus()}),o.append(s),r.append(o)}}function ve(e,{enableCameraRoll:n=!1}={}){if(n){let r=document.createElement(
"div");r.className="field";let i=document.createElement("label"),a=document.createElement("input");a.type="checkbox",a.id="cameraRoll",i.append(a," Dynamischer \
Einstieg: 90\xB0-Kameraroll");let o=document.createElement("p");o.className="hint",o.textContent="F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",r.append(i,
o),t("compat").before(r);let s=()=>{r.hidden=a.disabled=t("ratio").value!=="9:16"};t("ratio").addEventListener("change",s);for(let l of["newVideo","fullReset"])
t(l).addEventListener("click",()=>{a.checked=!1,queueMicrotask(s)});queueMicrotask(s)}t("newVideo").addEventListener("click",()=>ue(!0)),t("fullReset").addEventListener(
"click",()=>ue(!1)),t("scriptText").addEventListener("input",pe),t("generate").addEventListener("click",async()=>{let r=ne();t("cameraRoll")?.checked&&r.ratio===
"9:16"&&(r.cameraRoll=!0);let i=ce(r);if(i.error){if(z(2,{focus:!1}),w(2,!0),t("status").textContent=i.error,i.field==="randomItems"){let a=Array.from(t("random\
ItemInputs").querySelectorAll("input"));(a.find(o=>!o.value.trim())??a[0]).focus()}else t(i.field).focus();return}z(4,{focus:!1}),w(4);try{let a=e(r,i.randomObjects);
typeof a=="string"?t("prompt").value=a:(t("generate").disabled=!0,t("status").textContent="Auftrag wird erstellt \u2026",t("prompt").value=await a)}catch{w(4,!0),
t("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{t("generate").disabled=!1}t("outputPanel").style.display=
"block",t("copy").classList.remove("hidden"),t("status").textContent="Auftrag erstellt. Jetzt kopieren und in ChatGPT einf\xFCgen.",D()}),t("copy").addEventListener(
"click",async()=>{if(!t("prompt").value)return;let r=await ie(t("prompt").value);w(4),t("status").textContent=r?"\u2713 Auftrag kopiert. Du kannst ihn jetzt in ChatG\
PT einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),t("fairySearch").addEventListener("input",fe),t("fairySearch").
addEventListener("search",fe),t("fairySearch").addEventListener("keydown",r=>{r.key==="Escape"&&q(),r.key==="Enter"&&!t("fairySearchResults").hidden&&(r.preventDefault(),
t("fairySearchResults").querySelector("button").click())}),t("fairyTale").addEventListener("change",q),t("randomWorld").addEventListener("change",x),t("randomSo\
urce").addEventListener("change",x),t("fairyTale").addEventListener("change",x),t("platform").addEventListener("change",M),t("kind").addEventListener("change",()=>{
de(),Z(),A(),R(),x()}),t("model").addEventListener("change",A),t("language").addEventListener("change",A),t("people").addEventListener("change",N),document.querySelectorAll(
"input[name=ideaMode]").forEach(r=>r.addEventListener("change",R)),document.addEventListener("input",r=>{r.target.closest("#app")&&D()}),document.addEventListener(
"change",r=>{r.target.closest("#app")&&D()}),Ae(),M(),de(),N(),ae({updateModels:M,updateIdeaMode:R,renderPeople:N,updateCompatibility:A}),R(),Z(),x(),ge(),le(),
te()}import{edgeUrl as Le}from"./customer-config.js";var p=document.getElementById("customer-access"),Se=document.getElementById("customer-studio"),m=document.body.hasAttribute(
"data-admin-preview"),G=m?"liora-video-coach:lab-session":"liora-video-coach:session",C="liora-video-coach:remembered-session",j="liora-video-coach:remembered-e\
mail",k;function W(e,n){try{return JSON.parse(window[e].getItem(n)||"null")}catch{return null}}function O(){if(!m&&k&&W("localStorage",C)?.token===k)try{localStorage.
removeItem(C)}catch{}k=void 0;try{sessionStorage.removeItem(G)}catch{}}function ze(e,n,r){let i=JSON.stringify({token:e.token,admin:n,cameraRollSupported:e.cameraRollSupported===
!0});try{sessionStorage.setItem(G,i)}catch{}if(!m)try{r?localStorage.setItem(C,i):localStorage.removeItem(C)}catch{}}var ke=!1;function Ie(e){let n=new URL(e);if(n.
protocol!=="https:"||!n.hostname.endsWith(".supabase.co")||n.username||n.password||n.search||n.hash||n.pathname!=="/functions/v1/liora-access")throw new Error("\
Ung\xFCltiger Edge-Link.");return n.href}async function L(e,n={},{recover:r=!1}={}){let i=k,a=await fetch(Ie(Le)+e,{method:"POST",headers:{"content-type":"appli\
cation/json",...i?{"x-liora-session":i}:{}},body:JSON.stringify(n),credentials:"omit",cache:"no-store",redirect:"error",signal:AbortSignal.timeout(1e4)}),o=await a.
json();if(!a.ok)throw a.status===401&&i&&(O(),r||location.reload()),Object.assign(new Error(o.error||"Anfrage fehlgeschlagen."),{status:a.status});return o}function ye(e,n){
let r=document.createElement("button");return r.type="button",r.className="secondary",r.textContent=e,r.addEventListener("click",n),r}async function be(){try{await L(
"/logout"),O(),location.reload()}catch{if(!k)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut versuchen.")}}function _(e=m){
let n=p.querySelector("form"),r=n.elements.namedItem("remember");if(!e&&r)try{let o=localStorage.getItem(j);o&&!n.elements.email.value&&(n.elements.email.value=
o),r.checked=!!(o||W("localStorage",C))}catch{}p.querySelector("h1").textContent=e?"Administration":"Willkommen zur\xFCck",p.querySelector("[data-description]").
textContent=e?"Melde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let i=p.querySelector(
"[data-role]");i.hidden=m,i.textContent=e?"Zum Kundenzugang":"Zur Administration",i.onclick=()=>{n.reset(),_(!e)};let a=p.querySelector("[role=status]");a.textContent=
"",n.onsubmit=async o=>{o.preventDefault();let s=n.querySelector("button[type=submit]"),l=new FormData(n),d=l.has("remember");s.disabled=!0,i.disabled=!0,a.textContent=
"";try{let u=await L(e?"/admin/login":"/login",{email:l.get("email"),password:l.get("password")});if(k=u.token,!e&&!m){try{d?localStorage.setItem(j,l.get("email").
trim()):localStorage.removeItem(j)}catch{}if(d&&window.PasswordCredential&&navigator.credentials)try{let h=new window.PasswordCredential({id:l.get("email").trim(),
password:l.get("password")});navigator.credentials.store(h).catch(()=>{})}catch{}}e&&!m?await U():we(u),ze(u,e,d),n.reset()}catch(u){O(),a.textContent=u.message}finally{
s.disabled=!1,i.disabled=!1}}}function we(e){document.body.dataset.accessScope=m?"admin-lab":e.draftScope,p.hidden=!0,Se.hidden=!1,ke||(ve(async n=>{let{prompt:r}=await L(
m?"/admin/prompt":"/prompt",n);return ee(r,n)},{enableCameraRoll:e.cameraRollSupported===!0}),ke=!0)}async function U(e){let{members:n}=e??await L("/admin/list"),
r=document.getElementById("customer-admin"),i=r.querySelector("[role=status]"),a=r.querySelector("ul"),o=r.querySelector("[data-member-search]"),s=r.querySelector(
"[data-member-count]"),l=new Intl.DateTimeFormat("de-CH",{dateStyle:"medium",timeStyle:"short",timeZone:"Europe/Zurich"});async function d(c,f){i.textContent="";
try{return await L("/admin/change",{email:c,action:f}),await U(),!0}catch(y){i.textContent=y.message}}function u(){let c=o.value.trim().toLowerCase(),f=n.filter(
({email:y})=>y.toLowerCase().includes(c));s.textContent=f.length?`${f.length} von ${n.length} Personen`:c?"Keine passende E-Mail-Adresse gefunden.":"Noch keine \
Personen hinzugef\xFCgt.",a.replaceChildren();for(let{email:y,enabled:V,lastLoginAt:B}of f){let J=document.createElement("li"),Q=document.createElement("strong");
Q.textContent=y;let K=document.createElement("small");K.style.display="block",K.textContent=B===void 0?"Letzter Login \xB7 Erfassung noch nicht aktiv":B?`Letzte\
r Login \xB7 ${l.format(new Date(B))} (Schweizer Zeit)`:"Letzter Login \xB7 Noch nicht erfasst",J.append(Q,V?" \xB7 Freigegeben":" \xB7 Gesperrt",K,ye(V?"Sperre\
n":"Freigeben",()=>d(y,V?"block":"enable"))," ",ye("Entfernen",()=>{confirm("Diesen Zugang und seine Sitzungen entfernen?")&&d(y,"remove")})),a.append(J)}}o.oninput=
u,u();let h=r.querySelector("form");h.onsubmit=async c=>{c.preventDefault(),await d(new FormData(h).get("email"),"add")&&(h.reset(),i.textContent="Person steht \
auf der Freigabeliste.")},r.querySelector("[data-logout]").onclick=()=>be().catch(c=>{i.textContent=c.message}),p.hidden=!0,r.hidden=!1}Se.querySelector("[data-\
logout]").onclick=()=>be().catch(e=>{let n=document.getElementById("logout-status");n.textContent=e.message});async function De(){let e=W("sessionStorage",G)??(m?
null:W("localStorage",C));if(!e||typeof e.admin!="boolean"||m&&!e.admin||typeof e.token!="string"||!/^[A-Za-z0-9_-]{43}$/.test(e.token)){O(),_();return}p.hidden=
!0,k=e.token;try{let n=await L(e.admin?"/admin/list":"/session",{},{recover:!0});e.admin&&!m?await U(n):we({...n,cameraRollSupported:e.cameraRollSupported});try{
sessionStorage.setItem(G,JSON.stringify(e))}catch{}}catch(n){n.status===401||n.status===403?O():k=void 0,p.hidden=!1,_(e.admin),p.querySelector("[role=status]").
textContent=n.status===401?"Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.":"Die Sitzung konnte nicht gepr\xFCft werden. Lade die Seite neu oder melde d\
ich erneut an."}}De();
