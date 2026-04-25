export {};

Node.prototype._appendTo = function (this: Node, parent: Node) {
  return parent.appendChild(this);
};

declare global {
  interface Node {
    /**
     * Only `Node` and `KTAnchor` are implemented with this method
     * @internal
     */
    _appendTo(parent: Node): this;
  }

  interface Versioned {
    /* @internal */
    _version: number;
  }
}
