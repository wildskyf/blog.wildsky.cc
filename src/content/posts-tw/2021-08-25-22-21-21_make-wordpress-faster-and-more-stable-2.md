---
title: "Blog 加速、穩定計畫之二"
date: 2021-08-25T22:21:21
slug: "make-wordpress-faster-and-more-stable-2"
excerpt: "<p>前篇是 WordPress 加速、穩定計畫之一。 這次改版採用了上次提到的「換前端不換後端」的方案，雖然一樣有&#8230;</p>
"
feature_image: stephen-phillips-hostreviews-co-uk-sSPzmL7fpWc-unsplash-1.jpg
guid: "https://blog.wildsky.cc/?p=1751"
---
前篇是 [WordPress 加速、穩定計畫之一](https://blog.wildsky.cc/posts/make-wordpress-faster-and-more-stable)。

這次改版採用了上次提到的「換前端不換後端」的方案，雖然一樣有上次提到的 jetpack 的問題，但目前我打算先忍著不管那個樣式，之後想到再修掉，反正用到的地方不多，影響相對不大。

事前
--

我的規劃如下：

*   Data Provider 維持 WordPress，好讓我可以在後台寫文章，也恰好 WordPress 有提供 Restful API，所以就可以直接拿到大部分想要的資料（未來改版再來換掉）
*   前台採用 Next.js 當作靜態網站產生器，每次更新部落格時再自動去 build & deploy
*   host 搬到 Netlify

這次也順便嘗試了新的東西： Functional CSS，我直接使用了 Tailwind CSS 來幫助我把整個部落格的樣式都重寫了一遍。

這樣之後發布文章的流程就變成：

1.  在 WordPress 後台寫文章
2.  在按下發布鈕之後，系統再自動去 trigger Netlify 的自動 build & deploy
3.  在 build 的過程中 Next.js 就會去打 WP API，拿到資料後再套進寫好的 React code 輸出靜態網站
4.  Netlify 就會接著把靜態網站佈上去，如果 build & deploy 的過程中出錯，網站網址就會是舊版的

簡單講就是，以前的部落格是 WordPress 在 runtime 組裝網站，現在是我有更新後在 offline build 網站，使用者瀏覽的都是靜態頁面。

這樣既能方便地撰寫文章，又能讓網站更穩定更快。根本就是那句「小孩子才做選擇，我全都要」的最佳實踐。XD

不過講歸講，我目前完成的部分還只有前台，中間的「按下發布後自動 trigger Netlify」的部分尚未實作，但因為使用的機會較少，待日後更常寫文章再來研究如何串接。

* * *

遇到的困難
-----

雖然上面講得好像很輕鬆很美好，但實際上有遇到不少問題。

過程流水帳我就不講了，這邊直接一一記下我遇到的問題：

### 接 WP API 的煩悶處

雖然 WP 有 Restful API 感覺好像很方便可以取用資料，但接的過程中才會踩到不少雷。

首先是 blog 裡面有許多地方都有用到 menu，但 WP API 卻沒有內建支援這個功能，需要額外安裝 WP-REST-API V2 Menus 這個 plugin。雖然安裝一下就好，但總是會有一種越乾淨越好的嚮往。畢竟越少的設定、越少的 Code 就代表需要維護的東西就更少，所以如果可以的話，當然是把這種需求都內建在 WP API 裡面會最讓人心情愉快，而且 plugin 畢竟是 plugin，WP 常見的問題就是 plugin 會互相衝突，誰知道會不會哪天裝了什麼必要 plugin 又開始互相影響⋯⋯

另外一點是，WP API 都是直接回 html code，所以我在 Next.js 裡面要寫 react 就會被迫直接把 API 來的文字丟進 `DangerouslySetInnerHTML` 裡面，很不賞心悅目（？）。

除此之外，Article 相關的 CSS 也都連帶沒辦法使用 Functional CSS，只能在 parent node 上加一些 class name 然後在 global.css 裡面寫樣式讓下層套用了。

### Build time 很常出錯

再來遇到的問題是，auto deploy 的過程中很常 fail。常常 yarn install 到一半就出錯，yarn install 成功後，又可能 next.js 在打 WP API 的過程中打到 WordPress 太忙直接 500 導致 build fail，就只能手動再去 trigger 一次，auto 都不 auto 了⋯

WP API 的這個問題我還沒有去想辦法解決，暫時也先不管，反正一來不影響網站的穩定，可以日後慢慢看要不要解決；二來之後應該也會想把內容全部 migrate 到另一個地方，離開 WordPress 的 約束 懷抱。而 yarn install 壞掉的那邊，暫時還沒想到什麼好的解法，一樣因為不影響網站 uptime 所以之後再找時間研究。

### i18n 只能 workaround

Next.js 沒有提供 serverless 的 i18n 解決方案，所以只能自己克難地開 `/en` 資料夾，模擬原本 WordPress 裡面英文文章的網址。又因為想把中文＆英文文章分開，不想在中文站的列表中看到英文文章，所以在 build 的時候就需要讓 next.js 知道文章的語言，但 Polylang 只有在 premium 裡面有支援 WP API，我又不想因為這個暫時的階段而去花沒必要的錢，所以就只好自己開 tag 來當 i18n 分開文章的 workaround。

### Embeded content

有些文章裡面會有 WordPress 內嵌的那種別的 WordPress 網站的文章，這個東西莫名在手機上會顯示不出來，de 了好久的 bug 才終於發現 WordPress 會在 iframe load 完成時把某些 style 加上或拿掉⋯ 這件事花了很多天，實在有點浪費時間。

之後
--

之後打算把 WordPress 換掉，看是要自己寫一個後台或是看有沒有其他適合當 data provider 的東西。屆時再來慢慢找，然後再出個「Blog 加速、穩定計畫之三」。
