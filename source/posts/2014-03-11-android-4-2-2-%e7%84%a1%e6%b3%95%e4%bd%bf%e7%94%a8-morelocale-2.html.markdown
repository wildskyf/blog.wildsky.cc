---
id: 7
title: 'Android 4.2.2  無法使用 morelocale 2'
date: 2014-03-11T09:48:00+00:00
author: wildsky
layout: post
guid: http://wildsky.lionfree.net/?p=7
permalink: /android-4-2-2-%e7%84%a1%e6%b3%95%e4%bd%bf%e7%94%a8-morelocale-2/
blogger_blog:
  - wildskycode.blogspot.com
blogger_permalink:
  - /2014/03/android-422-morelocale-2.html
blogger_author:
  - Wildsky Fann
wpb_post_views_count:
  - 907
dsq_thread_id:
  - 3464627759
categories:
  - Android
---
<div class="pf-content">
  <p>
    會寫這篇文章是因為我妹的手機(HTC SV)不是台灣買的
  </p>
  
  <p>
    沒有正體中文  因而需要變更語系&所在地
  </p>
  
  <p>
    理所當然  我就習慣性的載了 morelocal 2
  </p>
  
  <p>
    結果不能使用 !!!
  </p>
  
  <p>
    <!--more MORE...-->
  </p>
  
  <p>
    我不是李組長 但依然眉頭一皺發現事情不單純
  </p>
  
  <p>
    上網問問Google大神後
  </p>
  
  <p>
    發現因為4.2.2的某個權限有所更改
  </p>
  
  <p>
    所以不能直接更動
  </p>
  
  <p>
    HTC的root我沒有把握 所以就選擇另一個比較簡單的方法 (adb)
  </p>
  
  <p>
    幫她弄好了以後 就決定要寫下一篇網誌幫助更多的人來解決這個問題 !
  </p>
  
  <p>
    廢話說完了 就直接進入教學吧!
  </p>
  
  <p>
    &#8212;&#8212;&#8211;
  </p>
  
  <h2>
    1.<strong>安裝</strong>
  </h2>
  
  <p>
    <b>手機</b> 裝好 Morelocale2
  </p>
  
  <p>
    可以從 google play 直接下載安裝
  </p>
  
  <p>
    或是從 <a href="https://drive.google.com/file/d/0B6YVAgG89X87NEtPMWdHWXlxUEk/edit?usp=sharing" target="_blank">這裡</a> 下載到手機安裝  [記得打開不明的來源 (unknown source) 哦 ! ]
  </p>
  
  <p>
    <b>電腦</b>
  </p>
  
  <p>
    下載 <a href="https://drive.google.com/file/d/0B6YVAgG89X87ZXJ6M0ZiTGhhZDg/edit?usp=sharing" target="_blank">這個 </a>開發工具 (windows) 並安裝它 (最後一個步驟會問你是否執行 Minimal ADB and Fastboot 預設是打勾 所以直接按完成即可 然後記得 <span style="color: #444444;"><span style="background-color: #f4cccc;">先不要把它關掉</span></span> !)
  </p>
  
  <h2>
    2. 預備
  </h2>
  
  <p>
    <b>手機</b> 打開USB偵錯 (USB debugging)  &  接上電腦
  </p>
  
  <p>
    一般都會在 開發者選項 (Developer option) 裡面
  </p>
  
  <p>
    <b>電腦</b>
  </p>
  
  <p>
    在剛剛打開的那個黑色底的視窗輸入下面的命令
  </p>
  
  <blockquote class="tr_bq">
    <p>
      <span style="color: #444444;"><span style="background-color: #eeeeee;">adb shell</span></span>
    </p>
  </blockquote>
  
  <p>
    理論上等他跑完應該最後面會出現 <span style="color: red;">shell@android:/ $</span>
  </p>
  
  <p>
    接著就輸入下面的命令
  </p>
  
  <blockquote class="tr_bq">
    <p>
      <span style="color: #444444; font-size: small;"><span style="background-color: #eeeeee;">pm grant jp.co.c_lis.ccl.morelocale android.permission.CHANGE_CONFIGURATION </span></span>
    </p>
  </blockquote>
  
  <h2>
    3.<b>完成</b>
  </h2>
  
  <p>
    你可以在手機上使用<b> </b>morelocale 2 了 !
  </p>
  
  <p>
    //
  </p>
  
  <p>
    以上教學參考<a href="http://apk.tw/forum.php?mod=viewthread&tid=378955&extra=page%3D1%26filter%3Dauthor%26orderby%3Ddateline%26orderby%3Ddateline" target="_blank">這篇</a>
  </p>
</div>