---

title: 'WebAssembly JSPI 新 API'
date: 2024-06-04
category: webkit
tags:
  - WebAssembly
---


WebAssembly 的 JavaScript Promise Integration (JSPI) API 迎来了新的更新，已在 Chrome M126 版本中上线。本文将讨论此次更新的内容、如何在 Emscripten 中使用该 API 以及 JSPI 的未来发展路线。

JSPI 是一个 API，允许使用**顺序**API 的 WebAssembly 应用程序访问**异步**的 Web API。许多 Web API 是通过 JavaScript `Promise` 对象实现的：这些 API 在执行操作时并不会立即完成，而是返回一个 `Promise` 来表示操作的完成。而许多编译成 WebAssembly 的应用程序则来自 C/C++ 领域，后者通常使用的是会阻塞调用者直到完成的 API。

JSPI 通过连接到 Web 架构，允许 WebAssembly 应用程序在 `Promise` 返回时暂停执行，并在 `Promise` 解决后继续执行。

关于 JSPI 的更多信息及其使用方法，您可以参考 [这篇博客文章](https://v8.dev/blog/jspi) 以及 [规范](https://github.com/WebAssembly/js-promise-integration)。

## 更新了什么？

### `Suspender` 对象的终结

2024 年 1 月，Wasm CG 的 Stacks 小组 [投票](https://github.com/WebAssembly/meetings/blob/297ac8b5ac00e6be1fe33b1f4a146cc7481b631d/stack/2024/stack-2024-01-29.md) 修改 JSPI 的 API。具体来说，原先的 `Suspender` 对象不再需要，我们将使用 JavaScript/WebAssembly 边界作为确定暂停计算的界限。

这一变化虽小，但可能影响重大：在需要暂停计算时，最近一次调用封装的 WebAssembly 导出函数将决定暂停点的“切点”。

对于 JSPI 的使用者而言，这意味着对暂停点的控制有所减少。但另一方面，API 不再需要显式管理 `Suspender` 对象，使得使用变得更加简单。

### 不再需要 `WebAssembly.Function`

另一个变化是 API 的风格不再依赖 `WebAssembly.Function` 构造函数，而是提供了特定的函数和构造器。

这种变化带来了以下几个好处：

- 移除了对 [*Type Reflection* 提案](https://github.com/WebAssembly/js-types) 的依赖。
- 简化了 JSPI 的工具链：新 API 函数不再需要明确引用 WebAssembly 函数的类型。

这一变化得以实现，是因为 API 中不再显式引用 `Suspender` 对象。

### 返回时不再暂停

第三个变化涉及暂停调用的行为。与之前的 API 不同，新 API 只有在 JavaScript 函数实际返回 `Promise` 时才会暂停。

尽管这看似违反了 [W3C TAG 的建议](https://www.w3.org/2001/tag/doc/promises-guide#accepting-promises)，但对于 JSPI 用户来说，这是一种安全的优化。因为 JSPI 实际上承担了调用返回 `Promise` 的函数的角色。

这一变化对大多数应用程序影响不大，但某些应用程序将因避免不必要的浏览器事件循环往返而显著受益。

### 新 API

新 API 非常简单：有一个函数接受从 WebAssembly 模块导出的函数，并将其转换为返回 `Promise` 的函数：

```js
Function Webassembly.promising(Function wsFun)
```

注意，尽管参数被类型化为 JavaScript `Function`，但实际上仅限于 WebAssembly 函数。

在暂停调用方面，有一个新的类 `WebAssembly.Suspending`，并且有一个构造函数接受一个 JavaScript 函数作为参数。在 WebIDL 中，它被表示为：

```js
interface Suspending{
  constructor (Function fun);
}
```

需要注意的是，这个 API 具有不对称性：我们有一个函数接受一个 WebAssembly 函数并返回一个新的 promise 函数；而在标记暂停函数时，则将其封装在 `Suspending` 对象中。这反映了底层实现的深层次差异。

导入函数的暂停行为本质上是调用的一部分：也就是说，某个实例化模块内的函数调用导入并因此暂停。

另一方面，`promising` 函数接受一个常规的 WebAssembly 函数，并返回一个新的函数，该函数可以响应暂停并返回一个 `Promise`。

### 使用新 API

如果您是 Emscripten 用户，使用新 API 通常不需要更改代码。您需要使用至少版本为 3.1.61 的 Emscripten，并且浏览器版本至少为 Chrome 126.0.6478.17（Chrome M126）。

如果您是自行集成 JSPI，那么您的代码应该会大大简化。特别是，不再需要存储传入的 `Suspender` 对象并在调用导入时检索它。您可以在 WebAssembly 模块中使用常规的顺序代码。

### 旧 API

旧的 API 将至少运行至 2024 年 10 月 29 日（Chrome M128）。之后，我们计划移除旧的 API。

需要注意的是，Emscripten 本身从 3.1.61 版本开始将不再支持旧的 API。

### 如何检测您浏览器中的 API

更换 API 是一个需要谨慎对待的过程。我们之所以能够在此情况下进行更改，是因为 JSPI 本身仍处于试验阶段。您可以通过以下简单方法来测试您的浏览器启用了哪个 API：

```js
function oldAPI(){
  return WebAssembly.Suspender!=undefined
}

function newAPI(){
  return WebAssembly.Suspending!=undefined
}
```

如果浏览器启用了旧的 JSPI API，`oldAPI` 函数将返回 `true`；如果启用了新的 JSPI API，`newAPI` 函数将返回 `true`。

## JSPI 的发展趋势

### 实现方面

我们正在开发的 JSPI 最大的变化实际上对大多数程序员来说是不可见的：即所谓的可增长堆栈。

目前的 JSPI 实现是基于分配固定大小的堆栈的。实际上，分配的堆栈相当大。这是因为我们必须能够处理可能需要深度堆栈来正确处理递归的任意 WebAssembly 计算。

然而，这并不是一个可持续的策略：我们希望支持拥有数百万个暂停协程的应用程序；如果每个堆栈大小为 1MB，这是不可能实现的。

可增长堆栈是一种堆栈分配策略，允许 WebAssembly 堆栈根据需要增长。通过这种方式，我们可以为只需要较小堆栈空间的应用程序分配非常小的堆栈，并在应用程序空间不足时（即堆栈溢出）扩展堆栈。

有几种潜在的实现可增长堆栈的技术。我们正在研究的一种方法是分段堆栈。分段堆栈由一系列堆栈区域组成——每个区域都有固定大小，但不同的段可能具有不同的大小。

需要注意的是，尽管我们可能正在解决协程的堆栈溢出问题，但我们并不打算使主堆栈或中央堆栈可增长。因此，如果您的应用程序出现堆栈空间不足问题，除非使用 JSPI，否则可增长堆栈无法解决问题。

### 标准化过程

截至发布时，JSPI 正在进行 [Origin Trial](https://v8.dev/blog/jspi-ot)。新 API 将在剩余的 Origin Trial 期间上线——即在 Chrome M126 中。

在 Origin Trial 期间，旧的 API 也将继续可用；然而，计划在 Chrome M128 后不久停止支持。

之后，JSPI 的主要工作重心将是标准化过程。JSPI 目前（截至发布时）处于 W3C Wasm CG 过程的第 3 阶段。下一步，即进入第 4 阶段，将标志着 JSPI 作为 JavaScript 和 WebAssembly 生态系统的标准 API 被正式采纳。
