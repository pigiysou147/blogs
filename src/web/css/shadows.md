---
date: 2024-03-31
category: css
tags:
 - 阴影
---
# 阴影 



假设您已经收到了一个设计图，该设计中有一张剪出的 T 恤图并带有阴影。设计人员会告诉您，产品图片是动态的，并且可通过内容管理系统进行更新，因此阴影也需要是动态的。图片可以是遮阳帽、短裤或任何其他商品，而不是 T 恤。如何使用 CSS 来达到此目的？

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/wvgrMrR?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 Pen wvgrMrR" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 600px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


CSS 具有 [`box-shadow`](https://developer.mozilla.org/docs/Web/CSS/box-shadow) 和 [`text-shadow`](https://developer.mozilla.org/docs/Web/CSS/text-shadow) 属性，但图片不是文本，因此您无法使用 `text-shadow`。如果您使用 `box-shadow`，阴影位于周围的方框上，而不是 T 恤周围。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/YzNrwae?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="来自 Codepen 上的 web-dot-dev 的 Pen YzNrwae" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 600px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


幸运的是，还有另一个选项：[`drop-shadow()`](https://developer.mozilla.org/docs/Web/CSS/filter-function/drop-shadow()) 过滤器。这样，您就可以完全按照设计人员的要求操作。CSS 中有多种阴影的选项，每种选项都针对不同的使用场景而设计。

## 方框阴影

<BrowseSurport code="css.properties.box-shadow" />

`box-shadow` 属性用于向 HTML 元素的框添加阴影。它适用于块元素和内嵌元素。

```css
.my-element {   
    box-shadow: 5px 5px 20px 5px #000;
}
```

`box-shadow` 的值顺序如下：

1. **水平偏移**：正数表示从左侧推出，负数表示从右侧推出。
2. **垂直偏移**：正数表示从顶部向下推移，负数表示将其从底部向上推。
3. **模糊半径**：数值越大，阴影越模糊，阴影越小，阴影越清晰。
4. **扩散半径**（可选）：数值越大，阴影的大小就越大；数值越小，阴影的大小就越小；如果设为 0，则与**模糊处理半径**的大小相同。
5. **颜色**：[任何有效的颜色值](/blogs/web/css/color)。 如果未定义，将使用计算出的文本颜色。

如需将框阴影设为内部阴影而不是默认外部阴影，请在其他属性之前添加 `inset` 关键字。

```css
/* Outer shadow */
.my-element {  
    box-shadow: 5px 5px 20px 5px #000;
}
/* Inner shadow */
.my-element { 
    box-shadow: inset 5px 5px 20px 5px #000;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/rNjGevp?height=600&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上撰写的 Pen rNjGevp" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 600px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


### 多个阴影

您可以使用 `box-shadow` 添加任意数量的阴影。添加一系列以逗号分隔的值集，以实现以下目的：

```css
.my-element { 
    box-shadow: 5px 5px 20px 5px darkslateblue, -5px -5px 20px 5px dodgerblue,    inset 0px 0px 10px 2px darkslategray, inset 0px 0px 20px 10px steelblue;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/abpLNXR?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen abpLNXR" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


### 影响框阴影的属性

向框添加 `border-radius` 还会影响框阴影的形状。这是因为 CSS 会根据框的形状创建阴影，就好像光线指向框一样。

```css
.my-element { 
    box-shadow: 0px 0px 20px 5px darkslateblue; 
    border-radius: 25px;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/RwKLaXN?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen RwKLaXN" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


如果包含 `box-shadow` 的框位于具有 `overflow: hidden` 的容器中，阴影也不会脱离该溢出。

```html
<div class="my-parent"> 
    <div class="my-shadow">My shadow is hidden by my parent.</div>
</div>
.my-parent,.my-shadow {
	width: 250px;  
	height: 250px;
}
.my-shadow { 
	box-shadow: 0px 0px 20px 5px darkslateblue;
}
.my-parent {
	overflow: hidden;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BapwzyQ?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen BapwzyQ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


## 文字阴影

<BrowseSurport code="css.properties.text-shadow" />

`text-shadow` 属性与 `box-shadow` 属性非常相似。它仅适用于文本节点。

```css
.my-element { 
    text-shadow: 3px 3px 3px hotpink;
}
```

`text-shadow` 的值与 `box-shadow` 的值相同，顺序相同。 唯一的区别是，`text-shadow` 没有 `spread` 值，也没有 `inset` 关键字。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/vYgeKqm?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen vYgeKqm" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


添加 `box-shadow` 后，它会裁剪为框的形状，但 `text-shadow` 不会进行裁剪。这意味着，如果文本是完全或半透明的，阴影会透过它看到。

```css
.my-element { 
    text-shadow: 3px 3px 3px gold; 
    color: rgb(0 0 0 / 70%);
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/LYxzRpb?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen LYxzRpb" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


### 多个阴影

您可以根据需要使用 `text-shadow` 添加任意数量的阴影，就像使用 `box-shadow` 一样。只需添加一系列以英文逗号分隔的值集，即可创建一些非常酷的文本效果，例如 3D 文本。

```css
.my-element { 
    text-shadow: 1px 1px 0px white,2px 2px 0px firebrick; 
    color: darkslategray;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/RwKLGaL?height=500&amp;theme-id=light&amp;default-tab=css%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen RwKLGaL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


## 阴影

<BrowseSurport code="css.properties.drop-shadow" />


如需实现沿着图片任何可能曲线的阴影，请使用 CSS `drop-shadow` 过滤器。该阴影将应用于 Alpha 蒙版，对于为刘海屏图片添加阴影非常有用，在本模块简介中便是如此。

```css
.my-image {  
    filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 30%))
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/eYgGdvm?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen eYgGdvm" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>


**关键术语** ：我们将在另一个单元中介绍 CSS [过滤器](/blogs/web/css/filters)，但简而言之，过滤器可让您将多种图形效果应用于元素的像素。

`drop-shadow` 过滤条件与 `box-shadow` 具有相同的值，但不允许使用 `inset` 关键字和 `spread` 值。您可以通过向 `filter` 属性添加多个 `drop-shadow` 值实例来添加任意数量的阴影。每个阴影都将使用最后一个阴影作为定位参考点。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/vYgeXmW?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen vYgeXmW" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

