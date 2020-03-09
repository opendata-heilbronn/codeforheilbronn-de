---
layout: page
feature_image: /uploads/site_internal/banner-events.jpg
title: Termine
---

Der __CodingAbend__, als allgemeines Treffen aller Aktiven, findet jeden Donnerstag ab 18 Uhr im [Maker Space der experimenta](https://makerspace.experimenta.science/) statt.
Dort wird zusammen an diversen Projekten gearbeitet. Die Termine und genauere Beschreibungen können auf
Meetup nachgesehen werden.

[Hier geht es zu unserer Meetup-Page.](https://www.meetup.com/de-DE/codeforhn/)

# Einladungen zu kommenden und vergangenen Events

<div class="cfh-cards">
{% assign events = site.posts | where: 'category', 'Einladung' | sort: 'date' | reverse %}

{% for event in events limit: 3 %}
      {% include cfh-event-card.html event=event %}
{% endfor %}
</div>

