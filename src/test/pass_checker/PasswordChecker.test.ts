import PasswordChecker from '../../app/pass_checker/PasswordChecker';

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  it('Password with less than 8 characters is invalid', () => {
    const input = '1234567';
    const actual = sut.checkPassword(input);
    expect(actual).toBe(false);
  });

  it('Password with more than 8 characters is OK', () => {
    const input = '12345678Aa';
    const actual = sut.checkPassword(input);
    expect(actual).toBe(true);
  });

  it('Password with no uppercase letter is invalid', () => {
    const input = '1234abcd';
    const actual = sut.checkPassword(input);
    expect(actual).toBe(false);
  });

  it('Password with uppercase letter is valid', () => {
    const input = '1234abcdA';
    const actual = sut.checkPassword(input);
    expect(actual).toBe(true);
  });

  it('Password with no lowercase letter is invalid', () => {
    const input = '1234ABCD';
    const actual = sut.checkPassword(input);
    expect(actual).toBe(false);
  });

  it('Password with lowercase letter is valid', () => {
    const input = '1234ABCDa';
    const actual = sut.checkPassword(input);
    expect(actual).toBe(true);
  });
});
