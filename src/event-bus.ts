type EventCallback = { (...args: any[]): any };

type EventConfig = EventCallback & { capacity: number };

class YukaEventBus {
  private events: Map<string, Set<EventConfig>> = new Map();

  private register(eventName: string, callback: EventCallback, capacity: number) {
    let callbackSet = this.events.get(eventName);
    if (callbackSet === undefined) {
      callbackSet = new Set();
      this.events.set(eventName, callbackSet);
    }
    Object.defineProperty(callback, 'capacity', { value: capacity, writable: true });
    callbackSet.add(callback as EventConfig);
  }

  on(eventName: string, callback: EventCallback, capacity: number = Infinity): void {
    if (typeof eventName !== 'string') {
      throw new Error('[Yuka:YukaEventBus.on] eventName must be a string');
    }
    if (typeof callback !== 'function') {
      throw new Error('[Yuka:YukaEventBus.on] callback must be a function');
    }
    this.register(eventName, callback, capacity);
  }

  once(eventName: string, callback: EventCallback): void {
    if (typeof eventName !== 'string') {
      throw new Error('[Yuka:YukaEventBus.on] eventName must be a string');
    }
    if (typeof callback !== 'function') {
      throw new Error('[Yuka:YukaEventBus.on] callback must be a function');
    }
    this.register(eventName, callback, 1);
  }

  emit(eventName: string, ...args: any[]): void {
    const callbacks = this.events.get(eventName);
    if (callbacks) {
      callbacks.forEach((callback) => {
        callback(...args);
        callback.capacity--;
        if (callback.capacity <= 0) {
          this.off(eventName, callback);
        }
      });
    }
  }

  off(eventName: string, callback?: EventCallback): void {
    if (this.events.has(eventName) === undefined) {
      return;
    }

    if (callback === undefined) {
      this.events.delete(eventName);
    } else {
      const callbackSet = this.events.get(eventName);
      if (callbackSet) {
        callbackSet.delete(callback as EventConfig);
      }
    }
  }
}

const _eventBus = new YukaEventBus();
export const yukaEvent = {
  onI18NUpdated(callback: EventCallback) {
    _eventBus.on('i18n-updated', callback);
  },
  emitI18NUpdated() {
    _eventBus.emit('i18n-updated');
  },
};

export const eventBus = (() => {
  const e = new YukaEventBus();
  return new new Proxy(YukaEventBus, {
    construct() {
      return e;
    },
  })();
})();
