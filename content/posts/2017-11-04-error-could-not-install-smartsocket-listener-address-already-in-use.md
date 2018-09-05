---
title: "error: could not install smartsocket listener: Address already in use"
date: 2017-11-04T00:00:00+08:00
categories:
  - Linux
  - Android
---

I like to flash my smartphone. There are two tools we should use when flashing: `adb` and `fastboot`.

But I met a problem:
I want to run new adb server, but it keep showing this message:
```
error: could not install *smartsocket* listener: Address already in use
```

and I gave a command `ps aux | grep adb`, then I got:

READMORE

```
wildsky   7456  0.1  0.0   9988  1916 ?        Ss   20:43   0:01 /home/wildsky/Desktop/FlashTool/x10flasher_lib/adb.linux.64 status-window
wildsky   7459  0.0  0.0      0     0 ?        Z    20:43   0:00 [adb.linux.64] <defunct>
wildsky   7499  0.0  0.0      0     0 ?        Z    20:43   0:00 [adb.linux.64] <defunct>
# ... there might be lots of defunct, just dismiss it.
wildsky   9752  0.0  0.0      0     0 ?        Z    20:56   0:00 [adb.linux.64] <defunct>
wildsky   9842  0.0  0.0 173840  2008 ?        Sl   20:57   0:00 adb -P 5037 fork-server server
wildsky  10705  0.0  0.0 119456   984 pts/1    S+   21:00   0:00 grep --color=auto adb
```

If you kill 9842, it will become `<defunct>`, and create anthor `adb -P 5037
fork-server server`, which means it seems I can't kill adb server forever...

However, I found that there are two special progress: `adb.linux.64` & `adb -P 5037 fork-server server`

just simply kill the first one: `adb.linux.64` via:

```
kill 7456
```

then kill `adb -P 5037 fork-server server` via:

```
kill 9842
```

That's it! now I could create adb server without showing any error message.
