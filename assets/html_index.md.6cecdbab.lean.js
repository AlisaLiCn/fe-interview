import{_ as e,v as t,b as a,R as r}from"./chunks/framework.0bed0734.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"html/index.md","filePath":"html/index.md"}'),s={name:"html/index.md"},i=r('<h3 id="在html中延迟加载javascript脚本的方式有哪些" tabindex="-1">在HTML中延迟加载JavaScript脚本的方式有哪些 <a class="header-anchor" href="#在html中延迟加载javascript脚本的方式有哪些" aria-label="Permalink to &quot;在HTML中延迟加载JavaScript脚本的方式有哪些&quot;">​</a></h3><p>延迟加载就是等页面加载完成之后再加载 JavaScript 文件。js 延迟加载有助于提高页面加载速度。 一般有以下几种方式：</p><p>defer 属性：给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。</p><p>async 属性：给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。</p><p>动态创建 DOM 方式：动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。</p><p>使用 setTimeout 延迟方法：设置一个定时器来延迟加载 js 脚本文件。</p><p>让JS最后加载：将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。</p><h3 id="如何提高web可访问性" tabindex="-1">如何提高web可访问性 <a class="header-anchor" href="#如何提高web可访问性" aria-label="Permalink to &quot;如何提高web可访问性&quot;">​</a></h3><p>参考题解：</p><p>提高web可访问性是一种能让更多的人使用我们的网站的做法，比如：让有视觉或听觉障碍的人群、移动设备用户、处于低速网络环境的人群也能正常使用网站。</p><p>web开发人员在开发的初期，就需要考虑可访问性相关的内容，以避免在后期难以改善。</p><p>提升可访问性的一些措施：</p><ul><li>书写语义化的HTML结构：例如：正确使用标题、段落等元素来构建文本内容；使用HTML5的语义元素进行页面布局(如<code>&lt;nav&gt;</code> <code>&lt;footer&gt;</code>等)；</li><li>保证键盘的可访问性：表单元素、按钮、超链接等本身能被键盘访问，如果为了更好的UI效果而使用其他元素来代替，可以利用tabindex属性来重新建立键盘的可访问性；</li><li>为非语义化元素添加WAI-ARIA属性，来提供额外的语义化和可访问性，例如：role=&quot;button&quot;等；</li><li>使用工具进行测试：例如：使用Mac系统自带的旁白功能，可以进行屏幕阅读效果的测试；使用在线工具或自动化工具对网站进行检测。</li></ul><p>参考资料：</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/Accessibility" target="_blank" rel="noreferrer">MDN - 无障碍</a></li></ul>',15),l=[i];function o(p,c,n,d,h,b){return t(),a("div",null,l)}const f=e(s,[["render",o]]);export{u as __pageData,f as default};
