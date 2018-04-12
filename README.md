# codeforheilbronn-de
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
