let humanScore = 0;
let computerScore = 0;
let result;

let para = document.querySelector("p");
let humanScoreDisplay = document.querySelector(".humanScoreDisplay");
let computerScoreDisplay = document.querySelector(".computerScoreDisplay");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
    
}
 
    function playRound(computerChoice, humanChoice) {
        computerChoice = getComputerChoice();
       
        console.log(humanChoice);
        console.log(computerChoice);

        if (humanChoice === computerChoice) {
            result = "It's a draw.";
            para.textContent = `It's a tie, you both choose ${computerChoice}`;
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            result = "The computer wins.";
            para.textContent = `You lose  ${computerChoice} beats ${humanChoice}`;
            computerScore ++;
        } else {
            result = "The player wins!";
            para.textContent = `You win  ${humanChoice} beats ${computerChoice}`;
            humanScore ++;
        }
        console.log(result);
        console.log(humanScore);
        console.log(computerScore);
        humanScoreDisplay.textContent = `Human Score ${humanScore}`;
        computerScoreDisplay.textContent = `Computer Score ${computerScore}`;

        if (humanScore ===5 || computerScore === 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true; 
        }
        ;
    };
        const rockButton = document.querySelector("#rock");
        const paperButton = document.querySelector("#paper");
        const scissorsButton = document.querySelector("#scissors");

        rockButton.addEventListener("click", () => {
            playRound(getComputerChoice(), "rock");
        });
    
        paperButton.addEventListener("click", () => {
            playRound(getComputerChoice(), "paper");
        });

        scissorsButton.addEventListener("click", () => {
            playRound(getComputerChoice(), "scissors");
        });
 

    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        para.textContent = "";
        humanScoreDisplay.textContent = "";
        computerScoreDisplay.textContent = "";
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false
    });