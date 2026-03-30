# @ktjs/core 漏洞审计最终版（vul-final）

> 生成时间：2026-03-30  
> 输入来源：`draft/vulnerability-codex.md`、`draft/vulnerability-copilot.md`、`draft/vulnerability-cc.md`  
> 复核方式：对 `packages/core/src/**` 关键实现做了二次代码核对

---

## 1. 三份报告异同

### 1.1 共识项（高一致）

三份报告都指向了同一类核心问题：

1. **生命周期清理缺失导致监听/订阅泄漏**（`addOnChange`、`addEventListener` 未统一解绑）
2. **Fragment 挂载策略成本过高**（全局影响面大，未挂载场景有长期开销）
3. **存在 XSS 风险入口，但属于框架公开语义（escape hatch）**（`k-html`、危险属性透传）

### 1.2 差异项（有分歧）

1. **调度器 flush 被异常“毒化”**：`codex/cc` 明确提出，`copilot` 漏报；代码复核后确认成立（高优先级）。
2. **`KTFor` 重复 key 导致复用异常**：`codex/cc` 提出，`copilot` 未覆盖；代码复核后确认成立（中优先级）。
3. **子路径 getter/setter 缓存无上限 + `new Function` 兼容性**：`codex/cc` 提出，`copilot`只提到内存隐患；复核后确认成立（中优先级）。
4. **文本更新整节点替换 / style 非差量同步 / computed 无 dispose**：`copilot` 提出，`codex/cc`未展开；复核后确认成立（中优先级，偏性能与长期内存治理）。
5. `cc` 额外的“类型 `any`、事件委托、循环依赖泛化、错误传播策略”等，更偏**代码质量与架构优化**，不作为本轮漏洞主清单。

---

## 2. 最终问题清单（按优先级）

## P0（应立即修复）

- [x] P0-A 调度器异常会中断后续刷新并滞留引用（已完成）

### A. 调度器异常会中断后续刷新并滞留引用

- 位置：`packages/core/src/reactable/scheduler.ts`
- 现象：flush 过程中任一 handler 抛错会提前退出，`reactiveToOldValue.clear()` 不执行。
- 影响：
  - 队列残留引用，形成内存滞留；
  - 后续同 ref 可能不再进入调度，出现“更新失效/卡死”。

## P1（高优先级，尽快）

- [ ] P1-B Fragment 全局 patch + 全局 MutationObserver 设计
- [ ] P1-C 订阅/事件监听缺少统一卸载机制

### B. Fragment 全局 patch + 全局 MutationObserver 设计

- 位置：`packages/core/src/jsx/fragment.ts`
- 现象：
  - 重写 `Node.prototype.appendChild/insertBefore`；
  - 每个 Fragment 可能监听 `document.body` 整棵子树。
- 影响：全局性能开销、兼容冲突风险、未挂载实例长期占用 observer。

### C. 订阅/事件监听缺少统一卸载机制

- 位置（代表）：`h/attr.ts`、`h/content.ts`、`h/model.ts`、`jsx/if.ts`、`jsx/for.ts`、`jsx/fragment.ts`
- 现象：节点替换/移除后，监听器和订阅仍被 reactive 持有。
- 影响：长时运行页面内存持续增长，且旧节点仍被无效回调触发。

## P2（中优先级）

### D. `KTFor` 重复 key 行为不确定

- 位置：`packages/core/src/jsx/for.ts`
- 现象：`Map` 覆盖重复 key，可能导致节点错位/复用异常。
- 影响：列表渲染结果不稳定，排查困难。

### E. 子路径 getter/setter 缓存无上限，且依赖 `new Function`

- 位置：`packages/core/src/reactable/common.ts`
- 现象：`_getters/_setters` 常驻 `Map` 无淘汰策略。
- 影响：高动态路径场景下内存单调增长；严格 CSP 场景兼容性差。

### F. 文本与样式更新路径存在额外开销/残留

- 文本：`packages/core/src/h/content.ts`（响应式文本更新倾向整节点替换）
- 样式：`packages/core/src/h/attr.ts`（style 对象更新未清理旧键）
- 影响：GC/DOM 操作开销升高，样式可能残留旧值。

### G. `computed` 生命周期未提供释放通道

- 位置：`packages/core/src/reactable/computed.ts`
- 现象：构造时订阅依赖，但无 `dispose/stop`。
- 影响：临时 computed 频繁创建时可能累积无效订阅。

## 安全模型说明（非隐藏漏洞）

- 位置：`packages/core/src/h/attr.ts` + 类型/README 文档
- 现状：`k-html` 与危险属性透传是公开语义，不做内建净化。
- 结论：属于**高风险入口**而非“未声明后门”；业务侧必须保证输入可信或先净化。

---

## 3. 最终修复顺序（建议）

1. **先修 P0：调度器容错**（`try/finally` + 单 handler 隔离 + 回归测试）
2. **再修 P1：统一 disposer**（覆盖 attr/content/model/if/for/fragment + computed 生命周期）
3. **重构 Fragment 挂载链路**（移除全局原型 patch 与 body 级 observer）
4. **修 `KTFor` 重复 key 防护**（DEV 报错/警告 + 测试）
5. **限制 sub getter/setter 缓存并补 CSP 回退**
6. **收尾优化文本/样式更新路径**
7. **安全护栏**：DEV 风险警告 + 文档前置安全边界

---

## 4. 本最终版取舍说明

- **保留并上提**：`codex/cc` 的调度器漏洞（真实且影响最大）。
- **补充纳入**：`copilot` 的文本/style/computed 三项（复核后成立，定位为中优先级治理）。
- **降级处理**：`cc` 的部分泛化质量项（`any`、事件委托等）不纳入漏洞主线。
