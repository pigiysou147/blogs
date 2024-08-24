import{_ as e,c as i,o as a,d as t}from"./app-BEYv8s4s.js";const s={},r=t(`<h1 id="代码拆分-javascript" tabindex="-1"><a class="header-anchor" href="#代码拆分-javascript"><span>代码拆分 JavaScript</span></a></h1><p>加载大型 JavaScript 资源会显著影响网页速度。将 JavaScript 拆分为较小的区块并仅下载网页在启动期间正常运行所必需的内容，可以极大地提高网页的加载响应能力，进而提高网页的互动到下一次绘制 (INP)。</p><p>当网页下载、解析和编译大型 JavaScript 文件时，可能会在一段时间内无响应。页面元素可见，因为它们是页面的初始 HTML 的一部分，并由 CSS 设置样式。但是，为这些互动元素以及页面加载的其他脚本提供支持所需的 JavaScript 可能需要解析和执行 JavaScript，以便它们正常运行。其结果是，用户可能会感觉互动受到严重延迟，甚至完全中断。</p><p>这通常是因为主线程处于阻塞状态，因为 JavaScript 在主线程上解析和编译。如果此过程花费的时间太长，交互式页面元素可能无法足够快速地响应用户输入。解决方法之一是仅加载网页正常运行所需的 JavaScript，而通过一种称为代码拆分的技术推迟其他 JavaScript 以后再加载。本单元重点介绍这两种方法的后一种。</p><h2 id="通过代码拆分-减少启动期间的-javascript-解析和执行" tabindex="-1"><a class="header-anchor" href="#通过代码拆分-减少启动期间的-javascript-解析和执行"><span>通过代码拆分，减少启动期间的 JavaScript 解析和执行</span></a></h2><p><a href="https://developer.chrome.com/docs/lighthouse/overview/" target="_blank" rel="noopener noreferrer">Lighthouse</a>会在 <a href="https://developer.chrome.com/docs/lighthouse/performance/bootup-time/" target="_blank" rel="noopener noreferrer">JavaScript 执行时间超过 2 秒时发出警告，并在执行时间超过 3.5 秒时失败</a>。在网页生命周期的任何时间点，过度的 JavaScript 解析和执行都是潜在的问题，因为如果用户与网页互动的时间与负责处理和执行 JavaScript 的主线程任务运行的时间一致，则有可能会增加互动的输入延迟时间。</p><p>除此之外，在初始网页加载期间，过多的 JavaScript 执行和解析尤其会导致问题，因为这是网页生命周期中用户很可能会与网页互动的时间点。事实上，总阻塞时间 (TBT)](https://web.dev/articles/tbt) 这项加载响应能力指标与 <a href="https://web.dev/articles/inp" target="_blank" rel="noopener noreferrer">INP</a> <a href="https://almanac.httparchive.org/en/2022/performance#inp-and-tbt" target="_blank" rel="noopener noreferrer">高度相关</a>，这表明用户在初始网页加载期间尝试进行互动的意愿较高。</p><p>Lighthouse 审核报告执行页面请求的每个 JavaScript 文件所花费的时间非常有用，因为它可以帮助您准确确定哪些脚本可能适合进行<a href="https://web.dev/articles/reduce-javascript-payloads-with-code-splitting" target="_blank" rel="noopener noreferrer"><em>代码拆分</em></a>。然后，您可以使用 Chrome 开发者工具中的<a href="https://developer.chrome.com/docs/devtools/coverage/" target="_blank" rel="noopener noreferrer">覆盖率工具</a>进一步确定页面加载期间未使用页面的 JavaScript 的哪些部分。</p><p>代码拆分是一项可以减少页面初始 JavaScript 载荷的实用技术。它可让您将 JavaScript 软件包拆分为两部分：</p><ul><li>网页加载时所需的 JavaScript 无法在任何其他时间加载。</li><li>可在稍后时间点加载（最常见的是用户与页面上的指定互动元素互动时）的其余 JavaScript。</li></ul><p>您可以使用<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/import" target="_blank" rel="noopener noreferrer">动态 <code>import()</code></a> 语法完成代码拆分。此语法与在启动期间请求指定 JavaScript 资源的 <code>&lt;script&gt;</code> 元素不同，该语法可在网页生命周期的后期请求 JavaScript 资源。</p><p><strong>重要提示</strong> ：动态 <code>import()</code> 是一种类似于函数的表达式，可让您动态加载 JavaScript 模块。 它是一种异步操作，可用于导入模块以响应互动或需要加载其他模块的其他任何条件。动态 <code>import()</code> 与<a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import" target="_blank" rel="noopener noreferrer">静态 <code>import</code></a> 语句不同，后者会立即导入模块，并且要求父模块及其所有依赖项都得到解析和执行，然后才能运行。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">querySelectorAll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;#myForm input&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;blur&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // Get the form validation named export from the module through destructuring:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">validateForm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#0184BC;--shiki-dark:#61AFEF;"> import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/validate-form.mjs&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // Validate the form:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  validateForm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">once</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述 JavaScript 代码段中，只有在用户对表单的任意 <code>&lt;input&gt;</code> 字段进行<a href="https://developer.mozilla.org/docs/Web/API/Element/blur_event" target="_blank" rel="noopener noreferrer">模糊处理</a>时，系统才会下载、解析和执行 <code>validate-form.mjs</code> 模块。在这种情况下，只有当页面最有可能实际被使用时，负责驱动表单验证逻辑的 JavaScript 资源才会与页面相关。</p><p>您可以对 <a href="https://webpack.js.org/guides/code-splitting/" target="_blank" rel="noopener noreferrer">webpack</a>、<a href="https://parceljs.org/features/code-splitting/" target="_blank" rel="noopener noreferrer">Parcel</a>、<a href="https://rollupjs.org/guide/en#dynamic-import" target="_blank" rel="noopener noreferrer">Rollup</a> 和 <a href="https://esbuild.github.io/api/#splitting" target="_blank" rel="noopener noreferrer">esbuild</a> 等 JavaScript 捆绑器进行配置，使其在源代码中遇到动态 <code>import()</code> 调用时将 JavaScript 软件包拆分为多个较小的区块。大多数工具都会自动执行此操作，但 esbuild 特别要求您选择启用此优化。</p><p><strong>注意</strong> ：<a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> 通过其 <a href="https://react.dev/reference/react/lazy" target="_blank" rel="noopener noreferrer"><code>React.lazy</code></a> 语法抽象化动态 <code>import()</code>。从本质上讲，这仍然依赖于动态 <code>import()</code>，并且模块打包器仍负责将 JavaScript 拆分为单独的代码块。## 关于代码拆分的实用说明</p><p>虽然代码拆分可有效减少初始网页加载期间的主线程争用，但如果您决定审核 JavaScript 源代码以寻找代码拆分机会，请注意以下几点：</p><h3 id="如果可以-请使用捆绑器" tabindex="-1"><a class="header-anchor" href="#如果可以-请使用捆绑器"><span>如果可以，请使用捆绑器</span></a></h3><p>开发者在开发过程中使用 <a href="https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">JavaScript 模块</a>是一种常见做法。这是一项出色的开发者体验改进，提高了代码可读性和可维护性。不过，将 JavaScript 模块投入生产环境时，可能会导致一些性能特征欠佳。</p><p>最重要的是，您应该使用打包器来处理和优化源代码，包括打算进行代码拆分的模块。Bundler 不仅可以有效地对 JavaScript 源代码应用优化，还可以有效地平衡性能考虑因素（例如软件包大小与压缩比率）。压缩效果会随着软件包的大小而提高，但打包器还会尝试确保软件包不会因脚本评估而引起长时间的任务。</p><p>打包器还可以避免通过网络传送大量未捆绑模块的问题。使用 JavaScript 模块的架构往往具有大型且复杂的模块树。未捆绑模块树时，每个模块代表一个单独的 HTTP 请求，如果您不捆绑模块，Web 应用中的互动可能会延迟。虽然可以使用 <a href="https://developer.chrome.com/blog/modulepreload/" target="_blank" rel="noopener noreferrer"><code>&lt;link rel=&quot;modulepreload&quot;&gt;</code> 资源提示</a>尽早加载大型模块树，但从加载性能的角度来看，JavaScript 软件包仍然是首选。</p><h3 id="避免意外停用流式编译" tabindex="-1"><a class="header-anchor" href="#避免意外停用流式编译"><span>避免意外停用流式编译</span></a></h3><p>Chromium 的 V8 JavaScript 引擎提供多项开箱即用的优化，以确保尽可能高效地加载生产 JavaScript 代码。其中一项优化措施称为“流式编译”，它与流式传输到浏览器的 HTML 的增量解析一样，会在从网络传入的 JavaScript 块时对其进行编译。</p><p>您可以通过多种方法确保在 Chromium 中对您的 Web 应用进行流式编译：</p><ul><li><strong>转换您的生产代码，避免使用 JavaScript 模块。</strong> Bundler 可以根据编译目标转换 JavaScript 源代码，并且目标通常特定于给定环境。V8 会将流式编译应用于任何不使用模块的 JavaScript 代码，并且您可以对打包器进行配置，以将 JavaScript 模块代码转换为不使用 JavaScript 模块及其功能的语法。</li><li><strong>如果您要将 JavaScript 模块部署到生产环境中，请使用 <code>.mjs</code> 扩展。</strong> 无论您的正式版 JavaScript 是否使用模块，对于使用模块的 JavaScript，与不使用模块的 JavaScript 都没有什么特殊的<a href="https://en.wikipedia.org/wiki/Media_type" target="_blank" rel="noopener noreferrer">内容类型</a>。就 V8 而言，当您使用 <code>.js</code> 扩展在生产环境中发布 JavaScript 模块时，可以有效地停用流式编译。如果您对 JavaScript 模块使用 <code>.mjs</code> 扩展，V8 可以确保基于模块的 JavaScript 代码的流式编译不会中断。</li></ul><p>不要因为这些因素而妨碍您使用代码拆分。代码拆分可有效地减少用户的初始 JavaScript 载荷，但通过使用打包器并了解如何保留 V8 的流式编译行为，您可以确保正式版 JavaScript 代码能够尽可能快速地为用户提供服务。</p><h3 id="动态导入演示" tabindex="-1"><a class="header-anchor" href="#动态导入演示"><span>动态导入演示</span></a></h3><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-dynamic-import?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的 learn-performance-dynamic-import"></iframe><h2 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>Webpack</span></a></h2><p><a href="https://webpack.js.org/guides/code-splitting/" target="_blank" rel="noopener noreferrer">webpack</a> 附带一个名为 <a href="https://webpack.js.org/plugins/split-chunks-plugin/" target="_blank" rel="noopener noreferrer"><code>SplitChunksPlugin</code></a> 的插件，您可以通过该插件配置打包器拆分 JavaScript 文件的方式。webpack 可识别动态 <code>import()</code> 和静态 <code>import</code> 语句。您可以通过在其配置中指定 <code>chunks</code> 选项来修改 <code>SplitChunksPlugin</code> 的行为：</p><ul><li><code>chunks: async</code> 是默认值，表示动态 <code>import()</code> 调用。</li><li><code>chunks: initial</code> 是指静态 <code>import</code> 调用。</li><li><code>chunks: all</code> 涵盖动态 <code>import()</code> 和静态导入，可让您在 <code>async</code> 和 <code>initial</code> 导入之间共享分块。</li></ul><p>默认情况下，每当 webpack 遇到动态 <code>import()</code> 语句时，都会为该模块创建单独的分块：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/* main.js */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// An application-specific chunk required during the initial page load:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> myFunction</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;./my-function.js&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">myFunction</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Hello world!&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// If a specific condition is met, a separate chunk is downloaded on demand,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// rather than being bundled with the initial chunk:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">condition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // Assumes top-level await is available. More info:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  // https://v8.dev/features/top-level-await</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  await</span><span style="--shiki-light:#0184BC;--shiki-dark:#61AFEF;"> import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/form-validation.js&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码段的默认 Webpack 配置会生成两个单独的分块：</p><ul><li><code>main.js</code> 分块（webpack 归类为 <code>initial</code> 分块），包含 <code>main.js</code> 和 <code>./my-function.js</code> 模块。</li><li><code>async</code> 分块，仅包含 <code>form-validation.js</code>（如果已配置，资源名称中包含<a href="https://bundlers.tooling.report/hashing/" target="_blank" rel="noopener noreferrer">文件哈希值</a>）。仅当 <code>condition</code> 为 <a href="https://developer.mozilla.org/docs/Glossary/Truthy" target="_blank" rel="noopener noreferrer">truthy</a> 时，才会下载此分块。</li></ul><p>此配置可让您将 <code>form-validation.js</code> 分块延迟到实际需要加载。这样可以缩短初始网页加载期间的<a href="https://web.dev/articles/script-evaluation-and-long-tasks" target="_blank" rel="noopener noreferrer">脚本评估</a>时间，从而提高加载响应速度。在满足指定条件时，系统会下载和评估 <code>form-validation.js</code> 分块的脚本，在这种情况下，系统会下载动态导入的模块。例如，只能针对特定浏览器下载 polyfill，或者（如前面的示例所示）必须要有导入的模块才能进行用户互动。</p><p>另一方面，更改 <code>SplitChunksPlugin</code> 配置以指定 <code>chunks: initial</code> 可确保仅在初始分块上拆分代码。这些是静态导入的区块或 webpack 的 <a href="https://webpack.js.org/concepts/entry-points/" target="_blank" rel="noopener noreferrer"><code>entry</code> 属性</a>中列出的区块。看前面的示例，生成的分块将是单个脚本文件中 <code>form-validation.js</code> 和 <code>main.js</code> 的组合，可能会导致初始网页加载性能变差。</p><p>还可以配置 <code>SplitChunksPlugin</code> 的选项来将较大的脚本拆分为多个较小的脚本。例如，使用 <a href="https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksmaxsize" target="_blank" rel="noopener noreferrer"><code>maxSize</code></a> 选项指示 Webpack 将在块超出 <code>maxSize</code> 指定的值时将其拆分为单独的文件。<a href="https://web.dev/articles/script-evaluation-and-long-tasks#loading_scripts_with_the_script_element" target="_blank" rel="noopener noreferrer">将大型脚本文件分成较小的文件可以提高负载响应速度</a>，因为在某些情况下，CPU 密集型脚本评估工作被划分为更小的任务，这些任务不太可能长时间阻塞主线程。</p><p>此外，生成较大的 JavaScript 文件还意味着脚本更有可能出现缓存失效问题。例如，如果您搭载一个同时包含框架和第一方应用代码的超大脚本，那么如果只更新了框架，而捆绑资源中没有任何其他内容，则整个软件包都可能失效。</p><p>另一方面，较小的脚本文件会增加回访者从缓存中检索资源的可能性，从而在重复访问时提高网页加载速度。不过，与较大的文件相比，较小的文件不会从压缩中受益，并且可能会在浏览器缓存未就绪的情况下增加网页加载时的网络往返时间。必须注意在缓存效率、压缩效果和脚本评估时间之间取得平衡。</p><p><strong>注意</strong> ：如果您通过在应用的 webpack 配置中指定 <code>splitChunks: false</code> 来停用 <code>SplitChunksPlugin</code>，则 <code>./my-function.js</code> 会捆绑在 <code>main.js</code> 和 <code>form-validation.js</code> 中。#### webpack 演示</p><p><strong>注意</strong> ：由于此演示使用了捆绑器，因此无法为其嵌入 Glitch 演示。如需运行该代码库，请将以下 GitHub 代码库克隆到本地机器，然后按照代码库的 <a href="https://github.com/kevinfarrugia/learn-performance-webpack-code-splitting/#readme" target="_blank" rel="noopener noreferrer"><code>README</code></a> 中的说明操作。<a href="https://github.com/kevinfarrugia/learn-performance-webpack-code-splitting/" target="_blank" rel="noopener noreferrer">webpack <code>SplitChunksPlugin</code> 演示</a>。</p>`,42),n=[r];function l(p,o){return a(),i("div",null,n)}const d=e(s,[["render",l],["__file","code-split-javascript.html.vue"]]),h=JSON.parse('{"path":"/web/performance/code-split-javascript.html","title":"代码拆分 JavaScript","lang":"zh-CN","frontmatter":{"date":"2023-02-01T00:00:00.000Z","category":"性能优化","tags":["JavaScript"],"description":"代码拆分 JavaScript 加载大型 JavaScript 资源会显著影响网页速度。将 JavaScript 拆分为较小的区块并仅下载网页在启动期间正常运行所必需的内容，可以极大地提高网页的加载响应能力，进而提高网页的互动到下一次绘制 (INP)。 当网页下载、解析和编译大型 JavaScript 文件时，可能会在一段时间内无响应。页面元素可见，因...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/performance/code-split-javascript.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"代码拆分 JavaScript"}],["meta",{"property":"og:description","content":"代码拆分 JavaScript 加载大型 JavaScript 资源会显著影响网页速度。将 JavaScript 拆分为较小的区块并仅下载网页在启动期间正常运行所必需的内容，可以极大地提高网页的加载响应能力，进而提高网页的互动到下一次绘制 (INP)。 当网页下载、解析和编译大型 JavaScript 文件时，可能会在一段时间内无响应。页面元素可见，因..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-02-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码拆分 JavaScript\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"通过代码拆分，减少启动期间的 JavaScript 解析和执行","slug":"通过代码拆分-减少启动期间的-javascript-解析和执行","link":"#通过代码拆分-减少启动期间的-javascript-解析和执行","children":[{"level":3,"title":"如果可以，请使用捆绑器","slug":"如果可以-请使用捆绑器","link":"#如果可以-请使用捆绑器","children":[]},{"level":3,"title":"避免意外停用流式编译","slug":"避免意外停用流式编译","link":"#避免意外停用流式编译","children":[]},{"level":3,"title":"动态导入演示","slug":"动态导入演示","link":"#动态导入演示","children":[]}]},{"level":2,"title":"Webpack","slug":"webpack","link":"#webpack","children":[]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":10.46,"words":3137},"filePathRelative":"web/performance/code-split-javascript.md","localizedDate":"2023年2月1日","excerpt":"\\n<p>加载大型 JavaScript 资源会显著影响网页速度。将 JavaScript 拆分为较小的区块并仅下载网页在启动期间正常运行所必需的内容，可以极大地提高网页的加载响应能力，进而提高网页的互动到下一次绘制 (INP)。</p>\\n<p>当网页下载、解析和编译大型 JavaScript 文件时，可能会在一段时间内无响应。页面元素可见，因为它们是页面的初始 HTML 的一部分，并由 CSS 设置样式。但是，为这些互动元素以及页面加载的其他脚本提供支持所需的 JavaScript 可能需要解析和执行 JavaScript，以便它们正常运行。其结果是，用户可能会感觉互动受到严重延迟，甚至完全中断。</p>","autoDesc":true}');export{d as comp,h as data};
