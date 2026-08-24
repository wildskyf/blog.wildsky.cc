---
name: Wildsky's Blog
description: 覆潮之下 — 哥德航海 × 有機深淵；技術文件為主體，深海航行日誌為外殼
colors:
  dark-bg: '#07181A'
  dark-bg-surface: '#0A2325'
  dark-bg-raised: '#123234'
  dark-bg-sunken: '#041113'
  dark-fg: '#DDEBEC'
  dark-fg-muted: '#A3C0C3'
  dark-fg-faint: '#76A0A5'
  dark-fg-on-accent: '#F5F8F8'
  dark-rule: '#2D575B'
  dark-accent: '#C8323E'
  dark-accent-text: '#F06E78'
  dark-accent-fill: '#9F1F2B'
  dark-glow: '#7FD3D4'
  dark-glow-dim: '#62B7B9'
  dark-glow-line: '#3F9B9E'
  dark-ember: '#E8895A'
  light-bg: '#E7F0F1'
  light-bg-surface: '#F4F8F8'
  light-bg-raised: '#DBE9EA'
  light-bg-sunken: '#D2E1E2'
  light-fg: '#102C2F'
  light-fg-muted: '#365F63'
  light-fg-faint: '#3C666A'
  light-fg-on-accent: '#F9FBFB'
  light-rule: '#A7C2C4'
  light-accent: '#C8323E'
  light-accent-text: '#98212C'
  light-accent-fill: '#C8323E'
  light-glow: '#075D60'
  light-glow-dim: '#23696C'
  light-glow-line: '#26898D'
  light-ember: '#9E431F'
  dark-env-surface: '#15383A'
  dark-env-mid: '#0E292B'
  dark-env-deep: '#081D1F'
  dark-env-abyss: '#041315'
  dark-env-raised: '#1A4143'
  dark-env-silhouette: '#020A0B'
  dark-env-beam: '#76A0A5'
  dark-env-caustic: '#7FD3D4'
  dark-env-spark: '#3F9B9E'
  light-env-surface: '#EDF5F5'
  light-env-mid: '#DCE9EA'
  light-env-deep: '#CCDDE0'
  light-env-abyss: '#C0D4D6'
  light-env-raised: '#E3EEEE'
  light-env-silhouette: '#A8C4C6'
  light-env-beam: '#F4F8F8'
  light-env-caustic: '#F4F8F8'
  light-env-spark: '#26898D'
typography:
  display:
    fontFamily: "'Cormorant SC', 'EB Garamond Variable', 'Noto Serif TC Variable', serif"
    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)'
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: '0.035em'
  cjk-display:
    fontFamily: "'Noto Serif TC Variable', serif"
    fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)'
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: '0.008em'
  headline:
    fontFamily: "'EB Garamond Variable', 'Noto Serif TC Variable', serif"
    fontSize: 'clamp(1.5rem, 2.7vw, 1.875rem)'
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '0.008em'
  title:
    fontFamily: "'EB Garamond Variable', 'Noto Serif TC Variable', serif"
    fontSize: '1.5rem'
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: '0'
  body:
    fontFamily: "'EB Garamond Variable', 'Noto Serif TC Variable', serif"
    fontSize: '1.1875rem'
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: '0.008em'
  small-caps:
    fontFamily: "'EB Garamond', serif"
    fontSize: '0.9375rem'
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: '0.055em'
    fontVariantCaps: 'all-small-caps'
  atmospheric-meta:
    fontFamily: "'Space Mono', monospace"
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: '0.045em'
  code:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: '0.9375rem'
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: '0'
spacing:
  xs: '4px'
  sm: '8px'
  md: '12px'
  lg: '16px'
  xl: '24px'
  '2xl': '32px'
  '3xl': '48px'
  '4xl': '64px'
  '5xl': '96px'
layout:
  readingMeasure: '720px'
  chromeMeasure: '1120px'
  codeMeasure: '840px'
  pageGutterDesktop: '24px'
  pageGutterMobile: '20px'
plate:
  borderWidth: '1px'
  innerInset: '4px'
components:
  header-bar:
    backgroundColor: '{colors.dark-bg-surface}'
    textColor: '{colors.dark-fg}'
    height: '72px'
  brand-seal:
    backgroundColor: '{colors.dark-accent-fill}'
    textColor: '{colors.dark-fg-on-accent}'
    width: '30px'
    height: '30px'
  article-surface:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg}'
    width: '720px'
  post-index-row:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg}'
    padding: '30px 0 32px'
  tag-inline:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg-muted}'
    padding: '10px 0 9px'
  button-primary:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg}'
    height: '58px'
  code-block:
    backgroundColor: '{colors.dark-bg-sunken}'
    textColor: '{colors.dark-fg}'
    padding: '20px 24px'
---

# Design System: Wildsky's Blog

## Canon

**Creative North Star：覆潮之下 — 哥德航海 × 有機深淵。**

`comp/index-v7.html` 確立的方向是 canon；`references/style-research.md` 的 Recommendations 是本次重寫的研究依據。
若研究報告的示意色值、v7 實作與可讀性互相衝突，優先序是：實測可讀性 → v7 的構圖語言 → 研究報告的方向。

這是一套為長文技術部落格設計的語言，不是遊戲 UI 仿作。讀者看到的是一冊沉入水中的私人航行誌：
正文仍然安靜、直接、容易讀；深海存在於頁面邊界、section 轉場、光線比例與少量航海線稿中，不靠介面術語。

- **Dark 是深淵中的日誌。** 綠得發黑的 petrol 水體、帶青冷白文字、稀疏生物光。
- **Light 是陰天海面上的紙頁。** 帶青的濕紙色、深 petrol 墨色、有機輪廓像水痕而不是污漬。
- **血紅是錨。** `#C8323E` 跨主題不變，viewport 面積 `<5%`。
- **珊瑚是遠處的燈。** `--ember` 是唯一限量豁免的第二暖色，viewport 面積 `<1%`。
- **形狀先分人造與自然。** 導覽與控制保留直線紀律；水層、珊瑚、海扇、水螅與 deckle edge 才能有機。
- **正文不演。** 720px、19px、襯線、1.9 行高；沒有深海角色扮演文案、裝飾框或暖色。

## Colors

### Token contract

component 只能使用語意 token；hex 只准出現在主題 token 宣告與本文件的對照表。核心結構仍是 15 個 token：
四階 `--bg`、四個 `--fg` 角色（含 on-accent）、`--rule`、三個 `--accent` 角色、三個 `--glow` 角色；
另新增唯一豁免 `--ember`，因此每個主題實際宣告 16 個色彩 token。

| Token            | 用途                                | Dark      | Light     |
| ---------------- | ----------------------------------- | --------- | --------- |
| `--bg`           | 頁面地面                            | `#07181A` | `#E7F0F1` |
| `--bg-surface`   | 閱讀／chrome 表面                   | `#0A2325` | `#F4F8F8` |
| `--bg-raised`    | hover／啟用態                       | `#123234` | `#DBE9EA` |
| `--bg-sunken`    | code、footer、凹陷面                | `#041113` | `#D2E1E2` |
| `--fg`           | 主要文字                            | `#DDEBEC` | `#102C2F` |
| `--fg-muted`     | 摘要、small caps meta、圖說         | `#A3C0C3` | `#365F63` |
| `--fg-faint`     | 弱化 meta／圖示；仍可承載 15px 文字 | `#76A0A5` | `#3C666A` |
| `--fg-on-accent` | 紅色填色上的文字                    | `#F5F8F8` | `#F9FBFB` |
| `--rule`         | hairline、非文字描邊                | `#2D575B` | `#A7C2C4` |
| `--accent`       | 固定血紅錨；線、標記、≥24px 字      | `#C8323E` | `#C8323E` |
| `--accent-text`  | 小字血紅可讀變體                    | `#F06E78` | `#98212C` |
| `--accent-fill`  | Seal 等極小填色                     | `#9F1F2B` | `#C8323E` |
| `--glow`         | focus ring、主要生物光、語法高亮    | `#7FD3D4` | `#075D60` |
| `--glow-dim`     | 次要語法色、低階冷光文字            | `#62B7B9` | `#23696C` |
| `--glow-line`    | 純裝飾細線；不可作文字              | `#3F9B9E` | `#26898D` |
| `--ember`        | 燈塔暖光／特殊標記；極稀有          | `#E8895A` | `#9E431F` |

所有冷色 token 的 HSL hue 落在 **180–188°**，保留規格上限 180–196° 的空間供圖片與環境層使用。
Light 不採研究報告示意的 `#3A7CA5`：它偏回科技藍，與本次確立的 180–196° 主軸矛盾。

### Theme character

- Dark 的四階從 `#041113` 到 `#123234`，暗但不落純黑；hover 往亮處抬升。
- Light 的四階從 `#D2E1E2` 到 `#F4F8F8`，亮但不落純白；hover 像按濕紙一樣往暗處下沉。
- 主題不是互相反轉。兩者共享 hue、語意、排版與形狀，但各自重算對比。

### Gradient choreography

垂直深度不是四等分色帶。環境水面層只佔頂部約 8%，在 26% 前完成第一段下潛，55% 進入 deep，
88% 後才穩定落入 abyss；頁面下半部應有較長、安靜的深色停留。主 gradient 疊三個同色相、非對稱
radial field：較大的亮場由左上進入，較小的回光停在右側約四分之一高度，另一片低明度水團由左側
約三分之二高度進場；三者都不可形成等寬色帶或壓低文字對比。

閱讀柱不可再用單一實色切斷深度。Desktop 以水平 mask 保護中間 820px 後，在保護面內沿垂直方向使用
`--bg-surface 0% → --bg 20% → --bg 58% → --bg-sunken 100%`；mobile 改為全寬保護面，比例微調為
`0% → 22% → 60% → 100%`。這些 stop 只能使用已完成對比驗算的四階背景 token，不得以透明環境色直接
壓在正文下方。

Caustics 不畫成等距窄條；使用 2–3 個寬度、長短與中心不同的橢圓 radial light，頂部最亮、在首屏下緣前消失。
燈塔光束上窄下寬，以不對稱 clip-path 收束，從垂直軸傾斜約 12–16°；alpha peak ≤0.18，任何 stop 都維持
180–196° 同色相。光束只能極慢呼吸，不可掃描頁面或形成探照燈式追蹤動作。

### WCAG contrast matrix

計算採 WCAG 2.x relative luminance `(L1 + 0.05) / (L2 + 0.05)`，以未混色的 token 對四個合法底色逐項驗算。
15–16px 襯線小字與 true small caps 以 **4.5:1** 為底線，不用縮字或宣稱「只是裝飾」規避。

#### Dark

| Token           | `--bg` | `--bg-surface` | `--bg-raised` | `--bg-sunken` |
| --------------- | -----: | -------------: | ------------: | ------------: |
| `--fg`          |  14.87 |          13.41 |         11.21 |         15.68 |
| `--fg-muted`    |   9.43 |           8.50 |          7.11 |          9.94 |
| `--fg-faint`    |   6.36 |           5.74 |          4.79 |          6.71 |
| `--accent`      |   3.45 |           3.11 |          2.60 |          3.64 |
| `--accent-text` |   6.24 |           5.63 |          4.71 |          6.58 |
| `--glow`        |  10.54 |           9.51 |          7.95 |         11.12 |
| `--glow-dim`    |   7.79 |           7.03 |          5.87 |          8.21 |
| `--ember`       |   7.06 |           6.37 |          5.33 |          7.45 |

`--fg-on-accent` on `--accent-fill` = **7.27**。

#### Light

| Token           | `--bg` | `--bg-surface` | `--bg-raised` | `--bg-sunken` |
| --------------- | -----: | -------------: | ------------: | ------------: |
| `--fg`          |  12.74 |          13.79 |         11.84 |         10.97 |
| `--fg-muted`    |   6.10 |           6.60 |          5.67 |          5.25 |
| `--fg-faint`    |   5.49 |           5.95 |          5.11 |          4.73 |
| `--accent`      |   4.55 |           4.93 |          4.23 |          3.92 |
| `--accent-text` |   7.00 |           7.58 |          6.51 |          6.03 |
| `--glow`        |   6.61 |           7.15 |          6.14 |          5.69 |
| `--glow-dim`    |   5.48 |           5.93 |          5.09 |          4.72 |
| `--ember`       |   5.53 |           5.99 |          5.14 |          4.76 |

`--fg-on-accent` on `--accent-fill` = **5.08**。

`--accent` 固定值在部分底色不足 4.5，因此它**不是小字 token**；小字一定改用 `--accent-text`。
`--rule` 與 `--glow-line` 是非文字 token，不以文字 AA 宣告合格，也不得被拿來排 12–16px meta。

### Area budgets

面積預算以最終 viewport 截圖的像素分類驗收，不以 DOM 元件數猜測。

| 色彩                                   | 正常預算 | 硬上限 | 合法用途                                                      |
| -------------------------------------- | -------: | -----: | ------------------------------------------------------------- |
| 血紅族（hue 345–360°／0–2°、中高飽和） |    `≤3%` |  `<5%` | Seal、current/active 線、link hover、drop cap；正文段落禁用。 |
| 珊瑚族（hue 10–25°、中高飽和）         |  `≤0.5%` |  `<1%` | 一束燈塔光、一個特殊標記或極少量孢子；每 viewport 只選一類。  |

紅色硬上限之外，再加結構限制：單一填色元件不得大於 `200 × 40px`，一個 viewport 最多兩枚 Seal。
珊瑚不得用於 success 狀態、一般 hover、段落連結、整片 gradient 或與紅色並列的雙主 CTA。

### Environment tokens

環境層不是介面，不承載資訊；它使用獨立 token，避免把 text token 混成不可預測背景。

| Token              | 用途                 | Dark      | Light     |
| ------------------ | -------------------- | --------- | --------- |
| `--env-surface`    | 水面方向             | `#15383A` | `#EDF5F5` |
| `--env-mid`        | 中層水色             | `#0E292B` | `#DCE9EA` |
| `--env-deep`       | 深層水色             | `#081D1F` | `#CCDDE0` |
| `--env-abyss`      | 最深水色             | `#041315` | `#C0D4D6` |
| `--env-raised`     | 局部亮水層           | `#1A4143` | `#E3EEEE` |
| `--env-silhouette` | 珊瑚、海扇、水螅剪影 | `#020A0B` | `#A8C4C6` |
| `--env-beam`       | 冷燈塔光束           | `#76A0A5` | `#F4F8F8` |
| `--env-caustic`    | 水面波光             | `#7FD3D4` | `#F4F8F8` |
| `--env-spark`      | 氣泡／冷孢子         | `#3F9B9E` | `#26898D` |

環境最亮／最暗元素不得穿過 720px 閱讀柱；若穿過 1120px chrome 內側，必須先加一層實色或高不透明度
的 `--bg`／`--bg-surface` 保護文字，再以實際 screenshot 取最壞點驗算。

### Named color rules

**The Red Dress Rule.** 血紅 viewport 像素 `<5%`，正常目標 `≤3%`。紅的力量只來自稀缺。

**The Anchor Rule.** `--accent` 在 dark／light 永遠是同一支 `#C8323E`；可讀變體與 fill 可依主題調整，錨不可動。

**The Two-Axis-Plus-Ember Rule.** 主軸只有 180–196° petrol/teal；血紅軸只有 355–356°；
珊瑚 18° 是唯一豁免，且 `<1%`。success／warning 不得藉語意之名新增綠、黃或橙色。

**The No Hardcode Rule.** component 層不得出現 hex、`rgb()`、`hsl()` 或 Tailwind palette class；只准 `var(--token)`。
SVG 也必須用 `currentColor` 或 CSS custom property。

**The Never-Neutral Rule.** 所有背景、前景、rule 與冷光都帶 180–196° 色相；純白、純黑、中性灰、暖灰皆違規。
接近白的顏色即使 hue 數值不穩定，RGB 仍必須保留可見的 cyan 成分差。

**The Same-Hue Gradient Rule.** 冷場 gradient 的每個 stop 都必須落在 180–196°，只能沿明度／少量飽和度變化；
不得跨到藍紫、綠黃。血紅與珊瑚不得參與 gradient。radial glow 是光源分布，不是跨色漸層豁免。

**The Glow-Is-Light Rule.** `--glow*` 只能作字、1–2px 線、focus ring、≤6px 光點或低 alpha radial light；
不能作容器填色、大片霓虹邊框或 shadow 替代品。

**The Faint Floor Rule.** `--fg-faint` 在四階合法底色上的最低值是 dark 4.79、light 4.73，
因此可承載最小 15px meta；任何透明化、混色或環境疊加後若低於 4.5，立即升回 `--fg-muted`。
`--rule` 與 `--glow-line` 永遠不是文字。

**The Color-Mix Clause.** `color-mix()` 只准用於裝飾線、focus 外暈、hover 背景或有機環境層；文字色禁止混透明。
語法固定為 `color-mix(in oklab, var(--token) N%, transparent)`，不得混兩個不同色相 token。
任何 `color-mix()` 產生的文字／互動邊界仍需針對最終背景驗算；token 本身通過不代表混色後通過。

## Typography

### Canonical stack and licensing

| 角色                        | 字體                   | 授權        | 官方來源                                                                  | 決策                                |
| --------------------------- | ---------------------- | ----------- | ------------------------------------------------------------------------- | ----------------------------------- |
| 繁中 body／heading fallback | Noto Serif TC Variable | SIL OFL 1.1 | [notofonts/noto-cjk](https://github.com/notofonts/noto-cjk)               | 覆蓋與 webfont 穩定優先，正式定案。 |
| Latin body／true small caps | EB Garamond Variable   | SIL OFL 1.1 | [octaviopardo/EBGaramond12](https://github.com/octaviopardo/EBGaramond12) | 人文襯線；`smcp`／`c2sc`。          |
| Display                     | Cormorant SC           | SIL OFL 1.1 | [CatharsisFonts/Cormorant](https://github.com/CatharsisFonts/Cormorant)   | 只用 ≥36px 的短標題。               |
| 氛圍 meta                   | Space Mono             | SIL OFL 1.1 | [googlefonts/spacemono](https://github.com/googlefonts/spacemono)         | 只限英文縮寫、日期與技術數值。      |
| Code                        | JetBrains Mono         | SIL OFL 1.1 | [JetBrains/JetBrainsMono](https://github.com/JetBrains/JetBrainsMono)     | 沿用；只負責程式碼。                |

**Cormorant SC 而非 Playfair Display SC。** Cormorant 有獨立 Small Caps 家族，字身較窄長、細銳，
更接近航海銅版刻字；Playfair 的報刊／維多利亞編輯感較強，容易把首頁拉成時尚雜誌。
代價是小尺寸細筆脆弱，所以 Cormorant SC 僅限 `≥36px`、600 weight、短行，不用於導覽、meta 或正文。

**Noto Serif TC 而非源流明體。** 改版前使用的 Fontsource static package，其 full Traditional Chinese 400 WOFF2 約 1.81 MiB；
Fontsource variable 5.3.0 全包約 5.85 MiB，依 unicode-range 切為多個 WOFF2。以 v7 可見字元估算，實際命中的 15 個
variable shards 約 1.24 MiB，並同時涵蓋所需字重。源流明體 2.100 的七個 TW OTF 各約 16.0–16.4 MiB，
官方沒有 WOFF2／unicode-range 發行；雖可自建逐頁 subset，但 120 篇文章會帶來字元盤點、缺字回歸與快取碎片成本。static Noto package 已從 production 移除。

正式載入策略：

1. CJK 由 `@fontsource-variable/noto-serif-tc` 載入 `wght 400–600` 的 unicode-range shards。
2. Latin 優先由 EB Garamond、Cormorant SC、Space Mono 各自承擔，避免 Noto CJK shard 為 ASCII 重複下載。
3. production 預載只限首屏真正命中的 Latin WOFF2；不預載全部 CJK shards。
4. `font-display: swap`；fallback 指標以 `size-adjust`／`font-size-adjust` 校正時，需重新做 CLS smoke test。
5. Chakra Petch、Source Sans 3、Source Serif 4、Cinzel、Bodoni Moda 全面退場，不留隱性 fallback。

### Hierarchy and minimum sizes

- **Display:** Cormorant SC 600，`clamp(36px, 5vw, 56px)`，行高 1.05，字距 0.035em；只排短 Latin 標題。
- **CJK display:** Noto Serif TC 600，`clamp(36px, 4.2vw, 56px)`；mobile 可降到 30px，行高 1.28，字距 ≤0.015em。
- **Headline:** EB Garamond／Noto Serif TC 600，24–30px，行高 1.4。
- **Body:** EB Garamond 400 + Noto Serif TC 400，19px，行高 1.9，字距 0.008em，量尺 720px。
- **Compact body:** 16px 是連續襯線文字硬下限，行高至少 1.75；只用於摘要、圖說與短段落。
- **Small caps meta:** EB Garamond 500，15px，行高 1.45，字距 0.055em，`font-variant-caps: all-small-caps`，
  並顯式開啟 `font-feature-settings: 'smcp' 1, 'c2sc' 1`。
- **Atmospheric meta:** Space Mono 400，12px，行高 1.5，字距 0.045em；一組最多 24 個 Latin 字元，不排 CJK。
- **Navigation:** EB Garamond／Noto Serif TC 500，18px，正常大小寫；觸控高度 ≥44px。
- **Code:** JetBrains Mono 400，15px，行高 1.7。

### 15–16px serif readability assessment

Noto Serif TC 在 16px／400 weight、正常像素密度下可讀，但細橫筆與標點在 dark 背景會比無襯線更易糊；
因此 16px 只准短摘要與圖說，採 `--fg`／`--fg-muted`、行高 ≥1.75。15px 的 Noto Serif TC 不用於連續 CJK 句子。

EB Garamond 的 x-height 偏小；15px 合法範圍只限 true small caps meta，需 500 weight、`--fg-muted` 以上對比、
短行且不可全段斜體。正文與導覽分別維持 19px、18px，不以提高對比換取縮小字級。

### Named typography rules

**The Chrome Frontier Rule.** Cormorant SC 與 Space Mono 只活在 display、導覽外殼、meta 與裝飾；
EB Garamond／Noto Serif TC 承擔內容。正文段落不得出現 display face 或 atmospheric mono。

**The Uppercase Latin Rule.** 一般 meta 不再用 CSS `text-transform: uppercase` 配寬字距；必要的英文縮寫改用 EB Garamond true small caps。
Space Mono 只承載真實日期、頁碼或技術數值，字距上限 0.06em，不用來替普通介面文字製造儀表感。
中文不做 small caps、不 uppercase，字距上限 0.02em。

**The Bilingual Title Rule.** 雙語標題並置時，中文用 Noto Serif TC 正常明體，Latin 用 EB Garamond true small caps
或大尺寸 Cormorant SC；以 baseline／明度對齊，不把中文縮小來模仿小型大寫。

**The Minimum Serif Rule.** 連續襯線正文 ≥16px，長文預設 19px；EB Garamond small caps ≥15px；Cormorant SC ≥36px。

**The Boring Body Rule.** 正文固定 720px、19px、1.9 行高、段落間距 24px；零裝飾框、零環境動畫、零暖色。

**The Weight-Follows-Meaning Rule.** 尺寸與重量給資訊價值，不給裝飾代號。篇數、頁碼與年份不得搶過文章標題。

## Layout

版型兩主題完全相同。閱讀層 720px、chrome 層 1120px、code overhang 840px。

- `≥1120px`：完整 overhang，水平 rule／meta 可比正文兩側各伸出最多 200px。
- `768–1119px`：chrome 為 `min(1120px, 100% - 48px)`，閱讀層逐步收斂。
- `<768px`：兩層同寬 `100% - 40px`，overhang 合法退場，不用負 margin 偽造。
- 側邊直排導軌只在 `≥1280px` 出現，`aria-hidden="true"`，不承載連結與資訊。
- 文章索引永遠是單欄表列，不是卡片網格；每列上緣 1px rule，日期／meta／標題／tag 依序掃讀。
- 搜尋頁沿用 720px 閱讀柱，表單是直角的 plain input／action；結果維持有 rule 的單欄表列，不做卡片。
- 文章彙整以年份分組；desktop 年份放在 gutter，mobile 移到該年份列上方，文章列保持緊密且只呈現日期與標題。

**The Overhang Rule.** `chrome computed width > reading computed width` 時，rule 與 meta 延伸到 chrome；
兩層等寬時規則停用。code block 只在可用寬度 ≥840px 時 overhang。

**The Single Column Rule.** 沒有內容側欄；環境剪影與直排字不是第二資訊欄。

## Elevation and depth

深度只由四階底色、1px rule、有機層疊與極低 alpha 局部光建立；不用 elevation shadow。

**The Zero Shadow Rule.** 除 focus ring 的 `0 0 0 2px var(--glow)` 外，`box-shadow: none`。
燈塔／生物光以 radial gradient 或 SVG alpha 呈現，不用 drop shadow、text shadow 或 neon shadow。

## Shapes

### Organic or plumb

舊 The No Radius Rule 與 One-Corner Rule 退場，改由單一判準取代：

**The Organic-or-Plumb Rule.** 人造介面用垂直／水平直線與 `border-radius: 0`；自然層用真正不規則的 SVG／mask 邊。
不得折衷成「四個柔和圓角」、單一裝飾圓角、切一角、skew 平行四邊形或規律鋸齒。
真圓形只限氣泡、光點、頭像與羅盤環。

這條重寫「圓角卡片」禁令：**卡片 deck 與 pill 仍禁止**；section 或圖片可以有 deckle edge，
因為那是材質邊界，不是把 UI 卡片變可愛。

### The Plate and Seal

- **The Plate:** 外框 1px、內縮 4px 再一條 1px 內框；只給明確控制（下一頁、theme control），不是通用容器。
- **The Seal:** 唯一實心血紅小面；品牌單字印或明確狀態印。一 viewport 最多兩枚。
- tag、分類與文章列不用 Plate；它們靠留白、下線與文字層級。

### The Organic Layer Rule

環境層可用三類材料；同一 viewport 最多一類作主材，另外兩類只能是低對比、局部且不穿過閱讀柱的輔材，避免素材拼貼：

1. **Deckle／墨滲邊：** section 邊界可用 SVG `feTurbulence` + `feDisplacementMap`；
   `baseFrequency` 約 `0.012 0.05`、`numOctaves=2`、固定 seed，displacement desktop 8–18px、mobile 4–10px。
   最多三道 section 邊。帶狀 strata 的上下可見邊都必須有不同的曲線節奏，路徑離 SVG viewport 邊界至少 20px，
   不得以貼齊畫布的水平線收尾。靜態文章列表優先預渲染 monochrome mask，避免每幀 filter 重算。
2. **有機剪影：** 珊瑚、海扇、水螅、海藻只用 `--env-silhouette` 單色；同一物種不重複等距排列。
   40–65% 輪廓必須裁出 viewport 或 section 邊界，尺度與旋轉需有明顯差異；不得完整居中展示成 clipart。
3. **生物光暈：** 冷光用 `--glow*`，暖燈塔用 `--ember`；radial gradient peak alpha ≤0.18，
   單一光暈直徑 ≤24vw。光只停在環境／chrome 外側，不穿過正文句子。

Light 底部海藻不得做成連續深色污漬：剪影總寬度覆蓋 ≤35%、單株間保留大面積紙色、opacity 0.18–0.28；連續 seabed／reef silhouette 在 light 隱藏，
邊緣以乾淨 mask 收束，不用 multiply 疊成髒灰。

### Nautical instrument vocabulary

合法詞彙：羅盤方位、測深刻度、單束燈塔光、繩結。全部 stroke-only、單色、1px／1.5px，
使用 `--rule` 或 `--glow-line`，opacity 0.22–0.45；一 viewport 最多兩件、不得同時圍住內容。

禁止把它們做成儀表板：不可精確等距鋪滿、不可顯示捏造的米數／座標／儀表數值、不可形成準星、
不可讓刻度與斜線組成科技 HUD 網格。

## Components

### Header and navigation

- 72px 高，`--bg-surface` 實底、底部 1px `--rule`；品牌印維持 30×30。
- 站名與 30px 品牌印使用 EB Garamond true small caps（站名 32px、印內字 19px）；Cormorant SC 只留給 ≥36px display。
- 首頁不加文章列表別名；exact tagline「信仰不確定性，同時用確定性工程過生活」是唯一 h1，header 不重複副標。
- 導覽、搜尋、關於與分頁一律使用功能本名，不使用航海／下潛替代詞。
- `≥768px` 的 header 直接顯示 `about · search · archive`；中英文順序一致，目前頁面以 1px `--accent` 底線標示。
- 完整選單維持同一套 `Explore`／`Wildsky` 資訊架構，語言切換獨立置底；品牌連結已能回首頁，因此選單不重複 `home`。
- 選單在窄螢幕為單欄、空間足夠時為雙欄，且兩者包含相同連結；文字 touch target 至少 44px，面板高度受 viewport 限制並可獨立捲動。

### Page head

- 索引頁預設保留 kicker；搜尋與文章彙整的中英文四個頁面例外，使用 `showKicker={false}`，讓主標題直接開始。

### Post index row

- 表列而非卡片；上緣 1px `--rule`，padding 30px 0 32px。
- 日期直接放在 gutter；內容 meta 依序為分類 → 閱讀時間 → 必要時「最新」，最多三項，不加前綴標籤。
- hover：左緣 2px `--accent`、日期升到 `--fg`；背景不填色。
- 單欄斷點下 `.row-main` 左側 padding 18px，避免 2px 紅線貼住標題與 tags。
- tag 是真連結，touch target ≥44px；hover/focus 同時把文字升到 `--fg`、下線轉 `--accent`，
  並以 `text-underline-offset: 0.28em` 明確表達可點，不只靠顏色。

### Search

- 表單直接坐在閱讀柱上；58px 直角 input 與透明 action 並排，mobile 改為上下堆疊，action 高 50px。
- 結果不是卡片；每列以 1px `--rule` 分隔，標題、日期與摘要依序建立層級，hover／focus 只顯示左側 2px `--accent`。
- 初始、載入、搜尋中、無結果與錯誤訊息共用固定高度 status 區，避免結果載入時版面跳動。

### Archive timeline

- 每個年份形成一組 dense ruled rows；desktop 年份置於 gutter，mobile 則移至該組文章上方。
- 每列只呈現 `MM.DD` 與標題，不加入摘要、分類或 tag；hover／focus 使用與文章索引一致的左側 2px `--accent`，背景不填色。

### Buttons

- 主要按鈕可用 The Plate，58px 高，左右 padding 36–40px；預設透明底。
- hover 不再整面灌血紅；外框轉 `--accent`、文字維持 `--fg`、內框可用 `--ember` 一次，但不得同時出現第二珊瑚用途。
- focus ring 2px `--glow`、offset 3px；disabled 用 `--rule` 且移除 hover。

### Article body

- 直接坐在 `--bg`／受保護閱讀面上，不套卡片。
- body 19px／1.9；blockquote、表格、list 保守排版。
- 紅色與珊瑚不進正文；code syntax 的 `--accent-text` 是唯一例外。

### Code block

- `--bg-sunken`、1px `--rule`、直角、無陰影、內距 20px 24px，最大 840px。
- JetBrains Mono 15px／1.7；keyword `--glow`、comment `--glow-dim`、string `--fg-muted`、
  number `--accent-text`、identifier `--fg`。行號用 `--fg-faint`，不用 `--rule` 排字。

### Theme and signature controls

- dark ↔ light 二態；44×44 最小控制面，safe-area aware。production 可用 system preference 決定首次落點，但 system 不是第三個 UI 狀態。
- 控制只顯示同一 stroke 系統的太陽／月亮 SVG；dark 顯示太陽代表可切到 light，light 顯示月亮代表可切到 dark，並保留完整 `aria-label`。
- social rail 桌機可直排，mobile 收回 footer；圖示 stroke-only，hover 用 `--glow`。

## Motion

環境動畫週期 ≥20s、同類元素 duration／delay 不同步，只動 `transform`／`opacity`；正文與 chrome 除 120ms 狀態回饋外不動。
氣泡至少使用兩組不等速上浮路徑，位移 keyframe 不可等距；單顆週期 24–43s，峰值 opacity 在 0.34–0.72 間錯開，
不同尺寸不可同時進入最亮狀態，避免形成同步的裝飾點陣。
魚群 SVG 的頭部必須朝位移終點：向右游時在 animation transform 內 `scaleX(-1)`，向左游時維持原方向；不得只移動畫布而讓尾鰭領先。
Scroll parallax 只作用於環境層，正文、header、footer 與所有互動元件維持原生捲動速度。由遠至近分為 caustics／beam、
strata／魚群、jelly、海扇／水螅、reef／kelp 五級；主要可見層的垂直係數約 0.08–0.42，desktop 單層位移上限 90–400px，
mobile 乘以 0.9。相鄰深度層可加入方向相反的微量水平錯位，係數絕對值 ≤0.03、上限 30px，讓差速在開始捲動後
即可辨認，但只限 ≥768px；mobile parallax 僅作垂直位移。不可讓環境素材橫越閱讀柱。只能用一個 passive scroll listener + 一個共用 `requestAnimationFrame`
更新 CSS individual `translate`，不得覆寫魚群、海藻既有的 `transform` 動畫；`will-change` 只在捲動期間短暫啟用。
mobile 不可把閱讀底板做成完全不透明：dark 使用 0.78、light 使用 0.88 的主題化 veil，並保留 beam、jelly、strata 與氣泡作差速錨點；
strata 在 mobile 可提高到 0.92／0.78 opacity。此豁免仍須以環境色極值合成後驗算所有小字，最低對比不得低於 4.5:1。
首個 deckle strata 與裁切 jelly 必須進入 390×844 與 1440×900 的首屏下半部；自頂端捲動 100px 時，beam／strata／jelly
三層中至少兩組相對位移差須達 10px，使「開始下潛」從第一次捲動就可辨識，而非等到第二篇文章後才出現。
現行產品決策明確要求氣泡位移與 scroll parallax **不讀取** `prefers-reduced-motion`，在 reduce 模式下仍完整播放；
這是專案接受的已知可及性例外。其餘非必要環境動畫在 reduce 模式下移除 drift，只保留極慢 opacity 呼吸，
且不得影響閱讀與互動。

## Anti-references

### 法律與品牌紅線

- 禁用任何官方圖像資產：立繪、活動 KV、logo、UI 截圖、PV／EP 畫面、手辦照。
- 禁用遊戲專有名詞作站內元素或品牌，包括海嗣／Seaborn、阿戈爾／Ægir、深海教會、
  深海獵人、濱海壞印、伊比利亞之眼、Rhodes Island、Operator、Monster Siren 與角色名。
- 禁止仿製活動 logo、標題 lockup、專有字型或角色配色主題。

### 視覺紅線

- 紫色／跨色相 gradient、glassmorphism、背景 blur、soft elevation shadow。
- GitHub dark 式中性灰、純黑純白、Inter-on-dark 的通用 SaaS 模板。
- 圓角卡片 deck、pill filter、每個區塊都包卡片；有機 deckle edge 不是圓角卡片豁免。
- 大面積紅色、紅＋珊瑚雙 CTA、霓虹 glow 面板。
- **科技 HUD（v3 的教訓）：** 精確斜線網格、方括號 lockup、準星、dashboard 式讀數、
  捏造座標／深度、規律刻度牆、Chakra Petch 式方正字身、全大寫寬字距遙測列。
- 為氣氛把文章、日期、分類、閱讀時間、搜尋或分頁改寫成需要解碼的航海詞彙。
- 切角、單角 chamfer、平行四邊形按鈕、規律鋸齒；這些是科技面板，不是有機深淵。
- 完整置中的珊瑚／海藻 icon、底部等距排一排的 clipart、有機形狀在 light 疊成髒灰污漬。

## Implementation notes

`comp/index-v8.html` 是 canon reference；production Astro 已完成同一套 token、字體、主題、列表與環境層遷移。

1. `src/styles/tokens.css` 是 16 個核心色彩 token 與環境色的 production 正本。
2. production 使用 Noto Serif TC Variable、EB Garamond Variable、Cormorant SC 600、Space Mono 400／700 與 JetBrains Mono Variable；
   Chakra Petch、Source Sans 3、Source Serif 4、Cinzel、Bodoni Moda、Poppins、Merriweather 均不再載入。
3. production 不使用 daisyUI／`theme-change`；新 code 直接使用本文件 token。
4. 主題 meta（`theme-color`、`color-scheme`、selection）與 dark/light 狀態同步；system preference 只決定首次落點。
5. 既有文章圖片不做 invert／hue-rotate；透明線稿需有 `--bg-surface` 底板。
6. SVG turbulence 只負責低頻 deckle edge；全頁 grain 使用預渲染單色 mask tile，避免長文大面積 filter paint。

## Acceptance checklist

- 兩主題 16 個 token 與本文件完全一致，component 無 hardcoded color。
- 15–16px 文字只用表中四階底色皆 ≥4.5 的 token；固定 `--accent` 不排小字。
- screenshot 紅色 `<5%`、珊瑚 `<1%`，並回報實測比率。
- 720px 閱讀柱最亮／最暗實際像素上的 `--fg-muted` 仍 ≥4.5。
- CJK 連續文字 ≥16px，正文 19px；EB small caps ≥15px；Cormorant SC ≥36px。
- dark／light 共用單一 DOM 結構，只由 `data-theme` 換 token。
- tag 的 hover 與 keyboard focus 有非顏色提示；44px touch target。
- 首頁 metadata 使用直白名稱；主題按鈕為太陽／月亮 SVG 且 screen-reader label 隨狀態更新。
- 單欄文章標題與左側紅線至少保留 18px 間距；魚群頭部朝移動方向。
- 320px、390px、430px 的 `documentElement.scrollWidth` 必須等於 `clientWidth`；環境層與 parallax 不得製造水平捲軸。
- organic silhouette 有裁切、尺度與位置變化；light 底部不形成連續污漬。
- 無官方資產、遊戲專有名詞、活動 logo 仿製與科技 HUD 語彙。
