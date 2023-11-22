// An Array for the options Player and PC Choose from
const choices = ["Rock", "Paper", "Scissors"];

// Function for the player choosing

let player = prompt("Rock,Paper or Scissors?")

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

// The function top determine the outcome and log the apropiate message

const winMessage = "You Win!";
const lossMessage = "You Lose!";
const drawMessage = "It's a Draw!";
let resultMessage;

function determineWinner(){

    if ( computer === 'Rock' && player === 'Scissors'){
        resultMessage = lossMessage;
        console.log(resultMessage + " " + computer + " beats " + player + '!');
    }
    else if ( computer === 'Paper' && player === 'Rock'){
        resultMessage = lossMessage;
        console.log(resultMessage + " " + computer + " beats " + player + '!');
    }
    else if ( computer === 'Scissors' && player === 'Paper'){
        resultMessage = lossMessage;
        console.log(resultMessage + " " + computer + " beats " + player + '!');
    }
    else if ( computer === 'Scissors' && player === 'Rock'){
        resultMessage = winMessage;
        console.log(resultMessage + " " + player + " beats " + computer + '!');
    }
    else if ( computer === 'Rock' && player === 'Paper'){
        resultMessage = winMessage;
        console.log(resultMessage + " " + player + " beats " + computer + '!');
    }
    else if ( computer === 'Paper' && player === 'Scissors'){
        resultMessage = winMessage;
        console.log(resultMessage + " " + player + " beats " + computer + '!');
    }
    else if ( computer === 'Scissors' && player === 'Scissors'){
        resultMessage = drawMessage;
        console.log(resultMessage);
    }
    else if ( computer === 'Rock' && player === 'Rock'){
        resultMessage = drawMessage;
        console.log(resultMessage);
    }
    else if ( computer === 'Paper' && player === 'Paper'){
        resultMessage = drawMessage;
        console.log(resultMessage);
    }
}    
determineWinner();