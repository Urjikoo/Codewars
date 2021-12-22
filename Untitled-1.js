// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

function reverseWords(str) {
  let newstr = str.split(" ");
  let newrev = newstr.reverse();
  return newrev.join(" ");
} // reverse those words
// Complete the solution so that it reverses all of the words within the string passed in.
// param is a string; declaring a function that returns the words/string reversed;ex. i'm walking=>gniklaw m'i
// declare a function: user a method split to create a substrings;use a method to reverse it: afterwards we use a method join to create a string.

function reverseW() {
  const str = "hello my name is hana";
  console.log(str.split("").reverse().join(""));
}
reverseW();
// updated-R
