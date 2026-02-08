# 数组元素自动替换方案设计

## 问题分析

当前 KT.js 中，`KTFor` 组件已经实现了基于 key 的列表渲染优化，但其设计存在以下局限性：

1. **专用性过强**：`KTFor` 专门用于数据到元素的映射场景，无法直接处理静态或动态的元素数组
2. **API 不够通用**：`list`、`map`、`key` 参数设计针对数据映射，不适用于直接的元素数组管理
3. **与 ref 模式不一致**：普通 `ref<HTMLElement>` 可以自动替换 DOM 节点，但 `ref<HTMLElement[]>` 无法自动更新多个元素

我们需要一个更通用的方案，能够：
- 像普通 `ref` 一样自动替换，但针对元素数组
- 兼容现有 `KTFor` 的使用场景
- 支持最小 DOM 更新和 key 优化
- 符合 KT.js "零强制重渲染" 的哲学

## 设计目标

1. **响应式数组管理**：创建可以响应式管理 `HTMLElement[]` 的机制
2. **自动 DOM 更新**：数组变化时自动更新 DOM，无需手动调用 `redraw()`
3. **最小化操作**：基于 key 的 diff 算法，执行最少的 DOM 操作
4. **API 一致性**：与现有的 `ref`、`computed`、`surfaceRef` 保持一致的 API 风格
5. **渐进增强**：先实现基础数组替换，再逐步加入 key 优化

## 设计方案

### 方案一：增强型 Fragment 组件

创建一个通用的 `Fragment` 组件，可以管理任意子元素数组：

```typescript
interface FragmentProps {
  children: HTMLElement[] | KTReactive<HTMLElement[]>;
  key?: (element: HTMLElement, index: number, array: HTMLElement[]) => any;
}

function Fragment(props: FragmentProps): JSX.Element
```

**特点**：
- 返回注释锚点节点，子元素插入在锚点之后
- 当 `children` 变化时自动更新 DOM
- 支持可选的 `key` 函数进行优化（默认使用元素引用或索引）
- 与 `KTFor` 共享核心 diff 逻辑

**使用示例**：
```tsx
const children = ref([<div>A</div>, <div>B</div>]);
const fragment = <Fragment children={children} />;
document.body.appendChild(fragment);

// 自动更新
children.value = [<div>C</div>, <div>D</div>];
```

### 方案二：arrayRef 工具函数

创建一个 `arrayRef` 函数，返回增强的 `KTRef<HTMLElement[]>`：

```typescript
function arrayRef(
  elements: HTMLElement[],
  options?: {
    parent?: HTMLElement;
    anchor?: Comment;
    key?: (element: HTMLElement, index: number) => any;
  }
): {
  ref: KTRef<HTMLElement[]>;
  anchor: Comment;
  redraw: () => void;
}
```

**特点**：
- 返回包含 `ref`、`anchor` 和 `redraw` 方法的对象
- `ref.value` 设置新数组时自动更新 DOM
- 可指定父容器或使用默认的文档片段
- 可以作为 `KTFor` 和 `Fragment` 的内部实现

**使用示例**：
```tsx
const { ref: children, anchor } = arrayRef([<div>A</div>, <div>B</div>]);
document.body.appendChild(anchor);

// 自动更新 DOM
children.value = [<div>C</div>, <div>D</div>];
```

### 方案三：FragmentRef 类

创建 `FragmentRef` 类，扩展 `KTRef<HTMLElement[]>` 的功能：

```typescript
class FragmentRef extends KTRef<HTMLElement[]> {
  readonly anchor: Comment;
  private nodeMap: Map<any, HTMLElement>;

  constructor(
    elements: HTMLElement[],
    options?: {
      key?: (element: HTMLElement, index: number) => any;
    }
  );

  // 重写 set value 以执行 DOM 更新
  set value(newElements: HTMLElement[]);

  // 手动触发更新
  redraw(): void;

  // 获取当前 DOM 中的子元素
  get children(): HTMLElement[];
}
```

## 推荐方案：方案一 + 方案二组合

结合两种方案的优点：

1. **对外提供 `Fragment` 组件**：符合 JSX 使用习惯，易于理解
2. **内部使用 `arrayRef` 实现**：提供底层 API，供 `KTFor` 和其他组件使用
3. **共享 diff 核心逻辑**：避免代码重复

### 架构设计

```
                  +----------------+
                  |    Diff 核心   |
                  | (基于key的算法) |
                  +-------+--------+
                          |
          +---------------+---------------+
          |                               |
  +-------+-------+           +-----------+---------+
  |   arrayRef    |           |      Fragment      |
  | (底层工具函数) |           |    (JSX组件接口)   |
  +-------+-------+           +-----------+---------+
          |                               |
          +---------------+---------------+
                          |
                  +-------+-------+
                  |     KTFor     |
                  | (基于Fragment) |
                  +---------------+
```

### 核心实现细节

#### 1. 锚点机制
- 使用 `document.createComment('kt-fragment')` 作为锚点
- 所有子元素插入在锚点之后
- 锚点携带 `__kt_fragment_list__` 属性存储当前元素数组

#### 2. 响应式集成
```typescript
const childrenRef = toReactive(props.children, redraw);
```
- 使用现有的 `toReactive` 将数组包装为响应式
- 注册 `redraw` 作为变化监听器
- 支持普通数组和响应式数组

#### 3. Diff 算法（简化版，先不优化）
```typescript
function simpleArrayDiff(
  oldElements: HTMLElement[],
  newElements: HTMLElement[],
  parent: Node,
  anchor: Comment
): void {
  // 移除所有旧元素
  oldElements.forEach(el => el.remove());

  // 插入所有新元素
  const fragment = document.createDocumentFragment();
  newElements.forEach(el => fragment.appendChild(el));
  parent.insertBefore(fragment, anchor.nextSibling);
}
```

#### 4. 带 key 优化的 Diff 算法（未来扩展）
- 复用 `KTFor` 中的 `getSequence` 算法
- 基于 key 识别元素的移动、添加、删除
- 执行最小 DOM 操作

### API 设计

#### Fragment 组件
```typescript
export interface FragmentProps {
  /** 子元素数组，支持响应式 */
  children: HTMLElement[] | KTReactive<HTMLElement[]>;

  /** 可选：元素key函数，用于优化更新 */
  key?: (element: HTMLElement, index: number, array: HTMLElement[]) => any;

  /** 可选：ref引用，获取锚点节点 */
  ref?: KTRef<JSX.Element>;
}

export function Fragment(props: FragmentProps): JSX.Element;
```

#### arrayRef 工具函数
```typescript
export interface ArrayRefOptions {
  /** 父容器元素，如果提供则自动插入 */
  parent?: HTMLElement;

  /** 锚点注释节点，如果不提供则自动创建 */
  anchor?: Comment;

  /** 元素key函数 */
  key?: (element: HTMLElement, index: number) => any;

  /** 是否自动插入到父容器 */
  autoMount?: boolean;
}

export interface ArrayRefResult {
  /** 响应式引用，value 为元素数组 */
  ref: KTRef<HTMLElement[]>;

  /** 锚点注释节点 */
  anchor: Comment;

  /** 手动触发重绘 */
  redraw: () => void;

  /** 销毁并清理DOM */
  destroy: () => void;
}

export function arrayRef(
  initialElements: HTMLElement[],
  options?: ArrayRefOptions
): ArrayRefResult;
```

### 使用示例

#### 示例1：基础 Fragment 使用
```tsx
import { Fragment, ref } from 'kt.js';

// 响应式子元素数组
const children = ref([
  <div class="item">Item 1</div>,
  <div class="item">Item 2</div>
]);

// 创建 Fragment
const fragment = <Fragment children={children} />;
document.getElementById('app').appendChild(fragment);

// 更新数组，自动更新DOM
children.value = [
  <div class="item">Item A</div>,
  <div class="item">Item B</div>,
  <div class="item">Item C</div>
];
```

#### 示例2：带 key 优化的 Fragment
```tsx
const children = ref([
  <div key="a">A</div>,
  <div key="b">B</div>
]);

const fragment = <Fragment
  children={children}
  key={(el) => el.getAttribute('key')}
/>;

// 移动元素位置，只执行DOM移动操作
children.value = [
  <div key="b">B</div>,
  <div key="a">A</div>
];
```

#### 示例3：arrayRef 底层使用
```typescript
import { arrayRef } from '@ktjs/core/jsx';

const { ref: childrenRef, anchor } = arrayRef([
  document.createElement('div'),
  document.createElement('span')
], {
  parent: document.body,
  key: el => el.tagName
});

// 更新数组
childrenRef.value = [
  document.createElement('p'),
  document.createElement('div')
];
```

#### 示例4：KTFor 基于 Fragment 重构
```typescript
export function KTFor<T>(props: KTForProps<T>): KTForElement {
  const { list, map, key = (item: T) => item } = props;

  // 将数据列表转换为元素数组
  const elements = computed(() => {
    const listValue = deref(list);
    return listValue.map((item, index) => map(item, index, listValue));
  }, [list]);

  // 使用 Fragment 渲染
  return <Fragment
    children={elements}
    key={(el, index) => {
      const listValue = deref(list);
      return key(listValue[index], index, listValue);
    }}
    ref={props.ref}
  />;
}
```

## 实现步骤

### 第一阶段：基础数组替换
1. 实现 `simpleArrayDiff` 函数，支持基础数组替换
2. 实现 `arrayRef` 工具函数，支持自动 DOM 更新
3. 测试基础功能

### 第二阶段：Fragment 组件
1. 基于 `arrayRef` 实现 `Fragment` 组件
2. 支持 JSX 语法
3. 与现有类型系统集成

### 第三阶段：key 优化
1. 实现带 key 的 diff 算法
2. 复用 `KTFor` 的 `getSequence` 算法
3. 性能优化

### 第四阶段：KTFor 重构
1. 基于 `Fragment` 重构 `KTFor`
2. 保持向后兼容
3. 性能测试

## 兼容性考虑

### 与现有系统的兼容
1. **类型兼容**：`Fragment` 返回 `JSX.Element`，与现有组件类型兼容
2. **响应式系统兼容**：使用 `toReactive` 包装数组，与现有响应式系统集成
3. **DOM 操作兼容**：使用标准 DOM API，无副作用

### 性能影响
1. **初始渲染**：与直接创建元素相比，增加了一个注释节点
2. **更新性能**：基础版本使用简单替换，O(n) 复杂度；优化版本使用 key diff，接近 O(n log n)
3. **内存占用**：维护 nodeMap 和锚点引用

## 总结

本方案提出了一种符合 KT.js 哲学的数组元素自动替换机制，通过 `Fragment` 组件和 `arrayRef` 工具函数，实现了：

1. **响应式数组管理**：像普通 `ref` 一样自动更新 DOM
2. **最小 DOM 操作**：支持 key 优化的 diff 算法
3. **API 一致性**：与现有系统无缝集成
4. **渐进增强**：从简单实现开始，逐步加入优化

该方案不仅可以用于 `KTFor` 和 `Fragment` 的编写，还为未来更复杂的组件组合提供了基础架构。符合 KT.js "零强制重渲染，直接 DOM 操作" 的核心哲学，同时提供了现代化的开发体验。