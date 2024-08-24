---
date: 2024-03-31
category: html
---
# 图像

**目标** ：本单元简要介绍了 HTML 中图片的各种应用场景。如果您想深入了解该主题，请访问[“学习图片”课程](/web/images/)。装饰性图片（例如按钮的背景渐变，或部分内容或整页中的背景图片）只具有外观效果，应通过 CSS 应用。当图片为文档添加上下文时，图片就是内容，应该嵌入 HTML。

添加图片的主要方法是使用 [`<img>`](https://developer.mozilla.org/docs/Web/HTML/Element/img) 标记，其中 `src` 属性引用图片资源，`alt` 属性用于描述图片。

```html
<img src="images/eve.png" alt="Eve">
```

`<img>` 元素上的 [`srcset`](/web/images/descriptive) 属性和 [`<picture>`](/web/images/prescriptive) 元素都提供了一种方法，可包含具有关联媒体查询的多个图片来源，每个图片来源都具有后备图片来源，从而能够根据设备的分辨率、浏览器功能和视口大小提供最合适的图片文件。借助 `srcset` 属性，您可以根据分辨率提供多个图片版本，还可以与 `sizes` 属性一起提供浏览器视口大小。

```html
<img src="images/eve.png" alt="Eve"
  srcset="images/eve.png 400w, images/eve-xl.jpg 800w"
  sizes="(max-width: 800px) 400px, 800px" />
```

这也可以通过使用 [`<picture>`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) 元素以及 [`<source>`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) 子元素来实现，后者将 [`<img>`](https://developer.mozilla.org/docs/Web/HTML/Element/img) 作为默认来源。

```html
<picture>
  <source src="images/eve.png" media="(max-width: 800px)" />
  <source src="images/eve-xl.jpg" />
  <img src="images/eve.png" alt="Eve" />
</picture>
```

除了这些内置的 HTML [自适应图片方法](/web/design/responsive-images)之外，HTML 还支持通过各种属性提高图片渲染性能。`<img>` 标记以及图形提交按钮 [`<input type="image">`](https://developer.mozilla.org/docs/Web/HTML/Element/input/image) 可以包含 `height` 和 `width` 属性，用于设置图片的宽高比，以减少内容布局偏移。`lazy` 属性用于启用[延迟加载](/web/images/performance-issues#deferring_image_requests)。

HTML 还支持直接使用 [`<svg>`](https://www.w3.org/Graphics/SVG/) 包含 SVG 图片，但可以使用 `<img>` 元素嵌入具有 `.svg` 扩展项（或 [data-uri](https://css-tricks.com/data-uris/)）的 SVG 图片。

**注意 ** ：借助 [`<figure>`](https://developer.mozilla.org/docs/Web/HTML/Element/figure) 元素及其嵌套的 [`<figcaption>`](https://developer.mozilla.org/docs/Web/HTML/Element/figcaption) 元素，可添加带有关联说明的图片。[数字](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/figure_role)并非仅限于包含图片。它是一种语义方式，将图片、代码段、示例文本或其他内容连同相应内容的说明，作为一个整体进行引用。添加 `<figcaption>` 时，请确保它是 `<figure>` 中嵌套的第一个或最后一个子级。每张前景图片至少应包含 `src` 和 `alt` 属性。

`src` 文件是嵌入图片的路径和文件名。`src` 属性用于提供图片的网址。然后，浏览器提取该资源并将其呈现到网页上。`<img>` 需要此属性；如果没有此属性，便没有要渲染的内容。

`alt` 属性为图片提供替代文本，为无法查看屏幕（例如搜索引擎和辅助技术，甚至是 Alexa、Siri 和 Google 助理）的人提供图片说明；如果图片未加载，浏览器可能会显示。除了网络速度较慢或带宽受限的用户之外，`alt` 文本在 HTML 电子邮件中也非常有用，因为许多用户会在电子邮件应用中屏蔽图片。

```html
<img src="path/filename" alt="descriptive text" />
```

如果图片属于 SVG 文件类型，则还应添加 [`role="img"`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/Img_role)，这是由于 [VoiceOver](https://bugs.webkit.org/show_bug.cgi?id=216364) [bugs](https://bugs.webkit.org/show_bug.cgi?id=240656) 导致的。

```html
<img src="switch.svg" alt="light switch" role="img" />
```

**注意 ** ：这些示例以斜杠结尾，也被错误命名为自结束标记；这是 XML 的功能，包括 SVG 和 XHTML，但不包括 HTML。如需了解详情，请参阅 [forms](/web/html/forms) 模块中的备注。## 撰写有效的 `alt` **图片描述**

Alt 属性力求简洁明了，可提供图片传达的所有相关信息，同时省略与文档中其他内容重复或无用的信息。撰写文本时，语气应反映网站的语气。

要写出有效的替代文字，请设想一个人看不到整个网页，而您则是读了整个网页。通过使用[语义](/web/html/semantic-html#the_role_attribute) `<img>` 元素，屏幕阅读器用户和机器人可得知该元素是图片。在 `alt` 中添加“This is a image/screenshot/photo of”是多余的。用户不必知道存在图片，但需要知道图片传达的信息。

正常情况下，您不能说“这是一只戴着红色帽子的狗有颗粒化的图片”。相反，您应该传达图片传达的内容（相对于文档其余部分的上下文）；您传达的内容将根据上下文和周围文本的内容而变化。

例如，我们会以不同的方式描述狗的照片，具体视环境而定。如果 Fluffy 是 Yuckymeat 狗粮评价旁边的头像，那么 `alt="Fluffy"` 就足够了。

如果该照片是毛毛在动物收容所网站上的领养页面的一部分，则目标受众群体是潜在的养狗人士。文本应描述图片中传达的与采用者相关的信息，这些信息在周围文本中不重复。可以采用较长的说明，例如 `alt="Fluffy, a tri-color terrier with very short hair, with a tennis ball in her mouth"`。收养页面中的文字通常包括可收养的宠物的物种、品种、年龄和性别，因此无需在替代文本中重复。但狗狗的生平简介可能不包含头发长度、颜色或玩具偏好。请注意，我们没有描述图片：潜在的狗主人不需要知道狗狗是在室内还是室外，或者它有红色项圈和蓝色牵引绳。

将图片用于图标时，由于 `alt` 属性提供无障碍名称，因此应传达图标的含义，而不是图片的说明。例如，放大镜图标的 alt 属性为 `search`。看起来像房屋的图标使用 `home` 作为替代文本。5 英寸软盘图标的说明为 `save`。如果有两个用于指示最佳实践和反模式的毛绒图标，则可以为戴着绿色贝雷帽、微笑的狗设置 `alt="good"`，而套着红色贝雷帽的吼狗可能显示为 `alt="bad"`。也就是说，请仅使用标准图标。如果您使用非标准图标（例如“好”和“坏毛毛”），请添加图例，并确保这些图标不是解读界面元素含义的唯一方式。

如果图片是屏幕截图或图表，请写下从图片中学到的内容，而不是描述外观。 虽然一张图片的确胜过千言万语，但说明应该简明扼要地传达学到的一切知识。

省略用户从上下文中已知的信息，以及在内容中以其他方式获知的信息。例如，如果您访问的是介绍如何更改浏览器设置的教程页面，而该页面介绍了如何在浏览器 Chrome 中点击图标，则屏幕截图中的页面网址并不重要。将 `alt` 限制为当前主题：如何更改设置。`alt` 可能是“设置图标位于搜索字段下方的导航栏中”。不要添加“屏幕截图”或“机器学习工作室”，因为用户无需知道这是屏幕截图，也不必知道技术撰写者在编写说明时正在何处冲浪。图片说明取决于首先显示图片的原因。

如果屏幕截图显示了如何通过转到 `chrome://version/` 来查找浏览器版本号，请将该网址作为说明添加到网页内容中，并提供空字符串作为 alt 属性，因为图片未提供周围文本中不包含的信息。

如果图片未提供任何额外信息，或者图片只是装饰性的，则该属性应仍存在，就像一个空字符串一样。

```html
<img src="svg/magazine.svg" alt="" role="none" />
```

MachineLearningWorkshop.com 包含七张前景图片，因此共有七张具备 Alt 属性的图片：复活节彩蛋开关、手动图标、两张哈尔和夏娃的传记照片，以及三张搅拌机、吸尘器和烤面包机的头像。看起来像杂志的前景图片是唯一纯装饰的图片。该网页还有 2 张背景图片；这些图片也是装饰性的，由于通过 CSS 添加，因此无法访问。

这本杂志只是纯装饰性内容，它包含空的 `alt` 属性和 [`role` 为 `none`](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/presentation_role) 的图片，因为图片是纯代表性的 SVG。SVG 图片（如果有意义的）应包含 `role="img"`。

```html
<img src="svg/magazine.svg" alt="" role="none" />
```

页面底部有三条评价，每条评价都有一张海报图片。通常，`alt` 文本是图片中人物的姓名。

```html
<img src="images/blender.svg" alt="Blendan Smooth" role="img" />
```

相反，由于这是一个笑话页面，因此您应该将可能不明显的内容传达给低视力用户，让他们不会错过幽默；我们使用原始机器函数作为 `alt`，而不是使用角色的名称：

```html
<img src="images/blender.svg" alt="blender" role="img" />
```

教师的照片不仅仅是头像：它们是一些传记图片，因此可以得到更详细的描述。

如果这是一个真实网站，您应提供最基本的教师内容描述，以便潜在学生在进入课堂时能够认出他们。

```html
<img src="svg/hal.svg" role="img"
  alt="Hal 9000; a camera lens containing a red dot that sometimes changes to yellow." />
```

这是一个笑话网站，因此请提供与笑话内容相关的信息：

```html
<img src="svg/hal.svg" role="img"
  alt="Hal 9000, the sentient AI computer from 2001: a Space Odyssey depicted as a camera lens with a red dot that changes to yellow when hovered." />
```

如果您通过电话向朋友阅读网页，他们不会关心红点是什么样子的。在这种情况下，电影引用的历史记录非常重要。

撰写描述性文字时，请考虑图片传达了什么对用户而言比较重要且相关的信息，并包含这些信息。请注意，图片的 `alt` 属性的内容因上下文而异。图片中传达的所有信息可供视力正常的用户访问且与上下文相关，这就是需要传达的信息。尽量简短、精确且实用

对于嵌入的图片，至少需要有 `src` 和 `alt` 属性。我们还需要讨论一些其他属性。

## 自适应图片

视口大小有很多种。还有不同的屏幕分辨率您肯定不希望为大屏幕显示器传送足够宽的图像来浪费移动用户的带宽，但可能需要为正常屏幕分辨率的四倍的小设备提供分辨率更高的图片。您可以通过多种方式根据视口大小和屏幕分辨率提供不同的图片。

### `<img> srcset` **个属性**

借助 [`srcset`](/web/design/responsive-images#responsive_images_with_srcset) 属性，浏览器可以根据多个媒体查询（包括视口尺寸和屏幕分辨率）选择要请求的图片，从而推荐多个图片文件。

每个 `<img>` 元素可以有一个 `srcset` 属性，但该 `srcset` 可以链接到多张图片。`srcset` 属性接受逗号分隔值列表，每个值包含素材资源的网址，后跟一个空格，接着是该图片选项的描述符。如果使用宽度描述符，您还必须为每个 `srcset` 选项（最后一个选项除外）添加 `sizes` 属性，并附上媒体查询或来源大小。介绍[使用 `srcset` 的自适应图片](/web/design/responsive-images#responsive_images_with_srcset)和[描述性语法](/web/images/descriptive)的“学习”部分值得阅读。

如果有匹配项，`srcset` 图片将优先于 `src` 图片。

### `<picture>`和`<source>`

另一种提供多个资源并允许浏览器渲染最合适的资源的方法是使用 [`<picture>`](https://developer.mozilla.org/docs/Web/HTML/Element/picture) 元素。`<picture>` 元素是不限数量的 [`<source>`](https://developer.mozilla.org/docs/Web/HTML/Element/source) 元素和单个必需的 [`<img>`](https://developer.mozilla.org/docs/Web/HTML/Element/img) 元素中列出的多个图片选项的容器元素。

[`<source>`](https://developer.mozilla.org/docs/Web/HTML/Element/source) 属性包括 `srcset`、`sizes`、`media`、`width` 和 `height`。`srcset` 属性是 `img`、`source` 和 `link` 的通用属性，但通常在来源上的实现方式略有不同，因为媒体查询可以改为在 `<srcset>` 的媒体属性中列出。`<source>` 还支持在 `type` 属性中定义的图片格式。

浏览器会考虑每个子级 `<source>` 元素，并从中选择最匹配的元素。如果未找到匹配项，则系统会选择 `<img>` 元素的 [`src`](https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-src) 属性的网址。可访问名称来自嵌套 `<img>` 的 `alt` 属性。另外，值得一读的“学习”部分介绍了 [`<picture>`](/web/design/picture-element) 元素和[规范语法](/web/images/prescriptive)。

## 其他性能功能

### 延迟加载

[`loading` 属性](/web/design/responsive-images#preloading_hints)用于告知启用 JS 的浏览器如何加载图片。默认的 `eager` 值表示图片会在 HTML 解析后立即加载，即使图片位于可见视口之外也是如此。通过设置 [`loading="lazy"`](https://web.dev/articles/lazy-loading)，系统会延迟图片加载，直到它有可能进入视口为止。“可能”由浏览器根据图片与视口的距离来定义。当用户滚动屏幕时，该值会更新。延迟加载有助于节省带宽和 CPU，从而为大多数用户提高性能。如果 JavaScript 处于停用状态，出于安全考虑，所有图片将默认采用 `eager`。

```html
<img src="switch.svg" alt="light switch" loading="lazy" />
```

### 宽高比

浏览器在收到 HTML 后会开始呈现它，并在遇到资源时发出资源请求。这意味着，当浏览器遇到 `<img>` 标记并发出请求时，已经在呈现 HTML。图片可能需要一些时间才能加载完毕。 默认情况下，除了呈现 `alt` 文本所需的大小之外，浏览器不会为图片预留空间。

`<img>` 元素始终支持无单位 `height` 和 `width` 属性。这些属性已不再使用，取而代之的是 CSS。CSS 可以定义图片尺寸，通常会设置单个尺寸（例如 `max-width: 100%;`），以确保宽高比保持不变。 由于 CSS 通常包含在 `<head>` 中，因此系统会在遇到任何 `<img>` 之前对其进行解析。但未明确列出 `height` 或宽高比，预留的空间就是 `alt` 文本的高度（或宽度）。由于大多数开发者只声明宽度，因此在接收和渲染图片时会导致累计布局偏移，这会危害网页指标。为解决此问题，浏览器应支持图片宽高比。在 `<img>` 上添加 `height` 和 `width` 属性充当大小调整提示，告知浏览器宽高比，从而为最终的图片渲染预留适量空间。[](/web/design/responsive-images#sizing_hints)为图片添加高度和宽度值后，浏览器就知道该图片的宽高比。当浏览器遇到单个尺寸（例如我们的 50% 示例）时，它会为遵循 CSS 尺寸的图片和保持宽高比的另一个尺寸的图片节省空间。

```html
<img src="switch.svg" alt="light switch" role="img" width="70" height="112" />
```

如果 CSS 设置正确，您的图片仍会具备自适应能力。是的，所包含的无单位 `height` 和 `width` 值会被 CSS 替换。添加这些属性的目的是以合适的宽高比保留空间，通过减少布局偏移来提高性能。网页的加载时间仍将大致相同，但当图片被绘制到屏幕上时，界面不会跳跃。

## 其他图片特征

`<img>` 元素还支持 `crossorigin`、`decoding`、`referrerpolicy` 以及 `fetchpriority` 属性（在基于 Blink 的浏览器中）。很少使用：如果图片是服务器端地图的一部分，请添加 `ismap` 布尔值属性，并将 `<img>` 嵌套在链接中，以供没有指控设备的用户使用。

`ismap` 属性在 `<input type="image" name="imageSubmitName">` 上不是必需的，甚至不需要，因为点击位置的 `x` 和 `y` 坐标会在表单提交期间发送，并将值附加到输入名称（如果有）。例如，当用户点击图片并提交时，类似 `&imageSubmitName.x=169&imageSubmitName.y=66` 的内容将随表单一起提交。如果图片没有 `name` 属性，则系统会发送 x 和 y：`&x=169&y=66`。
