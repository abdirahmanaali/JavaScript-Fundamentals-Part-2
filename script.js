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
// function fruitProcessor(apples, oranges) {
// console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// } // parameters are like variables that are specific only to this function and they will get defined once we call the function. Think of it as empty spaces that will be filled out when the function is invoked
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

// ==> ARROW FUNCTIONS
// Is a special form of function expression that is shorter and faster to write
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
// console.log(age3);
// No need for curly braces and the return happens completely by itself.
// NB/ This is usefull in one-liner functions. To use it we call the function variable name
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`;
}; // Example with more line of code. We can only leave out RETURN when we have one liner function
// console.log(yearsUntilRetirement(1991, "Ali"));

// ==> FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitProcessor(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const applePieces = cutFruitProcessor(apples);
  const orangePieces = cutFruitProcessor(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
  return juice;
}
// console.log(fruitProcessor(2, 3));

// ==> INTODUCTION TO ARRAYS

// Arrays are like big containers into which wwe can throw variable and reference them later.
// NB/ the two most important data structures in Javascript are arrays and objects
const friends = ["Michael", "Steven", "Peter"];
// Creating an arrays we first store it in a variable and then use BRACKETS [] then we put different values separated by commas.
// NB/ Arrays can hold as many values as we want and also any values of any type that we'd like strings, numbers, etc
// console.log(friends);

// They way to get acces to the array is to use the square bracket synatx
// if we want to log the first element of friend's array

// console.log(friends[0]);
// console.log(friends[2]);

// Arrays are Zero-based, which means that Michael is the first element.
// We can also get the actual number of elements in an array.

// console.log(friends.length);

// It is not zero-based instated it gives us number of elements in the Array

// We can use .lenght to get the last element of any array for ex

// console.log(friends[friends.length - 1]);

// Bracket can be used to add elements to the array for ex.
friends[2] = "Ali";
friends[3] = "Farah";

// console.log(friends);

// In the two examples i managed to change index two to Ali and added a new index with Farah

// Another way to create ARRAY is
const years = new Array(1991, 2011, 2014, 2020, 2023);
// The brackets is the most common way to write arrays as they are called LITERAL SYNTAX

// ==> BASIC ARRAY OPERATIONS (METHODS)
// Add element
// Push Method adds elements to the end of an array
friends.push("Maryan");
// unshift methods adds elements to the beginning of an array
friends.unshift("Abdullahi");

// console.log(friends);

// Remove elements
// Pop will remove the last element
friends.pop();
// shift will remove the first element
friends.shift();

// console.log(friends);

// This time we don't need to pass any argument to remove

// A very useful method that tells us in which position a certain element is in the array.

// console.log(friends.indexOf("Ali"));

// another useful is Includes and instead of returning the index of, will simply return true if the element is in the array and false if it's not
// it alo uses strict equallity

// console.log(friends.includes("Ali"));

// ==> INTRODUCTION TO OBJECTS

// The simplest way to write an Object is with Curly Brace and this format is called Object Literal Syntax. Here is an example
const ali = {
  firstName: "Ali",
  lastName: "Jay",
  job: "teacher",
  birthYear: 1991,
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,
  calcAge1: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
    console.log(this.age);
  },
  // Video Challenge
  // ali is a ---years old teacher, and he has a driver's license
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge1()}-old ${
      this.job
    }, and has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(ali.getSummary());

// we use objects to essentially group together different variables that really belong together.
// The defference between objects and arrays in objects the order of these values does not matter at all when we want to retrieve them.
// We use Objects for more unstructured data
// Arrays other hand the order in which we specify the elements matter a lot becuase that;s how we access the elements.
// We use arrays for more order data

// ==> DOT Vs BRACET NOTATION
// First way of getting a property from an object is via DOT NOTATION. Here is an example

// console.log(ali.lastName);

// We can do the samething using the Bracket Notaton. We also might need to specify a sting with it's property name. For example

// console.log(ali["lastName"]);

// In the braket notation we can put any expression that we'd like. It's also common to use it for expression.
// When we need to compute the property name is when we use Bracket Notation.
// In any other case use the DOT NOTATION. for example
const keyName = "Name";

// console.log(ali[`first${keyName}`]); // This is a template literals
// console.log(ali["last" + keyName]);

// Adding new properties into objects
ali.location = "Mexico"; // Dot Notation
ali["hobbies"] = "Playing football"; // Bracket Notation

// another example

// const interestedIn = prompt(
//   "What do you need to know about Ali? Choose between firstName, lastName, age, job, location, hobbies and friends"
// );

// if (ali[interestedIn]) {
//   console.log(ali[interestedIn]);
// } else {
//   console.log(
//     "Wrong requested! please Choose between firstName, lastName, age, job, location, hobbies and friends"
//   );
// }

// video challenge
// console.log(
//   `${ali[`firstName`]} has ${
//     ali.friends.length
//   } friends, and his best friends is called ${ali.friends[0]}`
// );
