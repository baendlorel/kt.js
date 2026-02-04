import { $modelOrRef, computed, createRedrawable, ref } from '@ktjs/core';
import { generateHandler, parseStyle } from '@ktjs/shared';
import './Select.css';

interface KTMuiSelectOption {
  value: string;
  label: string;
}

export interface KTMuiSelectProps {
  class?: string;
  style?: string | Partial<CSSStyleDeclaration>;
  size?: 'small' | 'medium';
  value?: string;
  options: KTMuiSelectOption[];
  label?: string;
  placeholder?: string;
  'kt:change'?: (value: string) => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

export type KTMuiSelect = JSX.Element & {};

/**
 * Select component - mimics MUI Select appearance and behavior
 */
export function Select(props: KTMuiSelectProps): KTMuiSelect {
  let { placeholder = '', size = 'medium', fullWidth = false } = props;

  const onChange = generateHandler<string>(props, 'kt:change');

  // # refs
  const isFocused = ref(false);
  const isOpen = ref(false, (opened) => {
    if (opened) {
      menu.value.style.display = 'block';
      void menu.value.offsetHeight; // & Trigger reflow to enable animation
    } else {
      // Hide after animation completes
      setTimeout(() => {
        if (!opened) {
          menu.value.style.display = 'none';
        }
      }, 200);
    }
    menu.value.classList.toggle('mui-select-menu-open', opened);
    container.classList.toggle('mui-select-open', opened);
  });

  // # ref props
  const labelRef = ref(props.label);
  const optionsRef = ref(props.options);
  const disabledRef = ref(props.disabled ?? false, (v) => {
    container.classList.toggle('mui-select-disabled', v);
  });
  const modelRef = $modelOrRef(props, props.value ?? '');
  const label = computed(() => {
    if (labelRef.value) {
      return <label class={`mui-select-label ${modelRef.value || isFocused.value ? 'focused' : ''}`}>{labelRef}</label>;
    }
    return '';
  }, [labelRef, modelRef, isFocused]);

  // Toggle dropdown
  const toggleMenu = () => {
    if (disabledRef.value) {
      return;
    }
    isOpen.value = !isOpen.value;
  };

  // Handle option click
  const handleOptionClick = (e: Event) => {
    const newValue = (e.currentTarget as HTMLElement).dataset.value as string;
    modelRef.value = newValue;
    onChange(newValue);
    isOpen.value = false;
  };

  // Close menu when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (!container.contains(e.target as Node)) {
      isOpen.value = false;
    }
  };

  // Handle focus
  const handleFocus = () => (isFocused.value = true);
  const handleBlur = () => (isFocused.value = false);

  const defaultEmpty = <span class="mui-select-placeholder">{placeholder || '\u00a0'}</span>;
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
    <div
      class={`mui-select-wrapper mui-select-size-${size} ${props.class ?? ''} ${fullWidth ? 'mui-select-fullWidth' : ''} ${disabledRef.value ? 'mui-select-disabled' : ''}`}
      style={parseStyle(props.style)}
    >
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
          <legend>
            <span>{label}</span>
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
