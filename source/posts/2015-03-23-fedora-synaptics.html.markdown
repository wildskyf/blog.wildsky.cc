---
id: 286
title: Synaptics 在 Fedora 沒反應，救救我阿我救我！
date: 2015-03-23T23:56:16+00:00
author: wildsky
layout: post
guid: https://wildsky.cc/?p=286
permalink: /fedora-synaptics/
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
  - 70
dsq_thread_id:
  - 3619853157
categories:
  - Fedora
tags:
  - Ask Fedora Project
  - ASUS
  - fedora
  - Linux
  - Synaptics
  - telegram
  - yum install synaptics
  - 觸控板
  - 驅動程式
---
<div class="pf-content">
  <p>
    <code>sudo yum install synaptics -y && sudo reboot</code>
  </p>

  <p>
    老實說這篇文章沒什麼好寫的XD 上面的指令敲下去就解決了一切問題，但總覺得還是應該寫一些什麼，所以就來認真一下我自己發生問題的始末吧～
  </p>

  <p>
    <!--more-->
  </p>

  <h3>
    系統相關資訊
  </h3>

  <ul>
    <li>
      系統：Fedora 21
    </li>
    <li>
      電腦型號：ASUS A45VM
    </li>
    <li>
      觸控板品牌：Synaptics
    </li>
    <li>
      其他：略 （因為不重要
    </li>
  </ul>

  <h3>
    發現問題
  </h3>

  <p>
    其實我平常的時候，因為覺得打字時手碰到觸控版導致游標會跑來跑去，所以觸控版一直都是關閉的狀態，後來在fedora 設定的「滑鼠和觸控版」的選項中，發現了「打字時停用」的選項，所以就開開心心的把觸控版打開，結果…
  </p>

  <p>
    <a class="lightbox" href="/wp-content/uploads/2015/03/2015-03-23-232726-的螢幕擷圖.png"><img class="alignnone size-full wp-image-289" src="/wp-content/uploads/2015/03/2015-03-23-232726-的螢幕擷圖.png" alt="打字時停用觸控板" width="734" height="339" srcset="/wp-content/uploads/2015/03/2015-03-23-232726-的螢幕擷圖-300x139.png 300w, /wp-content/uploads/2015/03/2015-03-23-232726-的螢幕擷圖.png 734w" sizes="(max-width: 734px) 100vw, 734px" /></a>
  </p>

  <p>
    咦？？？？？？？不管我按 fn + f9 （切換觸控版開關的組合鍵）多少次怎麼只給我出現這個圖示（下圖），那表情就好像在嘲笑我啊啊啊！！
  </p>

  <p>
    <a class="lightbox" href="/wp-content/uploads/2015/03/2015-03-23-233046-的螢幕擷圖.png"><img class="alignnone size-full wp-image-290" src="/wp-content/uploads/2015/03/2015-03-23-233046-的螢幕擷圖.png" alt="觸控版關閉中" width="172" height="171" /></a>
  </p>

  <p>
    不行！是可忍孰不可忍，立刻開 telegram 問那位拉我下坑的 WM 大大，結果得到的回應是…
  </p>

  <blockquote>
    <p>
      那請期待 Fedora 22
    </p>
  </blockquote>

  <p>
    結果我就只好乖乖接受了這個事實，就這樣落寞地過了幾天，他又回來了，觸控版又回來找我了～～～<br /> 可是不到一個禮拜他又掛掉了，這時候我就瘋狂地 google 找了一大堆的資訊，最後還是無功而返。
  </p>

  <p>
    &nbsp;
  </p>

  <h3>
    問題解決
  </h3>

  <p>
    嗯？你問我最後有找到嗎？當然有啊！不然怎麼會有這篇<del>廢話連篇的</del>文章產生呢？就在我瘋狂 google 之後的一個月左右，（算了一下大約是今天下午），我心血來潮想找找我的觸控板的型號，去 ASUS 官網找，嗯，產品規格沒寫，直接找他的驅動軟體，發現了一個關鍵字「Synaptics」，我又一個心有靈犀心電感應，在 google 搜尋列上打上了 <code>sudo yum install synaptics</code> 這段文字，噢！！！！發現了一篇文章（參考連結），看來可行！迅速的 Alt + Ctrl + T 把我的 Terminal 打開，輸入 <code>sudo yum install synaptics</code> ，找到了！！立刻確認安裝後重新啟動系統，歐耶！大功告成！
  </p>

  <p>
    &nbsp;
  </p>

  <h3>
    小結
  </h3>

  <p>
    一天又平安的度過了，感謝 Google 和 Ask Fedora Project 的努力。
  </p>

  <p>
    不是啦，拿現在的我和上一個月的我作比較，會發現自己其實有讀過/摸過很多東西，所以最後才會在關鍵時刻（？）輸入最關鍵的關鍵字，在一個月前我可能不會那麼反射性的在 google 搜尋 <code>sudo yum install synaptics</code> 這樣的字串，然而現在的我因為接觸 fedora 一段時間了，一些基本的東西也大致知道了，所以才能大事化小，小事化無。（這句用在這裡好像怪怪的），anyway，真心覺得 Linux 用越久，就越知道自己多不會用 Linux，接下來的日子裡，除了跟瀏覽器以及各式各樣的學校作業搏鬥，要更努力把 TLCL 讀完，增進內功～～～！
  </p>

  <h3>
    參考連結
  </h3>

  <ul>
    <li>
      <a title="I cannot use my touchpad in fedora18" href="https://ask.fedoraproject.org/en/question/25741/i-cannot-use-my-touchpad-in-fedora18/" target="_blank">ask.fedoraproject.org</a>
    </li>
    <li>
      <a title="synaptics" href="http://www.synaptics.com/tw/index.php" target="_blank">Synaptics</a>
    </li>
    <li>
      <a href="https://telegram.org/">Telegram</a>
    </li>
    <li>
      <a title="fedora" href="http://fedora.linux.org.tw/" target="_blank">fedora</a>
    </li>
    <li>
      <a title="這不重要…" href="https://tw.movies.yahoo.com/movieinfo_trailer.html/id=302" target="_blank">關鍵時刻</a>
    </li>
    <li>
      <a title="TLCL" href="http://linuxcommand.org/tlcl.php" target="_blank">TLCL</a>
    </li>
  </ul>

  <p>
    &nbsp;
  </p>
</div>
