const prompt = require('prompt-sync')();

let maior = 0;

for (let i = 0; i < 5; i++) {
    let numero = Number(prompt('fale um número positivo: '));
    if (numero > maior) {
        maior = numero;
    };
}
console.log('o maior número é: ' + maior);