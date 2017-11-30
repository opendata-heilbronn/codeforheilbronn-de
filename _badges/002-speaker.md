---
layout: badge
name: Projektleiter
bid: "002"
tags: [aufgaben]
image: /uploads/badge-002-speaker.svg
color: rgb(63, 81, 181);
published: true
---

## Voraussetzungen

Dieser Badge wird für einen vorbereiteten und geleiteten Workshop verliehen.

* Der Workshop muss vorbereitet, gehalten und dokumentiert werden
* Der Workshop muss mindestens 30 Minuten gehen
* Beim Workshop müssen mindestens 5 weitere Personen anwesend sein

## Verliehen an

{% for contributor in site.data.contributors %}
    {% for ctr_badge in contributor.badges %}
        {% if (ctr_badge.id == page.bid) %}
            {% include cfh-contributor.html contributor=contributor.nick %}
        {% endif %}
    {% endfor %}
{% endfor %}
