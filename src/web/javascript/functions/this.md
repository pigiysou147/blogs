---
date: 2024-03-31
category: javascript
tag:
  - function
  - this
---
# this关键字

关键字 `this` 是指在调用函数时绑定到函数的对象的值，也就是说，根据函数是作为方法调用、独立函数还是[构造函数](/blogs/web/javascript/functions/new)调用，其值会有所不同。

调用函数时，它会在后台创建关键字 `this` 的实例，作为对包含该函数的对象的引用，从而允许从其作用域内访问与其一起定义的属性和方法。在某些方面，对 `this` 的使用类似于使用通过 `const` 声明的变量。与常量一样，您无法移除 `this`，也无法为其重新赋值，但可以更改 `this` 关键字包含的对象的方法和属性。

## 全局绑定

在函数或对象的上下文之外，`this` 引用 `globalThis` 属性，该属性是对大多数 JavaScript 环境中的全局对象的引用。在网络浏览器中运行的脚本的上下文中，全局对象是 `window` 对象：

```javascript
this;
>Window{0:Window, window:Window,self:Window, document: document, name:'', location:Location,...}
```

在 Node.js 中，`globalThis` 是 `global` 对象：

```javascript
$ node
Welcome to Node.js v20.10.0.
Type".help"for more information.
>this
<ref*1>Object[global]{
...
}
```

在严格模式之外，`this` 还会指代独立函数内的全局对象，因为父级 `Window` 是有效“拥有”这些函数的对象。

```javascript
function myFunction(){
    console.log(this);
}
myFunction();
>Window{...}

(function(){
    console.log(this);
}());
>Window{...}
```

使用严格模式时，`this` 在独立函数中的值为 `undefined`：

```javascript
(function(){
    "use strict";
    console.log(this);
}());
>undefined
```

在引入严格模式之前，`this` 的 `null` 或 `undefined` 值会被替换为对全局对象的引用。由于这种旧版行为，您有时可能会看到全局绑定称为“默认绑定”。

## 隐式绑定

将函数作为对象的方法进行调用时，该方法内的 `this` 实例会引用包含该方法的对象，从而授予对其旁边的方法和属性的访问权限：

```javascript
let myObject ={
    myValue:"This is my string.",
    myMethod(){
            console.log(this.myValue );
    }
};

myObject.myMethod();
>"This is my string."
```

`this` 的值可能取决于函数及其封装对象的定义方式。相反，`this` 值的上下文是当前执行上下文。在这种情况下，执行上下文是 `myObject` 对象正在调用 `myMethod` 方法，因此 `myObject` 是 `this` 的值。在前面的示例中，这似乎是一项技术性问题，但对于 `this` 的更高级用法，需要注意它是一个基本区别。

通常，使用 `this` 时请不要预期周围的代码具有任何特定结构。此规则的例外情况是 ES5 [箭头函数](/blogs/web/javascript/functions/function-expressions#arrow-functions)。

### 箭头函数中的 `this`

在[箭头函数](/blogs/web/javascript/functions/function-expressions#arrow-functions)中，`this` 解析为[*词法封闭环境*](https://262.ecma-international.org/6.0/#sec-arrow-function-definitions-runtime-semantics-evaluation)中的绑定。这意味着，箭头函数中的 `this` 引用该函数最接近的上下文中 `this` 的值：

```javascript
let myObject ={
    myMethod(){ console.log(this);},
    myArrowFunction:()=> console.log(this),
    myEnclosingMethod:function(){
        this.myArrowFunction =()=>{ console.log(this)};
    }
};

myObject.myMethod();
>Object{ myMethod: myMethod(), myArrowFunction: myArrowFunction()}

myObject.myArrowFunction();
>Window{...}
```

在前面的示例中，`myObject.myMethod()` 将 `myObject` 记录为“拥有”该方法的对象，但 `myObject.myArrowFunction()` 会返回 `globalThis`（或 `undefined`），因为箭头函数内的 `this` 实例引用的是最高封闭范围。

在以下示例中，`myEnclosingMethod` 会在执行时针对包含该函数的对象创建一个箭头函数。箭头函数内的 `this` 实例现在引用封闭环境内 `this` 的值，即包含该箭头函数的方法。由于 `myEnclosingMethod` 中的 `this` 值引用 `myObject`，因此在定义箭头函数后，箭头函数中的 `this` 也引用 `myObject`：

```javascript
let myObject ={
    myMethod(){ console.log(this);},
    myEnclosingMethod:function(){
        this.myArrowFunction =()=>{ console.log(this)};
    }
};

myObject.myEnclosingMethod();
myObject.myArrowFunction();
>Object{ myMethod: myMethod(), myArrowFunction: myArrowFunction()}
```

## 显式绑定

隐式绑定可处理使用 `this` 的大多数用例。但是，有时您可能需要使用 `this` 的值来表示特定的执行上下文，而不是假设的上下文。举例说明（如果稍微过时），我们以 `setTimeout` 回调函数中的 `this` 为例，因为此回调具有唯一的执行上下文：

```javascript
var myObject ={
  myString:"This is my string.",
  myMethod(){
    console.log(this.myString );
  }
};
myObject.myMethod();
>"This is my string."

setTimeout( myObject.myMethod,100);
>undefined
```

虽然其他功能已经解决了 `setTimeout` 的这一特定缺点，但“丢失”`this` 的类似问题以前已经通过在预期上下文范围内创建对 `this` 值的显式引用来解决。在旧版代码库中，您可能偶尔会看到使用 `that`、`self` 或 `_this` 等标识符分配给变量的 `this` 实例。以下是包含所传递的 `this` 值的变量的通用标识符约定。

当您使用 `call()`、`bind()` 或 `apply()` 方法调用函数时，`this` 会显式引用被调用的对象：

```javascript
let myFunction =function(){
    console.log(this.myValue );
}

let myObject ={
   "myValue":"This is my string."
 };

myFunction.call( myObject );
>"This is my string."
```

```javascript
var myObject ={
  myString:"This is my string.",
  myMethod(){
    console.log(this.myString );
  }
};

setTimeout( myObject.myMethod.bind( myObject ),100);
>"This is my string."
```

显式绑定会替换隐式绑定提供的 `this` 值。

```javascript
let myObject ={
    "myValue":"This string sits alongside myMethod.",
    myMethod(){
        console.log(this.myValue );
    }
};
let myOtherObject ={
    "myValue":"This is a string in another object entirely.",
};

myObject.myMethod.call( myOtherObject );
>"This is a string in another object entirely."
```

如果调用函数时会将 `this` 的值设置为 `undefined` 或 `null`，在严格模式之外，该值会被 `globalThis` 替换：

```javascript
let myFunction =function(){
    console.log(this);
}

myFunction.call(null);
>Window{...}
```

同样，如果调用函数的方式会为 `this` 提供原始值，该值将替换为在严格模式之外的[原始值的封装容器对象](/blogs/web/javascript/appendix#prototypal-inheritance)：

```javascript
let myFunction =function(){
    console.log(this);
}

let myNumber =10;

myFunction.call( myNumber );
>Number{10}
```

在严格模式下，传递的 `this` 值不会以任何方式强制转换为对象，即使是基元值、`null` 或 `undefined` 值也不例外：

```javascript
"use strict";
let myFunction =function(){
    console.log(this);
}

let myNumber =10;

myFunction.call( myNumber );
>10

myFunction.call(null);
>null
```

## `new` **绑定**

通过 `new` 关键字将[类](/blogs/web/javascript/classes)用作构造函数时，`this` 会引用新创建的实例：

```javascript
classMyClass{
    myString;
    constructor(){
        this.myString ="My string.";
    }
    logThis(){
        console.log(this);
    }
}
const thisClass =newMyClass();

thisClass.logThis();
>Object{ myString:"My string."}
```

同样，使用 `new` 调用的构造函数函数内 `this` 的值引用正在创建的对象：

```javascript
functionMyFunction(){
  this.myString ="My string.";
  this.logThis =function(){
    console.log(this);
  }
}
const myObject =newMyFunction();

myObject.logThis();
>Object{ myString:"My string.", logThis: logThis()}
```

## 事件处理脚本绑定

在事件处理脚本中，`this` 的值会引用调用它的对象。在事件处理脚本的回调函数内，这意味着 `this` 会引用与处理脚本关联的元素：

```javascript
let button = document.querySelector("button");

button.addEventListener("click",function(event){ console.log(this);});
```

当用户与上一个代码段中的 `button` 互动时，结果是包含 `<button>` 本身的元素对象：

```javascript
>Button{}
```

当箭头函数用作事件监听器回调时，`this` 的值将再次由最近的封装执行上下文提供。在顶层，事件处理脚本回调函数中的 `this` 为 `globalThis`（在严格模式下，为 `undefined`）：

```javascript
let button = document.querySelector("button");

button.addEventListener("click",(event)=>{ console.log(this);});
>undefined
```

与任何其他对象一样，当您使用 `call()`、`bind()` 或 `apply()` 方法引用事件监听器的回调函数时，`this` 会明确引用该对象：

```javascript
let button = document.querySelector("button");
let myObject ={
    "myValue":true
};
function handleClick(){
    console.log(this);
}

button.addEventListener("click", handleClick.bind( myObject ));
>Object{ myValue:true}
```
