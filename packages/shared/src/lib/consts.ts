/**
 * This is a `falsy` value used to indicate "no node" in `h` function.
 * - It's an object, so it's guaranteed to be unique and no need for polyfill of `symbol`.
 */
export const ktnull = Object.create(null);
