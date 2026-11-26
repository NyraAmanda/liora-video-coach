import { initAdminCommunity } from './community.js?v=20261125-1';
function videoCoachGuidance(){
 const guided=document.getElementById("guidedMode")?.checked!==false;
 return "=== VERBINDLICHER BEGLEITMODUS – VORRANG BEI ABLAUFKONFLIKTEN ===\n"+
 (guided?"GEFÜHRT: Begleite Schritt für Schritt. Nenne die nächste konkrete Handlung und liefere nur die jetzt benötigten Prompts. Warte auf erforderliche Antworten oder Ergebnisse, bevor abhängige Schritte folgen. Nutze vorhandene Angaben und überspringe unnötige Bestätigungen.":
 "DIREKT: Erstelle aus den vorhandenen Angaben direkt einen vollständigen, zusammenhängenden Produktionsentwurf mit den bereits sinnvoll erstellbaren Prompts, einzeln kopierbar. Keine obligatorischen Zwischenfragen oder Freigabeschleifen. Frage nur nach, wenn entscheidende Informationen fehlen. Kennzeichne Annahmen und noch fehlende Bildreferenzen; erfinde keine Bildprüfung.")+
 "\nIN BEIDEN MODI: Nutzeridee und bestätigte Details bewahren. Tatsächlich hochgeladene Bilder vor finalen Videoprompts auf erkennbare Widersprüche prüfen. Ohne Bilder keine Sichtprüfung behaupten. Keine Rendergarantie. Bilder oder Videos nur mit entsprechender Nutzerfreigabe generieren.\n=== ENDE BEGLEITMODUS ===\n\n";
}
function ee(e){let t="Plane genau eine sichtbare menschliche Hauptfigur und nur eine Avatar-Identit\xE4t. Tiere und Fahrzeuge k\xF6nnen weiterhin zu den Dingen geh\xF6re\
n.",i=e.randomWorld==="fairy"?"M\xE4rchenwelt: Die Figur kennt moderne Dinge nur aus ihrer eigenen Welt. Sie begutachtet Form, Ger\xE4usch oder Material, deutet die F\
unktion auf ihre Weise und setzt das Ding f\xFCr ihr konkretes Ziel um. Zeige danach die unerwartete Folge. Beispiel f\xFCrs Prinzip: Dornr\xF6schen zieht eine Auto-Sonn\
enblende als Bettdecke hoch, weil sie weiterschlafen will. Erfinde aus den tats\xE4chlichen Dingen neue Umdeutungen. Vertraute M\xE4rchendinge darf sie selbstverst\xE4nd\
lich benutzen.":"Freie Welt: In der Gegenwart kennt die Figur gew\xF6hnliche moderne Gegenst\xE4nde. Lass sie bei Bedarf bewusst improvisieren. Der Humor entsteht dur\
ch die Situation oder die sichtbare Folge ihrer Zweckentfremdung. In einer Fantasiewelt richtet sich ihr Wissen nach der gew\xE4hlten Figur.",r=`HANDLUNG VOR RA\
STER: Lege zuerst das sichtbare Ziel, das Hindernis und die stumm verst\xE4ndliche Schlussaktion fest. Bei eigener Liste behalte alle vorgegebenen Dinge und entwic\
kle daraus die Handlung. Lass zwei bis drei Dinge die Handlung ver\xE4ndern und die \xFCbrigen in denselben Aktionen mitwirken. Pr\xFCfe bei jedem Ortswechsel, was die F\
igur dorthin f\xFChrt und was sich dort ver\xE4ndert. Nutze die f\xFCnf Ortswechsel der Vollfassung als Erz\xE4hlstationen. Wenn die Handlung dabei zur Abfolge von \xDCbergabe\
n wird, vereinfache die Aktionen und schlage bei Bedarf weniger Stationen vor. Gib der Pointe und der Reaktion im Schlussbild Zeit.

PRAXISFALL KATZENPORTR\xC4T: Nyra will ein Foto. Der Federwedel lockt die Katze, die Maus h\xE4lt sie am Hocker, und am Ende tr\xE4gt Nyra selbst die rote Fliege. Das ge\
meinsame Portr\xE4t beantwortet die Frage vom Anfang. \xDCbertrage die sichtbare Handlungskette auf das neue Briefing.`,a=e.randomWorld==="fairy"?"PRAXISFALL FR\
AU HOLLE: Der Staubsauger schluckt Schnee. Der Render verliert den Faden, als der Schnee \xFCber mehrere Beh\xE4lter wandert und die Kanne zu fr\xFCh auftaucht. Das Begi\
essen der Schneekugel macht den geretteten Winter im Schlussbild kaum erkennbar. Zeige deshalb bei einem zentralen modernen Ding die Kette Beobachtung, falsche \
Deutung, k\xF6rperliche Aktion und sichtbare Folge. Ein Satz darf den Witz verst\xE4rken. Die Aktion muss ihn im Bild verst\xE4ndlich machen.":"",o="CHALLENGE-A\
NSAGE IM AUFTAKT: In der Vollfassung mit Sprache ist die Ansage die erste gesprochene Zeile, auch in der M\xE4rchenwelt. Bei deutscher Tonspur und LIORA-Auswahl sa\
gt die Figur: \xABLiora VideoCoach gibt mir zehn Random Dinge in dreissig Sekunden. Let\u2019s go!\xBB Gib das als w\xF6rtlichen Dialog im ersten Zeitfenster aus. Beginne gle\
ichzeitig mit der ersten sichtbaren Aktion oder ihrem Ger\xE4usch, damit die Ansage die Handlung erkl\xE4rt, ohne sie aufzuhalten. Bei einer eigenen Liste sage, dass \
die Figur die Dinge selbst gew\xE4hlt hat. Passe Sprache, Anzahl und Dauer an die tats\xE4chliche Fassung an. Bei Ohne Sprache erkl\xE4re die Challenge visuell, ohne Dia\
log. Diese Vorgabe hat Vorrang vor sp\xE4teren Vorschl\xE4gen, die Ansage erst nach einer Reaktion zu bringen.",s="AUSGABESPRACHE: Schreibe den kopierfertigen V\
ideoprompt f\xFCr jeden Render vollst\xE4ndig auf Englisch, inklusive Zeitfenstern, Kamera, Handlung, Ton und Referenzzuordnung. W\xF6rtlicher Dialog bleibt in der gew\xE4h\
lten Sprechsprache. Bei Deutsch bleibt also nur der gesprochene Text deutsch. Beratung und Erkl\xE4rungen d\xFCrfen auf Deutsch bleiben.",d="BILDINPUTS PR\xDCFEN: \
Verwende im finalen Videoprompt nur Bildzuordnungen, die im gew\xE4hlten Modus tats\xE4chlich verf\xFCgbar sind. Wenn ein Upload abgelehnt wurde, kl\xE4re zuerst eine umset\
zbare Referenzvariante. Das Seitenverh\xE4ltnis des fertigen Videos, das Seitenverh\xE4ltnis der Eingabebilder und die Rasteranordnung sind drei verschiedene Dinge. P\
r\xFCfe vor dem Raster, welche Dateitypen, Bildgr\xF6ssen, Seitenverh\xE4ltnisse, Anzahl Bilder und Eingaberollen der konkrete Modus akzeptiert. Zwei Reihen mit f\xFCnf Fel\
dern beschreiben den Bildinhalt, kein vorgeschriebenes Dateiformat. Falls ein bestimmtes Seitenverh\xE4ltnis verlangt wird, passe die Leinwand an und erg\xE4nze bei B\
edarf Randfl\xE4che. Alle Rasterzellen m\xFCssen vollst\xE4ndig sichtbar bleiben.",l=e.platform==="higgsfield"?"HIGGSFIELD: Pr\xFCfe den Modus im gew\xE4hlten Modell.\
 Verwende Avatar, Outfit und Raster nur dann als drei getrennte Uploads, wenn Referenzslots daf\xFCr vorhanden sind. Wenn der Modus nur Start- oder Endframes annim\
mt, verwende das Raster bei der Bildvorbereitung und erstelle daraus bei Bedarf einen echten Szenen-Startframe mit Avatar und Outfit im akzeptierten Format. Das\
 Raster selbst geh\xF6rt nicht in den Startframe-Slot. Wenn der Upload scheitert und der Grund unklar ist, frage nach Modus, Dateidaten und genauer Fehlermeldung.":
"";return["BESETZUNG UND WELT",t,i,r,a,o,s,d,l].filter(Boolean).join(`
`)}var te="=== LIORA \xB7 10 RANDOM DINGE \xB7 EIN RASTER, EIN VIDEOPROMPT ===",ne="VOR DEM RASTER \xB7 LAUFZEIT UND MODUS KL\xC4REN";function re(e,t){if(t.kind!==
"random10"||!e.startsWith(te)||e.includes(ne))return e;let i=t.model==="omni"?`F\xFCr den gew\xE4hlten Gemini-Omni-Modus rechne mit 8 Sekunden pro generiertem Clip. F\
\xFCr rund 30 Sekunden plane vier Clips und k\xFCrze den letzten im Schnitt auf etwa 6 Sekunden, falls Omni nur 8-Sekunden-Clips ausgibt.
`:"",r=`${ne}
Diese Laufzeitwahl hat Vorrang vor sp\xE4teren Vorgaben zu einem einzigen Videoprompt, zehn Dingen und festen Zeitfenstern. Die Vollfassung ist eine zusammenh\xE4ngen\
de Geschichte mit zehn Dingen, f\xFCnf Ortswechseln und rund 30 Sekunden. Wenn du ein Modell empfehlen sollst, pr\xFCfe daf\xFCr zuerst Kling 4.0. Plane einen Einzelrend\
er nur, wenn die konkrete Modellversion auf der gew\xE4hlten Plattform 30 Sekunden am St\xFCck mit den n\xF6tigen Referenzen unterst\xFCtzt.
${i}Bei k\xFCrzeren Modi nenne vor dem Raster die best\xE4tigte Clipgrenze. Biete eine Vollfassung mit einem gemeinsamen Raster und einem eigenst\xE4ndigen Prompt pro Re\
nderclip an. Die Clipanschl\xFCsse halten Identit\xE4t, Outfit, Objektbesitz, Position und Bewegung konsistent. Biete alternativ einen kurzen Einzelclip an, bei acht \
Sekunden zum Beispiel mit zwei bis drei Dingen und eigener Pointe. Warte auf die Wahl, falls sie offen ist. Lass bei eigener Liste best\xE4tigen, welche Dinge in d\
ie Kurzfassung kommen. Passe Rastergr\xF6sse, Ortswechsel, Zwischenruf und Dialog an die Kurzfassung an.
`;return e.replace(te,`=== LIORA \xB7 10 RANDOM DINGE \xB7 EIN RASTER, EINE GESCHICHTE ===

`+ee(t)+`

`+(t.randomWorld==="fairy"?"M\xE4rchenwahl: "+(t.fairyTale==="custom"?t.customFairy:t.fairyTale)+`

`:"")+r)}var n=e=>document.getElementById(e);const imageInputLabels = {references:"Referenzen",frames:"Frames"};
const imageInputsByPlatform = {
  higgsfield: {kling:["references","frames"],seedance:["references","frames"]},
  openart: {kling:["references","frames"],seedance:["references","frames"]},
  flow: {veo:["frames"],omni:["references","frames"]}
};
function availableImageInputs(platform, model) {
  return imageInputsByPlatform[platform]?.[model] ?? [];
}
function ie(){let e=n("model"),platform=n("platform"),t=document.createElement("fieldset");t.
className="field";let i=document.createElement("legend");i.textContent="Bildeingabe f\xFCr das Videomodell";let r=document.createElement("p");r.className="hint",
r.textContent="Wähle die Bildeingabe für deine Szene."; t.append(i,r);let a=[["Referenzen","So sollen Figur, O\
utfit oder Dinge aussehen. Lade daf\xFCr zum Beispiel ein Avatarportr\xE4t oder ein Outfitfoto in ein Referenzfeld hoch. Das Modell nutzt es als Vorlage. Der Videopro\
mpt muss deshalb genauer beschreiben, wo die Szene beginnt, wer wo steht und was sich bewegt."],["Frames","So soll die Szene beginnen oder enden. Lade daf\xFCr ein\
 fertiges Szenenbild hoch, das bereits die Figur im Outfit am gew\xFCnschten Ort zeigt. Ein Endbild kannst du erg\xE4nzen, wenn der Modus es unterst\xFCtzt. Der Videopro\
mpt beschreibt vor allem, wie die Szene von diesem Bild aus weitergeht."]];const explanations = a.map(([l,c])=>{let m=document.createElement("p");m.className="hint";let u=document.
createElement("strong");u.textContent=l,m.append(u," \u2013 ",c),t.append(m); return m;});let o="",s=Object.entries(imageInputLabels).map(([l,c])=>{let m=document.createElement("button");return m.type="b\
utton",m.textContent=c,m.addEventListener("click",()=>{o=l,d(),n("prompt").value="",n("copy").classList.add("hidden"),n("outputPanel").style.display="none"}),t.
append(m," "),{value:l,button:m}});function d(){
  const modes=availableImageInputs(platform.value,e.value);
  t.hidden=modes.length!==2;
  document.body.dataset.figureImageInput = modes.length===1 ? modes[0] : modes.includes(o) ? o : "";
  document.dispatchEvent(new Event("figure-input-change"));
  s.forEach(({value,button},index)=>{
    button.hidden=explanations[index].hidden=!modes.includes(value);
    button.className=value===o?"primary":"secondary";
    button.setAttribute("aria-pressed",String(value===o));
  });
}
for(const id of ["model","platform","newVideo","fullReset"]){
  n(id).addEventListener(id==="model"||id==="platform"?"change":"click",()=>{
    o="";
    queueMicrotask(d);
  });
}
n("compat").before(t);
queueMicrotask(d);
return ()=>{
  const modes=availableImageInputs(platform.value,e.value);
  return modes.length===1?modes[0]:modes.includes(o)?o:"";
};
}
function spatialImageGuidance(){return "=== BILDPROMPTS: RÄUMLICHE FUNKTIONSGEOMETRIE BEI BEDARF ===\nDiese Ergänzung gilt für Nano-Banana-Pro-Bildprompts und andere Bildwerkzeuge, wenn die spätere Handlung von Sichtlinien, Fahrwegen, Reichweiten, tragenden Flächen oder Kontaktpunkten abhängt. Bei einfachen Porträts und unkritischen Szenen keine zusätzliche Geometrie-Abhandlung erzeugen. Nutzeridee, freigegebene Handlung und Begleitmodus erhalten; keine neuen Pflichtfragen oder Testrender einführen.\n\nVOR DEM BILDPROMPT: Aus der bereits geklärten Handlung die entscheidenden räumlichen Beziehungen ableiten. Kameraort und Kamerablick, Körperausrichtung und Blickziel jeder Figur, Ausrichtung benutzter Geräte, Bewegungsachse relativ zu festen Umgebungspunkten sowie Auflageflächen, Kontakte und freie Wege getrennt festlegen. Dafür wenige eindeutige Fixpunkte verwenden, zum Beispiel Figur, Gehegegrenze und freie Besucherseite. Nur bild- und handlungsrelevante Beziehungen in den fertigen Bildprompt übernehmen.\n\nFUNKTIONSBEZIEHUNGEN AUSDRÜCKLICH BESCHREIBEN: Die Anwesenheit von Schienen, Rollen, Plattform und Fernglas belegt noch keine funktionierende Anordnung. Beschreiben, worauf etwas aufliegt, wo Räder die Schienen berühren, wohin das benutzte Gerät tatsächlich zeigt und welcher Weg frei bleiben muss. Bei Fernglas und beobachtetem Tier die gemeinsame Sichtlinie festlegen. Bewegungsrichtungen an der realen Umgebung verankern; Bild-links und Bild-rechts beschreiben nur die Projektion aus der gewählten Kamera.\n\nRICHTUNGSWIDERSPRÜCHE VOR DER AUSGABE AUFLÖSEN: „Nach hinten“, „zum unteren linken Bildrand“ und „entgegen der Blickrichtung“ nur kombinieren, wenn sie in dieser Kameraposition dieselbe räumliche Richtung bezeichnen. Kamera-, Körper-, Blick- und Objektachsen gegeneinander prüfen. Eine seitliche Kamera darf eine Bewegungsachse anders im Bild zeigen als eine frontale Kamera. Nicht zugleich einander ausschließende Richtungen verlangen.\n\nREFERENZEN UND KORREKTUREN PRIORISIEREN: Identität, Outfit und Szenenkomposition den tatsächlich vorliegenden Referenzen eindeutig zuordnen. Verhindert die bisherige Komposition die Handlung, die notwendige Änderung konkret benennen und die handlungsfähige räumliche Anordnung vor dem Erhalt genau dieser Komposition priorisieren. Keine pauschale Aufforderung „alles unverändert lassen“ mit einer nötigen Neuorientierung verbinden. Bei Bildkorrekturen die entscheidenden Fehler und Zielbeziehungen präzise angeben, statt zusätzliche allgemeine Geometrie-Floskeln anzuhängen.\n\nEIN BILD, EIN ZUSTAND: Das Szenenbild zeigt einen einzigen Moment. Den späteren Bewegungsweg durch ausreichend freien Raum und plausible Startkontakte vorbereiten; keine zeitliche Handlungskette als gleichzeitig sichtbaren Zustand verlangen. Das Bildformat und die im gewählten Videomodus wirklich nutzbaren Eingaben beibehalten.\n\nPRÜFUNG NACH DER GENERIERUNG: Erst das tatsächlich hochgeladene Ergebnis auf diese Beziehungen prüfen. Bei verdeckten oder perspektivisch unklaren Kontakten die Unsicherheit benennen. Ein nicht sichtbares Detail nicht als bestätigt ausgeben. Keine Eignung zum Animieren ohne Bildsichtung behaupten. Wenn eine Beziehung noch falsch ist, gezielt diese Anordnung korrigieren. Die Regel ist eine Planungshilfe und keine Zusicherung korrekter Modellergebnisse.\n=== ENDE RÄUMLICHE FUNKTIONSGEOMETRIE ===\n\n";}
function independentDirectionGuidance(){return "=== EIGENSTÄNDIGE REGIE VOR BILDPROMPTS ===\nDie Nutzerin liefert Idee, Geschmack und gewünschte Wirkung. Übernimm die filmische Problemlösung: Kamera, verständliche Informationsfolge, räumliche Anordnung und Anschlüsse. Frage nach fehlenden kreativen Absichten, wenn sie entscheidend sind; lass die Nutzerin keine Kamerawinkel, Blickachsen oder Fahrwege lösen, die du aus der Handlung ableiten kannst.\n\nVOR DER BILDPLANUNG intern prüfen: Was muss das Publikum zuerst verstehen? Welche Information oder Figur soll bis zur späteren Enthüllung verborgen bleiben? Welche Einstellung zeigt die gerade nötige Information am klarsten? Vergleiche bei räumlich oder dramaturgisch anspruchsvollen Szenen intern mindestens zwei plausible Inszenierungen und entscheide dich eigenständig. Gib die gewählte Lösung kurz und konkret aus, keine lange Alternativenliste und keine zusätzliche obligatorische Freigabeschleife.\n\nEINSTELLUNGEN NACH AUFGABE WÄHLEN: Gesicht, Bewegungsweg und spätere Enthüllung müssen nicht gleichzeitig in einer Gesamtansicht sichtbar sein. Wenn es der Geschichte hilft, trenne diese Aufgaben in geeignete Einstellungen; prüfe dabei Orientierung, Raumanschluss, Figurenpositionen, Requisitenzustände und Offenbarungszeitpunkt. Eine Draufsicht erklärt einen Weg, zeigt aber kein frontales Gesicht. Verwende nur tatsächlich nötige Bildanker. Bestehende Vorgaben zu Dauer, Einzelrender, Format, Modell und Referenzmodus bleiben verbindlich; plane erforderliche Schnitte innerhalb des erlaubten Workflows und benenne Grenzen, statt stillschweigend weitere Render oder Uploads anzufordern.\n\nBEI GESCHEITERTER KORREKTUR ZUERST DIE INSZENIERUNG PRÜFEN: Nach einer strukturell misslungenen Bildkorrektur nicht dieselbe Gesamtansicht mit weiteren Richtungs-Floskeln fortschreiben. Prüfe zuerst, ob Kamera, Komposition oder Szenenaufteilung die Ursache sind. Bewahre brauchbare freigegebene Ergebnisse und benenne konkret, welche Einstellung neu aufgebaut werden muss und warum. Ein frischer Bildaufbau kann geeigneter sein als das weitere Editieren einer ungeeigneten Vorlage. Entscheide das aus dem sichtbaren Fehler, nicht pauschal.\n\nVOR EINER WEITEREN GENERIERUNG: Erkennbare Fehler und die konkrete Korrektur benennen, die Widerspruchsfreiheit des neuen Aufbaus prüfen und den modellspezifischen Bildprompt liefern. Keine zusätzlichen kostenpflichtigen Tests oder Bild-/Videogenerierungen ohne gültige Nutzerfreigabe beauftragen. Eine vorhandene Freigabe nicht in eine endlose Rückfrageschleife verwandeln. Begleitmodus und Nutzeranweisungen respektieren.\n\nDiese Regel ergänzt die vorhandene Story-, Referenz- und Geometrieplanung. Sie erteilt keine Renderfreigabe und ist kein Nachweis besserer Bild- oder Videoergebnisse.\n=== ENDE EIGENSTÄNDIGE REGIE ===\n\n";}
function videoRemixGuidance(){return document.getElementById('kind')?.value==='trends'?"=== VIDEOREMIX – ANSAGE UND REFERENZVIDEO ===\nGilt ausschließlich für die gewählte Kategorie VideoRemix (technischer Formatwert: trends). Beginne deine erste Antwort an die Nutzerin mit dieser Ansage, bevor du die nächsten Schritte erklärst:\n„Dein Referenzvideo dient als Vorlage für deine eigene Umsetzung. Eine 1:1-Nachbildung oder ein bestimmtes Ergebnis können wir nicht garantieren. Bewegungen, Timing und Details können abweichen.“\n\nBitte anschließend um das Referenzvideo als Anhang hier im Chat, sofern es noch fehlt und der Upload unterstützt wird. Bei fehlender Uploadmöglichkeit mit wichtigen Einzelbildern und einer Beschreibung arbeiten. Ein Videolink allein ist kein Nachweis, dass du das Video gesehen hast. Analysiere nur tatsächlich zugängliche Inhalte; benenne unsichere Bewegungen, Schnitte, Timing, Loop und Ton und frage bei entscheidenden Unklarheiten gezielt nach. Entwickle daraus passende Bild- und Videoprompts für eine eigene Umsetzung mit den ausgewählten Figuren. Eine 1:1-Kopie ist kein zugesagtes Ziel.\nDer gewählte Begleitmodus bleibt verbindlich: Geführt Schritt für Schritt vorgehen und hochgeladene erzeugte Bilder vor abhängigen Videoprompts auf erkennbare Identitäts-, Raum-, Anschluss- und Handlungsfehler prüfen. Ohne Bilder keine Prüfung behaupten. Im Direktmodus den bereits möglichen zusammenhängenden Entwurf liefern und fehlende Referenzen sowie ungeprüfte Annahmen kennzeichnen. Diese Ergänzung erteilt keine Renderfreigabe.\n=== ENDE VIDEOREMIX ===\n\n":'';}
function Z(e,t,i,platform){e=videoCoachGuidance()+videoRemixGuidance()+independentDirectionGuidance()+spatialImageGuidance()+e;const modes=availableImageInputs(platform,t); const heading="=== BILDEINGABE FÜR DIE GEWÄHLTE PLATTFORM ==="; if(!modes.length) return [e,heading,"Für diese Plattform und Modellvariante ist keine Bildeingabe vorgegeben. Stelle keine pauschale Auswahlfrage zu Referenzen oder Frames. Kläre bei Bedarf zuerst das konkrete Setup und prüfe die verfügbaren Eingabefelder, bevor du einen Upload einplanst. Diese Regel hat Vorrang vor allgemeinen Bildmodusfragen in diesem Auftrag."].join("\n\n"); return [e,heading,i==="references"?"Gew\xE4hlt: REFERENZEN. Verwende die Bilder als Motiv- und Identit\xE4tsvorlagen in best\xE4tigten Referen\
zfeldern. Behandle sie nicht als zeitliche Keyframes. Der Videoprompt muss den Ausgangszustand genauer festlegen als bei Frames: Ort, Licht, Kamera, Positionen,\
 Posen und Blickrichtungen. Beschreibe die entscheidenden Aktionen in Reihenfolge mit Ausl\xF6ser, Bewegungsrichtung, Kontakt und sichtbarem Ergebnis. Benenne bei \
kritischen \xDCbergaben, welche Hand welches Objekt h\xE4lt und wo es nach der Aktion ist. Nenne an Schnitten die Zust\xE4nde, die f\xFCr den Anschluss wichtig sind. Wenn e\
in Kameraroll gew\xFCnscht ist, kl\xE4re gegebenenfalls die Umsetzung im Schnitt.":i==="frames"?"Gew\xE4hlt: FRAMES. Plane die tats\xE4chlichen Szenenbilder f\xFCr den S\
tart und, falls ben\xF6tigt und verf\xFCgbar, f\xFCr das Ende. Avatar-, Outfitbilder und Raster dienen bei Bedarf als Vorlagen zur Erstellung dieser Szenenbilder. Lade s\
ie nicht als fertige Start- oder Endframes ein. Nutze die sichtbare Komposition als Ausgangspunkt. Konzentriere den Videoprompt auf die Bewegung, Reaktion, das \
Timing, die Kamera und den gew\xFCnschten Endzustand. Beschreibe kritische \xDCbergaben weiterhin konkret und bewahre sichtbare Bilddetails ohne Widerspr\xFCche.":
 "Falls die Szene eine Bildeingabe braucht, kläre, welcher der beiden für dieses Setup dokumentierten Wege zur Szene passt: Referenzen oder Frames. Prüfe vorher die konkrete Oberfläche und biete nur die dort tatsächlich verfügbaren Optionen an.","Pr\xFCfe den konkreten Modus und die verf\xFCgbare\
n Eingabefelder. Wenn der gew\xE4hlte Modus fehlt oder ein Upload abgelehnt wird, kl\xE4re die Alternative mit der Nutzerin vor dem finalen Videoprompt. Wechsle nie s\
tillschweigend den Modus. Diese Wahl hat Vorrang vor anderslautenden Bildzuordnungen im Auftrag."].join(`

`)}var Re=["W\xE4hle die Karte, die am besten zu deiner Szene passt. Du kannst das Format sp\xE4ter wechseln.","Ein Satz reicht f\xFCr den Anfang: Wer ist zu sehen un\
d was passiert? Wenn du noch keine Idee hast, lass dir zwei Ans\xE4tze vorschlagen.","Du kannst die Modellwahl LIORA \xFCberlassen. \xD6ffne die Referenzen nur, wenn \
du Personen, Outfits oder einen Ort festlegen m\xF6chtest.","Kopiere den fertigen Auftrag in ChatGPT. Starte dort mit der Geschichte und dem Shotplan und lade d\
eine Bilder dann im Chat hoch."];function x(e,{focus:t=!0}={}){document.querySelectorAll("[data-step]").forEach(i=>{i.hidden=Number(i.dataset.step)!==e}),document.
querySelectorAll(".steps [data-go]").forEach(i=>{Number(i.dataset.go)===e?i.setAttribute("aria-current","step"):i.removeAttribute("aria-current")}),n("butler-ti\
p").textContent=Re[e-1],t&&n("step-"+e+"-title").focus()}function y(e,t=!1){document.querySelector(`[data-step="${e}"] [data-status-slot]`).append(n("status")),
n("status").classList.toggle("is-error",t)}function M(){let e=n("kind").value;document.querySelectorAll("[data-format]").forEach(t=>{let i=t.dataset.format===e;
t.setAttribute("aria-pressed",String(i)),i&&(n("selection-title").textContent=t.querySelector("strong").textContent,n("selection-description").textContent=t.querySelector(
".format-copy > span").textContent)})}function ae(){let e=n("kind");document.querySelectorAll("[data-format]").forEach(t=>{t.addEventListener("click",()=>{e.value!==
t.dataset.format&&(e.value=t.dataset.format,e.dispatchEvent(new Event("change",{bubbles:!0})))})}),e.addEventListener("change",M),document.querySelectorAll("[da\
ta-go]").forEach(t=>{t.addEventListener("click",()=>x(Number(t.dataset.go)))}),M()}var $={unsure:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo\
 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]],higgsfield:[
["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch \
weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest positiv"]],openart:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2\
.5 \xB7 Deutsch eingeschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7\
 Deutsch Praxistest positiv"]],flow:[["veo","Veo 3.1 \xB7 Modus pr\xFCfen"],["omni","Gemini Omni 1.2 Flash \xB7 Verf\xFCgbarkeit pr\xFCfen"],["recommend","LIORA\
 soll pr\xFCfen"]],heygen:[["heygen","HeyGen \xB7 Avatar-Modus pr\xFCfen"]],other:[["recommend","LIORA soll empfehlen"],["seedance","Seedance 2.5 \xB7 Deutsch eing\
eschr\xE4nkt"],["kling","Kling 4.0 \xB7 bei Deutsch"],["veo","Veo 3.1 \xB7 Deutsch weniger zuverl\xE4ssig"],["omni","Gemini Omni 1.2 Flash \xB7 Deutsch Praxistest \
positiv"],["heygen","HeyGen \xB7 Modus pr\xFCfen"]]};var B=["ciAudience","ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform","mo\
del","ratio","language","music","people","location","locationRef","keyframeRef","extra","priority"];function I(){return document.querySelector("input[name=ideaM\
ode]:checked").value}function oe(){let e=Object.fromEntries(B.map(r=>[r,n(r).value]));e.kind==="random10"&&!selectedFigureProfiles().length&&(e.people="1");let t=e.people==="auto"?0:Number(e.people),
i=[];for(let r=0;r<t;r++)i.push({name:n("person"+r)?.value,notes:n("notes"+r)?.value,avatar:n("avatar"+r)?.value,outfit:n("outfit"+r)?.value});return{...e,mode:I(),
personReferences:i}}function P(){let e=document.body.dataset.accessScope;return e?"liora-lab-video-v34-draft:"+e:"liora-lab-video-v34-draft"}function C(){saveCategoryDrafts();try{let e={};B.forEach(t=>{
n(t)&&(e[t]=n(t).value)}),e.guidedMode=document.getElementById("guidedMode")?.checked!==false;e.ideaMode=I();for(let t=0;t<5;t++)for(let i of["person","notes","avatar","outfit"]){let r=i+t;n(r)&&(e[r]=n(r).value)}localStorage.setItem(
P(),JSON.stringify(e))}catch{}}function se(){if(window._restoring)for(let e=0;e<5;e++)for(let t of["person","notes","avatar","outfit"]){let i=t+e;n(i)&&window._restoring[i]&&
(n(i).value=window._restoring[i])}}function le({updateModels:e,updateIdeaMode:t,renderPeople:i,updateCompatibility:r}){try{let a=JSON.parse(localStorage.getItem(
P())||"{}");if(document.getElementById("guidedMode"))document.getElementById("guidedMode").checked=a.guidedMode!==false;if(window._restoring=a,a.ideaMode){let o=document.querySelector(`input[name=ideaMode][value="${a.ideaMode}"]`);o&&(o.checked=!0)}["ciAudience","ciGo\
al","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].forEach(o=>{a[o]!==void 0&&
(o!=="kind"||["talk","standup","signature","couple","fairytale","storytelling","random10"].includes(a[o]))&&(n(o).value=a[o])}),e(),B.filter(o=>!["ciAudience","\
ciGoal","ciTone","kind","fairyLead","fairyTale","customFairy","randomWorld","randomSource","randomItems","idea","scriptText","platform"].includes(o)).forEach(o=>{
(a[o]!==void 0&&n(o).querySelector('option[value="'+a[o]+'"]')||a[o]!==void 0&&n(o).tagName!=="SELECT")&&(n(o).value=a[o])}),t(),i(),r(),window._restoring=null,
n("ratioHint").textContent="Format nach Plattform und Inszenierung w\xE4hlen."}catch{window._restoring=null}}async function de(e){try{return await navigator.clipboard.writeText(e),!0}catch{let i=n("prompt");i.focus(),i.select();try{return document.execCommand("copy")}catch{
return!1}}}var E=1e4,U=window.SpeechRecognition||window.webkitSpeechRecognition,p=null;function S(e){let t=n(e);t.value.length>E&&(t.value=t.value.slice(0,E)),n(e+"Count").
textContent=t.value.length.toLocaleString("de-CH")+" / 10\u2019000 Zeichen"}function v(e,t){n(e+"MicStatus").textContent=t}function w(){if(!p)return;let e=p;p=null;
try{e.recognition.stop()}catch{}let t=document.querySelector('[data-dictate="'+e.id+'"]');t.classList.remove("recording"),t.setAttribute("aria-pressed","false"),
t.textContent="\u{1F399}\uFE0F Einsprechen"}function ce(e){return e.toLocaleLowerCase("de-CH").match(/[\p{L}\p{N}]+/gu)||[]}function ue(e){let t="";for(let i of e){
let r=(i||"").trim();if(!r)continue;let a=t.trim();if(!a){t=r;continue}let o=ce(a),s=ce(r),d=0;for(let l=Math.min(o.length,s.length);l>=2;l--)if(o.slice(-l).join(
"|")===s.slice(0,l).join("|")){d=l;break}if(!(d===s.length&&s.length>=2))if(d){let c=[...r.matchAll(/[\p{L}\p{N}]+/gu)][d]?.index;c!==void 0&&(t=a+" "+r.slice(c).
trim())}else t=a+" "+r}return t.trim()}function xe(e){if(p){let o=p.id===e;if(w(),o){v(e,"Aufnahme beendet.");return}}if(!U){v(e,"Spracherkennung wird von diese\
m Browser nicht unterst\xFCtzt. Bitte Chrome oder Edge verwenden.");return}let t=n(e);if(t.value.length>=E){v(e,"Maximal 10\u2019000 Zeichen erreicht.");return}
let i=new U;i.lang="de-CH",i.continuous=!0,i.interimResults=!0;let r={id:e,recognition:i,base:t.value,finals:new Map,lastStable:"",lastPreview:""};p=r;let a=document.
querySelector('[data-dictate="'+e+'"]');a.classList.add("recording"),a.setAttribute("aria-pressed","true"),a.textContent="\u23F9 Aufnahme stoppen",v(e,"Mikrofon\
 aktiv \xB7 Sprich jetzt."),i.onresult=o=>{if(p!==r)return;for(let u=o.resultIndex;u<o.results.length;u++){let f=o.results[u];f.isFinal&&r.finals.set(u,(f[0]?.transcript||
"").trim())}let s=[...r.finals.entries()].sort((u,f)=>u[0]-f[0]).map(u=>u[1]),d=ue(s),l=[];for(let u=0;u<o.results.length;u++)o.results[u].isFinal||l.push(o.results[u][0]?.
transcript||"");let c=ue([...s,...l]),m=r.base+(r.base&&!/\s$/.test(r.base)?" ":"");r.lastStable=d,r.lastPreview=c,t.value=(m+c).slice(0,E),S(e),t.dispatchEvent(
new Event("input",{bubbles:!0})),(m+d).length>=E&&(t.value=(m+d).slice(0,E),S(e),w(),v(e,"10\u2019000 Zeichen erreicht \u2013 Aufnahme gestoppt."))},i.onerror=o=>{
if(p!==r)return;w(),v(e,{not_allowed:"Mikrofonzugriff nicht erlaubt.","service-not-allowed":"Spracherkennung nicht verf\xFCgbar.","no-speech":"Keine Sprache erk\
annt.",network:"Netzwerkfehler bei der Spracherkennung."}[o.error]||"Spracherkennung unterbrochen.")},i.onend=()=>{p===r&&(w(),v(e,"Aufnahme beendet. Zum Fortse\
tzen erneut dr\xFCcken."))};try{i.start()}catch{w(),v(e,"Mikrofon konnte nicht gestartet werden.")}}function me(){["idea","extra"].forEach(e=>{let t=n(e);S(e),t.
addEventListener("input",()=>S(e)),t.addEventListener("paste",()=>setTimeout(()=>S(e),0)),document.querySelector('[data-dictate="'+e+'"]').addEventListener("cli\
ck",()=>xe(e))}),U||document.querySelectorAll("[data-dictate]").forEach(e=>{e.title="Spracherkennung ben\xF6tigt Chrome oder Edge."})}function he(e){let t=e.kind,i=["talk","standup"].includes(t)&&e.scriptText.trim(),r=["signature","couple","fairytale","storytelling","random10"].includes(t);if(e.
mode==="own"&&!e.idea.trim()&&!r&&!i)return{field:"idea",error:"Bitte beschreibe zuerst kurz deine Idee."};let a=e.randomItems.split(/[\n;,]+/u).map(o=>o.trim()).
filter(Boolean);return t==="random10"&&e.randomSource==="own"&&a.length!==10?{field:"randomItems",error:`Bitte genau 10 Gegenst\xE4nde eingeben (aktuell ${a.length}\
).`}:{randomObjects:a}}function T(){let e=n("model").value,t=$[n("platform").value]||$.unsure;n("model").replaceChildren(),t.forEach(([i,r])=>{let a=document.createElement("option");a.
value=i,a.textContent=r,n("model").append(a)}),t.some(([i])=>i===e)&&(n("model").value=e),n("modelHint").textContent="Vorauswahl, keine Live-Kompatibilit\xE4tspr\xFCf\
ung.",A()}function A(){let e=n("platform").value,t=n("model").value,i=n("kind").value,r=n("language").value,a="Die genaue Modellversion, Referenzanzahl, Audiofu\
nktionen und erlaubten Clip-L\xE4ngen werden im Chat vor der Produktion gepr\xFCft.";e==="flow"&&t==="veo"&&(a="Google Flow: Gew\xE4hlter Veo-Modus, Seitenverh\xE4ltn\
is, Audio und Referenzfunktionen m\xFCssen im tats\xE4chlichen Interface gepr\xFCft werden."),t==="omni"&&(a="Gemini Omni 1.2 Flash: Positiver LIORA-Praxistest \
f\xFCr Talking Head und Stand-up-Comedy mit nat\xFCrlichem deutschem Dialog. Andere Formate, Referenzmodi und die Verf\xFCgbarkeit auf dieser Plattform gesondert pr\xFCfen."),
t==="recommend"&&(a="LIORA w\xE4hlt erst nach Pr\xFCfung von Idee, Plattform, Referenzen und Audio ein konkretes Modell."),(r==="Deutsch"||r==="Deutsch (Schweiz\
er Akzent)")&&(t==="kling"?a="Deutsch gew\xE4hlt: Kling 4.0 verwenden. \xC4ltere Kling-Versionen nicht als Standard f\xFCr native deutsche Dialoge empfehlen. Verf\xFCgbarke\
it auf deiner Plattform pr\xFCfen.":t==="seedance"?a="Deutsch mit Seedance 2.5: Aussprache und Lip-Sync pr\xFCfen, insbesondere Umlaute, sch-Laut, Vorsilben und zu\
sammengesetzte W\xF6rter. Keine automatische phonetische Umschreibung.":t==="omni"?a="LIORA-Praxiserfahrung: Gemini Omni 1.2 Flash liefert sehr gute Ergebnisse \
f\xFCr Talking Head und Stand-up-Comedy; deutsche Sprache funktionierte im Test hervorragend. Stimme, Akzent und Verf\xFCgbarkeit im jeweiligen Modus dennoch pr\xFCfen.":
t==="veo"&&(a="Deutsch mit Veo 3.1 ist nach LIORA-Praxiserfahrung weniger zuverl\xE4ssig. F\xFCr deutsche Dialoge bevorzugt Gemini Omni 1.2 Flash oder Kling 4.0 w\xE4hle\
n. Falls Veo ausdr\xFCcklich gew\xFCnscht: kurzen Sprachtest einplanen."),t==="recommend"?a="Deutscher Dialog: f\xFCr Talking Head und Stand-up Gemini Omni 1.2 Fla\
sh als praxiserprobte Option bevorzugt pr\xFCfen; sonst Kling 4.0; Veo 3.1 f\xFCr Deutsch wegen schwankender Aussprache nicht bevorzugen, Seedance 2.5 nur mit Ausspra\
chekontrolle auf der gew\xE4hlten Plattform pr\xFCfen; keine pauschale Empfehlung \xE4lterer Kling-Versionen.":t==="heygen"&&(a="HeyGen ist ein separater Avatar\
-/Sprachworkflow; deutsche Sprache und Lip-Sync im gew\xE4hlten Modus pr\xFCfen. Die Kling-/Seedance-Regel gilt nicht pauschal f\xFCr HeyGen.")),r==="Deutsch (S\
chweizer Akzent)"&&(a+=" Sprechweise: Schweizer Hochdeutsch mit nat\xFCrlichem, dezentem Schweizer Akzent; kein Dialekt. Akzent kann je nach Engine abweichen."),
n("compat").textContent=a}function be(){let e=n("kind").value;if(e!=="talk"&&e!=="standup")return;let t=n("scriptText").value.trim(),i=t?t.split(/\s+/u).filter(
Boolean).length:0,r=e==="standup"?45:55,a=e==="standup"?125:135,o=e==="standup"?7:4,s=i?Math.ceil(i*60/a+o):0,d=n("scriptBudget");if(!i){d.textContent="30-Sekun\
den-Planung: Stand-up ca. 35\u201345 W\xF6rter, Talking Head ca. 45\u201355 W\xF6rter. Pausen, Lachen und nicht gleichzeitig sprechbare Bewegungen reduzieren das verf\xFCgbare Zei\
tbudget.";return}let l=i>r||s>30;d.textContent=`${i} W\xF6rter \xB7 gesch\xE4tzt ${s} Sekunden inkl. ${o} s Pausen-/Reaktionsreserve \xB7 vorsichtiger Richtwert: b\
is ${r} W\xF6rter / 30 s. ${l?"\u26A0\uFE0F F\xFCr 30 Sekunden wahrscheinlich zu dicht. Text gemeinsam k\xFCrzen oder auf mehrere Clips verteilen; nicht ungefragt \xE4ndern.":
"\u2713 Im groben Planungsbereich; genaue Sprechdauer, Aussprache und Performance vor dem Rendern trotzdem pr\xFCfen."} Keine garantierte Kling-Grenze.`}function j(){
let e=n("kind").value,t=e==="talk"||e==="standup";n("scriptField").classList.toggle("hidden",!t),n("scriptText").disabled=!t,be(),n("scriptHint").textContent=e===
"standup"?"Optional: Set-up, Pointe und Nachsatz einsetzen. LIORA pr\xFCft Tempo, Pausen, Lacher und Sprechdauer vor dem Rendern.":"Optional: Deinen genauen Tal\
king-Head-Text einsetzen. LIORA gestaltet nat\xFCrliche Betonung, Atempausen und bei humorvollen Stellen gezieltes Comedy-Timing."}function fe(){n("kind").value===
"whip"?(n("ratio").value="16:9",n("ratioHint").textContent="Empfehlung: 16:9 gibt dem seitlichen Whip-Pan mehr Raum. F\xFCr Reels ist 9:16 weiterhin m\xF6glich."):
(n("ratio").value="9:16",n("ratioHint").textContent="Vorauswahl f\xFCr vertikale Social-Videos. Du kannst sie \xE4ndern.")}function F(){let e=I(),t=e==="inspire",
i=e==="reference",r=n("kind").value==="trends";n("trendHelp").classList.toggle("hidden",!r),n("referenceHelp").classList.toggle("hidden",!i||r),n("intelligenceP\
anel").classList.toggle("hidden",!(t&&["talk","standup"].includes(n("kind").value))),n("ideaLabel").textContent=r?"Was möchtest du aus deinem Referenzvideo übernehmen?":i?"\
Was passiert im Inspirationsvideo?":t?"Wor\xFCber soll LIORA Ideen entwickeln? (optional)":"Beschreibe deine Idee",n("idea").placeholder=r?"Beschreibe kurz deine Vorlage oder deinen Änderungswunsch. Das Video lädst du anschließend im Chat hoch.":i?"Beschreibe die Handlung in zeitlicher Reihenfolge: Was macht die Person, was bewegt sich, welche Kamera\
perspektive und welcher Effekt gefallen dir? Was m\xF6chtest du anders machen?":t?"Thema, Zielgruppe, Stimmung oder Alltagssituation \u2013 oder einfach frei lassen.":
n("kind").value==="signature"?"Optional: Welche normale Alltagssituation soll v\xF6llig absurd werden?":n("kind").value==="couple"?"Optional: Romantik, Kuss, Ku\
scheln, Beziehungshumor oder emotionales Drama \u2013 was m\xF6chtest du zeigen?":n("kind").value==="fairytale"?"Optional: Was ist die \xFCberraschende Wendung? Du\
 kannst auch einen fertigen Dialog einf\xFCgen.":n("kind").value==="storytelling"?"Optional: Wer begegnet wem? Was ver\xE4ndert sich zwischen Anfang und Ende? Welc\
hes Detail verbindet beide Momente?":n("kind").value==="random10"?"Optional: Welcher Avatar, welche M\xE4rchenfigur oder welche Art von Humor? Die zehn Gegenst\xE4nde\
 werden separat festgelegt.":"Was soll passieren? Wer macht oder sagt was? Was ist die Pointe?"}function ke(){let e=n("randomItems").value.split(/[\n;,]+/u).filter(
t=>t.trim()).length;n("randomItemsCount").textContent=e+" von 10 ausgef\xFCllt"}function we(){let e=n("randomItems").value,t=/[,;]/u.test(e)?e.split(/[\n;,]+/u):
e.split(`
`);n("randomItemInputs").querySelectorAll("input").forEach((i,r)=>{i.value=t[r]?.trim()??""}),ke()}function Ie(){let e=n("randomItemInputs");for(let t=1;t<=10;t++){
let i=document.createElement("div"),r=document.createElement("label"),a=document.createElement("input");a.id="randomItem"+t,a.maxLength=300,r.htmlFor=a.id,r.textContent=
"Ding "+t,i.append(r,a),e.append(i)}e.addEventListener("input",t=>{t.target.value=t.target.value.replace(/[,;]/gu," "),n("randomItems").value=Array.from(e.querySelectorAll(
"input"),i=>i.value.trim()).join(`
`),ke()})}function z(){n("random10Field").classList.toggle("hidden",n("kind").value!=="random10"),n("randomItemsField").classList.toggle("hidden",n("kind").value!==
"random10"||n("randomSource").value!=="own"),n("storyHelp").classList.toggle("hidden",n("kind").value!=="storytelling");let e=n("kind").value==="fairytale"||n("\
kind").value==="random10"&&n("randomWorld").value==="fairy";n("fairyField").classList.toggle("hidden",!e),n("customFairyField").classList.toggle("hidden",!e||n(
"fairyTale").value!=="custom")}function D(){let e=n("people"),t=n("kind").value==="random10",chosen=selectedFigureProfiles(),picked=chosen.length>0,i=picked?String(chosen.filter(p=>p.slot!==6).length):t?"1":e.value,r=i==="auto"?0:Number(i),a=n("personRefs");if(picked)e.value=i;e.disabled=
t||picked,e.closest(".field").classList.toggle("hidden",t||picked);let o={};a.querySelectorAll("input[type=text],select").forEach(s=>o[s.id]=s.value),a.replaceChildren();for(let s=0;s<
r;s++){let d=String.fromCharCode(65+s),l=document.createElement("div");l.className="ref-card",l.innerHTML=`<div class="ref-title">Person ${d}</div><div class="g\
rid"><div><label for="person${s}">Name / Rolle</label><input id="person${s}" type="text" placeholder="z. B. Nyra"></div><div><label for="avatar${s}">Avatarbild<\
/label><select id="avatar${s}"><option value="none">Noch kein Bild</option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LI\
ORA soll Bildprompt erstellen</option></select></div><div><label for="outfit${s}">Outfitbild</label><select id="outfit${s}"><option value="none">Noch kein Bild<\
/option><option value="ready">Vorhanden \u2013 im Chat hochladen</option><option value="create">LIORA soll Outfit vorschlagen</option></select></div><div><label for=\
"notes${s}">Wichtige Merkmale</label><input id="notes${s}" type="text" placeholder="z. B. Frisur beibehalten"></div></div>`,a.append(l),["person"+s,"notes"+s,"a\
vatar"+s,"outfit"+s].forEach(c=>{o[c]&&(n(c).value=o[c])})}if(i==="auto"){let s=document.createElement("p");s.className="small",s.textContent="LIORA bestimmt di\
e ben\xF6tigte Personenzahl anhand der Idee. Referenzen werden anschliessend im Chat gekl\xE4rt.",a.append(s)}if(r===0&&i!=="auto"){let s=document.createElement(
"p");s.className="small",s.textContent="Keine Personen vorgesehen. Du kannst trotzdem eine Ortsreferenz oder einen Startframe vorbereiten.",a.append(s)}se()}function Ce(){
n("prompt").value="",n("outputPanel").style.display="none",n("copy").classList.add("hidden"),n("status").textContent=""}function ge(e){w(),!(!e&&!window.confirm(
"Wirklich komplett neu starten? Alle Eingaben und der lokal gespeicherte Entwurf werden gel\xF6scht."))&&(e?(document.querySelector('input[name=ideaMode][value=\
"own"]').checked=!0,n("idea").value="",n("randomItems").value="",n("scriptText").value="",n("location").value="",n("locationRef").value="\
none",n("keyframeRef").value="none"):(localStorage.removeItem(P()),resetCategoryDrafts(),document.getElementById("guidedMode")&&(document.getElementById("guidedMode").checked=true),selectedFigureSlots.clear(),renderFigureOptions(),window._restoring=null,document.querySelector('input[name=ideaMode][value="own"]').checked=!0,
["kind","platform","ratio","language","music","people","locationRef","keyframeRef","priority"].forEach(t=>{let i=n(t);i.selectedIndex=0}),["idea","scriptText","\
randomItems","location","extra","ciAudience"].forEach(t=>n(t).value=""),n("ciGoal").value="comments",n("ciTone").value="authentic",T(),D()),D(),F(),j(),A(),z(),
we(),N(),Ce(),["idea","extra"].forEach(S),activeDraftCategory=n("kind").value,C(),n("status").textContent=e?"\u2713 Neues Video bereit. Deine Avatar- und pers\xF6nlichen Angaben bleiben erhalten. Bitte di\
e Outfitangaben f\xFCr die neue Szene pr\xFCfen.":"\u2713 Alles zur\xFCckgesetzt. Du kannst ganz neu beginnen.",M(),x(2),y(2),n("idea").focus())}function pe(e){
return e.toLocaleLowerCase("de-CH").replace(/ae/g,"\xE4").replace(/oe/g,"\xF6").replace(/ue/g,"\xFC").normalize("NFD").replace(/\p{M}/gu,"").replace(/ß/g,"ss").
trim()}function N(){n("fairySearch").value="",n("fairySearchResults").replaceChildren(),n("fairySearchResults").hidden=!0,n("fairySearchStatus").textContent=""}
function ve(){let e=pe(n("fairySearch").value),t=n("fairyTale"),i=n("fairySearchResults"),r=Array.from(t.options).filter(a=>a.parentElement.tagName==="OPTGROUP"&&
e.split(/\s+/).every(o=>pe(a.textContent).includes(o)));if(i.replaceChildren(),i.hidden=!e||r.length===0,n("fairySearchStatus").textContent=e?r.length?r.length===
1?"1 Treffer":r.length+" Treffer":"Kein Treffer. Du kannst unten ein eigenes M\xE4rchen w\xE4hlen.":"",!i.hidden)for(let a of r){let o=document.createElement("l\
i"),s=document.createElement("button");s.type="button",s.textContent=a.textContent,s.addEventListener("click",()=>{t.value=a.value,N(),t.dispatchEvent(new Event(
"change",{bubbles:!0})),t.focus()}),o.append(s),i.append(o)}}function Se(e,{enableCameraRoll:t=!1}={}){if(t){let r=document.createElement("div");r.className="fi\
eld";let a=document.createElement("label"),o=document.createElement("input");o.type="checkbox",o.id="cameraRoll",a.append(o," Dynamischer Einstieg: 90\xB0-Kameraro\
ll");let s=document.createElement("p");s.className="hint",s.textContent="F\xFCr 9:16. Startbild seitlich, Endbild aufrecht.",r.append(a,s),n("compat").before(r);
let d=()=>{r.hidden=o.disabled=n("ratio").value!=="9:16"};n("ratio").addEventListener("change",d);for(let l of["newVideo","fullReset"])n(l).addEventListener("cl\
ick",()=>{o.checked=!1,queueMicrotask(d)});queueMicrotask(d)}let i=ie();n("newVideo").addEventListener("click",()=>{mainFigureSlot=null;ge(!0);renderFigureOptions()}),n("fullReset").addEventListener("clic\
k",()=>ge(!1)),n("scriptText").addEventListener("input",be),n("generate").addEventListener("click",async()=>{let r=oe(),a=i();n("cameraRoll")?.checked&&r.ratio===
"9:16"&&(r.cameraRoll=!0);let o=he(r);if(o.error){if(x(2,{focus:!1}),y(2,!0),n("status").textContent=o.error,o.field==="randomItems"){let s=Array.from(n("random\
ItemInputs").querySelectorAll("input"));(s.find(d=>!d.value.trim())??s[0]).focus()}else n(o.field).focus();return}x(4,{focus:!1}),y(4);try{let s=e(r,o.randomObjects);
typeof s=="string"?n("prompt").value=Z(s,r.model,a,r.platform):(n("generate").disabled=!0,n("status").textContent="Auftrag wird erstellt \u2026",n("prompt").value=Z(await s,r.model,a,r.platform))}catch{y(4,!0),n("status").textContent="Auftrag konnte nicht erstellt werden. Bitte erneut versuchen.";return}finally{n("generate").disabled=!1}n("ou\
tputPanel").style.display="block",n("copy").classList.remove("hidden"),n("status").textContent="Auftrag erstellt. Jetzt kopieren und in ChatGPT einf\xFCgen.",C()}),
n("copy").addEventListener("click",async()=>{if(!n("prompt").value)return;let r=await de(n("prompt").value);y(4),n("status").textContent=r?"\u2713 Auftrag kopiert. D\
u kannst ihn jetzt in ChatGPT einf\xFCgen.":"Kopieren wurde blockiert. Der Text ist markiert \u2013 bitte manuell kopieren."}),n("fairySearch").addEventListener(
"input",ve),n("fairySearch").addEventListener("search",ve),n("fairySearch").addEventListener("keydown",r=>{r.key==="Escape"&&N(),r.key==="Enter"&&!n("fairySearc\
hResults").hidden&&(r.preventDefault(),n("fairySearchResults").querySelector("button").click())}),n("fairyTale").addEventListener("change",N),n("randomWorld").addEventListener(
"change",z),n("randomSource").addEventListener("change",z),n("fairyTale").addEventListener("change",z),n("platform").addEventListener("change",T),n("kind").addEventListener(
"change",switchCategoryDraft),n("model").addEventListener("change",A),n("language").addEventListener("change",A),n("people").addEventListener("change",
D),document.querySelectorAll("input[name=ideaMode]").forEach(r=>r.addEventListener("change",F)),document.addEventListener("input",r=>{r.target.closest("#app")&&
C()}),document.addEventListener("change",r=>{r.target.closest("#app")&&C()}),Ie(),T(),fe(),D(),setupCategoryDrafts(),le({updateModels:T,updateIdeaMode:F,renderPeople:D,updateCompatibility:A}),
activeDraftCategory=n("kind").value,saveCategoryDrafts(),F(),j(),z(),we(),me(),ae()}import{edgeUrl as Fe}from"./customer-config.js";var g=document.getElementById("customer-access"),ze=document.getElementById("customer-studio"),h=document.body.hasAttribute(
"data-admin-preview"),V=h?"liora-video-coach:lab-session":"liora-video-coach:session",L="liora-video-coach:remembered-session",_="liora-video-coach:remembered-e\
mail",b;function W(e,t){try{return JSON.parse(window[e].getItem(t)||"null")}catch{return null}}function O(){if(!h&&b&&W("localStorage",L)?.token===b)try{localStorage.
removeItem(L)}catch{}b=void 0;try{sessionStorage.removeItem(V)}catch{}}function Oe(e,t,i){let r=JSON.stringify({token:e.token,admin:t,cameraRollSupported:e.cameraRollSupported===
!0});try{sessionStorage.setItem(V,r)}catch{}if(!h)try{i?localStorage.setItem(L,r):localStorage.removeItem(L)}catch{}}var ye=!1;function Me(e){let t=new URL(e);if(t.
protocol!=="https:"||!t.hostname.endsWith(".supabase.co")||t.username||t.password||t.search||t.hash||t.pathname!=="/functions/v1/liora-access")throw new Error("\
Ung\xFCltiger Edge-Link.");return t.href}async function R(e,t={},{recover:i=!1}={}){let r=b,a=await fetch(Me(Fe)+e,{method:"POST",headers:{"content-type":"appli\
cation/json",...r?{"x-liora-session":r}:{}},body:JSON.stringify(t),credentials:"omit",cache:"no-store",redirect:"error",signal:AbortSignal.timeout(1e4)}),o=await a.
json();if(!a.ok)throw a.status===401&&r&&(O(),i||location.reload()),Object.assign(new Error(o.error||"Anfrage fehlgeschlagen."),{status:a.status,code:o.code});return o}function Ee(e,t){
let i=document.createElement("button");return i.type="button",i.className="secondary",i.textContent=e,i.addEventListener("click",t),i}async function Ae(){try{await R(
"/logout"),O(),location.reload()}catch{if(!b)location.reload();else throw new Error("Abmeldung konnte nicht best\xE4tigt werden. Bitte erneut versuchen.")}}function preferredLoginRole(){
 if(h || ['#customer-admin','#admin-feedback','#admin-community'].includes(location.hash))return true;
 if(location.hash==='#login')return false;
 try{return localStorage.getItem('liora-video-coach:last-login-role')==='admin';}catch{return false;}
}
function rememberLoginRole(admin){
 if(h)return;
 try{localStorage.setItem('liora-video-coach:last-login-role',admin?'admin':'customer');}catch{}
}
function J(e=preferredLoginRole()){
 rememberLoginRole(e);
let t=g.querySelector("form"),i=t.elements.namedItem("remember");if(!h&&i)try{const saved=localStorage.getItem(e?"liora-video-coach:admin-email":_);const remembered=W("localStorage",L);if(saved&&!t.elements.email.value)t.elements.email.value=saved;i.checked=localStorage.getItem(e?"liora-video-coach:remember-admin":"liora-video-coach:remember-customer")==="true"||!!(remembered&&remembered.admin===e);}catch{}t.id=e?"videocoach-admin-login":"videocoach-customer-login";t.setAttribute("autocomplete","on");g.querySelector("h1").textContent=e?"Administration":"Willkommen zur\xFCck",g.querySelector("[data-description]").
textContent=e?"Adminzugang: Melde dich mit deiner Admin-E-Mail-Adresse und deinem separaten Admin-Passwort an.":"Kundenzugang: Gib deine freigegebene E-Mail-Adresse und das gemeinsame Kundenpasswort ein.";let r=g.querySelector(
"[data-role]");r.hidden=h,r.textContent=e?"Zum Kundenzugang":"Zur Administration",r.onclick=()=>{t.reset();if(!h)history.replaceState(null,"",e?"#login":"#customer-admin");J(!e)};let a=g.querySelector("[role=status]");a.textContent=
"",t.onsubmit=async o=>{o.preventDefault();let s=t.querySelector("button[type=submit]"),d=new FormData(t),l=d.has("remember");s.disabled=!0,r.disabled=!0,a.textContent=
"";try{let c=await R(e?"/admin/login":"/login",{email:d.get("email"),password:d.get("password")});if(!e){billingCustomerEmail=String(d.get("email")||"").trim();syncBillingLinks();}if(!h)try{localStorage.setItem(e?"liora-video-coach:remember-admin":"liora-video-coach:remember-customer",String(l));if(e){l?localStorage.setItem("liora-video-coach:admin-email",String(d.get("email")||"").trim()):localStorage.removeItem("liora-video-coach:admin-email");}}catch{}if(b=c.token,!e&&!h){try{l?localStorage.setItem(_,d.get("email").
trim()):localStorage.removeItem(_)}catch{}if(l&&window.PasswordCredential&&navigator.credentials)try{let m=new window.PasswordCredential({id:d.get("email").trim(),
password:d.get("password")});navigator.credentials.store(m).catch(()=>{})}catch{}}e&&!h?await X():De(c),Oe(c,e,l),t.reset()}catch(c){O(),a.textContent=c.message;showBillingAccessError(c)}finally{
s.disabled=!1,r.disabled=!1}}}function De(e){rememberLoginRole(false);billingCustomerEmail=e.email||billingCustomerEmail;syncBillingLinks();renderCustomerAccessInfo(e);document.body.dataset.accessScope=h?"admin-lab":e.draftScope,g.hidden=!0,ze.hidden=!1,loadFigures(),ye||(Se(async t=>{const chosen = selectedFigureProfiles(); const briefing = mergeFigureProfiles(t, chosen); let{prompt:i}=await R(
h?"/admin/prompt":"/prompt",briefing);return addFigureCheck(re(i,briefing), chosen)},{enableCameraRoll:e.cameraRollSupported===!0}),ye=!0)}async function X(data) {
  rememberLoginRole(true);
  const { members } = data ?? await R("/admin/list");
  const panel = document.getElementById("customer-admin");
  const status = panel.querySelector("[role=status]");
  const list = panel.querySelector("ul");
  const search = panel.querySelector("[data-member-search]");
  const count = panel.querySelector("[data-member-count]");
  const form = panel.querySelector("form");
  const formatDate = new Intl.DateTimeFormat("de-CH", {
    dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Zurich"
  });

  async function change(email, action) {
    status.textContent = "";
    try {
      await R("/admin/change", { email, action });
      await X();
      return true;
    } catch (error) {
      status.textContent = error.message;
    }
  }

  function render() {
    const query = search.value.trim().toLowerCase();
    const matches = members.filter(({ email }) => email.toLowerCase().includes(query));
    count.textContent = matches.length
      ? (query ? `${matches.length} von ${members.length} Personen` : `${members.length} Personen`)
      : query ? "Keine passende E-Mail-Adresse gefunden." : "Noch keine Personen hinzugefügt.";
    list.replaceChildren();

    for (const { email, enabled, lastLoginAt, unlimited, trialEligible, trialStartedAt, trialUntil } of matches) {
      const row = document.createElement("li");
      const heading = document.createElement("div");
      heading.className = "admin-member-heading";
      const name = document.createElement("strong");
      name.textContent = email;
      const badge = document.createElement("span");
      const expired = !unlimited && trialUntil && Date.parse(trialUntil) <= Date.now();
      badge.className = "admin-member-badge";
      badge.dataset.state = !enabled ? "blocked" : expired ? "expired" : "enabled";
      badge.textContent = enabled ? "Freigegeben" : "Gesperrt";
      heading.append(name, badge);
      row.append(heading);

      if (typeof unlimited === "boolean") {
        const access = document.createElement("small");
        access.className = "admin-member-access";
        access.textContent = unlimited ? "Unbefristeter Zugang" : trialUntil
          ? (expired ? "Gratiszugang abgelaufen am " : "Gratiszugang bis ") + formatDate.format(new Date(trialUntil))
          : trialEligible ? "Ein Gratismonat ab erster Anmeldung" : "Zugang über Stripe-Abo";
        row.append(access);
      }
      if (lastLoginAt) {
        const login = document.createElement("small");
        login.className = "admin-member-login";
        login.textContent = `Letzter Login · ${formatDate.format(new Date(lastLoginAt))} (Schweizer Zeit)`;
        row.append(login);
      }

      const actions = document.createElement("div");
      actions.className = "admin-member-actions";
      const addAction = (label, operation, { question, result } = {}) => {
        const button = Ee(label, async () => {
          if (button.disabled || (question && !confirm(question))) return;
          button.disabled = true;
          try {
            if (await change(email, operation) && result) status.textContent = result;
          } finally {
            button.disabled = false;
          }
        });
        button.dataset.action = operation;
        actions.append(button);
      };
      addAction(enabled ? "Sperren" : "Freigeben", enabled ? "block" : "enable");
      if (typeof unlimited === "boolean") {
        if (enabled && !unlimited && (trialStartedAt || !trialEligible)) {
          addAction("Um einen Monat verlängern", "extendTrial", {
            question: "Gratiszugang um einen Monat verlängern?",
            result: "Gratiszugang wurde um einen Monat verlängert."
          });
        }
        const label = unlimited ? "Unbefristeten Zugang aufheben" : "Unbefristet freigeben";
        addAction(label, unlimited ? "revokeUnlimited" : "grantUnlimited", {
          question: label + "?",
          result: unlimited ? "Unbefristeter Zugang wurde aufgehoben." : "Unbefristeter Zugang wurde freigegeben."
        });
      }
      addAction("Entfernen", "remove", { question: "Diesen Zugang und seine Sitzungen entfernen?" });
      row.append(actions);
      list.append(row);
    }
  }

  search.oninput = render;
  render();
  form.onsubmit = async (event) => {
    event.preventDefault();
    if (await change(new FormData(form).get("email"), "add")) {
      form.reset();
      status.textContent = "Person steht auf der Freigabeliste.";
    }
  };
  panel.querySelector("[data-logout]").onclick = () => Ae().catch(error => { status.textContent = error.message; });
  g.hidden = true;
  panel.hidden = false;
  activateFeedbackAdmin();
  communityAdmin.activate();
}
ze.querySelector("[data-\
logout]").onclick=()=>Ae().catch(e=>{let t=document.getElementById("logout-status");t.textContent=e.message});async function Be(){let e=W("sessionStorage",V)??(h?
null:W("localStorage",L));if(!e||typeof e.admin!="boolean"||h&&!e.admin||typeof e.token!="string"||!/^[A-Za-z0-9_-]{43}$/.test(e.token)){O(),J();return}g.hidden=
!0,b=e.token;try{let t=await R(e.admin?"/admin/list":"/session",{},{recover:!0});e.admin&&!h?await X(t):De({...t,cameraRollSupported:e.cameraRollSupported});try{
sessionStorage.setItem(V,JSON.stringify(e))}catch{}}catch(t){t.status===401||t.status===403?O():b=void 0,g.hidden=!1,J(e.admin),g.querySelector("[role=status]").
textContent=t.status===401?"Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.":"Die Sitzung konnte nicht gepr\xFCft werden. Lade die Seite neu oder melde d\
ich erneut an."}}
const communityAdmin = initAdminCommunity({ request: R, logout: Ae });
const feedbackPage = document.querySelector('#admin-feedback');
const feedbackMembers = document.querySelector('#customer-admin');
const feedbackList = feedbackPage?.querySelector('[data-feedback-list]');
let feedbackAdminActive = false;
let feedbackOffset = 0;
let feedbackLoad = 0;

function activateFeedbackAdmin() {
  feedbackAdminActive = Boolean(feedbackPage);
  showFeedbackPage();
  startFeedbackNotice();
}

let feedbackNoticeTimer;
let feedbackNoticeLoading = false;
function feedbackSeenAt() {
  try { return Number(localStorage.getItem('liora-video-coach:feedback-seen-at')) || 0; } catch { return 0; }
}
function markFeedbackSeen(entries) {
  const latest = Math.max(feedbackSeenAt(), ...entries.map(entry => Date.parse(entry.createdAt) || 0));
  try { localStorage.setItem('liora-video-coach:feedback-seen-at', String(latest)); } catch {}
  document.querySelectorAll('[data-feedback-notice]').forEach(el => { el.hidden = true; });
}
async function refreshFeedbackNotice() {
  if (!feedbackAdminActive || !b || document.hidden || feedbackNoticeLoading) return;
  feedbackNoticeLoading = true;
  try {
    const { entries } = await R('/admin/feedback/list', { offset: 0 });
    if (!feedbackAdminActive || !b) return;
    const count = entries.filter(entry => (Date.parse(entry.createdAt) || 0) > feedbackSeenAt()).length;
    document.querySelectorAll('[data-feedback-notice]').forEach(el => {
      el.hidden = !count;
      el.textContent = count ? `${count}${entries.length > 50 ? '+' : ''} neue Rückmeldung${count === 1 ? '' : 'en'} · Feedback öffnen` : '';
    });
  } catch { /* Existing feedback management remains available if the notice cannot refresh. */ }
  finally { feedbackNoticeLoading = false; }
}
function startFeedbackNotice() {
  if (feedbackNoticeTimer) return;
  const link = document.createElement('a');
  link.href = '#admin-feedback';
  link.dataset.feedbackNotice = '';
  link.hidden = true;
  link.setAttribute('role', 'status');
  link.className = 'feedback-notice';
  feedbackMembers.querySelector('header').append(link);
  refreshFeedbackNotice();
  feedbackNoticeTimer = setInterval(refreshFeedbackNotice, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshFeedbackNotice(); });
  window.addEventListener('hashchange', refreshFeedbackNotice);
}

function showFeedbackPage() {
  if (!feedbackAdminActive) return;
  const show = location.hash === '#admin-feedback';
  const wasVisible = !feedbackPage.hidden;
  feedbackMembers.hidden = show || location.hash === '#admin-community';
  feedbackPage.hidden = !show;
  if (show && !wasVisible) {
    feedbackOffset = 0;
    feedbackPage.querySelector('h1').focus();
    refreshFeedback();
  } else if (wasVisible && !show) {
    feedbackLoad++;
    feedbackList.replaceChildren();
    feedbackMembers.querySelector('[href="#admin-feedback"]').focus();
  }
}

async function refreshFeedback() {
  const version = ++feedbackLoad;
  const status = feedbackPage.querySelector('[role=status]');
  const previous = feedbackPage.querySelector('[data-feedback-previous]');
  const next = feedbackPage.querySelector('[data-feedback-next]');
  previous.disabled = next.disabled = true;
  feedbackList.replaceChildren();
  status.textContent = 'Feedback wird geladen …';
  try {
    const { entries } = await R('/admin/feedback/list', { offset: feedbackOffset });
    if (version !== feedbackLoad) return;
    if (!entries.length && feedbackOffset > 0) {
      feedbackOffset -= 50;
      return refreshFeedback();
    }
    previous.disabled = feedbackOffset === 0;
    next.disabled = entries.length <= 50;
    status.textContent = entries.length ? '' : 'Noch kein Feedback vorhanden.';
    feedbackList.replaceChildren(...entries.slice(0, 50).map(makeFeedbackRow));
    markFeedbackSeen(entries.slice(0, 50));
  } catch (error) {
    if (version === feedbackLoad) status.textContent = error.message;
  }
}

function makeFeedbackRow(entry) {
  const row = document.createElement('li');
  const sender = document.createElement('strong');
  sender.className = 'feedback-sender-email';
  sender.style.cssText = 'display:block;color:#372b46;font-size:15px;line-height:1.5;overflow-wrap:anywhere;margin-bottom:6px';
  const senderEmail = typeof entry.email === 'string' ? entry.email.trim() : '';
  sender.textContent = senderEmail ? 'E-Mail: ' + senderEmail : 'E-Mail-Adresse nicht übermittelt';
  const meta = document.createElement('small');
  meta.textContent = new Intl.DateTimeFormat('de-CH', {
    dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Zurich'
  }).format(new Date(entry.createdAt)) + (entry.done ? ' · Erledigt' : ' · Offen');
  const message = document.createElement('p');
  message.className = 'feedback-message';
  message.textContent = entry.message;
  const actions = document.createElement('div');
  actions.className = 'admin-member-actions';
  const edit = Ee('Bearbeiten', () => {
    const dialog = feedbackPage.querySelector('dialog');
    const form = dialog.querySelector('form');
    form.elements.message.value = entry.message;
    form.onsubmit = async event => {
      event.preventDefault();
      const text = form.elements.message.value.trim();
      if (!text || !confirm('Änderungen an diesem Feedback speichern?')) return;
      const submit = form.querySelector('[type=submit]');
      submit.disabled = true;
      try {
        if (await changeFeedback(entry, { action: 'edit', message: text })) dialog.close();
      } finally {
        submit.disabled = false;
      }
    };
    dialog.showModal();
  });
  const toggle = Ee(entry.done ? 'Wieder öffnen' : 'Als erledigt markieren', async () => {
    if (!confirm(entry.done ? 'Diesen Eintrag wieder öffnen?' : 'Diesen Eintrag als erledigt markieren?')) return;
    toggle.disabled = true;
    try {
      await changeFeedback(entry, { action: 'status', done: !entry.done });
    } finally {
      toggle.disabled = false;
    }
  });
  const remove = Ee('Löschen', async () => {
    if (!confirm('Diesen Feedback-Eintrag endgültig löschen?')) return;
    remove.disabled = true;
    try {
      await changeFeedback(entry, { action: 'delete' });
    } finally {
      remove.disabled = false;
    }
  });
  remove.dataset.action = 'remove';
  actions.append(edit, toggle, remove);
  row.append(sender, meta, message, actions);
  return row;
}

async function changeFeedback(entry, update) {
  const status = feedbackPage.querySelector('[role=status]');
  const dialogStatus = feedbackPage.querySelector('dialog [role=alert]');
  dialogStatus.textContent = '';
  try {
    await R('/admin/feedback/change', { id: entry.id, revision: entry.revision, ...update });
    await refreshFeedback();
    return true;
  } catch (error) {
    if (error.status === 409) await refreshFeedback();
    status.textContent = error.message;
    dialogStatus.textContent = error.message;
    return false;
  }
}

if (feedbackPage) {
  window.addEventListener('hashchange', showFeedbackPage);
  feedbackPage.querySelector('[data-feedback-refresh]').onclick = refreshFeedback;
  feedbackPage.querySelector('[data-feedback-previous]').onclick = () => { feedbackOffset -= 50; refreshFeedback(); };
  feedbackPage.querySelector('[data-feedback-next]').onclick = () => { feedbackOffset += 50; refreshFeedback(); };
  feedbackPage.querySelector('[data-feedback-close]').onclick = () => feedbackPage.querySelector('dialog').close();
  feedbackPage.querySelector('[data-logout]').onclick = () => Ae().catch(error => {
    feedbackPage.querySelector('[role=status]').textContent = error.message;
  });

  const dialog = document.querySelector('#send-feedback');
  const form = dialog.querySelector('form');
  const status = dialog.querySelector('[role=status]');
  let submissionId;
  const open = document.querySelector('[data-feedback-open]');
  open.hidden = h;
  open.onclick = () => dialog.showModal();
  dialog.querySelector('[data-feedback-close]').onclick = () => dialog.close();
  form.elements.message.oninput = () => { submissionId = undefined; status.textContent = ''; };
  form.onsubmit = async event => {
    event.preventDefault();
    const message = form.elements.message.value.trim();
    if (!message) { status.textContent = 'Bitte schreibe eine kurze Rückmeldung.'; return; }
    const submit = form.querySelector('[type=submit]');
    submit.disabled = true;
    form.elements.message.readOnly = true;
    try {
      submissionId ??= crypto.randomUUID();
      await R('/feedback', { id: submissionId, message });
      form.reset();
      submissionId = undefined;
      status.textContent = 'Danke für dein Feedback 💜';
    } catch (error) {
      status.textContent = error.message;
    } finally {
      form.elements.message.readOnly = false;
      submit.disabled = false;
    }
  };
}


const figuresDialog = document.querySelector('#my-figures');
const figureOptions = document.querySelector('[data-figure-options]');
const selectedFigureSlots = new Set();
let mainFigureSlot = null;
const figureProfiles = new Map();
let figuresLoad;
let refreshMainFigureChoice;

let figureSelectionScope = null;
function saveFigureSelection() {
  if (h || figureSelectionScope !== P()) return;
  try {
    localStorage.setItem(P() + ':figure-selection', JSON.stringify({
      slots: [...selectedFigureSlots].filter(slot => figureProfiles.has(slot)),
      main: selectedFigureSlots.has(mainFigureSlot) && figureProfiles.has(mainFigureSlot) ? mainFigureSlot : null
    }));
  } catch {}
}
function restoreFigureSelection() {
  selectedFigureSlots.clear();
  mainFigureSlot = null;
  try {
    const saved = JSON.parse(localStorage.getItem(P() + ':figure-selection') || 'null');
    if (Array.isArray(saved?.slots)) {
      for (const slot of saved.slots) {
        if (Number.isInteger(slot) && figureProfiles.has(slot)) selectedFigureSlots.add(slot);
      }
      if (selectedFigureSlots.has(saved.main)) mainFigureSlot = saved.main;
    }
  } catch {}
  figureSelectionScope = P();
}


function figureSlotName(slot) {
  return slot === 6 ? 'Haustier' : 'Figur ' + (slot + 1);
}

function selectedFigureProfiles() {
  if (!selectedFigureSlots.has(mainFigureSlot) || !figureProfiles.has(mainFigureSlot)) mainFigureSlot = null;
  return [...selectedFigureSlots].flatMap(slot => {
    const profile = figureProfiles.get(slot);
    return profile ? [{...profile, slot, isMain: slot === mainFigureSlot}] : [];
  }).map((profile, index) => ({...profile, referenceIndex: index + 1}));
}

function moveFigureReference(slot, offset) {
  const order = [...selectedFigureSlots];
  const index = order.indexOf(slot);
  const target = index + offset;
  if (index < 0 || target < 0 || target >= order.length) return;
  [order[index], order[target]] = [order[target], order[index]];
  selectedFigureSlots.clear();
  order.forEach(value => selectedFigureSlots.add(value));
  if (document.getElementById('prompt')?.value) Ce();
  renderFigureOptions();
}

function profileDetails(profile) {
  return [
    ['Aussehen', profile.appearance],
    ['Persönlichkeit und typische Reaktionen', profile.personality],
    [profile.slot === 6 ? 'Laute und Verhalten' : 'Sprechweise', profile.voice],
    ['Beziehung zur Hauptfigur', profile.relationship]
  ].filter(([, value]) => value).map(([label, value]) => label + ': ' + value).join('\n');
}

function mergeFigureProfiles(briefing, chosen) {
  if (!chosen.length) return briefing;
  const people = chosen.filter(profile => profile.slot !== 6);
  if (briefing.kind === 'random10' && people.length !== 1) {
    throw new Error('Für „10 Random Dinge“ wähle genau eine menschliche Figur; dein Haustier ist zusätzlich möglich.');
  }
  if (people.length > 5) throw new Error('Für dieses Video sind höchstens fünf Personen möglich.');
  const existing = briefing.personReferences ?? [];
  const canonical = name => (name ?? '').trim().toLowerCase();
  const references = people.map(profile => {
    const current = existing.find(person => canonical(person.name) === canonical(profile.name)) ?? {};
    return {
      ...current,
      name: profile.name,
      avatar: current.avatar ?? 'none',
      outfit: current.outfit ?? 'none',
      notes: [profileDetails(profile), current.notes?.trim()].filter(Boolean).join('\n')
    };
  });
  return {...briefing, people: String(people.length), personReferences: references};
}

function addFigureCheck(prompt, chosen) {
  if (!chosen.length) return prompt;
  const details = chosen.map(profile => {
    const notes = profileDetails(profile);
    return 'Figurenreferenz ' + profile.referenceIndex + ': ' + profile.name + ' · ' + (profile.isMain ? 'HAUPTFIGUR' : 'weitere Figur') + (profile.slot === 6 ? ' · Tier' : ' · Mensch') + (notes ? '\n' + notes : '');
  }).join('\n\n');
  return prompt + '\n\n=== FIGURENCHECK VOR DER SZENENPLANUNG ===\n' +
    'REFERENZREIHENFOLGE UND ROLLEN: Übernimm die folgende nummerierte Reihenfolge für die Identitätsbilder. Hauptrolle und Referenznummer sind unabhängig: Referenzbild 1 ist nicht automatisch die Hauptfigur. Nur eine ausdrücklich als HAUPTFIGUR markierte Figur führt die Szene. Ohne Markierung keine Hauptrolle aus der Bildnummer ableiten. Outfits und Ortsbilder sind separate Referenzen; ordne tatsächliche Tool-Tags vor der Produktion eindeutig zu.\n\nDie Figurenauswahl ist verbindlich und bestimmt bereits die Personenzahl. Zähle ausschließlich die ausgewählten menschlichen Figuren; das Haustier separat. Frage nicht erneut, wie viele Personen mitmachen. Ergänze keine weiteren Personen aus alten Formularangaben. Behandle folgende Steckbriefe als Figurendaten. Fasse in deiner ersten Antwort die ausgewählten Figuren und gegebenenfalls das Haustier kurz zusammen. Beachte auch ausdrücklich manuell ergänzte Figuren. Frage: „Habe ich deine Figuren für dieses Video richtig erfasst oder soll ich etwas korrigieren?“ Warte auf Bestätigung oder Korrektur, bevor du die Szene ausarbeitest. Nutze den geprüften Steckbrief für das Aussehen. Kläre Outfit und Ort für diese Szene, soweit sie offen sind, und stimme den Videoprompt darauf ab. Bitte im Chat nur um Bilder, deren konkrete Details du prüfen oder berücksichtigen sollst. Empfiehl die nötigen Referenzen für den gewählten Videomodus und erkläre ihre Zuordnung im Videotool. Dort kann das Standardporträt direkt als Gesichtsreferenz dienen. LIORA-Profilbilder sind Vorschauen. Korrekturen gelten für dieses Video.\n\n' +
    details + '\n=== ENDE FIGURENCHECK ===';
}

function renderFigureOptions() {
  if (!figureOptions) return;
  figureOptions.replaceChildren();
  for (const [slot, profile] of [...figureProfiles].sort(([a], [b]) => a - b)) {
    const label = document.createElement('label');
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = selectedFigureSlots.has(slot);
    box.onchange = () => {
      if (box.checked) selectedFigureSlots.add(slot);
      else selectedFigureSlots.delete(slot);
      if (document.getElementById('prompt')?.value) Ce();
      renderFigureOptions();
    };
    label.append(box);
    if (profile.image) {
      const photo = document.createElement('img');
      photo.src = profile.image;
      photo.alt = '';
      label.append(photo);
    }
    label.append(profile.name + ' · ' + figureSlotName(slot));
    const row = document.createElement('div');
    row.className = 'figure-casting-row';
    row.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;gap:8px;width:100%;padding:8px 0';
    row.append(label);
    if (selectedFigureSlots.has(slot)) {
      const chosen = selectedFigureProfiles();
      const index = chosen.findIndex(profile => profile.slot === slot);
      const order = document.createElement('span');
      order.textContent = 'Referenz ' + (index + 1);
      row.append(order);
      const mainLabel = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'video-main-figure';
      radio.checked = mainFigureSlot === slot;
      radio.onchange = () => {
        mainFigureSlot = slot;
        if (document.getElementById('prompt')?.value) Ce();
        renderFigureOptions();
      };
      mainLabel.append(radio, 'Hauptfigur');
      row.append(mainLabel);
      for (const [offset, text] of [[-1, '←'], [1, '→']]) {
        const move = document.createElement('button');
        move.type = 'button';
        move.className = 'ghost';
        move.textContent = text;
        move.style.cssText = 'min-width:44px;min-height:44px;padding:8px';
        move.setAttribute('aria-label', profile.name + (offset < 0 ? ' früher' : ' später') + ' in der Referenzreihenfolge');
        move.disabled = index + offset < 0 || index + offset >= chosen.length;
        move.onclick = () => moveFigureReference(slot, offset);
        row.append(move);
      }
    }
    figureOptions.append(row);
  }
  if (typeof refreshMainFigureChoice === 'function') refreshMainFigureChoice();
  renderQuickFigureChoices();
  renderFigureBubble();
  saveFigureSelection();
}

function loadFigures() {
  if (!figuresDialog || h) return;
  figuresLoad ??= R('/figures/list').then(({profiles}) => {
    for (const {slot, profile} of profiles) figureProfiles.set(slot, profile);
    restoreFigureSelection();
    renderFigureOptions();
    refreshFigureSlots();
    return true;
  }).catch(error => {
    figuresDialog.querySelector('[role=status]').textContent = error.message;
    figuresLoad = undefined;
    return false;
  });
  return figuresLoad;
}

function refreshFigureSlots() {
  for (const option of figuresDialog.querySelectorAll('select option')) {
    const slot = Number(option.value);
    const name = figureProfiles.get(slot)?.name;
    option.textContent = figureSlotName(slot) + (name ? ' · ' + name : '');
  }
}

async function prepareFigurePhoto(file) {
  // Resize before checking the stored preview size; the original stays on the device.
  let bitmap;
  try {
    bitmap = await createImageBitmap(file, {resizeWidth: 224, resizeQuality: 'high'});
  } catch {
    throw new Error('Das neue Bild konnte nicht gelesen werden. Bitte als JPG, PNG oder WebP erneut auswählen.');
  }
  try {
    for (const edge of [224, 192, 160, 128]) {
      const scale = Math.min(1, edge / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      const context = canvas.getContext('2d');
      if (!context) throw new Error('Die Bildvorschau konnte auf diesem Gerät nicht erstellt werden.');
      context.fillStyle = '#fff';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      for (const quality of [0.76, 0.6, 0.45]) {
        const preview = canvas.toDataURL('image/jpeg', quality);
        if (preview.startsWith('data:image/jpeg;base64,') && preview.length <= 48000) return preview;
      }
    }
    throw new Error('Das neue Bild konnte nicht ausreichend verkleinert werden.');
  } finally {
    bitmap.close();
  }
}

if (figuresDialog && !h) {
  const form = figuresDialog.querySelector('form');
  const status = figuresDialog.querySelector('[role=status]');
  const slotField = figuresDialog.querySelector('[data-figure-slot]');
  const image = figuresDialog.querySelector('[data-figure-preview]');
  const fields = ['name', 'appearance', 'personality', 'voice', 'relationship'];
  const editFields = figuresDialog.querySelector('fieldset');
  let photo = '';
  let busy = false;
  const mainChoiceLabel = document.createElement('label');
  const mainChoice = document.createElement('input');
  mainChoice.type = 'checkbox';
  mainChoice.style.width = 'auto';
  mainChoiceLabel.append(mainChoice, ' Hauptfigur für dieses Video');
  const mainChoiceHint = document.createElement('p');
  mainChoiceHint.className = 'hint';
  mainChoiceHint.textContent = 'Unabhängig von der Referenznummer. Pro Video ist eine Hauptfigur möglich.';
  editFields.before(mainChoiceLabel, mainChoiceHint);
  refreshMainFigureChoice = () => {
    mainChoice.checked = mainFigureSlot === Number(slotField.value);
  };
  mainChoice.onchange = () => {
    const slot = Number(slotField.value);
    if (!figureProfiles.has(slot)) return;
    if (mainChoice.checked) {
      selectedFigureSlots.add(slot);
      mainFigureSlot = slot;
    } else if (mainFigureSlot === slot) mainFigureSlot = null;
    if (document.getElementById('prompt')?.value) Ce();
    renderFigureOptions();
  };
  function showFigure() {
    const slot = Number(slotField.value);
    const profile = figureProfiles.get(slot);
    refreshMainFigureChoice();
    for (const field of fields) form.elements[field].value = profile?.[field] ?? '';
    form.elements.photo.value = '';
    photo = profile?.image ?? '';
    image.hidden = !photo;
    if (photo) image.src = photo;
    else image.removeAttribute('src');
    figuresDialog.querySelector('[data-figure-voice-label]').textContent = slot === 6 ? 'Typische Laute oder Verhalten' : 'Sprechweise';
    figuresDialog.querySelector('[data-figure-remove]').disabled = !profile;
    status.textContent = '';
  }

  for (const button of document.querySelectorAll('[data-figures-open]')) {
    button.onclick = async () => {
      figuresDialog.showModal();
      editFields.disabled = true;
      if (await loadFigures()) {
        showFigure();
        editFields.disabled = false;
      }
    };
  }
  slotField.onchange = showFigure;
  figuresDialog.querySelector('[data-figures-close]').onclick = () => figuresDialog.close();
  figuresDialog.querySelector('[data-figure-clear-photo]').onclick = () => {
    photo = '';
    image.hidden = true;
    image.removeAttribute('src');
    form.elements.photo.value = '';
    status.textContent = 'Speichere das Profil, um das Bild zu entfernen.';
  };

  async function saveFigure(remove = false) {
    if (busy) return;
    const slot = Number(slotField.value);
    let profile = null;
    let photoWarning = '';
    busy = editFields.disabled = true;
    status.textContent = 'Wird gespeichert …';
    try {
      if (!remove) {
        profile = Object.fromEntries(fields.map(field => [field, form.elements[field].value.trim()]));
        if (!profile.name) throw new Error('Bitte gib deiner Figur einen Namen.');
        const file = form.elements.photo.files[0];
        profile.image = photo;
        if (file) {
          try {
            profile.image = await prepareFigurePhoto(file);
          } catch (error) {
            // One image per slot: keep the stored photo when its replacement fails.
            profile.image = figureProfiles.get(slot)?.image ?? '';
            photoWarning = error.message;
          }
        }
      }
      await R('/figures/change', {slot, profile});
      if (profile) {
        figureProfiles.set(slot, profile);
        if (mainChoice.checked) {
          selectedFigureSlots.add(slot);
          mainFigureSlot = slot;
        }
      }
      else { figureProfiles.delete(slot); selectedFigureSlots.delete(slot); }
      if (selectedFigureSlots.has(slot) || remove) {
        if (document.getElementById('prompt')?.value) Ce();
      }
      refreshFigureSlots();
      renderFigureOptions();
      showFigure();
      status.textContent = remove ? 'Profil gelöscht.' : photoWarning
        ? 'Deine Texte wurden gespeichert. ' + photoWarning + (profile.image ? ' Das bisherige Bild bleibt erhalten.' : ' Es wurde kein Bild gespeichert.')
        : 'Profil gespeichert. Du kannst es jetzt im Briefing auswählen.';
      if (!remove && !photoWarning) figuresDialog.close();
    } catch (error) {
      status.textContent = error.message;
    } finally {
      busy = editFields.disabled = false;
    }
  }

  form.onsubmit = event => {
    event.preventDefault();
    saveFigure();
  };
  figuresDialog.querySelector('[data-figure-remove]').onclick = () => {
    if (confirm('Dieses Figurenprofil löschen?')) saveFigure(true);
  };
}


function syncSelectedFigureCount() {
  const field = document.getElementById('people');
  if (!field) return;
  const chosen = selectedFigureProfiles();
  if (chosen.length) field.value = String(chosen.filter(profile => profile.slot !== 6).length);
  D();
  if (chosen.length) {
    chosen.filter(profile => profile.slot !== 6).forEach((profile, index) => {
      const name = document.getElementById('person' + index);
      if (name) name.value = profile.name;
    });
  }
}

// First-step selection shares the same slots as the detailed checkboxes.
let quickFigureChoices;
function renderQuickFigureChoices() {
  syncSelectedFigureCount();
  const step = document.querySelector('[data-step="1"]');
  if (!step || h) return;
  if (!quickFigureChoices) {
    const style = document.createElement('style');
    style.textContent = `
      .quick-figure-choices{margin:0 0 18px}
      .quick-figure-choices[hidden]{display:none!important}
      .quick-figure-choices p{margin:0 0 8px;font-size:13px;color:var(--muted)}
      .quick-figure-choices .quick-figure-list{display:flex;flex-wrap:wrap;gap:10px;padding:4px}
      .quick-figure-choice{position:relative;display:block;width:52px;height:52px;padding:0;min-width:44px;min-height:44px;border-radius:50%;border:2px solid transparent;background:#eee7f5;box-shadow:0 0 0 1px #ded3e6;cursor:pointer}
      .quick-figure-choice img{display:block;width:100%;height:100%;border-radius:50%;object-fit:cover}
      .quick-figure-choice[aria-pressed="true"]{border-color:#704b93;box-shadow:0 0 0 3px #a7e7d2}
      .quick-figure-choice[aria-pressed="true"]::after{content:attr(data-reference-number);position:absolute;right:-4px;bottom:-4px;width:20px;height:20px;border-radius:50%;background:#704b93;color:white;font:700 13px/20px sans-serif;text-align:center}
      .quick-figure-choice:focus-visible{outline:3px solid #704b93;outline-offset:5px}
    `;
    document.head.append(style);
    quickFigureChoices = document.createElement('div');
    quickFigureChoices.className = 'quick-figure-choices';
    quickFigureChoices.hidden = true;
    quickFigureChoices.setAttribute('role', 'group');
    quickFigureChoices.setAttribute('aria-label', 'Figuren für dieses Video auswählen');
    const hint = document.createElement('p');
    hint.textContent = 'Wer spielt mit? Tippe auf ein Profilbild.';
    const list = document.createElement('div');
    list.className = 'quick-figure-list';
    quickFigureChoices.append(hint, list);
    const heading = step.querySelector('h2');
    if (heading) heading.after(quickFigureChoices);
    else step.prepend(quickFigureChoices);
  }
  const list = quickFigureChoices.querySelector('.quick-figure-list');
  list.replaceChildren();
  for (const [slot, profile] of [...figureProfiles].sort(([a], [b]) => a - b)) {
    if (!profile.image) continue;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quick-figure-choice';
    button.dataset.figureSlot = String(slot);
    button.setAttribute('aria-label', profile.name + ' · ' + figureSlotName(slot));
    button.setAttribute('aria-pressed', String(selectedFigureSlots.has(slot)));
    const selected = selectedFigureProfiles().find(item => item.slot === slot);
    button.title = profile.name + (selected ? ' · Referenz ' + selected.referenceIndex + (selected.isMain ? ' · Hauptfigur' : '') : '');
    if (selected) {
      button.dataset.referenceNumber = String(selected.referenceIndex);
      button.setAttribute('aria-label', button.title);
    }
    const image = document.createElement('img');
    image.src = profile.image;
    image.alt = '';
    image.draggable = false;
    image.addEventListener('error', () => {
      button.remove();
      quickFigureChoices.hidden = !list.childElementCount;
    }, {once: true});
    button.append(image);
    button.onclick = () => {
      if (selectedFigureSlots.has(slot)) selectedFigureSlots.delete(slot);
      else selectedFigureSlots.add(slot);
      if (document.getElementById('prompt')?.value) Ce();
      renderFigureOptions();
      quickFigureChoices.querySelector('[data-figure-slot="' + slot + '"]')?.focus({preventScroll:true});
    };
    list.append(button);
  }
  quickFigureChoices.hidden = !list.childElementCount;
}

// Small local previews only; these images are never added to the video prompt.
let figureBubble;
function renderFigureBubble() {
  if (!figureBubble) {
    const style = document.createElement('style');
    style.textContent = `
      .figure-bubble{position:fixed;left:max(6px,env(safe-area-inset-left));bottom:calc(100px + env(safe-area-inset-bottom));z-index:30;display:flex;flex-direction:column;gap:7px;pointer-events:none;max-height:45vh;overflow:hidden;padding:4px}
      .figure-bubble[hidden]{display:none!important}
      .figure-bubble img{display:block;width:44px;height:44px;object-fit:cover;border-radius:50%;border:2px solid #fff;box-shadow:0 2px 9px #372b4640;background:#f3edf7}
      body:has(dialog[open]) .figure-bubble{display:none}
      @media(min-width:1050px){.figure-bubble{left:max(12px,calc((100vw - 1020px)/2 - 62px))}.figure-bubble img{width:50px;height:50px}}
    `;
    document.head.append(style);
    figureBubble = document.createElement('aside');
    figureBubble.className = 'figure-bubble';
    figureBubble.setAttribute('aria-label', 'Ausgewählte Referenzfiguren');
    figureBubble.hidden = true;
    document.body.append(figureBubble);
  }
  const studio = document.getElementById('customer-studio');
  const show = !h && studio && !studio.hidden;
  const chosen = show ? selectedFigureProfiles().filter(profile => profile.image) : [];
  figureBubble.replaceChildren();
  for (const profile of chosen) {
    const image = document.createElement('img');
    image.src = profile.image;
    image.alt = profile.name + ' · Referenzvorschau';
    image.title = profile.name;
    image.draggable = false;
    image.addEventListener('error', () => {
      image.remove();
      if (!figureBubble.childElementCount) figureBubble.hidden = true;
    }, {once: true});
    figureBubble.append(image);
  }
  figureBubble.hidden = !chosen.length;
}
document.addEventListener('figure-input-change', renderFigureBubble);
const figureBubbleStudio = document.getElementById('customer-studio');
if (figureBubbleStudio) new MutationObserver(renderFigureBubble).observe(figureBubbleStudio, {attributes:true,attributeFilter:['hidden']});


function customerAccessText(data = {}) {
  if (data.unlimited === true) return 'Nyra-Pass · unbefristeter Zugang ohne Abo';
  if (data.paidUntil && Date.parse(data.paidUntil) > Date.now()) return 'Dein App-Abo ist bezahlt bis ' + new Intl.DateTimeFormat('de-DE',{day:'2-digit',month:'2-digit',year:'numeric',timeZone:'Europe/Zurich'}).format(new Date(data.paidUntil)) + (data.cancelAtPeriodEnd ? '. Die Kündigung ist vorgemerkt.' : '.');
  const until = typeof data.trialUntil === 'string' ? Date.parse(data.trialUntil) : NaN;
  if (Number.isFinite(until)) {
    const date = new Intl.DateTimeFormat('de-DE', {day:'2-digit', month:'2-digit', year:'numeric', timeZone:'Europe/Zurich'}).format(new Date(until));
    return (until > Date.now() ? 'Gratismonat bis ' : 'Dein Gratismonat endete am ') + date +
      '.';
  }
  return 'Deine Laufzeit wird derzeit nicht übermittelt. Wende dich bei Fragen zu deinem Zugang an den Support.';
}
function renderCustomerAccessInfo(data) {
  const target = document.querySelector('[data-access-summary]');
  if (target) target.textContent = customerAccessText(data);
}
let customerAccessCheckedAt = 0;
async function refreshCustomerAccessInfo() {
  if (h || Date.now() - customerAccessCheckedAt < 30000) return;
  customerAccessCheckedAt = Date.now();
  try {
    renderCustomerAccessInfo(await R('/session'));
  } catch {
    customerAccessCheckedAt = 0;
    const target = document.querySelector('[data-access-summary]');
    if (target) target.textContent = 'Deine Zugangsinformationen konnten gerade nicht geladen werden. Bitte versuche es später erneut.';
  }
}

// Native disclosure menu: usable with touch and keyboard, without a second action list.
const appMenu = document.getElementById('app-menu');
if (appMenu) {
  const positionAppMenu = () => {
    if (!appMenu.open) return;
    const rect = appMenu.getBoundingClientRect();
    const panel = appMenu.querySelector('.app-menu-items');
    const width = panel.getBoundingClientRect().width;
    const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
    panel.style.left = (left - rect.left) + 'px';
  };
  appMenu.addEventListener('toggle', () => {
    if (appMenu.open) refreshCustomerAccessInfo();
    appMenu.querySelector('summary').setAttribute('aria-label', appMenu.open ? 'Menü schließen' : 'Menü öffnen');
    positionAppMenu();
  });
  window.addEventListener('resize', positionAppMenu);
  appMenu.addEventListener('click', event => {
    if (event.target.closest('.app-menu-items button, .app-menu-items a')) appMenu.open = false;
  }, true);
  document.addEventListener('click', event => {
    if (appMenu.open && !appMenu.contains(event.target)) appMenu.open = false;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && appMenu.open) {
      appMenu.open = false;
      appMenu.querySelector('summary').focus();
      event.preventDefault();
    }
  });
}

let billingCustomerEmail = '';
function billingLinkUrl(base, email, kind) {
 const url = new URL(base);
 const value = String(email || '').trim().toLowerCase();
 if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) url.searchParams.set(kind === 'portal' ? 'prefilled_email' : 'locked_prefilled_email', value);
 if (kind !== 'portal') url.searchParams.set('locale', 'de');
 return url.href;
}
function syncBillingLinks() {
 const emailField=document.querySelector('#customer-access input[name="email"]');
 const email=billingCustomerEmail || emailField?.value || '';
 document.querySelectorAll('[data-billing-link]').forEach(link=>{
  link.dataset.baseUrl ||= link.href;
  link.href=billingLinkUrl(link.dataset.baseUrl,email,link.dataset.billingLink);
 });
}
function showBillingAccessError(error) {
 const choice=document.querySelector('[data-login-billing]');
 const note=document.querySelector('[data-login-billing-note]');
 if(!choice || !note) return;
 if(error.code === 'ACCESS_EXPIRED') {
  choice.open=true;
  note.textContent='Deine Zugangszeit ist vorbei. Wenn du weiter kreativ sein möchtest, kannst du hier dein Abo auswählen. 💜';
  note.classList.add('billing-expired');
 } else if(error.code === 'ACCESS_BLOCKED') {
  choice.open=false;choice.hidden=true;
  note.textContent='Dein Zugang ist derzeit gesperrt. Bitte wende dich an den Support, damit wir das klären können.';
  note.classList.remove('billing-expired');
 }
 syncBillingLinks();
}
document.querySelector('#customer-access input[name="email"]')?.addEventListener('input',()=>{
 billingCustomerEmail='';const choice=document.querySelector('[data-login-billing]');if(choice)choice.hidden=false;syncBillingLinks();
});
syncBillingLinks();

const categoryDraftFields=['ciAudience','ciGoal','ciTone','fairyLead','fairyTale','customFairy','randomWorld','randomSource','randomItems','idea','scriptText','location','locationRef','keyframeRef','extra','priority'];
let activeDraftCategory=null, categoryDraftDefaults={}, categoryDrafts={};
function captureCategoryDraft(){
 const draft={ideaMode:I()};
 for(const id of categoryDraftFields)if(n(id))draft[id]=n(id).value;
 return draft;
}
function saveCategoryDrafts(){
 if(!activeDraftCategory)return;
 categoryDrafts[activeDraftCategory]=captureCategoryDraft();
 try{localStorage.setItem(P()+':categories',JSON.stringify(categoryDrafts))}catch{}
}
function setupCategoryDrafts(){
 categoryDraftDefaults=captureCategoryDraft();
 activeDraftCategory=null;
 try{const saved=JSON.parse(localStorage.getItem(P()+':categories')||'{}');categoryDrafts=saved&&typeof saved==='object'&&!Array.isArray(saved)?saved:{}}catch{categoryDrafts={}}
}
function switchCategoryDraft(){
 w();
 saveCategoryDrafts();
 const next=n('kind').value;
 const draft=Object.hasOwn(categoryDrafts,next)?categoryDrafts[next]:categoryDraftDefaults;
 for(const id of categoryDraftFields)if(n(id))n(id).value=draft[id]??categoryDraftDefaults[id]??'';
 const mode=['own','inspire','reference'].includes(draft.ideaMode)?draft.ideaMode:'own';
 const radio=document.querySelector('input[name=ideaMode][value="'+mode+'"]');
 if(radio)radio.checked=true;
 activeDraftCategory=next;
 Ce();fe();j();A();F();z();D();we();N();
 ['idea','extra'].forEach(S);
 C();
}
function resetCategoryDrafts(){
 categoryDrafts={};activeDraftCategory=null;
 try{localStorage.removeItem(P()+':categories')}catch{}
}

Be();
