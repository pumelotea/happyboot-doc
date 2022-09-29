import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: 'happyboot-tiger',
    description: 'happyboot-tiger用户使用文档',
    head: [['link', {rel: 'icon', href: '/logo.png'}]],
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.png',
        lastUpdatedText: 'Updated Date',
        nav: [
            { text: '预览', link: "https://tiger.happykit.org", },
            { text: '引擎', link: 'https://github.com/pumelotea/happykit-next.git' },
            { text: '源码', link: 'https://github.com/pumelotea/happyboot-tiger.git' }
        ],
        footer: {
            message: 'Released under the Apache2.0 License.',
            copyright: 'Apache2.0 Licensed | Copyright © 2020-present happykit.org'
        },
        docFooter: {
            prev: '上一节',
            next: '下一节'
        },
        sidebar: [
            {
                text: '手册',
                items: [
                    { text: '快速开始', link: '/quick/index.html' },
                    { text: '项目介绍', link: '/guide/index.html' },
                    { text: '引擎介绍', link: '/core/index.html' },
                    { text: '引擎API', link: '/core/api.html' },
                    { text: '特性', link: '/feature/index.html' },
                    { text: '发布', link: '/deploy/index.html' },
                    { text: '多环境', link: '/muti-env/index.html' },
                    { text: '工程结构', link: '/project/index.html' },
                    { text: '第三方依赖', link: '/third-dept/index.html' },
                ]
            }
        ],
    },
})