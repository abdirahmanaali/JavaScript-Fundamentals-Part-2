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

// ==> ARROW FUNCTIONS
const percentageOfWorld3 = (population) => (population / worldPop) * 100;

// console.log(percentageOfWorld3(44));

// ==> FUNCTIONS CALLING OTHER FUNCTIONS
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people which is about ${percentage}% of the world.`;
}
// console.log(
//   describePopulation("Usa", 331.9),
//   describePopulation("Mexico", 130),
//   describePopulation("Canada", 38.25)
// );

// ==> INTODUCTION TO ARRAYS
const countriesPop = [277.5, 240.4, 223.8, 216.4];
// console.log(countriesPop.lenght === 4);

const percentage = [
  percentageOfWorld1(countriesPop[0]),
  percentageOfWorld1(countriesPop[1]),
  percentageOfWorld1(countriesPop[2]),
  percentageOfWorld1(countriesPop[3]),
];
// console.log(percentage);

// ==> BASIC ARRAY OPERATIONS (METHODS)
const neighbours = ["Canada", "Mexico", "Cuba"];
neighbours.push("Utopia");
// console.log(neighbours);
neighbours.pop();
// console.log(neighbours);
if (!neighbours.includes("Germany")) {
  // console.log("Probably not a central European country");
}
// console.log(neighbours.indexOf("Cuba"));
neighbours[2] = "Republic of Cuba";
// console.log(neighbours);

// ==> INTODUCTION TO OBJECTS
const myCountry = {
  country: "Kenya",
  capital: "Nairobi",
  language: "Swahili",
  population: 53.1,
  neighbours: ["Uganda", "South Sudan", "Ethiopia", "Somalia", "Tanzania"],
};

// DOT VS BRACKET NOTATION

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry["language"]}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry["capital"]}.`
// );

myCountry.population = 53.1 + 2; // DOT

// console.log(myCountry);

myCountry["population"] = 53.1 - 2; // BRACKET

// console.log(myCountry);
