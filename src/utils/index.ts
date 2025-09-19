import { $max, $min } from '@/lib/native.js';

export function clamp(n: number, a: number, b: number): number {
  return $min(b, $max(a, n));
}

export function omit(str: string, len: number = 30) {
  return str.length > len ? str.slice(0, len) + '...' : str;
}
