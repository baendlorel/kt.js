# 生命周期重构设计评审

## 总体评价

这份设计方案整体质量很高，准确诊断了当前系统的核心问题，并提出了一个可行的解决方案。引入 Scope 体系是正确的方向，与 Vue 3 的 `EffectScope` 和 Solid 的 Owner 概念在思想上是一致的。

## 优点

### 1. 问题诊断精准

- 正确识别了"两套生命周期并立"的现状
- 指出了 reactive 层无法获知 listener 归属的根本原因
- 对现有代码中到处重复 `addOnChange` + `$addNodeCleanup` 模式的分析到位

### 2. Scope 设计合理

- 职责清晰：Scope 只管资源管理，不关心 DOM
- 继承语义自然：child scope 随 parent 一起销毁
- 幂等 dispose 和逆序执行是正确的选择

### 3. ListenerRecord 结构必要

- 从 `Map<any, handler>` 升级到 `Map<any, ListenerRecord>` 是必须的
- 增加的 `owner`, `once`, `disposed` 等字段为自动清理提供了基础设施
- 这确实无法通过简单的 TODO 补丁实现

## 建议与改进点

### 1. `$indom` 的角色需要更清晰的定位

提案中说 `$indom` 适合做"判断某个 Node 是否仍然属于文档树"，但当前的实现中我没看到 `$indom` 函数的定义。建议：

- 如果这是新引入的函数，需要明确其实现策略（使用 `document.contains()`？`isConnected` 属性？）
- 考虑到兼容性，建议使用 `node.isConnected` (现代浏览器) 或 `document.contains(node)` (老浏览器)

### 2. sweep 机制可能引入新的复杂度

提案建议使用主动 sweep 来发现已死亡的 DOM owner。这确实必要，但需要注意：

- **性能问题**：每次微任务都扫描可能有性能损耗。建议考虑事件驱动 + 定期 sweep 的混合模式
- **与 MutationObserver 的关系**：如果完全移除 MutationObserver，如何检测节点移除？建议保留 MutationObserver 作为主要触发源，sweep 作为兜底

### 3. tracker 的处理方案不够明确

提案中说 tracker "不能继续维持现在的形态"，只给了两个选项（删除或重写）。建议：

- 如果删除，需要考虑是否有代码已经依赖它
- 如果重写，建议返回一个标准的 `Disposable` 接口，与新的 scope 体系对接

### 4. 异步场景的处理可以更具体

提案中提到了 `runIfAlive` helper，但实现细节不够。建议：

```ts
export function runIfAlive<T>(owner: KTScope | Node, fn: () => T): T | undefined {
  const scope = owner instanceof Node ? getNodeScope(owner) : owner;
  if (scope.checkAlive()) {
    return fn();
  }
  return undefined;
}
```

### 5. 类型定义建议补充

提案中的接口定义基本完整，但建议补充：

```ts
// Owner 的联合类型
export type KTOwner = KTScope | Node;

// ListenerRecord 的完整定义应该放在 types.ts 中
export interface KTListenerRecord<T> {
  key: any;
  handler: ChangeHandler<T>;
  owner?: KTScope;
  once?: boolean;
  disposed?: boolean;
  dispose?: () => void;
  debugType?: string;
}
```

### 6. MVP 范围建议微调

提案建议 MVP 先迁移 attr、model、content，但我认为：

- **应该先从 For/Conditional 开始**：这两个组件是分支切换最频繁的地方，也是最容易暴露生命周期问题的地方
- **attr/model 可以后续**：它们的生命周期相对简单，主要是事件监听和属性更新

### 7. 向后兼容策略需要更详细

提案提到了 `addOnChange` 的兼容策略，但：

- 建议在过渡期提供 warning，帮助开发者识别需要迁移的代码
- 考虑提供一个 codemod 工具来自动迁移常见模式

## 需要特别关注的边界情况

### 1. Portal 场景

如果组件通过 Portal 渲染到其他位置，如何确定 owner node？

- 建议明确：Portal 内容的 owner 是 Portal 源节点还是目标容器节点
- 可能需要特殊的 `createPortalScope` API

### 2. SSR 场景

提案主要关注 DOM 环境，但需要考虑：

- SSR 时没有 `document` 和 `Node`，如何处理？
- 建议在无 DOM 环境下回退到纯手动 dispose 语义

### 3. 内存泄漏风险

NodeScope 持有 ownerNode 的引用是必要的，但需要确保：

- 当节点被移除时，scope 能被及时清理
- 不要在 scope 中存储对整个 DOM 树的强引用

## 实现建议

### 1. 分阶段验证

建议在正式迁移前，先写一套测试来验证新体系：

```ts
describe('Scope Lifecycle', () => {
  it('should cleanup listeners when node is removed', () => { ... })
  it('should handle nested scopes correctly', () => { ... })
  it('should dispose on conditional branch switch', () => { ... })
})
```

### 2. 渐进式迁移路径

1. **Phase 1**: 实现 Scope/NodeScope 基础设施，与现有代码并存
2. **Phase 2**: 在一个独立模块（如新的组件）中验证新体系
3. **Phase 3**: 迁移核心模块（For -> Conditional -> Fragment -> attr/model）
4. **Phase 4**: 清理旧代码，移除 `$addNodeCleanup` 的主要用途

### 3. 调试支持

建议在开发模式下增加：

```ts
interface KTListenerRecord<T> {
  // ...existing fields
  stackTrace?: string;  // 创建时的调用栈，方便调试
  componentName?: string;  // 所属组件名
}
```

## 总结

这是一个值得执行的重构方案。核心设计思想是正确的，主要的风险在于：

1. sweep 机制的实现复杂度
2. 迁移过程中可能出现的边界情况
3. 开发者的学习成本

建议按照 MVP -> 验证 -> 扩大的路径推进，避免一次性重写带来的风险。

---

**评分**: 8.5/10
**推荐**: ✅ 建议执行，但需要先完成 MVP 验证
