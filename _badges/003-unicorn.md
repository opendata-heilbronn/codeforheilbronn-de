---
layout: badge
name: Projektleiter
bid: "003"
tags: [ aufgaben]
image: /uploads/badge-003-unicorn.svg
published: true
color: rgb(233, 30, 99);
---

## Verliehen an

{% for contributor in site.data.contributors %}
    {% for ctr_badge in contributor.badges %}
        {% if (ctr_badge.id == page.bid) %}
            {% include cfh-contributor.html contributor=contributor.nick %}
        {% endif %}
    {% endfor %}
{% endfor %}
