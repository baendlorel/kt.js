## 结论总览（更新于 2026-04-04）

### 已完成

1. P0-A 调度器异常毒化修复：已完成
   - `packages/core/src/reactable/scheduler.ts`
   - flush 过程已做错误隔离，且能确保队列清理。

2. 安全模型说明：已补齐
   - `packages/core/README.md`
   - `packages/core/src/h/attr.ts`
   - `k-html` 与危险属性透传已明确为公开 escape hatch。

3. P1-B Fragment 挂载链路：已完成（observer 方案）
   - 不再重写 `Node.prototype.appendChild/insertBefore`
   - 改为 `packages/core/src/jsx/anchor.ts` 内单例 observer 处理 `addedNodes` 自动 mount
   - `Fragment` / `KTFor` 原生 `appendChild(...)` 场景可自动生效
   - `fragment.mount(parent)` 保留为可选手动入口（非必需）

4. P1-C 统一 disposer / 卸载机制：已完成（observer 方案）
   - `packages/core/src/jsx/anchor.ts` 内单例 observer 处理 `removedNodes` 自动 cleanup
   - 已覆盖核心路径：`attr/content/model/if/for/fragment`
   - 现有测试已覆盖分支替换、事件解绑、响应式解绑等场景（`packages/core/tests/cleanup.test.tsx`）

5. P2-G computed 生命周期释放：已完成
   - `packages/core/src/reactable/computed.ts`
   - 新增 `computed.dispose()`，可主动释放依赖订阅。

6. P2-D `KTFor` 重复 key 防护：已完成（warn + 覆盖语义保留）
   - `packages/core/src/jsx/for.ts`
   - `packages/core/tests/for.test.tsx`
   - 现行为：重复 key 会告警，后项覆盖前项（保持 `Map.set` 语义）。

7. P2-E（CSP 方向）sub getter/setter 生成策略：已完成
   - `packages/core/src/reactable/common.ts`
   - 已移除 `new Function(...)` 路径，改为基于 keys 的闭包 getter/setter 生成。
   - `<=5` 层走直链访问，`>5` 层走前 5 层 + for 循环下钻。
   - `packages/core/tests/reactive.test.ts` 已补 >5 层与转义 key 场景。

## 仍未完成

1. P2-E sub getter/setter **缓存上限**：未完成
   - `packages/core/src/reactable/common.ts`
   - 目前仍是无上限 `Map` 缓存（仅已完成 CSP 侧改造）。

2. P2-F 文本 / style 更新路径优化：未完成
   - 文本更新仍倾向节点替换（`packages/core/src/h/content.ts`）
   - style 对象更新仍未清旧键（`packages/core/src/h/attr.ts`）。

---

## 当前边界（请确认）

- mount/cleanup 自动化基于 **`document.body` 子树 observer**。
- 对“用户直接用原生 DOM API”场景更友好（这是本轮取舍重点）。
- 代价是：语义依赖 observer 观察范围；非 body 根/ShadowRoot 需要后续专项策略。

---

## 下一步建议（暂停前版本）

1. P2-E：sub getter/setter 缓存限额（上限策略与淘汰策略）
2. P2-F：文本复用 text node、style 清理旧键
