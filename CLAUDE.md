# Erbil Kiosk – Website (Nexuzo)

Eigenständiges Projekt. Ein Claude-Code-Chat pro Website: In diesem Chat geht es nur um diese Seite.

## Kunde

- Erbil Kiosk, Suitbertusstraße 2, 40223 Düsseldorf (Bilk)
- Google Maps: https://maps.google.com/maps?cid=1806438506804261972
- Bewertung laut Google: 4,8 von 5, 30 Bewertungen
- Öffnungszeiten: Mo–Do 7:30–22 Uhr, Fr 7:30–23 Uhr, Sa 9–23 Uhr, So 9–22 Uhr
- Eingang laut Google barrierefrei (rollstuhlgeeignet)
- Sortiment ist unbekannt und bewusst nur allgemein beschrieben (Getränke, Snacks und Süßes, Alltägliches). Mit dem Inhaber abstimmen und konkretisieren. Nichts erfinden, besonders keine Aussagen zu Tabak, Alkohol, Paketservice oder Ähnlichem ohne Bestätigung.

## Stil

Vorlage ist frittenliebe-bilk.de (gleiche Struktur und Gefühl): sticky Navigation mit Hamburger-Menü, dunkler Hero mit Overlay, Öffnungsstatus-Pille, Markisen-Band unter dem Hero, USP-Leiste, Über-uns mit schräg gedrehtem Foto-Rahmen, Karten, Galerie mit Lightbox, Bewertungen, FAQ-Akkordeon, Kontakt mit Öffnungszeiten-Tabelle und Zwei-Klick-Karte, dunkler Footer. Jede Sektion hat ein eigenes Hintergrundmotiv (Kiosk-Icons als SVG-Muster, Papierstruktur, Punktraster).

- Farben (siehe `:root` in `style.css`): Kiosk-Grün `#1d7a4d` als Akzent, tiefes Grün-Schwarz `#14261c` als Text, Sonnengelb `#f2b01e` nur als kleines Highlight, Rot `#c9361f` sparsam
- Schriften: Fraunces (Überschriften), Inter (Fließtext), lokal über `@font-face`. Die woff2-Dateien gehören nach `assets/fonts/` (`fraunces-latin-wght-normal.woff2`, `inter-latin-wght-normal.woff2`). Solange sie fehlen, greift Georgia bzw. die Systemschrift. Keine Google-Fonts-Einbindung (DSGVO).

## Regeln (human-website-design)

- Nur HTML, CSS, JavaScript. Kein TypeScript, kein React, kein Build-Tool.
- Keine Emojis im Seiteninhalt. Icons nur als Inline-SVG im selben Strichstil.
- `border-radius` auf Karten und Buttons maximal 8px (Pillen für Status und Chips ausgenommen).
- Keine erfundenen Zahlen, Zitate oder Bewertungstexte. Nur belegte Daten (Google-Profil, Angaben des Inhabers).
- Zentrierter Text nur in der Hero-Headline.
- Keine Stock-Fotos. Nur echte Fotos des Ladens.
- Neue Korrekturwünsche von Mateo, die generell gelten, als kurze Lehre in `/mnt/skills/plugins/human-website-design/references/learnings.md` festhalten (falls Claude Code den Skill lokal hat).

## Bilder

Mateo liefert die Fotos. Dateien in `assets/photos/` ablegen, genau mit diesen Namen (oder die `src` im HTML anpassen):

- `hero.jpg` (Querformat, ca. 1920x1080)
- `hero-hochformat.jpg` (4:5)
- `ueber-uns.jpg` (4:5)
- `galerie-1.jpg` bis `galerie-5.jpg`

Fotos vorher auf ca. 1600px Kantenlänge und unter 400 KB komprimieren. Fehlt eine Datei, zeigt die Seite automatisch das Kiosk-Muster (Logik in `script.js`).

## Offene Punkte

- Telefonnummer vom Inhaber holen (nicht erfunden, deshalb noch nicht auf der Seite)
- Sortiment konkretisieren (HTML-Kommentar „SORTIMENT PRÜFEN" in `index.html`)
- Echte Geschichte des Inhabers im Über-uns-Text ergänzen (HTML-Kommentar „HINWEIS an Mateo")
- Impressum und Datenschutz: Platzhalter (gelb markiert) ausfüllen, rechtlich prüfen lassen
- Probe-Leiste und Footer-Hinweis entfernen, sobald der Kunde die Seite übernimmt (HTML-Kommentare „PROBE-HINWEIS")

## Veröffentlichen (Nexuzo-Workflow)

Ein GitHub-Repo pro Prospect, Auslieferung über GitHub Pages (Account `chjungdus`). Vorschlag für den Repo-Namen: `erbil-kiosk-duesseldorf`. Danach Link als Probe-Website an den Inhaber schicken. Eigene Domain erst nach Zusage.

## Dateien

```
index.html      Startseite (alle Sektionen)
impressum.html  Platzhalter-Vorlage
datenschutz.html  Vorlage für statische Seite ohne Tracking
style.css       komplettes Styling inkl. Tokens und Hintergrundmotiven
script.js       Menü, Öffnungsstatus (HOURS oben im Skript), FAQ, Lightbox, Karte
assets/         fonts/ und photos/
```
