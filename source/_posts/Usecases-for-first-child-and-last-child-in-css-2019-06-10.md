---
title: Usecases for first-child and last-child in CSS
tags:
  - Usecase
  - Pseudo classes
  - CSS
icon: fab fa-css3-alt
date: 2019-06-10 11:43:21
---


Even though the word pseudo means _not real_ or _fake_, peudo classes of CSS are not of those. They come more meaningful with their specific use cases. Let us take a look at two of those pseudo classes in this blog.

```html
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
</div>
```

As we have our rating numbers, now we want to notify the user which is the low and the high end. We can do the same using our fancy `first-child` and `last-child` pseudo classes.

```css
div {
  font-size: 30;
}

span {
  padding: 5px;
  border: 2px solid black;
}

span:first-child {
  background-color: orange;
}

span:last-child {
  background-color: greenyellow;
}
```

![Highlighting first and last numbers](first-child_last-child.png 'Highlighting first and last numbers')

Below we use the same peudo classes to highlight a table's header and footer. ^\_^

```html
<section>
  <div>Tech Stack</div>
  <div>JS</div>
  <div>CSS</div>
  <div>HTML</div>
  <div>Angular</div>
  <div>GraphQL</div>
  <div>Total - 5</div>
</section>
```

```css
section {
  font-size: 30;
  width: 200px;
}

div {
  padding: 5px;
  border: 2px solid black;
}

div:first-child {
  background-color: gray;
}

div:last-child {
  background-color: gray;
}
```

![Highlighting first and last rows](first-row_last-row.png 'Highlighting first and last rows')
