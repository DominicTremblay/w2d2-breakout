
// Spread Operator

// With ES5:
const countries = ['Belgium','Canada', 'Finland', 'Grece'];
const otherCountries = ['Italy', 'Japan', 'Poland', 'Sweden'];
const allCountries = countries.concat(otherCountries);

// With ES6 Spread Operator
const countries = ['Belgium','Canada', 'Finland', 'Grece'];
const otherCountries = ['Italy', 'Japan', 'Poland', 'Sweden'];
const allCountries = [...countries, ...otherCountries]

// spread into a function
const numbers = [11,14,16];
const sumOfThree = (firstNb, secondNb, ThirdNb) =>  firstNb + secondNb + ThirdNb;

// instead of 
sumOfThree(numbers[0], numbers[1], numbers[2]);
// With Spread
sumOfThree(...numbers);

// Rest Operator
// When you have an unknow number or arguments

const multiplySum = (multiple, ...numbers) => 
                     multiple * numbers.reduce((sum, next) => sum + next)

multiplySum(3,3,3,5,6,7,8);

// When destructuring
const countries = ['Italy','Rome','Milan','Venice'];

const [name, ...cities] = countries;