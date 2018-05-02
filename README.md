# codeforheilbronn-de

## Wie kann ich beitragen?

### Blogbeitrag schreiben

Um einen neuen Blogbeitrag zu schreiben, lege dir zuerst einen neuen Branch an. Das Namensschema für Blogbeiträge ist "blog/[year]-[month]-[day]-[title]

Der neue Blogbeitrag wird dann als neue Markdown-File unter '\_posts' abgelegt.
Wenn du Bilder etc in deinen Beitrag einbinden möchtest, kannst du diese unter 'uploads/post_media' ablegen. Bei einzelnen Bildern, kannst du das Bild direkt in den Ordner legen. Wenn du mehrere Bilder hast, lege bitte einen neuen Ordner an und nenne ihn genau wie die Markdown-Datei (nur ohne .md).

### Projekt veröffentlichen

Wenn du ein Projekt auf der Website veröffentlichen willst, dann lege dir zuerst einen neuen Branch an. Das Namensschema für Projekte ist "project/[year]-[month]-[day]-[title]
Lege dir, für dein Projekt, einen neuen Eintrag unter '\_projects' an. Die Bilder für Projekte werden in 'uploads/\_prj_media' abgelegt. Das Vorgehen ist wie bei Blogeinträgen.

### Änderungen am Layout / allgemeine neue Features

Das Namensschema für neue Features ist "feature/[title]


## Getting Started
If ruby and the gem bundler is installed, run `bundle install` to install all further dependencies

To host the site locally run `bundle exec jekyll serve`

## JekyllWorkshop

    sudo apt-add-repository ppa:brightbox/ruby-ng
    sudo apt update
    sudo apt install ruby2.5 ruby2.5-dev build-essential autoconf libcurl3
    sudo gem install -f ffi
    sudo gem install jekyll bundler
    git clone https://github.com/opendata-heilbronn/codeforheilbronn-de
    cd codeforheilbronn-de
    bundle install
    bundle exec jekyll serve
