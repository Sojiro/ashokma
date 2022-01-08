const version = '5';
const cacheName = `ashokma-com-${version}`;
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache
        .addAll([
          `/`,
          `/index.html`,
          '/ashkeys.png',
          '/me/index/avatar.jpeg',
          '/css/style.css',
          'http://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
          'http://use.fontawesome.com/releases/v5.7.2/css/all.css',
          'http://fonts.googleapis.com/css?family=Cookie',
          'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-solid-900.woff2',
          'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-regular-400.woff2',
          'http://use.fontawesome.com/releases/v5.7.2/webfonts/fa-brands-400.woff2',
          'http://fonts.gstatic.com/s/cookie/v12/syky-y18lb0tSbf9kgqS.woff2',
        ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
