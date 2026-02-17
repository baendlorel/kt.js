# kif / kelse / kelseif 兄弟链方案设计（基于 children 相邻检测）

## 结论（先回答可行性）

你的方向是 **可行的**，而且和 KT.js “直接操作 DOM、轻量控制刷新” 的风格一致。  
但要想稳定落地，需要补两点：

1. 不能只存 `flags.kif = 条件值`，而是要存一份“可求值 + 可订阅”的元信息；
2. 现有 `jsx-runtime` 里的 `k-if` 自治监听逻辑要和链控制器解耦，否则会出现双重刷新。

---

## 目标

1. 仅允许在同一父节点下、相邻兄弟节点中形成 `if / elseif / else` 链；
2. 由一个链控制器统一决定当前激活分支；
3. `if` 条件变化时直接决定后续 `elseif/else` 是否刷新；
4. 支持 `KTRef/KTComputed`，且尽量少订阅、少重建。

---

## 设计总览

采用“**节点打标 + children 阶段组链 + 链控制器驱动**”：

1. `jsx()` 创建元素时，如果带 `k-if / k-else-if / k-else`，就在返回节点上挂内部标记；
2. `applyContent()` 处理 children 时扫描相邻兄弟，做语法校验并组装条件链；
3. 每条链只创建一个控制器，负责初次渲染与后续切换。

---

## 数据结构（建议）

不要直接依赖 DOM attribute，建议挂在 symbol 字段上：

```ts
const DIR_META = Symbol('kt-dir-meta');

type DirType = 'if' | 'elseif' | 'else';

interface DirMeta {
  type: DirType;
  source?: any; // k-if / k-else-if 原始绑定值
  getTruthy: () => boolean; // 统一布尔求值
  subscribe?: (fn: () => void) => (() => void) | void; // source 是 reactive 时提供
}
```

`flags.kif/kelse/kelseif` 也能做，但 symbol 更安全，避免污染用户可见属性。

---

## 关键流程

### 1) JSX 创建阶段（`packages/core/src/jsx/jsx-runtime.ts`）

- 检测 `props` 中是否有 `k-if` / `k-else-if` / `k-else`；
- 创建真实节点后挂 `DIR_META`；
- `getTruthy` 规则：
  - `k-if` / `k-else-if`：`!!(isKT(source) ? source.value : source)`
  - `k-else`：恒为 `true`（仅语义占位）
- 如果 `source` 是 reactive，`subscribe` 内部调用 `addOnChange`。

注意：这里不要立刻做“独立 k-if 自更新”，改为交给链控制器统一处理。

### 2) children 处理阶段（`packages/core/src/h/content.ts`）

- 扫描同层 children（可忽略纯空白 text）；
- 识别指令节点并组链；
- 非指令节点会中断当前链并触发链挂载；
- 对每条链做语法校验（见下一节）；
- 链挂载时插入一个 anchor comment，后续只在 anchor 后替换当前激活分支。

### 3) 链控制器

每条链维护：

- `branches: Node[]`
- `metas: DirMeta[]`
- `activeIndex: number`
- `cleanupFns: Array<() => void>`

更新算法：

1. 从前到后找第一个满足条件的分支：
   - `if/elseif`：`meta.getTruthy() === true`
   - `else`：兜底命中
2. 若命中索引未变化：不做 DOM 操作；
3. 若变化：`oldNode.replaceWith(newNode)`（或基于 anchor 插入/移除）；
4. reactive 分支只注册订阅到同一个 `recompute()`。

---

## 语法规则（按你的思路细化）

你给的 3 条规则可用，建议补成可执行版：

1. `if`：无前置要求，可作为新链起点；
2. `else`：前一个**有效兄弟**必须是 `if` 或 `elseif`；
3. `elseif`：前一个有效兄弟必须是 `if` 或 `elseif`（不能是 `else`，也不能单独起链）；
4. `else` 必须是链尾（其后再出现 `elseif/else` 报错）。

> “有效兄弟”建议忽略纯空白 `JSXText`。

---

## 和现有实现的冲突点（必须处理）

1. `packages/babel-plugin-ktjsx/src/if-else.ts` 目前会把链改写成复合 `k-if`，这会覆盖新策略；  
   建议：先关闭该 transform，或改为仅做语法检查。
2. `packages/core/src/h/attr.ts` 要把 `k-else` / `k-else-if` 加入忽略列表，避免落到真实 DOM attribute。
3. 类型声明需补全：
   - `packages/core/src/types/h.d.ts`
   - `packages/core/src/types/jsx.d.ts`
4. `jsx-runtime` 现有 `k-if` 独立监听逻辑需要迁移到链控制器路径（否则双重切换）。

---

## 伪代码（核心）

```ts
function mountConditionalChain(chainNodes: Node[]) {
  const metas = chainNodes.map((n) => n[DIR_META] as DirMeta);
  let active = -1;

  const pick = () => {
    for (let i = 0; i < metas.length; i++) {
      const m = metas[i];
      if (m.type === 'else') return i;
      if (m.getTruthy()) return i;
    }
    return -1;
  };

  const apply = () => {
    const next = pick();
    if (next === active) return;
    switchBranch(active, next);
    active = next;
  };

  for (const meta of metas) {
    meta.subscribe?.(apply);
  }

  apply();
}
```

---

## 实施顺序（MVP）

1. 扩展类型：支持 `k-else` / `k-else-if`；
2. `jsx-runtime`：实现 directive 节点打标（先不改编译器）；
3. `content.ts`：实现链扫描、校验、挂载控制器；
4. 关闭/绕过旧的 Babel if-else transform；
5. 补测试（语法错误、链切换、KTReactive 场景、空白节点场景）。

---

## 最小测试清单

1. `if + else`：`if` 条件切换时两个分支互斥显示；
2. `if + elseif + else`：按链顺序选择首个命中分支；
3. `else` 前无 `if/elseif`：报错；
4. `elseif` 紧跟 `else`：报错；
5. `if` 条件值变化但布尔结果不变：不触发 DOM 替换；
6. 纯空白文本不打断链。

