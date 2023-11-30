const choices = ['Rock', 'Paper', 'Scissors'];
let computerChoice = undefined;
let playerChoice = undefined;

let result = document.getElementById("result");

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');





rock.addEventListener('click', () => {
    console.log('rockBtnClicked');
    playerChoice = 'Rock';
    determineWinner();
});
paper.addEventListener('click', () => {
    console.log('paperBtnClicked');
    playerChoice = 'Paper';
    determineWinner();
});
scissors.addEventListener('click', () => {
    console.log('scissorsBtnClicked');
    playerChoice = 'Scissors';
    determineWinner();
});




function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * choices.length);

    return(computerChoice, choices[computerChoice]);
}

function determineWinner() {

result.textContent = 'You Win!';
}
