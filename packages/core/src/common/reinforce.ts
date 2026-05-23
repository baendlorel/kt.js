import { markOwnerMounted } from './owner.js';

Node.prototype._appendTo = function (this: Node, parent: Node) {
  const result = parent.appendChild(this);
  markOwnerMounted(this);
  return result;
};

declare global {
  interface Node {
    /**
     * Only `Node` and `KTAnchor` are implemented with this method
     *
     * [NOTE] This is needed because we need its Polymorphism to avoid if/switch branches.
     */
    _appendTo(parent: Node): this;
  }

  interface Versioned {
    _version: number;
  }
}
