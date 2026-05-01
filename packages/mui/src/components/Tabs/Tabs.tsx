import type { JSX, KTRef } from '@ktjs/core';
import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';

import { $emptyFn, $is, $parseStyle } from '@ktjs/shared';
import { KTIf, KTFor, computed, ref } from '@ktjs/core';

import { registerPrefixedEvents } from '../../common/attribute.js';
import { assertModel, toPseudoRef } from '../../common/pseudo-ref.js';

export type KTMuiTabsVariant = 'standard' | 'scrollable' | 'fullWidth';
export type KTMuiTabsTextColor = 'primary' | 'secondary' | 'inherit';
export type KTMuiTabsIndicatorColor = 'primary' | 'secondary';
export type KTMuiTabsOrientation = 'horizontal' | 'vertical';

export interface KTMuiTabOption {
  value: any;
  label: string | JSX.Element;
  icon?: JSX.Element | HTMLElement;
  disabled?: boolean;
}

export interface KTMuiTabsProps extends KTMuiProps {
  'k-model'?: KTRef<any>;
  options: KTMaybeReactive<KTMuiTabOption[]>;
  variant?: KTMaybeReactive<KTMuiTabsVariant>;
  textColor?: KTMaybeReactive<KTMuiTabsTextColor>;
  indicatorColor?: KTMaybeReactive<KTMuiTabsIndicatorColor>;
  orientation?: KTMaybeReactive<KTMuiTabsOrientation>;
  centered?: KTMaybeReactive<boolean>;
  'on:change'?: (value: any, oldValue: any, index: number, option?: KTMuiTabOption) => void;

  'on:click'?: (event: MouseEvent) => void;
  'on:mouseenter'?: (event: MouseEvent) => void;
  'on:mouseleave'?: (event: MouseEvent) => void;
}

export type KTMuiTabs = JSX.Element & {};

export function Tabs(props: KTMuiTabsProps): KTMuiTabs {
  const onChange = props['on:change'] ?? $emptyFn;

  const classRef = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));

  const optionsRef = toPseudoRef(props.options);
  const variantRef = toPseudoRef(props.variant ?? 'standard');
  const textColorRef = toPseudoRef(props.textColor ?? 'primary');
  const indicatorColorRef = toPseudoRef(props.indicatorColor ?? 'primary');
  const orientationRef = toPseudoRef(props.orientation ?? 'horizontal');
  const centeredRef = toPseudoRef(props.centered ?? false);

  const modelRef = assertModel(props, optionsRef.value[0]?.value ?? '');

  const tabsListRef = ref<HTMLDivElement>();
  const tabButtons: HTMLButtonElement[] = [];
  const tabValueMap = new Map<HTMLButtonElement, any>();

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
    const selectedIndex = options.findIndex((option) => $is(option.value, currentValue) && !option.disabled);
    if (selectedIndex >= 0) {
      return;
    }

    const fallbackIndex = options.findIndex((option) => !option.disabled);
    const fallback = fallbackIndex >= 0 ? options[fallbackIndex] : undefined;
    const nextValue = fallback?.value ?? '';
    if ($is(nextValue, currentValue)) {
      return;
    }

    modelRef.value = nextValue;
    if (emitChange) {
      onChange(nextValue, currentValue, fallbackIndex, fallback);
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

  const selectOption = (button: HTMLButtonElement) => {
    const index = Number(button.dataset.index ?? '-1');
    const option = optionsRef.value[index];
    if (!option || option.disabled) {
      return;
    }

    const value = tabValueMap.get(button);
    const oldValue = modelRef.value;
    if ($is(oldValue, value)) {
      return;
    }

    modelRef.value = value;
    onChange(value, oldValue, index, option);
  };

  const handleTabClick = (e: MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLButtonElement | null;
    if (!currentTarget) {
      return;
    }
    selectOption(currentTarget);
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
    const focused = document.activeElement as HTMLButtonElement;
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
      focused.click();
    }
  };

  const members = computed(() => {
    tabButtons.length = 0;
    tabValueMap.clear();
    return optionsRef.value.map((option, index) => {
      const selected = $is(modelRef.value, option.value);
      const tab = (
        <button
          type="button"
          role="tab"
          class={`mui-tab-root mui-tab-text-color-${textColorRef.value} ${selected ? 'mui-tab-selected' : ''} ${option.disabled ? 'mui-tab-disabled' : ''} ${option.icon ? 'mui-tab-has-icon' : ''}`}
          data-index={String(index)}
          aria-selected={selected}
          aria-disabled={option.disabled ? 'true' : 'false'}
          disabled={option.disabled ?? false}
          tabIndex={selected ? 0 : -1}
          on:click={handleTabClick}
        >
          {KTIf(option.icon, 'span', () => ({ class: 'mui-tab-icon', children: option.icon }))}
          <span class="mui-tab-label">{option.label}</span>
        </button>
      ) as HTMLButtonElement;

      tabButtons.push(tab);
      tabValueMap.set(tab, option.value);
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
  modelRef.listen(() => scheduleUpdateIndicator());
  optionsRef.listen(() => {
    ensureValidModelValue(true);
    scheduleUpdateIndicator();
  });
  variantRef.listen(() => scheduleUpdateIndicator());
  orientationRef.listen(() => scheduleUpdateIndicator());

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
