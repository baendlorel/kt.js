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
