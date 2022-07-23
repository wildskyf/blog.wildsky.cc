---
title: 'error: could not install smartsocket listener: Address already in use'
date: 2017-11-04T00:00:19.000Z
slug: error-could-not-install-smartsocket-listener-address-already-in-use
excerpt: '<p>This article is about error message: &#8220;error: coul&#8230;</p> '
feature_image: kyle-simmons-74218-unsplash-e1553233521391.jpg
guid: 2017-11-04-00-00-19_error-could-not-install-smartsocket-listener-address-already-in-use
---
This article is about error message: “error: could not install smartsocket listener: Address already in use”.

I like to flash my android smartphone. As we all know, there are (at lease) two tools we could use when flashing phones: `adb` and `fastboot`. But I met a problem when I try to run new adb server, it keep showing the this message in my terminal:

The Message “error: could not install smartsocket listener: Address already in use”
-----------------------------------------------------------------------------------

“Address already in use? so there must be someone using the address I need.” I thought, “ok, let me find the criminal”

and I gave terminal a command `ps aux | grep adb` to show all processes which is including adb word, then I got:

    wildsky   7456  0.1  0.0   9988  1916 ?        Ss   20:43   0:01 /home/wildsky/Desktop/FlashTool/x10flasher_lib/adb.linux.64 status-window
    wildsky   7459  0.0  0.0      0     0 ?        Z    20:43   0:00 [adb.linux.64] <defunct>
    wildsky   7499  0.0  0.0      0     0 ?        Z    20:43   0:00 [adb.linux.64] <defunct>
    # ... there might be lots of defunct, just dismiss it.
    wildsky   9752  0.0  0.0      0     0 ?        Z    20:56   0:00 [adb.linux.64] <defunct>
    wildsky   9842  0.0  0.0 173840  2008 ?        Sl   20:57   0:00 adb -P 5037 fork-server server
    wildsky  10705  0.0  0.0 119456   984 pts/1    S+   21:00   0:00 grep --color=auto adb

If I kill 9842 (adb -P 5037 fork-server server), it will become `<defunct>`, and create anthor `adb -P 5037 fork-server server`, which means if I just delete the surface progress, the criminal behind the scenes will still alive. In another words: I can’t kill adb server forever…

![I already kill you but you still live. What's wrong with you, adb server?](/images/kyle-simmons-74218-unsplash-e1553233521391.jpg)

However, I notice that there are two kinds of progress about adb: `adb.linux.64` & `adb -P 5037 fork-server server`

just simply kill the first one, `adb.linux.64` , via this command:

    kill 7456

then kill `adb -P 5037 fork-server server` via:

    kill 9842

and then problem solved! Now I could create adb server without showing any error message.

Why I write this article
------------------------

I found there is no article about this problem, but there are some people facing this problem. And also, I used to meet this problem before, but it still take me some time to find the final problem.

So I decide to write down this problem, and copy the error message “error: could not install smartsocket listener: Address already in use”. Hope people who search this sentence could find this article, and they could save time from it. 🙂

References:
-----------

*   [ADB server didn’t ACK on macOS](https://stackoverflow.com/questions/43036124/adb-server-didnt-ack-on-macos)
*   [adb cannot connect to daemon at tcp:5037](https://stackoverflow.com/questions/43131020/adb-cannot-connect-to-daemon-at-tcp5037)
*   [https://bird512.github.io/2017/01/23/react-native1/](https://bird512.github.io/2017/01/23/react-native1/)
*   [What does aux mean in \`ps aux\`?](https://unix.stackexchange.com/questions/106847/what-does-aux-mean-in-ps-aux)
*   [Why does “ps aux | grep x” give better results than “pgrep x”?](https://askubuntu.com/questions/157075/why-does-ps-aux-grep-x-give-better-results-than-pgrep-x)
