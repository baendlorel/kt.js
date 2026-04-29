export {};

Node.prototype._appendTo = function (this: Node, parent: Node) {
  return parent.appendChild(this);
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
