//declare an arr[] of  our set so far [a b c] => put i
//declare a conditional that checks whether  [i] !== [i+1]  ; else [i]==![i+1]

// if [i] !== [i+1] => check if (i+1) is in arr longest +1
// aabcbbdbecc []
//abc

function checker(s) {
  let words = s.split(""); //creating an array with substrings
  let counter = 0;
  let removeIndex = 0;
  let mySet = new Set(); //[] =>0
  for (let i = 0; i < words.length; i++) {
    if (!mySet.has(words[i])) {
      //[]

      mySet.add(words[i]); //[a]

      counter = Math.max(counter, mySet.size); //
    } else {
      mySet.delete(s.charAt(removeIndex));
      removeIndex++; //1
    }
  }

  console.log(words, counter, mySet);
}
checker("abbacffg");
