// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// param is array of numbers; returning the numbers in the reverse order; ex [12,23,34]=>[34,23,23]
// declare a function:
function reversing(arr){
  return arr.reverse()
}
reversing([23,44,45])=>['45','44','23']
