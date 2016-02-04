---
id: 661
title: P 與 NP 的情感糾葛
date: 2015-06-22T19:38:46+08:00
author: wildsky
layout: post
guid: https://wildsky.cc/?p=661
permalink: /p-and-np-problem/
dsq_thread_id:
  - 3867061750
categories:
  - algorithm
tags:
  - algorithm
  - NP complete
  - NP Hard
  - NPC
  - NPH
  - P 與 NP 問題
  - P/NP Problem
  - 差異
  - 演算法
---
<div class="pf-content">
  <p>
    這篇是關於演算法中 P 與 NP 問題的一點小整理。<br /> 因為網路上沒有比較簡明的整理文件，所以才寫了這一篇。
  </p>

  <p>
    面對一個問題，不管是什麼問題，我們都會想個方法來去解決它。有些問題有解，有些問題無解，有些很好解，有些卻很難解。今天要介紹的主題，是要對世界上所有的問題來做一個分類，什麼叫難的問題，什麼叫簡單的問題。
  </p>

  <p>
    <!--more-->
  </p>

  <h2>
    簡易介紹
  </h2>

  <p>
    這世上的問題可以分類成下面四種：
  </p>

  <ul>
    <li>
      Unsolvable Problem：無解
    </li>
    <li>
      Intractable Problem：要指數時間才能解 ( 2^n 之類的 )
    </li>
    <li>
      NP-Problem：「指數時間內能計算答案」且「多項式時間內能驗證答案」的問題。
    </li>
    <li>
      P-Problem容易解的，多項式時間內即可得解
    </li>
  </ul>

  <p>
    P 問題可以用指數時間演算法計算答案，當然也可以用多項式時間驗證答案，所以 P 問題都屬於 NP 問題。
  </p>

  <p>
    <img class="alignnone size-full wp-image-662" src="http://wildsky.cc/blog-images/2015/06/ntnucsie106.hackpad.com_ALvROjc4gl2_p.300160_1434875148642_2015-06-21-16-25-33-的螢幕擷圖.png" alt="p/np 家族關係" width="841" height="282" srcset="http://wildsky.cc/blog-images/2015/06/ntnucsie106.hackpad.com_ALvROjc4gl2_p.300160_1434875148642_2015-06-21-16-25-33-的螢幕擷圖-300x101.png 300w, http://wildsky.cc/blog-images/2015/06/ntnucsie106.hackpad.com_ALvROjc4gl2_p.300160_1434875148642_2015-06-21-16-25-33-的螢幕擷圖.png 841w" sizes="(max-width: 841px) 100vw, 841px" />
  </p>

  <h2>
    P、NP、NPC 與 NPH
  </h2>

  <p>
    由上圖可知，P 與 NP 之間有四種可能：
  </p>

  <ul>
    <li>
      P：Polynomial Time 內能解的問題。
    </li>
    <li>
      NP：未找到 Polynomial Time 內能得的解，也不確定有沒有； 但如果提供一個解，可以在 Polynomial Time 內被驗證的問題。
    </li>
    <li>
      NP Complete：還沒有找到 Polynomial Time 的解，但是能在 Polynomial Time 被驗證的問題。但 NPC 的問題是 NP 中較難的問題，所以如果能證明 NPC 的問題有 P 的解，那 NP 的問題就都可以找到 P 的解。
    </li>
    <li>
      NP Hard：未找到 Polynomial Time 的解，但不確定是否能在 Polynomial Time 被驗證的問題。NP Hard 的問題又比 NPC 難。
    </li>
  </ul>

  <p>
    一般來說 P 的問題算是比較簡單，NP Complete 跟 NP Hard 算是很難的問題。而 NP 的問題還是有可能找到快速算法。
  </p>

  <h2>
    P ?= NP
  </h2>

  <p>
    我覺得這個是 <strong><a href="http://boktakhk4.pixnet.net/blog/post/26093482">白馬非馬</a> </strong>的問題… P 就屬於 NP 嘛… 幹嘛還去想他相不相等呢？但會這麼想就代表我不適合讀 Computer Science，還好我已經知道自己比較喜歡前端了XD 話又說回來，演算法筆記有提到：
  </p>

  <blockquote>
    <p>
      到底 NP 問題能不能用多項式時間演算法解決呢？如果可以的話，那麼 NP 問題就都變成了 P 問題了。這意味著有一些花上幾十年幾百年算不出答案的問題，變得可以在幾分幾秒內計算完畢、得到答案。
    </p>
  </blockquote>

  <p>
    看來這個問題好像真的很重要呢！<br /> （但我還是覺得留給別人去想比較好XD 我要繼續為美麗的事物奮鬥～
  </p>

  <p>
    聽說很多人說自己已經證出來了，但現在好像還沒有完全讓人服氣的證明出現：<a href="http://www.win.tue.nl/%7Egwoegi/P-versus-NP.htm">http://www.win.tue.nl/~gwoegi/P-versus-NP.htm </a>
  </p>

  <h1>
    參考資料
  </h1>

  <ul>
    <li>
      <a href="http://bluelove1968.pixnet.net/blog/post/222283186-論p,np,np-hard,np-complete問題">論 p, np, np-hard, np-complete 問題</a>
    </li>
    <li>
      <a href="http://www.csie.ntnu.edu.tw/~u91029/Algorithm.html">演算法筆記</a>
    </li>
  </ul>
</div>
