import { $modelOrRef, createRedrawable, ref } from '@ktjs/core';
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
  let { options = [], label = '', placeholder = '', size = 'medium', fullWidth = false, disabled = false } = props;

  const onChange = generateHandler<string>(props, 'kt:change');
  let isOpen = false;
  let isFocused = false;

  // # refs
  const selectLabelRef = ref<HTMLLabelElement>();
  const modelRef = $modelOrRef(props, props.value ?? '');

  // Toggle dropdown
  const toggleMenu = () => {
    if (disabled) {
      return;
    }
    isOpen = !isOpen;
    updateMenu();
  };

  // Update menu visibility
  const updateMenu = () => {
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
  };

  // Handle option click
  const handleOptionClick = (e: Event) => {
    const newValue = (e.currentTarget as HTMLElement).dataset.value as string;
    modelRef.value = newValue;
    isOpen = false;
    onChange(newValue);
    updateMenu();
    updateLabelState();

    valueDisplay.redraw();
    setTimeout(() => menu.redraw(), 200);
  };

  // Close menu when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (!container.contains(e.target as Node)) {
      isOpen = false;
      updateMenu();
    }
  };

  // Handle focus
  const handleFocus = () => {
    isFocused = true;
    updateLabelState();
  };

  const handleBlur = () => {
    isFocused = false;
    updateLabelState();
  };

  // Update label focused state
  const updateLabelState = () => {
    selectLabelRef.value.classList?.toggle('focused', isFocused || !!modelRef.value);
  };

  const valueDisplay = createRedrawable(() => {
    const o = options.find((opt) => opt.value === modelRef.value);
    let inner: JSX.Element | string;
    if (o === undefined) {
      inner = <span class="mui-select-placeholder">{placeholder || '\u00a0'}</span>;
    } else {
      inner = o.label;
    }
    return <div class="mui-select-display">{inner}</div>;
  });

  const menu = createRedrawable(() => {
    return (
      <div class="mui-select-menu" style="display: none;">
        {options.map((option) => (
          <div
            class={`mui-select-option ${option.value === modelRef.value ? 'selected' : ''}`}
            data-value={option.value}
            on:click={handleOptionClick}
          >
            {option.label}
          </div>
        ))}
      </div>
    );
  });

  // Create container
  const container = (
    <div
      class={`mui-select-wrapper mui-select-size-${size} ${props.class ?? ''} ${fullWidth ? 'mui-select-fullWidth' : ''} ${disabled ? 'mui-select-disabled' : ''}`}
      style={parseStyle(props.style)}
    >
      <label
        k-if={label}
        ref={selectLabelRef}
        class={`mui-select-label ${modelRef.value || isFocused ? 'focused' : ''}`}
      >
        {label}
      </label>

      <div
        class="mui-select-control mui-select-outlined"
        on:click={toggleMenu}
        on:focus={handleFocus}
        on:blur={handleBlur}
        tabIndex={disabled ? -1 : 0}
      >
        {valueDisplay}
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
    updateLabelState();
  }, 0);

  return container;
}
