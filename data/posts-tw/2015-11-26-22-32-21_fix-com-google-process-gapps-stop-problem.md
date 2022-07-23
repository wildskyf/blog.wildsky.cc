---
title: 修復 com.google.process.gapps 意外停止的問題
date: 2015-11-26T22:32:21.000Z
slug: fix-com-google-process-gapps-stop-problem
excerpt: '<p>用 Zenfone 一段時間了（差不多久到要換了…吧），刷機、Root、降版、刪除內建應用（雞肋）程式… 基本&#8230;</p> '
feature_image: null
guid: 2015-11-26-22-32-21_fix-com-google-process-gapps-stop-problem
---
用 Zenfone 一段時間了（差不多久到要換了…吧），刷機、Root、降版、刪除內建應用（雞肋）程式… 基本上都知道怎麼做了，當然亂玩手機的後果就是偶爾會碰到一些小問題，像是運動的時候 GPS 完全偵測不到導致我跑了 40 分鐘還是 0 km， 或是看著手機上有人來電我卻怎麼滑手機就是無視我，還有這次提到的 **重複出現 com.google.process.gapps 的問題**。

基本上網路上都有解法，但都眾說紛紜，有人說要去把手機 **還原原廠設定**（殺雞焉用牛刀啊！）， 有人說要 **重設應用程式喜好**，但我最後親自測試過後終於找到一個最有效的辦法：

1.  首先，先進入 系統設定 > 應用程式 > 全部
2.  找到 **Google 服務架構**，點進去
3.  先點「清除資料」，再點「強制停止」
4.  然後回到上一頁
5.  找到 **Google Play 服務**、**Google Play 商店**，分別重複 _第 3 步驟_
6.  回到主畫面，重開機以後應該就不會再來煩你了！

然而，如果他還是一直出來吵你呢？那我就沒辦法啦⋯⋯ 可以試著把有「Google」這個字樣的 App 都「清除資料」 + 「強制停止」試試，因為那個訊息看起來就跟 Google 有關，所以一定就是他的 App 出 Bug，一個一個試，說不定就成功清除啦～！

參考： [出現 com.google.process.gapps 錯誤](http://www.asus.com/zentalk/tw/forum.php?mod=viewthread&tid=82226)
