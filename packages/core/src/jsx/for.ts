import type { JSX } from '../types/jsx.js';
import type { KTRefLike } from '../reactable/ref.js';
import type { KTReactiveLike } from '../reactable/reactive.js';

import { $identity } from '@ktjs/shared';
import { toReactive } from '../reactable/index.js';
import { $initRef } from '../reactable/ref.js';
import { $addNodeCleanup } from './anchor.js';
import { AnchorType, KTAnchor } from './anchor.js';

export class KTForAnchor extends KTAnchor<JSX.Element> {
  readonly type = AnchorType.For;

  constructor() {
    super(AnchorType.For);
  }
}

export type KTForElement = JSX.Element & KTForAnchor;

export interface KTForProps<T> {
  ref?: KTRefLike<KTForElement>;
  list: T[] | KTReactiveLike<T[]>;
  key?: (item: T, index: number, array: T[]) => any;
  map?: (item: T, index: number, array: T[]) => JSX.Element;
}

// TASK 对于template标签的for和if，会编译为fragment，可特殊处理，让它们保持原样
/**
 * KTFor - List rendering component with key-based optimization
 * Returns a Comment anchor node with rendered elements in anchor.list
 */
export function KTFor<T>(props: KTForProps<T>): KTForElement {
  const redraw = () => {
    const newList = listRef.value;
    const parent = anchor.parentNode;

    if (!parent) {
      anchor.list.length = 0;
      nodeMap.clear();
      for (let index = 0; index < newList.length; index++) {
        const item = newList[index];
        const itemKey = currentKey(item, index, newList);
        const node = currentMap(item, index, newList);
        nodeMap.set(itemKey, node);
        anchor.list.push(node);
      }
      return anchor;
    }

    const oldLength = anchor.list.length;
    const newLength = newList.length;

    if (newLength === 0) {
      nodeMap.forEach((node) => node.remove());
      nodeMap.clear();
      anchor.list.length = 0;
      return anchor;
    }

    if (oldLength === 0) {
      anchor.list.length = 0;
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < newLength; i++) {
        const item = newList[i];
        const itemKey = currentKey(item, i, newList);
        const node = currentMap(item, i, newList);
        nodeMap.set(itemKey, node);
        anchor.list.push(node);
        fragment.appendChild(node);
      }
      parent.insertBefore(fragment, anchor.nextSibling);
      return anchor;
    }

    const newKeyToNewIndex = new Map<any, number>();
    const newElements: JSX.Element[] = new Array(newLength);
    for (let i = 0; i < newLength; i++) {
      const item = newList[i];
      const itemKey = currentKey(item, i, newList);
      newKeyToNewIndex.set(itemKey, i);
      newElements[i] = nodeMap.has(itemKey) ? nodeMap.get(itemKey)! : currentMap(item, i, newList);
    }

    const toRemove: JSX.Element[] = [];
    nodeMap.forEach((node, key) => {
      if (!newKeyToNewIndex.has(key)) {
        toRemove.push(node);
      }
    });
    for (let i = 0; i < toRemove.length; i++) {
      toRemove[i].remove();
    }

    let currentNode = anchor.nextSibling;
    for (let i = 0; i < newLength; i++) {
      const node = newElements[i];
      if (currentNode !== node) {
        parent.insertBefore(node, currentNode);
      } else {
        currentNode = currentNode.nextSibling;
      }
    }

    nodeMap.clear();
    anchor.list.length = 0;
    for (let i = 0; i < newLength; i++) {
      const itemKey = currentKey(newList[i], i, newList);
      const node = newElements[i];
      nodeMap.set(itemKey, node);
      anchor.list.push(node);
    }
    return anchor;
  };

  const currentKey: NonNullable<KTForProps<T>['key']> = props.key ?? ((item: T) => item);
  const currentMap: NonNullable<KTForProps<T>['map']> =
    props.map ?? ((item: T) => $identity(item) as unknown as JSX.Element);
  const listRef = toReactive(props.list);
  const anchor = new KTForAnchor() as KTForElement;
  const nodeMap = new Map<any, JSX.Element>();

  for (let index = 0; index < listRef.value.length; index++) {
    const item = listRef.value[index];
    const itemKey = currentKey(item, index, listRef.value);
    const node = currentMap(item, index, listRef.value);
    nodeMap.set(itemKey, node);
    anchor.list.push(node);
  }

  listRef.addOnChange(redraw, redraw);
  $addNodeCleanup(anchor, () => listRef.removeOnChange(redraw));
  anchor.mountCallback = redraw;
  $initRef(props, anchor);

  return anchor;
}
