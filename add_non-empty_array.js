// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// param is an array;  declare a function that returns the result of multiplication of numbers; ex [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 ;
// declare a function; declare a loop that iterates through the integers; use a method (reduce)

function multiply() {
  let arr = [2, 3, 4];
  let result = arr.reduce((a, b) => a * b);
  return result;
}
multiply();

//updating
