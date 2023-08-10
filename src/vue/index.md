
### Vue的基本原理
当一个Vue实例创建时，Vue会遍历data中的属性，用Object.defineProperty（vue3.0使用proxy）将它们转为getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的watcher程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。

### 双向数据绑定的原理
Vue.js是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：
1. 需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化。
2. compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图。
3. Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:①在自身实例化时往属性订阅器(dep)里面添加自己②自身必须有一个update()方法③待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。
4. MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化->视图更新；视图交互变化(input)->数据model变更的双向绑定效果。

### MVVM MVC MVP 的区别
MVC、MVP 和 MVVM 是三种常见的软件架构设计模式，主要通过分离关注点的方式来组织代码结构，优化开发效率。

在开发单页面应用时，往往一个路由页面对应了一个脚本文件，所有的页面逻辑都在一个脚本文件里。页面的渲染、数据的获取，对用户事件的响应所有的应用逻辑都混合在一起，这样在开发简单项目时， 可能看不出什么问题，如果项目变得复杂，那么整个文件就会变得冗 长、混乱，这样对项目开发和后期的项目维护是非常不利的。

1. MVC
MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。 其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据， 以及对相应数据的操作。并且 View 和 Model 应用了观察者模式， 当 Model 层发生改变的时候它会通知有关 View 层更新页面。
Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修 改，然后 Model 层再去通知 View 层更新。

2. MVVM
MVVM 分为 Model、View、ViewModel： Model 代表数据模型，数据和业务逻辑都在 Model 层中定义； View 代表 UI 视图，负责数据的展示； ViewModel 负责监听 Model 中数据的改变并且控制视图的更新，处理 用户交互操作； Model 和 View 并无直接关联，而是通过 ViewModel 来进行联系的， Model 和 ViewModel 之间有着双向数据绑定的联系。因此当 Model 中 的数据改变时会触发 View 层的刷新，View 中由于用户交互操作而改 变的数据也会在 Model 中同步。 这种模式实现了 Model 和 View 的数据自动同步，因此开发者只需要专注于数据的维护操作即可，而不需要自己操作 DOM。

3. MVP
MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。在 MVC 模式中使用观察者模式，来实现当 Model 层数据发生变化的时候，通知 View 层的更新。这样 View 层和 Model 层耦合在一起， 当项目逻辑变得复杂的时候，可能会造成代码的混乱，并且可能会对代码的复用性造成一些问题。MVP 的模式通过使用 Presenter 来实 现对 View 层和 Model 层的解耦。MVC 中的 Controller 只知道 Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中， View 层的接口暴露给了 Presenter 因此可以在 Presenter 中将 Model 的变化和 View 的变化绑定在一起，以此来实现 View 和 Model 的同步更新。这样就实现了对 View 和 Model 的解耦， Presenter 还包含了其他的响应逻辑。