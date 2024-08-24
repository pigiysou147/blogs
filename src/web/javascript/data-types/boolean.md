---
date: 2024-03-31
category: javascript
tag:
  - boolean
---
# 布尔值

布尔值基元是一种逻辑数据类型，只有两个值：`true` 和 `false`。

## 布尔值对象

JavaScript 中的所有值均隐式为 `true` 或 `false`。`Boolean` 对象可用于根据某个值的隐式 true 或 false 状态将某个值强制转换为 `true` 或 `false` 布尔值：

```javascript
Boolean("A string literal");
>true
```

导致 `false` 的值包括 `0`、`null`、`undefined`、`NaN`、空字符串 (`""`)、省略值和 `false` 布尔值。所有其他值均导致 `true`。

```javascript
Boolean(NaN);
>false

Boolean(-0);
>false

Boolean(5);
>true

Boolean("false");// the value `"false"` is a string, and therefore implicitly true.
>true
```

避免将 `Boolean` 对象用作构造函数，它会创建一个 *对象* ，其中包含布尔值，而不是您预期的布尔值基元：

```javascript
const falseBoolean =Boolean(0);
const falseObject =newBoolean(0);

console.log( falseBoolean  );
>false

console.log( falseObject  );
>Boolean{false}

falseObject.valueOf();
>false
```

由于所有对象本质上都是 [actualy](/web/javascript/comparison#truthy-falsy)，因此生成的布尔值对象始终松散求值为 true，即使它包含 `false` 值也是如此：

```javascript
const falseBoolean =Boolean(0);
const falseObject =newBoolean(0);

console.log( falseBoolean ==true);
>false

console.log( falseObject ==true);
>true
```
