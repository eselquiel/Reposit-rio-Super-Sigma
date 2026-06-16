const prompt = require("prompt-sync")();

let nomeCliente = prompt("Nome do cliente: ");
let nomeAtendente = prompt("Nome do atendente: ");
let tipoLanche = prompt("Tipo do lanche: ").toUpperCase();
let tamanho = prompt("Tamanho: ").toUpperCase();
let bebida = prompt("Bebida: ").toUpperCase();
let sobremesa = prompt("Sobremesa: ").toUpperCase();
let pagamento = prompt("Pagamento: ").toUpperCase();
let cupom = prompt("Cupom: ").toUpperCase();
let valorPago = Number(prompt("Valor pago: "));

let valorLanche = 0;

if (tipoLanche === "XIS") {
    if (tamanho === "P") valorLanche = 18;
    else if (tamanho === "M") valorLanche = 24;
    else if (tamanho === "G") valorLanche = 30;
} else if (tipoLanche === "HAMBURGUER") {
    if (tamanho === "P") valorLanche = 16;
    else if (tamanho === "M") valorLanche = 21;
    else if (tamanho === "G") valorLanche = 27;
} else if (tipoLanche === "HOTDOG") {
    if (tamanho === "P") valorLanche = 12;
    else if (tamanho === "M") valorLanche = 16;
    else if (tamanho === "G") valorLanche = 20;
}

let valorBebida = 0;

if (bebida === "AGUA") valorBebida = 5;
else if (bebida === "REFRI") valorBebida = 8;
else if (bebida === "SUCO") valorBebida = 10;

let valorSobremesa = 0;

if (sobremesa === "NENHUMA") valorSobremesa = 0;
else if (sobremesa === "SORVETE") valorSobremesa = 9;
else if (sobremesa === "PUDIM") valorSobremesa = 11;

let subtotal = valorLanche + valorBebida + valorSobremesa;

let desconto = 0;

if (cupom === "ALUNO10") desconto = subtotal * 0.10;
else if (cupom === "FRETEGRATIS") desconto = 5;

let taxa = 0;

if (pagamento === "CARTAO") taxa = subtotal * 0.03;

let totalFinal = subtotal - desconto + taxa;

let troco = valorPago - totalFinal;

console.log("\nCliente:", nomeCliente);
console.log("Atendente:", nomeAtendente);
console.log("Lanche:", tipoLanche, tamanho);
console.log("Bebida:", bebida);
console.log("Sobremesa:", sobremesa);
console.log("Subtotal:", subtotal.toFixed(2));
console.log("Cupom:", cupom);
console.log("Desconto:", desconto.toFixed(2));
console.log("Taxa:", taxa.toFixed(2));
console.log("Total:", totalFinal.toFixed(2));
console.log("Pago:", valorPago.toFixed(2));
console.log("Troco:", troco.toFixed(2));
console.log("Obrigado!");