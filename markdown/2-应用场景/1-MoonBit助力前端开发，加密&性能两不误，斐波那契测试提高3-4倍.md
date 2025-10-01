大家好，我是 `前端之虎陈随易`，也是 `MoonBit` 官方认证的 `布道师`，欢迎大家与我交朋友，我所有文章均为古法手写无 AI。

- 我的个人网站 `https://chensuiyi.me`
- MoonBit 开发网：`https://moonbit.dev`

---

> 请注意，这不是单纯的技术教程，而是与各位交朋友，分享代码行间的故事，心得，经验与技术，不喜请移步。

![](https://static.yicode.tech/images/202507/20250707163212.png)

这是 MoonBit 的第一篇文章，做了很多准备工作，比如购买了 `https://moonbit.dev` 域名，并花了数天时间在 AI 的协助下，设计了 MoonBit 的介绍页。

![](https://static.yicode.tech/images/202507/20250707163417.png)

与 MoonBit 的缘分，要追溯到2024年4月份，彼时我正在准备我的 `随易周刊`，偶然看到 MoonBit 的文章，其创始人 `张宏波` 老师让我瞬间来了兴趣。

因为我以前上班每天必逛知乎，张宏波老师在知乎的技术圈子里非常有名，其主导设计的 `ReScript` 编程语言，在当时的 `补天行动(弥补JS天坑)` 中性能优异，备受瞩目。同时期的还有 `TypeScript`、`Flow`、`Elm` 等，那么如今来看呢，`TypeScript` 已成这场 `补天竞赛` 中的最大赢家。

随着时间的推移，张宏波老师于2022年，带来了他的最新力作，也就是本文的主角：`MoonBit` 编程语言，中文名称叫做 `月兔`。

![](https://static.yicode.tech/images/202507/20250707164801.png)

第一次了解到 `MoonBit`，对我吸引力最大的就是其优秀的 `wasm` 能力，这也是继 `Docker` 之后，下一个可能会改变行业的开发和生态的技术。

可以看到上图中，MoonBit 在运行速度、产物大小上，与 Rust 不相上下，在编译时间上面，更是遥遥领先。

由此，让我对 MoonBit 的兴趣徒增，并花了一些时间研究和学习，接下来，我在本文中分享 MoonBit 在前端开发中的 `源码加密` 和 `性能提升` 方面的应用，并提供详细的评测数据。

---

前端源码加密这个问题，大部分情况是不需要的，一般来说，核心逻辑都在服务端，前端仅仅只是展示界面，调用接口而已。

但事无绝对，比如我就遇到了前端源码需要加密的问题，也是因此才被 MoonBit 的 Wasm 优秀特性深深吸引。

原因很简单，我做了一个产品，核心代码就在前端，也就是说，我做的是一个 `强前端，弱后端` 项目，那么为了保护自己的研究成果，增加源码被破解的难度，就必须要对源码进行一些 `反破解` 手段。

最常见的就是 JS 混淆，通过诸如 `javascript-obfuscator` 这样的开源项目来对代码进行加工。

```js
function hi() {
    console.log('Hello World!');
}
hi();
```

如上 👆 几行简单的代码，被 `javascript-obfuscator` 加工后，就会生成如下代码 👇：

```js
function hi() {
    var e = (function () {
        var g = !![];
        return function (h, i) {
            var j = g
                ? function () {
                      if (i) {
                          var k = i['apply'](h, arguments);
                          i = null;
                          return k;
                      }
                  }
                : function () {};
            g = ![];
            return j;
        };
    })();
    var f = e(this, function () {
        var g;
        try {
            var h = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            g = h();
        } catch (o) {
            g = window;
        }
        var i = (g['console'] = g['console'] || {});
        var j = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
        for (var k = 0x0; k < j['length']; k++) {
            var l = e['constructor']['prototype']['bind'](e);
            var m = j[k];
            var n = i[m] || l;
            l['__proto__'] = e['bind'](e);
            l['toString'] = n['toString']['bind'](n);
            i[m] = l;
        }
    });
    f();
    console['log']('Hello\x20World!');
}
hi();
```

这是我把混淆参数调到最低的结果，稍微复杂点，这段代码会更加难以查看与理解。

但问题也很明显，主要有 2 个：

**1️⃣ 破解难度提高，但有限**

由于 `javascript-obfuscator` 是开源项目，而且是在前端加密，所以尽管被加工后的代码难以阅读和理解，但通过一些工具和手段，还是能破解的。

**2️⃣ 增加运行开销，性能低**

原本几行的代码，被增加了几倍，几十倍，必然会带来代码运行上的开销，所以性能降低是必然的，这是一个 `鱼与熊掌` 的问题，你既要性能，又要增加破解难度，还是有点不现实的。

---

问题的转机出现了，`WebAssembly` 技术在2019年前后作为 `W3C` 标准之一被推出，在一定程度上，可以说是完美地解决了以上 2 个问题，既能加密源码，又能提高运行性能。

但这么多年以来，`WebAssembly` 技术并没有在技术圈被广泛推广开来，原因之一就是由于其 `偏后端` 特性，也就是写 `C/C++`、`Rust`、`Go` 的后端程序员才能使用熟悉的编程语言产生可供实际运行的 `wasm` 产物。

还有一个办法就是直接写 `WebAssembly` 语法，如下：

```wat
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

这是一个简单的加法函数，可以看到语法非常晦涩繁琐，要是写一个几百行的代码，脑袋都会冒烟。同时呢，请看文章开头的截图，Go 生成的 wasm 产物非常大，而 Rust 则以其语法复杂，编译严格，构建时间长而著称，MoonBit 在一定程度上弥补了 Go 和 Rust 在生成 wasm 上的问题。

本文主要是写给像我一样的前端开发者看的，那么对一些背景和概念的铺垫就到这里。接下来，我们通过实际测试，来看看 MoonBit 在前端开发中的 `代码加密` 和 `性能提升` 上面的优势，以行业惯例，`斐波那契数列` 开始。

> 以下均取自连续运行后的第 6 次测试结果。

```js
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

![](https://static.yicode.tech/images/202507/20250707182906.png)

👆 这是 JavaScript 的斐波那契函数代码和性能测试结果。

```moonbit
fn fibonacci(n : Int) -> Int {
    if n <= 1 {
        n
    } else {
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}
```

![](https://static.yicode.tech/images/202507/20250707182944.png)

👆 这是 MoonBit(wasm) 的斐波那契函数代码和性能测试结果。

![](https://static.yicode.tech/images/202507/20250707184151.png)

源码和测试案例在 github 开源仓库 `https://github.com/chenbimo/moonbit.dev` 的 `examples` 目录下。

根据测试结果来看，使用 MoonBit 编译成 wasm 后，二者计算 `fibonacci(40)` 的性能，MoonBit 方案是 JavaScript 方案的 `3-4倍` 左右。

那么 wasm 代码长啥样呢？如下 (`截图部分`)：

![](https://static.yicode.tech/images/202507/20250707183632.png)

可以看到，同样的一个功能，使用 MoonBit 编译成 wasm 后，不仅加密程度更高，而且代码的运行效率更是提高了 3-4 倍，可谓是 `一箭双雕`。

![](https://static.yicode.tech/images/202507/20250707183845.png)

生成的 `fibonacci.wasm` 文件大小，也仅仅只有不到 `5kb`，非常轻量。

这就是本文所分享的使用 MoonBit 如何解决前端开发中的 `源码加密` 和 `性能提升` 问题。

笔者目前也是一边学习 MoonBit，一边写文章或视频分享 MoonBit 的应用场景，学习心得，使用经验等，希望能给大家带来帮助，让国产编程语言在世界的舞台上，闪耀夺目的光彩。

看到这里，来个一键三连 (`点赞`、`评论`、`转发`) 吧，谢谢各位啦~
