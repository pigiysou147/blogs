---
date: 2024-03-31
category: html
---
# 专注

默认情况下，互动元素（包括[表单控件](/web/html/forms)、[链接](/web/html/links)和按钮）可聚焦和按 Tab 键。可 Tab 键的元素是文档依序焦点导航顺序的一部分。其他元素为非活跃元素，这意味着它们不具有互动性。使用 HTML 属性，可以使交互元素具有互动性，也可以使 inert 元素具有互动性。

**注意 ** ：出于易用性方面的原因，请始终确保用户知道哪个元素具有焦点。添加 CSS [`:focus`](https://developer.mozilla.org/docs/Web/CSS/:focus)、[`:focus-visible`](https://developer.mozilla.org/docs/Web/CSS/:focus-visible) 和 [`:focus-within`](https://developer.mozilla.org/docs/Web/CSS/:focus-within) 样式（可选）。这一点非常重要：[CSS](/web/css/focus) 和[无障碍功能](/web/accessibility/focus)学习路线中都有专门介绍焦点样式的“学习”部分。默认情况下，导航焦点顺序与视觉顺序相同，即源代码顺序。有一些 HTML 属性可以改变这种顺序，CSS 属性可以改变内容的视觉顺序。使用 HTML 更改 Tab 键顺序，或使用 CSS 更改可视呈现顺序可能会影响用户体验。

不要使用 CSS 和 HTML 改变感知的和实际的 Tab 键顺序顺序。如以下两个示例所示，标签页顺序与视觉预期顺序不一致，会让用户感到困惑，而且不利于用户体验。

在此示例中，[`tabindex`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex) 属性的值导致了 Tab 键顺序混乱：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRXKqGz?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen GRXKqGz" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

在此示例中，CSS 创建了按 Tab 键顺序与内容显示顺序之间的差异：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/KKxPMBV?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上提供的 Pen KKxPMBV" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

[`flex-flow: row-reverse;`](https://developer.mozilla.org/docs/Web/CSS/flex-flow) 声明颠倒了视觉顺序。此外，CSS [order](https://developer.mozilla.org/docs/Web/CSS/order) 属性已应用到第六个字词“This”，从而在视觉上移动了这个字词。按 Tab 键序列是代码的顺序，不再与视觉顺序匹配，导致键盘用户断开连接。

**注意 ** ：CSS 功能（包括 [flexbox](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Flexbox)、[grid](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout)、[定位](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Positioning)、[transforms](https://developer.mozilla.org/docs/Web/CSS/translate)和[多列](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)）可能会改变内容的视觉顺序。请始终确保您的内容在所有视口尺寸上都保持逻辑 Tab 键顺序。使用键盘按 Tab 键浏览内容，即可测试内容：按 Shift + Tab 键可在内容中后退。请始终确保使用 CSS 可以清楚地确定哪个元素当前具有焦点，并使用 CSS 不要对可聚焦元素重新排序，从而避免出现无障碍功能问题。## 使 inert 元素具有互动性

`contenteditable` 和 `tabindex` 属性属于全局属性，可添加到任何元素中，使其在进程中可聚焦。还可以使用鼠标或指针聚焦可聚焦的元素，方法是设置 [`autofocus`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autofocus) 属性，或者通过脚本（例如使用 [`element.focus()`](https://developer.mozilla.org/docs/Web/API/HTMLElement/focus)）进行聚焦。

### `tabindex` **属性**

[属性](/web/html/attributes#tabindex)中引入的全局 [`tabindex`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex) 属性可让原本无法获得焦点的元素获得焦点，这些元素通常使用 Tab 键，因此得名。

`tabindex` 属性接受整数值。负值可使元素可聚焦，但不能设为 Tab 键。如果 `tabindex` 值为 `0`，则可将该元素设置为可聚焦和以 Tab 键形式显示，从而将应用了该元素的元素按源代码顺序添加到依序焦点导航顺序。如果值为 1 或更大值，则相应元素可聚焦并可按 Tab 键，但会将其添加到优先按 Tab 键序列序列中，因此，如上文所述，应避免使用它。

在本页面中，分享按钮 `<share-action>` 是一个[自定义元素](/web/html/template)。`tabindex="0"` 会将这个通常无法聚焦的元素添加到键盘的默认 Tab 键顺序中：

```html
<share-action authors="@front-end.social/@estellevw" data-action="click" data-category="web.dev" data-icon="share" data-label="share, mastodon" role="button" tabindex="0">
  <svg aria-label="share" role="img" xmlns="http://www.w3.org/2000/svg">
    <use href="#shareIcon" />
  </svg>
  <span>Share</span>
</share-action>
```

**注意 ** ：[`role="button"`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/button_role) 会告知屏幕阅读器用户此元素的行为方式应与 [`<button>`](https://developer.mozilla.org/docs/Web/HTML/Element/button) 类似。创建模仿现有语义元素（包括 [ARIA 角色](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles)）的自定义元素是适当且符合预期的。该元素必须提供要复制的元素的所有功能。为此，可以扩展复制的元素（例如扩展 [`HTMLButtonElement`](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)），或添加 `tabindex="0"` 并使用 JavaScript 对所模仿的元素的所有功能进行编程，包括处理指针事件以及按 Enter 键和空格键的按键操作。如果按钮使用的是 `<button>`（而不是创建自定义元素），那么 `tabindex` 和 `role` 属性就没必要，浏览器会提供指针和键盘事件。此页面上还有另一个自定义元素：[本地导航](/web/html/navigation#local_navigation)有一个自定义元素为负的 `tabindex` 值：

```html
<web-navigation-drawer type="standard" tabindex="-1">
```

如果 `tabindex` 属性为负值，则该元素可聚焦，但不能按 Tab 键切换。该元素能够接收焦点（例如通过 [`HTMLElement.focus()`](https://developer.mozilla.org/docs/Web/API/HTMLElement/focus)），但它不属于依序焦点导航顺序的一部分。不可标签页且可聚焦元素的惯例是使用 `tabindex="-1"`。请注意，如果您向互动元素添加 `tabindex="-1"`，它将无法再按 Tab 键。

[`element.focus()`](https://developer.mozilla.org/docs/Web/API/HTMLElement/focus) 方法可用于将焦点设置为可聚焦元素。请注意，浏览器会将聚焦的元素滚动到视图中。因此，请避免使用 `element.focus({preventScroll:true})`，因为专注于不可见的元素会导致糟糕的用户体验。

如果要查询文档以找出当前获得焦点的元素，请使用只读 [`Document.activeElement`](https://developer.mozilla.org/docs/Web/API/Document/activeElement) 属性。

`tabindex` 为 `1` 或更高的元素会包含在单独的制表符序列中。正如您在 Codepen 中所看到的，按 Tab 键将按单独的序列开始（按值从低到高的顺序），然后再按源顺序（无 `tabindex` 设置或 `tabindex="0"`）进行常规序列：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNgexPv?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen WNgexPv" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

值为正的 `tabindex` 会将元素置于优先的焦点序列中，这可能会导致焦点顺序混乱。避免使用 `tabindex` 修改 DOM 顺序。更改 Tab 键顺序不仅会造成糟糕的用户体验，而且开发者很难管理和维护。

### `contenteditable` **属性**

我们之前讨论了 [`contenteditable`](/web/html/attributes#contenteditable) 属性。在任何元素上设置 `contenteditable="true"` 都会使其可修改、可聚焦，并将成为标签页顺序的一部分。焦点行为与设置 `tabindex="0"` 类似，但并不相同。嵌套的 `contenteditable` 元素可聚焦，但不能按 Tab 键操作。如需使嵌套的 `contenteditable` 元素可标签页，请添加 `tabindex="0"`，这会将其添加到焦点顺序导航顺序中。

## 让互动元素成为焦点

### `autofocus` **属性**

虽然布尔值 [`autofocus`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autofocus) 是可以对任何元素设置的全局属性，但它并不能使 inert 元素具有互动性。网页加载时，设置了 `autofocus` 属性的第一个可聚焦元素就会获得焦点，前提是该元素已显示且未嵌套在 [`<dialog>`](/web/html/dialog) 中。

自动将焦点置于内容上可能会让人感到困惑。对表单控件设置 `autofocus` 意味着表单控件会在网页加载时滚动到用户视野范围内。所有用户（包括屏幕阅读器用户和使用小视口的用户）可能看不到表单说明，甚至可能滚动过表单控件正常可见的标签。`autofocus` 属性不会更改文档的顺序焦点导航顺序。系统会跳过自动聚焦元素之前的序列中的元素。因此，不建议添加 `autofocus` 属性。

“不使用 `autofocus`”建议的例外情况是，在 `<dialog>` 元素中添加 `autofocus` 属性。打开对话框后，浏览器将自动聚焦在 `<dialog>` 内的第一个可聚焦互动元素上，这意味着无需对某个元素执行 `autofocus` 操作。如果希望确保对话框中的特定互动元素在对话框打开时获得焦点，请为该元素添加 `autofocus` 属性。

```html
<dialog open>
  <form method="dialog">
    <button type="submit" autofocus>close</button>
  </form>
</dialog>
```

为关闭 `<button>` 设置的 `autofocus` 属性可确保在对话框打开时它获得焦点。作为对话框中的第一个元素，它在任何情况下都会获得焦点。默认情况下，当对话框打开时，对话框中的第一个可聚焦元素将获得焦点，除非对话框中的其他元素设置了 `autofocus` 属性。

## 将交互元素设置为非活动状态

还有一些 HTML 属性可用来从 Tab 键操作序列中移除互动元素。为可聚焦元素添加负 `tabindex`、为支持表单控件添加 `disabled` 属性，以及向容器添加全局 `inert` 属性，都会使元素不可按 Tab 键。这三个属性不可互换。

### 负 `tabindex` **值**

如前所述，如果 `tabindex` 属性为负值，某个元素可聚焦却不可按 Tab 键。将 `tabindex="0"` 添加到默认可聚焦的元素（包括链接、按钮、表单控件和 `contenteditable` 元素）中，则没有必要添加；加入值为负的 `tabindex` 时，系统会从聚焦导航顺序中移除正常可按 Tab 键的元素。

负 `tabindex` 值可防止键盘用户专注于互动元素，但不会停用该元素。指针用户仍然可以将焦点放在该元素上。如需停用某个元素，请使用 `disabled` 属性。

### 已停用

布尔值 [disabled](https://developer.mozilla.org/docs/Web/HTML/Attributes/disabled) 属性会使应用它的表单控件及其后代（如果有）无法聚焦。已停用的表单控件无法获得焦点，不能获取点击事件，也不能在提交表单时提交。请注意，`disabled` 不是全局属性。它适用于 `<button>`、`<input>`、`<optgroup>`、`<option>`、`<select>`、`<textarea>`、与表单关联的自定义元素以及 [`<fieldset>`](https://developer.mozilla.org/docs/Web/HTML/Element/fieldset)。在 `<optgroup>` 或 `<fieldset>` 上设置后，所有子表单控件都会停用，但 `<fieldset>` 的第一个 [`<legend>`](https://developer.mozilla.org/docs/Web/HTML/Element/legend) 的内容除外。

您也可以使用 [`:disabled`](https://developer.mozilla.org/docs/Web/CSS/:disabled) 和 [`:enabled`](https://developer.mozilla.org/docs/Web/CSS/:enabled) 伪类来定位那些支持 `disabled` 的元素。即使设置了 [`accent-color`](https://developer.mozilla.org/docs/Web/CSS/accent-color)，通过 `disabled` 属性停用的元素通常也会通过用户代理样式表设置为浅灰色。

作为布尔值属性，该属性的存在会停用原本已启用的元素；您无法将其设置为 `false`。如需重新启用已停用的元素，必须移除该属性（通常通过 [`Element.removeAttribute('disabled')`](https://developer.mozilla.org/docs/Web/API/Element/removeAttribute) 移除）。

利用 [`HTMLInputElement.disabled`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/disabled) 属性，您可以检查输入是否已停用。由于 `disabled` 不是全局属性，因此它并非从 HTMLElement 继承，但每个支持元素接口（如 [`HTMLSelectElement`](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/disabled)、[`HTMLTextareaElement`](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement#instance_properties)）都具有相同的只读属性。

`disabled` 属性不适用于通常可通过 `tabindex` 或 `contenteditable` 设置为可聚焦的 `inert` 元素。此外，它不适用于 `<form>` 元素本身。如需停用这些属性，可以使用全局 `inert` 属性。

### `inert` **属性**

向某个元素添加 `inert` 全局布尔值属性后，该元素和所有嵌套内容（既不可点击，也不能按 Tab 键操作）会被停用，并且会从无障碍功能树中移除。虽然 `inert` 可应用于任何元素，但通常用于内容版块，例如屏幕外或其他隐藏内容。

将 `disabled` 应用于表单控件时，浏览器会提供默认样式，并且可以使用 [`:disabled`](https://developer.mozilla.org/docs/Web/CSS/:disabled) 伪类来设置样式。`inert` 属性不提供视觉指示符，也没有匹配的伪类（尽管 `[inert]` [属性选择器](/web/css/selectors#attribute_selector)一致）。

对可见内容使用 `inert` 而不用样式指示闲置性，这可能会导致用户体验不佳。由于 inert 内容无法供屏幕阅读器用户获取，因此当视力正常的屏幕阅读器用户在屏幕上看到无障碍工具无法获取的内容时，可能会导致混淆。通过 CSS 使惯性变得非常明显。

确保焦点绝不会移至不可见的内容。对于呈现在屏幕之外且在获得焦点时不会自动进入用户视野的任何内容，应设置为“惯性”。如果内容处于隐藏状态，但在聚焦时进入用户视野范围内（例如本页上的[“跳至内容”链接](/web/html/navigation#skip_to_content_link)），则无需将其设为过时。
