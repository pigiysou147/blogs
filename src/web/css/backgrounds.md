---
date: 2024-03-31
category: css
tags:
  - background
---
# 背景

## 背景

每个 CSS 框的背后都有一个称为背景层的专用层。CSS 提供了多种方式对其进行有意义的更改，包括允许多种背景。

背景图层距离用户最远，呈现在从其 `padding-box` 区域开始的方框内容后面。这样可以使背景图层完全不与边框重叠。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/argyleink/embed/BaLedvd?height=700&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Argyleink 在 Codepen 上创作的 Pen BaLedvd" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 背景颜色
<BrowseSurport code="css.properties.background-color" />
可以应用到背景图层的最简单的一种效果就是设置[颜色](/blogs/web/css/color)。`background-color` 的初始值为 `transparent`，允许父级的内容可见。在背景层上设置的有效颜色位于该元素上绘制的其他元素后面。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRvqQZZ?height=850&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen GRvqQZZ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 背景图片

<BrowseSurport code="css.properties.background-image" />

在 `background-color` 图层的顶部，您可以使用 `background-image` 属性添加背景图片。`background-image` 接受以下各项：

* 使用 `url` CSS 函数时的图片网址或[数据 URI](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)。
* 由渐变 CSS 函数动态创建的图片。

### 使用 `url` **CSS 函数设置背景图片**

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjJNNro?height=525&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen JjJNNro" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### CSS 渐变背景

您可以使用多种[渐变](/blogs/web/css/gradients) CSS 函数生成在传递两种或更多颜色时的背景图片。

无论使用哪种渐变函数，生成的图片[本身的大小](/blogs/web/css/box-model#content_and_sizing)都会与可用空间大小相匹配。

展示利用渐变函数应用背景图片的示例：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/oNeLZWa?height=600&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen oNeLZWa" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 重复的背景图片

<BrowseSurport code="css.properties.background-repeat" />


默认情况下，背景图片会水平和垂直重复以填充背景图层的整个空间。

如需更改此行为，请使用具有以下某个值的 `background-repeat` 属性：

* `repeat`：图片会在可用空间内重复，并根据需要进行剪裁。
* `round`：图片会水平和垂直重复，以便在可用空间中容纳尽可能多的实例。随着可用空间增加，图片会拉伸，并且在拉伸图片的原始宽度的一半后，系统会进行压缩，以添加更多图片实例。
* `space`：图片会水平和垂直重复，以便在不剪裁的情况下适应尽可能多的实例，从而根据需要留出图片实例空间。重复图片会触及背景层所占空间的边缘，并在这些图片之间均匀分布空白。

借助 `background-repeat` 属性，您可以单独设置 x 轴和 y 轴的行为。第一个参数设置水平重复行为，第二个参数设置垂直重复行为。

如果您使用单个值，该值将同时应用于水平和垂直重复。

该简写形式还提供方便的单字词选项，可让您的意图更加明确。

值 `repeat-x` 仅水平重复图片；效果等同于 `repeat no-repeat`。

以下演示演示了 `background-repeat` 属性的这些功能：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/KKvMmjb?height=1100&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen KKvMmjb" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 背景位置

<BrowseSurport code="css.properties.background-position" />


您可能已经注意到，当网站上的某些图片使用 `background-repeat: no-repeat` 声明设置样式时，此类图片会显示在其容器的左上角。

背景图片的初始位置为左上角。借助 `background-position` 属性，您可以通过偏移图片位置来更改此行为。

与 `background-repeat` 一样，`background-position` 属性可让您分别沿 x 轴和 y 轴放置图片，并且默认情况下使用两个值。

使用 CSS 长度和百分比时，第一个参数对应横轴，第二个参数对应纵轴。

只使用关键字时，关键字的顺序无关紧要：

正确做法

```
background-position: left 50%;
```

正确做法

```
background-position: top left;
```

正确做法

```
background-position: left top;
```

对于与不同排名轴相关联的关键字，顺序无关紧要。

错误做法

```
background-position:50% left;
```

当 CSS 值与关键字一起使用时，顺序很重要。第一个值表示横轴，第二个值表示纵轴。

错误做法

```
background-position: left right;
```

您不能同时使用与同一轴相关联的关键字。

`background-position` 属性也有一个方便的 1 值简写形式；省略的值会解析为 `50%`。以下示例使用 `background-position` 属性接受的关键字来演示这一点：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzxWQqx?height=950&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen YzxWQqx" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

除了默认的两个形参形式和一个形参形式之外，`background-position` 属性最多还接受四个形参；

使用 3 个或 4 个参数时，必须在 CSS 长度或百分比前面加上 `top`、`left`、`right` 或 `bottom` 关键字，这样浏览器才能计算偏移应从 CSS 框的哪边开始。

使用三个参数时，CSS 长度或值可以是第二个或第三个参数，其他两个参数是关键字；成功的关键字将用于确定 CSS 长度或值对应的偏移值。指定的另一个关键字的偏移量设置为 0。

正确做法

```
background-position: bottom 88% right;
```

正确做法

```
background-position: right bottom 88%;
```

错误做法

```
background-position:88% bottom right;
```

使用三个或更多参数时，CSS 长度值必须以 `top`、`right`、`bottom` **或** `left` **关键字开头。**

正确做法

```
background-position: bottom 88% right 33%;
```

正确做法

```
background-position: right 33% bottom 88%;
```

错误做法

```
background-position:88%33% bottom left;
```

使用三个或更多参数时，CSS 长度值必须以 `top`、`right`、`bottom` **或** `left` **关键字开头。**

如果将 `background-position: top left 20%` 应用于 CSS 背景图片，图片就会放置在框顶部，`20%` 值表示距框左侧（在 x 轴上）20% 的偏移量。

如果对 CSS 背景图片应用 `background-position: top 20% left`，则 20% 值表示相对于 CSS 框顶部（在 y 轴上）的偏移 20%，并且图片会放置在框的左侧。

当使用四个参数时，这两个关键字将与两个值配对，这些值对应于针对每个指定关键字源的偏移量。如果对背景图片应用 `background-position: bottom 20% right 30%`，则背景图片位置距离 CSS 框右侧 20%，距离 CSS 框右侧 30%。

以下演示演示了此行为：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/porbwrM?height=500&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen porbwrM" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

以下是更多示例，说明如何混合使用 CSS 和关键字值来使用 `background-position` 属性：

**注意 ** ：如需详细了解与定位背景相关的细微差别，请参阅 [MDN 上的 `background-position`](https://developer.mozilla.org/docs/Web/CSS/background-position)。## 背景大小

<BrowseSurport code="css.properties.background-size" />


`background-size` 属性用于设置背景图片的尺寸；默认情况下，背景图片的尺寸取决于其固有（实际）宽度、高度和宽高比。

`background-size` 属性使用 CSS 长度和百分比值或特定关键字。该属性接受最多两个参数，对应于允许您单独更改背景的宽度和高度。

`background-size` 属性接受以下关键字：

* `auto`：当单独使用时，背景图片的大小取决于其固有宽度和高度；当将 `auto` 与宽度（第一个参数）或高度（第二个参数）的其他 CSS 值一起使用时，系统会根据需要调整设置为 `auto` 的尺寸，以保持图片的自然宽高比。这是 `background-size` 属性的默认行为。
* `cover`：覆盖整个背景图层区域。这可能意味着图片被拉伸或剪裁。
* `contain`：调整图片大小以填充空间，而不进行拉伸或剪裁。因此，除非将 `background-repeat` 设置为 `no-repeat`，否则系统可能会保留空白区域，从而导致图片重复显示。

后一个 2 旨在独立使用，无需其他参数。

以下演示演示了这些关键字的实际运用：

演示如何将这些关键字应用于 `background-size`：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzxWQYY?height=700&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Pen YzxWQYY（由 Codepen 上的 web-dot-dev 提供）" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 背景附件


<BrowseSurport code="css.properties.background-attachment" />


借助 `background-attachment` 属性，您可以在层在屏幕上可见后修改背景图片（背景层的一部分的图片）的固定位置行为。

它接受 3 个关键字：`scroll`、`fixed`和`local`。

`background-attachment` 属性的默认行为是 `scroll` 的初始值。当需要更多空间时，图片会随背景层中的相应空间一起移动，具体取决于 CSS 框的边界。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/mdwwzOe?height=1000&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen mdwzOe" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

使用值 `fixed` 可将背景图片的位置固定在视口中。

一旦背景层图片最初占据的空间需要滚动（或渲染）到屏幕外，背景层中的图片就会固定在背景层中的原始位置，直到整个图层被视口滚动出屏幕为止。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWoozvN?height=1000&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen MWoozvN" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`local` 关键字可让您相对于元素的内容固定背景图片的位置。现在，当背景图片在 CSS 框的内外层呈现时（通常是由于滚动、2D 或 3D 转换造成的）会沿着它们占据的空间移动。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNExZmK?height=1000&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen WNExZmK" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 后台源

<BrowseSurport code="css.properties.background-origin" />


借助 `background-origin` 属性，您可以修改与特定框关联的背景区域。该属性接受的值对应于 Box 的 `border-box`、`padding-box` 和 `content-box` 区域。

通过以下演示试用这些选项：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ExvyXeZ?height=650&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen ExvyXeZ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 背景剪辑

<BrowseSurport code="css.properties.background-clip" />


`background-clip` 属性用于控制背景图层上可以看到的内容，而不管 `background-origin` 属性创建的边界如何。

与 `background-origin` 类似，可以指定的区域为 `border-box`、`padding-box` 和 `content-box`，分别对应于可以渲染 CSS 背景图层的位置。使用这些关键字时，如果背景的呈现区域超出指定区域，则会被裁剪或裁剪。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/vYJKZba?height=650&amp;theme-id=dark&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen vYJKZba" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`background-clip` 属性还接受 `text` 关键字，该关键字将背景裁剪至不超过内容框中的文本。要使这种效果在 CSS 框中的实际文本中显而易见，文本必须部分或完全透明。

这是一项相对较新的属性，在撰写本文时，Chrome 和大多数浏览器都需要 `-webkit-` 前缀才能使用此属性。

<BrowseSurport code="css.properties.background-clip" />


<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/qBjjweL?height=650&amp;theme-id=dark&amp;default-tab=result%2Ccss&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen qBjjweL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

**注意 ** ：此属性与在 CSS 框中同时设置 `background-clip: text` 不兼容。## 多种背景

如本单元开始时所述，背景层允许定义多个子层。为简单起见，我将这些子图层称为背景。

从上到下定义了多个背景；第一个背景距离用户最近，最后一个背景距离用户最远。

浏览器将定义的唯一背景或最后一层指定为 *最终的背景层* 。只有此图层可以分配 `background-color`。

**注意 ** ：考虑到 Web 的不可预测性，背景图片可能无法加载。在最后一层设置背景颜色可确保文本形成良好的对比度，等等。如果重要的背景层无法加载，等等。使用大多数与背景相关的 CSS 属性（以英文逗号分隔）即可单独配置多个图层，如下面的代码段和实际演示所示。

```css
background-image:url("https://assets.codepen.io/7518/pngaaa.com-1272986.png"),
    url("https://assets.codepen.io/7518/blob.svg"),
    linear-gradient(hsl(191deg,40%,86%), hsla(191deg,96%,96%,0.5));
  background-size: contain, cover, auto;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:50%50%,10%50%,0%0%;
  background-origin: padding-box, border-box, content-box;
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/dyRzQBz?height=650&amp;theme-id=dark&amp;default-tab=css&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen dyRzQBz" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 背景简写

为了更轻松地设置框的背景层的样式（尤其是在需要多个背景层时），可以使用遵循以下特定模式的简写形式：

```css
background:
  <background-image>
  <background-position>/<background-size>?
  <background-repeat>
  <background-attachment>
  <background-origin>
  <background-clip>
  <background-color>?
```

：请务必注意，简写形式中省略的所有背景属性都会设置为其初始值。在声明多个背景时，顺序非常重要。必须同时提供位置值和尺寸值（以正斜线 (`/`) 分隔）。如果以正确的顺序声明出发地和剪辑行为，您可以充分利用对这两者都有效的关键字设置

以下声明对背景进行裁剪，并从内容框生成背景：

```css
background:url("https://assets.codepen.io/7518/blob.svg")50%
      50%/ contain no-repeat content-box;
```

了解这些简写语义后，可将之前代码段的背景相关声明重写为：

```css
background:url("https://assets.codepen.io/7518/pngaaa.com-1272986.png")50%50%/contain no-repeat padding-box,url("https://assets.codepen.io/7518/blob.svg")10%50%/ cover border-box, linear-gradient(hsl(191deg,40%,86%), hsla(191deg,96%,96%,0.5))0%0%/ cover no-repeat content-box ;
```
