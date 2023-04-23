---
title: "Hot to flash QMK Config Keymap into Mint60 on Mac"
date: 2021-01-07T17:35:39
slug: "hot-to-flash-qmk-config-keymap-into-mint60-on-mac-en"
excerpt: "<p>Foreword I just buy a keyboard named mint60 from ErgoTa&#8230;</p>
"
feature_image: ergo-taiwan-mint60-2.jpg
guid: "https://blog.wildsky.cc/?p=1706"
---
Foreword
--------

I just buy a keyboard named mint60 from ErgoTawian due to my stiff shoulders, which must be caused by working too long hours lol.

The default keymap is much different from mac’s, so that I want to remap according to guides online.

This article is about to flash a brand new keymap to Mint60.

Prepare keymap
--------------

First, we need to setup a new keymap we want, just go to [QMK Configurator](https://config.qmk.fm/#/mint60/LAYOUT), to start to modify it. While finishing, compile it & download both keymap.json and firmware.

For more information of how-to of the site, please visit this article in ErgoTaiwan (zh-TW) :

> [使用 QMK Configurator 設定 ErgoDash 鍵盤配置](https://ergotaiwan.tw/ergodash-qmk-configurator/)

![](/images/Screen-Shot-2021-01-07-at-10.43.45-1024x518.png)

click compile first, then click two buttons below (not the full code one)

Making sure in your own localhost are one .json file and one hex file, you are able to go to next step.

Setup Environment
-----------------

If you have not install brew yet, please access [homebrew official site](https://brew.sh/), and install it. Then open terminal and type these commands:

    $ brew install qmk/qmk/qmk
    $ qmk setup # and y for all question
    $ brew tap homebrew/cask-drivers
    $ brew cask install qmk-toolbox

Flash!
------

1.  goto `~/application` folder and open `QMK Toolbox.app`, if you happen to unverified developer, you could right click it and click open to ignore it.
2.  click the open button on the top of window, then navigate to the .hex file we download earlier.
3.  Make sure Mint60 is connect to your Mac.
4.  Click the red button under the Mint60 with a thin bar, and you will see this message in the terminal below:

    *** Caterina device connected
        Found port: /dev/cu.usbmodem143201

At this moment, you could just click the flash button, and wait for some seconds. Then you might find the keyboard has finished the flash progress.

![](/images/IMG_3664.jpg)

雖然是個按鈕，但沒有想像中好按，要多嘗試幾次。

And last, enjoy it!

Ref
---

*   [https://ergotaiwan.tw/ergodash-qmk-configurator/](https://ergotaiwan.tw/ergodash-qmk-configurator/)
*   [https://github.com/qmk/qmk\_toolbox](https://github.com/qmk/qmk_toolbox)
*   [https://beta.docs.qmk.fm/tutorial/newbs\_getting\_started#macos](https://beta.docs.qmk.fm/tutorial/newbs_getting_started#macos)