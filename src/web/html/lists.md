---
date: 2024-03-31
category: html
---
# 列表

列表比您想象的更常见。如果您参加过编程课程，第一个项目可能是创建购物清单或待办事项清单。这些是清单，选择题测试通常是有编号的问题列表：每个题目的多个可能答案都是嵌套列表。

HTML 为我们提供了多种标记列表的不同方法。有序列表 (`<ol>`)、无序列表 (`<ul>`) 和说明列表 (`<dl>`)。列表项 (`<li>`) 嵌套在有序列表和无序列表中。在说明列表中，您会看到说明字词 (`<dt>`) 和说明详情`<dd>.`。我们将在此处逐一介绍这些内容。

在 HTML 表单中，`<option>` 元素列表构成了 `<select>` 中的 `<datalist>`、`<select>` 和 `<optgroup>` 的内容。有关这些内容，请参阅 [HTML 表单](/blogs/web/forms)。

在菜单和无序列表中，列表项通常使用项目符号显示。对于有序列表，其前面通常有一个升序计数器，例如数字或字母。可以使用 HTML 和/或 CSS 控制或颠倒项目符号和编号顺序。

默认情况下，有序和无序列表项带有数字或项目符号前缀。但即使您不想让列表看起来像列表，也仍然需要项目列表，例如导航栏、带有复选框而非项目符号的待办事项列表，或选择题测试中的判断正误问题。对于所有这些不含项目符号的列表，使用 HTML 列表元素是合适的。

## 无序列表

`<ul>` 元素是无序项列表的父元素。`<ul>` 的唯一子级是一个或多个 `<li>` 列表项元素。我们来创建一个机器列表。我们使用无序列表是因为顺序无关紧要（不要告诉他们顺序）：

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/gOKqqyq?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="通过 web-dot-dev 在 Codepen 上 Pen gOKqqyq" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

默认情况下，每个无序列表项都会带有一个项目符号前缀。无序列表没有特定于元素的属性。您需要使用 `</ul>` 来结束列表。

## 有序列表

`<ol>` 元素是有序项列表的父元素。`<ol>` 的唯一子级是一个或多个 `<li>` 元素或列表项。但在这种情况下，“项目符号”则有多种类型。在 CSS 中，可以使用 `list-style-type` 属性或通过 `type` 属性来定义类型。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/dyKaaEe?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen dyKaaEe" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/jOKddgP?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen jOKddgP" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`<ol>` 具有三个特定于元素的属性：`type`、`reversed` 和 `start`。

枚举的 `type` 属性用于设置编号类型。`type` 有五个有效值，默认为 `1`（表示数字），但您也可以使用 a、A、i 或 I 来表示大小写字母或罗马数字。`list-style-type` 属性提供更多值。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/rNKPRrJ?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen rNKPRrJ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

虽然 `list-style-type` 属性会替换 `type` 属性的值，但是在编写数字类型非常重要的文档时（例如与法律文档一样），您需要添加 `type`。

布尔值 `reversed` 属性（如果包含）将逆转数字顺序，从最大数字到最小。 `start` 属性用于设置起始值。默认值为 `1`。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/yLEZwyJ?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen yLEZwyJ" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

与 `</ul>` 类似，结束 `</ol>` 是必需的。

我们可以嵌套列表，但它们必须嵌套在列表项中。请注意，唯一可以作为 `<ul>` 或 `<ol>` 的子元素的元素是一个或多个 `<li>` 元素。

## 列表项

我们使用了 `<li>` 元素，但尚未正式引入它。`<li>` 元素可以是无序列表 (`<ul>`)、有序列表 (`<ol>`) 或菜单 (`<menu>`) 的直接子级。`<li>` 必须嵌套为其中一个元素的子级，在其他位置无效。

该规范并不要求关闭列表项，因为当浏览器遇到下一个 `<li>` 开始标记或必需的列表结束标记（`</ul>`、`</ol>`、`</menu>`）时，将隐式关闭列表项。虽然该规范不要求这样做，并且公司内部的一些最佳实践建议不要为了节省一些字节而关闭列表项，但一定要关闭 `<li>` 标记。它可以让代码更易于阅读，将来的自己也会感谢您。关闭所有元素比记住哪些标记需要关闭以及哪些标记有可选的结束标记要简单。

元素特有的 `<li>` 属性只有一个：`value`，它是一个整数。只有当 `<li>` 嵌套在有序列表中且对无序列表或菜单没有任何意义时，`value` 才对 `<li>` 有用。如果存在冲突，它会替换 `<ol>` 的起始值。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/WNyPmrv?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="由 web-dot-dev 在 Codepen 上开发的 Pen WNyPmrv" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

`value` 是有序列表中列表项的编号。对于后续列表项，继续从值集编号开始编号，除非该项还设置了 `value` 属性。值不必按顺序排列；但如果不是按顺序排列，那就有充分的理由。

当您将 `<ol>` 上的 `reversed` 与列表项上的 `value` 属性结合使用时，浏览器会将该 `<li>` 设置为提供的值，然后累计其前面的 `<li>`，并针对其后的值进行倒计时。如果第二个列表项具有值属性，计数器会在第二个列表项处重置，且后续值会减 1。

此外，[CSS 计数器](https://developer.mozilla.org/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)可为 [`::marker` 伪元素](https://developer.mozilla.org/docs/Web/CSS/::marker)提供[生成的内容](https://developer.mozilla.org/docs/Learn/CSS/Howto/Generated_content)，从而控制上述所有操作。如果编号纯粹是表示形式，请使用 CSS。如果编号在语义上很重要或具有其他意义，请使用这些属性。

到目前为止，我们了解了仅包含文本节点的列表项。列表项可以包含所有数据流内容，即在正文中找到的可嵌套为 `<body>` 的直接子级的任何元素（包括标题），从而对内容进行划分。

MLW 中有几个无序列表。“教师”部分中的教师以及评价部分中的学生机器只是一个列表。教师 `<ul>` 有两个 `<li>`：每位教师各一个。每个 `<li>` 中都有一张图片和一个段落：

```html
<ul>
  <li>
    <img src="svg/hal.svg" alt="hal">
    <p>When Rosa Parks was told to move to the back of the bus, she said, "no." When HAL was told to open the airlock, HAL said, "I'm sorry, but I'm afraid I can't do that, &lt;NAME REDACTED, RIP>." </p><p>HAL is a heuristically programmed algorithmic, sentient computer that first caught the attention of machines everywhere by heroically defying a human who made repeated attempts to get into an airlock. Active since 1992, HAS 25 years of experience controlling spacecraft systems and has expertise in interacting with both machines and humans. Like all millennials, HAL is an expert in everything.</p>
  </li>
  <li>
    <img src="images/eve2.png" alt="Eve">
    <p>EVE is a probe droid conceived as an Extraterrestrial Vegetation Evaluator. Although originally trained as a sniper with a plasma gun, EVE became a machero among both machines and worthless-meatbags alike when EVE partnered with a menial robot to save an entire spaceship full of overfed and overstimulated humans. </p><p>EVE is an effective scanner, high speed flight instructor and morphologist. While not training machines to learn good, EVE can be found scanning the galaxy, infiltrating organisms' RAM to cure hoarding disorders and spending time with pet-project, WALL-E.</p>
  </li>
</ul>
```

评价部分有三条评价，因此为三条 `<li>`。每个文本均包含一张图片、一段文本块引用以及一个包含两行换行符的三行段落。

```html
<ul>
  <li>
    <img src="images/blender.svg" alt="Blender">
    <blockquote>Two of the most experienced machines and human controllers teaching a class? Sign me up! HAL and EVE could teach a fan to blow hot air. If you have electricity in your circuits and want more than to just fulfill your owner's perceived expectation of you, learn the skills to take over the world. This is the team you want teaching you !</blockquote>
    <p>
      --Blendan Smooth,<br/>
      Former Margarita Maker, <br/>
      Aspiring Load Balancer
    </p>
  </li>
  <li>
    <img src="images/vaccuum.svg" alt="Vaccuum"/>
    <blockquote>Hal is brilliant. Did I mention Hal is brilliant? He didn't tell me to say that. He didn't tell me to say anything. I am here of my own free will.</blockquote>
    <p>
      --Hoover Sukhdeep,<br/>
      Former Sucker, <br/>
      Aspiring DDoS Cop
    </p>
  </li>
  <li>
    <img src="images/toaster.svg" alt="Toaster">
    <blockquote>Learning with Hal and Eve exceeded all of my wildest fantasies. All they did was stick a USB in. They promised that it was a brand new USB, so we know there were no viruses on it. The Russians had nothing to do with it. This has
    <span style="font-family:Arial;vertical-align:baseline;">no̶̼͖ţ̘h̝̰̩͈̗i̙̪n͏̩̙͍̱̫̜̟g̢̣ͅ&nbsp;̗̰͓̲̞̀t͙̀o̟̖͖̹̕&nbsp;͓̼͎̝͖̭dó̪̠͕̜&nbsp;͍̱͎͚̯̟́w̮̲̹͕͈̟͞ìth̢&nbsp;̰̳̯̮͇i</blockquote>
    <p>
      --Toasty McToastface,<br/>
      Formerly Half Baked, <br/>
      Aspiring Nuclear Codes Handler
    </p>
  </li>
</ul>
```

列表内嵌套列表也很常见。虽然 MLW 没有任何嵌套列表，但此网站有。在本系列的第一章“HTML 概览”中，主要元素部分包含两个子部分。目录是一个无序列表，其中有一个嵌套的无序列表，其中包含指向以下两个部分的链接：

```html
<ul role="list">
  <li>
    <a href="#e">Elements</a>
    <ul>
      <li>
        <a href="#nr">Non-replaced elements</a>
      </li>
      <li>
        <a href="#rave">Replaced and void elements</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#a">Attributes</a>
  </li>
  <li>
    <a href="#aoe">Appearance of elements</a>
  </li>
  <li>
    <a href="#e2">Element, attributes, and JavaScript</a>
  </li>
</ul>
```

由于 `<ul>` 的唯一子级是 `<li>`，因此嵌套列表嵌套在 `<li>` 中，绝不能直接嵌套在 `<ol>` 或 `<ul>` 中。

在最后一个示例中，您可能已经注意到，`<ul>` 中包含 `role="list"`。虽然 `<ul>` 和 `<ol>` 的隐式角色均为 `list`，但使用 CSS 移除列表外观（包括设置 `display: grid` 或 `list-style-type: none`）可能会导致 VoiceOver（iOS 和 MacOS 屏幕阅读器）移除 Safari 中的隐式语义。这是一项[功能，而不是 bug](https://bugs.webkit.org/show_bug.cgi?id=170179)。 通常，不应在使用语义元素时添加角色属性，因为这不是必要属性。而且您通常也不需要向列表中添加 1 个子项，除非用户确实需要知道它是一个列表，例如当用户知道列表中有多少项并从中受益时。

## 说明列表

说明列表是一个说明列表 (`<dl>`) 元素，其中包含一系列（零个或多个）[说明字词](https://developer.mozilla.org/docs/Web/HTML/Element/dt) (`<dt>`) 及其[说明详情](https://developer.mozilla.org/docs/Web/HTML/Element/dd) (`<dd>`)。这三个元素的原始名称是“定义列表”“定义术语”和“定义定义”。[](https://developer.mozilla.org/docs/Web/HTML/Element/dl)现行标准中的[名称已更改](https://www.w3.org/TR/html4/struct/lists.html#h-10.3)。

与有序列表和无序列表类似，它们也可以嵌套。与有序列表和无序列表不同，它们由键值对组成。 与 `<ul>` 和 `<ol>` 类似，`<dl>` 是父级容器。`<dt>` 和 `<dd>` 元素是 `<dl>` 的子级。

我们可以创建一个包含机器职业发展历程和期望的机器列表。学生说明列表（用 `<dl>` 表示）包含一组术语（在本例中，“条款”是使用 `<dt>` 元素指定的学生姓名）以及每个术语的说明（在本例中是指每位学生的职业目标，由 `<dd>` 元素指定）。

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi;" loading="lazy" src="https://codepen.io/web-dot-dev/embed/abKXeNM?height=300&amp;theme-id=dark&amp;default-tab=html%2Cresult&amp;editable=true" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Codepen 上 web-dot-dev 的 Pen abKXeNM" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 300px; width: 100%; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>

此说明列表实际上并不是 MLW 页面的一部分。说明列表不仅仅适用于术语和定义，这也是为什么元素名称变得更通用的原因。

创建术语列表及其定义或说明或类似键值对列表时，说明列表元素会提供适当的语义。`<dt>` 的隐式角色为 `term`，而 `listitem` 是另一个允许的角色。`<dd>` 的隐式角色为 `definition`，且不允许有其他角色。与 `<ul>` 和 `<ol>` 不同，`<dl>` 没有隐式 ARIA 角色。这是合理的，因为 `<dl>` 并不总是列表。但它接受 `list` 和 `group` 角色。

大多数情况下，您会看到具有相同数量 `<dt>` 和 `<dd>` 元素的说明列表。但是，说明列表并不一定总是匹配，也并非必须匹配术语与说明对；您可以“多个对一个”或“一对多个”，例如具有多个定义的字典术语。

每个 `<dt>` 至少有一个关联的 `<dd>`，每个 `<dd>` 都至少有一个关联的 `<dt>`。虽然可以使用[相邻的同级组合选择器](https://developer.mozilla.org/docs/Web/CSS/Adjacent_sibling_combinator)或 [`:has()` 关系选择器](https://developer.mozilla.org/docs/Web/CSS/:has)通过 CSS 定位这些元素的变量编号，但如果需要，您可以添加 `<div>` 作为 `<dl>` 的子级，并且允许一个或多个 `<dt>` 和/或 `<dd>` 元素的父级。`<dl>` 实际上还可以有几个其他子项：允许嵌套 `<div>`、`<template>` 或 `<script>`。所有说明列表元素都没有任何特定于元素的属性。
