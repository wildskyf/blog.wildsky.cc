---
title: Fedora 調校
date: 2015-10-06T22:23:25+00:00
author: wildsky
---


> Fedora 是世界上最先進的開源作業系統！


## 開始動手！

先讓找尋 mirror 的速度提升（不過社群中有人說，回應最快的不見得速度最快，你可以自己斟酌。）

`sudo echo 'fastestmirror=true' >> /etc/dnf/dnf.conf`

接著確認有沒有要升級的軟體

`sudo dnf -y update`

### 先安裝 Gnome-Tweak-tool

`sudo dnf -y install gnome-tweak-tool`

### Terminal 背景透明化

背景透明化可以在選單列的 `編輯 > 設定檔偏好設定 > 顏色` 裡面做更改。

### 安裝字體

`sudo dnf -y install wqy*`

裝好後記得去 tweak 調整。

### Firefox 的外觀

<del>你可以參考一下這一篇文章</del>

<del><https://fedora-tw.org/t/firefox-gnome-3/33></del>

<del>然後可以安裝一下獨立出來的 tab groups 套件，很潮！</del>

<del><https://github.com/Quicksaver/Tab-Groups/releases></del>

Firefox 57 之後通通不能用囉XD

---

### 值得一裝的 gnome-add-on

- <a href="https://extensions.gnome.org/extension/358/activities-configurator/" target="_blank">Activities configurator</a>
- <a href="https://extensions.gnome.org/extension/15/alternatetab/" target="_blank">Alternatetab</a>
- Gpaste Integration `sudo dnf install gnome-shell-extension-gpaste -y`
- <a href="https://extensions.gnome.org/extension/302/windowoverlay-icons/" target="_blank">WindowOverlay Icons</a>
- Maximus-Two
  - Fedora 21 之後似乎停止支援了，不過 Firefox 上有一個叫做 [H Title](https://addons.mozilla.org/zh-tw/firefox/addon/htitle/) 的擴充元件可以讓 Firefox 達到這個效果。
  - 有人好像修好了，可以參考一下 <https://github.com/wilfm/GnomeExtensionMaximusTwo/pull/43>，大家都很疑惑為什麼作者不收這個 PR…
- 其他可以參考 <a href="http://fedora.linux.org.tw/tutorial/gnome/" target="_blank">http://fedora.linux.org.tw/tutorial/gnome/</a>

------

### 安裝日常生活所需的應用程式

#### LibreOffice 中文界面

LibreOffice 預設是英文界面，使用這個指令就可以讓他變中文的：

`sudo dnf install libreoffice-langpack-zh-Hant`

#### Android Studio

先下這條指令

`sudo dnf install compat-libstdc++-296.i686 compat-libstdc++-33.i686 compat-libstdc++-33.x86_64 ncurses-libs.i686`

然後參考這一篇文章，我覺得他寫得很棒！<br /> <a href="http://twaibook.blogspot.tw/2015/06/fedora22android-studio.html">在 Fedora22 上安裝 Android Studio</a>

#### Atom

直接前往 <a href="https://atom.io/" target="_blank">https://atom.io/</a> 下載 .rpm 檔，然後再回來下這條指令：

`sudo dnf install -y atom_x86_64.rpm`

之前有裝 Brackets，不過原本的 copr 不維護了，他叫大家去用 atom …XD

#### Chrome


Chrome 也有提供 .rpm 安裝包，還可以幫你把 repo 加入 <code>/etc/yum.repo.d/</code> 之下～覺得方便！

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

儲存退出後，再輸入 `sudo dnf -y install nautilus-dropbox` 就好囉！剩下的就是圖形界面的事情了～

#### Filezilla

`sudo dnf install filezilla -y`

不過自從 23 之後的 nautilus 支援 FTP 之後我就沒裝這個了～

#### Gimp

Linux 上的 PhotoShop ！

`sudo dnf install -y gimp`

#### Inkscape

`sudo install inkscape -y`

#### Mypaint

`sudo dnf install mypaint`

#### Onedrive-d

有在用 Onedrive 的人可以參考這篇文章： <a href="http://xmodulo.com/sync-microsoft-onedrive-linux.html">http://xmodulo.com/sync-microsoft-onedrive-linux.html</a>

不過微軟好像取消 15GB 的空間了… 有點悲劇…

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

我自己的話是安裝 bumblebee 然後再更新系統就好，安裝 bumblebee-nvidia 的話會發生問題！（無法登入之類的，但偶爾又會成功，可以多試幾次…）

參考 <https://fedoraproject.org/wiki/Bumblebee> ，過程很複雜，請加油。

#### 輸入法調整：安裝 fcitx

個人比較喜歡 fcitx 的感覺。

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

#### Git, Tig, GCC, G++

`sudo dnf install gcc gcc-c++ git tig -y`

#### Node.js

```
sudo dnf copr enable nibbler/nodejs
sudo dnf install nodejs npm -y
```

不過 6.0 好像有點怪怪的，個人建議先安裝 5.10 就好。

##### 安裝 surge

`sudo npm install surge -g`


#### Python3

`sudo dnf install python3 -y`

#### Ruby & Ruby-gem

```
sudo dnf -y install ruby ruby-devel rubygems
sudo gem install github-pages --no-ri --no-rdoc #這個是因為我要用到 jekyll，不需要的人不用安裝
sudo gem install bundle
```

##### 修正小問題

`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

細節可以參考 <https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers>

#### Codeblocks

`sudo dnf -y install codeblocks`

#### MonoDevelop

`sudo dnf install monodevelop mono-* -y #因為我懶得看哪些要裝哪些不裝，所以就全部一起裝XD`

### 其他套件庫

最常用的 RPM Fusion:

```
sudo dnf install http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-stable.noarch.rpm
sudo dnf install http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-stable.noarch.rpm
```

### 其他設定

讓家目錄下的資料夾使用英文名稱，以方便使用 Terminal 時切換。

可以參考他的方法：<a href="http://rushbuntu.blogspot.tw/2011/06/fedora-15gnome-3.html" target="_blank">http://rushbuntu.blogspot.tw/2011/06/fedora-15gnome-3.html</a>

## 尾聲

做完了上面那些調校後，可以到 [Fedora 台灣社群的網站](http://fedora.linux.org.tw) 看看。
此外，如果想幫忙提供意見或是尋求協助，也歡迎加入 [Fedora Facebook 社團](https://www.facebook.com/groups/fedora.chinesegroup)！

希望各位在 fedora 的世界裡遇到的困難都可以找到解法！最近還新開了個論壇 <http://fedora-tw.org/>，可以去尋寶！
有興趣也可以來 [Fedora Telegram 群組](https://telegram.me/joinchat/BGbpBwIdS8gSkbxan-Lvmw)，有問題大家都可以即時討論！

## 參考

- <http://lihomo.blogspot.tw/2014/06/linuxfedora-fedora-20-fcitx.html>
- <http://www.attabot.org/featured/after-installing-fedora-21-post-installation/>
- <https://github.com/jgillich/brackets-rpm>
- <http://www.if-not-true-then-false.com/2010/install-adobe-acrobat-pdf-reader-on-fedora-centos-red-hat-rhel/>
- <http://xmodulo.com/sync-microsoft-onedrive-linux.html>
- <https://fedoraproject.org/wiki/Bumblebee>
- <https://satya164.github.io/fedy/>
- <https://www.google.com/chrome/browser/desktop/index.html>
