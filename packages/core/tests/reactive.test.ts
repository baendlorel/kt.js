import { describe, expect, it, vi } from 'vitest';
import { ref, computed } from '../src/reactive/index.js';
import type { KTRef } from '../src/reactive/ref.js';

type IsEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? (<T>() => T extends B ? 1 : 2) extends <T>() => T extends A ? 1 : 2
      ? true
      : false
    : false;

type Assert<T extends true> = T;

describe('reactive helpers', () => {
  it('ref should infer boolean values as KTRef<boolean>', () => {
    const booleanRef = ref(true as boolean);

    const _: Assert<IsEqual<typeof booleanRef, KTRef<boolean>>> = true;

    expect(booleanRef.value).toBe(true);
  });

  it('notify should trigger listeners for in-place mutation', () => {
    const list = ref<number[]>([1, 2]);
    const onChange = vi.fn();
    list.addOnChange(onChange);

    list.value.push(3);
    list.notify();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(list.value).toEqual([1, 2, 3]);
  });

  it('notify with handlerKeys should only trigger selected listeners', () => {
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

  it('computed notify with handlerKeys should only trigger selected listeners', () => {
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
});
