---
title: "讓 Mac 上的 Chrome 瘦身"
date: 2017-02-02T23:17:56
slug: "reduce-chrome-storage-on-mac"
excerpt: "<p>剛剛在整理電腦時，發現 chrome 居然佔用了 2GB 的空間⋯⋯ 迅速查了一下才發現原來是他把一堆舊版本的&#8230;</p>
"
feature_image: null
guid: "http://blog.wildsky.cc/?p=306"
---
![about chrome](http://blog.wildsky.cc/wp-content/uploads/2017/02/02-chrome.png)

剛剛在整理電腦時，發現 chrome 居然佔用了 2GB 的空間⋯⋯ 迅速查了一下才發現原來是他把一堆舊版本的資料全部都保留下來了。 （都存放在 `/Applications/Google Chrome.app/Contents/Versions/` 下面）

這種行為真的很詭異，所以就花了點時間看看有沒有人跟我有一樣的問題， 才知道原來是權限問題。

因為 Chrome 本身沒有刪除資料的權限，（直接就有的話也太可怕）， 所以他就只好一直堆一直堆，堆到你的硬碟空間爆掉！

也有人提問說：「那怎麼不讓他在偵測到權限問題時，跳管理員權限要求框讓使用者輸入 帳密呢？」chrome 得回答是因為這個偵測通常發生在自動更新時，但在這個 context 下， 使用者應該是不會遭遇到任何突然跳出來的對話框，更何況是要求管理員權限的框框。

那有沒有什麼解法？總不能過一段時間等他又到 2GB 的時候再來刪吧？ 解法也很簡單，只要到左上角 `chrome > 關於 chrome` 裡面看到版號的下方有個「自動 為所有使用者更新 chrome」，點下去，輸入密碼後 chrome 就有權限可以刪除那些檔案 了！

後話
==

安全和方便之間的權衡真是麻煩啊⋯⋯