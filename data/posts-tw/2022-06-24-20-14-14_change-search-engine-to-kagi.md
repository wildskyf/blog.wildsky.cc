---
title: "將我的預設搜尋引擎換成 Kagi Search 了"
date: 2022-06-24T20:14:14
slug: "change-search-engine-to-kagi"
excerpt: "<p>平常搜尋資料時很常被垃圾網站佔滿視線，之前嘗試過 DuckDuckGo，但出來的搜尋結果還是不太滿意。
研究了一陣子後，今天把我的預設搜尋引擎從 Google 換成 Kagi 了，想說簡單寫篇文章記錄一下⋯</p>"
feature_image: kagi-doggo.svg
guid: "2022-06-24-20-14-14_change-search-engine-to-kagi"
---

(上圖是 Kagi 的吉祥物狗狗。)

> Kagi: Humanize the Web

平常搜尋資料時很常被垃圾網站佔滿視線，之前嘗試過 DuckDuckGo，但出來的搜尋結果還是不太滿意。
研究了一陣子後，今天把我的預設搜尋引擎從 Google 換成 Kagi 了，想說來簡單寫篇文章記錄一下。

下面是我過去看到的一些相關文章:

- [Google Search Is Dying](https://dkb.io/post/google-search-is-dying)
- [覺得 Google 被自己的黑魔法玩壞了？你可以嘗試這五個搜尋引擎](https://blog.starrocket.io/posts/five-search-engines-other-than-google/)
- [來測試 kagi 這個搜尋引擎](https://blog.gslin.org/archives/2022/02/14/10549/來測試-kagi-這個搜尋引擎/)
- [用兩個禮拜 kagi 的心得](https://blog.gslin.org/archives/2022/03/03/10578/用兩個禮拜-kagi-的心得/)
- [kagi 的宗教戰爭：emacs 與 vi](https://blog.gslin.org/archives/2022/03/20/10617/kagi-的宗教戰爭：emacs-與-vi/)
- [kagi 的搜尋引擎開放註冊，以及公佈付費方案](https://blog.gslin.org/archives/2022/05/18/10705/kagi-的搜尋引擎開放註冊，以及公佈付費方案/)
- [kagi 開始收費了](https://blog.gslin.org/archives/2022/06/03/10729/kagi-開始收費了/)

## 吸引我的點

雖然搜尋引擎這種東西還是要用一陣子才知道具體如何，但 Kagi 有幾個我很喜歡的點：

### 1. Block by domain

這個 Feature 根本就是 [Personal Blocklist (not by Google)](https://addons.mozilla.org/en-US/firefox/addon/personal-blocklist/) 的終極目標。
雖然用 Kagi 本來就搜不太到內容農場或程式自動產生的垃圾站，
但有些網站還是很猖狂，[像是⋯⋯](https://twitter.com/codespawner/status/1533294636399153152)，
或是某些網站可能平常找新聞就會特意不去送點擊，[像是⋯⋯](https://twitter.com/yfw3u/status/1520791749353869312?s=20&t=VCyD4KgZYHHFNGQXLCnbkw)。

除了可以 Block 網站之外，他還提供 Lower, Higher, Pin 等方式，加上 Normal 總共有五個層級感覺挺夠用的。

### 2. Lens

這個功能可以看成是讓搜尋套用額外 query。
預設的 Lens 我自己平常比較會用到的大概是 Discussions, Programming。前者可以只顯示論壇的搜尋結果
（現在好像只有外文的論壇，像是 reddits, forum.xda-developers.com 之類的）；後者則是軟體工程相關的官方網站及文件。

其他預設的 Lens 還有 Edu, News 360，甚至還有食譜XD

雖然預設的 Lens 大多是英文的，但他還可以讓使用者自行定義 Lens ，
可以讓搜尋結果「只包含/排除某些網站」或「只包含/排除某些關鍵字」，其他還有 filetype、時間限定，
而 fitler 的套用就放在搜尋 Bar 下方，所以 Filter 的取用也是十分方便。

![Kagi Lens Screenshot](/images/kagi-lens.png)


### 3. 無廣告

自從加入 YouTube 的 Premium 方案後整個大幅改善體驗，除了可能會看不懂某些迷因外，真的是整個人生都幸福了。

附上 [Google 的搜尋結果可以讓半個頁面都是廣告](https://twitter.com/titanypw/status/342483378978844675?s=20&t=VCyD4KgZYHHFNGQXLCnbkw) 的推文⋯

另外是，在研究的過程中還看到這篇推文：「Kagi 在免費額度達上限後，搜尋關鍵字會倒去 Google 的搜尋結果」。

![Kagi 附圖](/images/Kagi-UX.png)

這真的是蠻佛的⋯⋯

---

## 缺點、不習慣之處

目前感受到的缺點，是搜尋結果最多好像只會有 50 條。
理性上是覺得應該夠多了，但因為已經習慣 Google 那種要翻很多頁的搜尋方式了，
所以突然變少還是有點不太習慣。 ([Ref](https://twitter.com/orsonwang/status/1540160342512177152?s=20&t=Qe39Zbm8LqDt8o4primfzg))

再來是手機上的部分，iOS 似乎沒辦法額外新增搜尋引擎，
所以變成要安裝 kagi for safari 這個 app。
安裝 App 是小事，但他會讓我完全不能使用 Google。Google 首頁可以進入，但一搜尋
就會自動導到 Kagi 的搜尋結果，而且也沒地方切回去，今天測試時就有點小苦惱。

---

## 之後打算

除了日常使用之外，我也想試著利用 Pin & Lens 這兩個功能來讓搜尋結果優先顯示我的 wiki 站：
<https://note.wildsky.cc>，來測試看是否能協助個人知識管理系統的取用。

不知道效果會如何，反正就慢慢觀察看看。
