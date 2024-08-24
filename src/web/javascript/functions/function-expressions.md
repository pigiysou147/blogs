---
date: 2024-03-31
category: javascript
tag:
  - function
---
# 函数表达式

函数“表达式”是在预期使用表达式的位置创建的函数。您经常会遇到用作变量赋值的函数表达式。虽然函数声明始终需要名称，但您可以使用函数表达式创建匿名函数，方法是省略标识符，并在 `function` 关键字后面加上一对包含可选参数的圆括号：

```javascript
const myVariable =function(){};
```

然后，您可以使用变量的标识符调用这些函数表达式：

```javascript
const myVariable =function(){
    console.log("This is my function.");
};

myVariable();
>"This is my function."
```

您还可以使用函数表达式，通过类似于函数声明的语法来创建命名函数：

```javascript
const myVariable =function myFunction(){
    console.log("This is my function.");
};

myVariable();
>"This is my function."
```

不过，与函数声明不同，命名函数表达式只能在函数本身内通过函数名称访问：

```javascript
const myVariable =function myFunction(){
  console.log(`I'm a ${ typeof myFunction }.`);
};

typeof myFunction;
>"undefined"

typeof myVariable;
>"function"

myVariable();
>"I'm a function."
```

与函数表达式关联的名称主要用于调试。命名函数表达式也可以递归调用自身，不过在现代开发中，这并不是很常见的用例：

```javascript
const myVariable =function myFunction(){
    console.log("One second elapsed.");
    setTimeout( myFunction,1000);
};

setTimeout( myVariable,1000);
>"One second elapsed."
>"One second elapsed."
>"One second elapsed."
…
```

### 箭头函数表达式

ES6 中引入了箭头函数表达式（通常称为“箭头函数”，很少称为“lambda 函数”），旨在提供简洁的语法来创建具有一些独特行为的匿名函数表达式。

您可以在任何需要表达式的地方创建箭头函数，例如，作为变量的赋值。最常见的形式，箭头函数由一对包含零个或多个参数的匹配圆括号、一个箭头由单个等号和大于字符 (`=>`) 以及一对包含函数正文的匹配大括号组成：

```javascript
const myFunction =()=>{};
```

在特定条件下，您可以使语法更加紧凑。如果您只使用一个参数，则可以省去起始括号：

```javascript
const myFunction = myParameter =>{};
```

当您希望函数正文[返回单个表达式的值](/web/javascript/functions/return)时，既不需要将函数正文用大括号括起来，也不需要使用 [`return` 关键字](/web/javascript/functions/return)：

```javascript
const myFunction =()=>2+2

myFunction()
>4
```

箭头函数的独特之处在于，它们没有自己的 [`arguments`](/web/javascript/functions#function-calling) 或 [`this`](/web/javascript/functions/this) 值上下文。相反，它们会从箭头函数的[词法封闭环境](https://262.ecma-international.org/6.0/#sec-arrow-function-definitions-runtime-semantics-evaluation)（提供这些上下文的最近封闭函数）中继承这两个值。

```javascript
function myParentFunction(){
    this.myProperty =true;
    let myFunction =()=>{
            console.log(this);
    }
    myFunction();
};

let myInstance =new myParentFunction();
>Object{ myProperty:true}
```

### 调用箭头函数

箭头函数绑定参数的方式与[其他类型的函数](/web/javascript/functions#function-calling)不同。箭头函数正文中的 `arguments` 对象会从该箭头函数最近的[词法封闭环境](https://262.ecma-international.org/6.0/#sec-arrow-function-definitions-runtime-semantics-evaluation)继承其值：

```javascript
function myFunction(){
    let myArrowFunction =()=>{
            console.log( arguments[0]);
    }
    myArrowFunction(true);
};

myFunction(false);
>false
```

在此示例中，使用参数 `false` 调用的外部函数将调用带有参数 `true` 的内部箭头函数。由于箭头函数内的 `arguments` 对象会解析为外部函数中的绑定，因此内部函数会记录外部函数的 `false`。

如果没有要从父上下文继承的 `arguments` 对象，则未定义箭头函数的 `arguments` 对象，如果尝试访问该对象，将会导致错误：

```javascript
let myArrowFunction =()=>{
    console.log(arguments);
};
myArrowFunction(true);
>UncaughtReferenceError: arguments isnotdefined
```

### 立即调用的函数表达式 (IIFE)

立即调用的函数表达式 (IIFE)，有时也称为“自动执行匿名函数”，是一种在定义后立即调用的函数表达式。IIFE 使用通过将函数封装在[分组运算符](/web/javascript/introduction#expressions)中创建的函数表达式。然后，第二个匹配的圆括号会调用函数，要么紧跟在函数定义本身后面，要么紧跟在分组运算符后面。如果您使用的是标准函数，则两种方法之间没有实际区别：

```javascript
(function(){
    console.log("IIFE.")
    }
)();
>"IIFE."

(function(){
    console.log("IIFE.")
    }
());
>"IIFE."
```

第一个示例调用已分组的函数表达式。第二个示例在分组运算符内调用函数声明，然后最终结果将作为分组表达式求值。不管是哪种情况，结果都是一样的。

不过，如果您的 IIFE 是箭头函数，则有所不同。在这种情况下，用于调用函数的圆括号必须位于分组运算符之外，因为箭头函数本身不是表达式，而必须在预期表达式的上下文中创建。如果尝试从分组运算符的作用域内调用箭头函数，则意味着调用尚未在表达式的上下文中创建的箭头函数：

```javascript
(()=>{
    console.log("IIFE.");
}());
>UncaughtSyntaxError: missing )in parenthetical
```

由于分组运算符需要的是表达式，因此会定义分组运算符中的箭头函数，让分组运算符后面的圆括号调用分组的表达式：

```javascript
(()=>{
    console.log("IIFE.");
})();
>"IIFE."
```

旧版应用，经常使用 IIFE 来管理范围，特别是使用[函数范围的变量](/web/javascript/data-types/variable#function-scope)和[函数声明](/web/javascript/functions#declarations)来避免污染[全局范围](/web/javascript/data-types/variable#global-scope)。在 ES6 中引入[块作用域](/web/javascript/data-types/variable#block-scope)之前，通常的做法是将整个脚本封装在 IIFE 中，以防止全局作用域造成意外污染。
