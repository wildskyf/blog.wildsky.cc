---
title: "雙系統 windows 8 + Ubuntu 12.04 LTS 版本"
date: 2014-01-26T00:00:26
slug: "dual-system-win-ubuntu"
excerpt: "會寫這篇文章主要是為了幫忙我的同學安裝好 win8&nbsp;+ ubuntu 12.04 雙系統，ubunt&#8230;"
guid: "2014-01-26-00-00-26_dual-system-win-ubuntu"
---
會寫這篇文章主要是為了幫忙我的同學安裝好 win8 + ubuntu 12.04 雙系統，ubuntu 13.10 似乎可以完整搭配 win8 安裝雙系統，但 12.04 仍不行，所以我決定寫這篇文章，希望能幫助到想裝 ubuntu 的人！

如果你的系統是 win7 你可以直接安裝，之前安裝 win7 時 grub 可以直接偵測到，所以可以直接完成雙系統，不用特殊的調整，但 win8 似乎需要有一些額外設定，請有心安裝的人繼續往下閱讀。

最基本的就是要**先安裝好 win8**，然後你會**需要有一片 ubuntu 12.04 LTS 版本** 的光碟或 USB（可以從 [這裡](http://www.ubuntu-tw.org/modules/tinyd0/) 取得）發行版是**桌面版本**、版本選 **12.04LTS**，電腦架構不確定的可以選擇 **32位元版本**，然後就按開始下載吧！

我個人是將它燒成光碟而不是使用虛擬光碟機，以免玩壞電腦了卻沒有光碟可以開機。安裝的詳細過程我就略過了，一來其實蠻直覺的，二來很多 blog 都有教，搜尋一下應該都找得到。

這邊直接跳到調整 grub 的步驟。

首先要取得 **boot-repair** 這個軟體，步驟如下:

1.  按下 `ctrl + alt + T` 叫出終端機
2.  貼上這行指令

```shell
sudo add-apt-repository ppa:yannubuntu/boot-repair && sudo apt-get update
```

等他跑完了以後，再貼上這行指令

```shell
sudo apt-get install -y boot-repair && (boot-repair &)
```

然後就可以使用它了。

接著執行 `boot-repair`

可以直接選擇 **建議的修復 (Recommended repair)**

（進階修復想玩玩再請自己摸吧，此不贅述。）

等他跑完以後你就可以在 grub 下叫出 win8 了。

（我自己是一項一項的試 等到找到可以開啟 win8 的選項時，就記下他，等等會用到）

但這個時候的選單列會有一堆有的沒有的選項，其中還有 grub 抓錯的 win7。這時該如何刪去那些無用選項呢？

我們可以使用 **Grub Customizer** 這個軟體，取得方式如下:

1.  按下 `ctrl + alt + T` 叫出終端機
2.  貼上這行指令：

```shell
sudo add-apt-repository ppa:danielrichter2007/grub-customizer && sudo apt-get update
```

等他跑完了以後，再貼上這行指令：

```shell
sudo apt-get install grub-customizer
```

等他跑完就完成了！這時，我們可以執行 Grub Customizer，待他偵測完成後就會看到那些出現在 grub 選單的選項們了。剩下的就不用多說，自行編輯吧。

參考連結
----

* [https://help.ubuntu.com/community/Boot-Repair](https://help.ubuntu.com/community/Boot-Repair)
* [http://www.noobslab.com/2012/11/install-grub-customizer-302-in-ubuntu.html](http://www.noobslab.com/2012/11/install-grub-customizer-302-in-ubuntu.html)
