export const enum AnchorType {
  Fragment = 'kt-fragment',
  For = 'kt-for',
}

export abstract class KTAnchor<T extends Node = Node> extends Comment {
  readonly isKTAnchor: true = true;
  readonly list: T[] = [];
  abstract readonly type: AnchorType;
  mountCallback?: () => void;

  constructor(data: AnchorType) {
    super(data);
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
type NodeCleanup = () => void;

const CANNOT_MOUNT = typeof document === 'undefined' || typeof Node === 'undefined';
const CANNOT_OBSERVE = CANNOT_MOUNT || typeof MutationObserver === 'undefined';
const COMMENT_FILTER = typeof NodeFilter === 'undefined' ? 0x80 : NodeFilter.SHOW_COMMENT;
const nodeToCleanups = new WeakMap<Node, NodeCleanup[]>();
let anchorObserver: MutationObserver | undefined;

const $ensureAnchorObserver = () => {
  if (CANNOT_OBSERVE || anchorObserver || !document.body) {
    return;
  }

  anchorObserver = new MutationObserver((records) => {
    for (let i = 0; i < records.length; i++) {
      const nodes = records[i].addedNodes;
      for (let j = 0; j < nodes.length; j++) {
        $mountFragmentAnchors(nodes[j]);
      }
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

const $runNodeCleanups = (node: Node) => {
  const cleanups = nodeToCleanups.get(node);
  if (!cleanups) {
    return;
  }

  nodeToCleanups.delete(node);
  for (let i = cleanups.length - 1; i >= 0; i--) {
    try {
      cleanups[i]();
    } catch (error) {
      $error('KTNodeCleanup:', error);
    }
  }
};

export const $addNodeCleanup = (node: Node, cleanup: NodeCleanup) => {
  const cleanups = nodeToCleanups.get(node);
  if (cleanups) {
    cleanups.push(cleanup);
  } else {
    nodeToCleanups.set(node, [cleanup]);
  }
  return cleanup;
};

export const $removeNodeCleanup = (node: Node, cleanup: NodeCleanup) => {
  const cleanups = nodeToCleanups.get(node);
  if (!cleanups) {
    return;
  }

  const index = cleanups.indexOf(cleanup);
  if (index === -1) {
    return;
  }

  cleanups.splice(index, 1);
  if (cleanups.length === 0) {
    nodeToCleanups.delete(node);
  }
};

export const $moveNodeCleanups = (from: Node, to: Node) => {
  const cleanups = nodeToCleanups.get(from);
  if (!cleanups?.length) {
    return;
  }

  const targetCleanups = nodeToCleanups.get(to);
  if (targetCleanups) {
    targetCleanups.push(...cleanups);
  } else {
    nodeToCleanups.set(to, cleanups);
  }
  nodeToCleanups.delete(from);
};

export const $mountFragmentAnchors = (node: unknown) => {
  if (CANNOT_MOUNT || !(node instanceof Node)) {
    return;
  }

  $mountIfFragmentAnchor(node);

  if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
    return;
  }

  const walker = document.createTreeWalker(node, COMMENT_FILTER);
  let current = walker.nextNode();
  while (current) {
    $mountIfFragmentAnchor(current);
    current = walker.nextNode();
  }
};

export const $removeNode = (node: Node | null | undefined) => {
  if (!(node instanceof Node)) {
    return;
  }

  const anchor = node as KTAnchor<Node>;
  if (anchor.isKTAnchor === true) {
    const list = anchor.list.slice();
    anchor.list.length = 0;
    for (let i = 0; i < list.length; i++) {
      $removeNode(list[i]);
    }
  } else {
    const children = Array.from(node.childNodes);
    for (let i = 0; i < children.length; i++) {
      $removeNode(children[i]);
    }
  }

  $runNodeCleanups(node);
  (node as ChildNode).remove?.();
};

export const $replaceNode = (oldNode: Node, newNode: Node) => {
  if (oldNode === newNode) {
    return;
  }

  const parent = oldNode.parentNode;
  if (!parent) {
    return;
  }

  parent.insertBefore(newNode, oldNode);
  $removeNode(oldNode);
};
