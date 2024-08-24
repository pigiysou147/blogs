---
date: 2024-03-31
category: html
---
# 详情和摘要

了解非常有用的详细信息和摘要元素的工作原理，以及在哪里使用它们。

披露声明 widget 是一种用于隐藏和显示内容的界面控件。如果您是在 web.dev 上阅读本文，并且您的视口宽度小于 106 ems，则点击此段落上方的“在此页面上”会显示此部分的目录。如果您没有看到该选项，请缩小浏览器，以便以披露 widget 的形式查看此页面上的目录导航。

[手风琴式折叠](https://en.wikipedia.org/wiki/Accordion_(GUI))图形界面是一系列垂直堆叠的披露信息 widget。手风琴界面的一个常见用例是许多网站上的常见问题解答 (FAQ) 页面。 手风琴常见问题解答包含可见问题列表；点击问题可展开或“披露”该问题的答案。

[jQuery](https://jqueryui.com/accordion/) 至少从 2009 年起就一直包含手风琴界面模式。原始的不含 JavaScript 的手风琴式折叠解决方案包括将每个 FAQ 问题设为 `<label>`，后跟其标记的对勾标记，然后在勾选标记时显示 `<div>` 答案。CSS 如下所示：

```css
#FAQ [type="checkbox"]+ div.answer {
  /* all the answer styles */
  display: none;
}
#FAQ [type="checkbox"]:checked + div.answer {
  display: block;
}
```

为什么选择历史记录？没有 JavaScript 或表单控件黑客行为的手风琴等公开类 widget 是相对较新的添加；自 2020 年 1 月起，所有现代浏览器才完全支持 [`<details>`](https://developer.mozilla.org/docs/Web/HTML/Element/details) 和 [`<summary>`](https://developer.mozilla.org/docs/Web/HTML/Element/summary) 元素。现在，您只需使用语义 HTML 即可创建可正常运行（但不够吸引人）披露 widget。您只需要用到 `<details>` 和 `<summary>` 元素：它们是处理展开和收起内容的内置方式。当用户点击或点按 `<summary>` 时，或在 `<summary>` 获得焦点时释放 Enter 键时，父级 `<details>` 切换开关的内容将变为可见！

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWqgjQr?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="web-dot-dev 上的 Pen MWqgjQr" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

与所有语义内容一样，您可以逐步增强默认功能和外观。在本例中，只添加了一点 CSS 代码，但未添加任何其他内容：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ExeYgQd?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen ExeYgQd" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

您会注意到，这些 Codepen 不包含任何 JavaScript。

## 切换可见性：`open` **属性**

`<details>` 元素是披露声明 widget 容器。`<summary>` 是其父级 `<details>` 的摘要或图例。摘要会始终显示，它充当可切换父项其余内容的显示状态的按钮。与 `<summary>` 交互可切换 `<details>` 元素的 `open` 属性，从而切换显示自加标签摘要同级项。

`open` 属性是一个布尔值属性。如果存在，无论该值或缺失，它都表示所有 `<details>` 内容均向用户显示。如果 `open` 属性不存在，则只显示 `<summary>` 的内容。

由于 `open` 属性会在用户与控件交互时自动添加和移除，因此可以在 CSS 中使用该属性根据元素状态对元素进行不同样式设置。

您可以创建包含多个 `<details>` 元素的列表的手风琴，其中每个元素都有一个 `<summary>` 子元素。在 HTML 中省略 `open` 属性意味着 `<details>` 将全部收起或关闭，在网页加载时仅显示摘要标题；每个标题都是父级 `<details>` 中其余内容的打开者。如果您在 HTML 中添加 `open` 属性，则 `<details>` 将在网页加载时以展开方式呈现，并显示内容。

即使收起状态不是 DOM 的一部分，收起状态下的隐藏内容在某些浏览器中是可以搜索的，但在其他浏览器中无法搜索。如果您在 Edge 或 Chrome 中进行搜索，包含搜索字词的详细信息将展开即可显示出现位置。Firefox 或 Safari 无法复制此行为。

`<summary>` 必须是 `<details>` 元素的第一个子级，表示它嵌套的父级 `<details>` 元素其余内容的摘要、图片说明或图例。`<summary>` 元素的内容可以是任何标题内容、纯文本或可在段落中使用的 HTML。

## 切换摘要标记

在前面的两个 Codepen 中，您会注意到指向摘要的 [inline-start](https://developer.mozilla.org/docs/Web/CSS/CSS_Logical_Properties) 端的箭头。披露声明 widget 通常使用一个旋转（或扭动）的小三角形显示在屏幕上，该三角形用于指示打开/关闭状态，并且三角形旁边带有一个标签。`<summary>` 元素的内容用来为披露信息 widget 添加标签。 每个部分顶部的旋转箭头是在 `<summary>` 元素上设置的 [`::marker`](https://developer.mozilla.org/docs/Web/CSS/::marker)。与列表项一样，`<summary>` 元素支持 [`list-style`](https://developer.mozilla.org/docs/Web/CSS/list-style) 简写属性及其简写属性，包括 [`list-style-type`](https://developer.mozilla.org/docs/Web/CSS/list-style-type)。您可以使用 CSS 设置披露三角形的样式，包括将使用的标记从三角形更改为任何其他项目符号类型，包括带有 [`list-style-image`](https://developer.mozilla.org/docs/Web/CSS/list-style-image) 的图片。

如需应用其他样式，请使用类似于 [`details summary::marker`](/web/css/pseudo-elements#marker) 的选择器。`::marker` [伪元素](/web/css/selectors#pseudo-element)仅接受有限数量的样式。常见的做法是移除 `::marker` 并将其替换为更便于样式的 [`::before`](https://developer.mozilla.org/docs/Web/CSS/::before)，因为 CSS 样式会根据 open 属性的存在（或不存在）来略微更改所生成内容的样式。您可以通过设置 `list-style: none` 来移除披露声明 widget 图标，或者将标记的[内容](https://developer.mozilla.org/docs/Web/CSS/content)设置为 `none`，但应始终添加视觉指示，以告知视力正常的用户摘要内容是一个切换按钮，该按钮会在激活时显示和隐藏内容。

```css
details summary::before {
  /* all the styles */
}
details[open]summary::before {
  /* changes applied when open only */
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOvNMxL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen jOvNMxL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

此示例移除了默认标记，添加了生成的内容，以在详情关闭时创建 `+`，并在详情打开时创建 `-`。

如果您希望详情块默认打开，请在起始 `<details>` 标记中添加 `open` 属性。您还可以在每个对话框之间添加间距，并转换使用生成内容创建的标记的旋转角度，从而改进外观：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLxBajp?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen yLxBajp" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 错误的处理方式

如果您未添加 `<summary>`，浏览器将为您创建一个：带有标记和“details”一词。此摘要是影子根的一部分，因此不会应用作者 CSS 摘要样式。[](/web/html/template#shadow_dom)遗憾的是，Safari 不在[键盘焦点顺序](https://bugs.webkit.org/show_bug.cgi?id=249904)中包含详细信息。

如果您添加了 `<summary>`，但它不是 `<details>` 中的第一个元素，浏览器仍会按预期显示摘要。如果您在摘要中包含链接、标签或其他互动元素，它也不会失败，但浏览器会以不同的方式处理互动内容中的互动内容。例如，如果您在摘要中包含某个链接，有些浏览器会将摘要和链接同时添加到默认的标签页显示顺序中，但其他浏览器不会默认聚焦于该链接。如果您点击嵌套在 `<summary>` 中的 `<label>`，某些浏览器会将焦点置于关联的表单控件上；其他浏览器会将焦点置于表单控件上，并将 `<details>` 切换为开启或关闭。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/QWVLKxg?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="web-dot-dev 上的 Pen QWVLKxg" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## `HTMLDetailsElement` **接口**

与所有 HTML 元素一样，[`HTMLDetailsElement`](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement) 会继承 [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) 的所有属性、方法和事件，并添加 [`open`](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/open) 实例属性和 [`toggle`](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event) 事件。[`HTMLDetailsElement.open`](https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/open) 属性是一个反映 [`open`](https://developer.mozilla.org/docs/Web/HTML/Element/details#attr-open) HTML 属性的布尔值，用于指明是否向用户显示元素的内容（不统计 `<summary>`）。当 `<details>` 元素开启或关闭时，会触发切换事件。您可以使用 [`addEventListener()`](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) 监听此事件。

如果要编写一个脚本，以便在用户打开任何其他详细信息时关闭已打开的详细信息，请使用 [`removeAttribute("open")`](https://developer.mozilla.org/docs/Web/API/Element/removeAttribute) 移除 open 属性：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/PodYGBz?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen PodYGBz" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

这是使用 JavaScript 的唯一示例。除了可关闭其他已打开的披露声明 widget 这一功能之外，您可能不需要 JavaScript。

请注意，`<details>` 和 `<summary>` 的样式设置非常丰富，甚至可以用于[创建工具提示](https://css-tricks.com/exploring-what-the-details-and-summary-elements-can-do/)。但是，如果您要将这些语义元素用于原生语义不匹配的用例，请始终确保[保持无障碍功能](https://www.scottohara.me//blog/2022/09/12/details-summary.html)。 大多数情况下，HTML 都是默认可访问的。作为开发者，我们的职责是确保用户能够访问我们的内容。
