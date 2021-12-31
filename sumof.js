// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)

function getSum(a, b) {
  let x = Math.min(a, b),
    y = Math.max(a, b);
  return ((y - x + 1) * (x + y)) / 2;
}
