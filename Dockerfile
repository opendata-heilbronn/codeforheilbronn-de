# STAGE: Builder

FROM jekyll/jekyll:builder as builder

WORKDIR /cfhn

COPY . /cfhn/

RUN chmod -R 777 /cfhn
RUN gem install public_suffix -v 5.1.1
# RUN gem install jekyll
# RUN gem install jekyll-seo-tag
# RUN gem install jekyll-sitemap
# RUN gem install jekyll-redirect-from
# RUN gem install jekyll-feed
# RUN gem install tzinfo-data

# RUN gem install bundler
RUN bash -c "bundle install"
RUN bash -c "bundle exec jekyll build"



# STAGE: Production

FROM nginx:alpine as production
COPY --from=builder /cfhn/_site/ /usr/share/nginx/html/
