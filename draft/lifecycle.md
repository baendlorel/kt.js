# 生命周期重构草案：以 $indom 为统一存活判定器

## 1. 目标

这份草案的目标不是在现有实现上继续打补丁，而是重新定义 core 包的生命周期体系，让 DOM、reactive、effect、异步回调、组件级订阅都进入同一套模型。

目标有四个：

- 用 `$indom` 统一判定“某个 DOM 相关资源是否还应该活着”。
- 把“节点 cleanup”和“reactive listener cleanup”收敛成同一套 ownership 语义。
- 让大多数 DOM 绑定不再需要手写 removeOnChange / removeEventListener / `$addNodeCleanup`。
- 保留纯 reactive 场景的显式 dispose，不把 DOM 生命周期强行塞给所有对象。

结论先说：

- 可以重构，而且值得重构。
- 不能只改 reactive.ts 里的 TODO。
- 正确方向不是“在 emit 时顺手清 handler”，而是“引入 Scope 体系，让 `$indom` 成为 DOM owner 的统一存活判定器”。

## 2. 现状诊断

### 2.1 当前其实已经有两套生命周期

现在 core 内部实际上同时存在两条清理链：

1. DOM 节点清理链

由 jsx/anchor.ts 里的 WeakMap<Node, NodeCleanup[]> 和 MutationObserver 驱动。节点一旦从文档树里移除，就递归执行该节点及其子节点上的 cleanup。

2. Reactive 对象清理链

由 ref / computed / subref 的 removeOnChange / dispose 驱动。谁订阅，谁负责手动取消；谁创建 computed，谁负责 dispose。

这两套机制今天能工作，但它们并不统一。

### 2.2 今天的问题不在功能缺失，而在所有权分散

今天的 attr、content、model、Fragment、For、Conditional 之所以能正确清理，是因为它们都在手动把 reactive cleanup 挂到 node cleanup 上。

也就是说，系统不是“天然知道这个订阅属于这个节点”，而是“调用方记得多写一行 cleanup 绑定”。

这会导致几个问题：

- 生命周期语义分散，框架内到处都在重复注册清理逻辑。
- 任何新能力只要忘记补 cleanup，就会出现泄漏。
- reactive.ts 内部完全不知道一个 handler 是否依赖 DOM，所以无法从底层统一回收。
- effect、tracker、异步回调等非 DOM 绑定和 DOM 绑定的清理模型不一致。

### 2.3 reactive.ts 里的 TODO 为什么单独做不成

现在 KTReactive 内部的 _changeHandlers 只是：

```ts
Map<any, ChangeHandler<any>>
```

这意味着：

- handler 只有函数本体，没有 owner 信息。
- 底层不知道这个 handler 属于哪个节点。
- 底层不知道这个 handler 属于哪个 effect / scope。
- 底层也不知道这个 handler 是否应该跟随某个 DOM 生命周期自动消失。

所以，哪怕 reactive.ts 在 emit 时调用 `$indom`，也没有对象可以判定，因为它拿不到 node。

这正是这次重构必须改数据结构、不能只改一行 TODO 的根本原因。

## 3. 核心判断

如果要靠 `$indom` “逆天改命”，应该把它从一个工具函数提升为整个 DOM 生命周期系统的底层判定器。

但这里要区分两个层次：

### 3.1 `$indom` 适合做什么

`$indom` 适合做：

- 判断某个 Node 是否仍然属于文档树。
- 决定一个 DOM owner scope 是否仍然 alive。
- 作为统一 sweep 机制的存活条件。

### 3.2 `$indom` 不适合单独做什么

`$indom` 不适合单独承担：

- 所有清理的触发器。
- 纯 reactive 对象的生命周期。
- 无 Node owner 的 effect 或订阅。
- 一切异步资源的最终管理器。

原因很简单：

- 一个纯 computed 不在 DOM 上，但也需要 dispose。
- 一个 effect 可能订阅 window、timer、socket，它们没有 DOM node。
- 一个节点已经死了，但如果相关 source 永远不再 emit，仅靠“emit 时顺手检测 `$indom`”不会自动释放资源。

所以正确模型是：

- `$indom` 负责判定 DOM owner 是否存活。
- Scope 负责统一管理资源。
- sweep 负责主动发现已经死亡的 DOM owner。

## 4. 新体系总览

### 4.1 设计原则

新的生命周期体系遵循五条原则：

1. 一切资源都必须有 owner。
2. owner 必须能被 dispose。
3. DOM 相关 owner 的 alive 状态由 `$indom` 判定。
4. 资源注册时绑定 owner，而不是事后手动补 cleanup。
5. 显式 dispose 仍然保留，自动清理只是补齐 DOM 路径，不替代非 DOM 路径。

### 4.2 新的三层抽象

建议引入三层基础抽象：

1. Scope

生命周期容器。负责记录 cleanup、child scope、alive/disposed 状态。

2. NodeScope

带 ownerNode 的 Scope。它的存活状态由 `$indom`(ownerNode) 决定。

3. ListenerRecord

替代裸 handler 的监听记录，保存 handler、key、owner、dispose 等元信息。

## 5. 基础抽象设计

### 5.1 Scope

Scope 是整个系统的核心。它不关心 DOM，不关心 reactive，只关心“我拥有一些资源，我死了就把它们都清掉”。

建议能力：

- own(cleanup)
- ownScope(child)
- dispose()
- isAlive()
- onDispose(callback)

建议语义：

- dispose 幂等。
- cleanup 按逆序执行。
- child scope 跟随 parent scope 一起销毁。
- dispose 后不允许再注册新资源，或者允许但立即执行 cleanup。

参考接口：

```ts
interface KTScope {
  readonly id: number;
  readonly disposed: boolean;
  own(cleanup: () => void): () => void;
  ownScope(scope: KTScope): KTScope;
  onDispose(cleanup: () => void): () => void;
  dispose(): void;
}
```

### 5.2 NodeScope

NodeScope 是一个绑定到 DOM 节点的 Scope。它与普通 Scope 的唯一区别，是 alive 判定来自 `$indom`(node)。

建议增加：

- ownerNode: Node
- checkAlive(): boolean

参考接口：

```ts
interface KTNodeScope extends KTScope {
  readonly ownerNode: Node;
  checkAlive(): boolean;
}
```

判定规则：

- 如果 disposed，返回 false。
- 如果 !`$indom`(ownerNode)，立即 dispose 并返回 false。
- 否则返回 true。

### 5.3 ListenerRecord

ListenerRecord 是 reactive 层真正需要引入的结构。它解决今天 reactive 底层完全不知道 listener 归属的问题。

建议结构：

```ts
interface KTListenerRecord<T> {
  key: any;
  handler: (newValue: T, oldValue: T) => void;
  owner?: KTScope;
  once?: boolean;
  disposed?: boolean;
  dispose?: () => void;
  debugType?: string;
}
```

这意味着 _changeHandlers 不再是 Map<any, handler>，而应该变成：

```ts
Map<any, KTListenerRecord<any>>
```

## 6. Reactive 层如何重写

### 6.1 addOnChange 需要升级为“注册资源”接口

今天 addOnChange 的签名过于简单，它只支持传 handler 和 key。

建议改为两种等价写法：

```ts
reactive.addOnChange(handler, key)
reactive.addOnChange(handler, { key, owner, once, debugType })
```

或者直接统一为 options 对象：

```ts
reactive.addOnChange(handler, {
  key,
  owner,
  once,
  debugType,
})
```

其中 owner 可以是：

- Scope
- Node

如果传 Node，则内部自动转换成 NodeScope。

### 6.2 _emit 的职责变成“清扫 + 派发”

新的 _emit 不应该只管 forEach(handler)。

它的工作应该变成：

1. 遍历 ListenerRecord。
2. 如果 record.disposed，直接删除。
3. 如果 record.owner 存在且 owner 已失效，删除并执行 record.dispose。
4. 否则正常调用 handler。
5. 如果 once，则调用后删除。

伪代码：

```ts
for (const [key, record] of this._changeHandlers) {
  if (record.disposed) {
    this._changeHandlers.delete(key);
    continue;
  }

  if (record.owner && !record.owner.checkAlive?.() && record.owner.disposed) {
    record.dispose?.();
    this._changeHandlers.delete(key);
    continue;
  }

  record.handler(newValue, oldValue);

  if (record.once) {
    record.dispose?.();
    this._changeHandlers.delete(key);
  }
}
```

这里最关键的一点是：

_emit 不再只是“通知订阅者”，而变成生命周期系统的一个 opportunistic sweep 点。

### 6.3 但不能只靠 _emit

只靠 _emit 不够，因为有些 source 以后可能不会再次触发。

因此必须有单独的 DOM scope sweep 机制，用来主动发现死掉的节点 owner。

## 7. DOM 生命周期如何重写

### 7.1 废弃 today 的 nodeToCleanups + MutationObserver 模型

今天的模型本质是：

- 每个 Node 可以挂一组 cleanup。
- MutationObserver 发现节点删除时，递归执行 cleanup。

这个模型并不差，但它有两个问题：

- 它是 DOM cleanup 专用模型，和 reactive 不是一回事。
- 它要求调用点显式注册 cleanup，而不是在资源注册时自动绑定 owner。

如果这次要重构到底，应该整体替换掉，而不是继续并存。

### 7.2 用 NodeScope 取代 NodeCleanup[]

新的模型应该是：

- 每个需要生命周期管理的 Node 都有一个对应 NodeScope。
- 资源不是挂到 nodeToCleanups，而是挂到 NodeScope。
- 所有 DOM 绑定都通过“owner: node”注册。

建议维护：

```ts
const nodeToScope = new WeakMap<Node, KTNodeScope>();
```

配套 API：

- getNodeScope(node)
- ownByNode(node, cleanup)
- withNodeOwner(node, register)

## 8. Sweep 机制

### 8.1 为什么要 sweep

如果把 MutationObserver 完全去掉，系统仍然需要一个主动发现“节点已死”的机制。

`$indom` 只是判定函数，不会自己触发回收。

因此必须引入一个 sweep 层。

### 8.2 sweep 的职责

sweep 的职责只有一个：

- 找出所有还在 registry 里的 NodeScope
- 对每个 NodeScope 调用 checkAlive()
- 不在 DOM 里的 scope 立即 dispose

### 8.3 sweep 的触发时机

建议使用多触发源，但保持实现简单：

1. 微任务级调度

每次创建新的 NodeScope 或注册新的 DOM-owned 资源时，调度一次 sweep。

2. Reactive emit 前后顺带触发一次轻扫

不是全量扫，而是按 budget 扫一部分，避免大列表场景卡顿。

3. 明确的 DOM 关键路径后触发

例如：

- Conditional 替换分支后
- For 重排后
- Fragment 重绘后

### 8.4 sweep 应该增量化

不要每次都扫描全部 scope。

建议维护一个活动队列：

```ts
const activeNodeScopes = new Set<KTNodeScope>();
```

sweep 时按 budget 扫描，例如每轮最多处理 32 或 64 个 scope。只要系统还处于 dirty 状态，就继续下一轮微任务。

这样可以避免大树场景下一次性扫描过重。

## 9. API 提案

### 9.1 新增 scope API

建议新增一个 lifecycle 模块，至少暴露：

```ts
export interface KTScope { ... }
export interface KTNodeScope extends KTScope { ... }

export function scope(): KTScope
export function nodeScope(node: Node): KTNodeScope
export function getNodeScope(node: Node): KTNodeScope
export function ownByNode(node: Node, cleanup: () => void): () => void
export function sweepNodeScopes(): void
```

### 9.2 addOnChange API 升级

建议最终形态：

```ts
reactive.addOnChange(handler)
reactive.addOnChange(handler, key)
reactive.addOnChange(handler, { key, owner, once, debugType })
```

兼容策略：

- 第二参数如果是 plain object 且含 owner/key/once 字段，则按 options 解析。
- 否则按旧 key 解析，保证旧代码不立即报错。

### 9.3 effect API 升级

effect 现在返回 stop 函数，这点没问题，但应该新增 owner：

```ts
effect(fn, deps, {
  owner,
  lazy,
  onCleanup,
  debugName,
})
```

语义：

- 如果 owner 是 Node 或 NodeScope，那么节点不在 DOM 后自动 stop。
- stop 仍然保留，允许手动提前终止。

## 10. 框架内部各模块的迁移方式

### 10.1 attr

今天 attr.ts 里大量模式是：

- addOnChange(...)
- 再手写 $addNodeCleanup(() => removeOnChange(...))

迁移后应改成：

```ts
reactive.addOnChange(handler, { owner: element })
```

事件监听也同理：

```ts
getNodeScope(element).own(() => element.removeEventListener(...))
```

进一步还可以统一成一个 registerDomBinding 助手。

### 10.2 content

reactive content 节点替换今天依赖 host element 的 cleanup。迁移后可以直接把 content listener owner 绑定到 host element 或当前 placeholder node。

这样内容节点被替换或 host 被卸载时，都能通过对应 NodeScope 回收。

### 10.3 model

k-model 是最适合吃到新体系收益的模块，因为它天然是“双向绑定 + DOM owner”的典型案例。

迁移后：

- DOM -> ref 的事件监听由 input/select/textarea 的 NodeScope 持有。
- ref -> DOM 的 reactive listener 也由该 NodeScope 持有。
- 整个绑定过程不再显式写 removeEventListener / removeOnChange。

### 10.4 Fragment

Fragment 今天是 anchor 作为 owner，childrenRef 的 redraw 绑定在 anchor cleanup 上。

迁移后保持 anchor 作为 owner 即可，但实现上不再需要手动 $addNodeCleanup(anchor, ...)，而是直接：

```ts
childrenRef.addOnChange(redraw, { owner: anchor })
```

### 10.5 For

For 也非常直接。listRef 的 redraw 订阅归属于 anchor。

额外收益是：

- 每个 item node 如果未来需要自己的局部副作用，也能获得独立 NodeScope。
- key 复用时可以把局部 scope 保留下来，而不是每次重建所有 cleanup。

### 10.6 Conditional

Conditional 需要特别注意，因为它会在两个分支间切换 owner。

建议模型：

- condition listener 归属于当前分支的 placeholder/anchor scope。
- 每个分支节点创建后绑定自己的 NodeScope。
- 分支切换时直接 dispose 旧分支 scope，而不是仅仅替换 DOM 节点。

这样 old branch 的所有副作用会立刻一致性退出。

## 11. 非 DOM 场景的边界

### 11.1 computed 仍然保留显式 dispose

computed 是纯 reactive 结构，不必强绑 DOM。

它可以：

- 被某个 DOM owner 间接持有
- 也可以完全脱离 DOM 独立存在

所以 computed.dispose 仍然应该保留。

### 11.2 tracker 不能继续维持现在的形态

tracker.ts 今天的实现本质上只有“收集依赖并订阅”，没有 stop handle，也没有 owner 语义。

在新体系里，这种 API 不能继续裸奔。

只有两条路：

1. 直接删除。
2. 重写为返回 stop，或要求传 owner。

否则它会成为整个新体系里最容易泄漏的一环。

### 11.3 async / promise 回调也要进 scope

异步组件或 promise 占位符更新的常见问题是：

- 节点已经不在 DOM 里了，promise resolve 后仍然想写回 DOM。

新体系里，异步回调也必须挂 owner：

```ts
if (ownerScope.checkAlive()) {
  // commit DOM update
}
```

更进一步，可以提供一个 helper：

```ts
runIfAlive(owner, () => ...)
```

## 12. 为什么这是“更统一、轻量、简单”的方案

### 12.1 统一

统一体现在所有资源的表达方式都一样：

- reactive listener 是资源
- DOM event listener 是资源
- effect stop 是资源
- async callback cancel 是资源
- branch subtree 是资源

它们全部都归属于 scope。

### 12.2 轻量

轻量不意味着零抽象，而是减少重复样板。

今天 core 里很多地方都在写类似代码：

```ts
source.addOnChange(handler, handler)
$addNodeCleanup(node, () => source.removeOnChange(handler))
```

迁移后都可以压缩成：

```ts
source.addOnChange(handler, { owner: node })
```

这就是更轻。

### 12.3 简单

对框架内部开发者来说，新的思维模型会变成：

- 这个副作用属于谁？
- 找到 owner。
- 用 owner 注册它。

而不再是：

- 先注册 listener。
- 再想办法找一个节点。
- 再把 remove 逻辑补到 node cleanup。
- 再确保分支切换时 cleanup 没丢。

## 13. 兼容与迁移策略

### 13.1 第一阶段：并存

建议不要一刀切。

第一阶段可以让新旧系统并存：

- 保留旧的 $addNodeCleanup。
- 新增 Scope / NodeScope。
- 允许 addOnChange 接受 owner。

这样可以先迁移 attr / model / content 等局部模块。

### 13.2 第二阶段：替换内部调用点

按收益和风险排序，建议迁移顺序：

1. attr
2. model
3. content
4. Fragment
5. Conditional
6. For
7. async
8. effect

### 13.3 第三阶段：收掉旧体系

当所有核心调用点都已迁移后，可以删除：

- nodeToCleanups
- 旧式 $addNodeCleanup 主要用法
- MutationObserver 专用 cleanup 流程

最后把 anchor.ts 简化成 anchor 自身职责，不再承载整个生命周期中心。

## 14. 风险与注意事项

### 14.1 不要让 Scope 反向强引用整棵 DOM

NodeScope 只能持有 ownerNode 的直接引用。不要在 scope 里缓存复杂 DOM 结构，否则会影响 GC。

### 14.2 sweep 不要全量暴力扫描

如果每次都扫全部 activeNodeScopes，大列表会产生明显额外成本。

必须做：

- 增量 sweep
- budget 限流
- dirty 时再调度

### 14.3 不能把所有东西都自动 Node owner 化

不是所有 reactive 都属于 DOM。

如果盲目把 computed、effect 默认绑定最近节点，会让很多纯逻辑代码产生不可预期的生命周期耦合。

因此默认策略应该是：

- 无 owner 的对象，保持手动 dispose 语义。
- 明确传 owner 的对象，进入自动 DOM 生命周期。

### 14.4 分支切换时建议显式 dispose branch scope

即使系统有 sweep，也不应该什么都等 sweep。

像 Conditional 这种“我明确知道旧分支刚刚被替换”的场景，应立即 dispose 旧 branch scope，获得更确定的行为和更小的悬挂窗口。

## 15. 最小可行版本

如果现在立刻开工，我建议不要直接全量重写，而是先做一个最小可行版本。

### 15.1 MVP 范围

1. 新增 Scope / NodeScope / getNodeScope / ownByNode。
2. 升级 reactive.addOnChange，支持 owner。
3. 升级 _changeHandlers 为 ListenerRecord。
4. 在 reactive _emit 中加入 owner 失效清扫。
5. 增加一个轻量 sweepNodeScopes。
6. 先迁移 attr、model、content。

### 15.2 MVP 之后的收益

只做这一步，就能先拿到最大的统一性收益：

- 最常见 DOM 绑定都不再手写 cleanup。
- reactive 底层终于知道 listener 属于谁。
- 后续 Fragment / For / Conditional 的迁移会变得直接。

## 16. 推荐落地顺序

### 第一步：打底层

- 新建 reactable/lifecycle.ts
- 实现 Scope / NodeScope / registry / sweep
- 升级 reactive.ts 的 listener 数据结构

### 第二步：迁移最常见 DOM 绑定

- 重写 attr.ts
- 重写 model.ts
- 重写 content.ts

### 第三步：迁移结构型 JSX 能力

- 重写 fragment.ts
- 重写 if.ts
- 重写 for.ts
- 补 async.ts

### 第四步：清理历史包袱

- 收掉 anchor.ts 的 node cleanup 中心职责
- 删除无 owner 的内部手写 cleanup 模式
- 审查 tracker / effect / future helpers 的生命周期边界

## 17. 最终结论

这次重构如果真要做，就应该承认一件事：

现有 core 的问题不是 cleanup 做不到，而是 cleanup 的 ownership 没有被建模。

`$indom` 提供了一个非常好的底层能力，但它的最佳用途不是给 reactive.ts 那个 TODO 打补丁，而是作为 NodeScope 的统一存活判定器，把整个 DOM 生命周期抽象从“手写 cleanup 列表”升级为“owner scope 统一管理资源”。

用一句话概括新模型：

> 一切副作用都必须声明自己属于谁；只要 owner 死了，副作用就自动退出；对于 DOM owner，死亡标准由 `$indom` 给出。

这是我认为最适合 core 包长期演进的生命周期底盘。
