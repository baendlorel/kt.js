import { describe, expect, it, vi } from 'vitest';
import { ref, computed } from '../src/reactable/index.js';
import type { KTSubComputed } from '../src/reactable/computed.js';
import type { KTRef, KTSubRef } from '../src/reactable/ref.js';

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

  it('notify should trigger computed recalculation', () => {
    const list = ref<number[]>([1, 2]);
    const total = computed(() => list.value.reduce((sum, n) => sum + n, 0), [list]);

    expect(total.value).toBe(3);
    list.value.push(3);
    list.notify();
    expect(total.value).toBe(6);
  });

  it('get should create sub-computed from ref with exact types', () => {
    const state = ref({
      user: {
        name: 'kt',
        profile: {
          level: 3,
        },
      },
      count: 1,
    });

    const user = state.get('user');
    const level = state.get('user', 'profile', 'level');

    const _user: Assert<IsEqual<typeof user, KTSubComputed<{ name: string; profile: { level: number } }>>> = true;
    const _level: Assert<IsEqual<typeof level, KTSubComputed<number>>> = true;

    expect(user.value.name).toBe('kt');
    expect(level.value).toBe(3);

    state.value = {
      user: {
        name: 'js',
        profile: {
          level: 4,
        },
      },
      count: 2,
    };

    expect(user.value.name).toBe('js');
    expect(level.value).toBe(4);
  });

  it('get should create sub-computed from computed source', () => {
    const state = ref({
      user: {
        name: 'kt',
      },
    });

    const user = computed(() => state.value.user, [state]);
    const name = user.get('name');

    const _name: Assert<IsEqual<typeof name, KTSubComputed<string>>> = true;

    expect(name.value).toBe('kt');
    state.value = { user: { name: 'js' } };
    expect(name.value).toBe('js');
  });

  it('get should support property access on primitive values', () => {
    const state = ref({
      name: 'ktjs',
    });

    const length = state.get('name', 'length');

    const _length: Assert<IsEqual<typeof length, KTSubComputed<number>>> = true;

    expect(length.value).toBe(4);
  });

  it('get should throw when keys are empty or a nullish intermediate value is accessed', () => {
    expect(() => (ref({ a: 1 }) as any).get()).toThrow();
    expect(() => ref<any>({ user: undefined }).get('user', 'profile').value).toThrow(TypeError);
    expect(() => ref<any>({ user: null }).get('user', 'profile').value).toThrow(TypeError);
  });

  it('get should support more than 5 path keys', () => {
    const state = ref<any>({
      a: {
        b: {
          c: {
            d: {
              e: {
                f: 7,
              },
            },
          },
        },
      },
    });

    const deep = (state as any).get('a', 'b', 'c', 'd', 'e', 'f');
    expect(deep.value).toBe(7);
  });

  it('subref should create writable nested refs with exact types', () => {
    const state = ref({
      user: {
        name: 'kt',
        profile: {
          level: 3,
        },
      },
    });

    const name = state.subref('user', 'name');
    const level = state.subref('user', 'profile', 'level');

    const _name: Assert<IsEqual<typeof name, KTSubRef<string>>> = true;
    const _level: Assert<IsEqual<typeof level, KTSubRef<number>>> = true;

    expect(name.value).toBe('kt');
    expect(level.value).toBe(3);

    name.value = 'js';
    level.value = 4;

    expect(state.value.user.name).toBe('js');
    expect(state.value.user.profile.level).toBe(4);
  });

  it('subref should receive updates when source ref value is replaced', () => {
    const state = ref({
      user: {
        profile: {
          level: 3,
        },
      },
    });
    const level = state.subref('user', 'profile', 'level');
    const onChange = vi.fn();
    level.addOnChange(onChange);

    state.value = {
      user: {
        profile: {
          level: 5,
        },
      },
    };

    expect(level.value).toBe(5);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenLastCalledWith(5, 3);
  });

  it('subref should throw when keys are empty', () => {
    expect(() => (ref({ a: 1 }) as any).subref()).toThrow();
  });

  it('subref should support more than 5 path keys and escaped string keys', () => {
    const state = ref<any>({
      a: {
        b: {
          c: {
            d: {
              e: {
                'x]y"z': 1,
              },
            },
          },
        },
      },
    });

    const deepRef = (state as any).subref('a', 'b', 'c', 'd', 'e', 'x]y"z');
    expect(deepRef.value).toBe(1);

    deepRef.value = 9;
    expect(state.value.a.b.c.d.e['x]y"z']).toBe(9);
  });

  it('map should work on subref and track extra dependencies', () => {
    const state = ref({ nested: { n: 1 } });
    const extra = ref(10);
    const n = state.subref('nested', 'n');
    const sum = n.map((v) => v + extra.value, [extra]);

    expect(sum.value).toBe(11);

    n.value = 2;
    expect(sum.value).toBe(12);

    extra.value = 20;
    expect(sum.value).toBe(22);
  });

  it('is should support subref and reactive-like targets', () => {
    const state = ref({ left: 1, right: 1 });
    const left = state.subref('left');
    const right = state.get('right');
    const equal = left.is(right);

    expect(equal.value).toBe(true);

    left.value = 2;
    expect(equal.value).toBe(false);

    state.value = { left: 2, right: 2 };
    expect(equal.value).toBe(true);
  });

  it('is should use Object.is semantics', () => {
    const v = ref(NaN);
    const isNaN = v.is(NaN);

    expect(isNaN.value).toBe(true);
    v.value = 1;
    expect(isNaN.value).toBe(false);
  });

  it('match should support subcomputed and reactive-like matchers', () => {
    const state = ref({ user: { name: 'kt', age: 1 } });
    const user = state.get('user');
    const matcher = ref({ name: 'kt' });
    const matched = user.match(matcher);

    expect(matched.value).toBe(true);

    state.value = { user: { name: 'js', age: 1 } };
    expect(matched.value).toBe(false);

    matcher.value = { name: 'js' };
    expect(matched.value).toBe(true);
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
});
