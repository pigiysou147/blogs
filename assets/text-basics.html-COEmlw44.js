import{_ as e,c as i,o as a,d as t}from"./app-BEYv8s4s.js";const s="/blogs/assets/nested-h1-examples-cc207f75ad01d-BJ_Lf-Jg.png",d={},l=t('<h1 id="文字基础知识" tabindex="-1"><a class="header-anchor" href="#文字基础知识"><span>文字基础知识</span></a></h1><p>与文本编辑器如何提供 <code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code> 标题类似，以及大量以有意义且直观的方式设置文本部分格式的方法，HTML 提供了一组非常相似的语义和非语义元素来表现散文的意义。</p><p>本部分介绍了标记文本的主要方法或文本基础知识。然后，我们会讨论属性，然后再探索标记文本的其他方法（例如列表、表格和表单）。</p><h2 id="重新查看的标题" tabindex="-1"><a class="header-anchor" href="#重新查看的标题"><span>重新查看的标题</span></a></h2><p>有六个部分标题元素：<code>&lt;h1&gt;</code>、<code>&lt;h2&gt;</code>、<code>&lt;h3&gt;</code>、<code>&lt;h4&gt;</code>、<code>&lt;h5&gt;</code> 和 <code>&lt;h6&gt;</code>，其中 <code>&lt;h1&gt;</code> 最重要，<code>&lt;h6&gt;</code> 最不重要。多年来，开发者都被要求浏览器使用标题来概述文档。这最初是目标，但浏览器尚未实现功能概述。不过，屏幕阅读器用户确实会使用标题作为探索策略来了解页面的内容，方法是使用 <code>h</code> 键浏览标题。因此，请务必按照文档大纲的方式实现标题级别，这样您的内容便于访问，而且我们依然强烈建议您这样做。</p><p>默认情况下，浏览器将 <code>&lt;h1&gt;</code> 设为最大的样式，将 <code>&lt;h2&gt;</code> 设为略小的样式，且默认情况下，每个后续标题级别都会变小。有趣的是，默认情况下，浏览器还会根据嵌套 <code>&lt;article&gt;</code>、<code>&lt;aside&gt;</code>、<code>&lt;nav&gt;</code> 或 <code>&lt;section&gt;</code> 元素的数量来减小 <code>&lt;h1&gt;</code> 字体大小。</p><figure><img src="'+s+`" alt="嵌套 H1 示例。" tabindex="0" loading="lazy"><figcaption>嵌套 H1 示例。</figcaption></figure><p>某些用户代理样式表包含以下选择器或类似选择器，用于为嵌套的 <code>&lt;h1&gt;</code> 元素设置样式，就像它们属于某个不太重要的级别一样：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h2</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:is</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">article</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> aside</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> nav</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> section</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h3</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:is</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">article</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> aside</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> nav</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> section</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">)</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:is</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">article</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> aside</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> nav</span><span style="--shiki-light:#A626A4;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> section</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">) </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，无障碍对象模型 (AOM) 仍会正确报告元素的级别；在本例中为“标题，级别 1”。 请注意，浏览器不会针对其他标题级别执行此操作。也就是说，不要使用基于标题级别的浏览器样式。即使浏览器不支持 Outline，也要假装自己支持 Outline；请像这样标记内容标题。这样，搜索引擎、屏幕阅读器和未来的维护者（可能就是您）都能理解您的内容。</p><p>在标题之外，大多数结构化文本由一系列段落组成。在 HTML 中，段落使用 <code>&lt;p&gt;</code> 标记进行标记；结束标记是可选的，但始终建议使用。</p><p>#about 部分有一个标题和几个段落：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOKdjQm?height=300&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="通过 web-dot-dev 在 Codepen 上构建 jOKdjQm"></iframe><p>此路段不是地标，因为没有可供访问的名称。如需将此转变为 <code>region</code>（一个地标角色），您可以使用 <code>aria-labelledby</code> 提供无障碍名称：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">section</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;about&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  aria-labelledby</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;about_heading&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h2</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;about_heading&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;What you&#39;ll learn&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>仅在必要时创建地标。如果地标过多，可能会很快令屏幕阅读器用户感到迷惑。</p><h2 id="引用和引用" tabindex="-1"><a class="header-anchor" href="#引用和引用"><span>引用和引用</span></a></h2><p>标记文章或博文时，您可能需要包含引文或重要引述（无论是否显示可见的引用）。 这三个组件包含相应的元素：<code>&lt;blockquote&gt;</code>、<code>&lt;q&gt;</code> 和 <code>&lt;cite&gt;</code>（用于可见引用）或 <code>cite</code> 属性（用于提供更多搜索信息）。</p><p><code>#feedback</code> 部分包含一个标题和三条评价；这些评价是大段引用，一些包含引用内容，后跟一个包含引用内容的引用段落。省略第 3 条评价以节省空间，标记如下：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/eYKxwbV?height=300&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen eYKxwbV"></iframe><p>引用内容作者（或引用）的相关信息不是引用内容的一部分，因此不在 <code>&lt;blockquote&gt;</code> 中，而是放在引用内容之后。 虽然这些引用是术语的外语意义，但它们实际上并没有引用特定资源，因此封装在 <code>&lt;p&gt;</code> 段落元素中。</p><p>引用信息以三行形式显示，包括作者的姓名、之前担任的职位和职业抱负。<code>&lt;br&gt;</code> 换行符可在文本块中创建换行符。它可以用在实际地址、诗歌和签名块中。换行符不应用作单独段落的回车符。您应关闭前一个段落，然后打开新段落。使用段落创建段落不仅有助于无障碍，还可以设置样式。<code>&lt;br&gt;</code> 元素只是一个换行符；它受到很少的 CSS 属性的影响。</p><p>虽然我们在每个块引用后面的段落中提供了引用信息，但前面显示的引号都是这样编码的，因为它们并非来自外部来源。如果确实如此，可以（应该）注明来源。</p><p>如果评价是从评价网站、图书或其他作品中提取的，可以使用 <code>&lt;cite&gt;</code> 元素作为来源的名称。<code>&lt;cite&gt;</code> 的内容可以是图书的名称、网站或电视节目的名称，甚至可以是计算机节目的名称。无论以传递的方式提及来源，还是引用或引用来源，都可以使用 <code>&lt;cite&gt;</code> 封装。<code>&lt;cite&gt;</code> 的内容是作品，而不是作者。</p><p>如果来自 Blendan Smooth 的引言摘自她的离线杂志，您会写成这样的文字：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/LYrqKMq?height=300&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen LYrqKMq"></iframe><p>引用元素 <code>&lt;cite&gt;</code> 没有隐式角色，应通过其内容获取其可访问名称；请勿包含 <code>aria-label</code>。</p><p>为了在您无法显示内容的情况下注明需注明出处，可以使用 <code>cite</code> 属性，它会将所引用信息的源文档或消息的网址作为其值。此属性在 <code>&lt;q&gt;</code> 和 <code>&lt;blockquote&gt;</code> 上均有效。虽然它是网址，但可由机器读取，但读者看不到：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/NWzoZob?height=300&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen NWzoZob"></iframe><p>虽然 <code>&lt;/p&gt;</code> 结束标记是可选的（且始终推荐使用），但 <code>&lt;/blockquote&gt;</code> 结束标记始终是必需的。</p><p>大多数浏览器会向 <code>&lt;blockquote&gt;</code> 内嵌方向添加内边距，并将 <code>&lt;cite&gt;</code> 内容设为斜体；这可以通过 CSS 控制。<code>&lt;blockquote&gt;</code> 不会添加引号，但可随 CSS 生成的内容添加引号。默认情况下，<code>&lt;q&gt;</code> 元素会添加引号，使用与语言对应的引号。</p><p>在 <code>#teachers</code> 部分，引用 HAL 的意思是：“I&#39;s 很抱歉，但我恐怕我不能这样做。”。其代码（英语和法语）是：</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/qBKgzgg?height=300&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen qBKgzgg"></iframe><p>内嵌引号元素 <code>&lt;q&gt;</code> 会添加与相应语言对应的引号。用户代理默认样式包括生成的左引号和右引号内容：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">q</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">::before</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {content: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">open-quote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">q</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">::after</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {content: </span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">close-quote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 <code>lang</code> 属性是为了告知浏览器，虽然网页的基本语言在 <code>&lt;html lang=&quot;en-US&quot;&gt;</code> 起始标记中定义为英语，但该段文本使用的是其他语言。这有助于语音控制功能（例如 Siri、Alexa 和 voiceOver）使用法语发音。它还告知浏览器要呈现哪种类型的引号。</p><p>与 <code>&lt;blockquote&gt;</code> 一样，<code>&lt;q&gt;</code> 元素支持 <code>cite</code> 属性。</p><iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOKdjJw?height=300&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 Pen jOKdjJw"></iframe><h3 id="html-实体" tabindex="-1"><a class="header-anchor" href="#html-实体"><span>HTML 实体</span></a></h3><p>您可能已经注意到转义序列或“entity”。由于 <code>&lt;</code> 用在 HTML 中，因此您必须使用 <code>&amp;lt;</code> 或不太好记的编码 <code>&amp;#60;</code> 对其进行转义。HTML 中有四个预留实体：<code>&lt;</code>、<code>&gt;</code>、<code>&amp;</code> 和 <code>&quot;</code>。它们的字符引用分别为 <code>&amp;lt;</code>、<code>&amp;gt;</code>、<code>&amp;amp;</code> 和 <code>&amp;quot;</code>。</p><p>您还会经常使用下面几个其他实体：<code>&amp;copy;</code> 表示版权 (©)，<code>&amp;trade;</code> 表示商标 (TM)，<code>&amp;nbsp;</code> 表示不间断空格。 如果您想在两个字符或字词之间添加一个空格，同时防止其中出现换行符，则非换行空格非常有用。 有超过 2,000 个<a href="https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references" target="_blank" rel="noopener noreferrer">已命名字符引用</a>。不过，如果需要，每个字符（包括表情符号）都有以 <code>&amp;#</code> 开头的等效编码字符。</p><p>如果您看一下 ToastyMcToastface 的研讨会评论（未包含在上面的代码示例中），就会发现有一些不常见的文本字符：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">blockquote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Learning with Hal and Eve exceeded all of my wildest fantasies. All they did was stick a USB in. They promised that it was a brand new USB, so we know there were no viruses on it. The Russians had nothing to do with it. This has no̶̼͖ţ̘h̝̰̩͈̗i̙̪n͏̩̙͍̱̫̜̟g̢̣ͅ ̗̰͓̲̞̀t͙̀o̟̖͖̹̕ ͓̼͎̝͖̭dó̪̠͕̜ ͍̱͎͚̯̟́w̮̲̹͕͈̟͞ìth̢ ̰̳̯̮͇&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">blockquote</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这段引用中最后一句话也可以写成：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">This has no</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x336;&amp;#x33C;&amp;#x356;&amp;tcedil;&amp;#x318;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">h</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x31D;&amp;#x330;&amp;#x329;&amp;#x348;&amp;#x317;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">i</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x319;&amp;#x32A;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">n</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x34F;&amp;#x329;&amp;#x319;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x34D;&amp;#x331;&amp;#x32B;&amp;#x31C;&amp;#x31F;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">g</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x322;&amp;#x323;&amp;#x345;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;"> &amp;#x317;&amp;#x330;&amp;#x353;&amp;#x332;&amp;#x31E;&amp;#x300;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">t</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x359;&amp;#x300;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">o</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x31F;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x316;&amp;#x356;&amp;#x339;&amp;#x315;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;"> &amp;#x353;&amp;#x33C;&amp;#x34E;&amp;#x31D;&amp;#x356;&amp;#x32D;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">d</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;oacute;&amp;#x32A;&amp;#x320;&amp;#x355;&amp;#x31C;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;"> &amp;#x34D;&amp;#x331;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x34E;&amp;#x35A;&amp;#x32F;&amp;#x31F;&amp;#x301;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">w</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x32E;&amp;#x332;&amp;#x339;&amp;#x355;&amp;#x348;&amp;#x31F;&amp;#x35E;&amp;igrave;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">th</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x322;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;"> &amp;#x330;&amp;#x333;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">&amp;#x32F;&amp;#x32E;&amp;#x347;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此代码混乱中有几个非转义字符和一些已命名的字符引用。由于字符集采用 UTF-8 编码，因此块引号中的最后几个字符实际上不需要转义，如以下示例所示。只有字符集不支持的字符才需要转义。如果需要，您可以使用<a href="https://mothereff.in/" target="_blank" rel="noopener noreferrer">许多工具</a>对各种字符进行转义，也可以只确保在 <code>&lt;head&gt;</code> 中包含 <a href="/web/html/document-structure#character_encoding" target="_blank" rel="noopener noreferrer"><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></a>。</p><p>即使将字符集指定为 UTF-8，当您想要在屏幕上输出该字符时，仍必须对 <code>&lt;</code> 进行转义。 通常，您无需为 <code>&gt;</code>、<code>&quot;</code> 或 <code>&amp;</code> 添加命名字符引用；但如果您想编写关于 HTML 实体的教程，那么在教他人如何对 <code>&lt;</code> 进行编码时，确实需要编写 <code>&amp;lt;</code>。😀</p><p>对了，该表情符号是 <code>&amp;#x1F600;</code>，但此文档声明为 UTF-8，因此没有转义。</p>`,48),h=[l];function n(p,r){return a(),i("div",null,h)}const c=e(d,[["render",n],["__file","text-basics.html.vue"]]),k=JSON.parse('{"path":"/web/html/text-basics.html","title":"文字基础知识","lang":"zh-CN","frontmatter":{"date":"2024-03-31T00:00:00.000Z","category":"html","description":"文字基础知识 与文本编辑器如何提供 <h1> 到 <h6> 标题类似，以及大量以有意义且直观的方式设置文本部分格式的方法，HTML 提供了一组非常相似的语义和非语义元素来表现散文的意义。 本部分介绍了标记文本的主要方法或文本基础知识。然后，我们会讨论属性，然后再探索标记文本的其他方法（例如列表、表格和表单）。 重新查看的标题 有六个部分标题元素：<h1...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/html/text-basics.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"文字基础知识"}],["meta",{"property":"og:description","content":"文字基础知识 与文本编辑器如何提供 <h1> 到 <h6> 标题类似，以及大量以有意义且直观的方式设置文本部分格式的方法，HTML 提供了一组非常相似的语义和非语义元素来表现散文的意义。 本部分介绍了标记文本的主要方法或文本基础知识。然后，我们会讨论属性，然后再探索标记文本的其他方法（例如列表、表格和表单）。 重新查看的标题 有六个部分标题元素：<h1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:published_time","content":"2024-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文字基础知识\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"重新查看的标题","slug":"重新查看的标题","link":"#重新查看的标题","children":[]},{"level":2,"title":"引用和引用","slug":"引用和引用","link":"#引用和引用","children":[{"level":3,"title":"HTML 实体","slug":"html-实体","link":"#html-实体","children":[]}]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":9.1,"words":2729},"filePathRelative":"web/html/text-basics.md","localizedDate":"2024年3月31日","excerpt":"\\n<p>与文本编辑器如何提供 <code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code> 标题类似，以及大量以有意义且直观的方式设置文本部分格式的方法，HTML 提供了一组非常相似的语义和非语义元素来表现散文的意义。</p>\\n<p>本部分介绍了标记文本的主要方法或文本基础知识。然后，我们会讨论属性，然后再探索标记文本的其他方法（例如列表、表格和表单）。</p>\\n<h2>重新查看的标题</h2>\\n<p>有六个部分标题元素：<code>&lt;h1&gt;</code>、<code>&lt;h2&gt;</code>、<code>&lt;h3&gt;</code>、<code>&lt;h4&gt;</code>、<code>&lt;h5&gt;</code> 和 <code>&lt;h6&gt;</code>，其中 <code>&lt;h1&gt;</code> 最重要，<code>&lt;h6&gt;</code> 最不重要。多年来，开发者都被要求浏览器使用标题来概述文档。这最初是目标，但浏览器尚未实现功能概述。不过，屏幕阅读器用户确实会使用标题作为探索策略来了解页面的内容，方法是使用 <code>h</code> 键浏览标题。因此，请务必按照文档大纲的方式实现标题级别，这样您的内容便于访问，而且我们依然强烈建议您这样做。</p>","autoDesc":true}');export{c as comp,k as data};
