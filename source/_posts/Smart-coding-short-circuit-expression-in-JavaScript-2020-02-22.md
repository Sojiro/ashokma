---
title: 'Smart coding: short-circuit expression in JavaScript'
tags:
  - Smart coding
  - JS
icon: fab fa-js-square
date: 2020-02-22 17:33:31
---


Short circuit expressions are simply cute and compact.^_^

It can be used as a fail-fast mechanism like if you want to do specific actions only when a case is true.

Yes, you heard that right to simplify the `if` cases in general. Take a look at the approach below:

``` js
const isOnline = system.online();

if (isOnline) {
    const data = fetchData();
}
```

Now we can simplify this using the short-circuit expression as follows:

``` js
const data = system.online() && fetchData();
```

Isn't she a beauty! \O/

**Note:** Yes, the return value of the last expression will be assigned to the `data` .

