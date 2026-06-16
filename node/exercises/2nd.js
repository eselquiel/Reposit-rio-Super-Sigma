const prompt = require("prompt-sync")();

let numbers = [];

for(let i=0; i<10; i++) {
    numbers[i] = Number(prompt("Informe um numero: "))
}

for(let i=0; i<numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}