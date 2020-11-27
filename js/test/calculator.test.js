import calculator from '../module/calculator';

test('Add: should take 2 numbers and return the sum', () => {
  expect(calculator.add(7, 9)).toBe(16);
});

test('Subtract: should take 2 numbers and return the result of subtraction', () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});
