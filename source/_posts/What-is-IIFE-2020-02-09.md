---
title: What is IIFE
tags:
  - What is
  - IIFE
  - JavaScript
icon: fab fa-js-square
date: 2020-02-09 14:11:21
---


IIFE stands for **Immediately Invoked Function Expression**. An anoymouns function that will be invoked soon after its declaration.

``` js
(() => {
    console.log('I will be invoked right away!');
})(); // I will be invoked right away!
```

Though it looks weird or beautiful (to me ^_^), there are great benefits that come along with this IIFE approach.

## Modularity

We can group our components or modules in a IIFE so that namespace conflicts reduced almost to none.

## Scoping

We can declare our local functions and variables without worrying about polluting `global` scope or namespace conflicts.

``` js
(() => {
    var personal = 'I am an Introvert!';
})();

console.log(personal); // ReferenceError: personal is not defined
```

## Extras:

 - Typescript transpiles into [IIFE javascript functions][1].
 - For AngularJS developers, this is one of most streesed [guidelines][2].

[1]: http://www.typescriptlang.org/play/?noImplicitAny=false&ssl=3&ssc=2&pln=1&pc=1#code/KYOwrgtgBAYgNgQwOZQN4FgBQWC+Q
 [2]: //github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#iife

