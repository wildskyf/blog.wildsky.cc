---
title: "A Workaround for Using basePath with next-intl in the Next.js App Directory"
date: 2023-11-20T17:02:04+08:00
slug: "workaround-for-nextjs-next-intl-basepath-en"
excerpt: "Since this project was relatively simple, I decided to try the Next.js App Directory. I had also seen someone recommend using next-intl with Next.js, so I gave it a try—only to discover that it did not support basePath."
feature_image: "maze.jpg"
guid: "workaround-for-nextjs-next-intl-basepath-en"
category: "Software Engineering"
tags: [Next.js, next-intl, basePath, Internationalization, i18n, Troubleshooting]
---

## Why I Chose next-intl

Since this project was relatively simple, I decided to try the Next.js App Directory. I had also seen someone recommend using next-intl with Next.js on Twitter, so I gave it a try.

<https://twitter.com/thecalicastle/status/1699439593156661476>

Honestly, the development experience was quite pleasant. I rarely had to keep adding `'use client'` because of the distinction between Server Components and Client Components. Overall, it felt similar to working with other i18n libraries I had used in the past.

Unfortunately, that pleasant experience only lasted while I was developing locally.

## No Support for basePath

After deploying the application to the development environment, I discovered that, as of November 20, 2023, next-intl did not support `basePath` when used with the Next.js App Directory.

After searching around, I found this issue: <https://github.com/amannn/next-intl/issues/243>.

There did not seem to be a good workaround in the comments. Someone had opened a pull request a few days earlier, but it looked like it would still take some time to be merged. In the end, I decided to find a solution myself.

## Starting with the Error Message

If you do not use middleware and call `useTranslations` directly inside a component, next-intl throws an `unable-to-find-locale` error.

I searched for `unable-to-find-locale` in the next-intl GitHub repository and found this file:

<https://github.com/amannn/next-intl/blob/12d1bb5ea05e2e41b036d0d68c59ff13a946f841/packages/next-intl/src/server/RequestLocale.tsx#L16>

On line 9, I found that it reads the `HEADER_LOCALE_NAME` value directly from the request headers. The actual header name is `X-NEXT-INTL-LOCALE`.

With that information, we can return to our middleware, create a new `Headers` object from `req.headers`, and call `headers.set(HEADER_LOCALE_NAME, "en")`. This allows `useTranslations` to work correctly.

<h2 id="code">
  Code
</h2>

```tsx
// /src/middleware.ts

import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/i18n';
import { basePath } from '@/config';
import { resolveLocale } from '@/utils';

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.includes('_next')) {
    return;
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`${basePath}/en`, req.url));
  }

  const headers = new Headers(req.headers);
  headers.set('X-NEXT-INTL-LOCALE', resolveLocale(req));
  const res = NextResponse.rewrite(new URL(req.url, req.url), { request: { headers } });

  return res;
}

export const config = {
  matcher: ['/', '/((?!_next|images|videos|favicon).*)'],
};
```

```tsx
// /src/utils.ts

import { NextRequest } from 'next/server';
import { useTranslations } from 'next-intl';
import { defaultLocale, locales } from '@/i18n';

const resolveLocale = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;
  const [, locale] = pathname.split('/');

  if (!locales.includes(locale)) {
    return defaultLocale;
  }

  return locale || defaultLocale;
};

export { useTranslations, resolveLocale };
```

Problem solved!
