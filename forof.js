// for of loops over iterables such as arrays

const fruits = ['apples', 'oranges', 'berries']

for (let fruit of fruits) {
    if (fruit === 'oranges') {
        continue;
    }
    if (fruit === 'berries') {
        break;
    }
    console.log(`I love ${fruit}`);
}

// Getting the index 
for (const [index, fruit] of fruits.entries()) {
    console.log(`This is the element ${fruit} at the index ${index}`);
}