---
date: 2024-03-31
category: javascript
tag:
  - object
---
# 属性访问器

您可以通过以下两种方式设置、更改和访问对象的属性：*点表示法*和 *括号表示法* 。

## 点表示法

如前面的一些示例所示，点表示法在对象和所访问的属性键之间使用句点 (`.`)：

```javascript
const myObj ={
    "myProp":"String value."
};

myObj.myProp;
>"String value."
```

您可以使用点表示法通过[赋值运算符](/web/javascript/data-types/variable#declaration)访问、更改或创建新属性：

```javascript
const myObj ={};

myObj.myProp ="String value.";

myObj;
>Object{ myProp:"String value."}
```

使用点表示法链接属性键可让您访问对象的属性，而这些对象的属性本身就是对象的属性：

```javascript
const myObj ={
    "myProp":{
            "childProp":true
    }
};

myObj.myProp.childProp;
>true;
```

但是，在可能未定义链中指定的键的情况下使用此语法可能会导致错误。在以下示例中，`myMissingProp` 不是 `myObj` 对象的属性，因此尝试访问 `myObj.myMissingProp` 会导致 `undefined`。如果尝试访问 `undefined` 上的属性（就像访问对象一样），会导致错误：

```javascript
const myObj ={
    "myProp":{
            "childProp":true
    }
};

> myObj.myMissingProp
>undefined

myObj.myMissingProp.childProp;
>UncaughtTypeError: myObj.myMissingProp isundefined
```

为了解决此问题，ES2020 引入了“可选链运算符”(`?.`) 来安全地访问对象的嵌套属性。

```javascript
const myObj ={
    "myProp":{
            "childProp":true
    }
};

myObj.myMissingProp?.childProp;
>undefined
```

使用点表示法访问的键不会像字符串字面量一样用引号括起来。这意味着您可以使用点表示法来仅访问作为有效[标识符](/web/javascript/data-types/variable)的属性键：

```javascript
const myObj ={
    "1":true,
    "key with spaces":true
};

myObj.1;
>UncaughtSyntaxError: unexpected token: numeric literal

myObj.key with spaces;
>UncaughtSyntaxError: unexpected token: keyword 'with'
```

因此，在指定属性键时，最好遵循[标识符规则](/web/javascript/data-types/variable)。如果无法对给定键执行此操作，可使用替代*中括号表示法*语法设置和访问不遵循标识符规则的基于字符串的对象键。

## 方括号表示法

方括号表示法使用一组方括号 (`[]`)，其中包含的值用于对表示属性键的字符串（或[符号](/web/javascript/data-types/symbol)）求值。

```javascript
const myObj ={
    "myProp":"String value."
};

myObj["myProp"];
>"String value."
```

该语法更为宽松，可能会造成混淆，因为方括号中的值无论数据类型如何都是字符串字面量。例如，以下布尔值 `false` 和数字值 `10` 用于访问与字符串字面量键 `"false"` 和 `"10"` 相关联的属性：

```javascript
const myObj ={
    "false":25,
    "10":true,
    "key with spaces":true
};

myObj[false];
>25

myObj[10];
>true

myObj["key with spaces"];
>true
```

此语法的优势在于其灵活性，它允许使用动态创建的字符串访问属性。以下示例使用随机数来选择对象的三个属性之一：

```javascript
const colors ={
    "color1":"red",
    "color2":"blue",
    "color3":"green"
};
const randomNumber =Math.ceil(Math.random()*3);

colors["color"+ randomNumber ];
>"blue"
```

与点表示法一样，您可以通过赋值运算符使用括号表示法来访问和创建新属性：

```javascript
const myObj ={};

myObj["myProp"]="String value.";

myObj;
>Object{ myProp:"String value."}
```
