/**
 * This is a `falsy` value used to indicate "no node" in `h` function.
 * - It's an object, so it's guaranteed to be unique and no need for polyfill of `symbol`.
 */
const ktnull = ((o) => {
  o.toString = () => '';
  o.valueOf = () => '';
  if (Symbol && Symbol.toPrimitive) {
    o[Symbol.toPrimitive] = () => '';
  }
  Object.freeze(o);
  return o;
})(Object.create(null));

export { ktnull };
