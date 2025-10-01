大家好，我是 `前端之虎陈随易`，也是 `MoonBit` 官方认证的 `布道师`，欢迎大家与我交朋友，我所有文章均为古法手写无 AI。

- 我的个人网站 `https://chensuiyi.me`
- MoonBit 开发网：`https://moonbit.dev`

---

> 请注意，这不是单纯的技术教程，而是与各位交朋友，分享代码行间的故事，心得，经验与技术，不喜请移步。

有读者访问了 MoonBit 网站后，给我带来了一个反馈：`大佬，我还是没搞明白MoonBit到底是什么？能做什么？`。

为了讲清楚这个问题，我查看了 MoonBit 公众号的所有文章和相关资料，写成此文。

加入 MoonBit 交流群，请加微信：`chensuiyime`。

## MoonBit 是什么？

![](https://static.yicode.tech/images/202507/20250709155638.png)

MoonBit 是一个 `编程语言`，于2022年发布 (`还很年轻！`)，由张宏波老师 (`ReScript作者`) 集数十年编程语言设计功力的倾心力作！

`年轻` 不是 MoonBit 的劣势，反而是它最大的优势，可以借鉴并参考各种优秀编程语言的精华，打造一门德智体美劳全面发展的现代化编程语言。

## 张宏波是谁？

张宏波现任 IDEA 基础软件研究中心讲席科学家及其部门负责人，领导 MoonBit 编程语言的开发，他是通用程序语言 ReScript 作者 (之前被称为 ReasonML&BuckleScript)，程序语言 OCaml 的前核心开发人员 (2012)。

ReScript 语言是中国人主导的首个在国际范围内具有一定影响力的通用程序语言，OCaml 获 2023 SIGPLAN 软件大奖。

张宏波本科毕业于清华大学电子工程系，后在美国宾夕法尼亚大学攻读程序语言专业博士 (硕士毕业)。

他从学术界转入工业界是因为受 Bloomberg 破格邀请 (2013)，从事函数式语言编译器的开发工作，其在 Bloomberg 主导的 BuckleScript 编译器是该公司最受欢迎的开源项目，后来被 Facebook 等大公司用于商业开发。

2017年，张宏波回国定居，他接受 Facebook 破格邀请，成为该公司唯一一位在中国大陆工作的软件工程师。他在 Facebook 的主要工作是继续维护 BuckleScript 编译器，后来该项目演变成了独立的 ReScript 编程语言，张宏波也参与了 Facebook 另一个编程语言 Flow 的开发工作。

2022年，张宏波加入了粤港澳大湾区数字经济研究院 (福田) 并创立基础软件中心部门，带领团队开发了 MoonBit 编程语言及其整套开发环境。

## IDEA 研究院与基础软件中心介绍

粤港澳大湾区数字经济研究院 (`简称IDEA`)。

IDEA 研究院基础软件中心 (`DII, Digital Infrastructure Innovation`) 立足于底层软件的研究与实现，专注于通用程序语言的设计、编译器、运行时、IDE 以及构建系统的研发，实现一整套领先世界、完全自主的程序开发环境。在此基础上，最终实现可持续的、健康的程序开发环境生态建设。

和传统学术研究机构追求理论上的单点创新不同，基础软件中心专注于系统层面，着眼于当下大规模基础软件研发工程上的协同创新和落地。

目前，基础软件中心致力于打造专为云&边缘计算设计的开发平台，最终完成自有的、可持续的、健康的开发者生态建设。

## MoonBit 核心特点是什么？

说到编程语言的特点，我们可以简单回顾一下目前的几个主流编程语言。

- `Rust`：强迫症患者的福音，编译器比你军训的教官还严格。
- `Go`：简约而不简单，自带语言级并发，云原生时代的宠儿。
- `Python`：编程界的 “万能胶”，啥都能粘，但很多时候跑得像蜗牛。
- `JavaScript`：浏览器的唯一 `代言人`，2009年越狱成功，以成中小项目首选。
- `Java`：企业级 “老干部”，代码写得像八股文一样工整，就是太啰嗦了。
- `PHP`：Web 开发的 “老司机”，虽然天天被黑，但互联网一半网站都是它搭的。

**而 MoonBit 的核心特点是：**

MoonBit 就像个全能学霸，既有函数式编程的优雅 (不会写出乱七八糟的代码)，又能编译成各种格式 (`WebAssembly`、`JavaScript`、`原生代码`)，还特别聪明 (强类型+模式匹配)，是张宏波老师为现代程序员精心调配的 `编程语言鸡尾酒`。

## MoonBit 有哪些应用场景？

**高性能 Web 应用**

- `Wasm代码体积优化`：HTTP 服务器仅 27KB，比 Rust 小 73%。
- `计算性能`：Cmark 库解析速度比 JS 快 12-14 倍。

可用于富文本编辑器、实时数据可视化 (如股票行情仪表盘)。

技术实现：支持 WebAssembly (Wasm) 和 JavaScript 双后端编译，通过类型系统避免字符串滥用导致的 XSS 漏洞。

**类型安全的 Web 框架**

- 提供 HTML EDSL (嵌入式领域特定语言)。
- 副作用管理借鉴 Elm 的 Cmd 模型。

**跨平台 H5 应用**

- 支持编译为 Wasm+JS 混合模块，嵌入 React/Vue 等框架。
- JSON 解析速度比 JS 快 8 倍。

**云计算与微服务**

- `Wasm组件模型`：支持 Spin 框架集成，实现模块化部署、资源隔离与安全沙箱。
- 高并发 API 服务 (如金融交易接口)。

**边缘计算与 IoT 网关**

- `PDK插件支持`：官方插件已纳入 Extism PDK 库，直接调用硬件资源 (传感器、摄像头)。
- `资源优化`：低内存占用 (适配 512KB RAM 设备)，支持 RISC-V 交叉编译。
- 工业物联网边缘节点数据处理，本地执行 AI 推理 (兼容 C 生态调用 TensorFlow Lite)。

**数据处理与 AI 服务**

- `内置AI原生支持`：工具链集成 moonagent，自动生成代码/测试用例。
- 实时数据流处理 (如日志分析、推荐引擎)，结合响应式编程范式实现低延迟流水线。

**嵌入式开发**

- `RISC-V原生支持`：生成自包含二进制 (仅依赖 libc)，部署至 ESP32 等 MCU。
- `康威生命游戏案例`：在 ESP32-C3 芯片上运行帧率达 33.1 FPS，性能媲美 C 语言。
- 模式匹配等现代语法简化状态机逻辑，避免手动内存管理。

**边缘 AI 设备**

- `硬件加速`：直接调用硬件加速器 (如 NPU)，结合 Wasm 轻量部署，实现端侧实时图像识别。

**游戏开发**

- `WASM-4框架支持`：开发复古风格游戏 (160x160 像素)，跨浏览器运行。

**性能敏感游戏模块**

- `混合架构`：物理引擎或 AI 决策模块用 MoonBit 编译为 Wasm，嵌入 Unity/Godot 等主流引擎。

**无缝调用 Python 生态**

- 封装 turtle 绘图库或直接运行 pygame 模块，无需处理 C 头文件。

**替代多语言栈**

- 用 MoonBit 单语言实现需 TypeScript+Rust+Go 协作的模块。

## MoonBit 包含哪些部分？

MoonBit 在 2022 年 10 月推出，那时恰逢 ChatGPT 刚刚问世。

MoonBit 平台的出现不仅仅作为一种编程语言，更提供一个完整的开发工具链，包括 `IDE`、`编译器`、`构建系统`、`包管理器`、`VSCode扩展` 等。

**包管理平台**

网址：`https://mooncakes.io`，中文名称：`月饼`。

![](https://static.yicode.tech/images/202507/20250709142558.png)

用户安装 MoonBit 后，可以在本机通过 `moon login`、`moon publish` 等命令将模块发布到 `月饼` 中心，其他用户就可以使用 `moon add`、`moon install` 等命令下载使用了。

**VSCode 扩展**

下载地址：`https://aka.moonbitlang.com/csy`

![](https://static.yicode.tech/images/202507/20250709144704.png)

**在线 IDE**

地址：`https://try.moonbitlang.cn`

![](https://static.yicode.tech/images/202507/20250709145930.png)

可以通过在线 IDE，快速测试，体验，验证 MoonBit 语法，代码，案例等。

**官方文档**

地址：`https://docs.moonbitlang.cn`

![](https://static.yicode.tech/images/202507/20250709155120.png)

**核心库**

地址：`https://github.com/moonbitlang/core`

![](https://static.yicode.tech/images/202507/20250709155212.png)

**构建系统和包管理**

地址：`https://github.com/moonbitlang/moon`

**编译器**

地址：`https://github.com/moonbitlang/moonbit-compiler`

![](https://static.yicode.tech/images/202507/20250709155421.png)

---

希望这篇文章，可以让大家进一步认识 MoonBit，了解 MoonBit，学习 MoonBit，使用 MoonBit，一起为国产编程语言的发展和壮大，添砖加瓦。

加入 MoonBit 交流群，请加微信：`chensuiyime`。

---

往期文章：

- [MoonBit 助力前端开发，加密&性能两不误，斐波那契测试提高 3-4 倍](https://mp.weixin.qq.com/s/V-c_lGjtJ1tW1RoB8icn0w)
