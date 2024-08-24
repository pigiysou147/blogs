---
date: 2023-02-01
category: 性能优化
tags:
 - 视频
---
# 视频表现

在[上一单元](/web/performance/image-performance)中，您学习了与图片相关的一些性能技术。图片是网络上广泛使用的资源类型，但要谨慎优化并考虑用户的视口，则会占用大量带宽。

但是，图片并不是网络上常见的唯一媒体类型。视频是网页上常用的另一种媒体类型。查看一些可能的优化措施之前，请务必先了解 `<video>` 元素的工作原理。

## 视频源文件

处理媒体文件时，您在操作系统中识别的文件（`.mp4`、`.webm` 等）称为容器。一个容器包含一个或多个数据流。在大多数情况下，这是指视频和音频流。

您可以使用编解码器压缩每个流。例如，`video.webm` 可以是 [WebM](https://www.webmproject.org/) 容器，其中包含使用 [VP9](https://en.wikipedia.org/wiki/VP9) 压缩的视频流和使用 [Vorbis](https://en.wikipedia.org/wiki/Vorbis) 压缩的音频流。

了解容器和编解码器之间的区别很有帮助，因为它可以帮助您使用明显更少的带宽压缩媒体文件，从而缩短总体网页加载时间，并有望改善网页的 [Largest Contentful Paint (LCP)](https://web.dev/articles/lcp)。LCP 是一项[以用户为中心的指标](https://web.dev/articles/user-centric-performance-metrics)，也是三个[核心网页指标](https://web.dev/articles/vitals)之一。

压缩视频文件的一种方法需要使用 [FFmpeg](https://ffmpeg.org/)：

```bash
ffmpeg -i input.mov output.webm
```

上述命令虽然与使用 FFmpeg 时的基本一样，但会接受 `input.mov` 文件，并使用默认 FFmpeg 选项输出 `output.webm` 文件。上述命令会输出一个较小的视频文件，该文件适用于所有新型浏览器。通过调整[视频](https://ffmpeg.org/ffmpeg.html#Video-Options)或 [FFmpeg 提供的音频选项](https://ffmpeg.org/ffmpeg.html#Audio-Options)，您可以进一步缩减视频的文件大小。例如，如果您要使用 `<video>` 元素替换 GIF，则应移除相应音轨：

```bash
ffmpeg -i input.mov -an output.webm
```

**重要提示** ：[`-an`](https://ffmpeg.org/ffmpeg.html#Audio-Options) 标志会从输出文件中移除所有音频流。如果您的视频用例不需要音频（例如，[使用视频替换动画 GIF](https://web.dev/articles/replace-gifs-with-videos)），那么这是一项重要的优化，因为移除音频流会减小视频文件的大小，即使源视频文件中已有的音频流处于无声状态也是如此。如果您想进一步调整，FFmpeg 在不使用可变比特率编码的情况下压缩视频时，提供了 `-crf` 标志。`-crf` 代表“恒定速率系数”。通过接受给定范围内的整数，可以调整压缩级别。

H.264 和 VP9 等编解码器支持 `-crf` 标志，但其使用方式取决于您所使用的编解码器。如需了解详情，请参阅[以 H.264 格式对视频编码的恒定速率系数](https://trac.ffmpeg.org/wiki/Encode/H.264#crf)，以及[使用 VP9 对视频进行编码时的恒定质量](https://trac.ffmpeg.org/wiki/Encode/VP9#constantq)。

### 多种形式

使用视频文件时，如果浏览器不支持所有现代格式，那么指定多种格式可以作为后备选项。

```html
<video>
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>
```

由于[所有现代浏览器都支持 H.264 编解码器](https://caniuse.com/mpeg4)，因此 MP4 可用作旧版浏览器的后备方案。WebM 版本可以使用较新的 [AV1 编解码器](https://en.wikipedia.org/wiki/AV1)（[尚未得到广泛支持](https://caniuse.com/av1)），也可以使用较早的 VP9 编解码器（[比 AV1 支持更好](https://caniuse.com/webm)，但通常不能像 AV1 那样压缩）。

**注意** ：与 `<picture>` 元素类似，您在 `<video>` 元素中列出 `<source>` 子元素的顺序决定了浏览器的优先级。如果您先指定 MP4 来源，则浏览器会选择该格式，而不考虑它是否支持可能指定的更高效的格式。## `poster` **属性**

视频的海报图片是使用 `<video>` 元素上的 [`poster` 属性](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-poster)添加的，该属性会在开始播放前向用户提示视频内容可能是什么：

```html
<video poster="poster.jpg">
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>
```

**注意** ：没有 `poster` 图片的 `<video>` 元素以前不是 [LCP 候选版本](https://web.dev/articles/lcp#what-elements-are-considered)。 [此问题](https://bugs.chromium.org/p/chromium/issues/detail?id=1289664)现已解决，视频文件的第一帧（经过绘制）将被视为 LCP 候选内容。如果您的网站会大量使用视频文件，请务必使用 `poster` 属性（如果视频不能自动播放），或确保视频 LCP 候选版本经过优化，以便在未使用 `poster` 属性时能够尽快显示。## 自动播放

根据 HTTP Archive，网络上 [20% 的视频](https://almanac.httparchive.org/en/2022/media#fig-37)包含 `autoplay` 属性。`autoplay` 在必须立即播放时使用，例如用作视频背景或[替换动画 GIF](https://web.dev/articles/replace-gifs-with-videos)。

GIF 动画可能会非常大，特别是当它有许多包含复杂细节的帧时。动画 GIF 会消耗数兆字节的数据并不罕见，这会大量消耗带宽，以更好地用于更关键的资源。您通常应该避免使用动画图片格式，因为 `<video>` 等效项对于此类媒体的效率要高得多。

如果您的网站要求自动播放视频，您可以直接在 `<video>` 元素上使用 `autoplay` 属性：

```html
<!-- This will automatically play a video, but
     it will loop continuously and be muted: -->
<video autoplay muted loop playsinline>
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>
```

**注意** ：具有指定 `autoplay` 属性的 `<video>` 元素会立即开始下载，即使这些元素位于初始视口之外也是如此。通过结合使用 `poster` 属性与 [Intersection Observer API](https://developer.mozilla.org/docs/Web/API/Intersection_Observer_API)，您可以将页面配置为仅在视频位于视口内时[下载](https://web.dev/articles/lazy-loading-video#video-gif-replacement)。`poster` 图片可能是低画质的图片占位符，例如视频的第一帧。视频显示在视口中后，浏览器就会开始下载视频。这可以缩短初始视口内内容的加载时间。但其缺点是，为 `autoplay` 使用 `poster` 图片时，您的用户收到的图片只会短暂显示，直到视频加载完毕并开始播放。

**注意** ：网页加载时自动播放视频可能会让用户感到不舒服，尤其是在视频包含音频串流的情况下，如果设备音量很大，视频可能会让观看者感到惊悚。自动播放功能应仅在必要时使用，并且应考虑到用户预期的需求。为尽可能减少由自动播放视频导致的糟糕用户体验，各浏览器针对视频满足自动播放条件设定了不同的条件。如需了解详情，请参阅 [Chrome](https://developer.chrome.com/blog/autoplay/) 和 [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/) 的自动播放政策。## 用户启动的播放

通常，一旦 HTML 解析器发现 `<video>` 元素，浏览器就会开始下载视频文件。如果您有 `<video>` 元素在用户发起播放时播放，那么您可能需要等到用户与其互动之后，才开始下载视频。

您可以使用 `<video>` 元素的 [`preload`](https://developer.mozilla.org/docs/Web/HTML/Element/video#attr-preload) 属性来影响为视频资源下载的内容：

* 设置 `preload="none"` 可告知浏览器不应预加载任何视频内容。
* 设置 `preload="metadata"` 仅提取视频元数据，例如视频时长，可能还有一些其他粗略信息。

如果您要加载用户需要开始播放的视频，则最好设置 `preload="none"`。

**注意** ：`preload` 属性是一个*提示* - 浏览器可能会选择不遵循该属性，并且它在不同浏览器中或在将移动设备与桌面设备进行比较时的行为方式可能会有所不同。在这种情况下，您可以通过添加 `poster` 图片来改善用户体验。这可以向用户提供关于视频内容的一些背景信息。此外，如果海报图片是您的 LCP 元素，您可以使用 `<link rel="preload">` 提示和 `fetchpriority="high"` 来提高 `poster` 图片的优先级：

```html
<link rel="preload" as="image" href="poster.jpg" fetchpriority="high">
```

**注意** ：如果视频不是视口中的最大元素，预加载 `poster` 图片可能会因为带宽争用而延迟 LCP，这时可用带宽会分配给其他更关键的资源。## 嵌入

考虑到高效优化和提供视频内容非常复杂，有必要将此问题分流给 YouTube 或 Vimeo 等专用视频服务。这些服务会为您优化视频的传送过程，但嵌入来自第三方服务的视频可能会对性能产生自身的影响，因为嵌入的视频播放器通常会提供大量额外的资源，例如 JavaScript。

鉴于这种现实，第三方视频嵌入可能会显著影响网页性能。根据 HTTP Archive，YouTube 嵌入网站的主线程阻塞超过 [1.7 秒](https://almanac.httparchive.org/en/2022/third-parties#fig-8)。长时间阻塞主线程是一个严重的用户体验问题，可能会影响网页的 [Interaction to Next Paint (INP)](https://web.dev/articles/inp)。不过，您可以在初始页面加载期间不立即加载嵌入内容，而是为嵌入创建一个占位符，并在用户与之互动时将其替换为实际的视频嵌入，从而做出妥协。

**重要提示** ：如需了解有关 Facade，请参阅[介绍延迟加载图像和 `<iframe>` 元素的模块中的 Facade 的部分](/web/performance/lazy-load-images-and-iframe-elements#facades)。## 视频演示

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/learn-performance-video?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="学习效果视频"></iframe>
