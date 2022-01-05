---
title: 'Fix: scully not discovering new routes in Angular'
tags:
  - Fix
  - Angular
  - Scully
  - Jamstack
icon: fab fa-angular
date: 2022-01-05 20:39:19
---


You might have noticed that I have recently built a website for my freelance company [FullStacker][fullstacker].

This is the first time I went with [Jamstack][jamstack] for building something anew. Since my niche is [Angular][angular], I searched for Angular Jamstack and found [Scully][scully].

To my surprise, I am amazed by the Jamstack benefits in brings to my website and making it a PWA was also handy. More about it later.

## Fix

I was keep getting the below msg during scully build.

> Using stored unhandled routes!.
> To discover new routes in the angular app use "npm run scully -- --scanRoutes"

I did not realize the problem until it was breaking my PWA apps shortcuts. (Should always read warns! >\_<)

There is a bug above when running the suggested command for NodeJS 16+. It should be as below:

```sh
$ npm run scully --scanRoutes
```

Because the `--` marks the end of the NodeJS args. O_o

[fullstacker]: "https://fullstacker.nl/"
[jamstack]: "https://jamstack.org/"
[angular]: "https://angular.io/"
[scully]: "https://scully.io/"
