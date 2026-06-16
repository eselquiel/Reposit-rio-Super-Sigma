const prompt = require('prompt-sync')();

let preco = Number(prompt("Informe o preço do produto: "));

if (preco < 50) {
    console.log("Categoria: Básico");
} else if (preco >= 50 && preco < 150) {
    console.log("Categoria: Normal");
} else {
    console.log("Categoria: Premium");
}