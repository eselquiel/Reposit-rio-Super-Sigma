const prompt = require('prompt-sync')();

let usuario = prompt("Digite o nome do usuário: ");

if (usuario === "admin") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}