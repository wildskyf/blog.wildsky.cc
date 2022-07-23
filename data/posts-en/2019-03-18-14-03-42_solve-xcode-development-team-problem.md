---
title: >-
  Signing for &#8220;name&#8221; requires a development team. Select a
  development team in the project editor. (in target &#8216;name&#8217;)
date: 2019-03-18T14:03:42.000Z
slug: solve-xcode-development-team-problem
excerpt: '<p>When developing iOS app, sometimes we might face this d&#8230;</p> '
feature_image: 2019-03-18-14.01.10-e1553233406372.png
guid: 2019-03-18-14-03-42_solve-xcode-development-team-problem
---
When developing iOS app, sometimes we might face this development team related problem:

    Signing for "name" requires a development team. Select a development team in the project editor. (in target 'name')

This article is going to help you solve that problem.

How to
------

### Step 1. Setup iOS Development Team

<figcaption>Click <code>Xcode > Preferences...</code></figcaption>

![](/images/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7-2019-03-18-12.02.42-e1553233437451.png)

<figcaption>Click <code>Accounts</code>tab, and then add / edit Team</figcaption>
![](/images/螢幕快照-2019-03-18-12.04.33.png)


### Step 2. edit Project team setting

<figcaption>Click the project folder > Build Settings, find the Signing category and modify it.</figcaption>

![](/images/螢幕快照-2019-03-18-12.15.52.png)

<h3>Step 3. edit Target team setting</h3>

<figcaption>Remember to set development teams below both Project and Targets</figcaption>
![](/images/螢幕快照-2019-03-18-12.17.10.png)

Remember to set both **Project** and **Targets**

![If you can't find the left panel, the toggle icon is at left-top.](/images/Mar-18-2019-13-44-55-e1553233413690.gif)

If you can’t find the left panel, the toggle icon is at left-top.

Why I write this Article
------------------------

In fact, the StackOverflow Answer did solve my problem, but I just couldn’t find where the toggle icon is. Anyway, I hope this article could help you. Happy develop!

References:
-----------

*   [https://stackoverflow.com/questions/43145267/xcode-how-to-config-a-project-for-team-working](https://stackoverflow.com/questions/43145267/xcode-how-to-config-a-project-for-team-working)
*   [https://stackoverflow.com/questions/39524148/xcode-error-code-signing-is-required-for-product-type-application-in-sdk-ios](https://stackoverflow.com/questions/39524148/xcode-error-code-signing-is-required-for-product-type-application-in-sdk-ios)
*   The example project in the screenshots: [ios-ptt.ai](https://github.com/ailabstw/ios-ptt.ai)
*   Maybe you will like my other experiences about [sweeping landmine](http://blog.wildsky.cc/tags/sweep-landmine/).
