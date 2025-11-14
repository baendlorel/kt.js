# @ktjs/router

Client-side router with navigation guards for KT.js.

## Features

- **Path matching**: Static and dynamic route matching
- **Navigation guards**: `beforeEach`, `afterEach`, `beforeEnter`
- **Async/sync support**: Automatically adapts to environment
- **Named routes**: Navigate by route name
- **Query parameters**: Built-in query string support

## Installation

```bash
pnpm add @ktjs/router @ktjs/core
```

## Usage

```typescript
import { createRouter } from '@ktjs/router';

const router = createRouter({
  routes: [
    { path: '/', name: 'home' },
    { path: '/user/:id', name: 'user' },
  ],
  beforeEach: (to, from) => {
    console.log('Navigating to:', to.path);
    return true;
  },
});

router.push('/user/123');
```

## License

MIT
