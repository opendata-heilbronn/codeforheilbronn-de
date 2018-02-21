---
layout: page
feature_image: ./uploads/banner-projects.jpg
title: Projekte
---

 <div class="cfh-cards">
    {% for project in site.projects %}
        {% include cfh-project-card.html project=project %}
    {% endfor %}
</div>