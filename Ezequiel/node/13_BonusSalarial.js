const prompt = require('prompt-sync')();
 
let salario = parseFloat(prompt("Digite o salário do funcionário:"));
let bonus = 0;
 
// Calcula o bônus
if (salario <= 2000) {
    bonus = salario * 0.15;
} else if (salario <= 5000) {
    bonus = salario * 0.10;
} else {
    bonus = salario * 0.05;
}
 
let novoSalario = salario + bonus;
 
console.log("Bônus: R$ " + bonus.toFixed(2));
console.log("Novo salário: R$ " + novoSalario.toFixed(2));