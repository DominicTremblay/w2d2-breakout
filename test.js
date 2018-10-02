// loop over array :
// 1. for (var i = 0)
// 2. for of 
// 3. for each

// loop over an object
// 1. for in

var car1 = {
    make: "Toyota",
    model: "echo",
    year: 2001
}

var car2 = {
    make: "Toyota",
    model: "Camry",
    year: 2003
}

for (var carProperty of Object.keys(car2)) {
    console.log(car2[carProperty])
}



// var cars = [car1, car2]

// for (var carObj of cars) {

//     for (var carProperty in carObj) {
//         console.log(carProperty, carObj[carProperty])
//     }
// }