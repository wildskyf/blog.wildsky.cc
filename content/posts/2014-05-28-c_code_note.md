---
title: 一些 code 的筆記 ( C++ )
date: 2014-05-28T00:00:00+08:00
categories:
  - 資工
  - Windows
tags:
  - C.C++
  - SetColor
  - system call
  - gotoxy
  - note
---

有時候寫 code 就是會手癢想美化一下

然後就會開始上網找一堆有的沒有的回來試

雖然說現在搜尋引擎已經很方便了~

但還是想記錄一下, 以後要用的時候比較快可以拿到程式碼

<hr />

## 用 SetColor(); 更改顏色

步驟很簡單~只要將下面這堆程式碼加到你的 .cpp 裡面

然後⋯就是個函式, 其他小細節(宣告還是甚麼其他的小東西)就不解釋了~

```
#include<windows.h>
void SetColor(int color = 7)
{
HANDLE hConsole;
hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
SetConsoleTextAttribute(hConsole,color);
}
```

需要更改顏色時只要呼叫  `SetColor(<strong>數字</strong>); `就可以更改顏色了!

**數字**對應到的文字顏色以及背景顏色如下圖

<a title="Flickr 上 kevin_boy3110 的 SetColor" href="https://www.flickr.com/photos/71353772@N04/14097442967/"><img src="https://farm4.staticflickr.com/3717/14097442967_84b7faae59.jpg" alt="SetColor" width="629" height="477" /></a>

舉例來說, 我今天想要出現 **黑底紅字** 那我只要呼叫 SetColor(12); 就可以完成願望

再舉例來說, 我今天想要 **白底黑字** 我只要呼叫 SetColor(240); 就可以達成效果

那今天我想要變回預設值呢? 可以直接輸入 SetColor(); 就會切回原本顯示的樣子了!

是不是很方便呀，以上就是 SetColor() 這個函式的的使用方式

來源 : <http://ppt.cc/WDxi>

<hr />

## system(&#8220;color 0a");

學了局部改變顏色的方法, 就順便學一下霸氣的改整面顏色的方法吧!

windows要呼叫很簡單 只要先 `#include<stdlib.h>` 然後在需要的時候輸入 `system("color 0a"); `

就可以改變顏色了! 讓我稍微解釋一下, 後面有兩個值, 都採十六進位制

第一個值是控制文字顏色, 第二個值是控制背景顏色, 怎麼樣? 簡單吧**

對應的顏色我就不講了, 讓你自行摸索。

p.s : `system("color 0F");` 是黑底白字,  `system("color F0");` 是白底白黑字, 剩下的自行看著辦~

<hr />

## 用 gotoxy(); 更改游標位置

有時候會想要有一些排版, 就會不斷的 print 空白鍵, 但每次這樣寫就覺得好麻煩又好蠢

程式碼被空白字元佔滿的感覺真的不好受, 就算使用迴圈印也還是沒辦法逃離看起來亂糟糟的感覺

這個時候就會希望可以獲得自由, that is, 游標位置主控權, 方法很簡單, 程式碼就如下方所示:

```c++
#include<windows.h>
void gotoxy(int xpos, int ypos)
{
COORD scrn;
HANDLE hOuput = GetStdHandle(STD_OUTPUT_HANDLE);
scrn.X = xpos; scrn.Y = ypos;
SetConsoleCursorPosition(hOuput,scrn);
}
```

想移動游標時只要呼叫 gotoxy(x,y); 就 OK 了~

x, y 值的計算方式是以命令提示字元視窗的左上角開始算

向右向下, 值漸漸增加, 細節就讓你自己試試看吧!

來源 : <http://ppt.cc/4i0e>

<hr />

### 後記

有了上面那幾個函式, 相信你就可以大大的改善你的使用者介面了, 更不用提你的程式碼會變得多整潔

很多的小遊戲有了上面那兩個函式也會變得很容易

下面是我自己寫的賽車遊戲, 歡迎試玩 & 幫我 debug 唷**

下載點 : <http://ppt.cc/VRXm">
