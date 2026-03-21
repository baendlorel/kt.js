import { computed, ref } from 'kt.js';

export function ComponentA() {
  const size = ref(100);
  const mode = ref<'A' | 'B'>('A');
  const style = computed(
    () => `width: ${size.value}px; background: ${mode.value === 'A' ? 'red' : 'blue'};`,
    [size, mode], // Manually specify dependencies for the computed value
  );

  return <div style={style}>ABCD</div>;
}
