import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "技术类知识汇总",
  description: "对于庞大的知识体系，单独拆目录，其他都汇总在这里",
  base: '/technolopy/',
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'Docker', link: '/docker/镜像管理' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '总述', link: '/guide/总述' },
          // { text: 'Python', link: '/python' }
        ]
      },
      {
        text: 'Docker',
        items: [
          { text: '镜像管理', link: '/docker/镜像管理' },
          { text: '容器管理', link: '/docker/容器管理' },
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
