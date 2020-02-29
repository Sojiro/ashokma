---
title: How to change the color of the cursor in CSS
tags:
  - How to
  - CSS
icon: fab fa-css3-alt
date: 2020-02-29 15:42:55
---


## Using [ `caret-color` ][1]

To set a specific color.

<span style="caret-color: red; cursor: pointer;" contenteditable="true">
Click here and see the red caret ^_^
</span>

``` css
span {
    caret-color: red;
}
```

**Tip:** One can also set it to `caret-color: transparent;` in order to totally hide the caret blinking.

[1]: //developer.mozilla.org/en-US/docs/Web/CSS/caret-color

