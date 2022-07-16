//Computer randomly slecets rock, paper or scissors
function computerPlay(){
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    } 
}

//This function checks either user or computer wins
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie, try again!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWin++;
            return "Computer has won! Current score: " + computerWin;
        } else {
            userWin++;
            return "You have won! Current score: " + userWin;
            }    
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerWin++;
            return "Computer has won! Current score: " + computerWin;        
        } else {
            userWin++;
            return "You have won! Current score: " + userWin;
            }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWin++;
            return "Computer has won! Current score: " + computerWin;
        } else {
            userWin++;
            return "You have won! Current score: " + userWin;
        }
    } else {
        alert("Invalid input! Please enter rock, paper or scissors.");
        rounds += 1;
        return "Please try again.";
    }
}

let computerWin = 0; 
let userWin = 0;
let rounds = 0;

function winnerIs(){
    if (userWin > computerWin){
        return "User has won with total score: " + userWin;
    } else if (userWin < computerWin){
        return "Computer has won with total score: " + computerWin;
    } else {
        return "It's a draw!"
    }
}

//main game function
function game(){
    for (let i = 0; i < 5; i++){
        rounds = (i + 1);
        console.log("Round: " + rounds);
        const playerInput = window.prompt("Choose rock, paper or scissors").toLowerCase();
        if (playerInput === null) {
            console.log("You've quit the game!");
            return playerInput;
        }
        const computerInput = computerPlay();
        console.log("User chose: " + playerInput);
        console.log("Computer chose: " + computerInput);
        console.log(playRound(playerInput, computerInput));
        if (playerInput === computerInput){
            i--;
        }
    }
    console.log("The winner is: " + winnerIs());
}

//Calling the game function
game();