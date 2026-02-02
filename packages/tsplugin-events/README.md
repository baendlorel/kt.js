# @ktjs/tsplugin-events

TypeScript plugin for KT.js to support Vue-style `@event` shorthand in JSX/TSX.

## Features

- **TypeScript Language Service Plugin**: Filters out errors for `@event` attributes (e.g., `@click`, `@input`, `@change`)
- **Compiler Transformer**: Optionally transforms `@event` to `on:event` during compilation
- **KT.js Integration**: Works seamlessly with KT.js event handling system

## Installation

```bash
pnpm add -D @ktjs/tsplugin-events
# or
npm install --save-dev @ktjs/tsplugin-events
# or
yarn add -D @ktjs/tsplugin-events
```

## Usage

### As a TypeScript Language Service Plugin (Recommended)

Add the plugin to your `tsconfig.json` to get error suppression and better editor support:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "kt.js",
    "plugins": [
      {
        "name": "@ktjs/tsplugin-events"
      }
    ]
  }
}
```

This configuration will:
- Suppress TypeScript errors for `@event` attributes in JSX
- Allow you to write Vue-style event handlers in KT.js

### As a Compiler Transformer

If you want to transform `@event` to `on:event` during compilation, you can use the transformer:

```typescript
import { createTransformer } from '@ktjs/tsplugin-events';

// Use with tsc or other TypeScript compilation tools
const transformer = createTransformer();
```

To use with `tsc`, you'll need a custom compilation pipeline. The transformer is primarily provided for advanced use cases.

## Example

With this plugin, you can write:

```tsx
import { h } from '@ktjs/core/jsx';

const Component = () => (
  <div>
    <button @click={() => console.log('Clicked!')}>
      Click me
    </button>
    <input @input={(e) => console.log('Input:', e.target.value)} />
    <form @submit={(e) => { e.preventDefault(); console.log('Submitted'); }}>
      <button type="submit">Submit</button>
    </form>
  </div>
);
```

Without the plugin, TypeScript would report errors like:
- `Property '@click' does not exist on type '...'`
- `Property '@input' does not exist on type '...'`

With the plugin, these errors are suppressed, allowing you to use the Vue-style shorthand.

## How It Works

### Language Service Plugin
The plugin intercepts TypeScript's semantic diagnostics and filters out errors related to `@event` attributes. When TypeScript checks JSX and encounters an attribute starting with `@`, it normally reports an error because such attributes aren't defined in the JSX type definitions. This plugin removes those specific errors.

### Compiler Transformer
The transformer actually rewrites the AST during compilation, converting:
- `@click` → `on:click`
- `@input` → `on:input`
- `@change` → `on:change`
- etc.

This transformation happens at compile time, so the runtime code uses KT.js's native `on:event` syntax.

## Compatibility

- **TypeScript**: 4.0+
- **KT.js**: 0.21.0+
- **JSX/TSX**: Requires `jsx: "react-jsx"` and `jsxImportSource: "kt.js"`

## Notes

1. The plugin only handles error suppression for attributes starting with `@`. The actual event handling is still performed by KT.js at runtime.

2. For the transformer to work, you need to ensure the transformed code (`on:event`) matches KT.js's event system. KT.js expects event handlers to be passed as `on:event` attributes.

3. This plugin does not add TypeScript type checking for `@event` attributes. It only suppresses the "property does not exist" errors. The actual type checking happens on the transformed `on:event` attributes if you use the compiler transformer.

## Development

```bash
# Build the package
pnpm build

# Watch mode for development
pnpm dev
```

## License

MIT