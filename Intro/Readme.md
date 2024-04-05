# Node.js

<details>
<summary>About Node.js</summary>

### About
Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

v20.12.1 LTS (long term support)

v21.7.21 is current version

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser.

Node.js is single process (dont create threads for each request), asynchronous server side progrmaming langauge.

### The V8 JavaScript Engine

V8 is the JavaScript engine i.e. it parses and executes JavaScript code.

Other browsers have their own JavaScript engine:

    Firefox has SpiderMonkey
    Safari has JavaScriptCore (also called Nitro)
    Edge was originally based on Chakra but has more recently been rebuilt using Chromium and the V8 engine.

V8 is written in C++, and it's continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.

Modern engine are no longer interpreters. JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.

### Blocking and non-blocking calls in Node.js

"I/O" refers primarily to interaction with the system's disk and network supported by libuv.

Synchronous methods in the Node.js standard library that use libuv are the most commonly used blocking operations.

All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync.

Example:
const fs = require('node:fs');

const data = fs.readFileSync('/file.md'); // blocks here until file is read


const fs = require('node:fs');

fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});

### JavaScript Asynchronous Programming using Callbacks

example:
```
window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    setTimeout(() => {
      items.forEach(item => {
        // your code here
      });
    }, 2000);
  });
});

```
Alternatives to callbacks

Starting with ES6, JavaScript introduced several features that help us with asynchronous code that do not involve using callbacks: **Promises** (ES6) and **Async/Await** (ES2017).

</details>

<details>
<summary>Event Loop</summary>

Single Threaded Event Loop Model architecture to handle multiple concurrent clients instead of “Multi-Threaded Request-Response” architecture to handle multiple concurrent clients like JSP, Spring MVC, ASP.NET etc..

[eventloop](./eventloop.js)
[nextTick](./nextTick.js)

A special library module called libuv is used to perform async operations using thread pool. For blocking operations like I/O operations, Opening and closing connections, setTimeouts etc..

Any asynchronous operation, it is off-loaded to libuv.

Total of 6 C queues in event loop:
* Timer queue [callback of setTimeout and setInterval]
* I/O queue [cb like fs and http modules]
* check queue [cb for setImmediate function]
* close queue [close event of async tasks]
* microtask queue -> nextTick queue [cb within process.nextTick function]
* microtask queue -> Promise queue [holds callbacks associated with the native Promise in JavaScript]

[details_ref1](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)

[details_ref2](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)

</details>

<!-- <details>
<summary>Promises and Async/Await</summary> -->
[example](./promise.js)
<!-- </details> -->