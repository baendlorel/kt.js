# @ktjs/mui

Material-UI inspired components for kt.js framework.

## Installation

```bash
pnpm add @ktjs/mui
```

## Usage

```tsx
import { Button, Alert, Dialog } from '@ktjs/mui';
import '@ktjs/mui/styles.css';

// Create a button
const myButton = (
  <Button variant="contained" color="primary">
    Click me
  </Button>
);
```

## Available Components

- **Alert** - Display alert messages with different severity levels
- **Button** - Material-style buttons with variants and colors
- **Dialog** - Modal dialogs
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
