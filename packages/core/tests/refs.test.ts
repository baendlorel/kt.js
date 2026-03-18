import { describe, expect, it, vi } from 'vitest';
import { KTArrayRef, KTDateRef, KTMapRef, KTSetRef, KTWeakMapRef, KTWeakSetRef, autoRef, ref } from '../src/reactive/index.js';

describe('specialized refs', () => {
  it('ref should stay plain for containers', () => {
    const list = ref([1, 2]);

    expect(list).not.toBeInstanceOf(KTArrayRef);
    expect(typeof (list as any).push).toBe('undefined');
  });

  it('creates an array ref and emits after mutating methods', () => {
    const list = autoRef([1, 2]);
    const onChange = vi.fn();
    list.addOnChange(onChange);

    expect(list).toBeInstanceOf(KTArrayRef);

    list.push(3);

    expect(list.value).toEqual([1, 2, 3]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('creates an array ref and emits after other mutating methods', () => {
    const list = autoRef([3, 1, 2]);
    const onChange = vi.fn();
    list.addOnChange(onChange);

    expect(list).toBeInstanceOf(KTArrayRef);

    expect(list.unshift(4)).toBe(4);
    expect(list.shift()).toBe(4);
    expect(list.splice(1, 1, 9)).toEqual([1]);
    expect(list.sort((a, b) => a - b)).toBe(list);
    expect(list.reverse()).toBe(list);
    expect(list.fill(7, 1, 2)).toBe(list);
    expect(list.copyWithin(0, 1, 2)).toBe(list);

    expect(list.value).toEqual([7, 7, 2]);
    expect(onChange).toHaveBeenCalledTimes(7);
  });

  it('creates a map ref and emits after set/delete/clear', () => {
    const mapping = autoRef(new Map<string, number>());
    const onChange = vi.fn();
    mapping.addOnChange(onChange);

    expect(mapping).toBeInstanceOf(KTMapRef);

    mapping.set('a', 1);
    mapping.delete('a');
    mapping.set('b', 2).clear();

    expect(mapping.value.size).toBe(0);
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it('creates a set ref and emits after add/delete/clear', () => {
    const valueSet = autoRef(new Set<number>());
    const onChange = vi.fn();
    valueSet.addOnChange(onChange);

    expect(valueSet).toBeInstanceOf(KTSetRef);

    valueSet.add(1).add(2);
    valueSet.delete(1);
    valueSet.clear();

    expect(valueSet.value.size).toBe(0);
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it('creates weak refs and emits after mutation', () => {
    const weakMap = autoRef(new WeakMap<object, number>());
    const weakSet = autoRef(new WeakSet<object>());
    const mapOnChange = vi.fn();
    const setOnChange = vi.fn();
    const key = {};

    weakMap.addOnChange(mapOnChange);
    weakSet.addOnChange(setOnChange);

    expect(weakMap).toBeInstanceOf(KTWeakMapRef);
    expect(weakSet).toBeInstanceOf(KTWeakSetRef);

    weakMap.set(key, 1);
    weakMap.delete(key);
    weakSet.add(key);
    weakSet.delete(key);

    expect(mapOnChange).toHaveBeenCalledTimes(2);
    expect(setOnChange).toHaveBeenCalledTimes(2);
  });

  it('creates a date ref and emits after setter calls', () => {
    const date = autoRef(new Date('2024-01-01T00:00:00.000Z'));
    const onChange = vi.fn();
    date.addOnChange(onChange);

    expect(date).toBeInstanceOf(KTDateRef);

    date.setUTCFullYear(2025);

    expect(date.value.getUTCFullYear()).toBe(2025);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
