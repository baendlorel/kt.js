# KT.js

[![license](https://img.shields.io/github/license/baendlorel/kt.js.svg)](https://github.com/baendlorel/kt.js/blob/main/LICENSE)

[中文](README.zh.md) | [English](README.md) | [CHANGLOG](CHANGELOG.md)

> 注意：本框架仍在开发中。API、类型声明及其它部分可能会经常变更。若在生产中使用，请关注后续更新；有问题也欢迎发邮件联系我。

KT.js 是一个极简、高性能的 DOM 工具库，专注于最小化重渲染和直接的 DOM 操作。它避免不必要的强制重渲染，力求将 DOM 更新控制在最少范围，从而获得最佳性能。

更多优秀的项目请访问作者主页：[我的主页💛](https://baendlorel.github.io/?repoType=npm)

## 设计理念

作为一个前端工具库，频繁创建大量变量与对象会对浏览器及 JS 引擎（如 V8、SpiderMonkey 或 JSC）造成负担。因此我设计了 KT.js。

KT.js 遵循一条简单规则：避免不必要的重绘（repaint）。它直接并且只在必要的位置更新 DOM —— 无虚拟 DOM、无自动 diff。这样可以让 UI 更可预测且更快，同时把控制权交还给开发者。

- 直接操作 DOM：仅更新发生变化的部分。
- 最小化更新：避免不必要的重排（reflow）与重绘（repaint）。
- 可预测且高性能：界面稳定、响应迅速。
- 开发者掌控：你决定何时更新。

## 快速开始

推荐使用 pnpm 安装，但也支持 npm：

```bash
npm install kt.js
# or
pnpm add kt.js
```

在项目中引入并使用：

```ts
import { h, createApp } from 'kt.js';

const app = h('div', { id: 'app' }, 'Hello, KT.js!');

createApp(app);
```

## API 概览

- `h` — 创建一个加强版的HTML元素。
  - 常见用法：`h('div', { id: 'root' }, 'Hello')`。
  - 返回一个 `HTMLKElement`（即带有额外 enhance 属性的 HTMLElement，详见下文）。
  - 提供一组别名，例如 `div`、`span`、`ul` 等。
    - `div(attr, content)` 等价于 `h('div', attr, content)`。

- `createApp` — 将根元素挂载到文档中。
  - 默认查找 `#app`，找不到时回退到 `document.body`，也可以通过`mountTo`入参指定挂载位置。
  - 函数签名：`createApp(rootElement: HTMLKElement, mountTo?: HTMLElement)`

** 与 `@emotion/css` 一起使用 **

> 早期我实现过自己的 CSS 处理器，但后来发现没必要。

示例：

```ts
import { css } from '@emotion/css';

const className = css`
  color: red;
  font-size: 20px;
`;

h('div', { class: className }, 'Styled text');
```

## Enhance 增强后新增的属性与方法

当对一个元素调用 `enhance(element)`（`h` 在需要时会在内部完成该步骤）后，HTMLElement 会变为 `HTMLKElement`，并添加如下扩展：

- 属性
  - `ktext`（字符串）：getter/setter，代理到存放在元素内部的 Text 节点（用于读写元素文本内容）。
    - 该 Text 节点由 WeakMap 存储，因此通常无法移除它。将 `ktext` 设为空字符串 `''`可以让它看不见。
  - `kchildren`（数组）：getter/setter，将元素的子节点以字符串或增强元素数组的形式暴露。设置 `kchildren` 会替换元素的内容，接受字符串、Text 节点或其它 KT.js 的增强元素。

- 方法
  - `kon(type, listener, options?)` — 增强版的 addEventListener
    - 规范化事件选项。支持 `triggerLimit` 选项：当事件触发次数达到限制时会自动移除监听器（若 `triggerLimit === 1` 则等同于 `once`）。
    - 返回实际注册的监听器（可能是包裹器以支持触发次数限制）。
    - **重要提示**：当使用 `triggerLimit` 时，`kon` 会返回一个新的包装函数而不是原始监听器。在调用 `koff` 时必须使用这个返回值才能正确移除监听器。示例：
      ```ts
      const wrappedHandler = element.kon('click', handler, { triggerLimit: 3 });
      // 稍后要移除时：
      element.koff('click', wrappedHandler); // 使用 wrappedHandler，而不是原始的 handler
      ```
  - `koff(type, listener, options?)` — 增强版的 removeEventListener
    - 在移除监听器时会考虑传入的选项。
  - `kmount(element)` — 挂载/追加助手
    - 等价于 `element.appendChild(this)`，并返回 `this` 以便链式调用。

## 说明与注意事项

- 本库直接操作 DOM，并有意将重渲染控制到最小。
- API 设计小而精，偏底层 —— 目标是作为构建高性能 UI 的基础工具，而不是完整的组件框架。
- 本库假设`Function.prototype` 上的 `call`, `apply` 未被改动过。

## 参与贡献

欢迎提交 PR 与 issue。如果你的改动会影响公共 API，请同时更新 README 与相应的测试。

## 许可证

MIT
