---
date: 2024-03-31
category: css
tags:
  - blend
---
# 混合模式 

[Duotone](https://en.wikipedia.org/wiki/Duotone) 是一种常用的摄影颜色处理方式，它会使图片看起来仅由两种对比鲜明的颜色组成：一种用于高光，另一种用于弱光。 那么，如何使用 CSS 来做到这一点呢？

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/bGgvYMG?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen bGgvYMG" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

使用混合模式以及您学到的其他技术（例如[滤镜](/blogs/web/css/filters)和[伪元素](/blogs/web/css/pseudo-elements)），您可以对任何图片应用此效果。

## 什么是混合模式？

混合模式常用于 Photoshop 等设计工具，通过混合来自两个或更多图层的颜色来创建构图效果。通过更改颜色的混合方式，您可以实现非常有趣的视觉效果。您还可以使用混合模式作为实用程序，例如隔离白色背景的图片，使其看起来具有透明背景。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/dyNmJor?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen dyNmJor" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

您可以使用 [`mix-blend-mode`](https://developer.mozilla.org/docs/Web/CSS/mix-blend-mode) 或 [`background-blend-mode`](https://developer.mozilla.org/docs/Web/CSS/background-blend-mode) 属性，使用 CSS 设计工具中提供的大多数混合模式。`mix-blend-mode` 会对整个元素应用混合，而 `background-blend-mode` 会对元素的背景应用混合。

如果一个元素上有多个背景，并且希望这些背景全部混合，则可以使用 `background-blend-mode`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/XWpEVGO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen XWpEVGO" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`mix-blend-mode` 会影响整个元素，包括其伪元素。一个用例是双色调图片的初始示例，该图片中的颜色层通过伪元素应用到元素上。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/bGgvYMG?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen bGgvYMG" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

混合模式分为两类：可分离和不可分离。可分离的混合模式会对每种颜色成分（例如 RGB）单独考虑。不可分离的混合模式会将所有颜色分量均等地对待。

## 浏览器兼容性

### `mix-blend-mode`

<BrowseSurport code="css.properties.mix-blend-mode" />




### `background-blend-mode`

<BrowseSurport code="css.properties.background-blend-mode" />


## 可分离的混合模式

### 常规

这是默认的混合模式，不会改变元素与其他元素的混合方式。

### 调节系数

`multiply` 混合模式就像是将多种透明效果堆叠在一起。白色像素会显示为透明，黑色像素会显示为黑色。 介于两者之间的任何元素都会乘以其亮度（光）值。这意味着灯光会变浅，变暗，变得更暗 - 通常会产生更暗的结果。

```css
.my-element {  
    mix-blend-mode: multiply;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/vYgRdOy?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen vYgRdOy" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 过滤

使用 `screen` 会乘以 *light* 值（这与 `multiply` 的相反效果），并且通常会产生更明亮的结果。

```css
.my-element { 
    mix-blend-mode: screen;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjELpYo?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen JjELpYo" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 叠加层

此混合模式 `overlay` - 结合了 `multiply` 和 `screen`。基本深色颜色变深，基本浅色变浅。中端颜色（例如 50% 的灰色）不受影响。

```css
.my-element { 
    mix-blend-mode: overlay;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BaprYom?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen BaprYom" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 把屏幕调暗

`darken` 混合模式会比较源图片和背景幕图片的深色亮度，然后选择两者中最暗的亮度。为此，它会比较每个颜色通道的 RGB 值，而不是亮度（就像 `multiply` 和 `screen` 一样）。 使用 `darken` 和 `lighten` 时，系统通常会根据此比较过程创建新的颜色值。

```css
.my-element { 
    mix-blend-mode: darken;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/dyNmdGM?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen dyNmdGM" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 调亮

使用 `lighten` 的作用与 `darken` 完全相反。

```css
.my-element {
    mix-blend-mode: lighten;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/OJWvQNO?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen OJWvQNO" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 颜色减淡

如果您使用 `color-dodge`，它会使背景颜色变浅，以反映源颜色。在该模式下，如果使用纯黑色，则不会产生任何影响。

```css
.my-element { 
    mix-blend-mode: color-dodge;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/abpYqpz?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen abpYqpz" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 颜色加深

`color-burn` 混合模式与 `multiply` 混合模式非常相似，但前者会增加对比度，从而产生更饱和的中色调并减少高光。

```css
.my-element {  
    mix-blend-mode: color-burn;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/gOgevmG?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen gOgevmG" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 强光

使用 `hard-light` 可创建鲜明的对比效果。此混合模式会调整屏幕亮度或乘以亮度值。如果像素值比 50% 灰度浅，则图片会变亮，就像已经过筛查一样。如果颜色较深，就会成倍增加。

```css
.my-element {  
    mix-blend-mode: hard-light;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ZELxreN?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen ZELxreN" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 柔光

`soft-light` 混合模式是严格程度较低的 `overlay`。其工作原理基本相同，但对比度较低。

```css
.my-element {  
    mix-blend-mode: soft-light;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/OJWvQmQ?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen OJWvQmQ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 差额

若要了解 `difference` 的运作方式，有一个好方法可以像底片负片工作原理一样。`difference` 混合模式会获取每个像素的差值，反转灯光颜色。如果颜色值相同，它们会变成黑色。 值的差异将反转。

```css
.my-element { 
    mix-blend-mode: difference;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/mdRxXwM?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen mdRxXwM" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 排除项

使用 `exclusion` 与使用 `difference` 非常相似，但系统不会针对相同的像素返回黑色，而是会返回 50% 的灰色，从而产生更柔和、对比度更低的输出。

```css
.my-element { 
    mix-blend-mode: exclusion;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjELpmb?height=450&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen JjELpmb" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 450px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## 不可分离混合模式

您可以将这些混合模式视为 HSL 颜色分量。每个 都从活动层获取特定的分量值，并将其与其他分量值混合。

### 色相

`hue` 混合模式会采用源颜色的色调，并将其应用于背景颜色的饱和度和亮度。

```css
.my-element { 
    mix-blend-mode: hue;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BaprYGO?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen BaprYGO" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 饱和度

其运作方式与 `hue` 类似，但使用 `saturation` 作为混合模式会将源颜色的饱和度应用于背景色的色相和亮度。

```css
.my-element {
    mix-blend-mode: saturation;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/QWdmQoP?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="web-dot-dev 上的 Pen QWdmQoP" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 颜色

`color` 混合模式将根据源颜色的色调和饱和度以及背景色的亮度来创建颜色。

```css
.my-element { 
    mix-blend-mode: color;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOyzZRo?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen jOyzZRo" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 亮度

最后，`luminosity` 与 `color` 相反。它会根据源颜色的亮度以及背景色的色调和饱和度创建颜色。

```css
.my-element {  
    mix-blend-mode: luminosity;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/zYNWWOK?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen zYNWWOK" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## `isolation` 属性

<BrowseSurport code="css.properties.isolation" />


如果您将 [`isolation`](https://developer.mozilla.org/docs/Web/CSS/isolation) 属性的值设为 `isolate`，则该属性会创建一个新的堆叠上下文，从而阻止其与背景幕层混合。如 [Z-index 模块](/blogs/web/css/z-index)中所学，当您创建新的堆叠上下文时，该层将成为基础层。这意味着，父级别混合模式将不再应用，但设置了 `isolation: isolate` 的元素内部的元素仍然可以混合。

请注意，这不适用于 `background-blend-mode`，因为后台属性已隔离。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjELLXy?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen JjELLXy" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>
