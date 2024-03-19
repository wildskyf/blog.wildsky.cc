---
title: "用 Caddy 來 host 靜態檔案"
date: 2024-03-19T13:58:33+08:00
slug: "caddy-static-files-host"
excerpt: "因為偶爾會需要找個地方來放不需要權限就能存取的檔案，剛好手上有台機器裡面有 Caddy，都說 Caddy 是新世紀的 nginx，還可以自動幫我處理 https，便想來試試看直接用它來作為靜態檔案 host。"
feature_image: "viktor-talashuk-05HLFQu8bFw-unsplash.jpg"
guid: "caddy-static-files-host"
---

因為偶爾會需要找個地方來放不需要權限就能存取的檔案，剛好手上有台機器裡面有 Caddy，
都說 Caddy 是新世紀的 nginx，還可以自動幫我處理 https，便想來試試看直接用它來作為靜態檔案 host。

本來想說應該不難，直接先開一個 DNS record 弄個 subdomain 指到機器，再開個 folder，然後在 caddyfile 裡面加入這段：

```caddyfile
my.domain.net {
   root * /home/username/path/to/folder
   file_server 
}
```

結果居然 403。

後來稍微研究了一下，發現是因為 caddy 沒有存取 `/home/` 裡面資料的權限，便依照建議改到 `/var/www/` 下開新的 folder `files`，再依照另一篇文章說的給 `files` excute 的權限就可以 host 靜態檔案了。

感覺還是要找時間補一下權限控管這塊基礎知識⋯⋯

總之，這邊文章就稍微記錄一些注意事項，感覺未來還會再次用到。
目前是直接 scp 把檔案放進機器，未來可能會為了方便弄個 sftp 之類的吧。

## Links

- <https://caddyserver.com/docs/caddyfile/directives/file_server>
- <https://caddy.community/t/forbidden-with-file-server-despite-correct-permissions/12517>