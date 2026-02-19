# k-for 指令设计 v2（Vue 风格优先，最少插件）

## 先回应你的诉求

你说得对：如果没有 Vue 那种“模板内直接写 item/index”体验，`k-for` 就不够爽。

这版设计的目标是：

1. 保留 Vue 风格写法；
2. 插件数量压到最低（运行时只依赖现有 ktjsx 插件）；
3. 不再暴露 `KTFor` 组件，统一为 `k-for` 指令。

---

## 最终推荐写法（Vue 风格）

### 1) 基础写法

```tsx
<li k-for="user in users">{user.name}</li>
```

### 2) 带 index

```tsx
<li k-for="(user, i) in users">{i + 1}. {user.name}</li>
```

### 3) 带 key（强烈建议）

```tsx
<li k-for="(user, i) in users" k-key="user.id">
  {i + 1}. {user.name}
</li>
```

### 4) 一项渲染多个根节点（用 template）

```tsx
<template k-for="(user, i) in users" k-key="user.id">
  <h4>{i + 1}. {user.name}</h4>
  <p>{user.email}</p>
</template>
```

### 5) 空列表兜底（可选增强）

```tsx
<li k-for="user in users">{user.name}</li>
<li k-for-empty>暂无数据</li>
```

`k-for-empty` 规则：必须紧跟对应的 `k-for` 节点（类似 `k-else` 语义）。

---

## 语法定义

`k-for` 支持以下 3 种形式：

1. `item in source`
2. `(item, index) in source`
3. `(value, key, index) in source`（对象/Map 扩展，v2.1 可上）

说明：

- `source` 是任意 JS 表达式（如 `users`、`group.todos`、`computedList.value`）。
- `k-key` 也是表达式字符串，作用域内可直接访问 `item/index/...`。
- 变量名必须是合法标识符。

---

## 为什么这次不会“插件太多”

只分两层：

1. **必须**：`@ktjs/vite-plugin-ktjsx`（或 babel 插件）负责把 `k-for` 编译成普通函数调用；
2. **可选**：`@ktjs/ts-plugin` 只负责 IDE 诊断优化（压掉 item/index 未定义提示）。

也就是说，运行必须插件只有 1 个；TS 插件不是运行时依赖。

---

## 编译策略（核心）

输入：

```tsx
<li k-for="(user, i) in users" k-key="user.id">
  {i + 1}. {user.name}
</li>
```

输出（示意）：

```tsx
__kt_for({
  list: users,
  key: (user, i) => user.id,
  render: (user, i) => <li>{i + 1}. {user.name}</li>,
});
```

要点：

- 不需要做复杂“变量改写”，直接把原节点包进 `render(item, index)` 回调；
- `k-for` / `k-key` / `k-for-empty` 不落到真实 DOM attribute；
- `__kt_for` 是内部 helper，不对外暴露组件心智。

---

## 运行时行为（__kt_for）

`__kt_for` 返回一个锚点节点（comment），并维护当前渲染块。

建议结构：

- anchor: `<!--kt-for-->`
- blocks: `{ key, nodes[] }[]`
- listRef: reactive/list source

更新策略：

1. 计算新列表；
2. 生成新 key 序列；
3. 复用旧 block（同 key）；
4. 新建缺失 block；
5. 删除多余 block；
6. 按新顺序最小化移动（可用 LIS）。

无 `k-key` 时按 index patch，并在开发模式 warning。

---

## 与现有代码的改造点

1. `packages/babel-plugin-ktjsx`：新增 `k-for` transform；
2. `packages/vite-plugin-ktjsx`：自动复用该 transform；
3. `packages/core/src/jsx/jsx-runtime.ts`：增加 `k-for` 分支处理；
4. `packages/core/src/h/attr.ts`：忽略 `k-for` / `k-key` / `k-for-empty`；
5. `packages/core/src/types/h.d.ts` + `packages/core/src/types/jsx.d.ts`：补指令类型；
6. `packages/ts-plugin`：新增对 `k-for="(item, i) in list"` 的别名提取。

---

## TS 插件最小增强设计

现有 ts-plugin 已能处理 `k-for-item/k-for-index`。

本版改为直接支持 `k-for` 字符串：

- 解析左侧别名（`item`、`index`）；
- 在 JSX 元素作用域内 suppress TS2304；
- 无需改运行时代码。

这样你就能写 Vue 风格，又不被编辑器红线轰炸。

---

## 错误提示规范（建议）

- `k-for parse failed: expected "item in source" or "(item, index) in source"`
- `k-for source expression is empty`
- `k-key must be used with k-for`
- `k-for-empty must be immediately after k-for`
- `k-for duplicate key: ${key}`

---

## 分阶段落地

### Phase 1（先让它可用）

- 支持 `item in list`、`(item, i) in list`
- 支持 `k-key`
- 支持 `<template k-for>`
- 编译 + 运行时打通

### Phase 2（体验补齐）

- ts-plugin 支持 `k-for` 字符串别名
- `k-for-empty`

### Phase 3（进阶）

- `(value, key, index) in object`
- destructuring（如 `({ id, name }, i) in users`）

---

## 结论

最终建议：

- **语法上**：就用 Vue 风格 `k-for="(item, i) in list"` + `k-key="item.id"`；
- **工程上**：运行时只保留一个 transform 插件（现有 ktjsx），TS 插件可选；
- **架构上**：彻底放弃公开 `KTFor` 组件，统一到 `k-for` 指令路径。

这版可以兼顾“写起来像 Vue”与“KT.js 依旧轻量可控”。
