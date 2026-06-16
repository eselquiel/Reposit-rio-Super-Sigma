const prompt = require('prompt-sync')();

let C = Number(prompt("Informe a temperatura em graus Celsius: "));

let F = (C * 9/5) + 32;

console.log("A temperatura em graus Fahrenheit é: ", F);