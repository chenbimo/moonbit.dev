大家好，我是 `前端之虎陈随易`，也是 `MoonBit` 官方认证的 `布道师`，欢迎大家与我交朋友，我所有文章均为古法手写无 AI。

- 我的个人网站 `https://chensuiyi.me`
- MoonBit 开发网：`https://moonbit.dev`

---

> 请注意，这不是单纯的技术教程，而是与各位交朋友，分享代码行间的故事，心得，经验与技术，不喜请移步。

---

前几天我发了 2 篇 MoonBit 文章，分别是[程序员的新玩具，MoonBit (月兔) 编程语言科普](https://mp.weixin.qq.com/s/r6vMnoTkipzwdW6snSlLww)和 [MoonBit 助力前端开发，加密&性能两不误，斐波那契测试提高 3-4 倍](https://mp.weixin.qq.com/s/V-c_lGjtJ1tW1RoB8icn0w)，有小伙伴看了之后，还是不知道 MoonBit 如何用于前端开发，如何在前端开发中发挥作用。

那么本文，针对这个问题，给大家伙详细说说。

初次看到 MoonBit 编程语言，是2024年的4月份，它的主打功能 `高质量的极小wasm` 令我印象深刻，两眼放光。根据我的猜测，不清楚 MoonBit 在前端的应用场景，应该很大的可能是对这个 `wasm` 了解不够所导致的。而 MoonBit 在前端开发中的应用长，其实主要就是 wasm 的应用场景。

JavaScript 从1995年诞生到现在，已经30年了，一直是浏览器中可编程语言的 `独苗`，或许历史上曾出现过其他技术的尝试，但基本比蚍蜉的寿命还短。

曾经的 Dart 豪言要做 JavaScript 的继承人，但浏览器厂商 (`微软、Mozilla`) 不认，导致其只能调转船头，与 Flutter 配合，做跨平台应用，要想在浏览器中使用？不好意思，请编译成 js 再说。

![](https://static.yicode.tech/images/202507/20250715100732.png)

而这个由 `Brendan Eich` 花了10天设计的语言，也一直被人诟病，其语法松散如薛定谔的量子猫一样具有波粒二象性，难以琢磨。由于 JavaScript 的性能本就一般 (`比Python好`)，所以很多大型应用 (`如在线PS，网页设计工具Figma`) 就很难直接在浏览器中流畅使用。

为了解决这个问题，2017年 WebAssembly 的概念被提出，2019年为其制定了 Web 标准，成为了第二个可以在浏览器中直接运行的编程语言，主打功能就一个字：`快`。

怎么个快法呢？请看以下数据：

- **斐波那契数列**：参数增大时 Wasm 优势更明显，平均速度快 62.97%
- **图像处理**：图片滤镜和视频卷积效率提升 41.7%-49%
- **音频解码**：处理高音质音频时，Wasm 耗时从10秒降至2秒
- **Wasm**：流式编译 (compileStreaming) 比 JS 解析快 10-20 倍
- **缓存机制**：IndexedDB 存储编译后模块，热启动加速 400 倍

所以，如果你的某个业务，某个功能，需要 `更快` 的话，wasm 是不二之选。

```wast
(module
  (func $add (param $x i32) (param $y i32) (result i32)
    (i32.add
      (local.get $x)
      (local.get $y)
    )
  )
  (export "add" (func $add))
)
```

同时呢，wasm 天然自带加密，如上，是实现一个最简单的加法函数。功能稍微复杂一点，代码量多一点，肉眼和人力很难阅读和破解 (`并不是完全不能破解`)，所以，针对一些机密性的，敏感性的功能，通过编译成 wasm 对外提供，可以在一定程度上解决保密性问题，比 js 裸奔或代码混淆强多了。

代码混淆一个会增加代码体积，二个会让性能严重下降，三个还远比 wasm 容易破解，属于非常鸡肋的一个方案。

好了，说完了背景，相信读者朋友们对 wasm 应该有一定程度的认识和了解，接下来，怎么跟 MoonBit 扯上关系呢？

![](https://static.yicode.tech/images/202507/20250715105741.png)

很简单，请看上图。

目前业界内，生成高质量的 wasm 的编程语言，非 Rust 莫属，但是呢，MoonBit 这个专门主打高质量 wasm 的编程语言，比 Rust 更强，语法也没有 Rust 那么复杂，非常适合前端，或者说是所有程序员入手。

接下来，我实际演示一下，如何用 MoonBit 写一个加法函数，并编译成 wasm，然后在前端中使用。

创建一个目录，有以下几个文件：

```bash
t55/
├── main.mbt # 主入口 相当于 index.js
├── moon.mod.json # 模块信息 相当于 package.json
└── moon.pkg.json # 包信息 相当于 lib（库）的描述文件
```

文件内容分别如下：

**main.mbt**

```mbt
pub fn plus(x : Int, y : Int) -> Int {
  x + y
}

fn main {
  println("加法函数")
}
```

**moon.mod.json**

```json
{
    "name": "chensuiyi/plus",
    "version": "0.1.0",
    "readme": "README.md",
    "repository": "",
    "license": "Apache-2.0",
    "keywords": [],
    "description": "",
    "source": "",
    "warn-list": "-A"
}
```

**moon.pkg.json**

```json
{
    "is_main": true,
    "link": {
        "wasm": {
            "exports": ["plus"] // 导出 plus 函数给前端使用
        }
    }
}
```

下一步，直接运行 `moon build --target wasm` 命令，就会在当前目录下，生成 `target/wasm/release/build/plus.wasm`。

下一步呢，创建一个 html 文件，把 wasm 引入：

---

在线访问地址：`https://static.yicode.tech/moonbit-wasm-plus.html`，浏览器控制台看输出结果。

**moonbit-wasm-plus.html**

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>测试MoonBit的plus.wasm</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <script>
            WebAssembly.instantiateStreaming(fetch("./download/plus.wasm"), {
                spectest: {
                    print_char: (char) => {
                        console.log(char);
                    },
                },
            }).then((result) => {
                const sum = result.instance.exports.plus(123, 456);
                console.log("🔥[ 加法求和 123 + 456 ] = ", sum);
            });
        </script>
    </body>
</html>

```

![](https://static.yicode.tech/images/202507/20250715115537.png)

这么一来呢，我们就实现了 MoonBit 在前端中的应用，至于 MoonBit 如何为前端开发带来帮助，那就主要看 wasm 能给前端开发带来什么好处了。

注意了，这只是 MoonBit 的一部分优势，在生成 wasm 这个事情方面，做到了极致。还有更多其他场景，其他平台，其他问题上面的优势，本文就不再细说了，后续文章会进一步分享。

MoonBit 交流群加微：`chensuiyime`，加不上到公众号：`陈随易` 留言。

最后，MoonBit 在7月19日在杭州的黄龙国际中心有一个技术沙龙，如果大家对 MoonBit 感兴趣，可以扫描下方二维码报名参会与。

![](https://static.yicode.tech/images/202507/20250715115244.png)
