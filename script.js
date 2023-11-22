// An Array for the options Player and PC Choose from
const choices = ["Rock", "Paper", "Scissors"];

// Function for the "Game" choosing one of the three randomly

let computer = undefined;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * choices.length);
    computerChoice = (computerChoice, choices[computerChoice]);
    computer = computerChoice;
    return computer;
}

console.log(getComputerChoice())

// The function for the players choice

let player =  undefined;

function getPlayerChoice(){
    let playerChoice = Math.floor(Math.random() * choices.length);
    playerChoice = (playerChoice, choices[playerChoice]);
    player = playerChoice;
    return player;
}

console.log(getPlayerChoice())

// The function top determine the outcome and log the apropiate message

const winMessage = "You Win!";
const lossMessage = "You Lose!";
const drawMessage = "It's a Draw!";
let resultMessage;

function determineWinner(){

    if ( computer === 'Rock' && player === 'Scissors'){
        resultMessage = lossMessage;
        console.log(resultMessage);
    }
}

determineWinner()