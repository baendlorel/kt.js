import { createRedrawable, KTRef, ref } from '@ktjs/core';
import './Input.css';
import { generateHandler, parseStyle } from '@ktjs/shared';
import type { KTMuiTextField, InputTypes, KTMuiTextFieldProps } from './input.js';

/**
 * TextField component - mimics MUI TextField appearance and behavior
 *
 * Supports reactive properties through KTRef:
 * - All properties (label, placeholder, value, type, disabled, readonly, required, error, helperText,
 *   fullWidth, multiline, rows, size) can be provided as either primitive values or KTRef
 * - When a KTRef is provided, changes to the ref will automatically update the component
 * - Two-way binding via `k-model` prop for input value
 * - Properties can also be get/set directly on the component instance (e.g., component.value = 'new')
 */
export function TextField<T extends InputTypes = 'text'>(props: KTMuiTextFieldProps<T>): KTMuiTextField {
  // # events
  const onInput = generateHandler<string | number>(props, 'kt:input');
  const onInputTrim = generateHandler<string | number>(props, 'kt-trim:input');
  const onChange = generateHandler<string | number>(props, 'kt:change');
  const onChangeTrim = generateHandler<string | number>(props, 'kt-trim:change');
  const onBlur = generateHandler<string | number>(props, 'kt:blur');
  const onFocus = generateHandler<string | number>(props, 'kt:focus');

  // # methods
  const updateContainerClass = () => {
    container.className = [
      'mui-textfield-root',
      `mui-textfield-size-${sizeRef.value}`,
      isFocused ? 'mui-textfield-focused' : '',
      errorRef.value ? 'mui-textfield-error' : '',
      disabledRef.value ? 'mui-textfield-disabled' : '',
      fullWidthRef.value ? 'mui-textfield-fullwidth' : '',
      labelRef.value && inputEl.value ? 'mui-textfield-has-value' : '',
      labelRef.value ? '' : 'mui-textfield-no-label',
    ].join(' ');
  };

  const handleInput = () => {
    updateContainerClass();

    if (typeRef.value === 'number') {
      const v = Number(inputEl.value);
      effectiveValueRef.value = v;
      onInput(v);
      onInputTrim(v);
    } else {
      effectiveValueRef.value = inputEl.value;
      onInput(inputEl.value);
      onInputTrim(inputEl.value.trim());
    }
  };

  const handleChange = () => {
    updateContainerClass();

    if (typeRef.value === 'number') {
      const v = Number(inputEl.value);
      effectiveValueRef.value = v;
      onChange(v);
      onChangeTrim(v);
    } else {
      effectiveValueRef.value = inputEl.value;
      onChange(inputEl.value);
      onChangeTrim(inputEl.value.trim());
    }
  };

  const handleFocus = () => {
    isFocused = true;
    updateContainerClass();
    onFocus(inputEl.value);
  };

  const handleBlur = () => {
    isFocused = false;
    updateContainerClass();
    onBlur(inputEl.value);
  };

  const handleWrapperMouseDown = (e: MouseEvent) => {
    if (disabledRef.value) {
      return;
    }
    const target = e.target as Node | null;
    if (!target || target === inputEl) {
      return;
    }
    setTimeout(() => inputEl.focus(), 0);
  };

  const getPlaceholder = () => (labelRef.value && !isFocused && !effectiveValueRef.value ? '' : placeholderRef.value);

  // # refs
  // Create refs for all reactive properties
  const labelRef = ref(props.label ?? '');
  const placeholderRef = ref(props.placeholder ?? '');
  const valueRef = ref(props.value ?? '');
  const typeRef = ref(props.type ?? ('text' as T));
  const disabledRef = ref(!!props.disabled);
  const readonlyRef = ref(!!props.readonly);
  const requiredRef = ref(!!props.required);
  const errorRef = ref(!!props.error);
  const helperTextRef = ref(props.helperText ?? '');
  const fullWidthRef = ref(!!props.fullWidth);
  const multiline = !!props.multiline;
  const rowsRef = ref(props.rows ?? 3);
  const sizeRef = ref(props.size ?? 'medium');

  // k-model takes precedence over value prop for two-way binding
  const modelRef = props['k-model'] as KTRef<string | number> | undefined;
  const effectiveValueRef = modelRef || valueRef;

  // Add change listeners for reactive properties
  labelRef.addOnChange(() => {
    wrapperRef.redraw();
    updateContainerClass();
  });

  placeholderRef.addOnChange(() => {
    inputEl.placeholder = getPlaceholder();
  });

  effectiveValueRef.addOnChange((newValue) => {
    inputEl.value = String(newValue);
    updateContainerClass();
  });

  typeRef.addOnChange((newType) => {
    (inputEl as any).type = newType;
  });

  disabledRef.addOnChange((newDisabled) => {
    inputEl.disabled = newDisabled;
    updateContainerClass();
  });

  readonlyRef.addOnChange((newReadonly) => {
    inputEl.readOnly = newReadonly;
  });

  requiredRef.addOnChange(() => {
    wrapperRef.redraw();
  });

  errorRef.addOnChange(updateContainerClass);

  helperTextRef.addOnChange((newText) => {
    helperTextEl.textContent = newText;
    helperTextEl.style.display = newText ? 'block' : 'none';
  });

  fullWidthRef.addOnChange(updateContainerClass);

  rowsRef.addOnChange((newRows) => {
    if (multiline && inputEl instanceof HTMLTextAreaElement) {
      inputEl.rows = newRows;
    }
  });

  sizeRef.addOnChange(updateContainerClass);

  let isFocused = false;
  const inputEl = multiline
    ? ((
        <textarea
          class="mui-textfield-input"
          placeholder={getPlaceholder()}
          value={String(effectiveValueRef.value)}
          disabled={disabledRef.value}
          readOnly={readonlyRef.value}
          required={requiredRef.value}
          rows={rowsRef.value}
          on:input={handleInput}
          on:change={handleChange}
          on:focus={handleFocus}
          on:blur={handleBlur}
        />
      ) as HTMLTextAreaElement)
    : ((
        <input
          type={typeRef.value as any}
          class="mui-textfield-input"
          placeholder={getPlaceholder()}
          value={String(effectiveValueRef.value)}
          disabled={disabledRef.value}
          readOnly={readonlyRef.value}
          required={requiredRef.value}
          on:input={handleInput}
          on:change={handleChange}
          on:focus={handleFocus}
          on:blur={handleBlur}
        />
      ) as HTMLInputElement);
  const helperTextEl = <p class="mui-textfield-helper-text">{helperTextRef.value}</p>;

  const wrapperRef = createRedrawable(() => (
    <div class="mui-textfield-wrapper" on:mousedown={handleWrapperMouseDown}>
      <label k-if={labelRef.value} class="mui-textfield-label">
        {labelRef.value}
        {requiredRef.value && <span class="mui-textfield-required">*</span>}
      </label>
      <div class="mui-textfield-input-wrapper">{inputEl}</div>
      <fieldset class="mui-textfield-fieldset">
        <legend k-if={labelRef.value} class="mui-textfield-legend">
          <span>
            {labelRef.value}
            {requiredRef.value && '*'}
          </span>
        </legend>
      </fieldset>
    </div>
  ));

  const container = (
    <div class={'mui-textfield-root ' + (props.class ? props.class : '')} style={parseStyle(props.style)}>
      {wrapperRef}
      {helperTextEl}
    </div>
  ) as KTMuiTextField;

  // Initialize classes
  setTimeout(() => updateContainerClass(), 0);

  return container;
}
