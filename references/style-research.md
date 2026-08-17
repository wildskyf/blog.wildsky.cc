# 深海美術語言研究 — 明日方舟「覆潮之下 / 愚人號」風格系統研究報告

（供 blog.wildsky.cc 設計系統 DESIGN.md / PRODUCT.md 重寫使用）

## TL;DR

- 「覆潮之下 / 愚人號」的美術語言可精確提煉為三個可直接系統化的支柱：**偏青綠、墨黑的深海冷色場 + 血紅/珊瑚色的稀缺點綴**、**哥德/航海雕刻感的排版與裝飾**、以及**「下潛=閱讀、燈塔/歌聲=導引」的敘事框架**——與委託人現有方向完全吻合。
- 委託人現有系統（血紅 #C8323E <5%「一件紅衣」、藍青色相軸、襯線+small caps、珊瑚剪影、DESCENT LOG）方向已正確；本報告提供具體收斂：色域改為**偏青綠深海**（拉開與 lobby 科技藍 HUD 的距離）、開源字體配對（Noto Serif TC / 源流明體 + EB Garamond / Cormorant SC + Space Mono，皆 SIL OFL）、與去 IP 化命名系統。
- **法律與品味上唯一安全的路徑是只提取「美術語言」（色彩結構、形狀語彙、排版邏輯、公共領域敘事母題）而非任何資產或專有名詞**——不得使用官方立繪/logo/角色圖，不得使用「海嗣」「阿戈爾」等專有名詞作站內元素；報告末章明列 anti-references。

-----

## Key Findings

1. **「紅衣原則」有官方逐字出處。** 據鷹角 / Yostar 官方新聞稿（Games Press, 2021-10-21），斯卡蒂於「覆潮之下」中「dressed in red and disguised as a singer, starts her journey in Sal Viento」（一襲紅衣、偽裝成歌手，於薩爾維恩托展開旅程）。紅色在冷色深海世界中作為極少量、高語意的焦點色，正是遊戲敘事本身的視覺語言；委託人「一件紅衣」原則因此有紮實的美術對應。
1. **色彩結構是「冷色為場、暖色為刺」。** 阿戈爾（Ægir）與海嗣（Seaborn）美術以偏青綠、墨綠發黑的深海為主場，生物光（bioluminescence）與燈塔光為次要光源，紅與珊瑚色僅出現在角色焦點（血、心、歌、感染）。這是一個高對比度、低頻率的強調色系統，恰好對應「全站紅色 <5%」。
1. **敘事主題高度可提取且可去 IP 化。** 「愚人號」（Stultifera Navis）直接取自中世紀「愚人船 / Ship of Fools」典故——Sebastian Brant 1494 年於巴塞爾出版的諷刺詩《Das Narrenschiff》、Jakob Locher 1497 年拉丁譯本、Bosch 畫作、以及 Foucault《瘋狂與文明》(1961) 開篇同名章節。核心母題（瘋狂/清醒、航行/迷航、下潛/深淵、燈塔/導引、歌聲/呼喚、同化/異化）都是**公共領域的文學資產**，可安全用作部落格概念詞彙，無須觸碰任何遊戲專有名詞。
1. **字體方向可完全以開源達成。** 繁中襯線以 Noto Serif TC（SIL OFL 1.1）或更具鉛字文學感的源流明體（GenRyuMin，SIL OFL 1.1）為體；Latin 以 EB Garamond（真 small caps，SIL OFL 1.1）為體、Cormorant SC 或 Playfair Display SC（高對比雕刻感標題）為標題、Space Mono / IBM Plex Mono / JetBrains Mono（皆 SIL OFL）為技術性 meta 與 code——全部 SIL OFL，法律安全。

-----

## Details

### 一、視覺美術語言

#### 1.1 三位角色的配色與構圖

**斯卡蒂（Skadi，基礎）** — 由鷹角初創期插畫師 **Skade** 繪製（Skade 亦為前 MICA Team／散爆原畫師，其角色以「多層次衣物堆疊」著稱，玩家笑稱要「猜她穿了幾層衣服」）。基礎斯卡蒂為近乎全冷色/中性的配色：灰髮、黑白灰的服裝層次、冷調金屬劍具，是「深海獵人」的低彩度、高質感造型。焦點對比僅來自少量的紅（感染監測、瞳色）與冷金屬光。構圖上以巨大劍具（劍匣）作為斜向動勢軸線。

**斯卡蒂泳裝「驭浪 WR04」（Waverider WR04，Coral Coast Collection）** — 這是與深淵美術對照的「海面」版本：明亮藍色海水、清澈天空、柔和高明度。官方文案稱其「為阿戈爾海灘客量身訂做」，Good Smile 手辦文案形容她「如同降臨沙灘的海之精靈」。此皮膚證明同一角色可在「深海（暗、青綠）」與「海面（亮、天藍）」兩個明度/色相端點間切換——正對應委託人的雙主題（dark 深海 / light 海面）。

**濁心斯卡蒂（Skadi the Corrupting Heart）** — 由 Skade 設計。據官方新聞稿（Games Press, 2021-10-21），她是「the very first 6-star alternate operator with Live2D dynamic art」（首個具 Live2D 動態立繪的六星異變幹員），於限時活動「覆潮之下」（2021-10-21 至 2021-11-04）登場。這是三者中「冷場中的紅衣」最強烈的案例：主色為**紅色禮裙**（frilled/off-shoulder red dress），輔以**青/teal 色的帽子、手套、緞帶**與黑色 ascot，形成紅—青補色張力。她手持豎琴（harp），身處水下。配色邏輯是：紅裙為單一高彩度主體，青綠水體與冷色配件為場，形成「一件紅衣浮於墨青深海」的畫面——與委託人原則幾近一比一對應。其動態立繪的核心意象是「歌」（她的聲音會將生物同化為海嗣）。

**歸暝幽靈鯊（Specter the Unchained，歸溟幽靈鯊）** — Laurentina 的「升變」（alter）形態，於「愚人號」登場，主題是**清醒與瘋狂的交替**（Dollkeeper 機制：陣亡時切換為「Substitute」替身，即她瘋狂時的舊人格 Specter）。其美術延續深海獵人的冷色骨架，帶有修女（nun）與雕刻/藝術意象——其信物描述為「a detail-rich sculpture」「Artwork only possesses meaning when left in the hands of those who know to appreciate it」。

**冷色場中紅色的使用方式（總結）**：三者共享「低彩度冷色骨架 + 極少量高彩度暖色刺點」的結構。紅色從不作為大面積背景，而是作為**敘事焦點**（血、心、歌、感染）出現。這正是委託人 <5% 血紅原則的美術理論基礎。

#### 1.2 「覆潮之下」與「愚人號」活動美術

**主題色氛圍**：兩個活動的水體並非明亮的熱帶藍，而是**偏青綠、墨綠發黑的深淵色**。海嗣的「濱海坏印 / Nethersea Brand」在美術上是一種蔓延覆蓋整個城鎮的**苔蘚狀發光生物膜**——TV Tropes（Characters/ArknightsEnemiesAToJ）逐字描述：「Meat Moss: … the Nethersea Brand, which is essentially a special bioluminescent algae that can propagate on any surface」，同頁並列「Lovecraft Lite」「Eldritch Abomination」，且指其與 StarCraft 的 Zerg Creep 為 Expy 對照。它提供了「有機深淵」的核心紋樣語言：不規則、擴散、發著微光的有機邊緣。海嗣整體美術亦被拿來與 Bloodborne 魚人、克蘇魯神話的 Deep Ones 相比。

**航海 + 哥德元素**：「愚人號」的活動 logo 背景是一個**引擎室車鐘（engine order telegraph，船隻速度指令裝置）**，指向玩家最後選擇的關卡組—— 把真實航海儀器直接當作 UI 裝飾。活動場景以 Gran Faro（意為「大燈塔」）為核心，最後一座倖存的「伊比利亞之眼」（Eye of Iberia）燈塔是敘事與視覺的錨點。 阿戈爾語（Aegirian）的設定為「based on Classical Latin and English, making it quite similar to High Gothic in Warhammer 40,000」（Arknights Terra Wiki）——即拉丁化、雕刻感、哥德的文字氛圍。

**阿戈爾建築美學**：官方描述阿戈爾人「即使技術也必須兼顧美學」， 海底城市為「巨大的、抗壓的透明穹頂」，海床上有燈光照明。 這是「高科技但有機、莊嚴、被水包覆」的美學——與主界面 lobby 的科技 HUD 風格截然不同，正是委託人要對齊的方向。

#### 1.3 音樂/PV 視覺

**Under Tides（音樂）** 由 Steven Grove（駐洛杉磯的 Hexany Audio 成員）製作，Monster Siren Records / 塞壬唱片發行（2021-11-04）。人聲手法據 Arknights Terra Wiki 逐字：「Steven Grove created the vocals by writing out melodic phrases, reversing them, and recording the reversed phrases with a singer - then once again reversing the recordings back to their original melodies which produced artifacts, unusual dynamic shifts and an otherworldly language.」——先寫旋律、反轉、由歌手錄反轉版、再反轉回來，製造出「異世界語言」般的音色。這是「歌聲 = 呼喚 / 同化」主題的聲音對應。**Voices EP**（Monster Siren）獻給深海獵人（Gladiia、Skadi、Specter），MV/主視覺以濁心斯卡蒂代替斯卡蒂出鏡，TV Tropes 形容其為「Bloodborne-esque」的宏大管弦 + 不祥吟唱。**Stultifera Navis 的 3D 動畫 PV** 以「Once I awaken, what will I find in my sight?」為題眼，由 Specter the Unchained 與 Irene 旁白， 視覺以墨青海水、燈塔、深海城市為主。

#### 1.4 色彩深入

- **色域**：主場為**偏青綠的深海（teal / petrol green）**而非純藍。可參考的青綠系方向（示意）：#0d4f4f → #1e7472 → #3b9e99 的暗青綠→中青綠梯度。
- **明度分布**：整體低明度、低彩度為主，暗部佔畫面大宗；生物光/燈塔光作為局部高明度提亮。
- **紅/珊瑚點綴**：血紅（斯卡蒂紅裙、感染、心/歌）為高彩度焦點；珊瑚/暖橘色偶爾作為次級暖點（燈塔暖光、生物光暖端）。

### 二、敘事主題與世界觀

#### 2.1 阿戈爾 / 海嗣 / 深海教會

- **阿戈爾（Ægir）**：孤立、傲慢、超先進的海底技術官僚文明，視陸地人為「原始人」；重美學、以歌聲溝通、母系社會。 名取自北歐神話中與海洋相關的巨人 Ægir（古諾斯語意為「海」）。
- **海嗣（Seaborn）**：來自深淵、超高速演化、擁有蜂巢意識「The Many / We Many」（英文本地化影射《馬可福音》5:9「My name is Legion」）的水生種族。主題是**同化（assimilation）與異化**——演化越深，外形越「異怪（eldritch）」、越難辨識器官。
- **深海教會（The Church of the Deep）**：崇拜海嗣為神、致力於將全體陸地人同化進蜂巢的異端邪教，滲透阿戈爾與伊比利亞。 核心意象：**深海的呼喚、犧牲獻祭、「來自海洋的禮物」**。
- **對抗主題**：文明 vs 深淵、清醒 vs 被呼喚、個體 vs 集體同化。

#### 2.2 斯卡蒂與濁心斯卡蒂

- 斯卡蒂：阿戈爾—海嗣混血的「深海獵人」超級戰士，幼年因海怪失去家人，被改造成獵殺海嗣的兵器。主題：**獵人、孤獨、以旋律表達情感**（「Every Aegir expresses their feelings through melodies」）。
- 濁心斯卡蒂：一個「她屈服於呼喚」的可能未來——完全接納海嗣血脈、以歌聲同化眾生。主題：**歌（siren song）、犧牲、同化、被愛與被吞噬的曖昧**。

#### 2.3 歸暝幽靈鯊（Specter the Unchained）

- Laurentina / Specter：**清醒與瘋狂**的張力是其核心。她的海嗣血脈越靠近海洋越強、反而能抵抗礦石病（Oripathy）並短暫恢復理智。主題：清醒、瘋狂、藝術（雕刻）、教會（修女意象），以及「願你在夢中仍保有清醒」（Specalt 台詞：「I wish that you may remain conscious in your dreams」）。

#### 2.4 愚人號（Stultifera Navis）的典故

- **Ship of Fools / Stultifera Navis**：源自 Plato《理想國》第六卷寓言（失能的船員），經 Sebastian Brant **1494 年於巴塞爾出版、含 112 章諷刺詩**的《Das Narrenschiff》發揚，1497 年由 Jakob Locher 譯為拉丁文《Stultifera navis》，並啟發 Hieronymus Bosch 的畫作《Ship of Fools》。
- **Foucault**：《瘋狂與文明 / Folie et déraison》(1961) 首章確名為「Stultifera Navis」，以 Brant 之《Das Narrenschiff》為起點，討論中世紀將瘋人放逐於船、瘋狂被視為「與世界末日相關的禁忌知識」的形象。
- **活動主題**：黃金時代的緬懷與其不可回返（「Iberia can never return to what it was」）、面對悲劇與哀悼、以及「愚人般固執的勇氣」（CN 標題「愚人号」的「愚人」含固執之意）。

#### 2.5 可提取的概念詞彙（去 IP 化）

深度 / 下潛（descent, depth）、潮汐（tide, tidal）、燈塔（lighthouse, beacon）、航行日誌（log, logbook, ship’s log）、航海儀器（compass, telegraph, sounding）、深淵（abyss, the deep）、呼喚/回聲（call, echo, resonance）、清醒/夢（waking, dream）、沉默（silence）、洋流（current）、燈/微光（bioluminescence, glow）。**注意：這些皆為公共領域的航海/深海母題，非遊戲專有名詞。**

-----

## Recommendations（供 DESIGN.md / PRODUCT.md）

### （1）色彩系統修正建議

- **確立色域為「偏青綠深海」而非純藍**，以拉開與 lobby 科技藍 HUD 的距離：
  - Dark 主題背景梯度：極暗青綠→暗 petrol，示意 `#081A1C` / `#0D2A2C` / `#12403F`（帶綠味、非純黑）。
  - 中間調（表面、卡片、border）：`#1E4E4C` ~ `#2C6E6A`（中青綠）。
  - 前景/正文色：高明度冷白帶青，如 `#DCEDEA`，避免純白。
- **Light 主題（海面）**：提高明度與藍味、降低綠濁，示意 `#E8F1F2` 底、`#3A7CA5` 一類海面藍作主色相；保留少量青綠作為與 dark 主題的連結。
- **血紅強調色維持 `#C8323E`**，明確定義語意 token（如 `--color-accent-critical` / `--color-descent-marker`），並在文件中寫死規則：**僅用於單一焦點**（連結 hover、當前章節標記、關鍵引言起首、drop cap、「潛標」）；全站面積 <5%。可加入一個**珊瑚/暖橘次級點綴**（示意 `#E8895A`）作為極稀有第二暖點（燈塔光、成功狀態），面積 <1%。
- **色相軸定義**：主軸 180–195°（青綠→青）；強調暖點 355°（血紅）與 18°（珊瑚）。以「冷場為體、暖點為刺」作色彩憲法一句話。

### （2）字體與排版方向（皆 SIL OFL，法律安全）

- **繁中襯線（body）**：主選 **Noto Serif TC**（Google/Adobe，SIL OFL 1.1，7 字重＋variable，覆蓋最穩、與 Latin 版 Noto Serif 原生相配）。若要更強的「鉛字文學/哥德刻印」氛圍，改用 **源流明體 GenRyuMin（ButTaiwan，SIL OFL 1.1，源自 Source Han Serif）**——橫筆末端收細、字形修長、活字 letterpress 味濃，最貼合「DESCENT LOG」古航海日誌感。（**注意**：一點明體 I.Ming 授權為 IPA Font License v1.0，** 非 OFL**，若堅持全站 OFL 應避免打包；TW-Sung 全字庫宋體為政府開放資料授權，亦非 OFL。）
- **Latin 襯線（body + small caps）**：**EB Garamond**（Georg Duffner，SIL OFL 1.1，具**真 small caps** `smcp`/`c2sc`，非偽小大寫）——人文主義、中對比，與明體/宋體同屬人文襯線，搭配和諧，最推薦作 Latin 正文與 small-caps 段落標籤。替代：Spectral（Production Type，SIL OFL，含真 small caps、螢幕長文佳）、Cardo、Alegreya（皆 SIL OFL、皆有專屬 SC）。
- **標題/刻印感 display**：**Cormorant SC**（Christian Thalmann，SIL OFL 1.1，高對比細銳襯線，獨立 small caps 家族）或 **Playfair Display / Playfair Display SC**（SIL OFL 1.1，Didone 高對比、維多利亞雕刻感、內建真 small caps）。兩者皆為 display，僅用於 ≥18–20px。若要極端「古航海日誌」味，選 **IM Fell English SC**（Igino Marini，SIL OFL 1.1，1686 牛津 Fell 活字， 帶墨韻與不規則感）。
- **技術性 meta 標籤（DESCENT LOG 這類）**：**Space Mono**（Colophon/Google，SIL OFL 1.1，復古顯示等寬、個性強）作氛圍性 meta 標籤/時間戳（如 `DESCENT LOG // DEPTH 4000M`）；實際 code block 用 **IBM Plex Mono** 或 **JetBrains Mono**（皆 SIL OFL）確保可讀性。
- **完整配對方案**：源流明體（繁中）＋ EB Garamond（Latin body/small caps）＋ Cormorant SC 或 Playfair Display SC（大標題）＋ Space Mono（meta）＋ JetBrains Mono（code）。
- **排版手法**：章節標題以 small caps + 加寬字距（letter-spacing）呈現「刻印」感；引言用 drop cap（可染血紅）；分隔線用極細 hairline rule 呼應航海圖的經緯格線。CJK 本身無 small caps，雙語標題應以「明體 CJK + Latin true small caps」並置。

### （3）形狀與裝飾語言

- **有機剪影**：底部珊瑚/海藻剪影維持，但收斂為**單色、半透明、低明度青綠**的剪影；可加入海扇、水螅、發光孢子點的有機輪廓。
- **撕裂/有機邊**：卡片、圖片容器、section 分隔以**不規則筆刷撕裂邊或墨滲邊（deckle / torn edge）**取代硬直角，呼應立繪的筆刷撕裂邊與「發光生物膜」的擴散邊緣。可用 SVG `feTurbulence`/位移濾鏡或預渲染 PNG mask 實作。
- **哥德/航海裝飾元素**：以**羅盤方位、測深線、燈塔光束、繩結、車鐘刻度盤**等航海儀器輪廓作極少量裝飾 icon（線稿、單色）；哥德感來自尖拱/細長比例與 small caps 排版，而非堆砌紋樣。
- **光**：以 CSS 徑向漸層模擬**生物光/燈塔光**——極少量、局部、暖或冷的微光暈，置於暗青綠場中作視覺錨點（對應「往下潛時的一束光」）。

### （4）命名系統與文案聲音

- **文案聲音**：沉靜、精確、略帶哀悼與敬畏（對齊「面對悲劇、緬懷、固執前行」）；以技術寫作為主體，深海母題為氛圍外殼，不喧賓奪主。
- **英文 meta 標籤延伸（DESCENT LOG 家族）**：`DESCENT LOG`、`DEPTH ▸ ____M`、`SOUNDING`（測深）、`DEAD RECKONING`（航位推算）、`WATCH LOG`（值更日誌）、`BEARING`（方位）、`TIDE TABLE`、`BEACON`（燈塔/精選）、`SURFACE`（回到頂部/海面＝light 主題切換）、`DESCEND`（往下讀）、`ECHO`（回響/留言）、`CURRENT`（近期）、`SILENT DEPTHS`（歸檔）。
- **中文命名概念**：下潛 / 潮汐 / 燈塔 / 航行日誌 / 深處 / 回聲 / 洋流 / 微光——皆通用航海母題。
- **導航隱喻系統**：「往下讀 = 往下潛」維持；加「回到海面（SURFACE）＝回頂/切亮主題」、「燈塔（BEACON）＝精選/置頂」、「日誌（LOG）＝文章列表」的一致隱喻。

### （5）Anti-references（法律與品味紅線）

**絕對不可（會變成同人站或侵權）：**

- 任何官方圖像資產：立繪、皮膚圖、活動 KV、logo、UI 截圖、PV 畫面、EP 封面、手辦照。
- 遊戲專有名詞作站內元素/品牌：海嗣 / Seaborn、阿戈爾 / Ægir、深海教會 / Church of the Deep、深海獵人 / Abyssal Hunter、濱海坏印 / Nethersea Brand、伊比利亞之眼 / Eye of Iberia、Rhodes Island、幹員 / Operator、Monster Siren、角色名（斯卡蒂 / Skadi / Specter / Gladiia 等）。
- 直接複製角色配色作「角色主題」（如「濁心斯卡蒂配色」），或重繪/描摹立繪作 header。
- 使用遊戲字型或其專有 logo 字體、活動標題排版的直接仿製。

**可安全提取（純美術語言/公共母題）：**

- 色彩「結構」：冷青綠場 + 稀缺血紅/珊瑚點綴的比例關係（非具體角色配色）。
- 排版「邏輯」：襯線 + small caps 刻印感、字距、drop cap、hairline rule。
- 形狀「語彙」：有機剪影、撕裂邊、生物光暈、航海儀器線稿 icon。
- 敘事「母題」：Ship of Fools（Plato / Brant / Bosch / Foucault，公共領域）、燈塔/航海/下潛/潮汐/清醒與瘋狂——皆為通用航海文化與公共文學資產，非鷹角所有。

-----

## Caveats

- 本報告未能直接開啟部分需登入或阻擋爬蟲的頁面（gilangandrian.com 插畫師作品頁、fandom 濁心斯卡蒂主頁回傳 402/402、gilangandrian robots 禁止）。角色精確配色 hex 係基於官方文案、手辦描述、wiki 敘述與公開美術描述之綜合推斷，**非取自官方色票**；報告中所有 hex 值均為**示意方向**，實作時應以螢幕取色驗證並自建 token。
- 「濁心斯卡蒂由 Skade 設計」係綜合 wiki 與媒體報導；「首個 Live2D 六星異變」則有官方新聞稿逐字佐證。插畫師署名最終以官方 credit 為準。
- 部分敘事細節在官方設定中刻意留白：Under Tides 中紅裙為斯卡蒂的「偽裝」，濁心斯卡蒂為「可能的未來」而非確定正史，本報告已註明。
- 字體授權以研究時（2026-08）各 GitHub repo / Google Fonts 所載為準；打包前應再次確認 LICENSE 檔，尤其避免誤用 IPA 授權的一點明體、或政府開放資料授權的全字庫宋體於全 OFL 系統。
