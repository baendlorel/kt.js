import type { KTAttribute } from '../types/h.js';
import type { KTRef } from '../reactive/ref.js';

export type KTForElement = JSX.Element & {
  redraw: (newProps?: KTAttribute) => void;
};

export interface KTForProps<T> {
  ref?: KTRef<KTForElement>;
  list: T[];
  key?: (item: T, index: number, array: T[]) => any;
  map: (item: T, index: number, array: T[]) => HTMLElement;
}

/**
 * KTFor - List rendering component with key-based optimization
 * Returns a Comment anchor node with rendered elements in __kt_for_list__
 */
export function KTFor<T>(props: KTForProps<T>): KTForElement {
  const { list, map } = props;
  const key = props.key ?? ((item: T) => item);

  // Create anchor comment node
  const anchor = document.createComment('kt-for') as unknown as KTForElement;

  // Store current state
  let currentList = list;
  let currentKey = key;
  let currentMap = map;

  // Map to track rendered nodes by key
  const nodeMap = new Map<any, HTMLElement>();

  // Render initial list
  const elements: HTMLElement[] = [];
  for (let index = 0; index < currentList.length; index++) {
    const item = currentList[index];
    const itemKey = currentKey(item, index, currentList);
    const node = currentMap(item, index, currentList);
    nodeMap.set(itemKey, node);
    elements.push(node);
  }

  // Attach elements array to anchor
  (anchor as any).__kt_for_list__ = elements;

  // Redraw function for updates
  anchor.redraw = (newProps) => {
    const newList = (newProps?.list ?? currentList) as unknown as T[];
    const newKey = (newProps?.key ?? currentKey) as typeof key;
    const newMap = (newProps?.map ?? currentMap) as typeof map;

    // Update stored values
    currentList = newList;
    currentKey = newKey;
    currentMap = newMap;

    const parent = anchor.parentNode;
    if (!parent) {
      // If not in DOM yet, just rebuild the list
      const newElements: HTMLElement[] = [];
      nodeMap.clear();
      for (let index = 0; index < currentList.length; index++) {
        const item = currentList[index];
        const itemKey = currentKey(item, index, currentList);
        const node = currentMap(item, index, currentList);
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
        const itemKey = newKey(item, i, newList);
        const node = newMap(item, i, newList);
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
      const itemKey = newKey(item, i, newList);
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
        newElements[i] = newMap(item, i, newList);
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
      const seq = getSequence(newElements.map((el, i) => (nodeMap.has(newKey(newList[i], i, newList)) ? i : -1)));

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
      const itemKey = newKey(newList[i], i, newList);
      nodeMap.set(itemKey, newElements[i]);
    }
    (anchor as any).__kt_for_list__ = newElements;
    return anchor;
  };

  // Set ref if provided
  if (props.ref?.isRef) {
    props.ref.value = anchor;
  }

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
