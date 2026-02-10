# API Sketch (Non-VDOM)

```ts
export interface KTScope {
  onDispose(fn: () => void): void;
  dispose(): void;
  attachToElement(el: Node): void;
}

export function createScope(): KTScope;
export function getCurrentScope(): KTScope | null;
export function onMount(fn: () => void): void;
export function onUnmount(fn: () => void): void;

export function batch(fn: () => void): void;
export function nextTick(fn: () => void): void;
export function flushSync(fn: () => void): void;
```
