---
title: "vim 中使用 buffer, window, tab 的方式"
date: 2025-11-06T11:43:29+08:00
slug: "vim-buffer-window-tab"
excerpt: "最近讀到 stackoverflow 上 why-do-vim-experts-prefer-buffers-over-tabs 的討論，來修整一下我的 LazyVim （看來是不夠 Lazy 才會還在一直調這些有的沒的XD）"
feature_image: "lazy-cat.jpg"
feature_image_caption: "懶惰ㄉ貓"
guid: "vim-buffer-window-tab"
category: "軟體工程"
tags: ["Vim"]
---

最近讀到這個討論 <https://stackoverflow.com/questions/26708822/why-do-vim-experts-prefer-buffers-over-tabs>

簡單整理一下資訊：

- Buffer 是 file proxy，不用在介面上顯示全部打開了的 buffer 清單，應該用 :b 關鍵字去切換
- Window 是 viewport，可以有多個 viewport 去查看同個 buffer，對同份檔案進行前後對照時很好用
- Tab 則比較像 workspace，可以組裝多個 window

過去在使用 vim 的習慣都是用 fzf 去 quick find 專案中的檔案，偶爾也會有開啟的檔案亂到腦袋一時無法負荷，直接把 vim 關掉整個重來的時候，之後應該也會試試看各種靈活使用 buffer 的方式來看能不能改善工作流程。

也基於那篇文章的建議，我用 Claude Code 改善我的 LazyVim 設定，做了幾個修改：

1. 把 bufferline 拔掉，改成顯示 tab line
2. tab 只顯示檔案名
3. 狀態列把不重要的資訊拔掉（current hit branch、git diff 數量，時間等）
4. 順便修了一下困擾許久的 fzf lsp 的內容會重複的問題（結果原來是開了兩個 lsp...）

來用個幾天感受一下。
