const reverseString = require('../module/reverseString');

test('should takes a string and returns it reversed', () => {
  expect(reverseString('ananda')).toBe('adnana');
});
