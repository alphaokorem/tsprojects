import inquirer from "inquirer";

let num: number = Math.floor(Math.random() * 10 + 1);

console.log(
  "You have three chances. Choose your numbers wisely. Or risk it all on one single number to see how lucky you truely are."
);

const guess = await inquirer.prompt([
  {
    name: "firstNum",
    message: "First guess between 1 and 10: ",
    type: "number",
  },
  {
    name: "secondNum",
    message: "Second guess between 1 and 10: ",
    type: "number",
  },
  {
    name: "thirdNum",
    message: "Third guess between 1 and 10: ",
    type: "number",
  },
]);

if (
  guess.firstNum === num &&
  guess.secondNum === num &&
  guess.thirdNum === num
) {
  console.log("Perfection. Very lucky indeed.");
} else if (guess.firstNum === num && guess.secondNum === num) {
  console.log(
    "Both your first and second guesses were correct. But why would you choose the same number two times instead of three?"
  );
} else if (guess.secondNum === num && guess.thirdNum === num) {
  console.log(
    "Both your second and third guesses were correct. But why would you choose the same number two times instead of three?"
  );
} else if (guess.firstNum === num && guess.thirdNum === num) {
  console.log(
    "Both your first and third guesses were correct. But why would you choose the same number two times instead of three?"
  );
} else if (guess.firstNum === num) {
  console.log("First guess is correct.");
} else if (guess.secondNum === num) {
  console.log("Second guess is correct.");
} else if (guess.thirdNum === num) {
  console.log("Third guess is correct.");
} else {
  console.log("DEATH.");
}
