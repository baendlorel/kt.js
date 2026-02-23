# mui CheckboxGroup 单事件方案（草案）

> 日期：2026-02-23
> 范围：`packages/mui/src/components/Checkbox`

## 1. 现状问题

- `CheckboxGroup` 现在通过给每个 option 注入 `on:change` 来联动，等于 N 个 checkbox 会产生 N 个回调闭包。
- `CheckboxGroup` 内部存在重复路径（`members` / `checkbox`）与状态来源不清晰的问题，可维护性较差。
- `model` 同步逻辑存在错误约束（把 model 长度与 checkbox 总数绑定），无法正确表达“部分选中”。
- `KTMuiCheckbox` 类型声明了 `checked/value/disabled`，但 `Checkbox` 运行时没有完整定义这些属性，Group 难以稳定控制子项状态。

## 2. 目标

1. `CheckboxGroup` 对外只注册一个 `change` 事件（容器级事件委托）。
2. 一个监听器可覆盖组内所有 checkbox，并支持动态 options。
3. 保持现有语义：group `on:change(values)`、option `on:change(checked, value)`、`k-model/value` 双向同步。
4. 不破坏单独 `Checkbox` 的现有行为。

## 3. 核心设计：事件委托 + 注册表

### 3.1 组内唯一监听器

- 在 group 容器 `<div role="group">` 上注册：`on:change={handleGroupChange}`。
- 每个子 input 打标记：
  - `data-mui-group-id="<uid>"`
  - `data-mui-value="<option.value>"`
- 委托处理时只接管“匹配当前 group-id 的 checkbox input”。

### 3.2 组内状态注册表

- Group 内维护 `Map<string, OptionMeta>`，key 为 `option.value`。
- `OptionMeta` 建议包含：
  - `value: string`
  - `checkedRef: KTRef<boolean>`
  - `disabledRef: KTReactive<boolean>`
  - `indeterminateRef: KTReactive<boolean>`
  - `optionOnChange?: (checked: boolean, value: string) => void`
- 初始化时从 `options` 构建注册表，并将 `checkedRef` 传给 `Checkbox`。

### 3.3 事件处理流程

`handleGroupChange(event)`：

1. 过滤目标：`target` 必须是 `HTMLInputElement` 且 `type === 'checkbox'`。
2. 校验 `data-mui-group-id`，避免误捕获组外 checkbox。
3. 通过 `data-mui-value` 找到 `OptionMeta`。
4. 同步 `meta.checkedRef.value = target.checked`；若 `indeterminate` 为 true，则清为 false。
5. 重新计算 `nextValues`（按 options 顺序），然后 `model.value = nextValues`（必须赋新数组，不原地 mutate）。
6. 触发回调顺序：
   - option 自己的 `on:change(checked, value)`（若存在）
   - group 的 `on:change(nextValues, detail?)`

## 4. Checkbox 侧配合改造

### 4.1 增加“委托模式”（内部能力）

- 增加内部开关（例如 `__delegated?: boolean`，默认 `false`）。
- `__delegated === true` 时：
  - 不给 input 绑定本地 `on:change`（由 group 统一监听）；
  - 仍保留 icon 与 `checked/indeterminate` 响应逻辑（通过 ref 更新）。
- 单独使用 `Checkbox` 时仍走原逻辑（兼容旧行为）。

### 4.2 补齐运行时可控属性

建议给 `Checkbox` 返回元素补齐 `$defines`：

- `value`：readonly。
- `checked`：get/set（set 时同步 input + model + icon）。
- `disabled`：get/set（set 时同步 input + class）。

## 5. 类型与 API 建议

`KTMuiCheckboxGroupProps` 建议补全：

- `value?: string[]`
- `'k-model'?: KTRef<string[]>`
- `'on:change'?: (values: string[], detail?: { value: string; checked: boolean; event: Event }) => void`

说明：

- 兼容旧签名，只传 `(values)` 仍可用。
- `options` 中 `value` 必须唯一，重复值应直接抛错。

## 6. 动态 options 策略

- `options` 变化时只重建 children 与 registry；容器监听器保持 1 个，不重复绑定。
- 新 options 到来时，按当前 `model.value` 回填 checked。
- 被移除的 value 需要从 `model.value` 清理，保证 model 与 UI 一致。

## 7. 测试清单（建议）

1. `should bind only one group change listener`
2. `should delegate change from any checkbox and update model`
3. `should keep option on:change callback`
4. `should sync UI when model updates externally`
5. `should ignore disabled option`
6. `should throw on duplicate option value`
7. `should still work after options update`

## 8. 落地顺序

1. 先做 `Checkbox`：补齐 runtime 属性 + 委托模式。
2. 再改 `CheckboxGroup`：删除逐项回调注入，切换为注册表 + 容器事件委托。
3. 补测试与类型定义。
4. 最后清理旧逻辑（`members/checkbox` 双路径、数组原地修改等）。

## 9. 预期收益

- 组级事件绑定从 O(n) 回调注入收敛到 O(1)。
- 状态更新路径集中，`on:change` 语义更稳定。
- 动态 options、外部 model 联动更容易维护与测试。
