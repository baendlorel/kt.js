import { $defines, $emptyFn } from '@ktjs/shared';
import './Dialog.css';

interface KTMuiDialogProps {
  open?: boolean;
  'kt:close'?: () => void;
  title?: string;
  children?: HTMLElement | HTMLElement[] | JSX.Element | JSX.Element[] | string;
  actions?: HTMLElement | HTMLElement[];
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  fullWidth?: boolean;
}

export type KTMuiDialog = JSX.Element & {
  /**
   * Controls whether the dialog is open or closed
   */
  open: boolean;
};

/**
 * Dialog component - mimics MUI Dialog appearance and behavior
 * Only handles open/close state, title and content are passed as props
 */
export function Dialog(props: KTMuiDialogProps): KTMuiDialog {
  let {
    open = false,
    'kt:close': onClose = $emptyFn,
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
    if (e.target === container) {
      onClose();
    }
  };

  // Backdrop element
  const container = (
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
  const originalRemove = container.remove;
  container.remove = () => {
    if (keyDownHandler) {
      document.removeEventListener('keydown', keyDownHandler);
    }
    return originalRemove.call(container);
  };

  $defines(container, {
    open: {
      get: () => open,
      set: (isOpen: boolean) => {
        if (isOpen === open) {
          return;
        }

        open = isOpen;

        if (isOpen) {
          // Opening: set display first, then add class with double RAF for animation
          container.style.display = 'flex';
          setTimeout(() => container.classList.add('kt-dialog-backdrop-open'), 50);
        } else {
          container.classList.remove('kt-dialog-backdrop-open');
          setTimeout(() => {
            if (!open) {
              container.style.display = 'none';
            }
          }, 225);
        }
      },
    },
  });

  return container;
}
