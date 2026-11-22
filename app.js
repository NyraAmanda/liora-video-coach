var Q="=== LIORA \xB7 10 RANDOM DINGE \xB7 EIN RASTER, EIN VIDEOPROMPT ===",X="VOR DEM RASTER \xB7 LAUFZEIT UND MODUS KL\xC4REN";function Y(e,n){if(n.kind!=="ra\
ndom10"||!e.startsWith(Q)||e.includes(X))return e;let r=n.model==="omni"?`F\xFCr den gew\xE4hlten Gemini-Omni-Modus rechne mit 8 Sekunden pro generiertem Clip. F\xFCr ru\
nd 30 Sekunden plane vier Clips und k\xFCrze den letzten im Schnitt auf etwa 6 Sekunden, falls Omni nur 8-Sekunden-Clips ausgibt.
`:"",a=`${X}
Diese Laufzeitwahl hat Vorrang vor sp\xE4teren Vorgaben zu einem einzigen Videoprompt, zehn Dingen und festen Zeitfenstern. Die Vollfassung ist eine zusammenh\xE4ngen\
de Geschichte mit zehn Dingen, f\xFCnf Ortswechseln und rund 30 Sekunden. Wenn du ein Modell empfehlen sollst, pr\xFCfe daf\xFCr zuerst Kling 4.0. Plane einen Einzelrend\
er nur, wenn die konkrete Modellversion auf der gew\xE4hlten Plattform 30 Sekunden am St\xFCck mit den n\xF6tigen Referenzen unterst\xFCtzt.
${r}Bei k\xFCrzeren Modi nenne vor dem Raster die best\xE4tigte Clipgrenze. Biete eine Vollfassung mit einem gemeinsamen Raster und einem eigenst\xE4ndigen Prompt pro Re\
nderclip an. Die Clipanschl\xFCsse halten Identit\xE4t, Outfit, Objektbesitz, Position und Bewegung konsistent. Biete alternativ einen kurzen Einzelclip an, bei acht \
Sekunden zum Beispiel mit zwei bis drei Dingen und eigener Pointe. Warte auf die Wahl, falls sie offen ist. Lass bei eigener Liste best\xE4tigen, welche Dinge in d\
ie Kurzfassung kommen. Passe Rastergr\xF6sse, Ortswechsel, Zwischenruf und Dialog an die Kurzfassung an.
`;return e.replace(Q,`=== LIORA \xB7 10 RANDOM DINGE \xB7 EIN RASTER, EINE GESCHICHTE ===

`+a)}var t=e=>document.getElementById(e);var we=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function z(e,{focus:n=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==e}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===e?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),t("butler-ti\
p").textContent=we[e-1],n&&t("step-"+e+"-title").focus()}function w(e,n=!1){document.querySelector(`[data-step="${e}"] [data-status-slot]`).append(t("status")),
t("status").classList.toggle("is-error",n)}function P(){let e=t("kind").value;document.querySelectorAll("[data-format]").forEach(n=>{let r=n.dataset.format===e;
n.setAttribute("aria-pressed",String(r)),r&&(t("selection-title").textContent=n.querySelector("strong").textContent,t("selection-description").textContent=n.querySelector(
".format-copy > span").textContent)})}function ee(){let e=t("kind");document.querySelectorAll("[data-format]").forEach(n=>{n.addEventListener("click",()=>{e.value!==
n.dataset.format&&(e.value=n.dataset.format,e.dispatchEvent(new Event("change",{bubbles:!0})))})}),e.addEventListener("change",P),document.querySelectorAll("[da\
ta-go]").forEach(n=>{n.addEventListener("click",()=>z(Number(n.dataset.go)))}),P()}var K={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var T=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function C(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function te(){let e=Object.fromEntries(T.map(a=>[a,t(a).value])),n=e.people==="auto"?0:Number(e.people),r=[];for(let a=0;a<n;a++)r.push({name:t(
"person"+a)?.value,notes:t("notes"+a)?.value,avatar:t("avatar"+a)?.value,outfit:t("outfit"+a)?.value});return{...e,mode:C(),personReferences:r}}function F(){let e=document.body.dataset.accessScope;return e?"liora-lab-video-v34-draft:"+e:"liora-lab-video-v34-draft"}function I(){try{let e={};T.forEach(n=>{
t(n)&&(e[n]=t(n).value)}),e.ideaMode=C();for(let n=0;n<5;n++)for(let r of["person","notes","avatar","outfit"]){let a=r+n;t(a)&&(e[a]=t(a).value)}localStorage.setItem(
F(),JSON.stringify(e))}catch{}}function ne(){if(window._restoring)for(let e=0;e<5;e++)for(let n of["person","notes","avatar","outfit"]){let r=n+e;t(r)&&window._restoring[r]&&
(t(r).value=window._restoring[r])}}function re({updateModels:e,updateIdeaMode:n,renderPeople:r,updateCompatibility:a}){try{let i=JSON.parse(localStorage.getItem(
F())||"{}");if(window._restoring=i,i.ideaMode){let o=document.querySelector(`input[name=ideaMode][value="${i.ideaMode}"]`);o&&(o.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(o=>{i[o]!==void 0&&
(o!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(i[o]))&&(t(o).value=i[o])}),e(),T.filter(o=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(o)).forEach(o=>{
(i[o]!==void 0&&t(o).querySelector('option[value="'+i[o]+'"]')||i[o]!==void 0&&t(o).tagName!=="SELECT")&&(t(o).value=i[o])}),n(),r(),a(),window._restoring=null,
t("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function ie(e){try{return await navigator.clipboard.writeText(e),!0}catch{let r=t("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var E=1e4,H=window.SpeechRecognition||window.webkitSpeechRecognition,p=null;function b(e){let n=t(e);n.value.length>E&&(n.value=n.value.slice(0,E)),t(e+"Count").
textContent=n.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function g(e,n){t(e+"MicStatus").textContent=n}function S(){if(!p)return;let e=p;p=null;
try{e.recognition.stop()}catch{}let n=document.querySelector('[data-dictate="'+e.id+'"]');n.classList.remove("recording"),n.setAttribute("aria-pressed","false"),
n.textContent="\u{1F399}\uFE0F Einsprechen"}function ae(e){return e.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function oe(e){let n="";for(let r of e){
let a=(r||"").trim();if(!a)continue;let i=n.trim();if(!i){n=a;continue}let o=ae(i),s=ae(a),c=0;for(let d=Math.min(o.length,s.length);d>=2;d--)if(o.slice(-d).join(
"|")===s.slice(0,d).join("|")){c=d;break}if(!(c===s.length&&s.length>=2))if(c){let h=[...a.matchAll(/[\p{L}\p{N}]+/gu)][c]?.index;h!==void 0&&(n=i+" "+a.slice(h).
trim())}else n=i+" "+a}return n.trim()}function Ee(e){if(p){let o=p.id===e;if(S(),o){g(e,"Aufnahme beendet.");return}}if(!H){g(e,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let n=t(e);if(n.value.length>=E){g(e,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new H;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let a={id:e,recognition:r,base:n.value,finals:new Map,lastStable:"",lastPreview:""};p=a;let i=document.
querySelector('[data-dictate="'+e+'"]');i.classList.add("recording"),i.setAttribute("aria-pressed","true"),i.textContent="\u23F9 Aufnahme stoppen",g(e,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=o=>{if(p!==a)return;for(let l=o.resultIndex;l<o.results.length;l++){let m=o.results[l];m.isFinal&&a.finals.set(l,(m[0]?.transcript||
"").trim())}let s=[...a.finals.entries()].sort((l,m)=>l[0]-m[0]).map(l=>l[1]),c=oe(s),d=[];for(let l=0;l<o.results.length;l++)o.results[l].isFinal||d.push(o.results[l][0]?.
transcript||"");let h=oe([...s,...d]),k=a.base+(a.base&&!/\s$/.test(a.base)?" ":"");a.lastStable=c,a.lastPreview=h,n.value=(k+h).slice(0,E),b(e),n.dispatchEvent(
new Event("input",{bubbles:!0})),(k+c).length>=E&&(n.value=(k+c).slice(0,E),b(e),S(),g(e,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=o=>{
if(p!==a)return;S(),g(e,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[o.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{p===a&&(S(),g(e,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{S(),g(e,"Mikrofon konnte nicht gestartet werden.")}}function se(){["idea","extra"].forEach(e=>{let n=t(e);b(e),n.
addEventListener("input",()=>b(e)),n.addEventListener("paste",()=>setTimeout(()=>b(e),0)),document.querySelector('[data-dictate="'+e+'"]').addEventListener("cli\
ck",()=>Ee(e))}),H||document.querySelectorAll("[data-dictate]").forEach(e=>{e.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function le(e){let n=e.kind,r=["talk","standup"].includes(n)&&e.scriptText.trim(),a=["signature","couple","fairytale","storytelling","random10"].includes(n);if(e.
mode==="own"&&!e.idea.trim()&&!a&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let i=e.randomItems.split(/[\n;,]+/u).map(o=>o.trim()).
filter(Boolean);return n==="random10"&&e.randomSource==="own"&&i.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${i.length}\
).`}:{randomObjects:i}}function M(){let e=t("model").value,n=K[t("platform").value]||K.unsure;t("model").replaceChildren(),n.forEach(([r,a])=>{let i=document.createElement("option");i.
value=r,i.textContent=a,t("model").append(i)}),n.some(([r])=>r===e)&&(t("model").value=e),t("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",A()}function A(){let e=t("platform").value,n=t("model").value,r=t("kind").value,a=t("language").value,i="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";e==="flow"&&n==="veo"&&(i="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
is, Audio und Referenzfunktionen m\xFCssen im tats\xE4chlichen Interface gepr\xFCft werden."),n==="omni"&&(i="Gemini Omni 1.2 Flash: Positiver LIORA-Praxistest \
f\xFCr Talking Head und Stand-up-Comedy mit nat\xFCrlichem deutschem Dialog. Andere Formate, Referenzmodi und die Verf\xFCgbarkeit auf dieser Plattform gesondert pr\xFCfen."),
n==="recommend"&&(i="LIORA w\xE4hlt erst nach Pr\xFCfung von Idee, Plattform, Referenzen und Audio ein konkretes Modell."),(a==="Deutsch"||a==="Deutsch (Schweiz\
er Akzent)")&&(n==="kling"?i="Deutsch gew\xE4hlt: Kling 4.0 verwenden. \xC4ltere Kling-Versionen nicht als Standard f\xFCr native deutsche Dialoge empfehlen. Verf\xFCgbarke\
it auf deiner Plattform pr\xFCfen.":n==="seedance"?i="Deutsch mit Seedance 2.5: Aussprache und Lip-Sync pr\xFCfen, insbesondere Umlaute, sch-Laut, Vorsilben und zu\
sammengesetzte W\xF6rter. Keine automatische phonetische Umschreibung.":n==="omni"?i="LIORA-Praxiserfahrung: Gemini Omni 1.2 Flash liefert sehr gute Ergebnisse \
f\xFCr Talking Head und Stand-up-Comedy; deutsche Sprache funktionierte im Test hervorragend. Stimme, Akzent und Verf\xFCgbarkeit im jeweiligen Modus dennoch pr\xFCfen.":
n==="veo"&&(i="Deutsch mit Veo 3.1 ist nach LIORA-Praxiserfahrung weniger zuverl\xE4ssig. F\xFCr deutsche Dialoge bevorzugt Gemini Omni 1.2 Flash oder Kling 4.0 w\xE4hle\
n. Falls Veo ausdr\xFCcklich gew\xFCnscht: kurzen Sprachtest einplanen."),n==="recommend"?i="Deutscher Dialog: f\xFCr Talking Head und Stand-up Gemini Omni 1.2 Fla\
sh als praxiserprobte Option bevorzugt pr\xFCfen; sonst Kling 4.0; Veo 3.1 f\xFCr Deutsch wegen schwankender Aussprache nicht bevorzugen, Seedance 2.5 nur mit Ausspra\
chekontrolle auf der gew\xE4hlten Plattform pr\xFCfen; keine pauschale Empfehlung \xE4lterer Kling-Versionen.":n==="heygen"&&(i="HeyGen ist ein separater Avatar\
-/Sprachworkflow; deutsche Sprache und Lip-Sync im gew\xE4hlten Modus pr\xFCfen. Die Kling-/Seedance-Regel gilt nicht pauschal f\xFCr HeyGen.")),a==="Deutsch (S\
chweizer Akzent)"&&(i+=" Sprechweise: Schweizer Hochdeutsch mit nat\xFCrlichem, dezentem Schweizer Akzent; kein Dialekt. Akzent kann je nach Engine abweichen."),
t("compat").textContent=i}function fe(){let e=t("kind").value;if(e!=="talk"&&e!=="standup")return;let n=t("scriptText").value.trim(),r=n?n.split(/\s+/u).filter(
Boolean).length:0,a=e==="standup"?45:55,i=e==="standup"?125:135,o=e==="standup"?7:4,s=r?Math.ceil(r*60/i+o):0,c=t("scriptBudget");if(!r){c.textContent="30-Sekun\
den-Planung: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zei\
tbudget.";return}let d=r>a||s>30;c.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${o} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: b\
is ${a} W\xF6rter / 30 s. ${d?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function $(){
let e=t("kind").value,n=e==="talk"||e==="standup";t("scriptField").classList.toggle("hidden",!n),t("scriptText").disabled=!n,fe(),t("scriptHint").textContent=e===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function ce(){t("kind").value===
"whip"?(t("ratio").value="16:9",t("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(t("ratio").value="9:16",t("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function D(){let e=C(),n=e==="inspire",
r=e==="reference",a=t("kind").value==="trends";t("trendHelp").classList.toggle("hidden",!a),t("referenceHelp").classList.toggle("hidden",!r||a),t("intelligenceP\
anel").classList.toggle("hidden",!(n&&["talk","standup"].includes(t("kind").value))),t("ideaLabel").textContent=a?"Welchen Trend m\xF6chtest du aufgreifen?":r?"\
Was passiert im Inspirationsvideo?":n?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",t("idea").placeholder=a?"Zum Beispiel 80s Vid\
eo Aesthetic, ein aktuelles Meme oder ein Videolink.":r?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kamera\
perspektive und welcher Effekt gefallen dir? Was m\xF6chtest du anders machen?":n?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":
t("kind").value==="signature"?"Optional: Welche normale Alltagssituation soll v\xF6llig absurd werden?":t("kind").value==="couple"?"Optional: Romantik, Kuss, Ku\
scheln, Beziehungshumor oder emotionales Drama \u2013 was m\xF6chtest du zeigen?":t("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du\
 kannst auch einen fertigen Dialog einf\xFCgen.":t("kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welc\
hes Detail verbindet beide Momente?":t("kind").value==="random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde\
 werden separat festgelegt.":"Was soll passieren? Wer macht oder sagt was? Was ist die Pointe?"}function pe(){let e=t("randomItems").value.split(/[\n;,]+/u).filter(
n=>n.trim()).length;t("randomItemsCount").textContent=e+" von 10 ausgef\xFCllt"}function he(){let e=t("randomItems").value,n=/[,;]/u.test(e)?e.split(/[\n;,]+/u):
e.split(`
`);t("randomItemInputs").querySelectorAll("input").forEach((r,a)=>{r.value=n[a]?.trim()??""}),pe()}function xe(){let e=t("randomItemInputs");for(let n=1;n<=10;n++){
let r=document.createElement("div"),a=document.createElement("label"),i=document.createElement("input");i.id="randomItem"+n,i.maxLength=300,a.htmlFor=i.id,a.textContent=
"Ding "+n,r.append(a,i),e.append(r)}e.addEventListener("input",n=>{n.target.value=n.target.value.replace(/[,;]/gu," "),t("randomItems").value=Array.from(e.querySelectorAll(
"input"),r=>r.value.trim()).join(`
`),pe()})}function x(){t("random10Field").classList.toggle("hidden",t("kind").value!=="random10"),t("randomItemsField").classList.toggle("hidden",t("kind").value!==
"random10"||t("randomSource").value!=="own"),t("storyHelp").classList.toggle("hidden",t("kind").value!=="storytelling");let e=t("kind").value==="fairytale"||t("\
kind").value==="random10"&&t("randomWorld").value==="fairy";t("fairyField").classList.toggle("hidden",!e),t("customFairyField").classList.toggle("hidden",!e||t(
"fairyTale").value!=="custom")}function N(){let e=t("people").value,n=e==="auto"?0:Number(e),r=t("personRefs"),a={};r.querySelectorAll("input[type=text]").forEach(
i=>a[i.id]=i.value),r.replaceChildren();for(let i=0;i<n;i++){let o=String.fromCharCode(65+i),s=document.createElement("div");s.className="ref-card",s.innerHTML=
`<div class="ref-title">Person ${o}</div><div class="grid"><div><label for="person${i}">Name / Rolle</label><input id="person${i}" type="text" placeholder="z. B\
. Nyra"></div><div><label for="avatar${i}">Avatarbild</label><select id="avatar${i}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden\
 \u2013 im Chat hochladen</option><option value="create">LIORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${i}">Outfitbild</label><\
select id="outfit${i}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll\
 Outfit vorschlagen</option></select></div><div><label for="notes${i}">Wichtige Merkmale</label><input id="notes${i}" type="text" placeholder="z. B. Frisur beib\
ehalten"></div></div>`,r.append(s),["person"+i,"notes"+i].forEach(c=>{a[c]&&(t(c).value=a[c])})}if(e==="auto"){let i=document.createElement("p");i.className="sm\
all",i.textContent="LIORA bestimmt die ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",r.append(i)}if(n===0&&e!==
"auto"){let i=document.createElement("p");i.className="small",i.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz oder einen Startfra\
me vorbereiten.",r.append(i)}ne()}function Ae(){t("prompt").value="",t("outputPanel").style.display="none",t("copy").classList.add("hidden"),t("status").textContent=
""}function de(e){S(),!(!e&&!window.confirm("Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht."))&&(e?(document.
querySelector('input[name=ideaMode][value="own"]').checked=!0,t("kind").value="talk",t("idea").value="",t("randomItems").value="",t("scriptText").value="",t("lo\
cation").value="",t("locationRef").value="none",t("keyframeRef").value="none"):(localStorage.removeItem(F()),window._restoring=null,document.querySelector('inpu\
t[name=ideaMode][value="own"]').checked=!0,["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(n=>{let r=t(n);
r.selectedIndex=0}),["idea","scriptText","randomItems","location","extra","ciAudience"].forEach(n=>t(n).value=""),t("ciGoal").value="comments",t("ciTone").value=
"authentic",M(),N()),D(),$(),A(),x(),he(),q(),Ae(),["idea","extra"].forEach(b),I(),t("status").textContent=e?"\u2713 Neues Video bereit. Deine Avatar- und pers\xF6nlich\
en Angaben bleiben erhalten. Bitte die Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",P(),z(2),w(
2),t("idea").focus())}function ue(e){return e.toLocaleLowerCase("de-CH").replace(/ae/g,"\xE4").replace(/oe/g,"\xF6").replace(/ue/g,"\xFC").normalize("NFD").replace(
/\p{M}/gu,"").replace(/ß/g,"ss").trim()}function q(){t("fairySearch").value="",t("fairySearchResults").replaceChildren(),t("fairySearchResults").hidden=!0,t("f\
airySearchStatus").textContent=""}function me(){let e=ue(t("fairySearch").value),n=t("fairyTale"),r=t("fairySearchResults"),a=Array.from(n.options).filter(i=>i.
parentElement.tagName==="OPTGROUP"&&e.split(/\s+/).every(o=>ue(i.textContent).includes(o)));if(r.replaceChildren(),r.hidden=!e||a.length===0,t("fairySearchStatu\
s").textContent=e?a.length?a.length===1?"1 Treffer":a.length+" Treffer":"Kein Treffer. Du kannst unten ein eigenes M\xE4rchen w\xE4hlen.":"",!r.hidden)for(let i of a){
let o=document.createElement("li"),s=document.createElement("button");s.type="button",s.textContent=i.textContent,s.addEventListener("click",()=>{n.value=i.value,
q(),n.dispatchEvent(new Event("change",{bubbles:!0})),n.focus()}),o.append(s),r.append(o)}}function ge(e,{enableCameraRoll:n=!1}={}){if(n){let r=document.createElement(
"div");r.className="field";let a=document.createElement("label"),i=document.createElement("input");i.type="checkbox",i.id="cameraRoll",a.append(i," Dynamischer \
Einstieg: 90\xB0-Kameraroll");let o=document.createElement("p");o.className="hint",o.textContent="F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",r.append(a,
o),t("compat").before(r);let s=()=>{r.hidden=i.disabled=t("ratio").value!=="9:16"};t("ratio").addEventListener("change",s);for(let c of["newVideo","fullReset"])
t(c).addEventListener("click",()=>{i.checked=!1,queueMicrotask(s)});queueMicrotask(s)}t("newVideo").addEventListener("click",()=>de(!0)),t("fullReset").addEventListener(
"click",()=>de(!1)),t("scriptText").addEventListener("input",fe),t("generate").addEventListener("click",async()=>{let r=te();t("cameraRoll")?.checked&&r.ratio===
"9:16"&&(r.cameraRoll=!0);let a=le(r);if(a.error){if(z(2,{focus:!1}),w(2,!0),t("status").textContent=a.error,a.field==="randomItems"){let i=Array.from(t("random\
ItemInputs").querySelectorAll("input"));(i.find(o=>!o.value.trim())??i[0]).focus()}else t(a.field).focus();return}z(4,{focus:!1}),w(4);try{let i=e(r,a.randomObjects);
typeof i=="string"?t("prompt").value=i:(t("generate").disabled=!0,t("status").textContent="Auftrag wird erstellt \u2026",t("prompt").value=await i)}catch{w(4,!0),
t("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{t("generate").disabled=!1}t("outputPanel").style.display=
"block",t("copy").classList.remove("hidden"),t("status").textContent="Auftrag erstellt. Jetzt kopieren und in ChatGPT einf\xFCgen.",I()}),t("copy").addEventListener(
"click",async()=>{if(!t("prompt").value)return;let r=await ie(t("prompt").value);w(4),t("status").textContent=r?"\u2713 Auftrag kopiert. Du kannst ihn jetzt in ChatG\
PT einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),t("fairySearch").addEventListener("input",me),t("fairySearch").
addEventListener("search",me),t("fairySearch").addEventListener("keydown",r=>{r.key==="Escape"&&q(),r.key==="Enter"&&!t("fairySearchResults").hidden&&(r.preventDefault(),
t("fairySearchResults").querySelector("button").click())}),t("fairyTale").addEventListener("change",q),t("randomWorld").addEventListener("change",x),t("randomSo\
urce").addEventListener("change",x),t("fairyTale").addEventListener("change",x),t("platform").addEventListener("change",M),t("kind").addEventListener("change",()=>{
ce(),$(),A(),D(),x()}),t("model").addEventListener("change",A),t("language").addEventListener("change",A),t("people").addEventListener("change",N),document.querySelectorAll(
"input[name=ideaMode]").forEach(r=>r.addEventListener("change",D)),document.addEventListener("input",r=>{r.target.closest("#app")&&I()}),document.addEventListener(
"change",r=>{r.target.closest("#app")&&I()}),xe(),M(),ce(),N(),re({updateModels:M,updateIdeaMode:D,renderPeople:N,updateCompatibility:A}),D(),$(),x(),he(),se(),
ee()}import{edgeUrl as Le}from"./customer-config.js";var f=document.getElementById("customer-access"),ye=document.getElementById("customer-studio"),u=document.body.hasAttribute(
"data-admin-preview"),G=u?"liora-video-coach:lab-session":"liora-video-coach:session",R="liora-video-coach:remembered-session",v;function Z(e,n){try{return JSON.
parse(window[e].getItem(n)||"null")}catch{return null}}function O(){if(!u&&v&&Z("localStorage",R)?.token===v)try{localStorage.removeItem(R)}catch{}v=void 0;try{
sessionStorage.removeItem(G)}catch{}}function ze(e,n,r){let a=JSON.stringify({token:e.token,admin:n,cameraRollSupported:e.cameraRollSupported===!0});try{sessionStorage.
setItem(G,a)}catch{}if(!u)try{r?localStorage.setItem(R,a):localStorage.removeItem(R)}catch{}}var ve=!1;function Ce(e){let n=new URL(e);if(n.protocol!=="https:"||
!n.hostname.endsWith(".supabase.co")||n.username||n.password||n.search||n.hash||n.pathname!=="/functions/v1/liora-access")throw new Error("Ung\xFCltiger Edge-Link.");
return n.href}async function L(e,n={},{recover:r=!1}={}){let a=v,i=await fetch(Ce(Le)+e,{method:"POST",headers:{"content-type":"application/json",...a?{"x-liora\
-session":a}:{}},body:JSON.stringify(n),credentials:"omit",cache:"no-store",redirect:"error",signal:AbortSignal.timeout(1e4)}),o=await i.json();if(!i.ok)throw i.
status===401&&a&&(O(),r||location.reload()),Object.assign(new Error(o.error||"Anfrage fehlgeschlagen."),{status:i.status});return o}function ke(e,n){let r=document.
createElement("button");return r.type="button",r.className="secondary",r.textContent=e,r.addEventListener("click",n),r}async function Se(){try{await L("/logout"),
O(),location.reload()}catch{if(!v)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut versuchen.")}}function j(e=u){
let n=f.querySelector("form");f.querySelector("h1").textContent=e?"Administration":"Willkommen zur\xFCck",f.querySelector("[data-description]").textContent=e?"M\
elde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let r=f.querySelector("[data-role]");
r.hidden=u,r.textContent=e?"Zum Kundenzugang":"Zur Administration",r.onclick=()=>{n.reset(),j(!e)};let a=f.querySelector("[role=status]");a.textContent="",n.onsubmit=
async i=>{i.preventDefault();let o=n.querySelector("button[type=submit]"),s=new FormData(n),c=s.has("remember");o.disabled=!0,r.disabled=!0,a.textContent="";try{
let d=await L(e?"/admin/login":"/login",{email:s.get("email"),password:s.get("password")});v=d.token,n.reset(),e&&!u?await _():be(d),ze(d,e,c)}catch(d){O(),a.textContent=
d.message}finally{o.disabled=!1,r.disabled=!1}}}function be(e){document.body.dataset.accessScope=u?"admin-lab":e.draftScope,f.hidden=!0,ye.hidden=!1,ve||(ge(async n=>{
let{prompt:r}=await L(u?"/admin/prompt":"/prompt",n);return Y(r,n)},{enableCameraRoll:e.cameraRollSupported===!0}),ve=!0)}async function _(e){let{members:n}=e??
await L("/admin/list"),r=document.getElementById("customer-admin"),a=r.querySelector("[role=status]"),i=r.querySelector("ul"),o=r.querySelector("[data-member-se\
arch]"),s=r.querySelector("[data-member-count]"),c=new Intl.DateTimeFormat("de-CH",{dateStyle:"medium",timeStyle:"short",timeZone:"Europe/Zurich"});async function d(l,m){
a.textContent="";try{return await L("/admin/change",{email:l,action:m}),await _(),!0}catch(y){a.textContent=y.message}}function h(){let l=o.value.trim().toLowerCase(),
m=n.filter(({email:y})=>y.toLowerCase().includes(l));s.textContent=m.length?`${m.length} von ${n.length} Personen`:l?"Keine passende E-Mail-Adresse gefunden.":"\
Noch keine Personen hinzugef\xFCgt.",i.replaceChildren();for(let{email:y,enabled:W,lastLoginAt:V}of m){let U=document.createElement("li"),J=document.createElement(
"strong");J.textContent=y;let B=document.createElement("small");B.style.display="block",B.textContent=V===void 0?"Letzter Login \xB7 Erfassung noch nicht aktiv":
V?`Letzter Login \xB7 ${c.format(new Date(V))} (Schweizer Zeit)`:"Letzter Login \xB7 Noch nicht erfasst",U.append(J,W?" \xB7 Freigegeben":" \xB7 Gesperrt",B,ke(
W?"Sperren":"Freigeben",()=>d(y,W?"block":"enable"))," ",ke("Entfernen",()=>{confirm("Diesen Zugang und seine Sitzungen entfernen?")&&d(y,"remove")})),i.append(
U)}}o.oninput=h,h();let k=r.querySelector("form");k.onsubmit=async l=>{l.preventDefault(),await d(new FormData(k).get("email"),"add")&&(k.reset(),a.textContent=
"Person steht auf der Freigabeliste.")},r.querySelector("[data-logout]").onclick=()=>Se().catch(l=>{a.textContent=l.message}),f.hidden=!0,r.hidden=!1}ye.querySelector(
"[data-logout]").onclick=()=>Se().catch(e=>{let n=document.getElementById("logout-status");n.textContent=e.message});async function Ie(){let e=Z("sessionStorage",
G)??(u?null:Z("localStorage",R));if(!e||typeof e.admin!="boolean"||u&&!e.admin||typeof e.token!="string"||!/^[A-Za-z0-9_-]{43}$/.test(e.token)){O(),j();return}f.
hidden=!0,v=e.token;try{let n=await L(e.admin?"/admin/list":"/session",{},{recover:!0});e.admin&&!u?await _(n):be({...n,cameraRollSupported:e.cameraRollSupported});
try{sessionStorage.setItem(G,JSON.stringify(e))}catch{}}catch(n){n.status===401||n.status===403?O():v=void 0,f.hidden=!1,j(e.admin),f.querySelector("[role=statu\
s]").textContent=n.status===401?"Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.":"Die Sitzung konnte nicht gepr\xFCft werden. Lade die Seite neu oder me\
lde dich erneut an."}}Ie();
