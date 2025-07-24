---
title: "CrashLoopBackOff when deploying elasticsearch using kubernetes"
date: 2020-03-26T15:51:36
slug: "crashloopbackoff-when-deploying-elasticsearch-using-kubernetes-2"
excerpt: "<p>When we deploy elasticsearch via kubernetes, sometimes &#8230;</p>
"
feature_image: benjamin-dada-EDZTb2SQ6j0-unsplash.jpg
guid: "https://blog.wildsky.cc/?p=1597"
---
When we deploy elasticsearch via kubernetes, sometimes we might get `CrashLoopBackOff`.

We could use `kubectl logs $elasticPodName` to know more details. And here are some error I found in log:

*   [https://discuss.elastic.co/t/exception-in-thread-main-java-nio-file-accessdeniedexception/165497](https://discuss.elastic.co/t/exception-in-thread-main-java-nio-file-accessdeniedexception/165497)
*   [https://discuss.elastic.co/t/elasticsearch-is-not-starting-when-bootstrap-memory-lock-is-set-to-true/120962](https://discuss.elastic.co/t/elasticsearch-is-not-starting-when-bootstrap-memory-lock-is-set-to-true/120962)

And I found a way to solve it, which is add some preporcess for init containers.

Here is the config:

      initContainers:
        - name: fix-permissions
          image: busybox
          imagePullPolicy: IfNotPresent
          command: ["sh", "-c", "mkdir -p /elasticsearch/data && chown -R 1000:1000 /elasticsearch"]
          securityContext:
            privileged: true
          volumeMounts:
            - name: news-search
              mountPath: /elasticsearch
              subPath: elasticsearch
        - name: increase-vm-max-map
          image: busybox
          imagePullPolicy: IfNotPresent
          command: ["sysctl", "-w", "vm.max_map_count=262144"]
          securityContext:
            privileged: true
        - name: increase-fd-ulimit
          image: busybox
          imagePullPolicy: IfNotPresent
          command: ["sh", "-c", "ulimit -n 65536"]
          securityContext:
            privileged: true