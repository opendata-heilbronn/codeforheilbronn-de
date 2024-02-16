# codeforheilbronn-de

This repository contains the source code for the website of Code for Heilbronn e.V. (https://codeforheilbronn.de).

## How to support?

### Writing a blog post

To write a new blog post, first create a new branch. The naming scheme for blog posts is "blog/[year]-[month]-[day]-[title]

Create a new file under '\_posts' with the following naming scheme: [year]-[month]-[day]-[title].md

If you want to include images etc in your post, you can put them under 'uploads/post_media'. For individual images, you can put the image directly into the folder. If you have multiple images, please create a new folder and name it exactly like the markdown file (without .md).

### Publishing a project

If you want to publish a project on the website, first create a new branch. The naming scheme for projects is "project/[year]-[month]-[day]-[title]
Create a new file under '\_projects' with the following naming scheme: [year]-[month]-[day]-[title].md
Images for projects are stored in 'uploads/\_prj_media'. The procedure is the same as for blog posts.

### Changing the layout / general new features

If you want to change the layout or add new features, please create a new branch. The naming scheme for new features is "feature/[title]


## Getting Started

hosting a local development server, just use the following command:

    docker-compose up
