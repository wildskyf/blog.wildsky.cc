---
title: "使用 Hugo 來建 blog"
date: 2017-11-24T15:00:23+08:00
draft: false
categories:
  - 部落格經營
tags:
  - hugo
---

最近開始想要學點後端的東西，WM 便建議我可以去學 Golang，於是我就將身邊會用的幾
個東西變得跟 Golang 相關：

- server => 使用 caddy
- static website generator => 使用 hugo
- … 好像就這樣XD

# caddy

可以去參考一下他的官網[^1]，主打自動 http2 + https，在這個時代沒有 https 都讓
人心生不安。除了自動 https 之外，他還可以接 github 的 webhook，不過有點尷尬的
是我一直接錯，直到寫這篇文章的前兩分鐘才接起來，之後我只要 `git push origin
master` 他就會自動幫我 deploy 到機器上了～

順帶一提我接錯的點好了，在 `<https://github.com/<username>/<repo_name>/settings/hooks/>` 中可以新增 webhook
其中會有一個 Payload URL，這邊是填你要讓 hook 戳的網址，像是 `https://example.com/webhook`，這樣 github 在收到 event 時，
就會發一個 request （之類的東西XD）到這個網址。

然後是 Caddy 的設定，基本上就是一個 Caddyfile 裡面一堆潮狀結構，如下：

```
example.com {
        tls email@example.com
        root /var/www/example.com/public
        gzip
        git github.com/<username>/<reponame> {
                path /var/www/example.com/
                clone_args --recursive
                pull_args --recurse-submodules
                interval -1
                hook /webhook <secret-key>
                hook_type github
                then hugo --destination=/var/www/blog.wildsky.cc/public
        }
        hugo
}
```

其中值得一提的是，在 git 下面有個 hook 裡面要填 網址 和 secret-key，這邊指的網
址就是你預計會被 GitHub 戳的那個，我好像因為看了好幾篇不同人寫的文章，設定混在
一起，結果兩個對不上，auto-deploy 就沒反應了…

# hugo

基本上靜態網站生成器其實也都差不多，比較有趣的是他有 theme 的系統，所以可以直
接 `git submodule add https://github.com/wildskyf/hugo-theme-ws themes/ws` 然
後修改 `config.toml` 裡面的 `theme = 'ws'` 就能夠使用別人做的 theme。

除此之外，他還支援 subtheme，所以我可以直接用 ws 這個主題當底，然後加上自己想
要的結構、樣式，真的非常地彈性，像我現在的部落格主題就是基於 kiss[^2] 修改的，
從我的部落格的 repo[^3] 可以看到我可以在 `layouts/`、`static/css/custom.css` 下修改
東西，他就會直接覆蓋掉主題裡面相對應的檔案，像 `layouts/index.html` 就會蓋掉
`themes/kiss/layouts/index.html`。

突然想到還有踩到一個雷，kiss 這個主題裡面有定義一個 data，放在 `data/` 這個資
料夾下，但是我當時的 hugo 的版本（v0.30.2）似乎讀不到 `data/` 下 `.toml` 的檔，直到我更新
後（v0.31）才沒這個問題，有空再去翻一下 commit 好了。

# 後話

等部落格到一段落，我就要去讀＆試用看看 golang 的 net/http 了，之後再去看
gozilla/mux，好多事情可以做啊！

[^1]: <https://caddyserver.com/>
[^2]: <https://github.com/ribice/kiss/>
[^3]: <https://github.com/wildskyf/blog.wildsky.cc/>
