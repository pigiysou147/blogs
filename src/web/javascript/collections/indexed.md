---
date: 2024-03-31
category: javascript
tag:
  - colections
  - array
---
# 已编入索引的集合

编入索引的集合是一种数据结构，其中使用编号索引存储和访问元素。系统会为存储在编入索引的集合中的值分配从 `0`（一种称为“零索引”的模式）开始编号的编号索引。然后，您可以通过引用索引来访问存储在索引集合中的值。

## 数组

数组是一种容器，可以存储零个或多个任意数据类型的值，包括复杂对象或其他数组。存储在数组中的值有时称为数组的“元素”。

### 创建数组

与基元数据类型一样，您可以通过两种方式创建数组：将其作为数组字面量，或者使用 `new Array()` 调用 JavaScript 的内置 `Array()` 构造函数。为变量分配数组提供了一种高度可移植和[可迭代](/web/javascript/control-flow#iterators)的方式来为单个标识符分配多个值。

数组字面量语法使用一组方括号 (`[]`) 括住零个或多个以英文逗号分隔的数据值：

```javascript
const myArray =[];
```

数组构造函数语法通过 `new` 关键字使用 JavaScript 的内置 `Array` 对象作为构造函数：

```javascript
const myArray =newArray();
```

数组字面量和数组构造函数语法都允许您在创建数组时为其填充信息，不过在这些值的定义方式方面，语法略有不同。数组字面量语法在方括号之间使用逗号分隔值，这看起来与生成的数组相同：

```javascript
const myArray =[true,null,"String",false];

myArray;
>[true,null,"String",false]
```

数组构造函数语法将以英文逗号分隔的值作为参数，但有一个特殊行为异常：

```javascript
const myArray =newArray(true,null,"String",false);

myArray;
>Array(4)[true,null,"String",false]
```

将单个*数值*值传递给 `Array` 构造函数时，该值不会分配给结果数组中的第 0 个位置。而是会使用该数量的空槽位来创建数组。这不会对数组施加任何限制。可以像使用数组字面量一样在数据集中添加项以及从中移除项。

```javascript
// Firefox:\
const myArray =newArray(10);

myArray;
>Array(10)[<10 empty slots>]
```

```javascript
// Chrome:
const myArray =newArray(10);

myArray;
>(10)[empty ×10]
```

包含空槽位的数组（有时称为“稀疏数组”）属于特殊情况。空槽通常（但并不总是）在语言的其他位置被视为 `undefined` 值，而不是包含 `undefined` 或显式 `null` 值。

创建数组字面量时，如果省略逗号之间的值，您可能会意外使用数组字面量语法创建稀疏数组：

```javascript
const myArray =[true,,true,false];

myArray;
>Array(4)[true,<1 empty slot>,true,false]
```

尽管空槽在任何上下文中都没有被视为有意义的值，但仍会计入数组的总长度，因此在[迭代](/web/javascript/control-flow#loops)数组值时可能会导致意外结果：

```javascript
const myArray =[1,,3,4];

myArray.length;
>4

for(const myValue of myArray ){
  console.log( myValue +10);
}
>11
>NaN
>13
>14
```

此行为受 JavaScript 最早的一些设计决策的影响。避免在现代开发中使用稀疏数组。

与基元一样，数组字面量会[继承其相应构造函数的属性和方法](/web/javascript/appendix#prototypal-inheritance)。由于数组是特殊形式的对象，因此数组字面量语法和 `new Array()` 语法会创建功能相同的结果：即从 `Array` 构造函数继承其原型的对象。

```javascript
const arrayLiteral =[];
const arrayConstructor =newArray();

typeof arrayLiteral;
>"object"

arrayLiteral;
>Array[]
    length:0
    <prototype>:Array[]

typeof arrayConstructor;
>"object"

arrayConstructor;
>Array[]
    length:0
    <prototype>:Array[]
```

由于这两个结果相同，并且数组字面量语法更简洁且更文字，因此我们强烈建议您始终使用数组字面量语法，而不是 `new Array()` 语法。

#### 访问数组值

您可以使用方括号表示法访问数组中的各个元素，即数组或其标识符后面的一组方括号 (`[]`)，其中包含引用该元素索引的数字：

```javascript
["My string","My other string"][1];
>"My other string"

const myArray =["My string",50,true];

myArray[0];
>"My string"

myArray[1];
>50

myArray[2];
>true
```

JavaScript 中的数组不具有[关联性](https://en.wikipedia.org/wiki/Associative_array)，这意味着您不能使用任意字符串作为索引。不过，用于访问数组中元素的数值会在后台被强制转换为字符串值，这意味着您可以使用仅包含数字字符的字符串值：

```javascript
const myArray =["My string",50,true];

myArray[2];
>true

myArray["2"];
>true
```

尝试访问数组中定义的元素以外的元素会导致 `undefined`，而不是错误：

```javascript
const myArray =["My string",50,true];

myArray[9];
>undefined
```

### 解构分配

解构赋值是从数组或[对象](/web/javascript/objects)中提取一系列值并将其分配给一组标识符的简洁方法，此过程有时称为“解包”原始数据结构，但它不会修改原始数组或对象。

解构赋值使用类似于数组或对象的标识符列表来跟踪值。最简单形式称为“绑定模式”解构，每个值都会从数组或对象解包，并分配给相应的变量，并使用 `let` 或 `const`（或 `var`）进行初始化：

```javascript
const myArray =["A string","A second string"];
const[ myFirstElement, mySecondElement ]= myArray;

const myObject ={ firstValue:false, secondValue:true};
const{ myProp, mySecondProp }= myObject;

myFirstElement;
>"My string"

mySecondElement;
>"Second string"

myProp;
>false

mySecondProp;
>true
```

使用大括号 (`{}`) 解构对象，并使用方括号 (`[]`) 解构数组。

```javascript
const myArray =[false,true];
const myObject ={ firstValue:false, secondValue:true};

const[ myProp, mySecondProp ]= myObject;
>UncaughtTypeError: myObject isnot iterable

const{ myElement, mySecondElement }= myArray;

myElement
>undefined

mySecondElement;
>undefined
```

按从左到右的顺序解构数组。解构赋值中的每个标识符都对应于数组中具有相同索引的元素：

```javascript
const myArray =[1,2,3];
const[ myElement, mySecondElement, myThirdElement ]= myArray;

myElement;
>1

mySecondElement;
>2

myThirdElement;
>3
```

这也是解构对象时的默认行为。但是，如果解构赋值中使用的标识符与对象属性的键匹配，则无论以什么顺序指定这些标识符，这些标识符都会填充相应的属性值：

```javascript
const myObject ={ firstValue:1, secondValue:2, thirdValue 3};
const{ secondValue, thirdValue, firstValue }= myObject;

firstValue;
>1

secondValue;
>2

thirdValue;
>3
```

可通过省略标识符来跳过元素：

```javascript
const myArray =[1,2,3];
const[ firstValue,, secondValue ]= myArray;

firstValue;
>1

secondValue;
>3
```

解构语法还允许您在解构值为空槽（如稀疏数组）或 `undefined` 值时分配默认值。

```javascript
const myArray =[true,];
const[ firstValue ="Default string.", secondValue ="Default string."]= myArray;

firstValue;
>true

secondValue;
>"Default string."
```

解构不会将值强制转换为特定类型。这意味着，[&#34;falsy&#34;](/web/javascript/comparison#truthy-falsy) 值（例如空字符串 [`""`] 或 `null`）仍被视为有意义的解构值：

```javascript
const myArray =[false,null,0,"",,undefined];
const[ falseValue =true, nullValue =true, zeroValue =true, emptyStringValue =true, emptySlot =true, undefinedValue =true]= myArray;

falseValue;
>false;

nullValue;
>null

zeroValue;
>0

emptyStringValue;
>""

emptySlot;
>true

undefinedValue;
>true
```

### 扩散运算符

使用 ES6 中引入的展开运算符 (`...`) 将可迭代数据结构（例如数组、字符串或对象字面量）展开为各个元素。扩展运算符紧跟在要展开的数据结构或包含该数据结构的变量的标识符之后。

```javascript
const myArray =[1,2,3];

console.log(...myArray );
>123
```

扩散语法主要用于复制和组合数组：

```javascript
const myArray =[4,5,6];
const mySecondArray =[1,2,3,...myArray ];

mySecondArray;
>Array(6)[1,2,3,4,5,6]
```

您只能在以下上下文中使用分散语法：

对于数组和字符串，展开语法仅适用于需要函数调用中的零个或多个参数或数组中的元素符合要求的情况。本部分中的第一个扩散运算符语法示例之所以有效，是因为它将 `...myArray` 作为参数传递给内置 `console.log` 方法。

例如，您不能将正分布的数据分配给另一个数组之外的变量：

```javascript
const myArray =[1,2,3];
const spreadVariable =...myArray;
>UncaughtSyntaxError:Unexpected token '...'
```

但是，您可以通过将原始数组扩展为数组字面量来复制数组：

```javascript
const myArray =[1,2,3];
const spreadArray =[...myArray ];

spreadArray;
>Array(3)[1,2,3]
```

若要将构成两个或多个数组的元素合并为一个数组，请执行以下操作：

```javascript
const myArray =[1,2,3];
const mySecondArray =[4,5,6];
const myNewArray =[...myArray,...mySecondArray ];

myNewArray;
>Array(6)[1,2,3,4,5,6]
```

或者，如需在函数调用中将数组元素作为单独的参数传递，请使用以下代码：

```javascript
const myArray =[true,false];
const myFunction =( myArgument, mySecondArgument )=>{
    console.log( myArgument, mySecondArgument );
};

myFunction(...myArray );
>truefalse
```

扩展运算符已扩展为与 [ES2018 中的对象字面量配合使用](https://caniuse.com/mdn-javascript_operators_spread_spread_in_object_literals)。与数组一样，您可以使用分散运算符来复制或合并对象：

```javascript
const myObj ={ myProperty :true};
const mySecondObj ={...myObj };

mySecondObj;
>Object{ myProperty:true}
```

```javascript
const myFirstObj ={ myProperty :true};
const mySecondObj ={ additionalProperty :true};
const myMergedObj ={...myFirstObj,...mySecondObj };

myMergedObj;
>Object{ myProperty:true, additionalProperty:true}
```

散布运算符会创建“浅”副本。这意味着它不会复制原始对象的原型设计和[非枚举](/web/javascript/objects/property-descriptors)属性。

```javascript
const myCustomPrototype ={ protoProp:"My prototype."};
const myObj =Object.create( myCustomPrototype,{
    myEnumerableProp:{
        value:true,
        enumerable:true
    },
    myNonEnumerableProp:{
        value:false,
        enumerable:false
    }
});
const myNewObj ={...myObj };

myObj;
>Object{ myEnumerableProp:true,…}
    myEnumerableProp:true
    myNonEnumerableProp:false
    <prototype>:Object{ protoProp:"My prototype."}

myNewObj;
>Object{ myEnumerableProp:true}
    myEnumerableProp:true
    <prototype>:Object{…}
```

请注意，数组和对象不能互换使用。您无法将对象扩展为数组，也无法将数组扩展为对象。

#### REST 运算符

虽然运算符本身的语法相同，但其余运算符 (`...`) 会根据其使用的上下文执行相反的函数。REST 运算符会将多个元素组合成一个可迭代数据结构，而不是像[解构赋值](/web/javascript/collections/indexed#destructuring-assignment)中那样将可迭代数据结构扩展为单个元素或作为[函数参数](/web/javascript/functions)这样做。这个名称的意义在于，它用于收集一组数据值的“其余内容”。

与解构分配一起使用时，该语法称为“rest 属性”语法。

```javascript
const myArray =["First","Second","Third","Fourth","Fifth"];

[ myFirstElement, mySecondElement,...remainingElements ]= myArray;

myFirstElement;
>"First"

mySecondElement;
>"Second"

remainingElements;
>Array(3)["Third","Fourth","Fifth"]
```

该语法用于[为函数提供无限数量的参数](/web/javascript/control-flow#iterators)时，称为“rest 参数”语法：

```javascript
function myFunction(...myParameters ){
    let result =0;
    myParameters.forEach(( myParam )=>{
        result += myParam;
    });
    return result;
};

myFunction(2,2);
>4

myFunction(1,1,1,10,5);
>18

myFunction(10,11,25);
>46
```

## `%TypedArray%`

*类型化数组*是一项 ES6 功能，旨在存储结构化二进制数据，例如在处理上传的文件或 WebGL 时。

与[符号](/web/javascript/data-types/symbol)一样，`%TypedArray%`  *固有函数* （通常记录为 `%TypedArray%` 或 `@@TypedArray`，因此不会被误认为全局属性）不是传统意义上的构造函数函数，您无法使用 `new` 调用该函数或直接调用它。相反，`%TypedArray%` 是指各个构造函数的父父类，每个构造函数都使用特定的二进制数据格式。固有 `%TypedArray%` 父类提供了所有 `%TypedArray%` 构造函数子类及其实例都会继承的属性和实用程序方法。
