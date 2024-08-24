---
date: 2024-03-31
category: javascript
tag:
  - extends
  - class
---
# 扩展类


`extends` 关键字用于在类声明或表达式中创建一个类，该类充当另一个类的子类，其父类（有时称为“基类”）充当子类（有时称为“子类”或“派生类”）的原型。

```javascript
classParentClass{}
classChildClassextendsParentClass{}

Object.getPrototypeOf(ChildClass);
>classParentClass{}
```

这些子类继承父类的属性和方法。这样，您就可以扩展类的核心功能以实现更具体的用途，而无需重载父类以适应所有可能的用例，或重新实现具有类似用途的代码。

子类可以提供自己从父类继承的方法的实现：

```javascript
classMyClass{
  constructor( myPassedValue ){
    this.instanceProp = myPassedValue;
  }
  classMethod(){
    console.log(`The value was '${ this.instanceProp }.'`)
  }
}
classChildClassextendsMyClass{
  classMethod(){
    console.log(`The value was '${ this.instanceProp },' and its type was '${ typeof this.instanceProp }.'`)
  }
}

const myParentClassInstance =newMyClass("My string.");
const mySubclassInstance =newChildClass(100);

myParentClassInstance.classMethod();
>"The value type was 'string.'"

mySubclassInstance.classMethod();
>"The value was '100,' and its type was 'number.'"
```

您还可以使用 `super` 在子类的上下文中调用在父类中定义的方法：

```javascript
classMyClass{
  constructor( myPassedValue ){
    this.instanceProp = myPassedValue;
  }
  classMethod(){
    console.log(`The value was '${ this.instanceProp }.'`)
  }
}

classChildClassextendsMyClass{
  subclassMethod(){
    super.classMethod();
    console.log(`The value type was '${ typeof this.instanceProp }.'`)
  }
}
const mySubclassInstance =newChildClass(100);

mySubclassInstance.subclassMethod();
>The value was '100.'
>The value type was 'number.'
```

如前面的示例所示，当子类的上下文中省略 `constructor()` 方法时，JavaScript 的隐式构造函数将连同同一组参数一起调用父构造函数。不过，如果子类中存在构造函数，则该构造函数必须先调用 `super()` 以及所有必要的参数，然后才能引用 `this`。

```javascript
classMyClass{
  constructor( myPassedValue ){
    this.instanceProp = myPassedValue;
  }
  classMethod(){
    console.log(`The value was '${ this.instanceProp }.'`)
  }
}

classChildClassextendsMyClass{
    constructor( myPassedValue ){
        super( myPassedValue );
        this.modifiedProp = myPassedValue +50;
    }\
    subclassMethod(){
        super.classMethod();
        console.log(`The value type was '${ typeof this.instanceProp }.'`)
    }
}
const mySubclassInstance =newChildClass(100);

mySubclassInstance;
>MyClass{ instanceProp:100, modifiedProp:150}
```

getter 和 setter 是专门用于分别检索和定义值的特殊方法。通过使用 `get` 和 `set` 关键字定义的方法，您可以创建能够像静态属性一样与之互动的方法。

```javascript
classMyClass{
    constructor( originalValue ){
        this.totalValue =0;
    }
    set doubleThisValue( newValue ){
        this.totalValue = newValue *2;
    }
    get currentValue(){
        console.log(`The current value is: ${ this.totalValue }`);
    }
}
const myClassInstance =newMyClass();

myClassInstance;
>MyClass{ totalValue:0}

myClassInstance.doubleThisValue =20;

myClassInstance.currentValue;
>The current value is:40
```

`get` 和 `set` 属性是在类的原型属性中定义的，因此可用于类的所有实例。