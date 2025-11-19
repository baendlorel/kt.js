export interface KTRuntime {
  throws: (message: string) => never;
}

declare global {
  interface Window {
    readonly __ktjs__: KTRuntime;
  }
}
