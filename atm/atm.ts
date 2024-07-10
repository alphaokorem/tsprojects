#! usr/bin/env node

import inquirer from "inquirer";

let cash = 20000;
console.log(`Welcome.\nYour current balance is ${cash}.`);
let input_pin = await inquirer.prompt({
  name: "pin",
  message: "Please enter PIN.",
  type: "number",
});
let my_pin = 24681133;
if (input_pin.pin === my_pin) {
  console.log("Your PIN is verified.");
  const a = await inquirer.prompt([
    {
      message: "What do you wish to do?",
      type: "list",
      name: "process",
      choices: ["Check Balance", "Withdraw"],
    },
  ]);
  if (a.process === "Check Balance") {
    console.log(`Your current balance is ${cash} $.`);
  } else if (a.process === "Withdraw") {
    const b = await inquirer.prompt({
      name: "amount",
      message: "Enter Amount: ",
      type: "number",
    });
    if (b.amount <= cash) {
      let new_Cash = cash - b.amount;
      console.log(`You withdrew ${b.amount} $.\nYour current balance is ${new_Cash} $`);
    } else {
      console.log(`Your current balance is ${cash}.\n${b.amount} exceeds the limit of the current balanace.\nPlease enter a valid amount.`);
    }
  }
} else {
  console.log("Wrong PIN.");
}
