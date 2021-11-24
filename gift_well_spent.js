// Note: This kata has been inspired by GCJ 2010's "Store credit", where one also has to parse the actual input. If you solved this kata, try that one too. Note that GCJ's version always has a solution, whereas this kata might not.

// Story
// You got a gift card for your local store. It has some credit you can use to buy things, but it may be used only for up to two items, and any credit you don't use is lost. You want something for a friend and yourself. Therefore, you want to buy two items which add up the entire gift card value.

// Task
// You will get the value of the gift card c and a finite list of item values. You should return a pair of indices that correspond to values that add up to c:
let buy = function (x, arr) {
  // ...
  //param is x=total of the credit and arr=the two friends buying statement;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == x) {
        return [i, j];
      }
    }
  }
  return null;
};
