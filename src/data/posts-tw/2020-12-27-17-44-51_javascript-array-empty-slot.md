---
title: "JavaScript Array 中，還有一種情況叫 Empty Slot"
date: 2020-12-27T17:44:51
slug: "javascript-array-empty-slot"
excerpt: "<p>原討論串在這邊： https://twitter.com/wildskyf/status/1234412013&#8230;</p>
"
feature_image: ESHBp9iUEAAvZyc.png
guid: "https://blog.wildsky.cc/?p=1676"
---
原討論串在這邊： [https://twitter.com/wildskyf/status/1234412013796741120](https://twitter.com/wildskyf/status/1234412013796741120)

簡單說，`new Array(3)` 出來的會是 `[<Empty Slot>, <Empty Slot>, <Empty Slot>]` 而非 `[undefined, undefined, undefined]`。

但 Mac 版的火狐有 bug：[https://bugzilla.mozilla.org/show\_bug.cgi?id=1580727](https://bugzilla.mozilla.org/show_bug.cgi?id=1580727)，會把 <Empty Slot> 顯示成 undefined，導致我誤會了。