# KT.js 核心调度器优化方案

## 问题背景

目前 KT.js 的响应式系统采用同步更新机制：当 `KTRef` 或 `KTComputed` 的值发生变化时，立即触发所有监听器（`addOnChange` 注册的回调）。这种机制在高频变化场景下存在性能问题：

1. **同一轮渲染内反复处理依赖变化**：例如在循环中连续修改多个响应式值，每个变化都会立即触发 DOM 更新，导致多次 DOM 操作。
2. **不必要的中间状态更新**：多个关联变化可能产生中间状态，触发不必要的副作用执行。
3. **内存使用压力**：频繁的 DOM 操作可能引起布局抖动（layout thrashing），增加内存压力。

## 目标

- **高频变化一次执行**：同一事件循环内的多个响应式变化合并为一次更新执行。
- **保持计算属性同步**：计算属性的重新计算保持同步，确保依赖链的正确性。
- **降低内存使用**：减少不必要的 DOM 操作和临时对象创建。
- **向后兼容**：现有 API 行为基本不变，仅优化执行时机。

## 现有架构分析

### 响应式核心
- `KTRef` / `KTComputed`：通过 `_emit` 方法同步调用所有监听器。
- `effect` 函数：直接依赖变化时立即执行副作用函数。
- 属性绑定（`attr.ts` / `content.ts`）：为响应式值注册 DOM 更新监听器，变化时立即更新 DOM。

### 更新流程
```
值变化 → _emit() → 监听器回调（同步） → DOM 更新 / 计算重算
```

## 优化方案设计

### 1. 引入调度器（Scheduler）

创建全局调度器，负责收集和执行更新任务。调度器提供以下能力：

- **任务队列**：存储待执行的更新任务。
- **去重机制**：同一监听器在同一批次中只执行一次。
- **微任务执行**：使用 `queueMicroTask` 或 `Promise.resolve()` 在微任务阶段执行队列。
- **优先级支持**：区分同步任务（计算属性）和异步任务（DOM 更新）。

### 2. 任务类型划分

| 任务类型 | 执行时机 | 说明 |
|---------|---------|------|
| **SYNC** | 立即执行 | 计算属性重算、依赖收集等必须同步的操作 |
| **ASYNC** | 微任务批次 | DOM 更新、用户副作用等可延迟的操作 |

### 3. 修改 `_emit` 方法

在 `KTRef` 和 `KTComputed` 的 `_emit` 方法中，将监听器回调包装为任务提交给调度器：

```typescript
// 伪代码
_emit(newValue, oldValue, handlerKeys?) {
  const listeners = this._getListeners(handlerKeys);
  for (const listener of listeners) {
    scheduler.enqueue(listener, newValue, oldValue, {
      type: listener.isComputedRecalc ? 'SYNC' : 'ASYNC'
    });
  }
}
```

### 4. 计算属性同步保证

计算属性的 `_recalculate` 方法及其依赖的更新保持同步执行，确保后续读取能获得最新值。这可以通过为计算属性监听器标记 `SYNC` 类型实现。

### 5. 批量更新 API

提供手动批量更新 API，用于显式优化复杂操作：

```typescript
import { batch } from '@ktjs/core';

batch(() => {
  // 内部的多个响应式变化只会触发一次整体更新
  a.value = 1;
  b.value = 2;
  c.mutate(items => items.push(3));
});
```

### 6. 调度器实现要点

```typescript
class Scheduler {
  private syncQueue: Task[] = [];
  private asyncQueue: Task[] = [];
  private isFlushing = false;
  private pendingMicroTask = false;

  enqueue(task: Task, type: 'SYNC' | 'ASYNC') {
    // 去重逻辑：相同监听器在同一批次中只保留一个
    // ...
    if (type === 'SYNC') {
      this.flushSync();
    } else {
      this.scheduleAsync();
    }
  }

  flushSync() {
    // 立即执行所有 SYNC 任务
  }

  scheduleAsync() {
    if (!this.pendingMicroTask) {
      this.pendingMicroTask = true;
      queueMicroTask(() => this.flushAsync());
    }
  }

  flushAsync() {
    // 执行所有 ASYNC 任务
    // 注意：执行过程中可能产生新的 SYNC/ASYNC 任务
  }
}
```

## 实施步骤

### 第一阶段：基础调度器
1. 创建调度器模块 `packages/core/src/reactive/scheduler.ts`
2. 实现任务队列、去重、微任务执行机制
3. 添加全局调度器实例

### 第二阶段：修改响应式核心
1. 修改 `KTRef` 和 `KTComputed` 的 `_emit` 方法，接入调度器
2. 为计算属性重算标记 `SYNC` 类型
3. 确保现有测试通过

### 第三阶段：DOM 更新异步化
1. 修改 `attr.ts` 和 `content.ts` 中的监听器注册，确保 DOM 更新任务被标记为 `ASYNC`
2. 验证 DOM 更新在微任务中批量执行

### 第四阶段：批量更新 API
1. 实现 `batch` 函数
2. 添加相关测试

### 第五阶段：性能测试与优化
1. 创建高频变化性能测试用例
2. 分析内存使用和渲染性能
3. 优化调度器算法（如优先队列）

## 预期收益

### 性能提升
- **减少 DOM 操作次数**：高频变化场景下 DOM 更新次数降为 1 次
- **降低布局抖动**：集中更新减少浏览器重排/重绘
- **减少临时对象创建**：去重机制避免重复任务对象

### 内存优化
- 减少中间状态产生的垃圾对象
- 降低事件循环压力

### 开发者体验
- 自动批处理无需用户干预
- 手动 `batch` API 提供精细控制
- 保持计算属性同步，避免意外行为

## 风险与注意事项

### 行为变化风险
- DOM 更新从同步改为异步，可能影响依赖更新时机的代码
- 需要仔细审查现有测试，确保兼容性

### 循环依赖处理
- 调度器需检测循环更新，避免无限递归
- 可设置最大递归深度或超时机制

### 错误处理
- 异步执行中的错误需要正确捕获并报告
- 避免因单个任务失败导致整个队列中止

## 后续扩展

### 优先级调度
未来可引入更多优先级级别，如：
- `IMMEDIATE`：同步执行（当前 SYNC）
- `HIGH`：当前微任务
- `LOW`：下一个事件循环（setTimeout）
- `IDLE`：空闲时期（requestIdleCallback）

### 时间切片
对于大量 DOM 更新，可考虑使用时间切片（time slicing）避免阻塞主线程。

### 开发工具集成
调度器可暴露调试接口，用于性能分析器显示更新批次和任务耗时。

## 参考

- Vue 3 响应式调度器设计
- React 的 Concurrent Mode 和自动批处理
- Mobx 的 transaction 和 reaction 调度
- Solid.js 的批量更新机制

## 附录：性能测试用例示例

```typescript
// 高频数据更新测试
const list = ref<number[]>([]);
const container = document.createElement('div');

// 注册 DOM 更新
effect(() => {
  container.innerHTML = list.value.join(',');
}, [list]);

// 批量添加 1000 个元素
performance.mark('start');
for (let i = 0; i < 1000; i++) {
  list.mutate(items => items.push(i));
}
performance.mark('end');

// 优化前：触发 1000 次 DOM 更新
// 优化后：触发 1 次 DOM 更新（微任务中）
```

---

*文档版本：1.0*
*创建日期：2026-02-26*
*作者：Claude Code*