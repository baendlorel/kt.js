import type { JSX } from '@ktjs/core';
import { computed, KTFor, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import { ExpandMoreIcon } from '../../Icons/ExpandMore.js';
import '../Button/Button.css';
import './DropdownButton.css';

export interface KTMuiDropdownButtonOption {
  value: string;
  label: string | JSX.Element;
  disabled?: boolean;
}

export interface KTMuiDropdownButtonProps extends KTMuiProps {
  label?: KTMaybeReactive<string | JSX.Element>;
  options: KTMaybeReactive<KTMuiDropdownButtonOption[]>;
  variant?: KTMaybeReactive<'contained' | 'outlined' | 'text'>;
  color?: KTMaybeReactive<'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'>;
  size?: KTMaybeReactive<'small' | 'medium' | 'large'>;
  disabled?: KTMaybeReactive<boolean>;
  fullWidth?: KTMaybeReactive<boolean>;
  'on:click'?: (event: MouseEvent) => void;
  'on:select'?: (value: string, option: KTMuiDropdownButtonOption) => void;
}

export type KTMuiDropdownButton = JSX.Element & {};

/**
 * DropdownButton component - mimics MUI Dropdown Button appearance and behavior
 */
export function DropdownButton(props: KTMuiDropdownButtonProps): KTMuiDropdownButton {
  const onSelect = props['on:select'] ?? $emptyFn;
  const onClick = props['on:click'] ?? $emptyFn;

  const open = ref(false);
  const label = toReactive(props.label ?? '');
  const options = toReactive(props.options);
  const variant = toReactive(props.variant ?? 'contained');
  const color = toReactive(props.color ?? 'primary');
  const size = toReactive(props.size ?? 'medium');
  const disabled = toReactive(props.disabled ?? false, (v) => {
    if (v) {
      open.value = false;
    }
  });
  const fullWidth = toReactive(props.fullWidth ?? false);
  const style = toReactive($parseStyle(props.style ?? ''));
  const className = toReactive(props.class ?? '');

  const wrapperClass = computed(() => {
    return [
      'mui-dropdown-button-wrapper',
      fullWidth.value ? 'mui-dropdown-button-fullwidth' : '',
      disabled.value ? 'mui-dropdown-button-disabled' : '',
      open.value ? 'mui-dropdown-button-open' : '',
      className.value,
    ].join(' ');
  }, [fullWidth, disabled, open, className]);

  const triggerClass = computed(() => {
    return [
      'mui-button',
      `mui-button-${variant.value}`,
      `mui-button-${variant.value}-${color.value}`,
      `mui-button-size-${size.value}`,
      fullWidth.value ? 'mui-button-fullwidth' : '',
      'mui-dropdown-button-trigger',
    ].join(' ');
  }, [variant, color, size, fullWidth]);

  const menuClass = computed(() => {
    return `mui-dropdown-button-menu ${open.value ? 'mui-dropdown-button-menu-open' : ''}`;
  }, [open]);

  const closeMenu = () => {
    open.value = false;
  };

  const toggleMenu = (e: MouseEvent) => {
    if (disabled.value) {
      e.preventDefault();
      return;
    }
    open.value = !open.value;
    onClick(e);
  };

  const selectOption = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement | null;
    if (!target) {
      return;
    }
    const value = target.dataset.value;
    if (!value) {
      return;
    }
    const option = options.value.find((item) => item.value === value);
    if (!option || option.disabled) {
      return;
    }
    onSelect(value, option);
    closeMenu();
  };

  const members = computed(() => {
    return options.value.map((option) => (
      <button
        type="button"
        class={`mui-dropdown-button-option ${option.disabled ? 'mui-dropdown-button-option-disabled' : ''}`}
        data-value={option.value}
        disabled={option.disabled ?? false}
        on:click={selectOption}
        role="menuitem"
      >
        {option.label}
      </button>
    ));
  }, [options]);

  const container = (
    <div class={wrapperClass} style={style}>
      <button
        type="button"
        class={triggerClass}
        disabled={disabled}
        on:click={toggleMenu}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span class="mui-button-label">{label}</span>
        <span class="mui-dropdown-button-end-icon">
          <ExpandMoreIcon />
        </span>
      </button>
      <div class={menuClass} role="menu">
        <KTFor list={members}></KTFor>
      </div>
    </div>
  ) as KTMuiDropdownButton;

  const handleDocumentClick = (e: MouseEvent) => {
    const target = e.target as Node | null;
    if (!target) {
      return;
    }
    if (!container.contains(target)) {
      closeMenu();
    }
  };

  const handleDocumentKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  };

  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleDocumentKeydown);

  const originalRemove = container.remove;
  container.remove = () => {
    document.removeEventListener('click', handleDocumentClick);
    document.removeEventListener('keydown', handleDocumentKeydown);
    return originalRemove.call(container);
  };

  return container;
}
