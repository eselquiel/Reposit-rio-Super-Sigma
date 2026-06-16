const prompt = require('prompt-sync')();

let hasTypedZero = false;
let soma = 0;

while (hasTypedZero == false) {
    let numero = Number(prompt('fale vários números até zero: '));
    if (numero == 0) {
        hasTypedZero = true;
    } else {
        soma += numero;
    }
}
console.log('a soma dos números é: ' + soma);