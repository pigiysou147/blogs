---
date: 2024-03-31
category: javascript
tag:
  - class
---
# 类字段和方法

## 字段

类字段直接在类的正文中声明，而不是显式添加为 `this` 值的属性。但结果是相同的：在该类的实例上定义一个属性。

```javascript
classMyClass{
    myField;
}

const myClassInstance =newMyClass();

myClassInstance;
>MyClass{ myField:undefined}
```

您可以使用值初始化字段。这通常是类中的逻辑可以覆盖的默认值：

```javascript
classMyClass{
    myResult =false;
    set setValue( myValue ){
        this.myResult = myValue;
    }
}
const myClassInstance =newMyClass();

myClassInstance;
>Object{ myResult:false}

myClassInstance.setValue =true;

myClassInstance;\
>Object{ myResult:true}
```

类字段在功能上与使用 `this` 附加到类的属性相同。这意味着，您可以像任何其他属性一样从类外部访问和修改它们。

```javascript
classMyClass{
    myField =true;
}

const myClassInstance =newMyClass();

myClassInstance.myField;
>true

myClassInstance.myField =false;

myClassInstance.myField;
>false;
```

字段为类的一些更高级功能提供了基础。

## 私有字段和方法

*Private* 字段和方法在类外无法访问。私有属性与类的实例相关联，这意味着每个实例都包含自己的一组私有字段和方法（在类中定义）。

如需将属性设为私有，请在声明时将 `#` 添加到标识符的开头：

```javascript
classMyClass{
    #myPrivateField = true;
    #myPrivateMethod() {}
}
const myClassInstance =newMyClass();

myClassInstance;
>MyClass{#myPrivateField: true }
    #myPrivateField: true
    <prototype>:Object{…}
        constructor:classMyClass{}
        <prototype>:Object{…}
```

私有字段必须在所包含类的正文中声明。您稍后可以将其值作为 `this` 的属性进行更改，但您无法使用 `this` 创建该字段。

私有字段无法从脚本中的其他位置访问。这样可以防止数据属性在提供的 getter 和 setter 方法之外被更改，以与其包含的值进行交互，还可以阻止直接访问仅用于类本身的方法。

```javascript
classMyClass{
    #myResult = false;
    set setValue( myValue ){
        this.#myResult = myValue;
    }
}
const myClassInstance =newMyClass();

myClassInstance;
>MyClass{#myResult: false }

myClassInstance.#myResult = true;
>UncaughtSyntaxError: reference to undeclared private field or method #myResult

myClassInstance.setValue =true;

myClassInstance;\
>MyClass{#myResult: true }
```

但请注意，浏览器的开发者控制台在允许出于调试目的而允许访问私有字段方面通常[非常宽松](https://developer.chrome.com/blog/new-in-devtools-111/)（虽然不一致）：

```javascript
classMyClass{
    #myPrivateField = true;
    #myPrivateMethod() {
        console.log("This is inside a private method.");
    }
}
const myClassInstance =newMyClass();

myClassInstance;
>MyClass{#myPrivateField: true}

myClassInstance.#myPrivateField;
>true

myClassInstance.#myPrivateMethod();
>"This is inside a private method."
```

```javascript
classMyClass{
    #myPrivateField = true;
    #myPrivateMethod() {
        console.log("This is inside a private method.");
    }
}
const myClassInstance =newMyClass();

myClassInstance;
>MyClass{#myPrivateField: true}

myClassInstance.#myPrivateField;
>UncaughtSyntaxError: reference to undeclared private field or method #myPrivateField

myClassInstance.#myPrivateMethod();
>UncaughtSyntaxError: reference to undeclared private field or method #myPrivateMethod
```

私有字段的作用域严格限定为包含它们的类的正文，这意味着即使是子类也无法访问与父类关联的私有字段：

```javascript
classMyClass{
    #myPrivateField = true;
}
classChildClassextendsMyClass{
    childMethod(){
        console.log(this.#myPrivateField );
    }
}
>UncaughtSyntaxError: reference to undeclared private field or method #myPrivateField
```

## 静态字段和方法

静态字段和方法是类本身的成员，而不是该类的*实例*的成员。因此，静态字段提供了一个中心点，用于存储类的每个实例不具有唯一性的数据，但这些实例可能需要引用这些数据（例如，共享配置信息）。静态方法通常是用于处理类实例的实用函数，例如根据它们包含的字段比较实例或对实例进行排序。

如需在类的正文中定义静态字段和方法，请使用 `static` 关键字：

```javascript
classMyClass{
    static myStaticField;
    static myStaticMethod(){}
}
const myClassInstance =newMyClass();
```

您还可以使用点表示法来创建静态方法：

```javascript
classMyClass{
    constructor(){}
}
MyClass.myStaticMethod =function(){}
```

您无法从其类的实例访问静态属性，但可以在类构造函数中使用这些属性：

```javascript
classMyClass{
    static myStaticField =true;
    static myStaticMethod(){
        console.log("A static method.");
    }
}
const myClassInstance =newMyClass();

myClassInstance.myStaticField;
>undefined

myClassInstance.myStaticMethod();
>UncaughtTypeError: myClassInstance.myStaticMethod isnot a function

MyClass.myStaticField;
>true

MyClass.myStaticMethod();
>"A static method."
```

从技术层面来讲，这些方法并不是必需的，但若要创建用于处理类实例的实用程序，使用静态方法是最佳实践。例如，专用于对类的实例进行排序的静态方法，或包含用于创建类实例然后返回类实例的任何必要设置的静态出厂方法：

```javascript
classUser{
    constructor( name, email ){
        this.name = name;
        this.email = email;
    }
    static fromObject( myObject ){
        returnnewUser( myObject.name, myObject.email ??"Omitted");
    }
}
const userObject ={
    "name":"My Name",
    "email":"my@email.address"
};
const secondUserObject ={
    "name":"My Name"
};

const firstUser =User.fromObject( userObject );
const secondUser =User.fromObject( secondUserObject );

firstUser;
>Object{ name:"My Name", email:"my@email.address"}

secondUser;
>Object{ name:"My Name", email:"Omitted"}
```
