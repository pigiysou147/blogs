import{_ as a,r,c as s,e as d,d as e,o as t}from"./app-BEYv8s4s.js";const l="/blogs/assets/three-photo-frames-610a106217f8d-BMN9jsYO.jpg",n="/blogs/assets/the-border-demo-chrome-b2a96d1dfcbd9-Dhr64aiu.jpg",o="/blogs/assets/the-image-used-the-demo-8ad29be099f29-BS-TOpt0.png",h={},p=e('<h1 id="边框" tabindex="-1"><a class="header-anchor" href="#边框"><span>边框</span></a></h1><p>在<a href="/web/css/box-model" target="_blank" rel="noopener noreferrer"> 盒子模型</a>模块中，我们考虑了使用帧类比来描述框模型的每个部分。</p><figure><img src="'+l+'" alt="三幅相框，彼此相邻。 中间的框架在其顶部叠加了盒子模型的各个部分" tabindex="0" loading="lazy"><figcaption>三幅相框，彼此相邻。 中间的框架在其顶部叠加了盒子模型的各个部分</figcaption></figure><p>边框框是框的框架，<code>border</code> 属性为您提供了大量选项，供您以您能想到的几乎任何样式创建该框架。</p><h2 id="边框属性" tabindex="-1"><a class="header-anchor" href="#边框属性"><span>边框属性</span></a></h2><p>单个 <code>border</code> 属性提供了一种为边框的各个部分设置样式的方法。</p>',6),k=e('<h3 id="风格" tabindex="-1"><a class="header-anchor" href="#风格"><span>风格</span></a></h3><p>如需显示边框，您必须定义 <a href="https://developer.mozilla.org/docs/Web/CSS/border-style" target="_blank" rel="noopener noreferrer"><code>border-style</code></a>。有以下几个选项可供选择：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRrvyxY?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen GRrvyxY" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>使用 <code>ridge</code>、<code>inset</code>、<code>outset</code> 和 <code>groove</code> 样式时，浏览器会将第二种颜色的边框颜色调暗，以提供对比和深度。此行为可能会因浏览器而异，尤其是对于深色（例如 <code>black</code>）而言。在 Chrome 中，这些边框样式将显示为纯色；在 Firefox 中，这些边框样式会变浅，然后再提供更深的第二种颜色。</p><p>浏览器行为也可能因边框样式而异，因此一定要在不同的浏览器中测试您的网站。这种差异的一个常见示例是，每个浏览器如何渲染 <code>dotted</code> 和 <code>dashed</code> 样式。</p><p><img src="'+n+`" alt="Chrome、Firefox 和 Safari 中的边框演示，演示了边框显示方式上的细微差异" loading="lazy">Chrome、Firefox 和 Safari 中显示的边框。</p><p>若要为框的每一侧设置边框样式，您可以使用 <a href="https://developer.mozilla.org/docs/Web/CSS/border-top-style" target="_blank" rel="noopener noreferrer"><code>border-top-style</code></a>、<a href="https://developer.mozilla.org/docs/Web/CSS/border-right-style" target="_blank" rel="noopener noreferrer"><code>border-right-style</code></a>、<a href="https://developer.mozilla.org/docs/Web/CSS/border-left-style" target="_blank" rel="noopener noreferrer"><code>border-left-style</code></a> 和 <a href="https://developer.mozilla.org/docs/Web/CSS/border-bottom-style" target="_blank" rel="noopener noreferrer"><code>border-bottom-style</code></a>。</p><h3 id="简写" tabindex="-1"><a class="header-anchor" href="#简写"><span>简写</span></a></h3><p>与 <code>margin</code> 和 <code>padding</code> 一样，您可以使用 <a href="https://developer.mozilla.org/docs/Web/CSS/border" target="_blank" rel="noopener noreferrer"><code>border</code></a> 简写属性在一个声明中定义边框的所有部分。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>border</code> 简写形式中的值的顺序是 <code>border-width</code>、<code>border-style</code>，然后是 <code>border-color</code>。</p><h3 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h3><p>您可以使用 <a href="https://developer.mozilla.org/docs/Web/CSS/border-color" target="_blank" rel="noopener noreferrer"><code>border-color</code></a> 设置框的各侧或每一侧的颜色。默认情况下，它会使用框的当前文本颜色：<code>currentColor</code>。这意味着，如果您仅声明边框属性（如宽度），那么除非您明确设置颜色，否则颜色将采用计算后的值。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">solid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/* Will be a blue border */</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> yellow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLgovoX?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上运营的 Pen yLgovoX" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>如需为框的每一侧设置边框颜色，请使用 <a href="https://developer.mozilla.org/docs/Web/CSS/border-top-color" target="_blank" rel="noopener noreferrer"><code>border-top-color</code></a>、<a href="https://developer.mozilla.org/docs/Web/CSS/border-right-color" target="_blank" rel="noopener noreferrer"><code>border-right-color</code></a>、<a href="https://developer.mozilla.org/docs/Web/CSS/border-left-color" target="_blank" rel="noopener noreferrer"><code>border-left-color</code></a> 和 <a href="https://developer.mozilla.org/docs/Web/CSS/border-bottom-color" target="_blank" rel="noopener noreferrer"><code>border-bottom-color</code></a>。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWJvQVO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="web-dot-dev 在 Codepen 上提供的 Pen MWJvQVO" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><h3 id="宽度" tabindex="-1"><a class="header-anchor" href="#宽度"><span>宽度</span></a></h3><p>边框的宽度是线条的粗细，由 <a href="https://developer.mozilla.org/docs/Web/CSS/border-width" target="_blank" rel="noopener noreferrer"><code>border-width</code></a> 控制。默认边框宽度为 <code>medium</code>。 不过，除非您定义样式，否则此属性将不可见。您可以使用其他已命名的宽度，例如 <code>thin</code> 和 <code>thick</code>。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/PoWKQxN?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上的 Pen PoWKQxN" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p><code>border-width</code> 属性还接受长度单位，例如 <code>px</code>、<code>em</code>、<code>rem</code> 或 <code>%</code>。如需为框的每一侧设置边框宽度，请使用 <a href="https://developer.mozilla.org/docs/Web/CSS/border-top-width" target="_blank" rel="noopener noreferrer"><code>border-top-width</code></a>、<a href="https://developer.mozilla.org/docs/Web/CSS/border-right-width" target="_blank" rel="noopener noreferrer"><code>border-right-width</code></a>、<a href="https://developer.mozilla.org/docs/Web/CSS/border-left-width" target="_blank" rel="noopener noreferrer"><code>border-left-width</code></a> 和 <a href="https://developer.mozilla.org/docs/Web/CSS/border-bottom-width" target="_blank" rel="noopener noreferrer"><code>border-bottom-width</code></a>。</p><h2 id="逻辑属性" tabindex="-1"><a class="header-anchor" href="#逻辑属性"><span>逻辑属性</span></a></h2><p>在<a href="/web/css/logical-properties" target="_blank" rel="noopener noreferrer">逻辑属性</a>模块中，您了解了如何指代块流和内嵌流，而不是显式的顶部、右侧、底部或左侧。</p><p>您也可以使用边框功能：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> dotted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-inline-end: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/poRraBp?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen poRraBp" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>在此示例中，<code>.my-element</code> 的所有边均定义为具有 <code>2px</code>（虚线边框，即当前文本颜色）。然后，将 <code>inline-end</code> 边框定义为 <code>2px</code>（实线和红色）。也就是说，在从左到右书写的语言（如英语）中，红色边框位于框的右侧。在从右到左书写的语言（如阿拉伯语）中，红色边框位于框的左侧。</p><p>浏览器对边框的逻辑属性的支持各不相同，因此请务必先查看支持情况，然后再使用。</p><h2 id="圆角半径" tabindex="-1"><a class="header-anchor" href="#圆角半径"><span>圆角半径</span></a></h2><p>如需为框添加圆角，请使用 <a href="https://developer.mozilla.org/docs/Web/CSS/border-radius" target="_blank" rel="noopener noreferrer"><code>border-radius</code></a> 属性。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-radius: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/LYxjQoK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen LYxjQoK" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>这种简写形式可为框的每个角添加一致的边框。 与其他边框属性一样，您可以使用 <a href="https://developer.mozilla.org/docs/Web/CSS/border-top-left-radius" target="_blank" rel="noopener noreferrer"><code>border-top-left-radius</code></a>、<a href="https://developer.mozilla.org/docs/Web/CSS/border-top-right-radius" target="_blank" rel="noopener noreferrer"><code>border-top-right-radius</code></a>、<a href="https://developer.mozilla.org/docs/Web/CSS/border-bottom-right-radius" target="_blank" rel="noopener noreferrer"><code>border-bottom-right-radius</code></a> 和 <a href="https://developer.mozilla.org/docs/Web/CSS/border-bottom-left-radius" target="_blank" rel="noopener noreferrer"><code>border-bottom-left-radius</code></a> 定义每条边的边框半径。</p><p>您还可以在简写形式中指定每个角的半径，遵循顺序：左上角、右上角、右下角、左下角。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-radius: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLgovdK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上运营的 Pen yLgovdK" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>为角定义单个值时，您使用的是另一种简写形式，因为边界半径分为两部分：垂直边和水平边。这意味着，当您设置 <code>border-top-left-radius: 1em</code> 时，您将设置左上角向上半径和左上角左上角半径。</p><p>您可以按如下方式定义每个角的这两个属性：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-top-left-radius: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">em</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNRqoPM?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen WNRqoPM" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p>这会添加 <code>border-top-left-top</code> 值 <code>1em</code> 和 <code>border-top-left-left</code> 值 <code>2em</code>。这会将左上角边界半径转换为椭圆半径，而不是默认的圆半径。</p><p>您可以在标准值之后使用 <code>border-radius</code> 简写形式定义这些值，并使用 <code>/</code> 定义椭圆值。这可以让您尽情发挥创意，制作一些复杂的形状。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-radius: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">95</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 155</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 148</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 103</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">48</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 95</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 130</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 203</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/abpyqeM?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 编写的 Pen abpyqeM" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><h2 id="边框图片" tabindex="-1"><a class="header-anchor" href="#边框图片"><span>边框图片</span></a></h2><p>您不必在 CSS 中使用基于描边的边框。您还可以通过 <a href="https://developer.mozilla.org/docs/Web/CSS/border-image" target="_blank" rel="noopener noreferrer"><code>border-image</code></a> 使用任何类型的图片。通过此简写属性，您可以设置源图片、图片的切片方式、图片宽度、边框与边缘的偏移距离以及重复方式。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image-source: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">https://assets.codepen.io/174183/border-image-frame.jpg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image-slice: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">61</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 58</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 51</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 48</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image-width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 20</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image-outset: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">; </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image-repeat: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">stretch</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> stretch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/zYNdWNX?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen zYNdWNX" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe><p><a href="https://developer.mozilla.org/docs/Web/CSS/border-image-width" target="_blank" rel="noopener noreferrer"><code>border-image-width</code></a> 属性类似于 <code>border-width</code>：您可以通过该属性设置边框图片的宽度。借助 <a href="https://developer.mozilla.org/docs/Web/CSS/border-image-outset" target="_blank" rel="noopener noreferrer"><code>border-image-outset</code></a> 属性，您可以设置边框图片与其所环绕的框之间的距离。</p><h3 id="border-image-source" tabindex="-1"><a class="header-anchor" href="#border-image-source"><span><code>border-image-source</code></span></a></h3><p><a href="https://developer.mozilla.org/docs/Web/CSS/border-image-source" target="_blank" rel="noopener noreferrer"><code>border-image-source</code></a>（边框图片的来源）可以是任何有效图片（包括 CSS 渐变）的 <code>url</code>。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {   </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image-source: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;path/to/image.png&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image-source: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">linear-gradient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(to </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">bottom</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">#</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">fff</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="border-image-slice" tabindex="-1"><a class="header-anchor" href="#border-image-slice"><span><code>border-image-slice</code></span></a></h3><p><a href="https://developer.mozilla.org/docs/Web/CSS/border-image-slice" target="_blank" rel="noopener noreferrer"><code>border-image-slice</code></a> 属性是一个有用的属性，可让您将图片分割为 9 部分，由 4 条分割线组成。其运作方式与 <code>margin</code> 简写形式类似，您在其中定义了顶部、右侧、底部和左侧的<strong>偏移值</strong>。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.my-element</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image: </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;image.jpg&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    border-image-slice: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">61</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 58</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 51</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 48</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="演示中使用的图片，带有蓝线的四个切片" tabindex="0" loading="lazy"><figcaption>演示中使用的图片，带有蓝线的四个切片</figcaption></figure><p>定义偏移值后，图片现在有 9 个部分：4 个角、4 个边和中间部分。这些角会应用于带有边框图片的元素角。 这些边缘会应用于相应元素的边缘。<a href="https://developer.mozilla.org/docs/Web/CSS/border-image-repeat" target="_blank" rel="noopener noreferrer"><code>border-image-repeat</code></a> 属性会定义这些边缘的填充方式，<a href="https://developer.mozilla.org/docs/Web/CSS/border-image-width" target="_blank" rel="noopener noreferrer"><code>border-image-width</code></a> 属性用于控制切片的大小。</p><p>最后，<code>fill</code> 关键字会确定是否将切片剩下的中间部分用作元素的背景图片。</p><h3 id="border-image-repeat" tabindex="-1"><a class="header-anchor" href="#border-image-repeat"><span><code>border-image-repeat</code></span></a></h3><p><a href="https://developer.mozilla.org/docs/Web/CSS/border-image-repeat" target="_blank" rel="noopener noreferrer"><code>border-image-repeat</code></a> 用于指示 CSS 如何重复显示边框图片。其运作方式与 <code>background-repeat</code> 相同。</p><ul><li>初始值为 <code>stretch</code>，即拉伸源图片以填充可用空间。</li><li><code>repeat</code> 值会尽可能多地平铺源图像的边缘，并且可能会裁剪边缘区域以实现这一点。</li><li><code>round</code> 值与重复值相同，但不是裁剪图片边缘区域以适应尽可能多的尺寸，而是拉伸图片并重复绘制以实现无缝重复</li><li><code>space</code> 值再次返回，与重复相同，但此值会在每个边缘区域之间增加空间，以形成无缝图案。</li></ul><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRrvBYv?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen GRrvBYv" style="color-scheme:initial;box-sizing:inherit;border:0px;height:500px;width:100%;--darkreader-inline-border-top:0px;--darkreader-inline-border-right:0px;--darkreader-inline-border-bottom:0px;--darkreader-inline-border-left:0px;"></iframe>',62);function c(b,g){const i=r("BrowseSurport");return t(),s("div",null,[p,d(i,{code:"css.properties.border"}),k])}const y=a(h,[["render",c],["__file","borders.html.vue"]]),A=JSON.parse('{"path":"/web/css/borders.html","title":"边框","lang":"zh-CN","frontmatter":{"date":"2024-03-31T00:00:00.000Z","category":"css","tags":["盒子模型"],"description":"边框 在 盒子模型模块中，我们考虑了使用帧类比来描述框模型的每个部分。 三幅相框，彼此相邻。 中间的框架在其顶部叠加了盒子模型的各个部分三幅相框，彼此相邻。 中间的框架在其顶部叠加了盒子模型的各个部分 边框框是框的框架，border 属性为您提供了大量选项，供您以您能想到的几乎任何样式创建该框架。 边框属性 单个 border 属性提供了一种为边框的各...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/css/borders.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"边框"}],["meta",{"property":"og:description","content":"边框 在 盒子模型模块中，我们考虑了使用帧类比来描述框模型的每个部分。 三幅相框，彼此相邻。 中间的框架在其顶部叠加了盒子模型的各个部分三幅相框，彼此相邻。 中间的框架在其顶部叠加了盒子模型的各个部分 边框框是框的框架，border 属性为您提供了大量选项，供您以您能想到的几乎任何样式创建该框架。 边框属性 单个 border 属性提供了一种为边框的各..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:tag","content":"盒子模型"}],["meta",{"property":"article:published_time","content":"2024-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"边框\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"边框属性","slug":"边框属性","link":"#边框属性","children":[{"level":3,"title":"风格","slug":"风格","link":"#风格","children":[]},{"level":3,"title":"简写","slug":"简写","link":"#简写","children":[]},{"level":3,"title":"颜色","slug":"颜色","link":"#颜色","children":[]},{"level":3,"title":"宽度","slug":"宽度","link":"#宽度","children":[]}]},{"level":2,"title":"逻辑属性","slug":"逻辑属性","link":"#逻辑属性","children":[]},{"level":2,"title":"圆角半径","slug":"圆角半径","link":"#圆角半径","children":[]},{"level":2,"title":"边框图片","slug":"边框图片","link":"#边框图片","children":[{"level":3,"title":"border-image-source","slug":"border-image-source","link":"#border-image-source","children":[]},{"level":3,"title":"border-image-slice","slug":"border-image-slice","link":"#border-image-slice","children":[]},{"level":3,"title":"border-image-repeat","slug":"border-image-repeat","link":"#border-image-repeat","children":[]}]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":10.2,"words":3060},"filePathRelative":"web/css/borders.md","localizedDate":"2024年3月31日","excerpt":"\\n<p>在<a href=\\"/web/css/box-model\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"> 盒子模型</a>模块中，我们考虑了使用帧类比来描述框模型的每个部分。</p>\\n<figure><figcaption>三幅相框，彼此相邻。 中间的框架在其顶部叠加了盒子模型的各个部分</figcaption></figure>\\n<p>边框框是框的框架，<code>border</code> 属性为您提供了大量选项，供您以您能想到的几乎任何样式创建该框架。</p>\\n<h2>边框属性</h2>\\n<p>单个 <code>border</code> 属性提供了一种为边框的各个部分设置样式的方法。</p>","autoDesc":true}');export{y as comp,A as data};
