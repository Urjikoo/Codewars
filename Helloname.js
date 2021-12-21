// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

function hello(name) {
  return `Hello, ${
    name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"
  }!`;
}
// Define a method hello that returns "Hello, Name!" to a given name,
// or says Hello, World! if name is not given (or passed as an empty String).
// param. is a string
// the function should return either 'hello 'user input name' or 'hello world' if no user input
// ex, if the user input bob => function will return hello bob if not function will return hello
// world!
// declare a function that allows user to input their name and returns hello the user name or hello world
// declare a conditional to achieve hello world if there is no response!
function greeting(input) {
  if (input === "") {
    console.log("hello World!");
  } else {
    console.log("hello " + input);
  }
}
console.log(greeting(""));
// latest P
