---
layout: page
feature_image: /uploads/site_internal/banner-badges.jpg
title: CFH-Badges
---

Badges sind hexagonale Sticker. Sie eignen sich hervorragend, um damit die Rückseite eines Laptops zu verschönern.
Außerdem dienen Sie dazu, dass jeder selbstständig Ansprechpartner für einen bestimmten Skill finden kann.
So kann z.B. ein neues Mitglied schnell jemanden mit Arduino Badge um fachliche Hilfe fragen oder jemanden
mit einem Farmbot-Badge mit Fragen zu dem Projekt löchern.

Nicht zuletzt sind Badges aber auch eine Form der Anerkennung. Sie sollen dazu motivieren, Projekte fertig zu stellen und zu dokumentieren.

Um eine Badge zu erhalten, muss ein Antrag unter folgendem Link gestellt werden: [Badge-Antrag](https://goo.gl/forms/Pb89t8ayzqEUcp893)

### Badges für übernommene Aufgaben - 0xx

Nummernkreis 0 enthält Badges, die vor allem für übernommene Aufgaben vergeben werden. 

<div id="cfh-badge-list" class="cfh-badge-list" style="margin-top: 20px;">
    {% for badge in site.badges %}
        {% if badge.categorie == 'tasks' %}
            <a href="{{ badge.url }}">
                <img class="cfh-badge-img" src="{{badge.image}}" />
            </a>
        {% endif %}
    {% endfor %}
</div>


### Badges für verwendete Technologien - 1xx

Technologie-Badges werden für fertige und dokumentierte Projekte vergeben.

<div id="cfh-badge-list" class="cfh-badge-list" style="margin-top: 20px;">
    {% for badge in site.badges %}
        {% if badge.categorie == 'technologie' %}
            <a href="{{ badge.url }}">
                <img class="cfh-badge-img" src="{{badge.image}}" />
            </a>
        {% endif %}
    {% endfor %}
</div>

<!-- 
### Badges für Softskills - 2xx

<div id="cfh-badge-list" class="cfh-badge-list" style="margin-top: 20px;">
    {% for badge in site.badges %}
        {% if badge.categorie == 'softskills' %}
            <a href="{{ badge.url }}">
                <img class="cfh-badge-img" src="{{badge.image}}" />
            </a>
        {% endif %}
    {% endfor %}
</div>
-->

## Umgang mit den Badges

Die Badges werden an alle Mitglieder von Code for Heilbronn ausgegeben.
An einen Badge sind immer einige Anforderungen gekoppelt, die auf der Seite des Badges eingesehen werden können.
Außerdem sind auf der Seite des Badges alle Personen aufgelistet, die den Badge bereits erworben haben.

Es gibt verschiedene Arten von Badge.

* Projektbadges - für die größeren Projekte wie Farmbot und MateLight.
* Aufgabenbadges - für übernommene Aufgaben und Verantwortung
* Technologiebadges - für verwendete Technologien und Methoden
* Metabadges - für Softskills und allgemeine Dinge


