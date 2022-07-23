---
title: 初步理解 Service Worker
date: 2018-01-07T16:10:52.000Z
slug: service-worker-intro
excerpt: '<p>Service Wroker（後面簡稱 SW）可以看作是介於瀏覽器、網路、和 Web app 之間的 prox&#8230;</p> '
feature_image: null
guid: 2018-01-07-16-10-52_service-worker-intro
---
Service Wroker（後面簡稱 SW）可以看作是介於瀏覽器、網路、和 Web app 之間的 proxy servers。 說穿了就是可以**寫程式來處理 request 和 response 的一種介面**，讓開發者可以藉以增進 offline 時網站的體驗，或是基於網路是否可用來自行決定 web app 應該做出怎樣的行為。其他還有一些**推送通知**或是**背景同步**的功能，標準正在火熱制定中。（寫這篇文章時是 2018/1/7，上次 SPEC 的更新時間是 2017/12/22，應該是去過聖誕節＆跨年了，真好 XD）

以前的人可能會用 [AppCache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) 來做到上述的功能，但他會對你要做的事有很多很多的預期，而如果你的 web app 沒有照著做的話，你就會死得很難看。可以看看這篇： [https://alistapart.com/article/application-cache-is-a-douchebag](https://alistapart.com/article/application-cache-is-a-douchebag)。SW 可以解決 AppCache 的問題，你會擁有完全的掌控權，而當這句出現時，就意味著你要寫更多的 Code，用著更複雜的 syntax。人只要活著，一切就都是妥協。

> 人只要活著，一切就都是妥協。

好啦，不要這麼悲觀。

Native app 有個很重大的優勢就是可以有離線體驗，而使用 SW 你也可以讓 web app 達成這個夢想。順帶一提，這個叫做 [Offline First](http://offlinefirst.org/)。許多人選擇 native app 的重大理由之一就是因為這一點，現在 SW 出來應該可以解決這個問題了。（編著：但其他像是效能問題還是沒解決XD）

SW 的用途整理
--------

*   \[主要\] **讓網站在沒網路時可用**
*   可能的其他用法
    *   背景資料同步
    *   回應「從其他 origin 來的」 request
    *   統一管理那些計算成本很貴的資料，像是**地理資訊**或**陀螺儀資訊**，好讓多個頁面能一起共用這些資訊
    *   效能提升，預先下載使用者可能需要的資源，像是等等會顯示的圖片之類的
    *   ⋯⋯還有一些其他的黑魔法，會這樣形容是因為我還沒研究到要怎麼實做
        *   Client Side 編譯（所以會看到 rust-lang 也有 SW 應該是這個原因）
        *   背景服務的 Hook
        *   基於特定網址 pattern 的自定義 templating
    *   其他就等 SPEC 出來再說

額外注意
----

*   SW 沒有 DOM 的存取權限
*   完全地 async，非常地 event-driven
*   會狂用 promise，建議先學 promise 再學 SW
*   SW 一定要在 https 之下才會運作，唯一的例外是 localhost。
    *   (localhost is considered a secure origin by browsers as well.)

SW 的運作順序
--------

1.  Download
2.  Install
3.  Activate
4.  之後查看有無更新
5.  有就先下載，但先不 Activate （worker in waiting）
6.  等到沒有待處理的頁面後，就 Activate（active worker）

開發者要做的事
-------

1.  註冊 SW script
2.  註冊成功後，SW script 就會試著自己安裝自己
3.  安裝完成後，會觸發 `install` 事件，開發者可以利用（開 IndexedDB 然後 cache 資源之類的）
    *   聽說有點像 native app 和 firefox OS app 安裝後的味道，但我沒聞過，不知道。
4.  安裝完後就等著被啟用（active），老樣子，這時也會觸發 `active` 事件，通常是用來清理前一個版本的 script 的殘餘。
5.  之後開的頁面就會受到 SW script 掌控，可以用的事件有 `fetch`、`sync`、`push`

程式碼部分就先不提，這篇就簡略地介紹 SW 的功用和運作原理就好。

看看自己瀏覽器上的 SW
------------

如果你是 Firefox，可以直接在網址列輸入 `about:debugging`，左側頁籤選擇 workers， 就會列出許多網站的 SW 囉！聽起來是不是毛毛的呢？XD

如果你是 chrome，就前往 `chrome://inspect/#service-workers`，不要再用 chrome 了， 來用用 firefox 吧！（硬要推廣）

參考
--

*   [https://w3c.github.io/ServiceWorker/](https://w3c.github.io/ServiceWorker/)
*   [https://developer.mozilla.org/en-US/docs/Web/API/Service\_Worker\_API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
*   [https://developer.mozilla.org/en-US/docs/Web/API/Service\_Worker\_API/Using\_Service\_Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
