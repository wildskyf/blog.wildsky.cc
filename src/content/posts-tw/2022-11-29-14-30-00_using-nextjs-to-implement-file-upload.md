---
title: "用 Nextjs 實作檔案上傳功能時要注意的事"
date: 2022-11-29T14:30:00
slug: "using-nextjs-to-implement-file-upload"
excerpt: "最近在玩 next.js 時，發現他有提供製作 api 的方式。但在實作檔案上傳功
能時，遇到了一些問題。"
feature_image: nextjs-cover-photo.png
guid: "using-nextjs-to-implement-file-upload"
---

最近在玩 next.js 時，發現他有提供製作 api 的方式。

平常 `/pages/` 下是用來處理 routing，對應的檔案就會產生出對應的 route，
舉例來說如果今天在 `/pages/about.js` 裡面實作並 default export 一個 page
component，那在 dev 時就對相對應地在 `localhost:3000/about` 中可以看到實作的內容。

如果是深一點的 path 也一樣，`/pages/post/test.js` 就會在 `localhost:
3000/post/test` 中看到頁面。

最近發現 `/pages/api/` 會是一個特殊的資料夾，在其中的不會是頁面，
next.js 在 [這份文件](https://nextjs.org/docs/api-routes/introduction) 中規定說，
api 這個資料夾下之下要寫成 handler，吃兩個 params：跟 express route 一樣的 req 和 res，剩下的就
是實作後端邏輯了，可以去 access db 後回傳前端需要的 json，還可以讓這個 endpoint 提供上
傳檔案的功能。

我這次在玩上傳功能時剛好撞到一個沒想清楚而產生的雷，便想寫這篇文章來記錄一下。

在上傳檔案時，我們自然需要指定一個資料夾，讓上傳來的檔案有地方放。由於我後端接
收的這個圖片檔案也需要讓前端取用，我就很自然地把他放去 next.js 中，用來放圖片
檔的 `/public` 資料夾。

這個功能寫好後，我就很自然地 build & deploy。結果跑完後上 production 才發現，
奇怪，怎麼上傳的東西無法顯示。明明上 server 看檔案的確都有成功上傳，且後端在讀
檔案的那支 API 也沒出什麼奇怪的 LOG，而且 dev 上測試是一切正常的。

這個 bug 我找了一個下午都沒什麼頭緒，覺得真的是靈異事件，後來找煩了就去休息。

隔天醒來後，突然靈光一現覺得 next.js 應該是在 build 時去看 `/public` 資料夾裡面有什麼，然
後在 build 時做一些前處理後才把裡面的東西丟去該在的地方。

這個靈光乍現來得很是時候，快速翻了一下文件，
發現的確在 [這一頁](https://nextjs.org/docs/basic-features/static-file-serving) 最下面有提到：

```
Note: Only assets that are in the public
directory at build time will be served by Next.js.
Files added at runtime won't be available.
We recommend using a third party service
like AWS S3 for persistent file storage.
```

知道了原因之後，解法也就隨之而生了。
