const prompt = require('prompt-sync')();

let soma = 0;

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt('fale um número: '));
    soma += numero;
}
console.log('a soma dos números é: ' + soma);