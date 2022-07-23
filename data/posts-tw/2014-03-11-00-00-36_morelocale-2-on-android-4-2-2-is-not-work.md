---
title: "Android 4.2.2  無法使用 morelocale 2"
date: 2014-03-11T00:00:36
slug: "morelocale-2-on-android-4-2-2-is-not-work"
excerpt: "會寫這篇文章是因為我妹的手機(HTC SV)不是台灣買的，沒有台灣中文&nbsp;，因而需要變更語系&amp;&#8230;"
guid: "2014-03-11-00-00-36_morelocale-2-on-android-4-2-2-is-not-work"
---

會寫這篇文章是因為我妹的手機(HTC SV)不是台灣買的，沒有台灣中文，因而需要變更語系&所在地。

按照過往經驗，我就習慣性地載了 morelocal 2，結果居然不能使用！

上網問問 Google 大神後發現，是因為 Android 4.2.2 的某個權限有所更改，所以不能直接更動。

HTC 的 root 我沒有把握，不想把我妹的新手機弄壞。所以就選擇另一個比較簡單的方法 (adb)，幫她弄好了以後 就決定要寫下一篇網誌幫助更多的人來解決這個問題 !

下面就來介紹一下我的流程。

安裝
--

在 **手機** 安裝 Morelocale2，可以從 google play 直接下載安裝，或是從 [這裡](https://drive.google.com/file/d/0B6YVAgG89X87NEtPMWdHWXlxUEk/edit?usp=sharing) 下載到手機安裝，記得要打開不明的來源 (unknown source)。

接著在 **電腦（Windows）** 安裝開發工具，可以在這裡 [下載](https://drive.google.com/file/d/0B6YVAgG89X87ZXJ6M0ZiTGhhZDg/edit?usp=sharing)。 安裝到最後一個步驟會問你是否執行 Minimal ADB and Fastboot 預設是打勾，所以直接按完成即可，這邊先不要把它關掉。

預備
--

在 **手機** 端，去設定 > 開發者選項 (Developer option) 裡面打開 USB 偵錯 (USB debugging) ，如果沒有的話，就去「關於手機」裡面找到開發版好，點個五下就會出現了，打開後就將它接上電腦。

在 **電腦** 端，在剛剛打開的那個黑色底的視窗輸入下面的命令

```
adb shell
```

應該會在畫面上看到這排字出現

```
shell@android:/ $
```

接著就輸入下面的命令

```
pm grant jp.co.c_lis.ccl.morelocale android.permission.CHANGE_CONFIGURATION
```

完成
--

這樣就大功告成，可以在手機上使用 morelocale 2 了 。

參考資料
----

* [\[教程\] Morelocale2 4.2以上也能用 (免root)](http://apk.tw/forum.php?mod=viewthread&tid=378955&extra=page%3D1%26filter%3Dauthor%26orderby%3Ddateline%26orderby%3Ddateline)
