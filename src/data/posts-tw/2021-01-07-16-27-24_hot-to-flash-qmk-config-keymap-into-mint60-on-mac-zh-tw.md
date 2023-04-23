---
title: "如何在 Mac 上將 QMK Config Keymap 刷進 Mint60"
date: 2021-01-07T16:27:24
slug: "hot-to-flash-qmk-config-keymap-into-mint60-on-mac-zh-tw"
excerpt: "<p>前言 最近因為肩膀不太舒服，感覺就是上班太久（？），所以想從調整姿勢開始，便從 ErgoTaiwan 買了個 &#8230;</p>
"
feature_image: ergo-taiwan-mint60-2.jpg
guid: "https://blog.wildsky.cc/?p=1692"
---
前言
--

最近因為肩膀不太舒服，想從調整姿勢開始，便從 [ErgoTaiwan 買了個 Mint60](https://ergotaiwan.tw/product/mint60/) 分離式鍵盤來用。用的第一天覺得有些鍵位和 Mac 剛好相反，便想照著網路上的教學試著把他們互換，才發現好像沒什麼詳細的使用者端的教學，有些教學也會預期讀者已經預先預備好相關的知識，讀起來還是會有許多卡卡的地方，因此便決定要寫這篇文章，希望能幫助那些爬文爬了很久卻還是刷不成功的初學者們。

這邊就來開始把新的鍵位給刷進 Mint60 吧！

準備好 keymap
----------

到 [QMK Configurator](https://config.qmk.fm/#/mint60/LAYOUT) 上設定想要的鍵位後，compile 完成後把 keymap.json 和 firmware 都載下來。

該網站的詳細使用方式可以參考 ErgoTaiwan 的文章：

> [使用 QMK Configurator 設定 ErgoDash 鍵盤配置](https://ergotaiwan.tw/ergodash-qmk-configurator/)

![](/images/Screen-Shot-2021-01-07-at-10.43.45-1024x518.png)

先點右上角的 compile 鈕，再點下面兩個下載鈕（不是那個 full code 鈕唷）

到自己電腦上確定有一個 .json 檔和一個 .hex 檔後，就完成了 keymap 設定檔的準備了。

準備好環境
-----

如果還沒裝 brew 的話，請到 [homebrew 官網](https://brew.sh/index_zh-tw) 安裝，安裝完成後開啟 terminal 分別輸入下列指令：

    $ brew install qmk/qmk/qmk
    $ qmk setup # and y for all question
    $ brew tap homebrew/cask-drivers
    $ brew cask install qmk-toolbox

開始刷
---

1.  用 finder 進 `~/application` 資料夾開啟 `QMK Toolbox.app`，若遇到未驗證的開發者的警告，可以直接按右鍵開啟
2.  點擊最上面的 open 開啟稍早下載的 firmware 檔案(.hex 檔)
3.  確定 Mint60 已經接上電腦
4.  拿一根細的棒狀物戳一下 Mint60 背後的紅色按鈕，此時應該會看到下方 terminal 顯示已經接上了，類似這種訊息

    *** Caterina device connected
        Found port: /dev/cu.usbmodem143201

這時就可以按下 flash 鈕，把剛剛設定好的 keymap 刷進鍵盤裡了，等個幾秒鐘，鍵盤應該就會是新的鍵位了！

![](/images/IMG_3664.jpg)

雖然是個按鈕，但沒有想像中好按，要多嘗試幾次。

刷成功後就可以享受全新卻熟悉的鍵位了，舒服！

Ref
---

*   [https://ergotaiwan.tw/ergodash-qmk-configurator/](https://ergotaiwan.tw/ergodash-qmk-configurator/)
*   [https://github.com/qmk/qmk\_toolbox](https://github.com/qmk/qmk_toolbox)
*   [https://beta.docs.qmk.fm/tutorial/newbs\_getting\_started#macos](https://beta.docs.qmk.fm/tutorial/newbs_getting_started#macos)
