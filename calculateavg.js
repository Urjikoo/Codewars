// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  return array.reduce((result, current) => result + current, 0) / array.length;
}
// // Write a function which calculates the average of the numbers in a given list.
// // declaring a function that returns average of input numbers.
// // ex. given(1,2,3)=>(1+2+3)/3=>2
// // declare a function; then
function calculateAvg(){
  const arr=[10,20,30,]
  const addNum= (value1,value2)=>value1+value2
  return arr.reduce(addNum)/arr.length
}
console.log(calculateAvg())
