# KT.js JSX 编写指令（基于 `@ktjs/core@0.40.x`）

## 1. 核心认知（必须遵守）

- KT.js JSX 直接操作真实 DOM（无虚拟 DOM）。
- 组件函数默认执行一次；UI 更新依赖响应式绑定，而不是 React 式整组件重跑。
- 响应式读写契约：
  - 读取：`reactive.value`
  - 整体替换：`ref.value = nextValue` / `subref.value = nextValue`
  - 深层变更：`ref.draft.xxx = ...`、`ref.draft.list.push(...)`
- `draft` 本身不可整体赋值,禁止 `ref.draft = ...`。
- `listen((newValue, oldValue) => ...)` 的 `oldValue` 是旧引用，不是深拷贝快照。
- 事件绑定统一用 `on:事件名`（如 `on:click`），不要用 `onClick`。

---

## 2. 响应式能力

### 2.1 `get(...keys)`：只读子路径

```tsx
const profile = ref({ user: { name: 'Ada' } });
const name = profile.get('user', 'name'); // KTComputed<string>
```

### 2.2 `subref(...keys)`：可写子路径（支持 `k-model`）

```tsx
const form = ref({ user: { name: 'Ada' } });
const nameRef = form.subref('user', 'name'); // KTSubRef<string>
nameRef.value = 'Linus';
```

### 2.3 `is(target)` / `match(pattern)`

```tsx
const salary = ref(12000);
const target = ref(12000);
const same = salary.is(target);

const settings = ref({ theme: 'dark', region: 'cn' });
const matcher = ref({ theme: 'dark' });
const matched = settings.match(matcher);
```

### 2.4 `computed` 依赖

- `computed(() => ..., deps)` 需要显式依赖数组。
- 依赖可传 `KTReactive`（含 `ref` / `computed` / `subref` / `get(...)` 结果）。

### 2.5 `map`

```tsx
const a = ref(true);
const b = a.map((v) => (v ? 'A' : 'B')); // KTComputed<string>
```

### 2.6 `listen` / `unlisten`

```tsx
const count = ref(0);
const handler = (newValue: number, oldValue: number) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`);
};
count.listen(handler);
// Later...
count.unlisten(handler);
```

---

## 3. JSX 绑定规则

- JSX 中优先直接传响应式对象本身：`{count}`、`class={cls}`、`open={openRef}`。
- 普通逻辑里再用 `.value` / `.draft`。
- `class`、`className` 均可；`style` 支持字符串、对象、响应式值。

```tsx
const count = ref(0);
const cls = computed(() => (count.value > 0 ? 'ok' : 'idle'), [count]);

const view = (
  <button class={cls} on:click={() => count.value++}>
    Count: {count}
  </button>
);
```

---

## 4. 指令

### 4.1 `k-if` / `k-else`

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

- `k-else` 必须紧邻前一个同级 `k-if`（中间仅允许空白）。
- 不支持 `k-else-if`。
- 同一元素不能同时写 `k-if` 与 `k-else`。

### 4.2 `k-for` / `k-key`

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

- `k-for` 必须是字符串表达式：
  - `"item in list"`
  - `"(item, index) in list"`
- `k-key` 强烈建议始终提供稳定键；可写字符串表达式或函数。
- 同一元素不能混用 `k-for` 与 `k-if/k-else`。
- `<template k-for>` 可用于返回多个兄弟节点。

### 4.3 `k-model`

```tsx
const form = ref({ user: { name: 'Ada' } });
const nameRef = form.subref('user', 'name');

const input = <input k-model={nameRef} />;
```

规则：

- `k-model` 必须传 `KTRef`（`ref` 或 `subref`）。
- 常用于 `input` / `select` / `textarea`。

### 4.4 `k-html`

```tsx
const html = ref('<strong>trusted html</strong>');
const box = <div k-html={html} />;
```

规则：

- 直接写 `innerHTML`，框架不做净化。
- 仅传可信 HTML；外部输入必须先由业务层消毒。

---

## 5. Fragment 与元素 `ref`

```tsx
import { Fragment, ref } from 'kt.js';

const childrenRef = ref([<span>A</span>, <span>B</span>]);
const frag = <Fragment children={childrenRef} />;

const inputRef = ref<HTMLInputElement>();
const input = <input ref={inputRef} />;
inputRef.value?.focus();
```

规则：

- `ref` 需使用 KT.js 的 `ref/subref`（不可传 computed）。

---

## 6. 响应式方法实例化

最新 API 中，响应式方法都是实例方法，而非 `reactive` 命名空间下的方法：

```tsx
// 旧写法（已弃用）
const isSame = reactive.is(target);
const computed = reactive.get('a', 'b');

// 新写法（推荐）
const isSame = ref.is(target);
const computed = ref.get('a', 'b');
```

---

## 7. 常见坑位（生成代码时自检）

1. 事件写 `on:click`，不是 `onClick`。
2. `computed` 要写依赖数组。
3. 深层修改对象/数组/Map/Set 优先走 `draft`。
4. vite 未启用 `@ktjs/vite-plugin-ktjsx` 时，`k-if` / `k-for` 等指令不会按预期编译。
5. 使用 `listen` 来添加变化监听器。

---

## 8. AI 生成最小模板

```tsx
import { computed, ref } from 'kt.js';

function App() {
  const count = ref(0);
  const show = ref(true);
  const profile = ref({ user: { name: 'Ada' } });
  const nameRef = profile.subref('user', 'name');

  const label = computed(() => (show.value ? 'Visible' : 'Hidden'), [show]);

  return (
    <main>
      <h1>KT.js JSX</h1>
      <button on:click={() => count.value++}>Count: {count}</button>
      <button on:click={() => (show.value = !show.value)}>Toggle</button>
      <p>{label}</p>

      <p k-if={show}>Hello {nameRef}</p>
      <p k-else>Hidden</p>

      <input k-model={nameRef} />
    </main>
  );
}

document.getElementById('app')!.appendChild(<App />);
```

