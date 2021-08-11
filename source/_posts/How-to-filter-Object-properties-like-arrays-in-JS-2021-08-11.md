---
title: How to filter Object properties like arrays in JS
tags:
  - How to
  - Arrays
  - ES6
  - JS
icon: fab fa-js-square
date: 2021-08-11 18:33:31
---


Recently I had to find a compact solution to filter out a set of properties from an array of objects.

In short, the users select which properties they want to see in order to customize the propiew.

In arrays, it is pretty simple by using the [`Array.filter`][1] but for objects we need a receipe such as the below one.

```js
const persons = [
  {
    name: "AshKeys",
    occupation: "Full Stack Developer",
    blog: "ashokma.com",
  },
  {
    name: "Sojiro",
    occupation: "Web Developer",
    blog: "ashokma.com",
  },
];

const filters = ["name", "occupation"];

console.table(persons);
/*
┌─────────┬───────────┬───────────────────────────┬───────────────┐
│ (index) │   name    │        occupation         │     blog      │
├─────────┼───────────┼───────────────────────────┼───────────────┤
│    0    │ 'AshKeys' │ 'Full Stack Developer' │ 'ashokma.com' │
│    1    │ 'Sojiro'  │    'Web Developer'     │ 'ashokma.com' │
└─────────┴───────────┴───────────────────────────┴───────────────┘
 */

const filteredPersons = persons.map((p) =>
  Object.keys(p)
    .filter((prop) => filters.includes(prop))
    .reduce((acc, prop) => ({ ...acc, [prop]: p[prop] }), {})
);

console.log(filteredPersons);
/*
┌─────────┬───────────┬───────────────────────────┐
│ (index) │   name    │        occupation         │
├─────────┼───────────┼───────────────────────────┤
│    0    │ 'AshKeys' │ 'Full Stack Developer' │
│    1    │ 'Sojiro'  │    'Web Developer'     │
└─────────┴───────────┴───────────────────────────┘
*/
```

> **Challenge:** Try to achieve the same by iterating the `filters` array.

[1]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
