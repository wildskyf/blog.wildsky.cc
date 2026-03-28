---
title: "使用 Cloudflare + GitLab 讓非工程師也能分享檔案"
date: 2026-03-28T12:00:00+08:00
slug: "cloudflare-gitlab-file-sharing"
excerpt: "同事用 Google Drive 分享連結印 QR Code，結果更新檔案後連結失效。最後用 GitLab + Cloudflare Pages 搞定，非工程師也能自己上傳檔案，還有版本控制。"
feature_image: "the-qrcode.png"
feature_image_caption: "我就靜靜地在這邊放一個 QR Code，看看有沒有人會掃（其實有人掃了我也不會知道XD）"
guid: "cloudflare-gitlab-file-sharing"
category: "軟體工程"
tags: [Cloudflare, GitLab, DevOps]
reference: "[記錄 ＆ 紀錄 兩者差異為何](/posts/record-in-chinese/)"
---

## 起因：Google Drive 分享連結的慘案

之前同事用 Google Drive 的分享連結來產生 QR Code，並把 QR Code 印在產品 DM 上。結果後來更新檔案時，分享連結也跟著變了，QR Code 就直接失效了⋯⋯（超大慘案。

後來檢討時，大家達成共識：未來要印 QR Code 分享檔案，一定要用我們自己的網址。這樣之後若想更動檔案，我們還可以加一些 redirect 規則，讓 QR Code 掃下去不至於會 404。

## 最初的想法

我一開始很直覺的做法是：讓同事把檔案給我，然後我丟上 Cloudflare Pages 去 host，並設定 custom domain 為公司網域。這樣就可以用「公司 domain + 檔名」的方式來分享檔案。

這個做法的確可以運作，唯一的問題是我將成為 single point of failure。

## 方案研擬

後來也想了很多方案：架個簡單的 FTP server、用 Cloudflare Worker + KV 來做 mapping、用 Cloudflare Access 來做 auth⋯⋯但這些方案不是太麻煩就是太複雜，總覺得殺雞焉用牛刀。

最後選定的方案是：直接利用公司內部本來就架好的 GitLab。我先設定好 CI/CD 來把檔案 deploy 上 Cloudflare Pages，並讓非工程師的同事直接用 GitLab 的 Web GUI 來上傳檔案。

這樣一來：

1. 不用擔心我在 deploy 時不小心把上面的檔案給刪掉 (_we as humans often make mistakes._)
2. 可以利用 GitLab 既有的權限管理來驗證身份
3. 還有版本控制，檔案異動都有[記錄](/posts/record-in-chinese/)可查

重點是要做的事情很少、要維護的東西也很少，非常符合經濟效益！
