import { StringUtils, getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  it('should resturn uppercase of valid string', () => {
    // arrange
    const sut = toUpperCase;
    const expected = 'ABC';
    // act
    const actual = sut('abc');
    // assert
    expect(actual).toBe(expected);
  });

  describe.only('StringUtils tests', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log('Setup');
    });

    afterEach(() => {
      // Tear Down
      console.log('Tear down');
    });

    it('Should return correct uppercase', () => {
      const actual = sut.toUpperCase('abc');
      expect(actual).toBe('ABC');
      console.log('Act');
    });
  });

  describe.only('ToUpperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'aman', expected: 'AMAN' },
      { input: 'Deep', expected: 'DEEP' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg My-String should', () => {
    it('return right length', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toHaveLength(9);
    });

    it('return right lower case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.lowerCase).toBe('my-string');
    });

    it('return right upper case', () => {
      const actual = getStringInfo('My-String');
      expect(actual.upperCase).toBe('MY-STRING');
    });

    it('return right characters', () => {
      const actual = getStringInfo('My-String');
      expect(actual.characters).toEqual([
        'M',
        'y',
        '-',
        'S',
        't',
        'r',
        'i',
        'n',
        'g',
      ]);
      expect(actual.characters).toContain<string>('M');
      expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
      );
    });

    it('return defined extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toBeDefined();
    });

    it('return right extra info', () => {
      const actual = getStringInfo('My-String');
      expect(actual.extraInfo).toEqual({});
    });
  });
});
