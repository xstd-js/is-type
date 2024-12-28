import { isObject } from './is-object.js';

export function isArrayLike<GValue>(value: any): value is ArrayLike<GValue> {
  return (
    Array.isArray(value) ||
      isObject<any>(value) &&
    (typeof value.length === 'number' &&
      (value.length === 0 || (0 in value && value.length - 1 in value)))
  );
}
