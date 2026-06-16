const prompt = require("prompt-sync")();

let cities = []

for(let i=0; i<5; i++) {
    cities[i] = prompt("Informe uma cidade: ")
}

for(let i=0; i<cities.length; i++) {
    console.log(cities[i])
}

cities.push(prompt("Informe mais uma cidade: "));

for(let i=0; i<cities.length; i++) {
    console.log(cities[i])
}