---
date: 2024-03-31
category: javascript
title: 介绍类
tag:
  - class
---
# 类

ES6 在 JavaScript 中引入了“类”的概念，该概念与其他编程语言中的类不同。在这里，类是一些特殊的函数，可用作模板，用于创建已包含数据的对象、与这些数据相关联的属性以及与处理这些数据相关的方法。这些对象、属性和方法统称为类的成员。

如需定义类，请使用 `class` 关键字。遵循最佳实践和 JavaScript 的内置构造函数函数建立的惯例，类的任何标识符均以大写字母开头：

```javascript
classMyClass{}
```

类旨在提供更便捷的方式来使用原型和构造函数的高级功能：

```javascript
classMyClass{}

typeofMyClass;
>"function"
```

部分添加的类是为了简化高级 JavaScript 功能的使用，让它更有吸引力，因此有时被称为“语法糖”。不过，类不只是为处理[原型继承](/web/javascript/appendix#prototypal-inheritance)提供有用的简写形式。引入类语法创造了机会，既能解决 JavaScript 中长期存在的设计问题，又不会造成向后兼容性问题。例如，类正文中的所有代码始终在[严格模式](/web/javascript/appendix#strict-mode)下进行评估。

如需创建类的实例，请使用 `new` 运算符。

```javascript
classMyClass{}

const myClassInstance =newMyClass();

myClassInstance;
>Object{}
```

在类的正文中定义的函数会作为该类每个实例的方法公开。

```javascript
classMyClass{
    classMethod(){
        console.log("My class method.");
    }
}

const myClassInstance =newMyClass();

myClassInstance.classMethod();
>"My class method."
```

在类中定义的方法将成为所生成实例原型上的方法。鉴于[原型链](/web/javascript/objects/property-descriptors)的性质，您可以直接对生成的对象调用这些方法：

```javascript
classMyClass{
  classMethod(){
    console.log("My class method.");
  }
}

const myClassInstance =newMyClass("A string.");

myClassInstance;
>Object{}
    <prototype>:Object{…}
        classMethod:function classMethod()
        constructor:classMyClass{ constructor(myPassedValue)}
        <prototype>:Object{…}

myClassInstance.classMethod();
>"My class method."
```

创建类的实例会调用特殊的 `constructor()` 方法，该方法会为新创建的实例执行任何必要的“设置”，并初始化与其关联的所有属性。`constructor()` 方法可以使用创建实例时传递给类的任何参数：

```javascript
classMyClass{
  constructor( myPassedValue ){
    console.log( myPassedValue );
  }
}

const myClassInstance =newMyClass("A string.");
>"A string."
```

在类的正文中，`this` 的值引用实例本身，`this` 上定义的任何属性都将作为该类的每个实例的属性公开：

```javascript
classMyClass{
  constructor( myPassedValue ){
    this.instanceProperty = myPassedValue;
  }
}

const myClassInstance =newMyClass("A string.");

myClassInstance;
>Object{ instanceProperty:"A string."}
```

这些属性也适用于类正文中的所有方法：

```javascript
classMyClass{
  constructor( myPassedValue ){
    this.instanceProp = myPassedValue;
  }
  myMethod(){
    console.log(this.instanceProp );
  }
}

const myClassInstance =newMyClass("A string.");

myClassInstance.myMethod();
>"A string."
```

如果您没有为类定义 `constructor()`，JavaScript 引擎会假定“默认”`constructor` 为空。每个类只能有一个名为 `constructor()` 的特殊方法：

```javascript
classMyClass{
  constructor(){}
  constructor(){}
}
>UncaughtSyntaxError: A class may only have one constructor
```

您可以使用类声明或类表达式来定义类。前面的示例都是类声明，需要使用 `new` 调用名称。类表达式可以命名也可以不命名，以创建“匿名”类。

```javascript
let ClassExpression=class{
    constructor(){}
};

ClassExpression;
>class  {}
```

您可以将匿名类表达式用于“即时”构建类的函数：

```javascript
function classMaker(){
  returnclass{
    constructor(){}
  };
}

let MyVariable= classMaker();

MyVariable;
>class  {}
```

使用类声明重新声明类会导致语法错误：

```javascript
classMyClass{
    constructor(){
        console.log("My class.");
    }
};

classMyClass{
    constructor(){
        console.log("My new class.");
    }
};
>UncaughtSyntaxError: redeclaration of classMyClass
```

不过，您可以通过类表达式重新定义类：

```javascript
let ClassExpression=classMyClass{};

ClassExpression=classMyOtherClass{
    constructor( myString ){
        this.myProp = myString;
    }
};

newClassExpression("String.");
>MyOtherClass{myProp:'String.'}
```

您不能像声明类那样通过名称调用已命名的类表达式。不过，类表达式的分配名称可作为所创建实例的属性使用，这主要是为了简化调试：

```javascript
let MyVariable=classMyClass{};

MyClass;
>UncaughtReferenceError:MyClassisnotdefined

MyVariable;
>classMyClass{}

MyVariable.name;
>"MyClass"
```

使用类表达式初始化变量时，系统会按预期遵循该变量的[提升规则](/web/javascript/data-types/variable#hoisting)。类声明遵循[与 `let` 和 `const` 相同的“时间死区”规则](/web/javascript/data-types/variable#hoisting)，并且其行为就像尚未提升到当前范围的顶部一样，这意味着在类声明之前调用类会导致错误：

```javascript
{
    let myVar =newMyClass("Property string.");

    classMyClass{
        myProp;

        constructor( myString ){
            this.myProp = myString;
        }
    };
};
>UncaughtReferenceError:Cannot access 'MyClass' before initialization
```
