import{_ as i,c as e,o as s,b as a}from"./app-C58kMEDU.js";const n="/blogs/assets/a-visual-demonstration-t-7eb66802c42d9-B3DOE0S3.svg",t="/blogs/assets/an-image-browser-devtool-8306b56aa8a21-B_7W6BDP.png",l={},r=a(`<h1 id="瀑布" tabindex="-1"><a class="header-anchor" href="#瀑布"><span>瀑布</span></a></h1><p>CSS 表示级联样式表。 级联是一种算法，用于解决多个 CSS 规则应用于 HTML 元素时发生的冲突。 这就是使用以下 CSS 设置样式的按钮文本会显示为蓝色的原因。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRrgMOm?height=200&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 开发的 Pen GRrgMOm" style="color-scheme:initial;box-sizing:inherit;border:0px;height:200px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>了解级联算法有助于您了解浏览器如何解决此类冲突。级联算法分为 4 个不同的阶段。</p><ol><li><strong>显示位置和显示顺序</strong> ：CSS 规则的显示顺序</li><li><strong>特异性</strong> ：一种算法，用于确定哪个 CSS 选择器具有最强的匹配项</li><li><strong>来源</strong> ：CSS 的出现顺序及来源，是浏览器样式、浏览器扩展程序中的 CSS，还是您自己编写的 CSS</li><li><strong>重要性</strong> ：某些 CSS 规则的权重高于其他规则，尤其是 <code>!important</code> 规则类型</li></ol><h2 id="出现的位置和顺序" tabindex="-1"><a class="header-anchor" href="#出现的位置和顺序"><span>出现的位置和顺序</span></a></h2><p>级联计算在计算冲突解决时，系统会考虑 CSS 规则的显示顺序及其显示方式。</p><p>本课开始时的演示是最直接的定位示例。 有两条规则具有特异性完全相同的选择器，因此最后一条要声明的规则优先。</p><p>样式可以来自 HTML 网页上的各种来源，例如 <code>&lt;link&gt;</code> 标记、嵌入式 <code>&lt;style&gt;</code> 标记，以及元素的 <code>style</code> 属性中定义的内嵌 CSS。</p><p>如果您的 HTML 网页顶部有一个包含 CSS 的 <code>&lt;link&gt;</code>，则网页底部包含另一个包含 CSS 的 <code>&lt;link&gt;</code>：底部的 <code>&lt;link&gt;</code> 的针对性最强。嵌入的 <code>&lt;style&gt;</code> 元素也是如此。页面越具体，位置越靠下。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/NWdPaWv?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen NWdPaWv" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>根据 CSS 的定义，按钮具有蓝色背景，该背景包含在 <link> 元素中。 将样式设置为深色的 CSS 规则位于第二个关联的样式表中，并且由于其后面的位置而被应用。</p><p>这种排序也适用于嵌入的 <code>&lt;style&gt;</code> 元素。如果在 <code>&lt;link&gt;</code> 之前声明这些样式，则关联样式表的 CSS 将获得最具体的明确版本。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/xxgbLoB?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 xxgbLoB" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p><code>&lt;style&gt;</code> 元素在 <code>&lt;head&gt;</code> 中声明，而 <code>&lt;link /&gt;</code> 元素在 <code>&lt;body&gt;</code> 中声明。这意味着它比 <code>&lt;style&gt;</code> 元素具有更高的特异性</p><p>声明了 CSS 的内嵌 <code>style</code> 属性将替换所有其他 CSS，无论其位置如何，除非在声明中定义了 <code>!important</code>。</p><p>系统还会按照 CSS 规则的顺序应用位置。 在此示例中，元素具有紫色背景，因为最后声明了 <code>background: purple</code>。由于绿色背景是在紫色背景之前声明的，因此现在会被浏览器忽略。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">purple</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若要为不支持特定值的浏览器创建回退，一种简单的方法就是能够为同一属性指定两个值。在下一个示例中，<code>font-size</code> 声明了两次。如果浏览器支持 <code>clamp()</code>，之前的 <code>font-size</code> 声明将被舍弃。如果浏览器不支持 <code>clamp()</code>，系统会遵循初始声明，字体大小将为 1.5rem</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-size:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  font-size: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">clamp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1.5</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">+3vw</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">rem</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/xxgbPMP?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 xxgbPMP" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>**注意 ** ：这种声明同一属性的方法有效，因为浏览器会忽略它们无法理解的值。与其他某些编程语言不同，当 CSS 检测到无法解析的代码行时，不会抛出错误或中断您的程序，也就是说，无法解析的值无效并因此被忽略。然后，浏览器会继续处理其余的 CSS，而不会破坏它已经理解的内容。### 检查您的掌握程度</p><h2 id="特异性" tabindex="-1"><a class="header-anchor" href="#特异性"><span>特异性</span></a></h2><p>特异性是一种使用加权或评分系统来确定最具体 CSS 选择器的算法。通过使规则更加具体，即使与选择器匹配的其他一些 CSS 稍后出现在 CSS 中，您也可以应用该规则。</p><p>在<a href="/blogs/web/css/specificity">下一课</a>中，您将详细了解特异性是如何计算的，但记住一些事项有助于您避免过多特异性问题。</p><p>与只定位元素相比，CSS 将类定位到元素会使该规则更具体，因此被视为更重要的应用。这意味着，对于以下 CSS，<code>h1</code> 会显示为红色，即使两条规则都匹配且 <code>h1</code> 选择器的规则稍后出现在样式表中。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">h1class=&quot;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">my-element</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Heading&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>id</code> 会使 CSS 更加具体，因此应用于 ID 的样式将替换通过其他多种方式应用的样式。这也是通常最好不要将样式附加到 <code>id</code> 的原因之一。这可能会使您难以用其他样式覆盖该样式。</p><h3 id="特异性是累积的" tabindex="-1"><a class="header-anchor" href="#特异性是累积的"><span>特异性是累积的</span></a></h3><p>在下一课中您会了解到，每种类型的选择器都有对应的点，用来指示其具体程度，您用来定位某个元素的所有选择器的点会加在一起。这意味着，如果您使用选择器列表（例如 <code>a.my-class.another-class[href]:hover</code>）定位某个元素，则会发现一些内容很难被其他 CSS 覆盖。因此，为了提高 CSS 的可重用性，最好使选择器尽可能简单。使用特异性作为工具以在需要时获取元素，但始终考虑重构较长的特定选择器列表（如果可以的话）。</p><h2 id="原点" tabindex="-1"><a class="header-anchor" href="#原点"><span>原点</span></a></h2><p>您编写的 CSS 不是唯一应用于页面的 CSS。 级联的考虑因素是 CSS 的来源。此来源包括浏览器的内部样式表、由浏览器扩展程序或操作系统添加的样式，以及您编写的 CSS。 <strong>这些来源的特异性顺序</strong> （从最不具体到最具体）如下：</p><ol><li><strong>用户代理基本样式</strong> 。这些是默认情况下您的浏览器应用于 HTML 元素的样式。</li><li><strong>本地用户样式</strong> 。这些设置可能来自操作系统级别，例如基本字体大小或首选移动优化。它们还可以来自浏览器扩展程序，例如允许用户为网页编写自定义 CSS 的浏览器扩展程序。</li><li><strong>自行编写的 CSS</strong> 。您编写的 CSS。</li><li><strong>作者：<code>!important</code></strong> 。您添加到自己编写的声明中的任何 <code>!important</code>。</li><li><strong>本地用户样式 <code>!important</code></strong> 。来自操作系统级或浏览器扩展级 CSS 的任何 <code>!important</code>。</li><li><strong>用户代理 <code>!important</code></strong> 。在浏览器提供的默认 CSS 中定义的任何 <code>!important</code>。</li></ol><figure><img src="`+n+'" alt="源站顺序的直观演示（列表也对此进行了说明）。" tabindex="0" loading="lazy"><figcaption>源站顺序的直观演示（列表也对此进行了说明）。</figcaption></figure><p>如果您编写的 CSS 中有 <code>!important</code> 规则类型，并且用户的自定义 CSS 中有 <code>!important</code> 规则类型，那么哪个 CSS 胜出？</p><h2 id="重要性" tabindex="-1"><a class="header-anchor" href="#重要性"><span>重要性</span></a></h2><p>并非所有 CSS 规则的计算方式都相同，或者每个规则的特异性也不同。</p><p>重要性顺序如下所示（从最不重要到最高）：</p><ol><li>一般规则类型，如 <code>font-size</code>、<code>background</code> 或 <code>color</code></li><li><code>animation</code> 个规则类型</li><li><code>!important</code> 规则类型（遵循与源站相同的顺序）</li><li><code>transition</code> 个规则类型</li></ol><p>活跃动画和过渡规则类型的重要性高于普通规则。如果是过渡比 <code>!important</code> 规则类型的重要程度高。这是因为，当动画或过渡变为活动状态时，其预期行为是更改视觉状态。</p><h2 id="使用开发者工具找出某些-css-未应用的原因" tabindex="-1"><a class="header-anchor" href="#使用开发者工具找出某些-css-未应用的原因"><span>使用开发者工具找出某些 CSS 未应用的原因</span></a></h2><p>浏览器开发者工具通常会显示可与某个元素匹配的所有 CSS，其中未使用的那些 CSS 会被划掉。</p><figure><img src="'+t+'" alt="浏览器开发者工具的图片，其中的 CSS 已被覆盖" tabindex="0" loading="lazy"><figcaption>浏览器开发者工具的图片，其中的 CSS 已被覆盖</figcaption></figure><p>如果您预期应用的 CSS 根本没有显示，则表示该元素与该元素不匹配。在这种情况下，您需要查找其他地方，可能是类或元素名称拼写错误，或是否存在某些无效的 CSS。</p><h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源"><span>资源</span></a></h2><ul><li><a href="https://2019.wattenberger.com/blog/css-cascade" target="_blank" rel="noopener noreferrer">级联的互动式解释说明</a></li><li><a href="https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance" target="_blank" rel="noopener noreferrer">MDN 级联参考文档</a></li></ul>',48),d=[r];function h(p,o){return s(),e("div",null,d)}const k=i(l,[["render",h],["__file","the-cascade.html.vue"]]),g=JSON.parse('{"path":"/web/css/the-cascade.html","title":"瀑布","lang":"zh-CN","frontmatter":{"date":"2024-03-31T00:00:00.000Z","category":"css","description":"瀑布 CSS 表示级联样式表。 级联是一种算法，用于解决多个 CSS 规则应用于 HTML 元素时发生的冲突。 这就是使用以下 CSS 设置样式的按钮文本会显示为蓝色的原因。 了解级联算法有助于您了解浏览器如何解决此类冲突。级联算法分为 4 个不同的阶段。 显示位置和显示顺序 ：CSS 规则的显示顺序 特异性 ：一种算法，用于确定哪个 CSS 选择器具...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/css/the-cascade.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"瀑布"}],["meta",{"property":"og:description","content":"瀑布 CSS 表示级联样式表。 级联是一种算法，用于解决多个 CSS 规则应用于 HTML 元素时发生的冲突。 这就是使用以下 CSS 设置样式的按钮文本会显示为蓝色的原因。 了解级联算法有助于您了解浏览器如何解决此类冲突。级联算法分为 4 个不同的阶段。 显示位置和显示顺序 ：CSS 规则的显示顺序 特异性 ：一种算法，用于确定哪个 CSS 选择器具..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T10:18:51.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:published_time","content":"2024-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T10:18:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"瀑布\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T10:18:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"出现的位置和顺序","slug":"出现的位置和顺序","link":"#出现的位置和顺序","children":[]},{"level":2,"title":"特异性","slug":"特异性","link":"#特异性","children":[{"level":3,"title":"特异性是累积的","slug":"特异性是累积的","link":"#特异性是累积的","children":[]}]},{"level":2,"title":"原点","slug":"原点","link":"#原点","children":[]},{"level":2,"title":"重要性","slug":"重要性","link":"#重要性","children":[]},{"level":2,"title":"使用开发者工具找出某些 CSS 未应用的原因","slug":"使用开发者工具找出某些-css-未应用的原因","link":"#使用开发者工具找出某些-css-未应用的原因","children":[]},{"level":2,"title":"资源","slug":"资源","link":"#资源","children":[]}],"git":{"createdTime":1724483645000,"updatedTime":1724494731000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":2}]},"readingTime":{"minutes":7.99,"words":2397},"filePathRelative":"web/css/the-cascade.md","localizedDate":"2024年3月31日","excerpt":"\\n<p>CSS 表示级联样式表。 级联是一种算法，用于解决多个 CSS 规则应用于 HTML 元素时发生的冲突。 这就是使用以下 CSS 设置样式的按钮文本会显示为蓝色的原因。</p>\\n<div class=\\"language-css line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"css\\" data-title=\\"css\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">button</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&nbsp; color: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">red</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">button</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">&nbsp; color: </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">blue</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{k as comp,g as data};