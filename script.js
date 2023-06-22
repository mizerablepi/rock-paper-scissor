let playerScore = 0;
let computerScore = 0;
let totalRounds = 0;

pscore = document.getElementById('pscore');
cscore = document.getElementById('cscore');
roundResultSpace = document.getElementById('round-result');
matchResultSpace = document.getElementById('match-result');
selection = document.getElementById('weapons-select');

selection.addEventListener('click', event => game(event.target.id));


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

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  result = playRound(computerChoice, playerChoice);
  
  if (result == 1) {
    roundResultSpace.textContent = `You win! Player(${playerChoice}) beats Computer(${computerChoice})`;
    totalRounds++;
  } else if (result == 0) {
    roundResultSpace.textContent = `You Lose! Computer(${computerChoice}) beats Player(${playerChoice})`;
    totalRounds++;
  } else {
    roundResultSpace.textContent = 'draw!';
  }

  playerScore += Math.floor(result);
  computerScore = totalRounds - playerScore;

  pscore.textContent = playerScore;
  cscore.textContent = computerScore;

  if (playerScore == 5 || computerScore == 5) {
    printWinner(playerScore, computerScore);
  } else {
    matchResultSpace.textContent = ' ';    
  }
}

function printWinner(pScore, cScore) {
  if (pScore > cScore) {
    matchResultSpace.style.color = 'green';
    matchResultSpace.textContent = 'player wins';
  } else if (pScore < cScore) {
    matchResultSpace.style.color = 'red';
    matchResultSpace.textContent = 'computer wins';
  } else {
    matchResultSpace.style.color = 'yellow';
    matchResultSpace.textContent = 'draw! no one wins';
  }
  playerScore = 0;
  computerScore = 0;
  totalRounds = 0;
}

