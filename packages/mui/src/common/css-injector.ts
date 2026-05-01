/**
 *It makes editing CSS in TypeScript files more pleasant with some vscode plugins.
 */
export const css =
  (template: TemplateStringsArray, ...args: any[]) =>
  (componentName: string = Math.random().toString(36).substring(2, 9)) => {
    console.log(`Injecting CSS for ${componentName}...`);
    const injected = document.querySelector(`style[kt-mui-name="${componentName}"]`);
    if (injected) {
      return; // This would occur when the component is used multiple times like Checkbox/CheckboxGroup.
    }
    const style = document.createElement('style');
    style.textContent = String.raw(template, ...args);
    style.setAttribute('kt-mui-name', componentName);
    document.head.appendChild(style);
  };
