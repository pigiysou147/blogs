---
date: 2023-02-01
category: 性能优化
tags:
 - Web Worker
---
# Web Worker 概览

**注意** ：此模块简要讨论了 Web 工作器的工作原理。本文只是对 Web 工作器的概览以及关于它们如何提高性能的[后续演示](/blogs/web/performance/web-worker-demo)，但并非详尽无遗。如需深入了解该主题，请参阅[使用 Web 工作器在浏览器的主线程中运行 JavaScript](https://web.dev/articles/off-main-thread)。到目前为止，本课程中的许多内容侧重于诸如一般 HTML 性能考虑因素、资源提示、以缩短初始网页加载时间和针对用户输入的响应而优化各种资源类型、延迟加载特定资源等概念。

不过，本课程尚未涉及 JavaScript 的一个性能方面，那就是 Web 工作器在提高输入响应能力方面发挥的作用，而本单元和下一单元将对此进行介绍。

JavaScript 通常被描述为一种单线程语言。实际上，这是指主线程，这是浏览器执行您在浏览器中看到的大部分工作的单个线程。其中包括编写脚本、某些类型的渲染工作、HTML 和 CSS 解析以及其他类型的面向用户的工作来改善用户体验等工作。事实上，浏览器确实会使用其他线程来执行您作为开发者通常无法直接访问的工作，例如 [GPU 线程](https://www.chromium.org/developers/design-documents/gpu-accelerated-compositing-in-chrome/)。

就 JavaScript 而言，您通常只能在主线程上执行工作，但这只是默认操作。*可以*在 JavaScript 中注册和使用其他线程。允许在 JavaScript 中实现多线程的功能称为 [Web Workers API](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers)。

当您有计算成本高昂的工作无法在主线程上运行时，不会导致耗时较长任务而使页面无响应时，Web 工作器非常有用。此类任务无疑会影响网站的 [Interaction to Next Paint (INP)](https://web.dev/articles/inp)，因此了解何时有工作可以完全在主线程以外完成会很有帮助。这样做有助于为主线程上的其他任务腾出更多空间，以便加快用户互动。

本单元和[后续展示具体用例的演示](/blogs/web/performance/web-worker-demo)介绍了 Web 工作器。该演示本身展示了如何使用 Web 工作器执行从主线程以外的 JPEG 文件读取图片元数据的工作，以及如何将这些元数据返回主线程以供用户查看。

## Web Worker 的启动方式

您可以通过实例化 [`Worker` 类](https://developer.mozilla.org/docs/Web/API/Worker)来注册 Web 工作器。这样做时，您可以指定网页工作器代码所在的位置，浏览器将加载该代码并随后为其创建新线程。生成的线程通常称为“工作器线程”。

```javascript
const myWebWorker =newWorker('/js/my-web-worker.js');
```

然后，您可以在 worker 的 JavaScript 文件（在本例中为 `my-web-worker.js`）中编写代码，然后在单独的工作器线程中运行。

## Web Worker 的限制

与在主线程上运行的 JavaScript 不同，Web Worker 无法直接访问 [`window` 上下文](https://developer.mozilla.org/docs/Web/API/Window)，并且对其提供的 API 的访问受到限制。Web Worker 受到以下限制条件的约束：

* Web Worker 无法直接访问 DOM。
* Web Worker 可以通过消息传递流水线与 `window` 上下文进行通信，这意味着 Web Worker 可以通过某种方式间接访问 DOM。
* Web Worker 的作用域是 `self`，而不是 `window`。
* Web Worker 范围*确实*可以访问 JavaScript 基元和构造，以及 `fetch` 等 API 和[相当多的其他 API](https://developer.mozilla.org/docs/Web/API/Web_Workers_API#supported_web_apis)。

## Web Worker 如何与 `window` **通信**

Web Worker 可以通过消息传递流水线与主线程的 `window` 上下文进行通信。利用此流水线，您可以将数据传送到主线程和 Web 工作器以及从主线程和 Web 工作器传输数据。如需将数据从 Web Worker 发送到主线程，您需要在 Web Worker 的上下文 (`self`) 中设置 `message` 事件

```javascript
// my-web-worker.js
self.addEventListener("message",()=>{
  // Sends a message of "Hellow, window!" from the web worker:
  self.postMessage("Hello, window!");
});
```

然后，在主线程上 `window` 上下文的脚本中，您可以使用另一个 `message` 事件接收来自网页工作器线程的消息：

```javascript
// scripts.js

// Creates the web worker:
const myWebWorker =newWorker('/js/my-web-worker.js');

// Adds an event listener on the web worker instance that listens for messages:
myWebWorker.addEventListener("message",({ data })=>{
  // Echoes "Hello, window!" to the console from the worker.
  console.log(data);
});
```

**注意** ：对于基本任务，直接使用 Web 工作器的消息传递流水线可能没有问题。不过，如果您希望在情况开始变得越来越复杂时简化这项工作，那么诸如 [Comlink](https://web.dev/articles/off-main-thread#comlink_making_web_workers_less_work) 之类的抽象会非常方便。Web 工作器的消息流水线是 Web 工作器上下文的一种方法。通过它，您可以从网页 worker 向 `window` 发送数据，用于更新 DOM，或执行必须在主线程上完成的其他工作。