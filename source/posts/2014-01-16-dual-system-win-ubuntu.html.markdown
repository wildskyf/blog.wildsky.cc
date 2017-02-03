---
title: 雙系統 window 8 + Ubuntu 12.04 LTS版本
date: 2014-01-16T06:42:00+08:00
categories:
  - Linux
tags:
  - Ubuntu
---

![Win8+ubuntu](https://farm3.staticflickr.com/2908/14020836235_daa6aab161.jpg)

好啦我知道我畫得很醜XD

會寫這篇文章主要是為了幫忙我的同學安裝好 win8 + ubuntu 12.04 雙系統
ubuntu 13.10 似乎可以完整搭配 win8 安裝雙系統
但 12.04 仍不行 所以我決定寫這篇文章 希望能幫助到想裝 ubuntu 的人 !

如果你的系統是win7 你可以直接安裝
之前安裝win7時 grub有抓到win7所以可以直接完成雙系統
但win8似乎需要調整一下 請有心安裝的人繼續往下閱讀

<hr />

最基本的就是要**先安裝好 win8**

詳細過程就略過了

(畢竟大部分想裝 ubuntu 的人的電腦都是已經有windows系統的

然後你**需要有一片ubuntu 12.04 LTS版本** 的光碟

你可以從 [這裡](http://www.ubuntu-tw.org/modules/tinyd0/) 取得

發行版是 **桌面版本**

版本選 **12.04LTS**

電腦架構不確定的可以選擇 **32位元版本**

然後就按開始下載吧!

我個人是將它燒成光碟而不是使用虛擬光碟機

(以免玩壞電腦了卻沒有光碟可以開機

安裝的詳細過程我就略過了 (很多blog都有教 自行google吧

直接跳到調整grub的步驟!

首先你要 *取得 **boot-repair** 這個軟體*

方式如下:

按下 `ctrl + alt + T` 叫出終端機

貼上這行指令
`sudo add-apt-repository ppa:yannubuntu/boot-repair && sudo apt-get update`
等他跑完了以後

再貼上這行指令
`sudo apt-get install -y boot-repair && (boot-repair &)`
然後就可以使用它了!

接著執行 boot-repair

你可以直接選擇 **建議的修復 (Recommended repair)**

(進階修復你有用再自己摸吧:P 此不贅述

等他跑完以後你就可以在grub下叫出win8了

((我自己是一項一項的試 等到找到可以開啟 win8 的選項時 記下他 等等會用到

但這個時候的選單列會有一堆有的沒有的選項

其中還有grub抓錯的win7

這時該如何刪去那些無用選項呢?

你可以使用 **Grub Customizer** 這個軟體

取得方式如下:

按下 `ctrl + alt + T` 叫出終端機

貼上這行指令
`sudo add-apt-repository ppa:danielrichter2007/grub-customizer && sudo apt-get update`
等他跑完了以後

再貼上這行指令
`sudo apt-get install grub-customizer`
等他跑完就完成了!


執行 Grub Customizer

等他偵測完成後你就會看到那些出現在你 grub 選單的選項們了

剩下的就不用多說了吧!

自行編輯吧!!


參考下面兩個網站的教學

- <https://help.ubuntu.com/community/Boot-Repair>
- <http://www.noobslab.com/2012/11/install-grub-customizer-302-in-ubuntu.html>
