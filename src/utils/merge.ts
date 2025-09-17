/**
 * Merge two objects, properties in the latter object will override those in the former, and the original objects will not be changed.
 * Only values that are not undefined or null will be merged. If the value is an object, it will be merged recursively.
 * @param a
 * @param b
 */
export function simpleMerge<A, B>(a: A, b: B): A & B;

/**
 * Merge three objects, properties in the latter objects will override those in the former, and the original objects will not be changed.
 * Only values that are not undefined or null will be merged. If the value is an object, it will be merged recursively.
 * @param a
 * @param b
 * @param c
 */
export function simpleMerge<A, B, C>(a: A, b: B, c: C): A & B & C;

export function simpleMerge(...objects: any[]) {
  // Remove items that are null or undefined
  objects = objects.filter((v) => v !== null && v !== undefined);
  if (objects.length === 0) {
    return {};
  }

  // Use Set to deduplicate and get all keys from all objects
  const keys = new Set(([] as string[]).concat(...objects.map((o) => Object.keys(o))));
  const result = {} as any;

  // Traverse objects in reverse order, so properties in later objects override those in earlier objects
  for (let i = objects.length - 1; i >= 0; i--) {
    const o = objects[i];
    for (const k of keys) {
      if (k in o) {
        const v = o[k];
        // * Start merge process
        // Primitive types
        if (
          typeof v === 'bigint' ||
          typeof v === 'boolean' ||
          typeof v === 'number' ||
          typeof v === 'string' ||
          typeof v === 'symbol'
        ) {
          result[k] = v;
          continue;
        }

        // Array case
        if (Array.isArray(v)) {
          result[k] = v.slice();
          continue;
        }

        result[k] = o[k];
        break;
      }
    }
  }
}
