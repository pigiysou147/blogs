---
date: 2023-02-01
category: 图片
---
# 网络图片的简明历史 

无论您学习了如何面向 Web 设计和开发应用，都只需极少的介绍 `` 元素。[于 1993 年在 Netscape（当时为“Mosaic”）中推出](https://www.wired.com/2010/04/0422mosaic-web-browser/)并于 1995 年纳入 HTML 规范，``在网络平台中一直发挥着一个简单但强大的作用。开发者使用 `src` 属性添加“源”图片文件，并在图片无法渲染或辅助技术请求替代图片时使用 `alt` 属性提供替代文本。在这里，浏览器只有一个作业：获取图片数据，然后尽快渲染。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOpVPJa?height=300&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen jOpVPJa" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

对于大多数 Web 开发历史而言，处理图像并没有比这复杂得多。而且，尽管现代 Web 非常复杂，但处理图片的基本原理并没有改变：使用适合 Web 的图片格式以实现兼容性，使用合理的压缩来节省带宽，以及尺寸适合图片将在页面布局中占据的空间。

采用固定宽度的布局可以使这个过程变得简单（比如我们原本认为用户对网络体验拥有更多决定权时）。设置图片来源的大小非常简单。如果图片占据的空间为 500 像素（宽）x 300 像素（高），则可以指定相同大小的源图片。

## 自适应布局中的图片

除了灵活的布局和 CSS 媒体查询的使用之外，“灵活的图片和媒体”是[自适应设计](/blogs/web/design)的三个定义方面之一。为了让图片变得灵活，开发者开始使用 CSS 在图片（或所有网站级图片）上设置 `max-width: 100%`，以指示浏览器的渲染引擎通过缩小图片来防止图片溢出其父级容器。从视觉上看，这非常行之有效，也就是能流畅地缩小[光栅图片](/blogs/web/images/raster-images)。使用 1-2 行 CSS 时，缩小后的图片始终看起来就像我们指定了一个应以该尺寸显示的图片来源一样。如果为渲染引擎提供的图片数据超过了图片在布局中占据的空间所必需的数据，渲染引擎能够就如何渲染缩小的图片做出明智的决策，并且既不会产生任何视觉伪影或模糊，也不会造成模糊。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzjpXBP?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen YzjpXBP" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

您通常不会希望“放大”图片，也就是说，以大于源图片的固有尺寸来渲染 ``。显示的图片会显得模糊不清，并且有纹理。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/XWBNbOx?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen XWBNbOx" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

使用 `img { max-width: 100% }` 意味着，当灵活容器调整大小时，系统将视情况缩小图像。与设置更严格的 `width: 100%` 不同，这还可以确保图像不会超出其固有尺寸。很长一段时间里，这是遵循图片处理规则的原则：使用浏览器能够理解的格式，使用合理的压缩级别，且绝不向上缩放图片。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/gOjLpEM?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen gOjLpEM" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

不过，尽管这种方法在视觉上非常简单有效，但代价是巨大的性能。由于 `` 仅支持单个图片数据来源，因此这种方法需要我们提供一个固有尺寸的图片素材资源，其尺寸应与可显示的最大尺寸相同。如果图片要占用布局中宽度可能介于 `300px` 到 `2000px` 之间的空间（具体取决于用户的视口大小），则其固有宽度至少为 `2000px` 的图片来源。对于仅通过小视口查看网页的用户，一切看起来都符合预期，图片可以正常缩放。在呈现的网页中，大型但缩小的源图片看起来与大小适当的源图片并无二致。但是，它们仍然会传输和渲染 `2000px` 宽的图像，消耗大量的带宽和处理能力，而不会产生任何实际好处。

随着第一批“Retina”设备的出现，情况变得更加糟糕，因为显示密度除了视口尺寸外也成为一个一项问题。图像源需要更大的固有宽度才能适应高密度显示屏。简而言之，密度翻一番的显示屏需要两倍的图片像素才能尽可能清晰地渲染图像。

在这里，开发者再次依靠渲染引擎能够在视觉上缩小图像。通过在 `src` 中为浏览器提供宽度为 `800px` 的源图片，然后指定通过 CSS 以宽度为 `400px` 的宽度显示该图片，就会得到以两倍像素密度渲染的图片：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/QWBKrjX?height=700&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen QWBKrjX" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 700px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

当然，在对布局和高密度显示屏进行剪裁以适应最大空间大小的源图片的情况下，所有用户均可*直观地*看到它。在低密度小显示屏上渲染的大型高分辨率图像源看起来与任何其他低密度小图像类似，但感觉速度要慢得多。用户将需要承担宽度为 4000 像素的大量图片源的所有性能开销，这却毫无益处。

长期以来，`` 在很大程度上只做了一件事：它“获取图片数据并将其显示在屏幕上”。毫无疑问，它确实做得相当不错，但 `` 还无法适应我们所经历的浏览环境的彻底变化。虽然自适应设计已成为一种主流开发做法，但浏览器近 20 年来一直优化 `img` 的性能，但对于除最特权用户之外的所有用户，页面的图片内容从一开始就效率低下。无论浏览器以多快的速度请求、解析和渲染图片来源，该素材资源都可能比用户所需的资源大得多。