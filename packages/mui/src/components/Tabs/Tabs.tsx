import type { JSX } from '@ktjs/core';
import { $modelOrRef, KTConditional, KTFor, computed, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { registerPrefixedEvents } from '../../common/attribute.js';
import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';
import './Tabs.css.ts';

export type KTMuiTabsVariant = 'standard' | 'scrollable' | 'fullWidth';
export type KTMuiTabsTextColor = 'primary' | 'secondary' | 'inherit';
export type KTMuiTabsIndicatorColor = 'primary' | 'secondary';
export type KTMuiTabsOrientation = 'horizontal' | 'vertical';

export interface KTMuiTabOption {
  value: string;
  label: string | JSX.Element;
  icon?: JSX.Element | HTMLElement;
  disabled?: boolean;
}

export interface KTMuiTabsProps extends KTMuiProps {
  value?: KTMaybeReactive<string>;
  options: KTMaybeReactive<KTMuiTabOption[]>;
  variant?: KTMaybeReactive<KTMuiTabsVariant>;
  textColor?: KTMaybeReactive<KTMuiTabsTextColor>;
  indicatorColor?: KTMaybeReactive<KTMuiTabsIndicatorColor>;
  orientation?: KTMaybeReactive<KTMuiTabsOrientation>;
  centered?: KTMaybeReactive<boolean>;
  'on:change'?: (value: string, oldValue: string, index: number, option?: KTMuiTabOption) => void;
}

export type KTMuiTabs = JSX.Element & {};

const findFirstEnabled = (options: KTMuiTabOption[]) => {
  for (let i = 0; i < options.length; i++) {
    if (!options[i].disabled) {
      return { option: options[i], index: i };
    }
  }
  return null;
};

/**
 * Tabs component - mimics MUI Tabs appearance and behavior
 */
export function Tabs(props: KTMuiTabsProps): KTMuiTabs {
  const onChange = props['on:change'] ?? $emptyFn;

  const classRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const optionsRef = toReactive(props.options);
  const variantRef = toReactive(props.variant ?? 'standard');
  const textColorRef = toReactive(props.textColor ?? 'primary');
  const indicatorColorRef = toReactive(props.indicatorColor ?? 'primary');
  const orientationRef = toReactive(props.orientation ?? 'horizontal');
  const centeredRef = toReactive(props.centered ?? false);

  const initialValue = typeof props.value === 'string' ? props.value : '';
  const modelRef = $modelOrRef<string>(props, initialValue);

  const tabsListRef = ref<HTMLDivElement>();
  const tabButtons: HTMLButtonElement[] = [];

  let indicatorTimer = 0;
  const scheduleUpdateIndicator = () => {
    if (indicatorTimer) {
      clearTimeout(indicatorTimer);
    }
    indicatorTimer = window.setTimeout(() => {
      indicatorTimer = 0;
      updateIndicator();
    }, 0);
  };

  const ensureValidModelValue = (emitChange: boolean) => {
    const currentValue = modelRef.value;
    const options = optionsRef.value;
    const selected = options.find((option) => option.value === currentValue && !option.disabled);
    if (selected) {
      return;
    }

    const fallback = findFirstEnabled(options);
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
      'mui-tabs-root',
      `mui-tabs-variant-${variantRef.value}`,
      `mui-tabs-orientation-${orientationRef.value}`,
      centeredRef.value ? 'mui-tabs-centered' : '',
      classRef.value,
    ].join(' ');
  }, [variantRef, orientationRef, centeredRef, classRef]);

  const indicatorClassName = computed(() => {
    return [
      'mui-tabs-indicator',
      `mui-tabs-indicator-color-${indicatorColorRef.value}`,
      `mui-tabs-indicator-orientation-${orientationRef.value}`,
    ].join(' ');
  }, [indicatorColorRef, orientationRef]);

  const updateIndicator = () => {
    const tabsList = tabsListRef.value;
    if (!tabsList) {
      return;
    }

    const selectedTab = tabsList.querySelector('.mui-tab-root.mui-tab-selected') as HTMLButtonElement | null;
    if (!selectedTab) {
      indicator.style.opacity = '0';
      return;
    }

    indicator.style.opacity = '1';
    if (orientationRef.value === 'vertical') {
      indicator.style.width = '2px';
      indicator.style.height = `${selectedTab.offsetHeight}px`;
      indicator.style.transform = `translateY(${selectedTab.offsetTop}px)`;
    } else {
      indicator.style.height = '2px';
      indicator.style.width = `${selectedTab.offsetWidth}px`;
      indicator.style.transform = `translateX(${selectedTab.offsetLeft}px)`;
    }
  };

  const selectOption = (option: KTMuiTabOption, index: number) => {
    if (option.disabled) {
      return;
    }

    const oldValue = modelRef.value;
    if (oldValue === option.value) {
      return;
    }

    modelRef.value = option.value;
    onChange(option.value, oldValue, index, option);
  };

  const handleTabClick = (e: MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLButtonElement | null;
    if (!currentTarget) {
      return;
    }

    const index = Number(currentTarget.dataset.index ?? '-1');
    const option = optionsRef.value[index];
    if (!option) {
      return;
    }

    selectOption(option, index);
  };

  const focusNeighbor = (startIndex: number, step: 1 | -1) => {
    const options = optionsRef.value;
    if (!options.length) {
      return;
    }

    const limit = options.length;
    for (let i = 0; i < limit; i++) {
      const index = (startIndex + step * (i + 1) + limit) % limit;
      const option = options[index];
      if (option && !option.disabled) {
        tabButtons[index]?.focus();
        return;
      }
    }
  };

  const handleListKeyDown = (e: KeyboardEvent) => {
    const focused = document.activeElement as HTMLButtonElement | null;
    const focusedIndex = tabButtons.findIndex((button) => button === focused);
    if (focusedIndex < 0) {
      return;
    }

    const isVertical = orientationRef.value === 'vertical';
    if ((isVertical && e.key === 'ArrowDown') || (!isVertical && e.key === 'ArrowRight')) {
      e.preventDefault();
      focusNeighbor(focusedIndex, 1);
      return;
    }

    if ((isVertical && e.key === 'ArrowUp') || (!isVertical && e.key === 'ArrowLeft')) {
      e.preventDefault();
      focusNeighbor(focusedIndex, -1);
      return;
    }

    if (e.key === 'Home') {
      e.preventDefault();
      focusNeighbor(-1, 1);
      return;
    }

    if (e.key === 'End') {
      e.preventDefault();
      focusNeighbor(0, -1);
      return;
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // fixme
      focused.click();
    }
  };

  const members = computed(() => {
    tabButtons.length = 0;
    return optionsRef.value.map((option, index) => {
      const selected = modelRef.value === option.value;
      const tab = (
        <button
          type="button"
          role="tab"
          class={`mui-tab-root mui-tab-text-color-${textColorRef.value} ${selected ? 'mui-tab-selected' : ''} ${option.disabled ? 'mui-tab-disabled' : ''} ${option.icon ? 'mui-tab-has-icon' : ''}`}
          data-value={option.value}
          data-index={String(index)}
          aria-selected={selected}
          aria-disabled={option.disabled ? 'true' : 'false'}
          disabled={option.disabled ?? false}
          tabIndex={selected ? 0 : -1}
          on:click={handleTabClick}
        >
          {KTConditional(option.icon, 'span', { class: 'mui-tab-icon', children: option.icon })}
          <span class="mui-tab-label">{option.label}</span>
        </button>
      ) as HTMLButtonElement;

      tabButtons.push(tab);
      return tab;
    });
  }, [optionsRef, modelRef, textColorRef]);

  const indicator = (<span class={indicatorClassName}></span>) as HTMLSpanElement;

  const container = (
    <div class={className} style={styleRef}>
      <div class="mui-tabs-scroller">
        <div ref={tabsListRef} class="mui-tabs-list" role="tablist" on:keydown={handleListKeyDown}>
          <KTFor list={members}></KTFor>
          {indicator}
        </div>
      </div>
    </div>
  ) as KTMuiTabs;

  ensureValidModelValue(false);
  modelRef.addOnChange(() => scheduleUpdateIndicator());
  optionsRef.addOnChange(() => {
    ensureValidModelValue(true);
    scheduleUpdateIndicator();
  });
  variantRef.addOnChange(() => scheduleUpdateIndicator());
  orientationRef.addOnChange(() => scheduleUpdateIndicator());

  window.addEventListener('resize', scheduleUpdateIndicator);
  scheduleUpdateIndicator();

  const originalRemove = container.remove;
  container.remove = () => {
    if (indicatorTimer) {
      clearTimeout(indicatorTimer);
      indicatorTimer = 0;
    }
    window.removeEventListener('resize', scheduleUpdateIndicator);
    return originalRemove.call(container);
  };

  registerPrefixedEvents(container, props, ['on:change']);
  return container;
}
