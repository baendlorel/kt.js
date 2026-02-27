import type { JSX, KTMaybeReactive } from '@ktjs/core';
import { computed, toReactive } from '@ktjs/core';
import { $emptyFn, $parseStyle } from '@ktjs/shared';
import './Dialog.css';
import { registerPrefixedEvents } from '../../common/attribute';
import { KTMuiProps } from '../../types/component';

type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

interface KTMuiDialogProps extends Omit<KTMuiProps, 'children'> {
  /**
   * Controls whether the dialog is open or closed
   * - Provide a `KTReactive` to make it reactive
   */
  open?: KTMaybeReactive<boolean>;
  title?: string;
  children?:
    | JSX.Element
    | JSX.Element[]
    | string
    | KTMaybeReactive<string>
    | KTMaybeReactive<JSX.Element>
    | KTMaybeReactive<JSX.Element[]>;
  actions?: KTMaybeReactive<HTMLElement | HTMLElement[]>;
  size?: KTMaybeReactive<DialogSize>;
  fullWidth?: KTMaybeReactive<boolean>;

  'on:close'?: () => void;
}

export type KTMuiDialog = JSX.Element;

/**
 * Dialog component - mimics MUI Dialog appearance and behavior
 * Only handles open/close state, title and content are passed as props
 */
export function Dialog(props: KTMuiDialogProps): KTMuiDialog {
  let { 'on:close': onClose = $emptyFn, children, actions } = props;

  const customClassRef = toReactive(props.class ?? '');
  const styleRef = toReactive($parseStyle(props.style));

  const titleRef = toReactive(props.title ?? '');
  const openRef = toReactive(props.open ?? false, (isOpen) => {
    if (isOpen) {
      // Opening: set display first, then add class with double RAF for animation
      container.style.display = 'flex';
      setTimeout(() => container.classList.add('kt-dialog-backdrop-open'), 50);
    } else {
      container.classList.remove('kt-dialog-backdrop-open');
      setTimeout(() => {
        if (!openRef.value) {
          container.style.display = 'none';
        }
      }, 225);
    }
  });
  const sizeRef = toReactive(props.size ?? 'sm');
  const fullWidthRef = toReactive(props.fullWidth ?? false);

  const className = computed(
    () =>
      `kt-dialog-paper ${sizeRef.value ? `kt-dialog-maxWidth-${sizeRef.value}` : ''} ${fullWidthRef.value ? 'kt-dialog-fullWidth' : ''} ${customClassRef.value}`,
    [sizeRef, fullWidthRef, customClassRef],
  );
  const backdropClass = openRef.toComputed((v) => `kt-dialog-backdrop ${v ? 'kt-dialog-backdrop-open' : ''}`);
  const backdropStyle = openRef.toComputed<string>((v) => (v ? 'display:flex' : 'display:none'));

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
    if (keyDownHandler) {
      document.removeEventListener('keydown', keyDownHandler);
    }
    return originalRemove.call(container);
  };

  registerPrefixedEvents(container, props, ['on:close']);
  return container;
}
