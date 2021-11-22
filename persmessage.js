// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// our parameters are strings (name and owner)
// the function should return personalized response depending on what the user input
// for example if the user input the owner name , the function will return hello owner if not the function will return hello guest.
// declaree a function that takes user input and return personalized string. then create iternary to achieve that.
function greet(name, owner) {
  return "Hello " + (name == owner ? "boss" : "guest");
}
