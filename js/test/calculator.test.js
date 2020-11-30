import calculator from '../module/calculator';

test('Add: should take 2 numbers and return the sum', () => {
  expect(calculator.add(7, 9)).toBe(16);
});

test('Subtract: should take minuend and subtrahend and return the result of subtraction', () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});

test('Multiply: should take 2 numbers and return the result of multiplication', () => {
  expect(calculator.multiply(4, 7)).toBe(28);
});

test('Divide: should take dividend and divison and return the result of division', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
