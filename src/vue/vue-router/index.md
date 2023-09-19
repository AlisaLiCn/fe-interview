### 路由的hash和history模式区别
Vue-Router有两种模式：hash模式和history模式。默认的路由模式是hash模式。

1. hash模式 
- 简介： hash模式是开发中默认的模式，它的URL带着一个#，例如： http://www.abc.com/#/vue，它的hash值就是#/vue。 
- 特点：hash 值会出现在URL 里面，但是不会出现在HTTP请求中，对后端完全没有影响。所以改变hash值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的IE浏览器也支持这种模式。hash路由被称为是前端路由，已经成为SPA（单页面应用）的标配。 
- 原理： hash模式的主要原理就是onhashchange()事件：使用onhashchange()事件的好处就是，在页面的hash值发生变化时，无需向后端发起请求，window就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash值变化对应的URL都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的hash值和对应的URL关联起来了。
```javascript
window.onhashchange = function(event){
  console.log(event.oldURL, event.newURL)
  let hash = location.hash.slice(1)
}
```

2. history模式
- 简介：history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。
- 特点：当使用history模式时，URL就像这样：http://abc.com/user/id。相比hash模式更加好看。但是，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回404。 
- API：history api可以分为两大部分，切换历史状态和修改历史状态：修改历史状态： 
  - 包括了HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了url，但浏览器不会立即向后端发送请求。如果要做到改变url但又不刷新页面的效果，就需要前端用上这两个API。
  - 切换历史状态： 包括 forward()、back()、go()三个方法，对应浏 览器的前进，后退，跳转操作。
- 虽然 history 模式丢弃了丑陋的#。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出404来。如果想要切换到history模式，就要进行以下配置（后端也要进行配置）：
```javascript
const router = new VueRouter({
    mode: 'history',
    routes: [...]
})
```

3. 两种模式对比 
调用history.pushState()相比于直接修改hash，存在以下优势: 
- pushState()设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，因此只能设置与当前URL同文档的URL；
- pushState()设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
- pushState()通过stateObject参数可以添加任意类型的数据到记录中；而hash只可添加短字符串； pushState()可额外设置title属性供后续使用。 
- hash模式下，仅hash符号之前的url会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回404错误；history模式下，前端的url必须和实际向后端发起请求的url一致，如果没有对应的路由处理，将返回404错误。

hash模式和history模式都有各自的优势和缺陷，还是要根据实际情况选择性的使用。

### vue-router跳转和location.href有什么区别
使用location.href=/url来跳转，简单方便，但是刷新了页面；使用history.pushState(/url)，无刷新页面，静态跳转；

引进router，然后使用router.push(/url)来跳转，使用了diff算法，实现了按需加载，减少了dom的消耗。其实使用router跳转和使用history.pushState()没什么差别的，因为vue-router就是用了 history.pushState()，尤其是在history模式下。