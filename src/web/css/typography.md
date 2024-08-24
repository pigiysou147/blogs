---
date: 2024-03-31
category: css
---
# 文本和排版 

文本是网络的核心构建块之一。

制作网站时，您不一定需要为文本设置样式；HTML 实际上具有一些相当合理的默认样式。

不过，文字可能会占据网站的大部分篇幅，因此有必要添加一些样式来美化网站。通过更改一些基本属性，您可以显著改善用户的阅读体验！

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNEJWGy?height=590&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen WNEJWGy" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 590px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

在本单元中，我们将从 `@font-face` 规则开始，该规则允许您将自定义字体导入网页。这可确保您获得所需的确切排版，与用户安装的字体无关。

接下来，我们将介绍基本的 CSS 字体属性，包括 `font-family`、`font-style`、`font-weight` 和 `font-size`。这些基础知识为处理文本以确保样式和可读性奠定了基础。

在最后介绍一些高级主题（例如，可变字体和伪元素），这些高级主题可以进一步优化排版控制。此外，我们还会介绍 `text-indent` 和 `word-spacing` 等段落专用属性。

本系列课程将提供实际示例和提示，帮助您加深对这些 CSS 技术的理解和应用。

## `@font-face` 规则

`@font-face` CSS at-rule 在网页设计中起着重要作用，可让您指定并使用自定义字体来显示文本。`@font-face` 的优点在于其通用性：借助它，您可以从远程服务器或用户设备上安装的字体获取字体。

### 语法

```css
@font-face {
  font-family: "Trickster";
  src:
    local("Trickster"),
    url("trickster-COLRv1.otf") format("opentype") tech(color-COLRv1),
    url("trickster-outline.otf") format("opentype"),
    url("trickster-outline.woff") format("woff")
}
```

### 描述用语

- [`ascent-override`](https://developer.mozilla.org/docs/Web/CSS/@font-face/ascent-override)

  自定义上升指标，影响基线上方的空间。

- [`descent-override`](https://developer.mozilla.org/docs/Web/CSS/@font-face/descent-override)

  调整下降法指标，影响低于基线的空间。

- [`font-display`](https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display)

  根据字体的下载状态控制字体的显示行为。

- [`font-family`](https://developer.mozilla.org/docs/Web/CSS/font-family)

  为在字体相关属性中使用的字体命名。

- [`font-stretch`](https://developer.mozilla.org/docs/Web/CSS/font-stretch)

  设置可接受的水平缩放，指定为单个值或范围。

- [`font-style`](https://developer.mozilla.org/docs/Web/CSS/font-style)

  定义字体样式，支持倾斜样式的角度范围。

- [`font-weight`](https://developer.mozilla.org/docs/Web/CSS/font-weight)

  确定字体的粗细或可用粗细范围。

- [`font-feature-settings`](https://developer.mozilla.org/docs/Web/CSS/font-feature-settings)

  允许访问 OpenType 字体功能。

- [`font-variation-settings`](https://developer.mozilla.org/docs/Web/CSS/font-variation-settings)

  对可变字体设置进行微调。

- [`line-gap-override`](https://developer.mozilla.org/docs/Web/CSS/@font-face/line-gap-override)

  替换字体的默认行间距。

- [`size-adjust`](https://developer.mozilla.org/docs/Web/CSS/@font-face/size-adjust)

  对字体的轮廓和指标应用缩放比例。

- [`src`](https://developer.mozilla.org/docs/Web/CSS/@font-face/src)

  定义字体源，无论是本地还是远程。对于 `@font-face` 规则而言，这是必需的属性。结合使用 `src` 中的 `url()` 和 `local()` 是一种常用策略，即使用本地字体（如果有），还原为远程字体文件作为后备。浏览器会根据声明的顺序确定资源的优先级，因此 `local()` 通常应该在 `url()` 之前。

- [`unicode-range`](https://developer.mozilla.org/docs/Web/CSS/@font-face/unicode-range)

  限制此字体应该使用的字符。

### 说明

`@font-face` 允许设计人员使用自定义排版，从而摆脱了“网络安全”字体的限制。`local()` 函数在用户设备上搜索字体的功能可以提供不依赖于互联网连接的无缝体验。

**注意**： 如需了解兼容性策略和[有关旧版浏览器的更多详细信息](https://developer.mozilla.org/docs/Web/CSS/@font-face/src#specifying_fallbacks_for_older_browsers)，请参阅 [`src`](https://developer.mozilla.org/docs/Web/CSS/@font-face/src) 描述符文档。您还可以将 `@font-face` 嵌套在 CSS 条件组规则中。

### 字体 MIME 类型

| **格式**           | **MIME 类型** |
| :----------------- | :------------ |
| TrueType           | `font/ttf`    |
| OpenType           | `font/otf`    |
| 网络开放字体格式   | `font/woff`   |
| 网络开放字体格式 2 | `font/woff2`  |

**注意**：网络字体遵循同源政策，但可以配置为通过 HTTP 访问权限控制进行跨源使用。

**注意**：不能在 CSS 选择器块中声明 `@font-face`。

### @font-face 和 font-family 之间的区别

在 CSS 中，`@font-face` 和 `font-family` 经常被混淆，但它们的用途不同。

如前所述，`@font-face` 是一种规则，用于定义您要在 Web 应用中使用的任何自定义字体。它用于告知浏览器在哪里下载字体、如何在加载期间显示字体（使用 `font-display` 属性），并指定要下载的字符子集（使用 `unicode-range`）。

相比之下，`font-family` 是在 CSS 规则中使用的 CSS 属性，用于将特定字体或字体列表分配给元素。`font-family` 下列出的字体可以是网络安全字体、系统字体或使用 `@font-face` 定义的自定义字体。

简而言之，`@font-face` 会声明字体并为其命名，而 `font-family` 会将此声明的字体应用于 HTML 元素。

以下是同时使用这两者的示例：

```css
<table>
  <thead>
    <tr>
      <th><p><pre>
@font-face {
  font-family: "CustomFont";
  src: url("customfont.woff2") format("woff2");
}

body {
  font-family: "CustomFont", Arial, sans-serif;
}
```

在此示例中，`@font-face` 定义了“CustomFont”，并告知浏览器在哪里可以找到它。然后，`font-family` 属性会将其应用于正文元素，当“CustomFont”不可用时，使用 Arial 作为后备。

## 更改字体

<BrowseSurport code="css.properties.font-family" />

使用 [`font-family`](https://developer.mozilla.org/docs/Web/CSS/font-family) 更改文本的字体。

`font-family` 属性接受以英文逗号分隔的字符串列表，它们分别引用“特定”或“通用”字体系列。特定字体系列是带引号的字符串，如 "Helvetica"、"EB Garamond" 或 "Times New Roman"。通用字体系列包括 `serif`、`sans-serif` 和 `monospace` 等关键字（请参阅 [MDN 上选项的完整列表](https://developer.mozilla.org/docs/Web/CSS/font-family#values)）。浏览器将显示所提供列表中的第一个可用字体。

**注意** ：当浏览器从您的 `font-family` 声明选择要显示的字体时，并不会停止使用列表中的首个可用字体。而是一次只选择一个字符的字体。如果某个字符在列表中的第一个字体中不可用，该字符会移动到下一个字体，依此类推。

使用 `font-family` 时，您应指定至少一个通用字体系列，以防用户的浏览器没有您的首选字体。一般情况下，后备通用字体系列应该类似于你的首选字体：如果使用 `font-family: "Helvetica"`（一种 Sans Serif 字体系列），则后备应设为 `sans-serif` 才能匹配。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLojraG?height=470&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen yLojraG" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 470px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 使用斜体和斜体字体

<BrowseSurport code="css.properties.font-style" />
使用 [`font-style`](https://developer.mozilla.org/docs/Web/CSS/font-style) 可设置文本是否应设为斜体。`font-style` 接受以下关键字之一：`normal`、`italic` 和 `oblique`。

**注意** ：`italic` 和 `oblique` 有什么区别？答：在支持该字体的字体中，`font-style: italic` 通常是常规字体的手写版本。`font-style: oblique` 用于显示常规字体的斜体版本。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWvGRjx?height=280&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen MWvGRjx" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 280px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 将文本设为粗体

<BrowseSurport code="css.properties.font-weight" />

使用 [`font-weight`](https://developer.mozilla.org/docs/Web/CSS/font-weight) 设置文本的“粗体”。此属性接受关键字值（`normal`、`bold`）、相对关键字值（`lighter`、`bolder`）和数值（`100` 到 `900`）。

关键字 `normal` 和 `bold` 分别相当于数值 `400` 和 `700`。

关键字 `lighter` 和 `bolder` 是相对于父元素计算的。请参阅 MDN 的[相对权重含义](https://developer.mozilla.org/docs/Web/CSS/font-weight#meaning_of_relative_weights)，查看显示此值计算方式的实用图表。

**注意** ：大多数字体，尤其是[“网络安全”字体](/web/css/typography#change_the_typeface)，仅支持粗细 `400` (`normal`) 和 `700` (`bold`)。使用 `@font-face` 或 `@import` 导入字体时，您可以选择要提取的特定粗细。不过，非可变字体仅支持以 100 为单位的 `font-weight` 数值，例如 `100`、`200`、`300` 等。如果您想使用 `font-weight: 321`（举例来说），则必须使用[可变字体](/web/css/typography#variable_fonts)。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/gOxKxNz?height=580&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 执行 gOxKxNz" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 580px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 更改文字大小

<BrowseSurport code="css.properties.font-size" />
使用 [`font-size`](https://developer.mozilla.org/docs/Web/CSS/font-size) 控制文本元素的大小。此属性接受长度值、百分比和少量关键字值。

除了长度和百分比值之外，`font-size` 还接受一些绝对关键字值（`xx-small`、`x-small`、`small`、`medium`、`large`、`x-large`、`xx-large`）和几个相对关键字值（`smaller`、`larger`）。这些相对值是相对于父元素的 `font-size` 而言的。

**注意** ：`em` 和 `rem` 有什么区别？答：在 CSS 中，`em` 表示从元素父级继承的 `font-size`。例如，`font-size: 2em` 相当于父级的 `font-size` 乘以 2。`rem` 与之类似，但表示从*根元素*（例如 ``）继承的 `font-size`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/eYEroda?height=370&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 打开 eYEroda" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 370px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/vYJzYzw?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen vYJzYzw" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 更改各行之间的间距

<BrowseSurport code="css.properties.line-height" />

使用 [`line-height`](https://developer.mozilla.org/docs/Web/CSS/line-height) 指定元素中每行的高度。此属性接受数字、长度、百分比或关键字 `normal`。一般情况下，建议使用数字而非长度或百分比，以免出现继承问题。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/XWaqQjv?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen XWaqQjv" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 600px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ExvLJNx?height=820&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 提供的 Pen ExvLJNx" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 820px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 更改字符之间的间距

<BrowseSurport code="css.properties.letter-spacing" />

使用 [`letter-spacing`](https://developer.mozilla.org/docs/Web/CSS/letter-spacing) 可控制文本中字符之间的水平间距。此属性接受长度值，例如 `em`、`px` 和 `rem`。

请注意，指定的值会增加字符之间的自然间距。在下面的演示中，尝试选择一个字母，以查看其信箱大小及其随 `letter-spacing` 的变化情况。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/abyGxBz?height=560&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 执行的 Pen abyGxBz" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 560px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 更改字词之间的间距

<BrowseSurport code="css.properties.word-spacing" />

使用 [`word-spacing`](https://developer.mozilla.org/docs/Web/CSS/word-spacing) 可增加或缩短文本中各个字词之间的空格长度。此属性接受长度值，例如 `em`、`px` 和 `rem`。请注意，您指定的长度不仅是常规间距，还包括额外空间。这意味着，`word-spacing: 0` 相当于 `word-spacing: normal`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/xxLjeRG?height=280&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen xxLjeRG" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 280px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## `font` 简写形式

您可以使用简写形式 [`font`](https://developer.mozilla.org/docs/Web/CSS/font) 属性一次设置多个与字体相关的属性。可能的属性包括 [`font-family`](/web/css/typography#change_the_typeface)、[`font-size`](/web/css/typography#change_the_size_of_text)、[`font-stretch`](https://developer.mozilla.org/docs/Web/CSS/font-stretch)、[`font-style`](/web/css/typography#use_italic_and_oblique_fonts)、[`font-variant`](/web/css/typography#font-variant)、[`font-weight`](/web/css/typography#make_text_bold) 和 [`line-height`](/web/css/typography#change_the_space_between_lines)。

如需详细了解如何对这些属性进行排序，请参阅 [MDN 的 `font` 文章](https://developer.mozilla.org/docs/Web/CSS/font#syntax)。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjyvVbY?height=270&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen JjyvVbY" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 270px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 更改文字大小写

<BrowseSurport code="css.properties.text-transform" />

使用 [`text-transform`](https://developer.mozilla.org/docs/Web/CSS/text-transform) 可以修改文本的大小写，而无需更改底层 HTML。此属性接受以下关键字值：`uppercase`、`lowercase` 和 `capitalize`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/qBXYwqb?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 执行 qBXYwqb 操作" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 为文本添加下划线、上划线和插入行

<BrowseSurport code="css.properties.text-decoration" />

使用 [`text-decoration`](https://developer.mozilla.org/docs/Web/CSS/text-decoration) 可在文本中添加行。下划线是最常用的，但您也可以在文本上方或文本中直接添加行！

`text-decoration` 属性是下文详述的更具体的属性的简写形式。

[`text-decoration-line`](https://developer.mozilla.org/docs/Web/CSS/text-decoration-line) 属性接受关键字 `underline`、`overline` 和 `line-through`。您还可以为多行指定多个关键字。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/LYjmvbN?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen LYjmvbN" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 460px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

[`text-decoration-color`](https://developer.mozilla.org/docs/Web/CSS/text-decoration-color) 属性用于设置 `text-decoration-line` 中所有装饰的颜色。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/oNedOYL?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen oNedOYL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 460px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

[`text-decoration-style`](https://developer.mozilla.org/docs/Web/CSS/text-decoration-style) 属性接受关键字 `solid`、`double`、`dotted`、`dashed` 和 `wavy`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/dyzeLOp?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 打开 dyzeLOp" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 460px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

[`text-decoration-thickness`](https://developer.mozilla.org/docs/Web/CSS/text-decoration-thickness) 属性接受任何长度值，并从 `text-decoration-line` 设置所有装饰的描边宽度。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/VwzxNmm?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上由 web-dot-dev 执行 VwzxNmm" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 460px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`text-decoration` 属性是上述所有属性的简写形式。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzxLMpN?height=460&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 执行 YzxLMpN" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 460px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

**注意** ：使用 [`text-underline-position`](https://developer.mozilla.org/docs/Web/CSS/text-underline-position) 可指定 `text-decoration: underline` 的下划线。此属性不适用于 `overline` 或 `line-through`。

## 添加文本缩进

<BrowseSurport code="css.properties.text-indent" />

使用 [`text-indent`](https://developer.mozilla.org/docs/Web/CSS/text-indent) 可对文本块进行缩进。此属性采用长度（例如 `10px`、`2em`）或所包含块宽度的百分比。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/RwZyOoV?height=300&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 执行 RwZyOoV" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 处理溢出或隐藏的内容

<BrowseSurport code="css.properties.text-overflow" />

使用 [`text-overflow`](https://developer.mozilla.org/docs/Web/CSS/text-overflow) 指定隐藏内容的表示方式。有两个选项：`clip`（默认），用于在溢出点截断文本；以及 `ellipsis`，用于在溢出点显示省略号 (...)。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRvdLNv?height=250&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen GRvdLNv" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 控制空格

<BrowseSurport code="css.properties.white-space" />

[`white-space`](https://developer.mozilla.org/docs/Web/CSS/white-space) 属性用于指定应如何处理元素中的空格。有关详情，请参阅[有关 MDN 的 `white-space` 文章](https://developer.mozilla.org/docs/Web/CSS/white-space)。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/PoKegbO?height=970&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen PoKegbO" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 970px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`white-space: pre` 可用于渲染 [ASCII 图片](https://en.wikipedia.org/wiki/ASCII_art)或精心缩进的代码块。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/OJjZGbz?height=440&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen OJjZGbz" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 440px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 控制断字方式

<BrowseSurport code="css.properties.word-break" />

使用 [`word-break`](https://developer.mozilla.org/docs/Web/CSS/word-break) 更改单词在溢出行时“断开”的方式。默认情况下，浏览器不会拆分单词。对 `word-break` 使用关键字值 `break-all` 会指示浏览器在必要时在单个字符处拆分字词。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BadxEQY?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上由 web-dot-dev 执行 BadxEQY 测试" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 更改文本对齐方式

<BrowseSurport code="css.properties.text-align" />

使用 [`text-align`](https://developer.mozilla.org/docs/Web/CSS/text-align) 指定块或表格单元格元素中文本的水平对齐方式。此属性接受关键字值 `left`、`right`、`start`、`end`、`center`、`justify` 和 `match-parent`。

值 `left` 和 `right` 分别会将文本与代码块的左侧和右侧对齐。

使用 `start` 和 `end` 表示当前书写模式下文本行的开始和结束位置。因此，`start` 映射到英语的 `left`，以及从右到左 (RTL) 的阿拉伯脚本中的 `right`。它们是逻辑对齐，如需了解详情，请参阅我们的[逻辑属性](/web/css/logical-properties)模块。

使用 `center` 将文本与文本块的中心对齐。

`justify` 的值会自动整理文本并更改字词间距，使文本与文本块的左右边缘对齐。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/bGrMJBM?height=570&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen bGrMJBM" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 570px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 更改文本方向

<BrowseSurport code="css.properties.direction" />

使用 [`direction`](https://developer.mozilla.org/docs/Web/CSS/direction) 设置文本方向：`ltr`（默认为从左到右）或 `rtl`（从右到左）。有些语言（如阿拉伯语、希伯来语或波斯语）是从右向左书写的，因此应使用 `direction: rtl`。对于英语和所有其他从左到右书写的语言，请使用 `direction: ltr`。

**注意** ：通常，您应使用 [HTML 属性 `dir`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir)（而非 `direction`）。如需了解详情，请查看[此 StackOverflow 讨论](https://stackoverflow.com/a/5375907)。

## 更改文字流动

<BrowseSurport code="css.properties.writing-mode" />

使用 [`writing-mode`](https://developer.mozilla.org/docs/Web/CSS/writing-mode) 更改文本的流动和排列方式。默认值为 `horizontal-tb`，但您也可以为想要水平显示的文本将 `writing-mode` 设置为 `vertical-lr` 或 `vertical-rl`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNEJWoK?height=680&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen WNEJWoK" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 680px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 更改文本方向

<BrowseSurport code="css.properties.text-orientation" />

使用 [`text-orientation`](https://developer.mozilla.org/docs/Web/CSS/text-orientation) 可指定文本中字符的方向。此属性的有效值包括 `mixed` 和 `upright`。仅当 [`writing-mode`](/web/css/typography#change_the_flow_of_text) 设置为 `horizontal-tb` 以外的值时，此属性才相关。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/QWMrPGV?height=660&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上由 web-dot-dev 执行 QWMrPGV" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 660px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 为文本添加阴影

<BrowseSurport code="css.properties.text-shadow" />

使用 [`text-shadow`](https://developer.mozilla.org/docs/Web/CSS/text-shadow) 为文本添加阴影。此属性需要三种长度（`x-offset`、`y-offset` 和 `blur-radius`）和一种颜色。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOLxRVe?height=530&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上由 web-dot-dev 执行 jOLxRVe" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 530px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

如需了解详情，请参阅[“阴影”单元中的 `text-shadow` 部分](/web/css/shadows#text_shadow)。

## 可变字体

通常情况下，“标准”字体需要导入不同版本的字体（如粗体、斜体或精简）的不同文件。可变字体是指在一个文件中包含某种字体的多个不同变体的字体。


## 伪元素

**关键术语** ：*伪元素*是元素的一部分，您可以使用 CSS 关键字来定位元素，而无需添加更多 HTML。如需深入了解此主题，请查看[伪元素相关单元](/web/css/pseudo-elements)！

## `::first-letter` 和 `::first-line` 伪元素

<BrowseSurport code="css.selectors.first-letter" />

[`::first-letter`](https://developer.mozilla.org/docs/Web/CSS/::first-letter) 和 [`::first-line`](https://developer.mozilla.org/docs/Web/CSS/::first-line) 伪元素分别定位到文本元素的第一行和第一行。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/KKvRYNr?height=270&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen KKvRYNr" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 270px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## `::selection` 伪元素

<BrowseSurport code="css.selectors.selection" />

使用 [`::selection`](https://developer.mozilla.org/docs/Web/CSS/::selection) 伪元素来更改用户选择文本的外观。

使用此伪元素时，只能使用某些 CSS 属性：`color`、`background-color`、`text-decoration`、`text-shadow`、`stroke-color`、`fill-color`、`stroke-width`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWvGRbx?height=390&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen MWvGRbx" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 390px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## font-variant

<BrowseSurport code="css.properties.font-variant" />

[`font-variant`](https://developer.mozilla.org/docs/Web/CSS/font-variant) 属性是许多 CSS 属性的简写形式，这些属性可让您选择 `small-caps` 和 `slashed-zero` 等字体变体。此简写形式包含的 CSS 属性包括 [`font-variant-alternates`](https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates)、[`font-variant-caps`](https://developer.mozilla.org/docs/Web/CSS/font-variant-caps)、[`font-variant-east-asian`](https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian)、[`font-variant-ligatures`](https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures) 和 [`font-variant-numeric`](https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric)。如需详细了解其使用情况，请点击每项媒体资源上的链接。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/eYEroBa?height=260&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 打开 eYEroBa" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 260px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 资源

- [字体最佳做法](/articles/font-best-practices)：介绍了导入字体、呈现字体以及在网页上使用字体的其他最佳做法。
- [MDN 基础文本和字体样式设置](https://developer.mozilla.org/docs/Learn/CSS/Styling_text/Fundamentals)。