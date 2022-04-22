---
title: "學習使用 Git 的三個階段"
date: 2019-03-16T16:09:47
slug: "three-phases-to-learn-git"
excerpt: "<p>使用 Git 好一段時間了，也協助了幾個朋友快速上手這個好工具。覺得也差不多可以寫一篇文章，記錄我自己從過去到&#8230;</p>
"
feature_image: alvaro-reyes-735660-unsplash-e1553233568816.jpg
guid: "http://blog.wildsky.cc/?p=402"
---
使用 Git 好一段時間了，也協助了幾個朋友快速上手這個好工具。覺得也差不多可以寫一篇文章，記錄我自己從過去到現在各個階段的常用指令。

網路上也有許多優秀的 `Git` 教學，我這篇文章主要是想要大略分一下階段，這樣學起來的負擔也比較不會那麼大。

> 人生無法重來，但是 Git 可以。

使用 Git 的心態
----------

這個工具的主要用途就是 **版本控制**，而會有這個控制的流程則有許多歷史因素，可以先不用去理解，之後有興趣再查，查了就會知道其中的奧妙。

另外，我一直都覺得要學習 `Git` 絕對要從使用 Command line 開始學，慢慢地覺得可以理解整個操作流程後再考慮使用 GUI 程式來輔助，才是比較好的順序。

階段一、初識
------

聽到要使用 Command line 可能有許多人就會開始退避三舍了。但說實話其實沒那麼難，這邊列一下我覺得最一開始學習時所需要的八個指令，只要理解各自的意義及操作流程，那其實也不用太擔心會學不起來。

*   `git add <file>`：把檔案加進「準備 commit 的狀態」
*   `git reset <file>`：把檔案移出「準備 commit 的狀態」
*   `git commit (-a -m)`：把檔案 commit
*   `git init`：讓專案變成可以版控的狀態
*   `git remote add origin <url>`：設定遠端位址
*   `git clone <url>`：把 project 抓下來（含過往提交的記錄）
*   `git push origin master (--force)`：把提交出去的版本記錄推到網路上。
*   `git pull origin master`：更新 local 的版控狀態

這邊有個詞叫做 commit，其意義有點像是在打遊戲時，我們常常會先存檔再繼續破關的感覺。同理，我們在做某個 feature 時會想說「ＯＫ，告一個段落了」這就差不多是 commit 的時機，這個動作可以避免我們改專案到到面目全非，卻又無法回到上一個能動狀態的窘境。

而我用小括號括起來的參數是我常用的小技巧，非常推薦使用的人去理解一下，不過這邊就不贅述。

### 從頭開始的流程

那上面的八個指令要如何結合，讓我們能達成版本控制呢？這邊就是一個常見的流程。

1.  進入到想要開始版控的目錄，進行初始化： `git init`
2.  開始修改想要修改的檔案，直到告一段落
3.  把「告一段落」的檔案加成「待 commit 狀態」：`git add <file>`
4.  若有不小心誤加的檔案就把它移出「待 commit 狀態」： `git reset <file>`
5.  把檔案 commit 出去：`git commit (-a -m)`
6.  重複執行步驟 2-5，直到不想改、想送到遠端了
7.  設定想送的遠端位置：`git remote add origin <url>`
8.  推送到遠端：`git push origin master`

這樣，我們就執行了最基本的版控流程了。而上面的步驟 1 和 7 都只要做一次就好。

### 已有專案的流程

上面講的是從一個完全未曾使用過 `Git` 的資料夾開始的步驟，但今天如果是想要抓已存在的專案，則要走這個流程。

1.  把專案抓下來：`git clone <url>`
2.  修改檔案然後 commit
3.  重複 2 直到想推上去
4.  推送到遠端：`git push origin master`

而如果我們用了兩台電腦在跑版控的話，就會需要 `git pull origin master` 來把版控資料更新。（clone 下來的專案通常都會是最新狀態）

### 查看狀態

上面的七個都是會改變專案狀態的指令，但有時候我們會想知道目前的狀態（類似用 `ls` 知道當前目錄的狀態），這邊列兩個指令：

*   `git status`：查看當前 project 的狀態。
*   `git log`：查看過去 commit 的歷史記錄。
    *   太長可以用方向鍵捲動，按 q 可以離開不續看。

這兩個指令在專案被初始化之後可以隨時使用，我自己的習慣是做完一個步驟就 `git status` 一下看一下剛剛的指令運作後的結果，在上傳變更之前會 `git log` 確定要把什麼丟出去。沒事就用，反正是個多用無害的指令。

* * *

階段二、共事
------

開始會想要/需要和其他人共事了，需求變大，需要的指令當然也就變多了。

*   `git checkout -b <branch>`：開新 branch
*   `git push origin <branch>`

### 分支的概念

有時候我們會不希望主分支太髒（充滿各種改得不夠好又再退回去的記錄），所以 `Git` 就引入了分支的概念，讓你可以做完一個階段，確定ＯＫ了再併入主分支。

### 權限要注意

因為不見得每個 project 我們都會有寫的權限，所以有個功能叫做 Fork，這個功能有點像是把專案複製成自己的，這樣我們才可以完成推到遠端的行為。

有了 fork 和上面提到的三個指令後，流程如下

1.  若無權限就 fork 專案
2.  clone 下來
3.  開新 branch
4.  做修改，然後 commit
5.  完成後，將分支推到 remote
6.  再發 Pull Request / Merge Request

這個階段學會了以後，就可以可以開始試著貢獻一些開源專案。這邊推薦一個可以試試看的開源專案：[Moztw.org 的網站](https://github.com/moztw/www.moztw.org)。

可以先去看看 issue 有哪些，找到想解的就試著執行上面的步驟、試著貢獻看看。

* * *

階段三、進階操作
--------

到這個階段後應該就不太需要細寫步驟，這邊就簡單地列出我常常用到的指令：

*   `git rebase <branch>`
*   `git rebase -i <hash>`
*   `git cherry-pick <hash>`
*   `git stash` / `git stash pop`
*   `git revert`
*   `git reset HEAD^`

rebase 和 cherry-pick 我主要是用來整理版控記錄，而 stash 則是用來暫時把修改藏起來，最後的兩個 revert 和 hard reset 則是用來把記錄倒回去。

特殊用途
----

上面沒列出的指令，對我而言都屬於特殊用途，也就是「需要時再查就好」的指令，舉例來說，「要怎麼把一個 `Git` 操作倒回去（不是倒回修改記錄）」、「要怎麼修改過去 commit 記錄的 commit 時間」等等，我使用 `Git` 四五年到現在也只用過一次的功能，對我而言就不想太花時間和腦容量去記他。

推薦連結
----

*   [連猴子都能懂的Git入門指南](https://backlog.com/git-tutorial/tw/)
*   [Riku 做的 Git cheatsheet](http://sketdan.info/blog/wp-content/uploads/2012/11/git_cheat_sheet.png)

⋯⋯ 也許你也有興趣看看我其他和 [工程](http://blog.wildsky.cc/categories/engineering/) 相關的文章。