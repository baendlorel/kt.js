# TSConfig Plugin Design - JSX Element Type Inference

## 目标

当前 JSX 表达式在 TS 里推断为 `JSX.Element`，但实际返回的是 DOM 元素或组件返回值。目标是通过 tsconfig plugin 改写/增强类型推断，使：

- `const a = <div></div>` 推断为 `HTMLDivElement`
- `const a = <input value="x" />` 推断为 `HTMLInputElement`
- `const a = <MyComponent />` 推断为 `MyComponent` 的返回类型

## 可行性判断

TypeScript 提供 Language Service Plugin 能对类型信息进行“视图层”增强，但不能改写编译器内核的 JSX 推断逻辑。可行的路线是：

- 通过 Language Service Plugin 拦截并重写 **QuickInfo / Hover / Completion / Diagnostics** 中的类型展示与推断提示
- 对于编辑器内推断（如 `const a = ...` 的类型显示），可以做“类型显示层”的替换，但**无法改变真实类型系统**

因此可行目标是：

- 在编辑器提示中把 `JSX.Element` 显示为更具体的 DOM 类型
- 在类型检查上仍然是 `JSX.Element`，除非同时引入类型层面的补强

若要求“真正的类型变更”，需要配合 **类型层面技巧**（`JSX.IntrinsicElements` 返回真实元素类型，或 `JSX.Element` 被泛型化）以及 **代码生成/宏**，但 TypeScript 目前不支持基于 JSX tag 动态返回不同 `JSX.Element` 类型。

本方案将提供两条路径：

1. **显示层插件（低风险、可交付）**：通过 Language Service Plugin 修改显示类型
2. **类型层补强（中等复杂度）**：调整 JSX 类型声明 + 约定式类型工具

## 方案 A：Language Service Plugin（显示层增强）

### 设计思路

使用 TypeScript Language Service Plugin：

- 拦截 `getQuickInfoAtPosition` / `getTypeDefinitionAtPosition` / `getCompletionsAtPosition` 等
- 在 JSX 表达式节点处，解析 tag name
- 对 intrinsic tag：映射到 `HTMLElementTagNameMap[tag]`
- 对组件：获取其返回类型（通过 `getReturnTypeOfSignature`）
- 将 `JSX.Element` 的展示文本替换为推断结果

### 行为效果

- VS Code 悬浮提示、类型提示显示为 `HTMLDivElement` / `HTMLInputElement` / `ReturnType<typeof MyComponent>`
- 实际类型系统仍然是 `JSX.Element`

### 核心流程

1. 找到 JSX 节点
   - 识别 `JsxSelfClosingElement` / `JsxElement`
2. 获取 tag
   - intrinsic: `div`, `input`
   - component: `MyComponent`
3. 计算类型：
   - intrinsic: `type = HTMLElementTagNameMap[tag]`
   - component: `type = returnType(MyComponent)`
4. 替换展示文本

### 插件结构

- `packages/ts-plugin-jsx-dom/`
  - `src/index.ts` - plugin entry
  - `src/resolve.ts` - 类型推断逻辑
  - `package.json` - `types` + `main`

### tsconfig 配置示例

```json
{
  "compilerOptions": {
    "plugins": [{ "name": "ts-plugin-jsx-dom" }]
  }
}
```

### 限制

- 不改变真实类型
- 只影响编辑器提示层
- 对语义分析和错误提示的修复有限

## 方案 B：类型层补强（真实类型）

### 设计思路

通过 JSX 类型声明提供更准确的返回类型。

TS JSX 规则：

- 对 intrinsic elements：`JSX.IntrinsicElements` 决定属性类型
- 对组件：函数组件的返回类型就是 JSX.Element（默认）

可用技巧：

1. 让 `JSX.Element` 泛型化为 DOM 结果
2. 让 JSX factory 的返回类型对 tag 具备条件推断

### 可行方向

#### 1. 自定义 JSX namespace

在 `global.d.ts` 中：

```ts
declare namespace JSX {
  type Element = HTMLElement; // 基础 fallback
  interface IntrinsicElements {
    div: HTMLAttributes<HTMLDivElement>;
    input: InputAttributes;
    // ...
  }
}
```

但 TS 不支持 `IntrinsicElements` 直接决定 **返回值类型**。返回类型依然是 `JSX.Element`。

#### 2. JSX factory hack

如果 `jsxImportSource` 指向自定义 runtime，可以让 `h()` 具备 overload：

```ts
declare function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: any,
  ...children: any[]
): HTMLElementTagNameMap[K];

declare function h<P, R>(comp: (props: P) => R, props: P, ...children: any[]): R;
```

配合 `jsxImportSource` 或 `jsxFactory`，JSX 表达式类型会从 `h` 的 overload 推断出来。

这是目前唯一能让 `const a = <div />` 实际类型为 `HTMLDivElement` 的方式。

### 结论

要做到“真实类型”，更推荐 **调整 JSX runtime 的类型声明**，而不是 TS 插件。插件只做显示层增强。

## 推荐落地路径

1. 先实现 Language Service Plugin，解决“显示为 JSX.Element”带来的阅读成本
2. 同时评估是否可调整 `h()` 类型声明，让 JSX 返回真实类型
3. 如果 `h()` 可以替换为 overload 模式，则真实类型推断可以成立，无需插件

## 实施步骤

1. 新建包 `packages/ts-plugin-jsx-dom`
2. 实现 `index.ts` 插件入口
3. 拦截 `getQuickInfoAtPosition`，优先覆盖 JSX 节点的类型显示
4. 写单元测试：
   - `<div />` 显示 `HTMLDivElement`
   - `<input />` 显示 `HTMLInputElement`
   - `<MyComponent />` 显示 `ReturnType<typeof MyComponent>`

## 风险与边界

- TS 插件不可修改编译器核心类型系统
- 组件返回 `Promise<HTMLElement>` 这类情况需特殊处理
- 需要严格处理泛型组件、重载组件

## 结论

- **显示层修复：可通过 TS 插件完成**
- **真实类型修复：更适合通过 JSX runtime 类型声明实现**

建议先用插件完成“显示层优化”，再视需要推进 runtime 类型声明调整。
