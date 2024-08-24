---
date: 2023-02-01
category: 性能优化
---
# 通过资源提示协助浏览器

在关于[优化资源加载](/web/performance/optimize-resource-loading)的上一单元中，您了解了各种网页资源（如 CSS 和 JavaScript）对网页加载速度的影响，以及如何优化这些资源及其投放速度以加快网页的呈现速度。现在正好可以进入更高级的资源加载方面，这涉及使用资源提示帮助浏览器更快地加载它们。

资源提示可以告知浏览器如何加载资源并确定资源优先级，从而帮助开发者进一步缩短网页加载时间。一组初始资源提示（例如 `preconnect` 和 `dns-prefetch`）是最先引入的资源提示。不过，随着时间的推移，`preload` 和 Fetch Priority API 相继提供了额外的功能。

资源提示会指示浏览器提前执行某些操作，这些操作可以提高加载性能。资源提示可以执行操作，例如执行早期 DNS 查找、提前连接到服务器，甚至在浏览器通常发现资源之前提取资源。

资源提示可以在 HTML 中指定（通常在 `<head>` 元素早期），也可以[设置为 HTTP 标头](https://almanac.httparchive.org/en/2021/resource-hints#http-header)。本单元将介绍 [`preconnect`](https://www.w3.org/TR/resource-hints/#dfn-preconnect)、[`dns-prefetch`](https://developer.mozilla.org/docs/Web/Performance/dns-prefetch) 和 [`preload`](https://developer.mozilla.org/docs/Web/HTML/Link_types/preload)，以及 [`prefetch`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel/prefetch) 提供的推测性提取行为。

## `preconnect`

`preconnect` 提示用于与另一个来源（您要从其中提取关键资源）建立连接。例如，您可能在 CDN 或其他跨源上托管图片或资源：

```html
<link rel="preconnect" href="https://example.com">
```

使用 `preconnect` 即表示您预计浏览器计划在*不久的将来*连接到特定的跨源服务器，并且浏览器应尽快打开该连接，最好是在等待 HTML 解析器或预加载扫描程序执行此操作之前打开。

如果网页上有大量跨源资源，请对当前网页最至关重要的资源使用 `preconnect`。

![Chrome 开发者工具网络面板中资源的连接时间屏幕截图。连接设置包括延迟时间、代理协商、DNS 查找、连接设置和 TLS 协商。](images/fig-1.png)
在 Chrome 开发者工具的网络面板中显示的连接时间可视化图表。红色框中的时间是与跨源服务器建立连接时所涉及时间的时间，preconnect 可以尽早（而不是在发现跨源资源时）建立连接，从而缓解这种情况。

[`preconnect` 的常见用例是 Google Fonts](https://almanac.httparchive.org/en/2021/resource-hints#fig-14)。Google Fonts 建议您对提供 `@font-face` 声明的 `https://fonts.googleapis.com` 网域和提供字体文件的 `https://fonts.gstatic.com` 网域执行 `preconnect`。

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

`crossorigin` 属性用于指示是否必须使用[跨域资源共享 (CORS)](https://developer.mozilla.org/docs/Web/HTTP/CORS) 提取资源。使用 `preconnect` 提示时，如果从来源下载的资源使用 CORS（例如字体文件），则需要将 `crossorigin` 属性添加到 `preconnect` 提示中。

**注意** ：如果您省略“crossorigin”属性，浏览器会在下载字体文件时打开新连接，并且不会重复使用通过“preconnect”提示打开的连接。## `dns-prefetch`

虽然尽早打开与跨源服务器的连接可以显著缩短初始网页加载时间，但同时与多个跨源服务器建立连接可能不合理或不可行。如果您担心可能过度使用了 `preconnect`，可以使用 `dns-prefetch` 提示来使用开销大大降低的资源提示。

根据其名称，`dns-prefetch` 不会与跨源服务器建立连接，而只是提前为其执行 [DNS 查找](https://en.wikipedia.org/wiki/Domain_Name_System#Address_resolution_mechanism)。在将域名解析为其底层 IP 地址时，会发生  *DNS 查询* 。虽然在设备和网络层级设置 DNS 缓存层有助于使此过程从总体上加快，但仍然需要一些时间。

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://fonts.gstatic.com">
```

DNS 查找的费用相当低廉，并且由于费用相对较小，在某些情况下，它们可能比 `preconnect` 更适合。特别要指出的是，如果链接会转到您认为用户可能会访问的其他网站，那么使用这项资源提示可能是个不错的选择。[dnstradamus](https://github.com/malchata/dnstradamus) 就是这样一种使用 JavaScript 自动执行此操作的工具，它使用 [Intersection Observer API](https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API) 在用户查看指向其他网站的链接时将 `dns-prefetch` 提示注入当前页面的 HTML 中。

## `preload`

`preload` 指令用于提前请求呈现网页所需的资源：

```html
<link rel="preload" href="/lcp-image.jpg" as="image">
```

`preload` 指令应仅限于后期发现的关键资源。最常见的用例包括字体文件、通过 `@import` 声明提取的 CSS 文件，或可能是 [Largest Contentful Paint (LCP) 候选对象](https://web.dev/articles/lcp#what-elements-are-considered)的 CSS `background-image` 资源。在这种情况下，预加载扫描器不会发现这些文件，因为相应资源是在外部资源中引用的。

**注意** ：如果您使用 `preload` 下载由 `<img>` 元素指定的图片，该图片会根据用户视口的不同而有所不同，请务必将 [`imagesrcset` 属性添加到 `preload` 提示中，以下载适用于当前视口的正确图片](https://web.dev/articles/preload-responsive-images)。您还应排除 `src` 属性，这样，不支持自适应预加载的浏览器就不会下载后备图片。 与 `preconnect` 类似，如果您要预加载 CORS 资源（例如字体），则 `preload` 指令也需要 `crossorigin` 属性。如果您未添加 `crossorigin` 属性（或者为非 CORS 请求添加该属性），则浏览器会下载两次资源，浪费带宽，本来可以本该花在其他资源上。

```html
<link rel="preload" href="/font.woff2" as="font" crossorigin>
```

**重要提示** ：如果 `preload` 指令的 `<link>` 元素中缺少 `as` 属性，该指令中指定的资源会下载两次。 如需查看 `as` 属性值列表，请参阅[关于 `as` 属性值的 MDN 文档](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel/preload#what_types_of_content_can_be_preloaded)。在上述 HTML 代码段中，即使 `/font.woff2` 位于同一网域上，系统也会指示浏览器使用 CORS 请求预加载 `/font.woff2`。

**注意** ：`preload` 指令是一项非常强大的性能优化，事实上可能会过度使用。使用 `preload` 指令下载的资源会以高优先级有效下载，如果过度使用，`preload` 可能会造成带宽争用，对网页加载速度产生负面影响。## `prefetch`

**重要提示** ：这是对 `prefetch` 资源提示的非常宽泛的说明。因此，本部分不会详细介绍使用该方法时应考虑的一些注意事项和权衡。本课程的后续单元将详细介绍[如何以低优先级预提取近期所需的资源](/web/performance/prefetching-prerendering-precaching#prefetch_resources_needed_in_the_near_future_at_low_priority)，以及如何[预提取页面以加快日后的导航速度](/web/performance/prefetching-prerendering-precaching#prefetch_pages_to_speed_up_future_navigations)。`prefetch` 指令用于针对可能会用于未来导航的资源发起低优先级请求：

```html
<link rel="prefetch" href="/next-page.css" as="style">
```

此指令基本上遵循与 `preload` 指令相同的格式，只有 `<link>` 元素的 `rel` 属性使用 `"prefetch"` 值。不过，与 `preload` 指令不同，`prefetch` 主要是推测性的，因为您将发起对资源的提取，以便将来的导航不一定会发生。

有时，`prefetch` 可以派上用场 - 例如，如果您在网站上确定了一个大多数用户需要完成的操作流程，那么为这些未来网页使用渲染关键资源的 `prefetch` 就有助于缩短用户的加载时间。

**注意** ：鉴于 `prefetch` 的推测性，使用它的这一潜在缺点是，如果用户没有转到最终需要预提取资源的页面，那么用于提取资源的数据就可能不会被使用。请依靠您的分析或其他数据源了解您网站的使用模式，自行确定使用 `prefetch` 是否合适。或者，您也可以使用 [`Save-Data` 提示](https://web.dev/articles/optimizing-content-efficiency-save-data#detecting_the_save-data_setting)，为已指定减少流量消耗偏好的用户选择停用预提取功能。## 提取优先级 API

您可以通过其 `fetchpriority` 属性使用 [`Fetch Priority API`](https://web.dev/articles/fetch-priority) 来提高资源的优先级。您可以将该属性与 `<link>`、`<img>` 和 `<script>` 元素一起使用。

```html
<div class="gallery">
  <div class="poster">
    <img src="img/poster-1.jpg" fetchpriority="high">
  </div>
  <div class="thumbnails">
    <img src="img/thumbnail-2.jpg" fetchpriority="low">
    <img src="img/thumbnail-3.jpg" fetchpriority="low">
    <img src="img/thumbnail-4.jpg" fetchpriority="low">
  </div>
</div>
```

**重要提示** ：`fetchpriority` 属性在用于页面的 LCP 映像时[尤其有效](https://web.dev/articles/fetch-priority#increase_the_priority_of_the_lcp_image)。通过使用此属性提高 LCP 图片的优先级，您可以相对轻松地改进网页的 LCP。默认情况下，系统会以较低的优先级提取图片。完成布局后，如果发现图片位于初始视口内，优先级将提升为 **高** 。在前面的 HTML 代码段中，`fetchpriority` 会立即告知浏览器以**高**优先级下载较大的 LCP 图片，而以较低的优先级下载不太重要的缩略图。

现代浏览器分两个阶段加载资源。第一阶段预留给关键资源，并在所有阻塞脚本下载和执行后结束。在此阶段，**低**优先级资源的下载可能会延迟。通过使用 `fetchpriority="high"`，您可以提高资源的优先级，使浏览器能够在第一阶段下载资源。

## 资源提示演示

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-resource-hints?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的 learn-performance-resource-hints"></iframe>
