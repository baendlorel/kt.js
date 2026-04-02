import type { JSX, KTMaybeReactive } from '@ktjs/core';
import type { KTMuiProps } from '../../types/component.js';

import { computed, effect, ref, KTConditional } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import { ensureRefLike, registerPrefixedEvents } from '../../common/attribute.js';
import { toPseudoRef } from '../../common/pseudo-ref.js';

import './Dialog.css.js';

export type KTMuiDialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

interface KTMuiDialogProps extends Omit<KTMuiProps, 'children'> {
  /**
   * Controls whether the dialog is open or closed
   * - Provide a `KTReactive` to make it reactive
   */
  open?: KTMaybeReactive<boolean>;
  title?: KTMaybeReactive<string>;
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | KTMaybeReactive<string>
    | KTMaybeReactive<JSX.Element>
    | KTMaybeReactive<JSX.Element[]>;
  actions?: KTMaybeReactive<JSX.Element | JSX.Element[] | undefined>;
  size?: KTMaybeReactive<KTMuiDialogSize>;
  fullWidth?: KTMaybeReactive<boolean>;

  /**
   * Dialog rendering mode: 'dialog' (native) or 'div' (fallback)
   * - 'dialog' uses <dialog> element if supported
   * - 'div' always uses <div>
   * - Default: 'dialog'
   */
  mode?: KTMaybeReactive<'dialog' | 'div'>;

  'on:close'?: () => void;

  // # native events
  // intentionally omitted: dialog is a composite overlay component and does not promise generic root event passthrough.
}

export type KTMuiDialog = JSX.Element;

const DIALOG_ENTER_MS = 12;
const DIALOG_EXIT_MS = 225;
const SUPPORTS_DIALOG =
  typeof window !== 'undefined' &&
  typeof HTMLDialogElement !== 'undefined' &&
  typeof HTMLDialogElement.prototype.showModal === 'function' &&
  typeof HTMLDialogElement.prototype.close === 'function';

/**
 * Dialog component - mimics MUI Dialog appearance and behavior
 * Only handles open/close state, title and content are passed as props
 */
export function Dialog(props: KTMuiDialogProps): KTMuiDialog {
  const { 'on:close': onClose = $emptyFn, children } = props;

  const customClassRef = toPseudoRef(props.class ?? '');
  const styleRef = toPseudoRef($parseStyle(props.style));

  const actionsRef = toPseudoRef(props.actions);
  const titleRef = toPseudoRef(props.title ?? '');
  const visibleRef = ref(false);
  const activeRef = ref(false);
  let enterTimer: ReturnType<typeof setTimeout> | undefined;
  let exitTimer: ReturnType<typeof setTimeout> | undefined;

  // Mode selection
  const modeRef = toPseudoRef(props.mode ?? 'dialog');

  const clearTimers = () => {
    if (enterTimer) {
      clearTimeout(enterTimer);
      enterTimer = undefined;
    }
    if (exitTimer) {
      clearTimeout(exitTimer);
      exitTimer = undefined;
    }
  };

  const queueEnter = () => {
    if (exitTimer) {
      clearTimeout(exitTimer);
      exitTimer = undefined;
    }
    visibleRef.value = true;
    if (enterTimer) {
      clearTimeout(enterTimer);
    }
    enterTimer = setTimeout(() => {
      if (openRef.value) {
        activeRef.value = true;
        // Native dialog: show()
        if (dialogEl.value instanceof HTMLDialogElement) {
          dialogEl.value.showModal();
        }
        // Lock scroll
        document.body.style.overflow = 'hidden';
        // Focus
        setTimeout(() => dialogEl.value.focus(), 0);
      }
    }, DIALOG_ENTER_MS);
  };

  const queueExit = () => {
    if (enterTimer) {
      clearTimeout(enterTimer);
      enterTimer = undefined;
    }
    activeRef.value = false;
    if (exitTimer) {
      clearTimeout(exitTimer);
    }
    exitTimer = setTimeout(() => {
      if (!openRef.value) {
        visibleRef.value = false;
        // Native dialog: close()
        if (dialogEl.value instanceof HTMLDialogElement) {
          dialogEl.value.close();
        }
        // Unlock scroll
        document.body.style.overflow = '';
      }
    }, DIALOG_EXIT_MS);
  };

  const openRef = ensureRefLike(props.open ?? false).addOnChange((v) => (v ? queueEnter() : queueExit()));
  const sizeRef = toPseudoRef(props.size ?? 'sm');
  const fullWidthRef = toPseudoRef(props.fullWidth ?? false);

  const dialogEl = ref<HTMLDivElement | HTMLDialogElement>();

  if (openRef.value) {
    queueEnter();
  }

  const className = computed(
    () =>
      `kt-dialog-paper ${sizeRef.value ? `kt-dialog-maxWidth-${sizeRef.value}` : ''} ${fullWidthRef.value ? 'kt-dialog-fullWidth' : ''} ${customClassRef.value}`,
    [sizeRef, fullWidthRef, customClassRef],
  );
  const backdropClass = computed(
    () => `kt-dialog-backdrop ${activeRef.value ? 'kt-dialog-backdrop-open' : ''}`,
    [activeRef],
  );
  const backdropStyle = computed<string>(() => (visibleRef.value ? 'display:flex' : 'display:none'), [visibleRef]);

  // Handle ESC key - store handler for cleanup
  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      openRef.value = false;
      onClose();
    }
  };

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === container) {
      onClose();
    }
  };

  const assignContainer = () => {
    if (modeRef.value === 'dialog' && SUPPORTS_DIALOG) {
      return (
        <div class={backdropClass} style={backdropStyle}>
          <dialog
            ref={dialogEl}
            class={className}
            style={styleRef}
            tabIndex={-1}
            on:click={(e: MouseEvent) => e.stopPropagation()}
          >
            {KTConditional(titleRef, 'div', { class: 'kt-dialog-title', children: <h2>{titleRef}</h2> })}
            {KTConditional(children, 'div', { class: 'kt-dialog-content', children })}
            {KTConditional(actionsRef, 'div', { class: 'kt-dialog-actions', children: actionsRef })}
          </dialog>
        </div>
      ) as KTMuiDialog;
    } else {
      return (
        <div class={backdropClass} style={backdropStyle} on:click={handleBackdropClick}>
          <div
            ref={dialogEl}
            class={className}
            style={styleRef}
            tabIndex={-1}
            on:click={(e: MouseEvent) => e.stopPropagation()}
          >
            {KTConditional(titleRef, 'div', { class: 'kt-dialog-title', children: <h2>{titleRef}</h2> })}
            {KTConditional(children, 'div', { class: 'kt-dialog-content', children })}
            {KTConditional(actionsRef, 'div', { class: 'kt-dialog-actions', children: actionsRef })}
          </div>
        </div>
      ) as KTMuiDialog;
    }
  };

  // Backdrop element
  let container: KTMuiDialog = assignContainer();
  effect(() => (container = assignContainer()), [modeRef]);

  document.addEventListener('keydown', keyDownHandler);

  // Store cleanup function
  const originalRemove = container.remove;
  container.remove = () => {
    clearTimers();
    if (keyDownHandler) {
      document.removeEventListener('keydown', keyDownHandler);
    }
    // Unlock scroll
    document.body.style.overflow = '';
    return originalRemove.call(container);
  };

  registerPrefixedEvents(container, props, ['on:close']);
  return container;
}
