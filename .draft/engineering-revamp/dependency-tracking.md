# 依赖追踪体验

## 目标
保持默认“显式依赖”，同时提供可选的自动依赖收集，降低复杂组件的心智负担。

## 两种模式
1) 显式（默认）
```ts
const total = computed(() => a.value + b.value, [a, b]);
```

2) 自动收集（可选）
```ts
const total = computedAuto(() => a.value + b.value);
```

## 实现草图
- 在 `ref.get value` 中检查是否存在“全局依赖收集器”。
- `computedAuto` 开启收集器，执行计算函数，记录被访问的 `ref`。
- 在 dev 模式提供“意外依赖变化”的告警。

## 约束与护栏
- 自动模式必须显式开启，保证哲学一致性。
- 提供调试 API：`getDependencies(computed)`。
