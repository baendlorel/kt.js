# core/shared ES 兼容性检测报告（详细版）

日期：2026-02-24

## 结论先看

- `@ktjs/shared` 当前发布产物最低语法门槛：**ES2020**
- `@ktjs/core` 当前发布产物最低语法门槛：**ES2022**
- 两包合并看（`core` 依赖 `shared`）：**ES2022**
- 不能“完美降级到 ES6”（若“完美”定义为：不改构建、不加 polyfill/shim、行为零差异）

---

## 检测方法（为保证“全量”）

1. 重新构建两个包：

```bash
pnpm build shared
pnpm build core
```

2. 对以下文件做 AST 扫描（不是纯 grep，避免漏报/误报）：
   - 源码：`packages/core/src/**/*.ts`、`packages/shared/src/**/*.ts`（排除 `*.d.ts`）
   - 发布产物：`packages/core/dist/index.mjs`、`packages/shared/dist/index.mjs`

3. 扫描语法特性（均为“超过 ES6”）：
   - ES2017: `async` / `await`
   - ES2020: Optional Chaining (`?.`) / Nullish Coalescing (`??`)
   - ES2022: Class Fields（类字段语法）

4. 额外验证“可否语法降到 ES6”：

```bash
pnpm tsc -p packages/shared/tsconfig.build.json --target ES2015 --noEmit --pretty false
pnpm tsc -p packages/core/tsconfig.build.json --target ES2015 --noEmit --pretty false
```

以上命令可通过，说明“语法可下放”；但这不等于“完美降级”（见文末）。

---

## 构建配置现状

- 根配置使用 `ESNext`：`tsconfig.json:3`
- `packages/core/tsconfig.build.json` 和 `packages/shared/tsconfig.build.json` 未覆盖 `target`
- Rollup 基础配置也未单独覆盖 target：`configs/rollup.config.base.ts:38`

因此默认产物会保留较新语法。

---

## 全量清单（源码 src，按语法特性）

## A) `@ktjs/core` 源码

### A1. ES2022 - Class Fields

1. `packages/core/src/reactive/ref.ts:10`
   - `isKT = true as const;`
2. `packages/core/src/reactive/ref.ts:12`
   - `ktType = KTReactiveType.REF;`
3. `packages/core/src/reactive/ref.ts:17`
   - `private _value: T;`
4. `packages/core/src/reactive/ref.ts:22`
   - `private _onChanges: Array<ReactiveChangeHandler<T>>;`
5. `packages/core/src/reactive/computed.ts:10`
   - `isKT = true as const;`
6. `packages/core/src/reactive/computed.ts:12`
   - `ktType = KTReactiveType.COMPUTED;`
7. `packages/core/src/reactive/computed.ts:17`
   - `private _calculator: () => T;`
8. `packages/core/src/reactive/computed.ts:22`
   - `private _value: T;`
9. `packages/core/src/reactive/computed.ts:27`
   - `private _onChanges: Array<ReactiveChangeHandler<T>> = [];`

> 说明：这些在 TS 中部分是类型字段声明；但当前 `target: ESNext` 构建后会在产物中保留类字段语法（见 dist 清单）。

### A2. ES2020 - Optional Chaining (`?.`)

1. `packages/core/src/reactive/core.ts:9`
   - `export const isKT = <T = any>(obj: any): obj is KTReactive<T> => obj?.isKT;`
2. `packages/core/src/reactive/core.ts:10`
   - `export const isRef = <T = any>(obj: any): obj is KTRef<T> => obj?.ktType === KTReactiveType.REF;`
3. `packages/core/src/reactive/core.ts:11`
   - `export const isComputed = <T = any>(obj: any): obj is KTComputed<T> => obj?.ktType === KTReactiveType.COMPUTED;`
4. `packages/core/src/jsx/fragment.ts:101`
   - `observer?.disconnect();`
5. `packages/core/src/jsx/fragment.ts:139`
   - `observer?.disconnect();`

### A3. ES2020 - Nullish Coalescing (`??`)

1. `packages/core/src/jsx/jsx-runtime.ts:48`
   - `const { children } = props ?? {};`
2. `packages/core/src/jsx/async.ts:21`
   - `props.skeleton ?? (document.createComment('ktjs-suspense-placeholder') as unknown as JSX.Element);`

---

## B) `@ktjs/shared` 源码

### B1. ES2020 - Optional Chaining (`?.`)

1. `packages/shared/src/utils/dom.ts:9`
   - `export const $isNode = (x: any): x is ChildNode => x?.nodeType > 0;`
2. `packages/shared/src/utils/native.ts:18`
   - `export const $isThenable = (o: any): o is Promise<any> => typeof o?.then === 'function';`

### B2. ES2017 - Async/Await

1. `packages/shared/src/utils/misc.ts:34`
   - `export const $forEachAsync = async (`
2. `packages/shared/src/utils/misc.ts:40`
   - `await callback(array[i], i, array);`

---

## 全量清单（发布产物 dist，实际对外代码）

## C) `@ktjs/core` 产物 `packages/core/dist/index.mjs`

### C1. ES2022 - Class Fields

1. `packages/core/dist/index.mjs:204` - `isKT = true;`
2. `packages/core/dist/index.mjs:205` - `ktType = 1 /* KTReactiveType.REF */;`
3. `packages/core/dist/index.mjs:209` - `_value;`
4. `packages/core/dist/index.mjs:213` - `_onChanges;`
5. `packages/core/dist/index.mjs:374` - `isKT = true;`
6. `packages/core/dist/index.mjs:375` - `ktType = 2 /* KTReactiveType.COMPUTED */;`
7. `packages/core/dist/index.mjs:379` - `_calculator;`
8. `packages/core/dist/index.mjs:383` - `_value;`
9. `packages/core/dist/index.mjs:387` - `_onChanges = [];`

### C2. ES2020 - Optional Chaining (`?.`)

1. `packages/core/dist/index.mjs:3` - `const isKT = (obj) => obj?.isKT;`
2. `packages/core/dist/index.mjs:4` - `const isRef = (obj) => obj?.ktType === 1 /* KTReactiveType.REF */;`
3. `packages/core/dist/index.mjs:5` - `const isComputed = (obj) => obj?.ktType === 2 /* KTReactiveType.COMPUTED */;`
4. `packages/core/dist/index.mjs:700` - `observer?.disconnect();`
5. `packages/core/dist/index.mjs:730` - `observer?.disconnect();`

### C3. ES2020 - Nullish Coalescing (`??`)

1. `packages/core/dist/index.mjs:815` - `const { children } = props ?? {};`
2. `packages/core/dist/index.mjs:862` - `let comp = props.skeleton ?? document.createComment('ktjs-suspense-placeholder');`

---

## D) `@ktjs/shared` 产物 `packages/shared/dist/index.mjs`

### D1. ES2020 - Optional Chaining (`?.`)

1. `packages/shared/dist/index.mjs:13` - `const $isThenable = (o) => typeof o?.then === 'function';`
2. `packages/shared/dist/index.mjs:23` - `const $isNode = (x) => x?.nodeType > 0;`

### D2. ES2017 - Async/Await

1. `packages/shared/dist/index.mjs:92` - `const $forEachAsync = async (array, callback) => {`
2. `packages/shared/dist/index.mjs:95` - `await callback(array[i], i, array);`

---

## 未发现的“超过 ES6”语法（已检查）

在 core/shared 的 src + dist 中，未发现以下语法：

- Object spread/rest（ES2018）
- `**` 指数运算符（ES2016）
- `&&=` / `||=` / `??=`（ES2021）
- `for await...of`（ES2018）
- `#private` 私有字段（ES2022）
- `import()` 动态导入（ES2020）
- BigInt 字面量（ES2020）
- Class static block（ES2022）

---

## “能否完美降级到 ES6”最终判断

## 1) 语法可下放

- `tsc --target ES2015` 在这两个包上可通过，说明语法层面可以转译。

## 2) 但不满足“完美降级”

- 当前对外产物本身是 ES2020/ES2022 语法。
- 即便做语法降级，仍有不少非 ES6 运行时 API 依赖（如 `Object.entries`、`Array.prototype.flat`、`Node.remove/replaceWith`、`MutationObserver` 等），老环境仍需 polyfill/shim。

### 最终结论

- 现在：最低 **ES2022**（由 `core` 决定）。
- 想兼容 ES6：可以工程化处理（改 target + 补 polyfill），但这不是“完美、零改动”降级。
