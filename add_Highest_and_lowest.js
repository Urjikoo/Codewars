// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).

// Example:

// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

//the array will be in the params
// delcare a function that is adding up the the numbers in the [ ] execpet  10 ,  1
// ex. [ 1, 6, 2,  8, 10 ] => 2+6+8=> 16

// declare a function that returns the sum of the array;decare a variable(numbers1) and assign it to arr.sort to sort in ascending order.;declare a variable assign it to numbers1.slice(1,-1)=> that will remove the lowest and highest numbers. declare the finalOutput var and use a reduce method to sum the numbers in the array.
function addNumbers(arr) {
  var numbers1 = arr.sort((a, b) => a - b);
  let numbers2 = numbers1.slice(1, -1);

  let finalNumbers = numbers2.reduce((a, b) => a + b);
  console.log(finalNumbers);
}
addNumbers([22, 3, 4, 14, 32]);

//updating
