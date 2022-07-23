---
title: "Jekyll – 超好用靜態網站產生器"
date: 2015-07-11T22:41:34
slug: "static-generator-jekyll"
excerpt: "依照慣例，在每一篇文章之前都要哀號一下：這篇其實想寫很久了，只是因為事情太多一直沒時間開始撰寫，還有許多文章想"
feature_image: null
guid: "2015-07-11-22-41-34_static-generator-jekyll"
---
依照慣例，在每一篇文章之前都要哀號一下：這篇其實想寫很久了，只是因為事情太多一直沒時間開始撰寫，還有許多文章想寫，只能趕快趕稿了QAQ

![Jekyll](/images/jekyll.png)

今天想介紹的是 Jekyll，他是一個近幾年來非常有名的靜態網站產生器，你可以用他來寫部落格。 有一個網站叫做 [staticgen](https://www.staticgen.com/)，他是專門統計靜態網站產生器的使用情況，一點進去就可以看到 Jekyll 非常霸氣地穩居第一名，他在 GitHub 的 repo 的星星數就算除以而還是大勝第二名的 Octopress，所以就讓我覺得應該好好介紹一下這個有趣的工具。

![staticgen 靜態網站產生器排名](/images/ssg-rank.png)

講起 Jekyll 就不得不提到 GitHub Pages 了，這個產生器之所以會這麼有名，就是因為 GitHub 它使用這個服務來提供 GitHub Pages 的服務，那為什麼選擇 Jekyll 呢？他有許多厲害的特色，請聽我娓娓道來…

特色
--

### YAML Front Matter

每個一頁面你都可以自己替他定義變數——你可以直接把每一個頁面都當作是一個 Json，你要什麼值就直接在 front matter 設就好，甚至連全站變數你都可以直接在 `_config.yml` 裡面設定。

如果有一個你可能需要常常改變的數字（像是每次更新就要更動的版本號之類的），一有更新就可以直接該動那一個數字，網站的其他有使用到這個變數的地方就可以快速更新，不用擔心有很多地方要改、會不會不小心漏掉之類的問題。

### 支援原生 Sass & CoffeeScript

有沒有支援 CoffeeScript 我還不曉得（因為我之前沒有在寫 CoffeeScript），但支援 Sass 就是一件令人振奮的事實啊！可以在 .sass 檔裡面使用「變數 (Variable)」、「巢狀 (Nesting)」、「函式 (Mixin)」、「繼承 (Extend)」… 這些方便的功能，讓受 Jekyll 更加受人喜愛。

### 支援直接使用 .json 檔

如果你的網站有多資料，那你就可能會想要把他放在一個單獨的檔案裡面，很常見的儲存的格式就是 json，剛好 Jekyll 也可以讀 .json 檔，你只要把他放在 \_data 這個資料夾之下，你就可以用 <span class=“pl-s1”>site.<span class=“pl-c1”>data 去呼喚裡面的資料，比如說你存了 { { id: 1, name:Wildsky }, { id:2, name: Angela } } 在一個名叫 family.json 的檔案中，那你就可以用 {{ site.data.family }} 叫出你存在裡面的這個 json 物件，至於有了 json 有什麼好處就不再贅述了。

### Liquid

剛剛我在呼叫那個 json 物件的時候，你可能就已經發覺了，Jekyll 是用 Liquid 來對話的！這也就是說你可以在網頁中使用諸如 {% for post in posts %}{{ post }}{% endfor %} 這樣的語法，換句話說，你可以用迴圈、判斷、排序… 一切 Liquid 裡面有支援的功能，不得不承認，這也是令人喜歡 Jekyll 的一大原因啊！

### Markdown

相信有寫過 Markdown 的人一定對他的易讀性和易用性感到非常之驚豔，好消息是，Jekyll 也支援 Markdown 啦！只要你把副檔名存成 .md 他就會自動幫你把文章轉成 html，你再也不必用 html 來寫一篇新文章囉！

怎麼開始使用呢？
--------

如果你因為我這樣隨口講一講就想用 Jekyll 了，那要如何開始呢？（也是沒有這麼好說服啦… 但我就只是想要講怎麼用而已），如果你有在你的電腦安裝 ruby & gem 的話，你要做的就只有在 Terminal 中輸入下面的指令，就安裝完成了

`gem install github-pages --no-ri --no-doc`

那安裝完之後呢？一個快速開啟範本的方式就是直接輸入下面這個指令

`jekyll new project_name`

這時候他就會在當前目錄下建立一個叫做 project\_name 的資料夾（你也可以命名為 yo, hey 之類的，whatever），然後裡面就有你所需要的 Jekyll 的東西，內容大致如下：

    .
    ├── about.md              # 你可以用 markdown 來寫，他會自動幫你轉為 html
    ├── _config.yml           # 關於設定的檔案，全站變數、資料夾架構
    ├── css                   # 這裡是會產生出來的 css 檔資料夾
    │   └── main.scss
    ├── feed.xml              # 這個是給你的讀者訂閱的 rss 的 xml 檔
    ├── _includes             # 用來 include 的檔案們所在的資料夾
    │   ├── footer.html
    │   ├── header.html
    │   └── head.html
    ├── index.html
    ├── _layouts              # 這裡是放要套用的版型的地方
    │   ├── default.html
    │   ├── page.html
    │   └── post.html
    ├── _posts                # 預設的文章放置處，
    │   └── 2015-07-11-welcome-to-jekyll.markdown
    └── _sass                 # 會被 include 的 sass 檔們所在的資料夾
    ├── _base.scss
    ├── _layout.scss
    └── _syntax-highlighting.scss


上面的只是 Jekyll 自己預設的資料夾架構，你如果想把 main.scss 放在根目錄下，就直接在 \_config.yml 中設定就好，看到這裡你可能會疑惑：「為什麼有的檔案或資料夾前面會有底線？」這個底線的意思就是說 Jekyll 在產生網站時，會視他為特殊文件，不會將他當作一般的文件處理，在你將他跑起來的時候，Jekyll 會額外產生一個資料夾叫做 \_site，這個就是會 public 的完整檔案架構，有底線的檔案就不會出現在裡面，換句話說，他就不會被處理，只作為被 include 的檔案存在著。

那最後一關，我們要怎麼把他 run 起來呢？很簡單，只要在 project\_name 這個目錄之下，接下來，就只要輸入 `jekyll serve`，你就能在 localhost:4000 中看到你的網站囉！

相關連結
----

*   Jekyll 官網：[http://jekyllrb.com](http://jekyllrb.com/)
*   Static Site Generators 排名網站：[staticgen](https://www.staticgen.com/)
*   GitHub Pages：[http://pages.github.com](http://pages.github.com/)
*   YAML 官網：[http://yaml.org](http://yaml.org/)
*   SASS 官網：[http://sass-lang.com](http://sass-lang.com/)
*   CoffeeScript 官網：[http://coffeescript.org](http://coffeescript.org/)
*   CoffeeScript Instruction: [http://www.whoishostingthis.com/resources/coffeescript/](http://www.whoishostingthis.com/resources/coffeescript/)
*   Json：[http://json.org](http://json.org/)
*   Liquid：[http://liquidmarkup.org](http://liquidmarkup.org/)
*   Ruby 台灣：[http://www.ruby-lang.org](http://www.ruby-lang.org/)
*   Ruby Gem：[http://rubygems.org](http://rubygems.org/)
*   Markdown 台灣：[http://markdown.tw](http://markdown.tw/)

我手邊使用到 Jekyll 的專案
-----------------

*   Front-End Taiwan：[https://github.com/f2etw/f2etw.github.io](https://github.com/f2etw/f2etw.github.io)
*   新酷音輸入法總部：[https://github.com/chewing/chewing.github.com](https://github.com/chewing/chewing.github.com)
*   Fedora Taiwan 社群支援站：[https://github.com/linux-taiwan/fedora.linux.org.tw/](https://github.com/linux-taiwan/fedora.linux.org.tw/)
*   師大學生會網站：[http://github.com/NTNUSA-info/NTNUSA-site](http://github.com/NTNUSA-info/NTNUSA-site)
