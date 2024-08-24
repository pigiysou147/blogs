---
date: 2023-02-01
category: 性能优化
tags:
 - Service Worker
---
# 预提取、预渲染和 Service Worker 预缓存

在前几个单元中，您了解了[延迟加载 JavaScript](/web/performance/defer-javascript) 和[延迟加载图片和 `<iframe>` 元素](/web/performance/lazy-load-images-and-iframe-elements)等概念。延迟加载资源会在页面初始加载期间减少网络用量和 CPU 使用率，方法是在需要资源的位置下载资源，而不是预先加载资源，以免资源被闲置。这可以缩短初始网页加载时间，但如果驱动后续互动所需的资源在发生时尚未加载，则后续互动可能会出现延迟。

例如，如果页面包含自定义日期选择器，您可以将日期选择器的资源延迟到用户与该元素互动之后。但是，按需加载日期选择器的资源可能会导致延迟（可能略微），但也可能不会发生，具体取决于用户的网络连接和/或设备功能，直至资源下载、解析并可供执行。

这有点棘手 - 您不想因为加载未使用的资源而浪费带宽，但延迟互动和后续网页加载可能也不理想。幸运的是，您可以使用多种工具来在这两种极端之间取得更好的平衡。本单元介绍了可用于实现这一目标的一些技术，例如预提取资源、预渲染整个页面以及使用 Service Worker 预缓存资源。

## 近期以低优先级预提取近期所需的资源

您可以使用 `<link rel="prefetch">` 资源提示提前提取资源（包括图片、样式表或 JavaScript 资源）。[](https://developer.mozilla.org/docs/Web/HTML/Element/link#attributes)`prefetch` 提示用于告知浏览器在不久的将来可能需要某个资源。

指定 `prefetch` 提示后，浏览器可能会以[最低优先级](https://web.dev/articles/fetch-priority#browser_priority_and_fetchpriority)发起对该资源的请求，以避免与当前页面所需的资源发生争用。

**注意** ：`prefetch` 资源提示只是一个提示。浏览器可能会根据一系列关于网络质量、系统级偏好设置或其他因素的条件来决定是否遵循 `prefetch` 提示。预提取资源可以改善用户体验，因为用户无需等待近期所需的资源下载完毕，因为可以在需要时立即从磁盘缓存中检索这些资源。

```html
<head>
  <!-- ... -->
  <link rel="prefetch" as="script" href="/date-picker.js">
  <link rel="prefetch" as="style" href="/date-picker.css">
  <!-- ... -->
</head>
```

上述 HTML 代码段会告知浏览器，它可以在 `date-picker.js` 和 `date-picker.css` 空闲后预提取。您也可以在用户与 JavaScript 中的页面互动时动态预提取资源。

[除 Safari 外，所有现代浏览器都支持 `prefetch`](https://caniuse.com/link-rel-prefetch)，后者通过标志提供。如果您迫切需要以适用于所有浏览器的方式预先加载网站的资源，并且您使用了 Service Worker，请阅读本单元中有关[使用 Service Worker 预缓存资源](/web/performance/prefetching-prerendering-precaching#service_worker_precaching)的后续部分。

## 预提取网页，加快日后的导航速度

您还可以通过在指向某个 HTML 文档时指定 `as="document"` 属性来预提取网页及其所有子资源：

```html
<link rel="prefetch" href="/page" as="document">
```

当浏览器处于空闲状态时，可能会为 `/page` 发起低优先级请求。

**重要提示** ：通常建议避免使用 `<link rel="prefetch">` 预提取跨源文档。存在一个[与预提取跨源文档相关的待解决问题](https://github.com/whatwg/html/issues/6723)，该问题会导致重复请求。您还应避免预提取个性化的同源文档（例如，为经过身份验证的会话动态生成的 HTML 响应），因为此类资源通常不会缓存，并且很有可能未被使用，最终会浪费带宽。在基于 Chromium 的浏览器中，您可以使用 [Speculation Rules API](https://developer.chrome.com/blog/prerender-pages/#the-speculation-rules-api) 预提取文档。推测规则定义为包含在网页的 HTML 中的 JSON 对象，或通过 JavaScript 动态添加：

```html
<script type="speculationrules">
{
  "prefetch": [{
    "source": "list",
    "urls": ["/page-a", "/page-b"]
  }]
}
</script>
```

JSON 对象描述一项或多项操作（目前仅支持 `prefetch` 和 `prerender`），以及与该操作相关联的网址列表。在上述 HTML 代码段中，系统会指示浏览器预提取 `/page-a` 和 `/page-b`。与 `<link rel="prefetch">` 类似，推测规则是浏览器在某些情况下可能会忽略的提示。

**注意** ：虽然 `<link rel="prefetch">` 会预提取资源并将其存储在 HTTP 缓存中，但系统会处理使用推测规则加载的预提取内容并将其存储在内存缓存中，以便在需要时更快地检索资源。[Quicklink](https://github.com/GoogleChromeLabs/quicklink/) 等库会在网页在用户视口中可见时，动态预提取或预渲染网页链接，从而改进网页导航。与预先抓取页面上的所有链接相比，这可以提高用户最终导航到该页面的可能性。

**重要提示** ：预先提取资源可能会导致用户下载最终可能未使用的资源。预提取资源时，请注意仅在必要时使用它，只应在[快速连接](https://developer.mozilla.org/docs/Web/API/Network_Information_API)上使用，并且如果用户已启用 [`Save-Data`](https://developer.mozilla.org/docs/Web/API/NetworkInformation/saveData) 信号，请避免完全预提取。## 预渲染页面

除了预提取资源之外，还可以提示浏览器[在用户导航到某个网页之前预呈现该网页](https://developer.chrome.com/blog/prerender-pages/)。这种做法几乎可以即时加载网页，因为系统会在后台提取和处理网页及其资源。当用户导航到相应页面后，系统会将该页面置于前台。

Speculation Rules API 支持预渲染：

```html
<script type="speculationrules">
{
  "prerender": [
    {
      "source": "list",
      "urls": ["/page-a", "page-b"]
    }
  ]
}
</script>
```

**注意** ：Chrome 还支持 `<link rel="prerender" href="/page">` 资源提示。不过，从 Chrome 63 开始，这会启动 [NoState 预提取](https://developer.chrome.com/blog/nostate-prefetch)，以便提取网页所需的资源，而不是呈现网页并执行 JavaScript。 **重要提示** ：完整的预渲染还会在预渲染的网页上执行 JavaScript。鉴于 JavaScript 可能是一种相当大且计算开销非常高的资源，我们建议您谨慎使用“预渲染”，并且仅在您非常确定用户确实打算导航到预渲染的网页的情况下。## 预提取和预渲染演示

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-prefetch-and-prerender?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的“学习性能”预提取和预渲染"></iframe>

## Service Worker 预缓存

您还可以使用 [Service Worker](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) 推测性地预提取资源。Service Worker 预缓存可以[使用 `Cache` API 提取和保存资源](https://developer.mozilla.org/docs/Web/API/CacheStorage)，这样浏览器无需访问网络即可使用 `Cache` API 处理请求。Service Worker 预缓存使用一种非常有效的 Service Worker 缓存策略，称为“仅缓存”策略。[](https://developer.chrome.com/docs/workbox/caching-strategies-overview/#cache-only)这种模式非常有效，因为将资源放入 Service Worker 缓存后，可在收到请求时几乎即时提取这些资源。

![显示 Service Worker 从页面到 Service Worker 再到缓存的缓存流程。](images/fig-1.png)
仅缓存策略仅在 Service Worker 安装期间从网络中检索符合条件的资源。安装后，缓存的资源只能从 Service Worker 缓存中检索。

**重要提示** ：不久之后，我们计划在本课程中推出一个单元，详细介绍 Service Worker 可以提供的各种性能优化，例如[运行时缓存](https://developer.chrome.com/docs/workbox/caching-resources-during-runtime)。如需使用 Service Worker 预缓存资源，您可以使用 [Workbox](https://developer.chrome.com/docs/workbox/)。不过，如果您愿意，也可以编写自己的代码来缓存一组预定文件。无论采用哪种方式，您决定使用 Service Worker 预缓存资源，都必须了解预缓存发生在[Service Worker 安装](https://developer.chrome.com/docs/workbox/service-worker-lifecycle/#installation)之后。安装完成后，就可以在 Service Worker 在您的网站上控制的任何页面上检索预缓存的资源。

**重要提示** ：虽然您可以从头开始编写自己的 Service Worker，但使用 Workbox 有助于预缓存，特别是因为它可以跟踪缓存资源的版本控制信息。然后，如果您日后更新 Service Worker，Workbox 会自动从缓存中移除过期的条目，让您不必费力自行完成此任务。Workbox 使用[预缓存清单](https://developer.chrome.com/docs/workbox/modules/workbox-precaching/#explanation-of-the-precache-list)来确定应预缓存的资源。预缓存清单是一个文件和版本控制信息列表，可作为要预缓存的资源的“可信来源”。

```javascript
[{  
    url: 'script.ffaa4455.js',
    revision: null
}, {
    url: '/index.html',
    revision: '518747aa'
}]
```

上述代码是一个示例清单，其中包含 `script.ffaa4455.js` 和 `/index.html` 这两个文件。如果资源在文件本身中包含版本信息（称为文件哈希[](https://bundlers.tooling.report/hashing/)），则 `revision` 属性可以保留为 `null`，因为文件已进行版本控制（例如，上述代码中 `script.ffaa4455.js` 资源的 `ffaa4455` 属性）。对于无版本控制的资源，可以在构建时为其生成修订版本。

设置后，Service Worker 可用于预缓存静态页面或其子资源，以加快后续页面导航的速度。

```javascript
workbox.precaching.precacheAndRoute([
  '/styles/product-page.ac29.css',
  '/styles/product-page.39a1.js',
]);
```

例如，在电子商务商品详情页面上，可以使用 Service Worker 预缓存呈现商品详情页面所需的 CSS 和 JavaScript，以便更快地导航到商品详情页面。在上述示例中，`product-page.ac29.css` 和 `product-page.39a1.js` 被预缓存。[`workbox-precaching` 中提供的 `precacheAndRoute` 方法](https://developer.chrome.com/docs/workbox/reference/workbox-precaching/#method-precacheAndRoute)会自动注册所需的处理程序，以确保在必要时从 Service Worker API 提取预缓存的资源。

由于 [Service Worker 受到广泛支持](https://caniuse.com/serviceworkers)，因此您可以根据情况在任何现代浏览器上使用 Service Worker 预缓存。

[Service Worker 使用的 `Cache` 接口和 HTTP 缓存并不相同](https://developer.chrome.com/docs/workbox/caching-strategies-overview#the-cache-interface-versus-the-http-cache)。 `Cache` 接口是由 JavaScript 控制的高层级缓存，而 HTTP 缓存是由 [`Cache-Control` 标头](https://developer.mozilla.org/docs/Web/HTTP/Headers/Cache-Control)控制的低层级缓存。与使用资源提示或推测规则预提取或预呈现资源类似，Service Worker 预缓存会消耗网络带宽、存储空间和 CPU。建议仅预缓存可能会使用的资源，并在预缓存清单中指定过多的资源。如有疑问，建议预先缓存过少而不是过多，并通过[运行时缓存](https://developer.chrome.com/docs/workbox/caching-resources-during-runtime)使用[多种模式](https://developer.chrome.com/docs/workbox/caching-strategies-overview)来填充 Service Worker 缓存，从而平衡速度和资源新鲜度。如需详细了解预缓存资源时应采取的注意事项，请参阅[预缓存的注意事项](https://developer.chrome.com/docs/workbox/precaching-dos-and-donts)。