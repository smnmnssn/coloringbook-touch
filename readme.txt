Simple coloring book for kids made to use on touchscreens, mainly Ipads.


COLORING SURFACE / BLANK PAPER
COLOR PICKER
ZOOM-FUNKTION
STORLEK PÅ PENSEL
SUDDA/ÅNGRA


Vad vi ska göra härnäst:
Läsa av touch-positioner och konvertera dem till canvas-koordinater.
Använda canvas för att rita (exempel: linjer eller punkter).
Lära dig hur touch-start, -move och -end hänger ihop.
Vi ska börja med att hantera touch-start (när ett finger rör skärmen). För varje steg får du en enkel förklaring och ett exempel.

Steg 1: Förstå sambandet mellan touch och canvas
Vad händer när du rör skärmen?
En touch-händelse inträffar, och vi vill veta var ditt finger rör skärmen.
Touch-positioner (clientX, clientY) är relaterade till skärmen, men canvas har ett eget koordinatsystem.
Vi konverterar dessa positioner till canvas-koordinater genom att ta hänsyn till canvasens storlek och placering.
Övning för dig:
Logga koordinaterna när du rör canvas.
Rita inte än – bara kolla så att koordinaterna är rätt.
Förslag:

I din touchstart-händelse, använd console.log för att skriva ut koordinaterna på skärmen.
Steg 2: Visualisera touch-positionerna på canvas
Mål:
När du rör skärmen, rita en liten cirkel där du rör.

Varför en cirkel?
Det är en enkel figur att börja med.
Den hjälper dig att visuellt se att touch-positionen har konverterats korrekt till canvas.
Övning för dig:
Använd beginPath, arc och fill från canvas API.
För varje touchstart, rita en cirkel vid den konverterade positionen.
Steg 3: Följa rörelsen med touchmove
Vad händer här?
När du drar fingret över skärmen vill vi:

Spåra positionen.
Rita linjer mellan punkterna (fingrets rörelse).
Visualisering:
Tänk dig att fingret lämnar ett spår på canvas, som en penna på papper.

Utmaning till dig:
Rita linjer genom att koppla ihop punkterna i touchmove.
Använd lineTo för att skapa en linje från den senaste punkten till den nya punkten.
Steg 4: Avsluta med touchend
Vad är viktigt här?
När du lyfter fingret ska ritningen sluta, men det betyder också att du behöver "komma ihåg" var du slutade rita, för nästa gång du rör canvas.

Visualisering:
Tänk dig att du lyfter pennan från papperet. Linjen fortsätter inte förrän du börjar rita igen.

Utmaning till dig:
Se till att touchens slut inte lämnar några "spår".
Töm eller spara relevant data om ritningen i touchend.
Grafisk visualisering av steg 2–4:
Touchstart:

🔵 Ritar en cirkel vid touchpunkten.
Touchmove:

✏️ Drar en linje från punkt A till punkt B medan du rör fingret.
Touchend:

🔚 Slutar rita när fingret lyfts.
Hur kan du verifiera?
Testa först touchstart – logga och rita cirklar.
Gå vidare till touchmove – dra linjer.
Se till att touchend fungerar utan problem.
