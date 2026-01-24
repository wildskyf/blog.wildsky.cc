---
title: "git push 中，`--force` 與 `--force-with-lease` 的差異"
date: 2026-01-23T15:18:40+08:00
slug: "git-push-with-two-force"
excerpt: "前陣子看到有人說他在 force push 時會用 `--force-with-lease` 而不是 `--force`，且聲稱前者會比較好，但我一直沒有去看他們的差異。"
feature_image: "a-man-that-is-standing-in-the-dark-by-venti-views-on-unsplash.jpg"
feature_image_caption: "Photo by <a href='https://unsplash.com/@ventiviews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Venti Views</a> on <a href='https://unsplash.com/photos/a-man-that-is-standing-in-the-dark-35uZM_4wjYg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>"
guid: "git-push-with-two-force"
category: "軟體工程"
tags: [Git, 版本控制, 開發工具]
---

前陣子看到有人說他在 force push 時會用 `--force-with-lease` 而不是 `--force`，
且聲稱前者會比較好，但我一直沒有去看他們的差異。

剛好遇到 rebase feature branch 需要 force push，就查了一下差異，簡單地說：

* `--force-with-lease` 會先檢查 remote branch 的狀態是不是跟上次 fetch 時一樣。（看 remote ref & local ref 是否相同）如果有別人在這期間 push 過，Git 會拒絕執行，避免覆蓋掉別人的工作。
* `--force` 會直接用本地的 history 覆蓋 remote 上的內容，不管 remote 上發生什麼事。所以如果同事在 rebase 之後 push 了新的 commit，用 `--force` 就會把他的 commit 弄不見。


實務上，的確是使用 `--force-with-lease` 會比較好，
除非是像單人開發的 feature branch 這種不會有他人參與的狀況，很確定沒人會動那個 branch，或者就是想蓋掉某些東西。

不過我公司的專案是都會開 branch protection 擋 force push，且 feature branch 都是自己在用，所以就算只用 `--force` 也相對來說比較沒差。

但之後應該也都會用 `--force-with-lease`，避免意外發生。


## Bonus

可以在 `.gitconfig` 設定 alias:

```
[alias]
    pushf = push --force-with-lease
```

這樣就不用每次都打一長串。
