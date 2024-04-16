const getComputerChoice = () => {
  let words = ["rock", "paper", "scissors"];
  let rand = Math.floor(Math.random() * words.length);
  return words[rand];
};

console.log(getComputerChoice())

const playRound = (playerSelection, computerSelection) => {
    let result;
    let computerScore;
    let playerScore;
    let playerSelection = playerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        result = "It's a draw!!";
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        result = "You Win! Rock breaks Scissors!";
        playerScore += 1;
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        result = "You lose! Paper covers rock!";
        computerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        result = "You Win! Paper covers Rock!";
        playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        result = "You Win! Paper cuts Scissors"
    }
}