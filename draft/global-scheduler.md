# 全局调度器方案（减少 onchange 重复重绘）

> 日期：2026-02-22
> 范围：`@ktjs/core` 响应式层 + JSX 指令更新路径

## 0. k-指令优先级结论

当前指令覆盖已够用：`k-if/k-else`、`k-for/k-key`、`k-model`、`k-html`。  
短期内没有“必须马上补”的新 `k-` 指令；相比之下，**onchange 引发的重复 redraw**是更高优先级问题。  
（可选低优先级候选：`k-show`，只切换 display，不卸载节点。）

---

## 1. 现有问题

目前 `KTRef/KTComputed` 的 `addOnChange` 是同步逐个触发：

1. 同一事件里连续改多个响应式值，会导致同一 redraw 连续执行多次；
2. `k-for/k-if/k-html` 等 DOM 更新回调可能在同一 tick 反复跑；
3. 用户手写 `addOnChange(() => redraw())` 也会遇到重复调用；
4. 高频更新时会出现不必要的 DOM 抖动与性能浪费。

典型例子：

```ts
a.value = 1;
b.value = 2;
// 同一 redraw 可能被触发 2 次（甚至更多）
```

---

## 2. 目标与非目标

### 目标

- 在一个 tick 内对同一类更新做去重与合并；
- 保证更新顺序稳定（先计算、后渲染、再副作用）；
- 提供 `batch` 能力，显式合并多次修改；
- 尽量少改外部 API，优先兼容现有代码。

### 非目标

- 不引入虚拟 DOM；
- 不重写 `KTFor`/`k-if` 逻辑；
- 不在首版做跨组件的复杂优先级调度。

---

## 3. 核心设计

新增模块：`packages/core/src/reactive/scheduler.ts`

### 3.1 三阶段队列

- `pre`：派生计算（如 computed 重算）
- `render`：DOM patch / redraw（`k-for`、`k-if`、`k-html`、attr/content 更新）
- `post`：用户副作用（`effect`、日志、埋点等）

flush 顺序固定：`pre -> render -> post`。

### 3.2 Job 去重规则

每个订阅回调映射为一个稳定 job（`WeakMap` 保存）：

- 同一 job 在同一轮 flush 只入队一次；
- 多次触发时合并 payload：
  - `oldValue` 保留第一次；
  - `newValue` 始终更新为最后一次。

这样可以把“连发 N 次”压成“同轮 1 次”。

### 3.3 调度时机

- 默认：`microtask`（`queueMicrotask`）
- 可选：`sync`（兼容/调试）、`raf`（动画场景）

首版建议保留全局开关：

- `setSchedulerMode('sync' | 'microtask' | 'raf')`
- 默认可先 `sync`（无行为变化），在内部路径灰度改为 `microtask`。

---

## 4. API 草案（尽量兼容）

```ts
type SchedulerPhase = 'pre' | 'render' | 'post';
type FlushMode = 'sync' | 'microtask' | 'raf';

interface OnChangeOptions {
  phase?: SchedulerPhase;   // default: 'post'
  mode?: FlushMode;         // default: global mode
  dedupe?: boolean;         // default: true
}
```

### 4.1 响应式订阅扩展（向后兼容）

```ts
addOnChange(callback: ReactiveChangeHandler<T>, options?: OnChangeOptions): void
```

- 老调用方式不变；
- 不传 options 时保持旧语义（首版可仍同步）；
- 内部重绘路径可先传 `phase: 'render', mode: 'microtask'`。

### 4.2 全局辅助 API

```ts
batch(fn: () => void): void
nextTick(): Promise<void>
flushSync(): void
setSchedulerMode(mode: FlushMode): void
```

- `batch`：把多次 `.value = ...` 合并为一次 flush；
- `nextTick`：等待本轮队列完成，便于测试与链式逻辑。

---

## 5. 与现有代码的接入点

## 5.1 reactive 层

- `KTRef._emit`、`KTComputed._emit` 从“直接调用 callback”改为“提交 scheduler job”；
- `effect` 改为默认走 `post` 队列（或提供选项）；
- `notify/mutate` 同样进入调度队列，避免连发。

## 5.2 指令与 DOM 更新路径

内部订阅统一标记为 `render` 阶段（微任务合并）：

- `packages/core/src/jsx/for.ts`（`redraw`）
- `packages/core/src/jsx/if.ts`（分支切换）
- `packages/core/src/h/attr.ts`（属性/样式/html 更新）
- `packages/core/src/h/content.ts`（文本/节点替换）

---

## 6. 执行流程示意

```txt
用户代码修改 ref.value
  -> reactive._emit(new, old)
  -> scheduler.enqueue(job, phase)
  -> microtask flush()
     1) run pre jobs (computed)
     2) run render jobs (DOM patch)
     3) run post jobs (effect/user callbacks)
```

若 flush 过程中又产生新 job：进入下一轮，直到队列清空（含递归保护上限）。

---

## 7. 兼容与风险控制

1. **风险：依赖同步回调的旧代码**
   - 对策：首版提供全局 `sync` 模式与 `flushSync()`。

2. **风险：回调参数语义变化**
   - 对策：合并策略固定为“first old + last new”，并在文档明确。

3. **风险：循环触发**
   - 对策：flush 深度上限 + dev warning（例如超过 100 轮）。

4. **风险：内存泄漏**
   - 对策：job 元数据挂在 `WeakMap`，`removeOnChange` 时解绑引用。

---

## 8. 分阶段落地（建议）

### Phase 1（最小改动）

- 仅新增 scheduler + `batch/nextTick/flushSync`；
- 先接入 `k-for/k-if/h-attr/h-content` 的内部 redraw；
- 外部 `addOnChange` 默认保持旧行为。

### Phase 2（统一行为）

- `effect` 默认走 scheduler；
- `addOnChange` 默认改为 scheduler（可通过选项回退同步）。

### Phase 3（默认优化）

- 全局默认 `microtask`；
- 文档与示例统一推荐 `batch`。

---

## 9. 验收标准

1. 同一 tick 内多次改同一 list，`k-for.redraw` 只执行 1 次；
2. 同一 tick 内多 ref 联动，DOM patch 次数显著下降；
3. `k-if`/`k-html` 行为与旧语义一致（最终结果一致）；
4. 压测中无明显内存增长；
5. 提供 `flushSync` 后，测试可稳定控制时序。

---

## 10. 结论

在当前阶段，比新增更多 `k-` 指令更值得做的是：  
**引入全局调度器，把 onchange 触发从“同步连发”改成“分阶段批处理 + 去重合并”。**

这能直接降低重复重绘，且不需要推翻现有 `KTFor` 与指令实现。
