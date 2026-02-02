export {};
if (typeof Symbol === 'undefined') {
  (window as any).Symbol = function Symbol(description?: string) {
    return `@@SYMBOL_${description || ''}_${Math.random().toString(36).slice(2)}`;
  };
}
