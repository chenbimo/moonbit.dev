import { defineConfig } from 'vitepress';
import { docsAuto } from '@yidocs/auto';
import markdownItVip from '@yidocs/vip';

const { sideBar, navBar } = docsAuto();

export default defineConfig({
    layout: false,
    base: '/',
    title: 'MoonBit Dev',
    description: '何以解忧，唯有代码。',
    lastUpdated: true,
    cleanUrls: false,
    outDir: './dist',
    srcDir: './markdown',
    ignoreDeadLinks: true,
    titleTemplate: false,
    sitemap: {
        hostname: 'https://chensuiyi.me'
    },
    head: [
        [
            'meta',
            {
                name: 'keywords',
                content: '前端之虎, 程序员, 农村程序员, html, js, css, Vue.js, Node.js,函数地图, fnMap, 易待办, 陈随易, 开源世界, Node.js全栈指南, yite-cli, funpi, 随易访谈'
            }
        ],
        ['meta', { name: 'author', content: '前端之虎陈随易' }],
        //
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/favicon.ico'
            }
        ],
        [
            'script',
            {
                defer: '',
                src: '//tj.yicode.tech/script.js',
                'data-website-id': 'fe6ca8d3-29e8-40c4-a778-7b045bcc118c'
            }
        ]
    ],
    themeConfig: {
        logo: '/logo.jpg',
        lastUpdatedText: '更新时间',
        siteTitle: '陈随易',
        outline: 'deep',
        outlineTitle: '大纲',
        socialLinks: [
            //
            { icon: 'github', link: 'https://github.com/chenbimo' }
        ],
        footer: {
            message: '何以解忧，唯有代码。不忘初心，方得始终。',
            copyright: 'Copyright © 2019-present 陈随易'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        nav: [{ text: '首页', link: '/' }, ...navBar],
        sidebar: sideBar
    },
    vite: {
        optimizeDeps: {},
        plugins: []
    },
    markdown: {
        theme: 'one-dark-pro',
        lineNumbers: true,
        config: (md) => {
            md.use(markdownItVip);
        }
    }
});
