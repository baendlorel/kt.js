import { computed, ref } from 'kt.js';

export function ComponentA() {
  const card = ref({
    width: 100,
    mode: 'A' as 'A' | 'B',
    tags: ['demo'],
  });
  const style = card.map((v) => `width: ${v.width}px; background: ${v.mode === 'A' ? 'red' : 'blue'};`);

  const replaceMode = () => {
    card.value = {
      ...card.value,
      mode: card.value.mode === 'A' ? 'B' : 'A',
    };
  };

  const widen = () => {
    card.draft.width += 20;
    card.draft.tags.push('updated');
  };

  return (
    <div>
      <button on:click={replaceMode}>Replace by value</button>
      <button on:click={widen}>Deep update by draft</button>
      <div style={style}>{card.value.tags.join(', ')}</div>
    </div>
  );
}
