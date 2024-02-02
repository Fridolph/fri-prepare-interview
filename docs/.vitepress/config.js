import { defineConfig } from 'vitepress'
// import { postcssIsolateStyles } from 'vitepress'
import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
// https://vitepress.dev/reference/site-config
// menu route
import straight from './routes/sidebar/直击概念'
import question from './routes/sidebar/面试官问'
import coding from './routes/sidebar/手写代码'

export default defineConfig({
  base: '/FE-prepare-interview/',
  title: 'Web前端必备面试宝典',
  description: 'Web前端开发必备面试宝典，Fridolph著。内容搜集整理自互联网，遵循GPL开源协议。',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  themeConfig: {
    appearance: false,
    logo: '/me.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '直击概念', link: '/直击概念/index' },
      { text: '面试官问', link: '/面试官问/index' },
      { text: '手写代码', link: '/手写代码/index' },
      { text: '准备简历', link: '/准备简历/index' },
      { text: '如何贡献', link: '/如何贡献/index' },
    ],
    sidebar: {      
      '/直击概念/': straight,
      '/面试官问/': question,
      '/手写代码/': coding,
      '/准备简历/': [
        {
          text: '如何利用该版块',
          items: [{ text: '推荐工具', link: '/准备简历/index' }],
        },
      ],
      '/如何贡献/': [
        {
          text: '如何贡献',
          items: [{ text: '参与贡献', link: '/如何贡献/index', }]          
        },
        {
          text: 'Markdown扩展示例', link: '/如何贡献/md-examples'
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Fridolph/FE-prepare-interview' }],
    footer: {
      // message: '',
      copyright:
        'Released under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans" target="_blank">CC BY-NC-ND 4.0</a> License.  Copyright © 2024-present <a href="https://blog.fridolph.top" target="_blank">Yinsheng Fu</a>',
    },
    editLink: {
      pattern: 'https://github.com/Fridolph/FE-prepare-interview/edit/dev/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    search: {
      provider: 'local',
    },    
    docFooter: {
      prev: '上一节',
      next: '下一节',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    returnToTopLabel: '返回顶部',
    externalLinkIcon: true,
  },
  lang: 'zh-cn',
  vite: {
    plugins: [
      // postcssIsolateStyles(),
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        btnPlaceholder: '搜索',
        placeholder: '搜索文档',
        emptyText: '空空如也',
        heading: '共: {{searchResult}} 条结果',
        excludeSelector: ['img', 'a.header-anchor'],
        forceLanguage: 'zh-cn',
        indexingCommand:
          'npx pagefind --source "docs/.vitepress/dist" --bundle-dir "pagefind" --exclude-selectors "div.aside, a.header-anchor"',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '注意',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  sitemap: {
    hostname: 'https://github.com/Fridolph/FE-prepare-interview'
  }
})
