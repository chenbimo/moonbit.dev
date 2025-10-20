// 文章配置
const articlesConfig = [
    {
        title: 'MoonBit助力前端开发，加密&性能两不误，斐波那契测试提高3-4倍',
        links: [
            { platform: '掘金', url: 'https://juejin.cn/post/7524159959479812105' },
            { platform: '知乎', url: 'https://zhuanlan.zhihu.com/p/1925634116163986346' },
            { platform: '公众号', url: 'https://mp.weixin.qq.com/s/V-c_lGjtJ1tW1RoB8icn0w' }
        ]
    },
    {
        title: '程序员的新玩具，MoonBit(月兔)编程语言科普',
        links: [
            { platform: '掘金', url: 'https://juejin.cn/post/7524864401615257626' },
            { platform: '知乎', url: 'https://zhuanlan.zhihu.com/p/1926311913391912435' },
            { platform: '公众号', url: 'https://mp.weixin.qq.com/s/r6vMnoTkipzwdW6snSlLww' }
        ]
    }
];

// 渲染文章列表
function renderArticles() {
    const articlesGrid = document.querySelector('.articles-grid');
    if (!articlesGrid) return;

    // 清空现有内容
    articlesGrid.innerHTML = '';

    // 创建文章行
    const articleRow = document.createElement('div');
    articleRow.className = 'article-row';

    // 遍历文章配置生成 HTML
    articlesConfig.forEach((article) => {
        const articleItem = document.createElement('div');
        articleItem.className = 'article-item';

        // 创建标题
        const title = document.createElement('h3');
        title.className = 'article-title';
        title.textContent = article.title;

        // 创建底部链接区域
        const footer = document.createElement('div');
        footer.className = 'article-footer';

        // 创建平台链接
        article.links.forEach((link) => {
            const linkTag = document.createElement('a');
            linkTag.href = link.url;
            linkTag.target = '_blank';
            linkTag.className = 'platform-tag';
            linkTag.textContent = link.platform;
            footer.appendChild(linkTag);
        });

        articleItem.appendChild(title);
        articleItem.appendChild(footer);
        articleRow.appendChild(articleItem);
    });

    articlesGrid.appendChild(articleRow);
}

// Tab 切换功能
document.addEventListener('DOMContentLoaded', function () {
    // 渲染文章列表
    renderArticles();

    // 主要的 tab 切换功能
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach((button) => {
        button.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            // 移除所有活动状态
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            tabPanels.forEach((panel) => panel.classList.remove('active'));

            // 添加活动状态
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // 平台选择 tab 功能 - 改进版本，支持多个独立的平台选择器
    const platformSelectors = document.querySelectorAll('.platform-selector');

    platformSelectors.forEach((selector) => {
        const platformTabs = selector.querySelectorAll('.platform-tab');
        const parentContainer = selector.parentNode;
        const platformPanels = parentContainer.querySelectorAll('.platform-panel');

        platformTabs.forEach((tab) => {
            tab.addEventListener('click', function () {
                const targetPlatform = this.getAttribute('data-platform');

                // 只在当前选择器组内移除活动状态
                platformTabs.forEach((t) => t.classList.remove('active'));
                platformPanels.forEach((p) => p.classList.remove('active'));

                // 添加活动状态
                this.classList.add('active');
                const targetPanel = document.getElementById(targetPlatform);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    });

    // 复制到剪贴板功能
    window.copyToClipboard = function (text) {
        navigator.clipboard
            .writeText(text)
            .then(function () {
                // 创建临时提示
                const tooltip = document.createElement('div');
                tooltip.textContent = '已复制!';
                tooltip.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #10b981;
                color: white;
                padding: 8px 16px;
                border-radius: 6px;
                font-size: 14px;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            `;
                document.body.appendChild(tooltip);

                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            })
            .catch(function (err) {
                console.error('复制失败:', err);
            });
    };

    // 添加工具提示功能
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach((element) => {
        element.addEventListener('mouseenter', function () {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = tooltipText;
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 12px;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            document.body.appendChild(tooltip);

            // 定位工具提示
            const rect = this.getBoundingClientRect();
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';

            // 淡入效果
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 100);

            // 存储引用以便移除
            this._tooltip = tooltip;
        });

        element.addEventListener('mouseleave', function () {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });

    // 平滑滚动到 level-2 区域
    const downloadLinks = document.querySelectorAll('a[href*="download"]');
    downloadLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            const level2 = document.querySelector('.level-2');
            if (level2) {
                e.preventDefault();
                level2.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
