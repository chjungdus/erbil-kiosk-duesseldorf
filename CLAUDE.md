# Erbil Kiosk – Website (Nexuzo)

Eigenständiges Projekt. Ein Claude-Code-Chat pro Website: In diesem Chat geht es nur um diese Seite.

## Kunde

- Erbil Kiosk, Suitbertusstraße 2, 40223 Düsseldorf (Bilk)
- Google Maps: https://maps.google.com/maps?cid=1806438506804261972
- Bewertung laut Google: 4,8 von 5, 30 Bewertungen
- Öffnungszeiten: Mo–Do 7:30–22 Uhr, Fr 7:30–23 Uhr, Sa 9–23 Uhr, So 9–22 Uhr
- Eingang laut Google barrierefrei (rollstuhlgeeignet)
- Sortiment ist unbekannt und bewusst nur allgemein beschrieben (Getränke, Snacks und Süßes, Alltägliches). Mit dem Inhaber abstimmen und konkretisieren. Nichts erfinden, besonders keine Aussagen zu Tabak, Alkohol, Paketservice oder Ähnlichem ohne Bestätigung.

## Stil (Redesign November 2026, zweite Fassung)

Ruhig und fotolastig, aufgebaut wie ein Profil: links (Handy: oben) Name, Öffnungsstatus, Kennzahlen von Google, kurzer Text, Buttons (Route, Zeiten, Fotos, Karte) und die Öffnungszeiten. Rechts (Handy: darunter) große Fotos untereinander, dazwischen kurze Textblöcke. Auf dem Desktop bleibt die Profilspalte stehen. Warmes Weiß, Rot nur als Akzent (Name, Route-Button, heutiger Tag), keine Karten mit Schatten, keine Infoleisten, keine Icons. Bewusst anders als Espresso Perfetto und frittenliebe-bilk.de.

- Farben und Schriften stehen oben in `style.css` (`:root`). Keine Webfonts, nur Systemschriften.
- Mateo wollte ausdrücklich eigenständige Designs, nicht die Vorlage von frittenliebe-bilk.de kopieren.
- Nicht wieder einführen: Street/Späti-Stil (dunkel, Gelb, eckig) und die erste rot-weiße Fassung (Hero mit Karte, rote Infoleiste, Kästen mit Schatten). Beide fand Mateo schlecht, die zweite „sieht nach Vorlage aus".

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
