---
date: 2024-03-31
category: javascript
title: 介绍函数
tag:
  - function
---
# 函数

函数是一个可重复使用的模块化语句块，用于执行一组相关任务，例如根据提供给函数的实参计算和返回值。与[所有非原始值](/web/javascript/objects)一样，函数也是对象。它们是具有唯一性的对象，因为您可以调用它们来执行代码、以参数形式传递数据以及返回值。[return](/web/javascript/functions/return)

函数被视为“第一类”对象，这意味着尽管它们的行为独特，但其可在与任何其他 JavaScript 对象相同的上下文中使用。例如，可以将函数赋值给变量，作为参数传递给其他函数，并由其他函数返回。

```javascript
function myFunction(){
   console.log("This is my function.");
};
```

定义为[对象](/web/javascript/objects)属性的函数通常称为“方法”。与[使用 `var` 声明的变量](/web/javascript/data-types/variable)一样，在封闭函数之外进行的函数声明会作为方法添加到[全局对象](/web/javascript/data-types/variable#global-scope)中。

## 函数声明

函数声明（也称为“函数语句”或“函数定义”）会创建一个命名函数，该函数可在其包含作用域内的其他位置调用。函数声明包含后跟一个标识符的 `function` 关键字、括在圆括号中的一系列以英文逗号分隔的参数，以及一个名为“函数正文”的[块语句](/web/javascript/introduction#block-statements)。您经常会遇到不以分号结尾的函数声明；由于函数声明是一种语句，因此 [ASI](/web/javascript/appendix#ASI) 可以推断出结尾的分号。

```javascript
function myFunction(){
   console.log("This is my function.");
};

myFunction();
>"This is my function."
```

作为受 JavaScript 早期设计决策的延续，函数声明与使用 `var` 声明的变量具有相同的旧版“提升”行为，这意味着函数声明会提升到其作用域顶部，并且可在声明之前调用，因此无论该范围是否受[严格模式](/web/javascript/appendix#strict-mode)控制：

```javascript
"use strict";
{
    myFunction();
    function myFunction(){
        console.log("This is my function.");
    };
}
>"This is my function."
```

在[严格模式](/web/javascript/appendix#strict-mode)之外，函数声明会使用 JavaScript 的旧版[限定范围](/web/javascript/data-types/variable#scope)行为，这意味着函数声明的作用域限定为其最接近的封闭函数：

```javascript
function myFunction(){
    function myNestedFunction(){
        console.log("This is my nested function.");
    }
    myNestedFunction();
};

myFunction();
>"This is my nested function."

myNestedFunction();
>UncaughtReferenceError: myNestedFunction isnotdefined
```

在[严格模式](/web/javascript/appendix#strict-mode)下，函数声明的作用域限定为最接近的封闭块，就像使用 `let` 或 `const` 声明的变量一样：

```javascript
"use strict";
{
    function myFunction(){
        console.log("This is my function.");
    };
}

myFunction();
>UncaughtReferenceError: myFunction isnotdefined
```

## 函数调用

与变量一样，声明函数时使用的标识符充当值的符号名称。如果仅按标识符引用函数，则只会返回函数对象，而不会执行其中包含的函数：

```javascript
function myFunction(){
   console.log("This is my function.");
};

myFunction;
> myFunction(){
   console.log("This is my function.");
}
```

如需在函数正文内执行代码，可以在函数名称后面跟一对匹配的圆括号来调用（或调用）函数：

```javascript
function myFunction(){
    console.log("My function has been executed.");
}

myFunction();
>"My function has been executed."
```

函数定义中的参数充当可以在调用函数时传入函数正文的值的占位符变量。调用函数时，圆括号中的值为“实参”（但在某些文档中看到，“实参”可能会用于描述实参和形参）：

```javascript
function myFunction( myParameter ){
   console.log(`The value is: ${ myParameter }.`);
};

myFunction("this string");
>"The value is: this string."
```

如果缺少预期的参数，则生成的参数会包含 `undefined` 值，因为参数是声明给函数正文，但未初始化为值：

```javascript
function myFunction( myParameter ){
   console.log(`The value is: ${ myParameter }.`);
};

myFunction();
>"The value is: undefined."
```

您可以设置默认参数值，具体方法与初始化变量的方式相同：先使用赋值运算符 (`=`)，后跟值。如果您稍后为该函数指定了参数，该新值将替换默认值：

```javascript
function myFunction( myParameter ="omitted"){
   console.log(`The value is: ${ myParameter }.`);
};

myFunction("this string");
>"The value is: this string."

myFunction();
>"The value is: omitted."
```

[非箭头](/web/javascript/functions/function-expressions#arrow-functions)函数的正文还可以访问零索引、类似于[数组](/web/javascript/collections/indexed#array)的 `arguments` 对象，该对象包含任何作为实参传递的值，无论函数定义是否指定了形参：

```javascript
function myFunction(){
   console.log( arguments );
};

myFunction(3,true,"My string");
>Arguments{0:3,1:true,2:"My string",…}
```

### 差异函数

通过 `arguments` 对象，您可以创建基本的 *可变函数* ，此类函数可接受可变数量的参数：

```javascript
function myFunction(){
    let result ="";
    for(let i =0; i < arguments.length; i++){
        result += arguments[i]+" - ";
    }
    console.log( result );
};

myFunction("My first string","My second string","my third string");\
>"My first string - My second string - my third string - "
```

但是，在现代 JavaScript 开发中，这种可变函数的方法很少使用。更常见的做法是，使用更现代、更易读的 [rest 参数语法](/web/javascript/collections/indexed#rest-operator)，该语法会创建一个初始化为数组的命名参数，其中包含除明确指定的参数以外的任何参数：

```javascript
function myFunction( mySeparator,...myStrings ){
  console.log( myStrings.join( mySeparator ));
};

myFunction(" - ","My first string","My second string","my third string");
>"My first string - My second string - my third string"
```

与 `parameter` 绑定不同，其余参数语法在使用箭头函数参数时按预期工作：

```javascript
function myOuterFunction(){
    let myInnerArrowFunction =(...myParams )=>{
        console.log( myParams[0]);
    }
    myInnerArrowFunction(true);
};

myOuterFunction(false);
>true

let myArrowFunction =(...myParams )=>{
    console.log( myParams[0]);
};

myArrowFunction(true);
>true`
``
```
