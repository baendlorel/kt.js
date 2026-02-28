import type { JSX } from '@ktjs/core';
import { computed, KTFor, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { ExpandMoreIcon } from '@ktjs/mui-icon';

import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import '../Button/Button.css.ts';
import './DropdownButton.css.ts';
import { registerPrefixedEvents } from '../../common/attribute.js';

export interface KTMuiDropdownButtonOption {
  value: string;
  label: string | JSX.Element;
  disabled?: boolean;
}

export interface KTMuiDropdownButtonProps extends KTMuiProps {
  /**
   * The label for the dropdown button - can be a string or a JSX element
   */
  label?: KTMaybeReactive<string | JSX.Element>;

  /**
   * The options for the dropdown menu - array of objects with `value`, `label` and optional `disabled`
   */
  options: KTMaybeReactive<KTMuiDropdownButtonOption[]>;

  /**
   * The variant to use - 'contained', 'outlined' or 'text'
   */
  variant?: KTMaybeReactive<'contained' | 'outlined' | 'text'>;

  /**
   * The color to use - 'primary', 'secondary', 'error', 'warning', 'info' or 'success'
   */
  color?: KTMaybeReactive<'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'>;

  /**
   * The size of the button - 'small', 'medium' or 'large'
   */
  size?: KTMaybeReactive<'small' | 'medium' | 'large'>;

  /**
   * Whether the button is disabled
   */
  disabled?: KTMaybeReactive<boolean>;

  /**
   * Whether the button should take the full width of its container
   */
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

  const classNameRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const openRef = ref(false);
  const labelRef = toReactive(props.label ?? '');
  const optionsRef = toReactive(props.options);
  const variantRef = toReactive(props.variant ?? 'contained');
  const colorRef = toReactive(props.color ?? 'primary');
  const sizeRef = toReactive(props.size ?? 'medium');
  const disabledRef = toReactive(props.disabled ?? false, (v) => {
    if (v) {
      openRef.value = false;
    }
  });
  const fullWidthRef = toReactive(props.fullWidth ?? false);

  const wrapperClass = computed(() => {
    return [
      'mui-dropdown-button-wrapper',
      fullWidthRef.value ? 'mui-dropdown-button-fullwidth' : '',
      disabledRef.value ? 'mui-dropdown-button-disabled' : '',
      openRef.value ? 'mui-dropdown-button-open' : '',
      classNameRef.value,
    ].join(' ');
  }, [fullWidthRef, disabledRef, openRef, classNameRef]);

  const triggerClass = computed(() => {
    return [
      'mui-button',
      `mui-button-${variantRef.value}`,
      `mui-button-${variantRef.value}-${colorRef.value}`,
      `mui-button-size-${sizeRef.value}`,
      fullWidthRef.value ? 'mui-button-fullwidth' : '',
      'mui-dropdown-button-trigger',
    ].join(' ');
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

  const selectOption = (e: Event) => {
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

  const members = optionsRef.toComputed((list) => {
    return list.map((o) => {
      // custom label element - attach click handler directly
      if (o.label instanceof Node) {
        o.label.removeEventListener('click', selectOption);
        o.label.addEventListener('click', selectOption);
        return o;
      }

      // create button element for string label
      return (
        <button
          type="button"
          class={`mui-dropdown-button-option ${o.disabled ? 'mui-dropdown-button-option-disabled' : ''}`}
          data-value={o.value}
          disabled={o.disabled ?? false}
          on:click={selectOption}
          role="menuitem"
        >
          {o.label}
        </button>
      );
    });
  });

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

  registerPrefixedEvents(container, props, ['on:click', 'on:select']);
  return container;
}
