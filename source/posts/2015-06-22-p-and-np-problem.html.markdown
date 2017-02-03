---
title: P 與 NP 的情感糾葛
categories:
  - Class
---

這篇是關於演算法中 P 與 NP 問題的一點小整理。
因為網路上沒有比較簡明的整理文件，所以才寫了這一篇。

面對一個問題，不管是什麼問題，我們都會想個方法來去解決它。有些問題有解，有些問題無解，有些很好解，有些卻很難解。
今天要介紹的主題，是要對世界上所有的問題來做一個分類，什麼叫難的問題，什麼叫簡單的問題。

## 簡易介紹

這世上的問題可以分類成下面四種：

- Unsolvable Problem：無解
- Intractable Problem：要指數時間才能解 ( 2^n 之類的 )
- NP-Problem：「指數時間內能計算答案」且「多項式時間內能驗證答案」的問題。
- P-Problem容易解的，多項式時間內即可得解

P 問題可以用指數時間演算法計算答案，當然也可以用多項式時間驗證答案，所以 P 問題都屬於 NP 問題。

![p/np 的關係](http://wildsky.cc/blog-images/2015/06/ntnucsie106.hackpad.com_ALvROjc4gl2_p.300160_1434875148642_2015-06-21-16-25-33-的螢幕擷圖.png)

## P、NP、NPC 與 NPH

由上圖可知，P 與 NP 之間有四種可能：

- P：Polynomial Time 內能解的問題。
- NP：未找到 Polynomial Time 內能得的解，也不確定有沒有； 但如果提供一個解，可以在 Polynomial Time 內被驗證的問題。
- NP Complete：還沒有找到 Polynomial Time 的解，但是能在 Polynomial Time 被驗證的問題。但 NPC 的問題是 NP 中較難的問題，所以如果能證明 NPC 的問題有 P 的解，那 NP 的問題就都可以找到 P 的解。
- NP Hard：未找到 Polynomial Time 的解，但不確定是否能在 Polynomial Time 被驗證的問題。NP Hard 的問題又比 NPC 難。

一般來說 P 的問題算是比較簡單，NP Complete 跟 NP Hard 算是很難的問題。而 NP 的問題還是有可能找到快速算法。

## P ?= NP

我覺得這個是 [白馬非馬](http://boktakhk4.pixnet.net/blog/post/26093482) 的問題… P 就屬於 NP 嘛… 幹嘛還去想他相不相等呢？但會這麼想就代表我不適合讀 Computer Science，還好我已經知道自己比較喜歡前端了XD 話又說回來，演算法筆記有提到：

> 到底 NP 問題能不能用多項式時間演算法解決呢？如果可以的話，那麼 NP 問題就都變成了 P 問題了。這意味著有一些花上幾十年幾百年算不出答案的問題，變得可以在幾分幾秒內計算完畢、得到答案。

看來這個問題好像真的很重要呢！
（但我還是覺得留給別人去想比較好XD 我要繼續為美麗的事物奮鬥～

聽說很多人說自己已經證出來了，但現在好像還沒有完全讓人服氣的證明出現：<http://www.win.tue.nl/%7Egwoegi/P-versus-NP.htm>

## 參考資料

- [論 p, np, np-hard, np-complete 問題](http://bluelove1968.pixnet.net/blog/post/222283186-論p,np,np-hard,np-complete問題)
- [演算法筆記](http://www.csie.ntnu.edu.tw/~u91029/Algorithm.html)
