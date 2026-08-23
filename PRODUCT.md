# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

主要訪客尚未定案（使用者 2026-08-16 明確表示「TA 還沒有想得很清楚」）。未來工作不得替他發明一個 TA。

目前可從內容與確認過的成功定義推導出、但仍待使用者確認的三群人：

- 從搜尋引擎進來解決具體技術問題的工程師（技術文佔文章多數，最早可回溯至 2014 年）。
- 正在評估作者本人的潛在雇主、合作對象與接案客戶（`/about`、`/experiences`、`/freelancer` 為此存在）。
- 作者本人：這個站同時是他的個人 portal 與長期檔案庫。

## Product Purpose

Wildsky（范耿誌 Rance）的個人網站與部落格，站台為 https://blog.wildsky.cc 。

使用者確認的成功定義是三件事，並列無主從：

1. **個人對外的數位形象** — 網路上代表他這個人的正式門面。
2. **潛在的工作或商業機會** — 有人因為這個站找上他（工作、合作、接案）。
3. **他自己的 portal 與堡壘** — 自己控制、自己長住的地方，不寄居在別人的平台上。

## Positioning

一個由本人手刻自架、跨十年持續更新的個人站：技術實作紀錄（`/posts`）、
近況與生活面（`/now`、`/notes`、`/bookshelf`）、專業履歷與接案（`/experiences`、`/freelancer`）
同時存在於同一個網域下，並由作者完全控制。這個「同一個人的技術、生活與工作全在自己的地基上」
的組合，是平台型寫作服務無法複製的部分。

### 視覺定位（與 DESIGN.md 同源）

North Star：**覆潮之下 — 哥德航海 × 有機深淵**。

氣質：**沉靜、精確、略帶敬畏；技術文件的清晰是主體，深海航行日誌是外殼。**

這個站像一冊在深水中持續書寫的私人航海誌：暗青綠的水、帶青冷白的紙、極少量血紅錨點，
以及不足 1% 的珊瑚暖光。Dark 是深淵中的日誌，Light 是陰天海面上的紙頁；兩者不是機械反相，
但共享同一套襯線排版、有機邊界、航海線稿與稀缺暖色紀律。

v7（`comp/index-v7.html`）確立的「哥德航海 + 有機深淵」是 canon。早期「科技切角 HUD」方向已退場：
精確斜線網格、遙測式讀數、方正科技字身與切角面板都不再代表 Wildsky。視覺語言的 token、字體、
形狀、對比與面積預算以 `DESIGN.md` 為唯一規格。

這個方向適合產品的原因：

- 「自己的堡壘」由可長期維護的排版與 token 建立，不靠平台模板或遊戲資產。
- 「工作或商業機會」需要長文可讀與技術可信度，因此正文永遠優先於氣氛裝飾。
- 「個人數位形象」需要節制；血紅 <5%、珊瑚 <1% 是具體而可驗收的品牌紀律。
- 十年內容的深度由時間、排版與環境層自然呈現，不靠一套航海術語要求讀者解碼。

## Operating Context

- 內容以 Markdown 檔進場：`src/content/posts-tw/`（中文）與 `src/content/posts-en/`（英文），
  檔名格式 `YYYY-MM-DD-HH-MM-SS_slug.md`。以 `yarn new <slug>` 產生樣板。
- 現有 120 篇文章檔，最早 2014 年，橫跨十年以上。
- 站台以 Astro 靜態輸出到 `./out`，並輸出 RSS（`/rss.xml`）與 sitemap。
- 作者的 Mastodon 自架站 `https://social.wildsky.cc/@wildsky` 是站外更新管道，
  `/notes` 頁面呈現其 GoToSocial 內容。
- 作者在 Taiwan AI Labs 任職軟體工程師，並長期承接網站接案（長期合作對象之一為 GreenWiz）。

## Capabilities and Constraints

現有功能：

- 雙語站台：預設語系 `tw`（無前綴），英文為 `/en/` 前綴；兩種語系的導覽皆提供搜尋與文章彙整。
- 文章列表分頁（每頁 16 篇）、分類 `/categories`、標籤 `/tags`。
- 雙語文章搜尋：`/search/` 與 `/en/search/` 使用 Fuse.js 在瀏覽器端搜尋各語系的靜態 JSON 索引；索引包含標題、標籤、分類、摘要與文章正文，目前涵蓋 109 篇繁中、13 篇英文文章。查詢同步至 `?q=`，並處理初始、載入、搜尋中、無結果與錯誤狀態。
- 雙語完整文章彙整：`/archive/` 與 `/en/archive/` 依年份分組列出各語系所有文章，目前涵蓋 109 篇繁中、13 篇英文文章。
- 靜態頁：`/about`、`/now`、`/experiences`、`/freelancer`、`/bookshelf`、`/more-links`、`/donate`、`/notes`。
- 深色／淺色主題切換（原生 CSS token + localStorage；首次造訪跟隨系統偏好）。
- RSS、sitemap（含 i18n）、SchemaOrg 結構化資料、`_redirects` 與 Astro `redirects` 維持舊網址。

硬性約束（使用者 2026-08-16 指定，改版時不得違反）：

- **中英雙語結構必須保留**：`tw` 為預設不加前綴、英文走 `/en/`，英文版不得被砍掉。
- **所有舊網址必須繼續有效**：2014 年以來的文章網址、RSS、sitemap 不能斷；既有 redirect 規則不可移除。
- **手刻自架、不依賴平台**：維持自己控制的 static site，不遷往 Medium／Substack 這類平台。

技術現況（既有 codebase 已回答，非新決策）：Astro 7 + Tailwind CSS v4，Yarn 3，
輸出目錄 `./out`。視覺系統不依賴元件主題套件；字型套件為 Noto Serif TC Variable、EB Garamond Variable、
Cormorant SC 600、Space Mono 400／700 與 JetBrains Mono Variable，退場字體及 daisyUI／`theme-change` 均已移除。

明確未定案（不得自行發明）：

- 主要 TA 尚未決定（見 `## Users`）。
- 三個成功目標之間若衝突，優先序未定。
- 是否要有作品集／Product collection 頁面尚未落地。
- 「無廣告、無第三方追蹤」未被使用者列為硬性約束，不得當成已確認的原則陳述。

## Brand Commitments

- 名稱與身分：本名 范耿誌 Rance，網路代號 **Wildsky**。網域 `wildsky.cc`。
- Tagline 必須逐字維持：**「信仰不確定性，同時用確定性工程過生活」**。不得換標點、增刪或文學化改寫。
- 長文語氣（作者聲音）：第一人稱、口語、直說，中文為主。既有頁面會用「～」與 emoji，不做企業式包裝。
- 介面文案（chrome 聲音）：沉靜、精確、略帶敬畏；短、克制、以導航為目的，不假裝成遊戲旁白。
- **兩種聲音刻意並存。** 技術文章與個人文字是主體，深海母題只存在於色彩、排版、環境層與轉場；介面名稱維持直白，也不得為配合冷介面而改寫既有文章、`/now` 的口語或 emoji。
- 內容誠實界線：接案相關內容只寫「產品名＋角色＋技術」，不得公開報價、客戶對話或私人備註；未簽約／提案中的案子預設不公開。
- 既有資產：`public/` 下的站台圖片、`experiences.png`。

## Interface Language

Wayfinding 與 metadata 使用讀者不需學習的直白名稱。深海是視覺外殼，不是介面字典。

- 文章列表不再冠上 `DESCENT LOG`；首頁以品牌 tagline 作唯一主標題。
- 日期直接顯示日期；分類直接顯示分類；閱讀時間使用「12 分鐘」等自然語言。
- 最新內容標成「最新」；搜尋、關於、留言、下一頁皆使用原本功能名稱。
- 主題切換只顯示太陽／月亮 SVG，並以 `aria-label` 說明「切換到亮色／深色主題」。
- `DESCENT LOG`、`DESCEND`、`SURFACE`、`BEACON`、`SOUNDING`、`ECHO`、`DEPTH`、`BEARING`、
  `TIDE TABLE`、`CURRENT` 全數退出可見介面，不另創替代隱喻。

英文 true small caps 與 Space Mono 仍可用於真正的英文縮寫、日期或技術數值；中文維持明體正常字形、
字距不超過 0.02em，不因氣氛強行翻成英文。

## Legal and Taste Boundaries

只提取色彩結構、排版邏輯、有機形狀與公共領域航海母題；不得使用或仿製任何遊戲資產與專有品牌元素。

絕對禁止：

- 任何官方圖像資產：角色立繪、皮膚圖、活動 KV、logo、UI 截圖、PV 畫面、EP 封面、手辦照。
- 遊戲專有名詞作站內品牌、導覽或元件名稱：海嗣／Seaborn、阿戈爾／Ægir、深海教會／Church of the Deep、
  深海獵人／Abyssal Hunter、濱海壞印／Nethersea Brand、伊比利亞之眼／Eye of Iberia、Rhodes Island、
  幹員／Operator、Monster Siren，以及任何角色名。
- 仿製活動 logo 的字型、比例、圖文鎖定或標題排版；不得使用遊戲字型。
- 把站台描述成某角色、陣營或活動的主題站；本專案的風格必須能獨立於來源被辨識。

視覺 anti-references 的完整規格在 `DESIGN.md`。

## Evidence on Hand

真實且可引用的素材：

- 120 篇既有文章（`src/content/posts-tw/`、`src/content/posts-en/`）。
- `/experiences` 具名的實際專案：PGSB（`https://pgsb.tw23.org`）、TW23 Report 等 AILabs 專案。
- `/freelancer` 具名的實際案子：`kaiming.org`、`superhero.chickenpoxguard.com.tw`、
  `tacd-wddwalkrun.netlify.app`、`www.tw23.org`。
- 三個上架中的 Firefox 套件：Foxmosa With You、Textarea Cache、Tab Notes。
- 長期合作客戶 GreenWiz（`https://www.greenwiz.com.tw/`）。
- 曾任 Mozilla 台灣社群志工；現任 Taiwan AI Labs 軟體工程師（2019/02 起）。

不存在、未來工作不得捏造：客戶推薦語（testimonial）、流量或訂閱數字、獎項、
價目表與報價、客戶案例的細節內容、任何未列於上方的合作對象。

## Product Principles

1. **地基自有**：任何改動都不能把內容或流量交給外部平台託管的形式。
2. **十年不斷線**：舊網址、RSS 與雙語結構是資產，不是包袱；改版以不破壞它們為前提。
3. **人與技術同一個門面**：技術文、近況、履歷、接案共存是刻意的，不要為了整齊把「人」的部分切掉。
4. **只講真的事**：具名專案與作品可寫；報價、客戶對話、未簽約案子，以及任何未驗證或捏造的數字不得出現。
5. **TA 未定就別假裝已定**：牽涉受眾取捨的決策要標明是假設，並回頭問使用者。
6. **內容先於母題**：如果深海命名、裝飾或動效阻礙找文章與閱讀，先刪掉母題，不削弱內容。
