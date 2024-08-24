---
date: 2023-02-01
category: 图片
tag:
  - svg
---
# 矢量图像 

矢量图形是一种将一系列形状、坐标和路径传达给其渲染上下文的方法。它们是一组关于如何绘制图像的说明。当该图像放大或缩小时，系统会重新绘制图像所代表的一组点和线条以按比例进行缩放。两点之间的平滑曲线会像任何大小一样平滑地重新绘制，类似于 HTML 元素上 CSS 定义的边框会在该元素在视口中缩放时重新绘制。

可缩放矢量图形 (SVG) 是由 W3C 开发的基于 XML 的标记语言。它是专为现代网络设计的矢量图像格式。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNKorKN?height=500&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen WNKorKN" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

任何专门用于编辑矢量艺术作品的设计软件都允许您将图片导出为 SVG。但 SVG 是一种人类可读懂的标准化标记语言，无论使用哪种文本编辑软件创建 SVG，都可以使用任何文本编辑软件创建和修改；不过对于任何真正复杂的图片来说，这很快就会变得不现实。SVG 可以使用 CSS 设置样式，也可以包含 JavaScript，以便将行为和互动构建到图片本身中。

尽管对于设计师和开发者来说，SVG 格式具有明显的吸引力，但就最终用户体验而言，SVG 也是一种非常强大的格式。与光栅图片格式中较为规范的基于像素网格的信息相比，SVG 源中包含的描述性信息通常非常紧凑。在简单形状的情况下，在一定程度上过于简化，告诉浏览器“在 1x1 和 1x5 之间绘制 1 像素的红线”和“1x1 表示红色像素”之间的区别。1x2 表示红色像素。1x3 表示红色像素。1x4 表示红色像素。1x5 代表红色像素。" 反过来，SVG 的描述性本质需要浏览器进行更多的解读 — 也就是“思考” 。因此，复杂的 SVG 的渲染可能更费力。同样，高度复杂的图像可能意味着一组详细的指令和大量的传输。

您可能需要进行一些试验和试错，才能立即识别出 SVG 提供的候选图片来源，而不是传统的光栅格式。但有一些准则：图标等界面元素几乎总是由 SVG 提供。线条清晰、纯色和形状清晰明确的海报图片可能非常适合使用 SVG。

SVG 是一个庞大的话题：这是一种可与 HTML 共存的整套标记语言，具有独特的样式选项和功能。如需详细了解 SVG，请参阅 [MDN SVG 教程](https://developer.mozilla.org/docs/Web/SVG/Tutorial/Introduction)。