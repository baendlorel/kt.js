export const enum AType {
  Fragment = 'kt-fragment',
  For = 'kt-for',
}

export abstract class KTAnchor<T extends Node = Node> extends Comment {
  readonly list: T[] = [];
  readonly atype: AType;
  mountCallback?: () => void;

  constructor(atype: AType) {
    super(atype);
    this.atype = atype;
    $ensureAnchorObserver();
  }

  mount(parent?: Node) {
    if (parent && this.parentNode !== parent) {
      parent.appendChild(this);
    }
    if (this.parentNode) {
      this.mountCallback?.();
    }
  }
}

type MountableKTAnchor = Node & {
  isKTAnchor?: true;
  mount?: (parent?: Node) => void;
};

const CANNOT_MOUNT = typeof document === 'undefined' || typeof Node === 'undefined';
const CANNOT_OBSERVE = CANNOT_MOUNT || typeof MutationObserver === 'undefined';
const COMMENT_FILTER = typeof NodeFilter === 'undefined' ? 0x80 : NodeFilter.SHOW_COMMENT;
const ELEMENT_NODE = 1;
const DOCUMENT_FRAGMENT_NODE = 11;
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
        $mountFragmentAnchors(addedNodes[j]);
      }

      // const removedNodes = records[i].removedNodes;
    }
  });
  anchorObserver.observe(document.body, { childList: true, subtree: true });
};

const $mountIfFragmentAnchor = (node: Node) => {
  const anchor = node as MountableKTAnchor;
  if (anchor.isKTAnchor === true && typeof anchor.mount === 'function') {
    anchor.mount();
  }
};

export const $mountFragmentAnchors = (node: unknown) => {
  if (CANNOT_MOUNT || typeof document === 'undefined' || !node || typeof (node as any).nodeType !== 'number') {
    return;
  }

  const nodeObj = node as Node;
  $mountIfFragmentAnchor(nodeObj);

  if (nodeObj.nodeType !== ELEMENT_NODE && nodeObj.nodeType !== DOCUMENT_FRAGMENT_NODE) {
    return;
  }

  const walker = document.createTreeWalker(nodeObj, COMMENT_FILTER);
  let current = walker.nextNode();
  while (current) {
    $mountIfFragmentAnchor(current);
    current = walker.nextNode();
  }
};
