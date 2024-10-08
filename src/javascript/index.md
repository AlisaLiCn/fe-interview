
### JavaScript的数据类型及它们的区别
参考题解：

JavaScript 共有八种数据类型，分别是 Undefined、Null、Boolean、 Number、String、Object、Symbol、BigInt。

其中 Symbol 和 BigInt 是 ES6 中新增的数据类型：
- Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。
- BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数， 使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围

这些数据可以分为基本数据类型和引用数据类型：
- 基本数据类型（Undefined、Null、Boolean、Number、String、Symbol、BigInt），基本数据类型是一种既非对象也无方法或属性的数据，它们的值不能被修改。
- 引用数据类型（对象、数组和函数）

两种类型的区别在于存储位置的不同：
- 基本数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

堆和栈的概念存在于数据结构和操作系统内存中，

在数据结构中：
- 在数据结构中，栈中数据的存取方式为先进后出。
- 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

在操作系统中，内存被分为栈区和堆区：
- 栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
- 堆区内存一般由开发者分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。

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
function isObject(o) {
  return typeof o === 'object' && o !== null
}

function myInstanceof(left, right) {
  // 非对象类型 返回false
  if(!isObject(left)) return false
  
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

### 对原型及原型链的理解
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

### 创建对象的方式有哪些
一般使用字面量的形式直接创建对象，但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js 和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是可以使用函数来进行模拟，从而产生出可复用的对象创建方式，常见的有以下几种：

1. 第一种是工厂模式，工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系。
2. 第二种是构造函数模式。js 中每一个函数都可以作为构造函数， 只要一个函数是通过 new 来调用的，那么就可以把它称为构造函数。 执行构造函数首先会创建一个对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象， 最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此可以使用 this 给对象赋值。 构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中包含函数的话，那么每次都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。
3. 第三种模式是原型模式，因为每一个函数都有一个 prototype 属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如 Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。
4. 第四种模式是组合使用构造函数模式和原型模式，这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的 解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好。
5. 第五种模式是动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。
6. 第六种模式是寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型， 在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。

### 对象继承的方式有哪些
1. 第一种是以原型链的方式来实现继承，但是这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享， 容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传 递参数。
2. 第二种方式是使用借用构造函数的方式，这种方式是通过在子 类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不 能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函 数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到。
3. 第三种方式是组合继承，组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属 性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我 们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性。
4. 第四种方式是原型式继承，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象， 然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。
5. 第五种方式是寄生式继承，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本， 然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这 个对象不是自定义类型时。缺点是没有办法实现函数的复用。
6. 第六种方式是寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式 组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。


### 对作用域及作用域链的理解
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

### call apply bind的区别
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

### for...in 和 for...of 的区别
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

### 异步编程的实现方式
JavaScript中的异步机制可以分为以下几种：
- 回调函数的方式，使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护。
- Promise的方式，使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用， 可能会造成代码的语义不够明确。
- generator的方式，它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部还可以将执行权转移回来。当遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕时再将执行权给转移回来。因此在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式需要考虑的问题是何时将函数的控制权转移回来，因此需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行。
- async 函数的方式，async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。


### 对Promise的理解
Promise 是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，他的出现大大改善了异步编程的困境，避免了地狱回调， 它比传统的解决方案回调函数和事件更合理和更强大。

所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的API， 各种异步操作都可以用同样的方法进行处理。

1. Promise 的实例有三个状态
- Pending（进行中） 
- Resolved（已完成） 
- Rejected（已拒绝）
当把一件事情交给 promise 时，它的状态就是 Pending，任务完成了，状态就变成了 Resolved、没有完成失败了就变成了 Rejected。

2. Promise 的实例有两个过程
- pending -> fulfilled : Resolved（已完成）
- pending -> rejected：Rejected（已拒绝）
注意：一旦从进行状态变成为其他状态就永远不能更改状态了。

**Promise的特点**
- 对象的状态不受外界影响。promise 对象代表一个异步操作，有三种状态，pending（进行中）、fulfilled（已成功）、rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也是 promise 这个名字的由来——“承诺”；
- 一旦状态改变就不会再变，任何时候都可以得到这个结果。promise 对象的状态改变，只有两种可能：从 pending 变为 fulfilled，从 pending 变为 rejected。这时就称为 resolved（已定型）。如果改变已经发生了，你再对 promise 对象添加回调函数，也会立即得到这个结果。这与事件（event）完全不同，事件的特点是：如果你错过了它，再去监听是得不到结果的。

Promise 的缺点：
无法取消 Promise，一旦新建它就会立即执行，无法中途取消。 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。 当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始 还是即将完成）

总结：
Promise 对象是异步编程的一种解决方案，最早由社区提出。Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。 一个 Promise 实例有三种状态，分别是 pending、resolved 和 rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者 rejected 状态，并且状态一经改变， 就凝固了，无法再被改变了。

状态的改变是通过 resolve() 和 reject() 函数来实现的，可以在 异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原 型上定义了一个 then 方法，使用这个 then 方法可以为两个状态的 改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的 末尾执行。

注意：在构造 Promise 的时候，构造函数内部的代码是立即执行的

### 对async await的理解
async/await 其实是 Generator 的语法糖，它能实现的效果都能用 then 链来实现，它是为优化 then 链而开发出来的。
从字面上来看， async 是“异步”的简写，await 则为等待，所以很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。当然语法上强制规定 await 只能出现在 asnyc 函数中。

```javascript
async function testAsync() {
  return 'hello, world'
}
let result = testAsync()
console.log(result)

```

执行上述代码，可以看出，async 函数（包含 函数语句、函数表达式、Lambda 表达式）返回的事一个 Promise 对象， 如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。

async 函数返回的是一个 Promise 对象，所以在最外层不能用 await 获取其返回值的情况下，当然应该用原来的方式：then() 链来处理这个 Promise 对象，就像这样：
```javascript
async function testAsync() {
  return 'hello, world'
}
let result = testAsync()
console.log(result)
result.then(data => {
   console.log(data) // hello, world
})
```

如果 async 函数没有返回值，它会返回 Promise.resolve(undefined)。

联想一下 Promise 的特点——无等待，所以在没有 await 的情况下执行 async 函数，它会立即执行，返回一个 Promise 对象，并且， 绝不会阻塞后面的语句。这和普通返回 Promise 对象的函数并无二致。

注意：Promise.resolve(x) 可以看作是 new Promise(resolve => resolve(x)) 的简写，可以用于快速封装字面量对象或其他对象，将其封装成 Promise 实例。

### async await 对比 Promise 的优势
- 代码读起来更加同步，Promise 虽然摆脱了回调地狱，但是 then 的链式调⽤也会带来额外的阅读负担。
- Promise 传递中间值⾮常麻烦，⽽async/await⼏乎是同步的写法，⾮常优雅。
- 错误处理友好，async/await 可以⽤成熟的 try/catch，Promise 的错误捕获⾮常冗余。
- 调试友好，Promise 的调试很差，由于没有代码块，你不能在⼀个返回表达式的箭头函数中设置断点，如果你在⼀个.then 代码块中使⽤调试器的步进(step-over)功能，调试器并不会进⼊后续的.then 代码块，因为调试器只能跟踪同步代码的每⼀步。

### ES Module与CommonJS模块有什么异同

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

### 哪些情况会导致内存泄漏
以下四种情况会造成内存的泄漏：
- 意外的全局变量：由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。
- 被遗忘的计时器或回调函数：设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收。
- 脱离 DOM 的引用：获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。
- 闭包：不合理的使用闭包，从而导致某些变量一直被留在内存当中。
