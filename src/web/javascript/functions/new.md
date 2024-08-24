---
date: 2024-03-31
category: javascript
tag:
  - function
---
# new关键字

使用 `new` 调用函数时，系统会使用调用的函数作为该对象的“构造函数”创建一个新对象：

```javascript
functionMyFunction(){}
const myObject =newMyFunction();

typeof myObject;
>"object"`
```

这样，“构造函数函数”就可以提供一个模板，用于创建遵循相同结构模式的对象：

```javascript
functionMyFunction(){
  this.myProperty =true;
}
const myObject =newMyFunction();

myObject.myProperty;
>true
```

构造函数函数中 [`this`](/web/javascript/functions/this) 的值引用正在创建的对象，以便在创建对象时使用属性和方法填充该对象。这样就可以创建包含数据值的对象，以及作为单个便携单元对这些数据执行操作所需的任何方法，这一概念称为“封装”：

```javascript
functionMyFunction( myArgument ){
    this.myValue = myArgument;
    this.doubleMyValue =()=> myArgument *2;
}
const myObject =newMyFunction(10);

myObject.myValue;
>10

myObject.doubleMyValue();
>20
```

[`this`](/web/javascript/functions/this) 是指函数的当前执行上下文，这意味着构造函数函数与任何其他函数遵循相同的 `this` 值规则。例如，某个用作构造函数的函数在独立调用时会对 `this` 的值使用[全局绑定](/web/javascript/functions/this#global-binding)：

```javascript
functionMyFunction(){
    console.log(this  );
}
const myObject =newMyFunction();
>MyFunction{}

MyFunction();// Global `this` binding outside of strict mode is `globalThis`
>Window{…}

(function(){
    "use strict";
    functionMyFunction(){
            console.log(this);
    }
    MyFunction();  // Global `this` binding inside of strict mode is `undefined`
}());
>undefined
```

按照 JavaScript 的内置工厂函数建立的命名模式，构造函数标识符的第一个字符通常采用大写形式。虽然您有时会看到这两个术语可以互换使用，但构造函数函数（用于在使用 `new` 关键字调用时对新构造的对象执行操作的函数）与“工厂函数”不同，“工厂函数”在正常调用时会明确 [`return`](/web/javascript/functions/return) 一个对象：

```javascript
function myFunction( myArgument =false){
  return{"myProperty": myArgument };
}
const myObject = myFunction(true);

myObject;
>Object{ myProperty:true}
```

虽然基本原则相同，但 ES6 中引入的功能更完善的 [Class](/web/javascript/classes) 语法更适合自定义构造函数函数的用例
