---
title: "嘗試使用 Game Porting Toolit 玩 RO （但失敗）的簡單記錄"
date: 2023-06-27T14:19:34+08:00
slug: "try-game-porting-toolkit-to-play-ragnarok-online-but-failed"
excerpt: "這邊文章是想簡單地記錄一下這次的嘗試，雖然結果是以失敗告終，但也許某天會再需要，也希望有機會幫助到對這個議題有興趣的人。"
feature_image: "ro-on-mac-failed.jpeg"
guid: "try-game-porting-toolkit-to-play-ragnarok-online-but-failed"
---

先說，這個嘗試的結果是失敗的。會寫這篇文章只是不想要讓努力嘗試的這一晚化為烏有，什麼都沒留下XD

其實會開始這個嘗試也只是因為看到這部 YouTube 影片：

<iframe
  width="750"
  height="200"
  src="https://www.youtube-nocookie.com/embed/pTanz71b8lM"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

快速瀏覽後想說好像也不是很困難，便跟著跑一輪。下面就來簡易記錄我做了什麼。

首先就是看到說要升級 macOS Sonoma (Beta)，但因為下載要一點時間，我想說，不然先試試看，不能跑再來升。

所以就直接去 [Apple Developer Downloads site](https://developer.apple.com/download/all/) 下載
`Game porting toolkit beta` 和 `Command Line Tools for Xcode 15 beta` 這兩個 dmg 檔，正常地跑安裝後就開 Terminal 輸入以下指令。

```
softwareupdate --install-rosetta
arch -x86_64 zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

這邊因為我電腦是 M1 Chip，所以之前已經安裝的 Homebrew 不能用（arm 下 homebrew
的安裝路徑會在 `/opt/` 之下而不是教學 wiki 中預期的 `/usr/local/`）

反正搞了一些烏龍後，我便在 ~/.zshrc 下加了一行 alias：

```zsh
alias brew86='arch -x86_64 /usr/local/bin/brew'
```

這樣之後只要用 brew86 就是使用教學 wiki 中預期的 `brew`，同時也不會影響我原本的 `brew` 指令。

後面就繼續按照教學下指令。

```
brew86 tap apple/apple http://github.com/apple/homebrew-apple
brew86 -v install apple/apple/game-porting-toolkit
ditto /Volumes/Game\ Porting\ Toolkit-1.0/lib/ `brew86 --prefix game-porting-toolkit`/lib/
```

中間那個指令會跑比較久，影片是說要 40 分鐘，我沒特別記，反正他跑他的，我去做別的事。

下一步，教學中的 path 和我的不太一樣，這邊兩個都列出來。

```
# 教學中的
cp /Volumes/Game\ Porting\ Toolkit*/gameportingtoolkit* /usr/local/bin

# 我實際上的路徑多了版本號
cp /Volumes/Game\ Porting\ Toolkit-1.0/gameportingtoolkit* /usr/local/bin
```

再來就是要 initial wine 的指令了

```
WINEPREFIX=~/wine `brew86 --prefix game-porting-toolkit`/bin/wine64 winecfg
```

`WINEPREFIX` 可以自行設定，我這邊是設定為 `~/wine`，比較好找。

下完指令會跳出一個視窗，其他不用動，只要改下面的下拉選單，把他從 win7 變 win10 就好，改完後按 OK。

再來就是去 Gnjoy 上下載 RO 主程式了：[下載專區 - RO仙境傳說Online](https://ro.gnjoy.com.tw/download/program_download.aspx)

下載下來應該會是一個 exe 檔，這邊就稍微調整 wiki 中的指令：

```
gameportingtoolkit ~/wine ~/Downloads/RAGNAROK_20220322.exe
```

就像是在 windows 上跑安裝一樣，中間也會要求安裝一些相依套件，就一樣給他裝一裝。

安裝完後，最後就是下指令把 RO 打開：

```
arch -x86_64 gameportingtoolkit-no-hud ~/wine 'C:\Program Files (x86)\Gravity\RagnarokOnline\Ragnarok.exe'
```

然後就會像本文的附圖那樣，中間跳出熟悉的小視窗，但⋯⋯ 是全白的。

看討論好像是因為現在 RO 有 anti-cheat 的 cd (Cheat Defender) 程式，而目前有使用這個的遊戲都沒辦法用
game porting toolkit 跑，所以⋯⋯ 很遺憾地 **Mission Failed**。

大概是這樣。最後還有升級到 macOS Sonoma (Beta) 確保不是版本問題，結果也是一樣的結果。XD

最後就附一些有用到的連結：

- [Apple Developer Downloads site](https://developer.apple.com/download/all/)
- [Macbook終於可以完美運行暗黑4！(附教程) feat. macOS Sonoma｜大耳朵TV](https://youtu.be/pTanz71b8lM)
- [Game Porting Toolkit | AppleGamingWiki](https://www.applegamingwiki.com/wiki/Game_Porting_Toolkit#Battle.net)
- [巴哈中在 Mac 上玩 RO 的討論串](https://forum.gamer.com.tw/Co.php?bsn=4212&sn=2892385)
- [RO 官方將 nProtect 改為 Cheat Defender 的公告](https://ro.gnjoy.com.tw/notice/notice_view.aspx?id=1721)
