import { $modelOrRef, computed, dereactive, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import type { JSX, KTReactive } from '@ktjs/core';

import type { ChangeHandler } from '../../common/handler.js';
import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import './Input.css';
import { registerPrefixedEvents } from '../../common/attribute.js';

export type InputTypes = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';

export interface KTMuiTextFieldProps<T extends InputTypes = 'text'> extends KTMuiProps {
  'k-model'?: T extends 'number' ? KTReactive<number> : KTReactive<string>;
  label?: KTMaybeReactive<string>;
  placeholder?: KTMaybeReactive<string>;
  value?: any;
  type?: KTMaybeReactive<T>;
  disabled?: KTMaybeReactive<boolean>;
  readOnly?: KTMaybeReactive<boolean>;
  required?: KTMaybeReactive<boolean>;
  error?: KTMaybeReactive<boolean>;
  helperText?: KTMaybeReactive<string>;
  fullWidth?: KTMaybeReactive<boolean>;
  multiline?: boolean;
  rows?: KTMaybeReactive<number>;
  size?: 'small' | 'medium' | KTReactive<'small' | 'medium'>;
  'on:input'?: ChangeHandler<T extends 'number' ? number : T extends 'date' ? Date : string>;
  'on:change'?: ChangeHandler<T extends 'number' ? number : T extends 'date' ? Date : string>;
  'on:blur'?: () => void;
  'on:focus'?: () => void;
}

export type KTMuiTextField = JSX.Element;

export function TextField<T extends InputTypes = 'text'>(props: KTMuiTextFieldProps<T>): KTMuiTextField {
  // # events
  const onInput = props['on:input'] ?? $emptyFn;
  const onChange = props['on:change'] ?? $emptyFn;
  const onBlur = props['on:blur'] ?? $emptyFn;
  const onFocus = props['on:focus'] ?? $emptyFn;

  const isFocusedRef = ref(false);
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
    isFocusedRef.value = true;
    onFocus(inputEl.value);
  };

  const handleBlur = () => {
    isFocusedRef.value = false;
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

  // # non-refs
  const inputType = dereactive(props.type ?? ('text' as T));
  const multiline = props.multiline;

  // # refs
  // k-model takes precedence over value prop for two-way binding
  const modelRef = $modelOrRef(props, props.value ?? '');

  // Create refs for all reactive properties
  const labelRef = toReactive(props.label ?? '');
  const disabledRef = toReactive(props.disabled ?? false);
  const readOnlyRef = toReactive(props.readOnly ?? false);
  const requiredRef = toReactive(props.required ?? false);
  const errorRef = toReactive(props.error ?? false);
  const helperTextRef = toReactive(props.helperText ?? '');
  const fullWidthRef = toReactive(props.fullWidth ?? false);
  const rowsRef = toReactive(props.rows ?? 3);
  const sizeRef = toReactive(props.size ?? 'medium');

  const placeholder = toReactive(props.placeholder ?? '').toComputed(
    (v) => (labelRef.value && !isFocusedRef.value && !hasInputValue(modelRef.value) ? '' : v),
    [labelRef, isFocusedRef, modelRef],
  );

  const inputEl = multiline
    ? ((
        <textarea
          k-model={modelRef}
          class="mui-textfield-input"
          placeholder={placeholder}
          disabled={disabledRef}
          readOnly={readOnlyRef}
          required={requiredRef}
          rows={rowsRef}
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
          disabled={disabledRef}
          readOnly={readOnlyRef}
          required={requiredRef}
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
        `mui-textfield-size-${sizeRef.value}`,
        isFocusedRef.value ? 'mui-textfield-focused' : '',
        errorRef.value ? 'mui-textfield-error' : '',
        disabledRef.value ? 'mui-textfield-disabled' : '',
        fullWidthRef.value ? 'mui-textfield-fullwidth' : '',
        labelRef.value && hasInputValue(modelRef.value) ? 'mui-textfield-has-value' : '',
        labelRef.value ? '' : 'mui-textfield-no-label',
        customClass.value ? customClass.value : '',
      ].join(' '),
    [sizeRef, errorRef, disabledRef, fullWidthRef, labelRef, isFocusedRef, modelRef, customClass],
  );

  const labelElement = computed(() => {
    if (!labelRef.value) {
      return '';
    }

    return (
      <label class="mui-textfield-label">
        {labelRef}
        <span k-if={requiredRef} class="mui-textfield-required">
          *
        </span>
      </label>
    );
  }, [labelRef, requiredRef]);

  const legendElement = computed(() => {
    if (!labelRef.value) {
      return '';
    }

    return (
      <legend class="mui-textfield-legend">
        <span>
          {labelRef}
          <span k-if={requiredRef}>*</span>
        </span>
      </legend>
    );
  }, [labelRef, requiredRef]);

  const container = (
    <div class={className} style={style}>
      <div class="mui-textfield-wrapper" on:mousedown={handleWrapperMouseDown}>
        {labelElement}
        <div class="mui-textfield-input-wrapper">{inputEl}</div>
        <fieldset class="mui-textfield-fieldset">{legendElement}</fieldset>
      </div>
      <p class="mui-textfield-helper-text">{helperTextRef}</p>
    </div>
  ) as KTMuiTextField;

  registerPrefixedEvents(container, props, ['on:input', 'on:change', 'on:focus', 'on:blur']);

  return container;
}
