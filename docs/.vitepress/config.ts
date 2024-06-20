import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "VueQrcode",
    description: "二维码组件",
    base: process.env.NODE_ENV === 'production' ? '/vue-qrcode/' : undefined,
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '指南', link: '/guide' },
            { text: '演示', link: '/examples' },
            { text: 'API' , link: '/api-options' },
        ],

        sidebar: [
            {
                text: '指南',
                items: [
                    { text: '如何使用', link: '/guide' },
                ]
            },
            {
                text: '演示',
                items: [
                    { text: '基础使用', link: '/examples' },
                ]
            },
            {
                text: 'API',
                items: [
                    { text: '属性配置', link: '/api-options' },
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
