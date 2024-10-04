---
title: "Brantley Cooper - Developer Portfolio"
layout: "layout.njk"
---

<div class="box">
  <h1>Welcome to My Portfolio</h1>
  <p>Hi, I'm Brantley Cooper, a Student at Durham College. Welcome to my Portfolio Site.</p>
</div>

<div class="box">
  <h2>Projects</h2>
  <ul>
    {% for project in collections.projects %}
      <li><a href="{{ project.url }}">{{ project.data.title }}</a>: {{ project.data.description }}</li>
    {% endfor %}
  </ul>
</div>
