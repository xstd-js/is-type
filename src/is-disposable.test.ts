import { describe, expect, it } from 'vitest';
import { isDisposable } from './is-disposable.js';

describe('isDisposable', () => {
  it('should return correct result', () => {
    expect(
      isDisposable({
        [Symbol.dispose]() {},
      }),
    ).toBe(true);
    expect(isDisposable({})).toBe(false);
    expect(isDisposable(1)).toBe(false);
    expect(isDisposable(null)).toBe(false);
  });
});
