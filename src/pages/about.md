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

這個部落格的視覺主題是「深海」。靈感來自《明日方舟》深海獵人一系列的美術，特別是活動「覆潮之下（Under Tides）」與「愚人號（Stultifera Navis）」的主視覺與劇情插圖。站上沒有使用任何官方圖像；我做的是從參考圖裡取色、整理出它的視覺語彙，再轉譯成網頁的配色、字型與動態。

### 色彩

色票是用程式從參考圖實際取色（k-means 分群）得到的，不是目測。參考圖的水並不是飽和的青綠，而是**偏藍的石墨色**，飽和度大約只有 20%；畫面的主角是銀白，彩色只在很小的面積出現。

| | 色碼 | 名字 | 用在哪裡 |
|---|---|---|---|
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#0b0e11;border:1px solid #888;vertical-align:middle"></span> | `#0b0e11` | 深淵 | 頁面最深處 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#14191f;border:1px solid #888;vertical-align:middle"></span> | `#14191f` | 石墨藍 | 主背景 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#28343e;border:1px solid #888;vertical-align:middle"></span> | `#28343e` | 水面下的光 | 頁首附近的水色 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#e6e8e9;border:1px solid #888;vertical-align:middle"></span> | `#e6e8e9` | 銀白 | 主文字，取自獵人的銀髮 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#7eb5ac;border:1px solid #888;vertical-align:middle"></span> | `#7eb5ac` | 潮汐青 | 連結、閱讀進度；取自 Under Tides 的標題字 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#b3262f;border:1px solid #888;vertical-align:middle"></span> | `#b3262f` | 獵人紅 | 只用在標誌、引言線與「NEW」，對應畫面裡的紅瞳與血跡 |
| <span style="display:inline-block;width:1.4em;height:1.4em;background:#d9c89d;border:1px solid #888;vertical-align:middle"></span> | `#d9c89d` | 燈火金 | 小標題編號與反白選取；取自愚人號船上的燈光 |

### 視覺語彙

- **光從上方來**：頁首有緩慢擺動的光柱，光柱裡漂著細小的微塵。
- **越往下讀，越深**：背景是一道由上往下變暗的水柱，捲動時會跟著下潛；文章頁右側的深度計把閱讀進度換算成水深。
- **深處的生命**：海雪緩緩上浮；生物螢光與水母在淺處幾乎看不見，越深越亮。遠處偶爾有魚群游過，讀到後半段，會有一道巨大的影子從遠方經過。
- **紅色很少**：冷色是整個場景，紅色只出現在少數焦點上，就像參考圖裡只有眼睛和血跡是紅的。
- **斷筆與海流**：首頁的 W 用帶缺口的筆畫畫成，像兩座並排的尖塔，底下一條水線；標語下方有一條緩緩畫出的海流線。
- **文學與工程並排**：內文是襯線字，日期、分類與閱讀時間是等寬字，標誌與小標則是字距拉開的古典大寫。

### 字型

- 內文：[EB Garamond](https://fonts.google.com/specimen/EB+Garamond)、[Noto Serif TC](https://fonts.google.com/noto/specimen/Noto+Serif+TC)
- 標誌與小標：[Cinzel](https://fonts.google.com/specimen/Cinzel)
- 日期與資訊列：[Space Mono](https://fonts.google.com/specimen/Space+Mono)

以上都採用 SIL Open Font License。

### 參考來源

- [明日方舟官方網站](https://ak.hypergryph.com/)
- [塞壬唱片 Monster Siren Records](https://monster-siren.hypergryph.com/)：Under Tides 原聲帶
- Arknights Wiki：[Under Tides](https://arknights.fandom.com/wiki/Under_Tides)、[Stultifera Navis](https://arknights.fandom.com/wiki/Stultifera_Navis)

《明日方舟》及相關美術的著作權屬於鷹角網路（Hypergryph）。本站只參考它的美術語言，沒有使用任何官方素材。
