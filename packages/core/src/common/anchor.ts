export const enum AType {
  Content = 'kt-content',
  Fragment = 'kt-fragment',
  For = 'kt-for',
  If = 'kt-if',
  Async = 'kt-async',
}

// TODO 也许应该在content的append处加入对Anchor的处理
// TODO 现在默认不提供list，子类自己加list
export abstract class KTAnchor extends Comment {
  readonly isKTAnchor: true = true;
  readonly atype: AType;

  mountCallback?: () => void;

  constructor(atype: AType, mountCallback?: () => void) {
    super();
    this.atype = atype;
    this.mountCallback = mountCallback;
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
