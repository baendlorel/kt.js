import { type KTReactive, $modelOrRef, computed, ref, toReactive } from '@ktjs/core';
import { $emptyFn, parseStyle } from '@ktjs/shared';
import { KTMuiProps } from '../../types/component.js';
import './Select.css';

interface KTMuiSelectOption {
  value: string;
  label: string;
}

export interface KTMuiSelectProps extends KTMuiProps {
  size?: 'small' | 'medium';
  value?: string;
  options: KTMuiSelectOption[] | KTReactive<KTMuiSelectOption[]>;
  label?: string | KTReactive<string>;
  placeholder?: string;
  'on:change'?: (value: string) => void;
  fullWidth?: boolean;
  disabled?: boolean | KTReactive<boolean>;
}

export type KTMuiSelect = JSX.Element & {};

/**
 * Select component - mimics MUI Select appearance and behavior
 */
export function Select(props: KTMuiSelectProps): KTMuiSelect {
  const onChange = props['on:change'] ?? $emptyFn;

  // # refs
  const isFocusedRef = ref(false);
  const open = ref(false, (isOpen) => {
    if (isOpen) {
      menu.value.style.display = 'block';
      void menu.value.offsetHeight; // & Trigger reflow to enable animation
    } else {
      // Hide after animation completes
      setTimeout(() => {
        if (!isOpen) {
          menu.value.style.display = 'none';
        }
      }, 200);
    }
    menu.value.classList.toggle('mui-select-menu-open', isOpen);
    container.classList.toggle('mui-select-open', isOpen);
  });

  // # ref props

  const placeholderRef = toReactive(props.placeholder ?? '');
  const labelRef = toReactive(props.label ?? '');
  const optionsRef = toReactive(props.options, (newOptions) => {
    if (!newOptions.find((o) => o.value === modelRef.value)) {
      onChange((modelRef.value = ''));
    }
  });
  const disabledRef = toReactive(props.disabled ?? false, (v) => container.classList.toggle('mui-select-disabled', v));
  const modelRef = $modelOrRef(props, props.value ?? '');
  const label = computed(() => {
    if (labelRef.value) {
      return (
        <label
          class={`mui-select-label ${modelRef.value || isFocusedRef.value || placeholderRef.value ? 'focused' : ''}`}
        >
          {labelRef}
        </label>
      );
    }
    return '';
  }, [labelRef, modelRef, isFocusedRef, placeholderRef]);

  const styleRef = toReactive(parseStyle(props.style ?? ''));
  const classRef = toReactive(props.class ?? '');
  const sizeRef = toReactive(props.size ?? 'medium');
  const fullwidthRef = toReactive(props.fullWidth ?? false);
  const className = computed(() => {
    return `mui-select-wrapper mui-select-size-${sizeRef.value} ${fullwidthRef.value ? 'mui-select-fullWidth' : ''} ${classRef.value} ${disabledRef.value ? 'mui-select-disabled' : ''}`;
  }, [sizeRef, fullwidthRef, classRef, disabledRef]);

  // Toggle dropdown
  const toggleMenu = () => {
    if (!disabledRef.value) {
      open.value = !open.value;
    }
  };

  // Handle option click
  const handleOptionClick = (e: Event) => {
    const newValue = (e.currentTarget as HTMLElement).dataset.value as string;
    modelRef.value = newValue;
    onChange(newValue);
    open.value = false;
  };

  // Close menu when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (!container.contains(e.target as Node)) {
      open.value = false;
    }
  };

  // Handle focus
  const handleFocus = () => (isFocusedRef.value = true);
  const handleBlur = () => (isFocusedRef.value = false);

  const defaultEmpty = <span class="mui-select-placeholder">{placeholderRef.value || '\u00a0'}</span>;
  const displayedValue = computed(() => {
    const o = optionsRef.value.find((item) => item.value === modelRef.value);
    return <div class="mui-select-display">{o?.label ?? defaultEmpty}</div>;
  }, [modelRef]);

  const menu = computed(() => {
    return (
      <div class="mui-select-menu" style="display: none;">
        {optionsRef.value.map((o) => (
          <div
            class={`mui-select-option ${o.value === modelRef.value ? 'selected' : ''}`}
            data-value={o.value}
            on:click={handleOptionClick}
          >
            {o.label}
          </div>
        ))}{' '}
      </div>
    );
  }, [optionsRef, modelRef]);

  // Create container
  const container = (
    <div class={className} style={styleRef}>
      {label}
      <div
        class="mui-select-control mui-select-outlined"
        on:click={toggleMenu}
        on:focus={handleFocus}
        on:blur={handleBlur}
        tabIndex={disabledRef.value ? -1 : 0}
      >
        {displayedValue}
        <input type="hidden" value={modelRef.value} />
        <fieldset class="mui-select-fieldset">
          <legend class="mui-select-legend">
            <span>{labelRef}</span>
          </legend>
        </fieldset>

        <svg class="mui-select-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
          <path d="M7 10l5 5 5-5Z" fill="currentColor"></path>
        </svg>
      </div>

      {menu}
    </div>
  ) as KTMuiSelect;

  // Add global click listener
  setTimeout(() => {
    document.removeEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
  }, 0);

  return container;
}
