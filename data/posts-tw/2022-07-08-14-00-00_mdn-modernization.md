---
title: "MDN 想要將 Code 變得更現代化"
date: 2022-07-08T14:00:00
slug: "mdn-modernization"
excerpt: "才在 murmur 說 MDN 上的 code 很老舊，就看到 Hacker News 上有人在討論
要把 MDN 的 code 改成更現代一點⋯⋯"
feature_image: mdn.png
guid: "2022-07-08-14-00-00_mdn-modernization"
---

> MDN: Resources for Developers,
> by Developers


平常寫 code 很常搜尋某些 API，常常就會找到 MDN 來看該 API 的使用方式，
但很多時候會看到他的範例 code 的寫法十分老舊，直接複製過來還要改一堆東西，
實在麻煩。

好消息是這個問題之後可能會有所改善，
在 Hacker News 上看到 teoli2003 提出要讓 MDN 的 codesnippet 更現代化的討論，
其中不乏以下幾點常見的習慣：

- 避免使用 `var`: 多數時候用 `const`，希望 mutable 的話就用 `let`
- 優先使用 arrow function，並在可能時使用 implicit return
- 優先使用 template literals

上面幾個和我自己的習慣比較沒有出入，當然是舉雙手贊成。 ٩(^‿^)۶ 但下面的幾個好像就可以思考一下：

> 用 `for...of` 取代傳統的 `for(;;)`


個人覺得 `for(;;)` 被取代掉是好事，但我自己是習慣用 `array.forEach` 而非 `for...of`

不過 refactor 時用 `for...of` 取代 `for(;;)` 感覺的確比較 trivial。

> 優先使用 object destructuring


大多時候我蠻喜歡這樣寫的（而且不這樣寫 eslint 就會哇哇叫XD）但下面也有看到有人在討論說
當作參數時如果用 destructuring 寫法的話，會喪失 context，也許可讀性會降低。

比如：

```javascript
people.forEach(({ age }) => console.log(age));
```

會比下面的更清楚

```javascript
people.forEach((person) => console.log(person.age));
```

也許這種時候就該 pointfree 一下了XD

還有一些是我也沒什麼在用的寫法⋯⋯

### optional catch binding

簡單地說就是 `try...catch` 的 `catch` 可以不用帶參數，

`try {} catch (unused) {}` 可以改成 `try {} catch {}`

### numerical separators

使用 `1_000_000` 取代 `1000000`

主要是很少會需要寫大這麼大的數字⋯⋯


### logical assignment operators (&&=, ||= and ??=)

有點像是 AND 和 OR 版本的 `+=`, `-=`，
但因為現在習慣讓變數都是 immutable，所以使用到的機會也比較少


### nullish coalescing operator (??) 和 optional chaining operator (.?)

多數時候會習慣用 `||` 來處理變數的預設值 (short circuit)，範例如下：

```
// 有個變數叫做 a

const result = a || 'default value'

console.log(result) // 當 a 值為 falsy 的話就會變成 'default value'
```

但使用 `||` 有個問題是，他是邏輯運算符，所以當左邊的值是 `0` 或是空字串時會被判定 false，導致套用到預設值。
在 `0` 和空字串是預期選項之一時會很討厭。

因此便出現了 `&&`，他只會看左值是不是 `null` 或 `undefined`，如果是的話才會套用預設值。

而 `.?` 則是在存取 object 或 array 時很好用，以前直接存取的話可能會 access 到 `null` 或 `undefined`，
導致 exception。`.?` 可以確認前者有值後再進行存取，會省去許多麻煩。

例如

```javascript
const a = ((obj || {}).first || {}).second
```
就可以改成
```javascript
const a = obj?.first?.second
```

---

相關討論在 GitHub 上，有興趣可以去瞧瞧:
[Modernization of (static) code examples #143](https://github.com/orgs/mdn/discussions/143)


