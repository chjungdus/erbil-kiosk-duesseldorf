# Erbil Kiosk – Website (Nexuzo)

Eigenständiges Projekt. Ein Claude-Code-Chat pro Website: In diesem Chat geht es nur um diese Seite.

## Kunde

- Erbil Kiosk, Suitbertusstraße 2, 40223 Düsseldorf (Bilk)
- Google Maps: https://maps.google.com/maps?cid=1806438506804261972
- Bewertung laut Google: 4,8 von 5, 30 Bewertungen
- Öffnungszeiten: Mo–Do 7:30–22 Uhr, Fr 7:30–23 Uhr, Sa 9–23 Uhr, So 9–22 Uhr
- Eingang laut Google barrierefrei (rollstuhlgeeignet)
- Sortiment ist unbekannt und bewusst nur allgemein beschrieben (Getränke, Snacks und Süßes, Alltägliches). Mit dem Inhaber abstimmen und konkretisieren. Nichts erfinden, besonders keine Aussagen zu Tabak, Alkohol, Paketservice oder Ähnlichem ohne Bestätigung.

## Stil (Redesign 13.11.2026, dritte Fassung)

Mateo fand die ruhige Profil-Fassung schlecht und wollte ausdrücklich, dass sich der Aufbau an guten Kiosk-/Späti-Seiten orientiert (Vorbild: checkpointali.de, Aufbau und Stilmittel, nichts von deren Code, Texten oder Fotos). Aufbau: Laufband mit Zeiten, sticky Kopf mit Navigation und Route-Button, Hero mit Eyebrow-Badge, großer Headline, Faktenliste, zwei Buttons und großem Foto, Kachelraster (nur belegte Fakten), nummerierte Sortiment-Karten mit Foto, dunkle Galerie „Der Laden", Standort mit Öffnungszeiten und Zwei-Klick-Karte, Bewertungsband, FAQ-Akkordeon, dunkler Fuß. Kräftig und hell: Creme, Rot, Gold, Grün, dicke Konturen, harte Schatten, Display-Schrift (Arial Black).

- Farben und Schriften stehen oben in `style.css` (`:root`). Keine Webfonts, nur Systemschriften.
- Logo: `assets/logo.svg` (voll) und `assets/mark.svg` (Zeichen, auch Favicon). Sonne mit 21 Strahlen über Kiosk-Vordach. Erzeugt von `C:\Users\mateo\erbil-tools\gen-logo.mjs`.
- Früher verworfen: Street/Späti-Stil (dunkel, Gelb, eckig), die erste rot-weiße Fassung und die ruhige Profil-Fassung.

## Regeln (human-website-design)

- Nur HTML, CSS, JavaScript. Kein TypeScript, kein React, kein Build-Tool.
- Keine Emojis im Seiteninhalt. Icons nur als Inline-SVG im selben Strichstil.
- `border-radius` auf Karten und Buttons maximal 8px (Pillen für Status und Chips ausgenommen).
- Keine erfundenen Zahlen, Zitate oder Bewertungstexte. Nur belegte Daten (Google-Profil, Angaben des Inhabers).
- Zentrierter Text nur in der Hero-Headline.
- Fotos: Mateo hat Gratisbilder (Unsplash) als Platzhalter erlaubt. Sie werden direkt von images.unsplash.com geladen. Vor Livegang durch echte Fotos des Ladens ersetzen und Datenschutz Abschnitt 4 anpassen.
- Neue Korrekturwünsche von Mateo, die generell gelten, als kurze Lehre in `/mnt/skills/plugins/human-website-design/references/learnings.md` festhalten (falls Claude Code den Skill lokal hat).

## Bilder

Platzhalter von Unsplash, direkt per URL in `index.html` eingebunden. Echte Fotos in `assets/photos/` ablegen und die `src`-Adressen austauschen.

## Offene Punkte

- Telefonnummer vom Inhaber holen (nicht erfunden, deshalb noch nicht auf der Seite)
- Sortiment konkretisieren (HTML-Kommentar „SORTIMENT PRÜFEN" in `index.html`)
- Echte Geschichte des Inhabers im Über-uns-Text ergänzen (HTML-Kommentar „HINWEIS an Mateo")
- Impressum und Datenschutz: Platzhalter (gelb markiert) ausfüllen, rechtlich prüfen lassen
- Footer-Hinweis entfernen, sobald der Kunde die Seite übernimmt (HTML-Kommentar „PROBE-HINWEIS")
- Paketannahme mit dem Inhaber bestätigen (HTML-Kommentar „PAKETE PRÜFEN")

## Veröffentlichen (Nexuzo-Workflow)

Ein GitHub-Repo pro Prospect, Auslieferung über GitHub Pages (Account `chjungdus`). Vorschlag für den Repo-Namen: `erbil-kiosk-duesseldorf`. Danach Link als Probe-Website an den Inhaber schicken. Eigene Domain erst nach Zusage.

## Dateien

```
index.html      Startseite (alle Sektionen)
impressum.html  Platzhalter-Vorlage
datenschutz.html  Vorlage für statische Seite ohne Tracking
style.css       komplettes Styling inkl. Tokens und Hintergrundmotiven
script.js       Öffnungsstatus (HOURS oben im Skript), Karte nach Klick
assets/         fonts/ und photos/
```
