---
title: How to make an element hidden
tags:
  - How to
  - HTML
  - CSS
icon: fab fa-html5
date: 2020-02-09 23:12:31
---


There are multiple ways to make an element not visible to the user. The following are top three of those.

## `hidden` 

``` html
<span hidden>
    You can't see me! -_-
</span>
```

One can still see this by inspecting the page using developer tools.

## `display: none` 

This is the CSS version of `hidden` attribute.

``` 
<span id="secret">
    Keep it safe! O_o
</span>
```

``` css
#tribute {
    display: none;
}
```

> **Trivia:** When we set the `hidden` attribute, the browser actually sets the `display: none;` to the respective element. Check it yourself ^_^!

## `visibility: hidden` 

This does the same thing. But, there are some significant differences between [`visibility`][1] and [ `display` ][2] CSS properties.

``` css
#tribute {
    visibility: hidden;
}
```

> **Tip:** Use `display` option when you do not want the elements to be rendered and use `visibility` option when you do not want to mess up the layout while hiding elements.\O/

[1]: //developer.mozilla.org/en-US/docs/Web/CSS/visibility
[2]: //developer.mozilla.org/en-US/docs/Web/CSS/display

