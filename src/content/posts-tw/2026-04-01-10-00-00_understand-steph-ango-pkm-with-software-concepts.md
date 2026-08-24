---
title: "用軟體開發概念來理解 Steph Ango 的 PKM 架構"
date: 2026-04-01T10:00:00+08:00
slug: "understand-steph-ango-pkm-with-software-concepts"
excerpt: "Obsidian CEO Steph Ango 的筆記架構，用 ORM、pure function、transaction log 等軟體開發概念來類比，竟然出奇地合理。"
guid: "understand-steph-ango-pkm-with-software-concepts"
category: "軟體工程"
tags: ["Obsidian","PKM","軟體架構"]
reference: "https://stephango.com/vault"
---

前陣子在[用手機叫 AI 幫我發部落格文章——我的 Raspberry Pi 筆記系統](/posts/integrate-claude-code-into-obsidian-and-my-blog-system)中，有提到我把筆記系統轉移到 Obsidian 上。

然後就看到朋友分享了 Obsidian CEO Steph Ango 的 [How I use Obsidian](https://stephango.com/vault)，瀏覽過後覺得他的這個使用 Obsidian 的方式很適合我，再加上我也很喜歡看一個工具的作者去使用該工具的方式並學習之，便著手將該方法論套用到自己的筆記系統中。

套用的過程中越套越熟悉，莫名地就跟一些軟體概念連結在一起，這邊就來記錄一下這些有趣的關聯。

## 簡單介紹一下 Steph Ango 的 Setup

他的中心思想是「盡可能不用資料夾做分類」、「能夠關聯的就用 `[[東京]]` 去做關聯」

他雖然說盡可能不用資料夾分類，但還是開了幾個資料夾：

- References： 用來存放被關聯的人事物，像是書籍、電影、作者、國家等等
- Daily：用來放 Daily Note，但不會有實際內容，主要用來被關聯
- Clippings：用來放外面擷取進來的文章
- Attachments、Templates：顧名思義
- 根目錄：放自己寫的筆記（包含 evergreen note）

不使用資料夾做分類主要是很多筆記有多個概念、跨多個領域，而用資料夾分類的一大壞處就是不得不選一個放。而且「找資料夾歸類」這件事挺耗心神，更不用提若是有子分類就更讓人找得很心煩。

不使用資料夾分類，取而代之的則是用 Frontmatter 中的 categories 來做分類，就可以再用 Obsidian Bases 來針對 property 作 query 去篩選並列出相關的筆記。

另外，找筆記也放棄一個一個找，統一用 quick search 去找。

前面介紹資料夾有講到，自己的筆記丟根目錄，「包含 evergreen note」。

所謂「evergreen note」指的就是那些「原子概念」「論點」。像是「豬大哥還沒死」就是一個論點，可以在筆記裡面闡述這個概念並提出佐證。

## 和軟體開發的關聯性

我覺得 References 很像是 ORM 的 Model 或 Entity，每則筆記有自己的 schema（由 template 定義的 properties），標題是 primary key，讓其他筆記用 internal link 指過來（就像 foreign key reference。）

Internal links 作為 foreign key，backlinks 則是 reverse relation，等同於 JOIN 的結果。

而 Obsidian Bases 則是跑在這些 entity 上的 query layer，負責用來篩選和聚合，可以組出比較方便使用的 List Page。

Evergreen Note 的話，就有點像 pure function。輸入觀察和經驗，輸出一個跨時間有效的論點，沒有副作用，可以被任意組合和重用。

同時 Evergreen Note 也是會使用資料的來進行詮釋和洞見。所以我們也可以把它當成 business rule 或 domain concept。

Daily notes 則是 transaction log，只記錄時間軸上發生了什麼，本身不存資料，純粹作為被 reference 的節點。剛好兩者也都是 time base data。

而 Categories property 則是 index，方便 Bases query 能快速找到同類筆記。

---

## 結語

用已知概念來幫助自己理解新事物總是特別愉快。

尤其是，這些原則在軟體工程裡行之有年，移植到 PKM 之後一樣成立。感覺用這個角度去理解它的設計就更能感受到這個設計的「正確」之處。

之後會再持續感受這個方法論，未來也許有機會再分享心得。
