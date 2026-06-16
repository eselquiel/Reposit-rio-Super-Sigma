const prompt = require("prompt-sync")()

let numero = Number(prompt("informe um numero"));

if (numero % 2 == 0) {
    console.log("numero é par");
} else {
    console.log("numero nao é par mas é impar");
}