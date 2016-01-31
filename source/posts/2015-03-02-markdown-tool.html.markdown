---
title: Markdown 的工具們
date: 2015-03-02T16:41:33+00:00
author: wildsky
layout: post
permalink: /markdown-tool/
categories:
  - Android
  - Linux
  - windows
tags:
  - android
  - editor
  - markdown
  - sync
  - windows
---

開學了，又是開始要記筆記的時候了！
原本打算要和系上來個共筆計畫，所以上學期是使用 Evernote</a> 來作筆記，
可是因為他不能同時編輯，讓我覺得越用越不順手，
後來接觸了 Hackpad，雖然覺得他有不少優點，但還是有我討厭的部份，像是用火狐登入時會有奇怪的問題之類的。
因此下定決心要找尋新的工具，找著找著就找到了 _[幾個筆記的比較](http://www.hksilicon.com/kb/articles/417502/HackpadQuipOnenote)_這篇文章，
試用了一下沒用過的 Quip，覺得其實還不錯，但還是不符合我的需求，
最後找了很久才終於找到符合我的要求的工具們——雖然初衷（多人協作）已經有點不一樣了XD
但我還是決定要寫這一篇文章，以幫助需要的人。

我的需求其實很簡單：

1. **支援 Markdown** ：因為如果使用這個格式撰寫筆記，一方面可以省去移動滑鼠到上面那些按鈕的時間，也不影響可讀性，此外，他也支援 html 語法，所以大部分會用到的格式都不太需要擔心。（Onenote, Evernote, Hackpad）
  1. 其實 Evernote 有一個稱作 馬克飛象 的工具，主要的難處是要付費，身為一個窮學生，這筆錢實在是花不下手啊… 而且他是簡體字，不想用。
  2. Hackpad 好像說有支援 Markdown，但我只知道他可以手動匯出成 md 檔，自動同步到 dropbox 時還是存成 html 檔，其實 html 檔還好，只是他的檔案實在太醜了，受不了啊… 至於他說支援的 markdownx… 很不穩定又是另一個故事了。
  3. Onenote 其實很強大，但他是微軟的東西，不想用XD 而且似乎不支援 Markdown（阿他就有一堆按鈕了啊，要 markdown 幹麻…）如果你有興趣可以參考他們的 [聊天記錄](http://www.zhihu.com/question/21611821)，但我不打算用這個方法。
2. **需要離線編輯**：主要是因為我用筆電時太耗電，而且學校的網路又很爛，動不動就連不上，就算連上了也常常是很卡，實在是很難受啊！
  1. 我不知道 Hackpad 的 [iOS APP](https://itunes.apple.com/us/app/hackpad-for-ios/id789857184?ls=1&mt=8) 可不可以離線使用，我手邊也沒有 ios 設備，所以也沒法測試。
3. **可以同步**：我還是喜歡把筆記放到網路上，會有一種心安的感覺，但又懶得自己上傳，所以可以自動同步（或是一鍵同步）是再好不過了！
4. 多人協作：這個我可能要捨棄掉了，不過我下面要做的方法其實也是可以達成協作的目的！
  1. Evernote 真的不是設計來多工用的，他並不像 Google Docs 和 Hackpad 那樣可以讓多人同時編輯，所以上學期就曾發生過我在編輯另一個同學也想編輯卻被擋在門外的情況。
5. **多平台**：我自己是使用 Fedora，未來存夠錢可能會轉到 mac，手機的平台就是 android 了
  1. Evernote 這點就讓我很痛苦了，雖然 Linux 上有其他非官方的客戶端，但不知道為什麼都不能用（原本還可以用 [Everpad](https://github.com/nvbn/everpad)，現在卻掛掉了）
6. **我討厭簡體中文**：就是討厭，只支援簡中不支援正體中文的軟體我就是不想用。（Quip 慢走不送）
7. **有系統的整理**：亂就會讓人心煩，可以整理就是不錯，這一點 Evernote 就不錯（可惜編輯器太糟糕，如果是 mac 使用者可以考慮 Alternote，聽說不錯）

好啦，其實我的需求不是真的很簡單xD 不然我也不會找這麼久了。言歸正傳，究竟我是使用了什麼方法才達成目的呢？很簡單的說，我是使用

> atom(markdown preview) + dropbox sync + draft(android app)

其實沒有很厲害啦哈哈，只是湊在一起其實就讓我非常滿足了！

atom 內建有 markdown preview 的功能（開啟鍵是 shift + ctrl + M），
然後電腦裝個 dropbox 讓它可以自己同步。
Android 手機再下載 [Draft](https://play.google.com/store/apps/details?id=com.mvilla.draft)
就可以在手機上編輯

只要有一個地方變動，其他就可以很方便地同步，稍微注意一下就不會造成衝突～！

稍微附一些截圖<del>來佔版面</del>好了：

![Atom 截圖](http://wildsky.cc/blog-images/2015/03/2015-03-02-161225-的螢幕擷圖-1024x576.png)

使用 atom 編輯並同步預覽時的畫面，還可以在編輯時即時更新！左邊的資料夾是課程名稱，3-2則是指三月二號，我自己是這樣整理的～

![Draft 截圖](https://s3.amazonaws.com/pushbullet-uploads/ujEuDWG4uzI-Yh5vrRU68aDgrESbMaXzz9I0pG6sQ9Dm/Screenshot_2015-03-02-16-16-16.png)

Draft 的好處就是可以用資料夾整理他～

![3-2.md](https://s3.amazonaws.com/pushbullet-uploads/ujEuDWG4uzI-vhk053TUZd1YesUmVqkHYpRpJLm3IOJO/Screenshot_2015-03-02-16-16-24.png)

跟剛剛的 3-2.md 是同個檔案，在儲存時就會開始同步了！

![預覽畫面](https://s3.amazonaws.com/pushbullet-uploads/ujEuDWG4uzI-suAwlRxhzomXnCUwVRUaKta5kkTqt2My/Screenshot_2015-03-02-16-18-43.png)

這個是預覽的畫面，直接可以看到格式的 HightLight

<img class="" src="https://s3.amazonaws.com/pushbullet-uploads/ujEuDWG4uzI-uvRRHr5jRhb5xU3LsHrg9TVoVpufiq2E/Screenshot_2015-03-02-16-22-03.png" alt="編輯時的畫面" width="355" height="631" />

這個是編輯時的畫面，目前只有用過縮排xD 未來可能會用到其他功能～

<img src="http://wildsky.cc/blog-images/2015/03/2015-03-02-162609-的螢幕擷圖-1024x580.png"/>

在dropbox 上還可以直接預覽呢！

大致上就是這樣，如果我未來有 ios 設備，甚至是 mac 的話再來補充，不過這個是我目前找到的最好的組合～

### 同步的方法

其實很簡單XD

- 先準備一個 <a href="https://www.dropbox.com/home">dropbox</a> 帳號
- 先在電腦上裝好 <a href="https://www.dropbox.com/install">dropbox</a> 和 <a href="https://atom.io/">atom</a>，然後在手機下載 <a href="https://play.google.com/store/apps/details?id=com.mvilla.draft"><strong>draft</strong></a>
- 在手機中開啟 <a href="https://play.google.com/store/apps/details?id=com.mvilla.draft"><strong>draft</strong></a>，點選右上角的符號，然後選 setting
- 往下滑會看到一個和 dropbox 連結的選項，按下去以後他就會自己在 dropbox 的根目錄產生一個名為 draft 的資料夾
- 再回到電腦，把該連結的帳戶連一連，等同步完成後就會看到 draft 資料夾了，裡面可以自由新增資料夾或是文檔（draft 支援 txt 檔或 md 檔）
- 這個時候就可以開心的編輯了！

## 小結

其實上面有提到的工具都蠻不錯的，但各有利弊，我自己找到的這個方法最符合我的需求，如果有什麼其他的工具歡迎留言讓我知道～最喜歡一整套的軟體了～
