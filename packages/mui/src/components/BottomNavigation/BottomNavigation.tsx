import type { JSX } from '@ktjs/core';
import { $modelOrRef, computed, KTFor, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { registerPrefixedEvents } from '../../common/attribute.js';
import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import './BottomNavigation.css.ts';

export interface KTMuiBottomNavigationAction {
  value: string;
  label: string | JSX.Element;
  icon?: JSX.Element | HTMLElement;
  disabled?: boolean;
  showLabel?: boolean;
}

export interface KTMuiBottomNavigationProps extends KTMuiProps {
  value?: KTMaybeReactive<string>;
  options: KTMaybeReactive<KTMuiBottomNavigationAction[]>;
  showLabels?: KTMaybeReactive<boolean>;
  'on:change'?: (value: string, oldValue: string, index: number, option?: KTMuiBottomNavigationAction) => void;
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
  const modelRef = $modelOrRef<string>(props, initialValue);

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

    const index = Number(currentTarget.dataset.index ?? '-1');
    const action = optionsRef.value[index];
    if (!action) {
      return;
    }

    selectAction(action, index);
  };

  const members = computed(() => {
    return optionsRef.value.map((action, index) => {
      const selected = modelRef.value === action.value;
      const showLabel = showLabelsRef.value || selected || !!action.showLabel;

      return (
        <button
          type="button"
          role="tab"
          class={`mui-bottom-navigation-action ${selected ? 'mui-bottom-navigation-action-selected' : ''} ${action.disabled ? 'mui-bottom-navigation-action-disabled' : ''} ${showLabel ? 'mui-bottom-navigation-action-show-label' : ''}`}
          data-index={String(index)}
          data-value={action.value}
          aria-selected={selected}
          aria-disabled={action.disabled ? 'true' : 'false'}
          disabled={action.disabled ?? false}
          tabIndex={selected ? 0 : -1}
          on:click={handleActionClick}
        >
          <span k-if={action.icon} class="mui-bottom-navigation-action-icon">
            {action.icon}
          </span>
          <span class="mui-bottom-navigation-action-label">{action.label}</span>
        </button>
      );
    });
  }, [optionsRef, modelRef, showLabelsRef]);

  const container = (
    <div class={className} style={styleRef} role="tablist" aria-label="Bottom navigation">
      <KTFor list={members}></KTFor>
    </div>
  ) as KTMuiBottomNavigation;

  ensureValidModelValue(false);
  optionsRef.addOnChange(() => ensureValidModelValue(true));

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
