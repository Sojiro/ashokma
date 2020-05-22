---
title: How to get the battery status of a device using JavaScript
tags:
  - How to
  - JS
icon: fab fa-js-square
date: 2020-05-22 22:40:51
---


The [BatteryManager](1) interface provides ways to get information about the system's battery charge level by interacting with [Battery Status API](2)

We can use the Battery Manager to detect

* charging state
* Battery percentage
* Time needed to charge 100%
* The remaining time until the battery is completely discharged.

``` js
let {
    getBattery
} = navigator;

if (!getBattery) { // Check whether such function exists
    console.warn("Battery Manager is not supported!");
} else {
    navigator.getBattery().then(
        ({
            level,
            charging,
            chargingTime,
            dischargingTime
        }) => {
            console.log("Percentage", level);
            console.log("IsCharging", charging);
            console.log("charging Time", chargingTime);
            console.log("DisCharging Time", dischargingTime);
        });
}

/**  Outputs:
 *
 *   Percentage 0.59             
 *   IsCharging false             
 *   charging Time Infinity (Because the device is not charging) 
 *   DisCharging Time 8280
 **/
```

If we wish to get the status on change, we can add listeners for the respective properties. There is a function to do the same. \O/

* onchargingchange
* onchargingtimechange
* ondischargingtimechange
* onlevelchange

> **Note:** This feature has been deprecated from the web standards. But it is always fun know something new, is it not? ^_^

[1]: https://developer.mozilla.org/en-US/docs/Web/API/BatteryManager

[2]: https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
