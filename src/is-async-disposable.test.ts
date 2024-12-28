import { describe, expect, it } from 'vitest';
import { isAsyncDisposable } from './is-async-disposable.js';

describe('isAsyncDisposable', () => {
  it('should return correct result', () => {
    expect(isAsyncDisposable({ [Symbol.asyncDispose]() {} })).toBe(true);
    expect(isAsyncDisposable({})).toBe(false);
    expect(isAsyncDisposable(1)).toBe(false);
    expect(isAsyncDisposable(null)).toBe(false);
  });
});
