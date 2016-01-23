---
id: 295
title: 我的 fedora 調校手冊
date: 2015-06-07T01:53:05+00:00
author: wildsky
layout: post
guid: https://wildsky.cc/?p=295
permalink: /tune-my-fedora/
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
  - 2
dsq_thread_id:
  - 3826835775
categories:
  - Fedora
  - Linux
tags:
  - atom
  - brackets
  - bumblebee
  - chrome
  - codeblocks
  - dnf
  - dropbox
  - fcitx
  - fedora
  - filezilla
  - gimp
  - gnome
  - kolourpaint
  - Linux
  - nodejs
  - numix
  - onedrive
  - python
  - ruby
  - terminal
  - vim
  - vlc
  - 文泉驛
---
<div class="pf-content">
  <h2>
    前言
  </h2>
  
  <p>
    前陣子從 ubuntu 跳槽來 fedora，才發現原來 fedora 這麼不錯，結果就一去不復返了。fedora 這個作業系統有很多的優點，但這篇文章不是要來解說他和其他發行版的不同，而是要來提供一個清單，好讓這個作業系統更好用！也順便為未來重灌電腦的我列一個清單，避免自己漏裝了什麼程式。
  </p>
  
  <blockquote>
    <p>
      Fedora 是世界上最先進的開源作業系統！
    </p>
  </blockquote>
  
  <p>
    <!--more-->
  </p>
  
  <h2>
    開始動手！
  </h2>
  
  <p>
    先確認有沒有要升級的軟體
  </p>
  
  <p>
    <code>sudo dnf -y update</code>
  </p>
  
  <h5>
    記得先安裝 Gnome-Tweak-tool
  </h5>
  
  <p>
    <code>sudo dnf -y install gnome-tweak-tool&lt;br />
</code>
  </p>
  
  <h5>
    Terminal 背景透明化 & 彩繪 terminal 起始字串
  </h5>
  
  <p>
    <code>gedit ~/.bashrc</code>
  </p>
  
  <p>
    在跳出的視窗最後面加上下列程式碼：
  </p>
  
  <p>
    <code>#Terminal 透明 ＆ 彩繪 terminal 起始字串&lt;br />
if [ -n "$WINDOWID" ]; then&lt;br />
export PS1="\[\e[0;32m\][\[\e[0;31m\]\u\[\e[m\]@\[\e[m\e[0;34m\]\h\[\e[m \e[0;32m\]\W]\$ \[\e[m\]"&lt;br />
TRANSPARENCY_HEX=$(printf 0x%x $((0xffffffff * 98 / 100)))&lt;br />
xprop -id "$WINDOWID" -f _NET_WM_WINDOW_OPACITY 32c -set _NET_WM_WINDOW_OPACITY "$TRANSPARENCY_HEX"&lt;br />
fi</code>
  </p>
  
  <h5>
    安裝字體
  </h5>
  
  <p>
    <code>sudo dnf -y install wqy*</code>
  </p>
  
  <p>
    記得去 tweak 調整哦！
  </p>
  
  <hr />
  
  <h3>
    值得一裝的 gnome-add-on
  </h3>
  
  <ul>
    <li>
      Activities configurator
    </li>
    <li>
      Alternatetab
    </li>
    <li>
      Gpaste Integration
    </li>
    <li>
      Input method Panel
    </li>
    <li>
      Maximus-Two （Fedora 22 似乎不支援這個了…不過 Firefox 上有一個做 H Title 的擴充元件可以讓 Firefox 達到這個效果。）
    </li>
    <li>
      Topicons
    </li>
  </ul>
  
  <hr />
  
  <h3>
    安裝日常生活所需的應用程式
  </h3>
  
  <h4>
    Adobe-Acrobat-pdf-Reader
  </h4>
  
  <p>
    可以直接參考 <a href="http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/">這篇文章</a>
  </p>
  
  <p>
    （但其實我覺得內建的文件檢視器就很好用哩！
  </p>
  
  <h4>
    Android Studio
  </h4>
  
  <p class="post-title entry-title">
    請參考這一篇文章，我覺得他寫得很棒！<br /> <a href="http://twaibook.blogspot.tw/2015/06/fedora22android-studio.html">在 Fedora22 上安裝 Android Studio</a>
  </p>
  
  <h4>
    Atom
  </h4>
  
  <p>
    直接前往 <a href="https://atom.io/" target="_blank">https://atom.io/</a> 下載 .rpm 檔，然後再回來 <code>sudo dnf install -y atom_x86_64.rpm</code> 就好囉！
  </p>
  
  <h4>
    Brackets
  </h4>
  
  <p>
    <code>sudo dnf install dnf-plugins-core -y</code><br /> <code>sudo dnf copr enable jgillich/brackets</code><br /> <code>sudo dnf install brackets -y</code>
  </p>
  
  <h4>
    Chrome
  </h4>
  
  <p>
    Chrome 也有提供 .rpm 安裝包～<br /> <code>sudo dnf install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm -y</code>
  </p>
  
  <h4>
    Dropbox
  </h4>
  
  <p>
    <code>sudo gedit /etc/yum.repos.d/dropbox.repo</code>
  </p>
  
  <p>
    在跳出的視窗加入下列程式碼
  </p>
  
  <p>
    <code>[Dropbox]&lt;br />
name=Dropbox Repository&lt;br />
baseurl=http://linux.dropbox.com/fedora/21/&lt;br />
gpgkey=http://linux.dropbox.com/fedora/rpm-public-key.asc&lt;br />
</code>
  </p>
  
  <p>
    儲存退出後，再輸入 <code>sudo dnf -y install nautilus-dropbox</code> 就好囉！剩下的就是圖形界面的事情了～
  </p>
  
  <h4>
    Evernote Web
  </h4>
  
  <p>
    沒什麼好說的，就按安裝吧！<br /> <a href="https://marketplace.firefox.com/app/evernote-web">https://marketplace.firefox.com/app/evernote-web</a>
  </p>
  
  <h4>
    Filezilla
  </h4>
  
  <p>
    <code>sudo dnf install filezilla -y</code>
  </p>
  
  <h4>
    Gimp
  </h4>
  
  <p>
    <code>sudo dnf install -y gimp</code>
  </p>
  
  <h4>
    Gnome-paint
  </h4>
  
  <p>
    <code>sudo dnf install https://launchpadlibrarian.net/61492961/gnome-paint-0.4.0-0.x86_64.rpm -y&lt;br />
</code>
  </p>
  
  <h4>
    Onedrive-d
  </h4>
  
  <p>
    有在使用 Onedrice 的人可以參考這篇文章： <a href="http://xmodulo.com/sync-microsoft-onedrive-linux.html">http://xmodulo.com/sync-microsoft-onedrive-linux.html</a>
  </p>
  
  <h4>
    Telegram Web
  </h4>
  
  <p>
    跟 Evernote-web 一樣：<a href="https://marketplace.firefox.com/app/telegram" target="_blank">https://marketplace.firefox.com/app/telegram</a>
  </p>
  
  <h4>
    Vim
  </h4>
  
  <p>
    <code>sudo dnf -y install vim</code>
  </p>
  
  <h4>
    vlc
  </h4>
  
  <p>
    <code>sudo rpm -ivh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm</code><br /> <code>sudo dnf -y install vlc mozilla-vlc</code>
  </p>
  
  <hr />
  
  <h3>
    解決系統問題
  </h3>
  
  <h4>
    顯示卡問題：安裝 Bumblebee
  </h4>
  
  <p>
    Fedora 22 只須安裝 bumblebee 然後再更新系統就好，不用也不要安裝 bumblebee-nvidia，不然會發生問題！（無法登入之類的，但偶爾又會成功，可以多試幾次…）
  </p>
  
  <p>
    參考 <a href="https://fedoraproject.org/wiki/Bumblebee" target="_blank">https://fedoraproject.org/wiki/Bumblebee</a> ，過程很複雜，請加油。
  </p>
  
  <h4>
    輸入法調整：安裝 fcitx
  </h4>
  
  <p>
    在我最近一次的重灌後，發現輸入法似乎改進了不少，所以這一步目前是可做可不做。
  </p>
  
  <p>
    <code>sudo dnf install fcitx fcitx-table-chinese fcitx-configtool fcitx-qt4 fcitx-chewing im-chooser && gsettings set org.gnome.settings-daemon.plugins.keyboard active false && sudo vim /etc/profile</code>
  </p>
  
  <p>
    在跳出的視窗加入
  </p>
  
  <p>
    <code>export GTK_IM_MODULE=fcitx&lt;br />
export QT_IM_MODULE=fcitx&lt;br />
export XMODIFIERS="@im=fcitx"</code>
  </p>
  
  <p>
    最後用 im-chooser 來選擇 fcitx
  </p>
  
  <hr />
  
  <h3>
    安裝開發工具
  </h3>
  
  <h4>
    Node.js
  </h4>
  
  <p>
    <code>sudo dnf install nodejs npm -y</code>
  </p>
  
  <h4>
    Python3
  </h4>
  
  <p>
    <code>sudo dnf install python3 -y</code>
  </p>
  
  <h4>
    Ruby & Ruby-gem
  </h4>
  
  <p>
    <code>sudo dnf -y install ruby ruby-devel rubygems</code><br /> <code>sudo gem install github-pages --no-ri --no-rdoc #這個是因為我要用到 jekyll，不需要的人不用安裝</code>
  </p>
  
  <h4>
    Codeblocks
  </h4>
  
  <p>
    <code>sudo dnf -y install codeblocks</code>
  </p>
  
  <h4>
    MonoDevelop
  </h4>
  
  <p>
    請參考這一篇文章<br /> <a href="http://curtis.schlak.com/2014/02/04/setup-asp-net-mvc-4-on-monodevelop-4.2.html">Setup ASP.NET MVC 5 on MonoDevelop 4.2</a>
  </p>
  
  <h2>
    尾聲
  </h2>
  
  <p>
    做完了上面那些調校後，可以到 <a href="http://fedora.linux.org.tw">fedora 台灣社群的網站</a> 看看。此外，如果想幫忙提供意見或是尋求協助，也歡迎加入 <a href="https://www.facebook.com/groups/fedora.chinesegroup">fedora facebook 社團</a>！希望各位在 fedora 的世界裡遇到的困難都可以找到解法！
  </p>
  
  <h2>
    參考
  </h2>
  
  <ul>
    <li>
      <a href="http://lihomo.blogspot.tw/2014/06/linuxfedora-fedora-20-fcitx.html" target="_blank">http://lihomo.blogspot.tw/2014/06/linuxfedora-fedora-20-fcitx.html</a>
    </li>
    <li>
      <a href="http://www.attabot.org/featured/after-installing-fedora-21-post-installation/" target="_blank">http://www.attabot.org/featured/after-installing-fedora-21-post-installation/</a>
    </li>
    <li>
      <a href="https://github.com/jgillich/brackets-rpm" target="_blank">https://github.com/jgillich/brackets-rpm</a>
    </li>
    <li>
      <a href="http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/" target="_blank">http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/</a>
    </li>
    <li>
      <a href="http://xmodulo.com/sync-microsoft-onedrive-linux.html" target="_blank">http://xmodulo.com/sync-microsoft-onedrive-linux.html</a>
    </li>
    <li>
      <a href="https://fedoraproject.org/wiki/Bumblebee" target="_blank">https://fedoraproject.org/wiki/Bumblebee</a>
    </li>
    <li>
      <a href="https://satya164.github.io/fedy/" target="_blank">https://satya164.github.io/fedy/</a>
    </li>
    <li>
      <a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">https://www.google.com/chrome/browser/desktop/index.html</a>
    </li>
  </ul>
</div>