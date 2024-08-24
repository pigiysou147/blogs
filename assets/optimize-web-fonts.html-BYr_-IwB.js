import{_ as e,c as a,o as i,d as s}from"./app-BFNMFIwh.js";const t={},n=s(`<h1 id="优化网页字体" tabindex="-1"><a class="header-anchor" href="#优化网页字体"><span>优化网页字体</span></a></h1><p>在本单元中，您将了解一些优化网页字体的方法。</p><p>网络字体会影响网页在加载时和呈现时的性能。 较大的字体文件可能需要一段时间才能下载完毕，并且会对 <a href="https://web.dev/articles/fcp" target="_blank" rel="noopener noreferrer">First Contentful Paint (FCP)</a> 产生负面影响，而不正确的 <a href="https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display" target="_blank" rel="noopener noreferrer"><code>font-display</code> 值</a>则可能会导致不必要的布局偏移，进而导致网页的<a href="https://web.dev/articles/cls" target="_blank" rel="noopener noreferrer">Cumulative Layout Shift (CLS)</a>。</p><p>在讨论优化网页字体之前，了解浏览器如何发现这些字体会很有帮助，有助于您了解 CSS 如何在某些情况下阻止检索不必要的网页字体。</p><h2 id="发现广告系列" tabindex="-1"><a class="header-anchor" href="#发现广告系列"><span>发现广告系列</span></a></h2><p>页面的网络字体是使用 <code>@font-face</code> 声明在样式表中定义的：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@font-face</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-family:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Open Sans&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  src:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/fonts/OpenSans-Regular-webfont.woff2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">format</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;woff2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码段定义了一个名为 <code>&quot;Open Sans&quot;</code> 的 <code>font-family</code>，并告知浏览器在哪里可以找到相应的网页字体资源。为了节省带宽，浏览器在确定当前页面的布局需要网页字体之前，不会下载该字体。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-family:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Open Sans&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述 CSS 代码段中，浏览器会在解析网页的 HTML 中的 <code>&lt;h1&gt;</code> 元素时下载 <code>&quot;Open Sans&quot;</code> 字体文件。</p><h3 id="preload" tabindex="-1"><a class="header-anchor" href="#preload"><span><code>preload</code></span></a></h3><p>如果您的 <code>@font-face</code> 声明是在外部样式表中定义的，浏览器只有在下载该样式表之后才能开始下载这些声明。这使得网络字体资源被延迟发现，但有一些方法可以帮助浏览器更快地发现网络字体。</p><p>您可以使用 <code>preload</code> 指令发起对网页字体资源的提前请求。<code>preload</code> 指令可让网页字体在网页加载初期被检测到，浏览器会立即开始下载这些字体，无需等待样式表完成下载和解析。<code>preload</code> 指令不会等到网页上需要相应字体时再执行。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;!-- The \`crossorigin\` attribute is required for fonts—even</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     self-hosted ones, as fonts are considered CORS resources. --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;preload&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;font&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/fonts/OpenSans-Regular-webfont.woff2&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> crossorigin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> ：请谨慎使用 <code>preload</code> 指令。过度使用 <code>preload</code> 指令可能会中断其他关键资源的带宽。如果使用过多，<code>preload</code> 指令可能会下载当前网页不需要的字体</p><p>此外，请务必注意，字体属于 CORS 资源。因此，预加载字体时<em>必须</em>指定 <code>crossorigin</code> 属性，即使这些字体是自托管的字体也是如此。</p><h3 id="内嵌-font-face-声明" tabindex="-1"><a class="header-anchor" href="#内嵌-font-face-声明"><span>内嵌 <code>@font-face</code> <strong>声明</strong></span></a></h3><p>您可以使用 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/style" target="_blank" rel="noopener noreferrer"><code>&lt;style&gt;</code> 元素</a>在 HTML 的 <code>&lt;head&gt;</code> 中内嵌会阻止渲染的 CSS（包括 <code>@font-face</code> 声明），以便使字体在网页加载的早期阶段被检测到。在这种情况下，浏览器会在网页加载初期发现网页字体，因为它不需要等待外部样式表下载。</p><p><strong>注意</strong> ：只有在所有阻止渲染的资源加载完毕后，浏览器才会开始下载字体文件。这意味着，如果您已内嵌 <code>@font-face</code> 声明，但其余的 CSS 位于外部样式表中，浏览器仍然需要等待外部样式表下载完毕。内嵌 <code>@font-face</code> 声明优于使用 <code>preload</code> 提示，因为浏览器只会下载呈现当前网页所需的字体。这样可以消除下载未使用的字体的风险。</p><p><strong>重要提示</strong> ：不建议将字体文件本身内嵌到您的 CSS 或任何其他资源中，因为这样做所需的 <a href="https://developer.mozilla.org/docs/Glossary/Base64" target="_blank" rel="noopener noreferrer">base64 编码</a>方案会产生较大的载荷，而内嵌可能会导致<a href="https://web.dev/articles/preload-scanner#inlining_too_many_resources" target="_blank" rel="noopener noreferrer">延迟预加载扫描程序</a>发现其他关键资源。## 下载</p><p>在发现网络字体并确保当前页面布局需要这些字体后，浏览器可以下载这些字体。网页字体的数量、编码和文件大小会显著影响浏览器下载和呈现网页字体的速度。</p><h3 id="自行托管网页字体" tabindex="-1"><a class="header-anchor" href="#自行托管网页字体"><span>自行托管网页字体</span></a></h3><p>网络字体可通过第三方服务（如 <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer">Google Fonts</a>）提供，也可以在源站上自行托管。使用第三方服务时，您的网页需要先打开与提供商网域的连接，然后才能开始下载所需的网页字体。这可能会延迟网页字体的发现和后续下载。</p><p>使用 <code>preconnect</code> 资源提示可以减少此开销。通过使用 <code>preconnect</code>，您可以告知浏览器比浏览器通常更快打开跨源连接：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;preconnect&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://fonts.googleapis.com&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;preconnect&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://fonts.gstatic.com&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> crossorigin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述 HTML 代码段会提示浏览器与 <code>fonts.googleapis.com</code> 建立连接，并与 <code>fonts.gstatic.com</code> 建立 <a href="https://developer.mozilla.org/docs/Web/HTTP/CORS" target="_blank" rel="noopener noreferrer">CORS</a> 连接。某些字体提供程序（如 Google Fonts）会提供来自不同来源的 CSS 和字体资源。</p><p>您可以通过自行托管网页字体来消除对第三方连接的需要。在大多数情况下，自托管网络字体比从跨源下载字体更快。如果您打算自行托管网页字体，请检查您的网站是否使用了<a href="https://web.dev/articles/content-delivery-networks" target="_blank" rel="noopener noreferrer">内容分发网络 (CDN)</a>、<a href="https://web.dev/articles/performance-http2" target="_blank" rel="noopener noreferrer">HTTP/2</a> 或 HTTP/3，并为网站所需的网页字体设置正确的缓存标头。</p><h3 id="仅使用-woff2-和-woff2" tabindex="-1"><a class="header-anchor" href="#仅使用-woff2-和-woff2"><span>仅使用 WOFF2 和 WOFF2</span></a></h3><p><a href="https://www.w3.org/TR/WOFF2/" target="_blank" rel="noopener noreferrer">WOFF2</a> 获得了<a href="https://caniuse.com/woff2" target="_blank" rel="noopener noreferrer">广泛的浏览器支持</a>和最佳压缩效果，比 WOFF 高出 30%。文件缩小可加快下载速度。WOFF2 格式通常是现代浏览器实现完全兼容性所需的唯一格式。</p><p><strong>注意</strong> ：只有在需要支持旧版浏览器时，您才可能需要使用其他格式（例如 WOFF、EOT 和 TTF）。 如果您<em>不需要</em>支持旧版浏览器，则没有理由依赖 WOFF2 以外的网页字体格式。### 设置网页字体子集</p><p>网络字体通常包含各种不同的字形，需要这些字形来表示不同语言中使用的各种字符。如果您的网页仅以一种语言（或使用单一字母表）提供内容，您可以通过子集内嵌来减小网页字体的大小。此操作通常通过指定数字或 <a href="https://en.wikipedia.org/wiki/Code_point#In_Unicode" target="_blank" rel="noopener noreferrer">Unicode 码位</a>范围来实现。</p><p>子集是原始网页字体文件中包含的减少的字形集。例如，您的网页可能会提供部分拉丁字符，而不是提供所有字形。根据所需的子集，移除字形可以显著减小字体文件的大小。</p><p>某些网页字体提供商（如 Google Fonts）通过使用查询字符串参数自动提供子集。例如，<code>https://fonts.googleapis.com/css?family=Roboto&amp;subset=latin</code> 网址会提供仅包含拉丁字母的 Roboto 网页字体的样式表。</p><p>如果您决定自行托管网页字体，下一步就是使用<a href="https://github.com/zachleat/glyphhanger" target="_blank" rel="noopener noreferrer">字形符</a>或<a href="https://github.com/Munter/subfont" target="_blank" rel="noopener noreferrer">子字体</a>等工具自行生成并托管这些子集。</p><p>但是，如果您没有足够的能力自行托管自己的网页字体，则可以通过指定仅包含网站所需的 Unicode 代码点的额外 <code>text</code> 查询字符串参数，将 Google Fonts 提供的网页字体子集。例如，如果您网站上的显示网页字体只需要短语“Welcome”所需的少量字符，您可以通过以下网址使用 Google Fonts 请求这部分字体：<code>https://fonts.googleapis.com/css?family=Monoton&amp;text=Welcome</code>。如果这种极端子集内嵌对您的网站有用，则可以显著减少网站上单个字体所需的网页字体数据量。</p><h2 id="字体渲染" tabindex="-1"><a class="header-anchor" href="#字体渲染"><span>字体渲染</span></a></h2><p>浏览器发现并下载某种网页字体后，就可以进行渲染了。默认情况下，在下载使用网页字体的任何文本之前，浏览器都会阻止其渲染。您可以使用 <a href="https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display" target="_blank" rel="noopener noreferrer"><code>font-display</code> CSS 属性</a>调整浏览器的文本渲染行为，并配置在网页字体完全加载之前应显示（或不显示）哪些文本。</p><h3 id="block" tabindex="-1"><a class="header-anchor" href="#block"><span><code>block</code></span></a></h3><p><code>font-display</code> 的默认值为 <code>block</code>。使用 <code>block</code> 时，浏览器会阻止呈现使用指定网页字体的任何文本。不同浏览器的行为会略有不同。Chromium 和 Firefox 会阻塞渲染，渲染时间最长为 3 秒，之后才能使用回退机制。Safari 会无限期屏蔽广告，直到网页字体加载完毕为止。</p><h3 id="swap" tabindex="-1"><a class="header-anchor" href="#swap"><span><code>swap</code></span></a></h3><p><a href="https://almanac.httparchive.org/en/2022/fonts#fig-13" target="_blank" rel="noopener noreferrer"><code>swap</code> 是使用最广泛的 <code>font-display</code> 值</a>。<code>swap</code> 不会阻止渲染，并且会在交换成指定的网页字体之前立即以后备方式显示文本。这样，您就可以立即显示内容，而无需等待网络字体下载完成。</p><p>不过，<code>swap</code> 的缺点是，如果 CSS 中指定的后备网页字体和网页字体在行高、字距和其他字体指标方面存在很大差异，则会导致布局偏移。如果您不小心使用 <code>preload</code> 提示尽快加载网页字体资源，或者不考虑其他 <code>font-display</code> 值，这可能会影响网站的 <a href="https://web.dev/articles/cls" target="_blank" rel="noopener noreferrer">CLS</a>。</p><h3 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback"><span><code>fallback</code></span></a></h3><p><code>font-display</code> 的 <code>fallback</code> 值在 <code>block</code> 和 <code>swap</code> 之间折衷。与 <code>swap</code> 不同，浏览器会阻止字体渲染，但只能在很短的时间内交换回退文本。不过，与 <code>block</code> 不同的是，阻塞期极短。</p><p>使用 <code>fallback</code> 值可以在运行速度较快的网络上取得良好效果。在此类网络上，如果网页字体可以快速下载，则网页字体是网页首次渲染时立即使用的字体。不过，如果网速较慢，系统会在屏蔽期过后先显示后备文本，然后在网页字体到达时替换掉后备文本。</p><h3 id="optional" tabindex="-1"><a class="header-anchor" href="#optional"><span><code>optional</code></span></a></h3><p><code>optional</code> 是最严格的 <code>font-display</code> 值，仅在 100 毫秒内下载时才会使用网页字体资源。如果某种网页字体的加载用时超过该时长，便不会在网页上使用，因此浏览器会使用后备字体进行当前导航，同时在后台下载该网页字体并将其存放在浏览器缓存中。</p><p>因此，后续网页导航可以立即使用网页字体，因为网页字体已下载。<code>font-display: optional</code> 可以避免 <code>swap</code> 时发生的布局偏移，但如果网页字体在初始网页导航时过晚出现，某些用户就看不到网页字体了。</p><h3 id="字体演示" tabindex="-1"><a class="header-anchor" href="#字体演示"><span>字体演示</span></a></h3><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-fonts?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的“learn-performance-fonts”"></iframe>`,50),o=[n];function l(r,p){return i(),a("div",null,o)}const h=e(t,[["render",l],["__file","optimize-web-fonts.html.vue"]]),c=JSON.parse('{"path":"/web/performance/optimize-web-fonts.html","title":"优化网页字体","lang":"zh-CN","frontmatter":{"date":"2023-02-01T00:00:00.000Z","category":"性能优化","tags":["字体"],"description":"优化网页字体 在本单元中，您将了解一些优化网页字体的方法。 网络字体会影响网页在加载时和呈现时的性能。 较大的字体文件可能需要一段时间才能下载完毕，并且会对 First Contentful Paint (FCP) 产生负面影响，而不正确的 font-display 值则可能会导致不必要的布局偏移，进而导致网页的Cumulative Layout Sh...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/performance/optimize-web-fonts.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"优化网页字体"}],["meta",{"property":"og:description","content":"优化网页字体 在本单元中，您将了解一些优化网页字体的方法。 网络字体会影响网页在加载时和呈现时的性能。 较大的字体文件可能需要一段时间才能下载完毕，并且会对 First Contentful Paint (FCP) 产生负面影响，而不正确的 font-display 值则可能会导致不必要的布局偏移，进而导致网页的Cumulative Layout Sh..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:tag","content":"字体"}],["meta",{"property":"article:published_time","content":"2023-02-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优化网页字体\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"发现广告系列","slug":"发现广告系列","link":"#发现广告系列","children":[{"level":3,"title":"preload","slug":"preload","link":"#preload","children":[]},{"level":3,"title":"内嵌 @font-face 声明","slug":"内嵌-font-face-声明","link":"#内嵌-font-face-声明","children":[]},{"level":3,"title":"自行托管网页字体","slug":"自行托管网页字体","link":"#自行托管网页字体","children":[]},{"level":3,"title":"仅使用 WOFF2 和 WOFF2","slug":"仅使用-woff2-和-woff2","link":"#仅使用-woff2-和-woff2","children":[]}]},{"level":2,"title":"字体渲染","slug":"字体渲染","link":"#字体渲染","children":[{"level":3,"title":"block","slug":"block","link":"#block","children":[]},{"level":3,"title":"swap","slug":"swap","link":"#swap","children":[]},{"level":3,"title":"fallback","slug":"fallback","link":"#fallback","children":[]},{"level":3,"title":"optional","slug":"optional","link":"#optional","children":[]},{"level":3,"title":"字体演示","slug":"字体演示","link":"#字体演示","children":[]}]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":8.92,"words":2677},"filePathRelative":"web/performance/optimize-web-fonts.md","localizedDate":"2023年2月1日","excerpt":"\\n<p>在本单元中，您将了解一些优化网页字体的方法。</p>\\n<p>网络字体会影响网页在加载时和呈现时的性能。 较大的字体文件可能需要一段时间才能下载完毕，并且会对 <a href=\\"https://web.dev/articles/fcp\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">First Contentful Paint (FCP)</a> 产生负面影响，而不正确的 <a href=\\"https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>font-display</code> 值</a>则可能会导致不必要的布局偏移，进而导致网页的<a href=\\"https://web.dev/articles/cls\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Cumulative Layout Shift (CLS)</a>。</p>","autoDesc":true}');export{h as comp,c as data};