---
id: 721
title: Fedora 安裝資料庫系統 (MariaDB、MongoDB、Radis)
date: 2015-09-06T23:51:36+00:00
author: wildsky
layout: post
guid: https://wildsky.cc/?p=721
permalink: /fedora-database/
dsq_thread_id:
  - 4103429541
categories:
  - Fedora
  - Linux
  - 'web &amp; site'
tags:
  - fedora
  - Linux
  - mariadb
  - mongodb
  - mysqldb
  - redis
---
<div class="pf-content">
  <h2>
    前言
  </h2>

  <p>
    因為實習有用到，所以我就要安裝一下這三個資料庫，可是暑假都到尾聲了，為什麼現在才來安裝哩？其實我之前早就安裝好了，只是因為太忙而沒空寫，那位什麼現在寫呢？因為我前兩天電腦怪怪的，剛重灌就順便補一下這篇文章啦！
  </p>

  <p>
    言歸正傳，這三個資料庫各有優缺點，但我還沒有辦法很完整地分析，所以這篇文章的重點就只在「安裝」還有「首次使用」這兩個地方啦！不過其實如果英文不錯的人也可以找到英文版的安裝教學，即使現在 Fedora 出到 22 版了，但其實 21 的安裝方式也都還試用，我寫這篇文章其實跟我寫 <a href="/2015/06/07/tune-my-fedora.html">我的 fedora 調校手冊</a> 是一樣的用意——純粹就是替我自己做一個記錄而已～
  </p>

  <p>
    <!--more-->
  </p>

  <h2>
    正文
  </h2>

  <h3>
    安裝
  </h3>

  <p>
    其實只要一行程式碼就可以做完安裝的步驟了XD 指令如下：
  </p>

  <p>
    <code>sudo dnf install -y mariadb mariadb-server mongodb mongodb-server redis</code>
  </p>

  <p>
    這樣安裝就完工啦！非常地輕鬆寫意，要讓這幾個 Database 開啟，只要分別輸入下面三個指令就好囉！
  </p>

  <ul>
    <li>
      <code>sudo service start redis</code>
    </li>
    <li>
      <code>sudo service start mariadb</code>
    </li>
    <li>
      <code>sudo service start mongodb</code>
    </li>
  </ul>

  <h3>
    首次使用
  </h3>

  <p>
    安裝完後其實還需要一些簡單的步驟才可以開開心心地使用。
  </p>

  <h4>
    MariaDB / MySqlDB
  </h4>

  <p>
    MariaDB 和 MySQLDB 的初始設定好像都是直接下 <code>sudo mysql_secure_installation</code> ，它就會帶你走完流程：
  </p>

  <ol>
    <li>
      進入後，root 應該是沒有密碼的狀態，所以直接按 <code>enter</code> 就好
    </li>
    <li>
      然後會問你 <code>Set root password? [Y/n]</code>，輸入 <code>Y</code> 然後 <code>enter</code>
    </li>
    <li>
      然後它會要你輸入你想要的新密碼，輸入完按 <code>enter</code>
    </li>
    <li>
      再輸入一次做確認，然後 <code>enter</code>
    </li>
    <li>
      接著就是：<br /> <code>Remove anonymous users? [Y/n] Y&lt;br />
Disallow root login remotely? [Y/n] Y&lt;br />
Remove test database and access to it? [Y/n] Y&lt;br />
Reload privilege tables now? [Y/n] Y</code><br /> 由上而下，分別是「移除匿名使用者」、「禁止 root 遠端登入」、「移除 test 資料庫」、「重新讀取 privilege 資料表」。
    </li>
    <li>
      這些都做完後，輸入 <code>mysql -u root -p</code> 然後打密碼，這樣就進入 MariaDB 啦！
    </li>
  </ol>

  <p>
    如果覺得文字界面用得很不順手的話，可以安裝 phpMyAdmin，<del>雖然我覺得界面不好看</del>，至少可以省去不少時間！安裝指令如下：
  </p>

  <p>
    <code>sudo dnf -y install phpMyAdmin php-mysql php-mcrypt</code>
  </p>

  <p>
    安裝完後輸入 <code>sudo service restart httpd</code> 然後用瀏覽器開 <a href="http://localhost/phpmyadmin">http://localhost/phpmyadmin</a> 應該就會看到眼熟的 phpMyAdmin 字樣了！
  </p>

  <h4>
    Mongo & Redis
  </h4>

  <p>
    咦？剛剛發現，Mongo 好像一安裝完就可以直接用哩XD 所以就不講它啦哈哈哈哈哈哈哈哈哈。
  </p>

  <p>
    至於 redis 我好像沒什麼用到，聽說很多人拿它當作 cache 用，但我還沒學到那招，所以這邊也不寫了～～
  </p>

  <p>
    （這樣好像有點偷懶XDD）
  </p>

  <h2>
    參考資料
  </h2>

  <ul>
    <li>
      <a href="https://fedoraproject.org/wiki/MariaDB">https://fedoraproject.org/wiki/MariaDB</a>
    </li>
    <li>
      <a href="http://bug-note.blogspot.tw/2011/10/fedoraphpmyadmin.html">如何使用fedora內建的phpmyadmin</a>
    </li>
  </ul>
</div>
