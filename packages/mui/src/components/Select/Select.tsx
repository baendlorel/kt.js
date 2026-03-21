import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { $modelOrRef, computed, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import './Select.css.ts';
import { registerPrefixedEvents } from '../../common/attribute.js';

export interface KTMuiSelectOption {
  value: string;
  label: string | JSX.Element;
}

export type KTMuiSelectSize = 'small' | 'medium';

export type KTMuiSelectContent = KTMuiSelectOption | JSX.Element | HTMLElement | string;

export interface KTMuiSelectProps extends KTMuiProps {
  size?: KTMaybeReactive<KTMuiSelectSize>;

  value?: KTMaybeReactive<string>;

  options: KTMaybeReactive<KTMuiSelectOption[]>;

  label?: KTMaybeReactive<string>;

  placeholder?: KTMaybeReactive<string>;

  fullWidth?: KTMaybeReactive<boolean>;

  disabled?: KTMaybeReactive<boolean>;

  'on:change'?: (value: string) => void;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export type KTMuiSelect = JSX.Element & {};

const selectIcon = (() => {
  const wrapper = <div></div>;
  wrapper.innerHTML = `<svg class="mui-select-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
          <path d="M7 10l5 5 5-5Z" fill="currentColor"></path>
        </svg>`;
  return wrapper.firstElementChild as JSX.Element;
})();

/**
 * Select component - mimics MUI Select appearance and behavior
 */
export function Select(props: KTMuiSelectProps): KTMuiSelect {
  const onChange = props['on:change'] ?? $emptyFn;

  // # refs
  const isFocusedRef = ref(false);
  const open = ref(false, (isOpen) => {
    if (isOpen) {
      menu.state.style.display = 'block';
      void menu.state.offsetHeight; // & Trigger reflow to enable animation
    } else {
      // Hide after animation completes
      setTimeout(() => {
        if (!isOpen) {
          menu.state.style.display = 'none';
        }
      }, 200);
    }
    menu.state.classList.toggle('mui-select-menu-open', isOpen);
    container.classList.toggle('mui-select-open', isOpen);
  });

  // # ref props
  const placeholderRef = toReactive(props.placeholder ?? '');
  const labelRef = toReactive(props.label ?? '');
  const optionsRef = toReactive(props.options, (newOptions) => {
    if (!newOptions.find((o) => (o as any)?.value === modelRef.state)) {
      const old = modelRef.state;
      modelRef.state = '';
      onChange(modelRef.state, old);
    }
  });
  const disabledRef = toReactive(props.disabled ?? false, (v) => container.classList.toggle('mui-select-disabled', v));
  const modelRef = $modelOrRef(props, props.value ?? '');

  const styleRef = toReactive($parseStyle(props.style));
  const classRef = toReactive(props.class ?? '');
  const sizeRef = toReactive(props.size ?? 'medium');
  const fullwidthRef = toReactive(props.fullWidth ?? false);
  const className = computed(() => {
    return `mui-select-wrapper mui-select-size-${sizeRef.state} ${fullwidthRef.state ? 'mui-select-fullWidth' : ''} ${classRef.state} ${disabledRef.state ? 'mui-select-disabled' : ''}`;
  }, [sizeRef, fullwidthRef, classRef, disabledRef]);

  const label = computed(() => {
    if (labelRef.state) {
      return (
        <label
          class={`mui-select-label ${modelRef.state || isFocusedRef.state || placeholderRef.state ? 'focused' : ''}`}
        >
          {labelRef}
        </label>
      );
    }
    return '';
  }, [labelRef, modelRef, isFocusedRef, placeholderRef]);

  // Toggle dropdown
  const toggleMenu = () => {
    if (!disabledRef.state) {
      open.state = !open.state;
    }
  };

  // Handle option click
  const handleOptionClick = (e: Event) => {
    const newValue = (e.currentTarget as HTMLElement).dataset.value as string;
    modelRef.state = newValue;
    onChange(newValue);
    open.state = false;
  };

  // Close menu when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (!container.contains(e.target as Node)) {
      open.state = false;
    }
  };

  // Handle focus
  const handleFocus = () => (isFocusedRef.state = true);
  const handleBlur = () => (isFocusedRef.state = false);

  const defaultEmpty = <span class="mui-select-placeholder">{placeholderRef.state || '\u00a0'}</span>;
  const displayedValue = computed(() => {
    const o = optionsRef.state.find((item) => (item as any)?.value === modelRef.state);
    return <div class="mui-select-display">{(o as any)?.label ?? defaultEmpty}</div>;
  }, [modelRef]);

  const selectOptions: JSX.Element[] = [];
  const menu = computed(() => {
    return (
      <div class="mui-select-menu" style="display: none;">
        {optionsRef.state.map((o) => {
          if (o !== null && typeof o === 'object' && 'value' in o && 'label' in o) {
            const option = (
              <div
                class={`mui-select-option ${o.value === modelRef.state ? 'selected' : ''}`}
                data-value={o.value}
                on:click={handleOptionClick}
              >
                {o.label}
              </div>
            );
            selectOptions.push(option);
            return option;
          }
          return o as JSX.Element;
        })}
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
        tabIndex={disabledRef.state ? -1 : 0}
      >
        {displayedValue}
        <input type="hidden" k-model={modelRef} />
        <fieldset class="mui-select-fieldset">
          <legend class="mui-select-legend">
            <span>{labelRef}</span>
          </legend>
        </fieldset>

        {selectIcon.cloneNode(true)}
      </div>
      {menu}
    </div>
  ) as KTMuiSelect;

  menu.notify();

  // Add global click listener
  setTimeout(() => {
    document.removeEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
  }, 0);

  registerPrefixedEvents(container, props);
  return container;
}
