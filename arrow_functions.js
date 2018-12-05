// From function declaration

function double(arg1) {
  return arg1 * 2;
}

// Regular function expression

const double = function(arg1) {
  return arg1 * 2;
};

// Make it an arrow function
// Take out the keyword function and insert => after the parameters

const double = arg1 => {
  return arg1 * 2;
};

// With map function

// regular way
const numbers = [4, 5, 6, 7];

const doubles = numbers.map(function(nb) {
  return nb * 2;
});
// Arrow function
const doubles = number.map(nb => {
  return nb * 2;
});
// Shorthand
const doubles = number.map(nb => nb * 2);

// filter

const temperatures = [-1, 25, 15, 10, 30];

const hot = temperatures.filter(temperature => temperature > 20);

// Default Values

// default value with ES5

const square = nb => {
  nb = nb || 1;
  return nb * nb;
};

// square(0); // 25

// problem with 0

function exist(nb) {
  nb = nb || 0;
  if (nb) {
    console.log("nb exists");
  } else {
    console.log("nb does not exist");
  }
}

// With ES6 default value

const square = (nb = 1) => {
  return nb * nb;
};

// This keyword
// is bind to the function
const player = {
  score: 10,
  addScore: function(nb) {
    this.score += nb;
  }
};

// With Arrow function, the this keyword
// is not bind to the function

const player = {
  score: 10,
  addScore: nb => {
    this.score += nb;
  }
};
