---
date: 2023-02-01
category: 性能优化
tags:
 - 图片性能
---
# 图片性能

**重要提示** ：下面是图片性能的一般概览。如需深入了解该主题，请参阅[“学习图片”课程](/blogs/web/images/)，详细了解特定文件格式和[高性能图片工作流](/blogs/web/images/automating)等内容。图片通常是网络上[最庞大](https://almanac.httparchive.org/en/2022/page-weight#fig-8)且[最普遍](https://almanac.httparchive.org/en/2022/page-weight#fig-3)的资源。因此，优化图片可以显著提升您网站上的广告效果。 在大多数情况下，优化图片意味着通过减少发送的字节数来减少网络时间，但您也可以通过传送适合用户设备大小的图片，从而优化发送给用户的字节数。

您可以使用 [`<img>` 或 `<picture>` 元素](/blogs/web/html/images)或 CSS [`background-image` 属性](https://developer.mozilla.org/docs/Web/CSS/background-image)将图片添加到网页中。

**注意** ：在少数情况下，可以通过将 `<svg>` 标记直接插入网页的 HTML 中，将 SVG 图片直接内嵌到网页中。这样便可在 JavaScript 中直接访问 SVG 的子元素。鉴于此模块重视图片性能，因此不涵盖 SVG 图片的这一用例。

无论您是内嵌 SVG 还是从 HTML `<img>` 元素加载 SVG 图片，了解何时使用 SVG 图片都会有所帮助。 由于 SVG 是一种[矢量图片格式](https://en.wikipedia.org/wiki/Vector_graphics)，因此在图片内容为线条图、图表和图表以及没有精细照片细节的其他情况下最有用。

如果您在网站上使用 SVG 图片，请注意 SVG 格式是基于文本的，因此适用缩减和压缩等技术。还可以使用 [svgo](https://github.com/svg/svgo)（一种基于 Node.js 的 SVG 优化工具）进行有损优化。

## 映像大小

使用图片资源时，您可以执行的第一项优化是以正确的尺寸显示图片。在本例中，“尺寸”一词是指图片的尺寸。在不考虑其他变量的情况下，在 500 x 500 像素容器中显示的图片的最佳大小为 500 x 500 像素。例如，使用 1000 像素的方形图片意味着图片大小将根据需要翻倍。

不过，选择合适的图片大小涉及许多变量，这使得在任何情况下选择适当的图片大小的任务都非常复杂。2010 年 iPhone 4 发布时，屏幕分辨率 (640x960) 是 iPhone 3 (320x480) 的两倍。不过，iPhone 4 的屏幕的物理尺寸与 iPhone 3 大致相同。

以更高的分辨率显示所有内容会显著缩小文本和图片的大小，确切地说是先前大小的一半。取而代之的是 1 个像素变成了 2 个[设备像素](https://en.wikipedia.org/wiki/Device-independent_pixel)。这称为“设备像素比 (DPR)”。[](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)iPhone 4 以及此后发布的许多 iPhone 型号的 DPR 为 2。

回顾之前的例子，如果设备 DPR 为 2，并且图片显示在 500x500 像素的容器中，那么现在使用 1000 像素的方形图片（称为“固有尺寸”）是最佳尺寸。[](https://developer.mozilla.org/docs/Glossary/Intrinsic_Size)同样，如果设备的 DPR 为 3，则最佳尺寸是 1500 像素的方形图片。

在大多数情况下，[人眼无法受益于 3 的 DPR](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio)，因此您可以使用尺寸小于最佳尺寸的图片，而且对于大多数用户而言，图片质量不会出现明显下降。### `srcset`

`<img>` 元素支持 [`srcset`](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-srcset) 属性，该属性可让您指定浏览器可能会使用的可能图片来源的列表。指定的每个图片来源都必须包含图片网址，以及宽度或像素密度描述符。

```html
<img
  alt="An image"
  width="500"
  height="500"
  src="/image-500.jpg"
  srcset="/image-500.jpg 1x, /image-1000.jpg 2x, /image-1500.jpg 3x"
>
```

上述 HTML 代码段使用像素密度描述符来提示浏览器在 DPR 为 1 的设备上使用 `image-500.png`，在 DPR 为 2 的设备上使用 `image-1000.jpg`，在 DPR 为 3 的设备上使用 `image-1500.jpg`。

虽然这看起来很干燥，但在为给定页面选择最佳图片时，屏幕的 DPR 并不是唯一的考虑因素。页面的*布局*是另一个考虑因素。

### `sizes`

上述解决方案仅在您在所有视口上以相同的 CSS 像素大小显示图片时才有效。在许多情况下，网页的布局以及容器的大小会根据用户的设备而变化。

借助 [`sizes` 属性](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-sizes)，您可以指定一组来源尺寸，其中每个来源尺寸都由[媒体条件](https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries#syntax)和值组成。`sizes` 属性用于描述图片的预期显示尺寸（以 CSS 像素为单位）。与 `srcset` 宽度描述符结合使用时，浏览器可以选择哪种图片来源最适合用户的设备。

```html
<img
  alt="An image"
  width="500"
  height="500"
  src="/image-500.jpg"
  srcset="/image-500.jpg 500w, /image-1000.jpg 1000w, /image-1500.jpg 1500w"
  sizes="(min-width: 768px) 500px, 100vw"
>
```

在前面的 HTML 代码段中，`srcset` 属性指定了浏览器可供选择的候选图片列表（以英文逗号分隔）。列表中的每个候选字符都包含图片的网址，后跟表示图片固有宽度的语法。图片的“固有尺寸”就是其尺寸。例如，描述符 `1000w` 表示图片的固有宽度为 1000 像素宽。

浏览器会使用这些信息评估 `sizes` 属性中的媒体条件，并且会指示在设备的视口宽度超过 768 像素时以 500 像素显示图片。在较小的设备上，图片以 `100vw`（即整个视口宽度）显示。

**注意** ：如果您不熟悉 `vw` CSS 单元，请参阅[大型、小型和动态视口单元](https://web.dev/articles/viewport-units)了解详情。然后，浏览器可以将这些信息与 `srcset` 图片来源列表结合起来，找出最佳图片。例如，如果用户使用的移动设备屏幕宽度为 320 像素，DPR 为 3，则图片会显示在 `320 CSS pixels x 3 DPR = 960 device pixels` 中。在此示例中，尺寸最接近的图片是 `image-1000.jpg`，其固有宽度为 1000 像素 (`1000w`)。

**注意** ：如果没有 `sizes` 属性，`srcset` 宽度描述符将不起作用。同样，如果您省略 `srcset` 宽度描述符，`sizes` 属性也不会执行任何操作。## 文件格式

浏览器支持多种不同的图片文件格式。与 PNG 或 JPEG 相比，新型图片格式（例如 [WebP](https://web.dev/articles/serve-images-webp) 和 [AVIF](https://web.dev/articles/compress-images-avif)）可提供更好的压缩效果，从而缩小图片文件大小，从而缩短下载时间。通过以现代格式提供图片，您可以[缩短资源的加载时间](https://web.dev/articles/optimize-lcp#3_reduce_resource_load_time)，从而降低 [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) 速度。

WebP 是一种[受到广泛支持](https://caniuse.com/webp)的格式，适用于所有新型浏览器。WebP 的压缩效果通常比 JPEG、PNG 或 GIF 更好，既能提供[有损](https://en.wikipedia.org/wiki/Lossy_compression)压缩，也提供[无损压缩](https://en.wikipedia.org/wiki/Lossless_compression)。即使在使用有损压缩时，WebP 也支持 Alpha 通道透明度，而 JPEG 编解码器没有此功能。

AVIF 是一种较新的图片格式，虽然没有 WebP 那么广泛支持，但它的[跨浏览器支持相当得心应](https://caniuse.com/avif)。AVIF 同时支持有损压缩和无损压缩，并且在某些情况下，与 JPEG 相比，[测试](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4)的节省幅度超过了 50%。AVIF 还提供[广色域 (WCG)](https://en.wikipedia.org/wiki/Gamut#Wide_color_gamut) 和[高动态范围 (HDR)](https://en.wikipedia.org/wiki/High_dynamic_range#Imaging) 功能。

## 压缩

涉及图像时，有两种压缩类型：

1. [有损压缩](https://en.wikipedia.org/wiki/Lossy_compression)
2. [无损压缩](https://en.wikipedia.org/wiki/Lossless_compression)

有损压缩的工作原理是通过[量化](https://cs.stanford.edu/people/eroberts/courses/soco/projects/data-compression/lossy/jpeg/coeff.htm)降低图片准确性，并且可能会使用[色度子采样](https://en.wikipedia.org/wiki/Chroma_subsampling)舍弃其他颜色信息。有损压缩在噪声和颜色多样的高密度图像（通常是内容相似的照片或图像）上最有效。这是因为，有损压缩生成的“伪影”在此类详细图像中不太可能被注意到。但是，对于包含清晰边缘（例如线条艺术、同样简洁的细节或文本）的图像，有损压缩的效果可能不太理想。有损压缩可应用于 JPEG、WebP 和 AVIF 图片。

**注意** ：使用有损压缩时，请务必确认压缩的图片是否符合您的质量标准。例如，如果在平面颜色上方包含高对比度彩色文字，则容易出现色度二次采样造成的伪影。无损压缩可以通过在不丢失数据的情况下压缩图片来减小文件大小。无损压缩根据与相邻像素之间的差异来描述像素。无损压缩适用于 GIF、PNG、WebP 和 AVIF 图片格式。

您可以使用 [Squoosh](https://squoosh.app/)、[ImageOptim](https://imageoptim.com/) 或图片优化服务压缩图片。压缩时，没有适用于所有情况的通用设置。建议的方法是尝试使用不同的压缩级别，直到您在图片质量和文件大小之间找到适当的折衷方案为止。某些高级图片优化服务可以自动为您执行此操作，但所有用户都可能无法在经济上可行。

## `<picture>` **元素**

`<picture>` 元素可让您更灵活地指定多个候选图片：

```html
<picture>
  <source type="image/avif" srcset="image.avif">
  <source type="image/webp" srcset="image.webp">
  <img
    alt="An image"
    width="500"
    height="500"
    src="/image.jpg"
  >
</picture>
```

当您在 `<picture>` 元素中使用 `<source>` 元素时，您可以添加对 AVIF 和 WebP 图片的支持，但如果浏览器不支持现代格式，则回退到更兼容的旧图片格式。使用此方法时，浏览器会选择指定匹配的第一个 `<source>` 元素。如果它可以以该格式渲染图像，则会使用该图像。否则，浏览器会移至下一个指定的 `<source>` 元素。在上述 HTML 代码段中，AVIF 格式优先于 WebP 格式，如果 AVIF 和 WebP 都不受支持，则回退到 JPEG 格式。

`<picture>` 元素需要嵌套在其中的 `<img>` 元素。`alt`、`width` 和 `height` 属性是在 `<img>` 中定义的，无论选择哪个 `<source>` 都是如此。

`<source>` 元素还支持 `media`、`srcset` 和 `sizes` 属性。与前面的 `<img>` 示例类似，这些变量会向浏览器指示要在不同视口上选择哪个图片。

**注意** ：虽然 `srcset` 属性会为浏览器提供关于要使用哪张图片的提示，但针对 `<source>` 元素的媒体查询是浏览器要跟随的 *命令* 。

```html
<picture>
  <source
    media="(min-resolution: 1.5x)"
    srcset="/image-1000.jpg 1000w, /image-1500.jpg 1500w"
    sizes="(min-width: 768px) 500px, 100vw"
  >
  <img
    alt="An image"
    width="500"
    height="500"
    src="/image-500.jpg"
  >
</picture>
```

`media` 属性接受[媒体条件](https://developer.mozilla.org/docs/Web/CSS/Media_Queries/Using_media_queries#syntax)。在前面的示例中，设备的 DPR 用作媒体条件。DPR 大于或等于 1.5 的任何设备都将使用第一个 `<source>` 元素。`<source>` 元素告知浏览器，在视口宽度大于 768 像素的设备上，所选候选图片会以 500 像素宽显示。在较小的设备上，这会占据整个视口宽度。通过组合 `media` 和 `srcset` 属性，您可以更精细地控制要使用的图片。

下表对此进行了说明，下表评估了多种视口宽度和设备像素比：

| 视口宽度（像素） | 1 DPR   | 1.5 DPR  | 2 DPR    | 3 DPR    |
| ------------------ | --------- | ---------- | ---------- | ---------- |
| 320              | 500.jpg | 500.jpg  | 500.jpg  | 1000.jpg |
| 480              | 500.jpg | 500.jpg  | 1000.jpg | 1500.jpg |
| 560              | 500.jpg | 1000.jpg | 1000.jpg | 1500.jpg |
| 1024             | 500.jpg | 1000.jpg | 1000.jpg | 1500.jpg |
| 1920             | 500.jpg | 1000.jpg | 1000.jpg | 1500.jpg |

DPR 为 1 的设备会下载`image-500.jpg`图片（包括大多数桌面设备用户），他们会以[外屏尺寸](https://www.w3.org/TR/css-sizing-3/#extrinsic) 500 像素宽查看该图片。另一方面，DPR 为 3 的移动用户会下载可能更大的 `image-1500.jpg`，这与在 DPR 为 3 的桌面设备上使用的图片相同。

```html
<picture>
  <source
    media="(min-width: 560px) and (min-resolution: 1.5x)"
    srcset="/image-1000.jpg 1000w, /image-1500.jpg 1500w"
    sizes="(min-width: 768px) 500px, 100vw"
  >
  <source
    media="(max-width: 560px) and (min-resolution: 1.5x)"
    srcset="/image-1000-sm.jpg 1000w, /image-1500-sm.jpg 1500w"
    sizes="(min-width: 768px) 500px, 100vw"
  >
  <img
    alt="An image"
    width="500"
    height="500"
    src="/image-500.jpg"
  >
</picture>
```

在本例中，调整 `<picture>` 元素以包含额外的 `<source>` 元素，从而针对具有高 DPR 的宽幅设备使用不同的图片：

| 视口宽度（像素） | 1 DPR   | 1.5 DPR     | 2 DPR       | 3 DPR       |
| ------------------ | --------- | ------------- | ------------- | ------------- |
| 320              | 500.jpg | 500.jpg     | 500.jpg     | 1000-sm.jpg |
| 480              | 500.jpg | 500.jpg     | 1000-sm.jpg | 1500-sm.jpg |
| 560              | 500.jpg | 1000-sm.jpg | 1000-sm.jpg | 1500-sm.jpg |
| 1024             | 500.jpg | 1000.jpg    | 1000.jpg    | 1500.jpg    |
| 1920             | 500.jpg | 1000.jpg    | 1000.jpg    | 1500.jpg    |

通过这个额外的查询，您可以看到 `image-1000-sm.jpg` 和 `image-1500-sm.jpg` 会显示在小视口上。这些额外的信息可让您进一步压缩图片，因为在该大小和密度下，压缩伪影在这样的大小和密度下并不明显，而且不会影响桌面设备上的图片质量。

或者，通过调整 `srcset` 和 `media` 属性，您可以避免在小视口上提供大型图片：

```html
<picture>
  <source
    media="(min-width: 560px)"
    srcset="/image-500.jpg, /image-1000.jpg 2x, /image-1500.jpg 3x"
  >
  <source
    media="(max-width: 560px)"
    srcset="/image-500.jpg 1x, /image-1000.jpg 2x"
  >
  <img
    alt="An image"
    width="500"
    height="500"
    src="/image-500.jpg"
  >
</picture>
```

在上述 HTML 代码段中，移除了宽度描述符，改为使用设备像素比描述符。在移动设备上提供的图片仅限于 `/image-500.jpg` 或 `/image-1000.jpg`，即使在 DPR 为 3 的设备上也是如此。

## 如何管理复杂性

使用自适应图片时，您会发现每张图片都有很多不同的大小变体和格式。上面的示例中使用了每种尺寸的变体，但不包括 AVIF 和 WebP。您应该有多少个变体？与许多工程问题一样，答案往往是“视情况而定”。

虽然使用尽可能多的变体来提供最佳的匹配效果可能很诱人，但每个额外的图片变体都会有代价，而且使用浏览器缓存的效率会降低。如果只有一个变体，每个用户都会收到相同的图片，因此可以非常高效地缓存该变体。

另一方面，如果有许多变体，则每个变体都需要另一个缓存条目。如果变体的缓存条目已过期，并且需要重新从源服务器提取图片，则服务器费用可能会增加，并可能会降低性能。

除此之外，您的 HTML 文档的大小会随着版本的变化而增长。您可能会发现，每张图片需要传送好几千字节的 HTML。

### 根据 `Accept` **请求标头提供图片**

[`Accept`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Accept) HTTP 请求标头会告知服务器，用户的浏览器可以理解哪些类型的内容。服务器可以使用此信息来提供最佳图片格式，而无需向 HTML 响应添加额外的字节。

```javascript
if(request.headers.accept){
  if(request.headers.accept.includes('image/avif')){
    return reply.from('image.avif');
  }elseif(request.headers.accept.includes('image/webp')){
    return reply.from('image.webp');
  }
}

return reply.from('image.jpg');
```

**重要提示** ：`Accept` 请求标头通常仅传达 HTML 资源的请求中支持的图片类型。如果您选择根据此标头的值传送资源，请务必在额外的 [`Vary` 响应标头](https://developer.mozilla.org/docs/Web/HTTP/Headers/Vary)中指定它，以便共享缓存（比如内容分发网络 [CDN]）可以考虑对同一网址的不同响应。上述 HTML 代码段是代码的简化版本，您可以将其添加到服务器的 JavaScript 后端，以选择并提供最佳的图片格式。如果请求 `Accept` 标头包含 `image/avif`，则提供 AVIF 图片。否则，如果 `Accept` 标头包含 `image/webp`，则系统会提供 WebP 图片。如果这两种情况都不是，则会投放 JPEG 图片。

在几乎所有类型的网络服务器中，您都可以根据 `Accept` 请求标头的内容修改响应。例如，您可以[使用 `mod_rewrite` 根据 `Accept` 标头重写 Apache 服务器上的图片请求](https://web.dev/articles/serve-images-webp#reading_the_http_accept_header)。

这与[图片内容分发网络 (CDN)](https://web.dev/articles/image-cdns) 中的行为不同。图片 CDN 是优化图片以及根据用户的设备和浏览器发送最佳格式的绝佳解决方案。

关键是要找到平衡点，生成合理数量的候选图片，并衡量对用户体验的影响。不同的图片可能会给出不同的结果，对每个图片应用的优化取决于其在页面中的大小以及用户使用的设备。例如，在电子商务商品详情页面上，全宽主打图片可能需要比缩略图更多的变体。

## 延迟加载

您可以使用 [`loading`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/loading) 属性告知浏览器在图片显示在视口中时延迟加载图片。`lazy` 的属性值会告知浏览器：图片在进入（或靠近）视口时才会下载。这样可以节省带宽，让浏览器可以优先使用渲染视口中已有的关键内容所需的资源。

**重要提示** ：如需深入了解延迟加载图片，请阅读[延迟加载图片和 `<iframe>` 元素](/blogs/web/performance/lazy-load-images-and-iframe-elements)模块。## `decoding`

[`decoding`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/decoding) 属性会告知浏览器应如何解码图片。值 `async` 会告知浏览器，图片可以异步解码，有可能缩短呈现其他内容的时间。值 `sync` 会告知浏览器，此图片应与其他内容同时呈现。`auto` 的默认值允许浏览器决定什么最适合用户。

**注意** ：`decoding` 属性的影响可能仅在非常大的高分辨率图片上才会显现出来，因为此类图片所需的解码时间要长得多。您还可以在以程序化方式将图片插入 DOM 时，对采用 JavaScript 的 `HTMLImageElement` 实例使用 [`decode` 方法](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/decode)。如需详细了解 `decode` 属性和 `decode` 方法，请参阅[图像解码属性实际上有什么作用？](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/)## 图片演示

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-images?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的“Learn-performance-images”"></iframe>
