<template>
    <div class="home-more">
        <div class="banner">
            <div class="info">
                <div class="left">
                    <div class="logo-wrap">
                        <img class="logo" src="/logo.png" />
                    </div>
                    <div class="logo-name">MoonBit(月兔)</div>
                    <div class="describe">
                        <div class="title">新一代AI云原生开发平台</div>
                        <div class="tips">快速 · 简单 · 可拓展</div>
                    </div>
                </div>
                <div class="space"></div>
                <div class="right">
                    <div class="compare">
                        <div class="row">
                            <div class="img">
                                <img class="icon" src="/1.svg" />
                            </div>
                            <div class="data">
                                <div class="line">
                                    <div class="name">MoonBit</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner main" style="width: 3%"></div>
                                        </div>
                                        <div class="value">177.9ms</div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="name">Rust</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner" style="width: 2%"></div>
                                        </div>
                                        <div class="value">160.8ms</div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="name">Go</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner" style="width: 200px"></div>
                                        </div>
                                        <div class="value">6357.8ms</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="img">
                                <img class="icon" src="/2.svg" />
                            </div>
                            <div class="data">
                                <div class="line">
                                    <div class="name">MoonBit</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner main" style="width: 2%"></div>
                                        </div>
                                        <div class="value">253 bytes</div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="name">Rust</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner" style="width: 3%"></div>
                                        </div>
                                        <div class="value">498 bytes</div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="name">Go</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner" style="width: 200px"></div>
                                        </div>
                                        <div class="value">1,447,712 bytes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="img">
                                <img class="icon" src="/3.svg" />
                            </div>
                            <div class="data">
                                <div class="line">
                                    <div class="name">MoonBit</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner main" style="width: 10%"></div>
                                        </div>
                                        <div class="value">1.06 s</div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="name">Rust</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner" style="width: 200px"></div>
                                        </div>
                                        <div class="value">9.01 s</div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="name">Go</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner" style="width: 30%"></div>
                                        </div>
                                        <div class="value">2.56 s</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="img">
                                <img class="icon" src="/4.svg" />
                            </div>
                            <div class="data">
                                <div class="line">
                                    <div class="name">MoonBit</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner main" style="width: 4%"></div>
                                        </div>
                                        <div class="value">338.6 ns</div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="name">JS Iterator helpers</div>
                                    <div class="progress">
                                        <div class="bar">
                                            <div class="bar-inner" style="width: 200px"></div>
                                        </div>
                                        <div class="value">8,493.8 ns</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="action">
                <div class="button plugin">下载插件</div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss">
.banner {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .info {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .action {
        margin-top: 30px;
        .button {
            &.plugin {
                background-color: var(--main-color);
                color: #fff;
                height: 40px;
                padding: 0 20px;
                line-height: 40px;
                border-radius: 20px;
            }
        }
    }
    .left {
        flex: 0 0 auto;
        text-align: right;
        .logo-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
            .logo {
                height: 150px;
            }
        }
        .logo-name {
            font-size: 40px;
            font-weight: bold;
        }
        .describe {
            margin-top: 30px;
            .title {
                font-size: 20px;
            }
            .tips {
                margin-top: 5px;
            }
        }
    }
    .space {
        flex: 0 0 50px;
    }
    .right {
        display: flex;
        justify-content: flex-start;
        flex: 0 0 auto;
        padding-top: 20px;
        .compare {
            padding: 30px 50px;
            // border: 1px solid #ddd;
            border-radius: 6px;
            .row {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                &:last-of-type {
                    margin-bottom: 0;
                }
                .img {
                    flex: 0 0 30px;
                }
                .data {
                    flex: 1 1 100%;
                }
                .line {
                    display: flex;
                    margin-bottom: 5px;
                    height: 16px;
                    font-size: 14px;
                    .name {
                        flex: 0 0 150px;
                        text-align: right;
                        padding-right: 10px;
                    }
                    .progress {
                        flex: 1 1 100%;
                        display: flex;
                        align-items: center;

                        .bar {
                            height: 16px;
                            width: 200px;
                            border-radius: 4px;
                            background-color: #f5f5f5;
                            overflow: hidden;
                            .bar-inner {
                                height: 100%;
                                &.main {
                                    background-color: var(--main-color);
                                }
                                background-color: #bbb;
                            }
                        }
                        .value {
                            padding-left: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>
