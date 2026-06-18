const prompt = require("prompt-sync")();

let tasks = [];

for(let i=0; i<5; i++) {
    tasks[i] = prompt("Indique uma tarefa: ")
}

tasks.shift();

for(let i=0; i<tasks.length; i++) {
    console.log(tasks[i])
}