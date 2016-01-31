---
title: JavaScript 抓得住你
date: 2015-01-21T16:02:30+00:00
author: wildsky
layout: post
permalink: /javascript-get-dom/
categories:
  - 'Web Design'
tags:
  - JavaScript
---

### 前言

最近一直在接觸前端，無論是 g0v 還是 MozTW，總是會有一些新的技術讓我感到驚豔。
舉例來說，我在幫忙開發 MozTW 的網站時就是使用 nodejs 下的 grunt-cli，
或是幫忙 WM 維護網站學會的 Jekyll，接觸到了 SASS/SCSS，（雖然還不夠完善而沒有被 merge…），
也因此更知道了自己的不足，還有很多很多東西等著我去學。
最近恰逢學校選課時節需要安排課表，我就想自己寫出一個課表，但還沒開始研究，所以今天的主題不是這個XD

![HTMP + CSS + JavaScript](https://i.imgur.com/fWrUQtY.jpg)
(photo is from [here](http://agyp-css.com/css3-vs-javascript/))

## 導讀（？）

今天的主題是我在寫網頁時感覺到的感覺（？），
寫網頁一定會用到 HTML，美化就需要 CSS，如果想讓使用者跟網頁有所互動，那就需要用到 JavaScript 啦。
我在寫網頁時會有一些不熟悉的東西需要我去查，所以 google 是一定要的，
在我寫 HTML 和 CSS 的時候，都可以很快就找到我需要的東西，一方面是關鍵字比較好下，
另一方面也因為很多人都有整理，此外，也因為常常用，所以熟悉的程度會慢慢增加，有些常用的設定值甚至不用去查了，

但 JavaScript 就不同了，常常為了「要怎麼抓到某某元素」而傷腦筋，找很久還找不到，等到終於找到的時候，
時間也已經浪費了一大半了，所以這篇文章就是為了要記錄我會用到的「抓元素」方式而誕生的！

### 開講！

首先就是最常用的

#### document.getElementById("yoo")

這個可以抓到`<span id="yoo">something</span>`、`<div id="yoo">something</div>`、`<tag id="yoo">something</tag>` 這些元素，
簡單地說，就是「抓元素 by id」啦！
這也是我第一個會用的方法，所以把它擺在第一個介紹，
（其實也沒有介紹到什麼ˊ_>ˋ），我就寫個範例來佔版面吧！（X）

```
<!DOCTYPE html>
<head>
  <title>yoo</title>
</head>
<script content="text/javascript" languege="javascript">
  function gethihi() {
    var hi = document.getElementById("hihi");
    console.log(hi);
  }
</script>
<body>
  <span id="hihi>some words</span>
  <input type="button" onclick="javascript:gethihi()">
</body>
</html>
```

#### document.getElementsByTagName("yoo")

這個可以抓到 `<yoo></yoo>` 或是 `<yoo />` 的元素，裡面的 yoo 你可以換成 img, div, span… 其他東西，
除了內建的 Tag 外，也可以像我上面寫的，抓到自己定的 tag，
不過你有注意到嗎？裡面還有一個 s 唷！
所以抓出來的東西是一個陣列，就算你的檔案中只有一個那樣子的元素，你還是必須以陣列的方式來取出它，如下：

[syntax type="html"]<!DOCTYPE html><br /> <head><br /> <title>yoo</title><br /> </head><br /> <script content="text/javascript" languege="javascript"><br /> function gethihi()<br /> {<br /> var hi = document.getElementsByTagName(&#8220;<span style="color: #008000;">hihi</span>&#8220;);<br /> console.log(hi<span style="color: #ff0000;">[0]</span>);<br /> }<br /> </script><br /> <body><br /> <<span style="color: #008000;">hihi</span>>some words</<span style="color: #008000;">hihi</span>><br /> <input type="button" onclick="javascript:gethihi()"><br /> </body><br /> </html><br /> [/syntax]

就像這樣，如果要取用它就必須加入 [0]，就算你沒有像我這樣把它丟進變數裡，還是需要寫成 <code>document.getElemetsByTagName("hihi")[0]</code> ，說實話，是真的有些麻煩，所以如果只有單一元素的話，我自己是習慣使用抓 ID 的方式。但如果是一堆元素的話，使用 <code>document.getElemetsByTagName("yoo")</code> 搭配 <code>for(var i=0;i&lt;yoo.length;i++)</code> 之類的迴圈，其實效果還蠻不錯的！

<h3>
document.getElement<span style="color: #ff0000;">s</span>ByClassName(&#8220;yoo")
</h3>

其實這個跟上一個差不多，我就不多作介紹了…咳咳… 沒有啦！還是來介紹一下，這個跟上一個一樣，抓出來的東西是個陣列，只是他抓的不再是 Tag Name，而是貨真價實的 class！哈哈哈哈哈！（笑啥）相信很多人都是先學會用 JQuery 才學純 Javascript ，所以剛開始要抓 class name 時都有些不順，這一個抓法相信你一定會喜歡，不過要注意的是，因為它抓出來也是陣列，所以就算文件中只有一個 yoo ，也要記得加上 [0] 才抓得到它唷！

[syntax type="html"]<!DOCTYPE html><br /> <head><br /> <title>yoo</title><br /> </head><br /> <script content="text/javascript" languege="javascript"><br /> function gethihi()<br /> {<br /> var hi = document.getElementsByClassName(&#8220;<span style="color: #008000;">hihi</span>&#8220;);<br /> console.log(hi<span style="color: #ff0000;">[0]</span>);<br /> }<br /> </script><br /> <body><br /> <span class="<span style="color: #008000;">hihi</span>&#8220;>some words</span><br /> <input type="button" onclick="javascript:gethihi()"><br /> </body><br /> </html><br /> [/syntax]

<h3>
document.getElement<span style="color: #ff0000;">s</span>ByName(&#8220;yoo")
</h3>

這一個我還沒用過，不過經過上面三個例子，未看先猜，它取出也是個陣列，所以也要以陣列的方式來取用元素，另外它抓得到的元素就是有定義 name="yoo" 的那些，像是<code> &lt;span name="yoo"&gt;something&lt;/span&gt;</code> <code> &lt;div name="yoo"&gt;something&lt;/div&gt;</code>  &#8230;<code> &lt;tag name="yoo"&gt;something&lt;/tag&gt;</code> 之類的！這一個我就不寫範例了，交給你自己去玩吧！

好啦還是寫一下好了XD <del>反正也只要複製貼上改一點小地方就好</del>：

[syntax type="html"]<!DOCTYPE html><br /> <head><br /> <title>yoo</title><br /> </head><br /> <script content="text/javascript" languege="javascript"><br /> function gethihi()<br /> {<br /> var hi = document.getElementsByName(&#8220;<span style="color: #008000;">hihi</span>&#8220;);<br /> console.log(hi<span style="color: #ff0000;">[0]</span>);<br /> }<br /> </script><br /> <body><br /> <span name="<span style="color: #008000;">hihi</span>&#8220;>some words</span><br /> <input type="button" onclick="javascript:gethihi()"><br /> </body><br /> </html><br /> [/syntax]

#### 尾聲

OK，大概介紹到這裡！有時間我會再多寫一點跟 html, css, javascript 相關的文章～
希望在網頁這個領域，可以玩到更多有趣的東西！
