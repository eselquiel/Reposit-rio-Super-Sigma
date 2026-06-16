const prompt = require('prompt-sync')();

let nome;
let idade = 0;
let media = 0;
let quantMaiores = 0;

for (let i = 0; i < 5; i++) {
    nome = prompt('fale seu nome: ');
    idade = Number(prompt('fale sua idade: '));
    media += idade;
    if (idade >= 18) {
        quantMaiores += 1;
    }
}

media = media/5;

console.log('a média das idades é: ' + media);
console.log('a quantidade de pessoas maiores de idade é: ' + quantMaiores);