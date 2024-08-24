---
date: 2024-03-31
category: javascript
tag:
  - colections
  - map
  - weakMap
  - set
  - weakSet
---
# 键控集合

您可以使用对象字面量来存储键值对，并使用数组来存储值的可迭代集合。ES6 还引入了专门的数据结构，以适合更精细的用例：映射用于键值对，而设置用于单个值。

## 地图

Map 是一种可迭代数据结构，以键值对的形式存储信息，类似于对象字面量。与对象字面量不同，Map 允许值和键具有任何数据类型，并且在对其进行迭代时，添加到 Map 中的顺序元素会得到保留。

如需创建映射，请使用 `Map()` 构造函数：

```javascript
const myMap =newMap();

myMap;
>Map(0)
```

您可以采用类似于数组（或任何[迭代对象](/web/javascript/control-flow#iterators)）的语法，在地图中预填充数据，该数组包含由两个元素组成的类似数组的对象。这两个元素数据结构中每个元素的第一个元素都成为键，而第二个元素则成为与该键关联的值。实际上，最简单的形式是一个数组，其中每个元素本身都是由两个元素组成的数组，即要添加到映射的元素的键和值：

```javascript
const myMap =newMap([
    ["myKey","A string value"],
    ["mySecondKey",500],
    ["myThirdKey",true]
]);

myMap;
>Map(3){'myKey'=>'A string value','mySecondKey'=>500,'myThirdKey'=>true}
```

同样，Map 对象与对象字面量的不同之处在于，值和键都可以采用任何数据类型和值：

```javascript
const notAFunction =()=> console.log("function");
const myMap =newMap([
  [null,0],
  [false,"This is false"],
  [undefined,"No defined value"],
  [NaN,"Not a number"]
]);

myMap;
>Map(4){null=>0,false=>'This is false',undefined=>'No defined value',NaN=>'Not a number'}
```

如需获取、设置或删除地图元素，请使用从 `Map` 构造函数继承的方法：

```javascript
const myMap =newMap();

myMap;
>Map(0)

myMap.set("myKey","My value.");

myMap.has("myKey");
>true

myMap.get("myKey");
"My value."

myMap.delete("myKey");

myMap;
>Map(0)
```

映射中的键是唯一的，这意味着设置相同的键会覆盖之前存储的键值对：

```javascript
const myMap =newMap([["myKey","A string value"]]);

myMap.set("myKey",500);

myMap;
>Map(1){'myKey'=>500}
```

与对象一样，您可以向使用 `const` 声明的变量分配地图，然后修改该地图。不过，与其他 `const` 用例一样，您无法更改或删除变量本身：

```javascript
const myMap =newMap();
myMap.set("myKey","A string value");

myMap;
>Map(1){'myKey'=>500}
```

### WeakMap

WeakMap 是一种包含“弱”[references](/web/javascript/appendix#by-reference-by-value)的映射，这些引用必须是对尚未添加到全局符号注册表中的对象或[符号](/web/javascript/data-types/symbol)的引用。

如需创建 WeakMap，请使用 `WeakMap()` 构造函数：

```javascript
const myWeakMap =newWeakMap();

myWeakMap;
>WeakMap(0)
```

WeakMap 的语法与 Map 类似，但 WeakMaps 不可[迭代](/web/javascript/control-flow#iterators)，如果尝试将除对象或符号以外的任何值用作键，就会导致语法错误。如果 WeakMap 之外不存在对某个键的[references](/web/javascript/appendix#by-reference-by-value)，该对象或符号以及 WeakMap 中的关联值都符合[垃圾回收](/web/javascript/appendix#memory-allocation)条件。

这支持多种用例，例如使用对对象的引用作为键，在 WeakMap 中存储与对象关联的元数据。如果没有其他引用指向此对象，并且该对象已从内存中移除，关联的元数据也会被移除。

## 字符集

集是不重复值的可迭代集合，有点类似于数组，不过集只能包含唯一值。与 Map 一样，遍历 Set 会保留按顺序添加元素的顺序。

如需创建 Set，请使用 `Set()` 构造函数：

```javascript
const mySet =newSet();

mySet;
>Set[]
```

您还可以从数组字面量创建 Set：

```javascript
const mySet =newSet([1,2,3]);

mySet;
>Set(3)[1,2,3]
```

由于集合不允许存在重复的元素，因此如果集合是根据包含相同值的多个实例的数组创建的，则该集合仅保留该值的第一个实例：

```javascript
const mySet =newSet([1,2,3,2]);

mySet;
>Set(3)[1,2,3]
```

如需向 Set 添加或移除元素，请使用从 `Set` 构造函数继承的方法。这些方法会根据元素本身的值对元素执行操作，而不是引用索引：

```javascript
const mySet =newSet();

mySet.add("My value.");

mySet;
>Set["My value."]

mySet.has("My value.");
>true

mySet.delete("My value.");

mySet;
>Set[]
```

虽然集不是编入索引的集合，也不适合这样使用，但集合中的元素会按照插入顺序进行迭代[](/web/javascript/control-flow#iterators)。系统会跳过尝试向集添加重复元素值的操作，并保留原始广告订单：

```javascript
const mySet =newSet([1,2,3]);

mySet;
>Set(3)[1,2,3]

mySet.add(2);
>Set(3)[1,2,3]
```

如需基于 Set 创建数组，请使用 `Array.from()` 方法或扩展语法：

```javascript
const mySet =newSet([1,2,3]);
const myArray =Array.from( mySet );

myArray;
>Array(3)[1,2,3]

[...mySet ];
>Array(3)[1,2,3]
```

### WeakSet

WeakSet 是仅包含[可回收值](/web/javascript/appendix#memory-allocation)的集，例如对尚未添加到全局符号注册表的对象或[符号](/web/javascript/data-types/symbol)的引用。

如需创建 WeakSet，请使用 `WeakSet()` 构造函数：

```javascript
const myWeakSet =newWeakSet();

myWeakSet;
>WeakSet[]
```

WeakSet 语法与 Set 类似，但 WeakSet 不可[迭代](/web/javascript/control-flow#iterators)，并且尝试添加除对象或符号以外的任何值都会导致语法错误。与 WeakMap 一样，当没有任何对 WeakSet 所引用的值的其他[references](/web/javascript/appendix#by-reference-by-value)时，该值将符合[垃圾回收](/web/javascript/appendix#memory-allocation)条件。

这适用于各种用例，例如聚合相关对象的单个可迭代集合。如果没有其他对 WeakSet 所引用的对象的引用，相关元素也会从 WeakSet 中移除。
