---
title: "在 function 中使用 TypeScript Generic"
date: 2022-12-14T14:00:00
slug: "typescript-generic-in-function"
excerpt: "最近工作上在寫 TypeScript 時有個發現，有些寫法 typescript compiler 和 lint 都會
不滿，不特別改寫法的話兩邊都會一直哇哇叫。"
feature_image: "eslint-n-typescript-yelling-me.jpg"
guid: "typescript-generic-in-function"
---

最近工作上在寫 TypeScript 時有個發現，有些寫法 typescript compiler 和 lint 都會
不滿，不特別改寫法的話兩邊都會一直哇哇叫。

```TypeScript
function a<T extends unknown>(x:T, y: T) {}
```
可以轉成
```TypeScript
const a = <T extends unknown>(x:T, y:T) => {}
```

但

```TypeScript
function a<T>(x:T, y: T) {}
```
不能轉成
```TypeScript
const a = <T>(x:T, y:T) => {}
```

lint 會自動做第一個轉換，會直接把 `function` 自動變成 `const`，
但第二個就不會。

如果我手動寫成 without extends 的格式（第四種）就會 compile error。


而且更有趣的是，lint 做第一次轉換後 lint 還是會哇哇叫，
他會說 `T extends unknown do nothing and is unnecessary` 然後噴 lint error。

但拔掉 extends unknown 後就會像上面說的變回 compile error 了。

所以最後就只能寫成第三種了。

```TypeScript
function a<T>(x:T, y: T) {}
```

寫文章時去查了一下，發現好像是 tsx 的關係，會把 `<T>` 解讀成 React 的 open tag，
造成 compile error，所以也可以寫成

```
const a = <T,>(x:T, y:T) => {}
```

就編得過了。

## 結語

最近真的深深覺得，直到學會 Generic type 後才開始算是會寫 TypeScript 。

---

# Ref

- <https://www.typescriptlang.org/docs/handbook/2/generics.html>
- <https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics>
