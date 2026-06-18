const prompt = require("prompt-sync")();

let cities = []

for(let i=0; i<5; i++) {
    cities[i] = prompt("Informe uma cidade: ")
}

cities.unshift(prompt("Informe mais uma cidade: "));

console.log(cities)