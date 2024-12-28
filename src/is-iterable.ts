import { isObject } from './is-object.js';

export function isIterable<GValue>(value: any): value is Iterable<GValue> {
  return isObject(value) && Symbol.iterator in value;
}
