// external script file

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1

    if (randomNum === 1) { return "rock"
    
    } else if (randomNum === 2) { return "paper" }
    
    else {return "scissors"}

}

function playRound(playerSelection,computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "rock") {
        return("It's a tie! Rock against Rock"); 
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return("You lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return("You win! Rock beats Scissors");

    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return("It's a tie! Paper against Paper");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return("You lose! Scissors beats Paper");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return("You win! Paper beats Rock");

    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return("It's a tie! Scissors against Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return("You lose! Rock beats Scissors");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return("You win! Scissors beats Paper");
    }

}

let playerSelection = "ROck";
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));


