---
title: Preparation for building Firefox under Fedora
date: 2016-03-01T00:00:00+08:00
categories:
  - Linux
tags:
  - Fedora
  - firefox
---

Today, I want to build Firefox myself. So I found this post: [Simple Firefox build](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build), and there is a link, which could help me setup the prerequisites. The link is [Linux Build Prerequisites](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build/Linux_and_MacOS_build_preparation). But when I followed the instruction and input this command:

`wget -q https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py -O bootstrap.py && python bootstrap.py`

Something weird happened!! It sayed that:

```bash
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

But no matter how many times I give `sudo dnf update -y` to my Terminal, it kept tell me that:

```
Last metadata expiration check performed 0:14:52 ago on Tue Mar  1 22:23:25 2016.
Dependencies resolved.
Nothing to do.
Complete!
```

So my Mercurial should be up-to-date.

But I found that the offical website of Mercurial shows the lastest version of Mercurial is 3.7.1, and mine is 3.5.1!

I found a copr, which provide newer version of Mercurial: [nbecker/mercurial-3](http://copr-fe.cloud.fedoraproject.org/coprs/nbecker/mercurial-3/packages/), and try this:

`sudo dnf copr enable  nbecker/mercurial-3 && sudo dnf update`

now I have 3.2.1 .... though this is not the really newest version of Mercurial, it won't get wrong when I give `wget -q https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py -O bootstrap.py && python bootstrap.py` to my Terminal!

I don't know why it is fixed up, but it allow me to move on, so I think it's a solution for people who use Fedora & want to build Firefox but face the not-new-enough-version problem.

Good luck!
