# Fragment Component - Usage Guide

## Overview

The Fragment component is a core utility in KT.js for managing arrays of DOM elements with reactive updates. It provides a way to handle dynamic lists of elements that automatically update when the underlying array changes, following KT.js's philosophy of "zero forced re-renders, direct DOM manipulation."

## Key Features

1. **Anchor-based DOM management**: Returns a comment anchor node, with child elements inserted after the anchor
2. **Reactive array support**: Automatically updates DOM when the array of elements changes
3. **Simple replacement algorithm**: Basic version removes all old elements and inserts all new elements
4. **Future key-based optimization**: Planned enhancement for minimal DOM updates using key-based diffing
5. **JSX integration**: Seamless integration with KT.js JSX runtime

## API Reference

### FragmentProps Interface

```typescript
interface FragmentProps {
  /** Array of child elements, supports reactive arrays */
  children: HTMLElement[] | KTReactive<HTMLElement[]>;

  /** Optional: element key function for optimization (future enhancement) */
  key?: (element: HTMLElement, index: number, array: HTMLElement[]) => any;

  /** Optional: ref to get the anchor node */
  ref?: KTRef<JSX.Element>;
}
```

### Fragment Component

```typescript
export function Fragment(props: FragmentProps): JSX.Element;
```

**Returns**: A comment node (`<!-- kt-fragment -->`) that serves as an anchor. Child elements are inserted after this anchor.

### convertChildrenToElements Utility

```typescript
export function convertChildrenToElements(children: KTRawContent): HTMLElement[];
```

Converts JSX children (which can be arrays, strings, numbers, elements, or reactive values) into a flat array of HTMLElement objects.

## Basic Usage

### Creating a Fragment with Reactive Children

```tsx
import { Fragment, ref } from 'kt.js';

// Create a reactive array of elements
const children = ref([
  <div className="item">Item 1</div>,
  <div className="item">Item 2</div>,
  <div className="item">Item 3</div>
]);

// Create Fragment component
const fragment = <Fragment children={children} />;

// Append to DOM
document.getElementById('app').appendChild(fragment);
```

### Updating Children Array

```tsx
// Update the array - DOM automatically updates
children.value = [
  <div className="item">Item A</div>,
  <div className="item">Item B</div>
];

// Add more elements
children.value = [...children.value, <div className="item">Item C</div>];
```

## JSX Syntax Support

The Fragment component also supports the JSX Fragment syntax (`<>...</>`) through the JSX runtime:

```tsx
// Using JSX Fragment syntax
function MyComponent() {
  const items = ref(['A', 'B', 'C']);

  return (
    <>
      <h1>My List</h1>
      <Fragment children={
        items.value.map(item => <div key={item}>{item}</div>)
      } />
    </>
  );
}
```

## How It Works

### Anchor Mechanism

1. **Anchor Creation**: The Fragment creates a comment node `<!-- kt-fragment -->` as an anchor
2. **Element Insertion**: Child elements are inserted into the DOM after this anchor
3. **State Tracking**: The anchor stores the current element array in `__kt_fragment_list__` property
4. **DOM Updates**: When children change, old elements are removed and new elements inserted

### Reactive Integration

The component uses KT.js's reactive system:
1. **`toReactive()`**: Wraps the children array in a reactive reference
2. **Change Listener**: Registers the `redraw()` function as a change listener
3. **Automatic Updates**: When the reactive value changes, `redraw()` is called automatically

### Redraw Algorithm

The current implementation uses a simple replacement strategy:

```typescript
function redraw() {
  // 1. Remove all old elements from DOM
  // 2. Insert all new elements after the anchor
  // 3. Update internal state
}
```

Future versions will implement key-based diffing for minimal DOM operations.

## Integration with KT.js Ecosystem

### With KTFor Component

The Fragment component provides the foundation for `KTFor`'s list rendering:

```tsx
// Conceptual implementation
function KTFor<T>({ list, map, key }: KTForProps<T>) {
  const elements = computed(() =>
    deref(list).map((item, idx) => map(item, idx, deref(list)))
  );

  return <Fragment children={elements} key={/* key function */} />;
}
```

### With Reactive System

Works seamlessly with `ref()`, `computed()`, and `surfaceRef()`:

```tsx
const itemList = ref([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
const filteredItems = computed(() =>
  itemList.value.filter(item => item.id > 1)
);

const fragment = <Fragment children={
  filteredItems.value.map(item => <div>{item.name}</div>)
} />;
```

## Error Handling

### Invalid ref Type

If a non-KTRef object is passed to the `ref` prop, the component throws an error:

```typescript
$throw('Fragment: ref must be a KTRef');
```

### Unsupported Child Types

The `convertChildrenToElements` function handles various child types:

- **Ignored**: `null`, `undefined`, `true`, `false`
- **String/Number**: Wrapped in `<span>` elements
- **HTMLElement**: Added directly to array
- **Arrays**: Processed recursively
- **KTRef/KTComputed**: Unwrapped and processed
- **Other types**: Warning logged to console

## Performance Considerations

### Current Implementation

- **Initial render**: O(n) where n = number of elements
- **Updates**: O(n + m) where n = old elements, m = new elements (full replacement)
- **Memory**: Stores element array reference on anchor node

### Future Optimizations

1. **Key-based diffing**: Reuse `getSequence` algorithm from `KTFor`
2. **DOM move operations**: Only move elements that changed position
3. **Batch updates**: Use document fragments for better performance

## Common Patterns

### Dynamic List Creation

```tsx
function DynamicList({ items }: { items: string[] }) {
  const elementArray = items.map(item =>
    <li className="list-item">{item}</li>
  );

  return <Fragment children={elementArray} />;
}
```

### Conditional Rendering with Fragment

```tsx
function UserList({ users, isLoading }: UserListProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const userElements = users.map(user =>
    <UserCard user={user} key={user.id} />
  );

  return (
    <div className="user-list">
      <Fragment children={userElements} />
    </div>
  );
}
```

### Integration with Event Handlers

```tsx
const buttons = ref([
  <button onClick={() => console.log('Button 1')}>Button 1</button>,
  <button onClick={() => console.log('Button 2')}>Button 2</button>
]);

// Update buttons while preserving event handlers
buttons.value = buttons.value.map((button, index) => {
  const newButton = button.cloneNode(true) as HTMLButtonElement;
  newButton.onclick = () => console.log(`Button ${index + 1} clicked`);
  return newButton;
});
```

## Migration Guide

### From Manual Array Management

**Before**:
```typescript
const container = document.getElementById('container');
const elements = [];

function updateList(newItems) {
  // Manually clear container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Manually add new elements
  newItems.forEach(item => {
    const el = createElement(item);
    container.appendChild(el);
    elements.push(el);
  });
}
```

**After**:
```typescript
const children = ref([]);

const fragment = <Fragment children={children} />;
document.getElementById('container').appendChild(fragment);

function updateList(newItems) {
  // Automatic DOM update
  children.value = newItems.map(item => createElement(item));
}
```

## Best Practices

1. **Use for Dynamic Arrays**: Fragment is ideal for arrays that change over time
2. **Consider KTFor for Data Mapping**: Use `KTFor` when mapping data arrays to elements
3. **Reuse Element References**: When possible, reuse element references instead of creating new ones
4. **Batch Updates**: Update the array once with all changes rather than multiple incremental updates
5. **Clean Up**: When removing Fragment from DOM, ensure reactive subscriptions are cleaned up

## Limitations and Future Work

### Current Limitations

1. **Simple replacement**: Full DOM replacement on updates
2. **No key optimization**: Cannot preserve element state during reordering
3. **Memory leaks**: Potential memory leaks if not properly cleaned up (future fix needed)

### Planned Enhancements

1. **Key-based diffing**: Implement `getSequence` algorithm for minimal DOM operations
2. **Transition support**: Add animation support for element addition/removal
3. **Virtual scrolling**: Integration with virtual scrolling for large lists
4. **TypeScript improvements**: Better type inference for JSX Fragment syntax

## See Also

- [KTFor Component](../packages/core/src/jsx/for.js) - Data-driven list rendering
- [Reactive System](../packages/core/src/reactive/) - `ref()`, `computed()`, `toReactive()`
- [JSX Runtime](../packages/core/src/jsx/jsx-runtime.ts) - Fragment JSX integration
- [Design Document](./fragment.md) - Chinese design rationale and architecture