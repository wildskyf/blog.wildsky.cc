---
title: '移除 ubuntu & Windows 開機修復 (error: no such partition. grub rescue)'
date: 2014-08-19T00:00:00+08:00
categories:
  - Linux
  - Windows
tags:
  - ubuntu
  - grub
  - 踩雷人生
---

## 前言

繼之前的 [這篇文章](/posts/2014-01-16-dual-system-win-ubuntu)
裝了 Ubuntu + windows 雙系統後，又會覺得好像空間變太少了，想要把 Ubuntu 移掉。
原本想說移掉感覺很簡單，就把切給 Ubuntu 的分區清掉，然後還給 Windows 不就好了？

做下去之後重開機，你就發現不是如此，電腦直接卡住，只看到一個好像很可怕的訊息：

```
error: no such partition.
grub rescue>
```

READMORE

這就是你為什麼來到這裡看文章的原因XD 沒有嘲笑你的意思，我也是因為遇過
<del>不只一次</del>，學到教訓後才有機會寫下這篇文章的，這邊就帶你來看看要怎麼處理囉。

<a title="grub_fix by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14944169666"><img src="https://farm6.staticflickr.com/5591/14944169666_6f36aa2a07_o.png" alt="grub_fix" width="662" height="378" /></a>

本文的適用環境是 Windows 8, 8.1 & Ubuntu 12.04 LTS，其他版本可能大同小異，但若有差異請自行斟酌處理。

## 正文

首先需要一張安裝 windows 的光碟。

選擇 `修復 windows` 會看到這個畫面

<a title="remove_grub (1) by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14780231299"><img src="https://farm6.staticflickr.com/5572/14780231299_08ffbdf282_o.jpg" alt="remove_grub (1)" width="662" height="378" /></a>

選擇疑難排解（因為我是救回來後才拍照，所以會出現「繼續」）

<a title="remove_grub (2) by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14780315128"><img src="https://farm4.staticflickr.com/3849/14780315128_bf304af7b0_o.jpg" alt="remove_grub (2)" width="662" height="378" /></a>

然後是 `進階選項`

<a title="remove_grub (3) by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14963818071"><img src="https://farm4.staticflickr.com/3906/14963818071_73af6d0419_o.jpg" alt="remove_grub (3)" width="662" height="378" /></a>

選擇 `命令提示字元` 就會看到下面這個畫面

<a title="remove_grub (4) by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14963818311"><img src="https://farm4.staticflickr.com/3918/14963818311_f6c3bae6d4_o.jpg" alt="remove_grub (4)" width="662" height="378" /></a>

輸入下面這些指令，如果你的系統是在 C 槽,就不用更改指令, 但如果是其他地方，第一行就要改成你的系統所在碟！

```
X:\Sources> C:
C:\> cd boot
C:\boot> bootrec /fixmbr
C:\boot> exit
```

重開機以後應該就會直接進入 Windows 了！

## 後記

聽說還有 `bootsect /nt60 SYS /mbr` 這樣的指令，但我沒試過。

## 參考

- [在安裝 GRUB 之後修復 Windows 7 MBR](http://blog.xuite.net/jyoutw/xtech/62292941)
