---
title: "Save to Readmoo 瀏覽器套件上線"
date: 2019-11-02T23:06:00
slug: "save-to-readmoo-release"
excerpt: "<p>前幾天買了 Readmoo MooInk Plus，開始用了以後才發現原來 Readmoo 也有做稍後閱讀功能...</p>
"
feature_image: 825575323fd144c8a33384b9093c95c4_4_1280.jpg
guid: "https://blog.wildsky.cc/?p=1545"
---

前幾天買了 Readmoo MooInk Plus，開始用了以後才發現原來 Readmoo 也有做稍後閱讀功能，比較可惜的是他們這個功能的所需步驟比起另外兩家大牌子的 Pocket 和 Instapaper 還是稍嫌繁瑣，需要把欲存的網址複製起來、開啟網站、找到貼上網址的區塊並將它貼上後，Readmoo 書櫃才開始進行轉換。

因此，我便花了一個晚上來看看他們網站是如何將網址加入到 Readmoo 書櫃中，並將它寫成 Firefox 瀏覽器套件，好讓使用者可以 **一鍵將當前頁面加入 Readmoo 書櫃中**。經過大約一週的努力後，目前套件已經在 Firefox 和 Chrome Store 兩個平台上架：

- [Save to Readmoo on Firefox](https://addons.mozilla.org/firefox/addon/save-to-readmoo/)
- [Save to Readmoo on Chrome](https://chrome.google.com/webstore/detail/save-to-readmoo/jdbnfgenpefhbpcfbfemlmjeknlbccci?hl=zh-TW)

本篇文章則是用來簡單記錄一下開發過程。

> 因為想快速地把連結存進 readmoo 所以做了這個套件： Save to Readmoo
>
> 這樣之後就可以在 MooInk 上看存下來的文章了🥰[#雖然還要手動同步就是了](https://twitter.com/hashtag/%E9%9B%96%E7%84%B6%E9%82%84%E8%A6%81%E6%89%8B%E5%8B%95%E5%90%8C%E6%AD%A5%E5%B0%B1%E6%98%AF%E4%BA%86?src=hash&ref_src=twsrc%5Etfw)[#其實套件還有許多地方能改](https://twitter.com/hashtag/%E5%85%B6%E5%AF%A6%E5%A5%97%E4%BB%B6%E9%82%84%E6%9C%89%E8%A8%B1%E5%A4%9A%E5%9C%B0%E6%96%B9%E8%83%BD%E6%94%B9?src=hash&ref_src=twsrc%5Etfw)[#整理完再把原始碼放上GitHub](https://twitter.com/hashtag/%E6%95%B4%E7%90%86%E5%AE%8C%E5%86%8D%E6%8A%8A%E5%8E%9F%E5%A7%8B%E7%A2%BC%E6%94%BE%E4%B8%8AGitHub?src=hash&ref_src=twsrc%5Etfw)[https://t.co/66pRy43tqZ](https://t.co/66pRy43tqZ)
>
> — Wildsky (@wildskyf) [October 29, 2019](https://twitter.com/wildskyf/status/1189005556998000641?ref_src=twsrc%5Etfw)

當時寫完套件後發的推文

發文後才發現原來有這麼多人有在用 Readmoo（或者有在關注？），便決定也將它發佈到 Chrome 上，好讓更多人可以使用這個套件。

不過因為權限要求過大，所以審核的時間拉得很長。此外，Readmoo 臉書社團中也有使用者表達疑慮：

> 可是它要求的權限超可怕 : 存取您所有網站中的資料 (抖)」。

當時因為懶得寫某段「限定頁面才能跑」的程式才會直接要所有頁面的權限。幾天後的改版便把權限限縮，讓套件只拿到當前頁面的資訊以便取得完成工作所需的最少資料。順便 build 了個 Chrome 版的套件更新上去——也因為權限限縮，所以 Chrome Store 提示說一小時內會上架。

不過就在這個時候，我收到了一封信：

![](/images/Screen-Shot-2019-11-02-at-22.17.08-1024x887.png)

Chrome Store 來信說我違反政策，因為沒附上隱私權政策的連結，所以上架失敗。

去後臺找了半天才發現「隱私權政策」的欄位居然是跟著帳號而不是套件本身，還真是有點奇耙。我因為很懶，所以就直接把 Readmoo 的隱私權連結給貼過去XD 想說這樣應該就會動了吧？

![](/images/Screen-Shot-2019-11-01-at-20.24.11-1024x106.png)

在這個狀態下，按下發佈鈕就會立刻回到「已遭拒」的狀態。

但當我按下發佈後，就又立刻收到拒絕的信（感覺是直接程式判定在多少時間內會自動立刻拒絕），查了以後發現也有人遇到一樣的狀況，解法是回信給那封通知信。

回信後大概一天，就收到信說：

> Upon a subsequent review, we’ve reinstated your item and it will be available in the Chrome Web Store within 30 minutes.

再上去 Chrome Store 後台看，才終於發佈成功。（當初被程式自動拒絕時，還想說如果還是失敗的話我就乾脆自己 host 套件算了，幸好最後有上架成功。）

> 終於，Chrome 版的 Save to Readmoo 通過審核了！[#Readmoo](https://twitter.com/hashtag/Readmoo?src=hash&ref_src=twsrc%5Etfw)[#SaveToReadmoo](https://twitter.com/hashtag/SaveToReadmoo?src=hash&ref_src=twsrc%5Etfw)[https://t.co/W7A1wunaDm](https://t.co/W7A1wunaDm)
>
> — Wildsky (@wildskyf) [November 2, 2019](https://twitter.com/wildskyf/status/1190571322562138113?ref_src=twsrc%5Etfw)

## 參考連結

- [Save to Readmoo on Firefox](https://addons.mozilla.org/firefox/addon/save-to-readmoo/)
- [Save to Readmoo on Chrome](https://chrome.google.com/webstore/detail/save-to-readmoo/jdbnfgenpefhbpcfbfemlmjeknlbccci?hl=zh-TW)
- [Readmoo.com](https://readmoo.com)
- [Readmoo Facebook 社團](https://www.facebook.com/groups/2022799827759547)
