# core 生命周期现状对照（2026-05-06）

## 结论

`draft/lifecycle.md` 和 `draft/lifecycle.glm.md` 讨论的是一套基于 `Scope / NodeScope / owner` 的生命周期重构方案，但这套方案并没有落地到当前 core。当前更准确的描述是：

- 结构渲染已经 anchor 化，`KTIf`、`KTFor`、`Fragment`、reactive content 都靠 `KTAnchor` 系列做插入、替换和移除。
- 响应式释放仍以显式 API 为主，例如 `unlisten()`、`effect` stop、`computed.dispose()`、`subref.dispose()`。
- DOM 节点卸载和响应式副作用之间还没有统一 cleanup 机制。

## 现状重点

### 1. 旧草案没有落地

当前源码里没有旧草案提到的这些关键部件：

- `Scope / NodeScope / ListenerRecord`
- `$indom`
- `MutationObserver` 驱动的统一清理
- owner-aware 的 reactive listener 模型

`packages/core/src/reactable/reactive.ts` 仍然是 `Set<listener>`，并且还保留了“用 isConnected 去判定并清理”的 TODO。

### 2. 当前已有的生命周期能力

- Anchor 层负责 DOM 结构变化，但不负责资源所有权。
- Reactive 层支持显式订阅与释放。
- 调度器已经具备微任务批处理和异常隔离能力。

这些能力能保证视图更新和手动释放，但还不能保证“节点移除后自动回收其副作用”。

### 3. 当前缺口在哪里

- `attr.ts` 和 `model.ts` 只有绑定，没有统一解绑。
- `content / if / for / fragment` 会移除旧 DOM，但不会统一回收旧节点相关监听。
- `KTFor` 的 `key` 还只是接口参数，没有进入真实的复用和生命周期语义。

### 4. 测试也说明 cleanup 还没完成

`packages/core/tests/cleanup.test.tsx` 里，除了 `computed.dispose()` 相关用例，其余分支替换、`k-model`、reactive content cleanup 用例仍是 `skip`。这和当前实现状态一致：自动 cleanup 还不能视为完成特性。

## 建议

如果后续继续推进生命周期重构，优先级应当是：

1. 先给 reactive listener 建立 owner 语义。
2. 先补 `attr / model / content / if` 这些高频泄漏点。
3. 在 cleanup 测试真正启用前，不再把自动 cleanup 写成已完成能力。
4. 明确 `KTFor.key` 到底是 API 占位，还是要承担节点复用与局部生命周期保留。

## 一句话

当前 core 已经有 Anchor 结构生命周期和显式 reactive 释放能力，但统一资源生命周期还没有完成。