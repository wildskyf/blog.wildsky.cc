---
title: 'BLOG 完全更新至 Astro'
date: 2025-09-05T13:45:37+08:00
slug: 'update-blog-framework-to-astro'
excerpt: ''
feature_image: ''
guid: 'update-blog-framework-to-astro'
---

最近越來越厭煩一直滑 Instagram 和 Threads，所以想要多花點時間在「重要的事情」上。

我想目前的生活中，有幾件對我而言是重要的事。

- 財務：為了想要有更舒坦的生活，且為了避免未來可能的風險，我想要多花點時間在財務這一塊，包含但不限於：多接點案子 Sharpen my skill、建立屬於自己的產品。
- 親密關係：和現在的伴侶生活很快樂，不浪費時間在社群上後，也會想多花點時間和伴侶相處。我覺得心理健康也是一個很重要的基礎。
- 體態健康：持續運動一年多了，有些長進，但離理想還有不少距離。基本上是飲食、運動、睡眠，在這件事上，目前應該會先專注這三點。

那財務這件事中，有個重要的該做的事情就是建立 reputation，所以就想花點時間調整一下部落格的東西。XD

之前斷斷續續地把部落格一步步置換掉，
從以前的 Wordpress，
換去 jekyll，
再換去 Middleman，
然後又搬回 Wordpress，
後來還是想自己搞樣式，
所以利用 Wordpress API 把 Wordpress 當後端，然後前端改用 Next.js 開發，
後來還是想要用 Markdown 自行處理內容管理，所以再到現在的 Astro。

但因為當時是快速搬移，所以留了不少 React 的債在 Astro 裡面。
花了些時間把他們一步步拔掉，完成是完成了，但目前的整個專案結構似乎不太符合 Astro 的習慣，
還留了一些當時想玩的 unocss 的痕跡⋯⋯

總之！現在是時候來整理一下XD

---

首先先已經拆到剩下幾個 Icon 的 unocss 給完全拔掉，讓這個部落格完全基於 TailwindCSS 和 Daisyui。
