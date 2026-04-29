**结论**

如果你的第一目标是“小，越小越好”，那现在最该做的不是继续补 runtime helper，而是把现有的“指令改写器”升级成“DOM 代码生成器”。我看完 core 和编译相关代码后的判断是：你现在的编译链已经能做语法级 lowering，但还没有真正把大头 runtime 编译掉，所以缩减空间很大，而且方向很明确。

更直接地说，当前 transformer 主要是在 plugin.ts 里把 k-if、k-for、svg/mathml 和 draft 校验改写掉；测试也证明输出仍然是 KTIf、KTFor 这种 helper 调用，甚至 map 回调里还保留 JSX 形态，见 plugin.test.ts 和 plugin.test.ts。这说明现在的编译还没有进入“直接生成最小 DOM 指令”的阶段。

**现状判断**

我按非类型源码粗算过，core 真正会进运行时代码的部分大约 1370 行，其中 reactable 大约 634 行，h 大约 299 行，jsx 大约 318 行，common 大约 90 行。这个分布很重要：真正最容易被编译吃掉的，不是 reactable，而是 DOM 和 JSX 这一层，合起来差不多 700 行。

你现在有三个明显的“体积税”：

1. 根入口自带 side effect，哪怕用户只想要响应式也得一起付。
   证据在 index.ts、index.ts、index.ts 和 reinforce.ts。
   这意味着一旦从 core 根入口进来，就会自动带上 polyfill、window 标记和 Node.prototype 打补丁。

2. DOM 创建和绑定是高度泛化的 runtime 分发。
   证据在 attr.ts、attr.ts、content.ts、model.ts。
   这套设计易用，但它的代价是 class、style、事件、children、k-model 全靠运行时判断和监听注册来处理。

3. 当前包出口太粗，无法做“只拿最小 runtime”。
   现在 package.json 只提供根入口和 jsx-runtime 相关子路径，没有纯 reactable、纯 compiled runtime、纯 compat 这类细粒度入口。

**怎么通过编译缩 runtime**

我建议你按“收益最大且不会把系统弄复杂”的顺序做，不要先碰那些 TODO。

1. 先把 runtime 拆层，不要让最小用户路径走到 side effect 根入口。

最应该先做的是入口分离，而不是先写更多 transform。

建议至少拆成三层：

1. compat 入口。
   保留今天的行为，继续 import shared，继续打 Node.prototype 补丁，继续支持手写 h、手写 jsx runtime、现有 helper。

2. compiled 入口。
   只暴露编译后代码真正需要的最小 helper，不自动 import index.ts，也不自动 import reinforce.ts。

3. reactive 入口。
   只给 ref、effect、computed、scheduler 之类纯响应式能力。这样“只是想用信号层”的用户不必为 DOM runtime、polyfill 和 prototype patch 付费。

如果你先把这件事做了，哪怕暂时不做更激进的编译，体积边界也会立刻清楚很多。

2. 把编译目标从“helper lowering”改成“block 代码生成”。

这是最大头。

现在 transformer 实际上是在做：
JSX 或 jsx-runtime 调用
→ 改成 KTIf、KTFor、svg、mathml 等 helper 调用

你真正想要的是：
JSX
→ 一组极小的 DOM 构造和 patch 代码
→ 只按需 import 极少数 helper

这一步最好继续以 src 为唯一事实来源，不要把逻辑散落到 Babel、Vite、TS 插件各处。TS 插件和 kt-tsc 目前都更像 IDE/检查器，不是 emit 管线，见 tsconfig.json、index.ts 和 index.ts。

我建议你在 transformer 里引入一个很小的内部 IR，例如：

1. ElementBlock
2. TextSlot
3. PropPatch
4. ConditionalBlock
5. EachBlock
6. ComponentBoundary

这样之后 Babel、Vite、未来的其他接入都只是在调用同一套 codegen，而不是重复做 AST 小手术。

3. 优先编译掉高频泛化路径，而不是先碰复杂特性。

这部分收益最大，而且最符合你“先小后全”的目标。

第一优先：静态元素和静态属性

像这种最常见的模板片段，完全没必要走 h、applyAttr、append 这套泛化链路。现在 index.ts 每次都会经过统一 apply 和 append，编译后应该直接生成：

1. createElement 或 createElementNS
2. 一次性设置静态 class、style、普通 attribute
3. 一次性 append 静态 children

这样编译后的代码根本不需要 attr.ts 那种通用属性分发器。

第二优先：动态文本

今天所有 reactive children 最后都走 content.ts 这类“删旧的，再装新的”的内容锚点逻辑。这个路径太泛了。

但绝大多数插值其实只是：
一个文本节点
加一个值变化时更新 text.data 的订阅

这类场景应该直接编译成文本 slot，而不是统一走 ContentAnchor。这样能明显减少 runtime 代码和更新成本。

第三优先：事件、class、style 的特化

现在 attr.ts 和 attr.ts 都是通用分支。

编译时你已经知道：

1. 是不是静态 class
2. 是不是静态 style
3. 是不是稳定事件函数
4. 是不是普通 attribute
5. 是不是 DOM property

所以 compiled path 不应该再经过 attr helper 表。编译器直接发出最短路径赋值就够了。只有真正动态到需要“值本身也是 reactive”的少数场景，才额外 import 小 helper。

第四优先：k-model 专项编译

今天 model.ts 开始的逻辑是运行时根据 tagName 和 input type 决定怎么双绑。这个功能很适合编译下沉，因为模板里 tag 基本总是静态已知，很多 input 的 type 也是静态已知。

也就是说：

1. input type="text" 的 k-model
2. input type="checkbox" 的 k-model
3. textarea 的 k-model
4. select 的 k-model

完全可以在编译时直接发出对应绑定代码，而不是在 runtime 里分派。这能直接把 model runtime 变成“只给没编译的兼容路径用”。

4. 把 KTIf、KTFor 从“用户态 helper”变成“编译器内部概念”。

这是你现在最值得改的地方。

k-if 现在是编译到 KTIf helper，见 if-else.ts。这比原始指令好，但还是保留了一个专门的 runtime 组件。

如果目标是最小 runtime，k-if 应该进一步编译成：

1. 一个注释锚点
2. 一个当前分支引用
3. 两个极小的 block factory
4. 条件变化时的局部切换逻辑

更进一步，如果条件是编译期可判定的，就直接做 dead branch elimination，连分支 helper 都不用带。

k-for 也一样。现在它编译到 KTFor helper，见 k-for.ts。如果你现在最在意的是小，而不是最强列表 diff，那我建议很务实：

1. 没有 k-key 时，只编译到一个非常小的 each helper，直接重建整段列表。
2. 有 k-key 时，再按需 import 一个单独的 keyed helper。
3. 不要把 keyed diff 放进 baseline runtime。
4. 不要先为 duplicate key、复杂重排、未来优化把主 runtime 变重。

你前面说 TODO 可以以后再说，这里正好适用。列表高级优化不应该先污染最小运行时。

5. 手写 h API 和编译产物，不要共用一套“必须很泛”的 runtime。

这是个产品边界问题。

如果你真想把 runtime 做到很小，那就要接受一个事实：
“手写 h 函数的灵活性”和“编译后极瘦 runtime”最好不是一条路径。

更具体一点：

1. 手写 h、手写 jsx-runtime、手写 helper 的用户，走 compat runtime。
2. 正常写 TSX 的用户，走 compiled runtime。
3. compiled runtime 不应该为了兼容所有手写动态形态而保留一大堆泛化逻辑。

否则你永远会被 attr.ts、content.ts、model.ts 这种“为了通用而存在”的层拖着。

**我会怎么定优先级**

如果我是你，我会这么排：

1. 先做入口拆分。
   目标是把 index.ts 这种根入口 side effect 从“默认路径”里挪走。

2. 再做最小 compiled runtime。
   先只覆盖普通 HTML 元素、静态属性、动态文本、稳定事件、简单 k-if、简单 k-for。
   这一步已经能把 h、attr、content、if、for、fragment 这一大片运行时代码从主路径上拿掉。

3. 然后做 k-model 特化。
   因为它现在纯 runtime 分派，编译收益很直接。

4. 最后再考虑 keyed diff、k-else-if、cleanup、SSR 之类。
   它们重要，但不该先影响你“把 runtime 做小”的主线。

**一句更硬的建议**

如果你真的把“小”放在第一位，那 KT.js 的核心定位最好从“一个运行时框架”改成“一个编译优先的 JSX 方言 + 一个很小的响应式内核”。现在最大的浪费不是功能没补完，而是已经知道太多静态信息，却还让 runtime 去做通用判断。

**下一步**

1. 如果你愿意，我可以直接帮你设计一版最小 compiled runtime 的模块边界，明确哪些文件会变成 compat-only。
2. 也可以继续往下，把一个具体模板从当前产物推演成你应该生成的最小 DOM 代码形态。
3. 或者我可以先给你列一份“第一阶段编译改造清单”，按投入和预期体积收益排序。