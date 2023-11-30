const choices = ['rock', 'paper', 'scissors'];
let computerChoice = undefined;

let result = document.getElementById("result");

const rock = document.querySelector('#rock');
rock.addEventListener('click', determineWinner);

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * choices.length);
    return(computerChoice, choices[computerChoice]);
}
function determineWinner() {
result.textContent = 'You Win!';
}
