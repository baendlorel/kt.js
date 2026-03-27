import type { JSX } from '@ktjs/core';
import { assertModel, KTConditional, KTFor, computed, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { registerPrefixedEvents } from '../../common/attribute.js';
import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import './BottomNavigation.css.ts';

export interface KTMuiBottomNavigationAction {
  value: string;
  label: string | JSX.Element;
  icon?: JSX.Element;
  disabled?: boolean;
  showLabel?: boolean;
}

export interface KTMuiBottomNavigationProps extends KTMuiProps {
  value?: KTMaybeReactive<string>;
  options: KTMaybeReactive<KTMuiBottomNavigationAction[]>;
  showLabels?: KTMaybeReactive<boolean>;
  'on:change'?: (value: string, oldValue: string, index: number, option?: KTMuiBottomNavigationAction) => void;

  // # native events
  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export type KTMuiBottomNavigation = JSX.Element & {};

const findFirstEnabledAction = (options: KTMuiBottomNavigationAction[]) => {
  for (let i = 0; i < options.length; i++) {
    if (!options[i].disabled) {
      return { option: options[i], index: i };
    }
  }
  return null;
};

/**
 * BottomNavigation component - mimics MUI BottomNavigation appearance and behavior
 */
export function BottomNavigation(props: KTMuiBottomNavigationProps): KTMuiBottomNavigation {
  const onChange = props['on:change'] ?? $emptyFn;

  const classRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const optionsRef = toReactive(props.options);
  const showLabelsRef = toReactive(props.showLabels ?? false);

  const initialValue = typeof props.value === 'string' ? props.value : '';
  const modelRef = assertModel<string>(props, initialValue);

  const ensureValidModelValue = (emitChange: boolean) => {
    const currentValue = modelRef.value;
    const selected = optionsRef.value.find((option) => option.value === currentValue && !option.disabled);
    if (selected) {
      return;
    }

    const fallback = findFirstEnabledAction(optionsRef.value);
    const nextValue = fallback?.option.value ?? '';
    if (nextValue === currentValue) {
      return;
    }

    modelRef.value = nextValue;
    if (emitChange) {
      onChange(nextValue, currentValue, fallback?.index ?? -1, fallback?.option);
    }
  };

  const className = computed(() => {
    return [
      'mui-bottom-navigation-root',
      showLabelsRef.value ? 'mui-bottom-navigation-show-labels' : '',
      classRef.value,
    ].join(' ');
  }, [showLabelsRef, classRef]);

  const selectAction = (action: KTMuiBottomNavigationAction, index: number) => {
    if (action.disabled) {
      return;
    }

    const oldValue = modelRef.value;
    if (oldValue === action.value) {
      return;
    }

    modelRef.value = action.value;
    onChange(action.value, oldValue, index, action);
  };

  const handleActionClick = (e: MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLButtonElement | null;
    if (!currentTarget) {
      return;
    }

    const value = currentTarget.dataset.value ?? '';
    const index = optionsRef.value.findIndex((item) => item.value === value);
    const action = index >= 0 ? optionsRef.value[index] : undefined;
    if (!action) {
      return;
    }

    selectAction(action, index);
  };

  const container = (
    <div class={className} style={styleRef} role="tablist" aria-label="Bottom navigation">
      <KTFor
        list={optionsRef}
        key={(action) => action.value}
        map={(action) => {
          const actionRef = optionsRef.map((options) => options.find((item) => item.value === action.value) ?? action);
          const selectedRef = modelRef.map((value) => value === action.value);
          const disabledRef = actionRef.map((current) => current.disabled ?? false);
          const labelRef = actionRef.map((current) => current.label);
          const iconRef = actionRef.map((current) => current.icon ?? null);
          const buttonClass = computed(() => {
            const current = actionRef.value;
            const selected = modelRef.value === action.value;
            const showLabel = showLabelsRef.value || selected || !!current.showLabel;

            return `mui-bottom-navigation-action ${selected ? 'mui-bottom-navigation-action-selected' : ''} ${current.disabled ? 'mui-bottom-navigation-action-disabled' : ''} ${showLabel ? 'mui-bottom-navigation-action-show-label' : ''}`;
          }, [actionRef, modelRef, showLabelsRef]);

          return (
            <button
              type="button"
              role="tab"
              class={buttonClass}
              data-value={action.value}
              aria-selected={selectedRef.map((selected) => String(selected))}
              aria-disabled={disabledRef.map((disabled) => (disabled ? 'true' : 'false'))}
              disabled={disabledRef}
              tabIndex={selectedRef.map((selected) => (selected ? 0 : -1))}
              on:click={handleActionClick}
            >
              {KTConditional(iconRef, 'span', { class: 'mui-bottom-navigation-action-icon', children: iconRef })}
              <span class="mui-bottom-navigation-action-label">{labelRef}</span>
            </button>
          );
        }}
      ></KTFor>
    </div>
  ) as KTMuiBottomNavigation;

  ensureValidModelValue(false);
  optionsRef.addOnChange(() => ensureValidModelValue(true));

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
