---
title: How to convert value to a string in JavaScript
tags:
  - How To
  - String
  - JS
  - ES6
icon: fab fa-js-square
date: 2019-06-02 15:54:37
---


- [`toString()` method](#Using-toString-method)
- [Template String Literals](#Using-template-string-literal)
- [`JSON.stringfy()` method](#Using-JSON-stringfy-method)

The Java programmers know to call `toString()`method in order to convert any value to string. That is also the case with JavaScript.

## Using `toString()` method

```js
const balance = 910;

const notification = 'You owe me ' + balance.toString(1);

console.log(notification); // You owe me 910
```

> **Tip:** `toString()` also accepts an argument to represent the numeric values with respect to a base. Please refer the [docs][mdn-docs-tostring] to make a better use of it.

Since the `ES6` standard, we have another way as well, called template string literals.

## Using template string literal

```js
const balance = 910;

const notification = `You owe me ${balance}!`;

console.log(notification); // You owe me 910!
```

Looks good is it not ^\_^

> **Tip:** Prefer template strings whenever constructing strings with values or object references.

## Using `JSON.stringfy()` method

```js
const balance = 910;

const notification = 'You owe me ' + JSON.stringify(balance);

console.log(notification); // You owe me 910
```

This really comes handy for objects in order to print the object structure in string notation. `JSON.stringfy` accepts two more arguments called `replacer` and `space` respectively.

> **Tip:** Prefer to supply `space` argument when stringfying objects. Refer [docs][mdn-docs-stringfy] for more.

## Using `String()` constructor

```js
const balance = 910;

const notification = 'You owe me ' + new String(balance);

console.log(notification); // You owe me 910
```

There is this `constructor` option for us to be OOPs.

> **Tip:** Use `String()` without the `new` keyword to get string literal instead. We can verify the same with `typeof` operator as well.

```js
const stringObject = new String('AshKeys');

console.log(typeof stringObject); // object

const stringLiteral = String('AshKeys');

console.log(typeof stringLiteral); // string

console.log(stringObject == stringLiteral); // true
console.log(stringObject === stringLiteral); // false
```

As you can see, `stringObject` is value equals with `stringLiteral`, but do not string equals it.

[mdn-docs-tostring]:[//developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number/tostring#parameters]

[mdn-docs-stringfy]:[//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify]
