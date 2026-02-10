# 调度与批处理（优先级 2）

## 目标
通过批处理减少同步 DOM 抖动，同时不改变“手动更新”的语义。

## 最小 API
```ts
export function batch(fn: () => void): void;
export function nextTick(fn: () => void): void;
export function flushSync(fn: () => void): void;
```

## 行为说明
- `batch(fn)`：延迟 DOM 替换，直到批处理结束。
- `nextTick(fn)`：在当前 flush 之后的微任务执行。
- `flushSync(fn)`：在函数内部强制立即刷新。

## 实现策略
- 维护全局更新队列（Set/Map）。
- `ref` 与 `computed` 的更新只入队，不直接 `replaceWith`。
- 不在 batch 时，用微任务触发 flush。
- 在 batch 内，等待 batch 结束统一 flush。

## 伪代码
```ts
let batchDepth = 0;
const queue = new Set<() => void>();
let scheduled = false;

function enqueue(job: () => void) {
  queue.add(job);
  if (batchDepth === 0 && !scheduled) {
    scheduled = true;
    queueMicrotask(flush);
  }
}

function flush() {
  scheduled = false;
  const jobs = Array.from(queue);
  queue.clear();
  for (const job of jobs) job();
}

export function batch(fn: () => void) {
  batchDepth++;
  try {
    fn();
  } finally {
    batchDepth--;
    if (batchDepth === 0) flush();
  }
}
```

## 接入点
- `KTRef.set value` 使用 `enqueue`，而非立即替换。
- `KTComputed` 的更新也进入队列。
- `KTFor` 在循环变更时可自动合并插入/删除。

## 收益
- 高并发更新更稳定。
- 为未来加入优先级调度留出接口。
