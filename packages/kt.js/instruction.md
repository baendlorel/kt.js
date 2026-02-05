# KT.js - AI Assistant Usage Guide

KT.js is a lightweight, manual-control web framework that creates real DOM elements with reactive state management.

## Core Concepts

- **Real DOM**: JSX creates actual HTMLElements, no virtual DOM
- **Manual Updates**: You control when DOM updates happen
- **Reactive State**: Use `ref()` and `computed()` for reactive values
- **No Auto-rendering**: Components don't re-execute automatically

## Basic Usage

### Installation
```bash
npm install kt.js
```

### Basic Component
```tsx
import { ref } from 'kt.js';

function Counter() {
  const count = ref(0);
  
  const button = <button on:click={() => count.value++}>
    Count: {count.value}
  </button>;
  
  return button;
}

// Mount to DOM
document.body.appendChild(Counter());
```

## Reactive System

### ref() - Reactive References
```tsx
import { ref } from 'kt.js';

// Create reactive value
const count = ref(0);

// Access value
console.log(count.value); // 0

// Update value
count.value = 10;

// React to changes
count.addOnChange((newVal, oldVal) => {
  console.log(`Changed from ${oldVal} to ${newVal}`);
});
```

### computed() - Computed Values
```tsx
import { ref, computed } from 'kt.js';

const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed(() => `${firstName.value} ${lastName.value}`);

console.log(fullName.value); // "John Doe"
```

### k-model - Two-way Binding
```tsx
function InputComponent() {
  const text = ref('');
  
  return <input k-model={text} />;
}
```

## JSX Features

### Conditional Rendering with k-if
```tsx
const show = ref(true);

const element = <div k-if={show}>
  This content is conditionally rendered
</div>;

// Toggle visibility
show.value = false; // Element becomes comment placeholder
```

### List Rendering with KTFor
```tsx
import { KTFor, ref } from 'kt.js';

const items = ref([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);

const list = <KTFor
  list={items.value}
  key={(item) => item.id}
  map={(item) => <div>{item.name}</div>}
/>;

// Update list
items.value = [...items.value, { id: 3, name: 'Item 3' }];
```

### Event Handling
```tsx
const handleClick = (event) => {
  console.log('Clicked!', event);
};

const button = <button on:click={handleClick}>
  Click me
</button>;
```

### Dynamic Attributes
```tsx
const isActive = ref(true);
const className = ref('btn-primary');

const button = <button 
  class={className.value}
  disabled={!isActive.value}
>
  Dynamic Button
</button>;
```

## Component Patterns

### Function Components
```tsx
function Greeting({ name = 'World' }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
document.body.appendChild(Greeting({ name: 'KT.js' }));
```

### Stateful Components
```tsx
function TodoApp() {
  const todos = ref([]);
  const inputText = ref('');
  
  const addTodo = () => {
    if (inputText.value.trim()) {
      todos.value = [...todos.value, {
        id: Date.now(),
        text: inputText.value.trim()
      }];
      inputText.value = '';
    }
  };
  
  return (
    <div>
      <input k-model={inputText} placeholder="Add todo" />
      <button on:click={addTodo}>Add</button>
      <KTFor
        list={todos.value}
        key={(todo) => todo.id}
        map={(todo) => <div>{todo.text}</div>}
      />
    </div>
  );
}
```

### createRedrawable() - Redrawable Elements
```tsx
import { createRedrawable, ref } from 'kt.js';

function DynamicCounter() {
  const count = ref(0);
  
  const counter = createRedrawable(() => 
    <div>
      Count: {count.value}
      <button on:click={() => count.value++}>+</button>
    </div>
  );
  
  // Redraw when count changes
  count.addOnChange(() => {
    counter.redraw();
  });
  
  return counter;
}
```

## Advanced Patterns

### Surface References
```tsx
import { surfaceRef } from 'kt.js';

const user = surfaceRef({
  name: 'John',
  age: 30
});

// Access reactive properties
user.name.value = 'Jane';

// Get original object
const original = user.kcollect();
```

### Async Components
```tsx
import { KTAsync } from 'kt.js';

function AsyncData() {
  return <KTAsync
    promise={fetch('/api/data').then(r => r.json())}
    pending={() => <div>Loading...</div>}
    then={(data) => <div>Data: {data}</div>}
    catch={(error) => <div>Error: {error.message}</div>}
  />;
}
```

## DOM Manipulation

### Manual Updates
```tsx
const element = <div>Initial content</div>;

// Update content manually
element.textContent = 'Updated content';

// Or use redraw pattern
const content = ref('Initial');
const redrawable = createRedrawable(() => <div>{content.value}</div>);
content.value = 'Updated'; // Then call redrawable.redraw()
```

### Element References
```tsx
const myRef = ref<HTMLElement>();

const element = <div ref={myRef}>
  This element has a reference
</div>;

// Access the element
console.log(myRef.value); // The actual div element
```

## Best Practices

1. **Use ref() for state**: Always wrap mutable state in `ref()`
2. **Use k-if for conditionals**: More efficient than manual DOM manipulation
3. **Use KTFor for lists**: Provides key-based optimization
4. **Handle events with on: prefix**: Standard event binding syntax
5. **Use k-model for inputs**: Two-way binding convenience
6. **Create redrawable components**: For complex update scenarios

## Common Patterns

### Form Handling
```tsx
function ContactForm() {
  const form = surfaceRef({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form.kcollect());
  };
  
  return (
    <form on:submit={handleSubmit}>
      <input k-model={form.name} placeholder="Name" />
      <input k-model={form.email} placeholder="Email" />
      <textarea k-model={form.message} placeholder="Message" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Dynamic Styling
```tsx
const isHighlighted = ref(false);

const box = <div 
  style={{
    background: isHighlighted.value ? 'yellow' : 'white',
    transition: 'background 0.3s'
  }}
  on:mouseenter={() => isHighlighted.value = true}
  on:mouseleave={() => isHighlighted.value = false}
>
  Hover me!
</div>;
```

## Key Differences from Other Frameworks

| Feature | React/Vue | KT.js |
|---------|-----------|--------|
| Rendering | Virtual DOM + Auto | Real DOM + Manual |
| State | Reactive system | Manual ref()/computed() |
| Updates | Automatic | Manual via redraw() |
| Components | Re-execute on state change | Execute once, update manually |
| JSX Output | Virtual nodes | Real HTMLElements |

KT.js gives you complete control over when and how your UI updates, making it ideal for performance-critical applications where you want to minimize unnecessary DOM operations.
