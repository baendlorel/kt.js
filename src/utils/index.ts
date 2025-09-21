import { $max, $min, $stringSlice } from '@/lib/native.js';

export function clamp(n: number, a: number, b: number): number {
  return $min(b, $max(a, n));
}

export function omit(str: string, len: number = 30) {
  return str.length > len ? $stringSlice.call(str, 0, len) + '...' : str;
}
