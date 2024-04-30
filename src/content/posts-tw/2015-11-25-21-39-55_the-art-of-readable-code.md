---
title: "【筆記】易讀程式之美學 &#038; 提升程式碼可讀性的簡單法則 (The Art of Readable Code)"
date: 2015-11-25T21:39:55
slug: "the-art-of-readable-code"
excerpt: "<p>終於讀完「 易讀程式之美學 」這本書了，在看的過程中一直把自己最近要交的作業拿回來改，由此就可以感受到這本書的&#8230;</p>
"
feature_image: null
guid: "http://blog.wildsky.cc/?p=362"
---
終於讀完「 易讀程式之美學 」這本書了，在看的過程中一直把自己最近要交的作業拿回來改，由此就可以感受到這本書的好處。之後應該還會拿起來多看幾次，幸好當初有買下來！

不過真的是買書很便宜，但是看書挺貴的，所以我便將我覺得重要的部分記下來，以便未來較無時間時也能快速複習。

不過我記得部分也只是部分，還是推薦去買書來看看，可以用 [這個連結](https://www.books.com.tw/exep/assp.php/wildsky/products/0010584840?utm_source=wildsky&utm_medium=ap-books&utm_content=recommend&utm_campaign=ap-201907) 去購買，替我賺取回饋金XD

改善表層
----

### 命名

#### 替代詞彙

原詞

可能的取代方案

Send

deliver, dispatch, announce, distribute, route

Find

search, extract, locate, recover

Start

launch, create, begin, open

Make

create, set up, build, generate, compose, add, new

#### 單位

*   Start(int delay)： delay → delay\_secs
*   CreateCache(int size)： size→size\_mb
*   ThrottleDownload(float limit)： limit → max\_kbps
*   Rotate(float angle)： angle → degrees\_cw

#### 其他重要屬性

情景

變數名稱

更好的名稱

以「明文」儲存的密碼，應先加密

password

plaintext\_password

使用者提供的意見，顯示前須編碼

comment

unescpaed\_comment

轉換為 UTF-8 的 html 資料

html

html\_utf8

做過 url 編碼輸入資料

data

data\_urlenc

*   小範圍 => 短名稱
*   縮寫應被廣泛理解

### 誤解

*   不要使用 filter, 要用 select, exclude
*   Clip 可以改為 truncate
*   關於區間
    *   包含邊界：max / min
    *   閉區間：first / last
    *   半閉區間：begin / end
*   布林運算子可加上 is, has, can, should

### 程式碼越整齊越對齊越好

> 註解的目的是幫助使用者了解程式碼作者的思想

*   好程式 > 壞程式 + 好註解
*   記錄自己的想法——導演評註，例如：
    *   啟發式計算可能會漏幾個字，但很難 100% 解決
    *   這個 class 有點亂，或許可以建個子類別
*   記錄程式碼缺陷
    *   TODO
    *   FIXME
    *   HACK
    *   XXX
*   常數的註解  
    *   // 只要…即可 → 讓讀者對常數的調整更有概念
    *   // 加上合理的限制——沒人能讀那麼多文章！ → 不加也可，加了不無小補
    *   // 使用者認為 0.72 在大小/品質上有最好的平衡 → 調校過後的結果
*   為讀者設想
    *   若可以預期讀者會有疑問，則可事先用註解回答他: // 強制釋放記憶體（參看 STL swap trick）
    *   避免使用者誤用可加上「實做細節」 // 呼叫外部服務發送 email （逾時時間為 1 min）
    *   可以加上時間複雜度 // O(number\_tags \* average\_tag\_depth)
*   「全局註解」：讓新進成員在一段輕鬆的談話後，能比自行閱讀程式碼知道更多事
    *   摘要註解：用一句話解釋 what is “for 迴圈的內容” about : // 找出所有為自己購買商品的客戶 `for(...)     for(...)         if(...)`
    *   註解「為何」而非「什麼」or「如何」
    *   盡力幫助使用者理解程式碼
*   寫下註解的步驟：
    1.  寫下心中想法
    2.  讀出註解
    3.  改善

### 讓註解精確＆簡潔

*   不說廢話冗詞
*   避免模稜兩可的代名詞
*   修正草率語句
*   精確描述函數行為
    *   回傳檔案行數 → 回傳換行字元(‘\\n’)個數
*   使用具代表性的輸入/輸出範例
*   表達程式意圖
*   函數參數名稱註解
    *   `Connect(/* timeout_s = */ 10, /* use_encryption = */ false)`
*   使用「訊息密集」的詞彙
    *   cache layer
    *   正規化
    *   啟發式（heuristic）
    *   暴力法（Brute-force）
    *   naive solution

* * *

簡化迴圈與邏輯
-------

### 提高控制流程的可讀性

*   條件式中的條件順序： 左側「較有變化」，右側為「比較基準」// 尤達表示法：我是時代的眼淚XD
*   if/else 區塊順序
    *   先處理**肯定**而非**否定**
    *   先處理**簡單**的情況，以便同時顯示出 if 和 else 的區塊
    *   先處理比較有趣/明顯的情況
*   ? : 判斷式，有利有弊，視情況判斷
*   不要用 do/while loop
    *   一般來說，判斷式都在區塊上方 因為閱讀順序都是由上到下，用 do/while 有時候讓人需要讀兩次程式碼
    *   C++ 之父也這麼說
    *   continue 會變得難以理解 `c do{     continue; } while(false); // 上面的例子只會執行一次`
*   儘早從函式 return
    *   有些人會認為只應有一個 return，因為他想執行函式尾端的清除程式碼， 但現代程式語言提供更成熟的機制：
    *   C++: 解構子
    *   Java, Python: try finally
    *   Python: with
    *   C#: using
*   goto 惡名昭彰，多數情況下都應避免
*   減少巢狀結構
    *   用 return 把失敗情況先處理掉
    *   continue 也很好用，但要小心不要讓他變成迴圈內的 goto
*   修正程式碼時，要以全新的角度審視，退一步以整體的角度來考慮程式碼
*   能否理解執行流程
    *   在背景執行的 Tread

### 分解巨大表示式

*   將巨大表示式分解為更容易消化的大小
*   使用「解釋性變數」 → 軟工時老師用的抽取函式的概念，但此處包含但不限於函式
*   摘要變數 把一整串表示式放到變數中，用以解釋 bool user\_owns\_doc = request.user.id == document.owner\_id
*   笛摩根定律： not 的分配律
*   不要變成 short-circuit evaluation 魔人
*   寫法「很酷」的程式碼會對後人造成困擾
*   當遇到複雜的邏輯時，可以尋找更優雅的方式→可以從相反的方向去思考

### 變數與可讀性

#### 濫用變數

會有三個問題：

*   變數越多越難同時記住全部
*   lifetime 越長就必須記住越久
*   值越常變，越難記得當前數值

### 消除變數

若有個變數只用一次、不複雜，甚至是對理解程式沒有幫助，就果斷拿掉他吧！    // 常是程式碼編輯後的「殘骸」

*   消去中間結果。
*   讓函式「儘快完成任務」是個好習慣
*   善加利用結構化程式設計來消除控制流程變數

### 限縮變數的範圍

*   儘可能減少「可以看到變數」的程式碼行數
*   In some way, 類別的成員變數就是類別內部的全域變數
    *   盡量讓成員變數退化成區域變數
    *   需要限制類別成員存取權→盡量使用靜態方法 (static method)
    *   將大類別縮成小類別（小類別間須互相獨立，互不干涉，否則沒有效果）
    *   主要動機就是隔離資料，也就是變數
    *   下移宣告，讓變數與函式在第一次使用前才出現
*   偏好單次寫入的變數→操作變數的地方越多，就越難記得當前數值

* * *

重新組織程式碼
-------

### 積極尋找並抽離不相關的子問題

*   當想著「要是 Lib 有提供 xyz() 函式就好了」的時候，就動手做一個
*   抽出程式碼之後有意外好處：更容易理解，也更容易改善可靠度、加入新功能、處理邊界值
*   通用程式碼的好處就是可以用在各個專案（一般會放在 util/ 目錄之下 ）
*   就算抽出的問題和專案相關也無妨，有抽出來就是好事
*   永遠不必屈就於不夠好的 interface，你可以自行幫他整形，甚至重塑界面，避免被細節干擾

### 一次只做一項工作

### 將想法轉為程式碼

*   清楚描述邏輯→前面提過的簡化迴圈
*   善用函式庫所提供的協助

### 程式碼越少越好

*   可讀性最高的程式碼就是完全沒有程式碼
*   有些功能非必要，就不用開發
*   詢問與分解需求→可以事半功倍
*   維持程式碼小而美
    *   建立通用程式碼
    *   移除用不到的程式碼與功能
    *   將專案切成不相連的子專案
    *   注意程式的份量，維持其輕巧
*   熟悉使用的函式庫
*   用 Unix 工具來代替撰寫程式

測試與可讀性
------

*   讓測試易讀與維護
*   對使用者隱藏不重要的系解，突顯重要的細節
    *   測試敘述最小化
    *   自製迷你語言、爬蟲 → 個人覺得有點走火入魔了… 但可以理解為什麼這麼做
    *   手工打造錯誤訊息
*   選擇良好的測資：優先使用簡單、明確但仍能達到測試效果的輸入值
*   test-friendly 的開發：單單在寫程式時考慮到測試，就能讓程式碼有很大的改善

易讀程式之美學 大概是這樣。剛剛[](http://blog.wildsky.cc/tags/note/)才發現 [taaze](https://www.taaze.tw/goods/11100654124.html) 上居然絕版了⋯⋯

也許也想看看其他我記下筆記的文章：[http://blog.wildsky.cc/tags/note/](http://blog.wildsky.cc/tags/note/)

![易讀程式之美學 書籍照片](http://blog.wildsky.cc/wp-content/uploads/the%20art%20of%20readable%20code.jpg)