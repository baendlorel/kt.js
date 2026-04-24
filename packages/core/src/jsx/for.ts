import type { JSX } from '../types/jsx.js';
import type { KTRef } from '../reactable/ref.js';
import type { KTReactive } from '../reactable/reactive.js';

import { $identity } from '@ktjs/shared';
import { $refToSelf } from '../reactable/ref.js';
import { toReactive } from '../reactable/index.js';
import { AType, KTAnchor } from '../common/anchor.js';
import { append } from '../h/content.js';

export class KTForAnchor extends KTAnchor {
  _current: Node[] = [];
  constructor() {
    super(AType.For);
  }

  // TODO 逻辑放到内部，优化先不做，有AI完成
  _appendTo(parent: Element): void {
    parent.appendChild(this);
    append(parent, this._current);
    // TODO 其他appendTo也要用append做吗？
  }

  _remove(): void {
    for (let i = 0; i < this._current.length; i++) {
      (this._current[i] as ChildNode).remove();
    }
    this.remove();
  }
}

export type KTForElement = JSX.Element & KTForAnchor;
export interface KTForProps<T> {
  ref?: KTRef<KTForElement>;
  list: T[];
  key?: (item: T, index: number, array: T[]) => any;
  map?: (item: T, index: number, array: T[]) => JSX.Element;
}
export interface KTForPropsReactive<T> {
  ref?: KTRef<KTForElement>;
  list: KTReactive<T[]>;
  key?: (item: T, index: number, array: T[]) => any;
  map?: (item: T, index: number, array: T[]) => JSX.Element;
}

const a = {} as KTForProps<number[]>;
a.key;

const setForNodeMap = (nodeMap: Map<any, JSX.Element>, key: any, node: JSX.Element, index: number) => {
  if (nodeMap.has(key)) {
    $error(`[KTFor] Duplicate key detected at index ${index}. Later items override earlier ones. key=${String(key)}`);
  }
  nodeMap.set(key, node);
};

/**
 * KTFor - List rendering component with key-based optimization
 * Returns a Comment anchor node with rendered elements in anchor.list
 */
export function KTFor<T>(props: KTForProps<T> | KTForPropsReactive<T>): KTForElement {
  const redraw = () => {
    const newList = listRef.value;
    const parent = anchor.parentNode;

    if (!parent) {
      anchor._current.length = 0;
      nodeMap.clear();
      for (let index = 0; index < newList.length; index++) {
        const item = newList[index];
        const itemKey = currentKey(item, index, newList);
        const node = currentMap(item, index, newList);
        setForNodeMap(nodeMap, itemKey, node, index);
        anchor._current.push(node);
      }
      return anchor;
    }

    const oldLength = anchor._current.length;
    const newLength = newList.length;

    if (newLength === 0) {
      nodeMap.forEach((node) => node.remove());
      nodeMap.clear();
      anchor._current.length = 0;
      return anchor;
    }

    if (oldLength === 0) {
      anchor._current.length = 0;
      nodeMap.clear();
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < newLength; i++) {
        const item = newList[i];
        const itemKey = currentKey(item, i, newList);
        const node = currentMap(item, i, newList);
        setForNodeMap(nodeMap, itemKey, node, i);
        anchor._current.push(node);
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
    anchor._current.length = 0;
    for (let i = 0; i < newLength; i++) {
      const itemKey = currentKey(newList[i], i, newList);
      const node = newElements[i];
      setForNodeMap(nodeMap, itemKey, node, i);
      anchor._current.push(node);
    }
    return anchor;
  };

  const currentKey: NonNullable<KTForProps<T>['key']> = props.key ?? $identity;
  const currentMap: NonNullable<KTForProps<T>['map']> =
    props.map ?? ((item: T) => $identity(item) as unknown as JSX.Element);
  const listRef = toReactive(props.list);
  const anchor = new KTForAnchor() as KTForElement;
  const nodeMap = new Map<any, JSX.Element>();

  for (let index = 0; index < listRef.value.length; index++) {
    const item = listRef.value[index];
    const itemKey = currentKey(item, index, listRef.value);
    const node = currentMap(item, index, listRef.value);
    setForNodeMap(nodeMap, itemKey, node, index);
    anchor._current.push(node);
  }

  listRef.listen(redraw);
  return $refToSelf(props, anchor);
}
