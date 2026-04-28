# MUI 移除 emotion CSS 初步分析

## 结论

`packages/mui/src` 下现有 20 个 `.css.ts` 文件都可以转成普通 `.css` 文件。

这些文件的样式主体本质上都是 `injectGlobal\`...\`` 里的全局 CSS 字符串，未使用 emotion 的对象样式、`css()`、`styled`、模板插值 `${...}`、运行时变量计算、`&` 嵌套选择器、Sass/Less mixin 或其他日常 CSS 不能直接表达的语法。

需要处理的不是 CSS 语法能力问题，而是模块加载机制问题：当前 `.css.ts` 文件被作为 JS 模块导入，靠执行 `injectGlobal` 把样式注入到页面；改成普通 CSS 后，需要把这些 JS 副作用导入替换为 CSS 资源导入或其他按需加载机制。

## 扫描范围

共 20 个文件，合计约 3849 行：

- `packages/mui/src/main.css.ts`
- `packages/mui/src/components/Alert/Alert.css.ts`
- `packages/mui/src/components/Badge/Badge.css.ts`
- `packages/mui/src/components/BottomNavigation/BottomNavigation.css.ts`
- `packages/mui/src/components/Button/Button.css.ts`
- `packages/mui/src/components/Card/Card.css.ts`
- `packages/mui/src/components/Checkbox/Checkbox.css.ts`
- `packages/mui/src/components/Dialog/Dialog.css.ts`
- `packages/mui/src/components/FilePicker/FilePicker.css.ts`
- `packages/mui/src/components/FormLabel/FormLabel.css.ts`
- `packages/mui/src/components/Input/Input.css.ts`
- `packages/mui/src/components/LinearProgress/LinearProgress.css.ts`
- `packages/mui/src/components/Menu/Menu.css.ts`
- `packages/mui/src/components/Modal/Modal.css.ts`
- `packages/mui/src/components/Pill/Pill.css.ts`
- `packages/mui/src/components/Popover/Popover.css.ts`
- `packages/mui/src/components/Radio/Radio.css.ts`
- `packages/mui/src/components/Select/Select.css.ts`
- `packages/mui/src/components/Switch/Switch.css.ts`
- `packages/mui/src/components/Tabs/Tabs.css.ts`

## 当前文件形态

大多数组件样式是这种形式：

```ts
import { injectGlobal } from '@emotion/css';

void injectGlobal`
/* 普通 CSS */
`;
```

只有两个例外：

- `packages/mui/src/main.css.ts` 使用 `export default injectGlobal\`...\``。
- `packages/mui/src/components/Input/Input.css.ts` 使用 `export const injectCss = () => injectGlobal\`...\``。

组件侧当前通过 `import './X.css.js'` 引入样式模块。`Input.tsx` 同时还有：

```ts
import './Input.css.js';
import { injectCss } from './Input.css.js';
```

并在 `TextField` 第一次调用时执行 `injectCss()`。这意味着 `Input` 的迁移不能只做文件改名，还要删除或替换 `injectCss` 这条 JS API。

## 是否存在普通 CSS 不能用的语法

未发现。

已确认不存在：

- emotion `css()` 调用
- emotion `styled`
- emotion `keyframes()` JS API
- 模板插值 `${...}`
- JS 变量拼接 CSS
- CSS-in-JS 对象字面量
- emotion/Sass 风格 `&` 嵌套选择器
- Sass/Less 专有语法，例如 mixin、extend、变量声明

扫描中唯一命中的 `&` 是 `FilePicker.css.ts` 里的普通注释 `FilePicker & DirectoryPicker Component Styles`，不是选择器。

## 当前使用到的 CSS 能力

这些都属于普通 CSS，可直接保留：

- 类选择器和组合类选择器，例如 `.mui-alert-standard.mui-alert-success`
- 后代选择器、子选择器、相邻或兄弟选择器，例如 `> span`、`~ .mui-radio-icon`、`+ .mui-switch-base`
- 伪类和伪元素，例如 `:hover`、`:active`、`:focus-visible`、`:disabled`、`::placeholder`、`::after`
- `@media (prefers-color-scheme: dark)`
- `@keyframes`
- CSS 自定义属性，例如 `--kt-color-primary`、`--mui-switch-track-on`
- `var()`、`calc()`、`rgba()`、`rgb()`
- vendor property，例如 `-webkit-tap-highlight-color`、`-webkit-overflow-scrolling`

因此迁移时可以基本机械地抽出模板字符串内容，保存为同路径同名 `.css`。

## 需要注意的迁移点

1. 文件内容提取

   可以把每个 `.css.ts` 中 `injectGlobal\`...\`` 的内容原样提取到 `.css` 文件中，删除 TypeScript 包裹代码和 `@emotion/css` import。

2. import 路径

   当前源码中大量使用：

   ```ts
   import './Button.css.js';
   ```

   迁移后需要改成构建系统能识别的 CSS 导入形式，例如：

   ```ts
   import './Button.css';
   ```

   具体是否带扩展名、是否需要 `.js` 映射，取决于后续你设计的按需引入和构建产物规则。

3. `main.css.ts`

   该文件只定义 `:root` 级别设计变量和暗色模式变量。普通 CSS 可以完全承载。迁移后它应作为基础 CSS，被入口或每个组件依赖链保证加载。

4. `Input.css.ts`

   这是唯一导出函数的样式文件。`Input.tsx` 目前既 side-effect import，又在 `TextField` 首次调用时执行 `injectCss()`。转成普通 CSS 后需要删除 `injectCss` import 和调用，或者把这部分替换成新的按需样式加载 API。

5. 重复注入行为会消失

   现在 emotion 的 `injectGlobal` 是 JS 运行时注入。普通 CSS 导入后，去重、顺序和拆包由构建器或运行时 loader 负责。迁移设计时要明确：

   - 组件 CSS 是否跟组件 JS 同 chunk
   - `main.css` 是否自动包含
   - 同一 CSS 被多个组件引用时如何去重
   - 用户只按需引入单组件时变量是否可用

6. 包依赖清理

   当前 `@emotion/css` 仍在根 `package.json` 和 lockfile 中出现。完成 MUI 样式迁移后，需要再确认仓库其他包是否还使用它，之后再决定是否移除依赖。

## 文件级判断

| 文件 | 可直接转普通 CSS | 备注 |
| --- | --- | --- |
| `main.css.ts` | 是 | `:root` 变量和 dark mode，全是普通 CSS；需处理默认导出消失 |
| `Alert.css.ts` | 是 | 普通全局类、hover、dark mode |
| `Badge.css.ts` | 是 | 使用 CSS 自定义属性，可直接保留 |
| `BottomNavigation.css.ts` | 是 | 普通选择器和 dark mode |
| `Button.css.ts` | 是 | 包含 `@keyframes mui-ripple-animation`，普通 CSS 支持 |
| `Card.css.ts` | 是 | 普通类和大量 elevation shadow |
| `Checkbox.css.ts` | 是 | 使用 checked sibling selector 和 `::after`，普通 CSS 支持 |
| `Dialog.css.ts` | 是 | 普通类、子选择器、dark mode |
| `FilePicker.css.ts` | 是 | 普通 CSS；注释里的 `&` 不是语法问题 |
| `FormLabel.css.ts` | 是 | 普通类和 `legend.mui-form-label` |
| `Input.css.ts` | 是 | CSS 可直接提取；但组件依赖 `injectCss()` 导出，需要额外改组件 |
| `LinearProgress.css.ts` | 是 | 包含 `@keyframes mui-linear-progress-indeterminate`，普通 CSS 支持 |
| `Menu.css.ts` | 是 | 普通类、focus-visible、dark mode |
| `Modal.css.ts` | 是 | 普通类、focus、dark mode |
| `Pill.css.ts` | 是 | 使用 CSS 变量和状态类，普通 CSS 支持 |
| `Popover.css.ts` | 是 | 普通类、fixed 定位、dark mode |
| `Radio.css.ts` | 是 | 使用 checked sibling selector 和 `::after`，普通 CSS 支持 |
| `Select.css.ts` | 是 | 使用 sibling selector、legend、`!important`、dark mode，普通 CSS 支持 |
| `Switch.css.ts` | 是 | 使用自定义属性、`:not()`、adjacent sibling，普通 CSS 支持 |
| `Tabs.css.ts` | 是 | 普通类、focus-visible、dark mode |

## 建议的下一步

先做一轮纯机械迁移验证：

1. 生成对应 `.css` 文件。
2. 把 `.tsx` / `index.ts` 中的 `./X.css.js` 改为新的 CSS 导入形式。
3. 删除 `.css.ts` 对 `@emotion/css` 的依赖。
4. 单独处理 `Input.tsx` 的 `injectCss()`。
5. 跑 `@ktjs/mui` 构建和组件测试，重点验证样式是否进入产物、按需引入是否仍能加载变量和组件样式。

这次分析的核心结论是：样式语法本身没有阻碍，重构风险集中在构建产物、CSS 加载顺序和按需引入策略上。
