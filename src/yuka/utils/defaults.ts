/**
 *
 * @param defaultObject 默认值的对象
 * @param other 其他来源
 */
export function defaults<A, B>(defaultObject: A, other: B): A & B;

export function defaults(...objects: any[]) {
  // 去掉为空的项
  objects = objects.filter((v) => v !== null && v !== undefined).map((v) => Object(v));
  if (objects.length === 0) {
    return {};
  }

  // 用Set去重，得到所有对象的key
  const keys = new Set(([] as string[]).concat(...objects.map((o) => Object.keys(o))));
  const result = {} as any;

  // 正序遍历objects，前面的对象会覆盖后面的对象
  for (let i = 0; i < objects.length; i++) {
    const o = objects[i];
    for (const k of keys) {
      if (k in o) {
        // 先赋值，但如果k in o但是值却为undefined、null，那么保留k，后面的值也许能覆盖
        result[k] = o[k];
        if (o[k] !== undefined && o[k] !== null) {
          // 此键已经被赋了不是undefined或null的值，不需要再次赋值
          keys.delete(k);
        }
        break;
      }
    }
  }

  return result;
}
