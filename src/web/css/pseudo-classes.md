---
date: 2024-03-31
category: css
---
# 伪类 



假设您有一个电子邮件注册表单，并希望电子邮件表单字段在包含无效电子邮件地址时具有红色边框。该怎么做呢？ 您可以使用 `:invalid` CSS 伪类，它是浏览器提供的诸多伪类之一。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/QWdMGjE?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen QWdMGjE" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

借助伪类，您可以根据状态变化和外部因素应用样式。这意味着，您的设计可以响应用户输入，例如电子邮件地址无效。[选择器](/blogs/web/css/selectors)模块介绍了这些内容，本单元将详细介绍这些内容。

伪元素与伪元素（您可以在[上一个单元](/blogs/web/css/pseudo-elements)中详细了解）不同，伪*类*与元素可能所处的特定状态不同，它不会一般地为该元素的各个部分设置样式。

## 互动状态

以下伪类因用户与网页之间的互动而适用。

### `:hover`

<BrowseSurport code="css.selectors.hover" />
如果用户有鼠标或触控板等指控设备，并且他们将其放在某个元素上，您可以使用 [`:hover`](https://developer.mozilla.org/docs/Web/CSS/:hover) 连接到该状态以应用样式。这样可以有效提示某个元素可与之互动。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/vYgJyNP?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen vYgJyNP" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `:active`

<BrowseSurport code="css.selectors.active" />
如果在释放点击之前用户正与某个元素互动（例如点击）时，就会触发此状态。如果使用鼠标等指控设备，则此状态是点击开始且尚未释放。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzNxpam?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen YzNxpam" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `:focus`、`:focus-within` 和 `:focus-visible`

<BrowseSurport code="css.selectors.focus" />
如果某个元素可以获得焦点（例如 ``），您可以使用 [`:focus`](https://developer.mozilla.org/docs/Web/CSS/:focus) 伪类来响应该状态。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNREoyj?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen WNREoyj" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

如果元素的子元素获得焦点，您还可以使用 [`:focus-within`](https://developer.mozilla.org/docs/Web/CSS/:focus-within) 做出回应。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/mdRMOoV?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="通过 Codepen 上的 web-dot-dev 编写 mdRMOoV" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

可聚焦的元素（例如按钮）在获得焦点时（即使被点击后，也会显示聚焦环）。在这种情况下，开发者将应用以下 CSS：

```css
button:focus {   
    outline: none;
}
```

此 CSS 会在元素获得焦点时移除默认的浏览器焦点环，这会给使用键盘浏览网页的用户带来无障碍功能问题。如果没有焦点样式，他们无法在使用 Tab 键时跟踪当前焦点所在的位置。借助 [`:focus-visible`](https://developer.mozilla.org/docs/Web/CSS/:focus-visible)，您可以在元素通过键盘获得焦点时显示焦点样式，同时还可使用 `outline: none` 规则防止指针设备与之交互。

```css
button:focus {  
    outline: none;
}
button:focus-visible {  
    outline: 1px solid black;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/qBRXRdW?height=350&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen qBRXRdW" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 350px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `:target`

<BrowseSurport code="css.selectors.target" />
[`:target`](https://developer.mozilla.org/docs/Web/CSS/:target) 伪类用于选择 `id` 与网址片段匹配的元素。假设您有以下 HTML：

```html
<article id="content">    …</article>
```

当网址包含 `#content` 时，您可以向该元素附加样式。

```css
#content:target {  
    background: yellow;
}
```

这对于通过跳过链接突出显示可能已明确链接到的区域（例如网站上的主要内容）非常有用。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/KKavaqx?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen Kavaqx" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 历史州/省/自治区/直辖市

### `:link`

<BrowseSurport code="css.selectors.link" />
[`:link`](https://developer.mozilla.org/docs/Web/CSS/:link) 伪类可应用于 `href` 值尚未被访问的任何 `` 元素。

### `:visited`

您可以使用 [`:visited`](https://developer.mozilla.org/docs/Web/CSS/:visited) 伪类设置用户访问的链接的样式。这与 `:link` 相反，但出于[安全原因](https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector)，可使用的 CSS 属性较少。 您只能设置 `color`、`background-color`、`border-color`、`outline-color` 的样式以及 SVG `fill` 和 `stroke` 的颜色。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/OJWjmzM?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen OJWjmzM" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

#### 顺序很重要

如果您定义了 `:visited` 样式，它可被特异性至少相同的链接伪类替换。 因此，建议您使用 LVHA 规则按特定顺序为包含伪类的链接设置样式：`:link`、`:visited`、`:hover`、`:active`。

```css
a:link {
    
}
a:visited {
    
}
a:hover {
    
}
a:active {
    
}
```

**注意** ：出于安全考虑，您只能使用 `:visited` 伪类更改由 `:link` 或未访问状态定义的样式，因此请务必首先定义可更改的样式。遵守 LVHA 规则有助于实现这一目标。

## 表单状态

以下伪类可以选择表单元素处于与表单元素互动期间可能处于的各种状态。

### `:disabled`和`:enabled`

<BrowseSurport code="css.selectors.disabled" />
如果浏览器停用了某个表单元素（例如 ``），您可以使用 [`:disabled`](https://developer.mozilla.org/docs/Web/CSS/:disabled) 伪类连接到该状态。[`:enabled`](https://developer.mozilla.org/docs/Web/CSS/:enabled) 伪类适用于相反状态，尽管表单元素默认情况下也是 `:enabled`，因此您可能无法找到此伪类。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLgogPG?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上运营的 Pen yLgogPG" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `:checked`和`:indeterminate`

<BrowseSurport code="css.selectors.checked" />

当辅助表单元素（如复选框或单选按钮）处于选中状态时，可以使用 [`:checked`](https://developer.mozilla.org/docs/Web/CSS/:checked) 伪类。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRrvrxv?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen GRrvrxv" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`:checked` 状态是二进制（true 或 false）状态，但当复选框既未勾选也未取消选中时，它就会处于中间状态。这称为 [`:indeterminate`](https://developer.mozilla.org/docs/Web/CSS/:indeterminate) 状态。

例如，如果您有一个“全选”控件，它可以勾选某个组中的所有复选框。 如果用户随后取消选中其中某个复选框，根复选框将不再表示选中的“全部”，因此应将其设置为不确定状态。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/NWdvdLB?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen NWdvdLB" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`` 元素还具有可以设置样式的不确定状态。一个常见的用例是赋予其条纹外观，表明不知道还需要多少。

### `:placeholder-shown`

<BrowseSurport code="css.selectors.placeholder-shown" />
如果表单字段具有 `placeholder` 属性但**没有值**，则 [`:placeholder-shown`](https://developer.mozilla.org/docs/Web/CSS/:placeholder-shown) 伪类可用于将样式附加到该状态。一旦字段中有内容，无论其是否具有 `placeholder`，此状态将不再适用。

### 验证状态

<BrowseSurport code="css.selectors.valid" />

您可以使用 [`:valid`](https://developer.mozilla.org/docs/Web/CSS/:valid)、[`:invalid`](https://developer.mozilla.org/docs/Web/CSS/:invalid) 和 [`:in-range`](https://developer.mozilla.org/docs/Web/CSS/:in-range) 等伪类响应 HTML 表单验证。`:valid` 和 `:invalid` 伪类对于以下上下文非常有用：电子邮件字段需要匹配 `pattern` 才能成为有效字段。此有效值状态可以显示给用户，帮助他们了解可以安全地移动到下一个字段。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/QWdMpaL?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen QWdMpaL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

如果输入具有 `min` 和 `max`（例如数字输入），并且其值在这些边界内，则可以使用 `:in-range` 伪类。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/qBRXrpP?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen qBRXrpP" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

对于 HTML 表单，您可以使用 `required` 属性确定某个字段是否为必需字段。[`:required`](https://developer.mozilla.org/docs/Web/CSS/:required) 伪类将可用于必填字段。您可以使用 [`:optional`](https://developer.mozilla.org/docs/Web/CSS/:optional) 伪类来选择非必填字段。

**注意** ：最好不要只依赖颜色来表示状态变化（尤其是红色和绿色），因为色盲和低视力用户可能难以看清状态变化，甚至完全错过状态变化。一种很好的想法是使用颜色来支持状态变化，同时利用文本变化和图标变化来直观地表示变化

## 按索引、顺序和出现次数选择元素

有一组伪类，用于根据项在文档中的位置选择项。

### `:first-child`和`:last-child`

<BrowseSurport code="css.selectors.first-child" />

如果要查找第一项或最后一项，您可以使用 [`:first-child`](https://developer.mozilla.org/docs/Web/CSS/:first-child) 和 [`:last-child`](https://developer.mozilla.org/docs/Web/CSS/:last-child)。这些伪类将返回一组同级元素中的第一个或最后一个元素。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzNxZRO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 Codepen 上的 web-dot-dev 提供的 Pen YzNxZRO" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `:only-child`

<BrowseSurport code="css.selectors.only-child" />

您还可以使用 [`:only-child`](https://developer.mozilla.org/docs/Web/CSS/:only-child) 伪类选择没有同级的元素。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/dyNzvaj?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen dyNzvaj" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `:first-of-type`和`:last-of-type`

<BrowseSurport code="css.selectors.first-of-type" />

您可以选择 [`:first-of-type`](https://developer.mozilla.org/docs/Web/CSS/:first-of-type) 和 [`:last-of-type`](https://developer.mozilla.org/docs/Web/CSS/:last-of-type)，它们首先看起来与 `:first-child` 和 `:last-child` 执行相同的操作，但请考虑以下 HTML：

```html
<div class="my-parent">  
    <p>A paragraph</p>   
    <div>A div</div>   
    <div>Another div</div>
</div>
```

以及此 CSS：

```css
.my-parent div:first-child {
    color: red;
}
```

所有元素都不会显示为红色，因为第一个子级是段落而不是 div。`:first-of-type` 伪类在此上下文中非常有用。

```css
.my-parent div:first-of-type { 
    color: red;
}
```

尽管第一个 `` 是第二个子级，但它仍然是 `.my-parent` 元素中的第一个类型，因此根据此规则，它将被显示为红色。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/poRreXE?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 编写的 Pen poRreXE" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `:nth-child`和`:nth-of-type`

<BrowseSurport code="css.selectors.nth-child" />

您不限于第一个和最后一个子元素和类型。[`:nth-child`](https://developer.mozilla.org/docs/Web/CSS/:nth-child) 和 [`:nth-of-type`](https://developer.mozilla.org/docs/Web/CSS/:nth-of-type) 伪类允许您指定位于特定索引的元素。CSS 选择器中的索引编制从 1 开始。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/GRrvWbL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen GRrvWbL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

您还可以向这些伪类传递多个索引。如果您想选择所有偶数项，可以使用 `:nth-child(even)`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/wvgqdwv?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 Pen wvgqdwv" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

您还可以使用 [An+B 微语法](https://www.w3.org/TR/css-syntax-3/#anb-microsyntax)创建更复杂的选择器，这些选择器会以固定间隔查找项。

```css
li:nth-child(3n+3) {  
    background: yellow;
}
```

此选择器会选择从第 3 项开始的每三项。此表达式中的 `n` 是索引，它从 0 开始，3 (`3n`) 是该索引乘以的倍数。

假设您有 7 个 `` 项。选择的第一项是 3，因为 `3n+3` 转换为 `(3 * 0) + 3`。下一次迭代将选择项 6，因为 `n` 现在已递增至 `1`，因此 `(3 * 1) + 3)`。此表达式同时适用于 `:nth-child` 和 `:nth-of-type`。

您可以在此[第 n 个子项测试人员](https://css-tricks.com/examples/nth-child-tester/)或此[数量选择器工具](https://quantityqueries.com/)中试用此类选择器。

### `:only-of-type`

<BrowseSurport code="css.selectors.only-of-type" />

最后，您可以使用 [`:only-of-type`](https://developer.mozilla.org/docs/Web/CSS/:only-of-type) 在一组同级元素中找到某一类型的唯一元素。如果您想选择仅包含一个项的列表，或者要查找某个段落中唯一的粗体元素，这会非常有用。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLgobJb?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 Pen yLgobJb" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 查找空元素

有时，识别完全空的元素可能很有用，而且还有一个伪类可以做到这一点。

### `:empty`

<BrowseSurport code="css.selectors.empty" />

如果某个元素没有子元素，则系统会对子元素应用 [`:empty`](https://developer.mozilla.org/docs/Web/CSS/:empty) 伪类。不过，子项不仅仅是 HTML 元素或文本节点，它们也可以是空白，当您要调试以下 HTML 并了解为什么它无法用于 `:empty` 时，会令人感到困惑：

```html
<div></div>
```

其原因是起始和结束 `` 之间存在一些空白，因此为空将不起作用。

如果您对 HTML 几乎没有控制权，并且想要隐藏空元素（例如所见即所得内容编辑器），`:empty` 伪类会非常有用。 在这里，一位编辑者添加了一个零散的段落。

```html
<article class="post">
    <p>Donec ullamcorper nulla non metus auctor fringilla.</p>
    <p></p>
    <p>Curabitur blandit tempus porttitor.</p>
</article>
```

借助 `:empty`，您可以查找和隐藏这些内容。

```css
.post :empty {  
    display: none;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/VwPzbKg?height=250&amp;theme-id=light&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen VwPzbKg" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 查找和排除多个元素

一些伪类可以帮助您编写更紧凑的 CSS。

### `:is()`

<BrowseSurport code="css.selectors.is" />

如果您要在 `.post` 元素中查找所有 `h2`、`li` 和 `img` 子元素，则可能需要编写如下所示的选择器列表：

```css
.post h2,.post li,.post img {    …}
```

您可以使用 [`:is()`](https://developer.mozilla.org/docs/Web/CSS/:is) 伪类编写更紧凑的版本：

```css
.post :is(h2, li, img) {    …}
```

`:is` 伪类不仅比选择器列表更紧凑，而且更宽容。在大多数情况下，如果选择器列表中出现错误或选择器不受支持，整个选择器列表将不再起作用。如果 `:is` 伪类中传递的选择器出现错误，它将忽略无效选择器，但使用有效的选择器。

### `:not()`

<BrowseSurport code="css.selectors.not" />

您还可以使用 [`:not()`](https://developer.mozilla.org/docs/Web/CSS/:not) 伪类排除项。例如，您可以用它来设置没有 `class` 属性的所有链接的样式。

```css
a:not([class]) { 
    color: blue;
}
```

`:not` 伪类还可以帮助您改进无障碍功能。例如，`` 即使为空值，也必须具有 `alt`，因此您可以编写 CSS 规则，为无效图片添加红色粗轮廓：

```css
img:not([alt]) {  
    outline: 10px red;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/abpyWJK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 编写的 Pen abpyWJK" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

