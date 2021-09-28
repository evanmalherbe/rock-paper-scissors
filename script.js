// external script file

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1

    if (randomNum === 1) { return "rock"
    
    } else if (randomNum === 2) { return "paper" 
    
    } else {return "scissors"}

}

function playRound(playerSelection,computerSelection) {
    
    if (playerSelection == "rock" && computerSelection == "rock") {
        return("It's a tie! Rock against Rock"); 

    } else if (playerSelection == "rock" && computerSelection == "paper") {
        ++computerScore;
        return("You lose! Paper beats Rock");

    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerScore;
        return("You win! Rock beats Scissors");

    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return("It's a tie! Paper against Paper");

    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        ++computerScore;
        return("You lose! Scissors beats Paper");

    } else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerScore;
        return("You win! Paper beats Rock");

    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return("It's a tie! Scissors against Scissors");

    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        ++computerScore;
        return("You lose! Rock beats Scissors");

    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerScore;
        return("You win! Scissors beats Paper");

    } else return("I don't recognise your input.");

}

function game() {
    
    for (i = 1; i < 5; i++) {

        computerSelection = computerPlay();
        playerSelection = prompt("Let's play Rock, Paper, Scissors! Enter your choice:",'');

        alert(playRound(playerSelection.toLowerCase(), computerSelection));

        //console.log("Player Score = " + playerScore + ", Computer Score = " + computerScore);
        alert("Player Score = " + playerScore + ", Computer Score = " + computerScore);
    
    }

    if (playerScore > computerScore) {
        alert("You won the game! The score is: player - " + playerScore + " : computer - " + computerScore);

    } else if (playerScore < computerScore) {
        alert("You lost the game this time! The score is: computer - " + computerScore + " : player - " + playerScore); 

    } else { alert("The game is a tie! player - " + playerScore + " : computer - " + computerScore); }

}

    let playerScore = 0;
    let computerScore = 0;

    let computerSelection;
    let playerSelection;

game();