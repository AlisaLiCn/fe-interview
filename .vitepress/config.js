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
  ],
  'html': [
    {
      text: 'Optimize',
      items: [
        {
          text: '在HTML中延迟加载JavaScript脚本的方式有哪些',
          link: '/html/#在HTML中延迟加载JavaScript脚本的方式有哪些'
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
          link: '/vue/#Vue模板编译原理'
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
          text: '子组件可以直接改变父组件的数据吗',
          link: '/vue/#子组件可以直接改变父组件的数据吗'
        },
        {
          text: '对React和Vue的理解并比较他们的异同',
          link: '/vue/#对react和vue的理解并比较他们的异同'
        },
        {
          text: 'Vue的优点',
          links: '/vue/#Vue的优点'
        }
      ]
    },  
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
      text: '前端监控',
      items: [
        {
          text: '设计实现前端埋点SDK',
          link: '/engineering/#设计实现前端埋点SDK'
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