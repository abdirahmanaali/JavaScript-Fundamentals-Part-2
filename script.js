// ==> STRICT MODE
// is a special mode that we can activate in Javascript to write a secure code
"use strict"; // This is how we write it. It has to be the very 1st statement in the script.
// This makes it easier for us developers accidental errors. Meaning it helps us avoid bugs into our code.
// First it forbids us to do certain things. Second it create visible errors for us

// ==> FUNCTIONS
// Is a simple piece code of code that we can reuse over and over again in our code.
function logger() {
  // console.log("my name is Ali");
} // We start with the function keyword, then define a function name, then prenthesis, and curly braces to create the body of a function
logger(); // To use a function we simply write the function name followed by parenthesis. This is also known as invoking, running or calling the function
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
} // parameters are like variables that are specific only to this function and they will get defined once we call the function. Think of it as empty spaces that will be filled out when the function is invoked
fruitProcessor(5, 0); // 5 and 0 will be the inputs of the fruit processor function. These also are known as arguments
// NB/ functions allows us to write more maintainable chunks of code instated of writing the same code over and over again manually. This follows the principle of wrinting code which is don't repeat yourself(AKA- dry)

// ==> FUNCTIION DECLARATION VS. EXPRESSION
// function declartion
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}; // function expression is written like this. First we write a function without a name, we define the parameter, define the function body and then we store it into a variable
const age2 = calcAge2(1991);
// console.log(age1, age2);
// NB/ epression produces a values. So functions are just values therefore we can store it in a variables.
// The big diference between declaration and expression?
// We can call declaration before they are defined. Meaning they don't adhere to the rule of reading code top to bottom.
// if we attempt the same thing with expression the code won't work. Meaning they adhere to the rule of reading code top to bottom.
