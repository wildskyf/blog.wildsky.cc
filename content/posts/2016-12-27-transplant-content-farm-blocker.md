---
title: 移植「封鎖內容農場」套件
date: 2016-12-27T00:00:00+08:00
categories:
  - Web
tags:
  - Add-on
---

![content farm screenshot](//wildsky.cc/blog-images/content_farm_blocker.png)


最近一直在玩 Firefox 的擴充套件，
不過剛開始用來上手的專案都跟新分頁替換有關，
所以基本上架構大同小異。

前兩天在 chrome 上找到一個叫做「封鎖內容農場」的套件，
稍微找了一下就找到他的 GitHub repo，
赫然發現 issue 裡面有人想要 firefox 的版本，
到 AMO 看了一下以後，真的沒有這類的套件。
剛好最近在玩火狐的 WebExtension 套件，趁這個機會來練習，
順便做點功德！

（這邊開始簡略地講程式相關的事，不想看可以直接跳最後一段XD）

移植的過程中主要處理幾件事情：require, chrome 變成 browser, 處理警告畫面的流程。

### require

簡單地說就是，chrome 下可以像 node 專案那樣 `var a require('package');`
但 firefox 的 WebExtension 架構卻沒辦法做這種事，
所以我直接用 `"background" : { "scripts": [] }` 把他們通通載進來，
只是不確定是 sync 還是 async，總之現階段可以用就是了。


### chrome 變成 browser

其實不改的話好像還是可以跑，但就是想要把它改成正常的樣子（？）
最近在看「JavaScript 的優良部份」，書中提到這樣的一句話：

> 偶爾很有用，偶爾會出錯的功能才是最可怕的！

（有點小改但語意不變啦）所以還是要自律一下啊。


### 處理警告畫面的流程

其實我也不太確定原作者在 tabs.onUpdate 時才去 handle(tab) 是為什麼，
感覺直接在 beforeRequest 做掉應該就可以了，在 firefox 上用原作者的方法反而不會觸發 onUpdate
所以我就直接改成在 beforeRequest 判斷是內容農場後直接把 request 處理掉了。


---


## 功能

這個套件的宗旨其實很簡單，
就是希望大家不要再莫名其妙被驚呆了，
一直看到這一類的標題看得智商跟著一直降，
雖然可以裝 ublock 把廣告擋掉，但送流量給他就是讓人感覺不爽，
其他自訂黑名單白名單之類的功能面我就不說了，可以自己去裝裝看玩玩看

* 原始碼在這裡： <https://github.com/wildskyf/ihatecontentfarm>
* AMO 在這裡（審核中）： <https://addons.mozilla.org/zh-TW/firefox/addon/cfblocker/>
* 原專案在這裡： <https://github.com/benlau/ihatecontentfarms>

還有不少東西可以調整，對這個套件有興趣的人歡迎開 issue 或是在下面留言，
不知道我上面在說什麼的人，如果是在用 Firefox 的話也可以幫忙測試抓抓 bug 啊

下一個版本大概會修一下版面，順便 responsive 一下，支援一下 firefox on android。
