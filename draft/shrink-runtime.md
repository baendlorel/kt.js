# KT.js Runtime 缩减结论与实施计划

更新时间：2026-04-29

## 一、结论先行

基于当前代码状态，之前关于 runtime 缩减的判断需要做三处关键修正。

1. `@ktjs/shared` 的根入口副作用导入已经删除，因此“所有用户都必须支付 shared polyfill 成本”这一条已经过时，不能再作为当前问题陈述。
2. `./common/reinforce.js` 不是“无意义副作用”，它承载的是 `Node.prototype._appendTo(parent)` 这条多态分发路径。它的核心价值不是少写一个函数，而是把“child 如何挂载到 parent”这件事绑定在 child 自身能力上，避免把多态集中回 `appendTo(child, parent)` 这种中心化分支函数。
3. 当前仍然成立的核心问题，不是“shared + reinforce 两个副作用叠加”，而是“根入口仍然把 DOM runtime、JSX runtime、响应式内核、控制流 helper 和 Node patch 打包在同一条公开入口上，exports 也没有提供细粒度分流”。

因此，runtime 缩减分析应该从“删除所有副作用”转向“重新定义入口边界和编译产物边界”。

## 二、逐项分析修正

### 1. 关于 `@ktjs/shared`

当前 `packages/core/src/index.ts` 已不再导入 `@ktjs/shared` 的运行时副作用，只保留类型层面的使用。这意味着：

1. “polyfill 体积税”这一条已经不再是现状问题。
2. 之前如果把 shrink 的优先级建立在“先切掉 shared 副作用”上，现在需要调整。
3. 后续的入口拆分，重点不再是隔离 shared，而是隔离 DOM 相关逻辑与响应式内核。

修正后的结论：

- `shared` 不是当前 root entry 的主要 shrink 阻碍。
- 真正的阻碍是入口耦合过粗，以及编译器仍然输出偏 helper-oriented 的产物。

### 2. 关于 `./common/reinforce.js`

`reinforce.ts` 当前做的是给 `Node.prototype` 注入 `_appendTo(parent)`。这件事需要从两个维度看。

#### 设计价值

这个扩展的动机是成立的。

如果改成自由函数：

```ts
appendTo(child, parent)
```

那么 `child` 可能是：

1. 原生 `Node`
2. 自定义 anchor
3. fragment-like 容器
4. 未来的 block / compiled mount handle

这时多态就会回到：

```ts
if (child instanceof Node) {
	...
} else if (...) {
	...
}
```

也就是说，分支不会消失，只是从 receiver 侧转移到一个 central dispatcher。现有 `_appendTo` 的意义正是把“如何挂载”作为对象自身协议，从而减少外部 if/switch 链。

#### 风险边界

它的问题不在“有没有价值”，而在“它是全局原型补丁”。风险主要有三类：

1. 命名冲突风险。`_appendTo` 虽然较私有，但仍然是字符串属性名。
2. 调试与平台边界风险。全局 patch 会影响所有导入 root runtime 的上下文。
3. 入口耦合风险。即使未来存在纯响应式使用场景，只要从 root entry 导入，patch 也会执行。

修正后的判断：

1. 不应该把 `_appendTo` 直接定性为“必须删除”。
2. 它更像是一个“可接受但需要边界管理”的 runtime 协议实现。
3. 如果后续确实观察到冲突，再考虑改成 `Symbol` 版本；但这不是当前 shrink 计划的前置条件。

建议决策：

1. 短期保留 `_appendTo` 机制。
2. 中期把它限制在 DOM-capable entry 中加载，而不是在所有 entry 中默认加载。
3. 如果将来出现生态冲突，再把字符串属性迁移为统一常量导出的 `Symbol` 协议。

### 3. 什么叫“只使用响应式能力”

这个问题需要定义清楚，否则“拆 reactive entry”就会变成空话。

这里的“响应式能力”不是“整个框架里一切会响应变化的代码”，而是“与 DOM 创建、JSX、控制流 helper 解耦后，仍然自成一体的一组状态传播原语”。

按照当前 `packages/core/src/reactable` 的真实内容，响应式能力应该包括以下部分。

| 能力类别           | 当前实现                                                         | 是否应属于 reactive entry   |
| ------------------ | ---------------------------------------------------------------- | --------------------------- |
| 基础响应式容器     | `KTReactive`, `KTRef`, `KTSubRef`, `ref`, `toKT`                 | 是                          |
| 派生能力           | `KTComputed`, `computed`, `map`, `get`, `is`, `match`            | 是                          |
| 订阅机制           | `listen`, `unlisten`, `unlistenAll`, `notify`                    | 是                          |
| 副作用能力         | `effect`, stop function, `onCleanup`, `lazy`                     | 是                          |
| 生命周期释放       | `dispose()` on ref/computed/subref                               | 是                          |
| 调度语义           | `draft` + microtask flush scheduler                              | 是                          |
| 类型守卫和类型枚举 | `isKT`, `isRef`, `isSubRef`, `isComputed`, `isReactive`, `KType` | 是                          |
| DOM 绑定辅助       | `assertModel`                                                    | 否，建议归入 DOM binding 层 |
| DOM 创建           | `h`, `svg`, `mathml`                                             | 否                          |
| DOM 内容装载       | `append`, `ContentAnchor` 等                                     | 否                          |
| 属性处理           | `applyAttr`, `applyKModel`                                       | 否                          |
| JSX runtime        | `jsx`, `jsx-runtime`, `jsx-dev-runtime` 相关                     | 否                          |
| 控制流 helper      | `KTIf`, `KTFor`                                                  | 否                          |
| Node 协议 patch    | `reinforce.ts`                                                   | 否                          |

因此，“只想使用响应式能力”的准确含义是：

1. 我只需要状态容器、派生、订阅、副作用、调度。
2. 我不需要 `document.createElement` 这类浏览器依赖。
3. 我不需要 JSX runtime、`KTIf`、`KTFor`、`applyAttr`、`k-model` DOM 绑定逻辑。
4. 我也不应该因为导入这些能力而自动执行 `Node.prototype` patch。

这并不是说 KT.js 要变成一个独立状态库，而是说 runtime 内部应该承认“响应式内核”和“DOM/编译层”是两个边界不同的系统。

### 4. 现在真正成立的问题是什么

修正之后，当前仍然成立的问题有四个。

#### 问题 A：根入口职责过宽

当前 root entry 同时导出：

1. DOM 创建能力
2. 属性与内容装载能力
3. JSX runtime 能力
4. reactable 响应式能力
5. `KTIf` / `KTFor`
6. `reinforce` patch

这会导致“能力边界”和“导入边界”完全重叠，无法按需裁剪。

#### 问题 B：package exports 仍然过粗

当前 package exports 仍然基本全部指向同一个 `index.mjs`。这意味着即使内部未来拆出子模块，只要对外出口不拆，用户和 bundler 仍然拿不到真正细粒度的入口。

#### 问题 C：编译器还没有建立最小 runtime contract

目前编译器主要仍是 directive lowering，把模板降成 `h(...)`、`KTIf(...)`、`KTFor(...)` 这一层 helper call。这样做虽然便于兼容，但也意味着：

1. 静态节点不能直接变成最小 DOM 指令。
2. 动态文本不能稳定落到 text slot。
3. 控制流依然暴露为用户态 helper，而不是编译器内部概念。

#### 问题 D：DOM runtime 仍然偏泛化

`applyAttr`、`content`、`model` 这些链路为了兼容广泛输入形态，承担了较多运行时判断。这个判断不是“错”，但它确实不适合作为未来 compiled path 的默认成本。

## 三、建议采用的目标架构

建议把 `@ktjs/core` 的公开能力切成三层，而不是继续维持单入口心智。

### 1. `.` 或 `./compat`

定位：完全兼容今天的行为。

包含：

1. `reinforce` patch
2. DOM runtime
3. JSX runtime
4. `KTIf` / `KTFor`
5. reactable 全量导出

用途：

1. 保持现有用户不破坏
2. 手写 `h` / 手写 helper 的场景继续可用
3. 作为复杂动态场景的 fallback runtime

### 2. `./reactive`

定位：纯响应式内核入口，无 DOM 依赖，无运行时 patch。

包含：

1. `KTReactive`, `KTRef`, `KTSubRef`, `KTComputed`
2. `ref`, `computed`, `effect`, `toKT`
3. `map`, `get`, `is`, `match`
4. `listen/unlisten/notify/dispose` 语义
5. `draft` 相关调度语义
6. 类型守卫和必要类型导出

不包含：

1. `assertModel`
2. `h`, `svg`, `mathml`
3. `applyAttr`, `applyKModel`, `append`
4. `KTIf`, `KTFor`
5. `reinforce`
6. 所有 JSX runtime 导出

### 3. `./compiled`

定位：专门服务编译产物的最小 DOM runtime contract。

目标不是暴露今天的所有手写 API，而是暴露“编译器真正需要的最小能力”。

建议只保留以下类别：

1. 元素创建与命名空间创建
2. 静态属性写入
3. 动态属性 patch
4. text slot 更新
5. 条件块挂载
6. 列表块挂载
7. 必要的事件绑定
8. 必要的 model 特化绑定

这层可以继续使用 `_appendTo` 协议，也可以在内部演进为更稳定的挂载协议，但不应再把 today-compat API 全量暴露给编译产物。

## 四、实施计划

### 阶段 0：确认边界与基线

目标：把接下来的讨论从“感觉可以缩”变成“有明确边界和度量的改造”。

工作项：

1. 确认 root entry 继续作为 compat 入口，还是新增显式 `./compat` 并让 `.` 指向它。
2. 确认 `_appendTo` 短期保留，不把 Symbol 迁移作为 phase 1 前置条件。
3. 为 core 建立三类基线：导出边界、bundle 体积、关键模板编译产物。
4. 梳理哪些 public API 只服务手写 runtime，哪些应进入 future compiled contract。

交付物：

1. 入口能力矩阵
2. 基线体积记录
3. 编译样例快照
4. 风险清单

退出标准：

1. 能明确回答每个导出属于 compat、reactive、compiled 的哪一层。
2. `_appendTo` 的去留在 phase 1 前不再反复摇摆。

### 阶段 1：拆出公开入口

目标：先解决“不能按需导入”的问题，不急着立即重写编译器。

工作项：

1. 新增 `src/reactive.ts`，只导出响应式内核。
2. 新增 `src/compiled.ts`，先导出一个最小但稳定的 compiled runtime 子集。
3. 保留 `src/index.ts` 作为 compat 入口，必要时新增显式 `src/compat.ts` 作为别名。
4. 更新 `package.json` exports，至少提供 `.`, `./compat`, `./reactive`, `./compiled`。
5. 确保 `./reactive` 的依赖图不触达 `h/`, `jsx/`, `common/reinforce`。

验收标准：

1. 从 `@ktjs/core/reactive` 导入时，不再触发 DOM patch。
2. `@ktjs/core/reactive` 可在无 DOM 环境下加载。
3. compat 现有测试不回归。

### 阶段 2：提取 DOM 层协议

目标：把“响应式内核”和“DOM 绑定层”真正切开，而不是只做 exports 表面拆分。

工作项：

1. 把 `assertModel` 从 reactable 入口中移出，归入 DOM binding 层。
2. 重新梳理 `content`, `attr`, `model`, `anchor` 之间的依赖方向。
3. 把 `reinforce` 的加载点限制在 compat / compiled 这类 DOM-capable 入口。
4. 评估 `_appendTo` 是否需要抽成统一协议常量，为未来 Symbol 迁移留出位置。

验收标准：

1. reactive 层不再依赖任何 DOM 类型或浏览器全局对象。
2. DOM 层可以独立引用 reactive 层，但反方向不存在回边。

### 阶段 3：定义 compiled runtime contract

目标：建立编译器与 runtime 之间的最小契约，开始为真正 shrink 做准备。

建议先定义一组内部 IR 或 helper 类别，而不是直接对着当前 `h()` 动刀。

建议最小集合：

1. `createElementBlock`
2. `createTextSlot`
3. `setStaticProps`
4. `patchDynamicProp`
5. `mountIfBlock`
6. `mountForBlock`
7. `bindEvent`
8. `bindModel`

工作项：

1. 选 3 到 5 个高频模板，定义它们理想的编译产物形态。
2. 为 compiled entry 补上对应 helper。
3. 给复杂动态场景保留 compat fallback。

验收标准：

1. 至少一批模板不再依赖 `h`, `KTIf`, `KTFor`。
2. 编译器输出与 compiled helper contract 一一对应。

### 阶段 4：优先覆盖高收益场景

目标：优先拿下最常见、最能减 runtime 泛化成本的模板。

优先级顺序建议如下。

### 4.1 静态元素直出

把纯静态元素编译成直接 DOM API 调用，不再走完整 `h -> applyAttr -> append` 链路。

收益：

1. 直接减少 helper 依赖。
2. 让静态模板接近“零框架感”输出。

### 4.2 动态文本 text slot 化

把简单插值降成稳定文本节点订阅，而不是通用 content anchor 重装载。

收益：

1. 避免重复 remove/load/insert。
2. 减少节点级别分配和销毁。

### 4.3 稳定事件直绑

对于静态事件名和稳定 handler 形态，直接生成 `addEventListener` 绑定。

收益：

1. 减少 attr 分发成本。
2. 让编译产物更接近平台原语。

### 4.4 `k-model` 按元素类型特化

至少覆盖：

1. `input[type=text|search|password|number]`
2. `input[type=checkbox|radio]`
3. `textarea`
4. `select`

收益：

1. 缩短 model runtime 分支链。
2. 降低双绑逻辑的通用判断成本。

### 阶段 5：控制流下沉

目标：把 `KTIf` / `KTFor` 从“用户态主路径 helper”逐步下沉为“编译器内部概念”。

工作项：

1. `k-if` 先落到内部 if-block helper。
2. `k-for` 先区分 simple list 和 keyed list 两条路径。
3. compat 继续保留 `KTIf` / `KTFor` 导出，保证手写场景不破坏。

验收标准：

1. 编译覆盖场景中不再默认依赖 `KTIf` / `KTFor` 公开 helper。
2. complex fallback 仍可退回 compat 路径。

### 阶段 6：文档、迁移与验证

目标：把新的入口模型和编译模型稳定下来，避免“实现拆了，用户心智没变”。

工作项：

1. 更新 core README 和各子包导入示例。
2. 明确推荐导入方式：compat、reactive、compiled 各适用于什么场景。
3. 为编译前后产物建立长期快照测试。
4. 为 size regression 建立门槛。

建议验证指标：

1. `@ktjs/core/reactive` 不含 DOM patch，不依赖 `document`。
2. 静态模板编译产物不再引入 `h`。
3. 简单 `k-if` / `k-for` 模板可不依赖公开 `KTIf` / `KTFor`。
4. compat 路径功能与当前版本一致。

## 五、决策建议

结合以上分析，当前最合理的决策不是“先删掉 reinforce”，而是以下四条。

1. 承认 `shared` 副作用问题已经关闭，不再作为 shrink 主论据。
2. 保留 `_appendTo` 作为当前 DOM runtime 协议，但把它限制在 DOM 入口，不让它污染 reactive entry。
3. 明确定义“响应式能力”就是 reactable 内核及其调度语义，不包括 DOM / JSX / 控制流 helper。
4. 把近期最高优先级放在“入口拆分 + compiled contract 定义”，而不是先做 Symbol 化或全量重写。

## 六、推荐执行顺序

如果只看投入产出比，建议顺序如下：

1. 阶段 0：边界与基线
2. 阶段 1：exports 与入口拆分
3. 阶段 2：DOM 层协议提取
4. 阶段 3：compiled runtime contract
5. 阶段 4：静态元素、动态文本、事件、model 特化
6. 阶段 5：控制流下沉
7. 阶段 6：文档和长期验证

## 七、一句话总结

现在最需要修正的，不是“runtime 里不该有 `_appendTo`”，而是“KT.js 需要承认响应式内核、compat runtime、compiled runtime 是三层不同的能力边界，并把入口、编译产物和副作用加载点按这三层重新组织”。
