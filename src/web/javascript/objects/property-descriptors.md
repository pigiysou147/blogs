---
date: 2024-03-31
category: javascript
tag:
  - object
---

# 属性描述符

您与对象属性的大多数交互可能都是表面级交互，包括创建对象字面量以及使用键设置和访问属性值。不过，您可以在内部配置对象的任何属性，以便精细控制这些属性的访问、更改和定义方式。每个对象属性都有一组不可见的属性，其中包含与该属性关联的元数据，称为“属性描述符”。

任何属性都有两种类型的描述符：数据描述符和访问器描述符。数据描述符包括包含属性值的键值对（无论该值是可写、可配置还是可枚举）。访问器描述符包含在设置、更改或访问属性时执行的函数。

| 媒体资源           | 描述符类型 | 默认值： `Object.defineProperty()` | 说明                                                         |
| :----------------- | :--------- | :--------------------------------- | :----------------------------------------------------------- |
| `[[Value]]`        | 数据       | `undefined`                        | 包含属性的值。                                               |
| `[[Writable]]`     | 数据       | `false`                            | 确定您是否可以更改属性的值。                                 |
| `[[Get]]`          | 访问者     | `undefined`                        | 属性的 *getter* 函数，该函数在访问属性时执行。               |
| `[[Set]]`          | 访问者     | `undefined`                        | 属性的 *setter* 函数，该函数在设置或更改属性时执行。         |
| `[[Configurable]]` | 二者都有   | `false`                            | 如果此属性为 `false`，则无法删除属性，也无法更改其属性。如果此值为 `false` 且 `[[Writable]]` 为 `true`，则该属性的值仍可更改。 |
| `[[Enumerable]]`   | 二者都有   | `false`                            | 如果此值为 `true`，您可以使用 `for...in` 循环或 `Object.keys()` 静态方法遍历属性。 |

其中每个属性均使用与 `[[Prototype]]` 相同的简写形式，以指明这些属性不能直接访问。请改为使用 `Object.defineProperty()` 静态方法定义或修改对象的属性。`Object.defineProperty()` 接受三个参数：要操作的对象、要创建或修改的属性键，以及包含与所创建或修改的属性相关联的描述符的对象。

默认情况下，使用 `Object.defineProperty()` 创建的属性不可写入、可枚举或配置。不过，作为对象字面量的一部分，或者使用点或括号表示法创建的任何属性都是可写入、可枚举和配置的。

```javascript
const myObj ={};

Object.defineProperty(myObj,'myProperty',{
  value:true,
  writable:false
});

myObj.myProperty;
>true

myObj.myProperty =false;

myObj.myProperty;
>true
```

例如，当 `[[Writable]]` 具有 `false` 值时，尝试为关联属性设置新值时，会在严格模式之外静默失败，并在[严格模式](/blogs/web/javascript/appendix#strict-mode)下抛出错误：

```javascript
{
    const myObj ={};

    Object.defineProperty(myObj,'myProperty',{
    value:true,
    writable:false
    });

    myObj.myProperty =false;
    myObj.myProperty;
}
>true

(function(){
    "use strict";
    const myObj ={};

    Object.defineProperty(myObj,'myProperty',{
    value:true,
    writable:false
    });

    myObj.myProperty =false;
    myObj.myProperty;
}());\
>UncaughtTypeError:"myProperty"is read-only
```

有效使用描述符是一个相当高级的概念，但了解对象的内部结构对于理解以更常见方式处理对象所涉及的语法至关重要。例如，使用 `Object.create()` 静态方法时，这些概念会发挥作用，该方法可让您精确控制附加到新对象的任何原型。

`Object.create()` 使用现有对象作为其原型来创建新对象。这样，新对象就会像从 JavaScript 的内置 `Object` 原型继承属性一样，从其他用户定义的对象继承属性和方法。当您使用对象作为参数调用 `Object.create()` 时，它会创建一个空对象，并将传递的对象作为其原型。

```javascript
const myCustomPrototype ={
  'myInheritedProp':10
};

const newObject =Object.create( myCustomPrototype );

newObject;
>Object{  }
<prototype>:Object{ myInheritedProp:10}
  myInheritedProp:10
  <prototype>:Object{…}
```

`Object.create` 可以接受第二个参数，使用类似于 `Object.defineProperty()` 的语法为新创建的对象指定自己的属性，即一个对象将键映射到一组描述符属性：

```javascript
const myCustomPrototype ={
  'myInheritedProp':10
};

const myObj =Object.create( myCustomPrototype,{
        myProperty:{
            value:"The new property value.",
            writable:true,
            configurable:true
        }
  });

myObj;
>Object{…}
    myProperty:"The new property value."
    <prototype>:Object{ myInheritedProp:10}
```

在此示例中，新对象 (`myObj`) 使用对象字面量 (`myCustomPrototype`) 作为其原型，该字面量本身包含继承的 `Object.prototype`，从而生成一系列继承的原型，称为“原型链”。每个对象都有一个原型（无论是已分配还是继承），而其自身有已分配或继承的原型。此链以 `null` 原型结尾，而该原型没有自己的原型。

```javascript
const myPrototype ={
  'protoProp':10
};

const newObject =Object.setPrototypeOf({'objProp':true}, myPrototype );

newObject;
>Object{ objProp:true}
    objProp:true
    <prototype>:Object{ protoProp:10}
        protoProp:10
        <prototype>:Object{…}
```

值原型中包含的属性位于对象的“顶层”，而无需直接访问原型属性：

```javascript
const objectLiteral ={
    "value":true
};

objectLiteral;
>Object{ value:true}
    value:true
    <prototype>:Object{…}

objectLiteral.toString();
"[object Object]"
```

此模式适用于与对象关联的整个原型链：当尝试访问某个属性时，解释器会在原型链的每个“级别”上从上到下查找该属性，直到找到该属性或链结束：

```javascript
const myCustomPrototype ={
  'protoProp':"Prototype property value."
};

const myObj =Object.create( myCustomPrototype,{
    myProperty:{
        value:"Top-level property value.",
        writable:true,
        configurable:true
    }
});

myObj.protoProp;
>"Prototype property value."
```
