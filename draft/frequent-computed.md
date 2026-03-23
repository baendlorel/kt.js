# frequent computed 调度方案

## 背景

当前 `computed` 的实现非常直接：

- 构造时遍历 `dependencies`
- 对每个 dependency 注册 `addOnChange`
- 任何一次 dependency 变化都会同步执行 `_recalculate()`

对应代码位置：

- `packages/core/src/reactive/computed.ts`
- `packages/core/src/reactive/scheduler.ts`
- `packages/core/src/reactive/ref.ts`

现在已经存在一个 scheduler，但它只服务于 `ref.draft` 的原地修改场景。也就是说：

- `ref.value = newValue` 仍然是同步触发
- `computed` 仍然是同步重算
- 连续多次 dependency 变化时，`computed` 会重复计算多次

这也是 `computed.ts` 里那句 todo 的来源：

> 侦听的 dependency 数量比较多的，纳入 scheduler

不过如果直接把所有 `computed` 都改成异步 schedule，会破坏现有一个非常重要的语义：

```ts
count.value++;
console.log(double.value);
```

今天这里通常期待 `double.value` 立刻是新值。如果一刀切改成异步，读取会变成脏值。

所以最小实现不能是“所有 computed 一律异步”，而应该是：

1. 默认仍保持同步
2. 只对“短时间内被反复打爆”的 computed 启用 schedule
3. 即使进入 schedule，读取 `.value` 时仍然要拿到最新值

## 目标

目标不是做一个完整的新 reactive 模型，而是在现有机制上补一个轻量层：

- 减少高频 invalidation 下的重复计算
- 尽量不改公开 API
- 尽量不影响现有测试语义
- 尽量复用已有 microtask scheduler

## 不建议的方案

### 方案 A：所有 computed 默认走 scheduler

不建议。

原因：

- 会破坏同步读取语义
- 会让链式 computed 更容易出现“读到旧值”的窗口
- 对现有使用方是行为级变更，不是优化

### 方案 B：仅按 dependency 数量决定是否 schedule

不建议直接这么做。

原因：

- dependency 多不等于一定频繁触发
- dependency 少也可能在一个事件循环里被连续改很多次
- 只看数量，无法真正反映“频繁计算”

dependency 数量可以作为辅助信号，但不该是唯一判定条件。

## 推荐方案

推荐做一个“热度追踪 + 微任务合并”的 auto schedule。

核心原则：

- 冷 computed：维持当前同步行为
- 热 computed：进入 dirty + queued 状态，在 microtask 中合并重算
- 但只要有人读 `computed.value`，若它是 dirty，就立即同步 flush 自己

这样可以同时满足：

- 常规场景语义不变
- 高频场景减少重复重算
- 主动读取时仍然同步拿到最新值

## 热 computed 的判定

不做复杂的时间窗口统计，直接用“同一 microtask 内的 burst 次数”作为频繁计算的定义。

建议内部字段：

```ts
private _dirty = false;
private _queued = false;
private _burstHits = 0;
private _burstResetQueued = false;
private _oldValueBeforeSchedule?: T;
```

建议阈值：

```ts
const HOT_COMPUTED_BURST_THRESHOLD = 3;
const HOT_COMPUTED_DEP_THRESHOLD = 8;
```

判定策略：

1. dependency 触发一次时，先 `burstHits++`
2. 同时用一个 microtask 在本轮末尾把 `burstHits` 清零
3. 当满足以下任一条件时，当前 computed 进入 schedule 模式

- `burstHits >= HOT_COMPUTED_BURST_THRESHOLD`
- 或 `dependencies.length >= HOT_COMPUTED_DEP_THRESHOLD`

这里的含义是：

- “确实被连续打很多次” 的 computed 会被自动收敛
- dependency 特别多的 computed，从一开始就更偏向合并执行

这比只看 dependency 数量更接近真实负载，同时实现成本仍然很低。

## 行为设计

### 1. dependency 变化时不再直接只调用 `_recalculate()`

给 `computed` 增加一个统一入口，比如：

```ts
private _invalidate(): void
```

dependency listener 改为调用 `_invalidate()`。

### 2. 冷路径继续同步

如果当前还没达到 hot 条件：

```ts
this._recalculate();
```

这保证大部分普通场景完全不变。

### 3. 热路径改为 dirty + queue

如果达到 hot 条件：

```ts
if (!this._dirty) {
  this._dirty = true;
  this._oldValueBeforeSchedule = this._value;
}

if (!this._queued) {
  this._queued = true;
  queueComputed(this);
}
```

这一步只做“失效标记”和“排队”，不立即执行计算。

### 4. getter 兜底同步 flush

`get value()` 改成：

```ts
get value() {
  if (this._dirty) {
    this._flushScheduled();
  }
  return this._value;
}
```

这样即使它已经进入 schedule，只要业务立刻读取，也还是新值。

这是整个方案里最关键的一点。

没有这一步，schedule 会直接破坏现有同步读取语义。

### 5. microtask flush 时只真正重算一次

新增一个内部方法：

```ts
_flushScheduled(): void
```

逻辑大致是：

```ts
if (!this._dirty) {
  this._queued = false;
  return;
}

this._dirty = false;
this._queued = false;

const oldValue = this._oldValueBeforeSchedule as T;
this._oldValueBeforeSchedule = undefined;

const newValue = this._calculator();
if (oldValue === newValue) {
  return;
}

this._value = newValue;
this._emit(newValue, oldValue);
```

也就是说：

- 连续 10 次 dependency 变化
- 最后只会真正计算一次
- listener 也只会收到一次最终结果

## scheduler 的最小扩展

现在的 `scheduler.ts` 只处理 `KTRef.draft` 的 mutation 合并。

建议不要新开一个完全独立的 scheduler，而是在现有文件里扩展成两个队列，共用同一个 microtask flush。

建议结构：

```ts
const reactiveToOldValue = new Map<KTRef<any>, any>();
const queuedComputeds = new Set<KTComputed<any>>();
let scheduled = false;
```

新增导出：

```ts
export const queueComputed = (computed: KTComputed<any>) => {
  queuedComputeds.add(computed);
  queueFlush();
};
```

同时抽一个统一的：

```ts
const queueFlush = () => { ... }
```

flush 顺序建议：

1. 先 flush `ref.draft` 的 mutation listener
2. 再 flush `queuedComputeds`
3. 如果 flush computed 的过程中又产生新的 queued computed，则继续 drain，直到队列为空

伪代码：

```ts
Promise.resolve().then(() => {
  scheduled = false;

  flushRefMutations();

  while (queuedComputeds.size) {
    const current = [...queuedComputeds];
    queuedComputeds.clear();
    for (let i = 0; i < current.length; i++) {
      current[i]._flushScheduled();
    }
  }
});
```

这样可以覆盖链式 computed：

- A 进入队列
- A flush 时触发 B dirty
- B 还能在同一轮 scheduler 中继续被 drain

## 为什么这是最小实现

这个方案的改动范围主要集中在两个文件：

- `packages/core/src/reactive/computed.ts`
- `packages/core/src/reactive/scheduler.ts`

必要时补测试：

- `packages/core/tests/reactive.test.ts`

它没有引入以下重型能力：

- 没有动态依赖收集
- 没有 effect 栈
- 没有全局优先级调度
- 没有 public API 大改
- 没有把 ref/computed 都整体改成 lazy pull 模型

只是给现有 push 模型补了一层“热时合并、读时兜底”的薄封装。

## 与现有语义的兼容性

### 保持不变

- 普通 `computed` 大多数情况下仍然同步更新
- `notify()` 仍应该保持同步
- `computed.value` 仍然应该读到最新值
- 现有大部分单测预期不需要改

### 会被刻意改变的地方

当 computed 被判定为 hot 时：

- dependency 连续变化，不再每次都立即 `_emit`
- listener 会在 microtask 中合并收到一次最终结果

我认为这是合理的，因为这是性能优化的目标本身。

## `notify()` 的建议

`notify()` 是显式强制通知，建议继续绕过 scheduler，保持当前同步语义：

```ts
notify(handlerKeys?: ChangeHandlerKey[]): this {
  return this._recalculate(true, handlerKeys);
}
```

不要把 `notify()` 也纳入 queue，否则它的语义会变得模糊。

## 是否需要公开 API

第一阶段不建议暴露新的 public API。

也就是说，先只做内部 auto schedule：

```ts
computed(fn, deps);
```

行为仍然不变，只是在内部对 hot computed 自动合并。

如果后续你希望更可控，再考虑扩展为：

```ts
computed(fn, deps, {
  schedule: 'sync' | 'auto' | 'microtask',
});
```

但这个我建议放第二阶段。

现在先上内部 auto，成本最低，也最安全。

## 建议的落地步骤

### 第一步

在 `computed.ts` 中新增状态：

- `_dirty`
- `_queued`
- `_burstHits`
- `_burstResetQueued`
- `_oldValueBeforeSchedule`
- `_dependencyCount`

### 第二步

把 dependency listener 从：

```ts
dependencies[i].addOnChange(() => this._recalculate());
```

改成：

```ts
dependencies[i].addOnChange(() => this._invalidate());
```

### 第三步

在 `scheduler.ts` 中新增 computed queue，并与现有 microtask flush 合并。

### 第四步

在 getter 中加 dirty 兜底同步刷新。

### 第五步

补测试。

## 建议补的测试

### 1. 连续多次修改只合并一次异步 emit

验证点：

- 高频 invalidation 时，calculator 实际执行次数少于 dependency 触发次数
- 最终值正确

### 2. 被 schedule 后，立即读取 `.value` 仍然是新值

验证点：

```ts
base.value = 1;
base.value = 2;
expect(computedValue.value).toBe(...latest);
```

### 3. 链式 computed 在同一轮 flush 中最终一致

验证点：

- A 依赖 ref
- B 依赖 A
- burst 更新后 B 最终值正确

### 4. `notify()` 仍然同步

验证点：

- `notify()` 立即触发 listener
- `handlerKeys` 过滤仍正常

## 我对这套方案的结论

如果目标是“在你现有机制上，最小化、轻量级地给 frequent computed 加 schedule”，我认为最合适的不是：

- 全量异步 computed
- 也不是只按 dependency 数量硬切换

而是这套：

- 默认同步
- 基于 burst 追踪 hot computed
- hot 时 dirty + microtask queue
- 读取 `.value` 时同步兜底 flush
- 复用现有 scheduler

它的优点是：

- 改动集中
- 兼容性最好
- 不引入新的大模型概念
- 性能收益主要落在真正高频的 computed 上

如果你认可这个方向，下一步我建议直接做第一版实现，先不要暴露新 API，只做内部 auto schedule 和测试补齐。
