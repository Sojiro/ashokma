---
title: CSS pseudo elements and how to use them
tags:
  - How To
  - CSS
  - Pseudo classes
icon: fab fa-css3-alt
date: 2019-09-02 19:13:50
---

Most of you know about `::before` and `::after` CSS peudo elements from the [create your own custom checkbox post][1] or from [the usecases for `::first-child` and `::last-child` post][2]. Let's take a look at some other interesting peudo classes.

<div id="pseudo-elements"><link rel="preconnect" href="https://source.unsplash.com"><link rel="preconnect" href="https://pseudo-elements.netlify.com"><link rel="stylesheet" href="https://pseudo-elements.netlify.com/style-for-blog.css"><link rel="prefetch" href="https://source.unsplash.com/random"><h2 id="selection">::selection</h2>Applies styles to user selected text of an element like the paragraph below. Try selecting it.<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```css
::selection {
  background-color: yellowgreen;
  color: blue;
}
```
<h2 id="placeholder">::placeholder</h2><p>We see the custom placeholder styles for all input elements.</p>
```css
::placeholder {
  padding: 0 5px;
  color: blue;
  opacity: 0.6;
  font-family: monospace;
}
```
<div><input type="number" name="age" id="age" placeholder="Please enter your age..."><input type="email" name="email" id="email" placeholder="Please enter your email..."></div><h2 id="backdrop">::backdrop</h2><p>Backdrop is used to style the elements full screen box. Here in this example it is a dialog.</p><dialog id="dialog"><h2>This is the dialog</h2><form method="dialog"><button type="submit">Close</button></form>
</dialog><button onclick="document.getElementById('dialog').showModal()">Show Dialog</button></div>

```css
::backdrop {
  background-image: url(https://source.unsplash.com/random);
  opacity: 0.4;
}
```

[1]: /2019/08/26/How-to-create-a-custom-checkbox-with-just-CSS/
[2]: /2019/06/10/Usecases-for-first-child-and-last-child-in-css/
