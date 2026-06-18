const prompt = require("prompt-sync")();

let movies = []

for(let i=0; i<5; i++) {
    movies[i] = prompt("Informe o nome de um filme: ")
}

let pos = Number(prompt("Agora diga a posição do filme que deseja mudar: "));
let newMovie = prompt("Altere o nome desse filme: ");

movies.splice(pos, 1);
movies.splice(pos, 0, newMovie);

for(let i=0; i<movies.length; i++) {
    console.log(movies[i])
}