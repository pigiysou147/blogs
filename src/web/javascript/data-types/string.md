---
date: 2024-03-31
category: javascript
tag:
  - string
---
# 字符串

英文双引号 (`"`)、单引号 (`'`) 或反引号 (`) 之间的任何字符集（字母、数字、符号等）都属于字符串基元。在本课程中，您已经看到了一些字符串示例：上一个模块中的 `console.log` 实例包含字符串基元。

```javascript
console.log("Hello, World.");
>Hello,World.
```

`"Hello, World."` 是一个字符串基元。用单引号或反引号获得相同的结果：

```javascript
console.log('Hello, World.');
>Hello,World.

console.log(`Hello, World.`);
>Hello,World.
```

用引号括起来的一系列字符称为“字符串字面量”。双引号和单引号的行为方式相同，一个引号可以用另一个引号作为字符串本身中的字符：

```javascript
console.log("I'm a string.");
> I'm a string.

console.log( '"A string," I said.' );
> "A string," I said.
```

字符串中的同一封闭字符实例会“结束”字符串，这可能会导致错误：

```javascript
console.log('"I'm a string," I said.' );
> Uncaught SyntaxError: missing ) after argument list
```

为避免这种情况，请使用反斜杠 (``) 转义字符：

```javascript
console.log('"I\'m a string," I said.');
>"I'm a string," I said.
```

## 字符串对象

作为函数调用时，`String` 对象会将指定的值强制转换为字符串字面量。

```javascript
let myString =String(10);

myString
>"10"

typeof myString
>string
```

如[原型继承](/blogs/web/javascript/appendix#prototyal-inheritance)中所述，您几乎不需要将 `String` 对象用作构造函数。它会创建一个字符串对象，其中包含指定值以及 `String` 对象已提供的方法和属性，而不是字符串字面量。

```javascript
let stringObj =newString("My new string.");

typeof stringObj
>object

stringObj
>String{"My new string."}
```

## 串联

在字符串（而不是数字）上下文中使用时，单个加号 (`+`) 可充当串联运算符，将多个字符串值合并为一个字符串：

```javascript
console.log("My"+" string.");
>Mystring.
```

## 字符串字面量和模板字面量

在创建字符串基元时，单引号、双引号和反引号可以互换使用。但是，您也可以使用反引号指定 *模板字面量* （有时称为“模板字符串”）。与由单引号或双引号创建的*字符串字面量*不同，模板字面量支持多行字符串和字符串插值。

```javascript
const myString ="This
is a string.";
>UncaughtSyntaxError:""string literal contains an unescaped line break

const myString =`This
is a string.`;

console.log( myString );

>This
is a string.
```

模板字面量可以包含用美元符号和大括号 (`${}`) 标记的占位符表达式。默认情况下，这些占位符是“插值”的，这意味着表达式的结果会替换最终字符串中的占位符。

```javascript
console.log("The result is "+(2+4)+".");
>The result is6.
```

```
console.log(`The result is ${ 2 + 4 }.`);
>The result is6.
```

您可将模板字面量传递给[自定义函数](/blogs/web/javascript/functions)以创建 *带标记模板* ，这是一个函数调用，它使用单个模板字面量作为一组参数，并允许其占位符根据作者定义的逻辑进行填充。

标记函数的第一个参数包含一个字符串值数组，其余参数定义占位符。通过在模板字面量包含的每个占位符处“拆分”模板字面量，即可创建此字符串值数组。数组中的第一个元素包含第一个占位符之前的所有字符，第二个元素包含第一个和第二个占位符之间的所有字符，依此类推。每个占位符都会作为包含相关占位符的独立值传递给代码函数。

```javascript
const myNoun ="template literal";

function myTagFunction( myStrings, myPlaceholder ){
    const myInitialString = myStrings[0];
    console.log(`${ myInitialString }modified ${ myPlaceholder }.`);
}

myTagFunction`I'm a ${ myNoun }.`;
>"I'm a modified template literal."
```


