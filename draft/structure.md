# KT.js 架构设计：复杂元素创建场景分析

## 当前架构分析

### 现有的元素创建方式

1. **基础 h 函数**

   ```ts
   h('div', { class: 'container' }, 'Hello World');
   ```

2. **预绑定别名**

   ```ts
   div({ class: 'container' }, 'Hello World');
   span('text-content');
   ```

3. **增强属性**
   - `isKT`: 标识KT元素
   - `kid`: 唯一ID
   - `ktext`: 文本内容操作
   - `kchildren`: 子元素操作
   - `kon/koff`: 事件处理
   - `kmount`: 挂载操作

## 复杂元素创建场景分析

### 1. 循环渲染场景 (已知需求)

**数组映射创建元素**

```ts
// 当前实现方式 (繁琐)
const items = ['apple', 'banana', 'orange'];
const listItems = items.map((item) => li({}, item));
ul({}, listItems);

// 建议API设计
// 方案A: 专用函数
const kfor = <T>(
  items: T[],
  renderFn: (item: T, index: number) => HTMLKEnhancedElement,
  containerTag: string = 'div'
) => {
  const container = h(containerTag);
  container.kchildren = items.map(renderFn);
  return container;
};

// 使用
kfor(items, (item, index) => li({}, item), 'ul');

// 方案B: h函数扩展
h.for = kfor;
```

### 2. 条件渲染场景

**基于条件显示不同元素**

```ts
// 当前实现方式
const conditionalElement = condition
  ? h('div', {}, 'Show when true')
  : h('span', {}, 'Show when false');

// 建议API设计
const kif = (
  condition: boolean,
  trueBranch: () => HTMLKEnhancedElement,
  falseBranch?: () => HTMLKEnhancedElement
) => {
  return condition ? trueBranch() : falseBranch?.() || h('div', { style: 'display: none' });
};

// 使用
kif(
  isLoggedIn,
  () => div({}, 'Welcome back!'),
  () => button({}, 'Login')
);
```

### 3. 模板/组件复用场景

**可复用的组件模式**

```ts
// 建议API设计
const kcomponent = <T extends object>(template: (props: T) => HTMLKEnhancedElement) => {
  return (props: T) => template(props);
};

// 使用
const Card = kcomponent<{ title: string; content: string }>((props) =>
  div({ class: 'card' }, [h('h3', {}, props.title), p({}, props.content)])
);

const cardInstance = Card({ title: 'Hello', content: 'World' });
```

### 4. 异步内容加载场景

**延迟加载和异步数据**

```ts
// 建议API设计
const kasync = <T>(
  loader: () => Promise<T>,
  renderer: (data: T) => HTMLKEnhancedElement,
  placeholder?: HTMLKEnhancedElement
) => {
  const container = placeholder || div({}, 'Loading...');

  loader().then((data) => {
    const content = renderer(data);
    container.kchildren = [content];
  });

  return container;
};

// 使用
kasync(
  () => fetch('/api/user').then((res) => res.json()),
  (user) => div({}, `Hello ${user.name}`),
  div({}, 'Loading user...')
);
```

### 5. 表单构建场景

**动态表单生成**

```ts
// 建议API设计
interface FormField {
  type: 'text' | 'email' | 'password' | 'select' | 'textarea';
  name: string;
  label: string;
  options?: string[]; // for select
  required?: boolean;
}

const kform = (fields: FormField[], onSubmit?: (data: FormData) => void) => {
  const formElement = form({});

  fields.forEach((field) => {
    const fieldContainer = div({ class: 'field' });
    fieldContainer.kchildren = [label({ for: field.name }, field.label), createFieldInput(field)];
    formElement.kchildren = [...(formElement.kchildren as any[]), fieldContainer];
  });

  if (onSubmit) {
    formElement.kon('submit', (e) => {
      e.preventDefault();
      onSubmit(new FormData(formElement));
    });
  }

  return formElement;
};
```

### 6. 布局系统场景

**网格和弹性布局辅助**

```ts
// 建议API设计
const kgrid = (items: HTMLKEnhancedElement[], options: { columns?: number; gap?: string } = {}) => {
  return div(
    {
      class: 'k-grid',
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${options.columns || 3}, 1fr)`,
        gap: options.gap || '1rem',
      },
    },
    items
  );
};

const kflex = (
  items: HTMLKEnhancedElement[],
  direction: 'row' | 'column' = 'row',
  options: { justify?: string; align?: string; gap?: string } = {}
) => {
  return div(
    {
      class: 'k-flex',
      style: {
        display: 'flex',
        flexDirection: direction,
        justifyContent: options.justify || 'flex-start',
        alignItems: options.align || 'stretch',
        gap: options.gap || '0',
      },
    },
    items
  );
};
```

### 7. 事件驱动的动态内容场景

**响应式数据绑定**

```ts
// 建议API设计
class KSignal<T> {
  private _value: T;
  private _subscribers: Set<(value: T) => void> = new Set();

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  get value() {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
    this._subscribers.forEach((fn) => fn(newValue));
  }

  subscribe(fn: (value: T) => void) {
    this._subscribers.add(fn);
    return () => this._subscribers.delete(fn);
  }
}

const kreactive = <T>(signal: KSignal<T>, renderer: (value: T) => HTMLKEnhancedElement) => {
  let currentElement = renderer(signal.value);

  signal.subscribe((newValue) => {
    const newElement = renderer(newValue);
    currentElement.replaceWith(newElement);
    currentElement = newElement;
  });

  return currentElement;
};
```

### 8. 复杂嵌套结构场景

**深层嵌套和树形结构**

```ts
// 建议API设计
interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
}

const ktree = (
  nodes: TreeNode[],
  nodeRenderer?: (node: TreeNode, depth: number) => HTMLKEnhancedElement
) => {
  const defaultRenderer = (node: TreeNode, depth: number) =>
    div(
      {
        class: `tree-node depth-${depth}`,
        'data-node-id': node.id,
      },
      [span({}, node.label), ...(node.children ? [ktree(node.children, nodeRenderer)] : [])]
    );

  const renderer = nodeRenderer || defaultRenderer;

  return ul(
    { class: 'k-tree' },
    nodes.map((node) => li({}, renderer(node, 0)))
  );
};
```

### 9. 动画和过渡场景

**元素生命周期动画**

```ts
// 建议API设计
const kanimated = (
  element: HTMLKEnhancedElement,
  animations: {
    enter?: Keyframe[] | PropertyIndexedKeyframes;
    exit?: Keyframe[] | PropertyIndexedKeyframes;
    options?: KeyframeAnimationOptions;
  }
) => {
  // 增强元素的进入和退出动画
  const originalKmount = element.kmount;
  element.kmount = function (target) {
    const result = originalKmount.call(this, target);
    if (animations.enter) {
      this.animate(animations.enter, animations.options);
    }
    return result;
  };

  // 添加动画移除方法
  (element as any).kRemoveAnimated = () => {
    if (animations.exit) {
      const animation = element.animate(animations.exit, animations.options);
      animation.onfinish = () => element.remove();
    } else {
      element.remove();
    }
  };

  return element;
};
```

### 10. 虚拟滚动场景

**大数据量列表优化**

```ts
// 建议API设计
const kvirtualList = <T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  renderItem: (item: T, index: number) => HTMLKEnhancedElement
) => {
  const container = div({
    class: 'k-virtual-list',
    style: {
      height: `${containerHeight}px`,
      overflow: 'auto',
    },
  });

  // 虚拟滚动逻辑
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 2;
  let scrollTop = 0;

  const updateVisibleItems = () => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(startIndex + visibleCount, items.length);

    const visibleItems = items
      .slice(startIndex, endIndex)
      .map((item, i) => renderItem(item, startIndex + i));

    container.kchildren = visibleItems;
  };

  container.kon('scroll', (e) => {
    scrollTop = (e.target as HTMLElement).scrollTop;
    updateVisibleItems();
  });

  updateVisibleItems();
  return container;
};
```

## 建议的API架构扩展

### 1. 命名空间组织

```ts
// src/advanced/index.ts
export const KT = {
  // 基础创建
  h,

  // 流程控制
  for: kfor,
  if: kif,

  // 组件系统
  component: kcomponent,

  // 异步处理
  async: kasync,

  // 布局系统
  grid: kgrid,
  flex: kflex,

  // 数据绑定
  reactive: kreactive,
  signal: (value: any) => new KSignal(value),

  // 复杂结构
  tree: ktree,
  form: kform,
  virtualList: kvirtualList,

  // 动画
  animated: kanimated,
};
```

### 2. 插件系统设计

```ts
// src/plugin/index.ts
interface KTPlugin {
  name: string;
  install: (KT: typeof import('../index.js')) => void;
}

const use = (plugin: KTPlugin) => {
  plugin.install(KT);
};

// 使用
KT.use(AnimationPlugin);
KT.use(FormValidationPlugin);
```

### 3. 类型安全增强

```ts
// 为复杂场景提供更好的类型推断
type InferElementType<T> = T extends (infer U)[]
  ? U extends HTMLKEnhancedElement
    ? HTMLKEnhancedElement
    : never
  : never;
```

## 总结

基于分析，KT.js 应该扩展以下高级功能：

1. **循环渲染** (`kfor`) - 处理数组数据
2. **条件渲染** (`kif`) - 处理条件逻辑
3. **组件复用** (`kcomponent`) - 模板模式
4. **异步加载** (`kasync`) - 处理异步数据
5. **表单构建** (`kform`) - 动态表单生成
6. **布局系统** (`kgrid`, `kflex`) - 样式辅助
7. **响应式数据** (`kreactive`, `KSignal`) - 数据绑定
8. **树形结构** (`ktree`) - 复杂嵌套
9. **动画系统** (`kanimated`) - 生命周期动画
10. **虚拟滚动** (`kvirtualList`) - 性能优化

这些扩展将保持KT.js的"最小重绘"理念，提供声明式API的同时保持对DOM的直接控制。
