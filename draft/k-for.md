# k-for 编译可行性分析（基于 core 现状）

## 结论

可行，而且现有 `core` 已经具备主要运行时基础。

但按当前代码，**最小可行路径**应是：在插件里把带 `k-for` 的 JSX 节点直接改写成 `<KTFor list=... map=... />`。  
你提到的“把 children 编译为 `()=>children`”也能做，不过在当前 `KTFor` API 下通常不需要单独再包一层函数，直接生成 `map` 函数即可。

---

## core 里已经具备的能力（为什么可行）

1. `KTFor` 已存在并且接口完整：`list` + `key?` + `map(item,index,array)`（`packages/core/src/jsx/for.ts:7`）。
2. `KTFor` 已处理响应式列表重绘与 DOM 锚点管理（`packages/core/src/jsx/for.ts:18`）。
3. `h/content` 已对 `__kt_for_list__` 做了追加处理，说明 `KTFor` 锚点机制已打通（`packages/core/src/h/content.ts:29`）。

所以编译器只要能产出 `KTFor` 兼容的 `map`，运行时就能接上。

---

## 当前缺口（为什么不能直接“原样加 k-for 属性”）

1. `jsx-runtime` 目前只拦截 `k-if` / `k-else`，没有 `k-for` 分支（`packages/core/src/jsx/jsx-runtime.ts:19`）。
2. 属性处理里也没有忽略 `k-for`，不编译掉的话会落成真实 DOM attribute（`packages/core/src/h/attr.ts:60`）。
3. JSX 类型声明里也没有 `k-for` 语义字段（`packages/core/src/types/jsx.d.ts:192`）。

因此，`k-for` 必须依赖插件改写，或者你要补 runtime 分支。

---

## 对“children 编译为 ()=>children”的判断

### 在现有 `KTFor` API 下

- `KTFor` 需要的是 `map`：每次渲染项时返回一个新节点。
- 所以最直接产物是：

```tsx
<KTFor
  list={listExpr}
  map={(item, index, array) => <li>{/* 原 children */}</li>}
/>
```

这本质上已经是“按需创建 children”。额外再包 `() => children` 通常是冗余。

### 你说的 item/index 变量

插件当然可以生成 `map(item,index)` 参数名；问题在于**类型检查体验**：

- 若源码写成 `<li k-for={list}>{item.name}</li>`，`item` 在 TS 原语法里是未定义变量。
- Babel/Vite 插件能在构建时改写，但 `tsc`/IDE 仍可能先报错。

这不是 core 运行时问题，而是语法层与 TS 类型系统的配合问题。

---

## 推荐的最小可行编译形态（MVP）

### 输入（建议）

```tsx
<li k-for={users}>
  {(item, index) => <span>{index}:{item.name}</span>}
</li>
```

### 输出

```tsx
<KTFor
  list={users}
  map={(item, index, array) => (
    <li>
      <span>{index}:{item.name}</span>
    </li>
  )}
/>
```

这个形式能避免“未定义 item/index”的 TS 报错，同时完全复用现有 core。

---

## 如果坚持“运行时 k-for 指令”而不是编译成 KTFor

那就需要改 core：

1. `jsx-runtime` 增加 `if ('k-for' in props)` 分支（类似 `k-if`）。
2. `attr.ts` 忽略 `k-for` 及相关内部字段，避免落到 DOM。
3. `types/jsx.d.ts` / `types/h.d.ts` 补 `k-for` 类型。
4. 设计 `k-for` 与 `k-if/k-else` 同节点时的优先级规则。

这条路也可行，但改动面明显大于“编译到 KTFor 组件”。

---

## 额外注意点

1. 插件若产出 `<KTFor />`，要保证文件里有 `KTFor` 可用绑定（注入 import 或复用已有 import）。
2. 当前插件源码 `src/index.ts` 引用了 `./if-else.js`，但 `src` 目录下缺对应源码文件（只在 `dist` 有），扩展插件前建议先整理这一块。

---

## 总评

基于 `core` 当前实现：

- **“k-for 语法糖 + 插件改写”是可行的**；
- **最稳妥实现是编译到 `KTFor(list,map,key)` 形态**；
- **item/index 的“自由变量写法”在 TS 类型层面有风险**，建议先用“children render function”语法做 MVP。