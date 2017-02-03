---
title: '移除ubuntu & Windows 開機修復'
date: 2014-08-19T15:17:54+08:00
categories:
  - Linux
---

砍 ubuntu 砍太快了~ 完蛋了~

出現這個神奇的訊息 &#8220;error: no such partition.  grub rescue> "

要怎麼救呢？就看一下這篇文章吧！

<a title="grub_fix by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14944169666"><img src="https://farm6.staticflickr.com/5591/14944169666_6f36aa2a07_o.png" alt="grub_fix" width="662" height="378" /></a>

有時候硬碟空間不夠用時，就會看著切給 ubuntu 的那幾十 G 發楞，如果平常不常開，ubuntu 也沒有甚麼重要的資料的話，乾脆就直接把他砍了吧～反正需要的時候再裝回來就好(!)（是有沒有這麼悠哉XD

我自己是裝裝卸卸好幾次了，ubuntu 12.04 LTS 、ubuntu 13.04 、 ubuntu 14.04 LTS 、 elementary OS (based on 12.04) …，每次電腦只有 windows 時就會想裝 ubuntu ，但真的裝好以後，也大概只有前幾天會去開XD 平常也都只會用 Windows （所以每次裝完ubnutu，第一件事就是利用 Grub Customizer 把預設開機設為 windows，詳細安裝方式可以看<a title="雙系統 window 8 + Ubuntu 12.04 LTS版本" href="http://wildsky.lionfree.net/ubuntu/%e9%9b%99%e7%b3%bb%e7%b5%b1-window-8-ubuntu-12-04-lts%e7%89%88%e6%9c%ac/" target="_blank">這篇文章</a>～）不過今天的重點不是預設開機，而是想要和 ubuntu 說 Bye Bye ~

因為太久沒有做這種累人的事，（系統層級的東西可不能天天折騰啊…），一個順手就直接把 ubuntu 的分割區砍了，等到想起會不會有甚麼問題時，筆電畫面已經停在這個畫面…

<div style="color: #bbb; font-size: 10pt; background-color: black; width: 150px; padding: 2px 2px 2px 2px;">
error: no such partition.
 grub rescue>
</div>

「完蛋啦～」立刻拿起手機找找有沒有甚麼方法，最後逛到<a href="http://blog.xuite.net/jyoutw/xtech">暉獲無度的步烙閣</a>，照著他的方法做一次成功！這邊就來記錄一下，以便下次需要的時候找不到ˊwˋ

//P.s : 這篇文的適用環境是 Windows 8, 8.1，Mac 或是其他版本的系統我沒有試過，所以出問題不要找我 XD

<strong>< START ! ></strong>

首先需要一張安裝 windows 的光碟，一碟在手希望無窮XD，所以千萬要有一張正版光碟在手上啊！

選擇"修復windows"會看到下面這個畫面

<a title="remove_grub (1) by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14780231299"><img src="https://farm6.staticflickr.com/5572/14780231299_08ffbdf282_o.jpg" alt="remove_grub (1)" width="662" height="378" /></a>

選擇疑難排解（應該不會出現"繼續"這個選項XD）

<a title="remove_grub (2) by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14780315128"><img src="https://farm4.staticflickr.com/3849/14780315128_bf304af7b0_o.jpg" alt="remove_grub (2)" width="662" height="378" /></a>

然後是"進階選項"

<a title="remove_grub (3) by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14963818071"><img src="https://farm4.staticflickr.com/3906/14963818071_73af6d0419_o.jpg" alt="remove_grub (3)" width="662" height="378" /></a>

選擇 &#8220;命令提示字元"就會看到下面這個畫面

<a title="remove_grub (4) by kevin_boy3110, on Flickr" href="https://www.flickr.com/photos/71353772@N04/14963818311"><img src="https://farm4.staticflickr.com/3918/14963818311_f6c3bae6d4_o.jpg" alt="remove_grub (4)" width="662" height="378" /></a>

輸入下面這些指令，（如果你的系統是在C槽,就不用更改指令, 但如果是其他地方，像是E:之類的地方，第一行就要改成你的系統所在碟！）

<div style="color: #bbb; font-size: 10pt; background-color: black; width: 150px; padding: 2px 2px 2px 2px;">
X:\Sources>C:
 C:\>cd boot
 C:\boot>bootrec /fixmbr
 C:\boot>exit
</div>

重開機以後應該就會直接進入 Windows 了！

// P.s : 聽說還有 <span style="font-size: 12pt;"><span style="color: #000000;">bootsect /nt60 SYS /mbr</span></span> 這樣的指令，但我沒試過

// P.ss : 方法來自 <a title="在安裝 GRUB 之後修復 Windows 7 MBR" href="http://blog.xuite.net/jyoutw/xtech/62292941" target="_blank"><span class="titlename">在安裝 GRUB 之後修復 Windows 7 MBR</span> </a>

// P.s3 : 其他會失敗的方法我就不寫了～畢竟寫了會失敗幹嘛寫 XD
