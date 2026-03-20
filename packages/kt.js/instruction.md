# KT.js - AI Assistant Usage Guide

KT.js is a lightweight real-DOM framework with explicit reactive objects.

## Core Concepts

- **Real DOM**: JSX returns actual DOM nodes.
- **Run once**: Components do not auto re-execute.
- **Reactive objects**: Use `ref()` for state and `computed()` for derived values.
- **Read / write split**:
  - Read reactive data with `.state`
  - Write reactive data with `.mutable`
- **JSX convenience**: In JSX, prefer passing the reactive object itself, such as `{count}` or `class={className}`.

## Installation

```bash
npm install kt.js
```

## Basic Component

```tsx
import { ref } from 'kt.js';

function Counter() {
  const count = ref(0);

  return <button on:click={() => count.mutable++}>Count: {count}</button>;
}

document.body.appendChild(Counter());
```

## Reactive System

### ref()

```tsx
import { ref } from 'kt.js';

const count = ref(0);

console.log(count.state); // 0

count.mutable = 10;
count.mutable++;

count.addOnChange((next, prev) => {
  console.log(`Changed from ${prev} to ${next}`);
});
```

Deep writes should also go through `.mutable`:

```tsx
const profile = ref({ name: 'John', tags: ['admin'] });

profile.mutable.name = 'Jane';
profile.mutable.tags.push('editor');
```

If you bypass `.mutable` and mutate in place manually, call `notify()` yourself:

```tsx
const list = ref([1, 2]);
list.state.push(3);
list.notify();
```

### computed()

```tsx
import { ref, computed } from 'kt.js';

const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed(() => `${firstName.state} ${lastName.state}`, [firstName, lastName]);

console.log(fullName.state); // John Doe
```

## Directives

### k-model

```tsx
function InputComponent() {
  const text = ref('');
  return <input k-model={text} />;
}
```

### k-if / k-else

```tsx
const show = ref(true);

const element = (
  <>
    <div k-if={show}>Visible</div>
    <div k-else>Hidden</div>
  </>
);

show.mutable = false;
```

### k-for / k-key

```tsx
const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
]);

const list = (
  <li k-for="item in items" k-key="item.id">
    {item.name}
  </li>
);

items.mutable = [...items.state, { id: 3, name: 'Item 3' }];
```

### k-html

```tsx
const html = ref('<strong>trusted html</strong>');
const box = <div k-html={html} />;
```

## Dynamic Attributes

```tsx
const disabled = ref(false);
const className = computed(() => (disabled.state ? 'btn disabled' : 'btn'), [disabled]);

const button = <button class={className} disabled={disabled}>Submit</button>;
```

## Fragment and Element Refs

```tsx
import { Fragment, ref } from 'kt.js';

const childrenRef = ref([<span>A</span>, <span>B</span>]);
const fragment = <Fragment children={childrenRef} />;

childrenRef.mutable = [<span>C</span>];
```

```tsx
const inputRef = ref<HTMLInputElement>();
const element = <input ref={inputRef} />;

inputRef.state?.focus();
```

## Common Patterns

### Stateful Component

```tsx
function TodoApp() {
  const todos = ref<{ id: number; text: string }[]>([]);
  const inputText = ref('');

  const addTodo = () => {
    const text = inputText.state.trim();
    if (!text) {
      return;
    }

    todos.mutable = [...todos.state, { id: Date.now(), text }];
    inputText.mutable = '';
  };

  return (
    <div>
      <input k-model={inputText} placeholder="Add todo" />
      <button on:click={addTodo}>Add</button>
      <ul>
        <li k-for="todo in todos" k-key="todo.id">
          {todo.text}
        </li>
      </ul>
    </div>
  );
}
```

### Dynamic Styling

```tsx
const highlighted = ref(false);
const background = computed(() => (highlighted.state ? 'yellow' : 'white'), [highlighted]);

const box = (
  <div
    style={computed(() => ({ background: background.state, transition: 'background 0.3s' }), [background])}
    on:mouseenter={() => (highlighted.mutable = true)}
    on:mouseleave={() => (highlighted.mutable = false)}
  >
    Hover me!
  </div>
);
```

## Best Practices

1. Use `.state` only for reads.
2. Use `.mutable` for all writes, including deep object and array writes.
3. In JSX, prefer the reactive object itself instead of manually unwrapping it.
4. Always pass the dependency array to `computed()`.
5. Use `k-model`, `k-if`, `k-else`, and `k-for` as the primary JSX control-flow tools.

## Key Differences from Other Frameworks

| Feature | React/Vue | KT.js |
| --- | --- | --- |
| Rendering | Virtual DOM + auto scheduling | Real DOM + direct updates |
| State read | Hook/state getter | `ref.state` |
| State write | Setter / proxy mutation | `ref.mutable` |
| Derived state | Auto tracked | `computed(fn, deps)` |
| Component updates | Re-executes component | Component runs once |

KT.js keeps reactivity explicit and makes DOM updates predictable.
