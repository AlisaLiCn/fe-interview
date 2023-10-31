### 什么是前端工程化
所谓前端工程化，就是在前端开发过程中，采用一系列的技术手段和工具，来提高开发效率、保证代码质量、提高代码复用性、实现自动化流程和促进团队协作等方面的目标，是现代前端开发不可或缺的一部分；


### npm、yarn与pnpm的区别

**npm V1-V2**  
项目的依赖项在node_modules内部，采用嵌套的结构，这种设计存在的问题：
- 依赖嵌套的层级深，会导致文件路径过长的问题，尤其是在windows系统中。
- 大量重复的包被安装，文件体积超级大，
- 模块实例不能共享，无法共享内部变量，可能导致一些不可预知的bug。

**npm V3 & yarn**  
采用扁平化依赖的管理方式，解决了重复安装和嵌套层级深的问题。但存在其他问题：
- 依赖树结构的不确定性，例如两个不同的依赖项，又分别依赖同一个依赖的不同版本，那么被提升的版本是哪个取决于这两个依赖在package.json中声明的顺序。
- 扁平化算法本身复杂度高，耗时较长。
- 项目中可以非法访问没有声明过的依赖包。

为了解决依赖结构的不确定问题，yarn通过yarn.lock、npm 5.x通过package-lock.json来保证依赖安装后产生确定的node_modules结构。

**pnpm**  
pnpm是全新的包管理器，通过硬链接全局存储，使用符号链接来创建依赖项的嵌套结构。

pnpm特性：
- 节省磁盘空间：使用基于内容寻址的文件系统来存储磁盘上的文件，在全局store里存储依赖，磁盘中只有一个地方写入，真正使用时通过硬链接来引用。
- 安装速度快
- 支持monorepo
- 安全性高：子依赖不会被提升，不会产生幽灵依赖。
- 新版本可以管理node.js版本（从v6.12.0开始）

> 硬链接：硬链接（hard link）是计算机文件系统中的多个文件平等地共享同一个文件存储单元。—— 维基百科

> 符号链接：符号链接（软链接、symbolic link）是一类特殊的文件， 其包含有一条以绝对路径或者相对路径的形式指向其它文件或者目录的引用。一个符号链接文件仅包含有一个文本字符串，其被操作系统解释为一条指向另一个文件或者目录的路径。它是一个独立文件，其存在并不依赖于目标文件。如果删除一个符号链接，它指向的目标文件不受影响。如果目标文件被移动、重命名或者删除，任何指向它的符号链接仍然存在，但是它们将会指向一个不复存在的文件。 —— 维基百科

> 内容寻址：通过文件内容生成内容地址（通常是通过hash算法生成），再通过内容地址找到文件。

pnpm弊端：
- 由于pnpm创建的node_modules依赖软链接，因此在不支持软链接的环境中，无法使用 pnpm，比如 Electron 应用。
- 因为依赖源文件是安装在store中，调试依赖或patch-package给依赖打补丁也不太方便，可能会影响其他项目。

参考资料：
- [pnpm、yarn、npm功能比较](https://pnpm.io/zh/next/feature-comparison)
- [关于现代包管理器的深度思考——为什么现在我更推荐 pnpm 而不是 npm/yarn?](https://juejin.cn/post/6932046455733485575)
- [深入浅出 npm & yarn & pnpm 包管理机制](https://juejin.cn/post/7104088592426729480)


### 如何⽤webpack来优化前端性能
⽤webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运⾏快速⾼效。
- 压缩代码：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack的 UglifyJsPlugin 和 ParallelUglifyPlugin 来压缩JS⽂件，利⽤ cssnano（css-loader?minimize）来压缩css。
- 利⽤CDN加速: 在构建过程中，将引⽤的静态资源路径修改为CDN上对应的路径。可以利⽤webpack对于output参数和各loader的publicPath参数来修改资源路径。 
- Tree Shaking: 将代码中永远不会⾛到的⽚段删除掉。可以通过在启动 webpack 时追加参数 --optimize-minimize 来实现 
- Code Splitting: 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存 
- 提取公共第三⽅库: SplitChunksPlugin插件来进⾏公共模块抽取, 利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码

### 如何提高webpack构建速度
- 多⼊⼝情况下，使⽤ CommonsChunkPlugin 来提取公共代码
- 通过 externals 配置来提取常⽤库
- 利⽤ DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引⽤但是绝对不会修改的 npm 包来进⾏预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。
- 使⽤ Happypack 实现多线程加速编译
- 使⽤ webpack-uglify-parallel 来提升 uglifyPlugin 的压缩速度。原理上 webpack-uglify-parallel 采⽤了多核并⾏压缩来提升压缩速度
- 使⽤ Tree-shaking 和 Scope Hoisting 来剔除多余代码

### webpack常用的loader
- file-loader：把⽂件输出到⼀个⽂件夹中，在代码中通过相对URL去引⽤输出的⽂件
- url-loader：和 file-loader 类似，但是能在⽂件很⼩的情况下以 base64 的⽅式把⽂件内容注⼊到代码中去 
- source-map-loader：加载额外的 Source Map ⽂件，以⽅便断点调试
- image-loader：加载并且压缩图⽚⽂件
- babel-loader：把 ES6 转换成 ES5 
- css-loader：加载 CSS，⽀持模块化、压缩、⽂件导⼊等特性
- style-loader：把 CSS 代码注⼊到 JavaScript 中，通过 DOM 操作去加载 CSS。
- eslint-loader：通过 ESLint 检查 JavaScript 代码 

注意：在 Webpack 中，loader 的执行顺序是从右向左执行的。因为 webpack 选择了 compose 这样的函数式编程方式，这种方式的表达式执行是从右向左的。

### webpack常用的plugin
- define-plugin：定义环境变量
- html-webpack-plugin：简化html⽂件创建
- uglifyjs-webpack-plugin：通过 UglifyES 压缩 ES6 代码
- webpack-parallel-uglify-plugin: 多核压缩，提⾼压缩速度
- webpack-bundle-analyzer: 可视化 webpack 输出⽂件的体积 
- mini-css-extract-plugin: CSS 提取到单独的⽂件中，⽀持按需加载

5. bundle，chunk，module是什么
- bundle：是由 webpack 打包出来的⽂件；
- chunk：代码块，⼀个 chunk 由多个模块组合⽽成，⽤于代码的合并和分割；
- module：是开发中的单个模块，在 webpack 的世界，⼀切皆模块，⼀个模块对应⼀个⽂件，webpack 会从配置的 entry 中递归开始找出所有依赖的模块。

### webpack中loader和plugin的不同
作⽤不同: 
- Loader直译为"加载器"。Webpack将⼀切⽂件视为模块，但是 webpack 原⽣是只能解析js⽂件，如果想将其他⽂件也打包的话，就会⽤到loader。所以Loader 的作⽤是让 webpack 拥有了加载和解析⾮JavaScript⽂件的能⼒。
- Plugin直译为"插件"。Plugin 可以扩展 webpack 的功能，让 webpack 具有更多的灵活性。在 Webpack 运⾏的⽣命周期中会⼴播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的API改变输出结果。

用法不同：
- Loader在 module.rules中配置，也就是说他作为模块的解析规则⽽存在。类型为数组，每⼀项都是⼀个Object，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ） 
- Plugin在plugins中单独配置。类型为数组，每⼀项是⼀个plugin的实例，参数都通过构造函数传⼊。

### webpack热更新的原理
webpack 的热更新⼜称热替换（Hot Module Replacement），缩写为HMR。这个机制可以做到不⽤刷新浏览器⽽将新变更的模块替换掉旧的模块。

⾸先要知道server端和client端都做了处理⼯作：
第⼀步，在 webpack 的 watch 模式下，⽂件系统中某⼀个⽂件发⽣修改，webpack 监听到⽂件变化，根据配置⽂件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。

第⼆步是 webpack-dev-server 和 webpack 之间的接⼝交互，⽽在这⼀步，主要是 dev-server 的中间件 webpack-dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调⽤ webpack 暴露的 API 对代码变化进⾏监控，并且告诉 webpack，将代码打包到内存中。

第三步是 webpack-dev-server 对⽂件变化的⼀个监控，这⼀步不同于第⼀步，并不是监控代码变化重新打包。当我们在配置⽂件中配置了 devServer.watchContentBase 为 true 的时候，Server 会监听这些配置⽂件夹中静态⽂件的变化，变化后会通知浏览器端对应⽤进⾏live reload。注意，这⼉是浏览器刷新，和 HMR 是两个概念。 

第四步也是 webpack-dev-server 代码的⼯作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建⽴⼀个websocket⻓连接，将webpack编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态⽂件变化的信息。浏览器端根据这些 socket 消息进⾏不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后⾯的步骤根据这⼀hash值来进⾏模块热替换。 

webpack-dev-server/client 端并不能够请求更新的代码，也不会执⾏热更模块操作，⽽把这些⼯作⼜交回给了webpack，
webpack/hot/dev-server的⼯作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进⾏模块热更新。当然如果仅仅是刷新浏览器，也就没有后⾯那些步骤了。 

HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上⼀步传递给他的新模块的hash值，它通过JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回⼀个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。

HotModulePlugin 将会对新旧模块进⾏对⽐，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引⽤。

最后⼀步，当 HMR 失败后，回退到 live reload 操作，也就是进⾏浏览器刷新来获取最新打包代码。

### 设计实现前端埋点SDK
**埋点监控的作用**  
- 数据监控：监控用户行为
- 性能监控
- 异常监控

**埋点SDK实现**  
需要具备的功能
- 发送数据：一般使用gif图片进行数据传输。
- 上报性能数据
- 捕获报错信息

参考资料：
- [设计实现一个埋点监控SDK](https://juejin.cn/post/7085679511290773534)
- [前端监控和前端埋点方案设计](https://juejin.cn/post/6844903650603565063)