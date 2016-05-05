---
id: 740
title: Fedora 調校
date: 2015-10-06T22:23:25+00:00
author: wildsky
layout: page
guid: https://wildsky.cc/?page_id=740
dsq_thread_id:
  -
---


> Fedora 是世界上最先進的開源作業系統！


## 開始動手！

先讓找尋 mirror 的速度提升！

`sudo gedit /etc/dnf/dnf.conf`

在最下面加上 `fastestmirror=true`

接著確認有沒有要升級的軟體

`sudo dnf -y update`

#### 先安裝 Gnome-Tweak-tool

`sudo dnf -y install gnome-tweak-tool`

#### Terminal 背景透明化

背景透明化可以在選單列的 編輯 > 設定檔偏好設定 裡面做更改。

#### 安裝字體

`sudo dnf -y install wqy*`

裝好後記得去 tweak 調整。

#### Firefox 的外觀

你可以參考一下這一篇文章

<https://fedora-tw.org/t/firefox-gnome-3/33>

<hr />

### 值得一裝的 gnome-add-on

- <a href="https://extensions.gnome.org/extension/358/activities-configurator/" target="_blank">Activities configurator</a>
- <a href="https://extensions.gnome.org/extension/15/alternatetab/" target="_blank">Alternatetab</a>
- Gpaste Integration `sudo dnf install gnome-shell-extension-gpaste -y`
- Maximus-Two<br /> Fedora 21 之後似乎不支援了… 但 Firefox 上有一個 <a href="https://addons.mozilla.org/zh-tw/firefox/addon/htitle/" target="_blank">H Title</a> 的擴充元件可以讓 Firefox 達到這個效果。
- <a href="https://extensions.gnome.org/extension/302/windowoverlay-icons/" target="_blank">WindowOverlay Icons</a>

其他可以參考 <a href="http://fedora.linux.org.tw/tutorial/gnome/" target="_blank">http://fedora.linux.org.tw/tutorial/gnome/</a>

------

### 安裝日常生活所需的應用程式

#### Android Studio

先下這條指令

`sudo dnf install compat-libstdc++-296.i686 compat-libstdc++-33.i686 compat-libstdc++-33.x86_64 ncurses-libs.i686`

然後參考這一篇文章，我覺得他寫得很棒！<br /> <a href="http://twaibook.blogspot.tw/2015/06/fedora22android-studio.html">在 Fedora22 上安裝 Android Studio</a>

#### Atom

直接前往 <a href="https://atom.io/" target="_blank">https://atom.io/</a> 下載 .rpm 檔，然後再回來下這條指令：

`sudo dnf install -y atom_x86_64.rpm`

#### Brackets

```
sudo dnf install dnf-plugins-core -y
sudo dnf copr enable jgillich/brackets
sudo dnf install brackets -y
```

#### Chrome


Chrome 也有提供 .rpm 安裝包，還可以幫你把 repo 加入 <code>/etc/yum.repo.d/</code> 之下～


`sudo dnf install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm -y`

#### Dropbox

`sudo gedit /etc/yum.repos.d/dropbox.repo`

在跳出的視窗加入下列程式碼

```
[Dropbox]
name=Dropbox Repository
baseurl=http://linux.dropbox.com/fedora/22/
gpgkey=http://linux.dropbox.com/fedora/rpm-public-key.asc
```

儲存退出後，再輸入 <code>sudo dnf -y install nautilus-dropbox</code> 就好囉！剩下的就是圖形界面的事情了～

#### Evernote Web

沒什麼好說的，就按安裝吧！<br /> <a href="https://marketplace.firefox.com/app/evernote-web">https://marketplace.firefox.com/app/evernote-web</a>

#### Filezilla

`sudo dnf install filezilla -y`

不過自從 23 之後的 nautilus 支援 FTP 之後我就沒在裝這個了～

#### Gimp

Linux 上的 PhotoShop ！

`sudo dnf install -y gimp`

#### Gnome-paint

```
sudo dnf install https://launchpadlibrarian.net/61492961/gnome-paint-0.4.0-0.x86_64.rpm -y
```

但目前他好像掛掉了，在 Fedora 23 上開不起來，可以試試 mypaint:

`sudo dnf install mypaint`

#### Onedrive-d

有在用 Onedrice 的人可以參考這篇文章： <a href="http://xmodulo.com/sync-microsoft-onedrive-linux.html">http://xmodulo.com/sync-microsoft-onedrive-linux.html</a>

#### Telegram Web

跟 Evernote-web 一樣：<a href="https://marketplace.firefox.com/app/telegram" target="_blank">https://marketplace.firefox.com/app/telegram</a>

#### Vim

編輯器之神！

`sudo dnf -y install vim`

#### vlc

```
sudo rpm -ivh http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm
sudo dnf -y install vlc gstreamer-plugins-bad gstreamer-plugins-bad-free-extras gstreamer-plugins-ugly gstreamer-ffmpeg mozilla-vlc gstreamer1-libav gstreamer1-plugins-bad-free-extras gstreamer1-plugins-bad-freeworld gstreamer1-plugins-base-tools gstreamer1-plugins-good-extras gstreamer1-plugins-ugly gstreamer1-plugins-bad-free gstreamer1-plugins-good gstreamer1-plugins-base gstreamer1
```

----

### 解決系統問題

#### 顯示卡問題：安裝 Bumblebee

Fedora 22 只須安裝 bumblebee 然後再更新系統就好，不用也不要安裝 bumblebee-nvidia，不然會發生問題！（無法登入之類的，但偶爾又會成功，可以多試幾次…）

參考 <a href="https://fedoraproject.org/wiki/Bumblebee" target="_blank">https://fedoraproject.org/wiki/Bumblebee</a> ，過程很複雜，請加油。

#### 輸入法調整：安裝 fcitx

在我最近一次的重灌後，發現輸入法似乎改進了不少，所以這一步目前是可做可不做。

```
sudo dnf install fcitx fcitx-table-chinese fcitx-configtool fcitx-qt4 fcitx-chewing im-chooser && gsettings set org.gnome.settings-daemon.plugins.keyboard active false && sudo gedit /etc/profile
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
sudo gem install github-pages --no-ri --no-rdoc #這個是因為我要用到 jekyll，不需要的人不用安裝
```

#### Codeblocks

`sudo dnf -y install codeblocks`

#### MonoDevelop

`sudo dnf install monodevelop mono-* -y #因為我懶得看哪些要裝哪些不裝，所以就全部一起裝XD`

### 其他套件庫

最常用的 RPM Fusion:

```
sudo dnf install  http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install  http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

### 其他設定

讓家目錄下的資料夾使用英文名稱，以方便使用 Terminal 時切換。

可以參考他的方法：<a href="http://rushbuntu.blogspot.tw/2011/06/fedora-15gnome-3.html" target="_blank">http://rushbuntu.blogspot.tw/2011/06/fedora-15gnome-3.html</a>

## 尾聲

做完了上面那些調校後，可以到 <a href="http://fedora.linux.org.tw">fedora 台灣社群的網站</a> 看看。此外，如果想幫忙提供意見或是尋求協助，也歡迎加入 <a href="https://www.facebook.com/groups/fedora.chinesegroup">fedora facebook 社團</a>！希望各位在 fedora 的世界裡遇到的困難都可以找到解法！最近還新開了個論壇 <a href="http://fedora-tw.org/" target="_blank">http://fedora-tw.org/</a>，可以去尋寶！有興趣也可以來 <a href="https://telegram.me/joinchat/BGbpBwIdS8gSkbxan-Lvmw" target="_blank">Fedora Telegram 群組</a>，有問題大家都可以即時討論！

## 參考

- <http://lihomo.blogspot.tw/2014/06/linuxfedora-fedora-20-fcitx.html>
- <http://www.attabot.org/featured/after-installing-fedora-21-post-installation/>
- <https://github.com/jgillich/brackets-rpm>
- <http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/>
- <http://xmodulo.com/sync-microsoft-onedrive-linux.html>
- <https://fedoraproject.org/wiki/Bumblebee>
- <https://satya164.github.io/fedy/>
- <https://www.google.com/chrome/browser/desktop/index.html>
