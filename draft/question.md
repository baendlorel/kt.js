# v0.41 标签语法编译规则（已确定）

## 1. 标签语法声明

```ts
// ref 声明
ref: let a = 1;
// 转换为：const a = ref(1);

// computed 声明
ref: let b = 2;
computed: let c = a + b;
// 转换为：const c = computed(() => a.value + b.value, [a, b]);

// subref 声明（单层）
ref: let state = { a: 1 };
subref: let sa = state.a;
// 转换为：const sa = state.subref('a');

// subref 声明（嵌套）
ref: let state = { user: { name: 'kt' } };
subref: let name = state.user.name;
// 转换为：const name = state.subref('user', 'name');
```

## 2. 响应式场景

**只有以下场景是响应式的：**

1. **JS label 标注的场景**：`ref:`, `computed:`, `subref:`
   1. 能被标注的只有变量声明`ref:let a = 1`（表示变量a被标记为ref的）、函数声明`ref: function foo(){...}`（表示返回值是ref的，如果返回了一个已有的ref对象`a`，那么返回语句`return a`将不变。如果函数未被标记，那么此处不是响应式场景，也就会被转化为`return a.value`）。
2. **JSX 表达式中的场景**：`<div>{...}</div>`

**其他场景都不是响应式的**，需要特殊处理。

## 3. 非 JSX 表达式处理

```ts
ref: let a = 1;
ref: let b = 2;

// 变量声明（非标签）
let x = a + b;
// 转换为：let x = a.value + b.value;

// 对象字面量
let obj = { value: a };
// 转换为：let obj = { value: a.value };
// 注意：之后 obj.value 与 a 无关联

// 数组
let arr = [a, b];
// 转换为：let arr = [a.value, b.value];
// 注意：之后 arr 与 a、b 无关联

// 函数参数（全部转换为 .value）
someFunc(a);
someFunc({ value: a });
someFunc([a, b]);
someFunc(`value: ${a}`);
// 分别转换为：
// someFunc(a.value);
// someFunc({ value: a.value });
// someFunc([a.value, b.value]);
// someFunc(`value: ${a.value}`);
```

## 4. JSX 表达式处理

```tsx
ref: let a = 1;
ref: let b = 2;

// 直接使用：保持原样
<div>{a}</div>
// kt.js core 自动解包

// 表达式：转换为 computed
<div>{a + 1}</div>
// 转换为：<div>{computed(() => a.value + 1, [a])}</div>

// 多变量表达式
<div>{a + b}</div>
// 转换为：<div>{computed(() => a.value + b.value, [a, b])}</div>

// 属性访问
<div>{a.someProperty}</div>
// 转换为：<div>{computed(() => a.value.someProperty, [a])}</div>

// 嵌套 JSX
<div>{a ? <span>{b}</span> : <span>{c}</span>}</div>
// 转换为：<div>{computed(() => a.value ? <span>{b}</span> : <span>{c}</span>, [a])}</div>
// 注意：{b} 和 {c} 在 JSX 中会被 kt.js 自动解包，不需要加入依赖数组

// 模板字符串
<div>{`value: ${a}`}</div>
// 转换为：<div>{computed(() => `value: ${a.value}`, [a])}</div>

<div>{`value: ${a + b}`}</div>
// 转换为：<div>{computed(() => `value: ${a.value + b.value}`, [a, b])}</div>
```

**表达式复用优化**：
如果同一个表达式在多个响应式场景被使用，抽取成 1 个 computed：

```tsx
// 源代码
<div>{a + b}</div>
<div>{a + b}</div>
<span>{a + b}</span>

// 转换为（_computed_1 的作用域至少和 a、b 同级）
const _computed_1 = computed(() => a.value + b.value, [a, b]);
<div>{_computed_1}</div>
<div>{_computed_1}</div>
<span>{_computed_1}</span>
```

## 5. 函数返回值

```ts
ref: let a = 1;

// 普通函数：返回 .value
function foo() {
  return a;  // 转换为：return a.value;
}
const result = foo();  // result 是 number

// ref:function：返回 ref 对象
ref:function bar() {
  return a;  // 返回 ref 对象 a，return 语句不变
}
ref: let result2 = bar();  // result2 是 KTRef<number>
let result3 = bar();       // result3 是 number，自动取 .value

// ref:function：返回表达式
ref:function baz() {
  return a + 1;  // 转换为：return ref(a.value + 1);
}
ref: let result4 = baz();  // result4 是 KTRef<number>

// computed:function：返回新 computed
ref: let b = 2;
computed:function qux() {
  return a + b;  // 转换为：return computed(() => a + b, [a]);
}
computed: let result5 = qux();  // result5 是 KTComputed<number>
```

**使用 ref/computed 变量的自动解包**：
当变量被 `ref:` 或 `computed:` 标记时，使用时编译器会自动添加 `.value`：

```ts
computed: let result4 = baz();
// result4 是 KTComputed<number>

console.log(result4);     // 转换为：console.log(result4.value)
let x = result4 + 1;      // 转换为：let x = result4.value + 1
console.log(result4 + 1); // 转换为：console.log(result4.value + 1)
<div>{result4}</div>       // 不转换，JSX 中 kt.js 自动解包
```

## 6. return 和 throw

```ts
// return：转换为 .value
function foo() {
  ref: let a = 1;
  return a;      // 转换为：return a.value;
  return a + 1;  // 转换为：return a.value + 1;
}

// throw：也转换为 .value
function bar() {
  ref: let err = new Error('test');
  throw err;  // 转换为：throw err.value;
}
```

## 7. 重赋值

```ts
ref: let a = 1;
ref: let b = 2;

a = 2;      // 转换为：a.value = 2;
a = b;      // 转换为：a.value = b.value;
a = a + 1;  // 转换为：a.value = a.value + 1;
```

## 8. 允许的使用位置

**允许：**
- 文件顶层
- 块级作用域（if、try、纯块）
- 函数体
- 箭头函数体

**不允许：**
- 函数参数列表
- 函数参数默认值
- 类成员（实例/静态）

## 9. 作用域和依赖收集

```ts
// 搜索整个作用域链
function outer() {
  ref: let a = 1;
  function inner() {
    computed: let c = a + 1;  // 能识别外层的 a
  }
}

// 复杂表达式中的变量判断
ref: let arr = [1, 2, 3];
computed: let c = arr.map(x => x + 1);
// arr 是 ref，需要 .value
// x 是 map 回调参数，是普通变量，不需要处理
// 转换为：
// const c = computed(() => arr.value.map(x => x + 1), [arr]);
```

## 10. 类型注解

```ts
// 保留类型注解
ref: let a: number = 1;
// 转换为：const a = ref<number>(1);

// 暂不支持解构
ref: let { x, y } = point;  // 错误：不支持解构
```

## 11. 导出和导入

```ts
// 导出
export ref: let a = 1;
export { a };  // 导出的是 ref 对象

// 导入：编译时记录导出的 reactive 变量
import { a } from './file';
computed: let b = a + 1;  // 编译器能识别 a 是 ref

// 实现方式：
// 1. 解析导出文件时，记录哪些变量被 ref:/computed:/subref: 标记
// 2. 解析导入文件时，查询记录知道哪些导入的变量是 ref
// 3. 不需要特殊的导出标记（如 export reactive a），符合 TS 语法
```

## 12. 箭头函数中的转换

```ts
ref: let a = 1;

// 箭头函数内：转换为 .value
const foo = () => {
  console.log(a);  // 转换为：console.log(a.value);
  return a + 1;    // 转换为：return a.value + 1;
};

// 闭包：编译时转换
for (let i = 0; i < 3; i++) {
  ref: let x = i;
  setTimeout(() => console.log(x), 100);
}
// 转换为：
// for (let i = 0; i < 3; i++) {
//   const x = ref(i);
//   setTimeout(() => console.log(x.value), 100);
// }
```

## 13. subref 在 computed 中的使用

```ts
ref: let state = { a: 1 };
subref: let sa = state.a;

computed: let x = sa + 1;
// 转换为：const x = computed(() => sa.value + 1, [sa]);
```

## 14. 其他运算符和表达式

```ts
ref: let a = 1;
ref: let b = 2;

// 逻辑运算符
computed: let flag = a && b;
// 转换为：const flag = computed(() => a.value && b.value, [a, b]);

computed: let flag2 = a || b;
// 转换为：const flag2 = computed(() => a.value || b.value, [a, b]);

// 位运算符
computed: let result = a & b;
// 转换为：const result = computed(() => a.value & b.value, [a, b]);

// 可选链
ref: let obj = { nested: { value: 1 } };
computed: let val = obj?.nested?.value;
// 转换为：const val = computed(() => obj.value?.nested?.value, [obj]);

// 空值合并
computed: let val2 = a ?? 0;
// 转换为：const val2 = computed(() => a.value ?? 0, [a]);

// typeof/instanceof
computed: let type = typeof a;
// 转换为：const type = computed(() => typeof a.value, [a]);

computed: let isArr = arr instanceof Array;
// 如果 arr 是 ref，转换为：
// const isArr = computed(() => arr.value instanceof Array, [arr]);

// in 操作符
computed: let hasKey = 'key' in obj;
// 如果 obj 是 ref，转换为：
// const hasKey = computed(() => 'key' in obj.value, [obj]);
```

## 15. 条件语句

```ts
ref: let a = 1;
ref: let b = 2;

// if 语句中的条件
if (a > 0) { }
// 转换为：if (a.value > 0) { }

// switch 语句
switch (a) {
  case 1: break;
}
// 转换为：switch (a.value) { ... }

// 三元表达式（非 JSX）
let x = a > b ? a : b;
// 转换为：let x = a.value > b.value ? a.value : b.value;
```

## 16. async/await

```ts
// async 函数中的 ref
ref: let data = null;

async function fetchData() {
  return a;  // 转换为：return a.value;
}

// await 表达式
ref: let promise = Promise.resolve(1);
computed: let result = await promise;
// 转换为：const result = computed(async () => await promise.value, [promise]);
```

## 17. 生成器函数

```ts
// 生成器中的 ref
ref: let a = 1;

function* gen() {
  yield a;  // 转换为：yield a.value;
  return a;  // 转换为：return a.value;
}
```

## 18. 循环语句

```ts
ref: let arr = [1, 2, 3];
ref: let obj = { a: 1, b: 2 };

// for...of
for (const item of arr) { }
// 转换为：for (const item of arr.value) { }

// for...in
for (const key in obj) { }
// 转换为：for (const key in obj.value) { }

// while
while (arr.length > 0) { }
// 如果 arr 是 ref，转换为：
// while (arr.value.length > 0) { }

// do...while
do { } while (arr.length > 0);
// 如果 arr 是 ref，转换为：
// do { } while (arr.value.length > 0);
```

## 19. try-catch-finally

```ts
// try-catch
ref: let err = null;
try {
  // ...
} catch (e) {
  err = e;  // 转换为：err.value = e;
}

// finally
ref: let cleanup = () => { };
try {
  // ...
} finally {
  cleanup();  // 转换为：cleanup.value();
}
```

## 20. 赋值表达式

```ts
ref: let a = 1;
ref: let b = 2;

// 赋值表达式的右侧
let x = (a = 3);
// 转换为：let x = (a.value = 3);

// 复合赋值
a += 1;
// 转换为：a.value += 1;

a *= b;
// 转换为：a.value *= b.value;

// 自增/自减
a++;
// 转换为：a.value++;

++a;
// 转换为：++a.value;
```

## 21. 其他操作符

```ts
ref: let obj = { a: 1, b: 2 };
ref: let arr = [1, 2, 3];

// delete 操作符
delete obj.a;
// 转换为：delete obj.value.a;

// void 操作符
let x = void arr;
// 转换为：let x = void arr.value;

// 逗号操作符
let y = (a, b);
// 转换为：let y = (a.value, b.value);

// 展开运算符（数组）
let newArr = [...arr];
// 转换为：let newArr = [...arr.value];

// 展开运算符（对象）
let newObj = { ...obj };
// 转换为：let newObj = { ...obj.value };
```

## 22. 剩余参数和解构赋值

```ts
// 函数剩余参数（暂不支持在参数列表使用 ref 标签）
function foo(...args: number[]) { }
// 保持不变

// 数组解构
let [a, b] = arr;  // let [a,b] = arr.value

// 对象解构
let { a, b } = obj; // let { a, b } = obj.value
```

