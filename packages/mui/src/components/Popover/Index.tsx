import type { JSX } from '@ktjs/core';
import { type KTReactive, computed, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import type { KTMuiProps } from '../../types/component.js';
import './Popover.css';

type PopoverVerticalOrigin = 'top' | 'center' | 'bottom';
type PopoverHorizontalOrigin = 'left' | 'center' | 'right';

export interface KTMuiPopoverOrigin {
  vertical: PopoverVerticalOrigin;
  horizontal: PopoverHorizontalOrigin;
}

export type KTMuiPopoverCloseReason = 'backdropClick' | 'escapeKeyDown';

export interface KTMuiPopoverProps extends KTMuiProps {
  open?: boolean | KTReactive<boolean>;
  anchorEl?: HTMLElement | null | KTReactive<HTMLElement | null>;
  anchorOrigin?: KTMuiPopoverOrigin | KTReactive<KTMuiPopoverOrigin>;
  transformOrigin?: KTMuiPopoverOrigin | KTReactive<KTMuiPopoverOrigin>;
  marginThreshold?: number | KTReactive<number>;
  elevation?: number | KTReactive<number>;
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

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

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
  const n = Math.max(0, Math.min(24, level));
  if (n === 0) {
    return 'none';
  }

  const y1 = Math.max(1, Math.round(n / 2));
  const blur1 = Math.round(3 + n * 1.4);
  const y2 = Math.max(1, Math.round(n / 3));
  const blur2 = Math.round(2 + n * 0.9);
  const y3 = Math.max(1, Math.round(n / 5));
  const blur3 = Math.round(2 + n * 0.6);

  return `0 ${y1}px ${blur1}px rgba(0, 0, 0, 0.2), 0 ${y2}px ${blur2}px rgba(0, 0, 0, 0.14), 0 ${y3}px ${blur3}px rgba(0, 0, 0, 0.12)`;
};

/**
 * Popover component - mimics MUI Popover appearance and behavior
 */
export function Popover(props: KTMuiPopoverProps): KTMuiPopover {
  const onClose = props['on:close'] ?? $emptyFn;
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

  const anchorElRef = toReactive<HTMLElement | null>(props.anchorEl ?? null, () => scheduleUpdatePosition());
  const anchorOriginRef = toReactive(props.anchorOrigin ?? DEFAULT_ANCHOR_ORIGIN, () => scheduleUpdatePosition());
  const transformOriginRef = toReactive(props.transformOrigin ?? DEFAULT_TRANSFORM_ORIGIN, () =>
    scheduleUpdatePosition(),
  );
  const marginThresholdRef = toReactive(props.marginThreshold ?? 16, () => scheduleUpdatePosition());
  const elevationRef = toReactive(props.elevation ?? 8);
  const classRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const paperClassName = computed(() => {
    return ['mui-popover-paper', classRef.value].join(' ').trim();
  }, [classRef]);

  const paperStyle = computed(() => {
    const custom = styleRef.value;
    const shadow = getElevationShadow(elevationRef.value);
    return `${custom}${custom ? ';' : ''}box-shadow:${shadow}`;
  }, [styleRef, elevationRef]);

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

    const margin = Math.max(0, marginThresholdRef.value);
    top = clamp(top, margin, window.innerHeight - paperRect.height - margin);
    left = clamp(left, margin, window.innerWidth - paperRect.width - margin);

    paper.style.top = `${Math.round(top)}px`;
    paper.style.left = `${Math.round(left)}px`;
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
    const anchor = anchorElRef.value;
    if (anchor?.contains(target)) {
      return;
    }
    close('backdropClick');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close('escapeKeyDown');
    }
  };

  const handleWindowResize = () => scheduleUpdatePosition();

  const paper = (
    <div class={paperClassName} style={paperStyle} role="dialog" aria-hidden={!openRef.value}>
      {props.children}
    </div>
  ) as HTMLDivElement;

  const container = (
    <div
      class={`mui-popover-root ${openRef.value ? 'mui-popover-open mui-popover-rendered' : ''}`}
      style={{ display: openRef.value ? 'block' : 'none' }}
    >
      {paper}
    </div>
  ) as KTMuiPopover;

  document.addEventListener('mousedown', handleDocumentMouseDown);
  document.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', handleWindowResize);
  window.addEventListener('scroll', handleWindowResize, true);

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
    window.removeEventListener('resize', handleWindowResize);
    window.removeEventListener('scroll', handleWindowResize, true);
    return originalRemove.call(container);
  };

  return container;
}
