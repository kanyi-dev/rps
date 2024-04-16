console.log("Rock Paper Scissors Game");

// Function to get the computer's choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// Function to determine the winner of a single round
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

// Function to play a 5-round game
const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt(
      "Enter your choice (rock, paper, or scissors):"
    );
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }

    console.log(result);
  }

  // Determine the overall winner
  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lose. Better luck next time!");
  } else {
    console.log("It's a tie! Play again to break the tie.");
  }
};

// Start the game
game();
