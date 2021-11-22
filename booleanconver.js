// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    if (bool == true){
       return "Yes"
    }else{
      return "No"
    }
    // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
// our pram is a string
// declaring a function that returns a string yes or no depending on user input.
// for ex if user if the input is true; the function will return true else it will return false.
// declare a function called checker; it will take a param(string) ; declare a conditional that checks whether it's true or not and return true or false.
function checker(input){
  if(input===true){
    return "true"
  }else if(input!==true){
    return 'false'
  }else{
    return null
  }
}
console.log(checker(false))
