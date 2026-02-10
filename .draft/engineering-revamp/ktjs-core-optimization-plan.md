# KT.js Core 6点优化方案（重点1、2）

本文档针对 KT.js core 的六个关键差距提出可落地的优化方案，并保持“精简、可控、手动更新”的核心哲学。1、2 为重点，给出更细化的设计与落地步骤。

---

## 1) 生命周期与资源回收机制（重点）

### 1.1 目标与原则

- 目标：建立可预期的资源管理模型，确保事件、订阅、异步任务在组件卸载时被清理。
- 原则：不引入隐式重渲染，不侵入手动更新哲学，API 简洁。

### 1.2 需要解决的核心问题

- `ref` / `computed` / `effect` 的订阅无统一清理方式。
- 组件被移除后，回调仍可能触发，造成内存泄漏或 DOM 操作异常。
- 异步任务（Promise/timeout/request）无法统一终止。

### 1.3 建议的 API 设计（最小集合）

1. **生命周期钩子**（挂载/卸载）

```ts
// 举例：仅为概念，不要求引入虚拟DOM
import { onMount, onUnmount } from '@ktjs/core';

function Counter() {
  onMount(() => {
    // 初始化
  });

  onUnmount(() => {
    // 清理订阅/事件/定时器
  });

  return <div>...</div>;
}
```

2. **作用域清理管理器**

```ts
const scope = createScope();

scope.onDispose(() => {
  // 统一清理
});

// 元素被移除时自动 dispose
scope.attachToElement(el);
```

3. **订阅的可移除句柄**

- `ref.addOnChange` 返回 `unsubscribe`，或者提供 `ref.onChange` 作为新接口。
- `effect` 返回 stop 已有，但建议统一到 scope 中集中管理。

### 1.4 实现思路

- 在创建元素时生成一个“生命周期上下文”，并通过 `ref` 或 `props` 传递。
- `jsx()` 或 `h()` 在创建元素后，绑定一个 `__kt_scope__` 结构，提供 `dispose` 方法。
- `k-if` 替换节点时，自动调用旧节点的 `dispose`。
- `KTFor` 在移除或替换节点时，调用节点的 `dispose`。

### 1.5 资源回收的“默认规则”

- 事件监听：由框架注册的事件自动移除。
- 订阅：`ref` / `computed` / `effect` 与 scope 关联，scope 销毁即清理。
- 异步任务：通过 `onDispose` 注册取消方法。

### 1.6 边界场景

- 手动 DOM 替换：若用户 `node.replaceWith`，需明确是否触发 `dispose`（建议提供工具函数 `replaceWithDispose`）。
- `Fragment`/数组节点：每个元素都持有自身 scope。

---

## 2) 更新调度与批处理（重点）

### 2.1 目标与原则

- 目标：避免高频 `ref.value = ...` 触发大量同步 DOM 替换，减少性能抖动。
- 原则：保持“手动更新”语义，但提供可选的 batch/flush 机制。

### 2.2 建议 API

1. **批处理函数**

```ts
batch(() => {
  a.value = 1;
  b.value = 2;
});
// 仅一次 DOM 刷新
```

2. **调度刷新**

```ts
flushSync(() => {
  // 立即刷新
});

nextTick(() => {
  // 统一在微任务队列处理
});
```

### 2.3 实现策略

- 维护一个更新队列（Set/Map），收集 `ref` / `computed` 的变更。
- 在微任务队列中执行 `flush`，将 DOM 替换集中化。
- `batch` 内禁用立即 DOM 替换，改为“收集并延迟提交”。

### 2.4 对现有机制的最小改动建议

- `KTRef.set value` 与 `KTComputed` 更新时不直接 `replaceWith`，而是走统一调度器。
- 保留一个 `immediate` 标志用于紧急刷新。

### 2.5 关键收益

- 大量连续更新的 DOM 操作聚合为一次。
- 为未来接入优先级调度留出接口。

---

## 3) 依赖追踪体验优化

### 3.1 目标

- 降低手动传入依赖数组的成本，减少遗漏。

### 3.2 方案

- 继续保留显式依赖（默认模式）。
- 增加可选“自动依赖收集模式”（开发时开启）。
- 提供调试信息：输出依赖链路，辅助排查。

---

## 4) 错误边界与异步渲染稳定性

### 4.1 目标

- 异步/组件执行错误可控，避免污染全局。

### 4.2 方案

- 提供 `KTErrorBoundary` 组件或 `tryRender` API。
- 对 `KTAsync` / Promise children 统一处理异常与 fallback。

---

## 5) SSR / 水合支持

### 5.1 目标

- 提供最小可用 SSR + hydrate 能力。

### 5.2 方案

- `renderToString` 生成 HTML。
- `hydrate` 基于现有 DOM 与 `ref` 绑定。
- 先支持纯静态 + 简单 `k-if` / `k-for` 场景。

---

## 6) 生态连接点与规范

### 6.1 目标

- 为第三方组件库与工具提供统一接入方式。

### 6.2 方案

- 统一组件规范：props/children/ref/生命周期固定接口。
- 增加工具包：事件规范、属性规范、基础 hooks。
- 提供官方小组件库作为示范。

---

## 阶段性建议（可选）

- **v1**：完成生命周期 + scope 回收（含 KTFor/k-if/k-async 场景）。
- **v2**：引入 batch/flush 调度器，优化 ref/computed 更新路径。
- **v3**：可选自动依赖追踪 + 错误边界。
- **v4**：SSR/水合最小版本。
- **v5**：生态规范与工具链完善。
