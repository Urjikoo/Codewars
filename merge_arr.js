// Merges two already sorted arrays
//
function merge(arr1, arr2) {
  //our param are two arrays
  let results = []; //declaring a variable that's empty arrays
  let i = 0; //declaring a variable which is an index of an arr1 i that starts from 0
  let j = 0; //same but for arr2
  while (i < arr1.length && j < arr2.length) {
    // a while loop for both arr1 & arr2
    if (arr2[j] > arr1[i]) {
      //declaring a conditional that checks the index of an arr2 to arr1 to sort them out
      results.push(arr1[i]); //if arr1[i] is smaller, it will push it it to results array
      i++; //array1 iterates
    } else {
      // if it's not true (if the index of an array1 is biggeer)
      results.push(arr2[j]); //it should push it to results but to array2
      j++; //array2 iterates
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
//.   j                  i
merge([100, 200, 300], [1, 2, 150]);

// Out come =>[1,2,100,150,200,300]
