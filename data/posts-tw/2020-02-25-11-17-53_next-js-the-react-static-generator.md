---
title: "Next.js &#8211; 使用 React.js 的靜態網站產生器"
date: 2020-02-25T11:17:53
slug: "next-js-the-react-static-generator"
excerpt: "<p>最近因為工作上的需要，開始在研究 Next.js 這個框架。 Why 選擇一樣新技術/框架的時候總要從「為什麼&#8230;</p>
"
feature_image: 螢幕快照-2020-02-25-上午11.14.08.png
guid: "https://blog.wildsky.cc/?p=1572"
---
最近因為工作上的需要，開始在研究 Next.js 這個框架。

Why
---

選擇一樣新技術/框架的時候總要從「為什麼出發」，這邊就列一下我們團隊＆專案的需求：

*   **Static Website**：因為我們主要是去爬資料，然後跑一些分析，最後直接產生頁面出來。比較不會有 user generate 的部分，所以可以變成靜態網站。靜態網站的好處有很多，不用擔心 DB 會掛，可以不用 Server 直接丟 S3。
*   **React.js**：我們公司的 99% 的網站產品都是用 react.js 打造而成的，所以為了讓大家方便交接寫得習慣。此外，用 React 就有幾個內建的好處：
    *   可以動態 routing，速度比較快
    *   Component 化，重用性高
    *   資料導向，一樣好維護

這兩個算是 Required，另外還有兩個：

*   Event Trigger：根據 DB 的更動，event trigger 地重 build 靜態網站
*   Progressive Build：重 build 的時候，不要重 build 那些已經 build 過一次的網站

後面這兩項根據我目前的研究，看起來還沒有辦法達成。可能還是只能在我們的 piepline 裡面固定 call to build。

不過很多人都知道且會想問：用 React.js 的靜態網站除了 Next.js 之外，還有 GatsbyJS 呀！Why Next.js？

Why Next.js
-----------

之前在研究的時候，曾經看到一則推文：

[![](/images/螢幕快照-2020-02-25-上午10.19.56-1024x665.png)](https://twitter.com/gatsbyjs/status/929922732870983680)

「Google Page Speed 不太有用。」 -—— [Gatsby on Twitter, 2017](https://twitter.com/gatsbyjs/status/929922732870983680)

據我猜想（代表沒有特別研究，只是猜想），Google Page Speed 的評價應當會有部分地被 Google Search 作為 Ranking 的判斷標準之一，所以多少還是要看一下他的分數。

對於一個技術框架的公關來說，這個回應實在不太讓我欣賞。

此外，今年稍早我又看到一個消息：

> Google has been investing in a variety of web frameworks, including Next.js, to help developers build better web applications.
> 
> [An insider’s look at Google’s web framework contributions to Next.js and more](https://www.techrepublic.com/article/insiders-look-at-googles-web-framework-contributions-to-next-js-and-more/)

Google 來投資 Next.js 欸，我還不用爆！

簡單介紹
----

這邊就簡單介紹一下 Next.js 的幾個特點，至於詳細的用法就請自行去看他的[教學](https://nextjs.org/learn/basics/getting-started)和[文件](https://nextjs.org/docs/getting-started)了。

### 1\. 用資料夾來 Routing

他有一個 `pages/` 的特殊資料夾，在裡面建立 `index.js` 就會對應到首頁；建立 `about.js` 就對應到 `/about` 十分直覺。

至於動態 routing（`/posts/123`）這種網址就直接在 `pages`/ 中建一個 `posts/` 資料夾，然後在裡面建立 `[articleId].js` ，就可以在裡面拿到 `articleId` 的值，進行對應的資料擷取與處理了。

### 2\. 框架支援 Static Gen 和 SSR 兩種方式

只要你沒有在頁面中用 `getInitialProps` 這個靜態方法，那你的頁面就會被 build 成純 HTML。

如果用了，就要看你在 `next.config.js` 中的設定：[Automatic Static Optimization](https://nextjs.org/learn/excel/automatic-static-optimization/finally)。

### 3\. 利用 `exportPathMap` 打 API 把動態的頁面全部 render 出來

就是這章，我找了好久：[static-html-export](https://nextjs.org/learn/excel/static-html-export)。有了這個就可以直接把該打的資料先打一打，然後把整個 routing tree 都 gen 出來。

### 4\. 使用 `styled-jsx`

我自己很喜歡這種寫法，雖然他也支援其他的 CSS 引入方式，但用了一下覺得十分稱手。且 `styled-jsx` 亦是 zeit 家開發的，next.js + styled-jsx = 信仰超值啊。

### 5\. 其它

還支援動態引入 module 和 component 的 feature 我還沒有時間去看，短期內應該也還用不到，所以暫且按下不表。

結尾
--

這篇文章只是簡單記錄選擇的心路歷程，順便介紹一下這個最近蠻喜歡的框架。如果需要更詳細的功能介紹，可以去看 [Eden Liu](https://eden-liu.com/) 的 [Next.js – 再多認識你一點](https://eden-liu.com/frontend/next-js-more/)。雖然是 2018 年初的文章，但大 feature 應當大同小異，不過為了確保東西都能如預期，還是建議去讀官方的 [教學](https://nextjs.org/learn/basics/getting-started) 和 [文件](https://nextjs.org/docs/getting-started) 啦。