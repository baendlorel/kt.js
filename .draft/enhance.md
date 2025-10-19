# HTML Elements Enhancement Feature Matrix

## 概述

这个文档分析了不同 HTML 元素需要的特殊增强特性。当前 KT.js 对所有元素使用相同的增强（`ktext`, `kchildren`, `kon`, `koff`, `kmount`），但实际上不同元素有不同的需求和限制。

## 当前问题

1. **无效的文本节点处理**: 某些元素（如 `<br>`, `<img>`, `<input>`）添加文本节点不会产生任何效果，但仍然被赋予了 `ktext` 属性
2. **缺失的表单控制**: 表单元素需要 `kvalue`, `kchecked` 等特殊属性来处理状态
3. **无意义的子元素管理**: void 元素不能有子元素，但仍然有 `kchildren` 属性

## 元素分类与所需特性

### 1. 无文本节点元素 (NoTextNodeTag)

这些元素添加文本节点无效，应该移除 `ktext` 属性。

**元素列表:**

- **Void 元素**: `area`, `base`, `br`, `embed`, `hr`, `img`, `input`, `link`, `meta`, `param`, `wbr`
- **特殊容器**: `audio`, `canvas`, `datalist`, `details`, `dialog`, `frameset`, `head`, `iframe`, `meter`, `progress`, `select`, `style`, `template`, `textarea`, `title`, `video`
- **已废弃**: `basefont`, `frame`, `keygen`
- **特殊行为**: `noembed`, `noframes`, `noscript`, `optgroup`, `option`, `rp`

**建议增强特性:**

```typescript
interface NoTextEnhancement {
  // 移除 ktext 属性
  kchildren: KChildren[]; // 某些仍需要（如 audio, video）
  kon: KListener;
  koff: KListener;
  kmount: KMountFunction;
}
```

### 2. 表单输入元素

需要额外的值控制属性。

**元素列表:**

- `input` (所有类型)
- `textarea`
- `select`

**建议增强特性:**

```typescript
interface FormInputEnhancement extends BaseEnhancement {
  kvalue: string | number; // 替代或补充 value 属性
  kplaceholder?: string; // 动态占位符
  kdisabled: boolean; // 禁用状态控制
  krequired: boolean; // 必填状态控制
  kreadonly?: boolean; // 只读状态（input, textarea）

  // 事件增强
  konchange: (value: string) => void; // 值变化监听
  koninput: (value: string) => void; // 输入监听
  konfocus: () => void;
  konblur: () => void;
}
```

### 3. 复选框和单选框

需要特殊的选中状态控制。

**元素列表:**

- `input[type="checkbox"]`
- `input[type="radio"]`

**建议增强特性:**

```typescript
interface CheckableEnhancement extends BaseEnhancement {
  kchecked: boolean; // 选中状态
  kvalue: string | number; // 值
  kdisabled: boolean;
  krequired: boolean;

  // 事件增强
  konchange: (checked: boolean, value: string) => void;
}
```

### 4. 下拉选择元素

需要选项管理。

**元素列表:**

- `select`
- `option`
- `optgroup`

**建议增强特性:**

```typescript
interface SelectEnhancement extends BaseEnhancement {
  // select 特有
  kvalue: string | string[]; // 单选或多选值
  kmultiple: boolean;
  ksize: number;
  koptions: KOption[]; // 选项管理

  // option 特有
  kselected: boolean; // 选中状态
  klabel: string; // 显示文本

  // 事件增强
  konchange: (value: string | string[]) => void;
}
```

### 5. 媒体元素

需要播放控制。

**元素列表:**

- `audio`
- `video`

**建议增强特性:**

```typescript
interface MediaEnhancement extends BaseEnhancement {
  kplay: () => Promise<void>;
  kpause: () => void;
  kstop: () => void;
  kcurrentTime: number;
  kvolume: number;
  kmuted: boolean;
  kautoplay: boolean;
  kloop: boolean;
  kcontrols: boolean;

  // 事件增强
  konplay: () => void;
  konpause: () => void;
  konended: () => void;
  kontimeupdate: (currentTime: number) => void;
  konloadeddata: () => void;
}
```

### 6. 图像和画布元素

需要内容控制。

**元素列表:**

- `img`
- `canvas`

**建议增强特性:**

```typescript
interface ImageEnhancement extends BaseEnhancement {
  // img 特有
  ksrc: string;
  kalt: string;
  kloading: 'lazy' | 'eager';

  // canvas 特有
  kwidth: number;
  kheight: number;
  kcontext: CanvasRenderingContext2D | null;

  // 事件增强
  konload: () => void;
  konerror: (error: Event) => void;
}
```

### 7. 链接和导航元素

需要导航控制。

**元素列表:**

- `a`
- `area`

**建议增强特性:**

```typescript
interface LinkEnhancement extends BaseEnhancement {
  khref: string;
  ktarget: '_self' | '_blank' | '_parent' | '_top' | string;
  krel: string;
  kdownload: string;

  // 事件增强
  konnavigate: (href: string, event: MouseEvent) => boolean; // 返回 false 阻止导航
}
```

### 8. 列表元素

需要项目管理。

**元素列表:**

- `ul`, `ol`
- `li`

**建议增强特性:**

```typescript
interface ListEnhancement extends BaseEnhancement {
  // ul/ol 特有
  kitems: KListItem[];
  kaddItem: (item: KListItem, index?: number) => void;
  kremoveItem: (index: number) => void;

  // li 特有
  kvalue: any; // 项目数据
  kindex: number; // 在列表中的索引
}
```

### 9. 表格元素

需要数据控制。

**元素列表:**

- `table`, `thead`, `tbody`, `tfoot`
- `tr`, `th`, `td`

**建议增强特性:**

```typescript
interface TableEnhancement extends BaseEnhancement {
  // table 特有
  krows: KTableRow[];
  kaddRow: (row: KTableRow, index?: number) => void;
  kremoveRow: (index: number) => void;

  // tr 特有
  kcells: KTableCell[];
  kaddCell: (cell: KTableCell, index?: number) => void;

  // th/td 特有
  kcolspan: number;
  krowspan: number;
  ksortable: boolean;
}
```

### 10. 普通容器元素

使用标准增强。

**元素列表:**

- `div`, `span`, `p`, `h1`-`h6`, `section`, `article`, `aside`, `header`, `footer`, `nav`, `main`
- 等等...

**标准增强特性:**

```typescript
interface BaseEnhancement {
  ktext: string;
  kchildren: KChildren[];
  kon: KListener;
  koff: KListener;
  kmount: KMountFunction;
}
```

## 实现建议

### 1. 创建增强策略模式

```typescript
enum EnhancementType {
  Base = 'base',
  NoText = 'no-text',
  FormInput = 'form-input',
  Checkable = 'checkable',
  Select = 'select',
  Media = 'media',
  Image = 'image',
  Link = 'link',
  List = 'list',
  Table = 'table',
}

const ELEMENT_ENHANCEMENT_MAP: Record<string, EnhancementType> = {
  // NoText elements
  br: EnhancementType.NoText,
  img: EnhancementType.Image,
  input: EnhancementType.FormInput,

  // Form elements
  textarea: EnhancementType.FormInput,
  select: EnhancementType.Select,

  // Media elements
  audio: EnhancementType.Media,
  video: EnhancementType.Media,

  // Links
  a: EnhancementType.Link,
  area: EnhancementType.Link,

  // Lists
  ul: EnhancementType.List,
  ol: EnhancementType.List,
  li: EnhancementType.List,

  // Tables
  table: EnhancementType.Table,
  tr: EnhancementType.Table,
  th: EnhancementType.Table,
  td: EnhancementType.Table,

  // Base (default)
  // 所有其他元素使用基础增强
};
```

### 2. 更新增强函数

```typescript
export function enhance(element: HTMLKEnhancedElement): void {
  const tagName = element.tagName.toLowerCase();
  const enhancementType = ELEMENT_ENHANCEMENT_MAP[tagName] || EnhancementType.Base;

  switch (enhancementType) {
    case EnhancementType.NoText:
      enhanceNoText(element);
      break;
    case EnhancementType.FormInput:
      enhanceFormInput(element);
      break;
    case EnhancementType.Checkable:
      enhanceCheckable(element);
      break;
    // ... 其他类型
    default:
      enhanceBase(element);
  }
}
```

### 3. 类型系统更新

需要更新类型定义以支持不同的增强接口：

```typescript
type HTMLKEnhancedElement<T extends HTMLTag = HTMLTag> = T extends 'input'
  ? HTMLInputElement & FormInputEnhancement
  : T extends 'textarea'
    ? HTMLTextAreaElement & FormInputEnhancement
    : T extends 'select'
      ? HTMLSelectElement & SelectEnhancement
      : T extends 'audio' | 'video'
        ? HTMLMediaElement & MediaEnhancement
        : T extends 'img'
          ? HTMLImageElement & ImageEnhancement
          : T extends 'canvas'
            ? HTMLCanvasElement & ImageEnhancement
            : T extends 'a' | 'area'
              ? HTMLAnchorElement & LinkEnhancement
              : T extends NoTextNodeTag
                ? HTMLElement & NoTextEnhancement
                : HTMLElement & BaseEnhancement;
```

## 优先级建议

1. **高优先级**: 表单元素增强（`kvalue`, `kchecked` 等）- 这是最常用的功能
2. **中优先级**: 移除无效的 `ktext` 属性 - 避免混淆和性能浪费
3. **低优先级**: 媒体、图像等特殊元素的增强 - 可以后续迭代添加

## 性能考虑

1. **按需增强**: 只为实际需要的元素添加特定属性
2. **懒加载**: 某些复杂增强可以延迟到首次使用时
3. **内存优化**: 避免为不需要的元素创建无用的属性和方法

## 向后兼容性

为了保持向后兼容，可以：

1. 逐步废弃无效属性，给出警告信息
2. 保持现有 API 的基本功能不变
3. 新特性采用 opt-in 方式
