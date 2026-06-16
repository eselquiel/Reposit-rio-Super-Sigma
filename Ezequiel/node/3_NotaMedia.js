const prompt = require("prompt-sync")();

let nota1 = Number(prompt("informe a primeira nota: "));
let nota2 = Number(prompt("informe a segunda nota: "));
let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}