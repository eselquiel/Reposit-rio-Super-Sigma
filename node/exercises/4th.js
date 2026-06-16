const prompt = require("prompt-sync")();

let usernames = []

for(let i=0; i<5; i++) {
    usernames[i] = prompt("Informe um nome de usuário: ")
}

for(let i=0; i<usernames.length; i++) {
    console.log(usernames[i])
}

usernames.push(prompt("Informe mais um nome: "));

for(let i=0; i<usernames.length; i++) {
    console.log(usernames[i])
}