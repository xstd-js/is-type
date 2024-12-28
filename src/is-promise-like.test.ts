import { describe, expect, it } from 'vitest';
import { isPromiseLike } from './is-promise-like.js';

describe('isPromiseLike', () => {
  it('should return correct result', () => {
    expect(isPromiseLike(Promise.resolve())).toBe(true);
    expect(isPromiseLike({})).toBe(false);
    expect(isPromiseLike(1)).toBe(false);
    expect(isPromiseLike(null)).toBe(false);
  });
});
