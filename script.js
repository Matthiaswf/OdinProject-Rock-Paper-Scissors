// An Array for the options Player and PC Choose from
const choices = ["Rock", "Paper", "Scissors"];

// Function for the player choosing

let player = prompt('Choose "Rock,Paper or Scissors?"')

// Function to conver player string to correct typecase

player = player.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());

// Console Logging the players choice after correction

console.log("You chose " + player + "!")

// Function for the "Game" choosing one of the three randomly

let computer = undefined;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * choices.length);
    computerChoice = (computerChoice, choices[computerChoice]);
    computer = computerChoice;
    return computer;
}

console.log("The computer chose " + getComputerChoice() + "!")

// Function for random Player choice

/*let player =  undefined;

function getPlayerChoice(){
    let playerChoice = Math.floor(Math.random() * choices.length);
    playerChoice = (playerChoice, choices[playerChoice]);
    player = playerChoice;
    return player;
}

console.log("You chose " + getPlayerChoice() + "!")
*/

// The function top determine the outcome and log the apropiate message. It also increments the scores.

const winMessage = "You Win!";
const lossMessage = "You Lose!";
const drawMessage = "It's a Draw!";
let resultMessage;

let playerScore = 0;
let computerScore = 0;

function determineWinner(){

    if ( computer === 'Rock' && player === 'Scissors'){
        resultMessage = lossMessage;
        computerScore +=1;
        console.log(resultMessage + " " + computer + " beats " + player + '!');
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
    else if ( computer === 'Paper' && player === 'Rock'){
        resultMessage = lossMessage;
        computerScore +=1;
        console.log(resultMessage + " " + computer + " beats " + player + '!');
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
    else if ( computer === 'Scissors' && player === 'Paper'){
        resultMessage = lossMessage;
        computerScore +=1;
        console.log(resultMessage + " " + computer + " beats " + player + '!');
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
    else if ( computer === 'Scissors' && player === 'Rock'){
        resultMessage = winMessage;
        playerScore +=1;
        console.log(resultMessage + " " + player + " beats " + computer + '!');
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
    else if ( computer === 'Rock' && player === 'Paper'){
        resultMessage = winMessage;
        playerScore +=1;
        console.log(resultMessage + " " + player + " beats " + computer + '!');
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
    else if ( computer === 'Paper' && player === 'Scissors'){
        resultMessage = winMessage;
        playerScore +=1;
        console.log(resultMessage + " " + player + " beats " + computer + '!');
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
    else if ( computer === 'Scissors' && player === 'Scissors'){
        resultMessage = drawMessage;
        console.log(resultMessage);
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
    else if ( computer === 'Rock' && player === 'Rock'){
        resultMessage = drawMessage;
        console.log(resultMessage);
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
    else if ( computer === 'Paper' && player === 'Paper'){
        resultMessage = drawMessage;
        console.log(resultMessage);
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }
}    
determineWinner();