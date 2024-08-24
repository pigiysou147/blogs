---
date: 2024-03-31
category: javascript
tag:
  - symbol
---
# 符号

符号是 ES6 中引入的[较新](https://caniuse.com/mdn-javascript_builtins_symbol)的基元。符号基元表示绝不会与任何其他值（包括其他符号基元的值）冲突的唯一值。由相同字符组成的两个字符串基元在评估时为严格相等：

```javascript
String()===String()
>true

String("My string.")===String("My string.");
>true
```

不过，使用 `Symbol()` 函数创建的两个符号都不能严格相等：

```javascript
Symbol()===Symbol()
>false
```

通过该特征，您可以将符号用作对象中的唯一属性键，从而防止与任何其他代码可能添加到该对象中的键发生冲突。

```javascript
const mySymbol =Symbol("Desc");

const myObject ={

}

myObject
>Object{Symbol("Desc"):"propSymbol"}
```

符号有三种：

* 使用 `Symbol()` 创建的符号
* 使用 `Symbol.for()` 从全局符号注册表设置和检索的共享符号
* “众所周知的符号”定义为 Symbol 对象的静态属性。 这些符号包含不会被意外覆盖的内部方法。

`Symbol()` 接受将说明（或“符号名称”）作为可选参数。这些说明是用于调试的人类可读标签，不会影响结果的唯一性。对 `Symbol` 的任何调用都会返回完全唯一的符号基元，即使多个调用具有相同的说明也是如此：

```javascript
Symbol("My symbol.")===Symbol("My symbol.");
>false
```

与其他原始数据类型一样，符号会继承其 [prototype](/web/javascript/appendix#prototypal-inheritance) 的方法和属性。例如，您可以将说明作为已创建符号的继承属性进行访问：

```javascript
let mySymbol =Symbol("My symbol.");

mySymbol.description
>"My symbol."
```

但不能使用 `new` 关键字创建符号：

```javascript
let mySymbol =newSymbol();

>UncaughtTypeError:Symbolisnot a constructor
```

符号不可枚举，这意味着在使用标准方法对其进行迭代时，符号属性不可用。`getOwnPropertySymbols()` 方法可用于访问对象的符号属性。

## 共享符号

`Symbol.for()` 方法尝试在运行时全局符号注册表中以给定字符串作为键的所有现有符号，如果找到匹配符号，则返回匹配的符号。如果没有找到，它会创建一个包含指定键的符号并将其添加到全局注册表：

```javascript
let sharedSymbol =Symbol.for("My key.");

sharedSymbol ===Symbol.for("My key.")
>true
```

这些键与分配给作者创建的 `Symbol` 基元的说明没有任何功能重叠。如需访问符号注册表中的符号，必须先使用 `for()` 创建该符号：

```javascript
Symbol("String")===Symbol("String");
>false

Symbol("String")===Symbol().for("String");
>false

Symbol().for("String")===Symbol().for("String");
>true
```

如需从符号注册表中检索任何符号的键，请使用 `Symbol.keyFor()`：

```javascript
let mySymbol =Symbol.for("Key.");

Symbol.keyFor( mySymbol );
>"Key."
```

## “众所周知”符号

*众所周知的符号*是 `Symbol` 对象的静态属性，每个属性都是一个符号。知名符号提供了唯一的属性键，用于访问和修改 JavaScript 的内置方法，同时防止核心行为被意外覆盖。

```javascript
Symbol;
>functionSymbol()
    asyncIterator:Symbol(Symbol.asyncIterator)
    for:functionfor()
    hasInstance:Symbol("Symbol.hasInstance")
    isConcatSpreadable:Symbol("Symbol.isConcatSpreadable")
    iterator:Symbol(Symbol.iterator)
    keyFor:function keyFor()
    length:0
    match:Symbol("Symbol.match")
    matchAll:Symbol("Symbol.matchAll")
    name:"Symbol"
    prototype:Object{…}
    replace:Symbol("Symbol.replace")
    search:Symbol("Symbol.search")
    species:Symbol("Symbol.species")
    split:Symbol("Symbol.split")
    toPrimitive:Symbol("Symbol.toPrimitive")
    toStringTag:Symbol("Symbol.toStringTag")
    unscopables:Symbol("Symbol.unscopables")
    <prototype>:function()
```

由于符号是 ES6 特有的功能，因此这些符号值旨在用作“扩展点”，供开发者修改 JavaScript 行为而不会导致向后兼容性问题。

知名符号值通常使用 [`@@` 前缀进行样式化或封装在 `%`](https://github.com/tc39/ecma262/pull/1314) 中，以区分其键与可变原型。例如，`@@match`（或 `%match%`）是对不可变 `Symbol.match` 的引用，而不是对 `String.prototype.match` 的引用。
