import inquirer from "inquirer";

const a = await inquirer.prompt([
  { message: "Enter First Number: ", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number: ", type: "number", name: "SecondNumber" },
  {
    message: "Select Operation: ",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (a.Operator === "Addition") {
  console.log(a.FirstNumber + a.SecondNumber);
} else if (a.Operator === "Subtraction") {
  console.log(a.FirstNumber - a.SecondNumber);
} else if (a.Operator === "Multiplication") {
  console.log(a.FirstNumber * a.SecondNumber);
} else if (a.Operator === "Division") {
  console.log(a.FirstNumber / a.SecondNumber);
} else {
  console.log("Give valid values.");
}