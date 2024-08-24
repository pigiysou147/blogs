# 字体最佳实践 



本文介绍了字体的性能最佳做法。网页字体通过多种方式影响性能：

- **延迟文本渲染**：如果网页字体尚未加载，浏览器通常会延迟文本渲染。在很多情况下，这会延迟 [First Contentful Paint (FCP)](https://web.dev/articles/fcp?hl=zh-cn)。在某些情况下，这会延迟 [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp?hl=zh-cn)。
- **布局偏移**：字体交换的做法有可能[导致布局偏移](https://web.dev/articles/debug-layout-shifts?hl=zh-cn#identifying_the_cause_of_a_layout_shift)，从而影响 [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls?hl=zh-cn)。当网页字体及其后备字体在页面上占用的空间量不同时，就会发生这些布局偏移。

本文分为三个部分：**字体加载**、**字体提交**和**字体呈现**。每个部分都介绍了字体生命周期这一特定方面的工作原理，并提供了相应的最佳实践。

## 字体加载

字体通常是重要资源，因为如果没有字体，用户可能无法查看网页内容。因此，字体加载最佳实践通常侧重于确保尽早加载字体。应特别注意从第三方网站加载的字体，因为下载这些字体文件需要单独的连接设置。

如果您不确定是否及时请求了网页的字体，请查看 Chrome 开发者工具中 **Network** 面板中的 **Timing** 标签页，了解更多信息。

![开发者工具中“Timing”标签页的屏幕截图](https://web.dev/static/articles/font-best-practices/image/screenshot-the-timing-ta-d801da01f1419.png?hl=zh-cn)

### 了解 `@font-face`

在深入了解字体加载方面的最佳实践之前，请务必先了解 [`@font-face`](https://developer.mozilla.org/docs/Web/CSS/@font-face) 的工作原理以及这对字体加载的影响。

[`@font-face`](https://developer.mozilla.org/docs/Web/CSS/@font-face) 声明是使用任何网页字体的重要部分。它至少要声明用于引用字体的名称，并指明相应字体文件的位置。

```css
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
}
```

一个常见的误解是，遇到 `@font-face` 声明时会请求字体，但事实并非如此。`@font-face` 声明本身不会触发字体下载。只有在页面使用的样式引用了某个字体时，系统才会下载该字体。例如：

```css
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
}

h1 {
  font-family: "Open Sans"
}
```

换言之，在上面的示例中，仅当网页包含 `` 元素时，系统才会下载 `Open Sans`。

**注意** ：加载字体的其他方法是 [`preload`](https://developer.mozilla.org/docs/Web/HTML/Preloading_content) 资源提示和 [Font Loading API](https://web.dev/articles/optimize-webfont-loading?hl=zh-cn#the_font_loading_api)。

因此，在考虑字体优化时，务必要考虑样式表与字体文件本身一样多。更改样式表的内容或提供方式会对字体到达的时间产生重大影响。同样，移除未使用的 CSS 和拆分样式表可以减少网页加载的字体数量。

### 内嵌字体声明

在主文档的 `` 中内嵌字体声明和其他关键样式，而不是将它们添加到外部样式表中，大多数网站会大大受益。这样，由于无需等待外部样式表下载，浏览器就能更快地发现字体声明。

```html
<head>
  <style>
    @font-face {
        font-family: "Open Sans";
        src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
    }

    body {
        font-family: "Open Sans";
    }

    ...etc.

  </style>
</head>
```

**注意** ：请注意，如果仅内嵌了部分 CSS，则浏览器仍然需要等待所有 CSS 加载完毕，然后才能发现是否需要字体。

另请注意，我们不建议自行内嵌字体文件。内嵌字体等大型资源可能会延迟主文档及其发现其他资源的时间。

内嵌关键 CSS 是一种更高级的技术，并非所有网站都能实现。显而易见，它具有更高的性能优势，但这需要额外的流程和构建工具，以确保正确内联必要的 CSS（理想情况下只有关键 CSS），并且以不阻塞渲染的方式提供任何其他 CSS。

### 预先连接到关键第三方来源

如果您的网站从第三方网站加载字体，强烈建议您使用 [`preconnect`](https://developer.mozilla.org/docs/Web/HTML/Link_types/preconnect) 资源提示尽早与第三方来源建立连接。资源提示应放置在文档的 `` 中。以下资源提示为加载字体样式表设置了连接。

```html
<head>
  <link rel="preconnect" href="https://fonts.com">
</head>
```

如需预连接用于下载字体文件的连接，请添加使用 `crossorigin` 属性的单独 `preconnect` 资源提示。与样式表不同，字体文件必须通过 [CORS 连接](https://developer.mozilla.org/docs/Web/HTTP/CORS#what_requests_use_cors)发送。

```html
<head>
  <link rel="preconnect" href="https://fonts.com">
  <link rel="preconnect" href="https://fonts.com" crossorigin>
</head>
```

使用 `preconnect` 资源提示时，请注意字体提供程序可能会提供来自不同来源的样式表和字体。例如，下面就是将 `preconnect` 资源提示用于 Google Fonts 的方式。

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
```

**注意** ：[Google Fonts](https://fonts.google.com/?hl=zh-cn) 提供了通过 `` 标记或 `@import` 语句加载字体的选项。与使用 `@import` 版本相比，`` 代码段包含 `preconnect` 资源提示，因此可能会导致样式表提交速度更快。这些 `` 标记应尽可能靠前的位置放置。

### 在使用 `preload` 加载字体时要小心

尽管 `preload` 在使字体在网页加载过程的早期阶段就能够非常有效地被发现，但这代价是会占用资源加载其他资源中的浏览器资源。

内联字体声明和调整样式表可能是一种更有效的方法。这些调整更接近于解决延迟字体的根本原因，而不仅仅是提供解决方法。

此外，使用 `preload` 作为字体加载策略也应谨慎，因为它会绕过浏览器的某些内置内容协商策略。例如，`preload` 会忽略 `unicode-range` 声明，如果使用得当，则应仅将其用于加载一种字体格式。

但是，在使用外部样式表时，预加载最重要的字体可能非常有效，因为浏览器要等到很久之后才会发现是否需要该字体。

## 字体传递

更快的字体传递可加快文本渲染速度。此外，如果足够早提交字体，这还有助于消除因字体交换而导致的布局偏移。

### 使用自托管字体

从纸面上看，使用自托管字体应该可以实现更好的效果，因为它消除了第三方连接设置。然而，在实践中，这两个选项之间的性能差异并不明显：例如，[网络年历](https://almanac.httparchive.org/en/2020/fonts#fig-7)发现使用第三方字体的网站比使用第一方字体的字体的渲染速度更快。

如果您在考虑使用自托管字体，请确认您的网站使用的是[内容分发网络 (CDN)](https://web.dev/articles/content-delivery-networks?hl=zh-cn) 和 [HTTP/2](https://web.dev/articles/content-delivery-networks?hl=zh-cn#http2_and_http3)。如果不使用这些技术，自托管字体不太可能提供更出色的性能。如需了解详情，请参阅[内容分发网络](https://web.dev/articles/content-delivery-networks?hl=zh-cn)。

**注意** ：如果您不确定使用自托管字体能否获得更好的性能，请尝试从您自己的服务器提供字体文件，并比较传输时间（包括连接设置）与第三方字体的传输时间。如果您的服务器速度较慢，请不要使用 CDN，也不使用 HTTP/2，那么自托管字体的性能就不太可能提高。

如果您使用的是自托管字体，建议您同时应用一些第三方字体提供商通常会自动提供的字体文件优化，例如字体子集和 WOFF2 压缩。实施这些优化所需的工作量将在一定程度上取决于您的网站支持的语言。请特别注意，针对 [CJK 语言](https://en.wikipedia.org/wiki/CJK_characters)优化字体可能会特别具有挑战性。

### 使用 WOFF2

在所有新式字体字体中，[WOFF2](https://www.w3.org/TR/WOFF2/) 是最新的字体，它的浏览器支持最广，压缩效果最好。由于使用 Brotli，WOFF2 的压缩率比 WOFF 高 30%，可减少要下载的数据，从而提升性能。

由于浏览器支持，专家现在建议仅使用 WOFF2：

> 事实上，我们认为现在也是时候声明一下：仅使用 WOFF2，而忽略其他一切。
>
> 这样可以大幅简化您的 CSS 和工作流程，还能防止意外下载字体重复或错误。现在，所有平台均支持 WOFF2。因此，除非您需要支持真正古老的浏览器，否则只需使用 WOFF2。如果无法做到这一点，请考虑完全不向这些旧版浏览器提供任何网络字体。如果您制定了可靠的后备策略，这就不会成为问题。使用旧版浏览器的访问者只会看到您的后备字体。

### 将字体设为子集

字体文件通常包含针对它们支持的所有各种字符的大量[字形](https://en.wikipedia.org/wiki/Glyph)。但是，您可能并不需要网页上的所有字符，您可以通过将字体子集化来减小字体文件的大小。

`@font-face` 声明中的 [`unicode-range`](https://developer.mozilla.org/docs/Web/CSS/@font-face/unicode-range) 描述符会告知浏览器某种字体可用于哪些字符。

```css
@font-face {
    font-family: "Open Sans";
    src: url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
    unicode-range: U+0025-00FF;
}
```

如果网页包含一个或多个与 Unicode 范围匹配的字符，则会下载字体文件。`unicode-range` 通常用于根据网页内容使用的语言提供不同的字体文件。

`unicode-range` 通常与子集内嵌技术结合使用。子集字体包括原始字体文件中包含的一小部分字形。例如，网站可能为拉丁文和西里尔字符生成单独的子集字体，而不是向所有用户提供所有字符。每种字体的字形数量变化很大：拉丁字体每种字体的字形数量通常为 100 至 1,000 个；[CJK](https://en.wikipedia.org/wiki/CJK_characters) 字体可以有超过 1 万个字符。移除未使用的字形可以显著减小字体的文件大小。

某些字体提供商可能会自动提供具有不同子集的不同版本的字体文件。例如，[Google Fonts](https://fonts.google.com/?hl=zh-cn) 默认执行此操作：

```css
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
```

改用自托管解决方案后，这项优化很容易被忽略，从而导致本地字体文件变大。

如果字体提供程序允许，您还可以通过 API（[Google Fonts 通过提供 `text` 参数](https://developers.google.com/fonts/docs/getting_started?hl=zh-cn#specifying_script_subsets)支持此功能）或手动修改字体文件，然后进行自托管，手动对字体进行子集内嵌。用于生成字体子集的工具包括[子字体](https://github.com/Munter/subfont)和[字形](https://github.com/zachleat/glyphhanger)。不过，请务必[查看您所用字体的许可](https://subsetting.xyz/)，以便允许进行子集内嵌和自托管。

### 减少网页字体

能够传递最快的字体是其最初未请求的字体。您可以通过系统字体和可变字体这两种方式来减少您网站上使用的网页字体数量。

系统字体是用户设备界面使用的默认字体。系统字体通常因操作系统和版本而异。由于字体已安装，因此不需要下载。系统字体特别适合用于正文。

如需在 CSS 中使用系统字体，请将 `system-ui` 列为字体系列：

```css
font-family: system-ui
```

**可变字体**背后的理念是，一个可变字体可以用来替换多个字体文件。可变字体的工作原理是定义一个“默认”字体，字体样式，并提供用于操控字体的"axes"。例如，具有 `Weight` 轴的可变字体可用于实现字体，以前需要为浅色、常规、粗体和加粗使用单独的字体。

**注意：** 我们经常将“Times New Roman”称为“Times New Roman”和“Helvetica”作为字体显示。但从技术上讲，这属于字体系列。系列由样式组成，样式是字体的特定变体（例如，浅色、中等或粗斜体）。字体文件包含单一样式，除非它是可变字体。字体是底层设计，可以用数字字体表示，也可以用实体字体（如雕刻的木块或金属）来表示。

并非所有字体都会从改用可变字体中受益。可变字体包含许多样式，因此文件大小通常大于只包含一种样式的各个不可变字体。在使用（且需要使用）各种字体样式和粗细的网站中，使用可变字体带来的益处最大的网站。

## 字体渲染

当面对尚未加载的网页字体时，浏览器会面临以下困境：浏览器是否应该等到网页字体生成后再渲染文本？还是应该使用后备字体来渲染文本，直到网页字体送达为止？

不同的浏览器处理这种情况的方式不同。默认情况下，如果未加载关联的网页字体，基于 Chromium 的浏览器和 Firefox 浏览器将阻止文本渲染，最多 3 秒；Safari 会无限期地阻止文本呈现。

您可以使用 `font-display` 属性来配置此行为。这一选择可能会产生重大影响：`font-display` 可能会影响 LCP、FCP 和布局稳定性。

### 选择合适的`font-display`策略

[`font-display`](https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display) 用于告知浏览器在关联的网页字体尚未加载时应如何进行文本渲染。它根据每个字体进行定义。

```css
@font-face {
  font-family: Roboto, Sans-Serif
  src: url(/fonts/roboto.woff) format('woff'),
  font-display: swap;
}
```

`font-display` 有五个可能的值：

| **值** | **屏蔽期**   | **交换周期** |
| :----- | :----------- | :----------- |
| 自动   | 因浏览器而异 | 因浏览器而异 |
| 屏蔽   | 2-3 秒       | 无限         |
| 交换   | 0 毫秒       | 无限         |
| 后备   | 100 毫秒     | 3 秒         |
| 可选   | 100 毫秒     | 无           |

- **阻止期**：阻止期从浏览器请求网页字体时开始算起。在阻止期内，如果网页字体不可用，字体将以不可见的后备字体渲染，因此文本将对用户不可见。如果相应字体在阻止期结束时不可用，则会以后备字体呈现。
- **交换期**：交换期晚于阻止期。如果网页字体在交换期内可用，该字体将进行“交换”位置

`font-display` 策略反映了关于性能和美观性取舍的不同观点。因此，很难提供一种推荐的方法，因为这确实取决于个人偏好、网页字体对网页和品牌的重要性，以及换到后出现的字体会多么突兀。

对于大多数网站，以下三种策略最为适用：

- **如果您最看重性能**：请使用 `font-display: optional`。这是“效果最好”的方法：文本渲染的延迟不超过 100 毫秒，并且保证不会发生与字体交换相关的布局偏移。不过，这种方法的缺点是，如果网页字体延迟送达，系统将不会使用此类字体。
- **如果快速显示文本是首要任务，但仍想确保使用网页字体**：请使用 `font-display: swap`，但务必尽早提供字体，以免造成布局偏移。这种方法的缺点是，当字体延迟到来时，会出现令人不适的移动。
- **如果确保文本以网页字体显示**：请使用 `font-display: block`，但务必尽早提供字体，以便最大限度地缩短文本的延迟时间。这样做的缺点是，初始文本显示会延迟。请注意，尽管如此，它仍可能会导致布局偏移，因为文本实际上是不可见的，因此后备字体空间会被用于预留空间。加载网页字体后，可能需要有差异空间，因此需要进行移位。不过，与 `font-display: swap` 相比，这可能是一个不那么突兀的移位，因为文本本身不会被察觉到移位。

。

**注意** ：在交换字体时，`font-display: auto`、`font-display: block`、`font-display: swap` 和 `font-display: fallback` 都有可能导致布局偏移。不过，在这些方法中，`font-display: swap` 对文本渲染的延迟最少。因此，当文本需要尽快显示但最终以网页字体形式呈现时，它可能是首选方法。

另请注意，您可以结合使用这两种方法：例如，将 `font-display: swap` 用于品牌宣传和其他视觉上与众不同的页面元素；为正文文本中使用的字体使用 `font-display: optional`。

**注意** ：适用于传统网页字体的 `font-display` 策略在处理图标字体时效果欠佳。图标字体的后备字体在外观上通常与图标字体明显不同，并且其字符所传达的含义可能完全不同。因此，图标字体更有可能导致明显的布局偏移。此外，使用后备字体可能并不实用。如果可能，最好将图标字体替换为 SVG（这样做也更有利于无障碍功能）。较新版本的热门图标字体通常支持 SVG。

### 减少后备字体和网页字体之间的切换

为了降低 CLS 影响，您可以使用新的 `size-adjust` 属性。如需了解详情，请参阅[有关 CSS `size-adjust` 的文章](https://web.dev/articles/css-size-adjust?hl=zh-cn)。这是我们工具集中的新增功能，因此目前更为高级，需要手动编写。但绝对值得一试，并关注未来的工具改进！

## 总结

网络字体仍是性能瓶颈，但我们有越来越多的选项来支持我们对其进行优化，以尽可能减少这种瓶颈。