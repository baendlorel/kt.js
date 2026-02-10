import { describe, expect, it, vi } from 'vitest';
import { ref, computed } from '../src/reactive/index.js';

describe('reactive helpers', () => {
  it('notify should trigger listeners for in-place mutation', () => {
    const list = ref<number[]>([1, 2]);
    const onChange = vi.fn();
    list.addOnChange(onChange);

    list.value.push(3);
    list.notify();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(list.value).toEqual([1, 2, 3]);
  });

  it('mutate should update value and notify once', () => {
    const list = ref<number[]>([1, 2, 3]);
    const onChange = vi.fn();
    list.addOnChange(onChange);

    list.mutate((items) => {
      items.splice(1, 1);
      items.push(4);
    });

    expect(list.value).toEqual([1, 3, 4]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('notify should trigger computed recalculation', () => {
    const list = ref<number[]>([1, 2]);
    const total = computed(() => list.value.reduce((sum, n) => sum + n, 0), [list]);

    expect(total.value).toBe(3);
    list.value.push(3);
    list.notify();
    expect(total.value).toBe(6);
  });

  it('computed notify should force callback even when value is unchanged', () => {
    const base = ref(2);
    const doubled = computed(() => base.value * 2, [base]);
    const onChange = vi.fn();
    doubled.addOnChange(onChange);

    doubled.notify();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(4, 4);
  });

  it('computed mutate should warn and keep value unchanged', () => {
    const oldWarn = (globalThis as any).$warn;
    const warn = vi.fn();
    (globalThis as any).$warn = warn;

    const base = ref(5);
    const doubled = computed(() => base.value * 2, [base]);
    const before = doubled.value;

    doubled.mutate((v) => v);

    expect(doubled.value).toBe(before);
    expect(warn).toHaveBeenCalledTimes(1);

    (globalThis as any).$warn = oldWarn;
  });
});
