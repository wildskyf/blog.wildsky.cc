---
title: "使用 NextAuth.js 來串接 Line Login 時可能遇到的問題"
date: 2023-04-20T17:18:22+08:00
slug: "line-nextauth-problem"
excerpt: "最近有個機會要串接 Line Login API，而在實作的過程中遇到了一些問題，因此想要在這篇文章中記錄一下所遇到的問題和解決方式。"
feature_image: "nextauth-line.jpg"
guid: "line-nextauth-problem"
---

最近有個機會要串接 Line Login API，而在實作的過程中遇到了一些問題，因此想要在這篇文章中記錄一下所遇到的問題和解決方式。

在這次的專案中，我選擇使用 Next.js 做前後端，並搭配 NextAuth.js 做使用者認證的機制。

NextAuth.js 提供了一些內建的設計和 function，例如可以直接搭配 Next.js 的 Dynamic Routes 把 `/api/auth` 之下的路徑都吃下來做認證相關的 routes。另外，開發者也可以直接在前端呼叫 `signIn("line")` 這個 function，就能夠自動跳轉到 LINE LOGIN 的頁面。這些設計都蠻方便的，省了我不少麻煩。

然而，在串接的過程中，我還是遇到了幾個小問題。

首先，如果跳轉到 LINE LOGIN 的頁面時，出現了 invalid uri 的提示，那很有可能是因為沒有在 Line dev 後台填寫 callback url。

如果後台已經有填寫了，但跳轉過去還是回傳 invalid uri 的話，可以試著把後台的 callback url 都清空，只填 localhost，看看是否有解決問題。如果只填 localhost 卻能夠成功跳轉到 LINE LOGIN 頁面，那麼很有可能是網站上線時忘記設定環境變數了。

在把 NextAuth.js 部署到 production 環境時，要記得設定下列兩個變數：

* `NEXTAUTH_URL`
* `NEXTAUTH_SECRET`

其中，`NEXTAUTH_URL` 基本上就是 production 網站的 domain，而 `NEXTAUTH_SECRET` 則可以使用以下命令產生：

```bash
openssl rand -base64 32
```

或是直接進入這個網站 <https://generate-secret.vercel.app/32> 產生。

另外，因為我要串接的是 LINE，所以還需要設定 `LINE_ID` 和 `LINE_SECRET`。

如果還需要跟使用者索取 email 權限的話，可以參考 [這篇文章](https://studyhost.blogspot.com/2019/04/clinebot30-line-loginemail.html)，

至於 nextauth 的 provider 中的寫法則是寫成這樣：

```JavaScript
export const authOptions = {
  providers: [
    LineProvider({
      clientId: process.env.LINE_ID,
      clientSecret: process.env.LINE_SECRET,
      authorization: { params: { scope: 'profile openid email' } },
    }),
  ],
}
```

## Ref

- <https://next-auth.js.org/configuration/options#nextauth_secret>
- <https://nextjs.org/docs/advanced-features/dynamic-import>
