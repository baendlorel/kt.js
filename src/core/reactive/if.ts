import { $createTextNode, $replaceWith } from '@/lib/dom.js';
import { KBaseRef } from './base.js';

export class KIf extends KBaseRef<boolean> {
  private _element: HTMLKEnhancedElement;
  private _replacer: Text;

  constructor(value: boolean, element: HTMLKEnhancedElement) {
    super(value);
    this._element = element;
    this._replacer = $createTextNode.call(document, '');
  }

  override set value(show: boolean) {
    if (this._value === show) {
      return;
    }
    this._value = show;

    // These two variables should always be different.
    if (show === this._element.isConnected) {
      console.warn(
        `[__NAME__:KIf] show(${show}) === isConnected while the internal value !== show`
      );
      return;
    }

    if (show) {
      $replaceWith.call(this._replacer, this._element);
    } else {
      $replaceWith.call(this._element, this._replacer);
    }
  }
}
