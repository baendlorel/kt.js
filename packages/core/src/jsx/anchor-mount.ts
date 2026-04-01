type MountableFragmentAnchor = Node & {
  isKTAnchor?: true;
  mount?: (parent?: Node) => void;
};

const CANNOT_MOUNT = typeof document === 'undefined' || typeof Node === 'undefined';
const COMMENT_FILTER = typeof NodeFilter === 'undefined' ? 0x80 : NodeFilter.SHOW_COMMENT;

const $mountIfFragmentAnchor = (node: Node) => {
  const anchor = node as MountableFragmentAnchor;
  if (anchor.isKTAnchor === true && typeof anchor.mount === 'function') {
    anchor.mount();
  }
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
