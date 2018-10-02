// Object Destructuring


// Destructuring the object the conventional way
const anObj = {a:1, b:2, c: 3};

const a = anObj.a;
const b = anObj.b;
const c = anObj.c;

// With ES6 Destructuring

const {a: a, b: b, c: c} = anObj;
//or 
const {a, b, c} = anObj;

// Different key names
const {a: x, b: y, c: z} = anObj;
// With Default values
const {
        a: x = 10, 
        b: y = 20, 
        c: z = 30, 
        d: w = 40} = anObj;

x=1 y=2 z=3 w=40


