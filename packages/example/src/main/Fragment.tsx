import { computed, Fragment, ref } from 'kt.js';
import { Button } from '@ktjs/mui';

import fragmentDemoCode from '../code/fragment-demo.tsx?raw';
import { Code } from '../components/Code.js';

const defaultSections = ['Header', 'Content', 'Actions'];

const createPill = (label: string, index: number): JSX.Element => (
  <span class="fragment-pill">
    <span class="fragment-pill__index">#{index + 1}</span>
    {label}
  </span>
);

export function FragmentDemo() {
  const labelsRef = ref<string[]>([...defaultSections]);
  const childrenRef = ref<JSX.Element[]>(labelsRef.value.map(createPill));
  const summaryRef = computed(() => `${labelsRef.value.length} nodes: ${labelsRef.value.join(' / ')}`, [labelsRef]);

  const syncChildren = (nextLabels: string[]) => {
    labelsRef.value = nextLabels;
    childrenRef.value = nextLabels.map(createPill);
  };

  const addItem = () => syncChildren([...labelsRef.value, `Section ${labelsRef.value.length + 1}`]);

  const removeItem = () => {
    if (labelsRef.value.length <= 1) {
      return;
    }
    syncChildren(labelsRef.value.slice(0, -1));
  };

  const rotate = () => {
    if (labelsRef.value.length <= 1) {
      return;
    }
    const [first, ...rest] = labelsRef.value;
    syncChildren([...rest, first]);
  };

  const reset = () => syncChildren([...defaultSections]);

  return (
    <div>
      <div class="demo-section">
        <h3>Fragment Shorthand</h3>
        <p>
          Use <code>{'<>...</>'}</code> to return multiple siblings without adding an extra wrapper element.
        </p>
        <div class="demo-block fragment-row">
          <>
            <span class="fragment-pill fragment-pill--preview">Title</span>
            <span class="fragment-pill fragment-pill--preview">Description</span>
            <span class="fragment-pill fragment-pill--preview">Actions</span>
          </>
        </div>
        <p class="demo-desc">These pills are direct siblings in the container, so flex/grid layouts stay flat.</p>
      </div>

      <div class="demo-section">
        <h3>Reactive Fragment</h3>
        <p>
          Combine <code>Fragment</code> with a <code>ref</code> array to redraw sibling nodes in-place whenever the
          list changes.
        </p>
        <div class="demo-flex-gap">
          <Button variant="contained" color="primary" on:click={addItem}>
            Add Item
          </Button>
          <Button variant="contained" color="primary" on:click={removeItem}>
            Remove Last
          </Button>
          <Button variant="contained" color="primary" on:click={rotate}>
            Rotate
          </Button>
          <Button variant="contained" color="primary" on:click={reset}>
            Reset
          </Button>
        </div>
        <div class="demo-result">{summaryRef}</div>
        <div class="demo-block fragment-row">
          <Fragment children={childrenRef} />
        </div>
        <Code code={fragmentDemoCode} />
      </div>
    </div>
  );
}
