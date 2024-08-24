# 高性能 CSS 动画的示例 

在这篇博文中，您将了解如何在 CodePen 上制作一些热门动画。 这些动画均使用本部分其他文章中介绍的高性能技术。

如需了解相关理论，请参阅[为什么有些动画的播放速度很慢？](https://web.dev/articles/animations-overview?hl=zh-cn) 以及[动画指南](https://web.dev/articles/animations-guide?hl=zh-cn)，了解实用技巧。

## 向导加载动画

<iframe allow="" loading="lazy" src="https://codepen.io/Craaftx/embed/ExyYRMK?height=458&amp;theme-id=light&amp;default-tab=result" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="仅 CSS 加载器 - Guilmain Dorian 的 Wizard" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 854px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>
[在 CodePen 上查看向导加载动画](https://codepen.io/Craaftx/full/ExyYRMK)

该加载动画完全使用 CSS 构建。 图片以及所有的动画都已使用 CSS 和 HTML 制作 不含图片或 JavaScript。 如需了解其创建方式和性能，您可以使用 Chrome 开发者工具。

### 使用 Chrome 开发者工具检查动画

在动画运行的情况下，在 Chrome 开发者工具中打开“Performance”标签页，并录制几秒钟的动画。 您应该会在摘要中看到运行此动画时浏览器未执行任何布局或绘制操作。

<ph type="x-smartling-placeholder">

</ph>![开发者工具中的摘要](https://web.dev/static/articles/animations-examples/image/summary-devtools.jpeg?hl=zh-cn)<ph type="x-smartling-placeholder"></ph> 对向导动画进行性能剖析后的摘要。

为了解如何在不导致布局和绘制的情况下实现此动画， 并检查 Chrome DevTools 中所有正在移动的元素。 您可以使用**动画面板**找到各种动画元素， 点击任何元素都会在 DOM 中突出显示该元素。

<ph type="x-smartling-placeholder">

</ph>![显示动画各个部分的 Animations 面板。](https://web.dev/static/articles/animations-examples/image/the-animations-panel-show-111a63433860e.jpg?hl=zh-cn)<ph type="x-smartling-placeholder"></ph> 在 Chrome DevTools 动画面板中查看和选择项目。

例如，选择三角形 我们来看一下，元素的框在它向空中移动的过程中是如何变形的， 然后回到起始位置

<ph type="x-smartling-placeholder">

</ph>

<video autoplay="" controls="" loop="" muted=""  src="https://web.dev/static/articles/animations-examples/video/tcFciHGuF3MxnTr1y5ue01OGLBn2/STzIqse0ekWT49oJbwX5.mp4?hl=zh-cn"  style="box-sizing: inherit; border: 0px; height: auto; max-width: 100%; border-radius: var(--devsite-video-border-radius); display: block; margin-left: auto; margin-right: auto;"></video>

展示如何在 Chrome 开发者工具中跟踪三角形路径的视频。

保持选中该元素，查看“样式”面板。 在这里，您可以看到用于绘制三角形形状的 CSS 代码 以及正在使用的动画

### 工作原理

该三角形是使用 `::after` 伪元素添加生成的内容创建的， 使用边框创建形状

```
.triangle {
    position: absolute;
    bottom: -62px;
    left: -10px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
}

.triangle::after {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 28px 48px 28px;
    border-color: transparent transparent #89beb3 transparent;
}
```

**注意** ：您可以参阅 [CSS 的形状](https://css-tricks.com/the-shapes-of-css/)，详细了解如何使用边框和生成内容制作形状。

系统会使用以下这行 CSS 添加动画

```
animation: path_triangle 10s ease-in-out infinite;
```

在 Chrome 开发者工具中，向下滚动样式面板即可找到关键帧。 在这里，您会发现动画是通过使用 `transform` 更改元素的位置并旋转而创建的。 `transform` 属性是[动画指南](https://web.dev/articles/animations-guide?hl=zh-cn)中介绍的属性之一， 不会导致浏览器进行布局或绘制操作（这是导致动画播放缓慢的主要原因）。

```
@keyframes path_triangle {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-172px) translatex(10px) rotate(-10deg);
  }
  55% {
    transform: translateY(-172px) translatex(10px) rotate(-365deg);
  }
  58% {
    transform: translateY(-172px) translatex(10px) rotate(-365deg);
  }
  63% {
    transform: rotate(-360deg);
  }
}
```

<iframe allow="camera; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi" loading="lazy" src="https://glitch.com/embed/#!/embed/animation-breakdown1-2?attributionHidden=true&amp;sidebarCollapsed=true&amp;previewSize=100" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Glitch 动画-breakdown1-2" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 420px; width: 854px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>
该动画的每个不同运动部分都使用了类似的技术。 由此可以得到一个复杂的动画，该动画可以流畅地播放。

## 跳动的圆圈

<iframe allow="" loading="lazy" src="https://codepen.io/peeke/embed/BjxXZa?height=458&amp;theme-id=light&amp;default-tab=result" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="Peeke 创作的《Purese Circle》" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 854px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>
[在 CodePen 上查看脉动圆圈](https://codepen.io/peeke/full/BjxXZa)

这种类型的动画有时用于吸引用户注意网页上的某些内容。 如需了解动画效果，您可以使用 Firefox 开发者工具。

### 使用 Firefox 开发者工具检查动画

在动画运行时，在 Firefox 开发者工具中打开“Performance”标签，并录制几秒钟的动画。 停止录制， 在广告瀑布流中，您应该会看到没有 **Recalculate Style** 的条目。 现在，您已知道此动画不会导致样式重新计算， 从而实现布局和绘制操作

<ph type="x-smartling-placeholder">

</ph>![Firefox 广告瀑布流中的动画详情](https://web.dev/static/articles/animations-examples/image/details-the-animation-t-a249e68baa707.jpg?hl=zh-cn)<ph type="x-smartling-placeholder"></ph> Firefox 开发者工具瀑布流。

继续在 Firefox 开发者工具中检查圆圈，看看此动画的效果。 包含 `pulsating-circle` 类的 `` 用于标记圆形的位置， 但它本身并不绘制圆。

```
.pulsating-circle {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 30px;
    height: 30px;
}
```

可见圆和动画是使用 `::before` 和 `::after` 伪元素实现的。

`::before` 元素可创建延伸到白色圆圈之外的不透明环， 使用名为 `pulse-ring` 的动画。 用于为 `transform: scale` 添加动画效果，以及为 `opacity` 添加动画效果。

```
.pulsating-circle::before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: #01a4e9;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.33);
  }
  80%, 100% {
    opacity: 0;
  }
}
```

查看哪些属性正在添加动画效果的另一种方法是在 Firefox 开发者工具中选择 **Animations** 面板。 然后，您会看到所用动画的可视化效果， 以及要添加动画效果的属性

<ph type="x-smartling-placeholder">

</ph>

<video autoplay="" controls="" src="https://web.dev/static/articles/animations-examples/video/tcFciHGuF3MxnTr1y5ue01OGLBn2/FuxnywlwqojS8YVMCmKC.mp4" loop="" muted="" style="box-sizing: inherit; border: 0px; height: auto; max-width: 100%; border-radius: var(--devsite-video-border-radius); display: block; margin-left: auto; margin-right: auto;"></video>

选择 ::before 伪元素后，我们可以看到哪些属性正在设置动画效果。

白色圆形本身是使用 `::after` 伪元素创建的，并为其添加动画效果。 动画 `pulse-dot` 在动画播放过程中使用 `transform: scale` 放大和缩小圆点。

```css
.pulsating-circle::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
}

@keyframes pulse-dot {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}
```

像这样的动画可以用在应用的不同位置 重要的是，这些小细节不会影响应用的整体性能。

## 纯 CSS 3D 全景

<iframe allow="" loading="lazy" src="https://codepen.io/iamlark/embed/jYzYJg?height=458&amp;theme-id=light&amp;default-tab=result" data-darkreader-inline-border-top="" data-darkreader-inline-border-right="" data-darkreader-inline-border-bottom="" data-darkreader-inline-border-left="" data-title="纯 CSS 3D 全景" style="color-scheme: initial; box-sizing: inherit; border: 0px; height: 500px; width: 854px; --darkreader-inline-border-top: 0px; --darkreader-inline-border-right: 0px; --darkreader-inline-border-bottom: 0px; --darkreader-inline-border-left: 0px;"></iframe>
[在 CodePen 上查看纯 CSS 3D 全景](https://codepen.io/iamlark/full/jYzYJg)

这个动画看起来过于复杂， 不过，它采用了我们在前面的示例中已经见过的技术。 为大量元素添加动画效果会带来复杂性。

打开 Chrome 开发者工具，然后选择一个类为 `plane` 的元素。 球体由一组旋转的平面和辐条组成。

<ph type="x-smartling-placeholder">

</ph>

<video src="https://web.dev/static/articles/animations-examples/video/tcFciHGuF3MxnTr1y5ue01OGLBn2/8lA3linRM6SqufzlUlJR.mp4" autoplay="" controls="" loop="" muted="" style="box-sizing: inherit; border: 0px; height: auto; max-width: 100%; border-radius: var(--devsite-video-border-radius); display: block; margin-left: auto; margin-right: auto;"></video>

飞机看起来是在旋转。

。

**注意** ：借助 Chrome 开发者工具中的 [DOM 搜索工具](https://developer.chrome.com/docs/devtools/dom?hl=zh-cn#search)，您可以更轻松地找到要检查的元素。

这些平面和辐射位于封装容器 `` 内， 使用 `transform: rotate3d` 进行旋转的就是这个元素。

```css
.sphere-wrapper {
  transform-style: preserve-3d;
  width: 300px;
  height: 300px;
  position: relative;
  animation: rotate3d 10s linear infinite;
}

@keyframes rotate3d {
  0% {
    transform: rotate3d(1, 1, 1, 0deg);
  }
  25% {
    transform: rotate3d(1, 1, 1, 90deg);
  }
  50% {
    transform: rotate3d(1, 1, 1, 180deg);
  }
  75% {
    transform: rotate3d(1, 1, 1, 270deg);
  }
  100% {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}
```

这些圆点可以嵌套在 `plane` 和 `spoke` 元素中， 它们使用通过 transform 来缩放和转换它们的动画。 这样就能产生脉冲效果。

<ph type="x-smartling-placeholder">

</ph>

<video autoplay="" src="https://web.dev/static/articles/animations-examples/video/tcFciHGuF3MxnTr1y5ue01OGLBn2/JoLi8L3VW9nUG25sEvkZ.mp4?hl=zh-cn" controls="" loop="" muted="" style="box-sizing: inherit; border: 0px; height: auto; max-width: 100%; border-radius: var(--devsite-video-border-radius); display: block; margin-left: auto; margin-right: auto;"></video>

圆点会随着球体和脉冲而旋转。

```css
.spoke-15 .dot,
.spoke-21 .dot {
  animation: pulsate 0.5s infinite 0.83333333s alternate both;
  background-color: #55ffee;
}

@-webkit-keyframes pulsate {
  0% {
    transform: rotateX(90deg) scale(0.3) translateZ(20px);
  }
  100% {
    transform: rotateX(90deg) scale(1) translateZ(0px);
  }
}
```

制作这个动画涉及的工作是：选对时机 来实现转动和脉冲效果。 动画本身相当简单明了 并使用效果非常好的方法。

打开 Chrome 开发者工具并记录此动画运行时的性能，即可查看此动画的性能。 初始加载后，动画没有触发布局或绘制， 并且能够平稳运行

## 总结

从这些示例中，您可以看出使用高性能方法为一些属性添加动画效果是如何创建一些非常酷的动画的。 默认使用[动画指南](https://web.dev/articles/animations-guide?hl=zh-cn)中所述的高性能方法。 则可以花时间创建想要的效果，而无需担心网页速度变慢。