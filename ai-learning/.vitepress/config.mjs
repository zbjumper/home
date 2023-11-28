import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI Learning",
  description: "A VitePress Site",
  base: '/ai-learning/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      // { text: '开始', link: '/markdown-examples' },
      // { text: '开始', link: '/started' },
    ],

    sidebar: [
      {
        text: '前置基础知识',
        items: [
          { text: 'Linux', link: '/basic/linux' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'python',
        items: [
          {text: 'ImportError: attempted relative import with no known parent package', link: '/python/ImportError-attempted-relative-import-with-no-known-parent-package'},
        ]
      },
      {
        text: '示例',
        items: [
          { text: 'MNIST', link: '/examples/mnist' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '实用',
        items: [
          { text: 'conda', link: '/practical/conda' },
        ]
      },
      {
        text: '常用库',
        items: [
          { text: 'pytorch', link: '/libraries/pytorch' },
          { text: 'tqdm', link: '/libraries/tqdm' },
          { text: 'langchain', link: '/libraries/langchain' },
        ]
      },
      {
        text: '其它',
        items: [
          { text: '精选', link: '/others/featured' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zbjumper/ai-learning' },
    ]
  }
})
