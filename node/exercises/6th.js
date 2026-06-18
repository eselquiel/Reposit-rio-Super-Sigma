const prompt = require("prompt-sync")();

let tasks = [];

for(let i=0; i<5; i++) {
    tasks[i] = prompt("Indique uma tarefa: ")
}

tasks.shift();

console.log(tasks)