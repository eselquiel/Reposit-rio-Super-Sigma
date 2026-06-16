const prompt = require("prompt-sync")();

let numbers = [];

for(let i=0; i<6; i++) {
    numbers[i] = Number(prompt("Informe um número: "))
}

for(let i=0; i<numbers.length; i++) {
    if (numbers[i] > 0) {
        console.log(numbers[i])
    }
}