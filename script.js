let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

     if (computerChoice = 0){
        return "Rock";
     } else if (computerChoice = 1) {
        return "Paper";
     } else { 
        return "Scissors"; 
     }
     console.log(computerChoice);
}


function getHumanChoice() {
    let humanChoice = prompt("Choose between Rock, Paper or Scissors!");

    if (humanChoice = "Rock") {
        return "Your choice is Rock";
    } else if (humanChoice = "Paper.") {
        return "Your choice is Paper.";
    } else {
        return "Your choice is Scissors."
    }

    console.log(humanChoice);
}