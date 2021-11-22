// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

function summation(num) {
  return (num * (num + 1)) / 2;
}
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// param is array of numbers, declaring a function that returns sum of all of the numbers in the array/it can not be 0;ex[1,1,2,_4]=>
// declare a function that returns a sum of the numbers: declare
// a loop; and use a method to add all the numbers.
function summation(arr){
  let total=0
  for(let i=0; i<arr.length; i++){
    let summing=(a,b)=> a+b
   total= arr.reduce(summing)
  }
  if(total<0){
    total=0
  }
return total
}
summation([2,-13,4])=>0
