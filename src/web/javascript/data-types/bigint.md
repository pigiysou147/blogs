---
date: 2024-03-31
category: javascript
tag:
  - bigint
---
# BigInt

BigInt 基元是 JavaScript 的[相对新增功能](https://caniuse.com/bigint)，允许对 `Number` 允许的范围之外的数字执行数学运算。如需创建 BigInt，请将 `n` 附加到数字字面量的末尾，或将整数或数字字符串值传递给 `BigInt()` 函数。

```javascript
const myNumber =9999999999999999;
const myBigInt =9999999999999999n;

typeof myNumber;
>"number"

typeof myBigInt;
>"bigint"

myNumber;
>10000000000000000

myBigInt;
>9999999999999999n
```

在此示例中，`9999999999999999` 不在可以由 `Number` 安全表示的数字范围之内，从而导致出现舍入错误。

BigInt 值不会继承 `Number` 对象提供的方法和属性，并且不能与 JavaScript 的内置 `Math` 对象提供的方法一起使用。最重要的是，您不能在标准算术运算中混用 BigInt 和 Number 基元：

```javascript
9999999999999999n+5
>UncaughtTypeError: can't convert BigInt to number
```

要使用 BigInt 进行算术，您必须将两个操作数定义为 BigInt 值：

```javascript
console.log(9999999999999999+10);  // Off by one
>10000000000000010

console.log(9999999999999999n+10n);
>10000000000000009n
```
