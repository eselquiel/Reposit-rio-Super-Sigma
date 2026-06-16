const prompt = require("prompt-sync")();

let horario = Number(prompt("Informe o horario"));
let texto = (prompt("Informe o horario"));
 
if((horario >=8) && (horario <=18)){
    console.log("Horario comercial");
}
else{
    console.log("estabelecimento fechado");
}
