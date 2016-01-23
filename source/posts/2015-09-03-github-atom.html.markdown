---
id: 714
title: 'atom &#8211; 編輯神器'
date: 2015-09-03T02:09:58+00:00
author: wildsky
layout: post
guid: https://wildsky.cc/?p=714
permalink: /github-atom/
dsq_thread_id:
  - 4091106296
categories:
  - Coding
  - Front-end 前端
  - Linux
  - 編輯器
tags:
  - atom
  - Electron
  - GitHub
  - Linux
  - Notepad++
  - shortcuts
  - 快捷鍵
---
<div class="pf-content">
  <h2>
    不用仔細看的前言
  </h2>

  <p>
    看著 <a href="/2014/12/16/notepadplusplus-zencoding.html">過去文章吹捧的 notepad++</a>，頓時覺得很有趣，現在居然跳槽來玩其他編輯器了，一整個打臉自己以前說的那堆理由，但或許這就是人生吧（？），總是要不停的砍掉重練，才會在以前的經驗上獲得新的知識技能，進而成長茁壯。
  </p>

  <p>
    其實我一直不是很會寫前言所以就不要再多浪費唇舌了XD
  </p>

  <p>
    <!--more-->
  </p>

  <p>
    今天要來講講我後來跳槽 Fedora 後沒有 notepad++ 可用後的新歡—— GitHub Atom。不得不說，GitHub 的取名真的很讓我不知道該說些什麼，atom 在網路上一搜尋就是會跑出什麼 3D 印表機 blablabla 之類的訊息，結果反而找不到我想要的東西，應該要取個更有趣的名字啊，不過 Atom 還算好的，另一個 GitHub 的產品 Electron，他之前的名字（Atom Shell）還比較好找資料… 聽說這東西的文件還寫得很糟糕… Anyway，今天的主題不是他，所以抱怨就到此為止。
  </p>

  <p>
    今天其實只是想寫一個 Atom 小記，至少不要再讓我找一個功能找了找半天，以為要寫一個套件才有，殊不知其實早有內建… 真的是相見恨晚不是我在講…
  </p>

  <h3>
    本文唯一重要的部份
  </h3>

  <p>
    首先就來講一下他的快捷鍵，因為我是使用 Linux，所以就以 Linux 本位來寫，如果是 Mac 的話應該只要把 ctrl 換成 command 就行了。
  </p>

  <ol>
    <li>
      <code>Ctrl + f</code>：<strong>搜尋</strong>＆<strong>取代</strong>。這沒什麼好說的了，編輯器必備！
    </li>
    <li>
      <code>Ctrl + ,</code>：叫出<strong>設定面版</strong>。這也沒什麼好說的吧～
    </li>
    <li>
      <code>Ctrl + /</code>：這個功能就是用來 <strong>切換註解</strong>，完完全全相見恨晚的一個小功能…如果你一次選取多行，就可以一次把他們加入單行註解。恩？你問我為什麼不直接用多行註解？這是因為有些語言在編譯後的程式碼中，原程式碼寫單行和多行註解會產生不一樣的結果，像是 Coffee Script，如果你使用他的多行註解「一組 ### 」，那麼被 ### 框住的文字會顯示在編譯後的程式碼中，而他的單行註解「註解內容前的一個 #」並不會如此，此外，還有另一個不知道是 Bug 還是 Feature 的特殊情況：當你在一個函式的 return 前一行加上多行註解，編譯出來的結果會與預期相去超遠，這個暑假真的是被這個 CoffeeScript 雷到快吐寫，現在有了這個功能，終於可以笑呵呵把暫時不用的程式碼註解掉了… （雖然我之後應該也是直接衝 ES6 不寫 Coffee 了。
    </li>
    <li>
      <code>Ctrl + t</code>：用於 <strong>搜尋專案中的檔案</strong>，蠻不錯的小功能。
    </li>
    <li>
      <code>Ctrl + r</code>：這個功能是用來 <strong>搜尋開啟的這個檔案中的函式</strong>。我覺得其實還蠻有用的，當你的程式碼寫了幾百行、幾千行以後，要伸手去用滑鼠或是叫出搜尋再多打幾個字來搜尋… come on！你可以有更好的選擇，「搜尋函式」這個功能可以讓你依稀記得涵是的長相就可以找到你要的函式，甚至你如果完全不記得了，他也可以給你下拉選單，用方向鍵你就可以一次看一個函式不用一直再找 Var function blablabla 了！
    </li>
    <li>
      <code>Ctrl + k 之後 方向鍵</code>：<strong>多視窗瀏覽</strong>(Split up/down/left/right)。這個功能可以讓你將 Focus 中那一份文件往你按的方向施行影分身之術，如此一來，你就可以玩大家來找碴了，對於 Debug 或是解 Conflict 應該還蠻有用的！
    </li>
    <li>
      <code>Ctrl + k 之後 Ctrl + 方向鍵</code>：<strong>在多個視窗中做切換</strong>。開啟多個視窗後就會想要切換來切換去，這個快捷鍵就是幫你達成這個願望！
    </li>
    <li>
      <code>Ctrl + t/w</code>：<strong>開啟新分頁/關閉當前分頁</strong>。
    </li>
    <li>
      <code>Ctrl + 0</code>：<strong>切換<span style="text-decoration: underline;">檔案總管</span>與<span style="text-decoration: underline;">編輯檔案</span></strong>。
    </li>
    <li>
      <code>Ctrl + tab</code>：<strong>切換分頁</strong>。
    </li>
    <li>
      <code>Ctrl + [ 或 ]</code>：<strong>左右移動程式碼</strong>，感覺有點像 <code>tab</code> 和 <code>shift + tab</code> 的功能。
    </li>
    <li>
      <code>Ctrl + alt + [ 或 ]</code>：把 <strong>程式碼縮起來 / 展開</strong>，系上學長記貓耳之後第二愛的功能XD
    </li>
    <li>
      <code>Ctrl + Shift + p</code>：<strong>快捷功能清單</strong>，這個快捷鍵包含了其他的快捷鍵，所以有人說只要記他就好，但還要打… 就很麻煩，所以快捷記常用的，這個功能清單就當作<span style="text-decoration: underline;">快捷鍵查看手冊</span>就好囉～！
    </li>
  </ol>

  <h2>
    尾聲
  </h2>

  <p>
    人還是不要把話說死比較好啊！ XD
  </p>

  <h2>
    參考資料
  </h2>

  <ul>
    <li>
      Atom：<a href="http://Atom.io" target="_blank">Atom.io</a>
    </li>
    <li>
      Electron：<a href="http://Electron.atom.io" target="_blank">Electron.atom.io</a>
    </li>
    <li>
      CSDN：<a href="http://blog.csdn.net/a8154596/article/details/43573803" target="_blank">http://blog.csdn.net/a8154596/article/details/43573803</a>
    </li>
  </ul>

  <p>
    &nbsp;
  </p>
</div>
