import{_ as e,c as r,o as a,d as i}from"./app-BEYv8s4s.js";const t={},d=i(`<h1 id="详情和摘要" tabindex="-1"><a class="header-anchor" href="#详情和摘要"><span>详情和摘要</span></a></h1><p>了解非常有用的详细信息和摘要元素的工作原理，以及在哪里使用它们。</p><p>披露声明 widget 是一种用于隐藏和显示内容的界面控件。如果您是在 web.dev 上阅读本文，并且您的视口宽度小于 106 ems，则点击此段落上方的“在此页面上”会显示此部分的目录。如果您没有看到该选项，请缩小浏览器，以便以披露 widget 的形式查看此页面上的目录导航。</p><p><a href="https://en.wikipedia.org/wiki/Accordion_(GUI)" target="_blank" rel="noopener noreferrer">手风琴式折叠</a>图形界面是一系列垂直堆叠的披露信息 widget。手风琴界面的一个常见用例是许多网站上的常见问题解答 (FAQ) 页面。 手风琴常见问题解答包含可见问题列表；点击问题可展开或“披露”该问题的答案。</p><p><a href="https://jqueryui.com/accordion/" target="_blank" rel="noopener noreferrer">jQuery</a> 至少从 2009 年起就一直包含手风琴界面模式。原始的不含 JavaScript 的手风琴式折叠解决方案包括将每个 FAQ 问题设为 <code>&lt;label&gt;</code>，后跟其标记的对勾标记，然后在勾选标记时显示 <code>&lt;div&gt;</code> 答案。CSS 如下所示：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">#FAQ</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">+</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.answer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /* all the answer styles */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">none</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">#FAQ</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;checkbox&quot;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">]</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:checked</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.answer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  display: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">block</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么选择历史记录？没有 JavaScript 或表单控件黑客行为的手风琴等公开类 widget 是相对较新的添加；自 2020 年 1 月起，所有现代浏览器才完全支持 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/details" target="_blank" rel="noopener noreferrer"><code>&lt;details&gt;</code></a> 和 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/summary" target="_blank" rel="noopener noreferrer"><code>&lt;summary&gt;</code></a> 元素。现在，您只需使用语义 HTML 即可创建可正常运行（但不够吸引人）披露 widget。您只需要用到 <code>&lt;details&gt;</code> 和 <code>&lt;summary&gt;</code> 元素：它们是处理展开和收起内容的内置方式。当用户点击或点按 <code>&lt;summary&gt;</code> 时，或在 <code>&lt;summary&gt;</code> 获得焦点时释放 Enter 键时，父级 <code>&lt;details&gt;</code> 切换开关的内容将变为可见！</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWqgjQr?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="web-dot-dev 上的 Pen MWqgjQr" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>与所有语义内容一样，您可以逐步增强默认功能和外观。在本例中，只添加了一点 CSS 代码，但未添加任何其他内容：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ExeYgQd?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen ExeYgQd" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>您会注意到，这些 Codepen 不包含任何 JavaScript。</p><h2 id="切换可见性-open-属性" tabindex="-1"><a class="header-anchor" href="#切换可见性-open-属性"><span>切换可见性：<code>open</code> <strong>属性</strong></span></a></h2><p><code>&lt;details&gt;</code> 元素是披露声明 widget 容器。<code>&lt;summary&gt;</code> 是其父级 <code>&lt;details&gt;</code> 的摘要或图例。摘要会始终显示，它充当可切换父项其余内容的显示状态的按钮。与 <code>&lt;summary&gt;</code> 交互可切换 <code>&lt;details&gt;</code> 元素的 <code>open</code> 属性，从而切换显示自加标签摘要同级项。</p><p><code>open</code> 属性是一个布尔值属性。如果存在，无论该值或缺失，它都表示所有 <code>&lt;details&gt;</code> 内容均向用户显示。如果 <code>open</code> 属性不存在，则只显示 <code>&lt;summary&gt;</code> 的内容。</p><p>由于 <code>open</code> 属性会在用户与控件交互时自动添加和移除，因此可以在 CSS 中使用该属性根据元素状态对元素进行不同样式设置。</p><p>您可以创建包含多个 <code>&lt;details&gt;</code> 元素的列表的手风琴，其中每个元素都有一个 <code>&lt;summary&gt;</code> 子元素。在 HTML 中省略 <code>open</code> 属性意味着 <code>&lt;details&gt;</code> 将全部收起或关闭，在网页加载时仅显示摘要标题；每个标题都是父级 <code>&lt;details&gt;</code> 中其余内容的打开者。如果您在 HTML 中添加 <code>open</code> 属性，则 <code>&lt;details&gt;</code> 将在网页加载时以展开方式呈现，并显示内容。</p><p>即使收起状态不是 DOM 的一部分，收起状态下的隐藏内容在某些浏览器中是可以搜索的，但在其他浏览器中无法搜索。如果您在 Edge 或 Chrome 中进行搜索，包含搜索字词的详细信息将展开即可显示出现位置。Firefox 或 Safari 无法复制此行为。</p><p><code>&lt;summary&gt;</code> 必须是 <code>&lt;details&gt;</code> 元素的第一个子级，表示它嵌套的父级 <code>&lt;details&gt;</code> 元素其余内容的摘要、图片说明或图例。<code>&lt;summary&gt;</code> 元素的内容可以是任何标题内容、纯文本或可在段落中使用的 HTML。</p><h2 id="切换摘要标记" tabindex="-1"><a class="header-anchor" href="#切换摘要标记"><span>切换摘要标记</span></a></h2><p>在前面的两个 Codepen 中，您会注意到指向摘要的 <a href="https://developer.mozilla.org/docs/Web/CSS/CSS_Logical_Properties" target="_blank" rel="noopener noreferrer">inline-start</a> 端的箭头。披露声明 widget 通常使用一个旋转（或扭动）的小三角形显示在屏幕上，该三角形用于指示打开/关闭状态，并且三角形旁边带有一个标签。<code>&lt;summary&gt;</code> 元素的内容用来为披露信息 widget 添加标签。 每个部分顶部的旋转箭头是在 <code>&lt;summary&gt;</code> 元素上设置的 <a href="https://developer.mozilla.org/docs/Web/CSS/::marker" target="_blank" rel="noopener noreferrer"><code>::marker</code></a>。与列表项一样，<code>&lt;summary&gt;</code> 元素支持 <a href="https://developer.mozilla.org/docs/Web/CSS/list-style" target="_blank" rel="noopener noreferrer"><code>list-style</code></a> 简写属性及其简写属性，包括 <a href="https://developer.mozilla.org/docs/Web/CSS/list-style-type" target="_blank" rel="noopener noreferrer"><code>list-style-type</code></a>。您可以使用 CSS 设置披露三角形的样式，包括将使用的标记从三角形更改为任何其他项目符号类型，包括带有 <a href="https://developer.mozilla.org/docs/Web/CSS/list-style-image" target="_blank" rel="noopener noreferrer"><code>list-style-image</code></a> 的图片。</p><p>如需应用其他样式，请使用类似于 <a href="/web/css/pseudo-elements#marker" target="_blank" rel="noopener noreferrer"><code>details summary::marker</code></a> 的选择器。<code>::marker</code> <a href="/web/css/selectors#pseudo-element" target="_blank" rel="noopener noreferrer">伪元素</a>仅接受有限数量的样式。常见的做法是移除 <code>::marker</code> 并将其替换为更便于样式的 <a href="https://developer.mozilla.org/docs/Web/CSS/::before" target="_blank" rel="noopener noreferrer"><code>::before</code></a>，因为 CSS 样式会根据 open 属性的存在（或不存在）来略微更改所生成内容的样式。您可以通过设置 <code>list-style: none</code> 来移除披露声明 widget 图标，或者将标记的<a href="https://developer.mozilla.org/docs/Web/CSS/content" target="_blank" rel="noopener noreferrer">内容</a>设置为 <code>none</code>，但应始终添加视觉指示，以告知视力正常的用户摘要内容是一个切换按钮，该按钮会在激活时显示和隐藏内容。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">details</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> summary</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">::before</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /* all the styles */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">details</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">open</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">]</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">summary</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">::before</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  /* changes applied when open only */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOvNMxL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen jOvNMxL" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>此示例移除了默认标记，添加了生成的内容，以在详情关闭时创建 <code>+</code>，并在详情打开时创建 <code>-</code>。</p><p>如果您希望详情块默认打开，请在起始 <code>&lt;details&gt;</code> 标记中添加 <code>open</code> 属性。您还可以在每个对话框之间添加间距，并转换使用生成内容创建的标记的旋转角度，从而改进外观：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLxBajp?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen yLxBajp" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><h2 id="错误的处理方式" tabindex="-1"><a class="header-anchor" href="#错误的处理方式"><span>错误的处理方式</span></a></h2><p>如果您未添加 <code>&lt;summary&gt;</code>，浏览器将为您创建一个：带有标记和“details”一词。此摘要是影子根的一部分，因此不会应用作者 CSS 摘要样式。<a href="/web/html/template#shadow_dom" target="_blank" rel="noopener noreferrer"></a>遗憾的是，Safari 不在<a href="https://bugs.webkit.org/show_bug.cgi?id=249904" target="_blank" rel="noopener noreferrer">键盘焦点顺序</a>中包含详细信息。</p><p>如果您添加了 <code>&lt;summary&gt;</code>，但它不是 <code>&lt;details&gt;</code> 中的第一个元素，浏览器仍会按预期显示摘要。如果您在摘要中包含链接、标签或其他互动元素，它也不会失败，但浏览器会以不同的方式处理互动内容中的互动内容。例如，如果您在摘要中包含某个链接，有些浏览器会将摘要和链接同时添加到默认的标签页显示顺序中，但其他浏览器不会默认聚焦于该链接。如果您点击嵌套在 <code>&lt;summary&gt;</code> 中的 <code>&lt;label&gt;</code>，某些浏览器会将焦点置于关联的表单控件上；其他浏览器会将焦点置于表单控件上，并将 <code>&lt;details&gt;</code> 切换为开启或关闭。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/QWVLKxg?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="web-dot-dev 上的 Pen QWVLKxg" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><h2 id="htmldetailselement-接口" tabindex="-1"><a class="header-anchor" href="#htmldetailselement-接口"><span><code>HTMLDetailsElement</code> <strong>接口</strong></span></a></h2><p>与所有 HTML 元素一样，<a href="https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement" target="_blank" rel="noopener noreferrer"><code>HTMLDetailsElement</code></a> 会继承 <a href="https://developer.mozilla.org/docs/Web/API/HTMLElement" target="_blank" rel="noopener noreferrer"><code>HTMLElement</code></a> 的所有属性、方法和事件，并添加 <a href="https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/open" target="_blank" rel="noopener noreferrer"><code>open</code></a> 实例属性和 <a href="https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event" target="_blank" rel="noopener noreferrer"><code>toggle</code></a> 事件。<a href="https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/open" target="_blank" rel="noopener noreferrer"><code>HTMLDetailsElement.open</code></a> 属性是一个反映 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/details#attr-open" target="_blank" rel="noopener noreferrer"><code>open</code></a> HTML 属性的布尔值，用于指明是否向用户显示元素的内容（不统计 <code>&lt;summary&gt;</code>）。当 <code>&lt;details&gt;</code> 元素开启或关闭时，会触发切换事件。您可以使用 <a href="https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener" target="_blank" rel="noopener noreferrer"><code>addEventListener()</code></a> 监听此事件。</p><p>如果要编写一个脚本，以便在用户打开任何其他详细信息时关闭已打开的详细信息，请使用 <a href="https://developer.mozilla.org/docs/Web/API/Element/removeAttribute" target="_blank" rel="noopener noreferrer"><code>removeAttribute(&quot;open&quot;)</code></a> 移除 open 属性：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/PodYGBz?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen PodYGBz" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>这是使用 JavaScript 的唯一示例。除了可关闭其他已打开的披露声明 widget 这一功能之外，您可能不需要 JavaScript。</p><p>请注意，<code>&lt;details&gt;</code> 和 <code>&lt;summary&gt;</code> 的样式设置非常丰富，甚至可以用于<a href="https://css-tricks.com/exploring-what-the-details-and-summary-elements-can-do/" target="_blank" rel="noopener noreferrer">创建工具提示</a>。但是，如果您要将这些语义元素用于原生语义不匹配的用例，请始终确保<a href="https://www.scottohara.me//blog/2022/09/12/details-summary.html" target="_blank" rel="noopener noreferrer">保持无障碍功能</a>。 大多数情况下，HTML 都是默认可访问的。作为开发者，我们的职责是确保用户能够访问我们的内容。</p>`,36),l=[d];function o(s,n){return a(),r("div",null,l)}const h=e(t,[["render",o],["__file","details.html.vue"]]),c=JSON.parse('{"path":"/web/html/details.html","title":"详情和摘要","lang":"zh-CN","frontmatter":{"date":"2024-03-31T00:00:00.000Z","category":"html","description":"详情和摘要 了解非常有用的详细信息和摘要元素的工作原理，以及在哪里使用它们。 披露声明 widget 是一种用于隐藏和显示内容的界面控件。如果您是在 web.dev 上阅读本文，并且您的视口宽度小于 106 ems，则点击此段落上方的“在此页面上”会显示此部分的目录。如果您没有看到该选项，请缩小浏览器，以便以披露 widget 的形式查看此页面上的目录...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/html/details.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"详情和摘要"}],["meta",{"property":"og:description","content":"详情和摘要 了解非常有用的详细信息和摘要元素的工作原理，以及在哪里使用它们。 披露声明 widget 是一种用于隐藏和显示内容的界面控件。如果您是在 web.dev 上阅读本文，并且您的视口宽度小于 106 ems，则点击此段落上方的“在此页面上”会显示此部分的目录。如果您没有看到该选项，请缩小浏览器，以便以披露 widget 的形式查看此页面上的目录..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:published_time","content":"2024-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详情和摘要\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"切换可见性：open 属性","slug":"切换可见性-open-属性","link":"#切换可见性-open-属性","children":[]},{"level":2,"title":"切换摘要标记","slug":"切换摘要标记","link":"#切换摘要标记","children":[]},{"level":2,"title":"错误的处理方式","slug":"错误的处理方式","link":"#错误的处理方式","children":[]},{"level":2,"title":"HTMLDetailsElement 接口","slug":"htmldetailselement-接口","link":"#htmldetailselement-接口","children":[]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":9.02,"words":2707},"filePathRelative":"web/html/details.md","localizedDate":"2024年3月31日","excerpt":"\\n<p>了解非常有用的详细信息和摘要元素的工作原理，以及在哪里使用它们。</p>\\n<p>披露声明 widget 是一种用于隐藏和显示内容的界面控件。如果您是在 web.dev 上阅读本文，并且您的视口宽度小于 106 ems，则点击此段落上方的“在此页面上”会显示此部分的目录。如果您没有看到该选项，请缩小浏览器，以便以披露 widget 的形式查看此页面上的目录导航。</p>\\n<p><a href=\\"https://en.wikipedia.org/wiki/Accordion_(GUI)\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">手风琴式折叠</a>图形界面是一系列垂直堆叠的披露信息 widget。手风琴界面的一个常见用例是许多网站上的常见问题解答 (FAQ) 页面。 手风琴常见问题解答包含可见问题列表；点击问题可展开或“披露”该问题的答案。</p>","autoDesc":true}');export{h as comp,c as data};
