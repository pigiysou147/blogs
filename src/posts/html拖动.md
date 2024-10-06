### HTML拖动简单示例

以下是实现一个网页全屏并且可拖动图标的功能的步骤，使用HTML、CSS和JavaScript来完成。

#### 1. HTML结构
创建一个`<div>`元素并设置其样式为绝对定位，将要拖动的图标作为该元素的子元素：

```html
<div id="draggable-icon" style="position: absolute;">
  <img src="icon.png" alt="Icon">
</div>
```

#### 2. CSS样式
设置整个网页的样式为全屏显示：

```css
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
```

#### 3. JavaScript拖动功能
为图标元素添加拖动功能，使用鼠标事件检测用户是否在拖动图标，并根据鼠标位置移动图标元素：

```javascript
var draggable = document.getElementById('draggable-icon');
var mouseX, mouseY;
var offsetX = 0, offsetY = 0;
var isDragging = false;

draggable.addEventListener('mousedown', function(e) {
  isDragging = true;
  mouseX = e.clientX;
  mouseY = e.clientY;
  offsetX = draggable.offsetLeft;
  offsetY = draggable.offsetTop;
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    var deltaX = e.clientX - mouseX;
    var deltaY = e.clientY - mouseY;
    draggable.style.left = (offsetX + deltaX) + 'px';
    draggable.style.top = (offsetY + deltaY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});
```

#### 4. 设置初始位置
在页面加载时将图标元素设置为初始位置：

```javascript
draggable.style.left = '50px';
draggable.style.top = '50px';
```

### 完整示例
将上述代码组合成一个完整的HTML文件：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Draggable Icon</title>
    <style>
        html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        #draggable-icon {
            position: absolute;
        }
    </style>
</head>
<body>
    <div id="draggable-icon">
        <img src="icon.png" alt="Icon">
    </div>

    <script>
        var draggable = document.getElementById('draggable-icon');
        var mouseX, mouseY;
        var offsetX = 0, offsetY = 0;
        var isDragging = false;

        draggable.addEventListener('mousedown', function(e) {
            isDragging = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
            offsetX = draggable.offsetLeft;
            offsetY = draggable.offsetTop;
        });

        document.addEventListener('mousemove', function(e) {
            if (isDragging) {
                var deltaX = e.clientX - mouseX;
                var deltaY = e.clientY - mouseY;
                draggable.style.left = (offsetX + deltaX) + 'px';
                draggable.style.top = (offsetY + deltaY) + 'px';
            }
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });

        draggable.style.left = '50px';
        draggable.style.top = '50px';
    </script>
</body>
</html>
```

通过上述代码，可以实现一个可拖动的图标，用户可以通过鼠标拖动图标在全屏网页中移动。