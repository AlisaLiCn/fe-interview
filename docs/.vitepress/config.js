import { defineConfig } from 'vitepress'

const nav = [
  {
    text: 'Basics',
    activeMatch: `^/(basics|html|css|javascript)/`,
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
]
const sidebar = {}

export default defineConfig({
  base: '/fe-interview/',
  title: 'Front End Interview',
  description: 'A collection of Front-End interview questions and study materials',
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