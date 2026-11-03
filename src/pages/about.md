---
layout: '@/layouts/article.astro'
title: 關於 Wildsky
description: 認識 Wildsky（范耿誌）：在台灣工作的軟體工程師，關注 AI agent、知識系統、self-hosting 與能長期運作的網路產品。
feature_image: ''
---

你好，我是范耿誌（Rance），在網路上多半使用 **Wildsky** 這個名字。我是一名在台灣工作的軟體工程師，目前任職於 [Taiwan AI Labs](https://ailabs.tw/ 'Taiwan AI Labs 官網')。

我喜歡把模糊的問題整理成能長期運作的系統。工作橫跨 Web 前後端、產品介面與系統整合；近年特別關注 AI agent、知識系統、self-hosted infrastructure，以及如何讓軟體在真實工作流程裡可靠地運作。過去參與過基因分析與報告、知識庫與 agent builder、能源分析平台等產品。

工作之外，我長期參與開源與獨立製作：曾是 [Mozilla 台灣社群](https://moztw.org) 志工，也做過 Firefox 擴充套件、公共議題網站與各式 Web 專案。這個部落格從 2014 年開始，記錄我對技術、工作、生活與網路文化的理解；我也持續維護自己的 homelab 與個人知識系統。

想進一步認識我的工作，可以看看：

- [經歷與作品](/experiences)
- [合作與網站開發](/freelancer)
- [文章封存](/archive)

如果你想一起工作、討論問題，或只是打聲招呼，歡迎寄信到 [poppin.wildsky@gmail.com](mailto:poppin.wildsky@gmail.com)。

## 時間軸

- **現在**：部署在 Cloudflare Pages
- **2026/11/2**：重新從參考圖取色，換成現在這套石墨藍的深海
- **2026/8/16**：視覺系統改寫為「覆潮之下」
- **2026/6**：加入即時的 GoToSocial 短文動態；RSS 改為輸出全文
- **2025/9**：加入亮色／暗色主題切換
- **2025/7**：改用 Astro 內建的多語系功能
- **2024/4/30**：從 Next.js 改用 Astro
- **2024/3**：從 Netlify 搬到 Vercel
- **2021/4**：部署到 Netlify
- **2021/3**：用 Next.js 重寫，開始提供中英文版
- **2018/11**：用推文分享按鈕當作留言功能
- **2017/11**：從 Middleman 改用 Hugo
- **2016/1**：從 WordPress 搬到 Middleman 靜態網站，部署在 surge，網址為 blog.wildsky.cc
- **2014/4/26**：在 WordPress 架起部落格
- **2014/1/8**：開始撰寫文章

## 關於這個部落格的設計

這個部落格現在的主題是「深海」，靈感主要來自《明日方舟》深海獵人那一系列的美術，特別是「覆潮之下（Under Tides）」和「愚人號（Stultifera Navis）」的主視覺跟劇情 CG。

不過網站的設計本身沒有直接拿官方的圖來用，我做的事比較像是把它拆開來看：顏色是什麼、光從哪裡來、紅色都用在哪些地方，再慢慢翻成網頁上的配色跟動態。

### 色彩

一開始我以為那片海是青綠色的，後來用程式（k-means 分群）實際從參考圖取色，才發現它其實是**偏藍的石墨色**，飽和度大概只有 20%。之前的版本就是綠得太飽和，看起來有點俗俗的 XD

畫面真正的主角其實是銀白色，彩色都只出現在很小的地方：

| <span class="sr-only">色塊</span> | 色碼 | 名字 | 用在哪裡 |
|---|---|---|---|
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#0b0e11;border:1px solid #888;vertical-align:middle"></span> | `#0b0e11` | 深淵 | 頁面最深處 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#14191f;border:1px solid #888;vertical-align:middle"></span> | `#14191f` | 石墨藍 | 主背景 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#28343e;border:1px solid #888;vertical-align:middle"></span> | `#28343e` | 水面下的光 | 頁首附近的水色 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#e6e8e9;border:1px solid #888;vertical-align:middle"></span> | `#e6e8e9` | 銀白 | 主文字，取自獵人的銀髮 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#7eb5ac;border:1px solid #888;vertical-align:middle"></span> | `#7eb5ac` | 潮汐青 | 連結、閱讀進度；取自 [Under Tides 的標題字](#ref-under-tides-music) |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#b3262f;border:1px solid #888;vertical-align:middle"></span> | `#b3262f` | 獵人紅 | 只用在標誌、引言線與「NEW」，對應畫面裡的[紅瞳與血跡](#ref-cg-gladiia-retal) |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#d9c89d;border:1px solid #888;vertical-align:middle"></span> | `#d9c89d` | 燈火金 | 小標題編號與反白選取；取自[愚人號船上的燈光](#ref-stultifera) |

### 視覺語彙

整個網站可以想成一道水柱，越往下讀，就沉得越深。

- 頁首有從水面照下來的光柱，光裡面飄著一點微塵。
- 背景會跟著捲動慢慢變暗。文章頁右邊那條深度計，就是把閱讀進度換算成水深（數字是句末助詞，無意 XD）。
- 淺的地方幾乎看不到什麼生物，讀得越深，螢光跟水母就越亮。遠處偶爾會有魚群經過，讀到後半段，還會有一個很大的影子從遠方游過去。
- 紅色我刻意用得很少，只留給標誌、引言線跟「NEW」。參考圖裡也是這樣，紅色通常只出現在眼睛跟血跡上。
- 首頁的 W 是用帶缺口的筆畫畫的，像兩座並排的尖塔；標語下面那條會自己畫出來的線，是海流。
- 內文用襯線字，日期、分類這些資訊用等寬字，標誌跟小標則用字距拉很開的古典大寫。文學跟工程排在一起，剛好也是這個部落格在寫的東西。

### 字型

- 內文：[EB Garamond](https://fonts.google.com/specimen/EB+Garamond)、[Noto Serif TC](https://fonts.google.com/noto/specimen/Noto+Serif+TC)
- 標誌與小標：[Cinzel](https://fonts.google.com/specimen/Cinzel)
- 日期與資訊列：[Space Mono](https://fonts.google.com/specimen/Space+Mono)

以上都是 SIL Open Font License。

### 參考來源

- [明日方舟官方網站](https://ak.hypergryph.com/)
- [塞壬唱片 Monster Siren Records](https://monster-siren.hypergryph.com/)：Under Tides 原聲帶
- PRTS：[覆潮之下](https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B)、[愚人号](https://prts.wiki/w/%E6%84%9A%E4%BA%BA%E5%8F%B7)
- Arknights Wiki：[Under Tides](https://arknights.fandom.com/wiki/Under_Tides)、[Stultifera Navis](https://arknights.fandom.com/wiki/Stultifera_Navis)

### 參考圖

下面是我主要參考的幾張圖，點圖片會連到 [PRTS](https://prts.wiki/) 上對應的活動頁：

<div class="ds-ref-grid">
<figure id="ref-under-tides-music">
<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B"><img src="/images/about-design/under-tides-music-960.webp" srcset="/images/about-design/under-tides-music-480.webp 480w, /images/about-design/under-tides-music-960.webp 960w" sizes="(max-width: 767px) 45vw, 350px" alt="覆潮之下原聲帶封面。潮汐青就是從這裡的標題字取的" width="960" height="960" loading="lazy" /></a>
<figcaption>覆潮之下原聲帶封面。潮汐青就是從這裡的標題字取的（<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B">PRTS</a>・<a href="https://arknights.fandom.com/wiki/File:Under_Tides_music.png">原圖</a>）</figcaption>
</figure>
<figure id="ref-under-tides-ost">
<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B"><img src="/images/about-design/under-tides-ost-960.webp" srcset="/images/about-design/under-tides-ost-480.webp 480w, /images/about-design/under-tides-ost-960.webp 960w" sizes="(max-width: 767px) 45vw, 350px" alt="覆潮之下 OST" width="960" height="960" loading="lazy" /></a>
<figcaption>覆潮之下 OST（<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B">PRTS</a>・<a href="https://arknights.fandom.com/wiki/File:Under_Tides_OST.png">原圖</a>）</figcaption>
</figure>
<figure id="ref-stultifera">
<a href="https://prts.wiki/w/%E6%84%9A%E4%BA%BA%E5%8F%B7"><img src="/images/about-design/stultifera-960.webp" srcset="/images/about-design/stultifera-480.webp 480w, /images/about-design/stultifera-960.webp 960w" sizes="(max-width: 767px) 45vw, 350px" alt="愚人號主視覺。燈火金來自船上的燈光" width="960" height="540" loading="lazy" /></a>
<figcaption>愚人號主視覺。燈火金來自船上的燈光（<a href="https://prts.wiki/w/%E6%84%9A%E4%BA%BA%E5%8F%B7">PRTS</a>・<a href="https://arknights.fandom.com/wiki/File:Stultifera_Navis.png">原圖</a>）</figcaption>
</figure>
<figure id="ref-stultifera-ost">
<a href="https://prts.wiki/w/%E6%84%9A%E4%BA%BA%E5%8F%B7"><img src="/images/about-design/stultifera-ost-960.webp" srcset="/images/about-design/stultifera-ost-480.webp 480w, /images/about-design/stultifera-ost-960.webp 960w" sizes="(max-width: 767px) 45vw, 350px" alt="愚人號 OST" width="960" height="960" loading="lazy" /></a>
<figcaption>愚人號 OST（<a href="https://prts.wiki/w/%E6%84%9A%E4%BA%BA%E5%8F%B7">PRTS</a>・<a href="https://arknights.fandom.com/wiki/File:Stultifera_Navis_OST.png">原圖</a>）</figcaption>
</figure>
<figure id="ref-cg-specter-imprisoned">
<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B"><img src="/images/about-design/cg-specter-imprisoned-960.webp" srcset="/images/about-design/cg-specter-imprisoned-480.webp 480w, /images/about-design/cg-specter-imprisoned-960.webp 960w" sizes="(max-width: 767px) 45vw, 350px" alt="劇情 CG：幽靈鯊被囚。光從上面照下來、水裡有氣泡，就是頁首光柱的參考" width="960" height="540" loading="lazy" /></a>
<figcaption>劇情 CG：幽靈鯊被囚。光從上面照下來、水裡有氣泡，就是頁首光柱的參考（<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B">PRTS</a>・<a href="https://arknights.fandom.com/wiki/File:Specter_Imprisoned.png">原圖</a>）</figcaption>
</figure>
<figure id="ref-cg-gladiia-abducts">
<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B"><img src="/images/about-design/cg-gladiia-abducts-960.webp" srcset="/images/about-design/cg-gladiia-abducts-480.webp 480w, /images/about-design/cg-gladiia-abducts-960.webp 960w" sizes="(max-width: 767px) 45vw, 350px" alt="劇情 CG：歌蕾蒂婭" width="960" height="540" loading="lazy" /></a>
<figcaption>劇情 CG：歌蕾蒂婭（<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B">PRTS</a>・<a href="https://arknights.fandom.com/wiki/File:Gladiia_Abducts_Specter.png">原圖</a>）</figcaption>
</figure>
<figure id="ref-cg-gladiia-retal">
<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B"><img src="/images/about-design/cg-gladiia-retal-960.webp" srcset="/images/about-design/cg-gladiia-retal-480.webp 480w, /images/about-design/cg-gladiia-retal-960.webp 960w" sizes="(max-width: 767px) 45vw, 350px" alt="劇情 CG：歌蕾蒂婭反擊。整張圖只有眼睛跟血跡是紅的" width="960" height="540" loading="lazy" /></a>
<figcaption>劇情 CG：歌蕾蒂婭反擊。整張圖只有眼睛跟血跡是紅的（<a href="https://prts.wiki/w/%E8%A6%86%E6%BD%AE%E4%B9%8B%E4%B8%8B">PRTS</a>・<a href="https://arknights.fandom.com/wiki/File:Gladiia_Retalliates.png">原圖</a>）</figcaption>
</figure>
</div>

《明日方舟》及上面這些圖的著作權都屬於鷹角網路（Hypergryph），放在這裡只是為了說明設計是從哪裡來的。如果有任何疑慮，歡迎[寄信](mailto:poppin.wildsky@gmail.com)告訴我，我會馬上拿掉。
