# KT.js 全局调度器设计草案

## 背景

当前 KT.js 的响应式链路是同步传播：

- `ref.value = x` 会立刻触发监听器，见 [packages/core/src/reactive/refs/ref.ts](packages/core/src/reactive/refs/ref.ts)
- `computed` 订阅依赖后会立刻重算，见 [packages/core/src/reactive/computed.ts](packages/core/src/reactive/computed.ts)
- `effect` 订阅依赖后会立刻执行，见 [packages/core/src/reactive/effect.ts](packages/core/src/reactive/effect.ts)
- DOM 绑定点收到变更后也会立刻提交到 DOM，见 [packages/core/src/h/content.ts](packages/core/src/h/content.ts)、[packages/core/src/h/attr.ts](packages/core/src/h/attr.ts)、[packages/core/src/jsx/if.ts](packages/core/src/jsx/if.ts)、[packages/core/src/jsx/for.ts](packages/core/src/jsx/for.ts)、[packages/core/src/jsx/fragment.ts](packages/core/src/jsx/fragment.ts)

这种模型的优点是直观、同步语义强；缺点是连续写入时会产生重复计算和重复 DOM 提交。

例如：

```ts
count.value = 1;
count.value = 2;
count.value = 3;
```

在当前实现里，依赖 `count` 的 computed、effect、DOM listener 可能被执行 3 次。

## 目标

引入一个全局调度器，将一次事件循环内的多次响应式变更合并，在“下一刻”统一处理，达到：

- 同一 reactive 在一个 tick 内只通知一次
- computed 在 flush 阶段统一重算，避免级联重复计算
- DOM 更新延后到 flush 阶段统一提交，减少重复改 DOM
- 保持现有 API 基本不变，尽量不要求业务侧重写

## 结论

这个方向是合适的，但不建议直接把所有东西都变成异步。

更稳妥的方案是分层调度：

1. reactive 变更先入队，不立刻广播
2. flush 时先处理 computed/effect
3. flush 后半段再处理 DOM 更新
4. 默认使用 microtask 调度，可额外暴露手动 `flush()`

不建议第一版就把 DOM 放到 `requestAnimationFrame`，否则语义会从“同一 tick 后可见”变成“下一帧后可见”，侵入性更大。

## 建议的调度模型

### 阶段划分

一个 flush 周期建议分为 3 个阶段：

1. `reactive queue`
   - 收集脏的 ref/computed
   - 去重
2. `compute/effect queue`
   - 先重算 computed
   - 再执行 effect
3. `commit queue`
   - 执行 DOM patch，例如 text/attr/if/for/fragment 的 redraw

### 执行顺序

```text
set value
  -> mark dirty
  -> schedule microtask once

microtask flush
  -> flush dirty computeds until stable
  -> flush effects
  -> flush DOM commits
```

### 为什么要把 DOM 放最后

因为 DOM 绑定依赖 computed 最终值。

如果 DOM listener 和 computed listener混在一个队列里，可能会出现：

- DOM 先读到旧 computed 值
- 一个 flush 内重复 replace/setAttribute
- `if/for/fragment` 重绘次数仍然偏高

## 建议新增的运行时能力

建议在 `packages/core/src/reactive` 下新增一个内部调度模块，例如：

```ts
type SchedulerJob = () => void;

interface Scheduler {
  enqueueReactive(job: SchedulerJob): void;
  enqueueEffect(job: SchedulerJob): void;
  enqueueCommit(job: SchedulerJob): void;
  flush(): void;
  nextTick(): Promise<void>;
}
```

### 推荐实现要点

- 使用 `Set` 去重 job
- 使用 `queueMicrotask` 调度首次 flush
- flush 过程中允许继续入队，但要有递归上限保护
- 暴露 `flushSync()` 或 `flush()` 供测试和高级场景使用
- 暴露 `nextTick()` 供用户等待批处理完成

## 对现有代码的最小改造点

### 1. ref 层

文件：[packages/core/src/reactive/refs/ref.ts](packages/core/src/reactive/refs/ref.ts)

当前：setter 直接 `_emit()`。

建议：

- setter 不直接执行监听器
- 改为把当前 ref 对应的 listener flush job 放进 reactive 队列
- 同一个 ref 在同一 tick 内只入队一次

伪代码：

```ts
set value(newValue: T) {
  if (Object.is(newValue, this._value)) return;
  this._oldValueForBatch ??= this._value;
  this._value = newValue;
  scheduler.markRefDirty(this);
}
```

这里要注意：批处理中回调收到的 `oldValue` 应该是本轮第一次写入前的旧值，而不是每次中间态。

### 2. computed 层

文件：[packages/core/src/reactive/computed.ts](packages/core/src/reactive/computed.ts)

当前：依赖一变就 `_recalculate()`。

建议：

- 依赖变化时只标记 computed dirty
- flush 计算阶段统一重算
- 如果 computed 的结果发生变化，再把它自己的订阅者继续推进下一层队列

这样可以把：

```ts
source.value = 1;
source.value = 2;
source.value = 3;
```

压缩成一次 computed 重算。

### 3. effect 层

文件：[packages/core/src/reactive/effect.ts](packages/core/src/reactive/effect.ts)

当前：依赖变化时直接 `run()`。

建议：

- effect listener 不直接运行
- 改为进入 effect 队列
- 同一个 effect 在一个 tick 内只执行一次

### 4. DOM 提交层

涉及文件：

- [packages/core/src/h/content.ts](packages/core/src/h/content.ts)
- [packages/core/src/h/attr.ts](packages/core/src/h/attr.ts)
- [packages/core/src/jsx/if.ts](packages/core/src/jsx/if.ts)
- [packages/core/src/jsx/for.ts](packages/core/src/jsx/for.ts)
- [packages/core/src/jsx/fragment.ts](packages/core/src/jsx/fragment.ts)

当前：监听器里直接操作 DOM。

建议：

- 监听器内部不立即改 DOM
- 改为把最后一次 patch 逻辑放进 commit queue
- 同一个 DOM 绑定点在同一 tick 内去重

例如文本节点绑定：

```ts
let pendingValue = c.value;
const commit = () => {
  const oldNode = node;
  node = assureNode(pendingValue);
  oldNode.replaceWith(node);
};

c.addOnChange((newValue) => {
  pendingValue = newValue;
  scheduler.enqueueCommit(commit);
});
```

## 改造量评估

### 核心改造量

中等，不算小，但也不是架构重写。

原因：

- `ref/computed/effect` 的变更传播路径比较集中，核心逻辑在少数文件内
- 但 DOM 绑定点分散在多处，需要统一接入 commit queue
- 测试语义会从“同步立即可见”变成“microtask 后可见”，这部分需要系统性调整

### 影响范围

核心文件：

- [packages/core/src/reactive/refs/ref.ts](packages/core/src/reactive/refs/ref.ts)
- [packages/core/src/reactive/computed.ts](packages/core/src/reactive/computed.ts)
- [packages/core/src/reactive/effect.ts](packages/core/src/reactive/effect.ts)
- [packages/core/src/reactive/index.ts](packages/core/src/reactive/index.ts)

渲染绑定文件：

- [packages/core/src/h/content.ts](packages/core/src/h/content.ts)
- [packages/core/src/h/attr.ts](packages/core/src/h/attr.ts)
- [packages/core/src/jsx/if.ts](packages/core/src/jsx/if.ts)
- [packages/core/src/jsx/for.ts](packages/core/src/jsx/for.ts)
- [packages/core/src/jsx/fragment.ts](packages/core/src/jsx/fragment.ts)

测试文件：

- [packages/core/tests/reactive.test.ts](packages/core/tests/reactive.test.ts)
- 以及所有依赖同步更新语义的 DOM 测试

### 风险点

1. 兼容性风险

现有用户可能依赖如下同步语义：

```ts
count.value++;
console.log(el.textContent);
```

如果启用异步批处理，`el.textContent` 在同一同步栈里可能还是旧值。

2. 递归 flush 风险

effect/computed 内再次写 ref，可能产生 flush 嵌套，需要稳定的循环与上限保护。

3. DOM 替换时序风险

像 [packages/core/src/jsx/if.ts](packages/core/src/jsx/if.ts) 和 [packages/core/src/h/content.ts](packages/core/src/h/content.ts) 这种直接 `replaceWith()` 的逻辑，延后提交后要确保 anchor/current 指针仍然有效。

4. 测试迁移成本

大量断言需要改成：

```ts
state.value = 1;
await nextTick();
expect(...)
```

## 最稳妥的落地策略

不建议一步到位全量切换，建议分 3 阶段。

### 阶段 1：先做可选调度器，不改默认语义

- 新增内部 scheduler
- 新增 `batch(fn)`、`flush()`、`nextTick()`
- `batch(fn)` 内的多次变更走批处理，batch 外仍然同步

优点：

- 几乎没有破坏性
- 可先验证调度器实现是否稳定

### 阶段 2：让 computed/effect 进入批处理，DOM 仍保持同步

- 先消除重复计算
- 不立即改 DOM 语义

优点：

- 收益已经很明显
- 兼容性风险比“直接延后 DOM”更低

### 阶段 3：DOM 提交也进入 commit queue

- attr/content/if/for/fragment 统一走 commit
- 公开 `nextTick()` 作为稳定等待点

这时才算真正完成“下一刻统一计算、统一渲染”。

## 推荐 API 设计

第一版建议新增这些 API：

```ts
batch(fn: () => void): void
flush(): void
nextTick(): Promise<void>
configureReactive(options: {
  scheduling?: 'sync' | 'microtask';
}): void
```

说明：

- `batch(fn)` 用于显式合并更新
- `flush()` 主要给测试和低层运行时
- `nextTick()` 用于等待一次 flush 完成
- `configureReactive()` 可用于未来把默认策略从 `sync` 切到 `microtask`

## 我的建议

如果你的目标是“避免反复重算”，这个设计是合适的。

但从 KT.js 当前代码状态来看，我建议不要直接把默认行为改成全局异步提交，而是：

1. 先引入内部 scheduler 基础设施
2. 先用 `batch()` 验证去重和 flush 顺序
3. 优先把 computed/effect 改成批量化
4. 最后再决定是否把 DOM 提交默认改到下一刻

这样改造量属于“中等偏大”，但路径可控，且每一步都能单独验证。

## 如果现在开始做，建议的实施顺序

1. 新增 `scheduler.ts`
2. 改 [packages/core/src/reactive/refs/ref.ts](packages/core/src/reactive/refs/ref.ts) 接入 dirty queue
3. 改 [packages/core/src/reactive/computed.ts](packages/core/src/reactive/computed.ts) 为 lazy dirty + flush recompute
4. 改 [packages/core/src/reactive/effect.ts](packages/core/src/reactive/effect.ts) 为 queued effect
5. 增加 `batch/flush/nextTick`
6. 补 reactive 单测，先覆盖批量写入去重
7. 再改 DOM 层接入 commit queue
8. 补 DOM 单测，统一迁移到 `await nextTick()`

## 一句话判断

方向对，收益明确；但第一刀应该砍在 computed/effect 调度，不要先全量异步化 DOM。
