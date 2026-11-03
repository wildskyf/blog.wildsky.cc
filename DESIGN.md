---
name: Wildsky's Blog
description: 一道會隨閱讀下沉的水柱 —— 石墨藍的水、銀白的字、極少的紅與一點燈火金
colors:
  dark-water-1: '#2A3843'
  dark-water-2: '#1A222B'
  dark-water-3: '#12171D'
  dark-water-4: '#0B0E11'
  dark-bg: '#14191F'
  dark-bg-surface: '#181E25'
  dark-bg-raised: '#1E252D'
  dark-bg-sunken: '#0B0E11'
  dark-fg: '#E6E8E9'
  dark-fg-muted: '#B9BDC5'
  dark-fg-faint: '#9AA4B0'
  dark-fg-on-accent: '#F5F5F6'
  dark-rule: '#2C353D'
  dark-rule-strong: '#46515B'
  dark-accent: '#B3262F'
  dark-accent-text: '#EC6F78'
  dark-glow: '#7EB5AC'
  dark-glow-dim: '#4F8F90'
  dark-glow-text: '#93C9BF'
  dark-gold: '#D9C89D'
  light-water-1: '#F2F4F5'
  light-water-2: '#E6EAEC'
  light-water-3: '#DBE1E4'
  light-water-4: '#CFD7DB'
  light-bg: '#E6EAEC'
  light-bg-surface: '#F2F4F5'
  light-bg-raised: '#DBE1E4'
  light-bg-sunken: '#D4DBDF'
  light-fg: '#161C22'
  light-fg-muted: '#3E4A55'
  light-fg-faint: '#56626D'
  light-fg-on-accent: '#F9FAFA'
  light-rule: '#C7CFD3'
  light-rule-strong: '#A3ADB3'
  light-accent: '#9E1F28'
  light-accent-text: '#9E1F28'
  light-glow: '#2F7D72'
  light-glow-dim: '#2A6B62'
  light-glow-text: '#1F6157'
  light-gold: '#8A6D2C'
  light-gold-text: '#6E5420'
typography:
  caps:
    fontFamily: "'Cinzel', 'EB Garamond Variable', serif"
    fontSize: '0.75rem'
    fontWeight: 500
    lineHeight: 1
    letterSpacing: '0.2em'
    textTransform: 'uppercase'
  cjk-display:
    fontFamily: "'Noto Serif TC Variable', serif"
    fontSize: 'clamp(2.25rem, 5.2vw, 4rem)'
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: '0.03em'
  headline:
    fontFamily: "'EB Garamond Variable', 'Songti TC', 'Noto Serif CJK TC', 'Noto Serif TC', 'PMingLiU', 'MingLiU', serif"
    fontSize: '1.6875rem'
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: '0.008em'
  body:
    fontFamily: "'EB Garamond Variable', 'Songti TC', 'Noto Serif CJK TC', 'Noto Serif TC', 'PMingLiU', 'MingLiU', serif"
    fontSize: '1.1875rem'
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: '0.008em'
  meta:
    fontFamily: "'Space Mono', monospace"
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0.06em'
  code:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: '0.9375rem'
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: '0'
layout:
  readingMeasure: '720px'
  chromeMeasure: '1120px'
  codeMeasure: '840px'
  headerHeight: '68px'
  pageGutterDesktop: '32px'
  pageGutterMobile: '20px'
components:
  header-bar:
    backgroundColor: 'color-mix(water-1 97% → 94%) + blur(16px)'
    textColor: '{colors.dark-fg}'
    height: '68px'
  brand-seal:
    backgroundColor: '{colors.dark-accent}'
    textColor: '{colors.dark-fg-on-accent}'
    width: '28px'
    height: '28px'
  article-surface:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg}'
    width: '720px'
  post-index-row:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg}'
    padding: '40px 0'
  code-block:
    backgroundColor: '{colors.dark-bg-sunken}'
    textColor: '{colors.dark-fg}'
    padding: '20px 24px'
---

# Design System: Wildsky's Blog

## Canon

**`comp/index-v9.html` 是 canon（2026-11-02 起）。** 它取代 v7／v8 的「哥德航海 × 有機深淵」：
那一版的水是飽和的青綠（S≈58%），紅與青幾乎是補色並排，再疊上直排浮水印、兩側光柱、珊瑚礁與海帶，
整體讀起來像高級廣告，不像深海。舊版規格留在 git 歷史（`DESIGN.md` 於 `3be9ace` 之前的版本）。

v9 的色值與語彙來自參考美術的實際取色（k-means 分群），過程與來源整理在 About 頁「關於這個部落格的設計」。

- **水是石墨藍，不是青綠。** 色相約 205–215°、飽和度約 15–25%；由上往下變暗。
- **銀白是主角。** 文字與高光承擔畫面；彩色只在小面積出現。
- **潮汐青只做功能。** 連結、閱讀進度、焦點、深度計。
- **紅色只在焦點。** 品牌印、引言線、NEW 的菱形；viewport 面積 `<5%`（實測首頁 ≈0.06%）。
- **燈火金是唯一暖色。** 反白選取、小標題羅馬數字、程式碼字串、首頁的 SINCE 2014。
- **越往下讀，越深。** 環境層讀取 `--depth`（0 在頁頂、1 在頁底），整頁隨閱讀下沉。

## Colors

### Token contract

`src/styles/tokens.css` 是唯一允許出現色值的地方；component 只用 `var(--token)`。
兩個主題共用同一組 token 名稱，只由 `html[data-theme]` 切換。

| Token | 用途 | Dark | Light |
|---|---|---|---|
| `--water-1`…`--water-4` | 水柱梯度（頁首 → 深淵） | `#2A3843` → `#0B0E11` | `#F2F4F5` → `#CFD7DB` |
| `--bg` / `--bg-surface` / `--bg-raised` / `--bg-sunken` | 底色四階 | `#14191F` / `#181E25` / `#1E252D` / `#0B0E11` | `#E6EAEC` / `#F2F4F5` / `#DBE1E4` / `#D4DBDF` |
| `--fg` | 主文字（獵人的銀髮） | `#E6E8E9` | `#161C22` |
| `--fg-muted` | 次要文字 | `#B9BDC5` | `#3E4A55` |
| `--fg-faint` | meta、分隔 | `#9AA4B0` | `#56626D` |
| `--rule` / `--rule-strong` | 1px 線 | `#2C353D` / `#46515B` | `#C7CFD3` / `#A3ADB3` |
| `--accent` / `--accent-fill` | 血紅（填色、線） | `#B3262F` | `#9E1F28` |
| `--accent-text` | 血紅小字 | `#EC6F78` | `#9E1F28` |
| `--glow` / `--glow-dim` / `--glow-text` | 潮汐青 | `#7EB5AC` / `#4F8F90` / `#93C9BF` | `#2F7D72` / `#2A6B62` / `#1F6157` |
| `--gold` / `--gold-text` | 燈火金 | `#D9C89D` | `#8A6D2C` / `#6E5420` |
| `--selection-bg` / `--selection-fg` | 反白選取 | 金 30% / `#FFF` | 金 22% / `--fg` |
| `--title-grad` | 大標題漸層（青 → 銀） | | |
| `--env-*` | 環境層（光、微粒、生物光、魚、剪影、霧、顆粒） | | |

`--ember` 保留為 `--gold` 的別名，只為了舊 component（Plate 按鈕的內框）不必一次改完。

### Contrast

小字以**最亮的水色**驗算，因為頁首的 meta 就坐在 `--water-1` 上。

| 文字 token | Dark on `--water-1` / `--bg` | Light on `--water-1` / `--water-4` |
|---|---|---|
| `--fg` | 9.8 / 14.4 | 15.6 / 11.8 |
| `--fg-muted` | 6.4 / 9.4 | 8.2 / 6.2 |
| `--fg-faint` | 4.8 / 7.0 | 5.7 / 4.3 |
| `--glow-text` | 6.5 / 9.5 | 6.6 / 5.0 |
| `--gold-text` | 7.3 / 10.7 | 6.4 / 4.9 |
| `--accent-text` | 4.1 / 6.0 | 7.1 / 5.4 |

- `--accent`（填色紅）不排小字；紅色小字只用 `--accent-text`。
- light 的 `--fg-faint` 在最暗水色上只有 4.3，只用於 ≥12px 的等寬 meta，不排正文。

### Named color rules

- **The Scarce Red Rule.** 紅只出現在品牌印、引言線、NEW；viewport 紅色像素 `<5%`，正常目標 `≤1%`。
- **The Single Warmth Rule.** 燈火金是唯一暖色；不新增橙、黃、綠的語意色。
- **The Function Teal Rule.** 潮汐青不做大面積氣氛色，只標示可互動或進度。
- **The No Hardcode Rule.** component 不寫 hex／rgb；環境層 SVG `feColorMatrix` 的係數是噪聲參數、不是 UI 色，屬唯一例外。

## Typography

| 角色 | 字體 | 用途 |
|---|---|---|
| Caps | Cinzel 400／500／600 | 站名、導覽、標籤、小標題編號、NEW |
| CJK display | Noto Serif TC Variable 600 | 首頁 manifesto、文章標題、h2 |
| Headline / Body | EB Garamond Variable ＋ 系統宋體 | 列表標題、正文 |
| Meta | Space Mono 400／700 | 日期、分類、閱讀時間、HUD 讀數、深度計 |
| Code | JetBrains Mono Variable | 程式碼 |

全部以 `@fontsource` 自架（PRODUCT.md 硬性約束），皆為 SIL OFL。

- 首頁 manifesto `clamp(36px, 5.2vw, 64px)`、文章標題 `clamp(32px, 4.4vw, 46px)`，兩者用 `--title-grad` 做文字漸層。
- 正文 19px／1.85，連續 CJK 文字 ≥16px。
- 文章 h2 由 CSS counter 自動加上燈火金的大寫羅馬數字（`I`、`II`…）。
- 有序清單的編號用 Cinzel、潮汐青。
- **The Chrome Frontier Rule.** Cinzel 與 Space Mono 只活在 chrome、meta、編號與裝飾；正文段落不使用。

## Layout

- 閱讀層 720px、chrome 層 1120px、code overhang 840px；首頁與列表的日期欄 150px（<1120px 時 110px、<768px 併入單欄）。
- 沒有閱讀底板：正文直接坐在水柱上。v7 的實心 `.ds-page::before` 與直排浮水印已移除。
- 文章列表永遠是單欄表列，不是卡片。

## Interface language (HUD)

v9 的 chrome 使用短英文大寫讀數（產品決策 2026-11-02，取代 PRODUCT.md 舊的「直白名稱」規則）：

- 導覽：`ABOUT` `SEARCH` `ARCHIVE`；`aria-label` 保留各語系的原名。
- Header 中段一條點線，尾端顯示 `: 目前頁名`。
- 首頁不放 kicker，也不放 HUD 讀數；manifesto 下方是作者自我介紹（2026-11-03 起，見 Home hero）。
- 列表與文章 meta：`分類 / 6 MIN / 2026.08.20`；最新一篇且發布未滿 30 天才標 `NEW`（build 時判斷，讀者瀏覽器再判斷一次）。
- 文章頁右側深度計 `DEPTH` ＋ `000–200 m`，數值是閱讀進度的換算，不是真實資料。
- manifesto 文字必須逐字維持「信仰不確定性，同時用確定性工程過生活」。

## Components

### Header

- 68px，sticky；背景是 `--water-1` 97% → 94% 的漸層加 `blur(16px)`，底部 1px `--rule`。不要再調得更透明：捲動時標題會從導覽後面透出來（2026-11-03 critique）。
- 品牌印 28×28 實心 `--accent`、Cinzel 600 14px「W」、內縮 2px 的白色細框；站名 Cinzel 500、字距 0.28em。
- 目前頁面以 1px `--glow` 底線標示。

### Home hero

- manifesto → 自我介紹 → 「關於我／經歷與作品 →」兩個連結；hero 底部 1px `--rule`。標題上方不放 kicker／eyebrow。
- 自我介紹：EB Garamond 18px（mobile 17px）、`--fg-muted`、最寬 34em；只用 About 頁已寫明的事實，中文以 `Intl.Segmenter` 保持詞組不斷行。連結 `--glow-text`、底線 `--glow` 45%、touch target 44px。
- **W 標誌**：斷筆的 W（兩座尖塔、接點處留缺口、頂端短襯線、底部一長一短兩條水線），直角端點；`--fg`、不透明度 `--env-sigil-op`。使用者 2026-11-02 判定它不像活動標準字，採用此造型。
- **海流線**：manifesto 下方一條平緩的波浪線，青 → 銀 → 淡出，載入時由左往右畫出。
- 海流線是原創造型，不得改回穿過標題的魚叉斜線（見 Anti-references）。

### Post index row

- 表列；padding 40px 0、底部 1px `--rule`。
- 日期在左欄（Space Mono 13px）；meta、標題（EB Garamond 27px／500）、標籤在右欄。
- hover／focus：底線由左往右長出（青 → 銀），整列淡淡一層青色水光；不使用左側紅線。

### Tags

- Cinzel 大寫、11px、`#` 前綴；英文標籤字距 0.2em，中文 0.08em；hover 升到 `--fg`。

### Article

- meta 列用 Space Mono 12px；標題用 `--title-grad`；h2 前有燈火金羅馬數字。
- 連結 `--glow-text`，底線為 `--glow` 45%；hover 升到 `--fg`。
- 引言：左側 2px、由 `--accent-text` 往下淡出的血紅線，`--fg-muted`。只有英文引言用斜體；中文字型沒有斜體，套 italic 會變成瀏覽器合成的歪斜字。
- 程式碼：`--bg-sunken`、1px `--rule`；keyword `--glow`、string `--gold-text`、comment／punctuation `--fg-faint`、number `--accent-text`。

## Environment

`src/components/BackgroundField.astro` 一個元件承擔全部環境層。圖層由遠到近：

| 圖層 | 內容 | 隨 `--depth` 的變化 |
|---|---|---|
| 水柱 | `--water-1…4` 垂直梯度，再疊一層 `--water-4` | 疊層不透明度 0 → 0.5（下沉） |
| 光柱 | 5 道斜光，18–26s 緩慢擺動 | 0.9 倍淡出 |
| 魚群 | canvas，3 群、頭朝游向、尾巴擺動，在霧後方；文章頁在閱讀柱（中央 ±380px）內完全淡出，外側 140px 漸回 | 視差 0.2–0.32 |
| 夕霧 | 兩層噪聲霧，上層微暖、下層偏冷，110s／160s 橫移 | — |
| 遠方巨影 | 模糊的大型剪影，240s 橫越 | `depth > 0.4` 才浮現 |
| 水母 | canvas，收縮推進 → 滑行 → 下沉，觸手隨速度拉直或散開；只在 ≥900px 的兩側 | 亮度 0.55 → 1 |
| 粒子 | 海雪（上浮）、光中微塵（只在光柱內可見）、生物螢光（呼吸、會靠近游標） | 微塵淡出；螢光 0.18 → 1 |
| 探照燈 | 游標周圍一圈淡光，粒子被推開；只在 `pointer: fine` | — |
| 岩柱海床 | 頁面最底部的兩層尖岩，頂端淡入濁水、在霧後方 | — |
| 顆粒 | SVG 噪聲，dark overlay／light multiply | — |
| 進度線、深度計 | 頂部 2px；深度計只在文章頁且 ≥1280px | 寬度／高度 = depth |

- **The Reading Column Exemption.** 環境層可以從 720px 閱讀柱後方經過（產品決策 2026-11-02）；
  可讀性靠低不透明度與 token 對比保證，任何新圖層都要在最亮／最暗處重新驗算 `--fg-muted`。
- 已移除且不再使用：珊瑚礁、海帶、海扇、水螅、熱泉氣泡、直排浮水印、羅盤、焦散光紋（使用者明確否決焦散）。

## Motion

- 環境動畫只動 `transform`／`opacity`／canvas；正文與 chrome 除 120ms 狀態回饋外不動。
- 只用一個 passive scroll listener ＋ `requestAnimationFrame` 寫入 `--depth`；canvas 共用一個動畫迴圈。
- **刻意不讀 `prefers-reduced-motion`**（產品決策 2026-11-02）：所有環境動畫在 reduce 模式下照常播放。這是專案接受的可及性例外。

## Anti-references

### 法律與品牌紅線

- 禁用任何官方圖像資產：立繪、活動 KV、logo、UI 截圖、PV／EP 畫面、手辦照。About 頁只放文字、色票與來源連結。
- 不以遊戲專有名詞當站內元件、導覽或品牌名稱（About 頁標註靈感來源不在此限）。
- **禁止仿製活動 logo、標題 lockup 與標題字的造型**：海流線不得做成魚叉斜線或穿過標題的刀鋒；W 標誌維持現行斷筆造型，不再往活動標題字的三角「A」靠攏。

### 視覺紅線

- 飽和青綠大面積、紅青補色並排的高彩度組合（v7 的教訓）。
- 一次堆疊多種「高級感」裝飾：直排浮水印、兩側光柱框、羅盤、礁石帶。
- 焦散網紋（試過、使用者否決）。
- 大面積紅色、霓虹面板、卡片 deck、pill filter。

## Acceptance checklist

- 兩主題 token 與本文件一致；component 無 hardcoded color。
- 小字對 `--water-1` 與最暗水色都 ≥4.5（light `--fg-faint` 例外見上）。
- 首頁首屏紅色像素 `<5%`，並回報實測比率。
- 320、390、430、1440px 的 `documentElement.scrollWidth` 等於 `clientWidth`。
- 魚頭朝游動方向；水母只在 ≥900px 出現。
- `astro check` 0 error，`yarn build` 成功。
- 無官方資產、無仿製活動標題字造型。
