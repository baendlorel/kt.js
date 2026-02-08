import type { KTRef } from '../reactive/ref.js';
import type { KTReactive } from '../reactive/index.js';
import { isRef, toReactive } from '../reactive/index.js';
import type { KTRawContent } from '../types/h.js';

export interface FragmentProps {
  /** 子元素数组，支持响应式 */
  children: HTMLElement[] | KTReactive<HTMLElement[]>;

  /** 可选：元素key函数，用于优化更新（未来扩展） */
  key?: (element: HTMLElement, index: number, array: HTMLElement[]) => any;

  /** 可选：ref引用，获取锚点节点 */
  ref?: KTRef<JSX.Element>;
}

/**
 * Fragment - 管理子元素数组的容器组件
 *
 * 特性：
 * 1. 返回注释锚点节点，子元素插入在锚点之后
 * 2. 支持响应式数组，数组变化时自动更新DOM
 * 3. 基础版本使用简单替换算法（移除所有旧元素，插入所有新元素）
 * 4. 未来可扩展key优化
 *
 * 使用示例：
 * ```tsx
 * const children = ref([<div>A</div>, <div>B</div>]);
 * const fragment = <Fragment children={children} />;
 * document.body.appendChild(fragment);
 *
 * // 自动更新
 * children.value = [<div>C</div>, <div>D</div>];
 * ```
 */
export function Fragment(props: FragmentProps): JSX.Element {
  // key参数为未来扩展预留，当前未使用
  const { key: _key, ref } = props;

  // 将children转换为响应式引用
  const childrenRef = toReactive(props.children, redraw);

  // 创建锚点注释节点
  const anchor = document.createComment('kt-fragment') as unknown as JSX.Element;

  // 存储当前元素数组的引用
  const currentElements: HTMLElement[] = [];

  // 初始化渲染
  renderInitial();

  // 设置ref引用
  if (ref) {
    if (isRef(ref)) {
      ref.value = anchor;
    } else {
      $throw('Fragment: ref must be a KTRef');
    }
  }

  return anchor;

  /** 初始渲染 */
  function renderInitial() {
    const elements = childrenRef.value;
    currentElements.length = 0;

    // 创建文档片段
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      currentElements.push(element);
      fragment.appendChild(element);
    }

    // 插入到锚点之后（锚点当前不在DOM中，先保存到属性中）
    (anchor as any).__kt_fragment_list__ = currentElements;
  }

  /** 重绘函数，当children变化时调用 */
  function redraw() {
    const newElements = childrenRef.value;
    const parent = anchor.parentNode;

    if (!parent) {
      // 如果锚点不在DOM中，只更新内部状态
      currentElements.length = 0;
      for (let i = 0; i < newElements.length; i++) {
        currentElements.push(newElements[i]);
      }
      (anchor as any).__kt_fragment_list__ = currentElements;
      return;
    }

    const oldElements = currentElements;

    // 简单替换算法：移除所有旧元素，插入所有新元素
    // 未来可以基于key进行优化

    // 1. 移除所有旧元素
    for (let i = 0; i < oldElements.length; i++) {
      const element = oldElements[i];
      element.remove();
    }

    // 2. 插入所有新元素
    const fragment = document.createDocumentFragment();
    currentElements.length = 0;

    for (let i = 0; i < newElements.length; i++) {
      const element = newElements[i];
      currentElements.push(element);
      fragment.appendChild(element);
    }

    // 插入到锚点之后
    parent.insertBefore(fragment, anchor.nextSibling);

    // 更新存储的引用
    (anchor as any).__kt_fragment_list__ = currentElements;
  }
}

/**
 * Convert KTRawContent to HTMLElement array
 */
export function convertChildrenToElements(children: KTRawContent): HTMLElement[] {
  const elements: HTMLElement[] = [];

  const processChild = (child: any): void => {
    if (child == null || child === false || child === true) {
      // 忽略null、undefined、false、true
      return;
    }

    if (Array.isArray(child)) {
      // 递归处理数组
      child.forEach(processChild);
      return;
    }

    if (typeof child === 'string' || typeof child === 'number') {
      // 将文本包装在span中
      const span = document.createElement('span');
      span.textContent = String(child);
      elements.push(span);
      return;
    }

    if (child instanceof HTMLElement) {
      elements.push(child);
      return;
    }

    if (child && typeof child === 'object' && 'isKT' in child) {
      // 处理KTRef或KTComputed - 需要解包
      const value = child.value;
      processChild(value);
      return;
    }

    // 其他类型忽略或转换为字符串
    console.warn('Fragment: unsupported child type', child);
  };

  processChild(children);
  return elements;
}
