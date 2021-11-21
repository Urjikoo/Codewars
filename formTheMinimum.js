// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

function minValue(values) {
  //your code here
  //param is a numbers; function should return the smallest number combined.
  //ex.(1,2,3,4,1)=>12
  //declare a function and with in a function first sort them out.

  let myValues = [...new Set(values)];

  let sortones = parseInt(myValues.sort((a, b) => a - b).join(""));

  return sortones;
}
