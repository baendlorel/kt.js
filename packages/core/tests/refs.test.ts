import { describe, expect, it, vi } from 'vitest';
import {
  KTArrayRef,
  KTDateRef,
  KTFormDataRef,
  KTHeadersRef,
  KTMapRef,
  KTObjectRef,
  KTSetRef,
  KTURLSearchParamsRef,
  KTWeakMapRef,
  KTWeakSetRef,
  ref,
} from '../src/reactive/index.js';

describe('specialized refs', () => {
  it('creates an array ref and emits after mutating methods', () => {
    const list = ref([1, 2]);
    const onChange = vi.fn();
    list.addOnChange(onChange);

    expect(list).toBeInstanceOf(KTArrayRef);

    list.push(3);

    expect(list.value).toEqual([1, 2, 3]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('creates an object ref and emits for object helpers', () => {
    const state = ref({ count: 1, label: 'a' });
    const onChange = vi.fn();
    state.addOnChange(onChange);

    expect(state).toBeInstanceOf(KTObjectRef);

    state.set('count', 2).assign({ label: 'b' }).delete('label');

    expect(state.value).toEqual({ count: 2 });
    expect(onChange).toHaveBeenCalledTimes(3);
  });

  it('creates a map ref and emits after set/delete/clear', () => {
    const mapping = ref(new Map<string, number>());
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
    const valueSet = ref(new Set<number>());
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
    const weakMap = ref(new WeakMap<object, number>());
    const weakSet = ref(new WeakSet<object>());
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
    const date = ref(new Date('2024-01-01T00:00:00.000Z'));
    const onChange = vi.fn();
    date.addOnChange(onChange);

    expect(date).toBeInstanceOf(KTDateRef);

    date.setUTCFullYear(2025);

    expect(date.value.getUTCFullYear()).toBe(2025);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('creates platform container refs and emits after mutation', () => {
    const formData = ref(new FormData());
    const headers = ref(new Headers());
    const searchParams = ref(new URLSearchParams());
    const formDataOnChange = vi.fn();
    const headersOnChange = vi.fn();
    const searchParamsOnChange = vi.fn();

    formData.addOnChange(formDataOnChange);
    headers.addOnChange(headersOnChange);
    searchParams.addOnChange(searchParamsOnChange);

    expect(formData).toBeInstanceOf(KTFormDataRef);
    expect(headers).toBeInstanceOf(KTHeadersRef);
    expect(searchParams).toBeInstanceOf(KTURLSearchParamsRef);

    formData.append('file', 'demo');
    headers.set('x-test', '1');
    searchParams.set('page', '1');
    searchParams.sort();

    expect(formData.get('file')).toBe('demo');
    expect(headers.get('x-test')).toBe('1');
    expect(searchParams.get('page')).toBe('1');
    expect(formDataOnChange).toHaveBeenCalledTimes(1);
    expect(headersOnChange).toHaveBeenCalledTimes(1);
    expect(searchParamsOnChange).toHaveBeenCalledTimes(2);
  });
});
