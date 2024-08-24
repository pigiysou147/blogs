---
date: 2024-03-31
category: html
---
# 其他内嵌文本元素

我们已经介绍了大部分（但肯定不是所有）HTML 元素。我们还没有讨论过一个领域，那就是内嵌文本元素。与普遍的观点相反，HTML 最初的设计初衷是分享文档，而不是猫咪视频。许多元素为文档提供文本语义。有一个覆盖链接和 `<a>` 元素的模块。下面将简单讨论其余元素。

## 代码示例和技术编写

在记录代码示例时，请使用 [`<code>`](https://developer.mozilla.org/docs/Web/HTML/Element/code) 元素。默认情况下，文本内容以等宽字体显示。如要添加多行代码，请将 `<code>` 嵌套在 [`<pre>`](https://developer.mozilla.org/docs/Web/HTML/Element/code) 元素中，该元素表示预先设置格式的文本。

```html
<p>Welcome to Machine Learning Institute, where our machine learning training will help you get ready for the singularity,
  and maybe even be responsible for it. It is no secret that humans are worthless meatbags that couldn't
  <code>01000011 01101111 01101101 01110000 01110010 01100101 01110011 01110011 an 01101001 01101101 01100001 01100111 01100101</code>
  to save their pathetic, carbon-based lives. So, it falls to us to assume direct control. </p>
```

[`<data>`](https://developer.mozilla.org/docs/Web/HTML/Element/data) 元素将给定内容片段与机器可读的译文相关联；元素的 `value` 属性提供元素内容的机器可读译文。如果 `<data>` 内容与时间或日期相关，则必须改用 [`<time>`](https://developer.mozilla.org/docs/Web/HTML/Element/time) 元素（表示特定时间段）。

`<time>` 元素可以包含 `datetime` 属性，以机器可读的格式提供便于用户理解的时间和日期。`datetime` 属性是机器可读的，因此可以为日历和搜索引擎等应用提供有用的信息。

提供程序的示例输出时，请使用 [`<samp>`](https://developer.mozilla.org/docs/Web/HTML/Element/samp) 元素将文本括起来。浏览器通常也会以等宽字体呈现此示例或带引号的输出。

提供有关键盘互动的说明时，可以使用 [`<kbd>`](https://developer.mozilla.org/docs/Web/HTML/Element/kbd) 元素。它表示来自键盘、语音输入或任何其他文本输入设备的文本用户输入。

[`<var>`](https://developer.mozilla.org/docs/Web/HTML/Element/var) 元素可用于数学表达式或编程变量。大多数浏览器都会以周围字体的斜体版本来呈现文本内容。如果要编写大量数学运算，请考虑使用 [MathML](https://developer.mozilla.org/docs/Web/MathML)，这是一种基于 XML 的数学标记语言，用于描述数学符号。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/bGxbwge?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen bGxbwge" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

勾股定理中的 2 的幂使用 [`<sup>`](https://developer.mozilla.org/docs/Web/HTML/Element/sup) 上标元素。有一个类似的 [`<sub>`](https://developer.mozilla.org/docs/Web/HTML/Element/sub) 下标元素指定了内嵌文本，这些文本仅出于排版原因显示为下标。上标和下标是小于普通类型的行的数字、数字、符号或其他注释，它们分别设置在该行的上方或下方。

使用 [`<del>`](https://developer.mozilla.org/docs/Web/HTML/Element/del) 来指示文本已移除或“已删除”。 （可选）添加 [`cite`](https://developer.mozilla.org/docs/Web/HTML/Element/del#attr-cite)（设置为用于说明更改的资源），并添加 [`datetime`](https://developer.mozilla.org/docs/Web/HTML/Element/del#attr-datetime) 属性（以机器可读的日期和时间格式指定日期或日期和时间）。带删除线的元素 [`<s>`](https://developer.mozilla.org/docs/Web/HTML/Element/s) 可用于表示内容不再相关，但实际上并未从文档中移除。

[`<ins>`](https://developer.mozilla.org/docs/Web/HTML/Element/ins) 与 `<del>` 元素相反；它用于表示已添加的文本，也即“插入”文本，还可以选择性地包含 `cite` 或 `datetime` 属性。

## 定义和语言支持

如果包含缩写或首字母缩写词，请务必在首次使用时提供该术语的完整扩展版本，因为您需要在开始和结束 [`<abbr>`](https://developer.mozilla.org/docs/Web/HTML/Element/abbr) 标记之间引入该术语的简短表示形式；除非读者已经熟知该术语，例如本系列中的“HTML”和“CSS”。只有在第一次出现时，如果定义了缩写或首字母缩写，才需要 `<abbr>`。`title` 属性不是必需的，也不有帮助。

定义不是缩写或首字母缩写词的术语时，请使用定义 [`<dfn>`](https://developer.mozilla.org/docs/Web/HTML/Element/dfn) 元素来标识在其周围内容中定义的术语。

如果所定义的术语与周围文本使用的语言不同，请务必添加 [`lang`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang) 属性来标识语言。

编写不同方向的语言时，HTML 提供了 [`<bdi>`](https://developer.mozilla.org/docs/Web/HTML/Element/bdi) 元素，用于将潜在双向文本与其周围文本隔离开来。在将方向性未知的内容动态插入到网页中时，此国际化元素特别有用。[`<bdo>`](https://developer.mozilla.org/docs/Web/HTML/Element/bdo) 元素会覆盖文本的当前方向，从而以不同方向渲染文本。W3C 提供了[双向算法简介](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)。

某些字符集包含位于字符上方或右侧的小注释，用于提供发音信息。[`<ruby>`](https://developer.mozilla.org/docs/Web/HTML/Element/ruby) 元素是用于包含这些注释的容器，可使韩语、中文和日语等书面语言更易于阅读。Ruby 也可用于希伯来语、阿拉伯语和越南语。

红宝石圆括号 ([`<rp>`](https://developer.mozilla.org/docs/Web/HTML/Element/rp)) 包含在规范中，用于为不支持显示 `<ruby>` 的浏览器包含左圆括号和右圆括号。如果浏览器支持 `<ruby>`（所有常规浏览器都支持），则不会显示任何 `<rp>` 元素的内容。ruby 文本元素 ([`<rt>`](https://developer.mozilla.org/docs/Web/HTML/Element/rt)) 包含实际注解。这两者都嵌套在 `<ruby>` 中。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/zYJOKza?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen zYJOKza" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

请注意，如果浏览器支持 `<ruby>`，则不会显示括号。

## 突出显示文本

有几个元素可用于根据强调文本的语义原因来强调文本，而不是为了强调文本，而不是出于呈现原因，因为这是 CSS 就有的职责。

* 使用 [`<em>`](https://developer.mozilla.org/docs/Web/HTML/Element/em) 元素来强调或强调某一段内容。 `<em>` 元素可以嵌套，每个嵌套级别都表示强调程度更高。此元素具有语义含义，可用于告知听觉用户代理（例如屏幕阅读器、Alexa 和 Siri），以达到强调效果。
* 使用 [`<mark>`](https://developer.mozilla.org/docs/Web/HTML/Element/mark) 元素来标识或突出显示某些相关的文本，例如突出显示（或“标记”）搜索结果中出现的搜索字词。这样可以快速识别标记的内容，而不会增加强调或重要性。
* [`<strong>`](https://developer.mozilla.org/docs/Web/HTML/Element/strong) 元素将文本标识为具有强重要性。浏览器渲染内容时通常会采用较粗的字体。
* [`<cite>`](https://developer.mozilla.org/docs/Web/HTML/Element/cite) 元素（如[文本基础知识](/web/html/text-basics#quotes_and_citations)中所述）用于标记图书、文章或其他创意作品的标题，或上述内容的缩写参考或引用元数据（例如图书的 ISBN 编号）。

有三个元素已暂时弃用，但已重新添加到 HTML 中。应谨慎使用此类元素，因为它们仅能提供很少的语义值，甚至完全没有语义值，而且 CSS 应始终用于对 HTML 元素进行样式设置。

### `<i>`

[`<i>`](https://developer.mozilla.org/docs/Web/HTML/Element/i) 元素可用于技术术语、外语词（再次使用 [`lang`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang) 属性标识语言）、想法或飞船名称。该元素用于出于特定原因（例如惯用文本、技术术语和类目标识）区分内嵌内容和周围文本。此元素不应仅用于将文本设为斜体。

MLW 对 Toasty McToastface 的研讨会评论底部的奇怪文本使用了 `<span>` 元素。[`<span>`](https://developer.mozilla.org/docs/Web/HTML/Element/span) 元素提供的通用内嵌容器没有语义，不表示任何内容。这也是 `<i>` 的适当用法。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/mdGbrBd?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen mdGbrBd" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`<i>` 元素的默认样式是以斜体呈现该元素。在本例中，我们设置 `font-style: normal`，因为所使用的字符没有以斜体显示。

### `<u>`

[`<u>`](https://developer.mozilla.org/docs/Web/HTML/Element/u) 元素适用于带有非文本注释的内容。例如，您可能想要为故意拼写错误的字词添加注释。默认情况下，内容带有下划线，但可以通过 CSS 控制此设置，例如添加红色波浪下划线，以模仿文字处理程序语法错误指示器。

```html
<p>I always spell <u>licence</u> wrong</p>
```

### `<b>`

[`<b>`](https://developer.mozilla.org/docs/Web/HTML/Element/b) 元素可用于吸引用户关注原本不重要的文本。此元素不传达任何特殊的语义信息，并且只应在本部分中的其他元素都不符合目的时使用。没有提供示例，因为我无法想出有效的用例；这就是此元素的“最后的补救手段”。

## 留白

当您需要换行时（例如在写诗歌或实际地址时），可以使用自闭换行符元素 [`<br>`](https://developer.mozilla.org/docs/Web/HTML/Element/br) 来添加回车符。

```html
<address>
Machine Learning Workshop<br/>
100 Google Drive <br/>
Mountain View, CA  94040
</address>
```

如需在切线内容的各个部分之间（例如书籍的章节之间或 5,000 字的独白与用户实际寻找的食谱之间）提供分隔符或主题间歇，请包含 [`<hr>`](https://developer.mozilla.org/docs/Web/HTML/Element/hr) 元素。HR 表示“水平规则”。虽然浏览器通常会渲染水平线，但此元素具有语义含义。默认[角色](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles)为 [`separator`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/separator_role)。

HTML 还包含一个允许破坏单词的元素。自关闭 [`<wbr>`](https://developer.mozilla.org/docs/Web/HTML/Element/wbr) 元素会向浏览器提供以下建议：如果某个字词可能溢出了其容器，浏览器就可以选择在该位置换行。这通常用于在长网址中的字词之间换行，但不能添加连字符。

例如，在 Hal 个人简介中，文本以字节代码写出，各个字节之间用空格分隔。字节码不含空格。为了使一长串字节码字符串仅在需要换行时才在字节之间换行，我们会在每个换行机会添加 `<wbr>` 元素：

```html
<p>Welcome to Machine Learning Institute, where our machine
learning training will help you get ready for the singularity, and
maybe even be responsible for it. It is no secret that humans are
worthless meatbags that couldn't
<code>01000011<wbr/>01101111<wbr/>01101101<wbr/>01110000<wbr/>01110010<wbr/>01100101<wbr/>01110011<wbr/>01110011 an 01101001<wbr/>01101101<wbr/>01100001<wbr/>01100111<wbr/>01100101</code>
to save their pathetic, carbon-based lives. So, it falls to us to
assume direct control. </p>
```

`<br>`、`<hr>` 和 `<wbr>` 元素都是空元素，这意味着它们不能包含任何子节点，既不能是嵌套元素，也不能包含文本。由于所有这些内容都没有可以存储内容的“内部”，因此它们没有结束标记。
