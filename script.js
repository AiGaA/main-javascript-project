const selectionButtons = document.querySelectorAll('button')
const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const computerResultDisplay = document.getElementById('computer-score')
const userResultDisplay = document.getElementById('user-score')
const roundsDisplay = document.getElementById('play-round')
let userChoice
let computerChoice
let computerWin = 0; 
let userWin = 0;
let rounds = 0;

selectionButtons.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', e => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        computerPlay()
        computerChoiceDisplay.innerHTML = computerChoice
        playRound(userChoice, computerChoice)
        roundsDisplay.innerHTML = rounds
    })
})

//Computer randomly selecets rock, paper or scissors
function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerChoice = "rock";
    } else if (randomNumber == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
}

//This function checks either user or computer wins
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        rounds--;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWin++;
        } else {
            userWin++;
            }    
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerWin++;
        } else {
            userWin++;
            }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWin++;
        } else {
            userWin++;
        }
    }
    rounds++;
    computerResultDisplay.innerHTML = computerWin
    userResultDisplay.innerHTML = userWin
    winnerIs()
}

function winnerIs(){
    if (userWin == 5 ){
        window.alert("Congratulations! User has won with total score: " + userWin);
    } else if (computerWin == 5){
        window.alert("Congratulations! Computer has won with total score: " + computerWin);
    } 
}
