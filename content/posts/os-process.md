---
title: "作業系統 Ch3-1 - Process"
date: 2018-09-14T20:37:50+08:00
categories:
  - 資工
tags:
  - OS
  - note
draft: true
---

什麼是 Process？和 Program 差在哪？

Program = passive entity - 只是存在 disk 的 binary 檔
Process = active entity - 存在 memory 中、正在執行的 program

簡單地說，差別就是在是否「正在被執行」。

一個 Process 包含了：

1. code segment (text section) => 不是一般的 code，是 instruction
2. data section => 這裡放 global variable
3. stack => 這裡放 local variable，因為用完可以直接 pop 掉
4. heap => 動態分配記憶體空間給變數或 class 時會用到的
5. current activity (program counter, register counter)
6. 相關資源的 set（e.g., open file handlers）

2,3,4 就是寫程式時用到的變數，


一個 process 可用的 memory 是有限的，所以如果遞迴 call 太多層或是 allocate 太
多記憶體，都會跟你說 out of memory，因為 memory 的使用量是有上限的。

Thread 的概念：

- thread 也稱為 lightweight process
- 內容物與 process 相同
- 不同之處為，多個 thread 間可以共用某一塊 memory
- 因為 thread 的 parent process 在 create thread 時就會做空間的管理
  - 所以就省掉了部分空間管理的程式處理
  - 所以是 lightweight
- thread 是使用 CPU 的最小單位
- 同一個 process 下的 thread
  - 可以共用：
    - code section
    - data section
    - OS resources (open files & signals)
  - 但下面這些是各自獨立：
    - thread ID
    - program counter
    - register set: 因為 thread 在執行 intruction 時的位置可能不同，執行的狀態
      也是獨立的
    - stack: 各自只摸得到自己的 local variable

之後的章節會再講到更細節，這邊只簡單介紹 Thread 是什麼。


Process State 的概念

介紹 process 在 OS 中的 life cycle，共有五個狀態

1. New:
  - 把 program load 進記憶體，並在記憶體中把剛剛講的各個 section 都 initialize
  - admit: OS 在此時會確認有沒有足夠的資源去 create process，也會看你有沒有權限去執行
    該 process，都 OK 才會進去 ready
2. Ready:
  - OS 是透過 queue 來管理 CPU 資源的競爭
  - process 在 queue 中等著被 CPU 處理的過程就屬於這個狀態
3. Running:
  - 進去 CPU 中，正在被執行的狀態
  - 有可能跑著跑著就被 OS interrupt 回 ready 狀態，因為 OS 要確保他有掌控權，
    所以會時間一到，就把 CPU switch 給 scheduler。
4. Waiting:
  - 在進行非 CPU 處理時（e.g., I/O），就會進入這個狀態
  - 等到處理完了，就會回到 ready 等著被 CPU 執行
5. 把所有資源 release 出去的狀態

![Process State 的流程圖](//wildsky.cc/blog-images/2018/os-process-state-diagram.png)

Process Control Block

在 memory 中，用來記錄剛剛的資訊的 Table。

所以當 process 被 create 時，OS 就會幫他 create 一個 table 叫做 PCB，裡面存著
一些 process 的執行中的狀態相關資訊，比較重要的是：

1. pointer: 當我們說「把 process 放進 queue」時，其實是把 PCB 放進去，而這邊的
   資料結構是 Linked list，這裡的 pointer 就是指到 queue 的下一個 PCB
2. process state: 記錄 process 的當前狀態
3. Program counter
4. CPU register

這些東西是放在 memory，而且是 **kernel space** 的地方，由 OS 進行處理的。

其他還有

1. CPU scheduling information (e.g., priority)
2. memory management information (base & limit register): 只有 process 在執行時
  才會把這兩個值從 memory load 進 CPU 的 register。
3. I/O status/information
4. accounting information


Context Switch

定義：把 CPU 上正在執行的 process，switch 成另外一個 process 的動作就叫做 context
switch。

CPU 中的程式在切換的流程如下：

1. process p0 正在 CPU 中被執行
2. 出現一個 ineterrupt，p0 就要準備進入 idle
3. 進行 Context Switch:
  1. 把 CPU 中 p0 的狀態 load 進 PCB0
  2. load PCB1（即將被切換到的 process1 的 PCB）
  3. context switch 完成
4. 開始執行 p1

- context switch 是 overhead（因為在 switch 時，其實是在浪費 CPU）
- 但因為很常需要 switch，所以我們能做的只有盡可能地**縮短時間**，而這與下列這
  些事情相關：
  - memory 的速度
  - register 的數量（越少的話需要存取的數量就少）
  -  合併 load & save PCB 的 instruction，讓他一次做完
  - 硬體支援：提供多組 set 的 register，讓他不用在 register 和 memory 之間切換



## Process Scheduling 的概念

目的

- Multiprogramming: 最大化 CPU 的產能（utilization）
- Time sharing: 因為程式是 **輪流** 去使用 CPU 的，所以誰先誰後就是 scheduler
  要處理的事情。

### Process Scheduling queue

- Job queue: 發生在 New State
- ready queue: 發生在 ready state，等著使用 CPU
- device queue: 發生在 Wait State，等著使用 I/O

![process scheduling diagram](https://wildsky.cc/blog-images/2018/process-scheduling-diagram.png)

### scheduler

scheduler 根據「即將被處理」的對象不同會有不同的 scheduler，像是 CPU scheduler
、Job scheduler 之類的。

- short-term scheduler
  - CPU scheduler 又被稱為 short-term scheduler，因為執行的頻率較高
  - Ready State -> Run State
- long-term scheduler
  - Job scheduler。相較於 CPU 的頻率來看，Job scheduler 的執行的頻率較低
  - New State ->  Ready State
- Medium-term scheduler
  - 把 program 從 memory swap 回 disk 成 memory content（和之後會講到的 vitrual memory 有關）
  - Ready State -> Wait State


#### long-term scheduler

- 控制 **degree of multiprogramming**
  - degree of multiprogramming 指的是「目前電腦上，有多少程式在 memory 中」
  - 太低的話，CPU 就會有很大的時間在 idle
  - 太高的話，就會發生 trashing。很多程式在搶 memory，所以就會一直做 swap，也
    就是不斷地做 I/O。
- 負責讓 CPU & I/O 有最高的產能：所以就要混著讓做 CPU & 做 I/O 的程式進來


#### short-term scheduler

- 執行頻率很高（e.g., once per 100ms ）
- 所以執行的效率就必須要很高
  - 要想演算法來縮短每個 process 的等待時間（還要在意 fairness）
  - 又因為效率要高，所以也不能太複雜（不然 CPU overhead 就會太高）

#### medium-term scheduler

處理程式在 memory & disk 之間切換的 scheduler

- swap out: 把 process 從 memory 搬回 disk 上來減少 degree of multiprogramming
- swap in: 發現 memory 有空間了，就把 process 從 disk 抓回 memory
- propose:
  - improve process mix
  - free up memory

Operation on Processes




Interprocess Communication






## ref

- [第六講第二節](http://ocw.nthu.edu.tw/ocw/index.php?page=chapter&cid=141&chid=1845&video_url=http%3A%2F%2Focw.nthu.edu.tw%2Fvideosite%2Findex.php%3Fop%3Dwatch%26id%3D3936%26filename%3D1920_1080_3072.MP4%26type%3Dview%26cid%3D141%26chid%3D1845)
- [第七講第一節](http://ocw.nthu.edu.tw/ocw/index.php?page=chapter&cid=141&chid=1846&video_url=http%3A%2F%2Focw.nthu.edu.tw%2Fvideosite%2Findex.php%3Fop%3Dwatch%26id%3D3937%26filename%3D1920_1080_3072.MP4%26type%3Dview%26cid%3D141%26chid%3D1846)
- [第七講第二節](http://ocw.nthu.edu.tw/ocw/index.php?page=chapter&cid=141&chid=1846&video_url=http%3A%2F%2Focw.nthu.edu.tw%2Fvideosite%2Findex.php%3Fop%3Dwatch%26id%3D3938%26filename%3D1920_1080_3072.MP4%26type%3Dview%26cid%3D141%26chid%3D1846)
- [第八講第一節](http://ocw.nthu.edu.tw/ocw/index.php?page=chapter&cid=141&chid=1852&video_url=http%3A%2F%2Focw.nthu.edu.tw%2Fvideosite%2Findex.php%3Fop%3Dwatch%26id%3D3970%26filename%3D1920_1080_3072.MP4%26type%3Dview%26cid%3D141%26chid%3D1852)

