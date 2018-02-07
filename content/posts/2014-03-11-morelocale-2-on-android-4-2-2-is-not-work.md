---
title: 'Android 4.2.2  無法使用 morelocale 2'
date: 2014-03-11T00:00:00+08:00
categories:
  - Android
---

會寫這篇文章是因為我妹的手機(HTC SV)不是台灣買的

沒有台灣中文  因而需要變更語系&所在地

理所當然  我就習慣性地載了 morelocal 2

結果不能使用 !!!

上網問問Google大神後

發現是因為 Android 4.2.2 的某個權限有所更改

所以不能直接更動

HTC 的 root 我沒有把握 所以就選擇另一個比較簡單的方法 (adb)

幫她弄好了以後 就決定要寫下一篇網誌幫助更多的人來解決這個問題 !

廢話說完了 就直接進入教學吧!

-----

## 安裝

**手機** 裝好 Morelocale2

可以從 google play 直接下載安裝

或是從 <https://drive.google.com/file/d/0B6YVAgG89X87NEtPMWdHWXlxUEk/edit?usp=sharing> 下載到手機安裝
[記得打開不明的來源 (unknown source) 哦 ! ]

**電腦**

下載 <https://drive.google.com/file/d/0B6YVAgG89X87ZXJ6M0ZiTGhhZDg/edit?usp=sharing>開發工具 (windows) 並安裝它 (最後一個步驟會問你是否執行 Minimal ADB and Fastboot 預設是打勾 所以直接按完成即可 然後記得先不要把它關掉!)

## 預備

**手機** 打開USB偵錯 (USB debugging)  &  接上電腦

一般都會在 開發者選項 (Developer option) 裡面

**電腦**

在剛剛打開的那個黑色底的視窗輸入下面的命令

`adb shell`

理論上等他跑完應該最後面會出現

`shell@android:/ $`

接著就輸入下面的命令

`pm grant jp.co.c_lis.ccl.morelocale android.permission.CHANGE_CONFIGURATION`

## 完成

你可以在手機上使用 morelocale 2 了 !

//

以上內容參考自 <http://apk.tw/forum.php?mod=viewthread&tid=378955&extra=page%3D1%26filter%3Dauthor%26orderby%3Ddateline%26orderby%3Ddateline>
