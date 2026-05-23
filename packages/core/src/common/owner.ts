import { $indom } from '@ktjs/shared';

interface KTOwnerBag {
  mounted: boolean;
  disconnected: boolean;
  disposing: boolean;
  cleanups: Set<() => void>;
}

const ownerBags = new WeakMap<Node, KTOwnerBag>();
let observer: MutationObserver | undefined;
let pendingRemoved: Node[] = [];
let pending = false;

const visit = (node: Node, fn: (node: Node) => void) => {
  fn(node);
  for (let child = node.firstChild; child; child = child.nextSibling) {
    visit(child, fn);
  }
};

const getOwnerBag = (owner: Node): KTOwnerBag => {
  let bag = ownerBags.get(owner);
  if (!bag) {
    bag = { mounted: $indom(owner), disconnected: false, disposing: false, cleanups: new Set() };
    ownerBags.set(owner, bag);
  }
  return bag;
};

const flushRemoved = () => {
  pending = false;
  const nodes = pendingRemoved;
  pendingRemoved = [];
  for (let i = 0; i < nodes.length; i++) {
    if (!$indom(nodes[i])) {
      disposeOwnedSubtree(nodes[i]);
    }
  }
};

const ensureObserver = () => {
  if (observer || typeof MutationObserver === 'undefined' || typeof document === 'undefined') {
    return;
  }
  const root = document.documentElement ?? document.body;
  if (!root) {
    return;
  }
  observer = new MutationObserver((mutations) => {
    for (let i = 0; i < mutations.length; i++) {
      const added = mutations[i].addedNodes;
      for (let j = 0; j < added.length; j++) {
        markOwnerMounted(added[j]);
      }

      const removed = mutations[i].removedNodes;
      for (let j = 0; j < removed.length; j++) {
        pendingRemoved.push(removed[j]);
      }
    }
    if (!pending && pendingRemoved.length > 0) {
      pending = true;
      Promise.resolve().then(flushRemoved);
    }
  });
  observer.observe(root, { childList: true, subtree: true });
};

export const markOwnerMounted = (owner: Node): void => {
  visit(owner, (node) => {
    const bag = ownerBags.get(node);
    if (bag && $indom(node)) {
      bag.mounted = true;
      bag.disconnected = false;
    }
  });
};

export const isOwnerDead = (owner: Node): boolean => {
  const bag = ownerBags.get(owner);
  if (!bag) {
    return false;
  }
  if (bag.disconnected) {
    return true;
  }
  if ($indom(owner)) {
    bag.mounted = true;
    return false;
  }
  return bag.mounted;
};

export const own = (owner: Node, cleanup: () => void): (() => void) => {
  ensureObserver();
  const bag = getOwnerBag(owner);
  bag.cleanups.add(cleanup);
  return cleanup;
};

export const unown = (owner: Node, cleanup: () => void): void => {
  ownerBags.get(owner)?.cleanups.delete(cleanup);
};

export const disposeOwner = (owner: Node): void => {
  const bag = ownerBags.get(owner);
  if (!bag) {
    return;
  }
  if (bag.disposing) {
    return;
  }
  bag.disposing = true;
  bag.disconnected = true;
  bag.cleanups.forEach((cleanup) => cleanup());
  bag.cleanups.clear();
  bag.disposing = false;
};

export const disposeOwnedSubtree = (owner: Node): void => visit(owner, disposeOwner);
