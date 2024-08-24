---
date: 2024-03-31
category: css
tags:
 - 继承
---
# 继承 



假设您刚刚编写了一些 CSS 以使元素看起来像一个按钮。

```html
<a href="http://example.com" class="my-button">I am a button link</a>
```
```css
.my-button {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  background: pink;
  font: inherit;
  text-align: center;
}
```

然后，您向内容文章添加一个 link 元素，将 `class` 值为 `.my-button`。但是存在一个问题，文本不是您预期的颜色。这是如何发生的？

如果未指定值，某些 CSS 属性会继承这些属性。 就此按钮而言，它会从以下 CSS 继承 `color`：

```css
article a {
  color: maroon;
}
```

在本课中，您将了解为什么会出现这种情况，以及继承是一项强大的功能，可帮助您减少编写 CSS 的工作量。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/zYNGEbg?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen zYNGEbg" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 继承流程

我们使用这段 HTML 代码段了解一下继承机制：

```html
<html>
  <body>
    <article>
      <p>Lorem ipsum dolor sit amet.</p>
    </article>
  </body>
</html>
```

根元素 (``) 不会继承任何内容，因为它是文档中的第一个元素。在该 HTML 元素上添加一些 CSS，该元素便会开始沿文档向下级联。

```css
html {
  color: lightslategray;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjEKgBX?height=200&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen JjEKgBX" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 200px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

默认情况下，其他元素会继承 `color` 属性。`html` 元素具有 `color: lightslategray`，因此，所有可以继承颜色的元素现在的颜色均为 `lightslategray`。

```css
body {
  font-size: 1.2em;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/VwPLrLP?height=200&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen VwPLrLP" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 200px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

**注意** ：由于此演示会在 `body` 元素上设置字体大小，因此 `html` 元素仍会采用浏览器（用户代理样式表）设置的初始字体大小，但 `article` 和 `p` 将沿用 `body` 声明的字体大小。这是因为继承只会向下级联。

```css
p { 
    font-style: italic;
}
```

只有 `` 会有斜体文本，因为它是最深的嵌套元素。继承只会向下流动，而不会向上流向父元素。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjEKgmK?height=400&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen JjEKgmK" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 默认情况下，哪些属性是继承的？

默认情况下，并非所有 CSS 属性都会继承，但有很多 CSS 属性会继承。 下面列出了默认继承的属性的完整列表（摘自所有 CSS 属性的 W3 引用）：

- [方位角](https://developer.mozilla.org/docs/Web/SVG/Attribute/azimuth)
- [border-collapse](https://developer.mozilla.org/docs/Web/CSS/border-collapse)
- [border-spacing](https://developer.mozilla.org/docs/Web/CSS/border-spacing)
- [图片说明](https://developer.mozilla.org/docs/Web/CSS/caption-side)
- [颜色](https://developer.mozilla.org/docs/Web/CSS/color)
- [cursor](https://developer.mozilla.org/docs/Web/CSS/cursor)
- [direction](https://developer.mozilla.org/docs/Web/CSS/direction)
- [空单元格](https://developer.mozilla.org/docs/Web/CSS/empty-cells)
- [字体系列](https://developer.mozilla.org/docs/Web/CSS/font-family)
- [font-size](https://developer.mozilla.org/docs/Web/CSS/font-size)
- [font-style](https://developer.mozilla.org/docs/Web/CSS/font-style)
- [font-variant](https://developer.mozilla.org/docs/Web/CSS/font-variant)
- [font-weight](https://developer.mozilla.org/docs/Web/CSS/font-weight)
- [字体](https://developer.mozilla.org/docs/Web/CSS/font)
- [字母间距](https://developer.mozilla.org/docs/Web/CSS/letter-spacing)
- [line-height](https://developer.mozilla.org/docs/Web/CSS/line-height)
- [list-style-image](https://developer.mozilla.org/docs/Web/CSS/list-style-image)
- [list-style-position](https://developer.mozilla.org/docs/Web/CSS/list-style-position)
- [list-style-type](https://developer.mozilla.org/docs/Web/CSS/list-style-type)
- [list-style](https://developer.mozilla.org/docs/Web/CSS/list-style)
- [孤儿](https://developer.mozilla.org/docs/Web/CSS/orphans)
- [引号](https://developer.mozilla.org/docs/Web/CSS/quotes)
- [text-align](https://developer.mozilla.org/docs/Web/CSS/text-align)
- [text-indent](https://developer.mozilla.org/docs/Web/CSS/text-indent)
- [text-transform](https://developer.mozilla.org/docs/Web/CSS/text-transform)
- [可见性](https://developer.mozilla.org/docs/Web/CSS/visibility)
- [white-space](https://developer.mozilla.org/docs/Web/CSS/white-space)
- [丧偶](https://developer.mozilla.org/docs/Web/CSS/widows)
- [word-spacing](https://developer.mozilla.org/docs/Web/CSS/word-spacing)

## 沿用的运作方式

默认情况下，每个 HTML 元素都有一个使用初始值定义的每个 CSS 属性。初始值是不继承的属性，如果级联未能计算该元素的值，则初始值显示为默认值。

<video style="box-sizing: inherit; border: 0px; height: auto; max-width: 100%; border-radius: var(--devsite-video-border-radius);"></video>
可继承的属性向下级联，子元素将获得一个计算值，该值表示其父元素的值。这意味着，如果父元素将 `font-weight` 设置为 `bold`，则所有子元素都将以粗体显示，除非其 `font-weight` 设置为其他值，或用户代理样式表为该元素设置了 `font-weight` 值。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/xxgGPOZ?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen xxgGPOZ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 如何明确继承和控制继承

继承可能会以意想不到的方式影响元素，因此 CSS 提供了相关工具来帮助解决此问题。

### `inherit` 关键字

您可以使用 `inherit` 关键字使任何属性继承其父项的计算值。使用此关键字的实用方法是创建例外情况。

```css
strong {
  font-weight: 900;
}
```

此 CSS 代码段将所有 `` 元素的 `font-weight` 设为 `900`，而非默认的 `bold` 值，后者等同于 `font-weight: 700`。

```css
.my-component {
  font-weight: 500;
}
```

`.my-component` 类会改为将 `font-weight` 设置为 `500`。如需使 `.my-component` 中的 `` 元素也添加 `font-weight: 500`，请添加：

```css
.my-component strong {
  font-weight: inherit;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/eYgNedO?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 提供的 Pen eYgNedO" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

现在，`.my-component` 内 `` 元素的 `font-weight` 将为 `500`。

您可以明确设置此值，但如果将来使用 `inherit` 和 `.my-component` 的 CSS 发生更改，则可以保证您的 `` 会自动与其保持同步。

### `initial` 关键字

继承可能会导致元素出现问题，并且 `initial` 为您提供了强大的重置选项。

您之前已经了解到，CSS 中的每个属性都有一个默认值。`initial` 关键字会将属性设置回初始默认值。

```css
aside strong {
  font-weight: initial;
}
```

此代码段将移除 `` 元素内所有 `` 元素的粗体粗细，并使其成为正常粗细（初始值）。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/OJWVORZ?height=300&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen OJWVORZ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `unset` 关键字

无论是否默认继承了某个属性，`unset` 属性的行为都会有所不同。如果属性在默认情况下是继承的，则 `unset` 关键字将与 `inherit` 相同。如果默认情况下不继承该属性，则 `unset` 关键字等于 `initial`。

要记住默认情况下继承哪些 CSS 属性并非易事，在这种情况下，`unset` 会很有帮助。例如，默认情况下继承 `color`，但 `margin` 不继承，因此您可以编写以下内容：

```css
/* Global color styles for paragraph in authored CSS */
p {
  margin-top: 2em;
  color: goldenrod;
}

/* The p needs to be reset in asides, so you can use unset */
aside p {
  margin: unset;
  color: unset;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjEdpjw?height=400&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen JjEdpjw" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

现在，`margin` 会被移除，`color` 会还原为继承的计算值。

您也可以将 `unset` 值与 `all` 属性搭配使用。回到上面的示例，如果全局 `p` 样式额外获得了几个属性，会发生什么情况？ 系统只会应用为 `margin` 和 `color` 设置的规则。

```css/4-5
/* Global color styles for paragraph in authored CSS */
p {
    margin-top: 2em;
    color: goldenrod;
    padding: 2em;
    border: 1px solid;
}

/* Not all properties are accounted for anymore */
aside p {
    margin: unset;
    color: unset;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/bGgdLNB?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 Pen bGgdLNB" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

如果您将 `aside p` 规则更改为 `all: unset`，将来对 `p` 应用哪些全局样式无关紧要，这些样式将始终处于未设置状态。

```css/3
aside p {
    margin: unset;
    color: unset;
    all: unset;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/XWpbZbB?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen XWpbZbB" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 资源

- [针对计算值的 MDN 引用](https://developer.mozilla.org/docs/Web/CSS/computed_value)
- [关于继承在模块化前端中的作用的文章](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/)