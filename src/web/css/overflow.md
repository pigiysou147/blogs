---
date: 2024-03-31
category: css
tags:
 - 滚动
---
# 溢出式菜单 



当内容超出其父级时，有多种处理方式可供选择。您可以滚动以添加更多空间、裁剪溢出边缘、使用省略号指示截断点等等。在针对手机应用和多种屏幕尺寸开发应用时，溢出尤为重要。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/LYjEjWZ?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen LYjEjWZ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

CSS 中有两种不同的裁剪选项：`text-overflow` 有助于处理单行文本，而 `overflow` 属性有助于控制框模型中的溢出。

## `text-overflow` 的单行溢出

对包含文本节点的任何元素（例如段落 ``）使用 [`text-overflow`](https://developer.mozilla.org/docs/Web/CSS/text-overflow) 属性。它指定了当文字无法容纳在元素的可用空间时如何显示。页面上所有可见的 HTML 文本都位于“文本节点”中。如需使用 `text-overflow`，您需要一行未换行的文本，因此您还必须将 `overflow` 设置为 `hidden`，并设置一个防止换行的 `white-space` 值。

```css
p {   
    text-overflow: ellipsis;  
    overflow: hidden;   
    white-space: nowrap;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/rNwQXyN?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen rNwQXyN" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 使用溢出属性

溢出属性可在元素上设置，用于控制在其子元素需要更多空间超出可用空间时会发生什么情况。这可能是有意为之，例如在 Google 地图等互动式地图中，用户平移拍摄的特定尺寸的大图片。也可能是无意的，例如在聊天应用中输入不适合文本气泡的长消息。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/KKvwvXE?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Pen KKvwvXE，由 web-dot-dev 在 Codepen" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

您可以将溢出分为两部分。父元素具有严格约束的空间，且该空间不会改变。您可以将其视为一扇窗口。子元素是指需要从父元素中留出更多空间的内容。您可以将其视为透过窗户看到的景象。管理溢出有助于指导窗口如何构建此类内容。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/xxrmxOm?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 xxrmxOm" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 在纵轴和横轴上滚动

`overflow-y` 属性用于控制沿设备视口纵轴的物理溢出，从而上下滚动。

`overflow-x` 属性控件会沿着设备视口的水平轴溢出，因此可以左右滚动。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzQdzoG?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 提供的 Pen YzQdzoG" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 滚动方向的逻辑属性

<BrowseSurport code="css.properties.overflow-inline" />

[`overflow-inline`](https://developer.mozilla.org/docs/Web/CSS/overflow-inline) 和 [`overflow-block`](https://developer.mozilla.org/docs/Web/CSS/overflow-block) 属性根据文档方向和写入模式设置溢出。

### `overflow` 简写形式

[`overflow`](https://developer.mozilla.org/docs/Web/CSS/overflow) 简写形式在一行中同时设置了 `overflow-x` 和 `overflow-y` 样式：

```css
overflow: hidden scroll;
```

如果指定了两个关键字，则第一个关键字会应用于 `overflow-x`，第二个关键字会应用于 `overflow-y`。否则，`overflow-x` 和 `overflow-y` 将使用相同的值。

#### 值

让我们来详细了解一下 `overflow` 属性可用的[值和关键字](https://developer.mozilla.org/docs/Web/CSS/overflow#values)。

- `overflow: visible`（默认）

  如果不设置该属性，则 `overflow: visible` 是网站的默认值。这样可以确保内容不会无意中隐藏，并遵循“永不隐藏内容”或“精确布局的安全布局”的核心原则。

- `overflow: hidden`

  使用 `overflow: hidden` 时，系统会按指定方向裁剪内容，且不提供用于显示内容的滚动条。

- `overflow: scroll`

  `overflow: scroll` 支持滚动条，以便用户滚动浏览内容。即使内容当前未溢出，系统仍会显示滚动条。如果容器将来可能可以滚动（例如，在调整大小时），这是一种减少未来布局偏移的好方法，并让用户可从视觉上准备好可滚动区域。

- `overflow: clip`

  与 `overflow: hidden` 一样，带有 `overflow: clip` 的内容裁剪至元素的内边距框。`clip` 和 `hidden` 之间的区别在于，`clip` 关键字还会禁止所有滚动，包括程序化滚动。

- `overflow: auto`

  最后，最常用的值 `overflow: auto`。这样遵循用户的偏好设置，并根据需要显示滚动条，但默认情况下会隐藏滚动条，并让用户和浏览器负责滚动。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/gORZaaa?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen gORZaaa" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

**注意** ：使用 `overflow` 属性并设置非 `visible` 值会创建[块格式设置上下文](https://developer.mozilla.org/docs/Web/Guide/CSS/Block_formatting_context)。

## 滚动和溢出

其中许多 `overflow` 行为都会引入滚动条，但有一些特定的滚动行为和属性可帮助您控制溢出容器上的滚动。

### 滚动和无障碍功能

请务必确保可滚动区域可以接受焦点，以便键盘用户可以通过 Tab 键转到该框，然后使用箭头键进行滚动。

若要允许滚动框接受焦点，请添加 `tabindex="0"`、带有 [`aria-labelledby`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) 属性的名称和相应的 `role` 属性。例如：

```html
<div tabindex="0" role="region" aria-labelledby="id-of-descriptive-text"> 
    content
</div>
```

然后，可以使用 CSS 来指示该框具有焦点，并使用 `outline` 属性提供视觉线索，表明它现在可滚动。

在[使用 CSS 实现无障碍功能](https://adrianroselli.com/2021/06/using-css-to-enforce-accessibility.html)中，Adrian Roselli 演示了 CSS 如何帮助防止无障碍功能回归。例如，仅开启滚动功能，并在使用正确属性时添加焦点指示标志。以下规则将使框仅在具有 `tabindex`、`aria-labelledby` 和 `role` 属性时可滚动。

```css
[role][aria-labelledby][tabindex] {
    overflow: auto;
}
[role][aria-labelledby][tabindex]:focus { 
    outline: .1em solid blue;
}
```

### 滚动条在框模型中的定位

滚动条会占用内边距框内的空间，如果为 `inline` 而非 `overlaid`，则滚动条可能会争用空间。[Box 模型模块](/blogs/web/css/box-model#the_areas_of_the_box_model)对此潜在布局偏移的原因进行了详细说明。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BaReoEV?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen BaReoEV" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 根滚动条与隐式滚动条

您可能会注意到，某些滚动条具有下拉刷新行为和其他特殊行为，尤其是在针对移动应用和混合应用进行开发时。这种滚动行为发生在根滚动条上。一个页面上只能有一个根滚动条。默认情况下，[documentElement](https://developer.mozilla.org/docs/Web/API/Document/documentElement) 是页面的根滚动条，但是，通过更改哪个元素是根滚动条，特殊行为可应用于除 documentElement 之外的滚动条，我们将这种新滚动条称为隐式根滚动条。

若要创建根滚动条，您可以使用所谓的“滚动条提升”：将容器放置在固定位置，确保其覆盖整个视口，并在顶部显示滚动条的 Z-index。您可在[此处](https://cdpn.io/web-dot-dev/debug/dyzPzwz)体验根滚动条与嵌套隐式滚动条的对比。

<video autoplay="" loop="" muted="" width="380" style="box-sizing: inherit; border: 0px; height: auto; max-width: 100%; border-radius: var(--devsite-video-border-radius); display: block; margin-left: auto; margin-right: auto;"></video>
视频展示了具有弹跳行为和新样式功能的根滚动条，
与没有增强滚动行为的隐式滚动条滚动行为相比。

### 滚动行为

<BrowseSurport code="css.properties.scroll-behavior" />

`scroll-behavior` 可让您启用由浏览器控制的滚动浏览功能。这样一来，您就可以指定如何处理 `.scrollTo()` 等页内导航或链接。

这在与 [prefers-reduced-motion](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion) 一起使用时特别有用，可根据用户偏好设置指定滚动行为。

```css
@media (prefers-reduced-motion: no-preference) { 
    .scroll-view { 
        scroll-behavior: auto;  
    }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/oNwJgae?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen oNwJgae" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 滚动行为

<BrowseSurport code="css.properties.overscroll-behavior" />

如果您到达模态叠加层的末尾，然后继续滚动，并使叠加层后面的页面移动，则这就是滚动链，或者向上滚动至父级滚动容器。借助 [`overscroll-behavior`](https://developer.mozilla.org/docs/Web/CSS/overscroll-behavior) 属性，您可以防止溢出滚动泄漏到父级容器中（称为滚动链）。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/powqJQe?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen powqJQe" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 资源

[Smashing Magazine 出品的《CSS 中的溢出和数据损失》](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)