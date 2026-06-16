const prompt = require('prompt-sync')();

let velocidade = Number(prompt("Informe a velocidade do veículo em km/h: "));

if (velocidade < 60) {
    console.log("Velocidade permitida!");
} else if (velocidade >= 60 && velocidade < 80) {
    console.log("Multa leve!");
} else if (velocidade >= 80 && velocidade < 100) {
    console.log("Multa grave!");
}