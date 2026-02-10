# 错误边界与异步稳定性

## 目标
在组件执行和异步渲染中提供可控错误处理，避免全局崩溃。

## 最小 API
```ts
export function tryRender(render: () => HTMLElement, fallback?: () => HTMLElement): HTMLElement;

export function KTErrorBoundary(props: {
  children: KTRawContent;
  fallback: (err: unknown) => HTMLElement;
}): HTMLElement;
```

## 异步稳定性
- `KTAsync` 捕获 Promise reject，渲染 fallback。
- `applyContent` 处理 Promise child 时支持数组结果与异常分支。

## 实现草图
- 在 `jsx()` 内对组件执行做 try/catch。
- 发生错误时渲染 fallback 并可选记录日志。
- Promise children 用占位节点，resolve 后替换；reject 时替换为错误节点。
