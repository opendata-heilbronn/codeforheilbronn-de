---
layout: badge
name: Projektleiter
id: "103"
tags: [aufgaben]
image: /uploads/badge-103-opendata.svg
color: rgb(139, 195, 74);
published: true
---

## Voraussetzungen

Dieser Badge wird für ein abgeschlossenes und dokumentiertes OpenData-Projekt verliehen.

* Das Projekt muss entweder offene Daten generieren, bereitstellen oder nutzen.
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
