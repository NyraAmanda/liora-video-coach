function X(e){let t="Plane genau eine sichtbare menschliche Hauptfigur und nur eine Avatar-Identit\xE4t. Tiere und Fahrzeuge k\xF6nnen weiterhin zu den Dingen geh\xF6ren\
.",r=e.randomWorld==="fairy"?"M\xE4rchenwelt: Die Figur kennt moderne Dinge nur aus ihrer eigenen Welt. Sie begutachtet Form, Ger\xE4usch oder Material, deutet die Fu\
nktion auf ihre Weise und setzt das Ding f\xFCr ihr konkretes Ziel um. Zeige danach die unerwartete Folge. Beispiel f\xFCrs Prinzip: Dornr\xF6schen zieht eine Auto-Sonne\
nblende als Bettdecke hoch, weil sie weiterschlafen will. Erfinde aus den tats\xE4chlichen Dingen neue Umdeutungen. Vertraute M\xE4rchendinge darf sie selbstverst\xE4ndl\
ich benutzen.":"Freie Welt: In der Gegenwart kennt die Figur gew\xF6hnliche moderne Gegenst\xE4nde. Lass sie bei Bedarf bewusst improvisieren. Der Humor entsteht durc\
h die Situation oder die sichtbare Folge ihrer Zweckentfremdung. In einer Fantasiewelt richtet sich ihr Wissen nach der gew\xE4hlten Figur.";return`BESETZUNG UN\
D WELT
`+t+`
`+r}var Y="=== LIORA \xB7 10 RANDOM DINGE \xB7 EIN RASTER, EIN VIDEOPROMPT ===",ee="VOR DEM RASTER \xB7 LAUFZEIT UND MODUS KL\xC4REN";function te(e,t){if(t.kind!=="\
random10"||!e.startsWith(Y)||e.includes(ee))return e;let r=t.model==="omni"?`F\xFCr den gew\xE4hlten Gemini-Omni-Modus rechne mit 8 Sekunden pro generiertem Clip. F\xFCr\
 rund 30 Sekunden plane vier Clips und k\xFCrze den letzten im Schnitt auf etwa 6 Sekunden, falls Omni nur 8-Sekunden-Clips ausgibt.
`:"",i=`${ee}
Diese Laufzeitwahl hat Vorrang vor sp\xE4teren Vorgaben zu einem einzigen Videoprompt, zehn Dingen und festen Zeitfenstern. Die Vollfassung ist eine zusammenh\xE4ngen\
de Geschichte mit zehn Dingen, f\xFCnf Ortswechseln und rund 30 Sekunden. Wenn du ein Modell empfehlen sollst, pr\xFCfe daf\xFCr zuerst Kling 4.0. Plane einen Einzelrend\
er nur, wenn die konkrete Modellversion auf der gew\xE4hlten Plattform 30 Sekunden am St\xFCck mit den n\xF6tigen Referenzen unterst\xFCtzt.
${r}Bei k\xFCrzeren Modi nenne vor dem Raster die best\xE4tigte Clipgrenze. Biete eine Vollfassung mit einem gemeinsamen Raster und einem eigenst\xE4ndigen Prompt pro Re\
nderclip an. Die Clipanschl\xFCsse halten Identit\xE4t, Outfit, Objektbesitz, Position und Bewegung konsistent. Biete alternativ einen kurzen Einzelclip an, bei acht \
Sekunden zum Beispiel mit zwei bis drei Dingen und eigener Pointe. Warte auf die Wahl, falls sie offen ist. Lass bei eigener Liste best\xE4tigen, welche Dinge in d\
ie Kurzfassung kommen. Passe Rastergr\xF6sse, Ortswechsel, Zwischenruf und Dialog an die Kurzfassung an.
`;return e.replace(Y,`=== LIORA \xB7 10 RANDOM DINGE \xB7 EIN RASTER, EINE GESCHICHTE ===

`+X(t)+`

`+(t.randomWorld==="fairy"?"M\xE4rchenwahl: "+(t.fairyTale==="custom"?t.customFairy:t.fairyTale)+`

`:"")+i)}var n=e=>document.getElementById(e);var xe=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function I(e,{focus:t=!0}={}){document.querySelectorAll("[data-step]").forEach(r=>{r.hidden=Number(r.dataset.step)!==e}),document.
querySelectorAll(".steps [data-go]").forEach(r=>{Number(r.dataset.go)===e?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),n("butler-ti\
p").textContent=xe[e-1],t&&n("step-"+e+"-title").focus()}function S(e,t=!1){document.querySelector(`[data-step="${e}"] [data-status-slot]`).append(n("status")),
n("status").classList.toggle("is-error",t)}function P(){let e=n("kind").value;document.querySelectorAll("[data-format]").forEach(t=>{let r=t.dataset.format===e;
t.setAttribute("aria-pressed",String(r)),r&&(n("selection-title").textContent=t.querySelector("strong").textContent,n("selection-description").textContent=t.querySelector(
".format-copy > span").textContent)})}function ne(){let e=n("kind");document.querySelectorAll("[data-format]").forEach(t=>{t.addEventListener("click",()=>{e.value!==
t.dataset.format&&(e.value=t.dataset.format,e.dispatchEvent(new Event("change",{bubbles:!0})))})}),e.addEventListener("change",P),document.querySelectorAll("[da\
ta-go]").forEach(t=>{t.addEventListener("click",()=>I(Number(t.dataset.go)))}),P()}var H={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var T=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function D(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function re(){let e=Object.fromEntries(T.map(i=>[i,n(i).value]));e.kind==="random10"&&(e.people="1");let t=e.people==="auto"?0:Number(e.people),
r=[];for(let i=0;i<t;i++)r.push({name:n("person"+i)?.value,notes:n("notes"+i)?.value,avatar:n("avatar"+i)?.value,outfit:n("outfit"+i)?.value});return{...e,mode:D(),
personReferences:r}}function M(){let e=document.body.dataset.accessScope;return e?"liora-lab-video-v34-draft:"+e:"liora-lab-video-v34-draft"}function R(){try{let e={};T.forEach(t=>{
n(t)&&(e[t]=n(t).value)}),e.ideaMode=D();for(let t=0;t<5;t++)for(let r of["person","notes","avatar","outfit"]){let i=r+t;n(i)&&(e[i]=n(i).value)}localStorage.setItem(
M(),JSON.stringify(e))}catch{}}function ie(){if(window._restoring)for(let e=0;e<5;e++)for(let t of["person","notes","avatar","outfit"]){let r=t+e;n(r)&&window._restoring[r]&&
(n(r).value=window._restoring[r])}}function ae({updateModels:e,updateIdeaMode:t,renderPeople:r,updateCompatibility:i}){try{let a=JSON.parse(localStorage.getItem(
M())||"{}");if(window._restoring=a,a.ideaMode){let o=document.querySelector(`input[name=ideaMode][value="${a.ideaMode}"]`);o&&(o.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(o=>{a[o]!==void 0&&
(o!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(a[o]))&&(n(o).value=a[o])}),e(),T.filter(o=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(o)).forEach(o=>{
(a[o]!==void 0&&n(o).querySelector('option[value="'+a[o]+'"]')||a[o]!==void 0&&n(o).tagName!=="SELECT")&&(n(o).value=a[o])}),t(),r(),i(),window._restoring=null,
n("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function oe(e){try{return await navigator.clipboard.writeText(e),!0}catch{let r=n("prompt");r.focus(),r.select();try{return document.execCommand("copy")}catch{
return!1}}}var E=1e4,$=window.SpeechRecognition||window.webkitSpeechRecognition,g=null;function w(e){let t=n(e);t.value.length>E&&(t.value=t.value.slice(0,E)),n(e+"Count").
textContent=t.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function v(e,t){n(e+"MicStatus").textContent=t}function b(){if(!g)return;let e=g;g=null;
try{e.recognition.stop()}catch{}let t=document.querySelector('[data-dictate="'+e.id+'"]');t.classList.remove("recording"),t.setAttribute("aria-pressed","false"),
t.textContent="\u{1F399}\uFE0F Einsprechen"}function se(e){return e.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function le(e){let t="";for(let r of e){
let i=(r||"").trim();if(!i)continue;let a=t.trim();if(!a){t=i;continue}let o=se(a),s=se(i),l=0;for(let c=Math.min(o.length,s.length);c>=2;c--)if(o.slice(-c).join(
"|")===s.slice(0,c).join("|")){l=c;break}if(!(l===s.length&&s.length>=2))if(l){let u=[...i.matchAll(/[\p{L}\p{N}]+/gu)][l]?.index;u!==void 0&&(t=a+" "+i.slice(u).
trim())}else t=a+" "+i}return t.trim()}function ze(e){if(g){let o=g.id===e;if(b(),o){v(e,"Aufnahme beendet.");return}}if(!$){v(e,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let t=n(e);if(t.value.length>=E){v(e,"Maximal 10\u2019000 Zeichen erreicht.");return}
let r=new $;r.lang="de-CH",r.continuous=!0,r.interimResults=!0;let i={id:e,recognition:r,base:t.value,finals:new Map,lastStable:"",lastPreview:""};g=i;let a=document.
querySelector('[data-dictate="'+e+'"]');a.classList.add("recording"),a.setAttribute("aria-pressed","true"),a.textContent="\u23F9 Aufnahme stoppen",v(e,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),r.onresult=o=>{if(g!==i)return;for(let d=o.resultIndex;d<o.results.length;d++){let f=o.results[d];f.isFinal&&i.finals.set(d,(f[0]?.transcript||
"").trim())}let s=[...i.finals.entries()].sort((d,f)=>d[0]-f[0]).map(d=>d[1]),l=le(s),c=[];for(let d=0;d<o.results.length;d++)o.results[d].isFinal||c.push(o.results[d][0]?.
transcript||"");let u=le([...s,...c]),p=i.base+(i.base&&!/\s$/.test(i.base)?" ":"");i.lastStable=l,i.lastPreview=u,t.value=(p+u).slice(0,E),w(e),t.dispatchEvent(
new Event("input",{bubbles:!0})),(p+l).length>=E&&(t.value=(p+l).slice(0,E),w(e),b(),v(e,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},r.onerror=o=>{
if(g!==i)return;b(),v(e,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[o.error]||"Spracherkennung unterbrochen.")},r.onend=()=>{g===i&&(b(),v(e,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{r.start()}catch{b(),v(e,"Mikrofon konnte nicht gestartet werden.")}}function ce(){["idea","extra"].forEach(e=>{let t=n(e);w(e),t.
addEventListener("input",()=>w(e)),t.addEventListener("paste",()=>setTimeout(()=>w(e),0)),document.querySelector('[data-dictate="'+e+'"]').addEventListener("cli\
ck",()=>ze(e))}),$||document.querySelectorAll("[data-dictate]").forEach(e=>{e.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function de(e){let t=e.kind,r=["talk","standup"].includes(t)&&e.scriptText.trim(),i=["signature","couple","fairytale","storytelling","random10"].includes(t);if(e.
mode==="own"&&!e.idea.trim()&&!i&&!r)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let a=e.randomItems.split(/[\n;,]+/u).map(o=>o.trim()).
filter(Boolean);return t==="random10"&&e.randomSource==="own"&&a.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${a.length}\
).`}:{randomObjects:a}}function N(){let e=n("model").value,t=H[n("platform").value]||H.unsure;n("model").replaceChildren(),t.forEach(([r,i])=>{let a=document.createElement("option");a.
value=r,a.textContent=i,n("model").append(a)}),t.some(([r])=>r===e)&&(n("model").value=e),n("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",z()}function z(){let e=n("platform").value,t=n("model").value,r=n("kind").value,i=n("language").value,a="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";e==="flow"&&t==="veo"&&(a="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
is, Audio und Referenzfunktionen m\xFCssen im tats\xE4chlichen Interface gepr\xFCft werden."),t==="omni"&&(a="Gemini Omni 1.2 Flash: Positiver LIORA-Praxistest \
f\xFCr Talking Head und Stand-up-Comedy mit nat\xFCrlichem deutschem Dialog. Andere Formate, Referenzmodi und die Verf\xFCgbarkeit auf dieser Plattform gesondert pr\xFCfen."),
t==="recommend"&&(a="LIORA w\xE4hlt erst nach Pr\xFCfung von Idee, Plattform, Referenzen und Audio ein konkretes Modell."),(i==="Deutsch"||i==="Deutsch (Schweiz\
er Akzent)")&&(t==="kling"?a="Deutsch gew\xE4hlt: Kling 4.0 verwenden. \xC4ltere Kling-Versionen nicht als Standard f\xFCr native deutsche Dialoge empfehlen. Verf\xFCgbarke\
it auf deiner Plattform pr\xFCfen.":t==="seedance"?a="Deutsch mit Seedance 2.5: Aussprache und Lip-Sync pr\xFCfen, insbesondere Umlaute, sch-Laut, Vorsilben und zu\
sammengesetzte W\xF6rter. Keine automatische phonetische Umschreibung.":t==="omni"?a="LIORA-Praxiserfahrung: Gemini Omni 1.2 Flash liefert sehr gute Ergebnisse \
f\xFCr Talking Head und Stand-up-Comedy; deutsche Sprache funktionierte im Test hervorragend. Stimme, Akzent und Verf\xFCgbarkeit im jeweiligen Modus dennoch pr\xFCfen.":
t==="veo"&&(a="Deutsch mit Veo 3.1 ist nach LIORA-Praxiserfahrung weniger zuverl\xE4ssig. F\xFCr deutsche Dialoge bevorzugt Gemini Omni 1.2 Flash oder Kling 4.0 w\xE4hle\
n. Falls Veo ausdr\xFCcklich gew\xFCnscht: kurzen Sprachtest einplanen."),t==="recommend"?a="Deutscher Dialog: f\xFCr Talking Head und Stand-up Gemini Omni 1.2 Fla\
sh als praxiserprobte Option bevorzugt pr\xFCfen; sonst Kling 4.0; Veo 3.1 f\xFCr Deutsch wegen schwankender Aussprache nicht bevorzugen, Seedance 2.5 nur mit Ausspra\
chekontrolle auf der gew\xE4hlten Plattform pr\xFCfen; keine pauschale Empfehlung \xE4lterer Kling-Versionen.":t==="heygen"&&(a="HeyGen ist ein separater Avatar\
-/Sprachworkflow; deutsche Sprache und Lip-Sync im gew\xE4hlten Modus pr\xFCfen. Die Kling-/Seedance-Regel gilt nicht pauschal f\xFCr HeyGen.")),i==="Deutsch (S\
chweizer Akzent)"&&(a+=" Sprechweise: Schweizer Hochdeutsch mit nat\xFCrlichem, dezentem Schweizer Akzent; kein Dialekt. Akzent kann je nach Engine abweichen."),
n("compat").textContent=a}function pe(){let e=n("kind").value;if(e!=="talk"&&e!=="standup")return;let t=n("scriptText").value.trim(),r=t?t.split(/\s+/u).filter(
Boolean).length:0,i=e==="standup"?45:55,a=e==="standup"?125:135,o=e==="standup"?7:4,s=r?Math.ceil(r*60/a+o):0,l=n("scriptBudget");if(!r){l.textContent="30-Sekun\
den-Planung: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zei\
tbudget.";return}let c=r>i||s>30;l.textContent=`${r} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${o} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: b\
is ${i} W\xF6rter / 30 s. ${c?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function Z(){
let e=n("kind").value,t=e==="talk"||e==="standup";n("scriptField").classList.toggle("hidden",!t),n("scriptText").disabled=!t,pe(),n("scriptHint").textContent=e===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function ue(){n("kind").value===
"whip"?(n("ratio").value="16:9",n("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(n("ratio").value="9:16",n("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function O(){let e=D(),t=e==="inspire",
r=e==="reference",i=n("kind").value==="trends";n("trendHelp").classList.toggle("hidden",!i),n("referenceHelp").classList.toggle("hidden",!r||i),n("intelligenceP\
anel").classList.toggle("hidden",!(t&&["talk","standup"].includes(n("kind").value))),n("ideaLabel").textContent=i?"Welchen Trend m\xF6chtest du aufgreifen?":r?"\
Was passiert im Inspirationsvideo?":t?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",n("idea").placeholder=i?"Zum Beispiel 80s Vid\
eo Aesthetic, ein aktuelles Meme oder ein Videolink.":r?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kamera\
perspektive und welcher Effekt gefallen dir? Was m\xF6chtest du anders machen?":t?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":
n("kind").value==="signature"?"Optional: Welche normale Alltagssituation soll v\xF6llig absurd werden?":n("kind").value==="couple"?"Optional: Romantik, Kuss, Ku\
scheln, Beziehungshumor oder emotionales Drama \u2013 was m\xF6chtest du zeigen?":n("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du\
 kannst auch einen fertigen Dialog einf\xFCgen.":n("kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welc\
hes Detail verbindet beide Momente?":n("kind").value==="random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde\
 werden separat festgelegt.":"Was soll passieren? Wer macht oder sagt was? Was ist die Pointe?"}function ge(){let e=n("randomItems").value.split(/[\n;,]+/u).filter(
t=>t.trim()).length;n("randomItemsCount").textContent=e+" von 10 ausgef\xFCllt"}function ve(){let e=n("randomItems").value,t=/[,;]/u.test(e)?e.split(/[\n;,]+/u):
e.split(`
`);n("randomItemInputs").querySelectorAll("input").forEach((r,i)=>{r.value=t[i]?.trim()??""}),ge()}function Le(){let e=n("randomItemInputs");for(let t=1;t<=10;t++){
let r=document.createElement("div"),i=document.createElement("label"),a=document.createElement("input");a.id="randomItem"+t,a.maxLength=300,i.htmlFor=a.id,i.textContent=
"Ding "+t,r.append(i,a),e.append(r)}e.addEventListener("input",t=>{t.target.value=t.target.value.replace(/[,;]/gu," "),n("randomItems").value=Array.from(e.querySelectorAll(
"input"),r=>r.value.trim()).join(`
`),ge()})}function x(){n("random10Field").classList.toggle("hidden",n("kind").value!=="random10"),n("randomItemsField").classList.toggle("hidden",n("kind").value!==
"random10"||n("randomSource").value!=="own"),n("storyHelp").classList.toggle("hidden",n("kind").value!=="storytelling");let e=n("kind").value==="fairytale"||n("\
kind").value==="random10"&&n("randomWorld").value==="fairy";n("fairyField").classList.toggle("hidden",!e),n("customFairyField").classList.toggle("hidden",!e||n(
"fairyTale").value!=="custom")}function L(){let e=n("people"),t=n("kind").value==="random10",r=t?"1":e.value,i=r==="auto"?0:Number(r),a=n("personRefs");e.disabled=
t,e.closest(".field").classList.toggle("hidden",t);let o={};a.querySelectorAll("input[type=text],select").forEach(s=>o[s.id]=s.value),a.replaceChildren();for(let s=0;s<
i;s++){let l=String.fromCharCode(65+s),c=document.createElement("div");c.className="ref-card",c.innerHTML=`<div class="ref-title">Person ${l}</div><div class="g\
rid"><div><label for="person${s}">Name / Rolle</label><input id="person${s}" type="text" placeholder="z. B. Nyra"></div><div><label for="avatar${s}">Avatarbild<\
/label><select id="avatar${s}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LI\
ORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${s}">Outfitbild</label><select id="outfit${s}"><option value="none">Noch kein Bild<\
/option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll Outfit vorschlagen</option></select></div><div><label for=\
"notes${s}">Wichtige Merkmale</label><input id="notes${s}" type="text" placeholder="z. B. Frisur beibehalten"></div></div>`,a.append(c),["person"+s,"notes"+s,"a\
vatar"+s,"outfit"+s].forEach(u=>{o[u]&&(n(u).value=o[u])})}if(r==="auto"){let s=document.createElement("p");s.className="small",s.textContent="LIORA bestimmt di\
e ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",a.append(s)}if(i===0&&r!=="auto"){let s=document.createElement(
"p");s.className="small",s.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz oder einen Startframe vorbereiten.",a.append(s)}ie()}function Ae(){
n("prompt").value="",n("outputPanel").style.display="none",n("copy").classList.add("hidden"),n("status").textContent=""}function me(e){b(),!(!e&&!window.confirm(
"Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht."))&&(e?(document.querySelector('input[name=ideaMode][value=\
"own"]').checked=!0,n("kind").value="talk",n("idea").value="",n("randomItems").value="",n("scriptText").value="",n("location").value="",n("locationRef").value="\
none",n("keyframeRef").value="none"):(localStorage.removeItem(M()),window._restoring=null,document.querySelector('input[name=ideaMode][value="own"]').checked=!0,
["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(t=>{let r=n(t);r.selectedIndex=0}),["idea","scriptText","\
randomItems","location","extra","ciAudience"].forEach(t=>n(t).value=""),n("ciGoal").value="comments",n("ciTone").value="authentic",N(),L()),L(),O(),Z(),z(),x(),
ve(),W(),Ae(),["idea","extra"].forEach(w),R(),n("status").textContent=e?"\u2713 Neues Video bereit. Deine Avatar- und pers\xF6nlichen Angaben bleiben erhalten. Bitte di\
e Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",P(),I(2),S(2),n("idea").focus())}function fe(e){
return e.toLocaleLowerCase("de-CH").replace(/ae/g,"\xE4").replace(/oe/g,"\xF6").replace(/ue/g,"\xFC").normalize("NFD").replace(/\p{M}/gu,"").replace(/ß/g,"ss").
trim()}function W(){n("fairySearch").value="",n("fairySearchResults").replaceChildren(),n("fairySearchResults").hidden=!0,n("fairySearchStatus").textContent=""}
function he(){let e=fe(n("fairySearch").value),t=n("fairyTale"),r=n("fairySearchResults"),i=Array.from(t.options).filter(a=>a.parentElement.tagName==="OPTGROUP"&&
e.split(/\s+/).every(o=>fe(a.textContent).includes(o)));if(r.replaceChildren(),r.hidden=!e||i.length===0,n("fairySearchStatus").textContent=e?i.length?i.length===
1?"1 Treffer":i.length+" Treffer":"Kein Treffer. Du kannst unten ein eigenes M\xE4rchen w\xE4hlen.":"",!r.hidden)for(let a of i){let o=document.createElement("l\
i"),s=document.createElement("button");s.type="button",s.textContent=a.textContent,s.addEventListener("click",()=>{t.value=a.value,W(),t.dispatchEvent(new Event(
"change",{bubbles:!0})),t.focus()}),o.append(s),r.append(o)}}function ke(e,{enableCameraRoll:t=!1}={}){if(t){let r=document.createElement("div");r.className="fi\
eld";let i=document.createElement("label"),a=document.createElement("input");a.type="checkbox",a.id="cameraRoll",i.append(a," Dynamischer Einstieg: 90\xB0-Kameraro\
ll");let o=document.createElement("p");o.className="hint",o.textContent="F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",r.append(i,o),n("compat").before(r);
let s=()=>{r.hidden=a.disabled=n("ratio").value!=="9:16"};n("ratio").addEventListener("change",s);for(let l of["newVideo","fullReset"])n(l).addEventListener("cl\
ick",()=>{a.checked=!1,queueMicrotask(s)});queueMicrotask(s)}n("newVideo").addEventListener("click",()=>me(!0)),n("fullReset").addEventListener("click",()=>me(!1)),
n("scriptText").addEventListener("input",pe),n("generate").addEventListener("click",async()=>{let r=re();n("cameraRoll")?.checked&&r.ratio==="9:16"&&(r.cameraRoll=
!0);let i=de(r);if(i.error){if(I(2,{focus:!1}),S(2,!0),n("status").textContent=i.error,i.field==="randomItems"){let a=Array.from(n("randomItemInputs").querySelectorAll(
"input"));(a.find(o=>!o.value.trim())??a[0]).focus()}else n(i.field).focus();return}I(4,{focus:!1}),S(4);try{let a=e(r,i.randomObjects);typeof a=="string"?n("pr\
ompt").value=a:(n("generate").disabled=!0,n("status").textContent="Auftrag wird erstellt \u2026",n("prompt").value=await a)}catch{S(4,!0),n("status").textContent=
"Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{n("generate").disabled=!1}n("outputPanel").style.display="block",n("copy").classList.
remove("hidden"),n("status").textContent="Auftrag erstellt. Jetzt kopieren und in ChatGPT einf\xFCgen.",R()}),n("copy").addEventListener("click",async()=>{if(!n(
"prompt").value)return;let r=await oe(n("prompt").value);S(4),n("status").textContent=r?"\u2713 Auftrag kopiert. Du kannst ihn jetzt in ChatGPT einf\xFCgen.":"K\
opieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),n("fairySearch").addEventListener("input",he),n("fairySearch").addEventListener(
"search",he),n("fairySearch").addEventListener("keydown",r=>{r.key==="Escape"&&W(),r.key==="Enter"&&!n("fairySearchResults").hidden&&(r.preventDefault(),n("fair\
ySearchResults").querySelector("button").click())}),n("fairyTale").addEventListener("change",W),n("randomWorld").addEventListener("change",x),n("randomSource").
addEventListener("change",x),n("fairyTale").addEventListener("change",x),n("platform").addEventListener("change",N),n("kind").addEventListener("change",()=>{ue(),
Z(),z(),O(),x(),L()}),n("model").addEventListener("change",z),n("language").addEventListener("change",z),n("people").addEventListener("change",L),document.querySelectorAll(
"input[name=ideaMode]").forEach(r=>r.addEventListener("change",O)),document.addEventListener("input",r=>{r.target.closest("#app")&&R()}),document.addEventListener(
"change",r=>{r.target.closest("#app")&&R()}),Le(),N(),ue(),L(),ae({updateModels:N,updateIdeaMode:O,renderPeople:L,updateCompatibility:z}),O(),Z(),x(),ve(),ce(),
ne()}import{edgeUrl as Ce}from"./customer-config.js";var h=document.getElementById("customer-access"),we=document.getElementById("customer-studio"),m=document.body.hasAttribute(
"data-admin-preview"),G=m?"liora-video-coach:lab-session":"liora-video-coach:session",A="liora-video-coach:remembered-session",j="liora-video-coach:remembered-e\
mail",k;function q(e,t){try{return JSON.parse(window[e].getItem(t)||"null")}catch{return null}}function F(){if(!m&&k&&q("localStorage",A)?.token===k)try{localStorage.
removeItem(A)}catch{}k=void 0;try{sessionStorage.removeItem(G)}catch{}}function Ie(e,t,r){let i=JSON.stringify({token:e.token,admin:t,cameraRollSupported:e.cameraRollSupported===
!0});try{sessionStorage.setItem(G,i)}catch{}if(!m)try{r?localStorage.setItem(A,i):localStorage.removeItem(A)}catch{}}var ye=!1;function De(e){let t=new URL(e);if(t.
protocol!=="https:"||!t.hostname.endsWith(".supabase.co")||t.username||t.password||t.search||t.hash||t.pathname!=="/functions/v1/liora-access")throw new Error("\
Ung\xFCltiger Edge-Link.");return t.href}async function C(e,t={},{recover:r=!1}={}){let i=k,a=await fetch(De(Ce)+e,{method:"POST",headers:{"content-type":"appli\
cation/json",...i?{"x-liora-session":i}:{}},body:JSON.stringify(t),credentials:"omit",cache:"no-store",redirect:"error",signal:AbortSignal.timeout(1e4)}),o=await a.
json();if(!a.ok)throw a.status===401&&i&&(F(),r||location.reload()),Object.assign(new Error(o.error||"Anfrage fehlgeschlagen."),{status:a.status});return o}function be(e,t){
let r=document.createElement("button");return r.type="button",r.className="secondary",r.textContent=e,r.addEventListener("click",t),r}async function Se(){try{await C(
"/logout"),F(),location.reload()}catch{if(!k)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut versuchen.")}}function U(e=m){
let t=h.querySelector("form"),r=t.elements.namedItem("remember");if(!e&&r)try{let o=localStorage.getItem(j);o&&!t.elements.email.value&&(t.elements.email.value=
o),r.checked=!!(o||q("localStorage",A))}catch{}h.querySelector("h1").textContent=e?"Administration":"Willkommen zur\xFCck",h.querySelector("[data-description]").
textContent=e?"Melde dich mit deinem separaten Admin-Passwort an.":"Gib deine freigegebene E-Mail-Adresse und das gemeinsame Passwort ein.";let i=h.querySelector(
"[data-role]");i.hidden=m,i.textContent=e?"Zum Kundenzugang":"Zur Administration",i.onclick=()=>{t.reset(),U(!e)};let a=h.querySelector("[role=status]");a.textContent=
"",t.onsubmit=async o=>{o.preventDefault();let s=t.querySelector("button[type=submit]"),l=new FormData(t),c=l.has("remember");s.disabled=!0,i.disabled=!0,a.textContent=
"";try{let u=await C(e?"/admin/login":"/login",{email:l.get("email"),password:l.get("password")});if(k=u.token,!e&&!m){try{c?localStorage.setItem(j,l.get("email").
trim()):localStorage.removeItem(j)}catch{}if(c&&window.PasswordCredential&&navigator.credentials)try{let p=new window.PasswordCredential({id:l.get("email").trim(),
password:l.get("password")});navigator.credentials.store(p).catch(()=>{})}catch{}}e&&!m?await _():Ee(u),Ie(u,e,c),t.reset()}catch(u){F(),a.textContent=u.message}finally{
s.disabled=!1,i.disabled=!1}}}function Ee(e){document.body.dataset.accessScope=m?"admin-lab":e.draftScope,h.hidden=!0,we.hidden=!1,ye||(ke(async t=>{let{prompt:r}=await C(
m?"/admin/prompt":"/prompt",t);return te(r,t)},{enableCameraRoll:e.cameraRollSupported===!0}),ye=!0)}async function _(e){let{members:t}=e??await C("/admin/list"),
r=document.getElementById("customer-admin"),i=r.querySelector("[role=status]"),a=r.querySelector("ul"),o=r.querySelector("[data-member-search]"),s=r.querySelector(
"[data-member-count]"),l=new Intl.DateTimeFormat("de-CH",{dateStyle:"medium",timeStyle:"short",timeZone:"Europe/Zurich"});async function c(d,f){i.textContent="";
try{return await C("/admin/change",{email:d,action:f}),await _(),!0}catch(y){i.textContent=y.message}}function u(){let d=o.value.trim().toLowerCase(),f=t.filter(
({email:y})=>y.toLowerCase().includes(d));s.textContent=f.length?`${f.length} von ${t.length} Personen`:d?"Keine passende E-Mail-Adresse gefunden.":"Noch keine \
Personen hinzugef\xFCgt.",a.replaceChildren();for(let{email:y,enabled:B,lastLoginAt:V}of f){let J=document.createElement("li"),Q=document.createElement("strong");
Q.textContent=y;let K=document.createElement("small");K.style.display="block",K.textContent=V===void 0?"Letzter Login \xB7 Erfassung noch nicht aktiv":V?`Letzte\
r Login \xB7 ${l.format(new Date(V))} (Schweizer Zeit)`:"Letzter Login \xB7 Noch nicht erfasst",J.append(Q,B?" \xB7 Freigegeben":" \xB7 Gesperrt",K,be(B?"Sperre\
n":"Freigeben",()=>c(y,B?"block":"enable"))," ",be("Entfernen",()=>{confirm("Diesen Zugang und seine Sitzungen entfernen?")&&c(y,"remove")})),a.append(J)}}o.oninput=
u,u();let p=r.querySelector("form");p.onsubmit=async d=>{d.preventDefault(),await c(new FormData(p).get("email"),"add")&&(p.reset(),i.textContent="Person steht \
auf der Freigabeliste.")},r.querySelector("[data-logout]").onclick=()=>Se().catch(d=>{i.textContent=d.message}),h.hidden=!0,r.hidden=!1}we.querySelector("[data-\
logout]").onclick=()=>Se().catch(e=>{let t=document.getElementById("logout-status");t.textContent=e.message});async function Re(){let e=q("sessionStorage",G)??(m?
null:q("localStorage",A));if(!e||typeof e.admin!="boolean"||m&&!e.admin||typeof e.token!="string"||!/^[A-Za-z0-9_-]{43}$/.test(e.token)){F(),U();return}h.hidden=
!0,k=e.token;try{let t=await C(e.admin?"/admin/list":"/session",{},{recover:!0});e.admin&&!m?await _(t):Ee({...t,cameraRollSupported:e.cameraRollSupported});try{
sessionStorage.setItem(G,JSON.stringify(e))}catch{}}catch(t){t.status===401||t.status===403?F():k=void 0,h.hidden=!1,U(e.admin),h.querySelector("[role=status]").
textContent=t.status===401?"Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.":"Die Sitzung konnte nicht gepr\xFCft werden. Lade die Seite neu oder melde d\
ich erneut an."}}Re();
