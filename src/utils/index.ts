import { $stringSlice } from '@/lib/native.js';

export function omit(str: string, len: number = 30) {
  return str.length > len ? $stringSlice.call(str, 0, len) + '...' : str;
}
