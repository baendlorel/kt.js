# 生命周期与资源回收（优先级 1）

## 目标
在不引入虚拟 DOM 的前提下，提供可预测的资源清理模型。这里的“生命周期”指挂载/卸载与作用域内的事件、订阅、异步任务清理。

## 最小 API
```ts
// 绑定到当前组件作用域的生命周期钩子
export function onMount(fn: () => void): void;
export function onUnmount(fn: () => void): void;

// 非组件场景下的手动作用域
export function createScope(): KTScope;

export interface KTScope {
  onDispose(fn: () => void): void;
  dispose(): void;
  attachToElement(el: Node): void; // 节点移除时自动 dispose
}
```

## 核心规则
- 每个创建的元素都持有一个隐藏作用域引用（如 `__kt_scope__`）。
- 当元素被框架助手移除或替换时，触发 `dispose()`。
- `onUnmount` 注册到“最近的活动作用域”。
- `ref`/`computed`/`effect` 订阅可被绑定到作用域并自动移除。

## 实现草图
1) 添加作用域栈，在组件执行期间保持“当前作用域”。
2) `jsx()` 与 `h()` 创建元素时生成作用域，并在组件函数运行时设为当前作用域。
3) `onMount` 在插入 DOM 后执行；`onUnmount` 在移除前执行。
4) DOM 工具（`k-if`、`KTFor`、`KTAsync`、`replaceWith`）在替换节点时调用 `dispose()`。

## 清理目标
- 框架注册的事件监听器。
- `ref` / `computed` / `effect` 创建的订阅。
- 通过 `onUnmount` 注册的异步任务（定时器、请求取消）。

## 边界场景
- 手动 DOM 替换：提供 `replaceWithDispose(oldNode, newNode)`。
- Fragment：为每个子节点独立挂载作用域。
- 组件嵌套：子作用域独立销毁，父作用域可选择级联。

## 示例
```ts
function Clock() {
  const now = ref(Date.now());
  const timer = setInterval(() => (now.value = Date.now()), 1000);

  onUnmount(() => clearInterval(timer));

  return <div>{new Date(now.value).toLocaleTimeString()}</div>;
}
```
