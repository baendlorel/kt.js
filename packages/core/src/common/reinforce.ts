export {};

Node.prototype._appendTo = function (this: Node, parent: Node) {
  parent.appendChild(this);
};

declare global {
  interface Node {
    /**
     * Only `Node` and `KTAnchor` are implemented with this method
     * @internal
     */
    _appendTo(parent: Node): void;
  }

  interface Versioned {
    /* @internal */
    _version: number;
  }
}
