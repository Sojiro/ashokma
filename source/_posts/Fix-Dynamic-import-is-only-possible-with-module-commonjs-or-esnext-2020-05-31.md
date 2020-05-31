---
title: 'Fix: Dynamic import is only possible with --module commonjs or esnext'
tags:
  - Angular
  - Typescript
  - NodeJS
  - Fix
icon: fab fa-angular
date: 2020-05-31 22:04:59
---


Recently, I am trying to introduce dynamic import of modules in our Angular application. So that, we can have reduced bundle size for a better performance of course.

We are not there yet but we do have an action item though. ^\_^

During the tryouts I faced the following error saying:

**error TS1323: Dynamic import is only supported when '--module' flag is 'commonjs' or 'esNext'.**

As the error suggests we have to specify or change our module type in the following files as specified.

-   `tsconfig.json`
-   `tsconfig.app.json`
-   `tsconfig-aot.json`

```json
{
    "compileOnSave": false,
    "compilerOptions": {
        "module": "esnext" // add this line
    }
}
```

> **Note:** Apply the changes in the files those matter to your case.

For me it was the `tsconfig-aot.json` as we build our app using `--aot` flag. \O/
