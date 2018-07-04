FROM ubuntu:latest
RUN apt update -y && \
    apt install -y software-properties-common && \
    apt-add-repository ppa:brightbox/ruby-ng && \
    apt update -y && \
    apt install -y ruby2.5 ruby2.5-dev build-essential autoconf libcurl3 && \
    gem install -f ffi && \
    gem install jekyll bundler
RUN bundle config --global silence_root_warning 1
WORKDIR /cfhn
CMD ["bash", "-c", "bundle install && bundle exec jekyll serve --host 0.0.0.0"]
