# k-for 编译方案（Babel/Vite 对齐）

> 日期：2026-02-20

## 0. 现状审查结论

1. `@ktjs/babel-plugin-ktjsx` 当前只做两件事：
   - `k-if / k-else-if / k-else` 链改写
   - SVG/MathML flag 注入
2. `@ktjs/vite-plugin-ktjsx` 只是调用 `transformWithKTjsx`，没有自己的 `k-for` 逻辑。
3. `@ktjs/core` 已有 `KTFor` 运行时（锚点注释节点 + `__kt_for_list__` + key 复用 + 响应式 list）。
4. `babel-plugin-ktjsx/src/index.ts` 依赖 `./if-else.js`，但当前 `src/` 目录缺少对应源文件（`dist/if-else.js` 存在）。

结论：**只要在 Babel 插件补上 `k-for` transform，Vite 会自动获得同样能力；但建议先补齐 `if-else` 源文件，保证源码为唯一事实来源。**

---

## 1. 统一语法与行为基线

### 支持语法

- `k-for="item in list"`
- `k-for="(item, index) in list"`
- 可选支持 `of`：`item of list`（建议与 ts-plugin 配置保持一致）

### 作用域

- `item/index` 仅在该节点（及其 children）内可用。
- `k-key` 表达式与子节点表达式共享同一作用域。

### 指令清理

- 编译产物不应保留：`k-for`、`k-key`（以及遗留 `k-for-item`、`k-for-index`）。

### 错误规则（编译期）

- `k-for` 语法不合法 -> 抛错。
- 只有 `k-key` 没有 `k-for` -> 抛错。
- `k-for` 与 `k-else`/`k-else-if` 在同一链上混用 -> 抛错（避免作用域歧义）。

---

## 2. 方案 A：编译成 `<KTFor />`（最快落地）

### 编译示例

输入：

```tsx
<li k-for="(item, index) in users" k-key="item.id">
  {index + 1}. {item.name}
</li>
```

输出（示意）：

```tsx
<__KTFor
  list={users}
  key={(item, index, array) => item.id}
  map={(item, index, array) => <li>{index + 1}. {item.name}</li>}
/>
```

并自动注入一次 import（示意）：

```ts
import { KTFor as __KTFor } from '@ktjs/core';
```

### 优点

- 复用现有 `KTFor`，实现最快。
- 天然支持响应式 list 和 key 复用。
- 对 Vite 无额外工作（复用 Babel transform）。

### 风险

- 输出里暴露 `KTFor` 心智（虽然可用别名隐藏，但本质仍是组件）。
- 需要处理 import 注入与去重。

---

## 3. 方案 B：编译成内部 helper `__kt_for(...)`（推荐）

### 编译示例

输入：

```tsx
<li k-for="(item, index) in users" k-key="item.id">
  {index + 1}. {item.name}
</li>
```

输出（示意）：

```tsx
__kt_for({
  list: users,
  key: (item, index, array) => item.id,
  render: (item, index, array) => <li>{index + 1}. {item.name}</li>,
})
```

由 Babel 插件自动注入 helper import（示意）：

```ts
import { __kt_for } from '@ktjs/core/jsx-runtime';
```

### 运行时实现建议

- 在 `@ktjs/core/jsx-runtime` 新增 `__kt_for` 导出。
- 首版内部直接委托给 `KTFor`，后续可无缝替换实现，不影响编译产物协议。

### 优点

- 用户只感知 `k-for` 指令，不暴露 `KTFor` 组件心智。
- 编译协议稳定，后续可独立优化 runtime。
- Babel/Vite 共用同一个 transform，行为一致。

### 风险

- 需要新增 runtime helper（比方案 A 多一步）。

---

## 4. 方案 C：编译成 `list.map(...)`（最轻，但语义最弱）

### 编译示例

```tsx
{users.map((item, index, array) => <li>{index + 1}. {item.name}</li>)}
```

### 优点

- 几乎不需要 runtime 改动。
- 编译实现最简单。

### 明显缺点

- 丢失 `KTFor` 的响应式 list 重绘能力。
- `k-key` 无法落实为真实 diff 优化（基本只能忽略或弱处理）。
- 与当前 core 已有能力不一致。

**结论：不建议。**

---

## 5. 推荐结论

**推荐选方案 B（内部 `__kt_for` helper）。**

理由：

1. 体验上最像真正的“指令编译”，不暴露组件心智；
2. 保留现有 `KTFor` 能力（响应式 + key 复用）；
3. 给后续 runtime 优化留出稳定协议层。

---

## 6. 实施拆分（选 A/B 都适用）

### Babel 插件模块拆分建议

- `packages/babel-plugin-ktjsx/src/transforms/k-for/parse.ts`
- `packages/babel-plugin-ktjsx/src/transforms/k-for/transform.ts`
- `packages/babel-plugin-ktjsx/src/transforms/k-for/imports.ts`
- `packages/babel-plugin-ktjsx/src/transforms/k-for/errors.ts`

入口顺序建议：

1. 先处理 `k-for`
2. 再处理 `k-if` 链
3. 最后做 SVG/MathML flag

### Vite 插件

- 不新增逻辑，继续复用 `transformWithKTjsx`。
- 仅补测试，确保与 Babel 产物一致。

### 测试清单

- Babel：基础/双参数/`k-key`/错误用例/无残留指令属性。
- Vite：同样输入得到等价产物。
- Core 集成：列表增删改、重排、空列表、key 冲突告警。

---

## 7. 兼容性决策

- **`k-for-item` / `k-for-index`：不再解析，不再作为正式语法。**
- 若检测到这两个属性：开发模式给出迁移提示（可选）。

---

请直接选：

1. 方案 A（KTFor 组件编译）
2. 方案 B（`__kt_for` helper，推荐）
3. 方案 C（`map` 直出，不推荐）
