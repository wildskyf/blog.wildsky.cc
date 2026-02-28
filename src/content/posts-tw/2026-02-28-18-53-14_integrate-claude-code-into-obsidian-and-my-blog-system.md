---
title: "用手機叫 AI 幫我發部落格文章——我的 Raspberry Pi 筆記系統"
date: 2026-02-28T18:53:14+08:00
slug: "integrate-claude-code-into-obsidian-and-my-blog-system"
excerpt: "你現在讀到的這篇文章，是我躺在沙發上用手機發布的。不是用什麼 WordPress app 或 Medium，而是透過 Happy Coder 叫 Raspberry Pi 上的 Claude Code 幫我處理。"
guid: "integrate-claude-code-into-obsidian-and-my-blog-system"
category: "軟體工程"
tags: [Raspberry Pi, Obsidian, AI, 自架, 筆記系統]
---

你現在讀到的這篇文章，是我躺在沙發上用手機發布的。

本部落格是 host 在 Cloudflare Pages 上的純靜態網站，沒有使用 WordPress app 或 Medium 那類 CMS，之前的做法是，我把 markdown 和部落格的 source code 推到 GitHub 上，再用 CI/CD (GitHub Actions) 去自動把網站建置起來，並部署到 Cloudflare 上。要推上去我就必須開電腦，但為什麼我前面說這篇文章是躺在沙發上發的呢？且讓我娓娓道來⋯⋯

## 起因

我先前一直有個困擾：我筆記寫了不少，但要把它「發布成文章」這件事，門檻就是高了那麼一些。除了寫文章感覺就需要一些心力，如果發布的流程還要開電腦、調格式、處理 frontmatter、git commit & push⋯⋯其實每一步都不難，但串在一起就是足以讓人拖延的阻力。

剛好家裡有一台 Raspberry Pi 5 ，且它 24 小時都一直開著，本來我是拿來跑一些自架服務。前天晚上就突然想說：既然它隨時都在，何不讓它幫我做這些雜事？（也恰好我想要讓我的筆記系統和 Claude Code 有多點的互動，便開始了這段研究）

## 系統架構

我把這套系統叫做 **Claudsidian**（Claude + Obsidian），架構大致長這樣（下圖是我叫 Claude Code 替我產生的）：

```
Raspberry Pi 5 (16GB, 24/7)
├── CouchDB ← 同步中樞
│   ↕ (Self-hosted LiveSync)
│   ├→ MacBook (Obsidian)
│   └→ iPhone (Obsidian + Happy Coder)
├── livesync-bridge ← CouchDB ↔ Pi 上 vault 的橋樑
└── Claude Code CLI（AI assistant）
```

幾個重點：

- **CouchDB + Self-hosted LiveSync**：讓所有裝置的 Obsidian 筆記即時同步。手機上改了一個字，Pi 上幾秒內就有。
- **livesync-bridge**：把 CouchDB 裡的資料解出來，變成 Pi 本地的 markdown 檔案。這樣 Claude Code 才能直接讀寫 vault 中的筆記。
- **Claude Code**：Anthropic 的 CLI 工具，跑在 Pi 上，可以讀檔案、寫檔案、跑 git 指令，基本上可以當成是一個住在終端機裡的 AI 助理。
- **Happy Coder**：讓我在手機上就能跟 Pi 上的 Claude Code 對話，不用從手機開 terminal SSH 進去打指令。

## 發布流程

發文的流程長這樣：

1. 在任何裝置上的 Obsidian 寫好文章（我通常在 iPhone 上撰寫零散想法， 看是繼續在手機上或移動到 Mac 上寫成完整文章）
2. LiveSync 自動將筆記/文章草稿同步到 Pi 上的 CouchDB
3. livesync-bridge 把 CouchDB 的內容同步到本地 vault
4. 在手機上打開 Happy Coder，或直接開電腦跟 Claude Code 說：「幫我把這篇發到部落格」
5. Claude Code 自動處理 frontmatter 轉換、複製到 blog repo、git commit & push
6. CI/CD 自動部署，文章上線

最關鍵的就是第 4 步——我只要用手機說一句話，剩下的 Claude Code 全包了。大幅縮短了手動整理部落格格式的工。

## 意外收穫

在建這套系統的過程中，我順便請 Claude Code 幫我整理了 vault 裡從 Heptabase 匯入的約 1,500 張卡片。（其實應該是倒過來，本來是要替筆記引入 Claude Code，但在本文中他們主配角對換😆）

原本那些卡片是一整坨丟在一個資料夾裡，Claude Code 幫我依主題分類、搬到對應的資料夾，還處理了不少奇怪的問題——像是有些筆記的檔名超過 Linux 255 bytes 上限、有些 Unicode 編碼不一致，這些瑣碎但惱人的問題它都一一解決了。

整理了線性代數 169 篇、作業系統 91 篇、經濟學 26 篇、健身 62 篇⋯⋯手動做的話，大概我的部落格會再荒廢半年。（而且沉迷於整理筆記其實也是某種怠惰，未來我會再寫文章細講這個想法）

## 心得

這套系統真正解決的問題，其實不是什麼「技術」問題，而是一個 **心理門檻** 的問題。

寫文章本身就需要耗費心力了，如果發布流程又很麻煩，大腦就會找各種理由拖延。而 Claudsidian 把「從想法到文章上線」之間所有的摩擦力都消掉了——我只要把文章寫好，剩下的事情交給 AI 和自動化。

更讓我覺得有趣的是，AI 不只是用來聊天或生成內容。在這個 workflow 裡，Claude Code 更像是一個真正的工作夥伴——它幫我整理筆記、幫我發文章、幫我處理各種檔案系統的鬼問題。它不是取代我寫作，而是把寫作以外的麻煩事都接走了。

啊其實，也不用這麼麻煩，架個 WordPress 也能從手機上寫 & 發布文章。但對我來說，這次折騰的價值不只是「能從手機發文」——而是讓 AI 真正融入我的筆記和寫作流程。整理 1,500 張卡片、處理檔名問題、發布文章，這些事以前都要我自己一個個來，現在只要開口就好。

畢竟 Escape competition through authenticity 方法是百百種，但想做事情的衝動與心態更難能可貴。

（還沒想到 feature img 要怎麼處理XDD 算了，之後再說哈哈哈哈）
