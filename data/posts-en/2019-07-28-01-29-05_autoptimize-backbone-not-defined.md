---
title: "Backbone and _ is not defined under notes-common-v2"
date: 2019-07-28T01:29:05
slug: "autoptimize-backbone-not-defined"
excerpt: "<p>When enabling Autoptimize for wordpress site, there mig&#8230;</p>
"
feature_image: null
guid: "http://blog.wildsky.cc/?p=1184"
---
When enabling Autoptimize for wordpress site, there might be some error messages in console.

![](/images/Screen-Shot-2019-07-28-at-01.19.27-1024x445.png.webp)

Although this just appear when user is logged in, we might be unhappy when seeing this.

To solve this problem, we could exclude Backbone.js and underscore.js from autoptimize.

We could add `, backbone.min.js, underscore.min.js` into `Exclude scripts from Autoptimize`. It is under `Admin Sidenav > Setting > Autoptimize > JS, CSS & HTML > JavaScript Options`.

![](/images/Screen-Shot-2019-07-28-at-01.20.17.png.webp)

Admin Sidenav > Setting > Autoptimize

![](/images/Screen-Shot-2019-07-28-at-01.20.39-1024x828.png.webp)

And that’s it! Enjoy your clean console. 🙂

Reference
---------

*   [Question ‘Various JavaScript console errors’ in WP support forum](https://wordpress.org/support/topic/various-javascript-console-errors/)
