---
date: 2023-02-01
category: 性能优化
tags:
 - 延迟加载
---
# 延迟加载图片和 `<iframe>` 元素

与其他类型的资源相比，图片和 `<iframe>` 元素消耗的带宽通常更多。对于 `<iframe>` 元素，加载和渲染其中的页面可能会消耗相当多的额外处理时间。

在延迟加载图片的情况下，延迟加载初始视口以外的图片有助于减少初始视口内更关键资源的带宽争用情况。在某些情况下，网络连接状况不佳时，这有助于提高网页的 [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp)，并且重新分配的带宽有助于加快 [LCP 候选版本](https://web.dev/articles/lcp#what-elements-are-considered)的加载和绘制速度。

就 `<iframe>` 元素而言，您可以在启动期间通过延迟加载网页的 [Interaction to Next Paint (INP)](https://web.dev/articles/inp) 来改进这些元素。这是因为 `<iframe>` 是完全独立的 HTML 文档，拥有自己的子资源。虽然 `<iframe>` 元素可以在单独的进程中运行，但它们与其他线程共享进程的情况并不少见，这可能会造成页面对用户输入的响应速度下降的情况。

因此，推迟加载屏幕外图片和 `<iframe>` 元素是一种值得尝试的技术，并且只需相当少量的工作即可获得相对良好的性能回报。本单元将介绍如何延迟加载这两类元素，以便在页面的关键启动期内提供更快、更好的用户体验。

## 使用 `loading` **属性延迟加载图片**

可以将 [`loading` 属性](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attributes)添加到 `<img>` 元素中，以告知浏览器应如何加载这些元素：

* `"eager"` 用于告知浏览器应立即加载图片，即使图片位于初始视口之外。这也是 `loading` 属性的默认值。
* `"lazy"` 会延迟图片加载，直到图片与可见视口之间的距离保持在设定的范围内。此距离因浏览器而异，但通常设置得足够大，以便在用户滚动到图片时加载图片。

**重要提示** ：如前所述，浏览器决定使用 `loading="lazy"` 属性时，[视口与视口的距离](https://web.dev/articles/browser-level-image-lazy-loading#distance-from-viewport_thresholds)因浏览器而异。涉及的因素可能包括[有效连接类型](https://googlechrome.github.io/samples/network-information/)和图片类型。另外值得注意的是，如果您使用的是 `<picture>` 元素，则 `loading` 属性仍应应用于其子级 `<img>` 元素，而不是 `<picture>` 元素本身。这是因为 `<picture>` 元素是一个容器，其中包含指向不同候选图片的其他 `<source>` 元素，并且浏览器选择的候选图片会直接应用于其子级 `<img>` 元素。

### 不要延迟加载初始视口中的图片

您只能为位于初始视口之外的 `<img>` 元素添加 `loading="lazy"` 属性。不过，在呈现网页之前知道元素在视口中的确切位置可能并非易事。必须考虑不同的视口大小、宽高比和设备。

例如，桌面设备视口与手机上的视口可能截然不同，因为前者会呈现更多的垂直空间，而这些空间或许能够适应初始视口中的图片，而这些图片在尺寸较小设备的初始视口中不会显示。[纵向模式](https://en.wikipedia.org/wiki/Page_orientation)使用的平板电脑还会显示大量的垂直空间，甚至可能比某些桌面设备更多。

不过，在某些情况下，很明显应该避免应用 `loading="lazy"`。例如，如果是主打图片，或者存在 `<img>` 元素可能显示在任何设备上的首屏或布局顶部的其他图片用例，您绝对应该从 `<img>` 元素中省略 `loading="lazy"` 属性。这[对于可能是 LCP 候选内容的映像而言更为重要](https://web.dev/articles/lcp-lazy-loading)。

延迟加载的图片需要等待浏览器完成布局，才能知道图片的最终位置是否在视口内。[](https://web.dev/articles/howbrowserswork#layout)这意味着，如果可见视口中的 `<img>` 元素具有 `loading="lazy"` 属性，则只有在下载、解析并应用于网页之后才会请求此属性，而不是在[在原始标记中被预加载扫描器发现](https://web.dev/articles/preload-scanner#whats_a_preload_scanner)后立即提取。

由于 [`<img>` 元素的 `loading` 属性在所有主流浏览器上均受支持](https://caniuse.com/loading-lazy-attr)，因此无需使用 JavaScript 延迟加载图片，因为向页面添加额外的 JavaScript 来提供浏览器已提供的功能会影响页面性能的其他方面，例如 INP。

**注意** ：`loading` 属性不会影响映像的网络优先级。如需调整网络优先级，您可以使用 [Fetch Priority API](https://web.dev/articles/fetch-priority)。请注意，可见视口中带有 `fetchpriority="high"` 和 `loading="lazy"` 的图片仍会等到所有 CSS 都下载并解析后再执行。### 图片延迟加载演示

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-defer-images?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的 learn-performance-defer-images"></iframe>

## 延迟加载 `<iframe>` **元素**

延迟加载 `<iframe>` 元素，直到它们在视口中可见为止，这样可以节省大量数据，并提高加载顶级网页所需的关键资源的加载速度。此外，由于 `<iframe>` 元素本质上是顶级文档中加载的完整 HTML 文档，因此它们可以包含大量子资源（尤其是 JavaScript），如果这些帧中的任务需要大量处理时间，则会严重影响页面的 INP。

第三方嵌入是 `<iframe>` 元素的常见用例。例如，嵌入式视频播放器或社交媒体帖子通常使用 `<iframe>` 元素，它们通常需要大量的子资源，这也会导致顶级页面资源的带宽争用。例如，延迟加载 YouTube 视频嵌入内容可在页面初始加载期间节省超过 500 KiB，而延迟加载 Facebook [“赞”按钮插件](https://developers.facebook.com/docs/plugins/like-button/)可节省超过 200 KiB，其中大部分是 JavaScript。

无论采用哪种方式，只要您在网页上的首屏显示 `<iframe>`，如果提前加载并不重要，就应该强烈考虑延迟加载，因为这样做可以显著改善用户体验。

### `<iframe>` **元素的** `loading` **属性**

所有主流浏览器也都支持 `<iframe>` 元素上的 [`loading` 属性](https://developer.mozilla.org/docs/Web/HTML/Element/iframe#attributes)。`loading` 属性的值及其行为与使用 `loading` 属性的 `<img>` 元素相同：

* `"eager"` 为默认值。它会告知浏览器立即加载 `<iframe>` 元素的 HTML 及其子资源。
* `"lazy"` 会延迟加载 `<iframe>` 元素的 HTML 及其子资源，直到该元素与视口之间的距离在预定义的距离以内。

**注意** ：为避免布局偏移，Chrome 会预留空间，并在系统仍然提取延迟加载的 `<iframe>` 时显示占位符。不过，您仍应考虑使用 `<iframe>` 元素的 `width` 和 `height` 属性，以及 CSS 中的其他样式，以最大限度地减少布局偏移。### 延迟加载 iframe 演示

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-defer-iframes?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 上的“learn-performance-defer-iframe”"></iframe>

### 外墙

您可以按需加载内容，而不是在网页加载期间立即加载嵌入内容，以响应用户互动。这可以通过在用户与图片互动之前显示图片或其他适当的 HTML 元素来实现。用户与该元素互动后，您可以将其替换为第三方嵌入代码。这种技术称为“表层”。[](https://web.dev/articles/embed-best-practices#use_click-to-load_to_enhance_facades)

Facade 的一个常见用例是来自第三方服务的视频嵌入，在此嵌入中，除了视频内容本身之外，可能还会加载许多其他可能昂贵的子资源（如 JavaScript）。在这种情况下（除非合理需要视频自动播放），否则视频嵌入需要用户在播放之前点击播放按钮来与之互动。

这是一个绝佳机会，可以显示视觉上与嵌入的视频相似的静态图片，并在此过程中节省大量带宽。用户点击图片后，该图片会被实际的 `<iframe>` 嵌入所取代，这会触发第三方 `<iframe>` 元素的 HTML 及其子资源开始下载。

除了改善初始网页加载情况之外，另一个关键的益处在于，如果用户从未播放视频，那么系统也永远不会下载播放视频所需的资源。这是一种很好的模式，因为它可以确保用户只下载他们真正需要的内容，而不会对用户需求做出错误的假设。

聊天 widget 是 Facade 技术的另一个优秀用例。大多数聊天微件会下载大量 JavaScript，这可能会对网页加载和对用户输入的响应速度产生负面影响。与预先加载任何内容一样，在加载时会产生开销，但就聊天微件而言，并非所有用户都不想与它交互。

另一方面，可以使用 Facade 将第三方“Start Chat”按钮替换为虚假按钮。当用户有意义地与其交互（例如将指针悬停在它上一段时间或点击它上）后，系统会在用户需要这个实际可用的聊天 widget 时将其放入相应位置。

虽然您当然可以构建自己的 Facade，但还有一些适用于更热门第三方的开源选项，例如适用于 YouTube 视频的 [`lite-youtube-embed`](https://github.com/paulirish/lite-youtube-embed)、适用于 Vimeo 视频的 [`lite-vimeo-embed`](https://github.com/luwes/lite-vimeo-embed) 以及适用于聊天 widget 的 [React 实时聊天加载程序](https://github.com/calibreapp/react-live-chat-loader)。

## JavaScript 延迟加载库

如果您需要延迟加载 `<video>` 元素、`<video>` 元素 `poster` 图片、CSS `background-image` 属性加载的图片或其他不受支持的元素，可以使用基于 JavaScript 的延迟加载解决方案（例如 [lazysizes](https://github.com/aFarkas/lazysizes) 或 [yall.js](https://github.com/malchata/yall.js)）执行此操作，因为延迟加载这些类型的资源并不是浏览器级别的功能。

具体而言，在没有音轨的情况下自动播放和循环播放 `<video>` 元素是[比使用动画 GIF 更高效的替代方案](https://web.dev/articles/replace-gifs-with-videos)，动画 GIF 通常比具有同等视觉质量的视频资源大好几倍。即便如此，这些视频在带宽方面仍然很重要，因此延迟加载它们是一项额外的优化措施，可以大大减少浪费的带宽。

其中大多数库都使用 [Intersection Observer API](https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API)，如果网页的 HTML 在初始加载后发生变化，则使用 [Mutation Observer API](https://developer.mozilla.org/docs/Web/API/MutationObserver) 来识别元素何时进入用户的视口。如果图片可见或接近视口，JavaScript 库会将非标准属性（通常是 `data-src` 或类似属性）替换为正确的属性，例如 `src`。

假设您有一个用于替换动画 GIF 的视频，但您想使用 JavaScript 解决方案延迟加载它。[通过 yall.js 可以实现这一点](https://github.com/malchata/yall.js#video)，采用的标记模式如下：

```html
<!-- The autoplay, loop, muted, and playsinline attributes are to
     ensure the video can autoplay without user intervention. -->
<video class="lazy" autoplay loop muted playsinline width="320" height="480">
  <source data-src="video.webm" type="video/webm">
  <source data-src="video.mp4" type="video/mp4">
</video>
```

默认情况下，yall.js 会观察类 `"lazy"` 的所有符合条件的 HTML 元素。在网页上加载并执行 yall.js 后，除非用户将其滚动到视口中，否则视频不会加载。此时，`<video>` 元素的子 `<source>` 元素中的 `data-src` 属性将交换为 `src` 属性，后者会发送下载视频并自动开始播放的请求。
