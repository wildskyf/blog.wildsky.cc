---
id: 237
title: JavaScript 抓得住你
date: 2015-01-21T16:02:30+00:00
author: wildsky
layout: post
guid: http://wildsky.cc/?p=237
permalink: /javascript-get-dom/
bluth_post_layout:
  - right_side
bluth_post_right_sidebar:
  - sidebar_right
bluth_post_left_sidebar:
  - sidebar_left
bluth_facebook_status:
  - 
bluth_twitter_status:
  - 
bluth_google_status:
  - 
wpb_post_views_count:
  - 320
dsq_thread_id:
  - 3460503275
categories:
  - Front-end 前端
  - 'web &amp; site'
tags:
  - css
  - g0v
  - getElementById
  - getElementsByClassName
  - getElementsByName
  - getElementsByTagName
  - html
  - javascript
  - mozTW
  - node.js
---
<div class="pf-content">
  <h2>
    前言
  </h2>
  
  <p>
    最近一直在接觸前端，無論是 <a href="http://g0v.tw/zh-TW/index.html" target="_blank">g0v</a> 還是 <a title="MozTW" href="http://moztw.org/" target="_blank">MozTW</a>，總是會有一些新的技術讓我感到驚豔。舉例來說，<a title="MozTW" href="http://moztw.org/" target="_blank">MozTW</a> 就是使用 <a title="nodejs" href="http://nodejs.org/" target="_blank">nodejs</a> 的 <a href="http://gruntjs.com/getting-started" target="_blank">grunt-cli</a> 以便能在本機端預覽，（先不提 <a href="http://livereload.com/">LiveReload </a>我還沒有研究到這個:P），或是幫忙 <a href="http://blog.kidwm.net/" target="_blank">WM</a> 大大維護網站學會的 <a href="http://jekyllrb.com/" target="_blank">jekyll</a>，接觸到了 SASS/SCSS，（雖然還不夠完善而沒有被 merge…>_<），也因此更知道了自己的不足，還有很多很多東西等著我去學。最近恰逢學校選課時節需要安排課表，我就想自己寫出一個課表，有想用 AngularJS 來完成自己的一些想法，但還沒開始研究，所以今天的主題不是這個XD
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <div style="width: 724px" class="wp-caption alignnone">
    <img src="https://i.imgur.com/fWrUQtY.jpg" alt="Html + Css + Javascript" width="714" height="446" />
    
    <p class="wp-caption-text">
      Html + Css + Javascript , photo is from <a href="http://agyp-css.com/css3-vs-javascript/" target="_blank">here</a>
    </p>
  </div>
  
  <p>
    <!--more-->
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <h2>
    導讀（？）
  </h2>
  
  <p>
    今天的主題是我在寫網頁的時候感覺到的感覺（？），寫網頁一定會用到 <a href="https://developer.mozilla.org/zh-TW/docs/Web/HTML/HTML5" target="_blank">Html</a>，美化就需要 <a href="https://developer.mozilla.org/zh-TW/docs/Web/CSS/CSS3" target="_blank">Css</a>，如果想讓使用者跟網頁有所互動，那就需要用到 <a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript" target="_blank">Javascript</a>。我在寫網頁時會有一些不熟悉的東西需要我去查，所以 google 是無可避免的，在我寫 Html 和 Css 的時候，都可以很快就找到我需要的東西，一方面是關鍵字比較好下，另一方面也因為很多人都有整理，此外，也因為常常用，所以熟悉的程度會慢慢增加，有些常用的設定值甚至不用去查了，但 Javascript 就不同了，常常為了「要怎麼抓到某某元素」而傷腦筋，找很久還找不到，等到終於找到的時候，時間也已經浪費了一大半了，所以這篇文章就是為了要記錄我會用到的「抓元素」方式而誕生的！
  </p>
  
  <h2>
    開講！
  </h2>
  
  <p>
    首先就是最常用的
  </p>
  
  <h3>
    document.getElementById(&#8220;yoo")
  </h3>
  
  <p>
    這個可以抓到<code> &lt;span id="yoo"&gt;something&lt;/span&gt;</code> <code> &lt;div id="yoo"&gt;something&lt;/div&gt;</code>  &#8230;<code> &lt;tag id="yoo"&gt;something&lt;/tag&gt;</code> 這些元素，簡單的說，就是「抓元素 by id」啦！這也是我第一個會用的方法，所以把它擺在第一個介紹，（其實也沒有介紹到什麼ˊ_>ˋ），我就寫個範例來佔版面吧！（X）
  </p>
  
  <p>
    [syntax type="html"]<!DOCTYPE html><br /> <head><br /> <title>yoo</title><br /> </head><br /> <script content="text/javascript" languege="javascript"><br /> function gethihi()<br /> {<br /> var hi = document.getElementById(&#8220;<span style="color: #008000;">hihi</span>&#8220;);<br /> console.log(hi);<br /> }<br /> </script><br /> <body><br /> <span id="<span style="color: #008000;">hihi</span>&#8220;>some words</span><br /> <input type="button" onclick="javascript:gethihi()"><br /> </body><br /> </html><br /> [/syntax]
  </p>
  
  <h3>
    document.getElement<span style="color: #ff0000;">s</span>ByTagName(&#8220;yoo")
  </h3>
  
  <p>
    這個可以抓到 <yoo></yoo> 或是 <yoo /> 的元素，裡面的 yoo 你可以換成 img, div, span,&#8230;. 其他東西，除了內建的 Tag 外，也可以像我上面寫的，抓到自己定的 tag，不過你有注意到嗎？裡面還有一個 s 唷！所以抓出來的東西是一個陣列，就算你的檔案中只有一個那樣子的元素，你還是必須以陣列的方式來取出它，如下：
  </p>
  
  <p>
    [syntax type="html"]<!DOCTYPE html><br /> <head><br /> <title>yoo</title><br /> </head><br /> <script content="text/javascript" languege="javascript"><br /> function gethihi()<br /> {<br /> var hi = document.getElementsByTagName(&#8220;<span style="color: #008000;">hihi</span>&#8220;);<br /> console.log(hi<span style="color: #ff0000;">[0]</span>);<br /> }<br /> </script><br /> <body><br /> <<span style="color: #008000;">hihi</span>>some words</<span style="color: #008000;">hihi</span>><br /> <input type="button" onclick="javascript:gethihi()"><br /> </body><br /> </html><br /> [/syntax]
  </p>
  
  <p>
    就像這樣，如果要取用它就必須加入 [0]，就算你沒有像我這樣把它丟進變數裡，還是需要寫成 <code>document.getElemetsByTagName("hihi")[0]</code> ，說實話，是真的有些麻煩，所以如果只有單一元素的話，我自己是習慣使用抓 ID 的方式。但如果是一堆元素的話，使用 <code>document.getElemetsByTagName("yoo")</code> 搭配 <code>for(var i=0;i&lt;yoo.length;i++)</code> 之類的迴圈，其實效果還蠻不錯的！
  </p>
  
  <h3>
    document.getElement<span style="color: #ff0000;">s</span>ByClassName(&#8220;yoo")
  </h3>
  
  <p>
    其實這個跟上一個差不多，我就不多作介紹了…咳咳… 沒有啦！還是來介紹一下，這個跟上一個一樣，抓出來的東西是個陣列，只是他抓的不再是 Tag Name，而是貨真價實的 class！哈哈哈哈哈！（笑啥）相信很多人都是先學會用 JQuery 才學純 Javascript ，所以剛開始要抓 class name 時都有些不順，這一個抓法相信你一定會喜歡，不過要注意的是，因為它抓出來也是陣列，所以就算文件中只有一個 yoo ，也要記得加上 [0] 才抓得到它唷！
  </p>
  
  <p>
    [syntax type="html"]<!DOCTYPE html><br /> <head><br /> <title>yoo</title><br /> </head><br /> <script content="text/javascript" languege="javascript"><br /> function gethihi()<br /> {<br /> var hi = document.getElementsByClassName(&#8220;<span style="color: #008000;">hihi</span>&#8220;);<br /> console.log(hi<span style="color: #ff0000;">[0]</span>);<br /> }<br /> </script><br /> <body><br /> <span class="<span style="color: #008000;">hihi</span>&#8220;>some words</span><br /> <input type="button" onclick="javascript:gethihi()"><br /> </body><br /> </html><br /> [/syntax]
  </p>
  
  <h3>
    document.getElement<span style="color: #ff0000;">s</span>ByName(&#8220;yoo")
  </h3>
  
  <p>
    這一個我還沒用過，不過經過上面三個例子，未看先猜，它取出也是個陣列，所以也要以陣列的方式來取用元素，另外它抓得到的元素就是有定義 name="yoo" 的那些，像是<code> &lt;span name="yoo"&gt;something&lt;/span&gt;</code> <code> &lt;div name="yoo"&gt;something&lt;/div&gt;</code>  &#8230;<code> &lt;tag name="yoo"&gt;something&lt;/tag&gt;</code> 之類的！這一個我就不寫範例了，交給你自己去玩吧！
  </p>
  
  <p>
    .
  </p>
  
  <p>
    .
  </p>
  
  <p>
    .
  </p>
  
  <p>
    好啦還是寫一下好了XD <del>反正也只要複製貼上改一點小地方就好</del>：
  </p>
  
  <p>
    [syntax type="html"]<!DOCTYPE html><br /> <head><br /> <title>yoo</title><br /> </head><br /> <script content="text/javascript" languege="javascript"><br /> function gethihi()<br /> {<br /> var hi = document.getElementsByName(&#8220;<span style="color: #008000;">hihi</span>&#8220;);<br /> console.log(hi<span style="color: #ff0000;">[0]</span>);<br /> }<br /> </script><br /> <body><br /> <span name="<span style="color: #008000;">hihi</span>&#8220;>some words</span><br /> <input type="button" onclick="javascript:gethihi()"><br /> </body><br /> </html><br /> [/syntax]
  </p>
  
  <h3>
    尾聲
  </h3>
  
  <p>
    OK，大概介紹到這裡！有時間我會在多寫一點跟 html, css, javascript 相關的文章～<br /> 希望大家在網頁的這一塊，可以玩到更多有趣的東西！ Good Luck!
  </p>
</div>