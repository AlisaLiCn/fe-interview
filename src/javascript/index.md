
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

### [对原型、原型链的理解](#对原型原型链的理解)
在 JavaScript 中是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性，它的属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。
一般来说不应该能够获取到这个值的，但是现在浏览器中都实现了 __proto__ 属性来访问这个属性，但是最好不要使用这个属性，因为它不是规范中规定的。
ES5 中新增了一个 Object.getPrototypeOf() 方法，可以通过这个方法来获取对象的原型。

当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype 所以新建的对象时能够使用 toString() 等方法。 

特点：JavaScript 对象是通过引用来传递的，创建的每个新对象实体中并没有一份属于自己的原型副本。当修改原型时，与之相关的对象也会继承这一改变。

**原型链的终点：**
由于 Object 是构造函数，原型链终点 Object.prototype.__proto__， 而 Object.prototype.__proto__=== null // true，所以，原型链的终点是 null。原型链上的所有原型都是对象，所有的对象最终都是由 Object 构造的，而 Object.prototype 的下一级是 Object.prototype.__proto__。

```javascript
console.log(Object.prototype.__proto__) // null
```

### 对作用域、作用域链的理解
1. 全局作用域和函数作用域 

全局作用域
- 最外层函数和最外层函数外面定义的变量拥有全局作用域 
- 所有未定义直接赋值的变量自动声明为全局作用域 
- 所有 window 对象的属性拥有全局作用域 
- 全局作用域有很大的弊端，过多的全局作用域变量会污染全局命名空间，容易引起命名冲突。

函数作用域
- 函数作用域声明在函数内部的变量，一般只有固定的代码片段可以访问到
- 作用域是分层的，内层作用域可以访问外层作用域，反之不行

2. 块级作用域
- 使用 ES6 中新增的 let 和 const 指令可以声明块级作用域
- 块级作用域可以在函数中创建也可以在一个代码块中的创建（由{ }包裹的代 码片段）
- let 和 const 声明的变量不会有变量提升，也不可以重复声明 在循环中比较适合绑定块级作用域，这样就可以把声明的计数器变量限制在循环内部。

3. 作用域链
在当前作用域中查找所需变量，但是该作用域没有这个变量，那这个变量就是自由变量。
如果在自己作用域找不到该变量就去父级作用域查找，依次向上级作用域查找，直到访问到 window 对象就被终止， 这一层层的关系就是作用域链。

作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，可以访问到外层环境的变量和函数。

作用域链本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。
作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。 

当查找一个变量时，如果当前执行环境中没有找到，可以沿着作用域链向后查找。

### 对this对象的理解
this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。

第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。

第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时， this 指向这个对象。

第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。

第四种是apply 、 call和bind调用模式，这三个方法都可以显示地指定调用函数的 this 指向。其中 apply 方法接收两个参数： 一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数， 第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。 也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

这四种方式，使用构造器调用模式的优先级最高，然后是 apply、call 和 bind 调用模式，然后是方法调用模式，然后是函数调用模式。

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

### call、apply、bind的区别
call、apply的作用一样，区别仅在于传入参数的形式的不同。 
- apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向， 第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传递给被调用的函数。 
- call 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数。

bind
- bind()方法创建一个新的函数，在调用时设置this关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。
- 返回值：返回一个原函数的拷贝，并拥有指定的this值和初始参数。

**区别**
- call和apply立即执行，bind不立即执行
- call和apply接收参数方式不同

**应用场景**
call和apply：
- 数据类型判断：Object.prototype.toString.call()几乎可以判断所有类型的数据
- 继承：借用构造函数，在子类型中调用父类型的函数

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
