# mui 子包与 `KTReactiveLike` 适配分析

## 问题

问题不是“mui 里有没有响应式”，而是：

> `packages/mui` 里各组件，是否可以只依赖 `KTReactiveLike` 这组最小 API：
> `value`、`addOnChange`、`removeOnChange`？

## 结论

**不能全量。**

更准确地说：

1. **一部分只读展示型组件**，如果只看“读取值 + 订阅变化”，是可以落到 `KTReactiveLike` 的。
2. **一部分双向/内部会写回的组件**，本质上需要的是 `KTRefLike`，不是 `KTReactiveLike`。
3. **还有一部分组件当前直接调用 `.map()` / `.notify()`**，它们今天仍然依赖完整 `KTReactive`。
4. **即使某个组件业务语义只需要 `KTReactiveLike`，当前 core/mui 的公共类型与 helper 也还没放宽过去。**

所以答案不是“完全不行”，而是：

- **mui 不能整体只靠 `KTReactiveLike` 跑通；**
- **但 mui 内部确实存在一批天然适合 `KTReactiveLike` 的只读消费位点。**

---

## 三种能力边界

### 1. `KTReactiveLike`

只包含：

- `value`
- `addOnChange`
- `removeOnChange`

适合：

- 文本展示
- class/style/attr 绑定
- 作为 `computed(..., deps)` / `effect(..., deps)` 的依赖（**前提是 core 签名也一起放宽**）

### 2. `KTRefLike`

在 `KTReactiveLike` 之上，还要求：

- `value` **可写**

适合：

- `k-model`
- open/model/checked/value 这类会被组件内部写回的状态

### 3. `KTReactive`

当前额外还提供：

- `.map()`
- `.notify()`
- `.get()`
- `clearOnChange()`

适合：

- 需要链式派生的实现
- 需要手动通知的实现

---

## 当前全包级阻塞点

### A. core helper / type 仍然按 `KTReactive` 写

位置：

- `packages/core/src/reactable/index.ts`
- `packages/core/src/reactable/types.d.ts`

现状：

- `toReactive()` 返回类型仍是 `KTReactive`
- `dereactive()` 参数仍是 `KTReactive`
- `KTMaybeReactive` 仍绑定 `KTReactive`
- `computed(..., deps)` 与 `effect(..., deps)` 的依赖数组签名仍是 `KTReactive[]`

影响：

- 就算 mui 某个组件**语义上**只需要 `KTReactiveLike`，当前公开 helper 也还没有把这层边界表达出来。

### B. mui 自己的公共别名也还绑在 `KTReactive`

位置：

- `packages/mui/src/types/component.d.ts`

现状：

- `KTMuiProps.class/style`
- 本地 `KTMaybeReactive<T>`

都还是 `KTReactive<T>` 风格。

影响：

- 就算组件实现本身没问题，mui 对外类型面也还没有切到 `KTReactiveLike`。

---

## 组件分组

## 第一组：只读消费位点为主，**有希望放宽到 `KTReactiveLike`**

这组组件的响应式 prop 主要用于：

- 读取 `.value`
- 放入 `computed`
- 直接塞进 JSX attr/content

它们**不依赖传入 prop 自身的 `.map()` / `.notify()` / `.value = ...`**。

### `Alert`

位置：`packages/mui/src/components/Alert/Alert.tsx`

特点：

- `severity/variant/icon/iconSize/class/style/children` 都是只读消费
- 没有对 prop-derived reactive 做 `.map()` / `.notify()` / 写回

结论：

- **语义上适合 `KTReactiveLike`**
- 前提是 core 的 `toReactive` / `computed` / `KTMaybeReactive` 一起放宽

### `Button`

位置：`packages/mui/src/components/Button/Button.tsx`

特点：

- `variant/color/size/fullWidth/iconOnly/disabled/type/startIcon/endIcon` 都是只读消费
- 本地有 `ref()`，但那是 DOM ref，不是外部 prop 能力要求

结论：

- **prop 层适合 `KTReactiveLike`**

### `Card`

位置：`packages/mui/src/components/Card/Card.tsx`

特点：

- `elevation/square/raised` 当前虽然写成 `KTReactive<T>`，但实现只读使用

结论：

- **prop 层适合 `KTReactiveLike`**

### `FormLabel`

位置：`packages/mui/src/components/FormLabel/FormLabel.tsx`

特点：

- `required/error/disabled/focused/filled/htmlFor` 都是只读消费

结论：

- **prop 层适合 `KTReactiveLike`**

### `Radio`（单个 Radio，不含 `RadioGroup`）

位置：`packages/mui/src/components/Radio/Radio.tsx`

特点：

- 单个 `Radio` 对外部响应式主要是 label 展示
- `valueRef` 来源是普通 `props.value`，不是外部 `KTReactiveLike` 输入主战场

结论：

- **单组件层面可放宽一部分只读 prop 到 `KTReactiveLike`**
- 但 `RadioGroup` 不是这类，见后文

---

## 第二组：语义上需要 `KTRefLike`，**不是 `KTReactiveLike`**

判定标准：组件内部会对 prop 对应的 reactive 执行 `value = ...`，或者通过 `$modelOrRef(...)` 拿双向绑定源。

### `Input`

位置：`packages/mui/src/components/Input/Input.tsx`

关键点：

- `const modelRef = $modelOrRef(props, ...)`
- `modelRef` 会被 input 双向写回

结论：

- `k-model` / `value-model` 这类位点应该是 **`KTRefLike`**
- 不是 `KTReactiveLike`

### `Checkbox`

位置：`packages/mui/src/components/Checkbox/Checkbox.tsx`

关键点：

- `const model = $modelOrRef(props, false)`
- `model.value = inputEl.checked`

结论：

- **需要 `KTRefLike`**

### `CheckboxGroup`

位置：`packages/mui/src/components/Checkbox/CheckboxGroup.tsx`

关键点：

- `const model = $modelOrRef(props, [] as string[])`
- 组内逻辑会改 `model.value`

结论：

- **需要 `KTRefLike`**

### `Switch`

位置：`packages/mui/src/components/Switch/Switch.tsx`

关键点：

- `const modelRef = $modelOrRef(props, false)`
- `modelRef.value = inputEl.checked`

结论：

- **需要 `KTRefLike`**

### `BottomNavigation`

位置：`packages/mui/src/components/BottomNavigation/BottomNavigation.tsx`

关键点：

- `const modelRef = $modelOrRef<string>(props, initialValue)`
- 点击导航项时会 `modelRef.value = action.value`

结论：

- 当前 model 位点本质上是 **`KTRefLike`**

### `FilePicker` / `DirectoryPicker`

位置：

- `packages/mui/src/components/FilePicker/FilePicker.tsx`
- `packages/mui/src/components/FilePicker/DirectoryPicker.tsx`

关键点：

- `const modelRef = $modelOrRef(props, ...)`
- 文件变更时会 `modelRef.value = files`

结论：

- **需要 `KTRefLike`**

### `Tabs`

位置：`packages/mui/src/components/Tabs/Tabs.tsx`

关键点：

- `const modelRef = $modelOrRef<string>(props, ...)`
- 切 tab 时会 `modelRef.value = option.value`

结论：

- **需要 `KTRefLike`**

### `Select`

位置：`packages/mui/src/components/Select/Select.tsx`

关键点：

- `const modelRef = $modelOrRef(props, props.value ?? '')`
- 选中项变化时会 `modelRef.value = newValue`

结论：

- **需要 `KTRefLike`**

### `Popover`

位置：`packages/mui/src/components/Popover/Popover.tsx`

关键点：

- `const openRef = toReactive(props.open ?? false)`
- 内部 `close()` 会执行 `openRef.value = false`

结论：

- `open` 这个 prop 如果保持“组件内部可关闭”的语义，**就不是 `KTReactiveLike`，而是 `KTRefLike`**
- `anchorEl/anchorOrigin/transformOrigin/marginThreshold/elevation` 这些则更像只读位点

### `Dialog`

位置：`packages/mui/src/components/Dialog/Dialog.tsx`

关键点：

- `const openRef = toReactive(props.open ?? false)`
- ESC 处理里会 `openRef.value = false`

结论：

- `open` 语义上应是 **`KTRefLike`**，不是 `KTReactiveLike`

### `Menu`

位置：`packages/mui/src/components/Menu/Menu.tsx`

关键点：

- `const openRef = toReactive(props.open ?? false)`
- `closeMenu()` 会 `openRef.value = false`

结论：

- `open` 应是 **`KTRefLike`**
- 其他定位/样式类 prop 才是只读消费

### `LinearProgress`（边界情况）

位置：`packages/mui/src/components/LinearProgress/LinearProgress.tsx`

关键点：

- 组件定义了返回元素的 `value` setter
- setter 里会 `valueRef.value = v`

结论：

- 如果保留这个 imperative setter，并且 `valueRef` 继续直接绑定外部传入 reactive，
  那它也**不完全是纯 `KTReactiveLike` 语义**
- 更准确的说法是：
  - 只看渲染读取：像 `KTReactiveLike`
  - 只要保留 `container.value = ...` 这条写路径，就要么要求可写，要么先把内部 state 与外部输入解耦

---

## 第三组：当前源码直接依赖 `.map()` / `.notify()`，**仍然需要完整 `KTReactive`**

这一组不是“语义上只读不只读”的问题，而是**实现层真的在调用超出 `KTReactiveLike` 的 API**。

### 依赖 `.map()` 的组件

#### `Input`
- `packages/mui/src/components/Input/Input.tsx:106`
- `toReactive(props.placeholder ?? '').map(...)`

#### `Badge`
- `packages/mui/src/components/Badge/Badge.tsx:50`
- `customClassRef.map(...)`

#### `BottomNavigation`
- `packages/mui/src/components/BottomNavigation/BottomNavigation.tsx:117-139`
- `optionsRef.map(...)`
- `modelRef.map(...)`
- 以及多层链式 `.map(...)`

#### `FilePicker`
- `packages/mui/src/components/FilePicker/FilePicker.tsx:88`
- `modelRef.map(...)`

#### `DirectoryPicker`
- `packages/mui/src/components/FilePicker/DirectoryPicker.tsx:92`
- `modelRef.map(...)`

#### `Menu`
- `packages/mui/src/components/Menu/Menu.tsx:102`
- `classRef.map(...)`

#### `Pill`
- `packages/mui/src/components/Pill/Pill.tsx:108`
- `clickableRef.map(...)`

#### `RadioGroup`
- `packages/mui/src/components/Radio/Radio.tsx:159`
- `toReactive(props.options).map(...)`

#### `Select`
- `packages/mui/src/components/Select/Select.tsx`
- 这里对外部 prop 本身不重度链式 `.map()`，但组件整体还有别的完整 `KTReactive` 依赖，见下文

### 依赖 `.notify()` 的组件

#### `CheckboxGroup`
- `packages/mui/src/components/Checkbox/CheckboxGroup.tsx:66,92`
- `model.notify()`

#### `Select`
- `packages/mui/src/components/Select/Select.tsx:190`
- `menu.notify()`

结论：

- 这组组件**不是只改类型名就能切到 `KTReactiveLike`**
- 需要先删掉这些完整 `KTReactive` API 依赖，或改写实现

---

## 组件总表

| 组件 | 现在能否说“只用 `KTReactiveLike` 就够” | 原因 |
| --- | --- | --- |
| Alert | 基本可以 | 只读消费 |
| Button | 基本可以 | 只读消费 |
| Card | 基本可以 | 只读消费 |
| FormLabel | 基本可以 | 只读消费 |
| Radio（单个） | 基本可以/局部可以 | 主要是只读展示 |
| LinearProgress | 边界情况 | 读路径可以，`container.value` setter 会写回 |
| Badge | 不可以 | 用了 `.map()` |
| BottomNavigation | 不可以 | 既要写 model，又用了 `.map()` |
| Input | 不可以 | 既要写 model，又用了 `.map()` |
| Checkbox | 不可以 | 需要可写 model |
| CheckboxGroup | 不可以 | 需要可写 model，且用了 `.notify()` |
| Switch | 不可以 | 需要可写 model |
| FilePicker | 不可以 | 需要可写 model，且用了 `.map()` |
| DirectoryPicker | 不可以 | 需要可写 model，且用了 `.map()` |
| Tabs | 不可以 | 需要可写 model |
| Select | 不可以 | 需要可写 model，且用了 `.notify()` |
| Popover | 不可以 | `open` 会被内部写回 |
| Dialog | 不可以 | `open` 会被内部写回 |
| Menu | 不可以 | `open` 会被内部写回，且用了 `.map()` |
| Modal | 不适合作为判断样本 | 主要是本地 `ref` + Dialog 封装 |
| Pill | 不可以 | 用了 `.map()` |
| RadioGroup | 不可以 | 用了 `.map()` |

---

## 实际上更合理的拆法

如果后续要把 mui 整理干净，更合理的不是“全包统一替换成 `KTReactiveLike`”，而是三分：

### A. 只读展示类 prop
改成：

- `KTReactiveLike<T>`
- 或新的 `KTMaybeReactiveLike<T>`

典型如：

- `class`
- `style`
- `severity`
- `variant`
- `color`
- `label`
- `icon`
- `helperText`
- `anchorOrigin`
- `transformOrigin`

### B. 双向/内部写回类 prop
改成：

- `KTRefLike<T>`

典型如：

- `k-model`
- `open`
- 选中值 / checked / value model

### C. 组件内部实现
尽量不要再依赖：

- `.map()`
- `.notify()`

否则即使 public prop 已经放宽，组件内部还是会把自己绑回完整 `KTReactive`。

---

## 最终结论

一句话总结：

> **mui 里不是“都不能用 `KTReactiveLike`”，而是“不能指望整个包只靠 `KTReactiveLike` 统一覆盖”。**

当前更合理的判断是：

- **只读消费位点：很多可以下放到 `KTReactiveLike`**
- **双向位点：应该上收为 `KTRefLike`**
- **内部实现还在用 `.map()` / `.notify()` 的组件：暂时仍离不开完整 `KTReactive`**

所以迁移方向应该是：

1. 先把 **只读** 和 **可写** 的类型边界拆开；
2. 再逐个删除 mui 内部对 `.map()` / `.notify()` 的依赖；
3. 最后再谈哪些组件能做到“端到端只依赖 `KTReactiveLike` 子集”。
