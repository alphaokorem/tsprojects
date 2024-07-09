import inquirer from "inquirer";
console.log("Welcome.");
let cash = 20000;
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
            choices: ["Check Balance", "Withdraw"]
        },
    ]);
    if (a.process === "Check Balance") {
        console.log(`Your current balance is ${cash}`);
    }
    else if (a.process === )
        ;
}
else {
    console.log("Wrong PIN.");
}
