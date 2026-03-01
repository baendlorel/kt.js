# KT.js JSX 编写指令

本文用于指导 AI 生成 **KT.js 前端代码**（仅讲 JSX 写法，不讲 `h(...)`）。

## 0. 先决条件（必须）

1. TypeScript JSX 配置：

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "kt.js",
    "plugins": [{ "name": "@ktjs/ts-plugin" }]
  }
}
```

2. 构建插件（否则 `k-if`/`k-for` 等指令不会按预期编译）：

```ts
import { defineConfig } from 'vite';
import ktjsx from '@ktjs/vite-plugin-ktjsx';

export default defineConfig({
  plugins: [ktjsx()],
});
```

## 1. 核心认知（生成代码时要遵守）

- KT.js JSX 直接产出真实 DOM 节点，不是虚拟 DOM。
- 组件函数默认执行一次，不会像 React 一样因 state 自动重跑。
- 响应式更新依赖 `ref/computed` 本身：在 JSX 中优先写 `{someRef}`，而不是 `{someRef.value}`。
- 事件名使用 `on:事件名`，例如 `on:click`，不是 `onClick`。

## 2. JSX 基础语法

### 2.1 元素与组件

```tsx
import { ref } from 'kt.js';

function Counter() {
  const count = ref(0);
  return <button on:click={() => count.value++}>Count: {count}</button>;
}
```

### 2.2 属性绑定

- `class` 和 `className` 都可用。
- `style` 支持字符串或对象，也支持传入响应式值。
- 普通属性可直接传响应式对象（`ref/computed`）。

```tsx
const active = ref(true);
const cls = active.toComputed((v) => (v ? 'btn btn-on' : 'btn btn-off'));
const styleRef = ref({ color: 'tomato', fontWeight: 'bold' as const });

const el = (
  <div class={cls} style={styleRef} data-role="status">
    Hello
  </div>
);
```

### 2.3 事件绑定

```tsx
const output = ref('idle');

const el = (
  <button
    on:click={() => (output.value = 'clicked')}
    on:mouseenter={() => (output.value = 'hover')}
    on:mouseleave={() => (output.value = 'idle')}
  >
    Trigger
  </button>
);
```

## 3. JSX 指令语法（KT.js 重点）

### 3.1 `k-if` / `k-else`

```tsx
const show = ref(true);

const view = (
  <>
    <div k-if={show}>A</div>
    <div k-else>B</div>
  </>
);
```

规则：

- `k-else` 必须与前一个 `k-if` 元素相邻（中间只能有空白）。
- `k-else-if` 当前不支持（会告警且不转换）。
- 不要在同一元素同时写 `k-if` 和 `k-else`。

### 3.2 `k-for` / `k-key`

```tsx
const users = ref([
  { id: 1, name: 'Ada' },
  { id: 2, name: 'Linus' },
]);

const list = (
  <li k-for="(user, index) in users" k-key="user.id">
    {index + 1}. {user.name}
  </li>
);
```

规则：

- `k-for` 必须是字符串表达式：`"item in list"`、`"(item, index) in list"`（`of` 也支持）。
- `k-key` 推荐始终提供，避免列表重排问题。
- 不要在同一元素混用 `k-for` 与 `k-if/k-else`。

`template` 形式（一个循环返回多个兄弟节点）：

```tsx
<template k-for="(item, i) in users" k-key="item.id">
  <li>{item.name}</li>
  <small>#{i}</small>
</template>
```

### 3.3 `k-model`

```tsx
const text = ref('');

const input = <input k-model={text} placeholder="type here" />;
```

规则：

- `k-model` 值必须是 `ref(...)`。
- 常用于 `input/select/textarea`。

### 3.4 `k-html`

```tsx
const html = ref('<strong>trusted html</strong>');
const box = <div k-html={html} />;
```

规则：

- 直接写入 `innerHTML`，仅用于可信内容。

## 4. Fragment、children、ref

### 4.1 Fragment

```tsx
const frag = (
  <>
    <h3>Title</h3>
    <p>desc</p>
  </>
);
```

也可显式使用：

```tsx
import { Fragment } from 'kt.js';

const childrenRef = ref([<span>A</span>, <span>B</span>]);
const frag = <Fragment children={childrenRef} />;
```

### 4.2 `children` 透传

```tsx
function Card(props: { title: string; children?: any }) {
  return (
    <section class="card">
      <h4>{props.title}</h4>
      <div>{props.children}</div>
    </section>
  );
}
```

### 4.3 元素 `ref`

```tsx
const inputRef = ref<HTMLInputElement>();
const view = <input ref={inputRef} />;
```

规则：

- `ref` 必须是 KT.js 的 `ref` 对象。

## 5. SVG / MathML JSX

可直接写：

```tsx
const icon = (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="7" />
  </svg>
);
```

但前提是启用 `@ktjs/vite-plugin-ktjsx`（会自动处理命名空间运行时）。

## 6. 与 React/Vue JSX 的关键差异（AI 易踩坑）

1. 事件写法是 `on:click`，不是 `onClick`。
2. 响应式值优先传 `ref/computed` 本身，不是每次都写 `.value`。
3. 条件/循环建议用 `k-if`/`k-else`、`k-for` 指令语法。
4. `k-else-if` 目前不要用。
5. 没有 ktjsx 转换插件时，指令基本不会生效（尤其 `k-if`、`k-for`、SVG/MathML）。

## 7. AI 生成 KT.js JSX 的最小模板

```tsx
import { ref } from 'kt.js';

function App() {
  const count = ref(0);
  const visible = ref(true);

  return (
    <main>
      <h1>KT.js JSX</h1>
      <button on:click={() => count.value++}>Count: {count}</button>
      <p k-if={visible}>Visible</p>
      <p k-else>Hidden</p>
    </main>
  );
}

document.getElementById('app')!.appendChild(<App />);
```
