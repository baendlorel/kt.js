# core 生命周期激进重构方案（2026-05-06）

## 思路

这次不再走重型 `Scope` 树，也不再依赖 `MutationObserver` 当生命周期中心，而是采用一个更贴近 kt.js 哲学的方案：

> 任何 DOM 相关副作用都必须绑定到一个 owner 节点；owner 是否还活着，只由 `$indom(owner)` 判定。

这个方案足够激进，但抽象非常少。它只保留三个核心事实：

1. kt.js 现在已经大量使用 comment anchor，anchor 本身就是天然 owner。
2. `$indom` 已经在 shared 包里落地，而且对 element、text、comment、fragment append 后的节点都成立。
3. 当前真正缺的不是更多概念，而是“谁拥有这个副作用”这件事没有被建模。

## 设计目标

### 1. 符合 kt.js 的精简哲学

不引入整棵 effect scope 树，不做复杂 observer 编排，不增加大量公开心智负担。

对内只新增一套极小底盘：

- owner 节点
- owner bag
- owned listener record

### 2. 充分利用 `$indom`

`$indom` 不再只是 TODO 里的一个想法，而是整个 DOM 生命周期的唯一真值来源：

- owner 活着：`$indom(owner) === true`
- owner 已死：`$indom(owner) === false`

没有第二套“节点是否还有效”的判定体系。

### 3. 保留显式释放语义

非 DOM 资源继续显式 `dispose()` / `stop()`。

也就是说：

- DOM 资源走 `$indom`
- 纯 reactive 资源继续手动管理

这样不会把所有东西都强绑到 DOM 上。

## 核心设计

### 1. Owner 就是 Node，不再额外发明重量级 Scope

新的设计不把 owner 抽象成复杂对象，而直接定义：

```ts
type KTOwner = Node;
```

owner 可以是：

- 普通元素
- comment anchor
- text node

其中 comment anchor 是最理想的 owner，因为：

- 它天然代表结构型节点的生命周期边界
- `$indom(comment)` 已经有测试保障
- 它不会被用户样式和属性污染

### 2. 每个 owner 有一个极小的 disposer bag

内部新增：

```ts
interface KTOwnerBag {
	mounted: boolean;
	disposed: boolean;
	cleanups: Set<() => void>;
}
```

配套一个：

```ts
const ownerBags = new WeakMap<Node, KTOwnerBag>();
```

用途很单纯：

- 注册 DOM event listener 的解绑函数
- 注册 effect stop 函数
- 注册 reactive listener 的反注册函数
- 在 owner 死亡时一次性清空

这不是通用 Scope 树，只是 node -> disposer bag。

### 3. DOM 生命周期只认两种路径

#### A. 已知删除路径：立即 dispose

凡是框架自己知道“旧节点马上要被删”的地方，直接同步 dispose：

- `KTIf` 分支切换
- `KTFor` 删除旧项
- `Fragment` 删除子树
- reactive content 替换旧节点

也就是说，框架管理的删除路径不等 emit，不等 sweep，直接清。

#### B. 未知删除路径：由 `$indom` sweep 兜底

如果用户自己用原生 DOM API 把节点拿掉，框架未必第一时间知道。这时由 sweep 兜底：

- reactive `_emit` 前先检查 owner
- scheduler flush 前顺手扫一批 owner
- 发现 `mounted === true && !$indom(owner)`，就 dispose bag

这个组合足够轻：

- 框架路径走 eager cleanup
- 原生路径走 lazy cleanup

### 4. Listener 必须带 owner 信息

`KTReactive._listeners` 不再只是 `Set<listener>`，而是改成 record：

```ts
interface KTListenerRecord<T> {
	fn: ChangeListener<T>;
	owner?: Node;
	off?: () => void;
}
```

新的原则是：

- 纯 reactive 监听可以没有 owner
- DOM 相关监听必须有 owner

这样 `_emit()` 才能在派发前做：

```ts
if (record.owner && isOwnerDead(record.owner)) {
	record.off?.();
	delete record;
	continue;
}
```

### 5. `mounted` 状态必须显式激活

`$indom` 不能直接拿来判定“未挂载节点已死”，因为 kt.js 允许先创建、后 append。

所以 owner bag 必须有 `mounted` 标志：

- 初始 `mounted = false`
- 在 `_appendTo()` 或 owner 首次进入 DOM 后，标记为 `true`
- 只有 `mounted === true && !$indom(owner)` 才算真正死亡

这样才能兼容“先创建、后挂载”的 kt.js 使用方式。

## 对现有模块的改造方式

### 1. reactive.ts

这是整个改造的入口。

需要做的事：

1. 把 `_listeners` 从 `Set` 升级为 record 集合。
2. `listen()` 支持 `owner` 选项。
3. `_emit()` 在派发前清扫 dead owner records。
4. 提供内部 `listenOwned()` 简写，给 DOM 绑定模块使用。

### 2. effect.ts

`effect()` 增加 `owner?: Node`：

```ts
effect(fn, deps, { owner, onCleanup, lazy })
```

如果传了 owner：

- stop 函数自动挂进 owner bag
- run 前先检查 owner 是否已死

### 3. attr.ts

统一改成：

- reactive attribute 监听归属于 element
- `on:*` 事件解绑函数归属于 element

也就是不再只是 `listen(setter)`，而是：

```ts
listenOwned(reactive, setter, element)
own(element, () => element.removeEventListener(...))
```

### 4. model.ts

`k-model` 是这套设计收益最大的模块。

一条 binding 会拆成两个资源：

- DOM -> ref 的事件监听
- ref -> DOM 的 reactive 监听

两者都归属于同一个 input/select/textarea 节点。

这样节点一死，双向绑定整体退出。

### 5. content.ts

reactive content 当前是“删旧节点，插新节点”。新方案里要额外做一件事：

- 在删除旧节点前，递归 dispose 旧子树 owner bag

这样不会把 cleanup 延后到下一次 emit。

### 6. if.ts / fragment.ts / for.ts

这里统一采用“anchor 作为 owner 边界”的策略：

- 每个 anchor 自己有 owner bag
- 每个分支或子项节点也可以各自拥有 bag
- 结构切换时优先 dispose 被删掉的那棵子树

尤其是 `KTFor`：

- 之后如果做 keyed diff，item 的 owner 就直接绑定到 item anchor 或 item root node
- key 复用时复用 owner
- key 删除时立即 dispose 对应 owner

## 新 API 轮廓

建议内部先有以下能力：

```ts
function getOwnerBag(node: Node): KTOwnerBag
function markOwnerMounted(node: Node): void
function own(node: Node, cleanup: () => void): () => void
function disposeOwner(node: Node): void
function disposeOwnedSubtree(node: Node): void
function isOwnerDead(node: Node): boolean
function sweepOwners(limit?: number): void
```

reactive 层建议新增：

```ts
reactive.listen(fn, { owner?: Node })
effect(fn, deps, { owner?: Node, onCleanup?, lazy? })
```

公开 API 可以很克制：

- 先只扩展 `listen` / `effect`
- `own()` 等 helper 先保持内部使用

## 为什么这套方案比旧 Scope 方案更适合 kt.js

### 1. 更少抽象

旧方案需要引入 Scope、NodeScope、ListenerRecord、registry、sweep 调度层。

新方案只保留：

- Node owner
- owner bag
- listener record

### 2. 更贴合现有 anchor 架构

kt.js 已经大量依赖 comment anchor。既然 `$indom(comment)` 已经可靠，那么 anchor 直接成为 owner 是最自然的演进，而不是再加一层 NodeScope 包装。

### 3. DOM 路径和纯 reactive 路径分离更干净

这套设计不强迫 computed、plain ref、手写 effect 都进入 DOM 生命周期，只处理真正的 DOM-owned 资源。

## 完整改造步骤

### Phase 1: 打底盘

1. 在 core 新增 owner 模块，落地 `ownerBags`、`own()`、`disposeOwner()`、`disposeOwnedSubtree()`、`markOwnerMounted()`、`sweepOwners()`。
2. owner 死亡规则固定为：`mounted === true && !$indom(owner)`。
3. 补 owner 相关单测：comment、text、element、fragment append 后 mount、detach 后 cleanup。

### Phase 2: 升级 reactive 与 effect

1. 把 `KTReactive._listeners` 升级成 record 结构。
2. `listen()` 增加 owner 选项，但保持旧签名兼容。
3. `_emit()` 在派发前执行 dead owner 清扫。
4. `effect()` 增加 owner 选项，并把 stop 自动登记到 owner bag。
5. 补测试：owner 死亡后 reactive listener 自动移除；owner 死亡后 effect 自动停止。

### Phase 3: 迁移高频 DOM 绑定

1. 重写 `attr.ts`，把 reactive attr 和 `on:*` 事件全部改为 owner-aware。
2. 重写 `model.ts`，让双向绑定的两条链路都归属于表单节点。
3. 重写 `content.ts`，在替换旧节点前先 dispose 旧子树。
4. 启用并补齐 `cleanup.test.tsx` 中对应的 skip 用例。

### Phase 4: 迁移结构型 JSX 模块

1. `KTIf` 切分支时，先 dispose 旧分支子树，再 replace。
2. `Fragment` 删除 children 时，走 `disposeOwnedSubtree()`。
3. `KTFor` 先完成“整段删除时的 owner cleanup”，再考虑 keyed diff。
4. 为每个结构型模块补 owner 生命周期测试。

### Phase 5: 改造 `KTFor.key` 语义

1. 引入 keyed item record。
2. 让每个 item 拥有稳定 owner。
3. key 复用时复用 DOM 与 owner。
4. key 删除时立即 dispose item owner。
5. duplicate key 改成开发期 warning + 明确覆盖语义或直接抛错，二选一，不再模糊。

### Phase 6: 清理旧包袱

1. 删除 reactive.ts 中关于 `isConnected` cleanup 的 TODO，改为正式 owner cleanup 实现。
2. 把内部所有“先 listen，后手写解绑”的模式替换成 owner helper。
3. 如果 owner bag 已经覆盖全部核心路径，则彻底放弃 observer 方向，不再保留双轨设计。

## 一句话

新方案的核心不是“做一套更大的生命周期系统”，而是把 `$indom` 变成唯一的 DOM 存活判定器，再让所有 DOM 副作用都明确声明自己属于哪个节点。