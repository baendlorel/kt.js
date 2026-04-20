import type { JSX } from '../types/jsx.js';

export const enum AType {
  Fragment = 'kt-fragment',
  For = 'kt-for',
  If = 'kt-if',
  Async = 'kt-async',
}

/**
 * This is made to be the core of every anchor
 */
// TODO 也许应该在content的append处加入对Anchor的处理
export abstract class KTAnchor extends Comment {
  readonly isKTAnchor: true = true;
  readonly list: Array<Node | JSX.Element> = [];
  readonly atype: AType;
  mountCallback?: () => void;

  constructor(atype: AType) {
    super();
    this.atype = atype;
    $ensureAnchorObserver();
  }

  mount(parent?: Node) {
    if (parent && this.parentNode !== parent) {
      parent.appendChild(this);
    }

    // & This will be different as its last call because of mounting
    if (this.parentNode) {
      this.mountCallback?.();
    }
  }
}

const CANNOT_MOUNT = typeof document === 'undefined' || typeof Node === 'undefined';
const CANNOT_OBSERVE = CANNOT_MOUNT || typeof MutationObserver === 'undefined';
let anchorObserver: MutationObserver | undefined;

const $ensureAnchorObserver = () => {
  if (CANNOT_OBSERVE || anchorObserver || !document.body) {
    return;
  }

  anchorObserver = new MutationObserver((records) => {
    if (typeof document === 'undefined') {
      anchorObserver?.disconnect();
      anchorObserver = undefined;
      return;
    }

    for (let i = 0; i < records.length; i++) {
      const addedNodes = records[i].addedNodes;
      for (let j = 0; j < addedNodes.length; j++) {
        if ((addedNodes[j] as KTAnchor).isKTAnchor) {
          // TODO 是否会有嵌套的Anchor，外面的加了，结果里面的还是Anchor状态？
          (addedNodes[j] as KTAnchor).mount();
        }
      }

      // TASK 此处可以准备添加删除节点逻辑 const removedNodes = records[i].removedNodes;
    }
  });
  anchorObserver.observe(document.body, { childList: true, subtree: true });
};
