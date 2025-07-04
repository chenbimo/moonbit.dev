// MoonBit 官网交互功能
document.addEventListener('DOMContentLoaded', function () {
    initImageErrorHandling();
    initProgressBarAnimations();
    initPerformanceMonitoring();
    initParallaxEffects();
    initMagneticButton();
    initProgressBa; // 观察所有需要动画的元素
    document.querySelectorAll('.feature-card, .article-card, .article-horizontal, .video-card, .section-title').forEach((el) => {
        observer.observe(el);
    });
    eractions();
    initButtonEffects();
    initIntersectionObserver();
    initSmoothScrolling();
    initParticleEffects();
    initArticleAndVideoInteractions();
    initVideoThumbnailEffects();
    initProgressiveImageLoading();
});

// 图片加载错误处理
function initImageErrorHandling() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        img.addEventListener('error', function () {
            this.style.display = 'none';
            console.warn('图片加载失败:', this.src);
        });

        img.addEventListener('load', function () {
            this.style.opacity = '1';
        });
    });
}

// 进度条动画
function initProgressBarAnimations() {
    setTimeout(() => {
        document.querySelectorAll('.bar-inner').forEach((bar, index) => {
            bar.style.animationDelay = `${index * 0.1}s`;
        });
    }, 500);
}

// 性能监控
function initPerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            const loadTime = navigation.loadEventEnd - navigation.fetchStart;
            console.log('页面加载时间:', loadTime, 'ms');

            // 发送性能数据到分析系统（可选）
            if (loadTime > 3000) {
                console.warn('页面加载时间过长，需要优化');
            }
        });
    }
}

// 视差效果
function initParallaxEffects() {
    const banner = document.querySelector('.banner[data-parallax="true"]');
    if (banner && window.innerWidth > 768) {
        let ticking = false;

        document.addEventListener('mousemove', (e) => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax(e);
                    ticking = false;
                });
                ticking = true;
            }
        });

        function updateParallax(e) {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPercent = (clientX / innerWidth - 0.5) * 2;
            const yPercent = (clientY / innerHeight - 0.5) * 2;

            const geoElement = banner.querySelector('.geometric-bg');
            if (geoElement) {
                geoElement.style.setProperty('--mouse-x', `${xPercent * 10}px`);
                geoElement.style.setProperty('--mouse-y', `${yPercent * 10}px`);
            }

            const info = banner.querySelector('.info');
            if (info) {
                info.style.transform = `translate(${xPercent * 2}px, ${yPercent * 2}px)`;
            }
        }
    }
}

// 磁性按钮效果
function initMagneticButton() {
    const magneticButtons = document.querySelectorAll('[data-magnetic="true"]');

    magneticButtons.forEach((button) => {
        if (window.innerWidth > 768) {
            button.addEventListener('mouseenter', function () {
                this.addEventListener('mousemove', magneticEffect);
            });

            button.addEventListener('mouseleave', function () {
                this.removeEventListener('mousemove', magneticEffect);
                this.style.transform = '';
            });
        }
    });

    function magneticEffect(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    }
}

// 进度条点击交互
function initProgressBarInteractions() {
    document.querySelectorAll('.bar').forEach((bar) => {
        bar.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const clickPosition = (e.clientX - rect.left) / rect.width;
            const value = this.parentElement.parentElement.querySelector('.value').textContent;

            showProgressDetail(this, clickPosition, value);
        });
    });
}

// 按钮效果
function initButtonEffects() {
    // 下载按钮
    const downloadButton = document.querySelector('.button.plugin');
    if (downloadButton) {
        downloadButton.addEventListener('click', handleDownloadClick);
    }

    // 次要按钮
    const secondaryButtons = document.querySelectorAll('.button.secondary');
    secondaryButtons.forEach((button) => {
        button.addEventListener('click', handleSecondaryButtonClick);
    });
}

// 处理下载按钮点击
function handleDownloadClick(e) {
    e.preventDefault();

    const button = this;
    const originalText = button.textContent;

    // 添加加载状态
    button.classList.add('loading');
    button.textContent = '正在准备下载...';
    button.disabled = true;

    // 模拟下载过程
    setTimeout(() => {
        button.classList.remove('loading');
        button.classList.add('success');
        button.textContent = '下载成功！';

        // 恢复原始状态
        setTimeout(() => {
            button.classList.remove('success');
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }, 1500);

    // 添加点击波纹效果
    createRippleEffect(button, e);
}

// 处理次要按钮点击
function handleSecondaryButtonClick(e) {
    e.preventDefault();
    createRippleEffect(this, e);

    // 这里可以添加具体的跳转逻辑
    console.log('查看更多文章');
}

// 创建波纹效果
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// 交叉观察器 - 用于动画触发
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // 为特性卡片添加延迟动画
                if (entry.target.classList.contains('feature-card')) {
                    const cards = document.querySelectorAll('.feature-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }

                // 为文章卡片添加延迟动画
                if (entry.target.classList.contains('article-card')) {
                    const cards = document.querySelectorAll('.article-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.feature-card, .article-card, .section-title').forEach((el) => {
        observer.observe(el);
    });
}

// 平滑滚动导航
function initSmoothScrolling() {
    // 添加导航功能（如果需要）
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 简化的粒子效果
function initParticleEffects() {
    if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        createSimpleParticles();
    }
}

function createSimpleParticles() {
    const banner = document.querySelector('.banner');
    if (!banner) return;

    const particleCount = Math.min(20, Math.floor(window.innerWidth / 100)); // 响应式粒子数量

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--tech-cyan);
            border-radius: 50%;
            opacity: 0;
            z-index: 1;
            pointer-events: none;
            will-change: transform, opacity;
        `;

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        const duration = 4 + Math.random() * 4;
        const delay = Math.random() * 3;

        particle.style.animation = `particleFloat ${duration}s ease-in-out infinite ${delay}s`;

        banner.appendChild(particle);
    }
}

// 显示进度条详细信息
function showProgressDetail(barElement, position, value) {
    const tooltip = document.createElement('div');
    tooltip.className = 'progress-tooltip';
    tooltip.textContent = `点击位置: ${(position * 100).toFixed(1)}% | 实际值: ${value}`;

    tooltip.style.cssText = `
        position: absolute;
        top: -40px;
        left: ${position * 100}%;
        transform: translateX(-50%);
        background: var(--text-primary);
        color: var(--background-primary);
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;

    barElement.style.position = 'relative';
    barElement.appendChild(tooltip);

    // 添加进入动画
    tooltip.style.opacity = '0';
    tooltip.style.transform = 'translateX(-50%) translateY(-5px)';

    requestAnimationFrame(() => {
        tooltip.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 300);
        }
    }, 2000);
}

// 键盘导航增强
document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function () {
    document.body.classList.remove('keyboard-navigation');
});

// 文章卡片点击事件
document.addEventListener('DOMContentLoaded', function () {
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach((card) => {
        card.addEventListener('click', function () {
            // 这里可以添加文章跳转逻辑
            console.log('点击文章:', this.querySelector('h3').textContent);
        });

        // 添加键盘支持
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// 文章和视频卡片点击事件
function initArticleAndVideoInteractions() {
    // 横向文章卡片点击事件
    const articleCards = document.querySelectorAll('.article-horizontal');
    articleCards.forEach((card) => {
        card.addEventListener('click', function () {
            const title = this.querySelector('h3').textContent;
            console.log('点击文章:', title);
            // 这里可以添加文章跳转逻辑
        });

        // 添加键盘支持
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // 视频卡片点击事件
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach((card) => {
        card.addEventListener('click', function () {
            const title = this.querySelector('h3').textContent;
            console.log('点击视频:', title);
            // 这里可以添加视频播放逻辑

            // 模拟播放效果
            const playButton = this.querySelector('.play-button');
            if (playButton) {
                playButton.textContent = '⏸️';
                setTimeout(() => {
                    playButton.textContent = '▶️';
                }, 2000);
            }
        });

        // 添加键盘支持
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // 标签点击事件
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag) => {
        tag.addEventListener('click', function (e) {
            e.stopPropagation(); // 防止冒泡到父元素
            const tagText = this.textContent;
            console.log('点击标签:', tagText);
            // 这里可以添加标签筛选逻辑
        });
    });
}

// 视频缩略图悬停效果
function initVideoThumbnailEffects() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');

    videoThumbnails.forEach((thumbnail) => {
        let hoverTimer;

        thumbnail.addEventListener('mouseenter', function () {
            // 延迟显示播放按钮
            hoverTimer = setTimeout(() => {
                const playButton = this.querySelector('.play-button');
                if (playButton) {
                    playButton.style.opacity = '1';
                    playButton.style.transform = 'translate(-50%, -50%) scale(1)';
                }
            }, 200);
        });

        thumbnail.addEventListener('mouseleave', function () {
            clearTimeout(hoverTimer);
            const playButton = this.querySelector('.play-button');
            if (playButton) {
                playButton.style.opacity = '0';
                playButton.style.transform = 'translate(-50%, -50%) scale(0.8)';
            }
        });
    });
}

// 文章图片渐进加载效果
function initProgressiveImageLoading() {
    const articleImages = document.querySelectorAll('.article-image, .video-thumbnail');

    articleImages.forEach((imageContainer) => {
        const placeholder = imageContainer.querySelector('.placeholder-image, .placeholder-video');
        if (placeholder) {
            // 模拟图片加载
            setTimeout(() => {
                imageContainer.classList.add('loaded');
            }, Math.random() * 1000 + 500);
        }
    });
}

// 防抖函数 - 优化性能
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数 - 优化性能
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// 窗口大小改变时的处理
const handleResize = debounce(() => {
    // 重新计算粒子效果
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.particle').forEach((p) => p.remove());
    } else if (document.querySelectorAll('.particle').length === 0) {
        initParticleEffects();
    }
}, 250);

window.addEventListener('resize', handleResize);

// 页面可见性变化处理
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 页面隐藏时暂停动画
        document.body.classList.add('page-hidden');
    } else {
        // 页面显示时恢复动画
        document.body.classList.remove('page-hidden');
    }
});

// 错误处理
window.addEventListener('error', function (e) {
    console.error('页面错误:', e.error);
});

// 添加CSS动画支持检测
function detectAnimationSupport() {
    const testEl = document.createElement('div');
    const animationSupport = 'animation' in testEl.style;

    if (!animationSupport) {
        document.body.classList.add('no-animations');
    }
}

detectAnimationSupport();
