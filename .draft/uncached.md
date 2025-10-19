# Uncached native methods and recommended utilities

This document lists native DOM/JS methods that are used across `src/` but are not yet cached (i.e. wrapped and exported from `src/lib/*`). For each entry I give: suggested cached name, where it's used, and reasoning.

## Summary

- Files scanned: `src/**` (core, lib, shortcuts, utils)
- Existing cached files reviewed: `src/lib/native.ts`, `src/lib/dom.ts`, `src/lib/whether.ts`

## Recommended cached methods

1. $getAttribute
   - Native: `Element.prototype.getAttribute`
   - Used in: `tests/h/basic.test.ts` (assertions), potentially elsewhere
   - Suggested export name: `$getAttribute`
   - Reason: frequently used for reading attributes; caching avoids repeated prototype lookups and allows consistent `.call(element, ...)` style like other helpers.

2. $removeChild
   - Native: `Node.prototype.removeChild`
   - Used in: `tests/h/lifecycle.test.ts` and in draft code (`draft/structure.md`), and likely in runtime when removing nodes.
   - Suggested export name: `$removeChild`
   - Reason: append/remove operations are common; currently `$appendChild` is cached but remove is not.

3. $replaceWith
   - Native: `ChildNode.prototype.replaceWith` / `Element.prototype.replaceWith`
   - Used in: `draft/structure.md` (structure examples). Useful for element replacement flows.
   - Suggested export name: `$replaceWith`

4. $remove
   - Native: `ChildNode.prototype.remove`
   - Used in: `draft/structure.md` (animation end handlers). Simpler API for node removal.
   - Suggested export name: `$remove`

5. $cloneNode
   - Native: `Node.prototype.cloneNode`
   - Used in: potential DOM manipulation paths (not explicitly found in scanned files but commonly needed).
   - Suggested export name: `$cloneNode`

6. $matches
   - Native: `Element.prototype.matches`
   - Used in: selector-matching logic or delegated event handlers (not explicitly present in core but often used).
   - Suggested export name: `$matches`

7. $closest
   - Native: `Element.prototype.closest`
   - Used in: delegation and ancestor lookups (draft/structure patterns). Cache for consistency.
   - Suggested export name: `$closest`

8. $querySelector / $querySelectorAll
   - Native: `Element.prototype.querySelector`, `Element.prototype.querySelectorAll`, and `Document.prototype.querySelector(All)`
   - Used in: `src/index.ts` uses `getElementById` and fallback to `document.body`; other modules or examples may use queries.
   - Suggested export names: `$querySelector`, `$querySelectorAll`, `$docQuerySelector`, `$docQuerySelectorAll` (or export generic wrappers that accept root)

9. $setAttribute
   - Note: there is already `$setAttr` exported from `src/lib/dom.ts` which wraps `setAttribute`, but other attribute helpers like `removeAttribute`, `hasAttribute` are not cached.
   - Suggested export names: `$removeAttr`, `$hasAttr`

10. classList helpers
    - Methods: `classList.add`, `classList.remove`, `classList.contains`, `classList.toggle`
    - Usage: `src/core/h/attr.ts` calls `element.classList.add(...attr.class)`, and tests use `classList.contains` directly on elements.
    - Suggested approach: cache `DOMTokenList.prototype.contains` as `$classContains` and optionally wrap `add/remove` in small helpers (or provide `$classListAdd`/`$classListRemove`) to keep consistent `.call` usage when needed.

11. Node insertion helpers
    - Methods: `insertBefore`, `replaceChild`
    - Reason: `appendChild` and `createElement` are cached; sibling insertion / replacement functions are natural additions.
    - Suggested names: `$insertBefore`, `$replaceChild`

12. Attribute getters/setters for form elements
    - e.g. property reads like `element.value`, `element.checked`, `element.selected` are currently handled as direct property accesses in code (fine). No caching needed for simple property access, but consider helper for `element.style` assignments (already using `$assign`).

## Suggested utility wrappers (high-level helpers)

- $matchesClosest(el, selector): wrapper that uses cached `$matches`and`$closest` with fallback shims for older browsers.
- $safeRemove(el): uses `$remove`or`$removeChild` safely checking parent.
- $replace(el, newEl): use `$replaceWith`if available, otherwise fallback to`parentNode.replaceChild(newEl, el)`using cached`$replaceChild`/`$insertBefore`.
- $query(root, sel): uses cached `$querySelector`/`$docQuerySelector` and normalizes the return (null vs undefined).

## Rationale and priority

- High priority: `$removeChild`, `$remove`, `$replaceWith`, `$getAttribute`, `$matches`, `$closest`, `$querySelector(All)` — these are common DOM ops and complement existing `$appendChild`, `$createElement`, etc.
- Medium: classList method wrappers and node insertion helpers.
- Low: `$cloneNode` and some less-used APIs.

## Suggested file and export pattern

- Add new exports into `src/lib/dom.ts` alongside existing `$appendChild`, `$setAttr`.
- Keep naming consistent with `$` prefix and `.call` usage so callers can do `$removeChild.call(parent, child)` or helper wrappers like `$remove(node)`.

## Notes & Evidence

- `src/lib/dom.ts` already provides `$getElementById`, `$createElement`, `$createTextNode`, `$on`, `$off`, `$appendChild`, `$setAttr`.
- Tests and core code reference other DOM methods (see `tests/h/*.test.ts` and `src/core/*`).

If you want, I can implement these cached wrappers in `src/lib/dom.ts` and update `src/lib/index.ts` exports; I can also add lightweight unit tests for them. Tell me which items you'd like me to implement now (I recommend starting with `$remove`, `$removeChild`, `$replaceWith`, `$getAttribute`, `$querySelector(All)`, `$matches`, `$closest`).
