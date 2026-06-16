const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt('fale uma nota: '));
    soma += numero;
}
console.log('a média dos números é: ' + (soma / 5));