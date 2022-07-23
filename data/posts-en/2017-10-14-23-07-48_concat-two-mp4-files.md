---
title: how to concat two mp4 files via command line
date: 2017-10-14T23:07:48.000Z
slug: concat-two-mp4-files
excerpt: '<p>I want to concat two mp4 files together, so I found a c&#8230;</p> '
feature_image: null
guid: 2017-10-14-23-07-48_concat-two-mp4-files
---
I want to concat two mp4 files together, so I found a command:

    ffmpeg -i "concat:input1.mp4|input2.mp4|input3.mp4" -c copy output.mp4

But it doesn’t work. After my searching, I finally got the solution:

    ffmpeg -i input1.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts intermediate1.ts
    ffmpeg -i input2.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts intermediate2.ts
    ffmpeg -i "concat:intermediate1.ts|intermediate2.ts" -c copy -bsf:a aac_adtstoasc output.mp4


That’s it!

Reference
---------

*   [https://superuser.com/a/1059261](https://superuser.com/a/1059261)
