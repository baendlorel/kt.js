## 结论总览

### 已完成

1. P0-A 调度器异常毒化修复：已完成
   - packages/core/src/reactable/scheduler.ts:20-30
   - 现在 flush 时对每个 reactive 的 handler 执行有 try/catch，并且最后会 reactiveToOldValue.clear()。
   - 对应历史提交：4c91d88（2026-03-30）
2. 安全模型说明：文档/注释已补上
   - packages/core/README.md:52-60
   - packages/core/src/h/attr.ts:48-57,87-90
   - k-html 和危险属性透传已经明确标成公开 escape hatch，不再是“未声明行为”。

3. P1-B Fragment 挂载链路重构：已完成
   - 不再重写 Node.prototype.appendChild/insertBefore
   - 已删除 document.body 级别的 MutationObserver
   - 框架内部插入/替换路径继续显式调用 $mountFragmentAnchors(...)
   - 对外保留 FragmentAnchor.mount(parent) 手动挂载语义，用于原生 DOM 直接挂载场景
   - 证据：
     - packages/core/src/jsx/fragment.ts
     - packages/core/src/jsx/anchor-mount.ts
     - packages/core/src/h/content.ts
     - packages/core/src/jsx/for.ts
     - packages/core/src/jsx/if.ts
     - packages/core/src/jsx/async.ts

## 仍未完成

1. P1-C 统一 disposer / 卸载机制：未完成
   - 目前 addOnChange / addEventListener 仍是“注册即常驻”
   - 典型位置：
     - h/attr.ts:28,41,53,94
     - h/content.ts:18
     - h/model.ts:16-21,28-29
     - jsx/if.ts:22,32
     - jsx/for.ts:126
     - jsx/fragment.ts:167
     - reactable/computed.ts:23-25
2. P2-D KTFor 重复 key 防护：未完成
   - packages/core/src/jsx/for.ts:74-79,114-117
   - 还是直接 Map.set，重复 key 会覆盖，没有 DEV 报错/警告。
3. P2-E sub getter/setter 缓存上限 + CSP 回退：未完成
   - packages/core/src/reactable/common.ts:77-98
   - 还是无上限 Map + new Function(...)
4. P2-F 文本 / style 更新路径优化：未完成
   - 文本还是整节点替换：packages/core/src/h/content.ts:18-22
   - style 还是只覆写新键、不清旧键：packages/core/src/h/attr.ts:18-20
5. P2-G computed dispose/stop：未完成
   - packages/core/src/reactable/computed.ts:19-25
   - 订阅依赖后没有释放通道

———

## 我建议的下一步

### 第一优先：先做 P1-C 统一 disposer

原因：这是最大的阻塞项，而且能顺手解决一半后续问题。

建议拆成 3 步：

1. 先做节点级 cleanup 注册/触发
   - 覆盖 attr/content/model/if/for/fragment
2. 让节点 replace/remove 时自动清理 reactive 订阅和 DOM 事件
3. 顺手给 computed 加 dispose/stop
   - 这样 P1-C + P2-G 可以一起收掉

### 第二优先：做低风险补丁项

按顺序建议：

1. KTFor 重复 key DEV 报错/警告
2. sub getter/setter 缓存限额 + 非 new Function 回退
3. 文本更新改为复用 text node、style 做旧键清理

———

## 一个更实际的执行顺序

如果你想按“性价比”推进，我建议：

1. P1-C + P2-G
2. P2-D 重复 key
3. P2-E CSP/缓存
4. P2-F 文本/style

补充：

- Fragment 的新边界是：框架内部路径自动 mount；原生 DOM 直挂 Fragment 根节点时，调用 `fragment.mount(parent)`。
- 这更符合 kt.js 的“轻量、手动、不过度兜底”风格。
