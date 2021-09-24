# 動く場合

```
docker build -t vintersnow/puppeteer1 -f Dockerfile_success .
docker run -it --platform linux/amd64 --rm --name puppeteer vintersnow/puppeteer1 /bin/bash

root@4b9db7ba8d8e:/home/docker/code/app/src# node src/example.js
root@f9aa3307dfdc:/home/docker/code/app# ls
example.png  node_modules  package-lock.json  package.json  src
```

# 動かない場合

```
docker build -t vintersnow/puppeteer2 -f Dockerfile_fail .
docker run -it --platform linux/amd64 --rm --name puppeteer vintersnow/puppeteer2 /bin/bash

root@4b9db7ba8d8e:/home/docker/code/app/src# node example.js
Error: Protocol error (Target.setDiscoverTargets): Target closed.
    at /home/docker/code/app/src/node_modules/puppeteer/lib/cjs/puppeteer/common/Connection.js:71:63
    at new Promise (<anonymous>)
    at Connection.send (/home/docker/code/app/src/node_modules/puppeteer/lib/cjs/puppeteer/common/Connection.js:70:16)
    at Function.create (/home/docker/code/app/src/node_modules/puppeteer/lib/cjs/puppeteer/common/Browser.js:118:26)
    at ChromeLauncher.launch (/home/docker/code/app/src/node_modules/puppeteer/lib/cjs/puppeteer/node/Launcher.js:109:56)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async file:///home/docker/code/app/src/example.js:6:21
```
