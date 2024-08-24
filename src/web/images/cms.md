---
date: 2023-02-01
category: 图片
---
# 网站生成器、框架和 CMS 

了解如何通过 CMS（例如 WordPress）和其他网站生成器更轻松地使用自适应图片。

虽然与手动保存每张图片的替代剪辑并通过 [Squoosh.app](https://squoosh.app/) 等工具手动对其进行优化相比，这种方法确实有待改进，但在开发过程中，自动压缩图片存在一些限制。首先，您可能无法始终完全控制整个网站使用的图片 - 网络上大多数面向用户的图片更侧重于*内容*，而不是由用户或编辑者上传的开发问题，而不是与 JavaScript 和样式表等开发资源一起存储在代码库中。

这通常需要多个图片管理流程：一个是开发级任务，涉及构建和维护网站时使用的图片资源（背景、图标、徽标等），另一个涉及通过网站生成的图片资源，例如编辑团队在帖子中嵌入的照片或用户上传的头像。虽然上下文可能不同，但最终目标都是相同的：根据开发团队定义的设置自动编码和压缩。

幸运的是，您从本地开发工作流中了解的图片处理库可用于任意数量的上下文。虽然不可能没有放之四海而皆准的方法来处理自适应图片标记，但这些系统提供了合理的默认值、配置选项和 API 钩子来简化其实现。

## 静态网站生成器

与任务运行程序相比，静态网站生成器（例如 Jekyll 或 Eleventy 处理图片）在方式上有一些相似之处。要使用这些工具生成可供部署的网站，需要管理资源，包括 CSS 缩减、转译和捆绑 JavaScript。正如您所想，这意味着这些工具可让您使用已经了解的许多库，以相同的方式处理图片素材资源。

官方的 [Eleventy 图片插件](https://www.11ty.dev/docs/plugins/image/)使用 [Sharp](https://www.npmjs.com/package/sharp) 实现调整大小、生成多种来源大小、重新编码和压缩，就像您在这里学到的一些任务一样。

与任务运行程序不同，静态网站生成器可以直接深入了解这些库的配置和使用情况，以及为生产网站生成的标记，这意味着它可以更好地自动处理我们的自适应图片标记。例如，当[作为用于显示图片的短代码的一部分被调用](https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/)时，此插件会根据传递给 Sharp 的配置选项输出 HTML。

```javascript

const Image = require("@11ty/eleventy-img");
module.exports = function(eleventyConfig) {

async function imageShortcode(src, alt, sizes="100vw") {
  let metadata = await Image(src, {
  formats: ["avif", "webp", "jpeg"],
  widths: [1000, 800, 400],
  outputDir: "_dist/img/",
  filenameFormat: function( id, src, width, format, options ) {
      const ext = path.extname( src ),
        name = path.basename( src, ext );

      return `${name}-${width}.${format}`
  }
  });

  let imageAttributes = {
  alt,
  sizes,
  loading: "lazy"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

eleventyConfig.addAsyncShortcode("respimg", imageShortcode);
};
```

然后，便可使用此短代码代替默认的图片语法：

```markdown
{‌% respimg "img/butterfly.jpg", "Alt attribute.", "(min-width: 30em) 800px, 80vw" %}

```

如果配置为输出多种编码，如上所述，生成的标记将是一个 `` 元素，其中包含相应的 `` 元素、`type` 属性和 `srcset` 属性（已完全填充了生成的候选尺寸列表）。

```html
<picture><source type="image/avif" srcset="/img/butterfly-400.avif 400w, /img/butterfly-800.avif 800w, /img/butterfly-1000.avif 1000w" sizes="(min-width: 30em) 800px, 80vw"><source type="image/webp" srcset="/img/butterfly-400.webp 400w, /img/butterfly-800.webp 800w, /img/butterfly-1000.webp 1000w" sizes="(min-width: 30em) 800px, 80vw"><source type="image/jpeg" srcset="/img/butterfly-400.jpeg 400w, /img/butterfly-800.jpeg 800w, /img/butterfly-1000.jpeg 1000w" sizes="(min-width: 30em) 800px, 80vw"><img alt="Alt attribute." loading="lazy" src="/img/butterfly-400.jpeg" width="1000" height="846"></picture>

```

当然，该插件无法*generate*可行的 `sizes` 属性，因为它无法知道图片在渲染布局中的最终尺寸和位置，但它确实能在生成标记时接受其中一个属性作为输入，这是 RespImageLint 的另一项工作。

## 框架

客户端渲染框架需要像 Webpack 一样的任务运行程序或捆绑器来编辑、编码和压缩图像资源。例如，[Adaptive-loader](https://www.npmjs.com/package/responsive-loader) 也会使用 Sharp 库重新保存图片素材资源。然后，您可以使用 `import` 将图片作为对象：

```javascript
  import imageAVIF from 'img/butterfly.jpg?sizes[]=400,sizes[]=800,sizes[]=1000&format=avif';
  import imageWebP from 'img/butterfly.jpg?sizes[]=400,sizes[]=800,sizes[]=1000&format=webp';
  import imageDefault from 'img/butterfly.jpg?sizes[]=400,sizes[]=800,sizes[]=1000';
```

然后，您可以通过 [React 的图片组件](https://reactnative.dev/docs/image)等抽象概念使用这些导入的图片，或者直接填充自适应图片标记：

```html
<picture>
  <source type='image/avif' srcSet={imageAVIF.srcSet} sizes='…' />
  <source type='image/webp' srcSet={imageWebp.srcSet} sizes='…' />
  <img
    src={imageDefault.src}
    srcSet={imageDefault.srcSet}
    width={imageDefault.width}
    height={imageDefault.height}
    sizes='…'
    loading="lazy"
  />
```

执行客户端渲染的框架非常适合 [Lazysizes](https://www.npmjs.com/package/lazysizes) 和 `sizes="auto"`，可为您提供几乎完全自动化的自适应图片。

## 内容管理系统

WordPress 是最早采用原生自适应图片标记的用户之一，自[在 WordPress 4.4 中引入](https://make.wordpress.org/core/2015/11/10/responsive-images-in-wordpress-4-4/)此 API 以来，该 API 已得到逐步改进，支持 WebP 并支持输出 MIME 类型。WordPress 核心的设计宗旨是使用 [ImageMagick PHP 扩展程序](https://www.php.net/manual/en/book.imagick.php)（或者若没有该扩展程序，则使用 [GD](https://www.php.net/manual/en/book.image.php) 库）。

通过 WordPress 管理界面上传图片后，系统会使用该来源图片在服务器上生成面向用户的文件，操作方式与在本地计算机上大致相同。默认情况下，WordPress 输出的任何图片都会带有一个根据[主题中配置的图片大小](https://developer.wordpress.org/apis/responsive-images/)生成的 `srcset` 属性。

可以为生成的图片配置的两个关键设置是[压缩质量](https://developer.wordpress.org/reference/hooks/wp_editor_set_quality/)和[输出 MIME 类型](https://developer.wordpress.org/reference/hooks/image_editor_output_format/)。

例如，如需将所有生成的图片的默认压缩质量设置为 `70`，请使用以下命令：

```php
add_filter( 'wp_editor_set_quality', function() { return 70; } );
```

为了更好地进行压缩，请使用以下代码将上传的 JPEG 图片的输出格式切换为 WebP：

```php
add_filter( 'image_editor_output_format', function( $mappings ) {
  $mappings[ 'image/jpeg' ] = 'image/webp';
    return $mappings;
} );
```

鉴于 WordPress 充分了解它基于上传的图片生成的所有[备用剪切](https://developer.wordpress.org/reference/functions/add_image_size/)和编码，它可以提供 [`wp_get_attachment_image_srcset()`](https://developer.wordpress.org/reference/functions/wp_get_attachment_image_srcset/) 等辅助函数来检索图片附件的完整、生成 `srcset` 值。

您可能已经猜到，使用 `sizes` 属性有点麻烦。由于没有关于图片在布局中使用方式的任何信息，WordPress 目前默认使用 `sizes` 值，该值实际上是“此图片应占据可用视口的 100%，直至达到最大来源的固有尺寸”。这是一种可预测的默认指标，但并不适合任何实际应用。请务必使用 [`wp_calculate_image_sizes()`](https://developer.wordpress.org/reference/hooks/wp_calculate_image_sizes/) 在模板中设置适合上下文的 `sizes` 属性。

当然，有数不清的 WordPress 插件致力于为开发团队和用户提高现代映像工作流的速度。 也许最令人兴奋的是，像 [Jetpack 的 Site Accelerator](https://jetpack.com/support/site-accelerator/)（以前称为“ Photon”）之类的插件可以提供服务器端的编码协商，从而确保用户收到浏览器能够支持的最小、最高效的编码，而无需使用 `` 和 `type` 标记模式。它使用图片内容分发网络实现这一点，图片内容分发网络是一种您可以独立于 CMS 的技术。

这同样适用于 Shopify 等托管 CMS 解决方案，但机制本身略有不同：用于[生成备用图片来源和相应的 `srcset` 属性](https://performance.shopify.com/blogs/blog/responsive-images-on-shopify-with-liquid#provide-multiple-image-size-options-with-srcset)以及[通过 `` 元素提供艺术指导](https://performance.shopify.com/blogs/blog/responsive-images-on-shopify-with-liquid#art-direction)的类似钩子。