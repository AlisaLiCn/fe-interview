# fe-interview
A collection of Front-End interview questions and study materials

* [HTML](#html)
  * [如何提高web可访问性](#如何提高web可访问性)
* [CSS](#css)
  * [图片布局：实现图片木桶布局（原百度图片布局方式）](#图片布局实现图片木桶布局原百度图片布局方式)
  * [如何通过CSS开启硬件加速来提高网站性能](#如何通过css开启硬件加速来提高网站性能)
* [JavaScript](#javascript)
  * [正则表达式：将数字转换为千分位分隔形式](#正则表达式将数字转换为千分位分隔形式)
  * [正则表达式：实现一个queryString方法，来获取URL中的参数](#正则表达式实现一个querystring方法来获取url中的参数)
  * [正则表达式：写一个获取颜色的正则表达式](#正则表达式写一个获取颜色的正则表达式)

## HTML
### 如何提高web可访问性
参考题解：  

提高web可访问性是一种能让更多的人使用我们的网站的做法，比如：让有视觉或听觉障碍的人群、移动设备用户、处于低速网络环境的人群也能正常使用网站。

web开发人员在开发的初期，就需要考虑可访问性相关的内容，以避免在后期难以改善。

提升可访问性的一些措施：
- 书写语义化的HTML结构：例如：正确使用标题、段落等元素来构建文本内容；使用HTML5的语义元素进行页面布局(如`<nav>` `<footer>`等)；
- 保证键盘的可访问性：表单元素、按钮、超链接等本身能被键盘访问，如果为了更好的UI效果而使用其他元素来代替，可以利用tabindex属性来重新建立键盘的可访问性；
- 为非语义化元素添加WAI-ARIA属性，来提供额外的语义化和可访问性，例如：role="button"等；
- 使用工具进行测试：例如：使用Mac系统自带的旁白功能，可以进行屏幕阅读效果的测试；使用在线工具或自动化工具对网站进行检测。

参考资料：
- [MDN - 无障碍](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility)
  
## CSS
### 图片布局：实现图片木桶布局（原百度图片布局方式）
参考题解：

木桶布局方式，图片每行高度相等、两端对齐，大致思路：
- 设定一个每行的初始高度，根据初始高度和图片宽度，计算每行的图片数量，使每行图片总宽度小于等于行宽
- 确定一行的图片数量后，再根据每张图片的宽高比例进行等比放大，计算出每张图片实际的宽高，保证图片撑满行宽
- 创建图片元素，根据每张图片的实际大小，设置尺寸样式，并根据所在行的序号设置图片绝对定位的位置

[图片木桶布局demo](https://github.com/AlisaLiCn/image-layout-demo)

### 如何通过CSS开启硬件加速来提高网站性能
参考题解：

CPU 提供了指令集，会不断的执行取指令、译码、执行、取数、写回的指令周期，控制着计算机的运转。

CPU 计算的速度比较快，而访问内存比较慢，为了缓和两者的矛盾，引入了 L1、L2、L3 的多级缓存体系，L1、L2、L3 是容器逐渐变大，访问速度逐渐变慢的关系，但还是比访问内存快。内存会通过一个缓存行（64 字节）的大小为单位来读入缓存，供 CPU 访问。

3D 渲染的流程是计算每一个顶点的数据，连成一个个三角形，然后进行纹理贴图，之后计算投影到二维屏幕的每一个像素的颜色，也就是光栅化，最后写入显存帧缓冲区，这样进行一帧帧的渲染。

CPU 的计算是一个个串行执行的，对于 3D 渲染这种涉及大量顶点、像素要计算的场景就不太合适，于是出现了 GPU。

GPU 可以并行执行大量重复的计算，有成百上千个计算单元，相比 CPU 虽然执行不了复杂逻辑，但是却能执行大量重复的运算。提供了 opengl 的标准 api。

css 中可以使用 GPU 加速渲染来减轻 CPU 压力，使得页面体验更流畅，默认 transform、opacity、filter 都会新建新的图层，交给 GPU 渲染。对于这样的元素可以使用 will-change: 属性名; 来告诉浏览器在最开始就把该元素放到新图层渲染。

参考资料：
- [这一次，彻底搞懂 GPU 和 css 硬件加速](https://juejin.cn/post/7001634685927292936)

### 说说对CSS层叠上下文的理解
参考题解：


参考资料：
- [深入理解CSS中的层叠上下文和层叠顺序](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)
- [彻底搞懂CSS层叠上下文、层叠等级、层叠顺序、z-index](https://juejin.cn/post/6844903667175260174)

## JavaScript
### 正则表达式：将数字转换为千分位分隔形式
参考题解：
```javascript
const reg = /(\d)(?=(?:\d{3})+$)/g

console.log('12345678'.replace(reg, '$1,')) // 12,345,678
console.log('666'.replace(reg, '$1,')) // 666
```

参考资料：
- [正则表达式 - 断言](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions#%E5%85%B6%E4%BB%96%E6%96%AD%E8%A8%80)
- [字符串替换](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E4%BD%BF%E7%94%A8%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0)

### 正则表达式：实现一个queryString方法，来获取URL中的参数
参考题解：
```javascript
function getQueryString(url, key) {
  const regexp = new RegExp('(?:\\?|&)' + key + '=([^&=#]*)(?:&|#|$)')
  const result = url.match(regexp)

  if(!result) return ''

  return result[1] ? decodeURIComponent(result[1]) : ''
}

getQueryString('https://example.com/?name=111&key=222', 'name') // 111
getQueryString('https://example.com/?name=111&key=222#hash', 'key') // 222
```

### 正则表达式：写一个获取颜色的正则表达式
参考题解：
```javascript
var regexp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

regexp.test('#333') // true
regexp.test('#d5d5d5') // true
```

参考资料：
- [any-rule](https://github.com/any86/any-rule#16%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2)
