---
layout: page
feature_image: /uploads/site_internal/banner-events.jpg
title: Termine
---

Der __Coding Abend__, als allgemeines Treffen aller Aktiven, findet jeden Donnerstag ab 18 Uhr im [Maker Space der experimenta](https://makerspace.experimenta.science/) statt.
Dort wird zusammen an diversen Projekten gearbeitet.

Zusätzlich zum Coding Abend findet der __Premium Coding Abend__ jeden 1. Donnerstag im Monat ab 18 Uhr statt. Zum regulären Coding Abend kommt gemeinsames Pizza bestellen sowie je nach Verfügbarkeit Vorträge von Teilnehmenden hinzu!

Außerdem haben wir 2x im Monat die __Community Days__, welche als exklusiven Tag für Vereinsmitglieder im [Maker Space](https://makerspace.experimenta.science/) dienen. Die Community Days finden immer jeden 1. Sonntag ab 15 Uhr und 3. Montag ab 18 Uhr statt.  
Wichtig: Falls du noch kein Mitglied bist, aber an einem der Community Day Termine vorbeischauen möchtest, gib uns bitte kurz [per Mail](mailto:info@codeforheilbronn.de) bescheid!

__Anfahrt__:  
>Experimenta – Platz  
>74072 Heilbronn

__ÖPNV__:  
>Neckarturm, Heilbronn; ca. 3min Laufweg  
>Heilbronn HbF; ca. 10min Laufweg

# Eventkalender
Der Eventkalender beinhaltet alle Coding- und Premium Coding Abende, Community Days und Events.  
[Web](https://cloud.cfhn.it/apps/calendar/p/g9mdnek6Mp6WkQ3k)  
[ICS](https://cloud.cfhn.it/remote.php/dav/public-calendars/g9mdnek6Mp6WkQ3k?export)

<iframe style="border-style: none;width: 100%; height: 600px;" src="https://cloud.cfhn.it/apps/calendar/embed/g9mdnek6Mp6WkQ3k"></iframe>  

# Einladungen zu kommenden und vergangenen Events

<div class="cfh-cards">
{% assign events = site.posts | where: 'category', 'Einladung' | sort: 'date' | reverse %}

{% for event in events limit: 3 %}
      {% include cfh-event-card.html event=event %}
{% endfor %}
</div>

