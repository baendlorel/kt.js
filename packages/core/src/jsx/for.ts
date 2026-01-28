export interface KTForProps<T> {
  list: T[];
  /**
   * Key function to uniquely identify each item
   * Using stable keys enables efficient DOM reuse and updates
   */
  key?: (item: T, index: number, array: T[]) => string | number;
  /**
   * Mapper function to render each item
   */
  mapper: (item: T, index: number, array: T[]) => HTMLElement;
}

/**
 * Extended Comment node with redraw capability for KTFor
 */
export interface KTForAnchor extends Comment {
  redraw: (newProps?: { list?: any[]; mapper?: (item: any, index: number, array: any[]) => HTMLElement }) => void;
}

const trivial = (item: any) => item;

/**
 * KTFor component - Efficient list rendering with key-based DOM reuse
 * Similar to Svelte's {#each} blocks, provides optimized updates
 *
 * Returns a Comment node as anchor point. All list items are rendered after this anchor.
 *
 * @example
 * ```tsx
 * const listAnchor = <KTFor
 *   list={items}
 *   key={(item) => item.id}
 *   mapper={(item) => <div>{item.name}</div>}
 * /> as KTForAnchor;
 *
 * document.body.appendChild(listAnchor); // Anchor + all items are rendered
 *
 * // Update the list
 * listAnchor.redraw({ list: newItems });
 * ```
 */
export function KTFor<T>(props: KTForProps<T>): KTForAnchor {
  const { list: initList, key: getKey = trivial, mapper } = props;

  // Cache: key -> { node: HTMLElement, item: T }
  const nodeCache = new Map<string | number, { node: HTMLElement; item: T }>();
  // Current key order
  let currentKeys: (string | number)[] = [];

  // Create anchor comment node - marks the position of the list
  const anchor = document.createComment('kt-for') as KTForAnchor;

  /**
   * Get all nodes currently in the DOM that belong to this list
   * They are all siblings after the anchor node
   */
  const getListNodes = (): HTMLElement[] => {
    const nodes: HTMLElement[] = [];
    if (!anchor.parentNode) return nodes;

    let current = anchor.nextSibling;
    const keySet = new Set(currentKeys);

    // Collect nodes that belong to this list
    while (current) {
      const isListNode = Array.from(nodeCache.values()).some((cached) => cached.node === current);
      if (!isListNode) break;
      nodes.push(current as HTMLElement);
      current = current.nextSibling;
    }

    return nodes;
  };

  /**
   * Initialize list - append all initial items after anchor
   */
  const initialize = () => {
    for (let i = 0; i < initList.length; i++) {
      const item = initList[i];
      const key = getKey(item, i, initList);
      const node = mapper(item, i, initList);
      nodeCache.set(key, { node, item });
      currentKeys.push(key);

      // Append to parent if anchor is already in DOM
      if (anchor.parentNode) {
        const lastNode = getListNodes()[getListNodes().length - 1];
        if (lastNode) {
          lastNode.after(node);
        } else {
          anchor.after(node);
        }
      }
    }
  };

  /**
   * Smart update method - only modifies DOM nodes that changed
   * Uses key-based diff algorithm to minimize DOM operations
   */
  const smartUpdate = (newList: T[], newMapper?: (item: T, index: number, array: T[]) => HTMLElement) => {
    const mapperFn = newMapper ?? mapper;
    const newKeys = newList.map((item, index) => getKey(item, index, newList));

    if (!anchor.parentNode) {
      // If anchor is not in DOM yet, just update cache
      nodeCache.clear();
      currentKeys = [];

      for (let i = 0; i < newList.length; i++) {
        const item = newList[i];
        const key = newKeys[i];
        const node = mapperFn(item, i, newList);
        nodeCache.set(key, { node, item });
        currentKeys.push(key);
      }
      return;
    }

    // Find keys to remove (exist in current but not in new)
    const keysToRemove = currentKeys.filter((k) => !newKeys.includes(k));
    for (let i = 0; i < keysToRemove.length; i++) {
      const key = keysToRemove[i];
      const cached = nodeCache.get(key);
      if (cached && cached.node.parentNode) {
        cached.node.parentNode.removeChild(cached.node);
      }
      nodeCache.delete(key);
    }

    // Update/add nodes in correct order
    let previousNode: Node = anchor;

    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      const key = newKeys[i];
      let cached = nodeCache.get(key);

      // New item: create and cache
      if (!cached) {
        const node = mapperFn(item, i, newList);
        cached = { node, item };
        nodeCache.set(key, cached);
      } else {
        // Update cached item reference
        cached.item = item;
      }

      // Ensure node is at correct position (right after previousNode)
      if (previousNode.nextSibling !== cached.node) {
        if (previousNode.nextSibling) {
          anchor.parentNode!.insertBefore(cached.node, previousNode.nextSibling);
        } else {
          anchor.parentNode!.appendChild(cached.node);
        }
      }

      previousNode = cached.node;
    }

    currentKeys = newKeys;
  };

  // Mount redraw method on anchor
  anchor.redraw = (newProps?: { list?: T[]; mapper?: (item: T, index: number, array: T[]) => HTMLElement }) => {
    if (newProps?.list) {
      smartUpdate(newProps.list, newProps.mapper);
    }
  };

  // Initialize the list
  initialize();

  return anchor;
}

/**
 * Simple list rendering without key optimization
 * Rebuilds the entire list on each update - use for small static lists
 *
 * Returns a Comment anchor node. All items are rendered after this anchor.
 *
 * @example
 * ```tsx
 * const listAnchor = <KTForConst
 *   list={items}
 *   mapper={(item) => <div>{item}</div>}
 * /> as KTForAnchor;
 * ```
 */
export function KTForConst<T>(props: Omit<KTForProps<T>, 'key'>): KTForAnchor {
  const { list: initList, mapper } = props;

  // Create anchor comment node
  const anchor = document.createComment('kt-for-const') as KTForAnchor;
  let nodes: HTMLElement[] = [];

  // Simple rebuild on redraw
  const rebuild = (newList: T[]) => {
    // Remove all old nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
    nodes = [];

    // Create new nodes
    let previousNode: Node = anchor;
    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      const node = mapper(item, i, newList);
      nodes.push(node);

      if (anchor.parentNode) {
        if (previousNode.nextSibling) {
          anchor.parentNode.insertBefore(node, previousNode.nextSibling);
        } else {
          anchor.parentNode.appendChild(node);
        }
        previousNode = node;
      }
    }
  };

  // Initial render
  rebuild(initList);

  // Mount redraw
  anchor.redraw = (newProps?: { list?: T[]; mapper?: (item: T, index: number, array: T[]) => HTMLElement }) => {
    if (newProps?.list) {
      rebuild(newProps.list);
    }
  };

  return anchor;
}
