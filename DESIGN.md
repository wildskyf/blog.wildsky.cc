---
name: Wildsky's Blog
description: 濁心斯卡蒂・覆潮之下 — 一座冷色、克制、十年不斷線的個人堡壘
colors:
  polar-night: '#2E3440'
  snow-storm-surface: '#ECEFF4'
  snow-storm-ground: '#E5E9F0'
  snow-storm-sunken: '#D8DEE9'
  frost-deep: '#5E81AC'
  frost-mid: '#81A1C1'
  frost-ice: '#88C0D0'
  slate-neutral: '#4C566A'
  aurora-red: '#BF616A'
  aurora-yellow: '#EBCB8B'
  aurora-green: '#A3BE8D'
  aurora-purple: '#B48EAD'
  abyss-surface: '#1B1717'
  abyss-ground: '#161212'
  abyss-sunken: '#110D0D'
  abyss-content: '#CAC9C9'
  signal-green: '#1FB854'
  signal-teal: '#1EB88E'
  signal-cyan: '#1FB8AB'
typography:
  display:
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
    fontSize: '36px'
    fontWeight: 700
    lineHeight: '40px'
    letterSpacing: 'normal'
  headline:
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
    fontSize: '24px'
    fontWeight: 600
    lineHeight: '32px'
    letterSpacing: 'normal'
  title:
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
    fontSize: '20px'
    fontWeight: 700
    lineHeight: '1.5'
    letterSpacing: 'normal'
  body:
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
    fontSize: '20px'
    fontWeight: 400
    lineHeight: '36px'
    letterSpacing: '0.5px'
  label:
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
    fontSize: '12px'
    fontWeight: 600
    lineHeight: '1.4'
    letterSpacing: '0.18em'
rounded:
  field: '4px'
  box: '8px'
  card: '12px'
  selector: '16px'
  full: '9999px'
spacing:
  xs: '4px'
  sm: '8px'
  md: '16px'
  lg: '24px'
  xl: '32px'
  '2xl': '48px'
  '3xl': '64px'
components:
  button-primary:
    backgroundColor: '{colors.frost-deep}'
    textColor: '#03060B'
    rounded: '{rounded.field}'
    padding: '0 16px'
    height: '40px'
  chip-category:
    backgroundColor: 'rgba(94, 129, 172, 0.1)'
    textColor: '{colors.frost-deep}'
    rounded: '{rounded.field}'
    padding: '4px 8px'
  chip-category-hover:
    backgroundColor: 'rgba(94, 129, 172, 0.2)'
  card-note:
    backgroundColor: '{colors.snow-storm-surface}'
    textColor: '{colors.polar-night}'
    rounded: '{rounded.card}'
    padding: '20px'
  banner-series:
    backgroundColor: 'rgba(229, 233, 240, 0.6)'
    textColor: '{colors.polar-night}'
    rounded: '{rounded.card}'
    padding: '12px 16px'
  header-bar:
    backgroundColor: '{colors.snow-storm-surface}'
    textColor: '{colors.polar-night}'
    padding: '0 16px'
    height: '64px'
  nav-dropdown:
    backgroundColor: '{colors.snow-storm-surface}'
    textColor: '{colors.polar-night}'
    rounded: '{rounded.box}'
    padding: '8px'
    width: '208px'
  article-surface:
    backgroundColor: '{colors.snow-storm-surface}'
    textColor: '{colors.polar-night}'
    padding: '32px 48px 64px'
    width: '896px'
---

# Design System: Wildsky's Blog

## Overview

**Creative North Star: "濁心斯卡蒂・覆潮之下"**

這是一座沉在冷水下的個人堡壘。它不發光、不招手、不試圖說服你留下——它只是十年來一直在那裡，而且還會繼續在那裡。畫面的第一印象應該是**低溫**：冷藍灰的雪原色（`#ECEFF4` / `#E5E9F0` / `#D8DEE9`）疊出層次，深墨藍的文字（`#2E3440`）落在上面，飽和度全域壓低，沒有一塊顏色在爭奪視線。這是「覆潮之下」的部分。

「濁心」是它不是純淨的：這裡同時放技術除錯、履歷、接案報價之外的作品、書櫃、歌單、明日方舟的近況。它不把「人」的部分洗掉來換取專業感——專業感靠的是把每一件事都講清楚，不是靠把生活切掉。「獵人」則是它的動作方式：出手前安靜，出手時精準；元件細、邊框薄、留白大，訊息密度高但不喧鬧。

整站以襯線字（`ui-serif` / Georgia 系）承載全部內容，包含導覽與按鈕。單欄 896px 的閱讀柱是唯一的主結構，沒有側欄、沒有卡片牆。桌機版把兩組工具釘在畫面左右下角（主題切換、社群連結），像艙壁上的兩個開關，內容區完全不被打斷。

**Key Characteristics:**

- 冷色、低飽和、全域壓低對比張力（Nord 色系）
- 全站襯線字，含 UI 元素；不做 sans/serif 混排
- 單欄 896px 閱讀柱，無側欄
- 幾乎全平：層次靠背景深淺（base-100/200/300），不靠陰影
- 中文字距全域 +0.02em（`tracking-tw-normal`）
- 桌機的兩個固定角落開關（左下主題、右下社群）是這個站的識別動作

**確認的視覺反參考（使用者明確拒絕）：** AI 感的紫藍漸層與發光卡片；企業 SaaS 落地頁調（大 hero、三欄功能卡、假推薦語、圖庫人物照）；圓滾滾的可愛風（大圓角、粗體圓字、糖果色）。

## Colors

冷藍灰為地基、霜藍為唯一聲音、極光四色只做語意標示——這是 Nord 色盤的完整搬用，不是近似。

### Primary

- **Frost Deep**（`#5E81AC`）：全站唯一的行動色。連結、`btn-primary`、分類 chip 的字色、blockquote 的左側標線（4px）都用它。它是這個站唯一被允許「有顏色」的東西。
- **Frost Mid**（`#81A1C1`）：次級語意色。文章列表的日期／分類／標籤圖示以 70% 不透明度使用（`text-secondary/70`），是引導視線但不搶戲的層級。
- **Frost Ice**（`#88C0D0`）：最淺的霜色，作為 accent 保留。目前使用極少。

### Neutral

- **Polar Night**（`#2E3440`）：所有正文與標題字色，也是 header 底線的顏色。深墨藍而非純黑——這是整站不刺眼的關鍵。
- **Snow Storm Surface**（`#ECEFF4`）：內容平面。文章本體、header、下拉選單、note 卡片的底色。
- **Snow Storm Ground**（`#E5E9F0`）：頁面地面（`.page-container`）。內容平面浮在它上面，兩者只差一階明度。
- **Snow Storm Sunken**（`#D8DEE9`）：下沉面。blockquote、圖片 figure 的襯底、footer 底色、所有細邊框。
- **Slate Neutral**（`#4C566A`）：daisyUI `neutral` 角色，目前站上幾乎未直接使用。

### Tertiary

極光四色只做語意標示，不做裝飾：**Aurora Red**（`#BF616A`，error）、**Aurora Yellow**（`#EBCB8B`，warning）、**Aurora Green**（`#A3BE8D`，success）、**Aurora Purple**（`#B48EAD`，info）。

### 深色主題（forest）

深色主題目前是完全不同的色系家族：近黑帶紅褐的底（`#1B1717` / `#161212` / `#110D0D`）配螢光綠強調色（`#1FB854` / `#1EB88E` / `#1FB8AB`）。使用者已確認**這不是刻意的設計決定，而是待處理項目**（見 Open Items）。新工作不得把 forest 的綠色當成品牌色引用。

### Named Rules

**The One Frost Rule.** 全站只有一個行動色：Frost Deep（`#5E81AC`）。任何新元件想要「有顏色」，答案是 Frost Deep 或它的透明度變體（10% / 20% / 70%），不是新開一個色。

**The Two-Step Surface Rule.** 平面之間只差一階：`#E5E9F0`（地面）→ `#ECEFF4`（內容面）→ `#D8DEE9`（下沉面）。不要為了「突出」把某個區塊跳兩階或塗上強調色。

**The Aurora-Is-Semantic Rule.** 極光四色只在傳達狀態（錯誤、警告、成功、提示）時出現。拿它們當裝飾色或圖表配色即違規。

## Typography

**Display / Body Font:** `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
**Label Font:** 同上（本站不做字體混排）

**Character:** 全站單一襯線字家族，連導覽列、按鈕、下拉選單都是襯線——這在部落格裡是少見的選擇，也是這個站最強的個性來源。它讓 UI 讀起來像文件而不像應用程式，呼應「十年檔案庫」的定位。中文由系統襯線字（如 Songti / Noto Serif CJK）接手，並靠 +0.02em 字距把中文的密度打開。

### Hierarchy

- **Display**（700、36px、行高 40px）：文章標題 `h1`（`text-3xl` → `lg:text-4xl`）。
- **Headline**（600、24px、行高 32px）：文章列表的文章標題（`text-xl` → `lg:text-2xl`），hover 時整組加底線。
- **Title**（700、20px、行高 1.5）：header 的站名。
- **Body**（400、20px、行高 36px、字距 0.5px）：文章內文（`prose prose-xl`，行動裝置降為 `prose-lg` = 18px）。窄螢幕以外都跑在 896px 柱內。
- **Label**（600、12px、字距 0.18em、全大寫）：AuthorBio 的區塊標籤、Notes 頁的 kicker。這是全站唯一的大寫字距處理。

### Named Rules

**The All-Serif Rule.** 導覽、按鈕、標籤、內文全部襯線。要引入無襯線字必須是全站決定，不是單一元件的例外（目前唯一的例外是 `figcaption`，見 Open Items）。

**The Chinese Tracking Rule.** 中文區塊一律掛 `tracking-tw-normal`（+0.02em）；英文區塊不加字距。判斷依 `lang`，不是依視覺喜好。

## Layout

單欄、置中、固定上限。`main` 內容柱最大 896px（`max-w-4xl`），窄螢幕滿版。文章平面內縮 `px-6`（行動）／`px-12`（桌機，48px），上 32px、下 64px。

頁面骨架固定為三段：`header`（64px 高的 navbar，底部 1px `#2E3440` 實線，`shadow-sm`）→ `main`（`flex-grow`）→ `footer`（`#D8DEE9` 底，上 32px 下 40px）。整個 `#page` 是 `min-h-screen` 的 flex column，footer 永遠貼底。

文章列表的節奏刻意鬆：每則之間 48px（`mb-12`），內部 meta 列 gap 14px，標題與 meta 距 8px。列表沒有卡片、沒有分隔線、沒有縮圖——只有留白在分組。分頁每頁 16 篇（`PAGINATION_PER_PAGE_COUNT`）。

斷點沿用 Tailwind 預設：`sm` 640px、`md` 768px、`lg` 1024px、`xl` 1280px、`2xl` 1536px。實際只有 `lg` 是真正的版型轉折點：`lg` 以上才出現左右下角的固定工具列與 48px 內縮；`sm` 以下 header 收掉站點描述與分隔點。

**The Single Column Rule.** 這個站沒有側欄，也不打算有。要增加的資訊往柱內排，或另開頁面。

## Elevation & Depth

系統性地扁平。兩套主題都設 `--depth: 0`、`--noise: 0`，深度完全靠背景明度的三階（`base-200` 地面 → `base-100` 內容面 → `base-300` 下沉面）與 1px 邊框表達，不靠陰影。

現存的陰影只有 Tailwind `shadow-sm` 一種，出現在三個地方：header、Notes 的貼文卡片、Notes 的「載入更多」按鈕。它們的角色是**結構性**的（標示這塊會浮動或可互動），不是氛圍性的。

### Shadow Vocabulary

- **hairline-lift**（`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`）：僅用於黏在畫面上的容器（header）與可點擊的獨立卡片。

### Named Rules

**The Depth-Zero Rule.** 新元件預設無陰影。需要區分層次時，先換一階背景色；只有當元件真的浮在內容之上（sticky、dropdown、可點卡片）才可以用 `hairline-lift`，且不得自創第二種陰影值。

## Shapes

小圓角、細邊框、無斜切。目前站上實際使用四個半徑值：`4px`（按鈕、分類 chip、圖片 figure、mark）、`8px`（下拉選單、note 圖片連結）、`12px`（note 卡片、系列橫幅、列表項）、`9999px`（頭像、`btn-circle`）。

邊框一律 1px 且用低對比的 `#D8DEE9`，唯一的例外是 header 底線，用滿對比的 `#2E3440` 實線把導覽區硬切出來——那是全站唯一一條「重」的線。blockquote 用 4px 的 Frost Deep 左標線，是唯一的粗線。

**The Small Radius Rule.** 半徑上限 12px（頭像等真正的圓形除外）。超過 12px 的圓角屬於使用者拒絕的「圓滾滾可愛風」。

**注意：** 兩套主題的 daisyUI 半徑變數並不一致（nord `--radius-field: 0.25rem` / `--radius-box: 0.5rem`；forest `--radius-field: 2rem` / `--radius-box: 1rem`），所以同一顆 `btn` 在深色主題會變成藥丸形。這是待處理項目，不是設計意圖（見 Open Items）。

## Components

元件手感的方向是**明日方舟（Arknights）的 UI**：薄、硬邊、資訊密度高、標籤用小字大字距、強調色只在該亮的地方亮。這是使用者指定的character 方向；下方記錄的是**目前實作的事實**，兩者之間的落差列在 Open Items。

### Buttons

- **Shape:** 小圓角（4px，`--radius-field`），40px 高。
- **Primary:** Frost Deep 底（`#5E81AC`）＋近黑字（`#03060B`），左右內距 16px，14px / 600 字重，1px 同色邊框。用於 AuthorBio 的兩顆 CTA。
- **Ghost / Circle:** header 的漢堡選單用 `btn btn-ghost btn-circle`（透明底、40px 圓形）。
- **Notes 載入更多:** 自訂樣式而非 daisyUI btn — `#ECEFF4` 底、1px `#D8DEE9` 邊、8px 圓角、`shadow-sm`、hover 轉 `#E5E9F0`、disabled 時 60% 不透明。

### Chips

- **分類 chip:** Frost Deep 10% 底 ＋ Frost Deep 字，4px 圓角，內距 4px/8px，14px。hover 轉 20% 底，200ms。
- **標籤（Tag）:** 不是 chip，是純文字連結串：`bx:label` 圖示（`text-secondary/70`）後接以「・」分隔的 12px 連結；當前標籤轉 Frost Deep 且加粗。

### Cards / Containers

- **文章平面:** 無圓角、無陰影、無邊框的 `#ECEFF4` 大平面，直接坐在 `#E5E9F0` 地面上。這是全站的主容器。
- **Note 卡片:** 12px 圓角、1px `#D8DEE9` 邊、`#ECEFF4` 底、內距 20px、`shadow-sm`。
- **系列橫幅:** 12px 圓角、1px `#D8DEE9` 邊、`#E5E9F0` 60% 底、內距 12px/16px、14px 字。
- **圖片 figure:** `#D8DEE9` 襯底、16px 內距、4px 圓角，圖說置中並改用無襯線字。

### Navigation

- **Header:** 64px navbar，`#ECEFF4` 底，底部 1px `#2E3440` 實線 ＋ `shadow-sm`。左側為站名（20px / 700）、「・」分隔點、站點描述（`text-base-content/70`，`sm` 以下隱藏）。右側為漢堡按鈕。
- **下拉選單:** 208px 寬、8px 圓角、`#ECEFF4` 底、8px 內距、`shadow-sm`、`menu-lg` 尺寸、`capitalize`。項目分 main / content 兩組，中文站 8 項、英文站 4 項。
- **分頁:** 純文字連結（20px），左右分置，無按鈕外框。

### 固定角落開關（Signature）

桌機（`lg` 以上）兩個釘在視窗角落的工具：

- **主題切換**（左下 `bottom-8 left-8`）：一顆無框透明按鈕，內容是單一字符 `☀︎` / `☾`（20px，`text-base-content/80`，帶 `animate-pulse`），hover 降至 60% 不透明，focus 時顯示 2px outline。切換 `nord` ↔ `forest` 並寫入 `localStorage`。
- **社群列**（右下 `bottom-8 right-8`）：垂直排列的 36px 圖示（Mastodon、GitHub、LinkedIn、履歷 PDF、RSS），`text-base-content` 60% 不透明、hover 80%。行動裝置退回 footer 內的水平排列。

這兩個角落開關是這個站最容易被認出來的動作，新版型不應把它們改成傳統的 header 圖示列。

## Do's and Don'ts

### Do:

- **Do** 用 Frost Deep（`#5E81AC`）或它的 10% / 20% / 70% 變體當唯一行動色（The One Frost Rule）。
- **Do** 用背景三階（`#E5E9F0` → `#ECEFF4` → `#D8DEE9`）做層次，新元件預設 `box-shadow: none`（The Depth-Zero Rule）。
- **Do** 讓新元件也用襯線字，包含按鈕與標籤（The All-Serif Rule）。
- **Do** 中文區塊掛 `tracking-tw-normal`（+0.02em），英文區塊不加。
- **Do** 半徑控制在 12px 以內（真正的圓形除外）。
- **Do** 讓內容留在 896px 單欄裡；要多放東西就往下排或另開頁。
- **Do** 用留白分組（列表項間 48px），不要用卡片框或分隔線。
- **Do** 引用 daisyUI 語意 token（`base-100` / `base-content` / `primary`），不要寫死 hex 或 Tailwind 調色盤色（如 `text-gray-900`）。

### Don't:

- **Don't** 使用紫藍漸層、發光邊框、玻璃擬態這類「AI 感」處理（使用者明確拒絕）。
- **Don't** 套企業 SaaS 落地頁的版型：滿版 hero、三欄功能卡、推薦語牆、圖庫人物照（使用者明確拒絕）。
- **Don't** 走圓滾滾可愛風：大於 12px 的圓角、粗體圓體字、糖果色（使用者明確拒絕）。
- **Don't** 新增第二個強調色或第二種陰影值。
- **Don't** 把極光四色（`#BF616A` / `#EBCB8B` / `#A3BE8D` / `#B48EAD`）當裝飾色使用。
- **Don't** 引用深色主題的螢光綠（`#1FB854`）當品牌色——它是待處理的漂移，不是決定。
- **Don't** 加側欄。
- **Don't** 在文章內文之外使用 `prose-zh` / `prose-en` 這兩個 class：它們目前沒有任何定義（見 Open Items）。

## Open Items

以下是掃描時實測到的落差，使用者已確認要記成待辦、而非系統規則。新工作不得把它們當成既定設計引用。

1. **深色主題色系不一致（使用者確認為待辦）。** `forest` 是綠色系，`nord` 是藍色系，兩套主題沒有共同的色相身分。方向是讓深色主題回到同一色系家族。
2. **深度不足（使用者確認為待辦）。** 兩套主題 `--depth: 0`，全站幾乎沒有深度表現；北極星「覆潮之下」想要水下的層次感，目前的扁平做不到。
3. **元件手感與 Arknights 方向有落差。** 使用者指定的手感參考是明日方舟 UI（硬邊、薄框、高密度、小字大字距標籤），但現況是 daisyUI 預設的柔和圓角元件。這是方向與實作之間的缺口，尚未收斂。
4. **兩套主題半徑不一致。** nord `--radius-field: 0.25rem`、forest `2rem`；同一顆按鈕在深色主題變成藥丸形。
5. **字體套件裝了但沒載入。** `@fontsource/merriweather`、`noto-sans-tc`、`noto-serif-tc`、`poppins` 都在 `package.json`，但 `src/` 內沒有任何 import，實際跑的是系統襯線字（Georgia / Times 後援）。要嘛接上，要嘛移除依賴。
6. **`prose-zh` / `prose-en` 是空 class。** 在 5 個檔案中被使用（`Article.astro:28`、`AuthorBio.astro:14`、`pageFactory/index.astro:59`、`notes.astro:9`、`series/ai-agent.astro:84`），但全專案無任何定義。
7. **文章內 `h2` 與文章標題同尺寸。** 兩者都是 36px / 700，`.article-content h2` 與 `article header h1` 視覺上無法區分，內文層級被壓平。
8. **中文字距在文章內文失效。** `.article-content` 以 `@apply tracking-wide`（0.025em）覆蓋掉 `tracking-tw-normal`（0.02em），實測內文字距為 0.5px 而非預期的 0.4px。
9. **Footer 設了 `text-white` 但底色是淺色 `#D8DEE9`。** 目前所有可見子元素都覆蓋了字色（社群圖示用 `text-base-content`、版權列用 `text-gray-500`），所以尚未造成可見的對比問題——但這是一顆定時炸彈：任何新增到 footer 且未指定字色的文字都會變成白底白字。
10. **`list.astro:20` 的分頁區用了 `text-gray-900`。** 這是 Tailwind 調色盤的寫死色，不隨主題切換。
