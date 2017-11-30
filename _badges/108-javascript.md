---
layout: badge
name: JaaScript
bid: "108"
tags: [aufgaben]
image: /uploads/badge-108-javascript.svg
color: rgb(251, 216, 60);
published: true
---

## Voraussetzungen

Dieser Badge wird für ein abgeschlossenes und dokumentiertes JavaScript-Projekt verliehen.

* Das Projekt muss einen überwiegenden JavaScript-Anteil haben.
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
