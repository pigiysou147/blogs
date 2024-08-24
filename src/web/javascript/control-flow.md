---
date: 2024-03-31
category: javascript
---
# 控制流


控制流是 JavaScript 解释器执行语句的顺序。如果脚本不包含更改其流程的语句，则将从头开始执行，一次一行。控制结构用于确定是否根据一组定义的条件执行一组语句、重复执行一组语句或中断一系列语句。

## 条件语句

条件语句用于确定是否应根据一个或多个条件执行代码。如果关联条件（或一组条件）的求值结果为 `true`，则条件语句就会执行其包含的代码。否则，系统会跳过此代码。

### `if`…`else`

`if` 语句对后面的匹配圆括号内的条件求值。如果圆括号内的条件求值为 `true`，则执行位于匹配圆括号后面的语句或[块语句](/blogs/web/javascript/introduction#block-statements)：

```javascript
if(true) console.log("True.");
>"True."

if(true){
    const myString ="True.";
    console.log( myString );
}
>"True."
```

如果圆括号内条件的求值结果为 `false`，则忽略它后面的语句：

```javascript
if(false) console.log("True.");
```

紧跟在 `if` 语句及其有条件执行的语句后面的 `else` 关键字指定在 `if` 条件求值为 `false` 时要执行的语句：

```javascript
if(false) console.log("True.")''
else console.log("False");
>"False."
```

如需将多个 `if` 语句链接在一起，可以将有条件执行的语句放在 `else` 的另一个 `if` 语句之后：

```javascript
const myCondition =2;
if( myCondition ===5) console.log("Five.");
elseif( myCondition ===2) console.log("Two.");
```

我们强烈建议将块语句语法与条件搭配使用以提高可读性，但 `else if` 子句通常是例外情况：

```javascript
if( myCondition ===5){
    console.log("Five.");
}elseif( myCondition ===3){
    console.log("Three");
}else{
    console.log("Neither five nor three.");
}
>"Neither five nor three."
```

#### 三元运算符

`if` 有条件地执行语句。三元运算符（更准确但不太常用，称为“三元条件运算符”）是一种简写形式，用于有条件地执行表达式。顾名思义，三元运算符是唯一使用三个运算数的 JavaScript 运算符：

* 要评估的条件，后跟问号 (`?`)。
* 当条件求值为 `true` 后跟英文冒号 (`:`) 时要执行的表达式。
* 条件求值为 `false` 时要执行的表达式。

此函数常用于有条件地设置或传递值：

```javascript
const myFirstResult  =true  ?"First value.":"Second value.";
const mySecondResult =false?"First value.":"Second value.";

myFirstResult;
>"First value."

mySecondResult;
>"Second value."
```

### `switch`…`case`

使用 `switch` 语句将表达式的值与使用一个或多个 `case` 关键字定义的可能值列表进行比较。这种语法并不常见，因为它源于 JavaScript 最早的一些设计决策。`switch`...`case` 语法使用 `switch` 关键字，后跟要计算的表达式（用圆括号括起来），再后跟一对匹配的大括号。`switch` 的正文可以包含 `case` 关键字（通常是一个或多个），后跟表达式或值，再后跟冒号 (`:`)。

当解释器达到 `case`，其值与 `switch` 关键字后面的圆括号中要评估的表达式匹配时，解释器会执行该 `case` 子句后面的所有语句：

```javascript
switch(2+2===4){
  casefalse:
    console.log("False.");
  casetrue:
    console.log("True.");
}
>"True."
```

系统会执行匹配的 `case` 之后的所有语句，即使它们包含在[块语句](/blogs/web/javascript/introduction#block-statements)中也是如此。

```javascript
switch(2+2===4){
    casefalse:
    console.log("False.");
  casetrue:
    let myVariable ="True.";
    console.log( myVariable );

}
>"True."
```

使用 `switch…case` 的一个隐患是，在找到匹配项之后，JavaScript 解释器会执行位于所匹配 `case` 之后的任何语句，甚至是其他 `case` 子句中的语句。这称为“回退”到下一个 `case`：

```javascript
switch(2+2===7){
    casefalse:
    console.log("False.");
  casetrue:
    console.log("True.");
}
>"False."
>"True."
```

为防止掉落，请使用 `break` 关键字结束每种情况，该关键字会立即停止对 `switch` 正文的评估：

```javascript
switch(2+2===7){
    casefalse:
    console.log("False.");
    break;
  casetrue:
    console.log("True.");
    break;
}
>"False."
```

如果没有 `case` 与条件值匹配，则 `switch` 会选择 `default` 子句（如果有）：

```javascript
switch(20){
    case5:
    console.log("The value was five.");
    break;
  case10:
    console.log("The value was ten.");
    break;
  default:
    console.log("The value was something unexpected.");
}
>"The value was something unexpected."
```

但是，跳跃功能也会应用于 `default`，这可能会导致意外结果。如需解决此问题，请使用 `break` 作为 `default` 语句结尾，或将其放在 case 列表末尾。

```javascript
switch(20){
  default:
    console.log("The value was something unexpected.");
  case10:
    console.log("The value was ten.");
    break;
  case5:
    console.log("The value was five.");
    break;
}
>The value was something unexpected.
>The value was ten.
```

由于 `case` 子句不需要使用[块语句](/blogs/web/javascript/introduction#block-statements)来对多个语句进行分组，因此 `case` 和 `default` 子句本身不会创建[词法范围](/blogs/web/javascript/data-types/variable#scope)：

```javascript
let myVariable;
switch(true){
  casetrue:
    let myVariable ="True.";
    break;
  default:
    let myVariable ="False.";
    break;
}
>UncaughtSyntaxError: redeclaration of let myVariable
```

如需管理范围，请使用块语句：

```javascript
let myVariable;
switch(true){
  casetrue:{
    let myVariable ="True.";
    break;
  }
  default:{
    let myVariable ="False.";
    break;
  }
}
```

## 循环和迭代

循环允许您在满足某个条件或者一直重复一组语句，直到满足某个条件。使用循环以固定次数执行一组指令，直到实现特定结果，或解释器到达可迭代数据结构的末尾（例如，数组、映射或集的最后一个元素、对象的最后一个属性或字符串中的最后一个字符）。

循环会通过迭代一组语句来中断脚本的“从上到下”流程，直到满足一个或多个条件或不再满足条件，具体取决于用于创建循环的语法。循环结束后，系统会继续执行它后面的语句。在以下示例中，在解释器继续执行之前，循环正文中的语句执行了三次：

```javascript
let iterationCount =0;
console.log("Pre-loop.");
while( iterationCount <3){
  iterationCount++;
  console.log("Loop iteration.");
}
console.log("Continuing on.");
>"Pre-loop."
>"Loop iteration."
>"Loop iteration."
>"Loop iteration."
>"Continuing on."
```

如果在循环执行期间无法满足条件，则循环将无限期地继续下去。这些无限循环是一种常见的编程误区，会导致[主执行线程](/blogs/web/javascript/appendix#main-thread)无限期地暂停，甚至让浏览器标签页崩溃。

只要布尔值 `true` 保持 `true` 状态，以下示例就会执行。由于[布尔值不可变](/blogs/web/javascript/data-types/boolean)，这会形成无限循环。

**警告** ：执行以下代码可能会导致浏览器速度变慢或当前浏览器标签页崩溃。

```javascript
console.log("Pre-loop.");
while(true){
console.log("Loop iteration.");
}
>"Pre-loop."
>"Loop iteration."
>"Loop iteration."
>"Loop iteration."
>"Loop iteration."
>"Loop iteration."
…
```

避免在生产代码中留下无限循环。如果您在开发期间不小心创建了一个代码，可以关闭它所在的浏览器标签页，更新代码，使循环不再无限循环，然后重新打开相应页面，从而解决此问题。

### `while`

`while` 循环是使用 `while` 关键字后跟一对包含要求值条件的匹配圆括号创建的。如果指定条件最初的求值结果为 `true`，系统会执行位于这些圆括号后面的语句（或[块语句](/blogs/web/javascript/introduction#block-statements)）。否则，循环永远不会运行。每次迭代后，都会重新评估条件，如果仍为 `true`，则循环重复。

```javascript
let iterationCount =0;
while( iterationCount <3){
  iterationCount++;
  console.log(`Loop ${ iterationCount }.`);
}
>"Loop 1."
>"Loop 2."
```

如果解释器在 `while` 循环中发现 `continue` 语句，则会停止该迭代，重新评估条件，并在可能的情况下继续循环：

```javascript
let iterationCount =0;
while( iterationCount <=5){
  iterationCount++;
  if( iterationCount ===3){
    continue;
  }
  console.log(`Loop ${ iterationCount }.`);
}
console.log("Loop ended.");
>"Loop 1."
>"Loop 2."
>"Loop 4."
>"Loop 5."
>"Loop ended."
```

如果解释器在 `while` 循环中找到 `break` 语句，则该迭代会停止，并且不会重新评估条件，从而允许解释器继续执行操作：

```javascript
let iterationCount =1;
while( iterationCount <=5){
  if( iterationCount ===3){
    console.log(`Iteration skipped.``);`
    break;
  }
  console.log(`Loop ${ iterationCount }.`);
  iterationCount++;
}
console.log("Loop ended.");
>"Loop 1."
>"Loop 2."
>"Iteration skipped.
> "Loop ended."
```

您可以使用 `while` 迭代指定次数，如上例所示，但 `while` 最常见的用例是长度不确定的循环：

```javascript
let randomize =()=>Math.floor(Math.random()*10);
let randomNum = randomize();
while( randomNum !==3){
  console.log(`The number is not ${ randomNum }.`);
  randomNum = randomize();
}
console.log(`The correct number, ${ randomNum }, was found.`);
>"The number is not 0."
>"The number is not 6."
>"The number is not 1."
>"The number is not 8."
>"The correct number, 3, was found."
```

### `do`…`while`

`do`...`while` 是 `while` 循环的变体，其中条件评估在循环的每次迭代的*结束*时发生。这意味着循环正文始终至少执行一次。

如需创建 `do`...`while` 循环，请使用 `do` 关键字，后跟要在循环每次迭代时执行的语句（或块语句）。[](/blogs/web/javascript/introduction#block-statements)在该语句之后，立即添加 `while` 和包含要评估的条件的匹配圆括号。如果此条件的求值结果不再为 `true`，则循环结束。

```javascript
let iterationCount =1;
do{
  console.log(`Loop ${ iterationCount }.`);
  iterationCount++;
}while( iterationCount <3);
>"Loop 1."
>"Loop 2."
>"Loop 3."
```

与 `while` 循环一样，`do`...`while` 最常见的用例是长度不确定的循环：

```javascript
let randomNum;
do{
  randomNum =(()=>Math.floor(Math.random()*10))();
  console.log(`Is the number ${ randomNum }?`);
}while( randomNum !==3);
console.log(`Yes, ${ randomNum } was the correct number.`);
>"Is the number 9?"
>"Is the number 2?"
>"Is the number 8?"
>"Is the number 2?"
>"Is the number 3?"
>"Yes, 3 was the correct number."
```

### `for`

使用 `for` 循环对已知数量进行迭代。在旧版代码库中，这经常用于迭代数组中的元素。

如需创建 `for` 循环，请使用 `for` 关键字，后跟一对圆括号，这些圆括号按顺序接受以下三个表达式，并以英文分号分隔：

1. 循环开始时要计算的表达式
2. 确定循环是否应继续的条件
3. 每个循环结束时要执行的表达式

在这些圆括号后面，添加要在循环期间执行的语句（通常是[块语句](/blogs/web/javascript/introduction#block-statements)）。

```javascript
for( let i =0; i <3; i++){
  console.log("This loop will run three times.")
}
```

第一个表达式初始化一个充当计数器的变量。此表达式在循环的第一次迭代之前计算一次。您可以像使用任何其他变量一样使用 `let`（过去，使用 `var`）初始化此变量，其作用域是循环正文。这些变量可以具有任何有效标识符，但通常用 `i` 来表示“迭代”或“索引”。这似乎与[关于可预测标识符名称的既定最佳做法](/blogs/web/javascript/data-types/variable)相悖，但惯例已经足够成熟，让其他开发者一眼就能明白。由于[已编入索引的集合都为零索引](/blogs/web/javascript/collections/indexed)，因此这些变量的初始值几乎总是 `0`。

与其他形式的循环一样，条件是一个表达式，用于确定是否应执行循环。这最常用于设置迭代计数器的上限。解释器在首次执行 `for` 循环之前评估条件。如果条件最初未求值为 `true`，则不执行循环正文。

最终表达式会在循环每次迭代结束时执行。它通常用于将标识符递增 1。

在旧版代码库中，最常见的情况是 `for` 循环在数组之间迭代。在这些情况下，指定用于继续循环的条件是迭代计数小于或等于正在迭代的数组的长度。用于跟踪当前迭代计数的变量用于查找数组中与该索引关联的值，以便按顺序对数组中的每个元素执行操作：

```javascript
var myArray =[true,false,true];
for( let i =0; i <= myArray.length; i++){
  console.log( myArray[ i ]);
}
>true
>false
>true
```

这种方法已经被淘汰，取而代之的是更现代的遍历[可迭代数据结构](/blogs/web/javascript/control-flow#iterators)的方法。

#### `for` **[.**.**.**] `of` **[.**.**.**]

使用 `for`...`of`... 循环来遍历[可迭代数据结构](/blogs/web/javascript/control-flow#iterators)（如数组、集或映射）中存储的值。

`for`...`of`... 循环使用 `for` 关键字，后跟一组包含变量的圆括号，接着是 `of`，然后是迭代的数据结构。该变量可以是使用 `let`、`const` 或 `var` 在此处执行的声明，也可以是之前在当前范围内声明的变量、对象属性或[解构赋值](/blogs/web/javascript/collections/indexed#destructuring-assignment)实例。它包含与循环的当前迭代相对应的元素值。

```javascript
const myIterable =[true,false,true];
for(const myElement of myIterable ){
  console.log( myElement );
}
>true
>false
>true
```

在此示例中，即使 `myElement` 在循环的每次迭代中被赋予新值，对 `myElement` 使用 `const` 也有效。这是因为使用 `let` 或 `const` 声明的变量的作用域限定为循环中的块语句。该变量在每次迭代开始时初始化，并在迭代结束时移除。

#### `for`…`in`…

使用 `for`...`in`... 循环来迭代对象的可枚举属性，包括可枚举继承的属性。与 `for`...`of`... 循环一样，`for`...`in`... 循环使用 `for` 关键字，后跟一对圆括号，其中包含一个变量，该变量包含与循环的当前迭代相对应的属性键的值。此变量后跟 `in` 关键字，然后是正在迭代的对象：

```javascript
const myObject ={"myProperty":true,"mySecondProperty":false};
for(const myKey in myObject ){
  console.log( myKey );
}
>"myProperty"
>"mySecondProperty"
```

同样，尽管 `myKey` 的值会随循环的每次迭代而变化，但您可以放心地使用 `const`，因为系统会在每次迭代结束时有效地舍弃变量，并在开始时重新创建变量。

`for`...`in`... 语法不能直接使用与每个属性键关联的值。不过，由于循环在每次迭代中都可以访问属性键，因此您可以使用该键“查询”其值：

```javascript
const myObject ={"myProperty":true,"mySecondProperty":false};
for(const myKey in myObject ){
  const myValue = myObject[ myKey ];
  console.log(`${ myKey } : ${ myValue }`);
}
>"myProperty : true"
>"mySecondProperty : false"
```

从内置构造函数继承的属性是不可枚举的，这意味着 `for`...`in`... 不会遍历从 `Object` 构造函数继承的属性。但是，对象[原型链](/blogs/web/javascript/objects/property-descriptors)中的任何可枚举属性都会包含在内：

```javascript
const myPrototype ={"protoProperty":true};
const myObject =Object.create( myPrototype,{
    myProperty:{
    value:true,
    enumerable:true
    }
});
for(const myKey in myObject ){
  const myValue = myObject[ myKey ];
  console.log(`${ myKey } : ${ myValue }`);
}
>"myProperty : true"
>"protoProperty : true"
```

JavaScript 提供了内置方法来确定某个属性是否为对象的直接属性，而不是对象原型链上的属性：[现代](https://caniuse.com/mdn-javascript_builtins_object_hasown) `Object.hasOwn()` 和旧版 `Object.prototype.hasOwnProperty()` 方法。这些方法用于评估指定属性是否被继承（或未声明），仅针对指定对象的直接属性返回 `true`：

```javascript
const myPrototype ={"protoProperty":true};
const myObject =Object.create( myPrototype,{
    myProperty:{
    value:true,
    enumerable:true
    }
});
for(const myKey in myObject ){
  const myValue = myObject[ myKey ];
  if(Object.hasOwn( myObject, myKey )){
    console.log(`${ myKey } : ${ myValue }`);
  }
}
>"myProperty : true"
```

此外，还有三个静态方法，每个方法会返回一个由对象的可枚举键 (`Object.keys()`)、值 (`Object.values()`) 或键值对 (`Object.entries()`) 组成的数组：

```javascript
const myObject ={"myProperty":true,"mySecondProperty":false};
Object.keys( myObject );
>Array["myProperty","mySecondProperty"]
```

这样，您就可以迭代对象的键、值或键值对（使用[解构赋值](/blogs/web/javascript/collections/indexed#destructuring-assignment)），而无需包含该对象原型所拥有的属性：

```javascript
const myPrototype ={"protoProperty":"Non-enumerable property value."};
const myObject =Object.create( myPrototype,{
    myProperty:{
    value:"Enumerable property value.",
    enumerable:true
    }
});

for(const propKey of Object.keys( myObject )){
  console.log( propKey );
}
>"myProperty"

for(const propValue of Object.values( myObject )){
  console.log( propValue );
}
>"Enumerable property value."

for(const[ propKey, propValue ] of Object.entries( myObject )){
  console.log(`${ propKey } : ${ propValue }`);
}
>"myProperty : Enumerable property value."
```

#### `forEach()`

[Array](/blogs/web/javascript/collections/indexed#array)、[Map](/blogs/web/javascript/collections/keyed#map)、[Set](/blogs/web/javascript/collections/keyed#set) 和 NodeList 构造函数提供的 `forEach()` 方法为在回调函数的上下文中迭代数据结构提供了有用的简写形式。与其他形式的循环不同，使用任何 `forEach()` 方法创建的循环无法使用 `break` 或 `continue` 来中断。

`forEach` 是每个数据结构的原型所拥有的方法。每个 `forEach` 方法都需要将回调函数作为参数，但在调用该函数时包含的参数方面略有不同。第二个可选参数用于指定要用作回调函数调用上下文的 `this` 值。

与 `Array.forEach` 配合使用的回调函数提供了包含当前元素的值、当前元素的索引以及调用 `forEach` 方法的数组的参数：

```javascript
const myArray =[true,false];
myArray.forEach(( myElement, i, originalArray )=>{
  console.log( i, myElement, originalArray  );
});
>0trueArray(3)[true,false]
>1falseArray(3)[true,false]
```

与 `Map.forEach` 配合使用的回调函数提供的参数包含与当前元素关联的值、与当前元素关联的键以及调用 `forEach` 方法的映射：

```javascript
const myMap =newMap([
  ['myKey',true],
  ['mySecondKey',false],
]);
myMap.forEach(( myValue, myKey, originalMap )=>{
    console.log( myValue, myKey, originalMap  );
});
>true"myKey"Map{ myKey →true, mySecondKey →false}
>false"mySecondKey"Map{ myKey →true, mySecondKey →false}
```

`Set.forEach` 回调包含类似的参数。由于 Set 没有与值不同的索引或键，因此第二个参数提供了一个可忽略的冗余值，严格来说是为了确保语法与其他 `forEach` 方法保持一致。

```javascript
const mySet =newSet([true,false]);
mySet.forEach(( myValue, myKey, originalSet )=>{
  console.log( myValue, myKey, originalSet  );
});
>truetrueSet[true,false]
>falsefalseSet[true,false]
```

### 迭代器

可迭代对象是由各个元素组成的任何数据结构，可以使用之前介绍的方法进行迭代。迭代器是一种遵循*迭代器协议*的可迭代对象，这意味着它必须实现一个 `next()` 方法，每次调用该方法时，它每次包含一个元素，从而以特定格式为每个序列元素返回一个对象。

JavaScript 的内置可迭代数据结构（例如 [Array](/blogs/web/javascript/collections/indexed#array)、[Map](/blogs/web/javascript/collections/keyed#map) 和 [Set](/blogs/web/javascript/collections/keyed#set)）本身并不是迭代器，但它们都继承了 `iterator` 方法，可通过`@@iterator` [知名符号](/blogs/web/javascript/data-types/symbol#well-known)进行访问，该方法会返回根据可迭代数据结构创建的迭代器对象：

```javascript
const myIterable =[1,2,3];
const myIterator = myIterable[Symbol.iterator ]();

myIterable;
>(3)[1,2,3]

myIterator;
>ArrayIterator{}
```

对迭代器调用 `next()` 方法会逐一遍历它所包含的元素，每次调用都会返回一个对象，其中包含以下两个属性：`value`（包含当前元素的值）和 `done`（布尔值，告诉我们迭代器是否已传递数据结构中的最后一个元素）。仅当调用 `next()` 导致尝试访问超出迭代器中最后一个元素的元素时，`done` 的值为 `true`。

```javascript
const myIterable =[1,2,3];
const myIterator = myIterable[Symbol.iterator ]();

myIterator.next();
>Object{ value:1,done:false}

myIterator.next();
>Object{ value:2,done:false}

myIterator.next();
>Object{ value:3,done:false}

myIterator.next();
>Object{ value:undefined,done:true}
```

#### 生成器函数

使用 `function*` 关键字（注意星号）可声明生成器函数或定义生成器函数表达式：

```javascript
function* myGeneratorFunction(){};
```

与[迭代器](/blogs/web/javascript/control-flow#iterators)一样，生成器函数也保持状态。调用生成器函数会返回一个新的 Generator 对象，但不会立即执行函数正文中的代码：

```javascript
function* myGeneratorFunction(){
  console.log("Generator function body ")
};
const myGeneratorObject = myGeneratorFunction();

myGeneratorObject;
>Generator{  }

typeof myGeneratorObject;
>"object"
```

生成器对象遵循[迭代器协议](/blogs/web/javascript/control-flow#iterators)。每次对生成器函数调用 `next()` 时返回的值都由 `yield` 表达式确定，该表达式会暂停生成器函数的执行并返回包含 `yield` 关键字的表达式的值。之后对 `next()` 的调用会继续执行该函数，在下一个 `yield` 表达式处暂停并返回关联的值。

```javascript
function* myGeneratorFunction(){
  yield"My first yielded value.";
  yield"My second yielded value.";
};
const myGeneratorObject = myGeneratorFunction();

myGeneratorObject.next();
>Object{ value:"My first yielded value.",done:false}

myGeneratorObject.next();
>Object{ value:"My second yielded value.",done:false}
```

如果在没有使用 `yield`、`return` 或 `throw` 指定更多值后调用 `next()`（如果发生错误），函数正文的其余部分会执行，返回的对象 `value` 为 `undefined`，`done` 属性为 `true`：

```javascript
function* myGeneratorFunction(){
    console.log("Start of the generator function.");
    yield"First";
    console.log("Second part of the generator function."  );
    yield"Second";
    console.log("Third part of the generator function.");
    yield"Third";
};
const myGeneratorObject = myGeneratorFunction();

myGeneratorObject.next();
>"Start of the generator function."
>Object{ value:"First",done:false}

myGeneratorObject.next();
>"Second part of the generator function."
>Object{ value:"Second",done:false}

myGeneratorObject.next();
>"Third part of the generator function."
>Object{ value:"Third",done:false}

myGeneratorObject.next();
>Object{ value:undefined,done:true}
```

请仅对生成器函数返回的对象使用 `next()`，不要对生成器函数本身使用。否则，每次调用生成器函数都会创建一个新的生成器对象：

```javascript
function* myGeneratorFunction(){
  yield"First";
  yield"Second";
};

myGeneratorFunction().next();
>Object{ value:"First",done:false}

myGeneratorFunction().next();
>Object{ value:"First",done:false}
```

与任何函数一样，生成器函数会在遇到 `return` 关键字时停止。然后，它会向调用上下文返回一个对象，其中包含返回值和值为 `true` 的 `done` 属性。

```javascript
function* myGeneratorFunction(){
  yield1;
  yield2;
  return3;
};
const myGeneratorObject = myGeneratorFunction();

myGeneratorObject.next().done;
>Object{ value:1,done:false}

myGeneratorObject.next().done;
>Object{ value:2,done:false}

myGeneratorObject.next();
>Object{ value:3,done:true}
```

`yield` 表达式可以采用标识符的某些语义，允许与生成器函数的挂起部分进行双向“通信”。将值作为参数传递给生成器的 `next()` 方法时，它会替换与上一个已暂停的 `yield` 表达式关联的值：

```javascript
function* myGeneratorFunction(){
    const firstYield =yield;
    yield firstYield +10;
};
const myGeneratorObject = myGeneratorFunction();

myGeneratorObject.next();
>Object{ value:undefined,done:false}

myGeneratorObject.next(5);
>Object{ value:15,done:false}
```

请注意，这会替换与上一个 `yield` 关联的整个表达式，而不仅仅是将上一个 `yield` 的值重新赋值给 `next()` 中指定的值：

```javascript
function* myGeneratorFunction(){
    const firstYield =yield;
    const secondYield =yield firstYield +100;
    yield secondYield +10;
};
const myGeneratorObject = myGeneratorFunction();

myGeneratorObject.next();
>Object{ value:undefined,done:false}

myGeneratorObject.next(10);// Can be thought of as changing the value of the `firstYield` variable to `10
>Object{ value:110,done:false}

myGeneratorObject.next(20);// Can be thought of as changing the value of the `secondYield` variable to `20`, _not_ `20 + 100;`
>Object{ value:30,done:false}
```

传递给 `next()` 的首次调用的任何参数都会被忽略，因为没有上一个 `yield` 表达式可接受该值。与任何其他函数一样，传递给初始生成器函数调用的参数在生成器函数正文的整个作用域内都可用：

```javascript
function* myGeneratorFunction( startingValue ){
    let newValue =yield startingValue +1;
    newValue =yield newValue +10;
    yield startingValue +20;
};
const myGeneratorObject = myGeneratorFunction(2);

myGeneratorObject.next(1);
>Object{ value:3,done:false}

myGeneratorObject.next(5);
>Object{ value:15,done:false}

myGeneratorObject.next(10);
Object{ value:22,done:false}
```

`yield*`（请注意星号）运算符与可迭代对象（例如另一个生成器函数）结合使用，用于迭代并生成其运算数返回的每个值：

```javascript
function* mySecondaryGenerator(){
  yield2;
  yield3;
}

function* myGenerator(){
  yield1;
  yield* mySecondaryGenerator();
  yield4;
  return5;
}

const myIterator = myGenerator();

myIterator.next();
>Object{ value:1,done:false}

myIterator.next();
>Object{ value:2,done:false}

myIterator.next();
>Object{ value:3,done:false}

myIterator.next();
>Object{ value:4,done:false}

myIterator.next();
>Object{ value:5,done:true}
```

## 异步 JavaScript

虽然 JavaScript 在执行过程中从本质上是[同步](/blogs/web/javascript/appendix#main-thread)，但有一些机制可让开发者利用[事件循环](/blogs/web/javascript/appendix#event-loop)来执行异步任务。

### promise

promise 是创建 promise 时未知的值的占位符。它是一个容器，规定了异步操作、操作被视为成功或失败的术语、在两种情况下应执行的操作，以及产生的值。

使用带有内置 `Promise` 构造函数的 `new` 运算符创建 Promise 实例。此构造函数接受名为 *executor* 的函数作为参数。该执行器函数通常用于执行一项或多项异步操作，然后指定 Promise 应被视作成功执行或拒绝的条款。当执行器函数运行时，Promise 定义为 *待处理* 。执行程序完成后，如果执行程序函数及其执行的异步操作已成功完成，则 Promise 被视为已执行（在某些来源中，或已解析）；如果执行程序函数遇到错误，或正在执行的异步操作失败，则视为  *rejected* 。Promise 被实现或拒绝后，会被视为“已解决”。

```javascript
const myPromise =newPromise(()=>{});
```

该构造函数使用两个参数调用执行器函数。这些参数是可让您手动执行或拒绝 Promise 的函数：

```javascript
const  myPromise =newPromise(( fulfill, reject )=>{});
```

用于执行或拒绝 Promise 的函数使用 Promise 的结果值作为参数（通常是拒绝错误）调用：

```javascript
const myPromise =newPromise(( fulfill, reject )=>{
  const myResult =true;
  setTimeout(()=>{
    if( myResult ===true){
        fulfill("This Promise was successful.");    
    }else{
        reject(newError("This Promise has been rejected."));
    }
  },10000);
});

myPromise;
>Promise{<state>:"pending"}

myPromise;
>Promise{<state>:"fulfilled",<value>:"This Promise was successful."}
```

#### Promise 链

可以使用从 Promise 构造函数继承的 `then()`、`catch()` 和 `finally()` 方法来对生成的 Promise 对象执行操作。上述每个方法都会返回一个 Promise，您可以再次使用 `then()`、`catch()` 或 `finally()` 对该前者执行操作，从而让您能够*链接*生成的 Promise。

`then()` 提供了两个回调函数作为参数。前者用于实现生成的 Promise，后者用于拒绝它。这两种方法都接受一个参数，该参数为生成的 Promise 提供相应的值。

```javascript
const myPromise =newPromise(( fulfill, reject )=>{
  const myResult =true;
  setTimeout(()=>{
    if( myResult ===true){
        fulfill("This Promise was fulfilled.");    
    }else{
        reject(newError("This Promise has been rejected."));
    }
  },100);
});

myPromise.then( successfulResult => console.log( successfulResult ), failedResult => console.error( failedResult ));
>"This Promise was successful."
```

您还可以使用 `then()` 仅处理已履行状态，并使用 `catch` 处理遭拒状态。使用包含 promise 的拒绝方法中提供的值的一个参数调用 `catch`：

```javascript
const myPromise =newPromise(( fulfill, reject )=>{
  const myResult =false;
  setTimeout(()=>{
    if( myResult ===true){
        fulfill("This Promise was fulfilled.");    
    }else{
        reject(newError("This Promise has been rejected."));
    }
  },100);
});

myPromise
  .then( fulfilledResult => console.log(fulfilledResult ))
  .catch( rejectedResult => console.log( rejectedResult ))
  .finally(()=> console.log("The Promise has settled."));
>"Error: This Promise has been rejected."
>"The Promise has settled."
```

`then` 和 `catch` 允许处理程序函数在 Promise 被满足或拒绝时运行，与后者不同，无论 Promise 是否被实现或拒绝，系统都会调用作为参数传递给 `finally` 方法的函数。调用处理程序函数时不使用任何参数，因为它不适用于从 Promise 传递的值，而只用于在 Promise 完成后执行代码。

#### 并发

promise 构造函数提供四种方法，用于通过包含 promise 对象的 [iterable](/blogs/web/javascript/control-flow#iterators) 处理多个相关的 promise。这两个方法各自返回一个 promise，该 promise 根据传递给它的 promise 的状态来执行或拒绝。例如，`Promise.all()` 会创建一个仅在传递给该方法的每个 Promise 得到履行时才执行的 Promise：

```javascript
const firstPromise  =newPromise(( fulfill, reject )=> fulfill("Successful. "));
const secondPromise =newPromise(( fulfill, reject )=> fulfill("Successful. "));
const thirdPromise  =newPromise(( fulfill, reject )=> fulfill("Successful. "));
const failedPromise =newPromise(( fulfill, reject )=> reject("Failed."));
const successfulPromises =[ firstPromise, secondPromise, thirdPromise ];
const oneFailedPromise =[ failedPromise,...successfulPromises ];

Promise.all( successfulPromises )
  .then(( allValues )=>{
    console.log( allValues );
  })
  .catch(( failValue )=>{
    console.error( failValue );
  });
>Array(3)["Successful. ","Successful. ","Successful. "]

Promise.all( oneFailedPromise  )
    .then(( allValues )=>{
      console.log( allValues );
    })
    .catch(( failValue )=>{
     console.error( failValue );
    });
>"Failed."
```

Promise 并发方法如下：

`Promise.all()`仅当所有提供的 Promise 都得到满足时才执行。`Promise.any()`如果提供的任何一个 Promise 得到满足，就执行；仅当所有 Promise 都被拒绝时，才会被拒绝。`Promise.allSettled()`当 promise 已结清时执行，无论结果如何。`Promise.race()`根据第一个要解决的 Promise 的结果而被拒绝或已执行，忽略所有后续解决的 Promise。#### `async`/`await`

在[函数声明](/blogs/web/javascript/functions)或[函数表达式](/blogs/web/javascript/functions/function-expressions)前面使用 `async` 关键字时，函数返回的任何值都将作为包含该值的已执行 Promise 返回。这样，您就可以使用与同步开发相同的工作流来运行和管理异步操作。

```javascript
async function myFunction(){
  return"This is my returned value.";
}

myFunction().then( myReturnedValue => console.log( myReturnedValue ));
>"This is my returned value."
```

`await` 表达式会在关联的 Promise 结清后暂停异步函数的执行。稳定 Promise 后，`await` 表达式的值就是 Promise 的已执行或拒绝值。

```javascript
async function myFunction(){
  const myPromise  =newPromise(( fulfill, reject )=>{ setTimeout(()=> fulfill("Successful. "),5000);});
  const myPromisedResult = await myPromise;
  return myPromisedResult;
}

myFunction()
  .then( myResult => console.log( myResult ))
  .catch( myFailedResult => console.error( myFailedResult ));
>"Successful."
```

`await` 表达式中包含的任何非 Promise 值都将作为已履行的 Promise 返回：

```javascript
async function myFunction(){
  const myPromisedResult = await "String value.";
  return myPromisedResult;
}

myFunction()
  .then( myResult => console.log( myResult ))
  .catch( myFailedResult => console.error( myFailedResult ));
>"String value."
```
