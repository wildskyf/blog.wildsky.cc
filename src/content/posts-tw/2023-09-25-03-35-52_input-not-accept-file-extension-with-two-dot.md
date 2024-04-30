---
title: "Input 的 Accept attribute 不支援雙重副檔名"
date: 2023-09-25T15:35:52+08:00
slug: "input-not-accept-file-extension-with-two-dot"
excerpt: "工作上遇到 Input 的 accept 如果包含雙重複檔名，反而會導致符合的檔案無
法被選擇。"
feature_image: "convention.jpg"
guid: "input-not-accept-file-extension-with-two-dot"
---

這是一個工作上遇到的小 bug，這邊簡單記錄一下。

因為工作上會需要限制使用者上傳的檔案副檔名，而其中又有類似 `.tar.gz` 這樣的雙重副檔名。

本來是直接寫 `<input accpet='.abc, .def, .tar.gz'` 想說應該可以限制使用者只上傳 .tar.gz 的檔案。

結果發現反而沒辦法選 `.tar.gz` 的檔案。

查了一下發現 `.tar.gz` 只是一個慣例的命名習慣，不是正式的副檔名。所以 input 的 accpet 對於這種雙重副檔名的支援也是各自表述。

要解決這個問題就必須把限制變成 `.gz`，然後在 onChange handler 或 form 的 onSubmit handler 中自行實作 validator。

## Ref

- <https://stackoverflow.com/a/29661248>
- <https://stackoverflow.com/a/10503561>
