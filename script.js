

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
}


function getHumanChoice() {
    let humanChoice = prompt("Choose your number!");
    console.log(humanChoice);
}

let humanScore = 0;
let computerScore = 0;