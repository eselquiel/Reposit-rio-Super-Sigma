let frutas = [ "Maçã", "Laranja", "Melancia" ];

frutas.pop(); // Remove o último item
frutas.push("Limão"); // Adiciona um item a tabela
frutas.unshift("Melão"); // Troca o primeiro item da tabela para outro
frutas.shift(); // Reverte o primeiro item para o estado antigo
frutas.splice(2,1); // Remove um item specífico de acordo com as cordenadas ditas

console.log(frutas);

if (frutas.includes("Laranja")) {
    console.log("Encontrado")
} else {
    console.log("Não encontrado")
}