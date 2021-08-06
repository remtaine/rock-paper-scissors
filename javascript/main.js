function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock"
            break
        case 1:
            return "Paper"
            break
        case 2:
            return "Scissors"
            break
    }
}
function OneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    let moves = ["rock", "paper", "scissors"]
    if (!moves.includes(playerSelection)) {
        return "You can't do that! Choose from rock, paper, or scissors!"
    }

    if (playerSelection === computerSelection) {
        return "It's a tie! You both played " + computerSelection + "!"
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "rock")) {
        return "You win! You played " + playerSelection + " which beats the computer's " + computerSelection + "!"
        
    }
    else {
        return "You lose! Computer played " + computerSelection + " which beats your " + playerSelection + "..."
    }
}


function game() {
    let playerMove = window.prompt("What's your move?");
    console.log(OneRound(playerMove, computerPlay()))
}

//main game!
for (i = 0; i < 5; i++) {
    game()
}