## `reactive.is` 想法分析（2026-04-04）

### 结论

这个 API 值得做，且是低风险增强。  
`a.is(x)` 本质是 `a.map(v => predicate(v, x))` 的语法糖，能减少模板和业务代码里的重复比较逻辑。

---

### 建议语义

```ts
const a = ref(2);
const is3 = a.is(3); // 等价于 a.map(v => Object.is(v, 3))
```

#### 当 `x` 是 plain object

按你说的做“表层属性遍历比较”，建议定义为：

- `x` 的每个自有可枚举键 `k` 都满足 `Object.is(v?.[k], x[k])` 才返回 `true`
- 只做浅比较，不递归
- 不要求 `v` 与 `x` 键集合完全相等（即“子集匹配”语义）

示例：

```ts
const state = ref({ a: 1, b: 2, c: 3 });
state.is({ a: 1, b: 2 }).value === true
state.is({ a: 1, b: 9 }).value === false
```

---

### 为什么可行

1. 与现有模型一致：返回 `KTComputed<boolean>`，无需引入新响应式类型。
2. 性能可控：对象分支只做一层 `for...in` + `hasOwn` 检查。
3. 使用体验明显提升：常见条件判断可读性更好。

---

### 边界与约束（建议在文档写清）

1. plain object 仅限普通对象（`Object.getPrototypeOf(x) === Object.prototype`）。
2. 数组、Date、Map、Set 等不走对象匹配语义，按普通值比较（`Object.is`）。
3. 对象分支为“浅比较 + 子集匹配”，不是深比较。
4. 由于是 computed，若依赖对象发生原地修改，仍需按现有规则 `notify()` 触发。

---

### 建议实现位置

- `packages/core/src/reactable/reactive.ts`
  - 在 `KTReactiveLike` 增加 `is(...)` 方法声明
  - 在 prototype 上实现（类似 `map`）
- 复用 shared 中的 `$is` / `$hasOwn`（保持一致性）
- 补测试：`packages/core/tests/reactive.test.ts`

---

### 建议测试用例（最小集）

1. `ref(2).is(2)` / `ref(2).is(3)`
2. `NaN`、`+0/-0`（验证 `Object.is` 语义）
3. plain object 子集匹配 true/false
4. 非 plain object（数组/Date）走值比较
5. 源值替换后自动更新

---

### 取舍建议

建议先按“`is(value)` + plain object 浅层子集匹配”上线第一版，不扩展 matcher 函数签名。  
这样 API 简单、风险小、可快速落地。
