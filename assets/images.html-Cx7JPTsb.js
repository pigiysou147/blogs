import{_ as i,c as e,o as s,d as t}from"./app-BEYv8s4s.js";const a={},l=t(`<h1 id="图像" tabindex="-1"><a class="header-anchor" href="#图像"><span>图像</span></a></h1><p><strong>目标</strong> ：本单元简要介绍了 HTML 中图片的各种应用场景。如果您想深入了解该主题，请访问<a href="/web/images/" target="_blank" rel="noopener noreferrer">“学习图片”课程</a>。装饰性图片（例如按钮的背景渐变，或部分内容或整页中的背景图片）只具有外观效果，应通过 CSS 应用。当图片为文档添加上下文时，图片就是内容，应该嵌入 HTML。</p><p>添加图片的主要方法是使用 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/img" target="_blank" rel="noopener noreferrer"><code>&lt;img&gt;</code></a> 标记，其中 <code>src</code> 属性引用图片资源，<code>alt</code> 属性用于描述图片。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;images/eve.png&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Eve&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>&lt;img&gt;</code> 元素上的 <a href="/web/images/descriptive" target="_blank" rel="noopener noreferrer"><code>srcset</code></a> 属性和 <a href="/web/images/prescriptive" target="_blank" rel="noopener noreferrer"><code>&lt;picture&gt;</code></a> 元素都提供了一种方法，可包含具有关联媒体查询的多个图片来源，每个图片来源都具有后备图片来源，从而能够根据设备的分辨率、浏览器功能和视口大小提供最合适的图片文件。借助 <code>srcset</code> 属性，您可以根据分辨率提供多个图片版本，还可以与 <code>sizes</code> 属性一起提供浏览器视口大小。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;images/eve.png&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Eve&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  srcset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;images/eve.png 400w, images/eve-xl.jpg 800w&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  sizes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;(max-width: 800px) 400px, 800px&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这也可以通过使用 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/picture" target="_blank" rel="noopener noreferrer"><code>&lt;picture&gt;</code></a> 元素以及 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/picture" target="_blank" rel="noopener noreferrer"><code>&lt;source&gt;</code></a> 子元素来实现，后者将 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/img" target="_blank" rel="noopener noreferrer"><code>&lt;img&gt;</code></a> 作为默认来源。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">picture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;images/eve.png&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> media</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;(max-width: 800px)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;images/eve-xl.jpg&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;images/eve.png&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Eve&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">picture</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了这些内置的 HTML <a href="/web/design/responsive-images" target="_blank" rel="noopener noreferrer">自适应图片方法</a>之外，HTML 还支持通过各种属性提高图片渲染性能。<code>&lt;img&gt;</code> 标记以及图形提交按钮 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/input/image" target="_blank" rel="noopener noreferrer"><code>&lt;input type=&quot;image&quot;&gt;</code></a> 可以包含 <code>height</code> 和 <code>width</code> 属性，用于设置图片的宽高比，以减少内容布局偏移。<code>lazy</code> 属性用于启用<a href="/web/images/performance-issues#deferring_image_requests" target="_blank" rel="noopener noreferrer">延迟加载</a>。</p><p>HTML 还支持直接使用 <a href="https://www.w3.org/Graphics/SVG/" target="_blank" rel="noopener noreferrer"><code>&lt;svg&gt;</code></a> 包含 SVG 图片，但可以使用 <code>&lt;img&gt;</code> 元素嵌入具有 <code>.svg</code> 扩展项（或 <a href="https://css-tricks.com/data-uris/" target="_blank" rel="noopener noreferrer">data-uri</a>）的 SVG 图片。</p><p>**注意 ** ：借助 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/figure" target="_blank" rel="noopener noreferrer"><code>&lt;figure&gt;</code></a> 元素及其嵌套的 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/figcaption" target="_blank" rel="noopener noreferrer"><code>&lt;figcaption&gt;</code></a> 元素，可添加带有关联说明的图片。<a href="https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/figure_role" target="_blank" rel="noopener noreferrer">数字</a>并非仅限于包含图片。它是一种语义方式，将图片、代码段、示例文本或其他内容连同相应内容的说明，作为一个整体进行引用。添加 <code>&lt;figcaption&gt;</code> 时，请确保它是 <code>&lt;figure&gt;</code> 中嵌套的第一个或最后一个子级。每张前景图片至少应包含 <code>src</code> 和 <code>alt</code> 属性。</p><p><code>src</code> 文件是嵌入图片的路径和文件名。<code>src</code> 属性用于提供图片的网址。然后，浏览器提取该资源并将其呈现到网页上。<code>&lt;img&gt;</code> 需要此属性；如果没有此属性，便没有要渲染的内容。</p><p><code>alt</code> 属性为图片提供替代文本，为无法查看屏幕（例如搜索引擎和辅助技术，甚至是 Alexa、Siri 和 Google 助理）的人提供图片说明；如果图片未加载，浏览器可能会显示。除了网络速度较慢或带宽受限的用户之外，<code>alt</code> 文本在 HTML 电子邮件中也非常有用，因为许多用户会在电子邮件应用中屏蔽图片。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;path/filename&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;descriptive text&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果图片属于 SVG 文件类型，则还应添加 <a href="https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/Img_role" target="_blank" rel="noopener noreferrer"><code>role=&quot;img&quot;</code></a>，这是由于 <a href="https://bugs.webkit.org/show_bug.cgi?id=216364" target="_blank" rel="noopener noreferrer">VoiceOver</a> <a href="https://bugs.webkit.org/show_bug.cgi?id=240656" target="_blank" rel="noopener noreferrer">bugs</a> 导致的。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;switch.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;light switch&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;img&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>**注意 ** ：这些示例以斜杠结尾，也被错误命名为自结束标记；这是 XML 的功能，包括 SVG 和 XHTML，但不包括 HTML。如需了解详情，请参阅 <a href="/web/html/forms" target="_blank" rel="noopener noreferrer">forms</a> 模块中的备注。## 撰写有效的 <code>alt</code> <strong>图片描述</strong></p><p>Alt 属性力求简洁明了，可提供图片传达的所有相关信息，同时省略与文档中其他内容重复或无用的信息。撰写文本时，语气应反映网站的语气。</p><p>要写出有效的替代文字，请设想一个人看不到整个网页，而您则是读了整个网页。通过使用<a href="/web/html/semantic-html#the_role_attribute" target="_blank" rel="noopener noreferrer">语义</a> <code>&lt;img&gt;</code> 元素，屏幕阅读器用户和机器人可得知该元素是图片。在 <code>alt</code> 中添加“This is a image/screenshot/photo of”是多余的。用户不必知道存在图片，但需要知道图片传达的信息。</p><p>正常情况下，您不能说“这是一只戴着红色帽子的狗有颗粒化的图片”。相反，您应该传达图片传达的内容（相对于文档其余部分的上下文）；您传达的内容将根据上下文和周围文本的内容而变化。</p><p>例如，我们会以不同的方式描述狗的照片，具体视环境而定。如果 Fluffy 是 Yuckymeat 狗粮评价旁边的头像，那么 <code>alt=&quot;Fluffy&quot;</code> 就足够了。</p><p>如果该照片是毛毛在动物收容所网站上的领养页面的一部分，则目标受众群体是潜在的养狗人士。文本应描述图片中传达的与采用者相关的信息，这些信息在周围文本中不重复。可以采用较长的说明，例如 <code>alt=&quot;Fluffy, a tri-color terrier with very short hair, with a tennis ball in her mouth&quot;</code>。收养页面中的文字通常包括可收养的宠物的物种、品种、年龄和性别，因此无需在替代文本中重复。但狗狗的生平简介可能不包含头发长度、颜色或玩具偏好。请注意，我们没有描述图片：潜在的狗主人不需要知道狗狗是在室内还是室外，或者它有红色项圈和蓝色牵引绳。</p><p>将图片用于图标时，由于 <code>alt</code> 属性提供无障碍名称，因此应传达图标的含义，而不是图片的说明。例如，放大镜图标的 alt 属性为 <code>search</code>。看起来像房屋的图标使用 <code>home</code> 作为替代文本。5 英寸软盘图标的说明为 <code>save</code>。如果有两个用于指示最佳实践和反模式的毛绒图标，则可以为戴着绿色贝雷帽、微笑的狗设置 <code>alt=&quot;good&quot;</code>，而套着红色贝雷帽的吼狗可能显示为 <code>alt=&quot;bad&quot;</code>。也就是说，请仅使用标准图标。如果您使用非标准图标（例如“好”和“坏毛毛”），请添加图例，并确保这些图标不是解读界面元素含义的唯一方式。</p><p>如果图片是屏幕截图或图表，请写下从图片中学到的内容，而不是描述外观。 虽然一张图片的确胜过千言万语，但说明应该简明扼要地传达学到的一切知识。</p><p>省略用户从上下文中已知的信息，以及在内容中以其他方式获知的信息。例如，如果您访问的是介绍如何更改浏览器设置的教程页面，而该页面介绍了如何在浏览器 Chrome 中点击图标，则屏幕截图中的页面网址并不重要。将 <code>alt</code> 限制为当前主题：如何更改设置。<code>alt</code> 可能是“设置图标位于搜索字段下方的导航栏中”。不要添加“屏幕截图”或“机器学习工作室”，因为用户无需知道这是屏幕截图，也不必知道技术撰写者在编写说明时正在何处冲浪。图片说明取决于首先显示图片的原因。</p><p>如果屏幕截图显示了如何通过转到 <code>chrome://version/</code> 来查找浏览器版本号，请将该网址作为说明添加到网页内容中，并提供空字符串作为 alt 属性，因为图片未提供周围文本中不包含的信息。</p><p>如果图片未提供任何额外信息，或者图片只是装饰性的，则该属性应仍存在，就像一个空字符串一样。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;svg/magazine.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;none&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>MachineLearningWorkshop.com 包含七张前景图片，因此共有七张具备 Alt 属性的图片：复活节彩蛋开关、手动图标、两张哈尔和夏娃的传记照片，以及三张搅拌机、吸尘器和烤面包机的头像。看起来像杂志的前景图片是唯一纯装饰的图片。该网页还有 2 张背景图片；这些图片也是装饰性的，由于通过 CSS 添加，因此无法访问。</p><p>这本杂志只是纯装饰性内容，它包含空的 <code>alt</code> 属性和 <a href="https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles/presentation_role" target="_blank" rel="noopener noreferrer"><code>role</code> 为 <code>none</code></a> 的图片，因为图片是纯代表性的 SVG。SVG 图片（如果有意义的）应包含 <code>role=&quot;img&quot;</code>。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;svg/magazine.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;none&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>页面底部有三条评价，每条评价都有一张海报图片。通常，<code>alt</code> 文本是图片中人物的姓名。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;images/blender.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Blendan Smooth&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;img&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>相反，由于这是一个笑话页面，因此您应该将可能不明显的内容传达给低视力用户，让他们不会错过幽默；我们使用原始机器函数作为 <code>alt</code>，而不是使用角色的名称：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;images/blender.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;blender&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;img&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>教师的照片不仅仅是头像：它们是一些传记图片，因此可以得到更详细的描述。</p><p>如果这是一个真实网站，您应提供最基本的教师内容描述，以便潜在学生在进入课堂时能够认出他们。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;svg/hal.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;img&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hal 9000; a camera lens containing a red dot that sometimes changes to yellow.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个笑话网站，因此请提供与笑话内容相关的信息：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;svg/hal.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;img&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hal 9000, the sentient AI computer from 2001: a Space Odyssey depicted as a camera lens with a red dot that changes to yellow when hovered.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您通过电话向朋友阅读网页，他们不会关心红点是什么样子的。在这种情况下，电影引用的历史记录非常重要。</p><p>撰写描述性文字时，请考虑图片传达了什么对用户而言比较重要且相关的信息，并包含这些信息。请注意，图片的 <code>alt</code> 属性的内容因上下文而异。图片中传达的所有信息可供视力正常的用户访问且与上下文相关，这就是需要传达的信息。尽量简短、精确且实用</p><p>对于嵌入的图片，至少需要有 <code>src</code> 和 <code>alt</code> 属性。我们还需要讨论一些其他属性。</p><h2 id="自适应图片" tabindex="-1"><a class="header-anchor" href="#自适应图片"><span>自适应图片</span></a></h2><p>视口大小有很多种。还有不同的屏幕分辨率您肯定不希望为大屏幕显示器传送足够宽的图像来浪费移动用户的带宽，但可能需要为正常屏幕分辨率的四倍的小设备提供分辨率更高的图片。您可以通过多种方式根据视口大小和屏幕分辨率提供不同的图片。</p><h3 id="img-srcset-个属性" tabindex="-1"><a class="header-anchor" href="#img-srcset-个属性"><span><code>&lt;img&gt; srcset</code> <strong>个属性</strong></span></a></h3><p>借助 <a href="/web/design/responsive-images#responsive_images_with_srcset" target="_blank" rel="noopener noreferrer"><code>srcset</code></a> 属性，浏览器可以根据多个媒体查询（包括视口尺寸和屏幕分辨率）选择要请求的图片，从而推荐多个图片文件。</p><p>每个 <code>&lt;img&gt;</code> 元素可以有一个 <code>srcset</code> 属性，但该 <code>srcset</code> 可以链接到多张图片。<code>srcset</code> 属性接受逗号分隔值列表，每个值包含素材资源的网址，后跟一个空格，接着是该图片选项的描述符。如果使用宽度描述符，您还必须为每个 <code>srcset</code> 选项（最后一个选项除外）添加 <code>sizes</code> 属性，并附上媒体查询或来源大小。介绍<a href="/web/design/responsive-images#responsive_images_with_srcset" target="_blank" rel="noopener noreferrer">使用 <code>srcset</code> 的自适应图片</a>和<a href="/web/images/descriptive" target="_blank" rel="noopener noreferrer">描述性语法</a>的“学习”部分值得阅读。</p><p>如果有匹配项，<code>srcset</code> 图片将优先于 <code>src</code> 图片。</p><h3 id="picture-和-source" tabindex="-1"><a class="header-anchor" href="#picture-和-source"><span><code>&lt;picture&gt;</code>和<code>&lt;source&gt;</code></span></a></h3><p>另一种提供多个资源并允许浏览器渲染最合适的资源的方法是使用 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/picture" target="_blank" rel="noopener noreferrer"><code>&lt;picture&gt;</code></a> 元素。<code>&lt;picture&gt;</code> 元素是不限数量的 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/source" target="_blank" rel="noopener noreferrer"><code>&lt;source&gt;</code></a> 元素和单个必需的 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/img" target="_blank" rel="noopener noreferrer"><code>&lt;img&gt;</code></a> 元素中列出的多个图片选项的容器元素。</p><p><a href="https://developer.mozilla.org/docs/Web/HTML/Element/source" target="_blank" rel="noopener noreferrer"><code>&lt;source&gt;</code></a> 属性包括 <code>srcset</code>、<code>sizes</code>、<code>media</code>、<code>width</code> 和 <code>height</code>。<code>srcset</code> 属性是 <code>img</code>、<code>source</code> 和 <code>link</code> 的通用属性，但通常在来源上的实现方式略有不同，因为媒体查询可以改为在 <code>&lt;srcset&gt;</code> 的媒体属性中列出。<code>&lt;source&gt;</code> 还支持在 <code>type</code> 属性中定义的图片格式。</p><p>浏览器会考虑每个子级 <code>&lt;source&gt;</code> 元素，并从中选择最匹配的元素。如果未找到匹配项，则系统会选择 <code>&lt;img&gt;</code> 元素的 <a href="https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-src" target="_blank" rel="noopener noreferrer"><code>src</code></a> 属性的网址。可访问名称来自嵌套 <code>&lt;img&gt;</code> 的 <code>alt</code> 属性。另外，值得一读的“学习”部分介绍了 <a href="/web/design/picture-element" target="_blank" rel="noopener noreferrer"><code>&lt;picture&gt;</code></a> 元素和<a href="/web/images/prescriptive" target="_blank" rel="noopener noreferrer">规范语法</a>。</p><h2 id="其他性能功能" tabindex="-1"><a class="header-anchor" href="#其他性能功能"><span>其他性能功能</span></a></h2><h3 id="延迟加载" tabindex="-1"><a class="header-anchor" href="#延迟加载"><span>延迟加载</span></a></h3><p><a href="/web/design/responsive-images#preloading_hints" target="_blank" rel="noopener noreferrer"><code>loading</code> 属性</a>用于告知启用 JS 的浏览器如何加载图片。默认的 <code>eager</code> 值表示图片会在 HTML 解析后立即加载，即使图片位于可见视口之外也是如此。通过设置 <a href="https://web.dev/articles/lazy-loading" target="_blank" rel="noopener noreferrer"><code>loading=&quot;lazy&quot;</code></a>，系统会延迟图片加载，直到它有可能进入视口为止。“可能”由浏览器根据图片与视口的距离来定义。当用户滚动屏幕时，该值会更新。延迟加载有助于节省带宽和 CPU，从而为大多数用户提高性能。如果 JavaScript 处于停用状态，出于安全考虑，所有图片将默认采用 <code>eager</code>。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;switch.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;light switch&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> loading</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;lazy&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="宽高比" tabindex="-1"><a class="header-anchor" href="#宽高比"><span>宽高比</span></a></h3><p>浏览器在收到 HTML 后会开始呈现它，并在遇到资源时发出资源请求。这意味着，当浏览器遇到 <code>&lt;img&gt;</code> 标记并发出请求时，已经在呈现 HTML。图片可能需要一些时间才能加载完毕。 默认情况下，除了呈现 <code>alt</code> 文本所需的大小之外，浏览器不会为图片预留空间。</p><p><code>&lt;img&gt;</code> 元素始终支持无单位 <code>height</code> 和 <code>width</code> 属性。这些属性已不再使用，取而代之的是 CSS。CSS 可以定义图片尺寸，通常会设置单个尺寸（例如 <code>max-width: 100%;</code>），以确保宽高比保持不变。 由于 CSS 通常包含在 <code>&lt;head&gt;</code> 中，因此系统会在遇到任何 <code>&lt;img&gt;</code> 之前对其进行解析。但未明确列出 <code>height</code> 或宽高比，预留的空间就是 <code>alt</code> 文本的高度（或宽度）。由于大多数开发者只声明宽度，因此在接收和渲染图片时会导致累计布局偏移，这会危害网页指标。为解决此问题，浏览器应支持图片宽高比。在 <code>&lt;img&gt;</code> 上添加 <code>height</code> 和 <code>width</code> 属性充当大小调整提示，告知浏览器宽高比，从而为最终的图片渲染预留适量空间。<a href="/web/design/responsive-images#sizing_hints" target="_blank" rel="noopener noreferrer"></a>为图片添加高度和宽度值后，浏览器就知道该图片的宽高比。当浏览器遇到单个尺寸（例如我们的 50% 示例）时，它会为遵循 CSS 尺寸的图片和保持宽高比的另一个尺寸的图片节省空间。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;switch.svg&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> alt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;light switch&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> role</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;img&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;70&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;112&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果 CSS 设置正确，您的图片仍会具备自适应能力。是的，所包含的无单位 <code>height</code> 和 <code>width</code> 值会被 CSS 替换。添加这些属性的目的是以合适的宽高比保留空间，通过减少布局偏移来提高性能。网页的加载时间仍将大致相同，但当图片被绘制到屏幕上时，界面不会跳跃。</p><h2 id="其他图片特征" tabindex="-1"><a class="header-anchor" href="#其他图片特征"><span>其他图片特征</span></a></h2><p><code>&lt;img&gt;</code> 元素还支持 <code>crossorigin</code>、<code>decoding</code>、<code>referrerpolicy</code> 以及 <code>fetchpriority</code> 属性（在基于 Blink 的浏览器中）。很少使用：如果图片是服务器端地图的一部分，请添加 <code>ismap</code> 布尔值属性，并将 <code>&lt;img&gt;</code> 嵌套在链接中，以供没有指控设备的用户使用。</p><p><code>ismap</code> 属性在 <code>&lt;input type=&quot;image&quot; name=&quot;imageSubmitName&quot;&gt;</code> 上不是必需的，甚至不需要，因为点击位置的 <code>x</code> 和 <code>y</code> 坐标会在表单提交期间发送，并将值附加到输入名称（如果有）。例如，当用户点击图片并提交时，类似 <code>&amp;imageSubmitName.x=169&amp;imageSubmitName.y=66</code> 的内容将随表单一起提交。如果图片没有 <code>name</code> 属性，则系统会发送 x 和 y：<code>&amp;x=169&amp;y=66</code>。</p>`,65),h=[l];function r(n,d){return s(),e("div",null,h)}const p=i(a,[["render",r],["__file","images.html.vue"]]),k=JSON.parse('{"path":"/web/html/images.html","title":"图像","lang":"zh-CN","frontmatter":{"date":"2024-03-31T00:00:00.000Z","category":"html","description":"图像 目标 ：本单元简要介绍了 HTML 中图片的各种应用场景。如果您想深入了解该主题，请访问“学习图片”课程。装饰性图片（例如按钮的背景渐变，或部分内容或整页中的背景图片）只具有外观效果，应通过 CSS 应用。当图片为文档添加上下文时，图片就是内容，应该嵌入 HTML。 添加图片的主要方法是使用 <img> 标记，其中 src 属性引用图片资源，al...","head":[["meta",{"property":"og:url","content":"https://pigiysou147.github.io/blogs/web/html/images.html"}],["meta",{"property":"og:site_name","content":"silly blogs"}],["meta",{"property":"og:title","content":"图像"}],["meta",{"property":"og:description","content":"图像 目标 ：本单元简要介绍了 HTML 中图片的各种应用场景。如果您想深入了解该主题，请访问“学习图片”课程。装饰性图片（例如按钮的背景渐变，或部分内容或整页中的背景图片）只具有外观效果，应通过 CSS 应用。当图片为文档添加上下文时，图片就是内容，应该嵌入 HTML。 添加图片的主要方法是使用 <img> 标记，其中 src 属性引用图片资源，al..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T07:14:05.000Z"}],["meta",{"property":"article:author","content":"Silly"}],["meta",{"property":"article:published_time","content":"2024-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T07:14:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图像\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T07:14:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Silly\\",\\"url\\":\\"https://pigiysou147.com\\"}]}"]]},"headers":[{"level":2,"title":"自适应图片","slug":"自适应图片","link":"#自适应图片","children":[{"level":3,"title":"<img> srcset 个属性","slug":"img-srcset-个属性","link":"#img-srcset-个属性","children":[]},{"level":3,"title":"<picture>和<source>","slug":"picture-和-source","link":"#picture-和-source","children":[]}]},{"level":2,"title":"其他性能功能","slug":"其他性能功能","link":"#其他性能功能","children":[{"level":3,"title":"延迟加载","slug":"延迟加载","link":"#延迟加载","children":[]},{"level":3,"title":"宽高比","slug":"宽高比","link":"#宽高比","children":[]}]},{"level":2,"title":"其他图片特征","slug":"其他图片特征","link":"#其他图片特征","children":[]}],"git":{"createdTime":1724483645000,"updatedTime":1724483645000,"contributors":[{"name":"方勇","email":"silly@digitalgd.com.cn","commits":1}]},"readingTime":{"minutes":13.65,"words":4095},"filePathRelative":"web/html/images.md","localizedDate":"2024年3月31日","excerpt":"\\n<p><strong>目标</strong> ：本单元简要介绍了 HTML 中图片的各种应用场景。如果您想深入了解该主题，请访问<a href=\\"/web/images/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">“学习图片”课程</a>。装饰性图片（例如按钮的背景渐变，或部分内容或整页中的背景图片）只具有外观效果，应通过 CSS 应用。当图片为文档添加上下文时，图片就是内容，应该嵌入 HTML。</p>\\n<p>添加图片的主要方法是使用 <a href=\\"https://developer.mozilla.org/docs/Web/HTML/Element/img\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>&lt;img&gt;</code></a> 标记，其中 <code>src</code> 属性引用图片资源，<code>alt</code> 属性用于描述图片。</p>","autoDesc":true}');export{p as comp,k as data};
