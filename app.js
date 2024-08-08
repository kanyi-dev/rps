const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else if (choice === 2) {
    return "Scissors";
  }
};
console.log(getComputerChoice());

const getHumanChoice = (userInput) => {
  userInput = prompt("Make your Choice: ");
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    return "Error! The input is not valid.";
  }
};

console.log(getHumanChoice());
