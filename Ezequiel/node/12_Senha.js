const prompt = require('prompt-sync')();
 
let senha = prompt("Digite a senha:");
 
if (senha === "1234") {
    console.log("Acesso liberado");
} else {
    console.log("Senha incorreta");
}