
// var vs let/const
// var is function scope
// let and const are block scope

// Block anything inside {}


function say() {
  if (true) {
    var word = 'yeah!';
  }

  return word;
}



// What is the function returning?
function say() {
  if (true) {
    const word = 'yeah!';
  }
  return word;
}

// a block

function say() {
  let word = 'Boo'
  {
    let word = 'Yeah!'
  }
  return word;
}

// Dead Zone

function say() {
  let word = 'Boo'
  {
    let word = 'Yeah!'
    console.log(word);
  }
  return word;
}

//

var countries = {
    Europe: ['Spain', 'Italy', 'France', 'UK']
}

function findContinent (country, countries) {

  for (var continent in countries ) {
    if (countries[continent].indexOf(country) >= 0) {
      var continentFound = continent;
      } else {
        var continentFound = 'Not found';
      }
    }
    return continentFound;
}

// let vs const
// When declaring const the value cannot be reassigned
// let can be reassigned
// Not to be confused with cannot change value

const temperature = 20;
temperature = 30 // This is not allowed

const temperatures = [20,30,15,-5,-15]
temperatures.push(22); // Is this allowed?
temperatures = []; // Is this allowed

const music = {
  track: 'I Don't Wanna Go to Bed',
  performer: 'Simple plan'
}

music.performer = 'Ed Sheeran'; // Is this allowed?

// Is this allowed?
music = {
  track: 'Boulevard of Broken Dreams',
  performer: 'Green Day'
}


