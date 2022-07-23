---
title: '[Vim Protips] Let''s move faster - 顯微鏡式移動法'
date: 2019-03-22T11:17:33.000Z
slug: vim-move-like-microscope
excerpt: 我一直很喜歡自己 Vimrc 裡的一個設定，就是讓 ctrl 上下變成一次移動五行，使游標移動有像顯微鏡般的粗
feature_image: ousa-chea-552189-unsplash-e1553233367397.jpg
guid: 2019-03-22-11-17-33_vim-move-like-microscope
---
我一直很喜歡自己 Vimrc 裡的一個設定，就是讓 ctrl 上下變成一次移動五行，使游標移動有像顯微鏡般的粗細調節輪。

這樣方便很多，不用再算有幾行。反正超過五行的就是 ctrl 上下移過去；沒有那麼遠的就把 ctrl 放開，慢慢移動過去就好，最多也就按個四五下。

config 裡的設定其實也蠻簡單的，把這段放在 `~/.vimrc` 裡面就好。

```vim
" move cursor faster
map <C-k>  5gk
map <C-j>  5gj
map <C-UP> 5gk
map <C-DOWN> 5gj
```

如果覺得一次移動五行太多或太少也可以把 5 改成其他數字，反正粗細自己控制。

也曾經有想要要裝 easymotion 這類的 plugin，但可能是功力還不夠，用不順手。這種無腦漸進移動法比較適合現階段的我。

> 我不是在目的地，就是在前往目的地的路上。

三不五時看看別人的 .vimrc 會挖到蠻多寶的，如果有興趣可以參考一下我的 [https://github.com/wildskyf/vim.d](https://github.com/wildskyf/vim.d)，之後應該也會多寫點 Vim 相關的文章，把我自己腦中的東西給外部化，順便分享在這個工具上學到的一些小技巧或心得。

其他連結
----

*   本站其他和 Vim 相關的文章: [vim](http://blog.wildsky.cc/tags/vim/)
*   [www.vim.tw](https://www.vim.tw/)
*   Vim Taiwan 的 telegram group: [http://t.me/vim\_tw](http://t.me/vim_tw)

原推文在這
-----

> 話說，我一直很喜歡自己 Vimrc 的一個設定，就是讓 ctrl 上下變成一次移動五行，使游標移動有像顯微鏡般的粗細調節輪。這樣方便很多，不用再算有幾行[#vim](https://twitter.com/hashtag/vim?src=hash&ref_src=twsrc%5Etfw) [https://t.co/2jciYY6cKl](https://t.co/2jciYY6cKl)
>
> — Wildsky F. (@wildskyf) [February 17, 2019](https://twitter.com/wildskyf/status/1097171177317879813?ref_src=twsrc%5Etfw)
