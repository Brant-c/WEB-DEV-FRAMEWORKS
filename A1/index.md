---
title: "Brantley Cooper - Developer Portfolio"
layout: "layout.njk"
---

# Welcome to My Portfolio
Hi, I'm Brantley Cooper, a Student at Durham College. Welcome to my Portfolio Site.

## Projects
{% for project in collections.projects %}
  - [{{ project.data.title }}]({{ project.url }}): {{ project.data.description }}
{% endfor %}
