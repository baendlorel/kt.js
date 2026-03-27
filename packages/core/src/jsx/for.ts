import type { JSX } from '../types/jsx.js';
import type { KTRef } from '../reactable/ref.js';
import type { KTReactive } from '../reactable/reactive.js';

import { $identity } from '@ktjs/shared';
import { toReactive } from '../reactable/index.js';
import { $initRef } from '../reactable/ref.js';

export type KTForElement = JSX.Element;

export interface KTForProps<T> {
  ref?: KTRef<KTForElement>;
  list: T[] | KTReactive<T[]>;
  key?: (item: T, index: number, array: T[]) => any;
  map?: (item: T, index: number, array: T[]) => JSX.Element;
}

// TASK 对于template标签的for和if，会编译为fragment，可特殊处理，让它们保持原样
// FIXME 梳理并修复类型错误
/**
 * KTFor - List rendering component with key-based optimization
 * Returns a Comment anchor node with rendered elements in __kt_for_list__
 */
export function KTFor<T>(props: KTForProps<T>): KTForElement {
  const redraw = () => {
    const newList = listRef.value;

    const parent = anchor.parentNode;
    if (!parent) {
      // If not in DOM yet, just rebuild the list
      const newElements: KTForElement[] = [];
      nodeMap.clear();
      for (let index = 0; index < newList.length; index++) {
        const item = newList[index];
        const itemKey = currentKey(item, index, newList);
        const node = currentMap(item, index, newList);
        nodeMap.set(itemKey, node);
        newElements.push(node);
      }
      (anchor as any).__kt_for_list__ = newElements;
      return anchor;
    }

    const oldLength = (anchor as any).__kt_for_list__.length;
    const newLength = newList.length;

    // Fast path: empty list
    if (newLength === 0) {
      nodeMap.forEach((node) => node.remove());
      nodeMap.clear();
      (anchor as any).__kt_for_list__ = [];
      return anchor;
    }

    // Fast path: all new items
    if (oldLength === 0) {
      const newElements: KTForElement[] = [];
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < newLength; i++) {
        const item = newList[i];
        const itemKey = currentKey(item, i, newList);
        const node = currentMap(item, i, newList);
        nodeMap.set(itemKey, node);
        newElements.push(node);
        fragment.appendChild(node);
      }
      parent.insertBefore(fragment, anchor.nextSibling);
      (anchor as any).__kt_for_list__ = newElements;
      return anchor;
    }

    // Build key index map and new elements array in one pass
    const newKeyToNewIndex = new Map<any, number>();
    const newElements: KTForElement[] = new Array(newLength);
    for (let i = 0; i < newLength; i++) {
      const item = newList[i];
      const itemKey = currentKey(item, i, newList);
      newKeyToNewIndex.set(itemKey, i);

      if (nodeMap.has(itemKey)) {
        // Reuse existing node
        newElements[i] = nodeMap.get(itemKey)!;
      } else {
        // Create new node
        newElements[i] = currentMap(item, i, newList);
      }
    }

    // Remove nodes not in new list
    const toRemove: KTForElement[] = [];
    nodeMap.forEach((node, key) => {
      if (!newKeyToNewIndex.has(key)) {
        toRemove.push(node);
      }
    });
    for (let i = 0; i < toRemove.length; i++) {
      toRemove[i].remove();
    }

    // Reorder existing nodes and insert new nodes in a single pass.
    let currentNode = anchor.nextSibling;
    for (let i = 0; i < newLength; i++) {
      const node = newElements[i];
      if (currentNode !== node) {
        parent.insertBefore(node, currentNode);
      } else {
        currentNode = currentNode.nextSibling;
      }
    }

    // Update maps
    nodeMap.clear();
    for (let i = 0; i < newLength; i++) {
      const itemKey = currentKey(newList[i], i, newList);
      nodeMap.set(itemKey, newElements[i]);
    }
    (anchor as any).__kt_for_list__ = newElements;
    return anchor;
  };

  const currentKey: NonNullable<KTForProps<T>['key']> = props.key ?? ((item: T) => item);
  const currentMap: NonNullable<KTForProps<T>['map']> =
    props.map ?? ((item: T) => $identity(item) as unknown as KTForElement);
  const listRef = toReactive(props.list).addOnChange(redraw);
  const anchor = document.createComment('kt-for') as unknown as KTForElement;

  // Map to track rendered nodes by key
  const nodeMap = new Map<any, KTForElement>();

  // Render initial list
  const elements: KTForElement[] = [];
  for (let index = 0; index < listRef.value.length; index++) {
    const item = listRef.value[index];
    const itemKey = currentKey(item, index, listRef.value);
    const node = currentMap(item, index, listRef.value);
    nodeMap.set(itemKey, node);
    elements.push(node);
  }

  (anchor as any).__kt_for_list__ = elements;

  $initRef(props, anchor);

  return anchor;
}
