---
title: 在 fedora 上使用 Quartus II
date: 2015-10-18T15:01:47+08:00
author: wildsky
layout: post
permalink: /quartus-ii-on-fedora/
categories:
  - Fedora
tags:
  - fedora
  - Linux
  - quartus
---

## 前言

因為這學期有修 VLSI，所以需要用到 Quartus II，研究了好幾天，今天終於 ok 了。歲寫這篇文章來做個記錄。

<hr />

## 正文

首先先去 altera 網站下載 web edition，因為學校要用 9.0 版的，所以我就只好忍住我的版本號強迫症… 他們網站好像不太穩定，所以如果有時連得上有時連不上那就明天再做吧！不然只是浪費時間而已。下載的 tar 檔大概 2.3GB 左右。

下載網址：<https://dl.altera.com/?edition=web&platform=linux&verion=9.0>

在下載的過程中可以先安裝一些依賴套件：

`sudo dnf install glibc libXext libX11 libXau libXdmcp freetype fontconfig expat libSM.so.6 libXrender.so.1 libfontconfig.so.1 libXext.so.6 libfreetype.so.6`

上面的 tar 檔應該是叫做 91sp2_quartus_free_linux.tar，看到 tar 檔的第一個反應就是把他解壓縮，我自己是把 tar 在桌面上，所以也直接解壓縮在桌面上就好，出來的資料夾是叫做 quartus_free。

然後就要開始安裝了。

`cd ~/Desktop/quartus_free/ && sudo sh ./install`

安裝過程中應該要按兩次 enter，等他跑完後，安裝至此告一段落。

順帶一提，quartus 預設是安裝到 `/opt/altera9.1sp2/`，所以要執行的話，必須要下這個指令：
`/opt/altera9.1sp2/quartus/bin/quartus`

## 參考文章

- [Installing Quartus II v.13.1 64 bit on RHEL/Centos 6 64 bit](http://www.digitalsolutionslab.com/installing-quartus-ii-v-13-1-64-bit-on-rhelcentos-6-64-bit/)
- [[SOLVED] Installing Quartus II Web Edition v9.1](http://www.linuxquestions.org/questions/slackware-14/%5Bsolved%5D-installing-quartus-ii-web-edition-v9-1-a-4175436463/)

