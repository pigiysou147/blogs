---
date: 2024-03-31
category: javascript
tag:
  - class
  - static
---
# 静态初始化块

静态初始化块是一项全新的 JavaScript 功能，已在 ECMAScript 2022 中进行了标准化处理，仅在[现代浏览器](https://caniuse.com/mdn-javascript_classes_static_initialization_blocks)中受支持。通过静态初始化块，您可以使用跨越多个语句的逻辑动态设置静态字段的值。

如需创建静态初始化块，请使用 `static` 关键字，后跟大括号 (`{}`) 中的[块语句](/web/javascript/introduction#block-statements)：

```javascript
classMyClass{
  static{}
}
```

此模式可让您初始化或更改类正文中声明的静态字段：

```javascript
classMyClass{
  static firstProperty ='First property.';
  static secondProperty;
  static{
    this.secondProperty ='Second property.';
  }
}

MyClass.secondProperty;
"Second property."
```

这些语句是在首次初始化某个类时（即 JavaScript 引擎首次评估它时，而不是在创建类的实例时）进行求值，就像使用 `constructor()` 一样：

```javascript
classMyClass{
    static{
        console.log("Static initialization block.");
    }
    constructor(){
        console.log("Constructor.");
    }
}
>"Static initialization block."

const myClassInstance =newMyClass();
>"Constructor."
```

一个类可以包含多个静态初始化块，这些块会按照声明的顺序（与任何其他静态字段和方法一起）进行评估。这意味着，只有静态初始化块之前声明的字段才会在该块中可用：

```javascript
classMyClass{
  static myNewField;
  static{
    this.myNewField =this.myField;
  }
  static myField ="My value.";
};

MyClass.myNewField;
>undefined

classMyCorrectedClass{
  static myNewField;
  static myField ="My value.";
  static{
    this.myNewField =this.myField;
  }
};

MyCorrectedClass.myNewField;
>"My value."
```
