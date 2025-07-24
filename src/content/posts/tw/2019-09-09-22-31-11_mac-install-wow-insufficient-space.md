---
title: "安裝魔獸世界卻遇到磁碟空間不足的解法"
date: 2019-09-09T22:31:11
slug: "mac-install-wow-insufficient-space"
excerpt: "<p>因為遇到這個在看起來很神秘的問題，所以寫篇文章記錄一下。</p>
"
feature_image: null
guid: "http://blog.wildsky.cc/?p=1434"
---
因為遇到這個在看起來很神秘的問題，所以寫篇文章記錄一下。

![](/images/Screen-Shot-2019-09-09-at-22.10.50-1024x421.png)

![](/images/9345d688d43f87943e4357e8de1b0ef41ad53ab3-1024x654.png)

明明還有一百多GB，卻仍提示空間不足。安裝畫面為示意圖，非當事畫面，圖來自  
https://zhidao.baidu.com/question/878775030865866652.html

稍微爬了一下文，才發現原來我不孤單！甚至還有看到暴雪客服在那邊說 WOW 現在不支援 Mac 哦（不支援最好是會給人安裝的入口啦 = = ）

*   [http://bbs.wow.blizzard.cn/forum.php?mod=viewthread&tid=510173](http://bbs.wow.blizzard.cn/forum.php?mod=viewthread&tid=510173)

導因
--

會出現這個問題似乎是因為 MacOS 在刪除檔案後所釋出的空間並非真正可立刻使用的空間，只是 UI 上為了讓使用者知道自己總共可以使用的空間數，才會產生這個「我明明空間就夠，為什麼不給我安裝」的狀況。

要看到真正可用的空間可以打開 Terminal 用這個指令：

    df -kh /

![](/images/Screen-Shot-2019-09-09-at-22.17.26-1024x97.png)

以為有一百多 GB 可用，其實可以用的只有 25G，魔獸安裝程式看到的可用空間應該也是這個數字，所以才說空間不足。

解法
--

解法其實蠻奇妙的，要在 Terminal 輸入下面的指令來產生超大檔案，逼系統去把那些「非立即可用的空間」給釋出。

    dd if=/dev/zero of=~/hugefile bs=15m

這個指令會在家目錄下產生一個大檔案，可以開 finder.app 去看檔案產生多大了。搭配上面講的 `df -kh /` 使用，等到出現足夠大的空間，就可以按 `ctrl + c` 把生成程式給砍掉，然後再去把大檔案刪掉就行了。不知道丟到垃圾桶再清空，和直接用指令刪除有沒有差，我是用後者，所以也附上刪除該檔案的指令：

    rm ~/hugefile

大概是這樣。

如果不想用 terminal 產生大檔案的也可以參考這篇文章：

> [Create a Large File from the Command Line or Disk Utility for Testing Purposes](http://osxdaily.com/2013/05/31/create-large-file-mac-os-x/)

不過我是沒試過，反正就提供一下找到的連結XD

結語
--

只是想要完成魔獸世界卻還得像個工程師一樣抓蟲⋯⋯ 真是無奈。

參考資料
----

*   [https://apple.stackexchange.com/questions/254676/](https://apple.stackexchange.com/questions/254676/)
*   [https://www.reddit.com/r/wow/comments/58t8jp/](https://www.reddit.com/r/wow/comments/58t8jp/)