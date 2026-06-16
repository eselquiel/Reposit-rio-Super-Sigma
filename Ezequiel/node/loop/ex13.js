const prompt = require('prompt-sync')();

let candidatoA = 0;
let candidatoB = 0;
let candidatoC = 0;
let voto = 1;

while (voto != 0) {
    voto = Number(prompt('Digite a categoria de número do candidato: \n 1 - Candidato A \n 2 - Candidato B \n 3 - Candidato C \n 0 - finalizar \n'));

    if (voto === 1) {
        candidatoA++;
    } else if (voto === 2) {
        candidatoB++;
    } else if (voto === 3) {
        candidatoC++;
    } else if (voto !== 0) {
        console.log('Encerrando voto...');
    }   
}

console.log(`Candidato A: ${candidatoA}`);
console.log(`Candidato B: ${candidatoB}`);
console.log(`Candidato C: ${candidatoC}`);

console.log('Os votos totais foram ', (candidatoA + candidatoB + candidatoC));