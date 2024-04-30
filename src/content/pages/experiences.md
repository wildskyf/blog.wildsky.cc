---
title: 過往歷程
feature_image: experiences.png
---

這個頁面記錄了我過往的一些開發經驗。
排序照時間倒序來排。


## AILabs (2019/02 ~ Present)

目前任職於 [Taiwan AI Labs](https://ailabs.tw)，
在公司參與了不少專案，下面提幾個有趣的來介紹一下。

### 基因組

基因組的產品我有參與開發的目前主要是這兩個：PGSB 和 TW23 Report。

#### PGSB (PGS Buidler)

連結：<https://pgsb.tw23.org>

PGSB 的產品目標是 **希望能幫助醫師快速地 train 出自己的 polygenic score model**。

在這個產品中，我負責 _網站的前端，包含上傳檔案、頁面路由、API 串接、畫面切版_ 等等。

另外，也因為是分析的網站，所以網站內也有許多圖表，其中也有不少是只在基因分析領域才會用到的圖表，
外面不太容易找到可以直接復用的程式，因此我也很常需要自行從頭繪製圖表模板。

除了比較刁鑽的情境需要自己用 React 寫 svg 來畫圖外，大多數情況我都會借助 Nivo 這個函式庫來加速開發。

使用到的技術主要是 React.js、TypeScript，component library 我們是採用 Mui。


#### TW23 基因檢測報告系統 (TW23 Report)

連結：<https://my.tw23.org>

TW23 Report 是能讓醫院快速產出基因分析報告的產品。

我在這個產品中也是負責前端，工作內容除了 PGSB 中有提到的事項外，還包含 PDF 的產生也是由前端負責排版、資料串接的任務。

使用到的技術主要是 React.js、Next.js、TypeScript。

網站一開始使用 xstate 做狀態管理（包含 routing），但後來考量到網站沒有那麼複雜，便開始把相關的程式碼給拿掉，讓專案更好維護、上手成本更低。

除了前端之外，最近也在跟後端分工作來做，希望在工作上能有更多學習。

#### 基因組官網

![TW23 Official Website Screenshot](/images/tw23-home-screenshot.jpeg)

基因組的官網也是我開發的： <https://tw23.org>。

基本上主要是資訊展示，所以網站並不複雜。

這個官網 _使用 Next.js build 成靜態網站後，直接用 nginx 作 host_。

未來是打算要串 directus 之類的 headless CMS，把某些和樣式、routing 無關的部分抽出來，
這樣 BD 或 PM 有什麼想改的就不用麻煩工程師，可以自行去後台更新，

以前公司內個部門的官網都是用 Wordpress，但後來因為設計師那邊常常會有樣式調整的需求，
Wordpress 也不是很好維護這些樣式的迭代歷史記錄，我們評估更新頻率後便決定改採這個靜態網頁生成的方案。


### 新聞/輿論分析組

大約在兩年前(2021)我在新聞組內擔任軟體工程師。

我們這個組接了不少案子，比較可惜的是不能隨便公開講。

#### Islander 島民衛星

組內除了接案外，之前也有個新聞輿論分析網站的產品叫做島民衛星，後來更名為 Infodemic，

主要是爬取新聞或社群網站的內容，然後丟給算法分析。

網站會把在講同一件事情的新聞分成同一組，稱為事件，並把社群網站中在講這個事件的輿論內容都與之連結在一起。

過去會用算法替新聞媒體的用詞、立場進行評分，並畫出趨勢圖。

這個產品的流程主要是：

```
1. 爬網站
2. 算法分析
3. 將爬到的內容與分析出來的資料丟進 ElasticSearch 和 Database
4. 網站串接此二服務，提供使用者用關鍵字搜尋事件、新聞、輿論的功能
```

我在這個產品中 _負責網站的建置，除了前端工作項目外，也做了不少後端的事（query DB & ElasticSearch、Caching、開 API 等等）_。

#### 社群網站中立性

另一個我覺得有趣的專案叫做 葉黃素計畫。因為 Facebook 這種社群網站巨頭握有審查
的權利，但審核標準常常令人摸不著頭緒，我們便有個網站專門在收集大家被 ban 的內容。


### 其他在 AILabs 的經歷

除了上述兩個組待得比較久外，其他也做了 Ptt.ai, Yating TTS, 人臉辨識打卡系統的前端及其管理後台。

但這幾個都算是時間比較久遠、且沒那麼熟悉，所以暫不補充細節。


## Womany (2016/07 - 2019/01)

大學三年級的時候開始去 Womany 當前端工程師實習生，之前也有寫 [一篇文章](/posts/womany-from-intern-to-graduate) 記錄。

後來畢業後去當兵，回來就直接轉正職。

公司大部分網站都是用純 JavaScript 或是 jQuery，後端的部分則是 ruby on rails

### 利用 Google Search Console 中的 query 排名來自動生成頁面

Google Search Console 裡面會有「大家是搜尋什麼關鍵字來找到你的網站」的排名清單，
也有提供 API 讓開發者可以去擷取相關資訊。

我們便利用這個 API 來自動生成介面，舉例來說，大家可能都搜尋到「容貌焦慮」找到
我們網站，那我們就會自動產生一個頁面，裡面就是「容貌焦慮」這個詞的相關文章列表。

這樣的好處是可以增加網站的頁面數量，讓使用者更容易找到想找的東西，搜尋引擎也就會更青睞我們網站。


### 用 Vue.js 協助開發購物車功能，並和後端一起建置商品列表頁面的模板及資料串接

這個專案開始於我在當兵的時候，聽說本來是因為電商的頁面都沒有手機版，希望可以實
作增進體驗，但後來不知道為什麼變成整個電商砍掉重練。

我加入的時候專案已經進行到一半，所以我主要是協助開發的角色，有趣的是學了不少後端的技術。

購物車的開發經驗也讓我首次體驗到什麼叫做電商系統的複雜。


### 使用 Google Ad Manager 進行 Programmatic Advertising 的設置及營運

本來公司的廣告版位都是人工排程去上架的，後來公司決定加入一些程式廣告 (programmatic advertising)，程式廣告
就是像 Google adsense 那樣，可能開一個版位給他，他會自行載入廣告，而我們也能獲得播放廣告的收益。

我們在這個專案的營運時有做一些實驗，因為我們和多間廠商合作，
所以我們希望能找出怎樣搭配可以讓收益最大化的組合——像是 A 廠商的廣告在哪個位置可以賺最多，
或是 B 和 C 廠商在某個位置的廣告出現機率最好一半一半的這種組合——為此我們還開了 excel 表畫了不少圖表做分析。

不過我還是不喜歡看廣告，所以對這個專案實在沒什麼愛。
（離開 womany 之後的第一件事就是把 adblock 重新打開XD ）


### 替公司的體驗活動表單進行後台建置

因為我們常會與廠商合作，讓廠商提供試用品給讀者，讀者們就可以來網站上寫使用心得，
所以我們就會需要有個報名表單讓使用者可以來登記參與篩選及抽籤。

這個表單裡面常會有許多和產品相關的問券，我們就需要有個能自行建置可以彈性調整的問券系統。

Google Form 的功能其實不錯，只可惜我們希望使用者能多留在我們網站裡，
並使用我們的會員系統進行登記，所以還是只能靠自己。


## 偶爾接案當 Freelancer

工作之餘，我偶爾會接一些網站製作的案子來做，最近比較大的幾個下面來介紹一下。


### Kai Ming Official Website

![Kai Ming Official Website Screenshot](/images/km-og-image.png)

連結：<https://kaiming.org>

這個案子是要幫美國的一間非營利學校製作官方網站。

其實包含維護這個案子已經三、四年了，合作整體上算是蠻愉快的。

在這個案子裡我主要是擔任前端，主要負責切版及資料 API 串接。

使用到的技術是 Next.js，而 component library 則是選擇 chakara-ui。


### 最佳萌友兒童寫真大賽：預防水痘輪狀，好禮等你拿

![Superhero Chickenpox Guard Image](/images/scg-og-image.png)

連結：<https://superhero.chickenpoxguard.com.tw/>

這個案子是要製作一個投票網站，讓家長可以投稿，用短影片或圖片秀出自己的小朋友給大家投票。

開始製作前本來想說網站應該蠻單純的，最複雜的地方大概是短影片要加濾鏡吧。

沒想到後來衍伸出有人灌票的問題，而 PM 可能因為第一次負責網站的案子，經驗不太足，合作起來不是很順利。

專案進行到一半，PM 突然提了離職，換了個新 PM 後整個專案就順暢了許多。

這個案子讓我學到蠻多東西的，除了更熟悉平常就有在使用的 Next.js 和 React.js 之外，

我也在這個專案嘗試使用了 knex.js 這個 query builder（不是很滿意XD），並估算使用量後選擇 SQLite 作為資料庫。

影片處理的部分除了加濾鏡外，還有一些額外課題，像是影片裁切大小調整、或是把影片的 HDR 移除以增進瀏覽體驗等等。

登入的部分是串接 Line Login API，他蠻有趣的，使用者的 Email 預設是拿不到，

如果想要 Email 資訊的話需要在開發後台勾選某個權限後，使用者在登入時才會多一個「供應商要求 Email 權限」的選項，

重點是，這個選項不是必選，所以使用者把他勾掉也還是能登入成功XD 就⋯ 蠻妙的XD

至於前面提到的灌票問題，這邊先不講，有興趣的再找我聊聊。


## 瀏覽器套件

我之前也開發了幾個瀏覽器套件，這邊簡單介紹一下：

### Foxmosa

![Foxmosa add-on Screenshot](/images/foxmosa-run-screenshot.png)

連結：<https://addons.mozilla.org/en-US/firefox/addon/foxmosa-with-you/>

狐耳摩莎 Foxmosa 是 Mozilla 台灣社群的吉祥物，這個瀏覽器套件唯一的功用 **就是可愛**，
裝了這個瀏覽器套件之後，在你上網的時候，小莎就會偶爾經過你的網頁下方。


### Textarea Cache

連結：<https://addons.mozilla.org/en-US/firefox/addon/textarea-cache>

這個瀏覽器套件是接一個前輩的坑，主要是以前 firefox 偶爾會 crash，這時如果我們正在填一些表單填到一半時，

重新打開瀏覽器就會發現東西都被清空了，很生氣。

裝了這個套件後，他就會幫你備份你的表單內容，再也不用怕瀏覽器 crash 了。


### Tab Notes

連結：<https://addons.mozilla.org/en-US/firefox/addon/tab-notes/>

這個套件算是我最喜歡的套件之一，後來也推薦給同事，他們到現在都還在天天使用。

其實概念很簡單，就是把瀏覽器開啟新分頁的空白頁面換成一個記事本，未來只要開新分
頁就會看到記在這邊的文字。

我也有寫篇 [文章](/posts/addon-tab-notes/) 介紹這個瀏覽器套件。



## 開源社群

### Mozilla Taiwan Community

閒暇時我也會去參與開源社群，目前待最久、最有歸屬感的當屬 Mozilla 台灣社群。

除了有幫網站做調整之外，我也曾是社群空間的 keyholder。

之前也會和 ettoolong 一起舉辦瀏覽器套件工作坊教大家寫套件，
後來還和他一起去當了 Firefox Addon Reviewer，也算是有趣的經歷。

BTW，如果你有 mastodon 的帳號的話，歡迎追蹤我的帳號，在 [mozilla.social](https://mozilla.social/@wildsky)


### 其他

* **Linux Taiwan Community Website**：以前有建置台灣 Linux 社群的網站，可惜 domain
  持有者過世後，domain 被別人撿走，現在已經看不到了。
* [**Lollypop – Gnome Player Website**](https://wildskyf.github.io/lollypop-web/)：
  這個是一個 Linux 上的開源音樂播放器的網站，那時是看到他在徵求網站開發，我便去協助。
* 這個部落格：這個部落格也是我從零開始打造的，現在看到的這個風格是取自明日方舟這款遊戲的某個活動——**湧潮悲歌**。

## Awards

* [Granularity-Based Interactive Image Display](https://sigport.org/documents/granularity-based-interactive-image-display-0)
* [National Collegiate Programming Contest 2014 Finalist](https://ncpc.idi.ntnu.no/ncpc2014/)
* NTNU Certificate of English Proficiency


如果你需要網站工程師的話，歡迎用 Email 與我聯絡： [poppin.wildsky+blog\[at\]gmail.com](mailto:poppin.wildsky+blog@gmail.com)

如果想看我的履歷，可以點這裡 >> [我的履歷](/files/reseme.pdf)
