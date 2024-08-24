---
date: 2024-03-31
category: javascript
tag:
  - object
  - prototype
---

# 原型继承

与[其他数据类型](/blogs/web/javascript/appendix#prototyal-inheritance)一样，对象会继承内置 `Object` 原型的属性和方法，这意味着生成的对象既包含您已定义的属性，也包含 prototype 属性（包含从原型继承的方法）：

```javascript
let myObject ={
    'booleanValue':true
};

myObject;
>Object{ booleanValue:true}
    booleanValue:true
    [[prototype]]:Object{…}
            __defineGetter__:function __defineGetter__()
            __defineSetter__:function __defineSetter__()
            __lookupGetter__:function __lookupGetter__()
            __lookupSetter__:function __lookupSetter__()
            __proto__:…
                constructor:functionObject()
                hasOwnProperty:function hasOwnProperty()
                isPrototypeOf:function isPrototypeOf()
                propertyIsEnumerable:function propertyIsEnumerable()
                toLocaleString:function toLocaleString()
                toString:function toString()
                valueOf:function valueOf()
                <get __proto__()>:function __proto__()
                <set __proto__()>:function __proto__()
```

原型属性不适合直接通过属性键访问。您可能已经注意到，在上一个示例中，浏览器的开发者控制台中使用的 `[[prototype]]` 或 `<prototype>` 表示法以及原型的属性键的文档来源表明了这一点：

```javascript
// Chrome:
let emptyObject ={};

emptyObject;
>{}
  [[prototype]]:Object
```

```javascript
// Firefox:
let emptyObject ={};

emptyObject;
>Object{  }
  <prototype>:Object{…}
```

虽然所有常见浏览器实际上都使用 `__proto__` 作为标准，但这并未正式标准化，在生产代码中应避免这样做。

```javascript
let emptyObject ={};

emptyObject.__proto__;
>Object{…}
    __defineGetter__:function __defineGetter__()
    __defineSetter__:function __defineSetter__()
    __lookupGetter__:function __lookupGetter__()
    __lookupSetter__:function __lookupSetter__()
    __proto__:
        constructor:functionObject()
        hasOwnProperty:function hasOwnProperty()
        isPrototypeOf:function isPrototypeOf()
        propertyIsEnumerable:function propertyIsEnumerable()
        toLocaleString:function toLocaleString()
        toString:function toString()
        valueOf:function valueOf()
        <get __proto__()>:function __proto__()
        <set __proto__()>:function __proto__()
```

您可以使用内置的 `Object.getPrototypeOf()` 和 `Object.setPrototypeOf()` 方法直接访问和修改对象的 `[[Prototype]]`：

```javascript
let myObj ={"value":5};
let protoParent ={"protoValue":true};

myObj;
Object{ value:5}
    value:5
    <prototype>:Object{…}

Object.getPrototypeOf( myObj );
>Object{…}
    __defineGetter__:function __defineGetter__()
    __defineSetter__:function __defineSetter__()
    __lookupGetter__:function __lookupGetter__()
    __lookupSetter__:function __lookupSetter__()
    __proto__:
    constructor:functionObject()
    hasOwnProperty:function hasOwnProperty()
    isPrototypeOf:function isPrototypeOf()
    propertyIsEnumerable:function propertyIsEnumerable()
    toLocaleString:function toLocaleString()
    toString:function toString()
    valueOf:function valueOf()
    <get __proto__()>:function __proto__()
    <set __proto__()>:function __proto__()

Object.setPrototypeOf( myObj, protoParent );
>Object{ value:5}
    value:5
    <prototype>:Object{ protoValue:true}
```

为了区分继承的属性和作者定义的属性，后者通常称为对象的“自己的属性”。

如果指定属性是对象的直接属性，内置 `Object.hasOwn()` 方法会返回 `true`；如果该属性是继承的或不存在，则内置方法返回 `false`。请尽可能使用 [`Object.hasOwn()`](https://caniuse.com/mdn-javascript_builtins_object_hasown)，而不要使用继承的 `hasOwnProperty()` 方法，因为该方法不支持 [`Object.create()`](/blogs/web/javascript/objects/property-descriptors)。

```javascript
let myObject ={
    'myValue':100
};

Object.hasOwn( myObject,'myValue');
>true

myObject.__proto__;// The Object prototype inherited by `myObject` is present:
>Object{…}

Object.hasOwn( myObject,'__proto__');// The Object prototype inherited by `myObject` is not an "own property:"
>false
```
