export default {
  title: 'Rr-Boot',
  description: 'Just playing around.',
  // 最后更新
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Rr-Boot',
    logo: '../logo.svg',
    outlineTitle: "本页目录",
    outline: "deep",
    markdown: {
      lineNumbers: true,
    },
    // 搜索
    search:{
      provider: 'local'
    },
    // 导航栏
    nav: [
      { text: '首页', link: '/index' },
    ],
    // 侧栏
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '简介', link: '/pages/introduce/index' },
        ]
      },
    ],
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
