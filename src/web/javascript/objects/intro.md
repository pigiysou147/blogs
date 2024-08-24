---
date: 2024-03-31
category: javascript
title: 介绍对象
tag:
  - object
---
# 对象

与每个[基元](/web/javascript/data-types)都是数据类型一样，对象也是一种离散数据类型，但有一个关键区别：与基元不同，对象是*可变*的。对象可以包含与标识符关联的数据（例如变量），但无论它包含什么数据，它都会保留其 `object` 数据类型。

除了基元之外，所有 JavaScript 值都是对象，但由于[原型继承](/web/javascript/objects/prototypal-inheritance)，即使是基元字面量也会表现出类似于对象的行为，因此通常有人说 JavaScript 实际上是由对象组成的。

对象字面量是一对大括号，括住零个或多个称为“属性”的键值对，可包含任何 JavaScript 值。

```javascript
{
    "myProperty":true
}
```

属性键可以是任何[符号](/web/javascript/data-types/symbol)或[字符串](/web/javascript/data-types/string)。为变量分配标识符时，用作属性键的字符串应可预测且具有描述性：

```javascript
let carAttributes ={
    "color":"red"
};

carAttributes
>Object{ color:"red"}
```

属性键需要单个 (`'`) 或双引号 (`"`) 字符串字面量，而不是[模板字面量](/web/javascript/data-types/string#template-literals)：

```javascript
let carAttributes ={
    `keyString`:false
};
>UncaughtSyntaxError: expected property name, got template literal
```

属性值可以是任何数据类型。对象的属性本身可以包含具有自己属性的对象：

```javascript
let myObject ={
    'key':{
        'subkey':true,
        'othersubkey':false
    }
};

myObject;
>Object{ key:Object{ subkey:true, othersubkey:false}}
```

当属性值是函数时，该属性称为“方法”。

```javascript
const myObject ={
    "myProperty":true,
    myMethod(){
        console.log("This is a method.");
    }
}

myObject.myProperty;
>true

myObject.myMethod();
>"This is a method."
```

您还可以使用 `new` 关键字创建对象：

```javascript
let myObject =newObject();
```

在前面的示例中，已将新创建的对象字面量分配给变量。这不是必需的，因为与任何其他数据类型一样，您可以在预期对象的任何位置使用没有标识符的对象。不过，由于两个共享大括号语法 (`{}`)，对象字面量在任何可能将其与块语句混淆的上下文中都需要使用圆括号。初始化变量永远不需要使用圆括号。

```javascript
{"value":2}
>UncaughtSyntaxError: unexpected token:':'

({"value":2})
>Object{ value:2}

let valObj ={"value":2};

valObj;
>Object{ value:2}
```

与基元不同，使用 `new Object()` 创建对象和创建对象字面量的结果没有意义，因为这两种情况的结果都是一个具有继承自 `Object` 原型的属性的对象。不过，这两种语法之间有一个实际的区别。

`new` 关键字必须定义一个稍后将填充数据的空对象：

```javascript
let myObject =newObject();

myObject.booleanValue =true;
myObject.stringValue ="My string.";
```

创建对象字面量时，您可以使用数据进行填充：

```javascript
let myObject ={
    'booleanValue':true,
    'stringValue':"My string."
};
```

虽然 `new Object()` 没有什么实际用途，但可用于将原始数据值转换为相应类型的对象，例如使用 `new` 关键字及其[构造函数](/web/javascript/functions/new)函数返回的对象。例如，以下代码在功能上等效于 `new Number( 10 )`：

```javascript
let myObject =newObject(10);

myObject;
>Number{10}
```

`null` 和 `undefined` 值会导致空对象，该对象在功能上与在不提供参数的情况下调用 `new Object()` 相同。

将对象字面量作为参数传递给 `new Object()` 时，无需更改对象字面量即可传递对象字面量：

```javascript
let myObject =newObject({ myValue :10});

myObject;
>Object{ myValue:10}
```

与对基元值使用构造函数一样，与使用对象字面量表示法相比，对对象使用构造函数很少有任何优势。即使创建稍后要用值填充的空对象，开发者也倾向于使用对象字面量表示法，以简单起见。
