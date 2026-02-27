import type { JSX } from '@ktjs/core';
import { computed, toReactive, type KTReactive } from '@ktjs/core';
import { $emptyFn } from '@ktjs/shared';
import './Dialog.css';
import { registerPrefixedEvents } from '../../common/attribute';

type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
// todo 此处不一样
interface KTMuiDialogProps {
  /**
   * Controls whether the dialog is open or closed
   * - Provide a `KTReactive` to make it reactive
   */
  open?: boolean | KTReactive<boolean>;
  'on:close'?: () => void;
  title?: string;
  children?: HTMLElement | HTMLElement[] | JSX.Element | JSX.Element[] | string;
  actions?: HTMLElement | HTMLElement[];
  size?: DialogSize | KTReactive<DialogSize>;
  fullWidth?: boolean | KTReactive<boolean>;
}

export type KTMuiDialog = JSX.Element;

/**
 * Dialog component - mimics MUI Dialog appearance and behavior
 * Only handles open/close state, title and content are passed as props
 */
export function Dialog(props: KTMuiDialogProps): KTMuiDialog {
  let { 'on:close': onClose = $emptyFn, children, actions } = props;

  const title = toReactive(props.title ?? '');
  const open = toReactive(props.open ?? false, (isOpen) => {
    if (isOpen) {
      // Opening: set display first, then add class with double RAF for animation
      container.style.display = 'flex';
      setTimeout(() => container.classList.add('kt-dialog-backdrop-open'), 50);
    } else {
      container.classList.remove('kt-dialog-backdrop-open');
      setTimeout(() => {
        if (!open.value) {
          container.style.display = 'none';
        }
      }, 225);
    }
  });
  const size = toReactive(props.size ?? 'sm');
  const fullWidth = toReactive(props.fullWidth ?? false);
  const className = computed(
    () =>
      `kt-dialog-paper ${size.value ? `kt-dialog-maxWidth-${size.value}` : ''} ${fullWidth.value ? 'kt-dialog-fullWidth' : ''}`,
    [size, fullWidth],
  );

  // Handle ESC key - store handler for cleanup
  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      open.value = false;
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
    <div
      class={`kt-dialog-backdrop ${open.value ? 'kt-dialog-backdrop-open' : ''}`}
      style={{ display: open.value ? 'flex' : 'none' }}
      on:click={handleBackdropClick}
    >
      <div class={className} on:click={(e: MouseEvent) => e.stopPropagation()}>
        <div k-if={title} class="kt-dialog-title">
          <h2>{title}</h2>
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
    if (keyDownHandler) {
      document.removeEventListener('keydown', keyDownHandler);
    }
    return originalRemove.call(container);
  };

  registerPrefixedEvents(container, props, ['on:close']);
  return container;
}
