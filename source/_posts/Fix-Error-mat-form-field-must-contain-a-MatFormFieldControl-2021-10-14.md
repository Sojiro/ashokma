---
title: 'Fix: Error : mat-form-field must contain a MatFormFieldControl'
tags:
  - Fix
  - Error
  - Angular
  - Material
  - MatFormFieldControl
icon: fab fa-angular
date: 2021-10-14 10:19:37
---


## Fix for Error : mat-form-field must contain a MatFormFieldControl

I had this issue. I imported `MatFormFieldModule` at my material module, but forgot to add `MatInputModule` to the imports array:

```ts
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
```

> **Tip:** Always keep a separate module that contains all the material things you use.
