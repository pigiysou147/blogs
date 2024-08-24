---
date: 2024-03-31
category: css
tags:
 - 选择器
 - 权重
---
# 选择器 



对于有些文本，只想在文章的第一段加大并加大红色，您可以怎么操作？

```html
<article>
    <p>I want to be red and larger than the other text.</p> 
    <p>I want to be normal sized and the default color.</p>
</article>
```

您可以使用 CSS 选择器查找该特定元素，并应用 CSS 规则，如下所示。

```css
article p:first-of-type {  
    color: red; 
    font-size: 1.5em;
}
```

CSS 为您提供了多种用于选择元素并对其应用规则的选项（从非常简单到非常复杂），可帮您应对此类情况。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/XWprGYz?height=250&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen XWprGYz" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 250px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

## CSS 规则的组成部分

如需了解选择器的工作原理及其在 CSS 中的作用，请务必了解 CSS 规则的各个组成部分。CSS 规则是一块代码块，包含一个或多个选择器，以及一个或多个声明。

![包含选择器 .my-css-rule 的 CSS 规则的图片。](images/an-image-a-css-rule-the-ced38545b4bec.svg)

在此 CSS 规则中，**选择器**为 `.my-css-rule`，用于查找页面上类为 `my-css-rule` 的所有元素。大括号内包含三个声明。 声明是一个属性和值对，用于将样式应用于选择器匹配的元素。您可以根据需要为 CSS 规则添加任意数量的声明和选择器。

## 简单的选择器

最直接的选择器组定位的是 HTML 元素、类、ID 以及可以添加到 HTML 标记的其他属性。

### 通用选择器

<BrowseSurport code="css.selectors.universal" />

[通用选择器](https://developer.mozilla.org/docs/Web/CSS/Universal_selectors)（也称为通配符）可与任何元素匹配。

```css
* { 
    color: hotpink;
}
```

此规则会导致网页上的每个 HTML 元素都包含艳粉色文本。

### 类型选择器

<BrowseSurport code="css.selectors.type" />

[类型选择器](https://developer.mozilla.org/docs/Web/CSS/Type_selectors)直接匹配 HTML 元素。

```css
section { 
    padding: 2em;
}
```

此规则会导致每个 `` 元素的各边 `2em` 为 `padding`。

### 类选择器

<BrowseSurport code="css.selectors.class" />

HTML 元素的 `class` 属性定义了一个或多个项。[类选择器](https://developer.mozilla.org/docs/Web/CSS/Class_selectors)会匹配应用了该类的任何元素。

```html
<div class="my-class"></div>
<button class="my-class"></button>
<p class="my-class"></p>
```

已应用该类的所有元素都会显示为红色：

```css
.my-class { 
    color: red;
}
```

请注意，`.` 只出现在 CSS 中，而不存在于 HTML 中。这是因为 `.` 字符会指示 CSS 语言匹配类属性成员。这是 CSS 中的一种常见模式，其中的特殊字符或一组字符用于定义选择器类型。

即使具有 `.my-class` 类的其他 HTML 元素具有如下几个其他类，这些元素仍将与上述 CSS 规则匹配：

```html
<div class="my-class another-class some-other-class"></div>
```

这是因为 CSS 会查找包含所定义类的 `class` 属性，而不是完全匹配该类。

**注意** ：类属性的值几乎可以是您希望的值。可能会让您感到困惑的情况是，您不能以数字（例如 `.1element`）开头类（或 ID）。如需了解详情，请参阅[规范](https://www.w3.org/TR/CSS21/syndata.html#characters)。

### ID 选择器

<BrowseSurport code="css.selectors.id" />
具有 `id` 属性的 HTML 元素应该是页面上具有该 ID 值的唯一元素。您可以使用如下所示的 [ID 选择器](https://developer.mozilla.org/docs/Web/CSS/ID_selectors)选择元素：

```css
#rad {  
    border: 1px solid blue;
}
```

此 CSS 会为 `id` 为 `rad` 的 HTML 元素应用蓝色边框，如下所示：

```html
<div id="rad"></div>
```

与类选择器 `.` 类似，使用 `#` 字符指示 CSS 查找与其后面的 `id` 匹配的元素。

**注意** ：如果浏览器遇到 `id` 的多个实例，则仍会应用与其选择器匹配的所有 CSS 规则。不过，任何具有 `id` 属性的元素都应具有唯一值，因此除非您为单个元素编写非常具体的 CSS，否则请避免使用 `id` 选择器应用样式，因为这意味着您无法在其他位置重复使用这些样式。

### 属性选择器

<BrowseSurport code="css.selectors.attribute" />
您可以使用[属性选择器](https://developer.mozilla.org/docs/Web/CSS/Attribute_selectors)查找具有特定 HTML 属性或具有特定 HTML 属性值的元素。 用方括号 (`[ ]`) 将选择器括起来，指示 CSS 查找属性。

```css
[data-type='primary'] { 
    color: red;
}
```

此 CSS 会查找属性为 `data-type` 且值为 `primary` 的所有元素，如下所示：

```html
<div data-type="primary"></div>
```

除查找 `data-type` 的特定值外，您还可以查找具有该属性的元素，而不考虑其值。

```css
[data-type] { 
    color: red;
}
<div data-type="primary"></div>
<div data-type="secondary"></div>
```

这两个 `` 元素都将显示红色文本。

如需使用区分大小写的属性选择器，您可以在属性选择器中添加 `s` 运算符。

```css
[data-type='primary' s] { 
    color: red;
}
```

这意味着，如果 HTML 元素的 `data-type` 为 `Primary`（而非 `primary`），则不会出现红色文本。您可以使用 `i` 运算符执行相反操作，即不区分大小写。

除了 case 运算符，您可以访问与属性值内部分字符串匹配的运算符。

```css
/* A href that contains "example.com" */
[href*='example.com'] { 
    color: red;
}
/* A href that starts with https */
[href^='https'] {
    color: green;
}
/* A href that ends with .com */
[href$='.com'] { 
    color: blue;
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BapBbOy?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 的 Pen BapBbOy" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

在本演示中，属性选择器中的 `$` 运算符从 `href` 属性中获取文件类型。 这样便能够根据相关文件类型使用伪元素为标签添加前缀。

### 分组选择器

选择器不一定只与单个元素匹配。您可以对多个选择器进行分组，只需用英文逗号分隔即可：

```css
strong,em,.my-class,[lang] { 
    color: red;
}
```

此示例将颜色变化扩展到 `` 元素和 `` 元素。它还会扩展为一个名为 `.my-class` 的类，以及一个具有 `lang` 属性的元素。

## 伪类和伪元素

CSS 提供了一些实用的选择器类型，这些选择器侧重于特定的平台状态，例如将鼠标指针悬停在某个元素上时、在元素内部的结构或元素的某些部分。

### 伪类

HTML 元素会处于各种状态，这可能是因为它们进行了互动，或者其中一个子元素处于特定状态。

例如，用户可以将鼠标指针悬停在 HTML 元素上，或者，用户也可以将子元素悬停。对于这些情况，请使用 `:hover` 伪类。

```css
/* Our link is hovered */
a:hover { 
    outline: 1px dotted green;
}
/* Sets all even paragraphs to have a different background */
p:nth-child(even) { 
    background: floralwhite;
}
```

如需了解详情，请参阅[伪类模块](/blogs/web/css/pseudo-classes)。

### 伪元素

伪元素与伪类不同，因为它们不会响应平台状态，而是像是在通过 CSS 插入新元素一样。伪元素在语法上也与伪类不同，因为我们使用的是双冒号 (`::`)，而不是使用单冒号 (`:`)。

**注意** ：双冒号 (`::`) 用于区分伪元素和伪类，但由于旧版 CSS 规范中并不存在这种区别，因此原始伪元素（例如 `:before` 和 `:after`）使用单冒号，以便向后兼容旧版浏览器（如 IE8）。

```css
.my-element::before {  
    content: 'Prefix - ';
}
```

在上面的演示中，您为链接的标签添加了其文件类型作为前缀，您可以使用 `::before` 伪元素在元素开头插入内容，或者使用 `::after` 伪元素在元素末尾插入内容。

不过，伪元素不限于插入内容。您也可以使用它们来定位元素的特定部分。例如，假设您有一个列表。使用 `::marker` 设置列表中的每个项目符号（或编号）样式

```css
/* Your list will now either have red dots, or red numbers */
li::marker {  
    color: red;
}
```

您还可以使用 `::selection` 为用户突出显示的内容设置样式。

```css
::selection { 
    background: black; 
    color: white;
}
```

如需了解详情，请参阅[关于伪元素的模块](/blogs/web/css/pseudo-elements)。

## 复杂的选择器

您已经了解了丰富的选择器，但有时您需要使用 CSS 进行更*精细的控制*。这正是复杂的选择器的用武之地。

此时值得注意的是，虽然以下选择器为我们提供了更大的功能，但我们只能**向下级联**，选择子元素。我们无法向上定位并选择父元素。 我们将在[后续课程](/blogs/web/css/the-cascade)中介绍什么是级联及其工作原理。

### 组合器

组合符是两个选择器之间的内容。例如，如果选择器为 `p > strong`，则组合符就是 `>` 字符。使用这些组合符的选择器可帮助您根据项目在文档中的位置来选择它们。

#### 后代组合符

如需了解后代组合器，您首先需要了解父元素和子元素。

```html
<p>A paragraph of text with some <strong>bold text for emphasis</strong>.</p>
```

父元素是包含文本的 ``。该 `` 元素内有一个 `` 元素，使其内容变为粗体。由于它位于 `` 内，因此它是一个子元素。

后代组合符可用于定位子元素。以下代码使用空格 (``) 指示浏览器查找子元素：

```css
p strong { 
    color: blue;
}
```

此代码段会仅选择属于 `` 元素的子元素的所有 `` 元素，使其以递归方式变为蓝色。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/BapBbGN?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen BapBbGN" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

由于后代组合符是递归的，因此系统会应用添加到每个子元素的内边距，从而产生交错效果。

在上面的示例中，使用组合器选择器 `.top div` 更直观地呈现了这种效果。该 CSS 规则会向这些 `` 元素添加左侧内边距。由于组合器是递归的，因此 `.top` 中的所有 `` 元素都将应用相同的内边距。

查看此演示中的 HTML 面板，了解 `.top` 元素如何有多个本身具有 `` 子元素的 `` 子元素。

#### 下一个同级组合符

您可以在选择器中使用 `+` 字符，查找紧跟在另一个元素的元素。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/JjEPzwB?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上发布的 Pen JjEPzwB" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

如需在堆叠元素之间增加空间，请使用下一个同级组合符来添加空间，前提是某个元素是 `.top` 的子元素的下一个同级元素。

您可以使用以下选择器为 `.top` 的所有子元素添加外边距：

```css
.top * { 
    margin-top: 1em;
}
```

问题在于，由于您要选择 `.top` 的每个子元素，因此此规则可能会创建额外、不必要的空间。通过与**通用选择器**混合的**同级组合符**，您不仅可以控制获取空间的元素，还可以将空间应用于**任何元素**。无论 `.top` 中显示哪些 HTML 元素，这都会为您提供一些长期的灵活性。

#### 后续 - 同级组合符

后续组合器与下一个同级选择器非常相似。不过，请使用 `~` 字符，而不是 `+` 字符。其区别在于，只要一个元素只需跟随父元素相同的另一个元素，而不必跟随父元素一起变为下一个元素。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ZELzPPX?height=400&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen ZELzPPX" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 400px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

结合使用后续选择器与“:checked”伪类来创建纯 CSS switch 元素。

此后续组合器的刚性略低，在上述示例等场景中非常有用，在自定义开关的关联复选框处于 `:checked` 状态时，我们会更改自定义开关的颜色。

#### 子组合符

子组合器（也称为“直接后代”）可让您更好地控制组合器选择器附带的递归。通过使用 `>` 字符，您可以将组合器选择器限制为仅应用于直接子级。

请参考上一个、下一个同级选择器示例。空格会添加到每个**下一个同级**元素中，但如果其中一个元素也有**下一个同级元素**作为子元素，则可能会导致不必要的额外间距。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/ExZYMJL?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上的 web-dot-dev 提供的 Pen ExZYMJL" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

为了缓解这个问题，请更改**下一个同级选择器**以加入子组合符：`> * + *`。该规则现在将**仅**应用于 `.top` 的直接子项。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/dyNbrEr?height=500&amp;theme-id=light&amp;default-tab=result&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen dyNbrEr" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

### 复合选择器

您可以组合使用选择器来提高特异性和可读性。例如，如需定位同样具有 `.my-class` 类的 `` 元素，请编写以下代码：

```css
a.my-class { 
    color: red;
}
```

这不会将红色应用于所有链接，也不会将红色应用于 `` 元素中的 `.my-class`。**if**如需了解详情，请参阅[特异性模块](/blogs/web/css/specificity)。



## 资源

- [CSS 选择器参考文档](https://developer.mozilla.org/docs/Web/CSS/CSS_Selectors)
- [交互式选择器游戏](https://flukeout.github.io/)
- [伪类和伪元素参考文档](https://developer.mozilla.org/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- [一种可将 CSS 选择器转换为纯英文解释器的工具](https://kittygiraudel.github.io/selectors-explained/)