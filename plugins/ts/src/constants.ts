export const DIAGNOSTIC_CANNOT_FIND_NAME = 2304;
export const DIAGNOSTIC_DRAFT_ESCAPE = 80001;

export const DIAGNOSTIC_SOURCE = '@ktjs/ts-plugin';

export const DRAFT_PROPERTY_NAME = 'draft';

export const DIAGNOSTIC_DRAFT_ASSIGN_MESSAGE =
  '`draft` itself cannot be assigned. Use `ref.value = nextValue` for whole-value replacement, or mutate nested fields via `ref.draft.xxx`.';

export const DIAGNOSTIC_DRAFT_UPDATE_MESSAGE = '`draft` itself cannot be updated. Update a nested field instead.';

export const DIAGNOSTIC_DRAFT_DELETE_MESSAGE = '`draft` itself cannot be deleted. Delete a nested field instead.';

export const DIAGNOSTIC_DRAFT_CALL_MESSAGE =
  '`draft` cannot escape through calls. Only nested writes or descendant method calls are allowed.';

export const DIAGNOSTIC_DRAFT_ESCAPE_MESSAGE =
  '`draft` cannot escape. Use `ref.value = nextValue` for whole-value replacement, or mutate nested fields or call descendant methods via `ref.draft.xxx`.';

export const IDENTIFIER_RE = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

export const KFOR_SINGLE_PATTERN = /^([A-Za-z_$][A-Za-z0-9_$]*)\s+(in|of)\s+([\s\S]+)$/;

export const KFOR_TUPLE_PATTERN =
  /^\(\s*([A-Za-z_$][A-Za-z0-9_$]*)(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?(?:\s*,\s*([A-Za-z_$][A-Za-z0-9_$]*))?\s*\)\s+(in|of)\s+([\s\S]+)$/;

export const MEMBER_COMPLETION_PATTERN =
  /([A-Za-z_$][A-Za-z0-9_$]*(?:\s*(?:\.\s*[A-Za-z_$][A-Za-z0-9_$]*|\[\s*(?:'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"|\d+)\s*\]))*)\s*\.\s*([A-Za-z_$][A-Za-z0-9_$]*)?$/;
