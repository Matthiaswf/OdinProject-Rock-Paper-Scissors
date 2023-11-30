const choices = ["Rock", "Paper", "Scissors"];
let player = undefined;
let computer = undefined;
const winMessage = "You Win!";
const lossMessage = "You Lose!";
const drawMessage = "It's a Draw!";
let resultMessage;
let playerScore = 0;
let computerScore = 0;

const  rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    player = "Rock";
    play();
});


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * choices.length);
    computerChoice = (computerChoice, choices[computerChoice]);
    computer = computerChoice;
    return computer;
}

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

function play() {
    getComputerChoice();
    console.log("The computer chose " + getComputerChoice() + "!");
    determineWinner();
}
