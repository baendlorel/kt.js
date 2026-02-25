import type { JSX, KTReactive } from '@ktjs/core';
import { computed, KTFor, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import { ExpandMoreIcon } from '../../Icons/ExpandMore.js';
import '../Button/Button.css';
import './DropdownButton.css';

export interface KTMuiDropdownButtonOption {
  value: string;
  label: string | JSX.Element | HTMLElement;
  disabled?: boolean;
}

export interface KTMuiDropdownButtonProps extends KTMuiProps {
  label?: string | JSX.Element | HTMLElement | KTReactive<string | JSX.Element | HTMLElement>;
  options: KTMuiDropdownButtonOption[] | KTReactive<KTMuiDropdownButtonOption[]>;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean | KTReactive<boolean>;
  fullWidth?: boolean;
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

  const openRef = ref(false);
  const labelRef = toReactive(props.label ?? props.children ?? 'Options');
  const optionsRef = toReactive(props.options);
  const variantRef = toReactive(props.variant ?? 'contained');
  const colorRef = toReactive(props.color ?? 'primary');
  const sizeRef = toReactive(props.size ?? 'medium');
  const disabledRef = toReactive(props.disabled ?? false, (disabled) => {
    if (disabled) {
      openRef.value = false;
    }
  });
  const fullWidthRef = toReactive(props.fullWidth ?? false);
  const styleRef = toReactive($parseStyle(props.style ?? ''));
  const classRef = toReactive(props.class ?? '');

  const wrapperClass = computed(() => {
    return [
      'mui-dropdown-button-wrapper',
      fullWidthRef.value ? 'mui-dropdown-button-fullwidth' : '',
      disabledRef.value ? 'mui-dropdown-button-disabled' : '',
      openRef.value ? 'mui-dropdown-button-open' : '',
      classRef.value,
    ]
      .join(' ')
      .trim();
  }, [fullWidthRef, disabledRef, openRef, classRef]);

  const triggerClass = computed(() => {
    return [
      'mui-button',
      `mui-button-${variantRef.value}`,
      `mui-button-${variantRef.value}-${colorRef.value}`,
      `mui-button-size-${sizeRef.value}`,
      fullWidthRef.value ? 'mui-button-fullwidth' : '',
      'mui-dropdown-button-trigger',
    ]
      .join(' ')
      .trim();
  }, [variantRef, colorRef, sizeRef, fullWidthRef]);

  const menuClass = computed(() => {
    return `mui-dropdown-button-menu ${openRef.value ? 'mui-dropdown-button-menu-open' : ''}`;
  }, [openRef]);

  const closeMenu = () => {
    openRef.value = false;
  };

  const toggleMenu = (e: MouseEvent) => {
    if (disabledRef.value) {
      e.preventDefault();
      return;
    }
    openRef.value = !openRef.value;
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
    const option = optionsRef.value.find((item) => item.value === value);
    if (!option || option.disabled) {
      return;
    }
    onSelect(value, option);
    closeMenu();
  };

  const members = computed(() => {
    return optionsRef.value.map((option) => (
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
  }, [optionsRef]);

  const container = (
    <div class={wrapperClass} style={styleRef}>
      <button
        type="button"
        class={triggerClass}
        disabled={disabledRef}
        on:click={toggleMenu}
        aria-haspopup="menu"
        aria-expanded={openRef}
      >
        <span class="mui-button-label">{labelRef}</span>
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
