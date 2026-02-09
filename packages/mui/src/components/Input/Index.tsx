import { $modelOrRef, computed, deref, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';

import type { KTMuiTextField, InputTypes, KTMuiTextFieldProps } from './input.js';
import './Input.css';

export function TextField<T extends InputTypes = 'text'>(props: KTMuiTextFieldProps<T>): KTMuiTextField {
  // # events
  const onInput = props['on:input'] ?? $emptyFn;
  const onInputTrim = props['on-trim:input'] ?? $emptyFn;
  const onChange = props['on:change'] ?? $emptyFn;
  const onChangeTrim = props['on-trim:change'] ?? $emptyFn;
  const onBlur = props['on:blur'] ?? $emptyFn;
  const onFocus = props['on:focus'] ?? $emptyFn;

  const isFocusedRef = ref(false);

  // # methods

  const handleInput = () => {
    if (inputType === 'number') {
      const v = Number(inputEl.value);
      modelRef.value = v;
      onInput(v);
      onInputTrim(v);
    } else {
      modelRef.value = inputEl.value;
      onInput(inputEl.value);
      onInputTrim(inputEl.value.trim());
    }
  };

  const handleChange = () => {
    if (inputType === 'number') {
      const v = Number(inputEl.value);
      modelRef.value = v;
      onChange(v);
      onChangeTrim(v);
    } else {
      modelRef.value = inputEl.value;
      onChange(inputEl.value);
      onChangeTrim(inputEl.value.trim());
    }
  };

  const handleFocus = () => {
    isFocused.value = true;
    onFocus(inputEl.value);
  };

  const handleBlur = () => {
    isFocused.value = false;
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

  const getPlaceholder = () => (labelRef.value && !isFocused && !modelRef.value ? '' : placeholderRef.value);

  // # non-refs
  const inputType = deref(props.type ?? ('text' as T));
  const multiline = props.multiline;

  // # refs
  // Create refs for all reactive properties
  const labelRef = toReactive(props.label ?? '');
  const placeholderRef = toReactive(props.placeholder ?? '', () => (inputEl.placeholder = getPlaceholder()));
  const disabledRef = toReactive(props.disabled ?? false);
  const readOnlyRef = toReactive(props.readOnly ?? false);
  const requiredRef = toReactive(props.required ?? false);
  const errorRef = toReactive(props.error ?? false);
  const helperTextRef = toReactive(props.helperText ?? '');
  const fullWidthRef = toReactive(props.fullWidth ?? false);
  const rowsRef = toReactive(props.rows ?? 3);
  const sizeRef = toReactive(props.size ?? 'medium');

  // k-model takes precedence over value prop for two-way binding
  const modelRef = $modelOrRef(props, props.value ?? '');

  // Add change listeners for reactive properties
  // `k-if` changing triggers redrawing, no need to do this again
  // // labelRef.addOnChange(() => {
  // //   wrapperRef.redraw();
  // //   updateContainerClass();
  // // });

  const isFocused = ref(false);
  const inputEl = multiline
    ? ((
        <textarea
          class="mui-textfield-input"
          placeholder={getPlaceholder()}
          value={modelRef.value}
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
          type={inputType}
          class="mui-textfield-input"
          placeholder={getPlaceholder()}
          value={modelRef.value}
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

  const styleRef = toReactive($parseStyle(props.style ?? ''));
  const customClassRef = toReactive(props.class ?? '');
  const classRef = computed(() => {
    const className = [
      'mui-textfield-root',
      `mui-textfield-size-${sizeRef.value}`,
      isFocusedRef.value ? 'mui-textfield-focused' : '',
      errorRef.value ? 'mui-textfield-error' : '',
      disabledRef.value ? 'mui-textfield-disabled' : '',
      fullWidthRef.value ? 'mui-textfield-fullwidth' : '',
      labelRef.value && inputEl.value ? 'mui-textfield-has-value' : '',
      labelRef.value ? '' : 'mui-textfield-no-label',
      customClassRef.value ? customClassRef.value : '',
    ].join(' ');
    return className;
  }, [sizeRef, errorRef, disabledRef, fullWidthRef, labelRef, isFocusedRef, customClassRef]);

  // if (multiline) {
  //   rowsRef.addOnChange((newRows) => ((inputEl as HTMLTextAreaElement).rows = newRows));
  // }

  const container = (
    <div class={classRef} style={styleRef}>
      <div class="mui-textfield-wrapper" on:mousedown={handleWrapperMouseDown}>
        <label class="mui-textfield-label">
          {labelRef}
          <span k-if={requiredRef} class="mui-textfield-required">
            *
          </span>
        </label>
        <div class="mui-textfield-input-wrapper">{inputEl}</div>
        <fieldset class="mui-textfield-fieldset">
          <legend class="mui-textfield-legend">
            <span>
              {labelRef}
              <span k-if={requiredRef}>*</span>
            </span>
          </legend>
        </fieldset>
      </div>
      <p class="mui-textfield-helper-text">{helperTextRef}</p>
    </div>
  ) as KTMuiTextField;

  return container;
}
