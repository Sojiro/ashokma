---
title: How to add cache to your site to make it available offline
tags:
  - How to
  - Blog
  - CacheAPI
icon: fas fa-blog
date: 2022-01-08 20:45:10
---


It is really simple to add some [cache][cache] to your site in order to make it available offline.

> It should be a [Jamstack][jamstack] or a simple static site that solely relies on some static files alone.

## Introduce [Service Worker][sw]

If the browser supports it, register our `sw.js` first.

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', { scope: '/' })
    .then(function (registration) {
      console.log('Service Worker Registered');
    });
  navigator.serviceWorker.ready.then(function (registration) {
    console.log('Service Worker Ready');
  });
}
```

By default it works under the loaded context (**'/' - here**) but we can also specify the same using the config object while registering `{ scope: '/' }`.

## Write `sw.js` with caching options

```js
const version = '1';
const cacheName = `site-cache-${version}`;
// Opens the cache on SW install event.
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      // Add all of static needed to run the site.
      return (
        cache
          .addAll([
            'http://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
            'http://use.fontawesome.com/releases/v5.7.2/css/all.css',
            'http://fonts.googleapis.com/css?family=Cookie',
            'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-solid-900.woff2',
            'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-regular-400.woff2',
            'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-brands-400.woff2',
            'http://fonts.gstatic.com/s/cookie/v12/syky-y18lb0tSbf9kgqS.woff2',
          ])
          // Just update it right away.
          .then(() => self.skipWaiting())
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  // Claim for all the clients to start using it right away.
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Intercept all fetch and return with cache when available.
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
```

> **Tip:** You can also add your UI frame libs to the cache as well.

[cache]: https://web.dev/learn/pwa/caching/#downloading-and-storing-assets
[sw]: https://web.dev/learn/pwa/service-workers/
[jamstack]: https://jamstack.org/
