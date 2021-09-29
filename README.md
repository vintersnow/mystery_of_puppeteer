# 環境

- M1 Mac
  - MacOS 11.6（20G165）
- docker --version
  - Docker version 20.10.8, build 3967b7d

# nikolaik/python-nodejs:python3.7-nodejs14

## 動く場合

```
docker build --platform linux/amd64 -t vintersnow/puppeteer1 -f Dockerfile_success .
docker run -it --platform linux/amd64 --rm --name puppeteer vintersnow/puppeteer1 /bin/bash

root@4b9db7ba8d8e:/home/docker/code/app/src# node src/example.js
root@f9aa3307dfdc:/home/docker/code/app# ls
example.png  node_modules  package-lock.json  package.json  src
```

## 動かない場合

```
docker build --platform linux/amd64 -t vintersnow/puppeteer2 -f Dockerfile_fail .
docker run -it --platform linux/amd64 --rm --name puppeteer2 vintersnow/puppeteer2 /bin/bash

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

# node:14

## 動く場合 2

```
docker build --platform linux/amd64 -t vintersnow/puppeteer3 -f Dockerfile_success2 .
docker run -it --platform linux/amd64 --rm --name puppeteer3 vintersnow/puppeteer3 /bin/bash

root@8cb6dba093a5:/home/docker/code/app# node src/example.js
root@8cb6dba093a5:/home/docker/code/app# ls
example.png  node_modules  package-lock.json  package.json  src
```

## 動かない場合 2

```
docker build --platform linux/amd64 -t vintersnow/puppeteer3 -f Dockerfile_fail2 .
docker run -it --platform linux/amd64 --rm --name puppeteer3 vintersnow/puppeteer3 /bin/bash

root@4b9db7ba8d8e:/home/docker/code/app/src# node example.js
ErrorEvent {
  target: WebSocket {
    _events: [Object: null prototype] { open: [Function], error: [Function] },
    _eventsCount: 2,
    _maxListeners: undefined,
    _binaryType: 'nodebuffer',
    _closeCode: 1006,
    _closeFrameReceived: false,
    _closeFrameSent: false,
    _closeMessage: '',
    _closeTimer: null,
    _extensions: {},
    _protocol: '',
    _readyState: 3,
    _receiver: null,
    _sender: null,
    _socket: null,
    _bufferedAmount: 0,
    _isServer: false,
    _redirects: 0,
    _url: 'ws://127.0.0.1:33177/devtools/browser/79450ac7-b6c2-4319-99dc-e102748f6018',
    _req: null,
    [Symbol(kCapture)]: false
  },
  type: 'error',
  message: 'connect ECONNREFUSED 127.0.0.1:33177',
  error: Error: connect ECONNREFUSED 127.0.0.1:33177
      at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1148:16) {
    errno: -111,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '127.0.0.1',
    port: 33177
  }
}
```
