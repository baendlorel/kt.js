# v0.41 标签语法编译规则细化问题

## JSX 表达式相关

### 1. 多变量混合表达式

```tsx
{a + b + 3}  // a 和 b 都是 ref，如何处理？
{a.value + b}  // 如果用户已经手写了 .value？
```

**问题**：是否解析为 `computed(() => a.value + b.value + 3, [a, b])`？如果用户已手写 `.value` 如何检测和去重？

**回答**：
1、是的，毫无疑问地解析成`computed(() => a.value + b.value + 3, [a, b])`。
2、用户不可能手写a.value。因为语法`ref: let a = 1;`声明的变量a并不是KTRef对象，而是直接的number类型。
是编译器将其转化为ref的。

---

### 2. 非 ref 变量与 ref 混合

```tsx
let normal = 5;
ref: let a = 1;
{a + normal}  // 如何处理？
```

**问题**：是否 `computed(() => a.value + normal, [a])`？如何区分普通变量和 ref 变量？

**回答**：
1、是的。
2、`ref:let a = 1`或者`ref:var a = 'str'`的正是ref对象，规则就是它们用js label标记，且label名为ref、computed、subref等。


---

### 3. 函数调用

```tsx
{someFunction(a)}  // a 是 ref
{a.someMethod()}  // a 是 ref，调用其方法
```

**问题**：
- `someFunction(a)` 是 `someFunction(a.value)` 还是 `someFunction(a)`？
- `a.someMethod()` 是 `a.value.someMethod()` 还是 `a.someMethod()`？

**回答**：
1、`someFunction(a.value)`
2、`a.value.someMethod()`
---

## 非 JSX 上下文

### 4. 普通表达式赋值

```ts
ref: let a = 1;
ref: let b = 2;
let x = a + b;  // x 不是用标签声明的
```

**问题**：`x = a + b` 如何处理？保持原样还是也需要包装成 `computed(() => a.value + b.value, [a, b])`？

**回答**：
只有`computed: let x = a + b`才会被编译器转化为`computed(() => a.value + b.value, [a, b])`。
`let x = a + b`保持原样，编译器不做任何处理。

---

### 5. console.log / 调试

```ts
console.log(a);  // 打印 KTRef 对象还是值？
console.log(a + b);
```

**问题**：
- `console.log(a)` 保持原样打印 KTRef 对象？
- `console.log(a + b)` 转换为 `console.log(computed(() => a.value + b.value, [a, b]).value)`？还是不转换？

**回答**：
都要转换。
而且，会收集所有`a + b`的地方，`const someVariableName = computed(() => a.value + b.value, [a, b])`，然后确保所有的`a + b`都被转化为`someVariableName.value`
原则：同一上下文内，a+b只会被转化为一个computed对象，避免重复创建多个相同的computed对象。

**追问1**："同一上下文" 的定义是什么？

示例：
```ts
function foo() {
  ref: let a = 1;
  ref: let b = 2;
  console.log(a + b);  // 共用一个 computed？
  let x = a + b;        // 这个也共用？还是不转换？
  let y = a + b;        // 这个呢？
}

function bar() {
  ref: let a = 1;
  ref: let b = 2;
  console.log(a + b);   // 和 foo 里的共用吗？还是各自独立？
}
```

**回答1**：
```ts
function foo() {
  ref: let a = 1;
  ref: let b = 2;
  console.log(a + b);  // 生成 computed
  let x = a + b;        // 转变为let x = a.value + b.value。和响应式对象无关
  let y = a + b;        // 转变为let y = a.value + b.value。和响应式对象无关
}

function bar() {
  ref: let a = 1;
  ref: let b = 2;
  console.log(a + b);   // 和 foo 里的不共用，因为两者在不同的块中定义
}
```

**追问2**：console.log 的具体转换方式是什么？

你说 `console.log(a + b)` 会"生成 computed"，具体转换结果是什么？

A. `console.log(computed_value.value)`，其中 computed_value 是预先定义的？
```ts
const _computed_1 = computed(() => a.value + b.value, [a, b]);
console.log(_computed_1.value);
```

B. `console.log(a.value + b.value)`，直接内联计算？
```ts
console.log(a.value + b.value);
```

C. 其他方式？

**回答2**：
不好意思，我搞错了，这种情况下，`console.log(a + b)`
转化为`console.log(a.value + b.value)`

---

### 6. 对象字面量中的 ref

```ts
ref: let a = 1;
let obj = { value: a };  // 如何处理？
```

**问题**：`{ value: a }` 是保持原样还是 `{ value: a }`（存储 KTRef 对象）？

**回答**：
原则：在非响应式场景，也就是：1、不是js label所标注的；2、不是jsx表达式中的；
就保持原样，不做任何处理。
所以，`let obj = { value: a }`其实是`let obj = { value: 1 }`因为a初始值是1

**追问1**：对象字面量中的 ref 是"保持原样"还是"取初始值"？

你的回答提到 `let obj = { value: a }` 其实是 `let obj = { value: 1 }`，这似乎是取
了 a 的初始值。

但如果 a 的值后来改变了，obj 里的 value 会变化吗？

```ts
ref: let a = 1;
let obj = { value: a };  // 这个时刻 a = 1
a = 2;                   // a 变成 2
console.log(obj.value);  // 输出 1 还是 2？
```

A. 输出 1（obj 存储的是 a 的初始值，与 ref 无关）
B. 输出 2（obj 存储的是 ref 对象 a，取值时自动解包）
C. 其他？

**回答1**：
A

**追问2**：如何判断是否在"响应式场景"？这些是响应式场景吗？

```ts
ref: let a = 1;
ref: let b = 2;

let x = a + b;           // 非 JSX，所以不转换？
let y = someFunc(a);     // 函数参数？
let z = { value: a };    // 对象字面量？
let arr = [a, b];        // 数组？
return a;                // return 语句？
throw a;                 // throw 语句？
```

**回答1**：
"响应式场景"包括：
1、js label所标注的场景，如`computed: let x = a + b;`
2、jsx表达式中的场景，如`<div>{a + b}</div>`

其余都不是。
---

## computed 初始化表达式

### 7. 嵌套属性访问

```ts
ref: let state = { user: { name: 'kt' } };
computed: let name = state.user.name;
```

**问题**：转换为 `computed(() => state.value.user.name, [state])`？还是需要特殊处理为 subref？

**回答**：
对的，转化为`computed(() => state.value.user.name, [state])`即可，不需要特殊处理为subref。

---

### 8. 方法调用

```ts
ref: let arr = [1, 2, 3];
computed: let sum = arr.reduce((a, b) => a + b, 0);
```

**问题**：`arr.reduce(...)` 转换为 `arr.value.reduce(...)`？

**回答**：
这里的sum用computed标记了，所以转化为：
`computed(() => arr.value.reduce((a, b) => a + b, 0), [arr])`

---

### 9. 三元表达式 / 逻辑运算

```ts
ref: let a = 1;
ref: let b = 2;
computed: let result = a > b ? a : b;
computed: let flag = a && b;
```

**问题**：这些表达式中的 `a`、`b` 是否都要加 `.value`？

**回答**：
是的，并且要加依赖数组

---

## 边界情况

### 10. 循环/条件中的标签声明

```ts
for (let i = 0; i < 10; i++) {
  ref: let x = i;
}
```

**问题**：
- 这种声明是否允许？
- 每次迭代的 `x` 是独立的 KTRef 实例？
- 闭包问题如何处理？

**回答**：
1、允许，但实际上没什么意义，即便是vue、react中也没有人会这样写代码
2、每次迭代的x是独立的KTRef实例。
3、闭包问题请你详细描述场景举例，我将会详细说明。

**追问1**：闭包场景具体行为是什么？

```ts
// 场景 A：定时器闭包
for (let i = 0; i < 3; i++) {
  ref: let x = i;
  setTimeout(() => console.log(x), 100);
}
// 期望输出：0, 1, 2 还是 2, 2, 2？

// 场景 B：事件监听闭包
for (let i = 0; i < 3; i++) {
  ref: let x = i;
  document.getElementById(`btn-${i}`).onclick = () => console.log(x);
}

// 场景 C：嵌套函数
for (let i = 0; i < 3; i++) {
  ref: let x = i;
  function inner() {
    console.log(x);
  }
  inner();
}
```

**回答1**：
场景A:输出0，1，2

场景B：点击这些button分别输出0，1，2，即 console.log(x.value)

场景C：每次循环都是新的，相当于const x=ref(i)

**追问2**：场景B 中的 `console.log(x.value)` 是编译时转换还是运行时行为？

如果是编译时转换，那么 `() => console.log(x)` 会变成 `() => console.log(x.value)`？
如果是运行时行为，是指 kt.js 的 core 包会自动处理 `x` 的输出？

```ts
// 场景 B 代码
for (let i = 0; i < 3; i++) {
  ref: let x = i;
  document.getElementById(`btn-${i}`).onclick = () => console.log(x);
}

// 编译后是这样吗？
for (let i = 0; i < 3; i++) {
  const x = ref(i);
  document.getElementById(`btn-${i}`).onclick = () => console.log(x.value);
}
```

**回答2**：
是编译时转换。是的

---

### 11. 解构和类型注解

```ts
ref: let a: number = 1;
ref: let { x, y } = point;  // 是否支持？
```

**问题**：
- 类型注解 `: number` 如何处理？保留还是移除？
- 解构语法是否支持？不支持如何报错？

**回答**：
1、类型注解保留，因为这只是初步处理；
2、暂不支持解构

---

### 12. subref 标签语义

```ts
ref: let state = { a: 1, b: 2 };
subref: let sa = state.a;
```

**问题**：`subref:` 是创建：
- A. `state.subref('a')` - 可写子引用，修改 `sa.value` 会同步到 `state.value.a`
- B. `computed(() => state.value.a, [state])` - 只读计算属性

**回答**：
A

---

### 13. JSX 中直接使用 vs 表达式

```tsx
<div>{a}</div>        // 直接使用 ref
<div>{a + 1}</div>    // 表达式
<div>{a.b}</div>      // 属性访问
```

**问题**：区分规则是什么？
- `{a}` 直接使用 → 保持 `{a}`（kt.js 自动解包）
- `{a + 1}` 表达式 → `computed(() => a.value + 1, [a])`
- `{a.b}` 属性访问 → ？

**追问1**：Q14 嵌套 JSX 中依赖数组的完整性？

你说 Q14 的依赖数组只有 `[a]`：
```tsx
<div>{computed(()=>a.value? <span>{b}</span> : <span>{c}</span>,[a])}</div>
```
但 `b` 和 `c` 也是 ref，为什么不是 `[a, b, c]`？JSX 中的 `{b}` 和 `{c}` 是否会被 kt.js 自动解包，所以不需要加入依赖数组？

**回答1**：
你说的对，`<span>{b}</span>`是大括号中直接写了一个响应式对象的情况，这种情况，kt.js的core子包会自动处理它。

**追问2**：Q15 模板字符串中的依赖收集？

Q15 中表达式是 `a + b`，依赖是 `[a, b]`：
```tsx
<div>{computed(()=>`value: ${a + b}`,[a,b])}</div>
```
这里 `a + b` 在计算时需要 `a.value + b.value`，依赖收集是如何识别这两个 ref 的？

**回答2**：
这里的a+b可以往上搜索到`ref:let a = 1;` 或者是其他的`computed:let b = a+1`这样的地方，
就可以知道a和b是否为ref了；

**追问3**：如何"往上搜索"判断 ref？跨作用域如何处理？

你说"往上搜索"来判断是否为 ref，这个搜索的范围是什么？

```ts
// 场景 A：同作用域
ref: let a = 1;
computed: let c = a + b;  // 搜索到 a 是 ref，b 不是

// 场景 B：跨作用域
function outer() {
  ref: let a = 1;
  function inner() {
    computed: let c = a + b;  // 能搜索到外层的 a 吗？
  }
}

// 场景 C：跨文件
// file1.ts
export ref: let a = 1;

// file2.ts
import { a } from './file1';
computed: let c = a + b;  // 能识别导入的 a 是 ref 吗？

// 场景 D：复杂表达式
computed: let c = arr.map(x => x + 1);  // arr 是 ref，但 x 是普通变量
```

搜索规则是：
- A. 只搜索当前作用域（块级/函数级）？
- B. 搜索整个作用域链？
- C. 需要类型信息辅助？

**回答3**：
需要搜索整个作用域链；
场景D：
```tsx
ref: let arr = [1,2,3];
computed: let c = arr.map(x => x + 1) 
```
会编译成：
```tsx
const arr = ref([1,2,3]);
const c = computed(() => arr.value.map(x => x + 1), [arr]);
```

---

### 14. 嵌套 JSX 表达式

```tsx
<div>{a ? <span>{b}</span> : <span>{c}</span>}</div>
```

**问题**：三元表达式中嵌套 JSX，内部 ref 如何处理？

**回答**：
如果a，b,c都是ref标记过的话，那么：
```tsx
<div>{computed(()=>a.value? <span>{b}</span> : <span>{c}</span>,[a])}</div>
```

---

### 15. 模板字符串

```tsx
<div>`value: ${a}`</div>
<div>{`value: ${a + b}`}</div>
```

**问题**：
- `` `value: ${a}` `` 如何处理？
- `` `value: ${a + b}` `` 如何处理？

**回答**：
如果a和b都是ref标记过的话，那么：

```tsx
<div>{computed(()=>`value: ${a}`,[a])} </div>
<div>{computed(()=>`value: ${a + b}`,[a,b])}</div>
```

---

## 依赖收集相关

### 16. 如何识别 ref 变量

```ts
ref: let a = 1;
let b = 2;  // 普通 let
computed: let c = a + b;
```

**问题**：
- 依赖收集时如何区分 `a`（ref）和 `b`（普通变量）？
- 是否 `computed(() => a.value + b, [a])`？

**回答**：
1、通过js label来区分，被js label `ref:`标记的变量就是ref对象，其他的就是普通变量。
2、`computed(() => a.value + b, [a])`是正确的。

**追问1**：导入的 ref 变量如何识别？

如果 ref 变量是从其他文件导入的，如何识别？

```ts
// file1.ts
export ref: let a = 1;

// file2.ts
import { a } from './file1';
ref: let b = 2;
computed: let c = a + b;  // 如何知道 a 是 ref？
```

是通过：
- A. 导入声明时的特殊标记（如 `import { a as ref } from './file1'`）？
- B. 类型信息推断（a 的类型是 KTRef）？
- C. 其他机制？

**回答1**：
不知道，因为我对编译器不了解，编译器都是AI写的。
但我有一个不成熟的想法是：首先在编译的时候就把所有文件里导出了什么reactive变量都记录下来；


---

### 17. 动态属性访问

```ts
ref: let state = { a: 1, b: 2 };
ref: let key = 'a';
computed: let value = state[key];
```

**问题**：`state[key]` 如何处理？能否收集到 `state` 和 `key` 作为依赖？

**回答**：
 `state` 和 `key` 都是依赖，转化为：
```ts
computed(() => state.value[key.value], [state, key])
``` 

---

## 类型系统

### 18. 标签变量的类型声明

```ts
ref: let a: KTRef<number> = 1;
ref: let a: number = 1;
```

**问题**：
- 类型注解是保留 `KTRef<number>` 还是转换为底层类型 `number`？
- 用户写 `number` 时是否自动包装为 `KTRef<number>`？

**回答**：
用户写的是第二种，`ref: let a: number = 1;`；
编译器将其转化为`const a = ref<number>(1);`.

---

### 19. computed 返回类型推导

```ts
ref: let a: number = 1;
ref: let b: string = '2';
computed: let c = a + b;  // string | number?
```

**问题**：类型推导规则与普通 TypeScript 是否一致？

**回答**：
无需在意，typescript本来是什么就是什么

---

## 其他

### 20. 与现有代码互操作

```ts
// 旧代码
const oldRef = ref(1);

// 新代码
ref: let newRef = 2;
computed: let sum = oldRef + newRef;
```

**问题**：混合使用时如何保证类型一致和行为正确？

**回答**：
禁止混用。我的目标是抛弃旧代码。

---

### 21. 标签语法的变量重赋值

```ts
ref: let a = 1;
a = 2;  // 是否允许？语义是 a.value = 2 还是 a = ref(2)？
```

**问题**：
- 是否允许重赋值？
- 如果允许，语义是什么？

**回答**：
`a=2`将转化为`a.value=2`；
也就是说a的ref将不会改变。实际上，vue等其他框架中也几乎没有要改变ref对象本身场景

**追问1**：ref 之间的重赋值如何处理？

```ts
ref: let a = 1;
ref: let b = 2;
a = b;       // 转换为 a.value = b 还是 a.value = b.value？
a = a + 1;   // 转换为 a.value = a.value + 1 吗？
```

**回答1**：
`a=b` => `a.value = b.value`
`a=a+1` => `a.value = a.value + 1`

---

### 22. 标签语法的变量提升

```ts
console.log(a);  // TDZ?
ref: let a = 1;
```

**问题**：标签语法的变量是否遵循 TDZ（Temporal Dead Zone）规则？

**回答**：
是的，遵循TDZ规则，不能在声明之前访问。
其实所有的ref: let a = 1;都被转化为const a = ref(1);所以它的行为和const完全一样。
不需要专门考虑此问题。

---

### 23. 导出标签语法变量

```ts
export ref: let a = 1;
export { a };
```

**问题**：导出语法如何处理？

**回答**：
依然保持`export { a };`不变，也就是说导出的这个a将是一个ref对象。

---

### 24. 默认参数中的标签语法

```ts
function foo(x = ref: let a = 1) { }  // 是否允许？
```

**问题**：是否允许在哪些位置使用标签语法？

**回答**：
不允许。
只允许在外面用。

**追问1**："外面"的具体定义是什么？这些位置允许吗？

```ts
// 允许：文件顶层
ref: let a = 1;

// 这些允许吗？
if (true) {
  ref: let a = 1;  // 块级作用域内？
}

{
  ref: let a = 1;  // 纯块内？
}

function foo() {
  ref: let a = 1;  // 函数体？
}

try {
  ref: let a = 1;  // try 块内？
} catch {}

// 这些不允许？
function foo(x = ref: let a = 1) {}  // 参数默认值
function foo(ref: let a = 1) {}       // 参数列表
class Foo { ref: let a = 1; }         // 类成员
() => { ref: let a = 1; }            // 箭头函数体？
```

**回答1**：
1、这些允许吗？ -> 把它们都转化为const a = ref(1);，如果转换后有语法错误，那么说明不行；
2、这些不允许吗？ -> 是的，不允许。

**追问2**：箭头函数体的处理？

你把 `() => { ref: let a = 1; }` 归入"不允许"，但箭头函数体转换为 `() => { const a = ref(1); }` 是合法的 JavaScript 语法，为什么不允许？

是因为：
- A. 技术上可以实现，但为了简化暂时不支持？
- B. 有其他原因（如作用域复杂度）？
- C. 其他？

```ts
// 这个可以吗？
const foo = () => {
  ref: let a = 1;
  return a + 1;
};

// 转换为
const foo = () => {
  const a = ref(1);
  return a.value + 1;
};
```

**回答2**：
你说的对，这种情况现在允许了。

---

### 25. 类成员中的标签语法

```ts
class Foo {
  ref: let a = 1;  // 是否允许？
  static ref: let b = 2;
}
```

**问题**：类成员（实例/静态）是否支持标签语法？

**回答**：
不允许。
