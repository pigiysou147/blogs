---
date: 2024-03-31
category: javascript
tag:
  - null
  - undefined
---
# null 和 undefined

JavaScript 有多种方法可以指示值缺失。本页面介绍了两种最常见的方式：`null` 和 `undefined` 数据类型。

## `null`

`null` 关键字表示故意定义的缺少值。`null` 是一个基元，不过 `typeof` 运算符返回 `null` 是一个对象。这是从 JavaScript 的第一个版本继承而来的[错误](https://2ality.com/2013/10/typeof-null.html)，因此我们特意保留了此错误，以避免破坏预期在网络上的行为。

```javascript
typeofnull
>object
```

您可以将[变量](/blogs/web/javascript/data-types/variable)定义为 `null`，并预期该变量反映的是脚本中某个时间点赋值的值或明确不存在的值。您还可以将 `null` 值分配给现有引用，以清除之前的值。

## `undefined`

`undefined` 是分配给刚刚声明的[变量](/blogs/web/javascript/data-types/variable)或分配给未返回有意义的值的操作的结果值的原始值。例如，当您在浏览器的开发者控制台中声明函数时，可能会发生这种情况：

```javascript
function myFunction(){}
>undefined
```

当函数的 [`return` 语句](/blogs/web/javascript/functions/return)未返回任何值时，函数会明确返回 `undefined`。

```javascript
(function(){
    return;
}());
>undefined
```

## “`null`”与“`undefined`”的比较

虽然 `undefined` 和 `null` 在功能上有所重叠，但它们的用途不同。严格来说，`null` 表示特意定义为“空白”的值，`undefined` 表示缺少任何赋值。

`null` 和 `undefined` [松散相等，但并不严格相等](/blogs/web/javascript/comparison#type-coercion-equality)。松散等式运算符会将不同类型的运算数强制转换为布尔值，从而使 `null` 和 `undefined` 均为 `false`。严格的等式运算符将不同数据类型的运算数视为不相等。

```javascript
null==undefined
>true

null===undefined
>false
```

与预留关键字 `null` 不同，`undefined` 是[全局对象](/blogs/web/javascript/data-types/variable#global-scope)的属性。这是在 JavaScript 开发初期做出的设计决策，可让旧版浏览器完全覆盖 `undefined`。在现代浏览器中，仍可以将 `undefined` 用作非全局范围内的标识符，从而覆盖该声明的作用域内的值。**切勿**将 `undefined` 用作标识符。它可能会导致意外行为，并可能会使代码库的未来维护者感到困惑。