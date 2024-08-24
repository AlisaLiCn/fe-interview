import{_ as e,r as t,a,Q as i}from"./chunks/framework.ce73d6a4.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vue/vuex/index.md","filePath":"vue/vuex/index.md"}'),o={name:"vue/vuex/index.md"},u=i('<h3 id="vuex的基本原理" tabindex="-1">Vuex的基本原理 <a class="header-anchor" href="#vuex的基本原理" aria-label="Permalink to &quot;Vuex的基本原理&quot;">​</a></h3><p>Vuex是一个专为Vue.js 应用程序开发的状态管理模式。每一个Vuex应用的核心就是store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态( state )。</p><p>Vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应地得到高效更新。</p><p>改变store中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。</p><p>Vuex为Vue Components建立起了一个完整的生态圈，包括开发中的API调用一环。</p><ol><li>核心流程中的主要功能：</li></ol><ul><li>Vue Components 是 vue 组件，组件会触发（dispatch）一些事件或动作，也就是图中的 Actions;</li><li>在组件中发出的动作，肯定是想获取或者改变数据的，但是在 vuex 中，数据是集中管理的，不能直接去更改数据，所以会把这个动作提交（Commit）到 Mutations 中;</li><li>然后Mutations就去改变（Mutate）State中的数据;</li><li>当State中的数据被改变之后，就会重新渲染（Render）到 Vue Components 中去，组件展示更新后的数据，完成一个流程。</li></ul><ol start="2"><li>各模块在核心流程中的主要功能</li></ol><ul><li>Vue Components∶ Vue组件。HTML页面上，负责接收用户操作等交互行为，执行 dispatch 方法触发对应 action 进行回应。</li><li>dispatch∶ 操作行为触发方法，是唯一能执行 action 的方法。</li><li>actions∶ 操作行为处理模块。负责处理 Vue Components 接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台 API 请求的操作就在这个模块中进行，包括触发其他 action 以及提交 mutation 的操作。该模块提供了 Promise 的封装，以支持 action 的链式触发。</li><li>commit∶ 状态改变提交操作方法。对 mutation 进行提交，是唯一能执行 mutation 的方法。</li><li>mutations∶ 状态改变操作方法。是Vuex修改state的唯一推荐方法， 其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些hook暴露出来，以进行state的监控等。</li><li>state∶ 页面状态管理容器对象。集中存储Vuecomponents中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用Vue的细粒度数据响应机制来进行高效的状态更新。</li><li>getters∶ state对象读取方法。图中没有单独列出该模块，应该被包含在了render中，Vue Components通过该方法读取全局state对象。</li></ul><p>总结：Vuex实现了一个单向数据流，在全局拥有一个State存放数据，当组件要更改State中的数据时，必须通过Mutation提交修改信息， Mutation同时提供了订阅者模式供外部插件调用获取State数据的更新。而当所有异步操作（常见于调用后端接口异步获取更新数据）或批量的同步操作需要走Action ，但Action也是无法直接修改State的，还是需要通过Mutation来修改State的数据。最后，根据State的变化，渲染到视图上。</p><h3 id="vuex和localstorage区别" tabindex="-1">Vuex和localStorage区别 <a class="header-anchor" href="#vuex和localstorage区别" aria-label="Permalink to &quot;Vuex和localStorage区别&quot;">​</a></h3><ol><li><p>最重要的区别 vuex存储在内存中，localstorage则以文件的方式存储在本地，只能存储字符串类型的数据，存储对象需要JSON的stringify和parse方法进行处理。读取内存比读取硬盘速度要快。</p></li><li><p>应用场景 Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex用于组件之间的传值。 localstorage是本地存储，是将数据存储到浏览器的方法，一般是在跨页面传递数据时使用。 Vuex能做到数据的响应式，localstorage不能。</p></li><li><p>永久性 刷新页面时vuex存储的值会丢失，localstorage不会。 注意：对于不变的数据确实可以用localstorage可以代替vuex，但是当两个组件共用一个数据源（对象或数组）时，如果其中一个组件改变了该数据源，希望另一个组件响应该变化时，localstorage无法做到，原因就是区别1。</p></li></ol><h3 id="vuex和redux的异同" tabindex="-1">Vuex和Redux的异同 <a class="header-anchor" href="#vuex和redux的异同" aria-label="Permalink to &quot;Vuex和Redux的异同&quot;">​</a></h3><p>Vuex和Redux区别：</p><ul><li>Vuex改进了Redux中的Action和Reducer函数，以mutations变化函数取代Reducer，无需switch，只需在对应的mutation函数里改变state值即可。</li><li>Vuex由于Vue自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的State即可。</li><li>Vuex数据流的顺序是：View调用store.commit提交对应的请求到Store中对应的mutation函数-&gt;store改变（vue检测到数据变化自动渲染）。</li><li>通俗点理解就是，vuex弱化dispatch，通过commit进行store状态的一次更变；取消了action概念，不必传入特定的action形式进行指定变更；弱化reducer，基于commit参数直接对数据进行转变，使得框架更加简易；</li></ul><p>共同思想：</p><ul><li>单—的数据源</li><li>变化可以预测</li><li>本质上：redux与vuex都是对mvvm思想的服务，将数据从视图中抽离的一种方案；</li><li>形式上：vuex借鉴了redux，将store作为全局的数据中心，进行mode管理；</li></ul><h3 id="为什么使用vuex或redux" tabindex="-1">为什么使用Vuex或Redux <a class="header-anchor" href="#为什么使用vuex或redux" aria-label="Permalink to &quot;为什么使用Vuex或Redux&quot;">​</a></h3><p>由于传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致代码无法维护。</p><p>所以需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为。</p><p>另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，代码将会变得更结构化且易维护。</p><h3 id="vuex有哪几种属性" tabindex="-1">Vuex有哪几种属性 <a class="header-anchor" href="#vuex有哪几种属性" aria-label="Permalink to &quot;Vuex有哪几种属性&quot;">​</a></h3><p>有五种，分别是 State、 Getter、Mutation 、Action、 Module</p><ul><li>state =&gt; 基本数据(数据源存放地)</li><li>getters =&gt; 从基本数据派生出来的数据</li><li>mutations =&gt; 提交更改数据的方法</li><li>actions =&gt; 像一个装饰器，包裹mutations，使之可以异步。</li><li>modules =&gt; 模块化Vuex</li></ul><h3 id="vuex和单纯的全局对象有什么区别" tabindex="-1">Vuex和单纯的全局对象有什么区别 <a class="header-anchor" href="#vuex和单纯的全局对象有什么区别" aria-label="Permalink to &quot;Vuex和单纯的全局对象有什么区别&quot;">​</a></h3><ul><li>Vuex的状态存储是响应式的。当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会相应地得到高效更新。</li><li>不能直接改变store中的状态。改变store中的状态的唯一途径就是显式地提交(commit)mutation。这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。</li></ul><h3 id="为什么vuex的mutation中不能做异步操作" tabindex="-1">为什么Vuex的mutation中不能做异步操作 <a class="header-anchor" href="#为什么vuex的mutation中不能做异步操作" aria-label="Permalink to &quot;为什么Vuex的mutation中不能做异步操作&quot;">​</a></h3><ul><li>Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过Action来提交mutation实现，这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。</li><li>每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现time-travel了。</li><li>如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。</li></ul>',28),l=[u];function r(n,s,x,c,d,m){return t(),a("div",null,l)}const V=e(o,[["render",r]]);export{h as __pageData,V as default};
