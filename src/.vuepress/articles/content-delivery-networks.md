# 内容分发网络 (CDN) 

内容分发网络 (CDN) 使用分布式服务器网络向用户提供资源，从而提高网站性能。由于 CDN 可减少服务器负载，因此可以降低服务器费用，并且非常适合处理流量高峰。本文介绍了 CDN 的工作原理，并针对选择、配置和优化 CDN 设置提供了与平台无关的指导。

## 概览

内容分发网络由经过优化的服务器网络组成，用于快速向用户分发内容。虽然 CDN 在提供缓存内容方面最有名气，但 CDN 还可以改善无法缓存内容的分发。一般来说，您的 CDN 分发的网站越多越好。

概括来讲，CDN 的性能优势源于若干原则：CDN 服务器比[源服务器](https://en.wikipedia.org/wiki/Upstream_server)更靠近用户，因此具有较短的[往返时间 (RTT)](https://en.wikipedia.org/wiki/Round-trip_delay) 延迟时间；网络优化使 CDN 能够比从源服务器“直接”加载内容更快地分发内容；最后，CDN 缓存不需要将请求传输到源服务器。

**关键术语** ：源服务器是指 CDN 从中检索内容的服务器。

### 资源分发

虽然这看起来不太直观，但使用 CDN 来分发资源（即使是无法缓存的资源）通常比让用户从您的服务器“直接”加载资源更快。

使用 CDN 从来源分发资源时，客户端和附近的 CDN 服务器之间会建立新的连接。历程的其余部分（即 CDN 服务器与源站之间的数据传输）通过 CDN 网络进行，该网络通常包括与源站的现有持久连接。这样做有两方面的好处：在尽可能靠近用户的位置终止新连接可以避免不必要的连接设置成本（建立新连接成本高昂，并且需要多次往返）；使用预热连接可以立即以尽可能高的吞吐量传输数据。

![使用 CDN 和不使用 CDN 的连接设置对比](https://web.dev/static/articles/content-delivery-networks/image/comparison-connection-se-9ca81d466f08f.png?hl=zh-cn)

某些 CDN 在这一点上进一步改进，通过分布在互联网上的多个 CDN 服务器将流量路由到源站。CDN 服务器之间的连接是通过高度优化的可靠路由进行的，而不是通过[边界网关协议 (BGP)](https://en.wikipedia.org/wiki/Border_Gateway_Protocol) 确定的路由。虽然 BGP 是互联网实际上的路由协议，但其路由决策并不总是以性能为导向。因此，BGP 确定的路由的性能可能不如 CDN 服务器之间微调的路由。

![使用 CDN 和不使用 CDN 的连接设置对比](https://web.dev/static/articles/content-delivery-networks/image/comparison-connection-se-b51422dcc9105.png?hl=zh-cn)

### 缓存

通过缓存 CDN 服务器上的资源，您无需将请求直接传送至源站以供传送。因此，资源的交付速度更快；这也减轻了源服务器的负载。

#### 将资源添加到缓存

填充 CDN 缓存的最常用方法是让 CDN 根据需要“拉取”资源，这称为“源拉取”。首次从缓存中请求特定资源时，CDN 将从源服务器请求该资源并缓存响应。通过这种方式，当有其他未缓存的资源被请求时，缓存的内容会随着时间的推移而积累。

#### 从缓存中移除资源

CDN 使用缓存逐出功能定期从缓存中移除没用的资源。此外，网站所有者可以使用完全清除功能来明确移除资源。

- **缓存逐出**

  缓存的存储空间容量有限。当缓存即将用尽容量时，它会移除最近未访问过的资源或占用大量空间的资源，从而为新资源腾出空间。此过程称为缓存逐出。某个资源从一个缓存中逐出并不一定意味着它已从 CDN 网络的所有缓存中逐出。

- **完全清除**

  清除（也称为“缓存失效”）是一种将资源从 CDN 的缓存中移除的机制，无需等待该资源过期或被逐出。它通常通过 API 执行。在需要撤消内容的情况下（例如，更正拼写错误、定价错误或错误的新闻报道），完全清除功能至关重要。此外，它还可以在网站的缓存策略中起到至关重要的作用。

  如果 CDN 支持近乎即时完全清除，则可将完全清除用作一种管理动态内容缓存的机制：使用长 TTL 缓存动态内容，然后在资源更新时完全清除资源。通过这种方式，即使事先不知道资源何时将发生变化，也可以最大限度地延长动态资源的缓存时长。此技术有时称为“暂停付款”缓存。

  在大规模使用时，完全清除操作通常与称为“缓存标记”或“代理缓存键”的概念结合使用。利用这种机制，网站所有者可以将一个或多个其他标识符（有时称为“代码”）与缓存的资源相关联。这些代码随后可用于执行高度细化的完全清除。例如，您可以向包含网站页脚的所有资源（例如 `/about`、`/blog`）添加“footer”标记。页脚更新后，指示您的 CDN 完全清除与“footer”标记关联的所有资源。

#### 可缓存的资源

是否应缓存资源以及如何缓存资源，取决于该资源是公共资源还是私有资源；是静态资源还是动态资源。

##### 私有资源和公开资源

- **私有资源**

  私有资源包含面向单个用户的数据，因此不应由 CDN 进行缓存。专用资源由 `Cache-Control: private` 标头指示。

- **公共资源**

  公共资源不包含用户特定信息，因此可由 CDN 缓存。如果某项资源没有 `Cache-Control: no-store` 或 `Cache-Control: private` 标头，则 CDN 可能会将其视为可缓存的资源。公开资源可缓存的时间长度取决于该资源的更改频率。

##### 动态和静态内容

- **动态内容**

  动态内容是指频繁变动的内容。此类内容的示例包括 API 响应和商店首页。不过，此内容频繁更改，并不一定会阻止系统对其进行缓存。在流量大的时段，将这些响应缓存很短的时间（例如 5 秒）可以显著减少源服务器的负载，同时对数据新鲜度的影响微乎其微。

- **静态内容**

  静态内容不会经常更改（如果有）。此类内容通常包括图片、视频和版本化库。由于静态内容不会发生变化，因此应采用较长的生存时间 (TTL) 进行缓存，例如 6 个月或 1 年。

## 选择 CDN

在选择 CDN 时，性能通常是首要考虑因素。但是，在选择 CDN 时，CDN 提供的其他功能（例如安全和分析功能）以及 CDN 的价格、支持和初始配置都是重要的考虑因素。

### 性能

概括来讲，您可以在最大限度地缩短延迟时间和最大限度提高缓存命中率之间的权衡来考虑 CDN 的性能策略。具有许多入网点 (PoP) 的 CDN 可以提供较低的延迟，但由于流量在更多缓存中拆分，因此缓存命中率可能会较低。相反，PoP 较少的 CDN 可能在地理位置上距离用户较远，但可以实现更高的缓存命中率。

由于这种权衡，一些 CDN 使用分层方法进行缓存：靠近用户的 PoP（也称为“边缘缓存”）以具有较高缓存命中率的中央 PoP 作为补充。当边缘缓存找不到某个资源时，会向中央 PoP 寻找该资源。这种方法的代价是延迟时间略长，但增加了从 CDN 缓存提供资源的可能性，但并不一定是边缘缓存。

最大限度地缩短延迟时间与最大限度提高缓存命中率之间的权衡是面面俱到的。没有哪一种方法是普遍适用的，不过，根据您网站的性质及其用户群，您可能会发现其中一种方法的效果明显优于另一种。

另外值得注意的是，CDN 性能可能会因地理位置、一天中的时段甚至时事而异。虽然自行研究 CDN 的性能始终是个好主意，但很难预测 CDN 能为您带来的确切性能。

### 对 Largest Contentful Paint (LCP) 的影响

如本文前面所述，CDN 的主要目的是将资源分配到地理位置上更靠近用户的服务器，从而减少延迟时间。因此，CDN 的主要优势在于可以提高加载性能。特别是，在网站的服务器端架构中引入 CDN 后，资源的[第一字节时间 (TTFB)](https://web.dev/articles/ttfb?hl=zh-cn) 可以显著缩短。

虽然 TTFB 不是[以用户为中心的性能指标](https://web.dev/articles/user-centric-performance-metrics?hl=zh-cn)，但是诊断 [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp?hl=zh-cn)（以用户为中心的指标）存在的问题的重要指标。

CDN 在改进 LCP 方面尤其有效，因为它们可以改进文档传送（通过减少连接设置和缓存文档中的 TTFB），并改善渲染 LCP 元素所需的任何静态资源的传送。

### 其他功能

CDN 通常除了提供核心 CDN 产品之外，还提供多种其他功能。常用的功能包括：负载均衡、图像优化、视频串流、边缘计算和安全产品。

## 如何设置和配置 CDN

理想情况下，您应该使用 CDN 来为整个网站提供内容。概括来讲，设置流程包括向 CDN 提供商注册，然后更新您的 CNAME DNS 记录以指向 CDN 提供商。例如，`www.example.com` 的 CNAME 记录可能指向 `example.my-cdn.com`。经过此次 DNS 更改，您网站的流量将通过 CDN 进行路由。

如果无法使用 CDN 提供所有资源，您可以将 CDN 配置为仅提供一部分资源，例如仅提供静态资源。为此，您可以创建一个单独的 CNAME 记录，该记录仅用于应由 CDN 传送的资源。例如，您可以创建指向 `example.my-cdn.com` 的 `static.example.com` CNAME 记录。您还需要重写 CDN 提供的资源的网址，使其指向您创建的 `static.example.com` 子网域。

虽然此时需设置您的 CDN，但您的配置可能存在效率低下的情况。本文接下来的两节将介绍如何通过提高缓存命中率和启用性能功能来充分利用 CDN。

## 提高缓存命中率

有效的 CDN 设置将从缓存中提供尽可能多的资源。这通常通过缓存命中率 (CHR) 来衡量。缓存命中率的定义为指定时间间隔内的缓存命中数除以总请求数。

新初始化的缓存的 CHR 将为 0，但此数字会随着缓存中填充资源而增加。对于大多数网站，将 CHR 设为 90% 是一个不错的目标。您的 CDN 提供商应向您提供有关您的 CHR 的分析和报告。

优化 CHR 时，首先要验证的是所有可缓存资源是否都已正确缓存和缓存。这是一项简单的评估，所有网站都应进行此评估。

从广义上讲，下一级别的 CHR 优化是微调您的 CDN 设置，以确保逻辑上等效的服务器响应不会单独进行缓存。这是一种常见的低效情况，由查询参数、Cookie 和请求标头等因素对缓存的影响所致。

### 初步审核

大多数 CDN 都会提供缓存分析。此外，您还可以使用 [WebPageTest](https://webpagetest.org/) 和 [Lighthouse](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl?hl=zh-cn) 等工具快速验证页面的所有静态资源是否缓存了正确的时长。这是通过检查每个资源的 HTTP 缓存标头来实现的。使用适当的最长存留时间 (TTL) 缓存资源，可避免日后进行不必要的源站提取，进而增加 CHR。

为了让 CDN 能够缓存资源，通常至少需要设置以下标头之一：

- `Cache-Control: max-age=`
- `Cache-Control: s-maxage=`
- `Expires`

此外，虽然这不会影响 CDN 是否缓存资源或如何缓存资源，但最好同时设置 [`Cache-Control: immutable`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Cache-Control#Revalidation_and_reloading) 指令。`Cache-Control: immutable` 表示资源“在其新鲜度生命周期内不会更新”。因此，在从浏览器缓存提供资源时，浏览器不会重新验证资源，从而避免了不必要的服务器请求。很遗憾，只有 Firefox 和 Safari [支持](https://caniuse.com/#feat=mdn-http_headers_cache-control_immutable)此指令，基于 Chromium 的浏览器不支持。此[问题](https://bugs.chromium.org/p/chromium/issues/detail?id=611416)跟踪的是 Chromium 对 `Cache-Control: immutable` 的支持。为此问题加注星标有助于鼓励用户支持此功能。

如需详细了解 HTTP 缓存，请参阅[使用 HTTP 缓存防止不必要的网络请求](https://web.dev/articles/http-cache?hl=zh-cn)。

### 微调

对于 CDN 缓存的工作原理，我们稍微简单地解释了一下：资源的网址将用作缓存和从缓存中检索资源的键。在实践中，大多数情况下仍然是这样，但由于请求标头和查询参数等因素的影响，这一点略微复杂。因此，若要最大程度地提高 CHR 并确保向用户提供正确的内容，重写请求 网址 是一项重要技术。正确配置的 CDN 实例能够在过于精细的缓存（会损害 CHR）和不够精细的缓存（导致向用户提供错误响应）之间实现正确的平衡。

#### 查询参数

默认情况下，CDN 在缓存资源时会将查询参数考虑在内。不过，对查询参数处理方式的微小调整可能会对 CHR 产生重大影响。例如：

- **不必要的查询参数**

  默认情况下，CDN 会分别缓存 `example.com/blog` 和 `example.com/blog?referral_id=2zjk`，即使它们可能是相同的底层资源也是如此。此问题可通过将 CDN 的配置调整为忽略 `referral\_id` 查询参数来解决此问题。

- **查询参数顺序**

  CDN 会将 `example.com/blog?id=123&query=dogs` 与 `example.com/blog?query=dogs&id=123` 分开缓存。对于大多数网站，查询参数的顺序无关紧要，因此配置 CDN 来对查询参数进行排序（从而对用于缓存服务器响应的网址进行标准化处理）将增加 CHR。

#### 更改

[Vary](https://developer.mozilla.org/docs/Web/HTTP/Headers/Vary) 响应标头会通知缓存，与特定网址对应的服务器响应可能会因请求中设置的标头（例如，[Accept-Language](https://developer.mozilla.org/docs/Web/HTTP/Headers/Accept-Language) 或 [Accept-Encoding](https://developer.mozilla.org/docs/Web/HTTP/Headers/Accept-Encoding) 请求标头）而有所不同。因此，它会指示 CDN 单独缓存这些响应。Vary 标头未得到 CDN 的广泛支持，并且可能导致本来可缓存的资源不能从缓存中提供。

虽然 Vary 标头可能是一个有用的工具，但不当使用会损害 CHR。此外，如果您确实使用了 `Vary`，将请求标头标准化将有助于改进 CHR。例如，如果不进行标准化，请求标头 `Accept-Language: en-US` 和 `Accept-Language: en-US,en;q=0.9` 将会导致两个单独的缓存条目，即使它们的内容可能完全相同。

#### Cookie

在请求中通过 [`Cookie`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Cookie) 标头设置 Cookie；通过 `Set-Cookie` 标头在响应中设置 Cookie。应避免不必要地使用 [`Set-Cookie`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie) 标头，因为缓存通常不会缓存包含此标头的服务器响应。

## 性能特点

本部分讨论 CDN 通常提供的性能功能，作为其核心产品的一部分。许多网站忘记启用这些功能，因此错失了轻松提升效果的机会。

### 压缩

所有基于文本的响应都应使用 gzip 或 Brotli 进行[压缩](https://web.dev/articles/reduce-network-payloads-using-text-compression?hl=zh-cn#data_compression)。如果可以选择的话，请选择 Brotli 而非 gzip。Brotli 是一种较新的压缩算法，与 gzip 相比，可以实现更高的压缩比。

Brotli 压缩有两种 CDN 支持：“Brotli from origin”和“Brotli 自动压缩”。

#### 原产地 Brotli

源站 Brotli 是指 CDN 提供由源站 Brotli 压缩的资源。尽管这看起来似乎是所有 CDN 都应该能够直接支持的一项功能，但它要求 CDN 能够缓存与给定网址对应的资源的多个版本（换句话说，是 gzip 压缩版本和 Brotli 压缩版本）。

#### 自动 Brotli 压缩

自动 Brotli 压缩是指由 CDN 对资源进行 Brotli 压缩的情况。CDN 可以压缩可缓存和不可缓存的资源。

首次请求资源时，系统会通过“足够好”的压缩提供资源，例如 Brotli-5。这种类型的压缩适用于可缓存和不可缓存的资源。

同时，如果资源可缓存，CDN 将使用离线处理，以更强大但速度慢得多的压缩级别（例如 Brotli-11）对该资源进行压缩。完成此压缩后，将缓存压缩程度较大的版本，并将其用于后续请求。

#### 压缩方面的最佳做法

希望最大限度地提高性能的网站应同时在其源服务器和 CDN 上应用 Brotli 压缩。在源站进行 Brotli 压缩，可最大限度地降低无法通过缓存传送的资源的传输大小。为防止服务请求出现延迟，源站应使用相当保守的压缩级别来压缩动态资源（例如 Brotli-4）；可以使用 Brotli-11 对静态资源进行压缩。如果源不支持 Brotli，则可以使用 gzip-6 压缩动态资源；gzip-9 可用于压缩静态资源。

### TLS 1.3

TLS 1.3 是[传输层安全协议 (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) 的最新版本，而 TLS 是 [HTTPS](https://en.wikipedia.org/wiki/HTTPS) 使用的加密协议。与 TLS 1.2 相比，TLS 1.3 可以提供更好的隐私保护和性能。

TLS 1.3 将 TLS 握手从两次往返缩短为一次。对于使用 HTTP/1 或 HTTP/2 的连接，将 TLS 握手缩短为一次往返，从而有效地将连接设置时间缩短了 33%。

![TLS 1.2 和 TLS 1.3 握手比较](https://web.dev/static/articles/content-delivery-networks/image/comparison-the-tls-12-4f496629b0b9f.png?hl=zh-cn)

### HTTP/2 和 HTTP/3

HTTP/2 和 HTTP/3 均提供优于 HTTP/1 的性能优势。在这两者中，HTTP/3 具有更大的*潜在*性能优势。HTTP/3 尚未完全标准化，但一旦实现，它将被广泛[支持](https://caniuse.com/#feat=http3)。

#### HTTP/2

如果您的 CDN 默认未启用 [HTTP/2](https://almanac.httparchive.org/en/2019/http2)，您应考虑将其启用。HTTP/2 可提供比 HTTP/1 更多的[性能优势](https://hpbn.co/http2)，并且受所有主流浏览器的[支持](https://caniuse.com/#feat=http2)。HTTP/2 的性能功能包括：[多路复用](https://hpbn.co/http2/#request-and-response-multiplexing)、[数据流优先级](https://hpbn.co/http2/#stream-prioritization)和[标头压缩](https://tools.ietf.org/html/rfc7541/)。

- **多路复用**

  多路复用可以说是 HTTP/2 最重要的功能。借助多路复用技术，单个 TCP 连接可以同时处理多个请求-响应对。这样可消除不必要的连接设置的开销；考虑到浏览器在给定时间可以打开的连接数是有限的，这也意味着浏览器现在能够并行请求网页的更多资源。从理论上说，多路复用不需要对串联和精灵表等 HTTP/1 优化。但是，在实践中，鉴于较大的文件能够更好地压缩，这些技术仍然适用。

- **数据流优先级**

  多路复用支持多个并发数据流；[数据流优先级](https://httpwg.org/specs/rfc7540.html#StreamPriority)提供了一个接口，用于传达其中每个数据流的相对优先级。这有助于服务器最先发送最重要的资源，即便它们并不是最先请求的。

数据流优先级由浏览器通过依赖关系树表示，只是*首选项*声明：换言之，服务器没有义务满足（甚至考虑）浏览器提供的优先级。当网站中的更多内容通过 CDN 提供时，数据流优先级的确定会更为有效。

HTTP/2 资源优先级的 CDN 实现差别很大。如需确定您的 CDN 是否完全且正确地支持 HTTP/2 资源优先级，请参阅 [HTTP/2 速度快吗？](https://ishttp2fastyet.com/)。

尽管将 CDN 实例切换到 HTTP/2 在很大程度上需要改变，但在生产环境中启用此更改之前，请务必对其进行全面测试。HTTP/1 和 HTTP/2 对请求和响应标头使用相同的惯例，但是如果不符合这些惯例，HTTP/2 的容忍度就会大大降低。因此，一旦启用 HTTP/2，非规范做法（例如在标头中添加非 ASCII 字符或大写字符）就可能会开始导致错误。如果发生这种情况，浏览器下载资源的尝试将失败。失败的下载尝试将显示在开发者工具的“Network”标签页中。此外，控制台中还会显示错误消息“ERR_HTTP2_PROTOCOL_ERROR”。

#### HTTP/3

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) 是 [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) 的继任者。自 2020 年 9 月起，所有主流浏览器均针对 HTTP/3 提供实验性[支持](https://caniuse.com/#feat=http3)，部分 CDN 均支持此功能。相较于 HTTP/2，性能是 HTTP/3 的主要优势。具体而言，HTTP/3 在连接级别消除了队头阻塞，并缩短了连接设置时间。

- **消除队首阻塞**

  HTTP/2 引入了多路复用功能，该功能允许使用单一连接同时传输多个数据流。但是，使用 HTTP/2 时，单个丢弃的数据包会阻止连接上的所有数据流（这种现象称为队头阻塞）。使用 HTTP/3 时，丢弃的数据包仅会阻止单个数据流。这一改进主要归功于 HTTP/3（使用 [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol)，HTTP/3 通过 [QUIC](https://en.wikipedia.org/wiki/QUIC) 使用 UDP）而非 [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)。这使得 HTTP/3 特别适合通过拥塞或有损网络进行数据传输。

![HTTP/1、HTTP/2 和 HTTP/3 之间数据传输差异的示意图](https://web.dev/static/articles/content-delivery-networks/image/diagram-showing-differen-e7307623724b5.png?hl=zh-cn)

- **缩短连接设置时间**

  HTTP/3 使用 TLS 1.3，因此也具备其性能优势：建立新的连接只需要单次往返，恢复现有连接不需要任何往返。

![TLS 1.2、TLS 1.3、TLS 1.3 0-RTT 和 HTTP/3 之间的连接恢复比较](https://web.dev/static/articles/content-delivery-networks/image/comparison-connection-re-303b82d055cb5.png?hl=zh-cn)

当网络连接质量不佳时，HTTP/3 对用户的影响最大：这不仅是因为 HTTP/3 能够比其前身更好地处理丢包问题，还因为 0-RTT 或 1-RTT 连接设置在高延迟网络上节约的绝对时间会更大。

### 图片优化

CDN 图片优化服务通常专注于可以自动应用的图片优化，以减小图片传输大小。例如：剥离 [EXIF](https://en.wikipedia.org/wiki/Exif) 数据、应用无损压缩，以及将图片转换为新版文件格式（例如 WebP）。在中位数网页上，图片约占传输字节数的 50%，因此优化图片可显著缩减网页大小。

### 缩减大小

[缩减大小](https://web.dev/articles/reduce-network-payloads-using-text-compression?hl=zh-cn#minification)可移除 JavaScript、CSS 和 HTML 中不必要的字符。最好在源服务器（而不是 CDN）进行缩减。网站所有者对要缩减的代码有了更多背景信息，因此与 CDN 采用的技术相比，他们通常可以使用更积极的缩减技术。但是，如果不能在源站缩减代码的大小，那么通过 CDN 缩减代码大小是一个不错的替代方案。

## 总结

- **使用 CDN**：CDN 可快速分发资源、减少源服务器的负载，并且有助于应对流量高峰。
- **尽可能主动缓存内容**：静态和动态内容都可以并且应该进行缓存，但缓存时长不尽相同。定期审核您的网站，确保以最佳方式缓存内容。
- **启用 CDN 性能功能**：Brotli、TLS 1.3、HTTP/2 和 HTTP/3 等功能可进一步提高性能。