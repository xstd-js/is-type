import { describe, expect, it } from 'vitest';
import { isObject } from './is-object.js';

describe('isObject', () => {
  it('should return correct result', () => {
    expect(isObject({})).toBe(true);
    expect(isObject(1)).toBe(false);
    expect(isObject(null)).toBe(false);
  });
});
