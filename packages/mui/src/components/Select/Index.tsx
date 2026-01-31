import { createRedrawable, ref, type KTHTMLElement } from '@ktjs/core';
import './Select.css';
import { generateHandler, parseStyle } from '@ktjs/shared';

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

/**
 * Select component - mimics MUI Select appearance and behavior
 */
export function Select(props: KTMuiSelectProps) {
  let {
    value = '',
    options = [],
    label = '',
    placeholder = '',
    size = 'medium',
    fullWidth = false,
    disabled = false,
  } = props;

  const onChange = generateHandler<string>(props, 'kt:change');
  let isOpen = false;
  let isFocused = false;
  const selectRef = ref<HTMLDivElement>();

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
      // Trigger reflow to enable animation
      void menu.value.offsetHeight;
      menu.value.classList.add('mui-select-menu-open');
    } else {
      menu.value.classList.remove('mui-select-menu-open');
      // Hide after animation completes
      setTimeout(() => {
        if (!isOpen) {
          menu.value.style.display = 'none';
        }
      }, 200);
    }
    selectRef.value.classList.toggle('mui-select-open', isOpen);
  };

  // Handle option click
  const handleOptionClick = (newValue: string) => {
    value = newValue;
    isOpen = false;
    onChange(value);
    updateMenu();
    updateLabelState();

    valueDisplay.value.redraw();
    setTimeout(() => {
      // Trigger redraw of parent if needed
      menu.value.redraw();
    }, 200);
  };

  // Close menu when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (!selectRef.value.contains(e.target as Node)) {
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
    const labelElement = selectRef.value.querySelector('.mui-select-label');
    if (labelElement) {
      if (isFocused || value) {
        labelElement.classList.add('focused');
      } else {
        labelElement.classList.remove('focused');
      }
    }
  };

  const valueDisplay = createRedrawable(() => {
    const o = options.find((opt) => opt.value === value);
    let inner: KTHTMLElement | string;
    if (o === undefined) {
      inner = <span class="mui-select-placeholder">{placeholder || '\u00a0'}</span>;
    } else {
      inner = o.label;
    }
    return <div class="mui-select-display">{inner}</div>;
  });

  const menu = createRedrawable(() => {
    return (
      <div class="mui-select-menu" style={{ display: 'none' }}>
        {options.map((option) => (
          <div
            class={`mui-select-option ${option.value === value ? 'selected' : ''}`}
            on:click={() => handleOptionClick(option.value)}
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
      ref={selectRef}
      class={`mui-select-wrapper mui-select-size-${size} ${props.class ?? ''} ${fullWidth ? 'mui-select-fullWidth' : ''} ${disabled ? 'mui-select-disabled' : ''}`}
      style={parseStyle(props.style)}
    >
      {label && <label class={`mui-select-label ${value || isFocused ? 'focused' : ''}`}>{label}</label>}

      <div
        class="mui-select-control mui-select-outlined"
        on:click={toggleMenu}
        on:focus={handleFocus}
        on:blur={handleBlur}
        tabIndex={disabled ? -1 : 0}
      >
        {valueDisplay}
        <input type="hidden" value={value} />
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
  );

  // Add global click listener
  setTimeout(() => {
    document.removeEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
    updateLabelState();
  }, 0);

  return container;
}
