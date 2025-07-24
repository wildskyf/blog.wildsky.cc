---
title: "在 Python 中使用 Pandas 讀取 csv 檔案"
date: 2024-05-06T12:38:37+08:00
slug: "python-pandas-read-csv"
excerpt: "最近工作上都在寫 Python，要寫一個 Csv 的 parser，結果遇到編碼問題。"
feature_image: "hope-house-press-leather-diary-studio-h3sAF1cVURw-unsplash.jpg"
guid: "python-pandas-read-csv"
---

最近工作上都在寫 Python，要寫一個 csv parser，結果遇到編碼問題。Code 大約是長這樣：

```python
def get_csv_dataframe(input_path: str):
  sep=','
  df = pd.read_csv(input_path, sep=sep)
  return df
```

本來是想說直接讀進來就沒事了，沒想到居然噴這個錯誤：

```
UnicodeDecodeError: 'utf-8' codec can't decode byte 0x96 in position 108: invalid start byte
```

網路上的解法是直接給 `encoding='cp1252'`，cp1252 是 Windows-1252 的 alias，在
我剛剛的那個測資是可以成功執行的，但這會跟 utf-8 衝到，我也不可能把所有 encoding 都列出來。

再找了一下，發現 `chardet` 這個 package，可以直接猜檔案的 encoding，程式碼如下：

```python
def get_encoding(input_path: str):
  with open(input_path, 'rb') as x:
    data = x.read()
  encoding = chardet.detect(data).get('encoding')
  return encoding
```

然後直接把 encoding 丟進 `read_csv`：

```python
df = pd.read_csv(input_path, sep=sep, encoding=encoding)
```

這樣就可以正確地看檔案的 encoding 來決定要怎麼 parse。

接著我們也可以更進一步，讓這個 `get_encoding` 的 function 加速，不用讀整個檔案就可以猜他的 encoding：

```
def get_encoding(input_path: str):
  testStr = b''
  count = 0
  with open(input_path, 'rb') as x:
    line = x.readline()
    while line and count < 10:
      testStr = testStr + line
      count = count + 1
      line = x.readline()
  return chardet.detect(testStr).get('encoding')
```

大概是這樣。
