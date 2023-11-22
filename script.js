// Creating an Array for the options Player and PC Choose from
const choices = ["Rock", "Paper", "Scissors"];

//Creating the "Game" choosing one of the three randomly

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * choices.length);
    return(computerChoice, choices[computerChoice]);
}

console.log(getComputerChoice())