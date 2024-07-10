import inquirer from "inquirer";
let list = [];
let a = await inquirer.prompt([
    {
        name: "listname",
        message: "What would be the name of to-do list?",
        type: "input",
    },
    { name: "list", message: "Make List: ", type: "input" },
    { name: "confirmation", message: "Is that all?", type: "confirm" },
]);
list.push(a.list);
while (a.confirmation == false) {
    let b = await inquirer.prompt([
        { name: "list", message: "Add to list: ", type: "input" },
        { name: "confirmation", message: "Is that all?", type: "confirm" },
    ]);
    a.confirmation = b.confirmation;
    list.push(b.list);
}
console.log("\n");
console.log(`   ***${a.listname}***   `);
list.forEach((s) => {
    console.log(s);
});
