---
date: 2024-03-31
category: javascript
---
# JavaScript 简介


JavaScript 尽管名称是这样，但仅与 Java 相关，因为这两者在语法上有一些相似之处。JavaScript 最初开发的语法在一定程度上受 Java 语法的启发，当它于 1995 年首次发布 Netscape Navigator 测试版时称为“LiveScript”，这既是为了与 Netscape 的其他已命名产品保持一致，也是为了确认其在浏览器中“实时”运行这一事实。不久之后，Microsoft 针对 Internet Explorer 3.0 发布了他们自己的 JavaScript 实现“JScript”。

Netscape 将这项早期工作提交给 [Ecma International](https://ecma-international.org/)（一家制定和发布技术标准的组织），用于正式制定并详细说明其他浏览器应如何理解此脚本语言。1997 年，Ecma International 发布了 ECMA-262，对 ECMAScript 这一脚本语言的第一个版本进行了标准化。ECMAScript 是一种标准，用于指导创建更具体的脚本语言，例如，Microsoft 后来开发的 JScript、Adobe 的 ActionScript 和 JavaScript 本身已经不复存在。

在讨论 JavaScript 的具体方面和功能时，这种区别非常重要。“ES5”是指 2009 年 ECMAScript 标准的第一个主要“版本化”版本，经过多年碎片化发展。“ES6”（或“ES2015”）是 2015 年发布的第六版 ECMAScript 所设标准的简写。ES6 之后，ECMAScript 标准的新版本每年发布，每个版本的变更和新增内容均以“ES2016”或“ES2017”来表示。

## 基本规则

与编译语言不同，JavaScript 不会从用户所编写代码转换为浏览器可以理解的格式。脚本会与标记、图片和样式表等资源一起发送到浏览器，浏览器会按照其编写方式将其解读为人类可读的 Unicode 字符序列，从左到右、从上到下解析。

当 JavaScript 解释器收到脚本时，会先执行 *词法分析* ，即解析构成脚本的一长串字符，并将其转换为以下离散的输入元素：

* 令牌
* 设置控制字符格式
* 行终止符
* 注释
* [空格](https://developer.mozilla.org/docs/Glossary/whitespace)（几乎始终表示制表符和空格）。

重新加载或离开当前页面后，脚本的结果不会保留，除非您在脚本中包含明确的操作说明。

概括来讲，JavaScript 应用由语句和表达式组成。

### 声明

语句是一种指令单元，由表示操作的一行或多行代码组成。例如，您可以使用以下语句为名为 `myVariable` 的变量赋值：

```javascript
let myVariable =4;

myVariable;
>4
```

语句必须以英文分号结尾，才能得到正确解释。但是，在编写 JavaScript 时，这些分号并非始终是必需的。借助一项名为[自动分号插入](/blogs/web/javascript/appendix#ASI)的功能，如果缺少分号会导致错误，系统会将完整语句后面的换行符视为分号。

ASI 是纠错，并不是 JavaScript 本身许可的一个方面。由于过于依赖这种纠错可能会导致歧义，进而破坏代码，因此您仍应手动在每个语句结尾处添加英文分号。

#### 屏蔽语句

代码块语句会将任意数量的语句和声明组合到一对大括号 (`{}`) 中。借助它，您可以在 JavaScript 只希望使用一个语句的位置组合语句。

您将最常看到块语句以及[控制流](/blogs/web/javascript/control-flow)语句，例如 `if`：

```javascript
if( x ===2){
  //some behavior;
}
```

### 表达式

表达式是生成值的代码单元，因此可以在预期有值的地方使用。`2 + 2` 是可生成值 `4` 的表达式：

```javascript
2+2;
>4
```

“分组运算符”是匹配的一对外括号，用于对表达式的各个部分进行分组，以确保将表达式的一部分作为一个单元进行评估。例如，您可以使用分组运算符来[override the mathematical order of operations](/blogs/web/javascript/data-types/number#operators)，或提高代码的可读性：

```javascript
2+2*4;
>10

(2+2)*4;
>16

let myVariable =(2+2);

myVariable;
>4
```

### 弱输入

JavaScript 是一种弱类型语言，这意味着不需要将数据值明确标记为特定[数据类型](/blogs/web/javascript/data-types)。与强类型语言不同，JavaScript 可以从值的上下文推断出预期类型，并将值转换为该类型。此过程称为 *类型强制转换* 。

例如，如果您使用强类型语言（如 Python）向字符串值添加数字，则结果会出现错误：

```javascript
>>>"1"+1
Traceback(most recent call last):
  File"<stdin>", line 1,in<module>
TypeError: cannot concatenate 'str'and'int' objects
```

JavaScript 会将数字值强制转换为字符串，并将两个值串联起来，而不是返回错误，这是向字符串添加任何值时最可能出现的预期行为：

```javascript
"1"+1;
>"11"
```

数据类型也可以显式强制转换。以下示例使用 JavaScript 的内置 `toString` 方法将数值 `100` 强制转换为字符串值 `"100"`：

```javascript
let myVariable =100;

typeof myVariable;
>"number"

myVariable = myVariable.toString();
>"100"

typeof myVariable;
>"string"
```

### 大小写区分

与 HTML 和大多数 CSS 不同，JavaScript 本身完全区分大小写。这意味着，从语言中内置的属性和方法到您自己定义的标识符，您必须始终采用一致的大小写形式。

```javascript
console.log("Log this.");
>Logthis.

console.Log("Log this too.");
>UncaughtTypeError: console.Logisnot a function
```

```javascript
const myVariable =2;

myvariable;
>UncaughtReferenceError: variablename isnotdefined

myVariable;
>2
```

### 空格符

JavaScript 不区分大小写。这意味着解释器会忽略使用的空格量和类型（制表符或空格）。

```javascript
console.log(       "Log this"  );console.log("Log this too");
>"Log this."
>"Log this too."
```

但是，作为词法词法单元之间的分隔符，空格的存在可能非常重要：

```javascript
let x;
```

[ **tokens** : `[let]` `[x]` ]

```javascript
letx;
>UncaughtReferenceError: letx isnotdefined
```

[ **tokens** : `[letx]` ]

如果空格用于分隔有意义的词法词元，则解析器会忽略空格的数量和类型：

```javascript
let           x                             =                           2;
```

[ **令牌** ：`[let]` `[x]` `[=]` `[2]` ]

换行也是如此，但在某些情况下，换行符可能会因[过早结束语句](/blogs/web/javascript/appendix#ASI)而引起问题：

```javascript
let x
=
2;
```

[ **令牌** ：`[let]` `[x]` `[=]` `[2]` ]

从风格上讲，某些类型的语句通常占用一行：

```javascript
let x =1;
let y =2;
```

虽然某些语句通常使用多行：

```javascript
if( x ==2){
  //some behavior;
}
```

不过，这些惯例严格是为了方便阅读。JavaScript 对上述示例的解释方式与以下内容相同：

```javascript
let x=1;let y=2;
```

```javascript
if(x==2){}
```

因此，在准备生产环境的 JavaScript 以及许多其他优化时，一个自动化流程是删除脚本文件中不必要的空白区域以缩减传输大小的一个常见步骤。

在 JavaScript 中使用空白字符在很大程度上取决于作者和维护人员的偏好。有多位开发者贡献代码的 JavaScript 项目通常会建议或强制执行某些空格惯例，以确保代码格式保持一致，例如使用制表符或空格来缩进嵌套语句：

```javascript
let myVariable =10;

if(typeof myVariable ==="number"){
    console.log("This variable is a number.");
    if( myVariable >5){
     console.log("This variable is greater than five.");
    }
}

>"This variable is a number."
>"This variable is greater than five."
```
