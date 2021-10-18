// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// were passing in a string 
// retrun the string with the first and last letters removed if the string is less than 2 letters, retrun the string 

function middleString(string){

//we can use the slice method (1, string length -1)
//we can set up a conditional that if the string lenght
// is < 2, return the string 

if(string.length <= 2){
  return string
} else {

  return string.slice(1, string.length -1 )
}
middleString()