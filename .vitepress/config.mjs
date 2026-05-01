import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/Personal_Website/tech.png" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap", rel: "stylesheet" }],
    ["meta", { name: "author", content: "ErickWu (Xinyao Wu)" }],
    ["meta", { name: "keywords", content: "ErickWu, Xinyao Wu, Wuhan University, 武汉大学, 信息管理, 计算机科学, 个人网站, portfolio" }],
  ],
  base: '/Personal_Website/',
  title: "ErickWu",
  description: "Wuhan University · Information × Technology · Building bridges between data and insight",
  themeConfig: {
    outlineTitle: '目录',
    outline: [2, 6],
    logo: '/photo.png',

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "未找到相关结果",
            resetButtonTitle: "清除查询",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '项目', link: '/projects' },
      { text: '博客', link: '/blog/' },
      { text: '课程', link: '/courses/' },
      { text: '联系', link: '/contact' }
    ],

    sidebar: {
      '/courses/': [
        {
          text: '课程资料',
          items: [
            { text: '课程概览', link: '/courses/' },
            {
              text: '信息管理',
              link: '/courses/information-management/',
            },
            {
              text: '计算机科学',
              link: '/courses/computer-science/',
            },
            {
              text: '数学',
              link: '/courses/mathematics/',
              collapsed: true,
              items: [
                { text: '高等数学', link: '/courses/mathematics/calculus' },
              ]
            },
          ]
        }
      ],
      '/blog/': [
        {
          text: '博客文章',
          items: [
            { text: '全部文章', link: '/blog/' },
            { text: 'VitePress 个人网站重构实录', link: '/blog/vitepress-rebuild' },
            { text: '一带一路可视化复盘', link: '/blog/br-visualization-review' },
            { text: '信管 × 计科跨学科感悟', link: '/blog/interdisciplinary-learning' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Erick-xinyaowu' }
    ],

    footer: {
      message: 'Wuhan University · Information × Technology',
      copyright: 'Copyright © 2025 ErickWu',
    }
  }
})
