const prompt = require("prompt-sync")();

let price = Number(prompt("informe o preço: "));
let discount = price * 0.10; // 10% discount

if (price > 100) {
    price = price - discount;
    console.log("O preço com desconto é: ", price);
} else {
    console.log("O preço é: ", price, " sem desconto");
}