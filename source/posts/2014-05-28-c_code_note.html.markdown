---
id: 140
title: 一些 code 的筆記 ( C++ )
date: 2014-05-28T00:58:31+00:00
author: wildsky
layout: post
guid: http://wildsky.lionfree.net/?p=140
permalink: /c_code_note/
wpb_post_views_count:
  - 347
dsq_thread_id:
  - 3543048518
categories:
  - C++
  - Coding
  - windows
tags:
  - C++
  - gotoxy
  - setcolor
  - windows.h
---
<div class="pf-content">
  <p>
    有時候寫 code 就是會手癢想美化一下
  </p>
  
  <p>
    然後就會開始上網找一堆有的沒有的回來試
  </p>
  
  <p>
    雖然說現在搜尋引擎已經很方便了~
  </p>
  
  <p>
    但還是想記錄一下, 以後要用的時候比較快可以拿到程式碼
  </p>
  
  <p>
    <!--more MORE...-->
  </p>
  
  <hr />
  
  <h2>
    用 SetColor(); 更改顏色
  </h2>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    步驟很簡單~~只要將下面這堆程式碼加到你的 .cpp 裡面
  </p>
  
  <p>
    然後&#8230;.就是個函式, 其他小細節(宣告還是甚麼其他的小東西)就不解釋了~
  </p>
  
  <p>
    <code class="block">&lt;br />
#include&lt;windows.h&gt;&lt;br />
void SetColor(int color = 7)&lt;br />
{&lt;br />
HANDLE hConsole;&lt;br />
hConsole = GetStdHandle(STD_OUTPUT_HANDLE);&lt;br />
SetConsoleTextAttribute(hConsole,color);&lt;br />
}&lt;br />
</code>
  </p>
  
  <p>
    需要更改顏色時只要呼叫  <code>SetColor(&lt;strong>數字&lt;/strong>); </code>就可以更改顏色了!
  </p>
  
  <p>
    <strong>數字</strong>對應到的文字顏色以及背景顏色如下圖
  </p>
  
  <p>
    <a title="Flickr 上 kevin_boy3110 的 SetColor" href="https://www.flickr.com/photos/71353772@N04/14097442967/"><img src="https://farm4.staticflickr.com/3717/14097442967_84b7faae59.jpg" alt="SetColor" width="629" height="477" /></a>
  </p>
  
  <p>
    舉例來說, 我今天想要出現 <span style="color: #ff0000;"><strong>黑底紅字</strong></span> 那我只要呼叫 SetColor(12); 就可以完成願望
  </p>
  
  <p>
    再舉例來說, 我今天想要 <strong>白底黑字</strong> 我只要呼叫 SetColor(240); 就可以達成效果
  </p>
  
  <p>
    那今天我想要變回預設值呢? 可以直接輸入 SetColor(); 就會切回原本顯示的樣子了!
  </p>
  
  <p>
    是不是很方便呀~~  以上就是 SetColor() 這個函式的的使用方式~~
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    來源 : <a href="http://ppt.cc/WDxi">http://ppt.cc/WDxi</a>
  </p>
  
  <hr />
  
  <h2>
    system(&#8220;color 0a");
  </h2>
  
  <p>
    學了局部改變顏色的方法, 就順便學一下霸氣的改整面顏色的方法吧!
  </p>
  
  <p>
    windows要呼叫很簡單 只要先 <code>#include&lt;stdlib.h&gt;</code> 然後在需要的時候輸入 <code>system("color 0a"); </code>
  </p>
  
  <p>
    就可以改變顏色了! 讓我稍微解釋一下, 後面有兩個值, 都採十六進位制
  </p>
  
  <p>
    第一個值是控制文字顏色, 第二個值是控制背景顏色, 怎麼樣? 簡單吧~~
  </p>
  
  <p>
    對應的顏色我就不講了, 讓你自行摸索吧!
  </p>
  
  <p>
    p.s : <code>system("color 0F");</code> 是黑底白字,  <code>system("color F0");</code> 是白底白黑字, 剩下的自行看著辦囉~
  </p>
  
  <hr />
  
  <h2>
    用 gotoxy(); 更改游標位置
  </h2>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    有時候會想要有一些排版, 就會不斷的 print 空白鍵, 但每次這樣寫就覺得好麻煩又好蠢
  </p>
  
  <p>
    程式碼被空白字元佔滿的感覺真的不好受, 就算使用迴圈印也還是沒辦法逃離看起來亂糟糟的感覺
  </p>
  
  <p>
    這個時候就會希望可以獲得自由, that is, 游標位置主控權, 方法很簡單, 程式碼就如下方所示:
  </p>
  
  <p>
    <code class="block">&lt;br />
#include&lt;windows.h&gt;&lt;br />
void gotoxy(int xpos, int ypos)&lt;br />
{&lt;br />
COORD scrn;&lt;br />
HANDLE hOuput = GetStdHandle(STD_OUTPUT_HANDLE);&lt;br />
scrn.X = xpos; scrn.Y = ypos;&lt;br />
SetConsoleCursorPosition(hOuput,scrn);&lt;br />
}&lt;br />
</code>
  </p>
  
  <p>
    想移動游標時只要呼叫 gotoxy(x,y); 就 OK 了~
  </p>
  
  <p>
    x, y 值的計算方式是以命令提示字元視窗的左上角開始算
  </p>
  
  <p>
    向右向下, 值漸漸增加, 細節就讓你自己試試看吧!
  </p>
  
  <p>
    來源 : <a href="http://ppt.cc/4i0e">http://ppt.cc/4i0e</a>
  </p>
  
  <hr />
  
  <h3>
    後記
  </h3>
  
  <p>
    有了上面那幾個函式, 相信你就可以大大的改善你的使用者介面了, 更不用提你的程式碼會變得多整潔
  </p>
  
  <p>
    很多的小遊戲有了上面那兩個函式也會變得很容易
  </p>
  
  <p>
    下面是我自己寫的賽車遊戲, 歡迎試玩 & 幫我 debug 唷~~
  </p>
  
  <p>
    下載點 : <a href="http://ppt.cc/VRXm">http://ppt.cc/VRXm</a>
  </p>
</div>