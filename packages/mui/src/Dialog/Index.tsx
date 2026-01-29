import { KTHTMLElement } from 'kt.js';
import './Dialog.css';

interface DialogProps {
  open?: boolean;
  'mui:close'?: () => void;
  title?: string;
  children?: HTMLElement | HTMLElement[] | string;
  actions?: HTMLElement | HTMLElement[];
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
}

const noop = () => {};

export type KTMuiDialog = KTHTMLElement & {
  toggle: (open: boolean) => void;
};

/**
 * Dialog component - mimics MUI Dialog appearance and behavior
 * Only handles open/close state, title and content are passed as props
 */
export function Dialog(props: DialogProps): KTMuiDialog {
  let {
    open = false,
    'mui:close': onClose = noop,
    title,
    children,
    actions,
    maxWidth = 'sm',
    fullWidth = false,
  } = props;

  // Handle ESC key - store handler for cleanup
  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      open = false;
      onClose();
    }
  };

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === backdrop) {
      onClose();
    }
  };

  // Backdrop element
  const backdrop = (
    <div
      class={`kt-dialog-backdrop ${open ? 'kt-dialog-backdrop-open' : ''}`}
      on:click={handleBackdropClick}
      style={{ display: open ? 'flex' : 'none' }}
    >
      <div
        class={`kt-dialog-paper ${maxWidth ? `kt-dialog-maxWidth-${maxWidth}` : ''} ${
          fullWidth ? 'kt-dialog-fullWidth' : ''
        }`}
        on:click={(e: MouseEvent) => e.stopPropagation()}
      >
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
  const originalRemove = backdrop.remove;
  backdrop.remove = () => {
    if (keyDownHandler) {
      document.removeEventListener('keydown', keyDownHandler);
    }
    return originalRemove.call(backdrop);
  };

  backdrop.toggle = (isOpen: boolean) => {
    if (isOpen === open) {
      return;
    }

    open = isOpen;

    if (isOpen) {
      // Opening: set display first, then add class with double RAF for animation
      backdrop.style.display = 'flex';
      setTimeout(() => backdrop.classList.add('kt-dialog-backdrop-open'), 50);
    } else {
      backdrop.classList.remove('kt-dialog-backdrop-open');
      setTimeout(() => {
        if (!open) {
          backdrop.style.display = 'none';
        }
      }, 225);
    }
  };

  return backdrop;
}
