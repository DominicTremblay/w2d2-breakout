// Array Destructuring

// Destructuring the array the conventional way
const anArray = [1, 2, 3];
const a = anArray[0];
const b = anArray[1];
const c = anArray[2];

// With ES6 Destructuring

const [a, b, c] = [1, 2, 3];
// a = 1, b = 2, c = 3

// Default Values

const [a=10, b=20, c = 30] = [100, 200]

// With Rest Operator

const [e=1, f=2, g=3, ...h] = [1,2,3,4,5,6,7]

// Swaping Values
let a = 25, b = 50;
[a, b] = [b, a]; 
