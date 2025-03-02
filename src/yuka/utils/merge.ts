/**
 * 融合两个对象，后面的属性覆盖前面的，且不会改变原对象。
 * 会合并不为undefined、null的值，如果值为对象，则会递归合并。
 * @param a
 * @param b
 */
export function simpleMerge<A, B>(a: A, b: B): A & B;

/**
 * 融合两个对象，后面的属性覆盖前面的，且不会改变原对象。
 * 会合并不为undefined、null的值，如果值为对象，则会递归合并。
 * @param a
 * @param b
 */
export function simpleMerge<A, B, C>(a: A, b: B, c: C): A & B & C;

export function simpleMerge(...objects: any[]) {
  // 去掉为空的项
  objects = objects.filter((v) => v !== null && v !== undefined);
  if (objects.length === 0) {
    return {};
  }

  // 用Set去重，得到所有对象的key
  const keys = new Set(([] as string[]).concat(...objects.map((o) => Object.keys(o))));
  const result = {} as any;

  // 倒序遍历objects，后面的对象会覆盖前面的对象
  for (let i = objects.length - 1; i >= 0; i--) {
    const o = objects[i];
    for (const k of keys) {
      if (k in o) {
        const v = o[k];
        // * 开始合并流程
        // 基础类型的情形
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

        // array的情形
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
