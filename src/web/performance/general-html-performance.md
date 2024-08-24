---
date: 2023-02-01
category: 性能优化
tags:
 - html
---
# HTML 性能的一般注意事项

要想构建可快速加载的网站，第一步就是要及时从服务器接收网页 HTML 的响应。当您在浏览器的地址栏中输入网址时，浏览器会向服务器发送 [`GET` 请求](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET)进行检索。网页的第一个请求针对的是 HTML 资源，因此，确保 HTML 以最短延迟快速到达是关键性能目标。

初始的 HTML 请求需要执行几个步骤，每个步骤都需要一些时间。通过减少在每个步骤上花费的时间，您可以缩短[首字节时间 (TTFB)](https://web.dev/articles/ttfb)。虽然 TTFB 不是您在页面加载速度方面应该关注的唯一指标，但较高的 TTFB *确实*会让您难以达到 [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) 和 [First Contentful Paint (FCP)](https://web.dev/articles/fcp) 等指标的指定“良好”阈值。

**注意** ：如需详细了解如何优化网站的 TTFB，请参阅[优化 TTFB 指南](https://web.dev/articles/optimize-ttfb)，因为有一些改进技术不在本单元的讨论范围内。## 尽量减少重定向

在请求资源时，服务器可能会做出一个重定向响应，该重定向可以是永久重定向（`301 Moved Permanently` 响应）或临时重定向（`302 Found` 响应）。

重定向会降低网页加载速度，因为它需要浏览器在新位置发出额外的 HTTP 请求来检索资源。重定向有两种类型：

1. 完全发生在源站内的 *同源重定向* 。这些类型的重定向完全由您控制，因为管理它们的逻辑完全位于您的 Web 服务器上。
2. 由其他源启动的 *跨域重定向* 。这些类型的重定向通常无法控制。

广告、网址缩短服务和其他第三方服务通常会使用跨源重定向。虽然跨源重定向超出了您的控制范围，但您可能仍需要检查是否避免了多次重定向。例如，将广告链接到 HTTP 网页，而该网页又重定向到其 HTTPS 等效网页，或者跨源重定向到达您的来源，但随后触发同源重定向。

**注意** ：常见的同源重定向模式是将用户从以尾随斜杠结尾的网址重定向到非尾随斜杠，反之亦然，例如将用户从 `example.com/page/` 重定向到 `example.com/page`。在网页之间创建内部链接时，应避免链接到通过重定向进行响应且直接链接到正确位置的网页。## 缓存 HTML 响应

缓存 HTML 响应很困难，因为响应可能包含指向其他关键资源（例如 CSS、JavaScript、图片和其他资源类型）的链接。这些资源的文件名中可能包含[唯一指纹](https://bundlers.tooling.report/hashing/)，该指纹会根据文件的内容而变化。这意味着，缓存的 HTML 文档可能会在部署后变得过时，因为它包含对过时子资源的引用。

不过，较短的缓存生命周期（而不是不缓存）具有诸多优势，例如允许在 CDN 中缓存资源，减少从源服务器传送的请求数量，以及在浏览器中传送资源，从而重新验证资源而不是再次下载。此方法最适合在任何上下文中不会更改的静态内容，并且可以将缓存资源的适当时间设置为您认为合适的分钟数。将静态 HTML 资源花五分钟的时间是一个可靠的选择，可以确保定期更新不会引起注意。

如果网页的 HTML 内容以某种方式进行了个性化（例如针对经过身份验证的用户），那么您很有可能因各种问题（包括安全性和新鲜度）而根本不想缓存内容。如果用户浏览器缓存了 HTML 响应，您就无法使缓存失效。因此，在此类情况下，最好避免完全缓存 HTML。

缓存 HTML 的一种审慎方法是使用 [`ETag`](https://developer.mozilla.org/docs/Web/HTTP/Headers/ETag) 或 [`Last-Modified`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Last-Modified) 响应标头。`ETag`（也称为实体标记）标头是一个标识符，用于唯一标识所请求资源，通常使用[资源内容的哈希值](https://en.wikipedia.org/wiki/Hash_function)：

```bash
ETag:"33a64df551425fcc55e4d42a148795d9f25f89d4"
```

每当资源发生变化时，都必须生成新的 `ETag` 值。在后续请求中，浏览器会通过 [`If-None-Match` 请求标头](https://developer.mozilla.org/docs/Web/HTTP/Headers/If-None-Match)发送 `ETag` 值。如果服务器上的 `ETag` 与浏览器发送的 `ETag` 匹配，服务器会返回 `304 Not Modified` 响应，浏览器则会使用缓存中的资源。虽然这仍然会导致网络延迟，但 `304 Not Modified` 响应比整个 HTML 资源小得多。

但是，重新验证资源的新鲜度涉及的网络延迟也本身也是一个缺点。与 Web 开发的许多其他方面一样，利弊和妥协是不可避免的。您可以自行决定以这种方式缓存 HTML 的额外工作是否值得，或者最好是谨慎操作，不必费心缓存 HTML 内容。

**注意** ：`Last-Modified` 标头的运作方式与之类似，即包含一个包含资源上次更新日期和时间的响应标头。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-caching?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Glitch 上学习性能缓存"></iframe>

## 测量服务器响应时间

如果响应未缓存，则服务器的响应时间在很大程度上取决于您的托管服务提供商和后端应用堆栈。与动态网页相比，提供动态生成的响应（例如从数据库获取数据）的网页的 TTFB 可能更高，无需在后端投入大量计算时间即可立即提供。如果显示加载旋转图标，然后在客户端提取所有数据，则会将工作从更加可预测的服务器端环境移至可能不可预测的客户端环境。最大限度地减少客户端工作量通常可以改进以用户为中心的指标。

如果用户在[字段](https://web.dev/articles/lab-and-field-data-differences#field_data)遇到 TTFB 缓慢的问题，您可以使用 [`Server-Timing` 响应标头](https://developer.mozilla.org/docs/Web/HTTP/Headers/Server-Timing)公开有关时间在服务器上的什么位置的信息：

```bash
Server-Timing: auth;dur=55.5, db;dur=220
```

`Server-Timing` 标头的值可以包含多个指标，以及每个指标的时长。然后，可以[在现场使用 Navigation Timing API](https://web.dev/articles/navigation-and-resource-timing) 从用户那里收集这些数据，并进行分析，以了解用户是否遇到延迟。在前面的代码段中，响应标头包含两个显示时间：

* 对用户进行身份验证的时间 (`auth`)，用时 55.5 毫秒。
* 数据库访问时间 (`db`)，用时 220 毫秒。

**注意** ：如需详细了解 `Server-Timing` 响应标头，请参阅[优化 TTFB 指南](https://web.dev/articles/optimize-ttfb#understanding_high_ttfb_with_server_timing)。您可能还需要检查您的托管基础架构，并确认您拥有足够的资源来处理网站收到的流量。共享托管服务提供商通常容易出现 TTFB 较高，而响应时间较短的专用解决方案的费用可能更高。

您可以在 [ismyhostfastyet.com](https://ismyhostfastyet.com/) 上比较热门托管服务提供商的 TTFB。这些数据由从 [Chrome 用户体验报告 (CrUX)](https://developer.chrome.com/docs/crux) 数据集中收集的真实用户体验组成。## 压缩

基于文本的响应（例如 HTML、JavaScript、CSS 和 SVG 图片）应进行压缩，以减小通过网络传输时的大小，从而加快其下载速度。最常用的压缩算法是 gzip 和 Brotli。Brotli 比 gzip 提高了约 15% 到 20%。

大多数网站托管服务提供商通常会自动设置压缩功能，但如果您希望自行配置或调整压缩设置，则需要考虑一些重要事项：

1. **尽可能使用 Brotli。** 如前所述，Brotli 比 gzip 提供了相当明显的改进，并且[所有主流浏览器都支持 Brotli](https://caniuse.com/brotli)。尽可能使用 Brotli，但如果网站有大量用户在旧版浏览器中使用，请确保将 gzip 用作后备选项，因为任何压缩都比不进行压缩要好。
2. **文件大小至关重要。** 非常小的资源（小于 1 KiB）压缩得不太好，有时甚至根本压缩不到。任何类型的数据压缩的效果都取决于能够使用压缩算法找到更多可压缩数据位的大量数据。文件越大，压缩效果就越好，但是，您不会仅仅因为压缩效率更高就提供非常大的资源。大型资源（如 JavaScript 和 CSS）在浏览器*解压缩*后，需要大量时间来解析和评估，并且，即使它们仅发生微小变化，变化频率也可能会更高，因为任何更改都会导致不同的[文件哈希值](https://bundlers.tooling.report/hashing/)。
3. **了解动态压缩和静态压缩。** 动态压缩和静态压缩是确定何时应压缩资源的不同方法。动态压缩会在请求资源时压缩资源，有时甚至在每次请求资源时压缩资源。另一方面，静态压缩会提前压缩文件，因此在收到请求时无需执行压缩。静态压缩消除了压缩本身涉及的延迟时间，在使用动态压缩的情况下，这可能会增加服务器响应时间。JavaScript、CSS 和 SVG 图片等静态资源应动态压缩，而 HTML 资源（*尤其是*为经过身份验证的用户动态生成的资源）应动态压缩。

自行进行压缩非常具有挑战性，通常最好让内容分发网络 (CDN)（将在下一部分讨论）为您处理此操作。但是，了解这些概念有助于您辨别您的托管服务提供商是否正确使用了压缩功能。这些信息可帮助您找到改进压缩设置的机会，使它们为您的网站带来最大收益。

## 内容分发网络 (CDN)

[内容分发网络 (CDN)](https://web.dev/articles/content-delivery-networks) 是分布式服务器网络，服务器从源服务器缓存资源，反过来再从物理上更靠近用户的边缘服务器传送资源。在距离用户较近时，可以缩短[往返时间 (RTT)](https://en.wikipedia.org/wiki/Round-trip_delay)，而 HTTP/2 或 HTTP/3、缓存和压缩等优化技术则可以让 CDN 更快地提供内容，而不是从源服务器提取内容。在某些情况下，使用 CDN 可以显著改善网站的 TTFB。

**注意** ：如需深入了解 CDN 及其优势，请参阅 [CDN 指南](https://web.dev/articles/content-delivery-networks)。## 知识测验