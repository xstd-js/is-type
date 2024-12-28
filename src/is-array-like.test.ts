import { describe, expect, it } from 'vitest';
import { isArrayLike } from './is-array-like.js';

describe('isArrayLike', () => {
  it('should return correct result', () => {
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike(null)).toBe(false);
  });
});
