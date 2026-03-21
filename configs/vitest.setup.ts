Reflect.set(globalThis, '$throw', (message?: string) => {
  throw new Error(message);
});

Reflect.set(globalThis, '$warn', console.warn);
Reflect.set(globalThis, '$log', console.log);
Reflect.set(globalThis, '$error', console.error);
Reflect.set(globalThis, '$debug', console.debug);
Reflect.set(globalThis, 'flags', { svg: 'kt-svg', mathml: 'kt-mathml' });
