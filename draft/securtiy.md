# packages/core 安全检查报告

检查日期：2026-03-24  
范围：`packages/core/src` 静态人工审查  
未包含：`@ktjs/shared`、构建产物、插件包、动态运行/Fuzz/浏览器联调

## 结论

`packages/core` 里**没有看到 `eval` / `new Function` / 动态脚本拼接**这类非常直接的代码执行点；文本子节点默认走 `createTextNode`，这条默认路径是安全的。

但这个 runtime 目前存在几类明显的 **DOM XSS / 注入型安全面**。它们大多属于：**只要业务层把不可信输入直接喂给 core API，就会进危险 sink**。如果项目定位是“底层 DOM runtime，由业务自己负责消毒”，那这些更像“高危 footgun”；如果目标是“默认安全”，那其中至少有两项应视为真实问题。

---

## 发现 1：`k-html` 直接写入 `innerHTML`，无任何净化

**级别：高**

位置：
- `packages/core/src/h/attr.ts:48-55`
- `packages/core/src/types/h.d.ts:45-49`

关键逻辑：
- `k-html` 存在时，直接执行 `element.innerHTML = html`
- 响应式更新时同样直接写 `innerHTML`

影响：
- 如果 `k-html` 接收到用户可控 HTML，则可直接触发 DOM XSS
- 这不是扫描器误报，而是明确的危险 sink

示例：
```ts
h('div', { 'k-html': userProvidedHtml })
```

说明：
- 这是一个**显式危险 API**，类似很多框架里的 raw HTML 能力
- 如果保留，至少需要在文档中明确标注“只允许可信 HTML”

---

## 发现 2：未拦截原生 `on*` 属性，可能退化为内联事件处理器注入

**级别：高**

位置：
- `packages/core/src/h/attr.ts:6-7`
- `packages/core/src/h/attr.ts:58-93`
- `packages/core/src/types/h.d.ts:28-29`
- `packages/core/src/types/h.d.ts:104-108`

关键逻辑：
- 事件监听的安全通道是 `on:click` 这种前缀写法，内部走 `addEventListener`
- 但除 `on:` 之外的任意 key，都会落到默认分支 `element.setAttribute(key, value)`
- `KTAttribute` 又通过 `[k: string]: any` 接受任意属性名

影响：
- 这意味着 `onclick`、`onerror`、`onload` 之类属性**不会被拒绝**，而是会被当成普通 HTML attribute 写入 DOM
- 浏览器会把这类 attribute 当成内联事件处理器解释；若值是字符串，就形成可执行脚本入口

示例：
```ts
h('img', { src: 'x', onerror: 'alert(1)' })
h('button', { onclick: 'steal()' })
```

说明：
- 这不是你设计的主路径，但现在确实是开放的
- 相比 `k-html`，它更容易被“误用”触发，因为调用者可能只是把 React/HTML 风格属性原样传进来

---

## 发现 3：危险 URL / 可执行属性完全透传，缺少安全边界

**级别：中**

位置：
- `packages/core/src/h/attr.ts:6-7`
- `packages/core/src/h/attr.ts:86-93`
- `packages/core/src/types/attribute.d.ts` 中已声明大量危险属性，例如：
  - `href`：`20-39`
  - `formaction`：`93`
  - `action`：`174`
  - `src` / `srcdoc`：`212-213`
  - SVG `href`：`679`, `754`, `808`, `849`, `898`, `909`

关键逻辑：
- core 对绝大多数 attribute 直接 `setAttribute`
- 没有对协议、标签类型、属性类型做任何限制

影响：
- `href="javascript:..."`
- `iframe.srcdoc = "<script>..."`
- SVG/MathML 场景中的可执行 URL
- 表单 `action` / `formaction` 指向恶意地址

说明：
- 这些更偏“原始 DOM 能力暴露”而不是库内自动利用
- 但如果你的框架希望提供比裸 DOM 更安全的抽象层，这里目前没有任何护栏

---

## 发现 4：`attr` / `style` 使用 `in` 与 `for...in`，会处理继承来的可枚举属性

**级别：中**

位置：
- `packages/core/src/h/attr.ts:18-20`
- `packages/core/src/h/attr.ts:48`
- `packages/core/src/h/attr.ts:58-93`
- `packages/core/src/h/index.ts:28`

关键逻辑：
- `for (const key in style)`
- `for (const key in attr)`
- `'k-html' in attr`
- `'k-model' in attr`

影响：
- 如果上游对象来自被污染的原型链，或调用者故意传入带继承属性的对象，这些继承属性会被当成真实输入处理
- 在最坏情况下，可把上游 prototype pollution 放大成：
  - 意外启用 `k-html`
  - 意外写入危险 attribute
  - 意外挂载 `on:*` 或原生 `on*`
  - 意外污染 style 设置

说明：
- 这里不是“core 自己产生 prototype pollution”
- 但它对污染对象**缺少隔离**，属于典型 hardening gap

---

## 发现 5：内容插入默认对字符串安全，但对原始 `Node` 完全信任

**级别：信息 / 需文档说明**

位置：
- `packages/core/src/h/content.ts:5`
- `packages/core/src/h/content.ts:13-23`
- `packages/core/src/types/h.d.ts:14-16`

关键逻辑：
- 非 `Node` 内容：`document.createTextNode(o)`
- `Node` 内容：直接 `appendChild`

判断：
- **好消息**：普通字符串/数字 children 默认不会被当 HTML 解析，这条路径是安全的
- **边界**：如果业务层把不可信内容先转换成 `Node`，再传给 core，core 会无条件挂载

结论：
- 这更像“信任边界要写清楚”，不单独算漏洞
- 也说明你之前看到的 CodeQL `content.ts` 告警，不如 `k-html` 和原生 `on*` 那么硬

---

## 本次未发现的高危点

在 `packages/core/src` 中，本次**未看到**以下典型高危模式：
- `eval(...)`
- `new Function(...)`
- 通过字符串构造脚本再执行
- 服务端文件/命令/SQL 类风险（该包本身是浏览器端 runtime）
- 文本 children 默认进入 `innerHTML`

---

## 风险排序（按优先级）

1. **`k-html` 直写 `innerHTML`**
2. **原生 `on*` 属性未拦截，可能形成内联事件处理器注入**
3. **危险 URL / `srcdoc` / SVG href 等属性无护栏**
4. **对继承属性不设防，可能放大上游 prototype pollution**
5. **原始 `Node` 内容信任边界需文档化**

---

## 建议

### 必做
- 明确文档：`k-html` 仅允许可信 HTML
- 明确文档：不要把用户输入直接映射到任意 attr/key
- 明确文档：事件只允许 `on:*`，不要传原生 `onclick` / `onerror`

### 建议修复
- 拦截或拒绝原生 `on*` attribute
- 对 `attr` / `style` 改为仅处理 own properties
- 至少对 `href` / `src` / `srcdoc` / SVG href / `action` / `formaction` 这类危险属性做显式策略
  - 要么默认拒绝危险协议
  - 要么提供明确的 unsafe API 名称

### 可以接受但要写清楚
- 允许直接插入 `Node`
- 允许创建任意标签
- 允许设置任意 attribute

---

## 一句话总结

这份 core 代码的主要安全问题**不在“隐蔽漏洞”**，而在于它现在更像一个**非常原始、非常信任调用者的 DOM runtime**：
- 文本节点默认是安全的
- 但 raw HTML、原生事件属性、危险 URL/iframe/SVG 属性几乎没有护栏

如果定位是“低层工具”，可以接受，但需要强文档警告；如果定位是“框架默认安全”，当前还不够。
