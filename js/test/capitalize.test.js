import capitalize from '../module/capitalize'

test('should takes a string and returns that string with the first character capitalized', () => {
    expect(capitalize('ananda')).toBe('Ananda')
});
