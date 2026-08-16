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

一個由本人手刻自架、跨十年持續更新的個人站：技術實作紀錄（`/posts`、`/series/ai-agent/`）、
近況與生活面（`/now`、`/notes`、`/bookshelf`）、專業履歷與接案（`/experiences`、`/freelancer`）
同時存在於同一個網域下，並由作者完全控制。這個「同一個人的技術、生活與工作全在自己的地基上」
的組合，是平台型寫作服務無法複製的部分。

### 視覺定位（與 DESIGN.md 同源）

North Star：**覆潮之下 — 一套語言、兩片海**。

氣質：**深海、冷冽、克制中帶一點危險感；技術文件的精確 ＋ 遊戲 UI 的銳利。**

這個站看起來應該像一座沉在冷水下、自己控制的堡壘：低溫、低飽和、資訊密度高，
全站只有一件紅衣（單一血紅強調色，佔比 <5%）。深色是深海、淺色是海面，
兩者情緒不同但語言一致。視覺語言的完整規格（token、排版、切角、紅色紀律）
住在 `DESIGN.md`，本節只記錄它為什麼適合這個產品：

- 「自己的堡壘」需要看起來是**被人刻意造出來的**，不是套版的——切角、線框、
  代號式排版讓它一眼不像 CMS 主題。
- 「潛在的工作或商業機會」需要**精確感**——技術文件式的排版比華麗視覺更能取信於工程讀者。
- 「對外的數位形象」需要**節制**——紅色的稀缺紀律就是節制的具體化。

**邊界：這是視覺氣質，不是寫作語氣。** 兩者刻意不同，見 `## Brand Commitments`。

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

- 雙語站台：預設語系 `tw`（無前綴），英文為 `/en/` 前綴；英文導覽項目少於中文（僅 home / about / blogroll / tags）。
- 文章列表分頁（每頁 16 篇）、分類 `/categories`、標籤 `/tags`、系列 `/series/ai-agent/`。
- 靜態頁：`/about`、`/now`、`/experiences`、`/freelancer`、`/bookshelf`、`/more-links`、`/donate`、`/notes`。
- 深色／淺色主題切換（daisyUI + `theme-change`）。
- RSS、sitemap（含 i18n）、SchemaOrg 結構化資料、`_redirects` 與 Astro `redirects` 維持舊網址。

硬性約束（使用者 2026-08-16 指定，改版時不得違反）：

- **中英雙語結構必須保留**：`tw` 為預設不加前綴、英文走 `/en/`，英文版不得被砍掉。
- **所有舊網址必須繼續有效**：2014 年以來的文章網址、RSS、sitemap 不能斷；既有 redirect 規則不可移除。
- **手刻自架、不依賴平台**：維持自己控制的 static site，不遷往 Medium／Substack 這類平台。

技術現況（既有 codebase 已回答，非新決策）：Astro 7 + Tailwind CSS v4 + daisyUI 5，
Yarn 3，輸出目錄 `./out`。字型套件已安裝 Merriweather、Noto Sans TC、Noto Serif TC、Poppins。

明確未定案（不得自行發明）：

- 主要 TA 尚未決定（見 `## Users`）。
- 三個成功目標之間若衝突，優先序未定。
- 是否要有作品集／Product collection 頁面尚未落地（曾規劃 `products-tw` / `products-en`，
  但目前 `src/content/` 下只有 `posts-tw` 與 `posts-en`）。
- 「無廣告、無第三方追蹤」未被使用者列為硬性約束，不得當成已確認的原則陳述。

## Brand Commitments

- 名稱與身分：本名 范耿誌 Rance，網路代號 **Wildsky**。網域 `wildsky.cc`。
- 語氣（寫作）：第一人稱、口語、直說，中文為主。既有頁面會用「～」與 emoji，不做企業式包裝。
- **寫作語氣與視覺氣質刻意不同，不得互相對齊。** 視覺是冷的（深海、克制、銳利），
  文字是熱的（口語、有情緒、會開玩笑）。這個反差是刻意的：冷介面盛裝熱內容，
  正是「Chrome 銳利、正文保守」在產品層的同一個決定。
  未來工作**不得**因為視覺變冷而去修掉既有文章或 `/now` 的口語與 emoji，
  也不得因為文字口語而把介面做暖做圓。
- 內容誠實界線：接案相關內容只寫「產品名＋角色＋技術」，不得公開報價、客戶對話或私人備註；
  未簽約／提案中的案子預設不公開。
- 既有資產：`public/` 下的站台圖片、`experiences.png`。

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

1. **地基自有**：任何改動都不能把內容或流量交給外部平台託管的形式（使用者指定的硬約束）。
2. **十年不斷線**：舊網址、RSS 與雙語結構是資產，不是包袱；改版以不破壞它們為前提。
3. **人與技術同一個門面**：技術文、近況、履歷、接案共存是刻意的，不要為了整齊把「人」的部分切掉。
4. **只講真的事**：具名專案與作品可寫，報價、客戶對話、未簽約案子與任何數字不得出現。
5. **TA 未定就別假裝已定**：牽涉受眾取捨的決策要標明是假設，並回頭問使用者。
