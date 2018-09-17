---
title: 我的 fedora 調校手冊
date: 2015-06-07T00:00:00+08:00
categories:
  - Linux
tags:
  - Fedora
  - ubuntu
---

> 更新：可以直接前往獨立出來的文章，算是我最終版的調校文章吧： [Fedora](/fedora)

## 前言

前陣子從 ubuntu 跳槽來 fedora，才發現原來 fedora 這麼不錯，結果就一去不復返了。fedora 這個作業系統有很多的優點，但這篇文章不是要來解說他和其他發行版的不同，而是要來提供一個清單，好讓這個作業系統更好用！也順便為未來重灌電腦的我列一個清單，避免自己漏裝了什麼程式。

> Fedora 是世界上最先進的開源作業系統！

## 開始動手！

先確認有沒有要升級的軟體

`sudo dnf -y update`


#### 記得先安裝 Gnome-Tweak-tool

`sudo dnf -y install gnome-tweak-tool`

#### Terminal 背景透明化 & 彩繪 terminal 起始字串

`gedit ~/.bashrc`

在跳出的視窗最後面加上下列程式碼：

```bash
#Terminal 透明 ＆ 彩繪 terminal 起始字串
if [ -n "$WINDOWID" ]; then
export PS1="\[\e[0;32m\][\[\e[0;31m\]\u\[\e[m\]@\[\e[m\e[0;34m\]\h\[\e[m \e[0;32m\]\W]\$ \[\e[m\]"
TRANSPARENCY_HEX=$(printf 0x%x $((0xffffffff * 98 / 100)))
xprop -id "$WINDOWID" -f _NET_WM_WINDOW_OPACITY 32c -set _NET_WM_WINDOW_OPACITY "$TRANSPARENCY_HEX">
fi
```

#### 安裝字體

`sudo dnf -y install wqy*`

記得去 tweak 調整哦！

----

### 值得一裝的 gnome-add-on

- Activities configurator
- Alternatetab
- Gpaste Integration
- Input method Panel
- Maximus-Two （Fedora 22 似乎不支援這個了…不過 Firefox 上有一個做 H Title 的擴充元件可以讓 Firefox 達到這個效果。）
- Topicons

----

### 安裝日常生活所需的應用程式

#### Adobe-Acrobat-pdf-Reader

可以直接參考 [這篇文章](http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/)

（但其實我覺得內建的文件檢視器就很好用哩！

Android Studio

請參考這一篇文章，我覺得他寫得很棒！

[在 Fedora22 上安裝 Android Studio](http://twaibook.blogspot.tw/2015/06/fedora22android-studio.html)

#### Atom

直接前往 <a href="https://atom.io/" target="_blank">https://atom.io/</a> 下載 .rpm 檔，然後再回來 <code>sudo dnf install -y atom_x86_64.rpm</code> 就好囉！

#### Brackets

``` bash
sudo dnf install dnf-plugins-core -y
sudo dnf copr enable jgillich/brackets
sudo dnf install brackets -y
```

#### Chrome

Chrome 也有提供 .rpm 安裝包～

`sudo dnf install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm -y`

#### Dropbox

`sudo gedit /etc/yum.repos.d/dropbox.repo`

在跳出的視窗加入下列程式碼

```
[Dropbox]
name=Dropbox Repository
baseurl=http://linux.dropbox.com/fedora/21/
gpgkey=http://linux.dropbox.com/fedora/rpm-public-key.asc
```

儲存退出後，再輸入 `sudo dnf -y install nautilus-dropbox` 就好囉！剩下的就是圖形界面的事情了～

#### Evernote Web

沒什麼好說的，就按安裝吧！
<https://marketplace.firefox.com/app/evernote-web>

#### Filezilla

`sudo dnf install filezilla -y`

#### Gimp

`sudo dnf install -y gimp`

#### Gnome-paint

`sudo dnf install https://launchpadlibrarian.net/61492961/gnome-paint-0.4.0-0.x86_64.rpm -y`

#### Onedrive-d

有在使用 Onedrice 的人可以參考這篇文章： <http://xmodulo.com/sync-microsoft-onedrive-linux.html>

#### Telegram Web

跟 Evernote-web 一樣：https://marketplace.firefox.com/app/telegram

不過後來我直接把他的網頁版釘選在 Firefox 上了，所以就沒在繼續裝這個了～

#### Vim

`sudo dnf -y install vim`

#### vlc

```
sudo rpm -ivh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm
sudo dnf -y install vlc mozilla-vlc
```

----

### 解決系統問題

#### 顯示卡問題：安裝 Bumblebee


Fedora 22 只須安裝 bumblebee 然後再更新系統就好，不用也不要安裝 bumblebee-nvidia，不然會發生問題！（無法登入之類的，但偶爾又會成功，可以多試幾次…）


參考 <https://fedoraproject.org/wiki/Bumblebee> ，過程很複雜，請加油。

#### 輸入法調整：安裝 fcitx

在我最近一次的重灌後，發現輸入法似乎改進了不少，所以這一步目前是可做可不做。

```
sudo dnf install fcitx fcitx-table-chinese fcitx-configtool fcitx-qt4 fcitx-chewing im-chooser && gsettings set org.gnome.settings-daemon.plugins.keyboard active false && sudo vim /etc/profile
```

在跳出的視窗加入

```
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```

最後用 im-chooser 來選擇 fcitx

----

### 安裝開發工具

#### Node.js

`sudo dnf install nodejs npm -y`

#### Python3

`sudo dnf install python3 -y`

#### Ruby & Ruby-gem

```
sudo dnf -y install ruby ruby-devel rubygems
sudo gem install github-pages --no-ri --no-rdoc #這個是因為我會用到 github-pages，不需要的人不用安裝
```

#### Codeblocks

`sudo dnf -y install codeblocks`

#### MonoDevelop

請參考這一篇文章
<a href="http://curtis.schlak.com/2014/02/04/setup-asp-net-mvc-4-on-monodevelop-4.2.html">Setup ASP.NET MVC 5 on MonoDevelop 4.2</a>

## 尾聲

做完了上面那些調校後，可以到 <a href="http://fedora.linux.org.tw">fedora 台灣社群的網站</a> 看看。此外，如果想幫忙提供意見或是尋求協助，也歡迎加入 <a href="https://www.facebook.com/groups/fedora.chinesegroup">fedora facebook 社團</a>！希望各位在 fedora 的世界裡遇到的困難都可以找到解法！

## 參考

- <http://lihomo.blogspot.tw/2014/06/linuxfedora-fedora-20-fcitx.html>
- <http://www.attabot.org/featured/after-installing-fedora-21-post-installation/>
- <https://github.com/jgillich/brackets-rpm>
- <http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/>
- <http://xmodulo.com/sync-microsoft-onedrive-linux.html>
- <https://fedoraproject.org/wiki/Bumblebee>
- <https://satya164.github.io/fedy/>
- <https://www.google.com/chrome/browser/desktop/index.html>
