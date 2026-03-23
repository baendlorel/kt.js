# queued 分析

## 背景

当前 reactive 机制分成两类：

- `ref.value = newValue`：同步修改，同步通知
- `ref.draft.xxx = yyy`：值本体立刻变更，但通知延后到微队列
- `computed(...)`：依赖一变化就同步重算，同步通知

从这个对比里可以看出：

- `ref.draft` 延后的只是通知
- `computed` 如果改成 queued，延后的将不是通知本身，而是派生值的重新计算

这两者不是一个层级的问题。

## queued 想解决什么

`queued` 适合解决这种场景：

- 同一轮事件里，多个 dependency 会被连续修改
- 派生计算比较重
- 中间过程的每一次中间值都不重要
- 最终只关心本轮结束后的最终值

例如：

- 多个筛选条件同时变化后重新算大列表
- 多个布局参数同时变化后重新算布局数据
- 表单多字段联动时拼装一个大对象

这类场景如果继续用同步 `computed`，就会出现重复计算。

## queued 的直观定义

如果叫 `queued`，我建议它的语义不是“完全异步的 computed”，而是：

- dependency 变化时先标记 dirty
- dirty 状态进入微队列等待合并结算
- 如果在微队列 flush 之前有人读取 `value`，则立即同步完成这次计算
- listener 的通知尽量合并到一次

也就是：

- queued 的是 invalidation 和 emit
- 不是把 value 的正确性一起延后

## 为什么读取 value 时要提前计算

这是 queued 能否可用的关键。

因为 `ref.draft` 和 queued 的本质不同：

### `ref.draft`

- 内部值已经立刻变了
- 下一刻只是补通知
- 所以读取 `ref.value` 一直是及时的、安全的

### `queued`

- dependency 已经变了
- 但派生值还没重新算
- 所以在 flush 前，`queued.value` 天然是旧值

如果不在 `get value()` 里检测 dirty 并提前计算，就会出现：

```ts
base.value = 1;
base.value = 2;
console.log(total.value); // 旧值
```

这会让 queued 变成一个很难直觉使用的 primitive。

因此我认为 queued 必须这样定义：

```ts
get value() {
  if (this._dirty) {
    this._flushNow();
  }
  return this._value;
}
```

这不是补丁，而是 queued 想保持“读取正确值”时必须具备的语义。

## 如果都这样了，为什么不把所有 computed 都做成 queued

表面看起来确实像是：

- 依赖变化时先 dirty
- 读取时再同步 flush
- flush 前后加一个微队列

实现代码似乎不大，像是可以直接拿来替换所有 `computed`。

但问题不在代码量，而在整个模型会变掉。

## 为什么不能默认全 queued

### 1. 读路径会从“取值”变成“可能触发计算”

当前普通 `computed` 的直觉是：

- 改依赖时就已经算好了
- 读 `value` 基本只是拿结果

如果全改成 queued，则会变成：

- 改依赖时只是标脏
- 读 `value` 时可能触发一次真实计算
- 读取下游值时，甚至可能顺带把上游一串 dirty computed 全部同步拉起

这意味着“读”不再是便宜且稳定的动作。

这会让性能判断变差很多。

### 2. queued 只在写多读少的场景赚

queued 优化的是：

- 写很多次
- 中间没人读
- 最后只关心一次最终值

但很多 computed 不是这样，而是：

- 依赖一变
- 很快就会被别的逻辑、模板、effect、业务代码读到

那么 queued 实际上会变成：

1. 先标 dirty
2. 很快在读时被同步 flush
3. 微队列到来时再检查一遍是否已经结算

这不是零成本，只是把同步计算的位置从写阶段挪到了读阶段。

### 3. listener 的时序会整体变化

当前普通 `computed` 的 listener 时序是：

1. dependency change
2. computed 同步重算
3. listener 同步收到新值

如果全 queued，则会变成：

1. dependency change
2. computed 标 dirty
3. listener 在微队列里才收到结果

这会让依赖时序的代码行为整体变化。

这类变化最麻烦，因为：

- 代码不会报错
- 类型不会提示
- 但运行顺序会悄悄变掉

这不是一次轻量优化，而是模型变化。

### 4. 链式传播会从 push 模型向 lazy pull 模型偏移

现在的实现更接近简单直接的 push：

- dependency 改变
- 向下同步传播
- 派生值立刻更新

如果全 queued，就会变成：

- dependency 改变
- 先向下传播 dirty
- 真正求值可能在读时才发生

这意味着你需要更严肃地处理：

- dirty 传播
- 读时级联 flush
- 重入
- 重复 emit
- 链式 queued / computed 混用时的顺序

单个 queued 不难，但全部 queued 等于把整个系统往另一套模型上推。

### 5. 调试体验会变差

一旦默认全 queued，很多现象会变成：

- 改了 dependency，但派生值暂时还是旧的
- 直到有人读取，或者微队列 flush，才变成新的
- 某些日志和断点本身就可能触发 flush

这会让排查时出现这种情况：

- 加一行日志，结果变了
- 看一下 value，系统状态变了
- 时序 bug 更像“偶发”

这种体验对默认 primitive 来说太重了。

## ref.draft 为什么可以默认存在，而 queued 不应该默认替代 computed

因为 `ref.draft` 的安全性来源于：

- 值已经立刻改好了
- 延后的只是通知

而 queued 的问题在于：

- dependency 变了
- 派生值还处于欠账状态

所以默认全 queued，其实等于把所有 computed 都改成“可能暂时未结算的脏派生值容器”。

这比 `ref.draft` 激进得多。

## queued 的正确定位

我认为 queued 应该是一个显式优化 primitive，而不是默认 computed 的实现方式。

更合理的分层是：

- `computed()`：同步、直接、默认首选
- `queued()`：显式优化用，面向写多读少、允许微队列合并的场景

这和 KT.js 当前的整体风格更一致：

- 提供工具
- 用户自己决定何时切换到更激进的行为模型

## queued 的建议语义

我建议 queued 的行为定义为：

### 1. dependency change

- 如果当前不是 dirty，记录 `oldValueBeforeQueue`
- 标记 `dirty = true`
- 如果尚未入队，则加入 scheduler

### 2. `get value()`

- 如果 dirty，则立即同步 flush 自己
- 返回最新值

### 3. microtask flush

- 如果对象仍 dirty，则执行一次合并计算
- 如果对象已经因为读取而提前 flush，则直接跳过

### 4. listener

- 尽量只收到一次最终结果
- 如果读时已经完成正式 flush，则后续微队列不应重复 emit 同一结果

### 5. `notify()`

- 仍然建议保持同步
- 不应该进入 queued 流程

## queued 真正优化的边界

queued 适合：

- 重计算代价明显
- 一轮内会连改很多 dependency
- 中间过程值不重要
- 大概率没人会在每一步中间态都立刻读取它

queued 不适合：

- 高频同步读取的派生值
- 强依赖同步 listener 时序的逻辑
- 作为默认 computed 到处替换

## 我的结论

结论可以收敛成三句话：

1. queued 必须在 `get value()` 里检测 dirty 并支持提前同步计算，否则不可用。
2. 但正因为它把读路径也变成了潜在求值入口，所以它不应该替代所有 `computed`。
3. queued 更适合作为一个显式优化 primitive，让用户手动声明哪里愿意用“微队列合并 + 读时兜底”的模型。

## 建议的设计原则

可以把设计原则定得非常简单：

- `computed` 负责默认同步派生
- `queued` 负责显式性能优化
- 默认语义不要为了优化而变成脏值模型

如果按这个原则往下做，实现会更稳定，文档也更容易写清楚。
