// Navigation structure
export interface NavItem {
  id: string;
  label: string;
  title: string;
  description: string;
  component: (...args: unknown[]) => JSX.Element;
}
