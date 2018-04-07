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


<div id="cfh-badge-list" class="cfh-badge-list" style="margin-top: 20px;">
    {% for badge in site.badges %}
        <a href="{{ badge.url }}">
            <img class="cfh-badge-img" src="{{badge.image}}" />
        </a>
    {% endfor %}
</div>


## Umgang mit den Badges

Die Badges werden an alle Mitglieder von Code for Heilbronn ausgegeben.
An einen Badge sind immer einige Anforderungen gekoppelt, die auf der Seite des Badges eingesehen werden können.
Außerdem sind auf der Seite des Badges alle Personen aufgelistet, die den Badge bereits erworben haben.

Es gibt verschiedene Arten von Badge.

* Projektbadges - für die größeren Projekte wie Farmbot und MateLight.
* Skillbadges - für Fähigkeiten, die man erworben oder unter Beweis gestellt hat
* Aufgabenbadges - für übernommene Aufgaben und Verantwortung
* Metabadges - für Softskills und allgemeine Dinge


<script>

(function() {
    console.info("badge-grid");

    var badges = document.getElementsByClassName("cfh-badge-img");
    var container = document.getElementsByClassName("cfh-badge-list")[0];

    var width_badges = 186;
    var height_badges = 160;

    var col_badges = 0;
    var row_badges = 0;

    var container = $("#cfh-badge-list");
    var containerOuterWidth = container.outerWidth();

    $(".cfh-badge-img").each(function(index, elem) {
        if ((col_badges * width_badges) + width_badges > containerOuterWidth || (row_badges % 2 == 1 && col_badges * width_badges > containerOuterWidth - width_badges)) {
            row_badges++;
            col_badges = 0;
        }

        var top_badges = row_badges * height_badges;
        var left_badges = col_badges * width_badges;

        if (row_badges % 2 == 1) {
            left_badges += 93;
        }
        console.info("badge " + index + " - top:" + top_badges + " ,left:" + left_badges + " - row:" + row_badges + ", col:" + col_badges);

        $(elem).css("left", left_badges + "px");
        $(elem).css("top", top_badges + "px");

        col_badges++;
    });

    console.info("container col:" + row_badges);
    $(container).css("height", (((row_badges + 1) * height_badges) + 50) + "px"); 

})();

</script>
