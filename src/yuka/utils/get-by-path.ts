export function getByPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, key) => acc && acc[key], Object(obj)) as any;
}
