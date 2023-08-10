import PasswordChecker, {
  PasswordErrors,
} from '../../app/pass_checker/PasswordChecker';

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it('Password with less than 8 characters is invalid', () => {
    const input = '1234567';
    const actual = sut.checkPassword(input);
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.SHORT);
  });

  it('Password with more than 8 characters is OK', () => {
    const input = '12345678Aa';
    const actual = sut.checkPassword(input);
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
  });

  it('Password with no uppercase letter is invalid', () => {
    const input = '1234abcd';
    const actual = sut.checkPassword(input);
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it('Password with uppercase letter is valid', () => {
    const input = '1234abcdA';
    const actual = sut.checkPassword(input);
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
  });

  it('Password with no lowercase letter is invalid', () => {
    const input = '1234ABCD';
    const actual = sut.checkPassword(input);
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it('Password with lowercase letter is valid', () => {
    const input = '1234ABCDa';
    const actual = sut.checkPassword(input);
    expect(actual.valid).toBe(true);
    expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
  });

  it('Complex password is valid', () => {
    const input = '1234abcD';
    const actual = sut.checkPassword(input);
    expect(actual.valid).toBe(true);
    expect(actual.reasons).toHaveLength(0);
  });
});
