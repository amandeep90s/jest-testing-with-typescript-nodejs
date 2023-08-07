import { toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  test('should resturn uppercase', () => {
    const result = toUpperCase('abc');
    expect(result).toBe('ABC');
  });
});
