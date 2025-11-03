type Resolver = (value?: any) => any;
type Rejecter = (reason?: any) => void;
type PromiseExecutor = (resolver: Resolver, reject: Rejecter) => void;

type Handler = {
  onFulfilled?: Resolver;
  onRejected?: Rejecter;
  resolve: Resolver;
  reject: Rejecter;
};

const enum PromiseState {
  Pending = 0,
  Fulfilled = 1,
  Rejected = 2,
}

class PromisePoly {
  private _state: PromiseState = PromiseState.Pending;
  private _value: any = undefined;
  private _deferreds: Handler[] = [];

  constructor(executor: PromiseExecutor) {
    if (typeof executor !== 'function') {
      throw new TypeError('Promise resolver is not a function');
    }
    this._state = 0;
    this._value = undefined;
    this._deferreds = [];
    this._doResolve(executor);
  }

  then(onFulfilled?: Resolver, onRejected?: Rejecter): PromisePoly {
    return new PromisePoly((resolve, reject) =>
      this._handle({
        onFulfilled: typeof onFulfilled === 'function' ? onFulfilled : undefined,
        onRejected: typeof onRejected === 'function' ? onRejected : undefined,
        resolve,
        reject,
      })
    );
  }

  catch(onRejected?: Rejecter): PromisePoly {
    return this.then(undefined, onRejected);
  }

  // # internals
  private _handle(deferred: Handler) {
    if (this._state === 0) {
      this._deferreds.push(deferred);
      return;
    }
    // minimal async scheduling
    setTimeout(() => {
      const cb = this._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (typeof cb !== 'function') {
        (this._state === 1 ? deferred.resolve : deferred.reject)(this._value);
        return;
      }
      try {
        const ret = cb!(this._value);
        deferred.resolve(ret);
      } catch (e) {
        deferred.reject(e);
      }
    }, 0);
  }

  private _resolve(value: any) {
    try {
      if (value === this) throw new TypeError('Promise cannot be resolved with itself');
      if (value && (typeof value === 'object' || typeof value === 'function')) {
        const then = (value as any).then;
        if (typeof then === 'function') {
          this._doResolve((res: any, rej: any) => {
            then.call(value, res, rej);
          });
          return;
        }
      }
      this._state = 1;
      this._value = value;
      this._finale();
    } catch (e) {
      this._reject(e);
    }
  }

  private _reject(reason: any) {
    this._state = 2;
    this._value = reason;
    this._finale();
  }

  private _finale() {
    for (let i = 0; i < this._deferreds.length; i++) {
      this._handle(this._deferreds[i]);
    }
    this._deferreds = [];
  }

  private _doResolve(fn: any) {
    let done = false;
    try {
      fn(
        (value: any) => {
          if (done) return;
          done = true;
          this._resolve(value);
        },
        (reason: any) => {
          if (done) return;
          done = true;
          this._reject(reason);
        }
      );
    } catch (ex) {
      if (done) {
        return;
      }
      done = true;
      this._reject(ex);
    }
  }
}

// install only if missing
const _root: any =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
        ? window
        : {};
if (!_root.Promise) {
  _root.Promise = PromisePoly as any;
}

export {};
