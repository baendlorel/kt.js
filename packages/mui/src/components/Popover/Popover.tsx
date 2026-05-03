import type { JSX, KTMaybeReactive } from '@ktjs/core';

import { $clamp, $emptyFn } from '@ktjs/shared';
import { ensureRefLike, registerPrefixedEvents } from '../../common/attribute.js';
import { toPseudoRef } from '../../common/pseudo-ref.js';

export type KTMuiPopoverCloseReason = 'backdropClick' | 'escapeKeyDown';
export type KTMuiPopoverDirection = 'top' | 'right' | 'bottom' | 'left';
export type KTMuiPopoverContent = string | JSX.Element;

export interface KTMuiPopoverProps {
  open?: KTMaybeReactive<boolean>;
  content?: KTMaybeReactive<KTMuiPopoverContent>;
  direction?: KTMaybeReactive<KTMuiPopoverDirection>;
  'on:close'?: (reason: KTMuiPopoverCloseReason) => void;
  children?: JSX.Element;
}

export type KTMuiPopover = JSX.Element & {};

const EXIT_TRANSITION_MS = 180;
const VIEWPORT_MARGIN = 16;

const getTransformOrigin = (direction: KTMuiPopoverDirection) => {
  if (direction === 'top') {
    return 'center bottom';
  }
  if (direction === 'right') {
    return 'left center';
  }
  if (direction === 'left') {
    return 'right center';
  }
  return 'center top';
};

const getPosition = (anchorRect: DOMRect, paperRect: DOMRect, direction: KTMuiPopoverDirection) => {
  if (direction === 'top') {
    return {
      top: anchorRect.top - paperRect.height,
      left: anchorRect.left + (anchorRect.width - paperRect.width) / 2,
    };
  }

  if (direction === 'right') {
    return {
      top: anchorRect.top + (anchorRect.height - paperRect.height) / 2,
      left: anchorRect.right,
    };
  }

  if (direction === 'left') {
    return {
      top: anchorRect.top + (anchorRect.height - paperRect.height) / 2,
      left: anchorRect.left - paperRect.width,
    };
  }

  return {
    top: anchorRect.bottom,
    left: anchorRect.left + (anchorRect.width - paperRect.width) / 2,
  };
};

const getAvailableSpace = (anchorRect: DOMRect, direction: KTMuiPopoverDirection) => {
  if (direction === 'top') {
    return anchorRect.top - VIEWPORT_MARGIN;
  }
  if (direction === 'right') {
    return window.innerWidth - anchorRect.right - VIEWPORT_MARGIN;
  }
  if (direction === 'left') {
    return anchorRect.left - VIEWPORT_MARGIN;
  }
  return window.innerHeight - anchorRect.bottom - VIEWPORT_MARGIN;
};

const getOppositeDirection = (direction: KTMuiPopoverDirection): KTMuiPopoverDirection => {
  if (direction === 'top') {
    return 'bottom';
  }
  if (direction === 'right') {
    return 'left';
  }
  if (direction === 'left') {
    return 'right';
  }
  return 'top';
};

const resolveDirection = (anchorRect: DOMRect, paperRect: DOMRect, preferred: KTMuiPopoverDirection) => {
  const expectedSize = preferred === 'top' || preferred === 'bottom' ? paperRect.height : paperRect.width;
  if (getAvailableSpace(anchorRect, preferred) >= expectedSize) {
    return preferred;
  }

  const opposite = getOppositeDirection(preferred);
  if (getAvailableSpace(anchorRect, opposite) > getAvailableSpace(anchorRect, preferred)) {
    return opposite;
  }

  return preferred;
};

export function Popover(props: KTMuiPopoverProps): KTMuiPopover {
  const onClose = props['on:close'] ?? $emptyFn;
  const openRef = ensureRefLike<boolean>(props.open ?? false);
  const contentRef = toPseudoRef(props.content ?? '');
  const directionRef = toPseudoRef(props.direction ?? 'bottom');

  let openTransitionTimer = 0;
  let hideTransitionTimer = 0;
  let positionTimer = 0;

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

  const paper = (
    <div class="mui-popover-paper" role="dialog" aria-hidden={!openRef.value}>
      {contentRef}
    </div>
  ) as HTMLDivElement;

  const container = (
    <span class="mui-popover-anchor-root">
      {props.children}
      <div
        class={`mui-popover-root ${openRef.value ? 'mui-popover-open mui-popover-rendered' : ''}`}
        style={openRef.value ? 'display: block;' : 'display: none;'}
      >
        {paper}
      </div>
    </span>
  ) as HTMLSpanElement & KTMuiPopover;

  const overlay = container.querySelector('.mui-popover-root') as HTMLDivElement;
  const anchor = () => container;

  const updatePosition = () => {
    if (!openRef.value) {
      return;
    }

    const paperRect = paper.getBoundingClientRect();
    const anchorRect = anchor().getBoundingClientRect();
    const direction = resolveDirection(anchorRect, paperRect, directionRef.value);
    const next = getPosition(anchorRect, paperRect, direction);

    paper.style.transformOrigin = getTransformOrigin(direction);
    paper.style.top = `${$clamp(next.top, VIEWPORT_MARGIN, window.innerHeight - paperRect.height - VIEWPORT_MARGIN)}px`;
    paper.style.left = `${$clamp(next.left, VIEWPORT_MARGIN, window.innerWidth - paperRect.width - VIEWPORT_MARGIN)}px`;
  };

  const scheduleUpdatePosition = () => {
    if (!openRef.value) {
      return;
    }
    if (positionTimer) {
      clearTimeout(positionTimer);
    }
    positionTimer = window.setTimeout(() => {
      positionTimer = 0;
      updatePosition();
    }, 0);
  };

  const syncOpenState = (isOpen: boolean) => {
    clearTransitionTimers();
    paper.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
      overlay.style.display = 'block';
      overlay.classList.add('mui-popover-rendered');
      openTransitionTimer = window.setTimeout(() => {
        openTransitionTimer = 0;
        if (openRef.value) {
          overlay.classList.add('mui-popover-open');
        }
      }, 0);
      return;
    }

    overlay.classList.remove('mui-popover-open');
    hideTransitionTimer = window.setTimeout(() => {
      hideTransitionTimer = 0;
      if (!openRef.value) {
        overlay.style.display = 'none';
        overlay.classList.remove('mui-popover-rendered');
      }
    }, EXIT_TRANSITION_MS);
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
    if (!target || paper.contains(target) || anchor().contains(target)) {
      return;
    }
    close('backdropClick');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close('escapeKeyDown');
    }
  };

  openRef.listen((isOpen) => {
    syncOpenState(isOpen);
    if (isOpen) {
      scheduleUpdatePosition();
    }
  });
  contentRef.listen(scheduleUpdatePosition);
  directionRef.listen(scheduleUpdatePosition);

  document.addEventListener('mousedown', handleDocumentMouseDown);
  document.addEventListener('keydown', handleKeyDown);
  window.addEventListener('resize', scheduleUpdatePosition);
  window.addEventListener('scroll', scheduleUpdatePosition, true);

  syncOpenState(openRef.value);
  if (openRef.value) {
    scheduleUpdatePosition();
  }

  const originalRemove = container.remove;
  container.remove = () => {
    clearTransitionTimers();
    if (positionTimer) {
      clearTimeout(positionTimer);
      positionTimer = 0;
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
