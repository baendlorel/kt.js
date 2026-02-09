import { $emptyArray, $emptyFn } from '@/utils/misc.js';

declare global {
  /**
   * Extend Comment interface to include properties for fragment handling.
   */
  interface Comment {
    kisFragmentAnchor: boolean;
    kFragmentList: Node[];
    kredraw: () => void;
    kchildrenRef: { value: any[] };
  }
}
const $emptyChildrenRef = { value: $emptyArray };
// each instance shares the same empty array, but it will be replaced when used
Comment.prototype.kisFragmentAnchor = false;
Comment.prototype.kFragmentList = $emptyArray;
Comment.prototype.kredraw = $emptyFn;
Comment.prototype.kchildrenRef = $emptyChildrenRef;
export {};
