---
layout: badge
name: Docker
bid: "105"
tags: [aufgaben]
image: /uploads/badge-105-docker.svg
color: rgb(36, 184, 235);
published: true
---

## Voraussetzungen

Dieser Badge wird für ein abgeschlossenes und dokumentiertes Projekt mit Dockerintegration verliehen.

* Das Projekt muss an einer Stelle mit Docker arbeiten oder Docker selbst erweitern oder verbessern.
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
