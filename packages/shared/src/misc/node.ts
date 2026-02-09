declare global {
  interface Comment {
    kisFragmentAnchor: boolean;
    kFragmentList: Node[];
  }
}
// each instance shares the same empty array, but it will be replaced when used
const emptyArray: Node[] = [];
Comment.prototype.kisFragmentAnchor = false;
Comment.prototype.kFragmentList = emptyArray;

export {};
