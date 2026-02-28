import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { type KTReactive, computed, toReactive } from '@ktjs/core';
import { $clamp, $emptyFn, $max, $min, $parseStyle, $round } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import './Popover.css.ts';
import { registerPrefixedEvents } from '../../common/attribute.js';

type PopoverVerticalOrigin = 'top' | 'center' | 'bottom';
type PopoverHorizontalOrigin = 'left' | 'center' | 'right';

export interface KTMuiPopoverOrigin {
  vertical: PopoverVerticalOrigin;
  horizontal: PopoverHorizontalOrigin;
}

export type KTMuiPopoverCloseReason = 'backdropClick' | 'escapeKeyDown';

export interface KTMuiPopoverProps extends KTMuiProps {
  /**
   * Indicates whether the popover is open.
   */
  open?: KTMaybeReactive<boolean>;

  /**
   * The DOM element used as the anchor of the popover. The popover will appear next to this element.
   */
  anchorEl?: HTMLElement | null | KTReactive<HTMLElement | null>; // ?? 这对吗

  /**
   * Defines which part of the anchor element to align the popover with.
   */
  anchorOrigin?: KTMaybeReactive<KTMuiPopoverOrigin>;

  /**
   * Defines which part of the popover to align with the anchor element.
   */
  transformOrigin?: KTMaybeReactive<KTMuiPopoverOrigin>;

  /**
   * The margin between the popover and the edge of the screen.
   * This is used to prevent the popover from being positioned in a way that it would be inaccessible to users, such as being off-screen.
   */
  marginThreshold?: KTMaybeReactive<number>;

  /**
   * The elevation of the popover, which affects the shadow depth.
   * It can be a value between 0 and 24.
   */
  elevation?: KTMaybeReactive<number>;

  'on:close'?: (reason: KTMuiPopoverCloseReason) => void;
}

export type KTMuiPopover = JSX.Element & {};

const DEFAULT_ANCHOR_ORIGIN: KTMuiPopoverOrigin = {
  vertical: 'top',
  horizontal: 'left',
};

const DEFAULT_TRANSFORM_ORIGIN: KTMuiPopoverOrigin = {
  vertical: 'top',
  horizontal: 'left',
};
const EXIT_TRANSITION_MS = 180;

const getOffsetFromVertical = (height: number, vertical: PopoverVerticalOrigin) => {
  if (vertical === 'center') {
    return height / 2;
  }
  if (vertical === 'bottom') {
    return height;
  }
  return 0;
};

const getOffsetFromHorizontal = (width: number, horizontal: PopoverHorizontalOrigin) => {
  if (horizontal === 'center') {
    return width / 2;
  }
  if (horizontal === 'right') {
    return width;
  }
  return 0;
};

const getElevationShadow = (level: number) => {
  const n = $max(0, $min(24, level));
  if (n === 0) {
    return 'none';
  }

  const y1 = $max(1, $round(n / 2));
  const blur1 = $round(3 + n * 1.4);
  const y2 = $max(1, $round(n / 3));
  const blur2 = $round(2 + n * 0.9);
  const y3 = $max(1, $round(n / 5));
  const blur3 = $round(2 + n * 0.6);

  return `0 ${y1}px ${blur1}px rgba(0, 0, 0, 0.2), 0 ${y2}px ${blur2}px rgba(0, 0, 0, 0.14), 0 ${y3}px ${blur3}px rgba(0, 0, 0, 0.12)`;
};

/**
 * Popover component - mimics MUI Popover appearance and behavior
 */
export function Popover(props: KTMuiPopoverProps): KTMuiPopover {
  const onClose = props['on:close'] ?? $emptyFn;
  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  let openTransitionTimer = 0;
  let hideTransitionTimer = 0;
  const clearTransitionTimers = () => {
    if (openTransitionTimer) {
      clearTimeout(openTransitionTimer);
      openTransitionTimer = 0;
    }

    if (hideTransitionTimer) {
      clearTimeout(hideTransitionTimer);
      hideTransitionTimer = 0;
    }
  };

  let positionTimer = 0;
  const scheduleUpdatePosition = () => {
    if (!openRef.value) {
      return;
    }
    if (positionTimer) {
      clearTimeout(positionTimer);
    }
    positionTimer = window.setTimeout(() => {
      updatePosition();
      positionTimer = 0;
    }, 0);
  };

  const syncOpenState = (isOpen: boolean) => {
    clearTransitionTimers();
    paper.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
      container.style.display = 'block';
      container.classList.add('mui-popover-rendered');
      openTransitionTimer = window.setTimeout(() => {
        openTransitionTimer = 0;
        if (!openRef.value) {
          return;
        }
        container.classList.add('mui-popover-open');
      }, 0);
      return;
    }

    container.classList.remove('mui-popover-open');
    hideTransitionTimer = window.setTimeout(() => {
      hideTransitionTimer = 0;
      if (openRef.value) {
        return;
      }
      container.style.display = 'none';
      container.classList.remove('mui-popover-rendered');
    }, EXIT_TRANSITION_MS);
  };

  const openRef = toReactive(props.open ?? false, (isOpen) => {
    syncOpenState(isOpen);
    if (isOpen) {
      scheduleUpdatePosition();
    }
  });

  const anchorElRef = toReactive<HTMLElement | null>(props.anchorEl ?? null, scheduleUpdatePosition);
  const anchorOriginRef = toReactive(props.anchorOrigin ?? DEFAULT_ANCHOR_ORIGIN, scheduleUpdatePosition);
  const transformOriginRef = toReactive(props.transformOrigin ?? DEFAULT_TRANSFORM_ORIGIN, scheduleUpdatePosition);
  const marginThresholdRef = toReactive(props.marginThreshold ?? 16, scheduleUpdatePosition);
  const elevationRef = toReactive(props.elevation ?? 8);

  const paperClassName = computed(() => {
    return ['mui-popover-paper', customClassRef.value].join(' ').trim();
  }, [customClassRef]);

  const paperStyle = computed(() => {
    const custom = styleRef.value;
    const shadow = getElevationShadow(elevationRef.value);
    return `${custom}${custom ? ';' : ''}box-shadow:${shadow}`;
  }, [styleRef, elevationRef]);

  const updatePosition = () => {
    if (!openRef.value) {
      return;
    }

    const paperRect = paper.getBoundingClientRect();
    const anchor = anchorElRef.value;
    const anchorRect = anchor
      ? anchor.getBoundingClientRect()
      : {
          width: 0,
          height: 0,
          top: window.innerHeight / 2,
          left: window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        };

    const anchorOrigin = anchorOriginRef.value ?? DEFAULT_ANCHOR_ORIGIN;
    const transformOrigin = transformOriginRef.value ?? DEFAULT_TRANSFORM_ORIGIN;

    let top =
      anchorRect.top +
      getOffsetFromVertical(anchorRect.height, anchorOrigin.vertical) -
      getOffsetFromVertical(paperRect.height, transformOrigin.vertical);
    let left =
      anchorRect.left +
      getOffsetFromHorizontal(anchorRect.width, anchorOrigin.horizontal) -
      getOffsetFromHorizontal(paperRect.width, transformOrigin.horizontal);

    const margin = $max(0, marginThresholdRef.value);
    top = $clamp(top, margin, window.innerHeight - paperRect.height - margin);
    left = $clamp(left, margin, window.innerWidth - paperRect.width - margin);

    paper.style.top = `${$round(top)}px`;
    paper.style.left = `${$round(left)}px`;
  };

  const close = (reason: KTMuiPopoverCloseReason) => {
    if (!openRef.value) {
      return;
    }
    openRef.value = false;
    onClose(reason);
  };

  const handleDocumentMouseDown = (e: MouseEvent) => {
    if (!openRef.value) {
      return;
    }
    const target = e.target as Node | null;
    if (!target) {
      return;
    }
    if (paper.contains(target)) {
      return;
    }
    if (anchorElRef.value?.contains(target)) {
      return;
    }
    close('backdropClick');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close('escapeKeyDown');
    }
  };

  const paper = (
    <div class={paperClassName} style={paperStyle} role="dialog" aria-hidden={!openRef.value}>
      {props.children}
    </div>
  ) as HTMLDivElement;

  const container = (
    <div
      class={`mui-popover-root ${openRef.value ? 'mui-popover-open mui-popover-rendered' : ''}`}
      style={openRef.value ? 'display: block;' : 'display: none;'}
    >
      {paper}
    </div>
  ) as KTMuiPopover;

  document.addEventListener('mousedown', handleDocumentMouseDown);
  document.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', scheduleUpdatePosition);
  window.addEventListener('scroll', scheduleUpdatePosition, true);

  syncOpenState(openRef.value);
  if (openRef.value) {
    scheduleUpdatePosition();
  }

  // Ensure listeners are removed when users call element.remove().
  const originalRemove = container.remove;
  container.remove = () => {
    clearTransitionTimers();
    if (positionTimer) {
      clearTimeout(positionTimer);
    }
    document.removeEventListener('mousedown', handleDocumentMouseDown);
    document.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('resize', scheduleUpdatePosition);
    window.removeEventListener('scroll', scheduleUpdatePosition, true);
    return originalRemove.call(container);
  };

  registerPrefixedEvents(container, props, ['on:close']);
  return container;
}
