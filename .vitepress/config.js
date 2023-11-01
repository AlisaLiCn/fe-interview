// import { defineConfig } from 'vitepress'

const nav = [
  {
    text: 'Basics',
    activeMatch: `^/(html|css|javascript|typescript)/`,
    items: [
      { text: 'JavaScript', link: '/javascript/' },
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
      { text: 'TypeScript', link: '/typescript/' },
    ]
  },
  {
    text: 'Framework',
    activeMatch: `^/(vue|react)/`,
    items: [
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
    ]
  },
  {
    text: 'Engineering',
    activeMatch: `^/engineering/`,
    link: '/engineering/'
  },
]
const sidebar = {
  'javascript': [
    {
      text: 'javascript基础',
      items: [
        {
          text: 'JavaScript的数据类型及它们的区别',
          link: '/javascript/#javascript的数据类型及它们的区别'
        },
        {
          text: '检测数据类型的方式有哪些',
          link: '/javascript/#检测数据类型的方式有哪些'
        },
        {
          text: 'null和undefined区别',
          link: '/javascript/#null和undefined区别'
        },
        {
          text: 'intanceof操作符的实现原理及代码实现',
          link: '/javascript/#intanceof操作符的实现原理及代码实现'
        },
        {
          text: '对原型及原型链的理解',
          link: '/javascript/#对原型及原型链的理解'
        },
        {
          text: '创建对象的方式有哪些',
          link: '/javascript/#创建对象的方式有哪些'
        },
        {
          text: '对象继承的方式有哪些',
          link: '/javascript/#对象继承的方式有哪些'
        },
        {
          text: '对作用域及作用域链的理解',
          link: '/javascript/#对作用域及作用域链的理解'
        },
        {
          text: '对this对象的理解',
          link: '/javascript/#对this对象的理解'
        },
        {
          text: '箭头函数的this指向哪里',
          link: '/javascript/#箭头函数的this指向哪里'
        },
        {
          text: 'call apply bind的区别',
          link: '/javascript/#call-apply-bind的区别'
        },
        {
          text: 'for...in和for...of的区别',
          link: '/javascript/#for-in-和-for-of-的区别'
        },
        {
          text: '异步编程的实现方式',
          link: '/javascript/#异步编程的实现方式'
        },
        {
          text: '对Promise的理解',
          link: '/javascript/#对promise的理解'
        },
        {
          text: '对async/await的理解',
          link: '/javascript/#对async-await的理解'
        },
        {
          text: 'async/await 对比 Promise 的优势',
          link: '/javascript/#async-await-对比-promise-的优势'
        },
        {
          text: 'ES Module与CommonJS模块有什么异同',
          link: '/javascript/#es-module与commonjs模块有什么异同'
        },
        {
          text: '哪些情况会导致内存泄漏',
          link: '/javascript/#哪些情况会导致内存泄漏'
        },

      ]
    },
    {
      text: '正则表达式',
      items: [
        {
          text: '将数字转换为千分位分隔形式',
          link: '/javascript/regexp/#将数字转换为千分位分隔形式'
        },
        {
          text: '实现一个获取URL中参数的queryString方法',
          link: '/javascript/regexp/#实现一个获取URL中参数的queryString方法'
        },
        {
          text: '写一个获取颜色的正则表达式',
          link: '/javascript/regexp/#写一个获取颜色的正则表达式'
        }
      ]
    },
    {
      text: '性能优化',
      items: [
        {
          text: '懒加载的概念',
          link: '/javascript/optimize/#懒加载的概念'
        },
        {
          text: '懒加载的实现原理',
          link: '/javascript/optimize/#懒加载的实现原理'
        },
        {
          text: '对防抖和节流的理解',
          link: '/javascript/optimize/#对防抖和节流的理解'
        }
      ]
    }
  ],
  'html': [
    {
      text: '基础',
      items: [
        {
          text: '对HTML语义化的理解',
          link: '/html/#对html语义化的理解'
        }
      ]
    },
    {
      text: '性能优化&体验优化',
      items: [
        {
          text: '在HTML中延迟加载JavaScript脚本的方式有哪些',
          link: '/html/#在HTML中延迟加载JavaScript脚本的方式有哪些'
        },
        {
          text: '重排与重绘概念及触发操作',
          links: '/html/#重排与重绘概念及触发操作'
        },
        {
          text: '如何减少重排与重绘',
          link: '/html/#如何减少重排与重绘',
        },
        {
          text: '如何提高web可访问性',
          link: '/html/#如何提高web可访问性'
        },
      ]
    },
  ],
  'css': [
    {
      text: 'Basics',
      items: [
        {
          text: '说说对CSS层叠上下文的理解',
          link: '/css/#说说对CSS层叠上下文的理解'
        },
      ]
    },
    {
      text: 'Image',
      items: [
        {
          text: '图片布局：实现图片木桶布局（原百度图片布局方式）',
          link: '/css/#图片布局：实现图片木桶布局（原百度图片布局方式）'
        },
      ]
    },
    {
      text: 'Optimize',
      items: [
        {
          text: 'CSS优化和提升性能的方法',
          link: '/css/#css优化和提升性能的方法'
        },
        {
          text: '如何通过CSS开启硬件加速来提高网站性能',
          link: '/css/#如何通过CSS开启硬件加速来提高网站性能'
        },
      ]
    },
  ],
  'typescript': [
    {
      text: '基础',
      items: [
        {
          text: 'TypeScript及静态类型语言的优缺点',
          link: '/vue/#typescript及静态类型语言的优缺点'
        },
        {
          text: 'TypeScript及静态类型语言的优缺点',
          link: '/vue/#typescript及静态类型语言的优缺点'
        },
      ]
    },
  ],
  'vue': [
    {
      text: '基本原理',
      items: [
        {
          text: 'Vue的基本原理',
          link: '/vue/#vue的基本原理'
        },
        {
          text: '双向数据绑定的原理',
          link: '/vue/#双向数据绑定的原理'
        },
        {
          text: 'MVVM MVC MVP 的区别',
          link: '/vue/#mvvm-mvc-mvp-的区别'
        },
        {
          text: 'Vue模板编译原理',
          link: '/vue/#vue模板编译原理'
        },
        {
          text: '对Vue组件化的理解',
          link: '/vue/#对vue组件化的理解'
        },
        {
          text: '对Vue设计原则的理解',
          link: '/vue/#对vue设计原则的理解'
        },
        {
          text: '说说Vue的生命周期',
          link: '/vue/#说说vue的生命周期'
        },
        {
          text: 'created和mounted区别',
          link: '/vue/#created和mounted区别'
        },
        {
          text: 'slot的作用及原理',
          link: '/vue/#slot的作用及原理'
        },
        {
          text: 'nexttick原理及作用',
          link: '/vue/#nexttick原理及作用'
        },
        {
          text: 'Vue子组件和父组件执行顺序',
          link: '/vue/#vue子组件和父组件执行顺序'
        },
        {
          text: '一般在哪个生命周期请求异步数据',
          link: '/vue/#一般在哪个生命周期请求异步数据'
        },
        {
          text: 'keep-alive中的生命周期哪些',
          link: '/vue/#keep-alive中的生命周期哪些'
        },
        {
          text: '子组件可以直接改变父组件的数据吗',
          link: '/vue/#子组件可以直接改变父组件的数据吗'
        },
        {
          text: '对React和Vue的理解并比较他们的异同',
          link: '/vue/#对react和vue的理解并比较他们的异同'
        },
        {
          text: 'Vue的优点',
          link: '/vue/#vue的优点'
        },
        {
          text: 'Vue3的新变化',
          link: '/vue/#vue3的新变化'
        },
        {
          text: 'defineProperty和proxy的区别',
          link: '/vue/#defineProperty和proxy的区别'
        },
        {
          text: 'Vue3为什么要用Proxy',
          link: '/vue/#vue3为什么要用proxy'
        },
        {
          text: '虚拟DOM的解析过程',
          link: '/vue/#虚拟dom的解析过程'
        },
        {
          text: 'diff算法原理',
          link: '/vue/#diff算法原理'
        },
        {
          text: 'Vue中key的作用',
          link: '/vue/#vue中key的作用'
        }
      ]
    },
    {
      text: 'Vuex',
      items: [
        {
          text: 'Vuex的基本原理',
          link: '/vue/vuex/#vuex的基本原理'
        },
        {
          text: 'Vuex和localStorage区别',
          link: '/vue/vuex/#vuex和localstorage区别'
        },
        {
          text: 'Vuex和Redux的异同',
          link: '/vue/vuex/#vuex和redux的异同'
        },
        {
          text: '为什么使用Vuex或Redux',
          link: '/vue/vuex/#为什么使用vuex或redux'
        },
        {
          text: 'Vuex有哪几种属性',
          link: '/vue/vuex/#vuex有哪几种属性'
        },
        {
          text: 'Vuex和单纯的全局对象有什么区别',
          link: '/vue/vuex/#vuex和单纯的全局对象有什么区别'
        },
        {
          text: '为什么Vuex的mutation中不能做异步操作',
          link: '/vue/vuex/#为什么vuex的mutation中不能做异步操作'
        }
      ]
    },
    {
      text: 'Vue Router',
      items: [
        {
          text: '路由的hash和history模式区别',
          link: '/vue/vue-router/#路由的hash和history模式区别'
        },
        {
          text: 'vue-router跳转和location.href有什么区别',
          link: '/vue/vue-router/#vue-router跳转和location-href有什么区别'
        }
      ]
    }
  ],
  'engineering': [
    {
      text: 'Package Management',
      items: [
        {
          text: 'npm、yarn与pnpm的区别',
          link: '/engineering/#npmyarn与pnpm的区别'
        },
      ]
    },
    {
      text: 'Webpack',
      items: [
        {
          text: '如何⽤webpack来优化前端性能',
          links: '/engineering/#如何⽤webpack来优化前端性能'
        },
        {
          text: '如何提高webpack构建速度',
          links: '/engineering/#如何提高webpack构建速度'
        },
        {
          text: 'webpack常用的loader',
          links: '/engineering/#webpack常用的loader'
        },
        {
          text: 'webpack常用的plugin',
          links: '/engineering/#webpack常用的plugin'
        },
        {
          text: 'bundle，chunk，module是什么',
          links: '/engineering/#bundle-chunk-module是什么'
        },
        {
          text: 'webpack中loader和plugin的不同',
          links: '/engineering/#webpack中loader和plugin的不同'
        },        
        {
          text: 'webpack热更新的原理',
          links: '/engineering/#webpack热更新的原理'
        },
      ]
    },
    {
      text: 'Babel',
      items: [
        {
          text: 'babel原理',
          link: '/engineering/#babel原理'
        }
      ]
    },
    {
      text: '前端监控',
      items: [
        {
          text: '设计实现前端埋点SDK',
          link: '/engineering/#设计实现前端埋点sdk'
        },
      ]
    }
  ]
}

export default {
  base: '/fe-interview/',
  title: 'Front End Interview',
  description: 'A collection of Front-End interview questions and study materials',
  srcDir: 'src',
  themeConfig: {
    nav,
    sidebar,
    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2022-${new Date().getFullYear()} <a href="https://github.com/alisalicn" target="_blank">Alisa Li</a>`
    },
  }
}