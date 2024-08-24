---
date: 2024-03-31
category: javascript
tag:
  - function
---
# return 关键字

使用 `return` 可指定函数应生成为最终结果的值。当解释器到达 `return` 语句时，包含该语句的函数会立即结束，并将指定的值返回到调用该函数的上下文：

```javascript
const myFunction =function(){
   return2+2;
}

myFunction();
>4
```

与变量类似，返回值的函数可被有效地视为其包含的数据：

```javascript
const myFunction =function(){
   return2+2;
}

myFunction()+ myFunction();
>8
```

不含表达式的 `return` 语句会结束函数并返回 `undefined`：

```javascript
const myFunction =function(){
   return;
}

myFunction();
>undefined
```

由于 `return` 关键字会发出信号来表明函数结束，因此所遇到的 `return` 后面的任何代码都不会执行：

```javascript
const myFunction =function(){
   returntrue;
   console.log("This is a string.");
}

myFunction();
>true
```

此外，在遇到的 `return` 语句后的代码可能会导致在某些浏览器的开发控制台中收到警告（而不是错误）：

```javascript
const myFunction =function(){
   returntrue;
   console.log("This is a string.");
}
> unreachable code after return statement

myFunction();
>true
```

同样，这仅适用于函数执行期间遇到的 `return` 语句，而不适用于 `return` 语句后面的任何代码：

```javascript
const myFunction =function( myParameter ){
   if( myParameter ===undefined){
    return"This is the result.";
   }
   return"This is the alternate result.";
}

myFunction();
>"This is the result."

myFunction(true);
>"This is the alternate result."
```

与在函数末尾使用单个 `return` 语句相比，使用早期 `return` 来“短路”函数可使代码更简洁。例如，以下函数确定传递的值是否为包含五个或更多字符的字符串。如果传递的值不是字符串字面量，则无需使用计算字符数量的代码，并且该函数可以立即返回 `false` 结果：

```javascript
function myFunction( myString ){
   if(typeof myString !=="string"){
    returnfalse;
   }
   if( myString.length >=5){
    returntrue;
   }else{
    returnfalse;
   }
}

myFunction(100);
>false

myFunction("St");
>false

myFunction("String.");
>true
```

[箭头函数表达式](/web/javascript/functions/function-expressions#arrow-functions)的独特之处在于，当箭头函数正文包含单个表达式且不包含块语法时，系统会暗示 `return` 关键字：

```javascript
const myFunction =()=>2+2;

myFunction();
>4
```

如果您使用块语法来定义箭头函数正文，则必须使用显式 `return`，即使函数正文仅包含一个表达式也是如此：

```javascript
const myFunction =()=>{2+2};

myFunction();
>undefined
```

```javascript
const myFunction =()=>{return2+2};

myFunction();
>4
```
