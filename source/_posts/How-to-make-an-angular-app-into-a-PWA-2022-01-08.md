---
title: How to make an angular app into a Progressive Web App
tags:
  - How to
  - Angular
  - PWA
icon: fab fa-angular
date: 2022-01-08 00:45:41
---


With the [angular cli][cli], it is really handy to make one's angular app into a [Progressive Web App][pwa].

## Add PWA capabilities

Just add `@angular/pwa` module to your angular app using the cli.

```sh
$ ng add @angular/pwa
```

This adds the PWA module and generates the default PWA featuers with the service-worker configured for basic assets cache. It also generates a [`manifest.webmanifest`][manifest.webmanifest] and few icons.

## Update `ngsw-config.json`

If you have more assets to be cached by the service worker to be more of a PWA, update the `ngsw-config.json` like below:

```json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "urls": [
          "https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;800&amp;display=swap",
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap",
          "https://fonts.googleapis.com/icon?family=Material+Icons"
        ],
        "files": [
          "/favicon.ico",
          "/index.html",
          "/manifest.webmanifest",
          "/*.css",
          "/*.js"
        ]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/assets/**",
          "/*.(json|svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)"
        ]
      }
    }
  ]
}
```

Here I have also added the URLs for the static CDN resources like _bootstrap.min.css_

> **Tip:** Use PWA assets generators such as [ngx-pwa-icons][ngx-pwa-icons] or [pwa-asset-generator][pwa-asset-generator] to generate icons for your PWA precisly for each devices.

[ngx-pwa-icons]: https://www.npmjs.com/package/ngx-pwa-icons
[pwa-asset-generator]: https://www.npmjs.com/package/pwa-asset-generator
[cli]: https://angular.io/cli
[pwa]: https://web.dev/progressive-web-apps/
[manifest.webmanifest]: https://developer.mozilla.org/en-US/docs/Web/Manifest
