/*
 * @Description: 
 * @Author: ggs
 * @Date: 2024-06-12 17:38:33
 * @LastEditors: ggs
 * @LastEditTime: 2024-06-12 18:04:54
 * @FilePath: \vitePress\.vitepress\config.mjs
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My Awesome Project",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/src/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/src/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/src/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
