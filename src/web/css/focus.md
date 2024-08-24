---
date: 2024-03-31
category: css
tags:
 - focus
---
# 聚焦

您点击自己的网页上的链接后，会跳转到网站的主要内容。 这些链接通常称为跳转链接或锚链接。 当该链接被键盘激活时，使用 *Tab* 键和 *Enter* 键，主内容容器周围会出现一个焦点环。这是为什么？

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/poRWRjp?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen poRWRjp" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

这是因为 `<main>` 具有 `tabindex="-1"` 属性值，这意味着可以通过编程方式聚焦它。当定位到 `<main>` 时（因为浏览器网址栏中的 `#main-content` 与 `id` 匹配），它会获得程序化焦点。在这些情况下，人们往往倾向于移除焦点样式，但适当地处理焦点有助于打造易于访问的良好用户体验。这也是激发互动兴趣的好地方。

## 为什么焦点很重要？

作为 Web 开发者，您的职责是打造一个方便所有人访问并包容的网站。使用 CSS 创建可访问的焦点状态是这项责任的一部分。

焦点样式可以帮助使用设备（例如键盘或[开关控件](https://www.24a11y.com/2018/i-used-a-switch-control-for-a-day/)）的用户浏览网站并与网站互动。如果某个元素获得焦点，但没有视觉指示，用户可能会忘记焦点所在的元素。这可能会导致导航问题，并在用户打开错误的链接等情况下引发不必要的行为。

**注意 ** ：如需详细了解无障碍对无障碍的重要性，请参阅[了解无障碍：专注](/web/accessibility/focus)；如需详细了解如何在 HTML 中管理焦点，请参阅[学习 HTML：专注](/web/html/focus)。## 元素如何获得焦点

某些元素可自动聚焦；这些是接受交互和输入的元素，例如 `<a>`、`<button>`、`<input>` 和 `<select>`。简而言之，就是所有表单元素、按钮和链接。 通常，您可以使用 *Tab* 键浏览网站的可聚焦元素，在页面上前进，使用 *shift* + *Tab* 键向后移动。

此外，还有一个名为 `tabindex` 的 HTML 属性，每当有人按下 Tab 键或者焦点因网址的哈希更改或 JavaScript 事件而改变时，您可以通过该属性更改 Tab 键索引（即元素的聚焦顺序）。如果将 HTML 元素的 `tabindex` 设置为 `0`，该元素可以通过 Tab 键获得焦点，并将遵循全局标签页索引（由文档源代码顺序定义）。

如果您将 `tabindex` 设为 `-1`，它只会以编程方式接收焦点，即仅在发生 JavaScript 事件或哈希更改（与网址中元素的 `id` 一致）发生时。如果您将 `tabindex` 设为任何高于 `0` 的值，它将从按文档源顺序定义的全局标签页索引中移除。Tab 键顺序现在由 `tabindex` 的值定义，因此具有 `tabindex="1"` 的元素会先于具有 `tabindex="2"` 的元素获得焦点。

**警告 ** ：遵循文档源顺序非常重要，只有**绝对需要更改**时，才应更改焦点顺序。设置 `tabindex` 和使用 CSS 布局（例如 Flexbox 和网格）更改视觉顺序时，这一点都适用。如果 Web 上的内容变得不可预测，则会给用户带来难以访问的体验。## 设置焦点样式

元素获得焦点时，浏览器的默认行为是显示聚焦环。此聚焦环因浏览器和操作系统而异。

您可以通过在[伪类课程](/web/css/pseudo-classes)中了解的 `:focus`、`:focus-within` 和 `:focus-visible` 伪类，通过 CSS 更改此行为。请务必设置与元素的默认样式形成**对比**的焦点样式。例如，一种常见的方法是利用 `outline` 属性。

```css
a:focus {
  outline:2px solid slateblue;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ZELXLMw?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen ZELXLMw" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`outline` 属性看起来可能过于靠近链接的文本，但 `outline-offset` 属性可以帮助做到这一点，因为它可以增添额外的视觉 `padding`，而不会影响元素填充的几何图形大小。`outline-offset` 的正数值会向外推动轮廓，负值会将轮廓向内拉出。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/xxgXgQx?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 xxgXgQx" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

目前，在某些浏览器中，如果您为元素设置了 `border-radius` 并使用 `outline`，那么两者将无法匹配 - 轮廓会具有尖角。因此，人们倾向于使用模糊处理半径较小的 `box-shadow`，因为 `box-shadow` 会裁剪至形状，并遵循 `border-radius`，但 **这种样式在 Windows 高对比度模式下不会显示** 。这是因为 Windows 高对比度模式不应用阴影，并且大多会忽略背景图片，从而更好地支持用户的偏好设置。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/bGgogyM?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen bGgogyM" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

<video></video>
## 总结

创建与元素的默认状态形成对比的焦点状态非常重要。默认浏览器样式已经为您执行了此操作，但如果您想更改此行为，请注意以下事项：

* 避免对可以获得键盘焦点的元素使用 `outline: none`。
* 避免将 `outline` 样式替换为 `box-shadow`。 因为它们不会在 Windows 高对比度模式下显示
* 只有在绝对必要的情况下，才在 HTML 元素上为 `tabindex` 设置正值。
* 确保焦点状态与默认状态相比非常清晰。


