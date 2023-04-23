---
title: "K8S ingress 上傳檔案的雷（其實和 Nginx 比較有關）"
date: 2020-12-27T17:00:36
slug: "file-upload-bug-caused-by-k8s-ingress-nginx"
excerpt: "<p>前陣子工作上有同事遇到個 bug： 如果在 local 跑檔案上傳，在上傳的過程中，會在後端 server 的&#8230;</p>
"
feature_image: ibrahim-boran-XdIrwH98K_E-unsplash.jpg
guid: "https://blog.wildsky.cc/?p=1664"
---
前陣子工作上有同事遇到個 bug：

> 如果在 local 跑檔案上傳，在上傳的過程中，會在後端 server 的 file 暫存區看到一個檔案，檔案大小也會隨著上傳進度而漸增；然而，deploy 到我們公司的 k8s 上後，卻變成在上傳過程中會一直看不到暫存檔，直到上傳進度達到 100% 時才會看到檔案突然出現。

這個 bug 和 Nginx 有關，它會 default 對檔案做 buffering，相關設定值為 `proxy_request_buffering` 可以在 [ngx\_http\_proxy\_module 的文件](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering) 裡看到這個預設值為 `on`。

而 k8s 有 Nginx，所以理所當然地也會受到這個影響。如果不需要這個預設行為的話就要額外加上 annotation 才能改變這個預設行為：

    nginx.ingress.kubernetes.io/proxy_request_buffering off;

是個沒遇過根本不會知道的雷⋯

參考：
---

*   [https://stackoverflow.com/questions/64120525/nginx-controller-chunked-transfer-encoding-data-streaming-request-body-buffe](https://stackoverflow.com/questions/64120525/nginx-controller-chunked-transfer-encoding-data-streaming-request-body-buffe)
*   [Module ngx\_http\_proxy\_module proxy\_request\_buffering section](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering)