import type { KTRef } from '../reactive/ref.js';
import type { KTReactive } from '../types/reactive.js';
import { $initRef, toReactive } from '../reactive/index.js';

export type KTForElement = JSX.Element;

export interface KTForProps<T> {
  ref?: KTRef<KTForElement>;
  list: T[] | KTReactive<T[]>;
  key?: (item: T, index: number, array: T[]) => any;
  map: (item: T, index: number, array: T[]) => HTMLElement;
}

// todo kfor的编译方式：在插件帮助下，将k-for编译为 k-for接收一个list，如果可以定义一个item变量和index，那么将children编译为()=>children的函数，用以创建

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
      const newElements: HTMLElement[] = [];
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
      const newElements: HTMLElement[] = [];
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
    const newElements: HTMLElement[] = new Array(newLength);
    let maxNewIndexSoFar = 0;
    let moved = false;

    for (let i = 0; i < newLength; i++) {
      const item = newList[i];
      const itemKey = currentKey(item, i, newList);
      newKeyToNewIndex.set(itemKey, i);

      if (nodeMap.has(itemKey)) {
        // Reuse existing node
        const node = nodeMap.get(itemKey)!;
        newElements[i] = node;

        // Track if items moved
        if (i < maxNewIndexSoFar) {
          moved = true;
        } else {
          maxNewIndexSoFar = i;
        }
      } else {
        // Create new node
        newElements[i] = currentMap(item, i, newList);
      }
    }

    // Remove nodes not in new list
    const toRemove: HTMLElement[] = [];
    nodeMap.forEach((node, key) => {
      if (!newKeyToNewIndex.has(key)) {
        toRemove.push(node);
      }
    });
    for (let i = 0; i < toRemove.length; i++) {
      toRemove[i].remove();
    }

    // Update DOM with minimal operations
    if (moved) {
      // Use longest increasing subsequence to minimize moves
      const seq = getSequence(newElements.map((el, i) => (nodeMap.has(currentKey(newList[i], i, newList)) ? i : -1)));

      let j = seq.length - 1;
      let anchor: Node | null = null;

      // Traverse from end to start for stable insertions
      for (let i = newLength - 1; i >= 0; i--) {
        const node = newElements[i];

        if (j < 0 || i !== seq[j]) {
          // Node needs to be moved or inserted
          if (anchor) {
            parent.insertBefore(node, anchor);
          } else {
            // Insert at end
            let nextSibling = (anchor as any).nextSibling;
            let temp = nextSibling;
            while (temp && newElements.includes(temp as HTMLElement)) {
              temp = temp.nextSibling;
            }
            parent.insertBefore(node, temp);
          }
        } else {
          j--;
        }
        anchor = node;
      }
    } else {
      // No moves needed, just insert new nodes
      let currentNode = anchor.nextSibling;
      for (let i = 0; i < newLength; i++) {
        const node = newElements[i];
        if (currentNode !== node) {
          parent.insertBefore(node, currentNode);
        } else {
          currentNode = currentNode.nextSibling;
        }
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

  const { key: currentKey = (item: T) => item, map: currentMap } = props;
  const listRef = toReactive(props.list, redraw);
  const anchor = document.createComment('kt-for') as unknown as KTForElement;

  // Map to track rendered nodes by key
  const nodeMap = new Map<any, HTMLElement>();

  // Render initial list
  const elements: HTMLElement[] = [];
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

// Longest Increasing Subsequence algorithm (optimized for diff)
function getSequence(arr: number[]): number[] {
  const p = arr.slice();
  const result = [0];
  let i: number, j: number, u: number, v: number, c: number;
  const len = arr.length;

  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI === -1) continue;

    j = result[result.length - 1];
    if (arr[j] < arrI) {
      p[i] = j;
      result.push(i);
      continue;
    }

    u = 0;
    v = result.length - 1;

    while (u < v) {
      c = ((u + v) / 2) | 0;
      if (arr[result[c]] < arrI) {
        u = c + 1;
      } else {
        v = c;
      }
    }

    if (arrI < arr[result[u]]) {
      if (u > 0) {
        p[i] = result[u - 1];
      }
      result[u] = i;
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}
