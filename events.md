---
layout: page
feature_image: /uploads/banner-events.jpg
title: Termine
---

Der __CodingAbend__, als allgemeines Treffen aller Aktiven findet jeden Donnerstag ab 18 Uhr statt.
Dort wird zusammen an diversen Projekten gearbeitet. Die Termine und genauere Beschreibungen können auf
Meetup nachgesehen werden.

Nicht ganz regelmäßig, aber meist in den geraden Kalenderwochen
findet außerdem der __Software Club__ statt. Auch hier sind die Details
auf Meetup zu finden.
Beim Software Club geht es ausschließlich um Software und Softwareentwicklung.
Hier werden zu beginn Lightningtalks zu einem
bestimmten Thema angeboten. Danach wird gemeinsam geübt, verbessert und entwickelt.

[Hier geht es zu unserer Meetup-Page.](https://www.meetup.com/de-DE/codeforhn/)

# Einladungen zu kommenden und vergangenen Events

<div class="cfh-cards">
{% for event in site.events limit: 3 %}
      {% include cfh-event-card.html event=event %}
{% endfor %}
</div>

