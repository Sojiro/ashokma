---
title: How to toggle a css class of an element
tags:
  - How To
  - CSS
  - JavaScript
icon: fab fa-css3-alt
date: 2020-02-03 15:41:22
---


Sometimes, we want to mark the status of an element dynamically like from the JS.

An element's [`classList`][1] property contains the applied CSS classes. Through that we can toggle a class by using the following methods.

## [`.add()`][2] or [`.remove()`][3]

```js
const todoItem = document.querySelector('.todo-item');

if (todoItem.classList.contains('marked')) {
    todoItem.classList.remove('marked');
} else {
    todoItem.classList.add('marked');
}
```

**Tip:** You can supply an array of class values to be added or removed.

## [`.toggle()`][4]

```js
const todoItem = document.querySelector('.todo-item');

todoItem.classList.toggle('marked')
    ? console.log('Item marked!')
    : console.log('Item unmarked!');
```

Yes, it returns a `true` when adding and `false` when removing a class.

**Tip:** It is possible to turn the `toggle` into a `add` only or `remove` only function by supplying the `force` flag as a second parameter. \O/

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
[2]: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
[3]: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
[4]: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
