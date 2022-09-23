import { defineConfig } from 'vitepress'

const nav = [
  {
    text: 'Basics',
    activeMatch: `^/(html|css|javascript)/`,
    items: [
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
      { text: 'JavaScript', link: '/javascript/' },  
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
  'html': [
    {
      text: 'Optimize',
      items: [
        {
          text: '如何提高web可访问性',
          link: '/html/#图片布局：实现图片木桶布局（原百度图片布局方式）'
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
  'javascript': [
    {
      text: 'RegExp',
      items: [
        {
          text: '将数字转换为千分位分隔形式',
          link: '/javascript/#将数字转换为千分位分隔形式'
        },
        {
          text: '实现一个queryString方法，来获取URL中的参数',
          link: '/javascript/#实现一个querystring方法来获取url中的参数'
        },
        {
          text: '写一个获取颜色的正则表达式',
          link: '/javascript/#写一个获取颜色的正则表达式'
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