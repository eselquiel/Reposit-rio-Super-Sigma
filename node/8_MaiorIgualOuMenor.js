const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Informe o primeiro número: "));
let numero2 = Number(prompt("Informe o segundo número: "));

if (numero1 > numero2) {
    console.log("O número ", numero1, " é maior que ", numero2);
} else if (numero1 < numero2) {
    console.log("O número ", numero1, " é menor que ", numero2);
} else {
    console.log("Os números são iguais");
}