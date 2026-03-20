import { computed, ref } from 'kt.js';

export function ComponentA() {
  const size = ref(100);
  const mode = ref<'A' | 'B'>('A');
  const style = computed(
    () => `width: ${size.state}px; background: ${mode.state === 'A' ? 'red' : 'blue'};`,
    [size, mode], // Manually specify dependencies for the computed value
  );

  return <div style={style}>ABCD</div>;
}
