# W2D3 - Breakout - ES6 Syntax

- "ES6" => 6th Edition of the ECMA-262 standard
- You might see "ES2015" or "ECMAScript 2015" => Year of the standard
- ES6 introduces a lot of new features because ES5 was released in 1999
- We now have yearly releases with ES7 (ES2016) and ES8 (ES2017)

| Version   | Standard            |
| :-------- | :------------------ |
| Version 5 | ECMAScript 5 (2009) |
| Version 6 | ECMAScript 2015     |
| Version 7 | ECMAScript 2016     |
| Version 8 | ECMAScript 2017     |
| Version 9 | ECMAScript 2018     |

## What we're going to cover:

1. var vs let vs const
2. Arrow functions
3. String literals
4. ...rest and ...spread operators
5. for of
6. Destructuring

# var vs let vs const

- var is function scope
- const and let are block scope
- Anything inside {} is a block
- const cannot be reassigned

[Block Scope](./block_scope.js)

# Arrow functions

- More concise
- Arrow fcts can have an implicit return
- Doesn't rebind the 'this' keyword
- Cannot be named

[Arrow Functions](./arrow_functions.js)

# String Literals

- use \${} to insert JS expressions into strings

[String Literals](./string_literals.js)

# Rest and Spread operators

- Spread is used on the righ side of an assignment
- Rest is used on the left side of an assignment

[Rest and Spread](./rest_spread.js)

# for of

- Loop over iterables such as arrays and stringss
- Possible to use `break` and `continue`

### Get Access to the Index

- With for of, there is no predefined access to the index in the array
- If we need the index, create a counter variable or loop over the iterator

### Looping over the iterator

- now we get the index and the element

for (const [index, fruit] of fruits.entries()) {
console.log(`This is the element ${fruit} at the index ${index}`);
}

[For Of Loop](./forof.js)

## Destructuring

[Array Destructuring](./array_destructuring.js)
[Object Destructuring](./object_destructuring)
