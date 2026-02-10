# SSR 与水合（最小版本）

## 目标
提供最小可用 SSR + hydrate 能力，用于 SEO 与首屏性能。

## 最小 API
```ts
export function renderToString(node: KTRawContent): string;
export function hydrate(root: HTMLElement, node: KTRawContent): void;
```

## 策略
- 实现与 `h()`/`applyContent` 行为一致的序列化。
- 支持基础元素、属性、`k-if` 与带稳定 key 的 `KTFor`。
- 水合阶段复用现有 DOM，只做事件/`ref` 绑定。

## 分阶段推进
- Phase 1：静态渲染 + 客户端事件绑定。
- Phase 2：`ref`/`computed` 的局部水合。
- Phase 3：异步组件与流式渲染。
