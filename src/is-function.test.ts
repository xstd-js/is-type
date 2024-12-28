import { describe, expect, it } from 'vitest';
import { isFunction } from './is-function.js';

describe('isFunction', () => {
  it('should return correct result', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction({})).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(null)).toBe(false);
  });
});
