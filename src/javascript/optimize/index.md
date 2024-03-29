### 懒加载的概念
懒加载也叫做延迟加载、按需加载，指的是在长网页中延迟加载图片、数据，是一种较好的网页性能优化的方式。在比较长的网页或应用中，如果图片很多，所有的图片都被加载出来，而用户只能看到可视窗口的那一部分图片数据，这样就浪费了性能。

如果使用图片的懒加载就可以解决以上问题。在滚动屏幕之前，可视化区域之外的图片不会进行加载，在滚动屏幕时才加载。这样使得网页的加载速度更快，减少了服务器的负载。懒加载适用于图片较多，页面列表较长（长列表）的场景中。

懒加载的特点：
- 减少无用资源的加载：使用懒加载明显减少了服务器的压力和流量，同时也减小了浏览器的负担。 
- 提升用户体验: 如果同时加载较多图片，可能需要等待的时间较长，这样影响了用户体验，而使用懒加载就能大大的提高用户体验。
- 防止加载过多图片而影响其他资源文件的加载：会影响网站应用的正常使用。

### 懒加载的实现原理
图片的加载是由src引起的，当对src赋值时，浏览器就会请求图片资源。根据这个原理，我们使用HTML5的data-xxx属性来储存图片的路径，在需要加载图片的时候，将data-xxx中图片的路径赋值给src，这样就实现了图片的按需加载，即懒加载。

注意：data-xxx中的xxx可以自定义，这里我们使用data-src来定义。

懒加载的实现重点在于确定用户需要加载哪张图片，在浏览器中，可视区域内的资源就是用户需要的资源。所以当图片出现在可视区域时，获取图片的真实地址并赋值给图片即可。

使用原生JavaScript实现懒加载：
- window.innerHeight 是浏览器可视区的高度 
- document.body.scrollTop、document.documentElement.scrollTop是浏览器滚动过的距离
- imgs.offsetTop是元素顶部距离文档顶部的高度（包括滚动条的距离）
- 图片加载条件：img.offsetTop < window.innerHeight + document.body.scrollTop;

```html
<div class="container">
  <img src="loading.gif" data-src="pic1.png">
  <img src="loading.gif" data-src="pic2.png">
  <img src="loading.gif" data-src="pic3.png">
  <img src="loading.gif" data-src="pic4.png">
  <img src="loading.gif" data-src="pic5.png">
</div>

<script>
var imgs = document.querySelectorAll('img')
function lazyLoad() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  var winHeight = window.innerHeight
  for(var i = 0; i < imgs.length; i++) {
    if(imgs[i].offsetTop < scrollTop + winHeight) {
        imgs[i].src = imgs[i].getAttribute['data-src']
    }
  }
}

window.onscroll = lazyLoad()
</script>
```

### 对防抖和节流的理解
- 函数防抖是指在事件被触发n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
- 函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在scroll函数的事件监听上，通过事件节流来降低事件调用的频率。

防抖函数的应用场景：
- 按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次。
- 服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次，还有搜索联想词等类似功能，可以参考使用lodash.debounce。

节流函数的适⽤场景： 
- 拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动。
- 缩放场景：监控浏览器resize事件。
- 动画场景：避免短时间内多次触发动画引起性能问题。
