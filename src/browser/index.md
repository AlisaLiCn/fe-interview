### 进程和线程
- 一个进程就是一个程序的运行实例。详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫进程。
- 多线程可以并行处理任务，但是线程是不能单独存在的，它是由进程来启动和管理的。

进程和线程关系：
1. 进程中的任意一线程执行出错，都会导致整个进程的崩溃。
2. 线程之间共享进程中的数据。
3. 当一个进程关闭之后，操作系统会回收进程所占用的内存。
4. 进程之间的内容相互隔离。

### 浏览器的多进程架构
Chrome浏览器包括：1个浏览器（Browser）主进程、1个 GPU 进程、1个网络（NetWork）进程、多个渲染进程和多个插件进程

- 浏览器进程。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。
- 渲染进程。核心任务是将HTML、CSS和JavaScript转换为用户可以与之交互的网页，排版引擎Blink和JavaScript引擎V8都是运行在该进程中，默认情况下，Chrome会为每个Tab标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。
- GPU进程。其实，Chrome刚开始发布的时候是没有GPU进程的。而GPU的使用初衷是为了实现3D CSS的效果，只是随后网页、Chrome的UI界面都选择采用GPU来绘制，这使得GPU成为浏览器普遍的需求。最后，Chrome在其多进程架构上也引入了GPU进程。
- 网络进程。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。
- 插件进程。主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响

### 浏览器的渲染流程
按照渲染的时间顺序，渲染流程可分为如下几个子阶段：
- 构建DOM树
- 样式计算
- 布局阶段
- 分层
- 绘制
- 分块
- 光栅化和合成

构建DOM树
- 输入内容：HTML文件
- 处理过程：经由HTML解析器解析
- 输出内容：树状结构的DOM

### 缓存位置