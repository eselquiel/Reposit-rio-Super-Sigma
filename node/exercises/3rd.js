const prompt = require("prompt-sync")();

let movies = []

for(let i=0; i<5; i++) {
    movies[i] = prompt("Informe o nome de um filme: ")
}

console.log(movies[0]);
console.log(movies[4]);
console.log(movies.length);