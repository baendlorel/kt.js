import { assertModel, computed, ref, toReactive, KTConditional } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import type { JSX, KTReactive } from '@ktjs/core';

import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import './FilePicker.css.ts';
import { registerPrefixedEvents } from '../../common/attribute.js';

export type KTMuiFilePickerSize = 'small' | 'medium';

export interface KTMuiFilePickerProps extends KTMuiProps {
  'k-model'?: KTReactive<File[]>;
  label?: KTMaybeReactive<string>;
  placeholder?: KTMaybeReactive<string>;
  value?: File[];
  accept?: KTMaybeReactive<string>;
  multiple?: KTMaybeReactive<boolean>;
  disabled?: KTMaybeReactive<boolean>;
  readOnly?: KTMaybeReactive<boolean>;
  required?: KTMaybeReactive<boolean>;
  error?: KTMaybeReactive<boolean>;
  helperText?: KTMaybeReactive<string>;
  fullWidth?: KTMaybeReactive<boolean>;
  size?: KTMuiFilePickerSize | KTReactive<KTMuiFilePickerSize>;
  buttonText?: KTMaybeReactive<string>;
  showFileCount?: KTMaybeReactive<boolean>;
  'on:change'?: (files: File[]) => void;
  'on:blur'?: () => void;
  'on:focus'?: () => void;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export type KTMuiFilePicker = JSX.Element;

export function FilePicker(props: KTMuiFilePickerProps): KTMuiFilePicker {
  // # events
  const onChange = props['on:change'] ?? $emptyFn;
  const onBlur = props['on:blur'] ?? $emptyFn;
  const onFocus = props['on:focus'] ?? $emptyFn;

  const isFocusedRef = ref(false);
  const inputRef = ref<HTMLInputElement>();

  // # refs
  // k-model takes precedence over value prop for two-way binding
  const modelRef = assertModel(props, props.value ?? []);

  // Create refs for all reactive properties
  const labelRef = toReactive(props.label ?? '');
  const placeholderRef = toReactive(props.placeholder ?? 'Choose files...');
  const acceptRef = toReactive(props.accept ?? '');
  const multipleRef = toReactive(props.multiple ?? true);
  const disabledRef = toReactive(props.disabled ?? false);
  const readOnlyRef = toReactive(props.readOnly ?? false);
  const requiredRef = toReactive(props.required ?? false);
  const errorRef = toReactive(props.error ?? false);
  const helperTextRef = toReactive(props.helperText ?? '');
  const fullWidthRef = toReactive(props.fullWidth ?? false);
  const sizeRef = toReactive(props.size ?? 'medium');
  const buttonTextRef = toReactive(props.buttonText ?? 'Browse');
  const showFileCountRef = toReactive(props.showFileCount ?? true);

  // # computed display text
  const displayText = computed(() => {
    const files = modelRef.value;
    if (!files || files.length === 0) {
      if (labelRef.value && !isFocusedRef.value) {
        return '';
      }
      return placeholderRef.value;
    }

    if (files.length === 1) {
      return files[0].name;
    }

    if (showFileCountRef.value) {
      return `${files[0].name} and ${files.length - 1} more`;
    }

    return files.map((f) => f.name).join(', ');
  }, [modelRef, placeholderRef, showFileCountRef, labelRef, isFocusedRef]);

  const hasValue = modelRef.map((v) => v && v.length > 0);

  const displayClassName = computed(
    () =>
      `mui-filepicker-display${!hasValue.value && (!labelRef.value || isFocusedRef.value) ? ' mui-filepicker-placeholder' : ''}`,
    [hasValue, labelRef, isFocusedRef],
  );

  // # methods
  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const files = Array.from(target.files || []);
    modelRef.value = files;
    onChange(files);
  };

  const handleFocus = () => {
    isFocusedRef.value = true;
    onFocus();
  };

  const handleBlur = () => {
    isFocusedRef.value = false;
    onBlur();
  };

  const handleWrapperMouseDown = () => {
    if (disabledRef.value) {
      return;
    }
    // Focus the container for visual feedback
    setTimeout(() => inputRef.value?.focus(), 0);
  };

  const handleButtonClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (disabledRef.value || readOnlyRef.value) {
      return;
    }
    inputRef.value?.click();
  };

  // # styles
  const style = toReactive($parseStyle(props.style));
  const customClass = toReactive(props.class ?? '');
  const className = computed(
    () =>
      [
        'mui-filepicker-root',
        `mui-filepicker-size-${sizeRef.value}`,
        isFocusedRef.value ? 'mui-filepicker-focused' : '',
        errorRef.value ? 'mui-filepicker-error' : '',
        disabledRef.value ? 'mui-filepicker-disabled' : '',
        fullWidthRef.value ? 'mui-filepicker-fullwidth' : '',
        labelRef.value && hasValue.value ? 'mui-filepicker-has-value' : '',
        labelRef.value ? '' : 'mui-filepicker-no-label',
        customClass.value ? customClass.value : '',
      ].join(' '),
    [sizeRef, errorRef, disabledRef, fullWidthRef, labelRef, isFocusedRef, hasValue, customClass],
  );

  const labelElement = computed(() => {
    if (!labelRef.value) {
      return '';
    }

    return (
      <label class="mui-filepicker-label">
        {labelRef}
        {KTConditional(requiredRef, 'span', { class: 'mui-filepicker-required', children: '*' })}
      </label>
    );
  }, [labelRef, requiredRef]);

  const legendElement = computed(() => {
    if (!labelRef.value) {
      return '';
    }

    return (
      <legend class="mui-filepicker-legend">
        <span>
          {labelRef}
          {KTConditional(requiredRef, 'span', { children: '*' })}
        </span>
      </legend>
    );
  }, [labelRef, requiredRef]);

  const fileCountBadge = computed(() => {
    const files = modelRef.value;
    if (!showFileCountRef.value || !files || files.length <= 1) {
      return '';
    }

    return <span class="mui-filepicker-file-count">{files.length}</span>;
  }, [modelRef, showFileCountRef]);

  const container = (
    <div class={className} style={style}>
      <div class="mui-filepicker-wrapper" on:mousedown={handleWrapperMouseDown}>
        {labelElement}
        <div class="mui-filepicker-input-wrapper">
          <div class="mui-filepicker-input-container">
            <span class={displayClassName}>
              {displayText}
              {fileCountBadge}
            </span>
            <input
              ref={inputRef}
              type="file"
              class="mui-filepicker-native-input"
              accept={acceptRef}
              multiple={multipleRef}
              disabled={disabledRef}
              on:change={handleFileChange}
              on:focus={handleFocus}
              on:blur={handleBlur}
            />
          </div>
        </div>
        <button type="button" class="mui-filepicker-button" disabled={disabledRef} on:click={handleButtonClick}>
          {buttonTextRef}
        </button>
        <fieldset class="mui-filepicker-fieldset">{legendElement}</fieldset>
      </div>
      <p class="mui-filepicker-helper-text">{helperTextRef}</p>
    </div>
  ) as HTMLDivElement;

  registerPrefixedEvents(container, props, ['on:change', 'on:focus', 'on:blur']);

  return container;
}
