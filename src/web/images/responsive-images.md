---
date: 2023-02-01
category: 图片
---
# 自适应图片

bookmark_border

[自适应图片](/blogs/web/design/responsive-images)标记可分为两种场景：目标是尽可能使用效率最高的图片，以及您需要明确控制浏览器选择的图片来源。您可以分别将它们视为描述性语法和规范语法。

在本单元中，您将了解这两种方法。首先，我们将介绍 `srcset` 和 `sizes`，以及如何帮助浏览器根据对用户、用户的设备和浏览情况的了解做出最佳选择。随后，您将发现 `<picture>` 元素；借助该元素，您可以根据视口大小以及浏览器对图片格式的支持等因素，明确控制来源的选择。

## 描述性语法

描述性语法可以为浏览器提供有关图片来源及其使用方式的信息，但最终将决定权交由浏览器进行。这是最常见的情况；对于绝大多数图片，您并不需要对浏览器行为进行精细控制。与 Web 开发者相比，浏览器掌握的信息要多得多，因此可以根据这些信息做出复杂的决策。您无法准确预测用户的浏览环境 - 许多关于用户硬件、偏好和连接速度的信息都是您不知道的。您最多能作出有根据的猜测，但无法确切了解每位用户的网络体验。从开发者的角度来看，自适应图片的核心用例是完全以目标为导向：允许浏览器根据浏览器掌握的信息发出最高效的图片请求。

为使浏览器能够做出这些选择，`srcset` 可让您为浏览器提供填充单个 `<img>` 的潜在来源列表，而 `sizes` 可让您为浏览器提供有关 `<img>` 将如何呈现的信息。您将在[下一个单元](/blogs/web/images/descriptive)中了解如何使用这些 API。

## 规范性语法

使用规范性语法，您可以指示浏览器执行什么操作，即根据您定义的特定条件选择哪个来源。虽然这种用例不像“仅加载最高效的资源来渲染此图片”那样常见，但它允许我们向浏览器提供使用说明，以考虑在传输资源之前没有的信息，例如来源的内容或其格式。

虽然 `srcset` 和 `sizes` 提供了用于将信息传递给用户浏览器并允许其决定图片来源的语法，但有时您需要明确控制显示的源文件以及显示时间。例如，您可能想根据各个布局断点的不同设计处理方式来显示相同图片内容的不同版本，并且采用不同的宽高比，或者确保只有支持特定编码的浏览器才会收到特定来源。

在这些情况下，您需要明确控制显示哪个来源以及显示的时间。这些是保证 `srcset` 和 `sizes` 无法从设计上提供给我们的。如要获取该控件，我们需要使用 [`<picture>` 元素](/blogs/web/images/prescriptive)。
