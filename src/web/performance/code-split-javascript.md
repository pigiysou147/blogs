---
date: 2023-02-01
category: 性能优化
tags:
 - JavaScript
---

# 代码拆分 JavaScript

加载大型 JavaScript 资源会显著影响网页速度。将 JavaScript 拆分为较小的区块并仅下载网页在启动期间正常运行所必需的内容，可以极大地提高网页的加载响应能力，进而提高网页的互动到下一次绘制 (INP)。

当网页下载、解析和编译大型 JavaScript 文件时，可能会在一段时间内无响应。页面元素可见，因为它们是页面的初始 HTML 的一部分，并由 CSS 设置样式。但是，为这些互动元素以及页面加载的其他脚本提供支持所需的 JavaScript 可能需要解析和执行 JavaScript，以便它们正常运行。其结果是，用户可能会感觉互动受到严重延迟，甚至完全中断。

这通常是因为主线程处于阻塞状态，因为 JavaScript 在主线程上解析和编译。如果此过程花费的时间太长，交互式页面元素可能无法足够快速地响应用户输入。解决方法之一是仅加载网页正常运行所需的 JavaScript，而通过一种称为代码拆分的技术推迟其他 JavaScript 以后再加载。本单元重点介绍这两种方法的后一种。

## 通过代码拆分，减少启动期间的 JavaScript 解析和执行

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)会在 [JavaScript 执行时间超过 2 秒时发出警告，并在执行时间超过 3.5 秒时失败](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/)。在网页生命周期的任何时间点，过度的 JavaScript 解析和执行都是潜在的问题，因为如果用户与网页互动的时间与负责处理和执行 JavaScript 的主线程任务运行的时间一致，则有可能会增加互动的输入延迟时间。

除此之外，在初始网页加载期间，过多的 JavaScript 执行和解析尤其会导致问题，因为这是网页生命周期中用户很可能会与网页互动的时间点。事实上，总阻塞时间 (TBT)](https://web.dev/articles/tbt) 这项加载响应能力指标与 [INP](https://web.dev/articles/inp) [高度相关](https://almanac.httparchive.org/en/2022/performance#inp-and-tbt)，这表明用户在初始网页加载期间尝试进行互动的意愿较高。

Lighthouse 审核报告执行页面请求的每个 JavaScript 文件所花费的时间非常有用，因为它可以帮助您准确确定哪些脚本可能适合进行[*代码拆分*](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting)。然后，您可以使用 Chrome 开发者工具中的[覆盖率工具](https://developer.chrome.com/docs/devtools/coverage/)进一步确定页面加载期间未使用页面的 JavaScript 的哪些部分。

代码拆分是一项可以减少页面初始 JavaScript 载荷的实用技术。它可让您将 JavaScript 软件包拆分为两部分：

* 网页加载时所需的 JavaScript 无法在任何其他时间加载。
* 可在稍后时间点加载（最常见的是用户与页面上的指定互动元素互动时）的其余 JavaScript。

您可以使用[动态 `import()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import) 语法完成代码拆分。此语法与在启动期间请求指定 JavaScript 资源的 `<script>` 元素不同，该语法可在网页生命周期的后期请求 JavaScript 资源。

**重要提示** ：动态 `import()` 是一种类似于函数的表达式，可让您动态加载 JavaScript 模块。 它是一种异步操作，可用于导入模块以响应互动或需要加载其他模块的其他任何条件。动态 `import()` 与[静态 `import`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import) 语句不同，后者会立即导入模块，并且要求父模块及其所有依赖项都得到解析和执行，然后才能运行。

```javascript
document.querySelectorAll('#myForm input').addEventListener('blur', async () => {
  // Get the form validation named export from the module through destructuring:
  const { validateForm } = await import('/validate-form.mjs');

  // Validate the form:
  validateForm();
}, { once: true });
```

在上述 JavaScript 代码段中，只有在用户对表单的任意 `<input>` 字段进行[模糊处理](https://developer.mozilla.org/docs/Web/API/Element/blur_event)时，系统才会下载、解析和执行 `validate-form.mjs` 模块。在这种情况下，只有当页面最有可能实际被使用时，负责驱动表单验证逻辑的 JavaScript 资源才会与页面相关。

您可以对 [webpack](https://webpack.js.org/guides/code-splitting/)、[Parcel](https://parceljs.org/features/code-splitting/)、[Rollup](https://rollupjs.org/guide/en#dynamic-import) 和 [esbuild](https://esbuild.github.io/api/#splitting) 等 JavaScript 捆绑器进行配置，使其在源代码中遇到动态 `import()` 调用时将 JavaScript 软件包拆分为多个较小的区块。大多数工具都会自动执行此操作，但 esbuild 特别要求您选择启用此优化。

**注意** ：[React](https://react.dev/) 通过其 [`React.lazy`](https://react.dev/reference/react/lazy) 语法抽象化动态 `import()`。从本质上讲，这仍然依赖于动态 `import()`，并且模块打包器仍负责将 JavaScript 拆分为单独的代码块。## 关于代码拆分的实用说明

虽然代码拆分可有效减少初始网页加载期间的主线程争用，但如果您决定审核 JavaScript 源代码以寻找代码拆分机会，请注意以下几点：

### 如果可以，请使用捆绑器

开发者在开发过程中使用 [JavaScript 模块](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules)是一种常见做法。这是一项出色的开发者体验改进，提高了代码可读性和可维护性。不过，将 JavaScript 模块投入生产环境时，可能会导致一些性能特征欠佳。

最重要的是，您应该使用打包器来处理和优化源代码，包括打算进行代码拆分的模块。Bundler 不仅可以有效地对 JavaScript 源代码应用优化，还可以有效地平衡性能考虑因素（例如软件包大小与压缩比率）。压缩效果会随着软件包的大小而提高，但打包器还会尝试确保软件包不会因脚本评估而引起长时间的任务。

打包器还可以避免通过网络传送大量未捆绑模块的问题。使用 JavaScript 模块的架构往往具有大型且复杂的模块树。未捆绑模块树时，每个模块代表一个单独的 HTTP 请求，如果您不捆绑模块，Web 应用中的互动可能会延迟。虽然可以使用 [`<link rel="modulepreload">` 资源提示](https://developer.chrome.com/blog/modulepreload/)尽早加载大型模块树，但从加载性能的角度来看，JavaScript 软件包仍然是首选。

### 避免意外停用流式编译

Chromium 的 V8 JavaScript 引擎提供多项开箱即用的优化，以确保尽可能高效地加载生产 JavaScript 代码。其中一项优化措施称为“流式编译”，它与流式传输到浏览器的 HTML 的增量解析一样，会在从网络传入的 JavaScript 块时对其进行编译。

您可以通过多种方法确保在 Chromium 中对您的 Web 应用进行流式编译：

* **转换您的生产代码，避免使用 JavaScript 模块。** Bundler 可以根据编译目标转换 JavaScript 源代码，并且目标通常特定于给定环境。V8 会将流式编译应用于任何不使用模块的 JavaScript 代码，并且您可以对打包器进行配置，以将 JavaScript 模块代码转换为不使用 JavaScript 模块及其功能的语法。
* **如果您要将 JavaScript 模块部署到生产环境中，请使用 `.mjs` 扩展。** 无论您的正式版 JavaScript 是否使用模块，对于使用模块的 JavaScript，与不使用模块的 JavaScript 都没有什么特殊的[内容类型](https://en.wikipedia.org/wiki/Media_type)。就 V8 而言，当您使用 `.js` 扩展在生产环境中发布 JavaScript 模块时，可以有效地停用流式编译。如果您对 JavaScript 模块使用 `.mjs` 扩展，V8 可以确保基于模块的 JavaScript 代码的流式编译不会中断。

不要因为这些因素而妨碍您使用代码拆分。代码拆分可有效地减少用户的初始 JavaScript 载荷，但通过使用打包器并了解如何保留 V8 的流式编译行为，您可以确保正式版 JavaScript 代码能够尽可能快速地为用户提供服务。

### 动态导入演示

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-dynamic-import?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的 learn-performance-dynamic-import"></iframe>

## Webpack

[webpack](https://webpack.js.org/guides/code-splitting/) 附带一个名为 [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/) 的插件，您可以通过该插件配置打包器拆分 JavaScript 文件的方式。webpack 可识别动态 `import()` 和静态 `import` 语句。您可以通过在其配置中指定 `chunks` 选项来修改 `SplitChunksPlugin` 的行为：

* `chunks: async` 是默认值，表示动态 `import()` 调用。
* `chunks: initial` 是指静态 `import` 调用。
* `chunks: all` 涵盖动态 `import()` 和静态导入，可让您在 `async` 和 `initial` 导入之间共享分块。

默认情况下，每当 webpack 遇到动态 `import()` 语句时，都会为该模块创建单独的分块：

```javascript
/* main.js */

// An application-specific chunk required during the initial page load:
import myFunction from './my-function.js';

myFunction('Hello world!');

// If a specific condition is met, a separate chunk is downloaded on demand,
// rather than being bundled with the initial chunk:
if (condition) {
  // Assumes top-level await is available. More info:
  // https://v8.dev/features/top-level-await
  await import('/form-validation.js');
}
```

上述代码段的默认 Webpack 配置会生成两个单独的分块：

* `main.js` 分块（webpack 归类为 `initial` 分块），包含 `main.js` 和 `./my-function.js` 模块。
* `async` 分块，仅包含 `form-validation.js`（如果已配置，资源名称中包含[文件哈希值](https://bundlers.tooling.report/hashing/)）。仅当 `condition` 为 [truthy](https://developer.mozilla.org/docs/Glossary/Truthy) 时，才会下载此分块。

此配置可让您将 `form-validation.js` 分块延迟到实际需要加载。这样可以缩短初始网页加载期间的[脚本评估](https://web.dev/articles/script-evaluation-and-long-tasks)时间，从而提高加载响应速度。在满足指定条件时，系统会下载和评估 `form-validation.js` 分块的脚本，在这种情况下，系统会下载动态导入的模块。例如，只能针对特定浏览器下载 polyfill，或者（如前面的示例所示）必须要有导入的模块才能进行用户互动。

另一方面，更改 `SplitChunksPlugin` 配置以指定 `chunks: initial` 可确保仅在初始分块上拆分代码。这些是静态导入的区块或 webpack 的 [`entry` 属性](https://webpack.js.org/concepts/entry-points/)中列出的区块。看前面的示例，生成的分块将是单个脚本文件中 `form-validation.js` 和 `main.js` 的组合，可能会导致初始网页加载性能变差。

还可以配置 `SplitChunksPlugin` 的选项来将较大的脚本拆分为多个较小的脚本。例如，使用 [`maxSize`](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksmaxsize) 选项指示 Webpack 将在块超出 `maxSize` 指定的值时将其拆分为单独的文件。[将大型脚本文件分成较小的文件可以提高负载响应速度](https://web.dev/articles/script-evaluation-and-long-tasks#loading_scripts_with_the_script_element)，因为在某些情况下，CPU 密集型脚本评估工作被划分为更小的任务，这些任务不太可能长时间阻塞主线程。

此外，生成较大的 JavaScript 文件还意味着脚本更有可能出现缓存失效问题。例如，如果您搭载一个同时包含框架和第一方应用代码的超大脚本，那么如果只更新了框架，而捆绑资源中没有任何其他内容，则整个软件包都可能失效。

另一方面，较小的脚本文件会增加回访者从缓存中检索资源的可能性，从而在重复访问时提高网页加载速度。不过，与较大的文件相比，较小的文件不会从压缩中受益，并且可能会在浏览器缓存未就绪的情况下增加网页加载时的网络往返时间。必须注意在缓存效率、压缩效果和脚本评估时间之间取得平衡。

**注意** ：如果您通过在应用的 webpack 配置中指定 `splitChunks: false` 来停用 `SplitChunksPlugin`，则 `./my-function.js` 会捆绑在 `main.js` 和 `form-validation.js` 中。#### webpack 演示

**注意** ：由于此演示使用了捆绑器，因此无法为其嵌入 Glitch 演示。如需运行该代码库，请将以下 GitHub 代码库克隆到本地机器，然后按照代码库的 [`README`](https://github.com/kevinfarrugia/learn-performance-webpack-code-splitting/#readme) 中的说明操作。[webpack `SplitChunksPlugin` 演示](https://github.com/kevinfarrugia/learn-performance-webpack-code-splitting/)。
