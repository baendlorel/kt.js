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
  let { label = '', placeholder = '', size = 'medium', fullWidth = false, disabled = false } = props;

  const onChange = generateHandler<string>(props, 'kt:change');
  let isOpen = false;
  let isFocused = false;

  // # refs
  const selectLabelRef = ref<HTMLLabelElement>();
  const optionsRef = ref(props.options);
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
      menu.style.display = 'block';
      void menu.offsetHeight; // & Trigger reflow to enable animation
    } else {
      // Hide after animation completes
      setTimeout(() => {
        if (!isOpen) {
          menu.style.display = 'none';
        }
      }, 200);
    }
    menu.classList.toggle('mui-select-menu-open', isOpen);
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

    redrawDisplayedValue();
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

  const displayedValue = ref(<span class="mui-select-placeholder">{placeholder || '\u00a0'}</span>);
  const redrawDisplayedValue = () => {
    const o = optionsRef.value.find((item) => item.value === modelRef.value);
    displayedValue.value = (
      <div class="mui-select-display">
        {o?.label ?? <span class="mui-select-placeholder">{placeholder || '\u00a0'}</span>}
      </div>
    );
  };

  // todo 感觉这个不如原来的redraw简单
  const createOptions = () =>
    optionsRef.value.map((o) => (
      <div
        class={`mui-select-option ${o.value === modelRef.value ? 'selected' : ''}`}
        data-value={o.value}
        on:click={handleOptionClick}
      >
        {o.label}
      </div>
    ));
  optionsRef.addOnChange(createOptions);
  const menuOptions = ref(createOptions());

  const menu = (
    <div class="mui-select-menu" style="display: none;">
      {menuOptions}
    </div>
  );

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
    updateLabelState();
  }, 0);

  return container;
}
