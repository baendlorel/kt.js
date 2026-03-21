import { injectGlobal } from '@emotion/css';

void injectGlobal`
.mui-menu-paper {
  min-width: 180px;
  padding: 8px 0;
}

.mui-menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  outline: 0;
}

.mui-menu-static {
  list-style: none;
}

.mui-menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 36px;
  box-sizing: border-box;
  margin: 0;
  padding: 6px 16px;
  border: 0;
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  cursor: pointer;
  user-select: none;
  transition: background-color 140ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mui-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.mui-menu-item:focus-visible {
  outline: none;
  background-color: rgba(0, 0, 0, 0.08);
}

.mui-menu-item-selected {
  background-color: rgba(25, 118, 210, 0.1);
}

.mui-menu-item-selected:hover {
  background-color: rgba(25, 118, 210, 0.16);
}

.mui-menu-item-disabled {
  color: rgba(0, 0, 0, 0.38);
  cursor: default;
  pointer-events: none;
}

@media (prefers-color-scheme: dark) {
  .mui-menu-item {
    color: rgba(255, 255, 255, 0.88);
  }

  .mui-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .mui-menu-item:focus-visible {
    background-color: rgba(255, 255, 255, 0.12);
  }

  .mui-menu-item-selected {
    background-color: rgba(144, 202, 249, 0.2);
  }

  .mui-menu-item-selected:hover {
    background-color: rgba(144, 202, 249, 0.28);
  }

  .mui-menu-item-disabled {
    color: rgba(255, 255, 255, 0.4);
  }
}

`;
