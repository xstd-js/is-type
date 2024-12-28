import { isObject } from './is-object.js';

export function isAsyncDisposable(value: any): value is AsyncDisposable {
  return isObject(value) && Symbol.asyncDispose in value;
}
