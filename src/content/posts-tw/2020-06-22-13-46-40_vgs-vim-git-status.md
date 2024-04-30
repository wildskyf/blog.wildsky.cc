---
title: "[Vim Protips] vgs：用 vim 開啟尚未 commit 出去的檔案們"
date: 2020-06-22T13:46:40
slug: "vgs-vim-git-status"
excerpt: "<p>因為我很常把 vim 開開關關的，所以直接用 vim 來開啟 git status 裡的檔案也是家常便飯，這篇文章就在講要怎麼快速地做到這件事。</p>
"
feature_image: null
guid: "https://blog.wildsky.cc/?p=1641"
---
    alias vgs='vim -p $(git status --porcelain | cut -c 4-)'

這串指令可以用 `vgs` 直接開啟編輯到一半、尚未 commit 出去的檔案們，概念就是把 git status 的檔案名當成 `vim -p` 後面的參數。

對於很常開開關關 vim 的我來說算是十分方便的指令。

也可以把 vim 換成 code/sublimt/emacs 之類的其他編輯器，但可能不是 `-p`，就再請自行 `--help` 看怎麼開多個檔案。

其他相關 alias
----------

    alias gs='git status'
    alias g='git'
    alias v='vim'

用 alias 可以省去很多時間，雖然按 tab 也很方便，但少按一個鍵就省去按一個鍵的時間，又可以省去不小心按錯的時間，也是不無小補。