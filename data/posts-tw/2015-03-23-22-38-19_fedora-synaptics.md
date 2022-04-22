---
title: "Synaptics 觸控板在 Fedora 沒反應"
date: 2015-03-23T22:38:19
slug: "fedora-synaptics"
excerpt: "<p>tl;dr Synaptics 觸控板不能動了怎麼辦？下面這串指令敲下去其實就解決了一切問題： 老實說這篇文章&#8230;</p>
"
feature_image: null
guid: "http://blog.wildsky.cc/?p=284"
---
tl;dr
-----

Synaptics 觸控板不能動了怎麼辦？下面這串指令敲下去其實就解決了一切問題：

    sudo yum install synaptics -y && sudo reboot

老實說這篇文章沒什麼好寫的XD 但既然都解決個我找很久找不到解法的問題了，總覺得還是應該寫一下，所以就來認真記錄下我自己發生問題的始末吧～

系統相關資訊
------

*   系統：Fedora 21
*   電腦型號：ASUS A45VM
*   觸控板品牌：Synaptics
*   其他：略 （因為不重要

發現問題
----

其實我平常的時候，因為覺得打字時手碰到觸控版導致游標會跑來跑去， 所以觸控版一直都是關閉的狀態，後來在fedora 設定的「滑鼠和觸控版」的選項中， 發現了「打字時停用」的選項，所以就開開心心的把觸控版打開，結果…

![打字時停用觸控板](http://blog.wildsky.cc/wp-content/uploads/2015/03/2015-03-23-232726-%E7%9A%84%E8%9E%A2%E5%B9%95%E6%93%B7%E5%9C%96.png)

咦？？？？？？？不管我按 fn + f9 （切換觸控版開關的組合鍵）多少次怎麼只給我出現這個圖示（下圖），那表情就好像在嘲笑我啊啊啊！！

![Synaptics 觸控版關閉中](http://blog.wildsky.cc/wp-content/uploads/2015/03/2015-03-23-233046-%E7%9A%84%E8%9E%A2%E5%B9%95%E6%93%B7%E5%9C%96.png)

不行！是可忍孰不可忍，立刻開 telegram 問拉我下坑的 WM 大大，結果得到的回應是…

> 那請期待 Fedora 22

結果我就只好乖乖接受了這個事實，就這樣落寞地過了幾天， 他又回來了，觸控版又回來找我了～～～ 可是不到一個禮拜他又掛掉了，這時候我就 google 找了一大堆的資訊，最後還是無功而返。

### 問題解決

嗯？你問我最後有找到嗎？當然有啊！不然怎麼會有這篇廢話連篇的文章產生呢？ 就在我努力 google 之後的一個月左右，（算了一下大約是今天下午），我心血來潮想找找我的觸控板的型號， 去 ASUS 官網找，嗯，產品規格沒寫，直接找他的驅動軟體，發現了一個關鍵字「Synaptics」， 我又一個心有靈犀心電感應，在 google 搜尋列上打上了 `sudo yum install synaptics` 這段文字， 噢！！！！發現了一篇文章（參考連結），看來可行！ 迅速地 Alt + Ctrl + T 把我的 Terminal 打開，輸入 `sudo yum install synaptics` 找到了！！立刻確認安裝後重新啟動系統，歐耶！大功告成！

### 小結

一天又平安的度過了，感謝 Google 和 Ask Fedora Project 的努力。

不是啦，拿現在的我和上一個月的我作比較，會發現自己其實有讀過/摸過很多東西， 所以最後才會在關鍵時刻（？）輸入最關鍵的關鍵字，在一個月前我可能不會那麼反射性的在 google 搜尋 `sudo yum install synaptics` 這樣的字串， 然而現在的我因為接觸 fedora 一段時間了，一些基本的東西也大致知道了，所以才能大事化小，小事化無。（這句用在這裡好像怪怪的） Anyway，真心覺得 Linux 用越久，就越知道自己多不會用 Linux， 接下來的日子裡，除了跟瀏覽器以及各式各樣的學校作業搏鬥，要更努力把 TLCL 讀完，增進內功～～～！

### 參考連結

*   [ask.fedoraproject.org](https://ask.fedoraproject.org/en/question/25741/i-cannot-use-my-touchpad-in-fedora18/)

*   [Telegram](https://telegram.org/)
*   [fedora](http://fedora.linux.org.tw/)
*   [關鍵時刻](https://tw.movies.yahoo.com/movieinfo_trailer.html/id=302)
*   [TLCL](http://linuxcommand.org/tlcl.php)

你可能會想看看我寫的 [Fedora 調校文](http://blog.wildsky.cc/posts/tune-my-fedora/)。