---
title: WordPress 加速、穩定計畫之一
date: 2019-09-17T22:35:50.000Z
slug: make-wordpress-faster-and-more-stable
excerpt: '<p>最近這幾週比較少寫文章，原因是我最近在嘗試把部落格的架構改掉。而會有這個打算的原因是，最近 host 這個部落&#8230;</p> '
feature_image: fikret-tozak-Zk-Ydz2IAs-unsplash.jpg
guid: 2019-09-17-22-35-50_make-wordpress-faster-and-more-stable
---
最近這幾週比較少寫文章，原因是我最近在嘗試把部落格的架構改掉。而會有這個打算的原因是，最近 host 這個部落格的 server 開始不太穩，每天會有一到三次、每次十幾分鐘不等的停機——不過也可能之前就有，只是我最近打開 Jetpack 的停機時間監控才發現他起起落落——因為一直收到通知實在太煩，又不想只是把監控關掉掩耳盜鈴，便開始了這個計畫。

誰知道是個深坑⋯⋯

過往經驗
----

這邊先簡介一下過往經驗，因為過去有段時間我都是使用靜態網站產生器（Jekyll、Middleman、hugo）來架部落格，對於他可以自行掌控整個 html 感到非常自在清爽，甚是喜歡。

但後來覺得 sub content 的管理太麻煩，舉例來說，我必須要一篇篇文章找有沒有用到某個 tag 或分類再去對他做新增刪除或更名，這實在太費神。此外，要寫新文章還必須要把桌機打開，跑起 local server，然後使用編輯器去寫 markdown。寫完後還要再把它 push 上 GitHub 好 trigger 靜態網站 deploy 用的 webhook。

只是想簡單寫個文章而已呀！為什麼還要像個 Geek 一樣克難寫文章？

於是我便在年初切換回來曾經使用的 wordpress 了。

切回來後，的確是有讓寫文章的頻率上升許多，gutenberg 編輯器也的確順手，但又遇到最開頭提到的 server 不穩的問題，便又想再度尋求解決方案。

有了靜態網站產生器的經驗的我，便異想天開地想：「能否使用 wordpress 作為靜態網站產生器？」一查才發現：我不孤單啊！甚至還有個叫做 shifter 的服務打算直接幫你處理這件事。於是我便開始研究該如何調整部落格架構以便達成這個願望。

我的需求＆此次改版目標
-----------

在做事之前，要先知道目標，以及可以接受的妥協。

*   我希望網站是 **純靜態** 的，不用在收到 request 後還在後端做 render，host service 就只要單純地做 host 就好（這樣我就可以把網站 publish 到更穩定的 netlify 上）
*   我希望保有 **好的管理後台**，最好是直接沿用 wordpress 現在的後台，讓我可以舒爽寫文章、管 Tag
*   繼續使用現在這個 server，後台可以繼續每天倒個幾分鐘，這樣我只要別在那些時間裡寫文章用後台就不會有問題，但後台倒掉不能影響前台也倒站（也就是希望 **前後台切開**）

![](/images/estee-janssens-aQfhbxailCs-unsplash.jpg)

解決方案
----

### 方案一：將 wordpress 轉成靜態網站

目前有兩個外掛可以做到這件事，但都不甚滿意所以我沒有使用他們。這兩個外掛分別是 WP2static 和 simply static。

#### WP2Static

這個外掛裡面有支援將網站佈到 netlify 上面去，但我的部落格 build 不過去，卡在 crawler 的某個神秘位置。目前還沒有細究是哪裡出了問題，或許之後會再試一次看看。也可能是我外掛用太多了，其中的某個跟他衝到也說不定。

#### Simply Static

用這個外掛我就真的有把部落格轉成功，不過比較可惜的是他的選項只有輸出成 zip 和同 server 的另一個資料夾兩種指令，而且轉的時間還蠻久的（每次要花約十分鐘，聽說 WP2Static 又更久⋯）

由於我也實在不想每次都要等他轉完輸出 zip 後還要丟上 netlify（而且傳上去後 deploy 還卡住 =\_\_\_=）所以最後還是放棄了這個方案。雖有點可惜，但還是為了他做了下面這幾件事：

1.  把全部的 comment 都關掉：畢竟靜態網站就沒法用 wordpress 的留言功能
2.  移除某些套件的 CDN 或是奇妙的設定，有些會讓產生的靜態網站多了很多沒必要的東西，甚至只留套件不啟用也會出一堆莫名的東西
3.  選擇 sitemap（這邊我選用 google xml sitemap，因為其他的匯出後會噴錯）
4.  使用 google custom search：同第一點，靜態網站無法用 wordpress 搜尋
5.  產生 404 pages，內建的 404 我用的主題會有搜尋功能，但我不能用
6.  掛上 Cloudflare：其實之前一直想做，只是順便想到順便做，雖然沒啥流量，但還是想做XD

另外兩個還沒做的是：

1.  讓後端網站藏起來
2.  轉出來的東西要能夠自動搬去其他可以 host 靜態網站的地方

總之，這個「直接將部落格用外掛轉成靜態網站」的方案最後宣告失敗，因為轉太久之外，我還要再轉完後去把它手動丟到 netlify 上實在有點費神。

### 方案二：Wordpress as CMS + gatsby as front-end + host on netlify with webhook

這其實是別人已經用成一整套的解決方案，詳情可以見這兒：

[https://justinwhall.com/headless-wordpress-gatsby-netlify-continous-deployment/](https://justinwhall.com/headless-wordpress-gatsby-netlify-continous-deployment/)

就如標題所述，他可以讓我繼續用 wordpress 當 CMS，然後前端用 gatsby.js 去 build 出頁面，然後藉由 netlify 提供的 webhook 去自動在每次 update 或 publish 時自動 trigger process。

聽起來的確很舒爽沒錯，我後來沒有使用這個方案的原因，是因為有些文章使用了 Jetpack 的功能：slideshow 和 tile gallery，如果用了這個方案，那些東西就都會變得很醜，甚至會讓整個版面看起來像是壞掉。我也有嘗試把 jetpack 的相關 js 和 css 搬過去，想說套用後應該可以直接會動，但弄了一個下午仍沒弄出來，因而作罷。

### 方案三：回去用靜態網站產生器、後台改用別人的 CMS

這個是 kidwm 提供的解法，他建議了兩個方案：forestry 和 netlifyCMS。

![](/images/Screen-Shot-2019-09-17-at-22.43.07.png)

#### forestry

整體用起來還算不錯，花沒多久就可以串起整個 flow。而且把 HTML 的控制權還回我的手中，算是彈性蠻大的解決方案。

可惜的是他的 CMS 仍舊太簡略，且跟方案二一樣，我用了 jetpack 的那些東西讓我實在沒辦法輕鬆轉換過去⋯ （現在想想繼續研究之前我好像應該把那些東西除掉，不然耦合得這麼深有點難調）

最大阻力仍是「我還是要一篇篇分散管理 Tag」啊，那跟我直接在 local 用編輯器寫東西有什麼不同。

#### netlifyCMS

至於 netlifyCMS 則是在我看完他們官網的影片之後，就覺得他們的編輯器看起來蠻土砲，而且和 forestry 一樣沒法管 Tag。連建立都沒建立就先放棄了，因為一連研究了好幾天，實在也是累了⋯⋯

前面提到的方案二和方案三的方案都是要整個重刻前台，不能直接用 wordpress 的現有主題下去改，這實在也是有點勞累⋯⋯ 最近可能會先擱置這件事了。

結果
--

於是，上述幾個解方都還是不夠令人滿意，也許我還要再花點時間進行前置處理（像是最後提到的 jetpack 拔除）也可能應該耐心把一些該乖乖 debug 的地方處理好。因此，正如各位所見，我目前還是繼續使用 wordpress 的狀態，問題依舊未解決，倒站不能優美下降，所以本篇文章的標題有個「之一」。

希望之後有天能真正解決這個問題，找到最佳解法，到時我就可以來寫個「之二」了。

* * *

更新，前陣子終於偷了點閒，稍稍改進了一下部落格的架構，誕生了這篇文章的後續：「[Blog 加速、穩定計畫之二](https://blog.wildsky.cc/posts/make-wordpress-faster-and-more-stable-2/)」

參考
--

*   [wordpress plugin – jetpack](https://tw.wordpress.org/plugins/jetpack/)
*   [Jekyll – 超好用靜態網站產生器](https://blog.wildsky.cc/posts/static-generator-jekyll/)
*   [部落格搬家: 從 WordPress 搬家到 middleman](https://blog.wildsky.cc/posts/newblog/)
*   [使用 Hugo 來建 blog](https://blog.wildsky.cc/posts/using-hugo-to-build-blog/)
*   [https://wp2static.com/](https://wp2static.com/)
*   [https://www.simplystatic.co/](https://www.simplystatic.co/)
*   [Headless WordPress + Gatsby + Netlify continuous deployment](https://justinwhall.com/headless-wordpress-gatsby-netlify-continous-deployment/)
*   [https://forestry.io](https://forestry.io)
*   [https://www.netlifycms.org/](https://www.netlifycms.org/)
