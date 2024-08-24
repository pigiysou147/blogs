---
date: 2024-03-31
category: html
tags:
  - dialog
---
# 对话框

模态对话框是网页上一种特殊类型的弹出式框：会打断用户专注于自身的弹出式窗口。有一些有效的[弹出对话框用例](https://www.nngroup.com/articles/modal-nonmodal-dialog/)，但在执行此操作之前应考虑清楚。模态对话框会迫使用户专注于特定内容，并暂时忽略页面的其余部分。

对话框可以是模态（只能与对话框中的内容互动）或非模态（仍然可以与对话框外部的内容互动）。模态对话框会显示在其余页面内容之上。页面的其余部分是[自然](/web/html/focus)的，默认情况下会被半透明背景遮挡。

用于创建对话框的语义 HTML [`<dialog>`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog) 元素包含语义、键盘交互以及 [`HTMLDialogElement`](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement) 接口的所有属性和方法。

## 模态对话框

下面是一个模态 `<dialog>` 的示例。使用“打开模态对话框”按钮打开对话框。对话框打开后，可通过以下三种方式关闭：Esc 键、提交包含已设置 [`formmethod="dialog"`](https://developer.mozilla.org/docs/Web/HTML/Element/button#attr-formmethod) 的按钮的表单（或者如果表单本身已设置 `method="dialog"`）以及 [`HTMLDialogElement.close()`](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close) 方法。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BaOBLNy?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen BaOBLNy" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`HTMLDialogElement` 有三个主要方法，以及从 [`HTMLElement`](/web/html/apis) 继承的所有方法。

```javascript
dialog.show()/* opens the dialog */
dialog.showModal()/* opens the dialog as a modal */
dialog.close()/* closes the dialog */
```

由于此 `<dialog>` 是通过 [`HTMLDialogElement.showModal()`](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/showModal) 方法打开的，因此它是一种模态对话框。打开模态对话框会停用并遮盖除对话框本身之外的所有内容。如果将鼠标悬停在对话框之外的界面上，您会注意到所有元素的行为就好像设置了 [`pointer-events: none;`](https://developer.mozilla.org/docs/Web/CSS/pointer-events) 一样；即使是打开对话框的按钮也不会对互动做出响应。

对话框打开后，焦点会移到对话框中。焦点位于该对话框中按键盘顺序导航顺序的第一个元素上。 如果您反复按 `tab` 键，您会注意到，当模态对话框打开时，只有对话框中的内容可以获得焦点。只要对话框处于打开状态，模态对话框以外的所有内容都会休眠。

当对话框关闭时，无论是否处于模态状态，焦点都会返回到打开对话框的元素。如果您以编程方式打开并非基于用户操作的对话框，请重新考虑。如果必须这样做，请确保将焦点放回对话框打开之前的位置，尤其是当用户没有与对话框互动就关闭对话框时。

有一个全局 [`inert`](/web/html/focus#the_inert_attribute) 属性可用于停用某个元素及其所有后代（活跃的对话框除外）。使用 `showModal()` 打开模态对话框时，可以免费执行惰化或停用；系统不会明确设置该属性。

可以使用 [`::backdrop`](https://developer.mozilla.org/docs/Web/CSS/::backdrop) 伪元素设置会遮挡除对话框以外所有其他内容的背景幕。仅当使用 `.showModal()` 方法显示 `<dialog>` 时，才会显示背景。该伪元素会匹配所有背景，包括使用 [FullScreen API](https://developer.mozilla.org/docs/Web/API/Fullscreen_API) 时显示的背景，例如在全屏模式下观看视频时，该模式与屏幕或显示器的宽高比不同。

## 非模态对话框

`HTMLDialogElement.show()` 同样会打开一个对话框，但不会添加背景，也不会导致任何内容变得惰化。使用 Esc 键不会关闭非模态对话框。因此，更重要的是确保添加一种用于关闭非模态对话框的方法。这样做时，如果距离对话框较近，您会意识到焦点将转到打开对话框的元素，这可能不是最佳用户体验。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/bGKQvza?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen bGKQvza" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

虽然规范没有正式要求提供用于关闭对话框的按钮，但应将其视为必需按钮。按 Esc 键会关闭模态对话框，但不会关闭非模态对话框。能够获得焦点的可见按钮可改进无障碍功能和用户体验。

## 关闭对话框

您无需使用 `HTMLDialogElement.close()` 方法关闭对话框。您根本不需要 JavaScript。如需在不使用 JavaScript 的情况下关闭 `<dialog>`，请添加带有对话框方法的表单，方法是在 `<form>` 上设置 `method="dialog"` 或对按钮设置 `formmethod="dialog"`。

当用户通过 `dialog` 方法提交数据时，用户输入的数据的状态将保持不变。有提交事件时，表单会经过限制条件验证（除非设置了 `novalidate`）- 用户数据既不会被清除，也不会提交。不含 JavaScript 的关闭按钮可写为：

```html
<dialog open>
  <form method="dialog">
    <button type="submit" autofocus>close</button>
  </form>
</dialog>
```

您可能已经注意到，在此示例中，为关闭 `<button>` 设置了 [`autofocus`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autofocus) 属性。在 `<dialog>` 内设置了 `autofocus` 属性的元素在网页加载时不会获得焦点（除非页面在加载时对话框可见）。不过，当对话框打开时，它们将获得焦点。

默认情况下，当对话框打开时，对话框中的第一个可聚焦元素将获得焦点，除非对话框中的其他元素设置了 `autofocus` 属性。为关闭按钮设置 `autofocus` 属性可确保该按钮在对话框打开时获得焦点。但是，[在 `<dialog>` 中包含 `autofocus`](/web/html/focus#giving_focus_to_interactive_elements) 时，只是要仔细考虑。系统会跳过自动聚焦元素之前出现的序列中的所有元素。 我们将在[专题课程](/web/html/focus)中进一步讨论此属性。

[`HTMLDialogElement`](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement) 接口包含一个 [`returnValue`](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/returnValue) 属性。使用 `method="dialog"` 提交表单时，会将 `returnValue` 设置为用于提交表单的提交按钮的 `name`（如果有）。如果我们编写了 `<button type="submit" name="toasty">close</button>`，`returnValue` 将为 `toasty`。

对话框打开时，系统会显示布尔值 [`open`](https://developer.mozilla.org/docs/Web/HTML/Element/dialog#attr-open) 属性，这意味着对话框处于活动状态，可以与之互动。当通过添加 `open` 属性（而不是通过 `.show()` 或 `.showModal()`）打开对话框时，对话框将无模态。[`HTMLDialogElement.open`](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/open) 属性会返回 `true` 或 `false`，具体取决于对话框是否可用于互动，而不是对话框是否为模态对话框。

虽然 JavaScript 是打开对话框的首选方法（包括在网页加载时添加 `open` 属性，然后使用 `.close()` 移除该属性），但有助于确保即使 JavaScript 不可用，对话框仍然可用。

## 其他详情

### 不使用 `tabindex`

为打开对话框而激活的元素和其中包含的关闭按钮（可能还包括其他内容）可以获得焦点并具有互动性。`<dialog>` 元素不具有互动性，也不会获得焦点。请勿将 `tabindex` 属性添加到对话框本身。

### ARIA 角色

隐式角色为 [`dialog`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/dialog_role)。如果对话框是一个确认窗口，用于传达需要确认或其他用户响应的重要消息，请设置 [`role="alertdialog"`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)。对话框还应具有可供访问的名称。如果可见文本可提供无障碍名称，请添加 `aria-labelledby="idOfLabelingText"`。

### CSS 默认值

请注意，浏览器为 `dialog` 提供默认样式。Firefox、Chrome 和 Edge 在其用户代理样式表中设置 `color: CanvasText;` `background-color: Canvas;`，而 Safari 则在其用户代理样式表中设置 `color: black; background-color: white;`。`color` 继承自 `dialog`，而不是 `body` 或 `:root`，这可能出乎意料。`background-color` 属性未继承。
