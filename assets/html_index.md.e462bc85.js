import{_ as i,y as l,S as e,M as a}from"./chunks/framework.d290a28e.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"html/index.md","filePath":"html/index.md"}'),t={name:"html/index.md"},o=a('<h3 id="在html中延迟加载javascript脚本的方式有哪些" tabindex="-1">在HTML中延迟加载JavaScript脚本的方式有哪些 <a class="header-anchor" href="#在html中延迟加载javascript脚本的方式有哪些" aria-label="Permalink to &quot;在HTML中延迟加载JavaScript脚本的方式有哪些&quot;">​</a></h3><p>延迟加载就是等页面加载完成之后再加载 JavaScript 文件。js 延迟加载有助于提高页面加载速度。 一般有以下几种方式：</p><p>defer 属性：给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。</p><p>async 属性：给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。</p><p>动态创建 DOM 方式：动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。</p><p>使用 setTimeout 延迟方法：设置一个定时器来延迟加载 js 脚本文件。</p><p>让JS最后加载：将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。</p><h3 id="重排与重绘概念及触发操作" tabindex="-1">重排与重绘概念及触发操作 <a class="header-anchor" href="#重排与重绘概念及触发操作" aria-label="Permalink to &quot;重排与重绘概念及触发操作&quot;">​</a></h3><p><strong>重排</strong>（回流）：当渲染树中部分或者全部元素的尺寸、结构或者属性发生变化时，浏览器会重新渲染部分或者全部文档的过程就称为重排（回流）。 在触发重排的时候，由于浏览器渲染页面是基于流式布局的， 所以当触发回流时，会导致周围的 DOM 元素重新排列，它的影响范围 有两种： 全局范围：从根节点开始，对整个渲染树进行重新布局 局部范围：对渲染树的某部分或者一个渲染对象进行重新布局</p><p>触发重排的操作：</p><ul><li>页面的首次渲染</li><li>浏览器的窗口大小发生变化</li><li>元素的内容发生变化</li><li>元素的尺寸或者位置发生变化</li><li>元素的字体大小发生变化</li><li>激活CSS伪类</li><li>查询某些属性或者调用某些方法</li><li>添加或者删除可见的DOM元素</li></ul><p><strong>重绘</strong>：当页面中某些元素的样式发生变化，但是不会影响其在文档流中的位 置时，浏览器就会对元素进行重新绘制，这个过程就是重绘。 当触发回流时，一定会触发重绘，但是重绘不一定会引发回流。</p><p>会导致重绘的操作：</p><ul><li>color、background相关属性：background-color、background-image等</li><li>outline 相关属性：outline-color、outline-width、text-decoration</li><li>border-radius、visibility、box-shadow</li></ul><h3 id="如何减少重排与重绘" tabindex="-1">如何减少重排与重绘 <a class="header-anchor" href="#如何减少重排与重绘" aria-label="Permalink to &quot;如何减少重排与重绘&quot;">​</a></h3><p>减少回流与重绘的措施：</p><ul><li>操作DOM时，尽量在低层级的DOM节点进行操作</li><li>不要使用table布局，一个小的改动可能会使整个table进行重新布局</li><li>使用CSS的表达式</li><li>不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式。</li><li>使用absolute或者fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素。</li><li>避免频繁操作DOM，可以创建一个文档片段documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。</li><li>将元素先设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。</li><li>将DOM的多个读操作（或者写操作）放在一起，而不是读写操作穿插着写。这得益于浏览器的渲染队列机制。浏览器针对页面的回流与重绘，进行了自身的优化——渲染队列浏览器会将所有的回流、重绘的操作放在一个队列中，当队列中的操作到了一定的数量或者到了一定的时间间隔，浏览器就会对队列进行批处理。这样就会让多次的回流、重绘变成一次回流重绘。将多个读操作（或者写操作）放在一起，就会等所有的读操作进入队列之后执行，这样，原本应该是触发多次回流，变成了只触发一次回流。</li></ul><h3 id="如何提高web可访问性" tabindex="-1">如何提高web可访问性 <a class="header-anchor" href="#如何提高web可访问性" aria-label="Permalink to &quot;如何提高web可访问性&quot;">​</a></h3><p>参考题解：</p><p>提高web可访问性是一种能让更多的人使用我们的网站的做法，比如：让有视觉或听觉障碍的人群、移动设备用户、处于低速网络环境的人群也能正常使用网站。</p><p>web开发人员在开发的初期，就需要考虑可访问性相关的内容，以避免在后期难以改善。</p><p>提升可访问性的一些措施：</p><ul><li>书写语义化的HTML结构：例如：正确使用标题、段落等元素来构建文本内容；使用HTML5的语义元素进行页面布局(如<code>&lt;nav&gt;</code> <code>&lt;footer&gt;</code>等)；</li><li>保证键盘的可访问性：表单元素、按钮、超链接等本身能被键盘访问，如果为了更好的UI效果而使用其他元素来代替，可以利用tabindex属性来重新建立键盘的可访问性；</li><li>为非语义化元素添加WAI-ARIA属性，来提供额外的语义化和可访问性，例如：role=&quot;button&quot;等；</li><li>使用工具进行测试：例如：使用Mac系统自带的旁白功能，可以进行屏幕阅读效果的测试；使用在线工具或自动化工具对网站进行检测。</li></ul><p>参考资料：</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Accessibility" target="_blank" rel="noreferrer">MDN - 无障碍</a></li></ul>',25),r=[o];function s(n,p,d,c,h,u){return l(),e("div",null,r)}const f=i(t,[["render",s]]);export{m as __pageData,f as default};
