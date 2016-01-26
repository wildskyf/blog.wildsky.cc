---
id: 761
title: 在 Code::Blocks 開開心心 Unit Test
date: 2015-11-01T14:13:38+00:00
author: wildsky
layout: post
guid: https://wildsky.cc/?p=761
permalink: /unit-test-in-codeblocks/
dsq_thread_id:
  - 4278837633
categories:
  - C++
  - Coding
tags:
  - C++
  - codeblocks
  - coding
  - cpp
  - gmock
  - TDD
  - unit test
---
<div class="pf-content">
  <h2>
    前言
  </h2>

  <p>
    最近軟體工程在教單元測試（Unit Test），可是因為老師是 C# 戰士，<br /> 所以我們學的就是用 Visual Studio 的內建測試來測 C#，但我又不寫 C#！！<br /> 於是乎，這兩個禮拜就瘋狂地在網路上搜尋，但都沒有收穫（或是我太弱了看不懂QwQ），<br /> 後來終於在 Facebook 看到 <a href="http://www.github.com/aigecko/" target="_blank">旁門左道之神 &#8211; 師大貓耳控</a> 學長的動態：
  </p>

  <blockquote>
    <p>
      專題好像愈改愈炸<br /> 效能更慘還多了BUG<br /> 於是把軟工的Google Test拿了出來用用看
    </p>

    <p>
      先把專案的link和search path設定好<span class="text_exposed_show"><br /> 然後define一個標籤讓main可以跑不同模式<br /> 可以只執行程式也可以只跑單元測試</span>
    </p>

    <p>
      不然BUG有夠難抓<br /> 就算有git可以幫忙倒帶還是很靠北
    </p>
  </blockquote>

  <p>
    其實他在抱怨什麼我完全沒看，但看到單元測試這四個字我就欣喜若狂，<br /> 立刻向他請教「如何在 Code:Blocks」上跑單元測試的方法，<br /> 因此這篇文章就誕生了！
  </p>

  <p>
    <!--more-->
  </p>

  <h2>
    正文
  </h2>

  <h4>
    下載 & 建置 Gmock
  </h4>

  <p>
    首先，先去下載 Gmock 最新版：<a href="https://code.google.com/p/googlemock/downloads/list">https://code.google.com/p/googlemock/downloads/list</a>
  </p>

  <p>
    然後把他解壓縮到桌面，開啟 Terminal，前往該目錄底下，輸入下面的指令
  </p>

  <p>
    <code>./configure</code>
  </p>

  <p>
    他會開始跑東西，跑完後輸入
  </p>

  <p>
    <code>make</code>
  </p>

  <p>
    如果沒有錯誤，那最最基本的步驟就完成了！
  </p>

  <h4>
    專案設定
  </h4>

  <p>
    開啟 code:blocks，新增一個新專案（姑且稱之為 runTest），接著到左邊的 icon 上按右鍵，選擇 Build options&#8230; ，<br /> 將位於跳出的視窗上方的 tab 切換到 Linker setting，進行如下的設定（注意相對位置），<br /> 我是習慣將 Gmock 資料夾放在專案的上層目錄，所以相對路徑會這樣，你可以自行更動。
  </p>

  <p>
    <a href="http://wildsky.cc/blog-images/2015-11-01-01-55-51-的螢幕擷圖.png"><br /> <img class="alignnone size-large wp-image-766" src="chttp://wildsky.cc/blog-images/2015-11-01-01-55-51-的螢幕擷圖-1024x576.png" alt="Code:Blocks Linker setting" width="629" height="354" srcset="http://wildsky.cc/blog-images/2015-11-01-01-55-51-的螢幕擷圖-300x169.png 300w, http://wildsky.cc/blog-images/2015-11-01-01-55-51-的螢幕擷圖-1024x576.png 1024w, http://wildsky.cc/blog-images/2015-11-01-01-55-51-的螢幕擷圖-900x506.png 900w, http://wildsky.cc/blog-images/2015-11-01-01-55-51-的螢幕擷圖-1280x720.png 1280w, http://wildsky.cc/blog-images/2015-11-01-01-55-51-的螢幕擷圖.png 1366w" sizes="(max-width: 629px) 100vw, 629px" /><br /> </a>
  </p>

  <p>
    接著，Tab 切換到 Search directories，加入下面的位置，一樣要注意相對目錄。
  </p>

  <p>
    <a href="http://wildsky.cc/blog-images/2015-11-01-01-13-10-的螢幕擷圖.png"><br /> <img class="alignnone size-large wp-image-768" src="http://wildsky.cc/blog-images/2015-11-01-01-13-10-的螢幕擷圖-1024x576.png" alt="Code:Blocks Search directories - Compiler" width="629" height="354" srcset="http://wildsky.cc/blog-images/2015-11-01-01-13-10-的螢幕擷圖-300x169.png 300w, http://wildsky.cc/blog-images/2015-11-01-01-13-10-的螢幕擷圖-1024x576.png 1024w, http://wildsky.cc/blog-images/2015-11-01-01-13-10-的螢幕擷圖-900x506.png 900w, http://wildsky.cc/blog-images/2015-11-01-01-13-10-的螢幕擷圖-1280x720.png 1280w, http://wildsky.cc/blog-images/2015-11-01-01-13-10-的螢幕擷圖.png 1366w" sizes="(max-width: 629px) 100vw, 629px" /><br /> </a>
  </p>

  <p>
    Sub-tab 切換到 Linker 一樣進行設定。
  </p>

  <p>
    <a href="http://wildsky.cc/blog-images/2015-11-01-01-13-12-的螢幕擷圖.png"><br /> <img class="alignnone size-large wp-image-767" src="http://wildsky.cc/blog-images/2015-11-01-01-13-12-的螢幕擷圖-1024x576.png" alt="Code:Blocks Search directories - Linker" width="629" height="354" srcset="http://wildsky.cc/blog-images/2015-11-01-01-13-12-的螢幕擷圖-300x169.png 300w, http://wildsky.cc/blog-images/2015-11-01-01-13-12-的螢幕擷圖-1024x576.png 1024w, http://wildsky.cc/blog-images/2015-11-01-01-13-12-的螢幕擷圖-900x506.png 900w, http://wildsky.cc/blog-images/2015-11-01-01-13-12-的螢幕擷圖-1280x720.png 1280w, http://wildsky.cc/blog-images/2015-11-01-01-13-12-的螢幕擷圖.png 1366w" sizes="(max-width: 629px) 100vw, 629px" /><br /> </a>
  </p>

  <p>
    這樣環境就差不多設定完成了！
  </p>

  <h4>
    跑第一次測試
  </h4>

  <p>
    新增一個 main.cpp 檔，內容輸入如下：<br /> <code>&lt;br />
#include &lt;stdio.h&gt;&lt;br />
#define TEST_MODE 1&lt;br />
#if TEST_MODE==1&lt;br />
#include "gmock/gmock.h"&lt;br />
#include "gtest/gtest.h"&lt;br />
#include "Test.h"&lt;br />
#endif // TEST_MODE&lt;br />
#if TEST_MODE==1&lt;br />
int main(int argc,char **argv){&lt;br />
::testing::InitGoogleTest(&argc, argv);&lt;br />
return RUN_ALL_TESTS();&lt;br />
#else&lt;br />
int main(){&lt;br />
#endif // TEST_MODE&lt;br />
printf("Run Test!\n");&lt;br />
return 0;&lt;br />
}&lt;br />
</code><br /> 然後新增一個 test.h 檔，輸入內容如下：<br /> <code>&lt;br />
#include "gmock/gmock.h"&lt;br />
#include "gtest/gtest.h"&lt;br />
class Happy : public ::testing::Test{};&lt;br />
TEST_F(Happy,UnitTest){&lt;br />
EXPECT_EQ(1,1);&lt;br />
EXPECT_EQ(1,0);&lt;br />
}&lt;br />
</code><br /> 這時，按下 F9 就會跑測試了！！為了讓測試是真的有效，我就給了兩個最明顯的測試，1 == 1 以及 1 == 0，所以 run 出來的結果會有一個成功一個失敗，如下圖：
  </p>

  <p>
    <a href="http://wildsky.cc/blog-images/2015-11-01-13-47-48-的螢幕擷圖.png"><br /> <img class="alignnone size-full wp-image-770" src="http://wildsky.cc/blog-images/2015-11-01-13-47-48-的螢幕擷圖.png" alt="Running First Test" width="891" height="587" srcset="http://wildsky.cc/blog-images/2015-11-01-13-47-48-的螢幕擷圖-300x198.png 300w, http://wildsky.cc/blog-images/2015-11-01-13-47-48-的螢幕擷圖.png 891w" sizes="(max-width: 891px) 100vw, 891px" /><br /> </a>
  </p>

  <p>
    這樣就成功跑測試了！如果要測自己寫的 class 的方法，就直接像一般的專案那樣，在 test.h 中 include 要測的檔案，然後在 EXPECT_EQ 中輸入該輸入東西，<br /> 因為我也是昨天才建起這個環境的，所以還需要一點時間來摸熟，如果想知道更多可以去翻翻 Gmock 的文件。
  </p>

  <p>
    話說有一點網路上都沒有提到：如果想要正常建置，只要在 main.cpp 裡面的第 2 行把 <code>#define TEST_MODE 1</code> 改成 <code>#define TEST_MODE 0</code> 這樣就不會跑測試了！<br /> 這是<a href="http://www.github.com/aigecko/" target="_blank">旁門左道之神 &#8211; 師大貓耳控</a> 學長想到的方法，跪拜大神 <(_ _)>
  </p>

  <h2>
    後話
  </h2>

  <p>
    最近在讀〈學徒模式〉這本書，書中提到的「詢問身邊的專家」模式真的很好用 😀
  </p>

  <p>
    大家有空可以去買來讀讀。
  </p>

  <h2>
    相關連結
  </h2>

  <ul>
    <li>
      旁門左道之神 &#8211; 師大貓耳控：<a href="http://www.github.com/aigecko/" target="_blank">http://www.github.com/aigecko/</a>
    </li>
    <li>
      gmock：<a href="https://code.google.com/p/googlemock/" target="_blank">https://code.google.com/p/googlemock/</a>
    </li>
    <li>
      我的完整專案目錄：<a href="https://www.dropbox.com/s/6mnfw18cfemv0k4/runTest.zip?dl=1" target="_blank">https://www.dropbox.com/s/6mnfw18cfemv0k4/runTest.zip?dl=1</a>
    </li>
    <li>
      學徒模式－優秀軟體開發者的養成之路：<a href="http://www.tenlong.com.tw/items/986276256X?item_id=338410" target="_blank">http://www.tenlong.com.tw/items/986276256X?item_id=338410</a>
    </li>
  </ul>
</div>
