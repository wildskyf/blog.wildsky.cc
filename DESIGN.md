---
name: Wildsky's Blog
description: 覆潮之下 — 一套語言、兩片海：深淵與淺灘共用碑刻排版、雙細線板與紅色紀律
colors:
  dark-bg: '#0A1420'
  dark-bg-surface: '#0D1B2A'
  dark-bg-raised: '#12253A'
  dark-bg-sunken: '#060E17'
  dark-fg: '#E8ECF0'
  dark-fg-muted: '#8FAEBC'
  dark-fg-faint: '#4A7A8C'
  dark-fg-on-accent: '#E8ECF0'
  dark-rule: '#2D4A5E'
  dark-accent-text: '#E4525C'
  dark-accent-fill: '#A8202C'
  dark-glow: '#7FD4D4'
  dark-glow-dim: '#5FB8BC'
  dark-glow-line: '#7FD4D4'
  light-bg: '#EDF2F4'
  light-bg-surface: '#F7F9FA'
  light-bg-raised: '#E4EDF0'
  light-bg-sunken: '#DFE9EC'
  light-fg: '#16283A'
  light-fg-muted: '#3F6273'
  light-fg-faint: '#3D8A9E'
  light-fg-on-accent: '#F7F9FA'
  light-rule: '#C5D5DC'
  light-accent-text: '#B82A36'
  light-accent-fill: '#C8323E'
  light-glow: '#166363'
  light-glow-dim: '#1B7272'
  light-glow-line: '#2BA3A3'
  accent: '#C8323E'
  dark-env-surface: '#16323A'
  dark-env-mid: '#0E2129'
  dark-env-deep: '#081519'
  dark-env-abyss: '#050D0F'
  dark-env-raised: '#1B3A42'
  dark-env-silhouette: '#030A0C'
  dark-env-beam: '#4A7A8C'
  dark-env-caustic: '#7FD4D4'
  dark-env-spark: '#7FD4D4'
  light-env-surface: '#F2F7F8'
  light-env-mid: '#E4EEF0'
  light-env-deep: '#D5E4E7'
  light-env-abyss: '#CADCE0'
  light-env-raised: '#DDEAEC'
  light-env-silhouette: '#AFC7CD'
  light-env-beam: '#EAF7F9'
  light-env-caustic: '#EAF7F9'
  light-env-spark: '#EAF7F9'
typography:
  chrome:
    fontFamily: "'Cinzel', 'Noto Serif TC', Georgia, serif"
    fontSize: '1.5rem'
    fontWeight: 600
    lineHeight: '1.4'
    letterSpacing: '0.14em'
  display:
    fontFamily: "'Bodoni Moda', 'Noto Serif TC', Georgia, serif"
    fontSize: 'clamp(2rem, 4.5vw, 2.75rem)'
    fontWeight: 600
    lineHeight: '1.2'
    letterSpacing: '0.01em'
  headline:
    fontFamily: "'Bodoni Moda', 'Noto Serif TC', Georgia, serif"
    fontSize: '1.6875rem'
    fontWeight: 600
    lineHeight: '1.45'
    letterSpacing: '0.01em'
  title:
    fontFamily: "'Bodoni Moda', 'Noto Serif TC', Georgia, serif"
    fontSize: '1.5rem'
    fontWeight: 700
    lineHeight: '1.4'
    letterSpacing: '0'
  body:
    fontFamily: "'Source Sans 3', 'Noto Sans TC', system-ui, sans-serif"
    fontSize: '1.1875rem'
    fontWeight: 400
    lineHeight: 1.9
    letterSpacing: '0.01em'
  label:
    fontFamily: "'EB Garamond', 'Noto Serif TC', Georgia, serif"
    fontSize: '0.8125rem'
    fontWeight: 500
    lineHeight: '1.3'
    letterSpacing: '0.06em'
  watermark:
    fontFamily: "'Cinzel', 'Noto Serif TC', Georgia, serif"
    fontSize: '8.25rem'
    fontWeight: 400
    lineHeight: '1'
    letterSpacing: '0.08em'
  code:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: '0.9375rem'
    fontWeight: 400
    lineHeight: '1.7'
    letterSpacing: '0'
rounded:
  none: '0'
plate:
  borderWidth: '1px'
  innerInset: '4px'
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
components:
  header-bar:
    backgroundColor: '{colors.dark-bg-surface}'
    textColor: '{colors.dark-fg}'
    padding: '0 24px'
    height: '76px'
  brand-seal:
    backgroundColor: '{colors.dark-accent-fill}'
    textColor: '{colors.dark-fg-on-accent}'
    typography: '{typography.chrome}'
    rounded: '{rounded.none}'
    width: '30px'
    height: '30px'
  latest-seal:
    backgroundColor: '{colors.dark-accent-fill}'
    textColor: '{colors.dark-fg-on-accent}'
    typography: '{typography.label}'
    rounded: '{rounded.none}'
    padding: '2px 10px 3px'
  nav-dropdown:
    backgroundColor: '{colors.dark-bg-surface}'
    textColor: '{colors.dark-fg}'
    rounded: '{rounded.none}'
    padding: '8px'
    width: '224px'
  article-surface:
    backgroundColor: '{colors.dark-bg}'
    textColor: '{colors.dark-fg}'
    padding: '48px 0 96px'
    width: '720px'
  post-index-row:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg}'
    rounded: '{rounded.none}'
    padding: '20px 0'
  post-index-row-hover:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg}'
  tag-inline:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg-muted}'
    typography: '{typography.label}'
    rounded: '{rounded.none}'
    padding: '0 0 1px'
  tag-inline-hover:
    textColor: '{colors.dark-fg}'
  chip-category:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg-muted}'
    typography: '{typography.chrome}'
    rounded: '{rounded.none}'
    padding: '0 0 2px'
  chip-category-hover:
    textColor: '{colors.dark-fg}'
  button-primary:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg}'
    typography: '{typography.chrome}'
    rounded: '{rounded.none}'
    padding: '0 40px'
    height: '58px'
  button-primary-hover:
    backgroundColor: '{colors.dark-accent-fill}'
    textColor: '{colors.dark-fg-on-accent}'
  code-block:
    backgroundColor: '{colors.dark-bg-sunken}'
    textColor: '{colors.dark-fg}'
    rounded: '{rounded.none}'
    padding: '20px 24px'
  banner-series:
    backgroundColor: 'transparent'
    textColor: '{colors.dark-fg-muted}'
    rounded: '{rounded.none}'
    padding: '14px 18px'
  card-note:
    backgroundColor: '{colors.dark-bg-surface}'
    textColor: '{colors.dark-fg}'
    rounded: '{rounded.none}'
    padding: '20px 22px'
---

# Design System: Wildsky's Blog

## Overview

**Creative North Star: "覆潮之下 — Under Tides"**

一套語言，兩片海。

**Dark 是深海。** 背景不是黑、也不是中性灰，是帶藍的墨色——像從水面下十公尺往上看的那種藍。文字是冷白銀，結構線是鋼藍，溫度壓到最低。

**Light 是海面。** 背景是近白帶一絲冷調的水光——白日下的甲板，不是印表機的白紙。文字是深鋼藍而非純黑，藍色血統一路貫穿到最亮的地方。

兩者**不是互相反轉**，各自有情緒；但語言完全一致：同樣的碑刻排版、同樣的雙細線板、同樣的紅色紀律、同樣的兩軸色相（藍/青 ↔ 紅）。

環境層是唯一**刻意不對稱**的地方：深淵的剪影比水暗，淺灘的剪影比水亮一點但仍是影。原因是物理的——暗色的剪影會**提高**淺色字的對比，亮色照抄同一個強度就會**壓垮**深色字。詳見 Colors 的環境層強度表。

然後，兩片海都只有**一件紅衣**。血紅 `#C8323E` 是兩個主題唯一共用的原色——它是錨，主題切換時它不變。它在任何一個畫面的佔比不得超過 5%：只出現在 link hover、最新文章的左緣紅線、以及**銅印**（見 Shapes）。參照圖裡的紅之所以會讓人心跳漏一拍，不是因為它多，是因為整片冷色裡只有那一件。**紅色一旦變成區塊底色，這套系統就死了。**

第三個顏色是光，不是面。深海裡它是氣泡與生物光（淺青），海面上它是珊瑚與淺灘（海青）。它活在 code block 的語法高亮、focus ring、細分隔線——**永遠是發光的線或字，永遠不是填色**。

形狀語言來自**紙與金屬**而不是螢幕：**直角、雙細線板、銅印、線框優先於色塊**。沒有一個圓角卡片，沒有一個切角，沒有一道柔和陰影。深度靠明度階與 1px 描邊建立，不靠模糊。

（v7 之前這裡寫的是「斜切角、平行四邊形」——那是明日方舟 UI 的直譯，實作後被判定為遊戲 HUD 語彙而非貴氣語彙，已全面推翻。理由見 Shapes。）

但這是一個**長文技術部落格**。所以有一條硬邊界：明日方舟味**全部集中在 chrome**——header、文章索引、tag、分隔線、footer、code block 外框、桌機兩側的直排導軌。**正文區塊保守到近乎乏味**：720px 的閱讀量尺、19px、行高 1.9、無裝飾、無斜切、無紅色。讀者一進入正文，介面就退場。

**Key Characteristics:**

- 雙主題共用一套語意 token；component 永不寫死色值
- 色相只有兩軸：藍/青（HSL 180–213）與紅（HSL 355–356），不引入第三個色相
- 血紅 `#C8323E` 是跨主題的錨，兩邊都不換；全站佔比 <5%
- 「光」只作為線或字，永不作為填色面
- 直角 ＋ 雙細線板（The Plate）取代圓角與切角；零陰影
- 線框與描邊優先於填色塊
- 刻印感排版：Cinzel 羅馬碑刻大寫（chrome）、EB Garamond 小型大寫（標籤）、Bodoni Moda Didone（標題）
- Chrome 銳利、正文保守——兩者之間有明確的邊界線
- 兩主題所有文字對比皆過 WCAG AA（實測值見 Colors）

**確認的視覺反參考（絕對禁止）：** 圓角卡片堆疊；soft / elevation shadow；紫色漸層；glassmorphism；Inter-on-dark 的通用暗色模板；GitHub dark 式的中性灰暗色主題；紅色大面積使用；任何明日方舟角色圖像、logo 或官方素材；**把亮色主題做成暗色的機械反轉**；**遊戲 HUD 語彙**（切角、平行四邊形、方括號 lockup、全大寫寬字距的遙測讀數、刻度尺）。

## Colors

### Token 契約

顏色只以語意 token 存在。**任何 component 寫死色值即違規**——包含 Tailwind 調色盤 class（`text-gray-900`、`bg-slate-800`）與 hex。主題切換只發生在 token 層。

| Token            | 用途                                     | Dark      | Light     |
| ---------------- | ---------------------------------------- | --------- | --------- |
| `--bg`           | 頁面地面                                 | `#0A1420` | `#EDF2F4` |
| `--bg-surface`   | 內容平面（閱讀發生的地方）               | `#0D1B2A` | `#F7F9FA` |
| `--bg-raised`    | hover / 啟用態                           | `#12253A` | `#E4EDF0` |
| `--bg-sunken`    | 凹陷面（code block）                     | `#060E17` | `#DFE9EC` |
| `--fg`           | 主要文字                                 | `#E8ECF0` | `#16283A` |
| `--fg-muted`     | 次要文字（meta、摘要、圖說）             | `#8FAEBC` | `#3F6273` |
| `--fg-faint`     | 圖示、≥24px 弱化標題（**不得用於小字**） | `#4A7A8C` | `#3D8A9E` |
| `--fg-on-accent` | 落在紅色填色上的文字                     | `#E8ECF0` | `#F7F9FA` |
| `--rule`         | 所有 hairline 與描邊（**永不作為文字**） | `#2D4A5E` | `#C5D5DC` |
| `--accent`       | 血紅錨點：標記、線、≥24px 紅字           | `#C8323E` | `#C8323E` |
| `--accent-text`  | <24px 的紅字（link hover、inline 標記）  | `#E4525C` | `#B82A36` |
| `--accent-fill`  | 唯一可被填滿的紅（小面積）               | `#A8202C` | `#C8323E` |
| `--glow`         | 語法高亮主色、focus ring                 | `#7FD4D4` | `#166363` |
| `--glow-dim`     | 語法高亮次色（註解、標點）               | `#5FB8BC` | `#1B7272` |
| `--glow-line`    | 純裝飾細線（**永不作為文字**）           | `#7FD4D4` | `#2BA3A3` |

### daisyUI 語意變數：deprecated alias

Open Item 4 採**方案 (a) 過渡**：在自訂 daisyUI theme 中，把既有的 daisyUI 語意變數映射到新 token，讓 9 個檔案的既有 class 不必一次改完。

| daisyUI 別名           | 映射到         |
| ---------------------- | -------------- |
| `--color-base-100`     | `--bg-surface` |
| `--color-base-200`     | `--bg`         |
| `--color-base-300`     | `--bg-raised`  |
| `--color-base-content` | `--fg`         |
| `--color-primary`      | `--accent`     |
| `--color-secondary`    | `--fg-faint`   |
| `--color-accent`       | `--glow`       |
| `--color-neutral`      | `--rule`       |

**這些名字是 deprecated alias，只為過渡存在。** 三條硬規定：

1. 新 code 一律直接寫 `var(--bg-surface)` 這類新 token，**不得新增任何 daisyUI 語意 class 的使用**（`bg-base-100`、`text-primary`、`border-base-300`…）。
2. 動到任何既有檔案時，順手把該檔的 daisyUI 別名換成新 token——不另開遷移任務，用「路過就修」的方式收斂。
3. 別名的映射表是唯一的真相來源；**不得為了讓某個既有 class 好看而調整映射**。映射不合用時的正解是把那個 class 換掉，不是改映射。

映射本身有語意失真，這是接受過渡成本的一部分：daisyUI 的 `primary` 是「主色」，而我們的 `--accent` 是「稀缺的強調色」——沿用 `text-primary` 會讓紅色出現在不該出現的地方，直接違反 The Red Dress Rule。這正是別名必須消失的理由。

**方案 (b)（全面替換，移除 daisyUI 語意層）列入 backlog**，不在本次範圍。

### 兩個主題的性格

**Dark — 深海（`#0A1420` / `#0D1B2A`）。** 濁心斯卡蒂那張圖的世界：近黑的藍、幾點生物光、一件紅衣。中性階必須偏藍（HSL 210–213）；灰掉的那一刻就變成 GitHub dark，那是明確的反參考。

**Light — 海面（`#F7F9FA`）。** 官方 banner 那張圖的世界：白日、水光、乾淨的資訊面板。它**不是**把 dark 的明度倒過來——它有自己的邏輯：紙面在日光下是亮的，而互動（hover）讓它**沉下去**變暗，就像手指壓在濕紙上。深鋼藍 `#16283A` 取代純黑，讓藍色血統一路走到最亮處。

### 一個刻意的不對稱

明度階在兩個主題裡有三個方向一致、一個相反：

- `--bg-surface` 永遠比 `--bg` 更靠近白（兩主題一致）
- `--bg-sunken` 永遠比 `--bg` 更暗（兩主題一致）
- `--bg-raised`（hover）在 **dark 變亮**、在 **light 變暗**（相反）

這是唯一的方向翻轉，且是被迫的正確答案：light 的 `--bg-surface` 已經接近白，再亮就是純白（明確禁止）。hover 在亮色介面本來就該壓深，這是紙與墨的物理直覺。

### 對比實測（WCAG，本次逐項計算）

**Dark**（文字色 vs `--bg-surface` `#0D1B2A`）：`--fg` 14.65、`--fg-muted` 7.41、`--accent-text` 4.69、`--glow` 10.16、`--glow-dim`（on `--bg-sunken`）8.37。`--fg-faint` 3.69（僅 AA Large / 非文字）、`--accent` 3.30（僅 AA Large）、`--rule` 1.87（非文字）。`--fg-on-accent` on `--accent-fill` = 6.08。

**Light**（文字色 vs `--bg-surface` `#F7F9FA`）：`--fg` 14.22、`--fg-muted` 6.20、`--accent` 4.99、`--accent-text` 5.81、`--glow` 6.63、`--glow-dim` 5.38。`--fg-faint` 3.73（僅 AA Large / 非文字）、`--rule` 1.43（非文字）、`--glow-line` `#2BA3A3` 2.89（純裝飾，非文字、非 focus ring）。`--fg-on-accent` on `--accent-fill` = 4.99。

**最嚴苛的底（`--bg-sunken`）上**，兩主題所有承載文字的 token 仍過 AA：dark `--accent-text` 4.88 / `--glow` 11.33；light `--accent-text` 4.97 / `--glow` 5.67 / `--glow-dim` 4.60。

### 環境層 token（The Organic Layer 專用）

環境層是水本身，不是介面。它有自己的一組 token，因為既有語意 token 做不出「暗的青綠」——
與 `--glow-dim` 混色會同時提亮並偏移色相。

| Token              | 用途                           | Dark      | Light     |
| ------------------ | ------------------------------ | --------- | --------- |
| `--env-surface`    | 明度軸最上端（水面方向）       | `#16323A` | `#F2F7F8` |
| `--env-mid`        | 明度軸 30%                     | `#0E2129` | `#E4EEF0` |
| `--env-deep`       | 明度軸 62%                     | `#081519` | `#D5E4E7` |
| `--env-abyss`      | 明度軸底端；暗角；`body` 底色  | `#050D0F` | `#CADCE0` |
| `--env-raised`     | 環境層上的抬升面               | `#1B3A42` | `#DDEAEC` |
| `--env-silhouette` | 有機剪影（礁、藻、魚群、水母） | `#030A0C` | `#AFC7CD` |
| `--env-beam`       | 光束                           | `#4A7A8C` | `#EAF7F9` |
| `--env-caustic`    | 水面波光                       | `#7FD4D4` | `#EAF7F9` |
| `--env-spark`      | 氣泡高光                       | `#7FD4D4` | `#EAF7F9` |

全部落在 HSL 188–198，與 Never-Neutral Rule 相容。

### 環境層強度（兩主題唯一的結構性不對稱）

| 純量                | Dark   | Light    | 為什麼不同                                                               |
| ------------------- | ------ | -------- | ------------------------------------------------------------------------ |
| `--env-organic-op`  | `1`    | `0.42`   | 暗色剪影比水暗 → **提高**淺色字對比；亮色剪影比水暗 → **降低**深色字對比 |
| `--env-mote-op`     | `0.14` | `0.08`   | 同上，微粒在亮色主題是扣分項                                             |
| `--env-strata-op`   | `0.5`  | `0.55`   | 亮色的層界需要多一點才看得出來                                           |
| `--env-grain-blend` | screen | multiply | 顆粒在亮底上必須是乘法，否則會被洗掉                                     |

**這些值不是品味，是實測解出來的上限。** 亮色 `--env-organic-op` 從 1 降到 0.42 的過程：
1.0 → `--fg-muted` 4.01（✗）→ 0.42 → 4.38（✗，此時瓶頸換成暗角）→ 暗角改綁 chrome 外側 → 4.46（✗，瓶頸換成微粒）→ `--env-mote-op` 0.08 → **4.75（✓）**。

### 環境層與文字的分界（實測結論，非偏好）

1. **環境層最亮／最暗的元素不得進入 chrome 內側**（`(100% − 1120px) / 2` 以內）。噴氣孔的 `--glow-line` 氣泡曾被放進正文欄，實測讓該處對比掉到 **2.22**。
2. **暗角（vignette）用 `calc((100% − var(--chrome)) / 2)` 而非百分比。** 百分比會隨視窗寬度漫進閱讀欄。
3. **`--accent-text` 在暗色主題不得用於環境層上的小字。** 它是對著 `--bg` `#0A1420` 校準的（4.69），落到水色漸層上只剩 **3.83–4.17**。13px 的紅字一律改用 Seal（反白 6.08）或改成紅「線」＋ `--fg` 文字。27px 以上的宣言不受限（大字門檻 3.0，實測 3.83 ✓）。
4. **`--fg-faint` 不得用於小字**（The Faint Floor Rule 的量化佐證）：`#4A7A8C` on `--bg-sunken` `#060E17` 實測 **4.49**，13px 未過 AA。改 `--fg-muted` 得 **8.30**。

### 兩主題環境層最終實測（v7，逐幀取最壞值）

- **Dark**（有文字的區帶內，背景最亮處）：`--fg` **9.06** ✓、`--fg-muted` **4.58** ✓
- **Light**（有文字的區帶內，背景最暗處）：`--fg` **10.89** ✓、`--fg-muted` **4.75** ✓、`--accent-text` 4.45（僅用於 27px 宣言，大字門檻 3.0 ✓）

### 色票調整說明（原始色票 → 實作值）

你給的色票有三支撐不住小字，已在**同色相軸上**補可讀變體，原色票全部保留在非文字用途：

- Light 海青 `#3D8A9E`（3.73）→ 保留為 `--fg-faint`（圖示、大字）；小字次要層另立 `--fg-muted` `#3F6273`（6.20，HSL 200，同軸）。
- Light 珊瑚青 `#2BA3A3`（2.89）→ 保留為 `--glow-line`（純裝飾細線）；語法高亮與 focus ring 用 `--glow` `#166363`（6.63）與 `--glow-dim` `#1B7272`（5.38），三者 HSL 色相皆為 180，同一支顏色的深淺。
- 血紅 `#C8323E` 在 dark 上只有 3.30 → dark 的小字紅另立 `--accent-text` `#E4525C`（4.69）。在 light 上 `#C8323E` 本身就是 4.99，可直接當小字紅；但落在 code 底時降到 4.27，故 light 的 `--accent-text` 用 `#B82A36`（4.97）。

色相關係未動：所有藍/青落在 HSL 180–213，所有紅落在 HSL 355–356。

### 系統整合

- **`theme-color` meta：** 必須跟著主題切換。Dark `#0A1420`、Light `#F7F9FA`。以兩條帶 `media` 的 meta 標籤宣告（`prefers-color-scheme: dark` / `light`），並在使用者手動切換主題時同步更新。`msapplication-TileColor` 統一為 `#0A1420`。
- **`color-scheme`：** `<html>` 上宣告 `color-scheme: dark` / `light`，讓捲軸、表單控制項、`::selection` 預設值跟著走。
- **`::selection`：** 底 `--accent-fill`、字 `--fg-on-accent`。這是紅色被允許填滿的位置之一，且面積由使用者控制，不計入 5% 預算。

### Named Rules

**The Red Dress Rule.** 血紅在任何一個 viewport 的佔比不得超過 5%，兩主題皆然。判準可機械檢查：截一張圖，紅色像素超過畫面 5% 即違規。它的力量百分之百來自稀缺——第二件紅衣出現的瞬間，第一件就不再有意義。

**The Anchor Rule.** `--accent`（`#C8323E`）在兩個主題是同一個值。主題切換時，紅色是唯一不動的東西——那是這套系統的錨。可讀性變體（`--accent-text`）可以換，錨不行。

**The Two-Axis Rule.** 全系統只有兩個色相軸：藍/青（HSL 180–213）與紅（HSL 355–356）。任何第三個色相（綠、黃、紫、橙）即違規，包含語意色（success / warning）——需要語意區分時用形狀、圖示或 `--accent` 的有無，不用新色相。

**The Glow-Is-Light Rule.** `--glow` 系列只能是發光的線或字，永遠不能是填色面。code block 的底是 `--bg-sunken` 配 glow 的字，不是 glow 的底。glow 作為容器底色即違規。

> **補注（2026-08-16）：** 2–3px 的 glow 光點視為「光」，合法——生物光、指示點、極小的發光標記都在此範圍內。判準是尺度：光點不構成「面」。glow 作為容器底色仍然違規，這條沒有放寬。

**The No Hardcode Rule.** component 層不得出現任何 hex、`rgb()`、或 Tailwind 調色盤 class。只准 `var(--token)`。這條是雙主題能成立的唯一保證。

**The Same-Hue Gradient Rule（2026-08-16 新增）.** 禁止**跨色相**漸層；允許**同色相（HSL 188–213）明度漸層**。這是為了讓深海有光——水的深度感本來就是一條連續的明度軸，硬停點做不出來。三個邊界：漸層只能改變明度，不得改變色相或飽和度方向；紅色（HSL 355–356）永遠不參與漸層；漸層不得用來製造 glow 或陰影的替代品（Zero Shadow Rule 不因此放寬）。

**The Never-Neutral Rule.** 兩主題所有中性階都必須帶藍（**HSL 188–213**，2026-08-16 放寬）。放寬的用意是讓環境層可以往青綠沉——覆潮之下的水是綠得發黑的，不是乾淨的藍。純灰、暖灰、純白、純黑一律違規。

**The Organic Layer Rule（2026-08-16 新增）.** 這套系統有兩種形狀語言，**不得混用**：

- **人造物（chrome 與元件）**：header、文章列、tag、按鈕、卡片、code block——一律幾何、直角、直邊。這是紀律，代表「人造」。
- **環境層（背景、水層、剪影、暗角）**：允許不規則、有機、撕裂的邊緣（SVG path、筆刷感輪廓）。這是「人造物沉在其中的那片海」。

判準：**問這個東西是不是人做的。** 是 → 幾何直角；不是 → 可以有機。環境層的層界用撕裂邊，元件的直角照舊——一個 tag 長出有機邊即違規，一片水層用直線斜切則是浪費了這條規則。

環境層永不進入 720px 閱讀柱，也永不承載資訊。

**The Ambient Motion Rule（2026-08-16 新增）.** 動畫只存在於環境層，**正文區與 chrome 零動畫**（狀態轉換的 120ms 不算動畫，那是回饋）。

環境動畫的三條規格：

- **慢**：週期下限 20 秒。氣泡上漂 20–40s、光束呼吸 30s+、生物光明滅各自不同步。任何低於 20s 的環境動畫都會變成「在動的東西」而不是「活著的環境」。
- **不同步**：同類元素之間必須有不同的 duration 與 delay。整齊劃一的閃爍是機器，不是海。
- **一律播放（2026-08-16 使用者裁示）**：不再用 `@media (prefers-reduced-motion: no-preference)` 包起來。
  這是**刻意放棄的無障礙讓步**，記錄在案：前庭敏感的訪客無法透過系統設定關掉水中動態。
  代價換到的是「這頁真的在水裡」這件事對所有人成立——先前包在閘門內時，實測沒有人看得出頁面在動。

只准動 `transform` 與 `opacity`。動任何佈局屬性即違規。

**The Faint Floor Rule.** `--rule` 與 `--glow-line` 是線，不是字；`--fg-faint` 是圖示與 ≥24px 大字，不是小字。小於 24px 的次要文字一律用 `--fg-muted`。

## Typography

**Chrome Font:** Cinzel（Latin，羅馬碑刻大寫）→ Noto Serif TC（CJK）
**Display / Title Font:** Bodoni Moda（Latin，Didone）→ Noto Serif TC（CJK）
**Label Font:** EB Garamond 小型大寫（Latin）→ Noto Serif TC（CJK）
**Body Font:** Source Sans 3（Latin）＋ Noto Sans TC（CJK）
**Code Font:** JetBrains Mono

字體與字級**兩主題完全相同**，不因明暗調整。唯一的例外見下方 The Optical Weight Rule。

**Character:** 這套系統的氣質靠字體承擔一半，而且由**三支拉丁字體分工**，不是一支通吃。

- **Cinzel** 是羅馬碑刻大寫的數位化——字形直接來自石刻與銅牌的銘文。它負責 chrome：站名、日期數字、分類、按鈕、watermark、footer。**銅印感就住在這支字裡。**
- **Bodoni Moda** 是高反差的 Didone，粗筆與髮絲筆落差極大。它只負責**標題**：文章頁標題、索引標題、hero 宣言。Didone 的貴氣要在 24px 以上才成立。
- **EB Garamond 的小型大寫**負責標籤：閱讀時間、tag、hero kicker。小型大寫是古典書籍與航海圖的標註慣例，它取代「全大寫 ＋ 寬字距」——後者是遙測讀數的排版，會把介面拉回科幻 HUD。

**為什麼 chrome 從 Bodoni 換成 Cinzel**（2026-08-16，v7）：Bodoni 的髮絲筆畫在 13–24px 就開始被抗鋸齒吃掉，使用者的原話是「看不太清楚」。Didone 是為大尺寸設計的；碑刻體是為**小尺寸的耐久辨識**設計的。這不是品味調整，是把字體用回它被設計的尺寸區間。

中文一律 **Noto Serif TC**（明體）：明體的橫細直粗與 Bodoni／Cinzel 的反差邏輯同源，中英混排時的筆畫節奏才不會斷。

正文另走一套：**Source Sans 3 ＋ Noto Sans TC**。長文在深色底上用無襯線更穩，而且它與 chrome 的襯線形成明確的材質分界——chrome 是刻印的銅牌，正文是印出來的紙。

### Hierarchy

- **Display**（Bodoni Moda 600、`clamp(2rem, 4.5vw, 2.75rem)`、行高 1.2）：文章頁標題。
- **Headline**（Bodoni Moda 600、27px、行高 1.45）：文章索引標題、hero 宣言、正文 `h2`。**索引標題不得放大到 Display 級**——索引一屏要能掃到多篇，紀念碑化會把掃讀變成捲動。
- **Chrome**（Cinzel 500–600、13px / 24px、字距 0.12–0.18em）：站名、日期數字、分類、按鈕、footer。字距必須寬——碑刻大寫的字腔本來就是靠字距呼吸的。
- **Title**（Bodoni Moda 700、24px、行高 1.4）：區塊小標。**Didone 在小尺寸的暗底上會掉髮絲筆畫，所以 Title 級一律 700，不用 600。**
- **Body**（Source Sans 3 / Noto Sans TC 400、19px、行高 **1.9（unitless）**、字距 0.01em）：正文。量尺 720px。行高必須無單位——放大基準字級時要等比縮放，這是可及性要求。
- **Label**（EB Garamond 500、13px、字距 0.06em、**小型大寫**）：日期、分類、tag、閱讀時間、所有 meta。
- **Watermark**（Cinzel 400、132px、字距 0.08em）：裝飾性直排字，僅環境層使用，`aria-hidden`。
- **Code**（JetBrains Mono 400、15px、行高 1.7）。

### Named Rules

**The Chrome Frontier Rule.** Cinzel、Bodoni Moda 與 EB Garamond 只活在 chrome、標題與標籤裡。正文的 `p`、`li`、`blockquote`、表格內容一律 Source Sans 3 / Noto Sans TC。在正文段落裡出現這三支之一即違規。

**The Right Font For The Size Rule（2026-08-16 新增）.** Bodoni Moda 不得用於 24px 以下；Cinzel 不得用於 27px 以上的標題。前者在小尺寸掉筆畫，後者在大尺寸會變成紀念碑而不是文章標題。字體的選用先看尺寸，再看語意。

**The Small-Caps Label Rule.** meta 標籤一律**小型大寫 ＋ 0.06em**，不得使用「全大寫 ＋ ≥0.12em 寬字距」。後者是螢幕遙測讀數的排版慣例，會讓整個介面變成科幻 HUD——這套系統要的是刻印銘牌。中文不受此規範影響：中文永遠不做大寫處理，字距不超過 0.02em。

**The Didone Weight Floor Rule.** Bodoni 在 24px 以下的暗底上一律 700 字重；24px 以上才可用 600。Didone 的髮絲筆畫在深色底上會被抗鋸齒吃掉，標稱對比再高也救不了視覺上變細的筆畫——這是字體結構問題，不是顏色問題。

**The Boring Body Rule.** 正文區塊照長文閱讀最佳實務走，不創新：720px 量尺、19px、行高 1.9、段落 24px 間距、無斜切、無紅色、無裝飾元素。chrome 之所以能有個性，是因為正文完全不吵。

**The Weight-Follows-Meaning Rule（2026-08-16 新增）.** 視覺重量只能給有意義的東西。任何元素在放大之前先問：**它承載的資訊，值得這個尺寸嗎？** 「120 篇裡的第 16 篇」不值得全頁最大的字；最新一篇是哪一篇值得一個紅標。裝飾可以存在，但不得偽裝成資訊去搶走層級的頂端。

## Layout

版型兩主題完全相同。

雙層寬度。**閱讀層 720px**（正文、文章索引），**chrome 層 1120px**（header 內容、footer、區塊分隔線、meta 行）。chrome 比正文寬，於是每一道水平規則都會從文字兩側**伸出去**——這是深海儀器面板的感覺，也是這套版型最容易辨認的動作。

頁面骨架維持三段：`header`（64px 高，`--bg-surface` 底，底部 1px `--rule`，右端 40px 一段 `--accent` 斷點）→ `main` → `footer`。整頁 `min-h-screen` flex column，footer 貼底。

文章索引是**表列而不是卡片**：每列上緣一道 1px `--rule` hairline，列內三段——左側 `LOG 2026.08.16` 代號式日期（Label 字級）、中間標題（Headline）、下方 tag 列（無框小型大寫）。列與列之間 32px，沒有卡片框、沒有陰影、沒有縮圖。hover 時**只做兩件事**：左緣長出一道 2px `--accent` 直線、日期升亮一階。**整列底色不變**——底色面板是軟體 UI 的語彙，在紙與金屬的世界裡不成立。每頁 16 篇（沿用 `PAGINATION_PER_PAGE_COUNT`）。

**桌機側邊導軌（≥1280px）：** 閱讀柱兩側的空白裝上兩道垂直的 Label 字級文字，`writing-mode: vertical-rl`，`--rule` 色，`aria-hidden`。左側是站點代號（`WILDSKY.CC / LOG ARCHIVE / SINCE 2014`），右側是當前頁的分類或系列代號。這是官方 banner 那種直排側欄的直譯，且完全不進入閱讀動線。<1280px 一律不顯示。

斷點沿用 Tailwind 預設（`sm` 640 / `md` 768 / `lg` 1024 / `xl` 1280 / `2xl` 1536）。真正的轉折點有三個：`lg` 出現右下固定導航列與寬鬆內距；`xl` 出現側邊直排導軌；`sm` 以下 header 收掉站點描述、正文左右內距降到 20px。

### Overhang 的收斂與退場

兩層寬度只有在**視窗放得下兩層**時才成立。三段行為：

**≥1120px（完整 overhang）。** chrome 層 1120px、閱讀層 720px，兩側各伸出 200px。這是設計的完整形態。

**720–1120px（overhang 壓縮）。** chrome 層改為 `min(1120px, 100% - 2 * var(--gutter))`，`--gutter` 為 24px（`sm` 以上）／ 20px（`sm` 以下）。閱讀層維持 720px 直到視窗容不下為止，之後同樣退為 `100% - 2 * var(--gutter)`。overhang 的量隨視窗連續縮小，不跳階——伸出去的差值可以變小，但只要 chrome 寬 > 閱讀寬就必須看得出來。

**< 768px（overhang 退場）。** 兩層寬度收斂為同一個值（`100% - 2 * var(--gutter)`），overhang 歸零。此時水平規則與正文切齊，**這是合法狀態，不是違規**——The Overhang Rule 只在兩層寬度不同時生效。退場後不得用任何替代裝飾（負 margin、溢出線、假邊距）去模擬 overhang。

**code block 的 840px 溢出同理。** 實作為 `width: min(840px, 100%)` 搭配置中；當可用寬度 < 840px 時溢出自然歸零，code block 與正文同寬。**< 840px 時不得保留任何負 margin 或 `calc()` 撐寬**——橫向捲動只發生在 code block 內部（`overflow-x: auto`），永遠不發生在頁面上。

判斷式（實作與審查都用這一條）：

```
overhang 存在 ⟺ chrome 層計算後寬度 > 閱讀層計算後寬度
```

**The Overhang Rule.** 當 chrome 層寬 > 閱讀層寬時，水平分隔線、meta 行、footer 內容必須延伸到 chrome 寬，正文停在閱讀寬；此時分隔線與文字切齊即違規——那個伸出去的差值就是設計本身。當兩層寬度相等（< 768px）時本規則不適用，切齊是正確行為。

**The Single Column Rule.** 沒有側欄，也不打算有。側邊導軌是裝飾層，不承載任何資訊或連結。

## Elevation & Depth

**零陰影系統，兩主題皆然。** 這是絕對禁令，不是預設值：`box-shadow` 只允許出現在一個地方——focus ring 的 `0 0 0 2px var(--glow)`，而那本質上是描邊不是陰影。任何 `box-shadow: 0 Npx Npx rgba(0,0,0,...)` 即違規。

深度由三個機制建立：

1. **明度階**：`--bg-sunken` → `--bg` → `--bg-surface` → `--bg-raised`。四階之間的差都很小，dark 疊起來像水下的濁度層，light 疊起來像日光下的薄紙。方向的差異見 Colors 的「一個刻意的不對稱」。
2. **1px `--rule` 描邊**：所有邊界都是線，不是陰影。線是這套系統唯一的分隔機制。
3. **雙細線板（The Plate）**：一個容器被雙細線框住，就等於宣告它是一個獨立物件——框本身在承擔陰影的工作。

### Shadow Vocabulary

- **focus-ring**（`box-shadow: 0 0 0 2px var(--glow)`）：唯一允許的 `box-shadow`。兩主題皆過非文字 3:1（dark 10.16、light 6.63）。**不得改用 `--glow-line`**——light 的 `--glow-line` 只有 2.89，做 focus ring 不合格。

### Named Rules

**The Zero Shadow Rule.** 除 focus ring 外，全站 `box-shadow: none`。需要層次就換一階明度或加一條 1px 線。這條沒有例外，也不因主題放寬。

## Shapes

形狀語言兩主題**完全相同**，一個像素都不變。這是「同一套語言」最具體的體現。

**直角，不是切角，更不是圓角。** 全站 `border-radius: 0`，且**不再使用 `clip-path` 切角**。

> **為什麼推翻切角**（2026-08-16，v7）
> 切角矩形與 -12° 平行四邊形是明日方舟 UI 的直譯，但它們攜帶的是**遊戲 HUD 的語彙**——
> 使用者的原話是「不貴氣、不典雅、也沒有銅印感」。切角本質上是「削掉一角來表示這是介面元件」，
> 那是螢幕的邏輯；貴氣的來源是**紙與金屬的邏輯**：直角、細線、留白、刻印。
> 這條推翻連帶讓 The Ring（切角描邊的 keyhole polygon 實作）與 The One-Corner Rule 一併退役——
> 它們是「如何把切角做對」的答案，題目本身已經不存在。

### 唯一的容器裝置：The Plate

需要「這是一個可按的物件」的訊號時，用**雙細線**：外框 1px，內框 1px 內縮 4px。
這是凸版印刷名片與銅版銘牌的框——對稱、直角、不耍花樣。

```css
.ds-plate {
  --stroke: var(--fg-faint); /* 外框 */
  --stroke-inner: var(--rule); /* 內框 */
  position: relative;
  background: transparent;
  border: 1px solid var(--stroke);
}

.ds-plate::before {
  content: '';
  position: absolute;
  inset: 4px;
  pointer-events: none;
  border: 1px solid var(--stroke-inner);
}
```

用法規定：

- **外框用 `--fg-faint`，不是 `--rule`。** `--rule` 是校準在 `--bg` 上的；落到更亮的環境層（尤其亮色主題）會弱到看不見。這是實測結論，不是偏好。
- **狀態變化只換 `--stroke` / `--stroke-inner`**，不改結構、不改 inset。
- **內框是 `::before` 且 `pointer-events: none`**，不影響命中區與內容流。
- **Plate 是稀有裝置。** 全站只有真正的「按鈕」用它。列表列、tag、分類一律不用框——它們靠字級、字距與一條細線分層。

### 第二個裝置：The Seal（銅印）

唯一允許「實心紅塊 ＋ 反白刻字」的地方。內縮 3px 再畫一條 `--fg-on-accent` 42% 的細框，模擬印面的邊。

- **品牌印**：header 的 30×30 方印，Chrome 字級的單字母。
- **狀態印**：文章索引列的 `Latest`，Label 字級、內距 2px/10px/3px。

**印是唯一能讓紅色「有面積」的裝置**，也是紅字在環境層上過不了 AA 時的正解（見 Colors 的對比註記）。**一個畫面最多兩枚印。**

### 分隔與紋理

- **斜向裝飾線：** 區塊之間可以用 -12° 的細線群（3–5 條，`--rule`，間距 4px）。使用上限：一個頁面最多兩處。
- **描邊優先：** 需要區分一塊區域時，第一選擇是 1px `--rule` 描邊 ＋ 透明底；第二選擇才是換一階底色。填色塊是最後手段。

### Named Rules

**The No Radius Rule.** `border-radius` 全站唯一的合法值是 `0`（真正的圓形除外：頭像、圓點指示、氣泡）。圓角卡片是明確的反參考。

**The No Chamfer Rule.**（取代舊的 One-Corner Rule 與 Ring Rule）不得用 `clip-path` 切角，不得用 `transform: skewX()` 做平行四邊形容器。容器要嘛是直角矩形，要嘛沒有容器。

**The Plate Rule.** 線框容器只能是 The Plate（外框 ＋ 內縮 4px 的內框）。單線框、三線框、只有上下線的「框」都不算——那是分隔線，不是容器。

**The Seal Rule.** 實心紅塊只出現在 Seal 上，且一個畫面最多兩枚。任何其他地方的紅色都必須是線或字。

## Components

所有 component **只寫一次**，用語意 token 表達，兩主題自動成立。下方 frontmatter 的 component 條目列的是 dark 的解析值（dark 為預設主題），實作時一律 `var(--token)`。

### Buttons

- **Shape:** The Plate（外框 1px `--fg-faint`，內框 1px `--rule` 內縮 4px），58px 高，直角，`border-radius: 0`。
- **Primary（線框態）:** 透明底 ＋ `--fg` 文字，Chrome 字級（Cinzel 500 / 13px / 字距 0.18em），左右內距 40px。**預設是線框，不是填色。**
- **Hover:** 底色轉 `--accent-fill`，外框轉 `--accent`，內框轉 `--fg-on-accent` 42%，文字轉 `--fg-on-accent`。120ms。這是紅色被允許填滿的少數位置之一。
- **Focus:** focus-ring（2px `--glow`），offset 2px，走 `box-shadow`。
- **Disabled:** 外框與文字降到 `--rule`，無 hover 反應。

### Chips（分類）

**沒有框。** 分類是「刻線標題」不是按鈕。

- **Style:** Chrome 字級（Cinzel 500 / 13px / 字距 0.12em）、`--fg-muted` 文字、下緣 1px `--rule` 細線、下內距 2px。無底色、無外框。
- **Hover:** 文字轉 `--fg`，下線轉 `--accent`。**不轉紅字**——13px 的 `--accent-text` 在環境層上過不了 AA（實測 3.83–4.17）。紅色留在線上。

### Tags（無框小型大寫）

- **Style:** Label 字級（EB Garamond 500 / 13px / 小型大寫 / 字距 0.07em）、`--fg-muted` 文字、透明下框線。**無外框、無底色、無 skew。** tag 之間 20px 間隔（靠留白分隔，不靠符號也不靠框）。
- **Hover:** 文字轉 `--fg`，下緣長出 1px `--accent` 線。
- **Current:** 改用 Seal（見 Shapes）——不是把 tag 填成紅色。

### 文章索引列（Post Index Row）

**表列而非卡片。**

- **結構:** 上緣 1px `--rule` hairline（延伸至 1120px chrome 寬）→ 左柱日期（`2026` Label + `08.04` Chrome 24px，皆 `--fg-muted`，柱首一道 9px `--glow-line` 刻線）→ meta 行（分類 → 閱讀時間 → Latest 印）→ 標題（Headline、`--fg`）→ tag 列。
- **meta 順序:** 分類在前，閱讀時間在後。分類是「這是什麼」，閱讀時間是「要花多久」——先分類才有掃讀價值。
- **Padding:** 上下 30/32px，左右 0（靠柱寬對齊，不靠內距）。
- **Hover:** **只做兩件事**——左緣長出 2px × 100% 的 `--accent` 直線、日期由 `--fg-muted` 升到 `--fg`。**底色完全不變。** 標題不加底線。120ms。
  > 整列 hover 底色是 v6 的作法，已推翻：填色面板是軟體 UI 的語彙。在紙與金屬的世界裡，指示是一條線，不是一塊光。
- **Latest:** meta 行末一枚 Seal（實心 `--accent-fill` ＋ 反白 `--fg-on-accent`，實測 6.08）。
- **禁止:** 卡片外框、圓角、切角、陰影、縮圖、hover 底色。

### Cards / Containers

- **文章閱讀面:** 沒有容器。正文直接坐在 `--bg` 上，720px 置中，上 48px 下 96px。無底色差、無邊框——正文區塊不是一個「物件」。
- **Note 卡片:** `--bg-surface` 底 ＋ The Plate 雙細線，直角，內距 20px/22px。底部 meta 行以 1px `--rule` 分隔。**無陰影。**
- **系列橫幅:** 透明底 ＋ **僅左側** 2px `--accent` 直線 ＋ 上下無框，內距 14px/18px，文字 `--fg-muted`，系列名 `--fg`。前置 `SERIES` 大寫標籤。這是紅色作為「線」的標準用法。

### Inputs / Fields

（目前站上無表單；此規格供未來使用）

- **Style:** `--bg-sunken` 底 ＋ 1px `--rule` 底部單邊描邊（不是四邊框），`border-radius: 0`，`--fg` 文字。
- **Focus:** 底部描邊轉 `--glow` 2px ＋ focus-ring。
- **Error:** 底部描邊轉 `--accent`，錯誤訊息用 `--accent-text`。

### Navigation

- **Header:** 64px 高，`--bg-surface` 底，底部 1px `--rule`，右端最後 40px 換成 `--accent`（一道紅色斷點，是 header 上唯一的紅）。左側站名以方括號鎖定：`[ WILDSKY ] / LOG`，站名 Title 字級、`/ LOG` 為 Label 字級 `--fg-faint`。站點描述 Label 字級 `--fg-muted`，`sm` 以下隱藏。
- **下拉選單:** 224px 寬、`--bg-surface` 底、The Plate 雙細線、`border-radius: 0`、直角、內距 8px、**無陰影**。項目為 Label 字級大寫，hover 時左緣長出 2px `--accent` 短線 ＋ 底色轉 `--bg-raised`。main / content 兩組之間以 1px `--rule` 分隔。
- **分頁:** Label 字級大寫，前後綴用細線三角 SVG。hover 轉 `--accent-text`。

### Code Block（風格展示區）

這是正文裡唯一允許展現風格的地方，**兩主題各有自己的語法配色，但角色對應完全相同**。

- **容器:** `--bg-sunken` 底 ＋ 1px `--rule` 描邊，直角。橫向可捲動。內距 20px/24px。**寬度可溢出到 840px**（比 720px 量尺寬 60px，兩側各伸出 60px），呼應 Overhang Rule。
- **標頭:** 頂部一道 28px 高的條，`--bg-surface` 底，左側是語言代號（Label 字級大寫，`--fg-faint`），右側可放複製按鈕。與程式碼之間 1px `--rule` 分隔。
- **語法角色對應：**

| 角色           | Token           | Dark      | Light     |
| -------------- | --------------- | --------- | --------- |
| 關鍵字、函式名 | `--glow`        | `#7FD4D4` | `#166363` |
| 註解、標點     | `--glow-dim`    | `#5FB8BC` | `#1B7272` |
| 字串           | `--fg-muted`    | `#8FAEBC` | `#3F6273` |
| 數字、常數     | `--accent-text` | `#E4525C` | `#B82A36` |
| 一般識別字     | `--fg`          | `#E8ECF0` | `#16283A` |
| 行號、gutter   | `--rule`        | `#2D4A5E` | `#C5D5DC` |

- **Inline code:** `--bg-raised` 底、`--glow` 文字、內距 2px/6px、`border-radius: 0`、無描邊。
- **注意：** 數字/常數用 `--accent-text` 而**不是** `--accent`——`--accent` 在 dark code 底上只有 3.68，不足以承載小字。

### Blockquote

左側 2px `--fg-faint` 直線 ＋ 透明底 ＋ 左內距 20px，文字 `--fg-muted`。**不用紅線**——紅色不進正文。無底色、無圓角、無引號裝飾。

### Images / Figures

圖片是兩主題最容易翻車的地方，規則明確：

- **容器:** `figure` 為 1px `--rule` 描邊、`--bg-sunken` 底、`border-radius: 0`、內距 0。圖說（`figcaption`）置中，Label 字級，`--fg-muted`。
- **不做自動反轉。** 禁止對圖片施加 `filter: invert()` 或 `hue-rotate()`——那會毀掉截圖與照片。
- **Dark 的減光:** 正文內的照片與截圖在 dark 主題套 `filter: brightness(0.92) saturate(0.96)`，避免一張白底截圖在深海場景裡變成探照燈；`:hover` 時取消 filter，讓讀者能看到原始影像。Light 不套任何 filter。
- **透明背景的線稿圖必須有底板。** 黑線透明底的圖在 dark 會整張消失。這類圖一律包在 `--bg-surface` 的底板上（內距 16px），兩主題都用同一塊底板——底板本身跟著 token 換色，圖不動。
- **`feature_image`（OG 圖）不受主題影響**，社群平台不讀我們的 token。

### 固定角落開關（Signature）

- **主題切換（左下）:** 24×24 線框方塊，內部一個實心／空心圓，`--fg-muted`，hover 轉 `--glow`。**三態循環**：`system` → `dark` → `light`，預設 `system`（跟隨 `prefers-color-scheme`）。當前態以圖示形狀區分，不用顏色區分——顏色預算要留給紅色。
- **社群導軌（右下）:** 垂直排列，圖示為 20px 線框（stroke-only，1.5px），`--fg-faint`，圖示之間以 1px × 12px 的 `--rule` 短線分隔。hover 轉 `--glow`（不是紅色——紅色的預算要留給內容）。行動裝置退回 footer 內水平排列。

### 側邊直排導軌（Signature）

`≥1280px` 才出現的兩道垂直文字，`writing-mode: vertical-rl`、Label 字級、`--rule` 色、`aria-hidden="true"`。左軌固定為站點代號，右軌為當前分類 / 系列代號。純裝飾，不可點擊、不承載資訊。這是官方 banner 直排側欄的直譯，也是這個世界最容易被認出來的動作。

### Footer

`--bg-sunken` 底（比地面更深一階），上緣 1px `--rule`，內容 1120px 寬。社群圖示列 ＋ `2014—2026 © ALL RIGHTS RESERVED` 的 Label 字級大寫 `--fg-faint`。**不得寫死任何字色。**

## Do's and Don'ts

### Do:

- **Do** 一切顏色只走語意 token；component 層只准 `var(--token)`（The No Hardcode Rule）。
- **Do** 讓所有中性色帶藍（HSL 188–213），兩主題皆然（The Never-Neutral Rule）。
- **Do** 把血紅控制在 5% 以內，且兩主題共用同一支 `#C8323E`（The Red Dress Rule、The Anchor Rule）。
- **Do** 小於 24px 的紅字用 `--accent-text`，不用 `--accent`。
- **Do** 讓 glow 只當光：語法高亮、focus ring、細線（The Glow-Is-Light Rule）。
- **Do** focus ring 用 `--glow`，不用 `--glow-line`（後者在 light 只有 2.89）。
- **Do** 容器保持直角；需要框時用 The Plate（外框 ＋ 內縮 4px 內框）。
- **Do** 紅色的「面」只出現在 Seal 上，一個畫面最多兩枚（The Seal Rule）。
- **Do** meta 標籤用小型大寫 ＋ 0.06em（The Small-Caps Label Rule）。
- **Do** Bodoni 只用於 ≥24px 的標題；13–24px 的 chrome 一律 Cinzel（The Right Font For The Size Rule）。
- **Do** 正文行高用無單位值（1.9），不用 `rem`——放大字級時要等比縮放。
- **Do** 新 code 直接用 `var(--token)`；daisyUI 語意變數是 deprecated alias，路過就換掉。
- **Do** 用 1px `--rule` 描邊做分隔，需要層次就換一階明度。
- **Do** 讓水平規則與 meta 行伸出到 1120px，正文停在 720px（The Overhang Rule）。
- **Do** 把技術感排版（大寫、字距 0.16em、代號式編號）只施加在英文 meta 上（The Uppercase Latin Rule）。
- **Do** 讓正文乏味：720px、19px、行高 1.9、零裝飾（The Boring Body Rule）。
- **Do** 讓 `theme-color` meta、`color-scheme`、`::selection` 跟著主題切換。
- **Do** 給透明背景的線稿圖加 `--bg-surface` 底板。

### Don't:

- **Don't** 在 component 寫死 hex、`rgb()` 或 Tailwind 調色盤 class。
- **Don't** 在新 code 使用 daisyUI 語意 class（`bg-base-100`、`text-primary`…）——它們是待淘汰的別名。
- **Don't** 使用 `clip-path` 切角或 `transform: skewX()` 平行四邊形容器（The No Chamfer Rule）。
- **Don't** 在 <768px 用負 margin 或溢出線模擬已經退場的 overhang。
- **Don't** 把亮色主題做成暗色的機械反轉——它有自己的情緒（海面/白日），只有語言一致。
- **Don't** 引入第三個色相，包含 success / warning 的綠與黃（The Two-Axis Rule）。
- **Don't** 使用任何非零的 `border-radius`（真圓形除外）（The No Radius Rule）。
- **Don't** 使用任何 `box-shadow`，focus ring 除外（The Zero Shadow Rule）。
- **Don't** 讓紅色成為區塊底色或大面積填色；`--accent-fill` 的面積上限是單一元件 200×40px。
- **Don't** 把 glow 當背景色。
- **Don't** 讓中性色掉進中性灰或純白純黑。
- **Don't** 使用紫色、**跨色相漸層**、glassmorphism、blur 背景。（同色相明度漸層合法，見 The Same-Hue Gradient Rule）
- **Don't** 對圖片施加 `filter: invert()` 或 `hue-rotate()`。
- **Don't** 在正文段落裡使用 Cinzel、Bodoni Moda 或 EB Garamond（The Chrome Frontier Rule）。
- **Don't** 用「全大寫 ＋ 寬字距」做 meta 標籤——那是遙測讀數的排版（The Small-Caps Label Rule）。
- **Don't** 把視覺重量給沒有意義的資訊（The Weight-Follows-Meaning Rule）。
- **Don't** 對中文施加大寫處理或超過 0.02em 的字距。
- **Don't** 在正文區塊放框、斜向裝飾線或紅色（code block 的語法色除外）。
- **Don't** 讓環境層的任何元素進入 chrome 內側（`(100% − 1120px) / 2` 以內）——實測亮色主題會直接掉出 AA。
- **Don't** 使用任何明日方舟角色圖像、logo 或官方素材——提取的是美術語言，不是資產。
- **Don't** 讓側邊直排導軌承載資訊或連結；它是裝飾層。

## Open Items

新 DESIGN.md 與現有 code 的衝突清單。**本次未修改任何 code**；以下每一條都是實作時必須處理的落差。

1. **主題系統要換底，但雙主題結構保留。** `src/global.css:5-9` 目前是 daisyUI `nord --default` ＋ `forest --prefersdark`，`root.astro:19-30` 的 inline script 預設 `nord`，`ThemeToggle.astro:8` 綁 `data-toggle-theme="nord,forest"`。做法是**保留 `data-theme` 機制與 `theme-change`，把 nord/forest 換成兩個自訂 theme**（建議命名 `tide-dark` / `tide-light`），並在其中定義本文件的 15 個語意 token。原本「移除亮色主題」的疑慮已解除——不需要你再決定。
2. **主題切換要從兩態改三態。** 目前是 `nord ↔ forest` 兩態硬切；新規格是 `system → dark → light`，且 `system` 為預設。`root.astro:19-30` 的 inline script 與 `ThemeToggle.astro` 都要改。另外 `root.astro:36` 寫死 `<meta content="light" name="color-scheme">`，與三態衝突。
3. **`theme-color` meta 寫死。** `Head.astro:87` 是 `#1D384B`、`Head.astro:86` 的 `msapplication-TileColor` 是 `#001A33`。要改成兩條帶 `media` 的 meta（dark `#0A1420` / light `#F7F9FA`），並在手動切換時同步更新。
4. **daisyUI 語意 token 全站失效 —— 已定案為方案 (a) 過渡。** `base-100` / `base-200` / `base-300` / `base-content` / `primary` / `secondary` 密集使用於 `Header.astro`、`Article.astro`、`PostList.astro`、`TagList.astro`、`SeriesBanner.astro`、`AuthorBio.astro`、`page.astro`、`notes.astro`、`global.css`。作法與映射表見 Colors 的「daisyUI 語意變數：deprecated alias」。方案 (b)（全面替換、移除 daisyUI 語意層）列入 backlog。
5. **圓角全站違規。** `rounded-xl`（`PostList.astro:26`、`global.css:76` `.note-card`、`global.css:113`）、`rounded-lg`（`global.css:97`、`global.css:121`）、`rounded`（`Article.astro:54,76`、`global.css:38`）。`AuthorBio.astro` 頭像的 `rounded-full` 合法。
6. **陰影全站違規。** `shadow-sm` 出現在 `Header.astro:17`、`Nav.astro`（dropdown）、`global.css:76`、`global.css:121`。
7. **寫死色值違規（The No Hardcode Rule）。** `list.astro:20` 的 `text-gray-900`、`page.astro:38` footer 的 `text-white`、`global.css:129-133` figcaption 的 `text-gray-500` / `text-gray-400`、`global.css:16` `::selection` 的 `text-white`。
8. **字型三個家族都沒有安裝也沒有載入。** 需要 Bodoni Moda、EB Garamond、Source Sans 3、JetBrains Mono。`@fontsource/noto-sans-tc` 與 `@fontsource/noto-serif-tc` **都已在 `package.json` 但從未被 import**，新系統兩支都用得上（正文黑體、chrome 明體）。`@fontsource/merriweather`、`poppins` 不再需要，可移除。
9. **`.page-container` 的 `font-serif` 與新系統衝突。** `global.css:12` 讓全站落在襯線字上；新系統是三個無襯線／mono 家族。
10. **Prism 主題衝突，且需要雙主題版本。** `global.css:1` import 的是 `prism-okaidia`（單一暖色系）。新規格是兩套語法配色（見 Code Block 的角色對應表），需要自訂 Prism 主題並以 `[data-theme]` 分別定義。
11. **閱讀量尺從 896px 收到 720px，且需要第二層 1120px chrome 寬。** `page.astro:33` 目前是單一 `max-w-4xl`（896px）。這是 layout 的結構改動。
12. **文章列表要從「卡片式列」改成「表列」。** `PostList.astro:26` 的 `rounded-xl mb-12` 與 `TagList.astro` 的「・」分隔語彙都要換掉。
13. **`prose` / `prose-xl` 的預設值需要大量覆寫，且要雙主題。** `@tailwindcss/typography` 的預設字級（20px）、行高、連結樣式、`blockquote`、`code` 全都與新規格不符，`prose-invert` 的預設灰階也違反 The Never-Neutral Rule。
14. **既有 120 篇文章的圖片可能假設白底。** 透明背景的線稿圖在 dark 主題會消失（見 Images / Figures）。需要盤點既有文章的圖片，替需要的加底板——這是內容側的遷移工作，不是 code 改動。
15. **舊債照舊：** `prose-zh` / `prose-en` 是空 class（用於 `Article.astro:28`、`AuthorBio.astro:14`、`pageFactory/index.astro:59`、`notes.astro:9`、`series/ai-agent.astro:84`，全專案無定義）；`.article-content` 的 `tracking-wide` 覆蓋掉 `tracking-tw-normal`。
