import type { JSX, KTMaybeReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';

import { $emptyFn, $is, $parseStyle } from '@ktjs/shared';
import { computed, ref } from '@ktjs/core';
import { registerPrefixedEvents } from '../../common/attribute.js';
import { assertModel, toPseudoRef } from '../../common/pseudo-ref.js';

export interface KTMuiSelectOption {
  value: any;
  label: string | JSX.Element;
}

export type KTMuiSelectSize = 'small' | 'medium';

export type KTMuiSelectContent = KTMuiSelectOption | JSX.Element | HTMLElement | string;

export interface KTMuiSelectProps extends KTMuiProps {
  size?: KTMaybeReactive<KTMuiSelectSize>;
  value?: KTMaybeReactive<any>;
  options: KTMaybeReactive<KTMuiSelectContent[]>;
  label?: KTMaybeReactive<string>;
  placeholder?: KTMaybeReactive<string>;
  fullWidth?: KTMaybeReactive<boolean>;
  disabled?: KTMaybeReactive<boolean>;
  'on:change'?: (value: any) => void;

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

export function Select(props: KTMuiSelectProps): KTMuiSelect {
  const onChange = props['on:change'] ?? $emptyFn;
  const valueMap = new Map<JSX.Element, any>();

  const isFocusedRef = ref(false);
  const open = ref(false).listen((isOpen) => {
    if (isOpen) {
      menu.value.style.display = 'block';
      void menu.value.offsetHeight;
      const selectedOption = menu.value.querySelector('.mui-select-option.selected') as HTMLDivElement | null;
      if (selectedOption) {
        menu.value.scrollTop = selectedOption.offsetTop - menu.value.clientHeight / 2 + selectedOption.clientHeight / 2;
      }
    } else {
      setTimeout(() => {
        if (!isOpen) {
          menu.value.style.display = 'none';
        }
      }, 200);
    }
    menu.value.classList.toggle('mui-select-menu-open', isOpen);
    container.classList.toggle('mui-select-open', isOpen);
  });

  const placeholderRef = toPseudoRef(props.placeholder ?? '');
  const labelRef = toPseudoRef(props.label ?? '');
  const modelRef = assertModel(props, props.value ?? '');
  const optionsRef = toPseudoRef(props.options).listen((newOptions) => {
    if (!newOptions.find((o) => o !== null && typeof o === 'object' && 'value' in o && $is(o.value, modelRef.value))) {
      modelRef.value = '';
      onChange(modelRef.value);
    }
  });
  const disabledRef = toPseudoRef(props.disabled ?? false).listen((v) =>
    container.classList.toggle('mui-select-disabled', v),
  );

  const styleRef = toPseudoRef($parseStyle(props.style));
  const classRef = toPseudoRef(props.class ?? '');
  const sizeRef = toPseudoRef(props.size ?? 'medium');
  const fullwidthRef = toPseudoRef(props.fullWidth ?? false);

  const className = computed(() => {
    return `mui-select-wrapper mui-select-size-${sizeRef.value} ${fullwidthRef.value ? 'mui-select-fullWidth' : ''} ${classRef.value} ${disabledRef.value ? 'mui-select-disabled' : ''}`;
  }, [sizeRef, fullwidthRef, classRef, disabledRef]);

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

  const toggleMenu = () => {
    if (!disabledRef.value) {
      open.value = !open.value;
    }
  };

  const handleOptionClick = (e: Event) => {
    const v = valueMap.get(e.currentTarget as JSX.Element);
    modelRef.value = v;
    onChange(v);
    open.value = false;
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!container.contains(e.target as Node)) {
      open.value = false;
    }
  };

  const handleFocus = () => (isFocusedRef.value = true);
  const handleBlur = () => (isFocusedRef.value = false);

  const defaultEmpty = <span class="mui-select-placeholder">{placeholderRef.value || '\u00a0'}</span>;
  const displayedValue = computed(() => {
    const option = optionsRef.value.find(
      (item) => item !== null && typeof item === 'object' && 'value' in item && $is(item.value, modelRef.value),
    ) as KTMuiSelectOption | undefined;
    return <div class="mui-select-display">{option?.label ?? defaultEmpty}</div>;
  }, [modelRef, optionsRef]);

  const menu = computed<HTMLDivElement>(() => {
    valueMap.clear();
    return (
      <div class="mui-select-menu" style="display: none;">
        {optionsRef.value.map((o) => {
          if (o !== null && typeof o === 'object' && 'value' in o && 'label' in o) {
            const option = (
              <div
                class={`mui-select-option ${$is(o.value, modelRef.value) ? 'selected' : ''}`}
                on:click={handleOptionClick}
              >
                {o.label}
              </div>
            );
            valueMap.set(option, o.value);
            return option;
          }
          return o as JSX.Element;
        })}
      </div>
    ) as HTMLDivElement;
  }, [optionsRef, modelRef]);

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
  ) as HTMLDivElement & KTMuiSelect;

  menu.notify();

  setTimeout(() => {
    document.removeEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
  }, 0);

  registerPrefixedEvents(container, props);
  return container;
}
