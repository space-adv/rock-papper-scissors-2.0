

function getComputerChoise() {
    let computerChoise = Math.floor(Math.random() * 3);
    console.log(computerChoise);
}


function getHumanChoise() {
    let humanChoise = prompt("Choose your number!");
    console.log(humanChoise);
}

let humanScore = 0;
let computerScore = 0;