import{_ as n,v as e,b as i,R as t}from"./chunks/framework.0bed0734.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/index.md","filePath":"typescript/index.md"}'),a={name:"typescript/index.md"},r=t('<h3 id="typescript及静态类型语言的优缺点" tabindex="-1">TypeScript及静态类型语言的优缺点 <a class="header-anchor" href="#typescript及静态类型语言的优缺点" aria-label="Permalink to &quot;TypeScript及静态类型语言的优缺点&quot;">​</a></h3><p><strong>优点</strong></p><ol><li>有利于代码的静态分析：有了静态类型，不必运行代码，就可以确定变量的类型，从而推断代码有没有错误。这就叫做代码的静态分析。 这对于大型项目非常重要，单单在开发阶段运行静态检查，就可以发现很多问题，避免交付有问题的代码，大大降低了线上风险。</li><li>有利于发现错误：由于每个值、每个变量、每个运算符都有严格的类型约束，TypeScript 就能轻松发现拼写错误、语义错误和方法调用错误，节省程序员的时间。</li><li>更好的 IDE 支持，做到语法提示和自动补全：IDE（集成开发环境，比如 VSCode）一般都会利用类型信息，提供语法提示功能（编辑器自动提示函数用法、参数等）和自动补全功能（只键入一部分的变量名或函数名，编辑器补全后面的部分）。</li><li>提供了代码文档：类型信息可以部分替代代码文档，解释应该如何使用这些代码，熟练的开发者往往只看类型，就能大致推断代码的作用。借助类型信息，很多工具能够直接生成文档。</li><li>有助于代码重构：修改他人的 JavaScript 代码，往往非常痛苦，项目越大越痛苦，因为不确定修改后是否会影响到其他部分的代码。类型信息大大减轻了重构的成本。一般来说，只要函数或对象的参数和返回值保持类型不变，就能基本确定，重构后的代码也能正常运行。如果还有配套的单元测试，就完全可以放心重构。越是大型的、多人合作的项目，类型信息能够提供的帮助越大。</li></ol><p>综上所述，TypeScript 有助于提高代码质量，保证代码安全，更适合用在大型的企业级项目。</p><p><strong>缺点</strong></p><ol><li>丧失了动态类型的代码灵活性：动态类型有非常高的灵活性，给予程序员很大的自由，静态类型将这些灵活性都剥夺了。</li><li>增加了编程工作量：有了类型之后，程序员不仅需要编写功能，还需要编写类型声明，确保类型正确。这增加了不少工作量，有时会显著拖长项目的开发时间。</li><li>更高的学习成本：类型系统通常比较复杂，要学习的东西更多，要求开发者付出更高的学习成本。</li><li>引入了独立的编译步骤：原生的 JavaScript 代码，可以直接在 JavaScript 引擎运行。添加类型系统以后，就多出了一个单独的编译步骤，检查类型是否正确，并将 TypeScript 代码转成 JavaScript 代码，这样才能运行。</li><li>兼容性问题：TypeScript 依赖 JavaScript 生态，需要用到很多外部模块。但是，过去大部分 JavaScript 项目都没有做 TypeScript 适配，虽然可以自己动手做适配，不过使用时难免还是会有一些兼容性问题。 总的来说，这些缺点使得 TypeScript 不一定适合那些小型的、短期的个人项目。</li></ol><p>参考资料来源：<a href="https://wangdoc.com/typescript/intro" target="_blank" rel="noreferrer">阮一峰 - TypeScript教程</a></p><h3 id="any、unknown和never的区别" tabindex="-1">any、unknown和never的区别 <a class="header-anchor" href="#any、unknown和never的区别" aria-label="Permalink to &quot;any、unknown和never的区别&quot;">​</a></h3><p>any和unknown含义相同，都表示类型不确定，可能是任意类型。unknown类型的引入，是为了解决any类型“污染”其他变量的问题。 never表示该类型为空，不包含任何值。由于不存在任何属于“空类型”的值，所以该类型被称为never，即不可能有这样的值。</p><p>区别：</p><ul><li>unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）。never类型可以赋值给任意其他类型。</li><li>不能直接调用unknown类型变量的方法和属性。</li><li>unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、===、!=、!==、||、&amp;&amp;、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错。</li><li>只有经过“类型缩小”，unknown类型变量才可以使用。所谓“类型缩小”，就是缩小unknown变量的类型范围，确保不会出错。unknown可以看作是更安全的any。一般来说，凡是需要设为any类型的地方，通常都应该优先考虑设为unknown类型。</li><li>any、unknown都是顶层类型，never是底层类型（是任何其他类型所共有的）。</li></ul>',11),p=[r];function o(l,c,s,u,y,d){return e(),i("div",null,p)}const v=n(a,[["render",o]]);export{k as __pageData,v as default};