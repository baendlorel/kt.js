import { $random } from '../utils/native.js';

export {};
if (typeof Symbol === 'undefined') {
  (window as any).Symbol = function Symbol(description?: string) {
    return `@@SYM_${description || ''}_${$random().toString(36).slice(2)}`;
  };
}
