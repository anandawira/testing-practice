const calculator = (() => {
  const add = (number1, number2) => number1 + number2;
  const subtract = (minuend, subtrahend) => minuend - subtrahend;
  const multiply = (number1, number2) => number1 * number2;
  const divide = (dividend, divisor) => dividend / divisor;

  return { add, subtract, multiply, divide };
})();

export default calculator;
