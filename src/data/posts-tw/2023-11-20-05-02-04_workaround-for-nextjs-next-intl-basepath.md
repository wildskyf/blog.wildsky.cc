---
title: "解決在 Next.js 的 app dir 下同時使用 basePath 和 next-intl 會遇到的問題"
date: 2023-11-20T17:02:04+08:00
slug: "workaround-for-nextjs-next-intl-basepath"
excerpt: "這次的專案因為比較單純，想說來嘗試看看 next.js 的 app dir；恰好之前在推上有看
過有人推薦 next-intl 和 next.js 的搭配，便嘗試了一下。結果卻發現不支援 basePath ..."
feature_image: "maze.jpg"
guid: "workaround-for-nextjs-next-intl-basepath"
---

## 當初為什麼選 next-intl ？

這次的專案因為比較單純，想說來嘗試看看 next.js 的 app dir；恰好之前在推上有看
過有人推薦 next-intl 和 next.js 的搭配，便嘗試了一下。

<https://twitter.com/thecalicastle/status/1699439593156661476>

老實說開發的過程中還算快樂，不太會受到 server component 和 client component 的影響而需
要一直加 `'use client'`，整體開發體驗和過去使用其他 i18n 的 library 差不多。

不過這快樂的時光僅止於 local 而已。

## 不支援 basePath

在 deploy 到 dev 環境後，才發現在 2023/11/20 的這個當下 next-intl in app dir 並不支援 basePath ⋯⋯
爬了一下文有找到這個 issue: <https://github.com/amannn/next-intl/issues/243>，
看了看 comment 也沒有什麼好的 workaround，幾天前有人發 PR，但看來 merge 應該還要一些時間，
想來終究只能靠自己。


## 直接從錯誤訊息下手

如果不使用 middleware 直接在 component call `useTranslation` 的話，會跳 `unable-to-find-locale` 的錯誤訊息，
所以我便直接去 next-intl 的 GitHub Repository 上搜尋 `unable-to-find-locale`：

<https://github.com/amannn/next-intl/blob/12d1bb5ea05e2e41b036d0d68c59ff13a946f841/packages/next-intl/src/server/RequestLocale.tsx#L16>

出來後會找到這個檔案，在第 9 行發現他是直接讀 headers 中的 `HEADER_LOCALE_NAME` 這個變數，實際 val 是 "X-NEXT-INTL-LOCALE"。

這時我們回去自己的 middleware 中，直接用 req.headers 創建新的 headers，然後 `headers.set(HEADER_LOCALE_NAME, "en")` 就可以讓 `useTranslation` 動起來了。

<h2 id='code'>
  Code
</h2>

```tsx
// /src/middleware.ts

import { NextRequest, NextResponse } from 'next/server'
import { locales } from '@/i18n'
import { basePath } from '@/config'
import { resolveLocale } from '@/utils'

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.includes('_next')) {
    return
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`${basePath}/en`, req.url));
  }

  const headers = new Headers(req.headers)
  headers.set('X-NEXT-INTL-LOCALE', resolveLocale(req))
  const res = NextResponse.rewrite(new URL(req.url, req.url), { request: { headers } })

  return res
}

export const config = {
  matcher: [ '/', '/((?!_next|images|videos|favicon).*)' ]
}
```

```tsx
// /src/utils.ts

import { NextRequest } from 'next/server'
import { useTranslations } from 'next-intl'
import { defaultLocale, locales } from '@/i18n'

const resolveLocale = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname
  const [, locale] = pathname.split('/')

  if (!locale.includes(locale)) {
    return defaultLocale
  }

  return locale || defaultLocale
}

export { useTranslations, resolveLocale }
```

Problem solved!
