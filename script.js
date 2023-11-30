const choices = ['Rock', 'Paper', 'Scissors'];

let computerChoice = undefined;
let playerChoice = undefined;
let roundCount = 0;

let result = document.getElementById("result");
let round  = document.getElementById("round");

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
    let randomChoice = Math.floor(Math.random() * choices.length);
    randomChoice = (randomChoice, choices[randomChoice]);
    computerChoice = randomChoice;

    return computerChoice;
}

function determineWinner() {
    getComputerChoice();
    console.log(computerChoice);
    if( playerChoice === computerChoice) {
        result.textContent = 'The computer chose ' + computerChoice + "! It's a Draw!";
        roundCount++;
        round.textContent = 'Rounds:' + roundCount;
    }

    else if ( 
          playerChoice === 'Rock' && computerChoice === 'Scissors'
    ||    playerChoice === 'Paper' && computerChoice === 'Rock'  
    ||    playerChoice === 'Scissors' && computerChoice === 'Paper') {

        result.textContent = 'The computer chose ' + computerChoice + "! You Win!";
        roundCount++;
        round.textContent = 'Rounds:' + roundCount;
        }

    else if ( 
            computerChoice === 'Rock' && playerChoice === 'Scissors'
      ||    computerChoice === 'Paper' && playerChoice === 'Rock'  
      ||    computerChoice === 'Scissors' && playerChoice === 'Paper') {
  
          result.textContent = 'The computer chose ' + computerChoice + "! You Lose!";
          roundCount++;
          round.textContent = 'Rounds:' + roundCount;
          }
}
