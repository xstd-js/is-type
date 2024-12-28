import { describe, expect, it } from 'vitest';
import { isIterable } from './is-iterable.js';

describe('isIterable', () => {
  it('should return correct result', () => {
    expect(isIterable([])).toBe(true);
    expect(isIterable(new Set())).toBe(true);
    expect(isIterable(new Map())).toBe(true);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(undefined)).toBe(false);
    expect(isIterable({})).toBe(false);
  });
});
