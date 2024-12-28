import { isObject } from './is-object.js';

export function isPromiseLike<GValue>(value: any): value is PromiseLike<GValue> {
  return value instanceof Promise || (isObject<any>(value) && typeof value.then === 'function');
}
