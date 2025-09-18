# KT.js

## Philosophy: No Forced Repaint

KT.js is designed with a simple but radical philosophy: **never repaint unless absolutely necessary**. Unlike most frontend frameworks that rely on frequent DOM diffing and re-rendering, KT.js believes in minimal DOM operations and maximum stability.

- **Direct DOM Manipulation**: KT.js works with the DOM as it is, updating only what truly needs to change. No virtual DOM, no diffing, no hidden magic.
- **Predictable UI**: Your UI remains stable and predictable. If you don't explicitly change something, KT.js won't touch it.
- **Performance First**: By avoiding unnecessary redraws, KT.js achieves high performance, especially in complex or dynamic interfaces.
- **Developer Control**: You decide when and what to update. KT.js gives you the tools, not the rules.

> "Just don't repaint. Let the DOM be."

KT.js is for developers who want full control, minimal abstraction, and a framework that respects the browser's native strengths.

---

For API details and usage, see the documentation and examples in the `example/` folder.
