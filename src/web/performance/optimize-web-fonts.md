---
date: 2023-02-01
category: 性能优化
tags:
 - 字体
---
# 优化网页字体

在本单元中，您将了解一些优化网页字体的方法。

网络字体会影响网页在加载时和呈现时的性能。 较大的字体文件可能需要一段时间才能下载完毕，并且会对 [First Contentful Paint (FCP)](https://web.dev/articles/fcp) 产生负面影响，而不正确的 [`font-display` 值](https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display)则可能会导致不必要的布局偏移，进而导致网页的[Cumulative Layout Shift (CLS)](https://web.dev/articles/cls)。

在讨论优化网页字体之前，了解浏览器如何发现这些字体会很有帮助，有助于您了解 CSS 如何在某些情况下阻止检索不必要的网页字体。

## 发现广告系列

页面的网络字体是使用 `@font-face` 声明在样式表中定义的：

```css
@font-face {
  font-family:"Open Sans";
  src:url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2");
}
```

上述代码段定义了一个名为 `"Open Sans"` 的 `font-family`，并告知浏览器在哪里可以找到相应的网页字体资源。为了节省带宽，浏览器在确定当前页面的布局需要网页字体之前，不会下载该字体。

```css
h1 {
  font-family:"Open Sans";
}
```

在上述 CSS 代码段中，浏览器会在解析网页的 HTML 中的 `<h1>` 元素时下载 `"Open Sans"` 字体文件。

### `preload`

如果您的 `@font-face` 声明是在外部样式表中定义的，浏览器只有在下载该样式表之后才能开始下载这些声明。这使得网络字体资源被延迟发现，但有一些方法可以帮助浏览器更快地发现网络字体。

您可以使用 `preload` 指令发起对网页字体资源的提前请求。`preload` 指令可让网页字体在网页加载初期被检测到，浏览器会立即开始下载这些字体，无需等待样式表完成下载和解析。`preload` 指令不会等到网页上需要相应字体时再执行。

```html
<!-- The `crossorigin` attribute is required for fonts—even
     self-hosted ones, as fonts are considered CORS resources. -->
<link rel="preload" as="font" href="/fonts/OpenSans-Regular-webfont.woff2" crossorigin>
```

**注意** ：请谨慎使用 `preload` 指令。过度使用 `preload` 指令可能会中断其他关键资源的带宽。如果使用过多，`preload` 指令可能会下载当前网页不需要的字体

此外，请务必注意，字体属于 CORS 资源。因此，预加载字体时*必须*指定 `crossorigin` 属性，即使这些字体是自托管的字体也是如此。

### 内嵌 `@font-face` **声明**

您可以使用 [`<style>` 元素](https://developer.mozilla.org/docs/Web/HTML/Element/style)在 HTML 的 `<head>` 中内嵌会阻止渲染的 CSS（包括 `@font-face` 声明），以便使字体在网页加载的早期阶段被检测到。在这种情况下，浏览器会在网页加载初期发现网页字体，因为它不需要等待外部样式表下载。

**注意** ：只有在所有阻止渲染的资源加载完毕后，浏览器才会开始下载字体文件。这意味着，如果您已内嵌 `@font-face` 声明，但其余的 CSS 位于外部样式表中，浏览器仍然需要等待外部样式表下载完毕。内嵌 `@font-face` 声明优于使用 `preload` 提示，因为浏览器只会下载呈现当前网页所需的字体。这样可以消除下载未使用的字体的风险。

**重要提示** ：不建议将字体文件本身内嵌到您的 CSS 或任何其他资源中，因为这样做所需的 [base64 编码](https://developer.mozilla.org/docs/Glossary/Base64)方案会产生较大的载荷，而内嵌可能会导致[延迟预加载扫描程序](https://web.dev/articles/preload-scanner#inlining_too_many_resources)发现其他关键资源。## 下载

在发现网络字体并确保当前页面布局需要这些字体后，浏览器可以下载这些字体。网页字体的数量、编码和文件大小会显著影响浏览器下载和呈现网页字体的速度。

### 自行托管网页字体

网络字体可通过第三方服务（如 [Google Fonts](https://fonts.google.com/)）提供，也可以在源站上自行托管。使用第三方服务时，您的网页需要先打开与提供商网域的连接，然后才能开始下载所需的网页字体。这可能会延迟网页字体的发现和后续下载。

使用 `preconnect` 资源提示可以减少此开销。通过使用 `preconnect`，您可以告知浏览器比浏览器通常更快打开跨源连接：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">  
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

上述 HTML 代码段会提示浏览器与 `fonts.googleapis.com` 建立连接，并与 `fonts.gstatic.com` 建立 [CORS](https://developer.mozilla.org/docs/Web/HTTP/CORS) 连接。某些字体提供程序（如 Google Fonts）会提供来自不同来源的 CSS 和字体资源。

您可以通过自行托管网页字体来消除对第三方连接的需要。在大多数情况下，自托管网络字体比从跨源下载字体更快。如果您打算自行托管网页字体，请检查您的网站是否使用了[内容分发网络 (CDN)](https://web.dev/articles/content-delivery-networks)、[HTTP/2](https://web.dev/articles/performance-http2) 或 HTTP/3，并为网站所需的网页字体设置正确的缓存标头。

### 仅使用 WOFF2 和 WOFF2

[WOFF2](https://www.w3.org/TR/WOFF2/) 获得了[广泛的浏览器支持](https://caniuse.com/woff2)和最佳压缩效果，比 WOFF 高出 30%。文件缩小可加快下载速度。WOFF2 格式通常是现代浏览器实现完全兼容性所需的唯一格式。

**注意** ：只有在需要支持旧版浏览器时，您才可能需要使用其他格式（例如 WOFF、EOT 和 TTF）。 如果您*不需要*支持旧版浏览器，则没有理由依赖 WOFF2 以外的网页字体格式。### 设置网页字体子集

网络字体通常包含各种不同的字形，需要这些字形来表示不同语言中使用的各种字符。如果您的网页仅以一种语言（或使用单一字母表）提供内容，您可以通过子集内嵌来减小网页字体的大小。此操作通常通过指定数字或 [Unicode 码位](https://en.wikipedia.org/wiki/Code_point#In_Unicode)范围来实现。

子集是原始网页字体文件中包含的减少的字形集。例如，您的网页可能会提供部分拉丁字符，而不是提供所有字形。根据所需的子集，移除字形可以显著减小字体文件的大小。

某些网页字体提供商（如 Google Fonts）通过使用查询字符串参数自动提供子集。例如，`https://fonts.googleapis.com/css?family=Roboto&subset=latin` 网址会提供仅包含拉丁字母的 Roboto 网页字体的样式表。

如果您决定自行托管网页字体，下一步就是使用[字形符](https://github.com/zachleat/glyphhanger)或[子字体](https://github.com/Munter/subfont)等工具自行生成并托管这些子集。

但是，如果您没有足够的能力自行托管自己的网页字体，则可以通过指定仅包含网站所需的 Unicode 代码点的额外 `text` 查询字符串参数，将 Google Fonts 提供的网页字体子集。例如，如果您网站上的显示网页字体只需要短语“Welcome”所需的少量字符，您可以通过以下网址使用 Google Fonts 请求这部分字体：`https://fonts.googleapis.com/css?family=Monoton&text=Welcome`。如果这种极端子集内嵌对您的网站有用，则可以显著减少网站上单个字体所需的网页字体数据量。

## 字体渲染

浏览器发现并下载某种网页字体后，就可以进行渲染了。默认情况下，在下载使用网页字体的任何文本之前，浏览器都会阻止其渲染。您可以使用 [`font-display` CSS 属性](https://developer.mozilla.org/docs/Web/CSS/@font-face/font-display)调整浏览器的文本渲染行为，并配置在网页字体完全加载之前应显示（或不显示）哪些文本。

### `block`

`font-display` 的默认值为 `block`。使用 `block` 时，浏览器会阻止呈现使用指定网页字体的任何文本。不同浏览器的行为会略有不同。Chromium 和 Firefox 会阻塞渲染，渲染时间最长为 3 秒，之后才能使用回退机制。Safari 会无限期屏蔽广告，直到网页字体加载完毕为止。

### `swap`

[`swap` 是使用最广泛的 `font-display` 值](https://almanac.httparchive.org/en/2022/fonts#fig-13)。`swap` 不会阻止渲染，并且会在交换成指定的网页字体之前立即以后备方式显示文本。这样，您就可以立即显示内容，而无需等待网络字体下载完成。

不过，`swap` 的缺点是，如果 CSS 中指定的后备网页字体和网页字体在行高、字距和其他字体指标方面存在很大差异，则会导致布局偏移。如果您不小心使用 `preload` 提示尽快加载网页字体资源，或者不考虑其他 `font-display` 值，这可能会影响网站的 [CLS](https://web.dev/articles/cls)。

### `fallback`

`font-display` 的 `fallback` 值在 `block` 和 `swap` 之间折衷。与 `swap` 不同，浏览器会阻止字体渲染，但只能在很短的时间内交换回退文本。不过，与 `block` 不同的是，阻塞期极短。

使用 `fallback` 值可以在运行速度较快的网络上取得良好效果。在此类网络上，如果网页字体可以快速下载，则网页字体是网页首次渲染时立即使用的字体。不过，如果网速较慢，系统会在屏蔽期过后先显示后备文本，然后在网页字体到达时替换掉后备文本。

### `optional`

`optional` 是最严格的 `font-display` 值，仅在 100 毫秒内下载时才会使用网页字体资源。如果某种网页字体的加载用时超过该时长，便不会在网页上使用，因此浏览器会使用后备字体进行当前导航，同时在后台下载该网页字体并将其存放在浏览器缓存中。

因此，后续网页导航可以立即使用网页字体，因为网页字体已下载。`font-display: optional` 可以避免 `swap` 时发生的布局偏移，但如果网页字体在初始网页导航时过晚出现，某些用户就看不到网页字体了。

### 字体演示

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-fonts?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的“learn-performance-fonts”"></iframe>


