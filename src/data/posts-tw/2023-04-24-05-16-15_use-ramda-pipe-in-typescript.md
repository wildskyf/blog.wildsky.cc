---
title: "在 TypeScript 中使用 Ramda Pipe function"
date: 2023-04-24T17:16:15+08:00
slug: "use-ramda-pipe-in-typescript"
excerpt: |
  今年的其中一個目標是熟悉 functional programming，所以前陣子很常在專案中嘗試 Ramda.js 這個 library。也因為公司習慣使用 TypeScript，所以我自己的專案中也通常會用 TypeScript。
  最近在 TypeScript 專案中使用 Ramda.js 時遇到了 type error，便想寫個文章記錄一下，方便以後再次遇到時能快速回想起如何調整。
feature_image: "pipeline.jpg"
guid: "use-ramda-pipe-in-typescript"
---

今年的其中一個目標是熟悉 functional programming，所以前陣子很常在專案中嘗試
Ramda.js 這個 library。也因為公司習慣使用 TypeScript，所以我自己的專案中也通常會用 TypeScript，幫助自己更加熟悉這個語言。

最近在 TypeScript 專案中使用 Ramda.js 時遇到了 type error，解決問題後便想寫個文章記錄一下，方便以後再次遇到時能快速回想起如何調整。

專案自然要先依循慣例，在最前面使用 import 來引入到 R 中。
```typescript
import * as R from 'ramda'
```

如果在 `.ts` 檔中直接這樣寫的話：

```typescript
R.pipe(
	/* 其他 function */
)
```

TypeScript 會報錯，說 TypeScript 不認識你的 input & output type。
這是因為 `R.pipe` 會需要知道一開始的 input type 及過程中每個 function 的 output type。

拿下面這段程式碼來解釋得更細一點：

```typescript
  const getDiseases = R.pipe<
    [TestData],
    { a: string }[] | undefined,
    { a: string }[],
    string[],
    string[]
  >(
    R.path(['path', 'to', 'data']),
    R.defaultTo([] as { a: string }[]),
    R.pluck('phenotype'),
    R.uniq
  )
```

一開始的 input 是 `TestData`，所以寫在 `<>` 的第一個 argument，
要注意的是會需要用一個 array 包起來，目前不知為何，之後再查。

第二個 argument 則是 `R.path(['path', 'to', 'data'])` 的 output，依此類推。
所以最後 `<>` 中的 argument 數量會比 pipe 中的 function 數量多一。

中間有一個 `R.defaultTo` 是因為 `R.path` 如果找不到的話，會回 `undefined`，
所以他 output type 會變成 `{ a: string }[] | undefined`，這樣沒辦法直接給 `R.pluck`，
直接改的話 typescript 會報錯，所以必須加上 `R.defaultTo` 來把 undefined 的可能性處理掉才可以正常地 `R.pipe`。

## 後記

寫完文章的隔天發現，原來 ramda.js 有提供 `R.pathOr`。XD
