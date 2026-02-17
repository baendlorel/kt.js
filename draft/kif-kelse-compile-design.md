# `k-if` / `k-else` 编译控制方案（MVP）

## 背景与问题

当前仓库里 `k-if / k-else / k-else-if` 的链式处理是把后续分支改写成复合条件（例如 `!prev && cur`）。  
这个思路在 `k-if` 传入 `KTRef` 时会有天然问题：

- `k-if={flagRef}` 是响应式（`jsx-runtime` 会识别 `isKT(flagRef)`）
- 但 `k-else` 若编译成 `k-if={!flagRef}`，`!flagRef` 是普通布尔值（对象取反），失去响应式
- 且每个分支各自订阅，无法做到“前一个节点直接控制下一个节点是否刷新”

你提到要排除“`k-else` 编译为 `computed(() => !kif)`”的做法，这个方向是对的。

---

## 目标（MVP）

1. 只做 `k-if + k-else`（暂不实现 `k-else-if`）
2. `k-if` 的条件变化时，由**同一个控制器**决定 if/else 分支切换
3. 不引入 `computed(!kif)`，不做双订阅
4. 尽量轻量：编译期折叠 + 很小的运行时 helper

---

## 推荐方案：编译为“单分支控制器”调用

### 1) 语法范围（先收窄）

只支持这类相邻兄弟节点：

```tsx
<A k-if={cond} />
<B k-else />
```

判定“相邻”时可跳过纯空白 `JSXText`（换行缩进）。

---

### 2) 编译产物（核心）

把 `k-if + k-else` 两个兄弟节点折叠为一个表达式（示意）：

```tsx
{
  __ktIfElse(
    cond,
    () => <A />,
    () => <B />
  )
}
```

重点：`cond` 原样传入，不做 `!cond` 推导。

---

### 3) 运行时 helper 行为（最小实现）

`__ktIfElse(cond, renderIf, renderElse)`：

1. 初次根据 `cond` 选择分支
2. 如果 `cond` 是 `KTRef/KTComputed`，只注册**一个**监听
3. 仅当布尔态变化时切换（truthy -> falsy / falsy -> truthy）
4. 切换时替换当前节点，不触发无意义重建

可选优化（建议做，代码很少）：

- 分支节点懒创建并缓存（`ifNode ??= renderIf()` / `elseNode ??= renderElse()`）
- 避免频繁 toggle 时重复创建节点与重复绑定

---

## 为什么这能做到“直接控制下一个节点刷新与否”

因为它不是“两个独立的 `k-if`”，而是“一个条件控制器 + 两个分支工厂”：

- `cond` 的变化只经过一个监听器
- 刷新判定在同一处完成（可直接判断是否需要切换）
- `else` 分支不再自己推导条件，也不需要 `computed(!kif)`

也就是：`k-if` 对应的条件源，直接决定后一个 `k-else` 分支是否更新。

---

## 编译器改动点（`packages/babel-plugin-ktjsx`）

建议把当前 `transformConditionalChains` 拆成两个阶段：

1. **MVP阶段**：只处理 `k-if + k-else`
2. `k-else-if` 逻辑先保留 TODO（或直接报错提示暂不支持）

实现要点：

- 从 `k-if` 节点出发找“下一个有效兄弟”（跳过空白文本）
- 若命中 `k-else`，剥离两个节点上的条件指令属性
- 用 `JSXExpressionContainer(callExpression(...))` 替换原 `k-if` 节点
- 删除 `k-else` 节点
- 若 `k-else` 无前置 `k-if`，给出编译期 warning/error（建议 error）

---

## 运行时改动点（`packages/core`）

新增一个非常小的 helper（例如放在 `packages/core/src/jsx/if-else.ts`）：

- 入参：`condition`, `ifFactory`, `elseFactory`
- 出参：`JSX.Element`（最终挂载节点）
- 内部复用现有 `isKT` 与节点替换逻辑

然后在 `jsx-runtime` 导出（供编译产物引用）。

---

## 轻量性评估

相对“`k-else => computed(!kif)`”方案，本方案：

- 少一个派生响应式对象
- 少一层条件推导
- 可做到单订阅、单判定点
- 编译产物更符合“分支切换”语义，不是“布尔拼表达式”

---

## 边界与约束（MVP）

1. 只支持 `k-if` 后面紧跟一个 `k-else`
2. 暂不支持 `k-else-if`
3. `k-else` 必须有前置 `k-if`，否则编译报错
4. 多节点分支用 `<>...</>` 包起来

---

## `k-else-if` 后续扩展思路（非本次）

未来可统一升维到：

```ts
__ktIfChain([
  [cond1, () => node1],
  [cond2, () => node2],
  [null,  () => nodeElse],
])
```

这样仍然保持“单控制器、单订阅（或最少订阅）”模型。

---

## 最小测试清单（建议）

1. `k-if + k-else` 编译后不再出现 `k-else` 属性
2. `k-if + k-else` 编译后不生成 `!cond` 形式
3. `cond` 为 `KTRef` 时，切换 true/false 可在 DOM 中正确互斥显示
4. `cond` 值变化但 truthy/falsy 不变时，不触发分支切换
5. `k-else` 无前置 `k-if` 时编译报错

