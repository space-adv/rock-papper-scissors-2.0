let humanScore = 0;
let computerScore = 0;
let result;

const para = document.querySelector("p");
const humanScoreDisplay = document.querySelector(".humanScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");

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
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;

        if (humanScore ===5 || computerScore === 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
        
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




/*function playGame() {

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
playGame(); */