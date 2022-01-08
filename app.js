// TODO: Add hello code
function getMessage(name) {
  return "Hello, " + name + "...";
}

const message = getMessage("Jenny");
document.write(message);

// TODO: Add setTimeout code (Create an anonymous function)
setTimeout(() => {
  document.write("...Hello again!");
}, 2000);

//Game exercise tutorial: Calculate a card hand

//In Blackjack, the goal of the game is to win over the bank.
//You win by holding a score higher than the bank but less than or equal to 21.

let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo; // 15
let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

let cardThree = 7;
sum += cardThree;
if (sum > 21) {
  console.log("You lost");
}
console.log(`You have ${sum} points`);

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;

if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
  console.log("You win");
  process.exit(1); // exit program
} else {
  console.log("Bank wins");
}

//Game exercise tutorial: Build your business
//First, start your ice cream empire by encoding all the ice cream flavors.