---
date: 2024-03-31
category: javascript
---
# 比较运算符

比较运算符会比较两个运算数的值，并评估它们形成的语句是 `true` 还是 `false`。以下示例使用*严格等式*运算符 (`===`) 来比较两个运算数：表达式 `2 + 2` 和值 `4`。由于此表达式的结果与数值 `4` 相同，因此此表达式的计算结果为 `true`：

```javascript
2+2===4
>true
```

## 类型强制转换和等式

两种最常用的比较运算符是 `==`（表示松散等式）和 `===`（用于严格相等）。如果可能，`==` 会通过将运算数强制转换为匹配的数据类型，在两个值之间执行松散比较。例如，即使要在数值与字符串值之间进行比较，`2 == "2"` 仍会返回 `true`。

```javascript
2==2
>true

2=="2"
>true
```

`!=` 也是如此，只有在要比较的运算数并非松散相等时，它才会返回 `true`。

```javascript
2!=3
>true

2!="2"
>false
```

使用 `===` 或 `!==` 的严格比较不会执行类型强制转换。若要执行严格比较才能计算出 `true`，所比较的值必须具有相同的数据类型。因此，`2 == "2"` 会返回 `true`，但 `2 === "2"` 会返回 `false`：

```javascript
2===3
>false

2==="2"
>false
```

如需消除自动强制转换可能产生的任何歧义，请尽可能使用 `===`。

| 运算符 | 说明                   | 用法       | 结果 |
| -------- | ------------------------ | ------------ | ------ |
| ===    | 严格等于               | 2 === 2    | true |
| !==    | 不严格相等             | 2 !==“2” | true |
| ==     | 等于（或“松散等于”） | 2 ==“2”  | true |
| !=     | 不等于                 | 2 !=“3”  | true |
| >      | 大于                   | 3 > 2      | true |
| >=     | 大于或等于             | 2 >= 2     | true |
| <      | 小于                   | 2 < 3 个   | true |
| <=     | 小于或等于             | 2 <= 3     | true |

## 虚伪

JavaScript 中的所有值均隐式为 `true` 或 `false`，并且可强制转换为相应的布尔值，例如使用“松散等于”比较运算符。一组有限的值会强制转换为 `false`：

* `0`
* `null`
* `undefined`
* `NaN`
* 空字符串 (`""`)

所有其他值都强制转换为 `true`，包括包含一个或多个字符以及所有非零数字的任何字符串。这些值通常称为“actualy”和“falsy”值。

```javascript
"My string"==true
>true

100==true
>true

0==true
>false
```

## 逻辑运算符

使用逻辑 AND (`&&`)、OR (`||`) 和 NOT (`!`) 运算符，根据对两个或多个条件语句的求值来控制脚本流：

```javascript
2===3||5===5;
>true

2===2&&2==="2"
>false

2===2&&!"My string."
>false
```

逻辑 NOT (`!`) 表达式会对运算数的 true 值或 falsy 值进行求反，如果操作数的求值结果为 `false`，则求值结果为 `true`，如果运算数的求值结果为 `true`，则求值结果为 `false`：

```javascript
true
>true

!true
>false

!false
>true
```

在另一种数据类型（如数字或字符串）前使用逻辑 NOT 运算符 (`!`) 可将该值强制转换为布尔值，并反转结果的真实值或 falsy 值。

```javascript
"string"
>"string"

!"string"
>false

0
>0

!0
>true
```

常见做法是使用两个 NOT 运算符，快速将数据强制转换为其匹配的布尔值：

```javascript
!!"string"
>true

!!0
>false
```

逻辑 AND 和 OR 运算符本身不执行任何强制转换。它们会返回所评估的两个运算数之一的值，所选运算数由该计算结果决定。

逻辑 AND (`&&`) 仅在其两个运算数的计算结果为 `false` 时返回第一个运算数，否则返回第二个运算数。在计算结果为布尔值的比较中，仅当逻辑“与”两侧的运算数都为 `true` 时，它才会返回 `true`。如果任意一侧的计算结果为 `false`，则返回 `false`。

```javascript
true&&false
>false

false&&true
>false

false&&false
>false

true&&true
>true
```

当 `&&` 与两个非布尔运算数一起使用时，如果第一个运算数可强制转换为 `false`，则将按原样返回第一个运算数。如果第一个运算数可以强制转换为 `true`，则第二个运算数将保持不变：

```javascript
false&&"My string"
>false

null&&"My string"
>null

"My string"&&false
>false

"My string"&&"My second string"
>"My second string"

2===2&&"My string"
>"My string"
```

逻辑 OR (`||`) 仅在两个运算数的求值结果为 `true` 时才返回其第一个运算数，否则返回第二个运算数。在计算结果为布尔值的比较中，这意味着如果任一运算数求值为 `true`，则返回 `true`；如果任一运算数求值为 `true`，则返回 `false`：

```javascript
true||false
>true

false||true
>true

true||true
>true

false||false
>false
```

将 `||` 与两个非布尔运算数结合使用时，如果第一个运算数可强制转换为 `true`，则它会按原样返回第一个运算数。如果第一个运算数可以强制转换为 `false`，则第二个运算数将保持不变：

```javascript
false||"My string"
>"My string"

null||"My string"
>"My string"

"My string"||false
>"My string"

"My string"||"My second string"
>"My string"

2===2||"My string"
>true
```

### Nullish 合并运算符

[ES2020 中引入](https://caniuse.com/mdn-javascript_operators_nullish_coalescing)，“null 合并运算符”(`??`) 仅在第一个运算数具有除 `null` 或 `undefined` 以外的值时返回。否则，它会返回第二个运算数。

```javascript
null??"My string"
>"My string"

undefined??"My string"
>"My string"

true??"My string";
>true
```

`??` 与逻辑 OR 类似，但在第一个运算数的评估方式方面更为严格。`||` 会返回任何可强制转换为 `false` 的表达式的第二个运算数，包括 `undefined` 和 `null`。当第一个运算数不是 `null` 或 `undefined` 时，`??` 会返回第二个运算数，即使它可以强制转换为 `false`：

```javascript
0??"My string";
>0

false??"My string";
>false

undefined??"My string";
>"My string"
```

## 逻辑赋值运算符

使用赋值运算符将第二个运算符的值分配给第一个运算符。最常见的一个示例就是单个等号 (`=`)，用于[为声明的变量赋值](/web/javascript/data-types/variable#declaration)。

使用逻辑赋值运算符，根据变量的真实值或假值有条件地向变量赋值。

逻辑 AND 赋值 (`&&=`) 运算符会计算第二个运算数的值，并仅在第一个运算数求值为 `true` 时赋值给第一个运算数。实际上，“如果第一个运算数为 true，则为其分配第二个运算数的值：”

```javascript
let myVariable =false;
myVariable &&=2+2;
>false

myVariable =true;
myVariable &&=2+2;
>4
```

第一个运算数的 true 或 falsy 值决定了是否执行赋值操作。不过，如果尝试使用比较运算符求第一个运算数求值，则会导致 `true` 或 `false` 布尔值无法为其赋值：

```javascript
let myVariable =5;
myVariable >2&&="My string"
>SyntaxError:Invalid left-hand side in assignment
```

逻辑 OR 赋值 (`||=`) 运算符对第二个运算数求值，如果第一个运算数的求值结果为 `false`，则赋值给第一个运算数。实际上，“如果第一个运算数为 false，就为其分配第二个运算数的值：”

```javascript
let myVariable =false;
myVariable ||=2+2;
>4

myVariable =true;
myVariable ||=2+2;
>true
```
