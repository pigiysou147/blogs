import{_ as r,r as s,c as n,e as a,d as e,o as t}from"./app-BEYv8s4s.js";const d="/blogs/assets/chrome-devtools-visual-tr-a81b123ee987d-D5mb8xp0.png",l="/blogs/assets/diagram-shapes-transitio-b51956d49a4c-DfDA07WS.jpg",o={},p=e('<h1 id="过渡" tabindex="-1"><a class="header-anchor" href="#过渡"><span>过渡</span></a></h1><p>与网站互动时，您可能会注意到，许多元素都有状态。<em>state</em>例如，下拉菜单可以处于打开或关闭状态。当获得焦点或悬停在按钮上时，按钮可能会改变颜色。模态窗口出现和消失。</p><p>默认情况下，CSS 会即时切换这些状态的样式。</p><p>利用 CSS 转换，我们可以在元素的初始状态和目标状态之间插入。两者之间的过渡提供了有关互动原因和效果的视觉方向、支持和提示，从而改善了用户体验。</p><p><strong>关键术语</strong> ：<em>插值</em>是创建“中间”步骤的过程，这些步骤能够顺畅地从一种状态转换为另一种状态。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/zYzNrJV?height=320&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen zYzNrJV" style="color-scheme:initial;box-sizing:inherit;border:0px;height:320px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><h2 id="过渡属性" tabindex="-1"><a class="header-anchor" href="#过渡属性"><span>过渡属性</span></a></h2>',7),h=e(`<p>如需在 CSS 中使用过渡，您可以使用各种过渡属性或 <code>transition</code> 简写属性。</p><h3 id="transition-属性" tabindex="-1"><a class="header-anchor" href="#transition-属性"><span>transition 属性</span></a></h3><p><a href="https://developer.mozilla.org/docs/Web/CSS/transition-property" target="_blank" rel="noopener noreferrer"><code>transition-property</code></a> 属性指定要转换的样式。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transition-property: background-color;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>transition-property</code> 接受逗号分隔列表中的一个或多个 CSS 属性名称。</p><p>（可选）您可以使用 <code>transition-property: all</code> 来指示每个属性都应转换。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/VwWPeEj?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen VwWPeEj" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><h3 id="过渡持续时间" tabindex="-1"><a class="header-anchor" href="#过渡持续时间"><span>过渡持续时间</span></a></h3><p><a href="https://developer.mozilla.org/docs/Web/CSS/transition-duration" target="_blank" rel="noopener noreferrer"><code>transition-duration</code></a> 属性用于定义完成过渡所需的时间。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/wvegMYp?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 提供的 Pen wvegMYp" style="color-scheme:initial;box-sizing:inherit;border:0px;height:400px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p><code>transition-duration</code> 接受时间单位，可以是秒 (<code>s</code>) 或毫秒 (<code>ms</code>)，默认值为 <code>0s</code>。</p><h3 id="过渡时间函数" tabindex="-1"><a class="header-anchor" href="#过渡时间函数"><span>过渡时间函数</span></a></h3><p>使用 <a href="https://developer.mozilla.org/docs/Web/CSS/transition-timing-function" target="_blank" rel="noopener noreferrer"><code>transition-timing-function</code></a> 属性可改变 <code>transition-duration</code> 期间 CSS 过渡的速度。</p><p>默认情况下，CSS 会以恒定速度 (<code>transition-timing-function: linear</code>) 转换元素。线性转换最终看起来有点人为：在现实生活中，对象是有权重的，不能立即停止和开始转换。加入或退出过渡效果可让您的过渡更加生动和自然。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/QWgdyZx?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen QWgdyZx" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>我们的 <a href="/web/css/animations#animation-timing-function" target="_blank" rel="noopener noreferrer">CSS 动画模块</a>很好地概述了计时函数。</p><p>您可以使用 <a href="https://developer.chrome.com/docs/devtools/css/animations" target="_blank" rel="noopener noreferrer">DevTools</a> 实时尝试不同的计时函数。</p><figure><img src="`+d+`" alt="Chrome DevTools 的可视化转换时间编辑器。" tabindex="0" loading="lazy"><figcaption>Chrome DevTools 的可视化转换时间编辑器。</figcaption></figure><h3 id="过渡延迟" tabindex="-1"><a class="header-anchor" href="#过渡延迟"><span>过渡延迟</span></a></h3><p>使用 <a href="https://developer.mozilla.org/docs/Web/CSS/transition-delay" target="_blank" rel="noopener noreferrer"><code>transition-delay</code></a> 属性指定过渡的开始时间。如果未指定 <code>transition-duration</code>，转换将立即开始，因为默认值为 <code>0s</code>。此属性接受时间单位，例如秒 (<code>s</code>) 或毫秒 (<code>ms</code>)。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOwyWep?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen jOwyWep" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>此属性对于交错过渡非常有用，可以通过为组中的每个后续元素设置更长的 <code>transition-delay</code> 来实现。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLXgeRQ?height=410&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 Pen yLXgeRQ" style="color-scheme:initial;box-sizing:inherit;border:0px;height:410px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p><code>transition-delay</code> 对调试也很有用。将延迟时间设置为负值可以开始进一步向时间轴过渡。</p><h3 id="简写-转换" tabindex="-1"><a class="header-anchor" href="#简写-转换"><span>简写：转换</span></a></h3><p>与大多数 CSS 属性一样，也有一个简写版本。<a href="https://developer.mozilla.org/docs/Web/CSS/transition" target="_blank" rel="noopener noreferrer"><code>transition</code></a> 组合了 <code>transition-property</code>、<code>transition-duration</code>、<code>transition-timing-function</code> 和 <code>transition-delay</code>。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.longhand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transition-property:  transform;  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transition-duration: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">ms</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transition-timing-function: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">ease-in-out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transition-delay: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.shorthand</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transition: transform </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">ms</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> ease-in-out</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="哪些内容可以转换-哪些不能转换" tabindex="-1"><a class="header-anchor" href="#哪些内容可以转换-哪些不能转换"><span>哪些内容可以转换，哪些不能转换？</span></a></h2><p>编写 CSS 时，您可以指定哪些属性应使用动画过渡。请参阅<a href="https://developer.mozilla.org/docs/Web/CSS/CSS_animated_properties" target="_blank" rel="noopener noreferrer">这个可呈现动画效果的 CSS 属性的 MDN 列表</a>。</p><p>一般来说，只能转换在其起始状态和最终状态之间具有“中间状态”的元素。例如，不可能为 <code>font-family</code> 添加过渡，因为不清楚 <code>serif</code> 和 <code>monospace</code> 之间的“中间状态”应该是什么样子。另一方面，您可以为 <code>font-size</code> 添加过渡，因为它的单位是可在其间插入的长度。</p><figure><img src="`+l+'" alt="图形从一种状态平滑地过渡到另一种状态，以及两行不同字体的文本无法平滑过渡。" tabindex="0" loading="lazy"><figcaption>图形从一种状态平滑地过渡到另一种状态，以及两行不同字体的文本无法平滑过渡。</figcaption></figure><p>以下是一些您可以转换的常见属性。</p><h3 id="变革性" tabindex="-1"><a class="header-anchor" href="#变革性"><span>变革性</span></a></h3>',33),c=e(`<p><a href="https://developer.mozilla.org/docs/Web/CSS/transform" target="_blank" rel="noopener noreferrer"><code>transform</code></a> CSS 属性通常会进行转换，因为它是由 GPU 加速的属性，可以实现更流畅的动画，同时消耗更少的电量。通过此属性，您可以任意缩放、旋转、平移或倾斜元素。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRErowE?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen GRErowE" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>请查看<a href="/web/css/functions" target="_blank" rel="noopener noreferrer">我们的“函数”模块</a>中<a href="/web/css/functions#transforms" target="_blank" rel="noopener noreferrer">有关转换的部分</a>。</p><h3 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h3><p>在互动之前、互动期间和之后，颜色可以很好地反映状态。例如，将鼠标悬停在按钮上时，按钮可能会改变颜色。这种颜色变化可向用户提供按钮可点击的反馈。</p><p><code>color</code>、<code>background-color</code> 和 <code>border-color</code> 属性只是可以在互动时转换颜色的几个位置。</p><p><strong>注意</strong> ：颜色过渡通常不需要晚于<a href="/web/css/transitions#accessibility_considerations" target="_blank" rel="noopener noreferrer">运动减少</a>偏好设置。请做出最佳判断。</p><p>请查看<a href="/web/css/color" target="_blank" rel="noopener noreferrer">关于颜色的模块</a>。</p><h3 id="阴影" tabindex="-1"><a class="header-anchor" href="#阴影"><span>阴影</span></a></h3><p>阴影通常会通过过渡来指示高度的变化，例如用户焦点的变化。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/gORgPQx?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen gORgPQx" style="color-scheme:initial;box-sizing:inherit;border:0px;height:300px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>请查看<a href="/web/css/shadows" target="_blank" rel="noopener noreferrer">我们关于阴影的模块</a>。</p><h3 id="过滤条件" tabindex="-1"><a class="header-anchor" href="#过滤条件"><span>过滤条件</span></a></h3><p><a href="https://developer.mozilla.org/docs/Web/CSS/filter" target="_blank" rel="noopener noreferrer"><code>filter</code></a> 是一个功能强大的 CSS 属性，可让您即时添加图形效果。在不同 <code>filter</code> 状态之间转换可以产生一些非常令人印象深刻的结果。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/PojWZxJ?height=350&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen PojWZxJ" style="color-scheme:initial;box-sizing:inherit;border:0px;height:350px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>请参阅<a href="/web/css/filters" target="_blank" rel="noopener noreferrer">关于过滤器的单元</a>。</p><h2 id="转换触发器" tabindex="-1"><a class="header-anchor" href="#转换触发器"><span>转换触发器</span></a></h2><p>您的 CSS 必须包含状态更改和触发该状态更改的事件，才能使 CSS 转换生效。此类触发器的一个典型示例是 <code>:hover</code> <a href="/web/css/pseudo-classes" target="_blank" rel="noopener noreferrer">伪类</a>。当用户将光标悬停在某个元素上时，此伪类会进行匹配。</p><p>下面列出了一些可以触发元素状态变化的伪类和事件。</p><ul><li><a href="/web/css/pseudo-classes#hover" target="_blank" rel="noopener noreferrer"><code>:hover</code></a>：如果光标位于相应元素上方，则匹配。</li><li><a href="/web/css/pseudo-classes#focus_focus-within_and_focus-visible" target="_blank" rel="noopener noreferrer"><code>:focus</code></a>：如果元素获得焦点，则匹配。</li><li><a href="/web/css/pseudo-classes#focus_focus-within_and_focus-visible" target="_blank" rel="noopener noreferrer"><code>:focus-within</code></a>：如果元素或其任何后代获得焦点，则匹配。</li><li><a href="/web/css/pseudo-classes#target" target="_blank" rel="noopener noreferrer"><code>:target</code></a>：如果当前网址的<a href="https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#fragment" target="_blank" rel="noopener noreferrer">片段</a>与元素的 ID 匹配，则匹配。</li><li><a href="/web/css/pseudo-classes#active" target="_blank" rel="noopener noreferrer"><code>:active</code></a>：在元素激活时（通常是在鼠标上按下时）匹配。</li><li><code>class</code> 与 JavaScript 之间的变化：当元素的 CSS <code>class</code> 通过 JavaScript 发生更改时，CSS 会转换已更改的符合条件的属性。</li></ul><h2 id="进入或退出时的不同过渡效果" tabindex="-1"><a class="header-anchor" href="#进入或退出时的不同过渡效果"><span>进入或退出时的不同过渡效果</span></a></h2><p>通过在悬停/聚焦时设置不同的 <code>transition</code> 属性，可以创建一些有趣的效果。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /* This transition is applied on the &quot;exit&quot; transition */</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transition: </span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF;">background</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2000</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">ms</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> ease-in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:hover</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    background: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    /* This transition is applied on the &quot;enter&quot; transition */</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    transition: </span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF;">background</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 150</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">ms</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> ease</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/OJgWMaO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen OJgWMaO" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><h2 id="无障碍功能注意事项" tabindex="-1"><a class="header-anchor" href="#无障碍功能注意事项"><span>无障碍功能注意事项</span></a></h2><p>CSS 过渡并非适用于所有人。对于有些人，过渡和动画可能会导致晕动病或不适。幸运的是，CSS 有一项名为 <a href="https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion" target="_blank" rel="noopener noreferrer"><code>prefers-reduced-motion</code></a> 的媒体功能，用于检测用户是否偏好减少设备上的动作。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/*  If the user has expressed their preference for  reduced motion, then don&#39;t use transitions.*/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (prefers-reduced-motion: reduce) {</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    .my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        transition: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">none</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/*  If the browser understands the media query and the user  explicitly hasn&#39;t set a preference, then use transitions.*/</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">@media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (prefers-reduced-motion: no-preference) { </span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    .my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        transition: transform </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">250</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">ms</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> ease</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> ：在关于<a href="/web/accessibility/motion" target="_blank" rel="noopener noreferrer">动画和动画</a>的“学习无障碍”模块中，您可以了解如何为网站增添乐趣，同时又不会给某些用户带来问题。</p>`,28);function k(b,g){const i=s("BrowseSurport");return t(),n("div",null,[p,a(i,{code:"css.properties.transition-property"}),h,a(i,{code:"css.properties.transform"}),c])}const f=r(o,[["render",k],["__file","transitions.html.vue"]]),u=JSON.parse('{"path":"/web/css/transitions.html","title":"过渡","lang":"zh-CN","frontmatter":{"date":"2024-03-31T00:00:00.000Z","category":"css","tags":["动画"],"description":"过渡 与网站互动时，您可能会注意到，许多元素都有状态。state例如，下拉菜单可以处于打开或关闭状态。当获得焦点或悬停在按钮上时，按钮可能会改变颜色。模态窗口出现和消失。 默认情况下，CSS 会即时切换这些状态的样式。 利用 CSS 转换，我们可以在元素的初始状态和目标状态之间插入。两者之间的过渡提供了有关互动原因和效果的视觉方向、支持和提示，从而改善...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/css/transitions.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"过渡"}],["meta",{"property":"og:description","content":"过渡 与网站互动时，您可能会注意到，许多元素都有状态。state例如，下拉菜单可以处于打开或关闭状态。当获得焦点或悬停在按钮上时，按钮可能会改变颜色。模态窗口出现和消失。 默认情况下，CSS 会即时切换这些状态的样式。 利用 CSS 转换，我们可以在元素的初始状态和目标状态之间插入。两者之间的过渡提供了有关互动原因和效果的视觉方向、支持和提示，从而改善..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:tag","content":"动画"}],["meta",{"property":"article:published_time","content":"2024-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"过渡\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"过渡属性","slug":"过渡属性","link":"#过渡属性","children":[{"level":3,"title":"transition 属性","slug":"transition-属性","link":"#transition-属性","children":[]},{"level":3,"title":"过渡持续时间","slug":"过渡持续时间","link":"#过渡持续时间","children":[]},{"level":3,"title":"过渡时间函数","slug":"过渡时间函数","link":"#过渡时间函数","children":[]},{"level":3,"title":"过渡延迟","slug":"过渡延迟","link":"#过渡延迟","children":[]},{"level":3,"title":"简写：转换","slug":"简写-转换","link":"#简写-转换","children":[]}]},{"level":2,"title":"哪些内容可以转换，哪些不能转换？","slug":"哪些内容可以转换-哪些不能转换","link":"#哪些内容可以转换-哪些不能转换","children":[{"level":3,"title":"变革性","slug":"变革性","link":"#变革性","children":[]},{"level":3,"title":"颜色","slug":"颜色","link":"#颜色","children":[]},{"level":3,"title":"阴影","slug":"阴影","link":"#阴影","children":[]},{"level":3,"title":"过滤条件","slug":"过滤条件","link":"#过滤条件","children":[]}]},{"level":2,"title":"转换触发器","slug":"转换触发器","link":"#转换触发器","children":[]},{"level":2,"title":"进入或退出时的不同过渡效果","slug":"进入或退出时的不同过渡效果","link":"#进入或退出时的不同过渡效果","children":[]},{"level":2,"title":"无障碍功能注意事项","slug":"无障碍功能注意事项","link":"#无障碍功能注意事项","children":[]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":9.16,"words":2749},"filePathRelative":"web/css/transitions.md","localizedDate":"2024年3月31日","excerpt":"\\n<p>与网站互动时，您可能会注意到，许多元素都有状态。<em>state</em>例如，下拉菜单可以处于打开或关闭状态。当获得焦点或悬停在按钮上时，按钮可能会改变颜色。模态窗口出现和消失。</p>\\n<p>默认情况下，CSS 会即时切换这些状态的样式。</p>\\n<p>利用 CSS 转换，我们可以在元素的初始状态和目标状态之间插入。两者之间的过渡提供了有关互动原因和效果的视觉方向、支持和提示，从而改善了用户体验。</p>\\n<p><strong>关键术语</strong> ：<em>插值</em>是创建“中间”步骤的过程，这些步骤能够顺畅地从一种状态转换为另一种状态。</p>\\n<iframe allow=\\"camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;\\" loading=\\"lazy\\" src=\\"https://codepen.io/web-dot-dev/embed/zYzNrJV?height=320&amp;theme-id=light&amp;default-tab=result&amp;editable=true\\" data-darkreader-inline-border-top=\\"\\" data-darkreader-inline-border-right=\\"\\" data-darkreader-inline-border-bottom=\\"\\" data-darkreader-inline-border-left=\\"\\" data-title=\\"由 web-dot-dev 在 Codepen 上发布的 Pen zYzNrJV\\" style=\\"color-scheme: initial; box-sizing: inherit; border: 0px; height: 320px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;\\"></iframe>","autoDesc":true}');export{f as comp,u as data};
