---
layout: post
title: TTN Lora Gateway 
description: Bau unsere Outdoor TTN Lora Gateways
tags: 
      - LoraWan
      - lora
feature_image: /uploads/prj_media/LoraWan_header.jpg  
published: true

date: 2018-03-01
author: vale

---

Unsere bestellten Bauteile
 
Part                             | Price                 | Order/link
---------------------------------|-----------------------|--------------------
iC880A-SPI Board                 | 120 €                 | [IMST Webshop]()
Pigtail for antenna              | 8 €                   | [IMST Webshop]()
Raspberry Pi 3                   | EUR 32.-              | [Amazon]()
Antenna                          | EUR 3.50 - EUR 8      | [IMST Webshop]()
PoE Adapter                      | EUR 8                 | [Amazon]()
MicroSD Card (4Gb or more)       | ~ EUR 8               | [Reichelt]()
7x Dual female jumper wires      | ~ EUR 5-40            | Aus der Bastelkiste
PoE Injektor                     |15                     | [Amazon]()
           


Nachdem alle bestellten Bauteile eingetroffen sind, konnte es losgehen mit bauen/basteln.
 
![Angekommenes Material](/uploads/post_media/2018-03-01-ttn-gateway/material.jpg "Angekommenes Material")
 
Wir haben damit angefangen, einfach mal provisorisch RasperryPi und iC880a mit ein paar Jumpern zu verbinden. Um aus dem Pi nun einen TTN Gateway zu machen, haben wir die Anleitung des TTN Zürich (link) Schritt für Schritt abgearbeitet.
 
![Testaufbau](/uploads/post_media/2018-03-01-ttn-gateway/testaufbau1.jpg "Testaufbau")
![Testaufbau](/uploads/post_media/2018-03-01-ttn-gateway/testaufbau2.jpg "Testaufbau")

iC880a pin      | Description   | RPi physical pin
----------------|---------------|-----------------
21              | Supply 5V     | 2
22              | GND           | 6
13              | Reset         | 22
14              | SPI CLK       | 23
15              | MISO          | 21
16              | MOSI          | 19
17              | NSS           | 24
 
Nachdem die Gateways nun konfiguriert waren und bei TTN als “online” angezeigt wurden, haben wir erfolgreich unseren ersten Lora Node mit dem Gateway verbinden können. Nun ging es daran, das Ganze für guten Empfang outdoor-tauglich zu machen.
 
## Gateway Goes Outdoor
 
Also fingen wir an die Gehäuse vorzubereiten. Da unsere gewählten Gehäuse schon Löcher vorbereitet haben, haben wir uns dazu entschieden, passende Adapter zu drucken um Antenne und Kabeldurchführung dicht zu befestigen.
 
![3D gedruckte Adapter](/uploads/post_media/2018-03-01-ttn-gateway/ "3D gedruckte Adapter")
 
Als die Adapter gedruckt waren, haben wir diese mit Silikon wasserdicht in die Gehäuse geklebt. Für den Fall, dass wir weitere Gateways bauen sollten, würde sich der Einsatz von Zweikomponentenkleber als Dichtmasse allerdings besser eignen.
 
![Gehäuse kleben](/uploads/post_media/2018-03-01-ttn-gateway/gehaeuse.jpg "Gehäuse kleben")
 
Während die Gehäuse trockneten, konnten wir den Pi, das iC880a Modul und den PoE Adapter auf eine Kunststoffplatte montieren. Diese haben wir mit dem Cuttermesser passend zugeschnitten und Löcher, zur Montage der Komponenten, gebohrt.
Nachdem alles montiert und nochmals auf Funktion getestet wurde, konnten wir die zwei Platten mit den Gehäusen vereinen und das Netzwerkkabel durch die Kabeldurchführung stecken.
 
![Montageplatte](/uploads/post_media/2018-03-01-ttn-gateway/platte-montiert.jpg "Montageplatte")
![Gateway offen](/uploads/post_media/2018-03-01-ttn-gateway/gateway-fertig.jpg "Gateway offen")
 
Um die einsatzbereiten Gateways nun auch außen am Wollhaus befestigen zu können, fehlte noch eine Befestigungsmöglichkeit. Nach kurzem Überlegen war klar, eine Art Haken zum Einhängen am Geländer ist die beste Lösung. Also nochmal kurz in den Baumarkt und  passendes Material besorgt.
 
![Baumarkt](/uploads/post_media/2018-03-01-ttn-gateway/baumarkt.jpg "Baumarkt")
 
2x 1m Aluminium Flachmaterial wurde das Material der Wahl. Nach ein wenig messen und anzeichen konnte das Material auf Länge geschnitten und mit Löchern versehen werden. Nun wurde es noch zu einem Haken gebogen, um es am Geländer zu befestigen.
 
![Haken zeichnung](/uploads/post_media/2018-03-01-ttn-gateway/zeichnung.png "Haken zeichnung")
 
Und schon hing der erste Heilbronner TTN Outdoor Gateway in Richtung Allee.
 
![Montierter Gateway1](/uploads/post_media/2018-03-01-ttn-gateway/ "Montierter Gateway1")

 
Ein paar Tage später, da der PoE Injektor noch fehlte, hing auch der 2. Gateway draußen.
 
![Montierter Gateway2](/uploads/post_media/2018-03-01-ttn-gateway/ "Montierter Gateway2")
