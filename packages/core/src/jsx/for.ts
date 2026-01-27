import { h } from '../h/index.js';
import type { KTHTMLElement } from '../types/jsx.js';

export interface KTForProps<T> {
  list: T[];
  /**
   * Key function to uniquely identify each item
   * Using stable keys enables efficient DOM reuse and updates
   */
  key: (item: T, index: number) => string | number;
  /**
   * Mapper function to render each item
   */
  mapper: (item: T, index: number) => HTMLElement;
  /**
   * CSS class for the container
   */
  class?: string;
  /**
   * Inline style for the container
   */
  style?: string;
}

/**
 * KTFor component - Efficient list rendering with key-based DOM reuse
 * Similar to Svelte's {#each} blocks, provides optimized updates
 *
 * @example
 * ```tsx
 * const list = <KTFor
 *   list={items}
 *   key={(item) => item.id}
 *   mapper={(item) => <div>{item.name}</div>}
 * /> as KTHTMLElement;
 *
 * // Update the list
 * list.redraw({ list: newItems });
 * ```
 */
export function KTFor<T>(props: KTForProps<T>): KTHTMLElement {
  const { list: initList, key: getKey, mapper, class: className, style } = props;

  // Cache: key -> { node: HTMLElement, item: T }
  const nodeCache = new Map<string | number, { node: HTMLElement; item: T }>();
  // Current key order
  let currentKeys: (string | number)[] = [];

  // Create container element
  const fragment = document.createDocumentFragment();

  // Initialize with initial list
  for (let i = 0; i < initList.length; i++) {
    const item = initList[i];
    const key = getKey(item, i);
    const node = mapper(item, i);
    nodeCache.set(key, { node, item });
    currentKeys.push(key);
    fragment.appendChild(node);
  }

  /**
   * Smart update method - only modifies DOM nodes that changed
   * Uses key-based diff algorithm to minimize DOM operations
   */
  const smartUpdate = (newList: T[], newMapper?: (item: T, index: number) => HTMLElement) => {
    const mapperFn = newMapper ?? mapper;
    const newKeys = newList.map((item, index) => getKey(item, index));

    // Find keys to remove (exist in current but not in new)
    const keysToRemove = currentKeys.filter((k) => !newKeys.includes(k));
    for (let i = 0; i < keysToRemove.length; i++) {
      const key = keysToRemove[i];
      const cached = nodeCache.get(key);
      if (cached && cached.node.parentNode === fragment) {
        fragment.removeChild(cached.node);
      }
      nodeCache.delete(key);
    }

    for (let i = 0; i < newList.length; i++) {
      const item = newList[i];
      const key = newKeys[i];
      let cached = nodeCache.get(key);

      // New item: create and cache
      if (!cached) {
        const node = mapperFn(item, i);
        cached = { node, item };
        nodeCache.set(key, cached);
      } else {
        // Update cached item reference
        cached.item = item;
      }

      // Ensure node is at correct position
      const currentNode = fragment.childNodes[i] as HTMLElement | undefined;
      if (currentNode !== cached.node) {
        if (i >= fragment.childNodes.length) {
          fragment.appendChild(cached.node);
        } else if (currentNode) {
          fragment.insertBefore(cached.node, currentNode);
        }
      }
    }

    currentKeys = newKeys;
  };

  // todo 我只改到了这里
  // Override redraw method
  const originalRedraw = fragment.redraw;
  fragment.redraw = (newProps?: any, ...args: any[]) => {
    if (newProps?.list) {
      smartUpdate(newProps.list, newProps.mapper);
    }

    // Update container attributes if provided
    if (newProps?.class !== undefined || newProps?.style !== undefined) {
      if (originalRedraw) {
        originalRedraw.call(
          fragment,
          {
            class: newProps.class,
            style: newProps.style,
          },
          ...args,
        );
      }
    }

    return fragment;
  };

  return fragment;
}

/**
 * Simple list rendering without key optimization
 * Rebuilds the entire list on each update - use for small static lists
 *
 * @example
 * ```tsx
 * const list = <KTForStatic
 *   list={items}
 *   mapper={(item) => <div>{item}</div>}
 * /> as KTHTMLElement;
 * ```
 */
export function KTForStatic<T>(props: Omit<KTForProps<T>, 'key'>): KTHTMLElement {
  const { list: initList, mapper, class: className, style } = props;

  const container = h('div', { class: className, style }) as unknown as KTHTMLElement;

  // Simple rebuild on redraw
  const rebuild = (newList: T[]) => {
    // Clear all children
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Rebuild
    newList.forEach((item, index) => {
      const node = mapper(item, index);
      container.appendChild(node);
    });
  };

  // Initial render
  rebuild(initList);

  // Override redraw
  const originalRedraw = container.redraw;
  container.redraw = (newProps?: any, ...args: any[]) => {
    if (newProps?.list) {
      rebuild(newProps.list);
    }

    // Update container attributes
    if (newProps?.class !== undefined || newProps?.style !== undefined) {
      if (originalRedraw) {
        originalRedraw.call(
          container,
          {
            class: newProps.class,
            style: newProps.style,
          },
          ...args,
        );
      }
    }

    return container;
  };

  return container;
}
