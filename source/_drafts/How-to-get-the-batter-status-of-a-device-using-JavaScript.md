---
title: How to get the batter status of a device using JavaScript
tags: [How to, JS]
icon: fab fa-js-square
---

The BatteryManager interface provides ways to get information about the system's battery charge level.

We can use the Battery Manager to detect

- charging state
- Battery percentage
- Time needed to charge 100%
- The remaining time until the battery is completely discharged.

```js
let isBatterySupported = 'getBattery' in navigator;
if (!isBatterySupported) {
    console.log("Battery not supported");
} else {
    let batteryPromise = navigator.getBattery();
    batteryPromise.then(batteryCallback);

    function batteryCallback(batteryObject) {
        printBatteryStatus(batteryObject);
    }
    function printBatteryStatus(batteryObject) {
        console.log("IsCharging", batteryObject.charging);
        console.log("Percentage", batteryObject.level);

        console.log("charging Time", batteryObject.chargingTime);
        console.log("DisCharging Time", batteryObject.dischargingTime);
    }
}
```