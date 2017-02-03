---
title: Ubunu 的安裝, 調校, 學習的方式彙整
categories:
  - Linux
tags:
  - Ubuntu
---

> **聲明**
> 這篇文章只是用來記錄一下我自己是怎麼安裝 & 協助我朋友安裝 Ubuntu
> 所以你必須自行承擔電腦可能會壞掉的風險
> 若電腦不幸出問題，我不會為你負任何責任
> 請自行評估風險。

Windows Mac Linux 這三個是目前最多人使用的 電腦系統 ~

但裡面只有 Linux 是免費的, 自由的系統 !

所以今天就來介紹一下怎麼開始玩這個作業系統吧

P.s: 這邊有一些觀念上需要更正的, 未來有時間會再寫一篇文

Linux 有很多發行版 : Fedora, Red Hat, Debian, Ubuntu &#8230;

有的發行版還會往下很多分支, 像 Ubuntu 就還有 kubuntu, Xubuntu, Ubuntu Kylin

所以 Linux 真的是個很龐大的家族啊!! (可以參考 <a href="http://zh.wikipedia.org/wiki/Linux%E5%8F%91%E8%A1%8C%E7%89%88%E6%AF%94%E8%BE%83">WIKIPEDIA 的這篇文</a>

如果不知道要怎麼挑選可以參考 <a href="http://www.techbang.com/posts/4801-only-ubuntu-linux-is-not-really-fun-i">T客邦的這篇介紹文</a>

基本上選自己順手的 or 朋友有在用的就好

這邊要說的就是很多人初學 Linux 第一次接觸的系統 &#8212; <a href="http://www.ubuntu-tw.org">Ubuntu </a>!

<a title="Ubuntu" href="https://www.flickr.com/photos/71353772@N04/14027125096/"><img src="https://farm8.staticflickr.com/7090/14027125096_4369026df6.jpg" alt="Ubuntu" width="475" height="278" /></a>

<del>雖然畫得很醜, 但我怕被告所以還是乖乖的自己畫 XD</del>

<del>又因為很懶,所以直接拿舊圖小改ㄏㄏ</del>

你可以到 <a href="http://www.ubuntu-tw.org/modules/tinyd0/">這裡 </a>下載最新版本的 Ubuntu

Ubuntu 每年的 4月 和 10月 會釋出新的版本

而版本號則會<span class="st">根據正式發行版的年月命名

像 12.10 就是 2012 年 10月 發行的版本

而有些版本後面會加上 LTS

就是所謂的長期支援( Long Term Support ) 的意思!

我個人是推薦最新的LTS版本  //現在的話就是14.04 LTS

因為初學 Ubuntu 時, 選擇較穩定的環境會是比較好的選擇未來等到功力足夠了再嘗試較新, 較不穩定的版本遇到問題比較不容易慌張總之, 現階段就選 Ubuntu14.04 吧 !

// 下載會很久請耐心等候&#8230;

--------

接著就是安裝

其實安裝過程幾乎都差不多

比較容易出錯的就是安裝前的準備工作

我個人是會把載下來的.iso 檔燒成光碟以備不時之需

// 這種會動到系統層面的東西還是小心為妙 !

OK 那就開始準備吧~

首先要先切一塊磁碟分區以便 ubuntu 有空間可以安裝

windows 意外很好心的在 window7 以後的版本都有內建 **磁碟分割工具**

打開 **磁碟分割工具**

//找不到的搜尋一下就會出現了, Win 8.1 在桌面環境下將滑鼠移動到畫面左下角按右鍵就有了

(如下圖的那個位置

<a title="Flickr 上 kevin_boy3110 的 disk_par" href="https://www.flickr.com/photos/71353772@N04/14070853693/"><img src="https://farm8.staticflickr.com/7354/14070853693_9e0bb38bd5.jpg" alt="disk_par" width="256" height="443" /></a>

開起來以後會長這樣

<a title="Flickr 上 kevin_boy3110 的 disk_par_2" href="https://www.flickr.com/photos/71353772@N04/14070882913/"><img src="https://farm8.staticflickr.com/7314/14070882913_6f60867234.jpg" alt="disk_par_2" width="730" height="410" /></a>

我已經裝好了所以看起來會很多分區XD

大部分的人都會習慣把系統裝到C槽

我也不例外

所以請在C槽的那個地方按右鍵 -> 選"**壓縮磁碟區**"

我個人建議你切 10~20G 給 ubuntu 會比較剛好

如果你知道你在幹嘛就照你自己的意思吧!

切完以後就會多個"**未配置**&#8220;的磁碟區

一切妥當了以後, 就按下關閉

然後準備掛載你的 Ubuntu 光碟/映像檔 吧!

P.s : 如果是在 windows 環境下直接掛載

那會變成 Wubi (Windows-based Ubuntu Installer)&#8230;

我非常不建議使用這種類似虛擬機

一來會受 Windows 系統的效能影響

二來虛擬機一定沒有完整系統那樣順暢

所以情況容許的話, 重新開機直接掛載到 Ubuntu 會是比較好的選擇

P.ss:根據官方的<a href="http://wiki.ubuntu-tw.org/index.php?title=Wubi">這份文件</a>, 12.04 以後的版本似乎不再支援 Wubi 了~ 個人認為真是不錯的決定!(無誤

--------

OK 那&#8230;掛載光碟後就重開機吧!!

首先你應該會先看到這個畫面

<a title="Flickr 上 kevin_boy3110 的 DVD_Menu" href="https://www.flickr.com/photos/71353772@N04/14072662693/"><img src="https://farm8.staticflickr.com/7326/14072662693_e3e3308b5c.jpg" alt="DVD_Menu" width="500" height="375" /></a>

p.s : 只截部分圖是因為他字太小了&#8230;想讓你看到~ 怎麼樣? 我很貼心吧哈哈哈!

如果你只是要試試看的話可以直接選第一個選項

**&#8220;Try Ubuntu without installing"**

不過, 會來看我文章又看到現在這個部份的人

應該都是想要好好的安裝 Ubuntu 吧:D

所以, 就果斷選擇第二個

**&#8220;Install Ubuntu"**吧!!

然後等一會兒

就會出現這個畫面

<a title="Flickr 上 kevin_boy3110 的 Ubuntu!" href="https://www.flickr.com/photos/71353772@N04/14049439822/"><img src="https://farm8.staticflickr.com/7097/14049439822_b7323fdd54.jpg" alt="Ubuntu!" width="500" height="375" /></a>

//請忽略反射出來的我&#8230;

很快地就會到了這裡

<a title="Flickr 上 kevin_boy3110 的 Start_Install" href="https://www.flickr.com/photos/71353772@N04/14049427031/"><img src="https://farm8.staticflickr.com/7438/14049427031_3c1d78bf42.jpg" alt="Start_Install" width="500" height="375" /></a>

直接選"中文(繁體)" //應該是正體中文啊!!!! (怒

<a title="Flickr 上 kevin_boy3110 的 By Chinese_traditional" href="https://www.flickr.com/photos/71353772@N04/14049425752/"><img src="https://farm8.staticflickr.com/7346/14049425752_522cc40413.jpg" alt="By Chinese_traditional" width="500" height="375" /></a>

然後下一步

會需要連上網路

<a title="Flickr 上 kevin_boy3110 的 Get the Wifi" href="https://www.flickr.com/photos/71353772@N04/14049412371/"><img src="https://farm3.staticflickr.com/2897/14049412371_9c1e1dded8.jpg" alt="Get the Wifi" width="500" height="375" /></a>

基本上連不連是沒差

但為了安裝的完整度還是建議連一下

//反正該載的早晚都要載該更新的早晚都要更新&#8230;

P.s:這個 WIFI 的名字有點過分哦&#8230;XD

接著我們就會到了這個步驟

<a title="Flickr 上 kevin_boy3110 的 Prepare to install" href="https://www.flickr.com/photos/71353772@N04/14072474913/"><img src="https://farm8.staticflickr.com/7450/14072474913_40bddda05a.jpg" alt="Prepare to install" width="500" height="375" /></a>

我不曉得是我自己的問題還是14.04 LTS的問題

這個步驟我 load 超久

可是網路明明沒在傳輸

光碟也是時轉時不轉

或許有甚麼秘密也不一定A_A

anyway, 乖乖地等吧哈哈哈

就這樣等到你準備要放棄 Ubuntu 的時候

就會跳出這個畫面

<a title="Flickr 上 kevin_boy3110 的 install_disk_par" href="https://www.flickr.com/photos/71353772@N04/14072442103/"><img src="https://farm6.staticflickr.com/5153/14072442103_2504810070.jpg" alt="install_disk_par" width="375" height="500" /></a>

我自己因為已經安裝好了所以上面幾個選項可能會跟我的不一樣

但不管怎麼樣

就選**&#8220;其他"**

因為剛剛已經把磁碟區分割好了所以不用擔心太多問題

按下其他之後就會顯示這個畫面

<a title="Flickr 上 kevin_boy3110 的 Disk_manage" href="https://www.flickr.com/photos/71353772@N04/14049149832/"><img src="https://farm3.staticflickr.com/2905/14049149832_3240219715.jpg" alt="Disk_manage" width="500" height="375" /></a>

應該會有一塊**&#8220;未配置"**的空間

//就是我們剛剛切好的那個!

點擊那個磁區後就按下下方的"+"

空間選擇7~8G

下面的某個選項選**&#8220;置換空間"** //sorry&#8230;這邊沒有截到圖&#8230;未來有時間再補上!

然後等個幾秒, 應該就會跳回剛剛的畫面

然後再選擇剩下的未配置空間

空間就把剩下的全選吧! //反正都切出來了XD

跟上面一樣的我忘記的選項選**&#8220;ext4日誌"**

然後另一個選項就選"/"  //根目錄的意思

然後就是很正常的安裝步驟, 就懶得截圖了哈哈哈

印象中

會要選擇時區

接著要你設個名字 //wildsky

然後還有主機名字// wildsky_ubuntu

好像還有帳號密碼甚麼的, 就看著辦吧XDD

這個部份應該還蠻簡單的

全部弄完以後

會自動幫你退出光碟

然後重開機一次

就. 完成囉!!!!!

===============================================

明天再把一些比較基本的東西放上來~~

Good Luck & Have Fun !
