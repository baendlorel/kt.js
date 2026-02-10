# 测试计划

## 重点覆盖
- `k-if`、`KTFor`、手动替换的清理正确性。
- batch 内多次更新只触发一次 DOM flush。
- `KTAsync` Promise reject 时 fallback 正确渲染。

## 示例测试
1) 清理
- 创建组件并注册 `onUnmount`，移除后应触发。

2) 批处理
- batch 内多次 `ref` 更新应触发一次替换。

3) 异步异常
- `KTAsync` 在 reject 时渲染 fallback。
