---
layout: badge
name: Projektleiter
bid: "101"
tags: [aufgaben]
image: /uploads/badge-101-hardware.svg
color: rgb(33, 150, 243);
published: true
---

## Voraussetzungen

Dieser Badge wird für ein abgeschlossenes und dokumentiertes Hardware-Projekt verliehen.

* Das Projekt muss einen überwiegenden Hardwareanteil haben.
* Das Projekt muss abgeschlossen (Projektziel erfüllt) sein.
* Das Projekt muss auf codeforheilbronn.de dokumentiert sein.
* Der Quellcode muss auf Github veröffentlicht werden.

## Verliehen an

{% for contributor in site.data.contributors %}
    {% for ctr_badge in contributor.badges %}
        {% if (ctr_badge.id == page.bid) %}
            {% include cfh-contributor.html contributor=contributor.nick %}
        {% endif %}
    {% endfor %}
{% endfor %}
