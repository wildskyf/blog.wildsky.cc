---
title: "Claude Code 的 Agent View 用久後，對 Vim 的反思"
date: 2026-08-04T15:20:02+08:00
slug: "claude-code-agent-view-made-me-rethink-vim"
excerpt: "Claude Code 的 Agent View 讓我重新意識到：vim 的 buffer、window、tab 都是在切空間，而 agent session 切的是意圖。"
guid: "claude-code-agent-view-made-me-rethink-vim"
category: "軟體工程"
tags: ["Claude Code","Vim","AI"]
---

最近 Claude Code 的 [Agent View](https://code.claude.com/docs/zh-TW/agent-view) 用得挺順手，開一條、跑一跑、切走做別的事，回來再 attach 回那條 session。用了一陣子後，回頭再看 vim 的使用模式，一時有種說不上來的不對勁。

仔細想了一下才發現差在哪。

之前寫過一篇整理 vim 的 buffer / window / tab 的文章：[vim 中使用 buffer, window, tab 的方式](https://blog.wildsky.cc/posts/vim-buffer-window-tab/)，結論大概是 buffer 是 file proxy、window 是 viewport、tab 是 workspace。

現在看，這三層有個共同點：全部都是 **空間** 的切法。哪些檔案、切幾格、幾組 layout。而 agent session 不是空間的切法，是 **意圖** 的切法。

Agent View 那張表列出來的，是每條 session 當初被交派了什麼、現在卡在哪、產出了什麼；而 vim 的 `:ls` 列出來的，是當初開了哪些檔案。

差別就在這裡。而且是要回到工作狀態（context switch）的時候差最多 —— 記得「我在修那個 auth 的 race condition」比記得「我當時開了 middleware.ts」容易得多。

這個差異其實 Agent View 有做出來：Agent View 預設按狀態分組，`Ctrl+S` 才切成按目錄分組。意圖是主軸，空間是備選。而 vim 則是路徑是唯一的軸，不存在狀態這條軸。

## 但這不是 vim 的問題

一開始想的是「vim 少了意圖這層」，後來覺得這個講法不對。

editor 管好 editor 這件事是對的，而且我喜歡 vim 這樣。

那意圖是誰的事？git branch 是、tmux session 是、worktree 也是，各管一段。代價是這層永遠跟編輯狀態對不齊 —— branch 名字記得住意圖，但它沒辦法知道當時開了哪些 buffer。

agent 之所以看起來比較順、比較合用，是因為它把「想做什麼」和「動了哪些東西」收在一起。

不過好消息是 vim 什麼都給了。`BufAdd`、`BufWinEnter` 這些 autocmd 都在，buffer API 也都在。這層天生適合放在 plugin，不需要動核心。

我們還能順手回收前一篇的結論：當時把 bufferline 拔掉，是因為同時攤四十個 buffer 沒有意義。但如果 bufferline 只顯示當前意圖底下的那四個，好像又值得留了。scope 正確，UI 就變得有意義了。

## 卡住的地方

想到這裡卡在一個問題上。

Agent View 之所以能把「意圖」和「動了哪些檔案」綁得那麼乾淨，其實是靠一個 vim 學不來的手段：每條背景 session 在要寫檔前會被搬到 `.claude/worktrees/` 底下自己的 git worktree。一個意圖一份 checkout，歸屬問題根本不會發生 —— 它是被結構繞過去的，不是被解決的。

vim 就沒有這條路。一個 process 裡同時跑好幾條心智執行緒，共用同一份 working tree，順手改個 config、翻一下不相關的檔案，這些要算誰的？

那份 config 同時屬於三個意圖，這件事本身是合理的。硬要 one-to-one 大概第一天就破功。

這塊我也還沒想完，也可能這就是為什麼 vim 三十年來沒把這層收進去的原因之一？

另外也注意到一件事：Claude Code 把每條 session 的狀態寫在 `~/.claude/jobs/<id>/state.json`，跟這種 plugin 會需要的 intent 紀錄是同一類東西。要是哪天有人讓 plugin 認得這些檔案的話，這樣一條意圖就能同時綁「我改了哪些檔案」和「我請 agent 做了什麼」。

先記著，之後再往深入一點去想吧。
