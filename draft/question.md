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

**回答**：
1、直接使用`{a}`保持原样，kt.js会自动解包；
2、表达式`{a + 1}`转化为`computed(() => a.value + 1, [a])`；
3、属性访问`{a.b}`转化为`computed(() => a.value.b, [a])`，因为a是ref对象

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
