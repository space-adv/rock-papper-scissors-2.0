let humanScore = 0;
let computerScore = 0;
let result;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
    console.log(computerChoice);
}


function getHumanChoice() {
    let humanChoice = prompt("Choose between Rock, Paper or Scissors!");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        humanChoice = "rock";
        return "rock";
    } else if (humanChoice === "paper") {
        humanChoice = "paper";
        return "paper";
    } else if (humanChoice === "scissors") {
        humanChoice = "scissors";
        return "scissors";
    } else {
        humanChoice = prompt("You need to choose either Rock, Paper or Scissors.");
        return prompt("You need to choose either Rock, Paper or Scissors.");
    }
}

    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice);
        console.log(computerChoice);

        if (humanChoice === computerChoice) {
            result = "It's a draw.";
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            result = "The computer wins.";
        } else {
            result = "The player wins!";
        }
        console.log(result);

        if (result === "The computer wins.") {
            computerScore += 1;
        } else if (result === "The player wins!") {
            humanScore += 1;
        } else {
            return "It's a tie."
        }
        console.log(computerScore);
        console.log(humanScore);
    }


function playGame() {

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    if (computerScore > humanScore){
        alert("The computer won.");
    } else if (computerScore < humanScore) {
        alert("Congrats you've won!");
    } else {
        alert("It's a tie.");
    }
}
playGame();