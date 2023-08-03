
### [JavaScript有哪几种数据类型，它们的区别](#javascript有哪几种数据类型它们的区别)
参考题解：

JavaScript 共有八种数据类型，分别是 Undefined、Null、Boolean、 Number、String、Object、Symbol、BigInt。

其中 Symbol 和 BigInt 是 ES6 中新增的数据类型：
- Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
- BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数， 使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围

这些数据可以分为基本数据类型和引用数据类型：
- 栈：基本数据类型（Undefined、Null、Boolean、Number、String）
- 堆：引用数据类型（对象、数组和函数）

两种类型的区别在于存储位置的不同：
- 基本数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

堆和栈的概念存在于数据结构和操作系统内存中，

在数据结构中：
- 在数据结构中，栈中数据的存取方式为先进后出。
- 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

在操作系统中，内存被分为栈区和堆区：
- 栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
- 堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

### 检测数据类型的方式有哪些
1.typeof
```javascript
console.log(typeof 2) // number
console.log(typeof true) // boolean
console.log(typeof 'str') // string
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof function(){}) // function
console.log(typeof undefined) // undefined
console.log(typeof null) // object
```

其中数组、对象、null 都会被判断为 object，其他判断都正确。

2.instanceof
instanceof 可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。
```javascript
console.log(2 instanceof Number) // false
console.log(true instanceof Boolean) // false
console.log('str' instanceof String) // false

console.log([] instanceof Array) // true
console.log({} instanceof Object) // true
console.log(function(){} instanceof Function) // true
```

instanceof 只能正确判断引用数据类型，而不能判断基本数据类型。
instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。


3.constructor
constructor 有两个作用，一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。
需要注意，如果创建一个对象来改变它的原型，constructor 就不能用来判断数据类型了：

```javascript
var a = new Array()
console.log(a.constructor === Array) // true


function Fn(){}
Fn.prototype = new Array()
var f = new Fn()

console.log(f.constructor === Fn) // false
console.log(f.constructor === Array) // true
```

4.Object.prototype.toString.call()
Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型：

```javascript
var a = Object.prototype.toString;

console.log(a.call(2)) // [object Number]
console.log(a.call(true)) // [object Boolean]
console.log(a.call('str')) // [object String]
console.log(a.call([])) // [object Array]
console.log(a.call({})) // [object Object]
console.log(a.call(function(){})) // [object Function]
console.log(a.call(undefined)) // [object Undefined]
console.log(a.call(null)) // [object Null]
```

与obj.toString()不同，toString 是 Object 的原型方法，而 Array、function 等类型作为 Object 的实例，都重写了 toString 方法。不同的对象类型调用 toString 方法时，根据原型链的知识，调用的是对应的重写之后的 toString 方法（function 类型返回内容为函数体的字符串，Array 类型返回元素组成的字符串…），而不会去调用 Object 上原型 toString 方法（返回对象的具体类型），所以采用 obj.toString() 不能得到其对象类型，只能将 obj 转换为字符串类型；

因此，在想要得到对象的具体类型时，应该调用 Object 原型上的 toString 方法。

### null和undefined区别

Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。 

undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回undefined，null 主要用于赋值给一些可能会返回对象的变量，作为初始化。 

undefined 在 JavaScript 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。 

当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

### intanceof操作符的实现原理及代码实现
instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

实现1：
```javascript
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数的prototype属性
  let prototype = right.prototype

  while(true) {
    if(!proto) return false
    if(proto === prototype) return true
    // 如果没有找到，继续从其原型上找，Object.getPrototypeOf用来获取指定对象的原型
    proto = Object.getPrototypeOf(proto)
  }
}

```

实现2：
```javascript
function myInstanceof(left, right) {
  let proto = left.__proto__

  while (true) {
    if(proto === null) return false

    if(proto === right.prototype) return true

    proto = proto.__proto__
  }
}
```

### 箭头函数的this指向哪里
箭头函数不同于传统 JavaScript 中的函数，箭头函数并没有属于⾃⼰的 this，它所谓的 this 是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值，
并且由于没有属于⾃⼰的 this，所以是不会被 new 调⽤的，这个所谓的 this 也不会被改变。

用babel理解一下箭头函数：
```
// ES6
const obj = {
  getArrow() {
    return () => {
      console.log(this === obj)
    }
  }
}
```
转化后：
```
// ES5，由babel转译
var obj = {
  getArrow: function getArrow() {
    var _this = this
    return function() {
      console.log(_this === obj)
    }
  }
}

```

### [for...in 和 for...of 的区别](#for-in-和-for-of-的区别)
for...of 是 ES6 新增的遍历方式，允许遍历一个含有 iterator 接口的数据结构（可迭代对象，数组、对象等）并且返回各项的值，和 ES3 中的 for...in 的区别如下：

- for...in 获取的是对象的键名（Symbol除外），for...of 遍历获取的是对象的键值；
- for...in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for...of 只遍历当前对象不会遍历原型链； 
- 对于数组的遍历，for...in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for...of 只返回数组的下标对应的属性值； 


总结：for...in 循环主要是为了遍历对象而生，不适用于遍历数组； for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以 及 Generator 对象。

```javascript
for(let key in obj){
  //statements
}

for (variable of iterable) {
  //statements
}
```


### [ES Module与CommonJS模块有什么异同](#es-module与commonjs模块有什么异同)

ES Module 和 CommonJS 模块的区别： 
- CommonJs可以动态加载语句，代码发生在运行时；ES Module是静态的，不可以动态加载语句，只能声明在该文件的最顶部，代码发生在编译时。
- CommonJs导出值是对模块的浅拷贝，可以修改导出的值，会引起变量污染；ES Module是对模块的引用，只读只存，不能修改其值，也就是指针指向不能变，类似 const，但可以改变变量内部指针指向，
- 可以对 commonJS 重新赋值（改变指针指向），但是对 ES Module 赋值会编译报错。 

ES Module 和 CommonJS 模块的共同点： 
CommonJS 和 ES Module 都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进⾏改变。


**ES Module**

ES6模块加载规范

特点：编译时加载（静态加载），而不是CommonJS那种运行时加载，效率更高。

- ES Module是静态的，不可以动态加载语句，只能声明在该文件的最顶部，代码发生在编译时
- ES Module混合导出，单个导出，默认导出，完全互不影响
- ES Module导出是引用值之前都存在映射关系，并且值都是可读的，不能修改

**CommonJS规范**

nodejs的模块系统，参照CommonJS规范实现。

- `const fs = require('fs')`引入模块
- `module.exports = {}` 暴露模块
