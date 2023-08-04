import { defineConfig } from 'vitepress'

const nav = [
  {
    text: 'Basics',
    activeMatch: `^/(html|css|javascript)/`,
    items: [
      { text: 'JavaScript', link: '/javascript/' },  
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
    ]
  },
  {
    text: 'Framework',
    activeMatch: `^/framework/`,
    link: '/framework/'
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
          text: 'JavaScript有哪几种数据类型，它们的区别',
          link: '/javascript/#javascript有哪几种数据类型它们的区别'
        },
        {
          text: '检测数据类型的方式有哪些',
          link: '/javascript/#检测数据类型的方式有哪些'
        }, 
        {
          text: 'intanceof操作符的实现原理及代码实现',
          link: '/javascript/#intanceof操作符的实现原理及代码实现'
        }, 
        {
          text: 'null和undefined区别',
          link: '/javascript/#null和undefined区别'
        },
        {
          text: '对原型、原型链的理解',
          link: '/javascript/#对原型原型链的理解'
        },      
        {
          text: '对作用域、作用域链的理解',
          link: '/javascript/#对作用域作用域链的理解'
        },
        {
          text: '箭头函数的this指向哪里',
          link: '/javascript/#箭头函数的this指向哪里'
        },
        {
          text: 'for...in和for...of的区别',
          link: '/javascript/#for-in-和-for-of-的区别'
        },
        {
          text: 'ES Module与CommonJS模块有什么异同',
          link: '/javascript/#es-module与commonjs模块有什么异同'
        }
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
          text: '实现一个queryString方法，来获取URL中的参数',
          link: '/javascript/regexp/#实现一个querystring方法来获取url中的参数'
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

export default defineConfig({
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
})