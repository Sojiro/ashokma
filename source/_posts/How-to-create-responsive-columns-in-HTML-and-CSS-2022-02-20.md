---
title: How to create responsive columns in HTML and CSS
tags:
  - How to
  - Responsive design
  - HTML
  - CSS
icon: fab fa-css3-alt
date: 2022-02-20 01:10:36
---


Responsive design is good for business in order to be accessible through various devices and screens.

In this post, we are going to look at one of the simplest way to make responsive layout using [`display: grid`][grid].

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

Using the [repeat][repeat] function, we are going to apply a generic criteria for all columns that is to be `auto-fit` with either minimum of `200px` or use all of the freespace available.

Check out this [codepen](https://codepen.io/SojiroDeTenken/pen/MWOVyRJ) for example implementation.


[grid]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
[repeat]: https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()