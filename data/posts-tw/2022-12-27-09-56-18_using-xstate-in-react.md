---
title: "xstate 在 react 中，不同的引入方式分別有何好處"
date: 2022-12-27T21:56:18+08:00
slug: "using-xstate-in-react"
excerpt: "最近在工作上使用了 xstate。今天這篇文章想討論的是，xstate 這套工具在 react 中使用不同的引入方式分別有什麼好處。"
feature_image: "harli-marten-two-talking.jpg"
guid: "using-xstate-in-react"
---

最近在工作上使用了 xstate，這是一套狀態管理工具，其基底概念就是 state machine，
網路上蠻多基礎教學和介紹文章的，有興趣研究如何使用狀態機管理狀態的可以去看看 [官方的文件](https://xstate.js.org/docs) 和 [xstate awesome](https://github.com/darrylhebbes/awesome_xstate)。

今天這篇文章想討論的是， **xstate 這套工具在 react 中使用不同的引入方式分別有什麼好處**。

xstate 這個工具是 [基於 SCXML 的規範](https://xstate.js.org/docs/guides/scxml.html)，所以可以做到狀態機的階層概念。
我們可以在 state node 中 invoke 子狀態機，並設定 onDone onError 決定他們在狀態機完成或失敗時的這兩種情況下的下個 state、或是要執行什麼 action。

而 react 恰巧也有子母 component 的概念。這就出現了一個問題：

> 我們應該要在 react 中維護這棵狀態樹，還是應該善用 xstate 的子母狀態機呢？


首先講比較單純的部分：「將狀態樹維護全權交由 React 管理」。

## 將狀態樹維護全權交由 React 管理

這種方式是 [just use prop 這篇文章](https://dev.to/mattpocockuk/just-use-props-an-opinionated-guide-to-react-and-xstate-fc9) 所推崇的方式，文章作者說：

> 能力越大則責任越大，將 xstate 的能力限制在一定規範之下，是我們將 xstate 引入到專案中的重要第一步。

這種方式遵循著 React 的程式撰寫習慣，
在每個 component 下直接使用 `@xstate/react` 提供的 `useMachine` 來呼叫該 component 對應的狀態機。

好處就是很單純，直接把 xstate 當成有限狀態機版本的 useState，
不用想怎麼拿到 child machine、不用想怎麼傳到下層及傳下去後該呼叫 useActor 還是 useSelector 來使用該 machine。
一個 machine 就只管這個使用他的 component 的狀態就好。
machine 的存滅也就跟著 component 的生命週期，就是一切都跟著 react 的開發習慣。

不過缺點也很明顯，就是這樣做的話 xstate 的威力就被大幅度地縮小了。
舉例來說，我們沒辦法使用 invoke machine 回傳的 onDone/onError，
自動切換 parent machine state 的功能，變成要自行在 React 中去 call 母 component 的狀態機，
發 event 要它改 state 或執行對應 action；
我們也無法從 @xstate/inspect 好好地看出狀態機之間的 event 溝通、或子母階層關係。

另一種方式是我正在嘗試的：「一個 React app 只在最上層使用一次 useMachine，而下層的 state management 則留在 machine 中，由母狀態機 invoke 子狀態機」

## 使用 xstate 的階層功能，在 react 中將子狀態機傳給下層

上層的 machine 可以透過 `service.children.get('child-machine-invoke-id')` 來取得子狀態機

如果是在 TypeScript 中的話，子狀態機的檔案除了要將 create 出來的 machine 給 export 之外，
可能也會因為 typing 的需求而要 export actor type：

```typescript
import { createMachine, ActorRefFrom } from 'xstate'

const childMachine = createMachine({
	/* config */
})

export type childMachineServiceType = ActorRefFrom<typeof childMachine>
```

本來想得很簡單，以為這樣就可以了，直到存擋後撞到 TypeScript 的抱怨：

```
service.children.get('child-machine-invoked-id')

service.children does not exist on type ActorRefWithDeprecatedState
```

後來爬文沒爬到什麼建議解，索性直接把 export 的 actor type 改成這樣：

```typescript
export type childMachineServiceType = ActorRefFrom<typeof childMachine> & {
	children:  Map<'child-machine-invoked-id', childMachineServiceType>
}
```

看有幾個 child 就 & 起來，這樣 typing 就會是正確的了。

## 結語

網路上對於 xstate 的新手教學真的很多，
但沒看到幾篇文章在講如果真正應用在專案中，
希望這篇文章可以幫助到跟我一樣在摸索的人。

這邊順便推薦一下我覺得不錯的新手教學文章： [Ken Chen 在 ithome 發表的 From State Machine to XState 系列](https://ithelp.ithome.com.tw/users/20130721/ironman/4083)，
也推薦可以看一下文中提到的 ["Just Use Props": An opinionated guide to React and XState](https://dev.to/mattpocockuk/just-use-props-an-opinionated-guide-to-react-and-xstate-fc9)。
