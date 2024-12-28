import { isObject } from './is-object.js';

export function isDisposable(value: any): value is Disposable {
  return isObject(value) && Symbol.dispose in value;
}
