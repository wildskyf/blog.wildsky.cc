---
title: Preparation for building Firefox under Fedora
date: 2016-03-01T01:58:29.000Z
slug: build-firefox-preparation-under-fedora
excerpt: '<p>Today, I want to build Firefox myself. So I found this &#8230;</p> '
feature_image: null
guid: 2016-03-01-01-58-29_build-firefox-preparation-under-fedora
---
Today, I want to build Firefox myself. So I found this post: [Simple Firefox build](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build), and there is a link, which could help me setup the prerequisites. The link is [Linux Build Prerequisites](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build/Linux_and_MacOS_build_preparation). But I still got some problems when I followed the instruction. So I write down this article about preparation for building Firefox.

Ok, so what happened? after I input this command in my terminal:

```
wget -q https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py -O bootstrap.py && python bootstrap.py
```

The command I input looks like to download some python script file, and execute it. But when executing the script, It said that:

```
Your version of Mercurial (3.5.1) is not modern enough.
Traceback (most recent call last):
  File "bootstrap.py", line 159, in <module>
    sys.exit(main(sys.argv))
  File "bootstrap.py", line 150, in main
    dasboot.bootstrap()
  File "/tmp/tmpTdL9Pv/mozboot/bootstrap.py", line 137, in bootstrap

  File "/tmp/tmpTdL9Pv/mozboot/base.py", line 316, in ensure_mercurial_modern
TypeError: upgrade_mercurial() takes exactly 1 argument (2 given)
```

“ok,” I thought, “Mercurial (3.5.1) is not modern enough. Let me just easily upgrade it.”

But no matter how many times I give `sudo dnf update -y` to my Terminal, it kept telling me that:

```
Last metadata expiration check performed 0:14:52 ago on Tue Mar  1 22:23:25 2016.
Dependencies resolved.
Nothing to do.
Complete!
```

So my Mercurial should be up-to-date. But I found that the official website of Mercurial shows the latest version of Mercurial is 3.7.1, and mine is 3.5.1!

Ok, Fedora has copr, which means Cool Other Package Repo. So let’s find some cool package about Mercurial. And thanks to Google I got this repo: [nbecker/mercurial-3](https://copr-fe.cloud.fedoraproject.org/coprs/nbecker/mercurial-3/packages/), and try this command:

`sudo dnf copr enable nbecker/mercurial-3 && sudo dnf update`

now I have 3.2.1 …. though this is not the really newest version of Mercurial, it won’t get wrong when I give `wget -q https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py -O bootstrap.py && python bootstrap.py` to my Terminal!

It allow me to move on, so I think it’s a solution for people who use Fedora, and want to build Firefox, but face the not-new-enough-version mercurial problem. Hope this article could help you finish the preparation for building Firefox.

![Firefox is cute, isn't it?](/images/firefox-is-cute-by-Fuu-J.jpg)
