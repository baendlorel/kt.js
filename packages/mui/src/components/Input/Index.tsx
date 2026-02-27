import { $modelOrRef, computed, dereactive, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';

import type { KTMuiTextField, InputTypes, KTMuiTextFieldProps } from './input.js';
import './Input.css';
import { registerPrefixedEvents } from '../../common/attribute.js';

export function TextField<T extends InputTypes = 'text'>(props: KTMuiTextFieldProps<T>): KTMuiTextField {
  // # events
  const onInput = props['on:input'] ?? $emptyFn;
  const onChange = props['on:change'] ?? $emptyFn;
  const onBlur = props['on:blur'] ?? $emptyFn;
  const onFocus = props['on:focus'] ?? $emptyFn;

  const isFocused = ref(false);
  const hasInputValue = (value: unknown) => value !== '' && value !== null && value !== undefined;

  // # methods

  /**
   * ! This would work only when model is registered before this3
   * ! which is determined by `core/src/h/index.ts`
   */
  const handleInput = () => onInput(modelRef.value);

  /**
   * ! This would work only when model is registered before this3
   * ! which is determined by `core/src/h/index.ts`
   */
  const handleChange = () => onChange(modelRef.value);

  const handleFocus = () => {
    isFocused.value = true;
    onFocus(inputEl.value);
  };

  const handleBlur = () => {
    isFocused.value = false;
    onBlur(inputEl.value);
  };

  const handleWrapperMouseDown = (e: MouseEvent) => {
    if (disabled.value) {
      return;
    }
    const target = e.target as Node | null;
    if (!target || target === inputEl) {
      return;
    }
    setTimeout(() => inputEl.focus(), 0);
  };

  // # non-refs
  const inputType = dereactive(props.type ?? ('text' as T));
  const multiline = props.multiline;

  // # refs
  // k-model takes precedence over value prop for two-way binding
  const modelRef = $modelOrRef(props, props.value ?? '');

  // Create refs for all reactive properties
  const label = toReactive(props.label ?? '');
  const placeholder = toReactive(props.placeholder ?? '').toComputed(
    (v) => (label.value && !isFocused.value && !hasInputValue(modelRef.value) ? '' : v),
    [label, isFocused, modelRef],
  );
  const disabled = toReactive(props.disabled ?? false);
  const readOnly = toReactive(props.readOnly ?? false);
  const required = toReactive(props.required ?? false);
  const error = toReactive(props.error ?? false);
  const helperText = toReactive(props.helperText ?? '');
  const fullWidth = toReactive(props.fullWidth ?? false);
  const rows = toReactive(props.rows ?? 3);
  const size = toReactive(props.size ?? 'medium');

  const inputEl = multiline
    ? ((
        <textarea
          k-model={modelRef}
          class="mui-textfield-input"
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          rows={rows}
          on:input={handleInput}
          on:change={handleChange}
          on:focus={handleFocus}
          on:blur={handleBlur}
        />
      ) as HTMLTextAreaElement)
    : ((
        <input
          k-model={modelRef}
          type={inputType}
          class="mui-textfield-input"
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          on:input={handleInput}
          on:change={handleChange}
          on:focus={handleFocus}
          on:blur={handleBlur}
        />
      ) as HTMLInputElement);
  modelRef.addOnChange((newValue) => (inputEl.value = newValue));

  const style = toReactive($parseStyle(props.style));
  const customClass = toReactive(props.class ?? '');
  const className = computed(
    () =>
      [
        'mui-textfield-root',
        `mui-textfield-size-${size.value}`,
        isFocused.value ? 'mui-textfield-focused' : '',
        error.value ? 'mui-textfield-error' : '',
        disabled.value ? 'mui-textfield-disabled' : '',
        fullWidth.value ? 'mui-textfield-fullwidth' : '',
        label.value && hasInputValue(modelRef.value) ? 'mui-textfield-has-value' : '',
        label.value ? '' : 'mui-textfield-no-label',
        customClass.value ? customClass.value : '',
      ].join(' '),
    [size, error, disabled, fullWidth, label, isFocused, modelRef, customClass],
  );

  const labelElement = computed(() => {
    if (!label.value) {
      return '';
    }

    return (
      <label class="mui-textfield-label">
        {label}
        <span k-if={required} class="mui-textfield-required">
          *
        </span>
      </label>
    );
  }, [label, required]);

  const legendElement = computed(() => {
    if (!label.value) {
      return '';
    }

    return (
      <legend class="mui-textfield-legend">
        <span>
          {label}
          <span k-if={required}>*</span>
        </span>
      </legend>
    );
  }, [label, required]);

  const container = (
    <div class={className} style={style}>
      <div class="mui-textfield-wrapper" on:mousedown={handleWrapperMouseDown}>
        {labelElement}
        <div class="mui-textfield-input-wrapper">{inputEl}</div>
        <fieldset class="mui-textfield-fieldset">{legendElement}</fieldset>
      </div>
      <p class="mui-textfield-helper-text">{helperText}</p>
    </div>
  ) as KTMuiTextField;

  registerPrefixedEvents(container, props, ['on:input', 'on:change', 'on:focus', 'on:blur']);

  return container;
}
