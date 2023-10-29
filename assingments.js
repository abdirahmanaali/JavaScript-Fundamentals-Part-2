// ==> FUNCTIONS
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milliom people and its capital city is ${capitalCity}`;
}
const usa = describeCountry("USA", 331.9, "Washington");
const mexico = describeCountry("Mexico", 130, "Mexico city");
const canada = describeCountry("Canada", 38.25, "Ottawa");
// console.log(usa, mexico, canada);

// FUNCTION DECLARATION VS. EXPRESSION
const worldPop = 7900;
// function declartion
function percentageOfWorld1(population) {
  return (population / worldPop) * 100;
}
const usaPercentage1 = percentageOfWorld1(331.9);
const mexicoPercentage1 = percentageOfWorld1(130);
const canadaPercentage1 = percentageOfWorld1(38.25);
// console.log(usaPercentage1, mexicoPercentage1, canadaPercentage1);

//// function expression
const percentageOfWorld2 = function (population) {
  return (population / worldPop) * 100;
};
const usaPercentage2 = percentageOfWorld2(331.9);
const mexicoPercentage2 = percentageOfWorld2(130);
const canadaPercentage2 = percentageOfWorld2(38.25);
// console.log(usaPercentage2, mexicoPercentage2, canadaPercentage2);
