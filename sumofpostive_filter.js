// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}
// param is numbers; declating a function that sum all of the numbers in the array but if the array does
// not contain number it will return 0;declare a conditional that checks whther there is a number in the array or not
// or not. and if there is a number , use a method reduce to add all the numbers in the array else return 0
// new patch incoming
function sum(numbers) {
  "use strict";
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      let summing = (a, b) => (a + b, 0);
      let total = numbers.reduce(summing);
    } else {
      total = 0;
    }
  }
  return total;
}
