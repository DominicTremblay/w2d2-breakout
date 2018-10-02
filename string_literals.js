// String Literals

const character = {
    firstName: "Jack",
    lastName: "Sparrow",
    movie: "Pirates of the Carribean",
    actor: "Johnny Depp"
}
// ES5
const outputStr = character.firstName + ' ' + character.lastName + 
                  ' is the main character in the movie ' + 
                  character.movie + ' portrayed by ' + character. actor+ '.';
            
// ES6
...

let outpuStr = `${character.firstName} ${character.lastName} is the main character`

