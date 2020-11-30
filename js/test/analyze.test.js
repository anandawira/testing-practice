import analyze from '../module/analyze';

const sampleArray = [7, 6, 4, 8, 2];

test('should return an object with correct average property', () => {
  expect(analyze(sampleArray).average).toBe(5.4);
});

test('should return an object with correct min property', () => {
  expect(analyze(sampleArray).min).toBe(2);
});

test('should return an object with correct max property', () => {
  expect(analyze(sampleArray).max).toBe(8);
});

test('should return an object with correct length property', () => {
  expect(analyze(sampleArray).length).toBe(5);
});
