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

  it('notify with changeKeys should only trigger selected listeners', () => {
    const valueRef = ref(1);
    const onA = vi.fn();
    const onB = vi.fn();
    const onC = vi.fn();
    valueRef.addOnChange(onA, 'a');
    valueRef.addOnChange(onB, 'b');
    valueRef.addOnChange(onC, 'c');

    valueRef.notify(['a', 'c']);

    expect(onA).toHaveBeenCalledTimes(1);
    expect(onB).toHaveBeenCalledTimes(0);
    expect(onC).toHaveBeenCalledTimes(1);
  });

  it('mutate with changeKeys should only trigger selected listeners', () => {
    const list = ref<number[]>([1, 2]);
    const onAll = vi.fn();
    const onPick = vi.fn();
    list.addOnChange(onAll, 'all');
    list.addOnChange(onPick, 'pick');

    list.mutate((items) => items.push(3), ['pick']);

    expect(list.value).toEqual([1, 2, 3]);
    expect(onAll).toHaveBeenCalledTimes(0);
    expect(onPick).toHaveBeenCalledTimes(1);
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

  it('computed notify with changeKeys should only trigger selected listeners', () => {
    const base = ref(2);
    const doubled = computed(() => base.value * 2, [base]);
    const onA = vi.fn();
    const onB = vi.fn();
    doubled.addOnChange(onA, 'a');
    doubled.addOnChange(onB, 'b');

    doubled.notify(['b']);

    expect(onA).toHaveBeenCalledTimes(0);
    expect(onB).toHaveBeenCalledTimes(1);
    expect(onB).toHaveBeenCalledWith(4, 4);
  });

  it('computed mutate with changeKeys should trigger selected listeners only', () => {
    const oldWarn = (globalThis as any).$warn;
    const warn = vi.fn();
    (globalThis as any).$warn = warn;

    const base = ref(3);
    const doubled = computed(() => base.value * 2, [base]);
    const onA = vi.fn();
    const onB = vi.fn();
    doubled.addOnChange(onA, 'a');
    doubled.addOnChange(onB, 'b');

    doubled.mutate((v) => v, ['a']);

    expect(warn).toHaveBeenCalledTimes(1);
    expect(onA).toHaveBeenCalledTimes(1);
    expect(onB).toHaveBeenCalledTimes(0);
    expect(onA).toHaveBeenCalledWith(6, 6);

    (globalThis as any).$warn = oldWarn;
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
