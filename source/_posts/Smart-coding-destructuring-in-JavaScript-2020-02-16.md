---
title: 'Smart coding: destructuring in JavaScript'
tags:
  - Smart coding
  - JS

icon: fab fa-js-square
date: 2020-02-16 22:37:55
---

[Destructuring assignment][1] is the best one that came with latest JS features.

We can make our code look smart. Just take a look at the following:

``` js
const Person = {
    name: 'AshKeys',
    blog: 'ashokma.com'
}

const {
    name,
    blog
} = Person;

console.log( `${name} - ${blog}` );
```

Isn't this lovely! \O/

We can do the same for arrays as well.

``` js
const [max, min] = [80, 20];

console.log( `Min - ${min}; Max - ${max}` );
```

**Tip:** We can swap values using the same. `[a, b] = [b, a]` 

[1]: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

