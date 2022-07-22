---
title: "在 React 中處理 TypeScript Discriminated Union"
date: 2022-07-22T07:47:09
slug: "discriminated-union-in-react"
excerpt: "這兩天工作上在改 TypeScript 的東西，改到一半突然發現某個看起來蠻直觀的寫法居然
會噴錯誤，花了點時間查了以後就順便記錄下來，避免以後又遇到時忘記怎麼解。"
feature_image: "diversity-by-John-Schaidler.jpg"
guid: "2022-07-22-07-47-09_discriminated-union-in-react"
---

## 前言

這兩天工作上在改 TypeScript 的東西，改到一半突然發現某個看起來蠻直觀的寫法居然會噴錯
，花了點時間查了以後就順便記錄下來，避免以後又遇到時忘記怎麼解。

## 正文

原本想說可以利用 TypeScript 的 Union Types 來按情況給不同 props，寫成這樣：

```typescript
interface CommonParentProps {
  // blablabla
}

interface FatherProps extends CommonParentProps { a: string; };
interface MotherProps extends CommonParentProps { b: number; };

type ParentProps = FatherProps | MotherProps;

const Parent(props: ParentProps) {
  return (
    <>
      <div>Other Common Content...</div>

      {props.a && a}
      {props.b && b}
    </>
  )
}
```

結果 TypeScript 似乎有限定必須要在 `if` 中才會進判斷分支，
React 在 render function 中常用 `&&` 當作 `if` 的方式則沒辦法被辨認。
錯誤訊息大致如下：

```
TS2339: Property 'b' does not exist on type 'ParentProps'.
  Property 'b' does not exist on type 'FatherProps'.
TS2339: Property 'a' does not exist on type 'ParentProps'.
  Property 'a' does not exist on type 'MotherProps'.
```

看錯誤訊息很直觀地會想到這個有點蠢的解法：

```typescript
// ...

interface FatherProps extends CommonParentProps {
  a: string;
  b?: null;
};

interface MotherProps extends CommonParentProps {
  a?: null;
  b: number;
};

// ...
```

這樣的改動方式是可以讓 TypeScript 編得過，但維護起來蠻痛苦的，
很難快速直接地看各分支下會用到哪些 props。

後來想了一下改成這樣：

```typescript
interface CommonParentProps {
  // blablabla
}

interface FatherProps extends CommonParentProps { a: string; };
interface MotherProps extends CommonParentProps { b: number; };

type ParentProps = FatherProps | MotherProps;

const FatherPart = ({ a }: FatherProps) => (<>{a}</>);
const MotherPart = ({ b }: MotherProps) => (<>{b}</>);

const Parent(props: ParentProps) {
  return (
    <>
      <div>Other Common Content...</div>

      {props.a && <FatherPart {...props as FatherProps} />}
      {props.b && <MotherPart {...props as MotherProps} />}
    </>
  )
}
```

感覺還算優雅，不知道有沒有更好/更正規的做法就是了。


## Ref

- [Inline If with Logical && Operator (reactjs.org)](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)
- [Getting error with type using Typescript union (stackoverflow.com)](https://stackoverflow.com/a/70363485/5032696);
- [Working with Union Types (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#working-with-union-types)
- [React props - struggling with discriminating union types (stackoverflow.com)](https://stackoverflow.com/questions/68308390/react-props-struggling-with-discriminating-union-types)
- [Advanced typescript for React developers - discriminated unions (developerway.com)](https://www.developerway.com/posts/advanced-typescript-for-react-developers-discriminated-unions)
- [Expressive React Component APIs with Discriminated Unions (blog.andrewbran)](https://blog.andrewbran.ch/expressive-react-component-apis-with-discriminated-unions/)
