---
title: "Firefox Add-on 介紹：Tab Notes"
date: 2018-11-11T16:54:02+08:00
draft: false
categories:
  - Web-Extension
tags:
  - Firefox
---

## 前言

因為先前在寫 [歷程整理 - 2018/04/12 ]({{< ref "20180412.md" >}}) 時，友人阿努
説應該要好好地替套件寫介紹文，因而有這文章誕生。

## 套件資訊

這個套件只能在 Firefox 上運作：

- 安裝連結：<https://addons.mozilla.org/firefox/addon/tab-notes/>
- 原始碼：<https://github.com/wildskyf/tab-notes>
- 截圖的話，可以直接去上面提到的「安裝連結」，之後想找時間做個比較好看的截圖。

## 起心動念

這個套件是啟發自 <http://a5.gg> 這個網站。

有時候總是需要記東西，但手邊沒有紙，也懶得開 note.app。我以前都是開 a5.gg，但因
為不是自己 host 的服務，有時候會莫名地速度慢，再加上他好像是用
localstorage 這類一不小心就會被清掉的 API 去實作，所以不是那麼地可靠。

某天又遇到資料被清空，除了鬱卒之外，就進一步想説要怎麼解決這個問題，
不然三不五時被清筆記也是真的有點煩人。

那既然我們平常 80% 的時間都是在瀏覽器上，不如直接開新分頁就能記錄，這個
套件便誕生了。

## 套件原則與功能

> Easy and Graceful

當初就想，既然是要快速記錄，那就不能在那邊慢慢地按新增、選分頁、選 tag，
所以套件的功能、介面也都要依循最簡單的原則，只專注做好「快速記錄」的這件事就好。

因此，這個套件開發了一年半，到現在的功能也就只有「黑夜模式」而已，連 credit 都只在右下
角標上紅色的 WS 字樣，非常地簡約。也是有使用者在 GitHub 那邊提了 markdown 或是
多分頁的 feature request，我個人是蠻排斥的啦⋯⋯ 只想要用純文字記錄，覺得太複雜反而
會眼花撩亂。

反正就是希望使用者只要按下 `Ctrl/Command + t`，就能立刻存取到先前的筆記。排除其他干
擾，避免被繁雜的介面干擾到忘記靈光乍現的思緒。

過去也有想過要不要搶 focus，讓使用者在開分頁的瞬間就能立刻打字。
但重想了以後，瀏覽器的目的終究是要「瀏覽網頁」，這個套件不應該影響這個目的，所以也就作罷。

然後我用的 API 是 storage.sync，所以理論上只要有登入 Firefox 的帳號，筆記都應
該會跟著帳號走才對，但之前測了以後好像沒有，所以可能要再確認一下這個 API 的功用。

## 日常使用

我自己喜歡在裡面記下最近對我有啟發的句子，這樣每次開分頁都能啟發自己。

或是記下某個股票的買賣點，就能夠快速知道一個股票是否可以進場了。

有時候也會把他用來把 formated text 變成 unformated，不然有些帶連結的文字直接貼
去 note.app 就會很亂。


## 未來

之後要做的事，大概就是：

- 確認 storage.sync 的運作，看筆記能否跟著 Firefox 帳號。
- 看看 Web Extension 的 API 看有沒有可以加的功能。
- 把這篇文章翻譯成英文，並補充資訊進 AMO 的描述。
- 幫它（還有其他套件）開個網站/頁面，讓不會用 GitHub 的人也能討論、報 bug，也
  讓我能在那邊發佈 changelog。
- 考慮讓他在 Chrome store 上架，畢竟那邊人比較多。

因為希望它簡單輕巧，所以大概也不會加什麼會影響操作體驗的功能。

## 協助我

如果你也喜歡這個套件，你可以做下面這幾件事：

- **捐款**：目前只提供 paypal 連結（因為還只有外國人捐過），如果你不想用 paypal，也請直接聯絡我，讓我能爲你提供你偏好的捐款方式～
  - [paypal 捐款連結](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E3G75VZZ5A2H4)
  - 如果你願意透過 paypal 捐款的話，要注意幣值是 **美金** 哦！不要不小心捐了三十倍的錢⋯⋯
  - 如果你捐款了，也希望你寄一封信給我，讓我知道你是誰 :)（當然默默做善事也很
    歡迎，但我也想感謝你呀><）
- **留下評論**：雖然對我本身沒什麼實際作用，但收到五星評論的通知信還是令人振奮啊！
  如果你願意動動指頭，幫我留下評論的話，可以前往 [AMO 留下星星](https://addons.mozilla.org/zh-TW/firefox/addon/tab-notes/)。
- **提供新點子**：雖然現在功能已經 100% 滿足我自己的需求，但也許你有什麼新點子可以
  讓這個套件更好。歡迎提供！（不過我也會視情況決定要不要去做那些新功能）
- **推薦給別人**：分享此篇文章，讓更多人知道這個套件！

如果你需要聯絡我，請寄信到 `poppin.wildsky at gmail.com` 這個信箱～

## 相關連結

- 阿努的 medium：<https://medium.com/@manzoo/>
- 安裝連結：<https://addons.mozilla.org/firefox/addon/tab-notes/>
- 原始碼：<https://github.com/wildskyf/tab-notes>
- 本套件的捐款連結：<https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=E3G75VZZ5A2H4>

