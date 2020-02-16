---
title: 'Smart coding: selector operator in JS'
tags:

  + JS
  + Smart coding

icon: fab fa-js-square
date: 2020-02-07 23:10:38
---

## What is Smart coding?

Smart coding is coding the logic in precise, consice and readable at the sametime maintainable manner.

I like to stree the above meaning in all the upcoming post under this series (Yes, you can expect more coming up) ^_^.

## Selector Operator( `||` )

Yes, I like calling it **selector operator** as per its usuage.

``` js
function greet(name) {
    name = name || 'guest';
    console.log( `Hello ${name}` );
}

greet('Ashkeys'); // Hello Ashkeys
```

We can achieve the same using the following approach too.

``` js
function greet(name = 'guest') {
    console.log( `Hello ${name}` );
}

greet('Ashkeys'); // Hello Ashkeys
```

The problem with the default argument value approach is that it will fail for empty string or null value.

``` js
greet(null); // Hello null
greet(''); // Hello 
```

So, prefer the selector operator over the default argument value assignment.

> **Tip:** We can also call a function or evaluate an expression to determine the default value like `name = name || determineDefaultName();` \O/

