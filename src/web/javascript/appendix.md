---
date: 2024-03-31
category: javascript
tag:
  - object
  - prototype
---
# 附录

## 原型继承

除了 `null` 和 `undefined` 之外，每种原始数据类型都有一个 *原型* ，这是相应的对象封装容器，可提供处理值的方法。对基元调用方法或属性查询时，JavaScript 会在后台封装基元，并调用该方法或改为在封装容器对象上执行属性查找。

例如，字符串字面量没有自己的方法，但借助相应的 `String` 对象封装容器，您可以对其调用 `.toUpperCase()` 方法：

```javascript
"this is a string literal".toUpperCase();
> THIS IS A STRING LITERAL
```

这称为“原型继承”，即从值的相应构造函数继承属性和方法。

```javascript
Number.prototype
>Number{0}
>  constructor:functionNumber()
>  toExponential:function toExponential()
>  toFixed:function toFixed()
>  toLocaleString:function toLocaleString()
>  toPrecision:function toPrecision()
>  toString:function toString()
>  valueOf:function valueOf()
>  <prototype>:Object{…}
```

您可以使用这些构造函数创建基元，而不仅仅是按其值定义基元。例如，使用 `String` 构造函数会创建一个字符串对象，而不是字符串字面量：一个对象不仅包含我们的字符串值，还包含该构造函数的所有继承属性和方法。

```javascript
const myString =newString("I'm a string.");

myString;
>String{"I'm a string."}

typeof myString;
>"object"

myString.valueOf();
>"I'm a string."
```

在大多数情况下，生成的对象的行为与我们用于定义它们的值相同。例如，即使使用 `new Number` 构造函数定义数字值会导致生成包含 `Number` 原型的所有方法和属性的对象，您也可以对这些对象使用数学运算符，就像在数字字面量上一样：

```javascript
const numberOne =newNumber(1);
const numberTwo =newNumber(2);

numberOne;
>Number{1}

typeof numberOne;
>"object"

numberTwo;
>Number{2}

typeof numberTwo;
>"object"

numberOne + numberTwo;
>3
```

您很少需要使用这些构造函数，因为 JavaScript 的内置原型继承意味着它们没有实际的好处。使用构造函数创建基元也可能会导致意外的结果，因为结果是一个对象，而不是简单的字面量：

```javascript
let stringLiteral ="String literal."

typeof stringLiteral;
>"string"

let stringObject =newString("String object.");

stringObject
>"object"
```

这可能会使严格的比较运算符的使用变得很复杂：

```javascript
const myStringLiteral ="My string";
const myStringObject =newString("My string");

myStringLiteral ==="My string";
>true

myStringObject ==="My string";
>false
```

## 自动分号插入 (ASI)

解析脚本时，JavaScript 解释器可以使用一项称为自动分号插入 (ASI) 的功能来尝试更正出现省略的分号的情况。如果 JavaScript 解析器遇到不允许的令牌，它会尝试在该令牌前添加一个英文分号以修复潜在的语法错误，前提是满足以下一个或多个条件：

* 该标记与前一个标记之间以换行符分隔。
* 该令牌为 `}`。
* 上一个令牌是 `)`，插入的分号将是 `do`...`while` 语句的结束分号。

如需了解详情，请参阅 [ASI 规则](https://262.ecma-international.org/7.0/#sec-rules-of-automatic-semicolon-insertion)。

例如，在以下语句后省略分号不会导致由于 ASI 而出现语法错误：

```javascript
const myVariable =2
myVariable +3
>5
```

但是，ASI 无法说明同一行中有多个语句。如果在同一行中编写多个语句，请务必使用英文分号进行分隔：

```javascript
const myVariable =2 myVariable +3
>UncaughtSyntaxError: unexpected token: identifier

const myVariable =2; myVariable +3;
>5
```

ASI 是纠错的一种尝试，而不是一种内置于 JavaScript 中的语法灵活性。请务必在适当情况下使用英文分号，以免依赖其生成正确的代码。

## 严格模式

管理 JavaScript 编写方式的标准已经发展出了超出该语言早期设计期间所考虑的任何标准。每次对 JavaScript 的预期行为做出新更改时，都必须避免在旧版网站中导致错误。

ES5 通过引入“严格模式”来为整个脚本或单个函数选择启用一组限制性更强的语言规则，而不破坏现有实现，因而解决了一些长期存在的 JavaScript 语义问题。如需启用严格模式，请在脚本或函数的第一行中使用字符串字面量 `"use strict"`，后跟英文分号：

```javascript
"use strict";
```

```javascript
function myFunction(){
  "use strict";
}
```

严格模式会阻止某些“不安全”操作或已弃用的功能，抛出显式错误来代替常见的“静默”错误，并禁止使用可能与未来语言功能冲突的语法。例如，在围绕[变量范围](/blogs/web/javascript/data-types/variable#scope)的早期设计决策中，由于省略了 `var` 关键字，因此开发者在声明变量时更有可能错误地“污染”全局范围（无论其包含的上下文如何）：

```javascript
(function(){
  mySloppyGlobal =true;
}());

mySloppyGlobal;
>true
```

新式 JavaScript 运行时无法纠正这种行为，而且没有意外或故意破坏任何依赖这种行为的网站的风险。相反，新型 JavaScript 可以防止这种情况发生：让开发者针对新工作选择启用严格模式，并仅在新语言功能不会破坏旧版实现的情况下默认启用严格模式：

```javascript
(function(){
    "use strict";
    mySloppyGlobal =true;
}());
>UncaughtReferenceError: assignment to undeclared variable mySloppyGlobal
```

您必须将 `"use strict"` 编写为[字符串字面量](https://262.ecma-international.org/6.0/#sec-directive-prologues-and-the-use-strict-directive)。[模板字面量](/blogs/web/javascript/data-types/string#template-literals) (`use strict`) 不起作用。您还必须在预期上下文中的任何可执行代码之前添加 `"use strict"`。否则，解释器会忽略它。

```javascript
(function(){
    "use strict";
    let myVariable ="String.";
    console.log( myVariable );
    sloppyGlobal =true;
}());
>"String."
>UncaughtReferenceError: assignment to undeclared variable sloppyGlobal

(function(){
    let myVariable ="String.";
    "use strict";
    console.log( myVariable );
    sloppyGlobal =true;
}());
>"String."// Because there was code prior to "use strict", this variable still pollutes the global scope
```

## 按引用、按值

任何变量（包括对象的属性、[函数参数](/blogs/web/javascript/functions)以及[数组](/blogs/web/javascript/collections/indexed#array)、[集](/blogs/web/javascript/collections/keyed#set)或[映射](/blogs/web/javascript/collections/keyed#map)中的元素）都可以包含基元值或 *引用值* 。

将原始值从一个变量分配给另一个变量时，JavaScript 引擎会创建该值的副本，并将其分配给变量。

在将对象（类实例、数组和函数）分配给变量时，该变量包含对对象在内存中存储的位置的引用，而不是创建该对象的新副本。因此，更改变量引用的对象会更改正在引用的对象，而不仅仅是该变量包含的值。例如，如果您使用包含对象引用的变量初始化新变量，然后使用新变量向该对象添加属性，则该属性及其值会添加到原始对象中：

```javascript
const myObject ={};
const myObjectReference = myObject;

myObjectReference.myProperty =true;

myObject;
>Object{ myProperty:true}
```

这不仅对更改对象很重要，对执行严格比较也很重要，因为对象之间的严格相等要求两个变量都引用*同一对象*才能求值为 `true`。它们不能引用不同的对象，即使这些对象在结构上完全相同：

```javascript
const myObject ={};
const myReferencedObject = myObject;
const myNewObject ={};

myObject === myNewObject;
>false

myObject === myReferencedObject;
>true
```

## 内存分配

JavaScript 使用自动内存管理，这意味着在开发过程中不需要显式分配或取消分配内存。虽然有关 JavaScript 引擎的内存管理方法的详细信息不在本单元的讨论范围内，但了解内存分配方式可以为使用引用值提供有用的背景信息。

内存中有两个“区域”：“堆栈”和“堆”。堆栈会存储静态数据（原始值和对对象的引用），因为存储此数据所需的固定空间可以在脚本执行之前分配。堆会存储对象，这些对象需要动态分配的空间，因为其大小在执行过程中可能会发生变化。一个名为“垃圾回收”的进程释放了内存，该进程会从内存中移除未引用的对象。

### 主线程

JavaScript 从根本上来讲是一种单线程语言，采用“同步”执行模型，这意味着它一次只能执行一个任务。这种依序执行上下文称为主线程。

主线程由其他浏览器任务共享，例如解析 HTML、渲染和重新渲染网页的某些部分、运行 CSS 动画，以及处理从简单（如突出显示文本）到复杂的用户互动（如与表单元素互动）。浏览器供应商已经找到了优化主线程执行的任务的方法，但更复杂的脚本仍然可能会使用主线程的过多资源，进而影响整体页面性能。

有些任务可以在称为 Web Worker 的后台线程中执行，但存在一些限制：

* 工作器线程只能对独立的 JavaScript 文件执行操作。
* 他们对浏览器窗口和界面的访问权限严重减少或无法访问。
* 它们与主线程进行通信的方式会受到限制。

这些限制使其非常适合执行需要重点处理的资源密集型任务，否则它们可能会占用主线程。

### 调用堆栈

用于管理“执行上下文”（即主动执行的代码）的数据结构是一个称为调用堆栈（通常仅简称为“堆栈”）的列表。首次执行脚本时，JavaScript 解释器会创建一个“全局执行上下文”并将其推送到调用堆栈，该全局上下文中的语句从上到下一次执行一个。当解释器在执行全局上下文时遇到函数调用时，它会将该调用的“函数执行上下文”推送到堆栈顶部，暂停全局执行上下文，并执行函数执行上下文。

每次调用函数时，系统都会将该调用的函数执行上下文推送到堆栈顶部，就在当前的执行上下文上方。调用堆栈按照“先进先出”的原则运行，这意味着系统会执行最近的函数调用（堆栈中最高的函数调用）并一直执行到解析为止。当该函数执行完毕后，解释器会从调用堆栈中移除该函数，包含该函数调用的执行上下文将再次成为堆栈中的最高项并继续执行。

这些执行上下文会捕获其执行所需的所有值。这些模板还会根据父级上下文来建立函数作用域内可用的变量和函数，并在函数的上下文中确定和设置 `this` 关键字的值。

### 事件循环和回调队列

这种依序执行意味着，包含回调函数的异步任务（例如从服务器提取数据、响应用户互动或等待使用 `setTimeout` 或 `setInterval` 设置的计时器）会阻塞主线程，直到该任务完成，或者在回调函数的执行上下文添加到堆栈时意外中断当前执行上下文。为了解决这个问题，JavaScript 使用由“事件循环”和“回调队列”（有时称为“消息队列”）组成的事件驱动型“并发模型”来管理异步任务。

在主线程上执行异步任务时，回调函数的执行上下文会放在回调队列中，而不是调用堆栈的顶部。事件循环是一种有时称为“反应器”的模式，它会持续轮询调用堆栈和回调队列的状态。如果回调队列中有任务，并且事件循环确定调用堆栈为空，则系统会将回调队列中的任务逐个推送到堆栈中以供执行。
