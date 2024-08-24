# 圣杯布局 

 圣杯布局是一种非常实用的布局方式，它通过CSS的定位和负边距技术实现了三栏布局中的内容优先渲染 

如需使用单行代码编写整个网格，请使用 `grid-template` 属性。这样，您就可以同时设置行和列。

属性和值对为：`grid-template: auto 1fr auto / auto 1fr auto`。第一个和第二个以空格分隔的列表之间的斜线用于分隔行和列。

```css/2
.parent {  display: grid;  grid-template: auto 1fr auto / auto 1fr auto;}
```

与上一个示例一样，页眉和页脚具有自动调整的内容大小。这里的左右边栏会根据其子级的固有尺寸自动调整大小。不过，这一次是水平尺寸（宽度）而不是垂直尺寸（高度）。



HTML

```html
<div class="parent">
    <header class="section coral">Header</header>
    <div class="left-side section blue">Left Sidebar</div>
    <main class="section green"> Main Content</main>
    <div class="right-side section yellow">Right Sidebar</div>
    <footer class="section coral">Footer</footer>
  </div>

```

CSS

```css
.parent {
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
}

header {
  padding: 2rem;
  grid-column: 1 / 4;
}

.left-side {
  grid-column: 1 / 2;
}

main {
  grid-column: 2 / 3;
}

.right-side {
  grid-column: 3 / 4;
}

footer {
  grid-column: 1 / 4;
}  
```