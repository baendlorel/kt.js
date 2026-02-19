# k-for 指令重设计（抛弃 KTFor 组件）

## 先给结论

如果你想尽量不依赖插件，最稳的写法是：

```tsx
<ul>
  <template
    k-for={users}
    k-for-render={(user, i) => <li>{i + 1}. {user.name}</li>}
    k-for-key={(user) => user.id}
  />
</ul>
```

- `k-for` 只负责“数据源”
- `k-for-render` 负责“每项怎么渲染”
- `k-for-key` 负责“复用和移动 DOM”
- 全部是正常 TS 函数参数，不需要 Vue 那种作用域语法插件

---

## 设计目标

1. 舍弃现有 `KTFor` 组件，统一成 `k-for` 指令；
2. 默认不依赖 Babel/Vite 的复杂语法改写；
3. 保留 key diff 能力（复用已有 DOM）；
4. TS 类型友好，编辑器能正确推断 `item/index`；
5. 保持 KT.js 的“手动可控、真实 DOM”风格。

---

## 方案 A（推荐）：纯运行时，0 编译插件

### A1. 属性回调式（MVP 首选）

```tsx
<template
  k-for={listRef}
  k-for-render={(item, index, array) => <Row item={item} index={index} total={array.length} />}
  k-for-key={(item) => item.id}
/>
```

#### 规则

- `k-for`: `T[] | KTReactive<T[]>`
- `k-for-render`: `(item: T, index: number, array: T[]) => KTRawContent`
- `k-for-key`(可选): `(item: T, index: number) => unknown`
- `k-for-empty`(可选): `() => KTRawContent`，空数组时渲染占位
- 建议只挂在 `<template>`（语义明确：宿主不渲染，只做模板）

#### 优点

- 无需作用域注入插件；
- TS 推断最好；
- 运行时实现直接，容易测试；
- 对用户心智很清楚：`for + render`。

#### 缺点

- 比 Vue 模板写法略长。

---

### A2. children 回调式（可作为语法糖）

```tsx
<template k-for={listRef} k-for-key={(item) => item.id}>
  {(item, index) => <Row item={item} index={index} />}
</template>
```

#### 说明

- 与 A1 本质一样，只是把 `k-for-render` 放到 children；
- 依然不需要编译插件；
- 需要在 `jsx-runtime` 里识别“`k-for` + 函数 children”。

---

## 方案 B（可选增强）：轻量 sugar + 可选 TS 插件

写法更像模板变量：

```tsx
<li k-for={users} k-for-item="user" k-for-index="i" k-for-key={(user) => user.id}>
  {i}. {user.name}
</li>
```

#### 代价

- 需要一个 transform 把模板体转换成 render 函数；
- 或至少需要语言服务插件来压制 `user/i` 未定义诊断；
- 运行时也要处理“宿主元素是模板还是真实元素”的语义。

#### 结论

- 可以做，但不适合作为第一版主路径。

---

## 方案 C（不建议）：Vue 字符串表达式

```tsx
<li k-for="(user, i) in users" k-key="user.id">{user.name}</li>
```

#### 问题

- 需要表达式解析器和作用域注入；
- 类型系统最差；
- 调试和报错体验差。

---

## 三种方案对比

| 方案 | 插件依赖 | TS 体验 | 实现复杂度 | 推荐度 |
| --- | --- | --- | --- | --- |
| A1 属性回调 | 无 | 最好 | 低 | 最高 |
| A2 children 回调 | 无 | 好 | 中 | 高 |
| B 模板变量 sugar | 可选 1 个 | 中 | 中高 | 中 |
| C Vue 字符串 | 高 | 差 | 高 | 低 |

---

## 最终建议（落地顺序）

### 第 1 阶段（立即可做）

采用 **A1** 作为官方写法：

```tsx
<template
  k-for={items}
  k-for-render={(item, index) => <div>{index}: {item.name}</div>}
  k-for-key={(item) => item.id}
/>
```

### 第 2 阶段（语法糖）

增加 A2（children 函数）：

```tsx
<template k-for={items}>{(item) => <div>{item.name}</div>}</template>
```

### 第 3 阶段（可选插件生态）

再考虑 B（`k-for-item/k-for-index`）这种模板变量写法，作为非默认增强。

---

## 运行时规范（建议）

1. `jsx-runtime` 入口优先处理 `k-for`（类似现在 `k-if`）；
2. 返回 comment anchor（例如 `<!--kt-for-->`）；
3. 每次渲染得到 blocks，做 keyed diff：
   - 有 `k-for-key` 时按 key 复用与移动；
   - 无 key 时按 index patch（并给出 warning）；
4. key 重复时 warning（开发环境）；
5. 支持数组项渲染为单节点或多节点（多节点建议内部包 fragment 边界）；
6. `k-for` 不应透传到真实 DOM attribute。

---

## 类型定义建议

在 `packages/core/src/types/h.d.ts` 和 `packages/core/src/types/jsx.d.ts` 增加：

- `'k-for'?: T[] | KTReactive<T[]>`
- `'k-for-render'?: (item: T, index: number, array: T[]) => KTRawContent`
- `'k-for-key'?: (item: T, index: number, array: T[]) => unknown`
- `'k-for-empty'?: () => KTRawContent`

---

## 迁移建议（从 KTFor 到 k-for）

旧：

```tsx
<KTFor list={items} key={(item) => item.id} map={(item) => <Row item={item} />} />
```

新：

```tsx
<template
  k-for={items}
  k-for-key={(item) => item.id}
  k-for-render={(item) => <Row item={item} />}
/>
```

这两者语义基本等价，但新方案统一成“指令系统”，后续和 `k-if` 更一致。
