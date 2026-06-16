const prompt = require('prompt-sync')();

let exitInstance = false;

while (exitInstance == false) {
    let number = Number(prompt('Bem vindo ao menu: \n 1 - Diga olá \n 2 - Mostrar data atual \n 3 - Sair \n'));

    if (number === 1) {
        console.log('Olá!');
    } else if (number === 2) {
        console.log(new Date().toLocaleString());
    } else if (number === 3) {
        console.log('Saindo...');
        exitInstance = true;
    } else {
        console.log('Inválido.');
    }
}