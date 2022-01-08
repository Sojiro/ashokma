---
title: >-
  PWA Fix: Uncaught (in promise) TypeError: Failed to execute 'Cache' on
  'addAll': Request failed
tags:
  - Fix
  - PWA
  - CacheAPI
  - Blog
icon: fas fa-blog
date: 2022-01-08 20:53:38
---


I have recently added [Service Worker][sw] for [this blog][sw-blog] in order to make use of the [PWA features][pwa] and offline mode.

## Fix

If one of the urls mentioned below returns _404_ error, then you get **Fix: Uncaught (in promise) TypeError: Failed to execute 'Cache' on 'addAll': Request failed** error.

```js
cache.addAll([
  'http://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
  'http://use.fontawesome.com/releases/v5.7.2/css/all.css',
  'http://fonts.googleapis.com/css?family=Cookie',
  'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-solid-900.woff2',
  'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-regular-400.woff2',
  'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-brands-400.woff2',
  'http://fonts.gstatic.com/s/cookie/v12/syky-y18lb0tSbf9kgqS.woff2',
]);
```

> So make sure all of those resources are available properly. Sometimes a typo could mess it up.

[sw]: https://web.dev/learn/pwa/service-workers/
[sw-blog]: /2022/01/08/How-to-add-cache-to-your-site-to-make-it-available-offline/
[pwa]: https://web.dev/learn/pwa
