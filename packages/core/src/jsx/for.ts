import { KTHTMLElement } from '@/types/jsx.js';
import { KTRef } from './ref.js';

export interface KTForProps<T> {
  ref?: KTRef<KTForAnchor>;
  list: T[];
  key?: (item: T, index: number, array: T[]) => any;
  map: (item: T, index: number, array: T[]) => HTMLElement;
}

export interface KTForAnchor extends Comment {
  __kt_for_list__: HTMLElement[];
  redraw: <T>(newProps: Partial<KTForProps<T>>) => void;
}

/**
 * KTFor - List rendering component with key-based optimization
 * Returns a Comment anchor node with rendered elements in __kt_for_list__
 */
export function KTFor<T>(props: KTForProps<T>): KTForAnchor {
  const { list, map } = props;
  const key = props.key ?? ((item: T) => item);

  // Create anchor comment node
  const anchor = document.createComment('kt-for') as KTForAnchor;

  // Store current state
  let currentList = list;
  let currentKey = key;
  let currentMap = map;

  // Map to track rendered nodes by key
  const nodeMap = new Map<any, HTMLElement>();

  // Render initial list
  const elements: HTMLElement[] = [];
  currentList.forEach((item, index, array) => {
    const itemKey = currentKey(item, index, array);
    const node = currentMap(item, index, array);
    nodeMap.set(itemKey, node);
    elements.push(node);
  });

  // Attach elements array to anchor
  anchor.__kt_for_list__ = elements;

  // Redraw function for updates
  anchor.redraw = <U>(newProps: Partial<KTForProps<U>>) => {
    const newList = (newProps.list ?? currentList) as unknown as T[];
    const newKey = (newProps.key ?? currentKey) as typeof key;
    const newMap = (newProps.map ?? currentMap) as typeof map;

    // Update stored values
    currentList = newList;
    currentKey = newKey;
    currentMap = newMap;

    const parent = anchor.parentNode;
    if (!parent) {
      // If not in DOM yet, just rebuild the list
      const newElements: HTMLElement[] = [];
      currentList.forEach((item, index, array) => {
        const itemKey = currentKey(item, index, array);
        const node = currentMap(item, index, array);
        nodeMap.set(itemKey, node);
        newElements.push(node);
      });
      anchor.__kt_for_list__ = newElements;
      return;
    }

    // Build new key map
    const newNodeMap = new Map<any, HTMLElement>();
    const newKeys = new Set<any>();
    const newElements: HTMLElement[] = [];

    newList.forEach((item, index, array) => {
      const itemKey = newKey(item, index, array);
      newKeys.add(itemKey);

      // Reuse existing node if key exists
      if (nodeMap.has(itemKey)) {
        const existingNode = nodeMap.get(itemKey)!;
        newNodeMap.set(itemKey, existingNode);
        newElements.push(existingNode);
      } else {
        // Create new node
        const node = newMap(item, index, array);
        newNodeMap.set(itemKey, node);
        newElements.push(node);
      }
    });

    // Remove nodes that are no longer in the list
    nodeMap.forEach((node, key) => {
      if (!newKeys.has(key)) {
        node.remove();
      }
    });

    // Insert/reorder nodes in correct order
    let referenceNode: Node | null = anchor.nextSibling;
    newElements.forEach((node) => {
      // If node is not in correct position, insert it
      if (referenceNode !== node) {
        parent.insertBefore(node, referenceNode);
      }
      referenceNode = node.nextSibling;
    });

    // Update node map and element list
    nodeMap.clear();
    newNodeMap.forEach((node, key) => nodeMap.set(key, node));
    anchor.__kt_for_list__ = newElements;
  };

  // Set ref if provided
  if (props.ref?.isKT) {
    props.ref.value = anchor;
  }

  return anchor;
}
