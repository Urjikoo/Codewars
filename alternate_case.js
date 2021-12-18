// Create a function that alternates the case of a given string.
// Ex. HeLLo WoRLd => hEllO wOrlD

//passing in a string
// returning every other character as Upper case
// ex. (teST => TEst)
// things to consider using:
//char at , toUpperCase or toLowerCase, a for loop
// create a for loop that gets the previous character and if the previous character is an upper case, then converte it to a lower case
// // else if the previous character is a lowercase then we convert it to an upper case

// //return the result.

function alternativeLetters(string) {
  let results = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toLowerCase()) {
      results += string.charAt(i).toUpperCase();
    } else if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      results += string.charAt(i).toLowerCase();
    }
  }

  //puts all the answers to the results empty string

  return results;
  console.log(results, "results2");
}
console.log(alternativeLetters("URJi"), "tester");
