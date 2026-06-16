const prompt = require('prompt-sync')();

let grantAcess = false;

while (grantAcess == false) {
    let senha = prompt('digite a senha: ');
    if (senha == '1234') {
        grantAcess = true;
        console.log('Acesso concedido!');
    } else {
        console.log('Senha incorreta. Tente novamente.');
    }
}