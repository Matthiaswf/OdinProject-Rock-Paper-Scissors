let result = document.getElementById("result");

const rock = document.querySelector('#rock');
rock.addEventListener('click', determineWinner);
    
function determineWinner() {
result.textContent = 'You Win!';
}
