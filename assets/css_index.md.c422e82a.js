import{_ as s,S as l,N as a,y as n}from"./chunks/framework.d7f66f09.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css/index.md","filePath":"css/index.md"}'),p={name:"css/index.md"},o=n(`<h3 id="水平垂直居中的实现" tabindex="-1">水平垂直居中的实现 <a class="header-anchor" href="#水平垂直居中的实现" aria-label="Permalink to &quot;水平垂直居中的实现&quot;">​</a></h3><ol><li>绝对定位</li></ol><p>先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素的中心点到页面的中心。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">parent</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">child</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="2"><li>flex布局</li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">parent</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  align-center</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="对bfc的理解" tabindex="-1">对BFC的理解 <a class="header-anchor" href="#对bfc的理解" aria-label="Permalink to &quot;对BFC的理解&quot;">​</a></h3><p>BFC相关的两个概念： Box: Box是CSS布局的对象和基本单位，⼀个⻚⾯是由很多个Box组成的，这个Box就是我们所说的盒模型。 Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。</p><p>块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。</p><p>通俗来讲：BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。</p><p>创建BFC的条件：</p><ul><li>根元素：body；</li><li>元素设置浮动：float除none以外的值；</li><li>元素设置绝对定位：position (absolute、fixed)；</li><li>display值为：inline-block、table-cell、table-caption、flex等；</li><li>overflow值为：hidden、auto、scroll；</li></ul><p>BFC的特点：</p><ul><li>垂直方向上，自上而下排列，和文档流的排列方式一致。</li><li>在BFC中上下相邻的两个容器的margin会重叠</li><li>计算BFC的高度时，需要计算浮动元素的高度</li><li>BFC区域不会与浮动的容器发生重叠</li><li>BFC是独立的容器，容器内部元素不会影响外部元素</li><li>每个元素的左margin值和容器的左border相接触</li></ul><p>BFC的作用：</p><ul><li>解决margin的重叠问题：由于BFC是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个BFC，就解决了margin重叠的问题。</li><li>解决高度塌陷的问题：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把父元素变成一个BFC。常用的办法是给父元素设置overflow:hidden。</li><li>创建自适应两栏布局：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。</li><li>左侧设置float:left，右侧设置overflow: hidden。这样右边就触发了BFC，BFC的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠，实现了自适应两栏布局。</li></ul><h3 id="说说对css层叠上下文的理解" tabindex="-1">说说对CSS层叠上下文的理解 <a class="header-anchor" href="#说说对css层叠上下文的理解" aria-label="Permalink to &quot;说说对CSS层叠上下文的理解&quot;">​</a></h3><p>参考题解：</p><p>当我们浏览网页时，元素除了在水平的x轴、y轴上进行排列外，在与网页垂直的视线方向上，还有一个类似于z轴的存在，当元素在z轴方向上发生堆叠时，他们之间会发生覆盖。 而当元素处于一个层叠上下文中时，会遵循一定的层叠顺序进行堆叠排列。</p><p>层叠顺序不仅仅是由z-index值所决定，当比较两个元素的堆叠情况时：</p><ul><li>首先比较两个元素是否处于同一个层叠上下文中：若处于不同的层叠上下文，则先比较两个层叠上下文的层叠等级；若处于同一层叠上下文，则按照下面的层叠顺序进行比较。</li><li>当两个元素层叠等级相同、层叠顺序相同时，那么在DOM结构中处于后面的元素层叠等级更高。</li></ul><p>元素的层叠顺序由高到低：</p><ul><li>正z-index</li><li>z-index:auto/z-index:0</li><li>inline/inline-block水平盒子</li><li>float浮动盒子</li><li>block块状水平盒子</li><li>负z-index</li><li>层叠上下文元素的background/border</li></ul><p>参考资料：</p><ul><li><a href="https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/" target="_blank" rel="noreferrer">深入理解CSS中的层叠上下文和层叠顺序</a></li><li><a href="https://juejin.cn/post/6844903667175260174" target="_blank" rel="noreferrer">彻底搞懂CSS层叠上下文、层叠等级、层叠顺序、z-index</a></li></ul><h3 id="如何解决1px问题" tabindex="-1">如何解决1px问题 <a class="header-anchor" href="#如何解决1px问题" aria-label="Permalink to &quot;如何解决1px问题&quot;">​</a></h3><p>1px 问题指的是：在一些 Retina 屏幕 的机型上，移动端页面的 1px 会变得很粗，呈现出不止 1px 的效果。原因很简单——CSS 中的 1px 并不能和移动设备上的 1px 划等号。它们之间的比例关系有一个专 门的属性来描述：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">window.devicePixelRatio = 设备的物理像素 / CSS像素</span></span></code></pre></div><p>打开Chrome浏览器，启动移动端调试模式，在控制台去输出这个devicePixelRatio的值。这里选中iPhone6/7/8这系列的机型，输出的结果就是2： 这就意味着设置的1px CSS像素，在这个设备上实际会用2个物理像素单元来进行渲染，所以实际看到的一定会比1px粗一些。</p><p>解决思路：</p><p>思路一：直接写0.5px</p><p>如果之前1px的样式这样写：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">boder: 1px solid #333;</span></span></code></pre></div><p>可以先在JS中拿到window.devicePixelRatio的值，然后把这个值通过JSX或者模板语法给到CSS的data里，达到这样的效果（这里用JSX语法做示范）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">&lt;div id=&quot;container&quot; data-device={{window.devicePixelRatio}}&quot;&gt;&lt;/div&gt;</span></span></code></pre></div><p>然后就可以在CSS中用属性选择器来命中devicePixelRatio为某一值的情况，比如说这里尝试命中devicePixelRatio为2的情况：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">container</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-device</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0.5px</span><span style="color:#BABED8;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#BABED8;">333</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>直接把1px改成1/devicePixelRatio后的值，这是目前为止最简单的一种方法。这种方法的缺陷在于兼容性不行，IOS系统需要8及以上的版本，安卓系统则直接不兼容。</p><p>思路二：伪元素先放大后缩小</p><p>这个方法的可行性会更高，兼容性也更好。唯一的缺点是代码会变多。思路是先放大、后缩小：在目标元素的后面追加一个::after伪元素，让这个元素布局为absolute之后、整个伸展开铺在目标元素上，然后把它的宽和高都设置为目标元素的两倍，border值设为1px。接着借助CSS动画特效中的放缩能力，把整个伪元素缩小为原来的50%。此时，伪元素的宽高刚好可以和原有的目标元素对齐，而border也缩小为了1px的二分之一，间接地实现了0.5px的效果。 代码如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">container</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-device</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">container</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-device</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]::</span><span style="color:#C792EA;">after</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">  </span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">200%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">200%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> left top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#BABED8;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#BABED8;">333</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="图片布局-实现图片木桶布局-原百度图片布局方式" tabindex="-1">图片布局：实现图片木桶布局（原百度图片布局方式） <a class="header-anchor" href="#图片布局-实现图片木桶布局-原百度图片布局方式" aria-label="Permalink to &quot;图片布局：实现图片木桶布局（原百度图片布局方式）&quot;">​</a></h3><p>参考题解：</p><p>木桶布局方式，图片每行高度相等、两端对齐，大致思路：</p><ul><li>设定一个每行的初始高度，根据初始高度和图片宽度，计算每行的图片数量，使每行图片总宽度小于等于行宽</li><li>确定一行的图片数量后，再根据每张图片的宽高比例进行等比放大，计算出每张图片实际的宽高，保证图片撑满行宽</li><li>创建图片元素，根据每张图片的实际大小，设置尺寸样式，并根据所在行的序号设置图片绝对定位的位置</li></ul><p><a href="https://github.com/AlisaLiCn/image-layout-demo" target="_blank" rel="noreferrer">图片木桶布局demo</a></p><h3 id="css优化和提升性能的方法" tabindex="-1">CSS优化和提升性能的方法 <a class="header-anchor" href="#css优化和提升性能的方法" aria-label="Permalink to &quot;CSS优化和提升性能的方法&quot;">​</a></h3><p>加载性能：</p><ul><li>css压缩：将css进行打包压缩，可以减小文件体积。</li><li>css单一样式：当需要下边距和左边距的时候，很多时候会选择使用<code>margin: top 0 bottom 0；</code>但 <code>margin-bottom: bottom; margin-left: left;</code>执行效率会更高。</li></ul><p>选择器性能：</p><ul><li>关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS选择符是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；</li><li>如果规则拥有ID选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）。</li><li>避免使用通配规则，如*{}计算次数惊人，只对需要用到的元素进行选择。</li><li>尽量少的去对标签进行选择，而是用class。</li><li>尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不超过三层，更多的使用类来关联每一个标签元素。</li><li>了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。</li></ul><p>渲染性能：</p><ul><li>慎重使用高性能属性：浮动、定位。</li><li>尽量减少页面重排、重绘。</li><li>去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则能减少css文档体积。</li><li>属性值为0时，不加单位。</li><li>属性值为浮动小数0.**，可以省略小数点之前的0。</li><li>标准化各种浏览器前缀：带浏览器前缀的在前。标准属性在后。</li><li>不使用@import前缀，它会影响 css 的加载速度。</li><li>选择器优化嵌套，尽量避免层级过深。</li><li>css雪碧图，同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚，再使用。</li><li>正确使用 display 的属性，由于 display 的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。</li><li>不滥用 web 字体。对于中文网站来说 WebFonts 可能很陌生，国外却很流行。web fonts 通常体积庞大，而且一些浏览器在下载 web fonts 时会阻塞页面渲染损伤性能。</li></ul><p>可维护性、健壮性：</p><ul><li>将具有相同属性的样式抽离出来，整合并通过class在页面中进行使用，提高css的可维护性。</li><li>样式与内容分离：可以将css代码定义到外部css中。</li></ul><h3 id="如何通过css开启硬件加速来提高网站性能" tabindex="-1">如何通过CSS开启硬件加速来提高网站性能 <a class="header-anchor" href="#如何通过css开启硬件加速来提高网站性能" aria-label="Permalink to &quot;如何通过CSS开启硬件加速来提高网站性能&quot;">​</a></h3><p>参考题解：</p><p>CPU 提供了指令集，会不断的执行取指令、译码、执行、取数、写回的指令周期，控制着计算机的运转。</p><p>CPU 计算的速度比较快，而访问内存比较慢，为了缓和两者的矛盾，引入了 L1、L2、L3 的多级缓存体系，L1、L2、L3 是容器逐渐变大，访问速度逐渐变慢的关系，但还是比访问内存快。内存会通过一个缓存行（64 字节）的大小为单位来读入缓存，供 CPU 访问。</p><p>3D 渲染的流程是计算每一个顶点的数据，连成一个个三角形，然后进行纹理贴图，之后计算投影到二维屏幕的每一个像素的颜色，也就是光栅化，最后写入显存帧缓冲区，这样进行一帧帧的渲染。</p><p>CPU 的计算是一个个串行执行的，对于 3D 渲染这种涉及大量顶点、像素要计算的场景就不太合适，于是出现了 GPU。</p><p>GPU 可以并行执行大量重复的计算，有成百上千个计算单元，相比 CPU 虽然执行不了复杂逻辑，但是却能执行大量重复的运算。提供了 opengl 的标准 api。</p><p>css 中可以使用 GPU 加速渲染来减轻 CPU 压力，使得页面体验更流畅，默认 transform、opacity、filter 都会新建新的图层，交给 GPU 渲染。对于这样的元素可以使用 will-change: 属性名; 来告诉浏览器在最开始就把该元素放到新图层渲染。</p><p>参考资料：</p><ul><li><a href="https://juejin.cn/post/7001634685927292936" target="_blank" rel="noreferrer">这一次，彻底搞懂 GPU 和 css 硬件加速</a></li></ul>`,65),e=[o];function t(c,i,r,D,F,y){return l(),a("div",null,e)}const C=s(p,[["render",t]]);export{d as __pageData,C as default};