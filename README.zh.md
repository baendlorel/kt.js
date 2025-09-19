# kt.js

[中文](./README.zh.md) | [English](./README.md)

For more awesome packages, check out [my homepage💛](https://baendlorel.github.io/?repoType=npm)

> 注意：这个库仍在开发中。

kt.js 是一个微小的高性能 DOM 工具，专注于最小化重绘和直接操作 DOM。它的设计目标是尽量不强制重绘，只在必要时更新 DOM，从而获得极致性能。

核心理念

- 不强制重绘。只有在需要时才更新。
- 极少无谓的重排/重绘。
- 最小开销，极低运行时成本。
- 直接操作 DOM，获得可预测且快速的更新。

## 快速开始

通过 npm 或你喜欢的包管理器安装，然后从 `src/index.ts` 中导入所需函数。

主要导出（来自 `src/index.ts`）

- `h` — hyperscript 辅助函数
  - 创建带有 KText 增强属性的 DOM 元素。
  - 用法示例：h('div', { id: 'root' }, 'Hello')。
  - 返回 `HTMLKEnhancedElement`（一个带有额外 `enhance` 属性的 HTMLElement）。

- `css` — 全局 CSS 收集器
  - 模板字符串标签函数，把传入的 CSS 文本收集到内部数组中。
  - 用法： css`.foo { color: red; }`
  - 收集到的 CSS 会通过 `applyCss()` 注入到文档中（`createApp` 在合适时会调用它）。

- `useScope` — 作用域 CSS 助手
  - 提供将 CSS 作用域化到特定名称/命名空间的能力，配合 `css` 使用。

- `createApp` — 挂载助手
  - 将根 `HTMLKEnhancedElement` 挂载到文档。
  - 签名：`createApp(rootElement: HTMLKEnhancedElement, mountTo?: HTMLElement)`
  - 若省略 `mountTo`，会尝试 `#app`，找不到则回退到 `document.body`。
  - 会调用 `applyCss()` 来刷新已收集的 CSS。

## enhance 增添的属性和方法

当调用 `enhance(element)`（在需要时 `h` 会内部调用）后，HTMLElement 会被增强为 `HTMLKEnhancedElement`，包含以下新增项：

- 属性
  - `kid`（number）：由内部 `Indexer.nextKid()` 生成的每个元素唯一索引。
  - `isKT`（true）：标记元素是 KText 元素的布尔值。
  - `ktext`（string）：代理内部 Text 节点的 getter/setter（读写元素文本内容）。

- 方法
  - `kon(type, listener, options?)` — 增强的 addEventListener
    - 规范化 options，支持 `triggerLimit`（监听器在触发 N 次后移除；若 `triggerLimit === 1` 则等同于 `once`）。
    - 返回 listener（或用于限制触发次数的包装监听器）。
  - `koff(type, listener, options?)` — 增强的 removeEventListener
    - 移除事件监听，遵循提供的 options。
  - `kmount(element)` — 挂载/追加辅助方法
    - 等价于 `element.appendChild(this)`，并返回 `this` 以方便链式调用。

## 示例

```ts
import { h, css, createApp } from './src/index';

const root = h('div', { id: 'root' }, 'Hello world');
css`
  .root {
    color: hotpink;
  }
`;
createApp(root);
```

## 注意

- 本库直接操作 DOM，故意将重绘控制在最低。
- `enhance` 为元素添加了非枚举描述符的属性 `ktext`、`isKT` 和 `kid`，并直接赋值 `kon`、`koff`、`kmount` 方法。
- 该 API 小且低级，旨在作为性能优先的构建块，而非完整的组件框架。

## 贡献

欢迎 PR 和 issue。如果你修改了公共 API，请同步更新 README 和测试。

## 许可证

参见仓库中的 `LICENSE` 文件。
