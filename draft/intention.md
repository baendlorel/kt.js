# KT.js 设计理念与最佳实践指南

## 前言

阅读了 `packages/core/src` 的核心代码后，我整理了 kt.js 的设计理念和推荐的使用范式。kt.js 与其他现代前端框架有本质区别：**它不隐藏复杂性，而是让开发者显式地控制每一个响应式行为和 DOM 操作**。

---

## 一、核心设计理念

### 1.1 显式响应式 (Explicit Reactivity)

kt.js 的响应式系统是**显式**的，不是自动追踪的。

```ts
// ❌ 不是这样（Vue 风格的自动响应）
const state = { count: 0 }
state.count++ // 自动触发更新

// ✅ 而是这样（kt.js 的显式响应）
const count = ref(0)
count.value = 1        // 显式赋值触发更新
count.value.push(1)     // ❌ 这不会触发更新！
count.notify()          // 必须显式通知
```

**关键理解**：
- `ref.value = newValue` 会立即触发所有监听器
- `ref.value` 内部的变异（如 `push`, `splice`）**不会自动触发**，需要手动调用 `notify()`
- `draft` API 提供了自动批处理机制

### 1.2 响应式层级体系

kt.js 有清晰的响应式类型层级：

```
KTReactiveLike (抽象基类)
├── KTReactive (可变响应式)
│   ├── KTRef (响应式引用，可读写)
│   │   └── KTSubRef (轻量级子引用)
│   └── KTComputed (计算值，只读)
│       └── KTSubComputed (轻量级子计算值)
└── KTSubReactive (子响应式基类)
```

**选择原则**：
- 需要修改状态 → 用 `ref()`
- 派生状态 → 用 `computed()`
- 只需访问嵌套属性 → 用 `get()` (KTSubComputed)
- 需要修改嵌套属性 → 用 `subref()` (KTSubRef)

### 1.3 直接 DOM 操作，无虚拟 DOM

kt.js **不使用虚拟 DOM**。JSX 直接创建真实 DOM 元素，响应式变化直接操作 DOM。

```ts
// packages/core/src/h/index.ts
export const h = <T extends HTMLTag>(
  tag: T,
  attr?: KTRawAttr,
  content?: KTRawContent,
): HTML<T> => {
  const element = document.createElement(tag) as HTML<T>;
  // ...直接操作 DOM
  return element;
};
```

这意味着：
- 没有 diff 算法带来的开销
- DOM 操作是显式的、可预测的
- 需要开发者更小心地管理更新

---

## 二、避免副作用乱飞的关键原则

### 2.1 理解 `addOnChange` 的责任

每个响应式对象维护一个 `_changeHandlers` Map：

```ts
// packages/core/src/reactable/reactive.ts
protected readonly _changeHandlers = new Map<any, ChangeHandler<any>>();
```

**规则 1：永远移除你添加的监听器**

```ts
// ❌ 错误示例：监听器永不移除
const count = ref(0)
count.addOnChange(() => console.log('changed'))

// ✅ 正确示例：保存 key 并在适当时机移除
const count = ref(0)
const handler = () => console.log('changed')
const key = count.addOnChange(handler)
// ... 在不需要时
count.removeOnChange(key)
```

**规则 2：利用框架的自动清理机制**

kt.js 有一个 `$addNodeCleanup` 机制：

```ts
// packages/core/src/jsx/anchor.ts
export const $addNodeCleanup = (node: Node, cleanup: NodeCleanup) => {
  $ensureAnchorObserver();
  const cleanups = nodeToCleanups.get(node);
  if (cleanups) {
    cleanups.push(cleanup);
  } else {
    nodeToCleanups.set(node, [cleanup]);
  }
  return cleanup;
};
```

当 DOM 节点被移除时，所有注册的清理函数会自动执行。框架内部使用这个机制：

```ts
// packages/core/src/h/attr.ts
if (isKT(classValue)) {
  element.setAttribute('class', classValue.value);
  addReactiveCleanup(element, classValue, (v) => element.setAttribute('class', v));
}
```

### 2.2 理解 Scheduler 的批处理机制

`ref.draft` 提供了自动批处理：

```ts
// packages/core/src/reactable/scheduler.ts
export const $markMutation = (reactive: KTRef<any>) => {
  if (!reactiveToOldValue.has(reactive)) {
    reactiveToOldValue.set(reactive, reactive._value);
    if (scheduled) return;
    scheduled = true;
    Promise.resolve().then(() => {
      // ... 在微任务中批量触发所有监听器
    });
  }
};
```

**规则 3：使用 `draft` 进行多次变异**

```ts
// ❌ 每次 notify 都会立即触发所有监听器
const list = ref([1, 2, 3])
list.value.push(4)
list.notify()  // 触发更新
list.value.push(5)
list.notify()  // 又触发一次更新

// ✅ 使用 draft 自动批处理
const list = ref([1, 2, 3])
list.draft.push(4)  // 不立即触发
list.draft.push(5)  // 不立即触发
// 微任务结束时统一触发一次更新
```

### 2.3 Computed 必须是无副作用的

```ts
// packages/core/src/reactable/computed.ts
/**
 * @param calculator synchronous function that calculates the value of the computed. 
 * It should not have side effects.
 */
export const computed = <T>(
  calculator: () => T, 
  dependencies: Array<KTReactiveLike<any>>
): KTComputed<T>
```

**规则 4：Computed 计算函数必须是纯函数**

```ts
// ❌ 错误：有副作用
const count = ref(0)
const doubled = computed(() => {
  console.log('computing...')  // 副作用：日志
  fetch('/api')                // 副作用：网络请求
  return count.value * 2
}, [count])

// ✅ 正确：纯计算
const doubled = computed(() => count.value * 2, [count])

// ✅ 副作用应该用 effect
effect(() => {
  console.log('count changed to:', count.value)
}, [count])
```

---

## 三、推荐的使用范式

### 3.1 组件状态管理模式

```ts
// ✅ 推荐范式：集中的响应式状态
function createComponentState() {
  const count = ref(0)
  const name = ref('')
  const items = ref<Item[]>([])
  
  // 派生状态使用 computed
  const totalCount = computed(
    () => items.value.reduce((sum, item) => sum + item.count, 0),
    [items]
  )
  
  // 操作方法
  const increment = () => count.value++
  const addItem = (item: Item) => items.draft.push(item)
  
  return {
    // 状态（只读暴露 computed）
    totalCount,
    // 状态（可读写暴露 ref）
    count: readonlyRef(count),
    name,
    items,
    // 方法
    increment,
    addItem,
  }
}
```

### 3.2 副作用管理范式

```ts
// ✅ 使用 effect 管理副作用
const count = ref(0)

// effect 返回 stop 函数
const stop = effect(
  () => {
    document.title = `Count: ${count.value}`
  },
  [count],
  {
    onCleanup: () => {
      // 清理副作用
      document.title = 'App'
    }
  }
)

// 在组件销毁时调用
// stop()
```

### 3.3 嵌套属性访问范式

```ts
const state = ref({
  user: {
    profile: {
      name: 'kt',
      level: 1
    }
  },
  settings: {
    theme: 'dark'
  }
})

// ✅ 只读访问：使用 get()
const name = state.get('user', 'profile', 'name')  // KTSubComputed<string>
console.log(name.value)  // 'kt'

// ✅ 可写访问：使用 subref()
const level = state.subref('user', 'profile', 'level')  // KTSubRef<number>
level.value = 2  // 会更新 state.value.user.profile.level

// ✅ 响应式判断
const isDarkTheme = state.get('settings', 'theme').is('dark')
```

### 3.4 条件渲染和列表渲染范式

```tsx
// ✅ 使用 KTConditional 进行条件渲染
<KTConditional
  condition={isLoggedIn}
  tagIf="div"
  propsIf={{ class: 'welcome' }}
  tagElse="div"
  propsElse={{ class: 'login-prompt' }}
>
  Welcome back!
</KTConditional>

// ✅ 使用 KTFor 进行列表渲染
<KTFor
  list={items}
  key={(item) => item.id}
  map={(item) => (
    <div class="item">
      <span>{item.name}</span>
      <button onClick:={() => removeItem(item.id)}>Remove</button>
    </div>
  )}
/>
```

---

## 四、与其他框架的对比

### 4.1 对比 Vue

| 特性 | Vue 3 | kt.js |
|------|-------|-------|
| 响应式 | 自动追踪（Proxy） | 显式声明 |
| 副作用 | watchEffect 自动收集 | 需显式声明依赖 |
| 渲染 | 虚拟 DOM | 直接 DOM 操作 |
| 状态更新 | 自动批量 | 需手动使用 draft |

**理解差异**：Vue 假设你想要便利，kt.js 假设你想要控制。

### 4.2 对比 React

| 特性 | React | kt.js |
|------|-------|-------|
| 状态 | useState hook | ref |
| 派生状态 | useMemo | computed |
| 副作用 | useEffect | effect |
| 渲染 | 虚拟 DOM + diff | 直接 DOM 操作 |

**理解差异**：React 通过重新渲染整个组件树来更新，kt.js 只更新绑定的具体 DOM 节点。

---

## 五、常见陷阱和解决方案

### 陷阱 1：忘记 notify()

```ts
// ❌ 问题
const list = ref([1, 2, 3])
list.value.push(4)  // 不会触发任何更新

// ✅ 解决方案 1：使用 notify
list.value.push(4)
list.notify()

// ✅ 解决方案 2：使用 draft（推荐）
list.draft.push(4)  // 自动批处理
```

### 陷阱 2：循环依赖

```ts
// ❌ 问题：循环依赖导致无限更新
const a = ref(1)
const b = computed(() => a.value + 1, [a])
a.addOnChange(() => { a.value = b.value }, 'circular')

// ✅ 原则：避免循环依赖
// 重新设计状态结构，使用 source of truth
```

### 陷阱 3：在 Computed 中产生副作用

```ts
// ❌ 问题
const count = ref(0)
const doubled = computed(() => {
  fetch(`/api/log?value=${count.value}`)  // 副作用！
  return count.value * 2
}, [count])

// ✅ 解决方案：用 effect
const doubled = computed(() => count.value * 2, [count])
effect(() => {
  fetch(`/api/log?value=${doubled.value}`)
}, [doubled])
```

### 陷阱 4：内存泄漏 - 未移除监听器

```ts
// ❌ 问题
function createComponent() {
  const count = ref(0)
  document.addEventListener('click', () => {
    count.value++
  })
  // count 的监听器永不移除
}

// ✅ 解决方案：利用 $addNodeCleanup
function createComponent() {
  const count = ref(0)
  const el = h('div', {}, 'Click me')
  
  const handler = () => count.value++
  document.addEventListener('click', handler)
  
  // 自动在元素移除时清理
  $addNodeCleanup(el, () => {
    document.removeEventListener('click', handler)
  })
  
  return el
}
```

---

## 六、编写严谨高效的 kt.js 代码的建议

### 6.1 状态设计原则

1. **单一数据源**：每个状态只在一个 ref 中定义
2. **派生而非复制**：使用 computed 而不是手动同步状态
3. **扁平化状态**：避免过深的嵌套，使用 subref/get 访问

### 6.2 副作用管理原则

1. **明确依赖**：effect 必须显式声明所有依赖
2. **及时清理**：使用 onCleanup 或 $addNodeCleanup
3. **避免嵌套副作用**：副作用中尽量避免创建新的副作用

### 6.3 性能优化原则

1. **使用 draft 批处理**：多次变异操作使用 draft
2. **合理使用 computed**：昂贵的计算使用 computed 缓存
3. **避免不必要的更新**：使用 subref 只更新需要变化的部分

### 6.4 类型安全

kt.js 完整的类型推导是其优势：

```ts
const state = ref({
  user: {
    name: 'kt' as string,
    age: 25
  }
})

// 完整的类型推导
const name = state.get('user', 'name')  // KTSubComputed<string>
const age = state.subref('user', 'age') // KTSubRef<number>
```

---

## 七、总结

kt.js 的核心理念是**显式优于隐式，控制优于便利**。

- ✅ **优点**：
  - 完全可控的更新时机
  - 无虚拟 DOM 的性能开销
  - 清晰的依赖关系
  - 强大的类型推导

- ⚠️ **需要注意**：
  - 必须显式管理响应式更新
  - 需要手动清理监听器（或使用框架提供的清理机制）
  - 需要理解 draft 和 notify 的区别

**关键要点**：
1. 理解响应式层级，选择合适的类型
2. 利用 $addNodeCleanup 自动管理资源
3. 使用 draft 进行批处理更新
4. 保持 computed 纯净，副作用用 effect
5. 避免循环依赖，设计清晰的状态流

遵循这些原则，kt.js 可以帮助你写出严谨、高效、可维护的前端代码。
