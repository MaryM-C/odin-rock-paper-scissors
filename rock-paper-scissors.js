"use strict";

let playerScore = 0;
let computerScore = 0;
let roundNo = 1;
let winnerHeader= document.getElementById('winningStatement');

const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const imgPlayerAction = document.getElementById("img-chosen-action");

function getComputerChoice() {
    const action = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * action.length);
    
    return action[randomNumber];
}

function whoWins(playerAction, computerAction) {
    const actions = {
        Rock : {weakAgainst: "Paper", strongAgainst: "Scissors"},
        Paper: {weakAgainst:"Scissors", strongAgainst:"Rock"},
        Scissors: {weakAgainst:"Rock", strongAgainst:"Paper"}
    }

    if (actions[playerAction].weakAgainst === computerAction) {
        winnerHeader.textContent = "You Lose! " + playerAction + " loses against " + computerAction ;
        computerScore ++;
    }

    if (actions[playerAction].strongAgainst === computerAction) {
        winnerHeader.textContent =  "You Win! " +  playerAction + " beats " + computerAction;
        playerScore++;
    }
}

function displayScores() {
    document.getElementById('scores').textContent = playerScore + " - " + computerScore;
}

function displayRoundNo() {
    document.getElementById('round').textContent = "Round " + roundNo;
}

function playRound(playerAction) {
    const computerAction = getComputerChoice();
    roundNo++;

    if (playerAction == computerAction) {
        winnerHeader.textContent = "It's a draw."
    } else {
        whoWins(playerAction, computerAction);
    }

    displayScores();
    displayRoundNo();
}


btnRock.addEventListener('click', function() {
    imgPlayerAction.src = "./assets/rock.png";
    playRound(btnRock.value);
});
btnPaper.addEventListener('click', function() {
    imgPlayerAction.src = "./assets/paper.png";
    playRound(btnPaper.value);
});
btnScissors.addEventListener('click', function() {
    imgPlayerAction.src = "./assets/scissors.png";
    playRound(btnScissors.value);
});