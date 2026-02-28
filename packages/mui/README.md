# @ktjs/mui

Material-UI inspired components for kt.js framework.

## Installation

### Create a KT.js project

```bash
pnpm create kt.js my-app
```

### Add MUI components to an existing project

```bash
pnpm add @ktjs/mui
```

## Usage

```tsx
import { Button, Alert, Dialog, Pill, Badge, Popover } from '@ktjs/mui';

// Create a button
const myButton = (
  <Button variant="contained" color="primary">
    Click me
  </Button>
);
```

Styles are injected automatically through Emotion when components are imported.

## Available Components

- **Alert** - Display alert messages with different severity levels
- **Button** - Material-style buttons with variants and colors
- **Pill** - Chip-like pill labels with variants and colors
- **Badge** - Numeric and dot badges for status/count overlays
- **Dialog** - Modal dialogs
- **Popover** - Anchor-based floating layers
- **FormLabel** - Form labels for inputs
- **Input** - Text input fields
- **LinearProgress** - Progress bars
- **Radio** - Radio buttons
- **Select** - Dropdown select components
- **Icons** - Various SVG icons

## Development

```bash
# Build the package
pnpm build

# Watch mode for development
pnpm dev
```

## License

MIT
