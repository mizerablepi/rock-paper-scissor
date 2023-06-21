function getComputerChoice() {
  let num =Math.round(Math.random() * 100);
  if (num % 3 == 0) {
    return 'rock'
  } else if (num % 3 == 1) {
    return 'paper'
  } else {
    return 'scissor'
  }
}

function playRound(computerChoice, playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  
  if (computerChoice == playerChoice) {
    return 0.5;
  } else if (computerChoice == 'rock') {
    if (playerChoice == 'scissor') {
      return 0;
    } else {
      return 1;
    }
  } else if (computerChoice == 'paper') {
    if (playerChoice == 'rock') {
      return 0;
    } else {
      return 1;
    }
  } else if (computerChoice == 'scissor') {
    if (playerChoice == 'paper') {
      return 0;
    } else {
      return 1;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++){
    const computerChoice = getComputerChoice();
    result = playRound(computerChoice, playerChoice);
    playerScore += result;
    if (result == 1) {
      console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    } else if (result == 0) {
      console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
    } else {
      console.log('draw!')
    }
  }
  computerScore = 5 - playerScore;
  if (playerScore > computerScore) {
    console.log('player wins')
  } else if (playerScore < computerScore) {
    console.log('computer wins')
  } else {
    console.log('draw! no one wins')
  }
}

game()
