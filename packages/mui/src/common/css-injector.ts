/**
 *It makes editing CSS in TypeScript files more pleasant with some vscode plugins.
 */
export const css =
  (template: TemplateStringsArray, ...args: any[]) =>
  (componentName: string = Math.random().toString(36).substring(2, 9)) => {
    const style = document.createElement('style');
    style.textContent = String.raw(template, ...args);
    style.setAttribute('id', componentName);
    document.head.appendChild(style);
  };
