---
date: 2023-02-01
category: 图片

---
# 规范性语法

bookmark_border

`<picture>` 元素本身不会渲染任何内容，而是充当内部 `<img>` 元素的决策引擎，告知它要渲染什么内容。`<picture>` 遵循已由 `<audio>` 和 `<video>` 元素设置的先例：包含各个 `<source>` 元素的封装容器元素。

```html
<picture>
   <source …>
   <source …>
    <img …>
</picture …>
```

该内部 `<img>` 还为不支持自适应图片的旧版浏览器提供了可靠的回退模式：如果用户的浏览器无法识别 `<picture>` 元素，该元素会被忽略。系统随后也会舍弃 `<source>` 元素，因为在没有 `<video>` 或 `<audio>` 父级的情况下，浏览器要么根本无法识别它们，要么没有关于这些元素的有意义的上下文。不过，任何浏览器都可以识别内部 `<img>` 元素，并且其 `src` 中指定的来源会按预期呈现。

## 使用`<picture>`的“艺术指导”图片

根据页面中图片的大小更改图片的内容或宽高比，通常称为“艺术导向型”自适应图片。`srcset` 和 `sizes` 可在隐形的情况下工作，根据用户浏览器的指示无缝替换源代码。不过，您有时需要更改不同断点之间的来源，以更好地突出内容，如同调整页面布局一样。 例如：中心焦点较小的全宽标题图片在大视口上可能效果较好：

![标题宽度图片：一株长春花，四周环绕着叶子和茎，有一只蜜蜂来访。](images/a-header-width-image-a-p-9d3a969232cde.png)

但是，当缩小尺寸以适应小视口时，图片的中心焦点可能会丢失：

![长春花标题宽度图片（按比例缩小）。蜜蜂几乎看不到。](images/a-header-width-image-a-p-a272cd48c084e.png)

这些图片来源的主题是相同的，但为了在视觉上更好地聚焦于该主题，您需要让图片来源的比例在不同的断点之间发生变化。例如，更紧密地缩放图片中心，并剪裁掉边缘的部分细节：

![近距离拍摄的长春花色花卉剪裁。](images/a-zoomed-crop-the-periw-a24648a2c221.png)

这种“剪裁”可以通过 CSS 来实现，但会导致用户请求组成该图片的所有数据，即使他们可能永远看不到这些数据。

每个 `source` 元素都有一些属性来定义选择该 `source` 的条件：`media`（接受媒体查询）和 `type`（接受媒体类型（以前称为“MIME 类型”）。系统会选择来源顺序中与用户当前浏览上下文匹配的第一个 `<source>`，并且该 `source` 上 `srcset` 属性的内容将用于确定该上下文的适当候选对象。在此示例中，第一个具有与用户视口尺寸匹配的 `media` 属性的 `source` 将被选中：

```html
<picture>
  <sourcemedia="(min-width: 1200px)"srcset="wide-crop.jpg">
  <imgsrc="close-crop.jpg"alt="…">
</picture>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/poZNxyN?height=300&amp;theme-id=light&amp;default-tab=html%2Ccss%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen poZNxyN"></iframe>

您应始终按顺序指定内部 `img`，如果所有 `source` 元素都与其 `media` 或 `type` 条件不匹配，则图片将充当“默认”来源。如果您使用的是 `min-width` 媒体查询，则需要首先拥有最大的来源，如前面的代码所示。使用 `max-width` 媒体查询时，应将最小的来源放在最前面。

```html
<picture>
   <sourcemedia="(max-width: 400px)"srcset="mid-bp.jpg">
   <sourcemedia="(max-width: 800px)"srcset="high-bp.jpg">
   <imgsrc="highest-bp.jpg"alt="…">
</picture>
```

当您根据您指定的条件选择来源时，`source` 上的 `srcset` 属性会传递给 `<img>`，就像在 `<img>` 本身中定义属性一样。这意味着，您也可以自由使用 `sizes` 优化 Art Director 图片来源。

```html
<picture>
   <sourcemedia="(min-width: 800px)"srcset="high-bp-1600.jpg 1600w, high-bp-1000.jpg 1000w">
   <sourcesrcset="lower-bp-1200.jpg 1200w, lower-bp-800.jpg 800w">
   <imgsrc="fallback.jpg"alt="…"sizes="calc(100vw - 2em)">
</picture>
```

当然，如果图片的比例因所选 `<source>` 元素而异，就会引发性能问题：`<img>` 仅支持单个 `width` 和 `height` 属性，但[省略这些属性可能会导致用户体验明显下降](/web/images/prescriptive##)。为了说明这一点，在 HTML 规范的基础上，[相对新近](https://github.com/whatwg/html/pull/5894)但[得到了很好的支持](https://developer.mozilla.org/docs/Web/HTML/Element/source#browser_compatibility)，允许对 `<source>` 元素使用 `height` 和 `width` 属性。这些调整可以减少布局偏移，就像在 `<img>` 上一样，并在布局中为选择的任何 `<source>` 元素预留适当的空间。

```html
<picture>
   <source
      media="(min-width: 800px)"
      srcset="high-bp-1600.jpg 1600w, high-bp-1000.jpg 1000w"
      width="1600"
      height="800">
   <imgsrc="fallback.jpg"
      srcset="lower-bp-1200.jpg 1200w, lower-bp-800.jpg 800w"
      sizes="calc(100vw - 2em)"
      width="1200"
      height="750"
      alt="…">
</picture>
```

请务必注意，艺术设计不仅仅能用于根据视口大小来做出决策，而且应该使用更多功能，因为使用 `srcset`/`sizes` 可以更高效地处理大多数情况。例如，选择更适合用户偏好的配色方案的图片来源：

```html
<picture>
   <sourcemedia="(prefers-color-scheme: dark)"srcset="hero-dark.jpg">
   <imgsrcset="hero-light.jpg">
</picture>
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWBbPJm?height=500&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="web-dot-dev 上的 Pen MWBbPJm"></iframe>

### `type` **属性**

借助 `type` 属性，您可以使用 `<picture>` 元素的单一请求决策引擎，仅向支持这些格式的浏览器提供图片格式。

正如您在[图片格式和压缩](/web/images/avif#browser_support)中所学的，浏览器无法解析的编码甚至无法被识别为图片数据。

在引入 `<picture>` 元素之前，用于提供新图片格式的最可行前端解决方案要求浏览器先请求并尝试解析图片文件，然后再确定是否舍弃该文件并加载后备图片。一个常见的示例是包含以下几行的脚本：

```html
<imgsrc="image.webp"
    data-fallback="image.jpg"
    onerror="this.src=this.getAttribute('data-fallback');this.onerror=null;"
    alt="...">
```

使用此模式时，仍会在每个浏览器中发出 `image.webp` 请求，这意味着，对于不支持 WebP 的浏览器，传输是浪费的。如果浏览器无法解析 WebP 编码，则会抛出 `onerror` 事件，并将 `data-fallback` 值交换为 `src`。这是一个非常浪费的解决方案，但是，这种方法是唯一可用的前端选项。请注意，浏览器在任何自定义脚本有机会运行（甚至被解析）之前就开始发出图片请求，因此我们不能抢占此过程。

`<picture>` 元素经过专门设计，可避免此类冗余请求。虽然在没有请求的情况下，浏览器仍无法识别不支持的格式，但 `type` 属性会事先就源代码编码向浏览器发出警告，以便它决定是否发出请求。

在 `type` 属性中，您需要提供每个 `<source>` 的 `srcset` 属性中指定的图片来源的[媒体类型（以前称为 MIME 类型）](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types)。这为浏览器提供了立即确定是否可以在不发出任何外部请求的情况下解码该 `source` 提供的候选图片所需的全部信息。如果系统无法识别媒体类型，则忽略 `<source>` 及其所有候选项，然后浏览器会继续执行操作。

```html
<picture>
 <sourcetype="image/webp"srcset="pic.webp">
 <imgsrc="pic.jpg"alt="...">
</picture>
```

在本例中，任何支持 WebP 编码的浏览器都将识别 `<source>` 元素的 `type` 属性中指定的 `image/webp` 媒体类型，并选择该 `<source>`，并且由于我们只在 `srcset` 中提供了一个候选媒体，会指示内部 `<img>` 请求、传输和呈现 `pic.webp`。任何不支持 WebP 的浏览器都会忽略 `source`，并且不存在任何相反的指令，`<img>` 将呈现 `src` 的内容，就像自 1992 年以来所做的那样。当然，您无需在此处使用 `type="image/jpeg"` 指定第二个 `<source>` 元素，您可以假定 JPEG 普遍支持 JPEG。

无论用户的浏览环境如何，通过单次文件传输即可实现上述所有目的，并且不会将带宽浪费在无法呈现的图片源上。这也是前瞻性思维：更新更高效的文件格式会自带媒体类型，得益于 `picture`（无需 JavaScript、没有服务器端依赖项，以及 `<img>` 的所有速度），我们才能充分利用这些媒体类型。

## 自适应图片的未来

此处讨论的所有标记模式都是标准化方面的重大提升：像 `<img>` 一样，更改那些已建立且对网络的核心的功能的功能绝非易事，至少可以说，这些更改旨在解决一系列问题。如果您觉得这些标记模式有很大的改进空间，那么您完全没有问题。从一开始，这些标准就旨在为未来的技术提供基准。

所有这些解决方案都必定依赖于标记，以便包含在来自服务器的初始载荷中，并及时到达浏览器来请求图片来源，这一限制导致 `sizes` 属性显而易见。

不过，由于网络平台中引入了这些功能，因此我们引入了延迟图片请求的原生方法。 在了解页面布局之前，系统不会请求具有 `loading="lazy"` 属性的 `<img>` 元素，以便将针对用户初始视口之外的图片的请求推迟到渲染页面过程中的后续请求，从而可能避免不必要的请求。由于在发出这些请求时浏览器就完全能理解页面布局，因此建议了 [`sizes="auto"` 属性作为 HTML 规范的补充](https://github.com/whatwg/html/pull/8008)，以避免在这些情况下手动编写的 `sizes` 属性。

此外，还陆续向 `<picture>` 元素添加了一些新增内容，以配合我们对页面布局样式设置的一些特别激动人心的更改。虽然视口信息是制定高级布局决策的基础，但它妨碍了我们采用完全组件级的开发方法，也就是说，一种组件可以放到页面布局的任何部分，其样式响应该组件本身所占空间。这个问题促使我们创建了 *容器查询[](https://www.oddbird.net/2022/08/18/cq-syntax/)* ：一种根据父级容器的大小来设置元素样式的方法，而不是只根据视口来设置样式。

虽然容器查询语法刚刚稳定，浏览器支持也[非常有限](https://caniuse.com/css-container-queries)，但在撰写本文时，添加支持 `<picture>` 元素的浏览器技术为 `<picture>` 元素提供执行相同操作的方法：一种潜在的 `container` 属性，它允许根据 `<picture>` 元素的 `<img>` 占用的空间（而不是根据视口的大小）选择 `<source>` 选择条件。

如果这听起来有点含糊，但有充分的理由：这些 Web 标准讨论仍在进行中，但还远远没有定好 - 您目前还不能使用它们。

虽然响应式图片标记有望随着时间的推移变得更易于使用，就像任何网络技术一样，但有许多服务、技术和框架可帮助减轻这种手写标记的负担。在下一个单元中，我们会介绍如何将学到的有关图片格式、压缩和响应式图片的所有信息集成到现代开发工作流中。
