---
date: 2024-03-31
category: javascript
tag:
  - variable
---
# 变量

变量是一种数据结构，用于为值指定代表性名称。它们可以包含任何类型的数据。

变量的名称称为“标识符”。有效的标识符必须遵循以下规则：

* 标识符可以包含 Unicode 字母、美元符号 ($)、下划线字符 (_)、数字 (0-9)，甚至一些 Unicode 字符。
* 标识符不能包含空格，因为解析器使用空格来分隔输入元素。例如，如果您尝试调用变量 `my Variable` 而不是 `myVariable`，解析器会看到两个标识符（`my` 和 `Variable`），并抛出语法错误（“意外令牌：标识符”）。
* 标识符必须以字母、下划线 (`_`) 或美元符号 (`$`) 开头，但不能以数字开头，以防止数字和标识符之间发生混淆：
  
  ```javascript
  let 1a=true;
  
  >UncaughtSyntaxError:Invalidor unexpected token
  ```
  
  如果 JavaScript 允许在标识符开头使用数字，则这样将只允许由数字组成的标识符，导致用作数字的数字与用作标识符的数字之间发生冲突：
  
  ```javascript
  let 10=20
  
  10+5
  >?
  ```
* 语法上已有意义的“[保留字词](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)”无法用作标识符。
* 标识符不得包含特殊字符 (`! . , / \ + - * =`)。

以下并不是关于创建标识符的严格规则，但它们是行业最佳实践，可让您更轻松地维护代码。如果您的特定项目有不同的标准，请遵循这些标准以确保一致性。

以 JavaScript 的内置方法和属性设置的示例为例，对于由多个单词组成的标识符， *驼峰式大小写* （亦称为“驼峰式大小写”）是一种非常常见的惯例。驼峰式大小写是指将除第一个单词之外的每个单词的第一个字母大写的做法，以便提高可读性（没有空格）。

```javascript
let camelCasedIdentifier =true;
```

某些项目会根据上下文和数据性质使用其他命名惯例。例如，[类](/web/javascript/classes)的第一个字母通常大写，因此多词类名称通常使用驼峰式大小写的变体，通常称为“大驼峰式大小写”或 [Pascal](https://en.wikipedia.org/wiki/Pascal_(programming_language)) 大小写。

```javascript
classMyClass{

}
```

标识符应简明扼要地描述其包含的数据的性质（例如，`currentMonthDays` 比 `theNumberOfDaysInTheCurrentMonth` 更合适），并且一目了然（`originalValue` 优于 `val`）。本模块中使用的 `myVariable` 标识符适用于独立示例，但在生产代码中非常有用，因为它们没有提供关于其包含哪些数据的信息。

标识符不应过于具体地说明其包含的数据，因为其值可能会根据脚本对数据执行操作的方式或未来维护人员所做的决定而发生变化。例如，在项目中最初指定标识符 `miles` 的变量可能需要更改为以公里为单位的值，这需要维护人员更改对该变量的任何引用，以免将来出现混淆。为防止出现这种情况，请改用 `distance` 作为标识符。

JavaScript 不会为以下划线字符 (`_`) 开头的标识符提供任何特殊权限或含义，但它们通常用于表示变量、方法或属性是“私有的”，这意味着变量、方法或属性只能用于包含该变量的对象的上下文，而不应在该上下文之外被访问或修改。这是从其他编程语言继承而来的惯例，并且早于添加 JavaScript [私有属性](/web/javascript/classes/class-fields#private)的时间。

## 变量声明

您可以通过多种方式让 JavaScript 识别标识符，此过程称为“声明”变量。变量使用 `let`、`const` 或 `var` 关键字声明。

```javascript
let myVariable;
```

使用 `let` 或 `var` 声明可以随时更改的变量。这些关键字会告知 JavaScript 解释器，一串字符是可能包含值的标识符。

使用现代代码库时，请使用 `let` 而非 `var`。`var` 仍可在新型浏览器中正常运行，但它有一些不直观的行为是在最早的 JavaScript 版本中定义的，并且以后便无法更改以保持向后兼容性。ES6 中添加了 `let`，以解决 `var` 设计的一些问题。

通过为声明的值赋值，对声明的变量进行初始化。使用单个等号 (`=`) 为变量赋值或重新赋值。您可以在声明它的语句中执行此操作：

```javascript
let myVariable =5;

myVariable + myVariable
>10
```

您也可以使用 `let`（或 `var`）声明变量，而无需立即初始化。如果指定，变量的初始值为 `undefined`，直到代码为其赋值。

```javascript
let myVariable;

myVariable;
>undefined

myVariable =5;

myVariable + myVariable
>10
```

具有 `undefined` 值的变量与尚未声明标识符的未定义变量不同。引用尚未声明的变量会导致错误。

```javascript
myVariable
>UncaughtReferenceError: myVariable isnotdefined

let myVariable;

myVariable
>undefined
```

标识符与值的关联通常称为“绑定”。位于 `let`、`var` 或 `const` 关键字后面的语法称为“绑定列表”，它允许声明多个以英文逗号分隔的变量（以预期的分号结尾）。这使得以下代码段在功能上完全相同：

```javascript
let firstVariable,
     secondVariable,
     thirdVariable;
```

```javascript
let firstVariable;
let secondVariable;
let thirdVariable;
```

为变量重新赋值时并不会用到 `let`（或 `var`），因为 JavaScript 已经知道变量的存在：

```javascript
let myVariable =true;

myVariable
>true

myVariable =false;

myVariable
>false
```

您可以根据变量的现有值为其重新分配新值：

```javascript
let myVariable =10;

myVariable
>10

myVariable = myVariable * myVariable;

myVariable
>100
```

如果您尝试在生产环境中使用 `let` 重新声明变量，则会收到语法错误：

```javascript
let myVariable =true;
let myVariable =false;
>UncaughtSyntaxError: redeclaration of let myVariable
```

浏览器的[开发者工具](https://developer.chrome.com/blog/new-in-devtools-80/#redeclarations)对 `let`（和 `class`）重复声明更为宽松，因此您可能无法在开发者控制台中看到同样的错误。

为了保持旧版浏览器的兼容性，`var` 允许进行不必要的重新声明，而且在任何情况下都不会出现错误：

```javascript
var myVariable =true;
var myVariable =false;

myVariable\
>false
```

## `const`

使用 `const` 关键字声明常量，这是一种必须立即初始化且无法更改的变量。常量标识符遵循与使用 `let`（和 `var`）声明的变量相同的规则：

```javascript
const myConstant =true;

myConstant
>true
```

您无法在不立即为常量赋值的情况下声明常量，因为在创建常量后无法为其重新赋值，因此任何未初始化的常量都将永久保持 `undefined`。如果您尝试在不初始化的情况下声明常量，则会收到语法错误：

```javascript
const myConstant;
UncaughtSyntaxError: missing =inconst declaration
```

如果您尝试按照更改使用 `let`（或 `var`）声明 wit 的变量值的方式更改使用 `const` 声明的变量的值，则会导致类型错误：

```javascript
const myConstant =true;

myConstant =false;
>UncaughtTypeError: invalid assignment to const'myConstant'
```

不过，当常量与对象关联时，可以更改该对象的属性。

```javascript
const constantObject ={"firstvalue":true};

constantObject
>Object{ firstvalue:true}

constantObject.secondvalue =false;

constantObject
>Object{ firstvalue:true, secondvalue:false}
```

包含对象的常量是[对可变数据值的不可变引用](/web/javascript/appendix#by-reference-by-value)。虽然常量本身无法更改，但引用对象的属性可以更改、添加或移除：

```javascript
const constantObject ={"firstvalue":true};

constantObject =false
>UncaughtTypeError: invalid assignment to const'constantObject'
```

如果不需要为变量重新赋值，最佳做法是将其设为常量。使用 `const` 会告诉您的开发团队或项目的未来维护人员不要更改该值，以避免破坏代码使用方式的假设，例如，变量最终将根据预期的数据类型进行评估。

## 变量范围

变量的作用域是使用该变量的脚本部分。在变量的作用域之外，系统不会将其定义为包含 `undefined` 值的标识符，而是按照尚未声明的方式进行定义。

根据用于声明变量的关键字以及定义变量的上下文，您可以将变量限定为块语句（ *块范围* ）、单个函数（ *函数范围* ）或整个 JavaScript 应用（ *全局范围* ）。

### 屏蔽范围

您使用 `let` 或 `const` 声明的任何变量的作用域都限定为与其最接近的包含[块语句](/web/javascript/introduction#block-statements)，这意味着变量只能在该块中访问。如果尝试访问其所在块之外访问块级范围的变量，会导致与尝试访问不存在的变量相同的错误：

```javascript
{
    let scopedVariable =true;
    console.log( scopedVariable );
}
>true

scopedVariable
>ReferenceError: scopedVariable isnotdefined
```

就 JavaScript 而言，块级范围的变量并不在包含该变量的块之外存在。例如，您可以在某个块内声明一个常量，然后在该块之外声明另一个使用同一标识符的常量：

```javascript
{
  const myConstant =false;
}
const myConstant =true;

scopedConstant;
>true
```

虽然声明的变量无法扩展到其父块，但它适用于所有后代块：

```javascript
{
    let scopedVariable =true;
    {
    console.log( scopedVariable );
    }
}
>true
```

可以在后代块内更改已声明的变量的值：

```javascript
{
    let scopedVariable =false;
    {
    scopedVariable =true;
    }
    console.log( scopedVariable );
}
>true
```

可以使用后代块内的 `let` 或 `const` 初始化新变量而不出现错误，即使它使用的标识符与父块中的变量相同也是如此：

```javascript
{
    let scopedVariable =false;
    {
    let scopedVariable =true;
    }
    console.log( scopedVariable );
}
>false
```

### 函数范围

使用 `var` 声明的变量的作用域限定为其最接近的包含函数（或[类](/web/javascript/classes)内的[静态初始化块](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)）。

```javascript
function myFunction(){
    var scopedVariable =true;

    return scopedVariable;
}

scopedVariable;
>ReferenceError: scopedVariable isnotdefined
```

调用函数后仍然是如此。即使该变量在函数执行时进行了初始化，该变量在函数作用域之外仍不可用：

```javascript
function myFunction(){
    var scopedVariable =true;

    return scopedVariable;
}

scopedVariable;
>ReferenceError: scopedVariable isnotdefined

myFunction();
>true

scopedVariable;
>ReferenceError: scopedVariable isnotdefined
```

### 全局范围

全局变量在整个 JavaScript 应用中可用，无论是任何块和函数内部，还是针对网页上的任何脚本。

虽然这似乎是理想的默认设置，但应用任何部分可以访问和修改的变量可能会增加不必要的开销，甚至导致与具有相同标识符的应用中其他位置的变量发生冲突。这适用于呈现网页时涉及的所有 JavaScript，包括第三方库和用户分析工具等。因此，最好是尽可能避免 *污染全局范围* 。

在父函数之外使用 `var` 或在父块之外使用 `let` 或 `const` 声明的任何变量都是全局变量：

```javascript
var functionGlobal =true;// Global
let blockGlobal =true;// Global

{
    console.log( blockGlobal );
    console.log( functionGlobal );
}
>true
>true

(function(){
    console.log( blockGlobal );
    console.log( functionGlobal );
}());
>true
>true
```

如果在没有明确声明的情况下为变量赋值（即切勿使用 `var`、`let` 或 `const` 来创建），会将变量提升到全局作用域，即使在函数或块内部进行初始化时也是如此。使用此模式创建的变量有时称为“隐式全局变量”。

```javascript
function myFunction(){
    globalVariable ="global";

    return globalVariable
}

myFunction()\
>"global"

globalVariable\
>"global"
```

### 变量提升

变量和函数声明会提升到其作用域的顶部，这意味着 JavaScript 解释器会处理在脚本中任何时间点声明的任何变量，并在执行脚本之前有效地将其移动到其封闭范围的第一行。也就是说，可以在使用 `var` 声明的变量之前引用该变量，而不会遇到错误：

```javascript
hoistedVariable
>undefined

var hoistedVariable;
```

由于只托管变量声明，而不托管初始化，因此未使用 `var`、`let` 或 `const` 明确声明的变量不会提升：

```javascript
unhoistedVariable;
>UncaughtReferenceError: unhoistedVariable isnotdefined

unhoistedVariable =true;
```

[如前所述](/web/javascript/data-types/variable#declaration)，为已声明但未初始化的变量赋值 `undefined`。该行为也适用于提升的变量声明，但仅适用于使用 `var` 声明的声明。

```javascript
hoistedVariable
>undefined

var hoistedVariable =2+2;

hoistedVariable\
>4
```

这种不直观的行为在很大程度上源于早期 JavaScript 版本中所做的设计决策，并且无法更改，并且没有破坏现有网站的风险。

在创建变量之前访问变量时，`let` 和 `const` 改为抛出错误，从而解决了此行为：

```javascript
{
    hoistedVariable;

    let hoistedVariable;
}
>UncaughtReferenceError: can't access lexical declaration 'hoistedVariable' before initialization
```

此错误不同于在尝试访问未声明的变量时可能会遇到的“hoistedVariable is not supported”错误。由于 JavaScript 已经提升变量，因此它知晓该变量将在给定范围内创建。但是，解释器会抛出错误，而不是在声明前使该变量具有 `undefined` 值。使用 `let` 或 `const`（或 `class`）声明的变量从其封闭块的开头开始，一直到在代码中声明变量的点为止，视为“暂时死区”(TDZ)。

对于作者来说，时间死区使 `let` 的行为比 `var` 更直观。这对于 `const` 的设计也至关重要。由于常量无法更改，因此对于提升到其作用域顶部且给定隐式值 `undefined` 的常量，便无法再使用有意义的值进行初始化。
