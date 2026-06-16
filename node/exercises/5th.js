const prompt = require("prompt-sync")();

let products = [];

for(let i=0; i<5; i++) {
    products[i] = prompt("Informe um produto: ")
}

products.pop();

for(let i=0; i<products.length; i++) {
    console.log(products[i])
}