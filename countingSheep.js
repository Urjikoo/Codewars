// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// we have an array containing elements true or false or null/undefined
// we will create a function that counts the true elements and also checks for bad values.
// we will create a conditional that checks and counts the true elements and return the how many(the result) else it wont count it.
// we will create ternary method
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      count += 1;
    }
  }
  return count;
}
