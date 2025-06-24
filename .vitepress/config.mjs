import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/Personal_Website/tech.png" }]],
  base: '/Personal_Website/',
  title: "ErickWu's Website",
  description: "A Personal Website",
  themeConfig: {
    outlineTitle: 'Outline',
    outline: [2,6],
    // https://vitepress.dev/config/head
      logo: '/tech.png',
       // 设置搜索框的样式
       search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
      },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '课程资料', link: '/courses/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '课程资料',
        items: [
          { text: '课程概览', link: '/courses/' },
          { text: '页面模板', link: '/courses/templates/' },
          { 
            text: '计算机科学', 
            link: '/courses/computer-science/',
            collapsed: true,
            items: [
              { text: '数据结构与算法', link: '/courses/computer-science/data-structures' },
              { text: '计算机组成原理', link: '/courses/computer-science/computer-organization' },
              { text: '操作系统', link: '/courses/computer-science/operating-systems' },
              { text: '计算机网络', link: '/courses/computer-science/computer-networks' }
            ]
          },
          { 
            text: '数学', 
            link: '/courses/mathematics/',
            collapsed: true,
            items: [
              { text: '高等数学', link: '/courses/mathematics/calculus' },
              { text: '线性代数', link: '/courses/mathematics/linear-algebra' },
              { text: '概率论与数理统计', link: '/courses/mathematics/probability-statistics' }
            ]
          },
          { 
            text: '电子工程', 
            link: '/courses/electronics/',
            collapsed: true,
            items: [
              { text: '电路分析基础', link: '/courses/electronics/circuit-analysis' },
              { text: '数字电子技术', link: '/courses/electronics/digital-electronics' },
              { text: '模拟电子技术', link: '/courses/electronics/analog-electronics' }
            ]
          },
          { 
            text: '物理学', 
            link: '/courses/physics/',
            collapsed: true,
            items: [
              { text: '大学物理(上)', link: '/courses/physics/physics-mechanics' },
              { text: '大学物理(下)', link: '/courses/physics/physics-electromagnetism' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Erick-xinyaowu' }
    ],
    footer: {
      copyright: 'Copyright © 2023 ErickWu',
    }
  }
})
