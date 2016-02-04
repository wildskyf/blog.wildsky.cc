---
id: 784
title: 修復 zenfone 重複出現 com.google.process.gapps 的問題
date: 2015-11-26T18:08:07+08:00
author: wildsky
layout: post
guid: https://wildsky.cc/?p=784
permalink: /fix-zenfone-com-google-process-gapps/
dsq_thread_id:
  - 4352122588
categories:
  - Android
tags:
  - bug
  - com.google.process.gapps
  - fix
  - gapps
  - google
  - google play
  - zenfone
  - 錯誤
---
<div class="pf-content">
  <p>
    用 Zenfone 一段時間了（差不多久到要換了…吧），刷機、Root、降版、刪除內建應用<del>（雞肋）</del>程式…基本上都知道怎麼做了，當然亂玩手機的後果就是偶爾會碰到一些小問題，像是運動的時候 GPS 完全偵測不到導致我跑了 40 分鐘還是 0 km，或是看著手機上有人來電我卻怎麼滑手機就是無視我，還有這次提到的 <strong>重複出現 com.google.process.gapps 的問題</strong>，基本上網路上都有解法，但都眾說紛紜，有人說要去把手機 <span style="text-decoration: underline;">還原原廠設定</span>（殺雞焉用牛刀啊！），有人說要 <span style="text-decoration: underline;">重設應用程式喜好</span>，但我最後親自測試過後終於找到一個最有效的辦法
  </p>

  <p>
    <!--more-->
  </p>

  <ol>
    <li>
      首先，先進入 系統設定 > 應用程式 > 全部
    </li>
    <li>
      找到 <strong>Google 服務架構</strong>，點進去
    </li>
    <li>
      先點「清除資料」，再點「強制停止」
    </li>
    <li>
      然後回到上一頁
    </li>
    <li>
      找到 <strong>Google Play 服務</strong>、<strong>Google Play 商店</strong>，分別重複 <span style="text-decoration: underline;">第 3 步驟</span>
    </li>
    <li>
      回到主畫面，重開機以後應該就不會再來煩你了！
    </li>
  </ol>

  <p>
    然而，如果他還是一直出來吵你呢？那我就沒辦法啦～可以試著把有「Google」這個字樣的 App 都「清除資料」 + 「強制停止」試試，因為那個訊息看起來就跟 Google 有關，所以一定就是他的 App 出 Bug，一個一個試，說不定就成功清除啦～！
  </p>

  <p class="ts">
    參考： <span id="thread_subject"><a href="http://www.asus.com/zentalk/tw/forum.php?mod=viewthread&tid=82226" target="_blank">出現 com.google.process.gapps 錯誤</a></span>
  </p>
</div>
