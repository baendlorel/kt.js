import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { computed, ref, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import './Dialog.css.ts';
import { registerPrefixedEvents } from '../../common/attribute';
import { KTMuiProps } from '../../types/component';

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
  actions?: KTMaybeReactive<HTMLElement | HTMLElement[]>;
  size?: KTMaybeReactive<KTMuiDialogSize>;
  fullWidth?: KTMaybeReactive<boolean>;

  'on:close'?: () => void;
}

export type KTMuiDialog = JSX.Element;

const DIALOG_ENTER_MS = 12;
const DIALOG_EXIT_MS = 225;

/**
 * Dialog component - mimics MUI Dialog appearance and behavior
 * Only handles open/close state, title and content are passed as props
 */
export function Dialog(props: KTMuiDialogProps): KTMuiDialog {
  let { 'on:close': onClose = $emptyFn, children, actions } = props;

  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const titleRef = toReactive(props.title ?? '');
  const visibleRef = ref(false);
  const activeRef = ref(false);
  let enterTimer: ReturnType<typeof setTimeout> | undefined;
  let exitTimer: ReturnType<typeof setTimeout> | undefined;

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
      }
    }, DIALOG_EXIT_MS);
  };

  const openRef = toReactive(props.open ?? false, (isOpen) => {
    if (isOpen) {
      queueEnter();
    } else {
      queueExit();
    }
  });
  const sizeRef = toReactive(props.size ?? 'sm');
  const fullWidthRef = toReactive(props.fullWidth ?? false);

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
  const backdropStyle = computed(() => (visibleRef.value ? 'display:flex' : 'display:none'), [visibleRef]);

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

  // Backdrop element
  const container = (
    <div class={backdropClass} style={backdropStyle} on:click={handleBackdropClick}>
      <div class={className} style={styleRef} on:click={(e: MouseEvent) => e.stopPropagation()}>
        <div k-if={titleRef} class="kt-dialog-title">
          <h2>{titleRef}</h2>
        </div>

        <div k-if={children} class="kt-dialog-content">
          {children}
        </div>

        <div k-if={actions} class="kt-dialog-actions">
          {actions}
        </div>
      </div>
    </div>
  ) as KTMuiDialog;

  document.addEventListener('keydown', keyDownHandler);

  // Store cleanup function
  const originalRemove = container.remove;
  container.remove = () => {
    clearTimers();
    if (keyDownHandler) {
      document.removeEventListener('keydown', keyDownHandler);
    }
    return originalRemove.call(container);
  };

  registerPrefixedEvents(container, props, ['on:close']);
  return container;
}
