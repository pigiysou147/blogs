---
date: 2024-03-31
category: css
---
# 过滤条件 



假设您需要构建一个位于图片顶部的元素，使其具有略不透明的磨砂玻璃效果。这些文字必须是实时文字，而不是图片。 该怎么做？

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/KKaQLoL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen KKaQLoL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

我们可以通过结合使用 CSS 滤镜和 `backdrop-filter` 来实时应用效果并对所需内容进行模糊处理。模糊处理和不透明度是许多可用滤镜中的两种，下面我们快速介绍一下它们的功能和使用方法。

**注意** ：将文字放在图片上时，请注意，如果用户浏览器不支持滤镜效果，文字仍然清晰可辨。

## `filter` 属性

<BrowseSurport code="css.properties.filter" />

您可以应用以下一个或多个过滤条件作为 [`filter`](https://developer.mozilla.org/docs/Web/CSS/filter) 的值。如果您错误地应用了某个过滤器，为 `filter` 定义的其余过滤器将不起作用。

### `blur`

这会应用高斯模糊，您可以传递的唯一参数是 `radius`，即[应用的模糊程度](https://dbaron.org/log/20110225-blur-radius)。该值必须是长度单位，例如 `10px`。不接受百分比。

```css
.my-element {   
    filter: blur(0.2em);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/VwPQJwX?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 执行 VwPQJwX" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `brightness`

<BrowseSurport code="css.types.filter-function.brightness" />

如需提高或降低元素的亮度，请使用亮度函数。 亮度值以百分比的形式表示，而未更改的图片则以 100% 的值表示。 值为 0% 会使图片变为全黑，因此介于 0% 到 100% 之间的值会降低图片的亮度。使用超过 100% 的值增加亮度。

```css
.my-element {   
    filter: brightness(80%);
}
```

**注意** ：您也可以使用小数值，而不是在 `brightness` 等过滤条件中使用百分比值。如需设置 80% 的亮度（小数部分），请写入 `0.8`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/KKaQjpp?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen KKaQjpp" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `contrast`

<BrowseSurport code="css.types.filter-function.contrast" />


设置 0% 到 100% 之间的值可分别降低或提高对比度。

```css
.my-element {   
    filter: contrast(160%);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/rNjJEOW?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen rNjJEOW" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `grayscale`

<BrowseSurport code="css.types.filter-function.grayscale" />


您可以通过使用 `1` 作为 `grayscale()` 的值来应用完全灰度效果，或使用 `0` 以获得完全饱和的元素。您也可以使用百分比值或小数值，以便仅应用部分灰度效果。 如果您不传递任何参数，该元素将是完全灰度模式。 如果您传递的值大于 100%，其上限将为 100%。

```css
.my-element {   
    filter: grayscale(80%);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/MWJQMKe?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen MWJQMKe" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `invert`

<BrowseSurport code="css.types.filter-function.invert" />

与 `grayscale` 一样，您可以将 `1` 或 `0` 传递给 `invert()` 函数，以将其打开或关闭。启用后，元素的颜色会完全反转。您也可以使用百分比或小数值，仅应用部分颜色反转。 如果您没有向 `invert()` 函数传递任何参数，元素将完全反转。

```css
.my-element {  
    filter: invert(1);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLgvdOO?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen yLgvdOO" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `opacity`

<BrowseSurport code="css.types.filter-function.opacity" />

`opacity()` 过滤条件的工作方式与 `opacity` 属性类似，您可以通过传递数字或百分比来增加或减少不透明度。如果您不传递任何参数，则该元素会完全可见。

```css
.my-element {  
    filter: opacity(0.3);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/RwKQzae?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上通过 web-dot-dev 执行 RwKQzae" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `saturate`

<BrowseSurport code="css.types.filter-function.saturate" />

饱和度过滤条件与 `brightness` 过滤条件非常相似，并接受相同的参数：数字或百分比。`saturate` 不会提高或降低亮度效果，而是提高或降低色彩饱和度。

```css
.my-element {  
    filter: saturate(155%);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BapYgQg?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen BapYgQg" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `sepia`

<BrowseSurport code="css.types.filter-function.sepia" />

您可以使用此滤镜添加深褐色色调效果，其工作方式类似于 `grayscale()`。深褐色调是一种摄影打印技术，可将黑色色调转换为棕色色调，使色调更加暖和。 您可以将数字或百分比作为 `sepia()` 的参数传递，用于提高或降低效果。 不传递任何参数会添加完全深褐色效果（等同于 `sepia(100%)`）。

```css
.my-element {  
    filter: sepia(70%);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNRMqpb?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="在 Codepen 上由 web-dot-dev 执行 WNRMqpb" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `hue-rotate`

<BrowseSurport code="css.types.filter-function.hue-rotate" />

您在[颜色课程](/blogs/web/css/color)中了解了 `hsl` 中的色调如何引用色轮的旋转，而此滤镜的工作原理与此相似。如果您传递某个角度（如度数或旋转），它会改变所有元素颜色的色调，从而改变引用的色轮部分。如果不传递任何参数，则不会执行任何操作。

```css
.my-element {   
    filter: hue-rotate(120deg);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ExZQBWw?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 提供的 Pen ExZQBWw" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### `drop-shadow`

<BrowseSurport code="css.types.filter-function.drop-shadow" />

您可以像在设计工具（如 Photoshop）中那样使用 [`drop-shadow`](https://developer.mozilla.org/docs/Web/CSS/filter-function/drop-shadow()) 来应用拥抱曲线的阴影。该阴影会应用到 Alpha 遮罩，因此对于为刘海图片添加阴影非常有用。 `drop-shadow` 滤镜接受阴影参数，该参数包含以空格分隔的 offset-x、offset-y、blur 和 color 值。它与 `box-shadow` 几乎完全相同，但不支持 `inset` 关键字和差额值。

```css
.my-element {  
    filter: drop-shadow(5px 5px 10px orange);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/PoWQrJr?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen PoWQrJr" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

如需详细了解不同类型的阴影，请参阅 [shadows](/blogs/web/css/shadows) 模块。

### `url`

<BrowseSurport code="svg.elements.filter" />


借助 `url` 滤镜，您可以从关联的 SVG 元素或文件应用 SVG 滤镜。您可以[在此处详细了解 SVG 滤镜](https://developer.mozilla.org/docs/Web/SVG/Element/filter)。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/mdRNgyp?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 创建的 Pen mdRNgyp" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 背景幕滤镜

<BrowseSurport code="css.properties.backdrop-filter" />

[backdrop-filter](https://developer.mozilla.org/docs/Web/CSS/backdrop-filter) 属性接受与 `filter` 相同的所有过滤函数值。`backdrop-filter` 和 `filter` 之间的区别在于，`backdrop-filter` 属性仅将滤镜应用于背景，而 `filter` 属性将滤镜应用于整个元素。

本课程开头处的示例就是完美的示例，因为您不想让文本进行模糊处理，而且理想情况下您也不想添加额外的 HTML 元素。通过仅将滤镜应用于背景幕的功能可以实现这一目的。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/KKaQLoL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上由 web-dot-dev 开发的 Pen KKaQLoL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

