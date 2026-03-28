# use-subreactive 类型同步计划（core + mui）

## 目标
让 `get()` 产物（`KTSubComputed`）和 `subref()` 产物（`KTSubRef`）在 **core 的 content/attr/jsx 类型** 与 **mui 组件 props 类型** 中都能正确通过类型系统。

---

## 扫描结论

### 1) core 侧（重点）
已确认存在“只接受 KTReactive / KTRef，未覆盖 sub reactive”的位置：

- 反应式类型基座
  - `packages/core/src/reactable/types.d.ts`
  - `packages/core/src/reactable/common.ts`
- h/jsx 公共类型出口
  - `packages/core/src/types/h.d.ts`
  - `packages/core/src/types/jsx.d.ts`
  - `packages/core/src/types/directives.d.ts`
- jsx 组件 props 限制过窄
  - `packages/core/src/jsx/for.ts`
  - `packages/core/src/jsx/fragment.ts`
  - `packages/core/src/jsx/if.ts`
- k-model 参数类型过窄
  - `packages/core/src/h/model.ts`

> `h/content.ts`、`h/attr.ts` 运行时本身已经按“可监听对象”处理，主要是上游类型没放开。

### 2) mui 侧（重点）
明确存在 `KTReactive` 硬编码或本地 `KTMaybeReactive` 仍绑定 `KTReactive` 的位置：

- 基础类型
  - `packages/mui/src/types/component.d.ts`
- 组件 props
  - `packages/mui/src/components/Badge/Badge.tsx`
  - `packages/mui/src/components/Card/Card.tsx`
  - `packages/mui/src/components/FilePicker/FilePicker.tsx`
  - `packages/mui/src/components/FilePicker/DirectoryPicker.tsx`
  - `packages/mui/src/components/Input/Input.tsx`
  - `packages/mui/src/components/Popover/Popover.tsx`
  - `packages/mui/src/components/Radio/Radio.tsx`
  - `packages/mui/src/components/Tabs/Tabs.tsx`

---

## 实施策略（减法优先）

1. **可读响应式入口**统一为 `KTReactiveLike<T>`（覆盖 Ref/Computed/SubRef/SubComputed）。
2. **可写入口**（如 `k-model`）统一为 `KTRefLike<T>`，避免把只读 computed 放进双向绑定。
3. 不加中间层，不做兼容 wrapper，直接改现有类型声明。
4. 本轮先做“类型同步”，不扩展新 API。

---

## 分阶段计划

### Phase A：core 类型基座先对齐（阻塞项）
- [x] `reactable/types.d.ts`
  - `KTReactify* / KTMaybeReactive*` 从 `KTReactive` 切到 `KTReactiveLike`
- [x] `reactable/common.ts`
  - `isKT` 的类型谓词改为 `KTReactiveLike`

**验收**：`KTMaybeReactive<T>` 能覆盖 `ref().subref(...)` 与 `ref().get(...)` 返回值。

### Phase B：core 的 content/attr/jsx 类型出口同步
- [x] `types/h.d.ts`
  - `SingleContent` 改为 `KTReactiveLike<any> | ...`
  - `ref` / `k-model` 改为 `KTRefLike<any>`
- [x] `types/jsx.d.ts`
  - `IntrinsicAttributes.ref` / `k-model` 改为 `KTRefLike<any>`
- [x] `types/directives.d.ts`
  - `__kif__` 改为 `KTReactiveLike<boolean>`
- [x] `jsx/for.ts`、`jsx/fragment.ts`、`jsx/if.ts`
  - props 中 `KTReactive` 改为 `KTReactiveLike`
  - `ref` 类型改为 `KTRefLike`
- [x] `h/model.ts`
  - 入参从 `KTRef` 改为 `KTRefLike`
  - 同步收紧运行时校验为 ref-like（只允许可写对象）

**验收**：
- `children={state.get('x')}`、`class={state.subref('cls')}` 类型通过。
- `k-model={state.subref('form','name')}` 类型通过。

### Phase C：mui props 类型同步
- [x] `types/component.d.ts`
  - 本地 `KTMaybeReactive` 改为基于 `KTReactiveLike`
  - `class/style` 类型同步放宽
- [x] 组件逐个替换硬编码 `KTReactive`
  - `Badge/Card/Radio/Popover`
  - `Input/FilePicker/DirectoryPicker/Tabs`
- [x] 所有 `k-model` props 统一到 `KTRefLike<...>`

**验收**：mui 组件可直接接收 `subref/get` 结果作为可读 props；`k-model` 只接收可写 ref-like。

### Phase D：回归验证
- [x] core 增加/更新类型用例（至少覆盖 content、attr、k-model）
- [x] mui 增加/更新类型用例（至少覆盖 Input/FilePicker/Tabs/Popover）
- [x] 执行构建与测试（core + mui）并确认导出 d.ts 同步

---

## 风险与处理

- 风险：把 `k-model` 放宽成 `KTReactiveLike` 会把只读 computed 误放进双向绑定。  
  处理：`k-model` 固定使用 `KTRefLike`。

- 风险：部分组件内部会对 `toReactive(...)` 结果调用 `.map`。  
  处理：本轮不改调用链结构；先完成声明同步，必要时在下一轮单独收敛 `toReactive` 的类型行为。

---

## 建议提交切分
1. core：reactable/types + h/jsx 类型出口
2. core：jsx/h-model 签名与校验
3. mui：component.d.ts + 8 个组件 props
4. tests + build 产物校验
