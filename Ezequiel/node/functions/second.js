const prompt = require("prompt-sync")();

function dobro(a,b) {
    return a * b
}

let n1 = Number(prompt("informe o n1: "));
let n2 = Number(prompt("informe o n2: "));

let recebe = dobro(n1,n2);
console.log(recebe);