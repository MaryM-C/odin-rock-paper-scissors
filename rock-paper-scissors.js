"use strict";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const action = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * action.length);
    
    return action[randomNumber];
}

function whoWins(playerAction, computerAction) {
    let winningStatement = "";
    const actions = {
        rock : {weakAgainst: "paper", strongAgainst: "scissors"},
        paper: {weakAgainst:"scissors", strongAgainst:"rock"},
        scissors:{weakAgainst:"rock", strongAgainst:"paper"}
    }

    if (actions[playerAction].weakAgainst === computerAction) {
        winningStatement =  "You Lose! " + computerAction + " beats " + playerAction;
        computerScore +=1;
    }

    if (actions[playerAction].strongAgainst === computerAction) {
        winningStatement =  "You Win! " +  playerAction + " beats " + computerAction;
        playerScore+=1;
    }

    return winningStatement;
}

function displayScores() {
    return "You: " + playerScore + " Computer: " + computerScore;
}

function displayFinalWinner(playerScore, computerScore) {
    if(playerScore == computerScore) {
        console.log("Nobody Wins!");
    } else if (playerScore > computerScore) {
       console.log("Player wins the Game!");
    } else {
        console.log("Computer wins the Game!")
    }
}
function playRound(playerAction, computerAction) {
    if (playerAction.toLowerCase() == computerAction) {
        return ("It's a Draw");
    } else {
        return whoWins(playerAction, computerAction);
    }
}
function playGame() {
    for (let round = 0; round < 5; round++) {
        console.log(playRound(prompt(), getComputerChoice()));   
        console.log(displayScores());
    }

    displayFinalWinner(playerScore, computerScore);
}

playGame();
