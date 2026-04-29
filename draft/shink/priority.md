# KT.js Shrink Priority 深化分析

更新时间：2026-04-29

## 一、目标

本文专门展开 shrink 计划中的四类高优先级优化：

1. 静态元素直出
2. 动态文本 text slot 化
3. 稳定事件直绑
4. `k-if` / `k-for` 的更合适处理方式

重点不是重复“它们能缩体积”，而是回答四个更关键的问题：

1. 为什么这些点应该优先做
2. 分析时应该看什么
3. 每类节点应该怎么处理
4. 什么场景应该优化，什么场景应该回退到 compat runtime

## 二、现状基线

当前实现有一个非常明确的共性：编译器主要做 helper lowering，运行时再做大部分节点构造与分发。

### 1. 编译侧现状

`k-if` 当前会被 transformer 降成：

```ts
KTIf(condition, tagIf, () => propsIf, tagElse, () => propsElse)
```

`k-for` 当前会被 transformer 降成：

```ts
KTFor({
  list,
  key,
  map: (item, index, array) => render(item, index, array),
})
```

这意味着编译器并没有把模板结构进一步压缩成“最小 DOM 更新指令”，而是把结构信息保留到 runtime helper 层。

### 2. 运行时现状

当前几个关键路径如下：

1. 元素创建走 `h -> applyKModel -> applyAttr -> append`
2. 动态内容走 `KTContentAnchor`，变化时是 `remove -> load -> insert`
3. 动态事件走 `applyAttr` 的统一 key 扫描与 `on:` 分发
4. `KTIfAnchor` 条件变化时会新建分支节点并替换旧分支
5. `KTForAnchor` 在 list 变化时会整段移除并重新创建节点

所以当前 shrink 的最大机会，不在“删几个 util”，而在“把最常见的节点形态从泛化 runtime 路径中拿出来”。

## 三、分析方法

要判断一个 JSX 节点是否值得特化，建议不要先问“它是不是动态”，而应该先问以下五个问题。

### 1. 节点身份是否稳定

如果一个节点更新前后仍然是同一个 DOM 节点，只是它的文本、属性或监听器发生变化，那么最优策略通常是 patch，而不是 remove/recreate。

典型例子：

1. 简单文本插值
2. 稳定标签上的动态 class/style/value
3. 稳定元素上的静态事件绑定

### 2. 子树形状是否稳定

如果子树的节点个数、顺序和标签集合是稳定的，就可以在编译期确定大部分结构，并把运行时成本压缩到少数 slot 上。

典型例子：

1. 纯静态元素
2. 静态元素 + 少量动态文本子节点
3. 固定结构的 `if` 分支

### 3. 更新是否能映射到平台原语

只要更新可以直接映射到浏览器已有原语，就不应该继续让通用 helper 接管。

典型平台原语：

1. `document.createElement`
2. `document.createTextNode`
3. `node.data = next`
4. `element.className = next`
5. `element.style.cssText = next`
6. `element.addEventListener`
7. `parent.insertBefore`
8. `child.remove()`

### 4. 变化是否只影响局部 slot

如果一个表达式只影响某个文本位、某个属性位、某个条件块位，就应该把它编译成 slot，而不是让整棵子树重新流过 `append` 或 `applyAttr`。

### 5. 有没有明确的 fallback 边界

特化成功的前提不是“覆盖全部情况”，而是“能清晰识别高频稳定场景，并把复杂场景退回 compat”。

因此每项优化都必须同时定义：

1. 适用条件
2. 生成策略
3. 退出条件
4. fallback 路径

## 四、优先级判断理由

这几项之所以优先级高，不只是因为收益大，还因为它们天然具备“高频、边界清楚、可渐进接入”这三个条件。

### 1. 静态元素直出优先

原因：

1. 它覆盖面最大。任何模板里静态节点都占多数。
2. 识别条件最稳定。标签、命名空间、属性、子节点都可在编译期判定。
3. 它能立刻减少对 `h`、`applyAttr`、`append` 的依赖。
4. 它是后续 block IR 的基础，因为 block 一定先要能表示稳定结构。

### 2. 动态文本 text slot 化优先

原因：

1. 文本插值是最常见动态更新。
2. 它的节点身份天然稳定，最适合做 slot。
3. 与现有 `ContentAnchor` 的 remove/reload 相比，优化收益极高。
4. 这个优化不会改变用户模型，只会改变编译产物的粒度。

### 3. 稳定事件直绑优先

原因：

1. 事件名静态时，运行时统一扫描 key 再分发没有必要。
2. 它能显著减少属性循环和监听器替换逻辑。
3. 这类优化几乎不影响模板语义，只是把绑定点提前。

### 4. `k-if` / `k-for` 稍后但仍属高优先级

原因：

1. 它们收益很大，但复杂度高于前三项。
2. 它们依赖 block/range 级别的节点模型，不能只靠“改一个 helper”完成。
3. 它们更适合在前面三项已经建立 `ElementBlock` / `TextSlot` / `MountHandle` 之后推进。

所以正确顺序不是先上 `k-if` / `k-for`，而是先建立“稳定节点”和“稳定 slot”的编译能力，再把控制流压到这个模型上。

## 五、4.1 静态元素直出

### 1. 适用条件

适用于以下节点：

1. 标签名是静态的
2. 命名空间是静态可判定的
3. 属性都是静态值
4. 子节点全部是静态文本或静态子元素
5. 不含 `k-if`、`k-for`、`k-model`
6. 不依赖运行时动态选择组件

典型例子：

```tsx
<div class="card"><span>Hello</span></div>
```

### 2. 推荐处理方法

编译器不再生成：

```ts
h('div', { class: 'card' }, [h('span', null, 'Hello')])
```

而是直接生成最小 DOM 构造：

```ts
const el0 = document.createElement('div');
el0.className = 'card';
const el1 = document.createElement('span');
el1.textContent = 'Hello';
el0.appendChild(el1);
return el0;
```

### 3. 节点处理策略

#### 元素节点

1. HTML 走 `document.createElement`
2. SVG 走 `document.createElementNS`
3. MathML 走 `document.createElementNS`
4. 静态标签名直接内联，避免 `h(tag, ...)`

理由：

1. 标签和命名空间已知时，不需要 runtime 再判断。
2. 直接调用平台 API 比进入通用 helper 更短，也更利于 tree shaking。

#### 静态文本节点

1. 单一纯文本子节点优先写 `textContent`
2. 多个文本片段可在编译期合并
3. 只有当需要保留节点边界时才显式创建 `Text`

理由：

1. `textContent` 是最低成本路径。
2. 编译期合并静态文本，能减少节点数量。

#### 静态属性

建议区分三类：

1. property 优先：`value`, `checked`, `selected`, `textContent`, `className`
2. attribute 优先：自定义属性、`data-*`、`aria-*`
3. 样式优先：静态字符串样式写 `style.cssText`

理由：

1. 平台本身对 property 和 attribute 的语义并不相同。
2. 编译器已知 key 时，可以直接选择最短路径，不必走 `handlers[key] ?? defaultHandler`。

#### 静态子树

建议把纯静态子树编译成局部 block：

1. 要么直接顺序创建并 append
2. 要么进一步收敛为 template clone 策略

其中 phase 1 更建议先做“直接顺序创建”，不要一开始就引入 `<template>` 克隆。

理由：

1. 顺序创建最直接，调试成本低。
2. template clone 适合后期再做批量优化，不是第一阶段必须项。

### 4. 退出条件和 fallback

以下情况建议直接退回 compat：

1. 标签名是动态表达式
2. 属性名是动态表达式
3. 存在对象展开且无法静态求值
4. 子节点中含可能返回 `Node | Node[] | null` 的复杂表达式
5. 存在运行时决定命名空间的场景

### 5. 为什么这项收益大

它同时切掉了三层成本：

1. helper 入口成本
2. 属性分发成本
3. 内容装载成本

这就是为什么它应该排在 phase 4 的最前面。

## 六、4.2 动态文本 text slot 化

### 1. 适用条件

适用于“表达式的运行结果可以收敛为文本”的场景，例如：

```tsx
<span>{count}</span>
<div>Hello {name}</div>
<p>{visible ? 'yes' : 'no'}</p>
```

这里的核心不是“表达式是否动态”，而是“它更新后是否仍然只占一个文本位”。

### 2. 推荐处理方法

为每个动态文本位生成稳定的 `Text` 节点：

```ts
const text0 = document.createTextNode(normalizeText(name.value));
name.listen((next) => {
  text0.data = normalizeText(next);
});
```

如果是带静态前后缀的情况：

```tsx
<div>Hello {name}!</div>
```

建议编译为三个节点：

1. 静态前缀文本节点
2. 动态 text slot
3. 静态后缀文本节点

而不是把整个内容退回通用 `append`。

### 3. 节点处理策略

#### text slot 节点

text slot 本质上就是一个稳定的 `Text` 节点。

更新规则应尽量简单：

1. `null` / `undefined` 归一为空字符串
2. `string` 直接写入
3. `number` / `bigint` 转字符串
4. `boolean` 建议显式约定为字符串或空串
5. 一旦表达式可能返回 `Node`、数组或对象，则退出 text slot 特化

理由：

1. 只有单一文本位，才能保证节点身份稳定。
2. 一旦表达式可能跨越“文本”和“节点”两个域，就不应继续用 text slot。

#### 相邻文本合并

建议在编译期做一次文本归并：

1. 静态文本合并为一个节点
2. 动态文本独立保留为一个 slot
3. 避免生成无意义的空文本节点

理由：

1. 减少 DOM 节点数。
2. 让 patch 点更清晰。

#### 监听绑定

建议由编译产物直接对依赖源订阅，而不是进入 `ContentAnchor`。

理由：

1. text slot 只需 `node.data = next`。
2. 当前 `remove -> load -> insert` 对文本更新来说明显过重。

### 4. 退出条件和 fallback

以下情况不应继续 text slot 化：

1. 表达式可能返回元素节点
2. 表达式可能返回数组或 fragment
3. 表达式的结果需要保留 HTML 语义，如 `k-html`
4. 表达式内部依赖复杂模板结构，而不是文本位

这些情况应该退回 block 或 compat runtime。

### 5. 为什么这项收益大

这是最典型的“局部 slot 更新”场景。当前 runtime 把它当作一整段内容更新，实际上只需要一次 `text.data` 赋值，所以收益很高且实现边界清楚。

## 七、4.3 稳定事件直绑

### 1. 适用条件

适用于以下事件绑定：

1. 事件名是静态字符串
2. handler 本身不是 reactive 值
3. 不需要按值变化反复 remove/add listener
4. 不依赖特殊运行时事件修饰逻辑

典型例子：

```tsx
<button on:click={() => count.value++}>+</button>
```

这里虽然闭包内部读写 reactive，但 handler 自身是稳定函数，完全可以直接绑定一次。

### 2. 推荐处理方法

编译器直接生成：

```ts
button.addEventListener('click', onClick);
```

而不是把它交给：

1. `applyAttr` 遍历 key
2. 识别 `on:` 前缀
3. 进入 `setAttr`
4. 再在 setter 里 remove/add

### 3. 节点处理策略

#### 事件节点不是独立 DOM 节点

事件绑定更准确地说是“元素上的行为 slot”，它不需要额外 runtime 抽象。

处理原则：

1. 静态事件名直接内联 `addEventListener`
2. 如果 handler 是稳定函数，不做额外包裹
3. 如果未来支持 once/passive/capture，可以在编译期直接映射为 options

理由：

1. DOM 本身已经有成熟事件系统。
2. 静态事件名再走 key 分发链，只是重复判断。

#### handler 稳定性判断

稳定 handler 的识别可以保守一些，优先覆盖最明确情况：

1. 内联函数表达式
2. 当前作用域内可直接引用的函数标识符
3. 不包裹在 reactive 容器里的普通函数值

以下情况建议 fallback：

1. `on:click={someReactive}`
2. `on:click={cond ? fnA : fnB}` 且每次值可能变化
3. 事件名本身动态

### 4. 退出条件和 fallback

回退到 `applyAttr` 的场景：

1. 动态事件名
2. reactive 事件处理器
3. 需要统一 modifiers 语义但编译器暂未内联支持
4. 需要运行时重绑定的复杂事件表达式

### 5. 为什么这项收益大

事件绑定是高频属性，但它不该和普通 attribute 一起统一分发。只要事件名稳定，编译期就已经知道最短路径是什么。

## 八、`k-if` 有没有更合适的处理方法

有，而且比当前 `KTIf` 更合适的方向不是“换一个 helper 名字”，而是“把条件渲染从公开组件 helper 变成内部 block 机制”。

### 1. 当前问题

当前 `KTIfAnchor` 的特点是：

1. 条件变化时重新执行分支 renderer
2. 生成新节点
3. 用 `replaceWith` 替换旧分支
4. 分支本身仍然通过 `h` 或组件路径创建

这条路径的问题不在“能不能工作”，而在于它仍然太用户态。

### 2. 更合适的模型：IfBlock

建议引入内部 `IfBlock` 或 `mountIfBlock` helper，核心结构可以是：

1. 一个锚点 comment
2. 一个当前分支 handle
3. 两个分支工厂函数
4. 一个 `update(condition)` 过程

其中“分支 handle”不一定是单节点，应该允许表示一个 range：

```ts
interface MountHandle {
  first: Node;
  last: Node;
  mountBefore(anchor: Node): void;
  remove(): void;
  dispose?(): void;
}
```

### 3. 节点处理策略

#### 简单单节点分支

如果分支只是一个元素或一个文本 slot，就直接返回对应 handle。

理由：

1. 单节点是最高频形态。
2. 可以避免额外 fragment/anchor 包装。

#### 多节点分支

如果分支包含多个兄弟节点，建议编译成 range handle，而不是强行退回到公开 helper。

理由：

1. `if` 分支本质上是“一个可切换的节点范围”。
2. range handle 能统一服务 `if` 和 `for`。

#### 静态分支与动态分支区分

建议区分两类：

1. 静态分支：每次切换时重建成本低，可按工厂创建
2. 可复用分支：如果后续要做更激进优化，可加入缓存或停放策略

phase 1 不建议先做分支缓存，先把 block 边界建立起来即可。

### 4. 为什么它比当前 `KTIf` 更好

1. 它不再依赖公开 JSX helper 语义。
2. 它天然适配单节点和多节点分支。
3. 它可以直接消费前文的 `ElementBlock` 与 `TextSlot`。
4. 它为未来分支缓存、静态分支复用留出了空间。

### 5. fallback 边界

以下情况仍可回退 compat：

1. 分支里存在当前 IR 无法表示的动态组件模式
2. 分支依赖复杂插槽展开
3. 编译器暂时无法给出稳定 range handle

## 九、`k-for` 有没有更合适的处理方法

有，而且改造空间比 `k-if` 更大。当前 `KTFor` 的 `key` 只是接口存在，运行时还没有真正做 keyed 优化，因此这里最值得重新设计的是“列表块模型”。

### 1. 当前问题

当前 `KTForAnchor` 在 list 变化时的核心逻辑是：

1. `_remove()` 旧节点
2. `_load(v, key, map)` 重建新节点数组
3. `_insertTo(parent)` 全量重新插入

这说明当前 `k-for` 实际上仍然是“整段重绘”，而不是“列表 patch”。

### 2. 更合适的模型：ForBlock

建议把 `k-for` 拆成至少两条策略。

#### 策略 A：SimpleForBlock

适用于：

1. 列表短小
2. 无 `k-key`
3. 或虽然有 key，但暂不要求稳定移动优化

处理方式：

1. 以索引为单位持有 item handle
2. 公共前缀尽量复用
3. 仅对新增尾部 append
4. 仅对缩短尾部 remove

这比全量 remove/recreate 已经好很多。

#### 策略 B：KeyedForBlock

适用于：

1. 提供稳定 `k-key`
2. 需要移动、复用、插入、删除优化

处理方式：

1. 为每个 key 维护旧 handle 映射
2. 新列表按 key 找旧 handle
3. 复用已存在节点范围
4. 对新增项创建新 handle
5. 对缺失项 remove/dispose
6. 后续如有需要，再引入 LIS 等更高级移动优化

phase 1 不必一步到位实现最优 diff，但至少要从“整段重建”升级到“按项复用”。

### 3. 节点处理策略

#### 列表锚点

建议 `ForBlock` 保留一个 comment anchor 作为稳定边界。

理由：

1. 插入位置稳定。
2. 空列表时也有明确挂载点。
3. 与 `IfBlock` 的 range 模型可统一。

#### 单项节点

每个 item 不应假定自己只有一个节点，而应返回 mount handle。

理由：

1. item 可能是单元素
2. 可能是文本
3. 可能是多个兄弟节点
4. 可能包含内部 slot 和事件

#### keyed 与 unkeyed 分流

这是 `k-for` 最重要的架构决策之一。不要把 keyed 和 unkeyed 硬塞进一个简化实现里。

理由：

1. 两者的正确性目标不同。
2. keyed 的核心是节点身份保留，unkeyed 的核心是最少局部变更。
3. 分流后代码更清楚，也便于渐进演进。

### 4. 为什么它比当前 `KTFor` 更好

1. 真正开始消费 `k-key` 的语义价值。
2. 列表更新从整段重建升级为按项 patch/复用。
3. 可以承接静态元素直出、text slot 和稳定事件的成果。
4. 列表项内部若是静态/局部动态，也能继续走更细粒度优化。

### 5. fallback 边界

建议在以下场景保留 compat fallback：

1. item render body 形态极不稳定
2. key 表达式不可稳定求值
3. 当前 IR 尚不能表示 item range
4. 需要兼容遗留 helper 语义的手写场景

## 十、建议的节点模型

为了让上面几项优化能共用基础设施，建议内部尽快统一成以下节点模型，而不是每项单独造 helper。

### 1. `ElementBlock`

表示稳定元素节点。

职责：

1. 创建元素
2. 写入静态属性
3. 注册稳定事件
4. 挂载静态子节点
5. 暴露少量动态 slot 接口

### 2. `TextSlot`

表示稳定文本位。

职责：

1. 创建 `Text`
2. 归一化文本值
3. 在更新时只写 `.data`

### 3. `PropSlot`

表示稳定节点上的动态属性位。

职责：

1. 区分 property 与 attribute
2. 以最短路径 patch 到目标元素

### 4. `EventBinding`

表示稳定元素上的静态事件绑定。

职责：

1. 一次性注册 listener
2. 仅在确有需要时支持 runtime 重绑定

### 5. `MountHandle`

表示可挂载、可移除、可表示范围的节点句柄。

职责：

1. 统一单节点和多节点表达
2. 作为 `IfBlock` 与 `ForBlock` 的共同基础

## 十一、建议实施顺序

如果只看工程风险和收益比，建议顺序如下：

1. 先做静态元素直出，建立最小 `ElementBlock`
2. 再做 text slot，建立稳定文本更新路径
3. 再做稳定事件直绑，把事件从 `applyAttr` 的通用分发中分离
4. 然后引入 `MountHandle`，重写 `k-if`
5. 最后把 `k-for` 分流为 simple 和 keyed 两条路径

这样做的好处是：

1. 每一步都能独立验证收益
2. 后一步总是建立在前一步已经稳定的节点模型上
3. 不需要一开始就重写整个 JSX runtime

## 十二、一句话结论

静态元素、动态文本、稳定事件之所以值得优先做，不只是因为它们“常见”，而是因为它们都属于“节点身份稳定、更新可直接映射到平台原语”的场景；而 `k-if` 与 `k-for` 的更优解，也不该继续停留在公开 helper 层，而应该建立在统一的 block/range handle 模型之上。