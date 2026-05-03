import type { JSX } from '@ktjs/core';
import type { KTMaybeReactive, KTMuiProps } from '../../types/component.js';

import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { computed, isRef, KTFor, ref, toKT } from '@ktjs/core';
import { registerPrefixedEvents } from '../../common/attribute.js';
import { Popover, type KTMuiPopoverCloseReason, type KTMuiPopoverDirection } from '../Popover/Popover.js';
import { toPseudoRef } from '../../common/pseudo-ref.js';

export type KTMuiMenuCloseReason = KTMuiPopoverCloseReason | 'itemClick';

export interface KTMuiMenuOption {
  value: string;
  label: string | JSX.Element;
  disabled?: boolean;
  selected?: boolean;
}

export type KTMuiMenuContent = KTMuiMenuOption | JSX.Element | HTMLElement | string;

export interface KTMuiMenuProps extends KTMuiProps {
  open?: KTMaybeReactive<boolean>;
  options?: KTMaybeReactive<KTMuiMenuContent[]>;
  direction?: KTMaybeReactive<KTMuiPopoverDirection>;
  autoClose?: KTMaybeReactive<boolean>;
  disableAutoFocusItem?: KTMaybeReactive<boolean>;
  'on:close'?: (reason: KTMuiMenuCloseReason) => void;
  'on:select'?: (value: string, option: KTMuiMenuOption) => void;
  children?: JSX.Element;
}

export type KTMuiMenu = JSX.Element & {};

const isMenuOption = (item: KTMuiMenuContent): item is KTMuiMenuOption => {
  return item !== null && typeof item === 'object' && 'value' in item && 'label' in item;
};

export function Menu(props: KTMuiMenuProps): KTMuiMenu {
  const onClose = props['on:close'] ?? $emptyFn;
  const onSelect = props['on:select'] ?? $emptyFn;
  const classRef = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));
  const openRef = toKT(props.open ?? false);
  const optionsRef = toPseudoRef<KTMuiMenuContent[]>(props.options ?? []);
  const directionRef = toPseudoRef(props.direction ?? 'bottom');
  const autoCloseRef = toPseudoRef(props.autoClose ?? true);
  const disableAutoFocusItemRef = toPseudoRef(props.disableAutoFocusItem ?? false);

  const menuListRef = ref<HTMLUListElement>();
  const menuItemElements: HTMLElement[] = [];

  let focusTimer = 0;
  const scheduleFocusFirstItem = () => {
    if (!openRef.value || disableAutoFocusItemRef.value) {
      return;
    }
    if (focusTimer) {
      clearTimeout(focusTimer);
    }
    focusTimer = window.setTimeout(() => {
      focusTimer = 0;
      focusFirstItem();
    }, 0);
  };

  const closeMenu = (reason: KTMuiMenuCloseReason) => {
    if (isRef(openRef)) {
      openRef.value = false;
    }
    onClose(reason);
  };

  const handleOptionClick = (e: MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLElement | null;
    if (!currentTarget) {
      return;
    }

    const index = Number(currentTarget.dataset.index ?? '-1');
    const content = optionsRef.value[index];
    if (!content || !isMenuOption(content) || content.disabled) {
      return;
    }

    onSelect(content.value, content);
    if (autoCloseRef.value) {
      closeMenu('itemClick');
    }
  };

  const focusFirstItem = () => {
    for (let i = 0; i < menuItemElements.length; i++) {
      if (!menuItemElements[i].classList.contains('mui-menu-item-disabled')) {
        menuItemElements[i].focus();
        return;
      }
    }
    menuListRef.value?.focus();
  };

  const focusNeighbor = (startIndex: number, step: 1 | -1) => {
    const total = menuItemElements.length;
    if (!total) {
      return;
    }

    for (let i = 0; i < total; i++) {
      const index = (startIndex + step * (i + 1) + total) % total;
      const item = menuItemElements[index];
      if (!item.classList.contains('mui-menu-item-disabled')) {
        item.focus();
        return;
      }
    }
  };

  const handleListKeyDown = (e: KeyboardEvent) => {
    const activeElement = document.activeElement as HTMLElement | null;
    const focusedIndex = menuItemElements.findIndex((item) => item === activeElement);

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu('escapeKeyDown');
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusNeighbor(focusedIndex < 0 ? -1 : focusedIndex, 1);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      focusNeighbor(focusedIndex < 0 ? 0 : focusedIndex, -1);
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
    if ((e.key === 'Enter' || e.key === ' ') && focusedIndex >= 0) {
      e.preventDefault();
      menuItemElements[focusedIndex].click();
    }
  };

  const members = computed(() => {
    menuItemElements.length = 0;
    return optionsRef.value.map((content, index) => {
      if (!isMenuOption(content)) {
        return (
          <li class="mui-menu-static" role="presentation">
            {content}
          </li>
        );
      }

      const item = (
        <li
          role="menuitem"
          tabIndex={content.disabled ? -1 : 0}
          class={`mui-menu-item ${content.disabled ? 'mui-menu-item-disabled' : ''} ${content.selected ? 'mui-menu-item-selected' : ''}`}
          data-index={String(index)}
          aria-disabled={content.disabled ? 'true' : 'false'}
          on:click={handleOptionClick}
        >
          {content.label}
        </li>
      ) as HTMLLIElement;

      menuItemElements.push(item);
      return item;
    });
  }, [optionsRef]);

  const container = (
    <Popover
      open={openRef}
      direction={directionRef}
      content={
        <div class={classRef.map((v) => `mui-menu-paper ${v}`)} style={styleRef}>
          <ul ref={menuListRef} class="mui-menu-list" role="menu" tabIndex={-1} on:keydown={handleListKeyDown}>
            <KTFor list={members}></KTFor>
          </ul>
        </div>
      }
      on:close={(reason) => closeMenu(reason)}
    >
      {props.children}
    </Popover>
  ) as KTMuiMenu;

  openRef.listen((isOpen) => {
    if (isOpen) {
      scheduleFocusFirstItem();
    }
  });
  optionsRef.listen(() => {
    if (openRef.value) {
      scheduleFocusFirstItem();
    }
  });

  scheduleFocusFirstItem();

  const originalRemove = container.remove;
  container.remove = () => {
    if (focusTimer) {
      clearTimeout(focusTimer);
      focusTimer = 0;
    }
    return originalRemove.call(container);
  };

  registerPrefixedEvents(container, props, ['on:close', 'on:select']);
  return container;
}
