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

// subref 声明
ref: let state = { a: 1 };
subref: let sa = state.a;
// 转换为：const sa = state.subref('a');
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
```

需要注意，如果同一个表达式，比如`a + 1`在多个响应式场景被使用，那么尽量将它们抽取成1个computed，而不是各自为战，以减少开销。

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
  return a;  // 返回 ref 对象 a
}
ref: let result2 = bar();  // result2 是 KTRef<number>，需要用 ref: 接收
let result3 = bar();       // result3 是 number，自动取 .value

// computed:function：返回新的 computed
ref: let b = 2;
computed:function baz() {
  return a + b;  // 返回新的 computed
}
computed: let result4 = baz();  // result4 是 KTComputed<number>
```

需注意，虽然说返回值是`KTComputed<number>`，但在实际的开发过程中，体验和number是一样的。
响应式将会实装在编译后的结果上

## 6. return 和 throw

```ts
// return：转换为 .value
function foo() {
  ref: let a = 1;
  return a;      // 转换为：return a.value;
  return a + 1;  // 转换为：return a.value + 1;
}

// throw：不转换
function bar() {
  ref: let err = new Error('test');
  throw err;  // 保持：throw err;
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
computed: let b = a + 1;  // 能识别 a 是 ref
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

---

# 追问问题

## 追问 1：subref 的嵌套路径如何处理？

规则 1 中只显示了单层 subref：
```ts
subref: let sa = state.a;
// 转换为：const sa = state.subref('a');
```

但如果是嵌套路径呢？
```ts
ref: let state = { user: { name: 'kt' } };
subref: let name = state.user.name;
// 转换为什么？

// A. state.subref('user', 'name')
// B. state.user.subref('name')
// C. 其他？
```

**回答**：
A

---

## 追问 2：JSX 表达式复用的具体实现？

规则 4 中提到"如果同一个表达式在多个响应式场景被使用，那么尽量将它们抽取成 1 个 computed"。

具体如何实现？
```tsx
ref: let a = 1;
ref: let b = 2;

// 场景
<div>{a + b}</div>
<div>{a + b}</div>
<span>{a + b}</span>

// 是转换为：
// const _computed_1 = computed(() => a.value + b.value, [a, b]);
// <div>{_computed_1}</div>
// <div>{_computed_1}</div>
// <span>{_computed_1}</span>
```

这个 `_computed_1` 的命名规则是什么？作用域是什么？

**回答**：
作用域需要至少和a、b之一同级，也就是两者都能访问到。
命名规则可以是`_computed_${n}`，其中 n 是一个递增的数字，确保唯一性。

---

## 追问 3：函数返回值的"体验和 number 一样"是什么意思？

规则 5 中说"虽然说返回值是 `KTComputed<number>`，但在实际的开发过程中，体验和 number 一样。响应式将会实装在编译后的结果上"。

```ts
computed: let result4 = baz();
// result4 是 KTComputed<number>

// 那么：
console.log(result4);     // 输出数字还是 KTComputed 对象？
let x = result4 + 1;      // 如何处理？
console.log(result4 + 1); // JSX 外如何处理？
<div>{result4}</div>       // JSX 内如何处理？
```

"体验和 number 一样"是否意味着编译器会自动处理 `.value` 的添加？

**回答**：
console.log(result4); 会被转化为`console.log(result4.value);`
let x = result4 + 1; 会被转化为`let x = result4.value + 1;`
console.log(result4 + 1); 会被转化为`console.log(result4.value + 1);`
<div>{result4}</div> 不会转化

---

## 追问 4：跨文件导入的 ref 如何识别？

规则 11 提到"编译时记录导出的 reactive 变量"，但具体如何实现？

```ts
// file1.ts
export ref: let a = 1;
export const b = 2;

// file2.ts
import { a, b } from './file1';
ref: let c = 3;
computed: let d = a + b + c;
// 如何知道 a 是 ref，b 不是？
```

编译器是否需要：
- A. 解析 file1.ts 时，记录 `a` 是 ref，`b` 不是
- B. 在 file2.ts 中看到 `import { a }` 时，查询记录知道 a 是 ref
- C. 是否需要导出时加特殊标记（如 `export reactive a`）？

**回答**：
A 只要标记谁是ref，谁是subref，谁是computed即可；
B 是的；
C 不需要标记，因为这样不符合ts的语法。

---

## 追问 5：模板字符串在 JSX 中如何处理？

规则 4 没有提到模板字符串：
```tsx
ref: let a = 1;
ref: let b = 2;

// 场景 A：模板字符串作为 JSX 子元素
<div>`value: ${a}`</div>
// 转换为什么？

// 场景 B：模板字符串在 JSX 表达式中
<div>{`value: ${a}`}</div>
<div>{`value: ${a + b}`}</div>
// 转换为什么？
```

**回答**：
<div>{computed(()=>`value: ${a.value}`,[a])}</div>
<div>{computed(()=>`value: ${a.value + b.value}`,[a,b])}</div>

---

## 追问 6：subref 在 computed 中的使用？

```ts
ref: let state = { a: 1 };
subref: let sa = state.a;

computed: let x = sa + 1;
// sa 是 subref，如何处理？

// 转换为：computed(() => sa.value + 1, [sa]) 吗？
// 还是 subref 有特殊处理？
```

**回答**：
是的，转换为：computed(() => sa.value + 1, [sa]) 

---

## 追问 7：ref:function 返回非 ref 值时如何处理？

```ts
ref: let a = 1;

ref:function foo() {
  return a + 1;  // 返回表达式，不是 ref
}

ref: let result = foo();
// result 是什么？是新的 ref？还是 computed？
// 转换为什么？
```

**回答**：
1、返回被`ref:`标记的表达式时，`return a + 1; `转换为`return ref(a.value + 1); `
2、返回被`computed:`标记的表达式时，`return a + 1; `转换为`return computed(()=> a + 1,[a]); `
3、`ref: let result = foo();`转化为`const result = foo();`，因为foo已经返回了一个ref对象，所以不需要再加ref了。
---

## 追问 8：throw 不转换的原因？

规则 6 说 `throw err` 不转换，但 `return a` 要转换。为什么有这样的差异？

```ts
// return：转换为 .value
function foo() {
  ref: let a = 1;
  return a;  // 转换为：return a.value;
}

// throw：不转换
function bar() {
  ref: let err = new Error('test');
  throw err;  // 保持：throw err;
}
```

原因是什么？
- A. Error 对象应该保持为 ref，方便后续 catch 处理？
- B. throw 和 return 的语义不同？
- C. 其他原因？

**回答**：
你说得对，throw应该转换为throw err.value。

