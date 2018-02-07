---
title: 讓 cairo-dock 不會再開機自行啟動
date: 2014-01-18T00:00:00+08:00
categories:
  - Linux
tags:
  - Ubuntu
---

很多人會安裝 cairo-dock

為求方便 就會讓他可以開機自行啟動

可是當到了要拋棄他的時候

又會不知道怎麼將他停止

直接將他移除又會怕說以後又會想重拾舊愛

辛辛苦苦弄出來的自定義主題設定都會化做一江春水向東流

只能不理他

造成每次開機後還要再將他關閉的困擾

今天就來記一下讓他停止的方法

---


- `Alt + Ctrl + T`

輸入下列指令

> /usr/bin/gnome-session-properties

然後將cairo-dock取消勾選

按關閉後就會自行生效

重開機以後 他就不會自行啟動了！

資料來源

- <http://zhidao.baidu.com/question/572862892.html>