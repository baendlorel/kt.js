import { injectGlobal } from '@emotion/css';

injectGlobal`
.mui-modal-dialog {
  max-width: 420px;
}

.mui-modal-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mui-modal-message {
  margin: 0;
  color: rgba(0, 0, 0, 0.78);
  line-height: 1.6;
}

.mui-modal-actions {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
}

.mui-modal-prompt-input {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.28);
  border-radius: 6px;
  outline: none;
  padding: 0 12px;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.95rem;
  transition:
    border-color 160ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 160ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-modal-prompt-input:focus {
  border-color: rgb(25, 118, 210);
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.16);
}

.mui-modal-prompt-error {
  margin: 0;
  font-size: 0.75rem;
  color: rgb(211, 47, 47);
}

@media (prefers-color-scheme: dark) {
  .mui-modal-message {
    color: rgba(255, 255, 255, 0.86);
  }

  .mui-modal-prompt-input {
    border-color: rgba(255, 255, 255, 0.28);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.92);
  }

  .mui-modal-prompt-input:focus {
    border-color: rgb(144, 202, 249);
    box-shadow: 0 0 0 2px rgba(144, 202, 249, 0.2);
  }

  .mui-modal-prompt-error {
    color: rgb(244, 67, 54);
  }
}

`;
